import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const uploadFolder = "balprada-site";
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

function readEnvFile(source) {
  return Object.fromEntries(
    source
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const [key, ...value] = line.split("=");
        return [key.trim(), value.join("=").trim().replace(/^['"]|['"]$/g, "")];
      }),
  );
}

async function findImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return findImages(fullPath);
      return imageExtensions.has(path.extname(entry.name).toLowerCase()) ? [fullPath] : [];
    }),
  );
  return paths.flat();
}

function createSignature(parameters, apiSecret) {
  const source = Object.entries(parameters)
    .filter(([, value]) => value !== undefined && value !== "")
    .sort(([first], [second]) => first.localeCompare(second))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return createHash("sha1").update(`${source}${apiSecret}`).digest("hex");
}

function createPublicId(relativePath) {
  const parsed = path.parse(relativePath);
  const safePath = path.join(parsed.dir, `${parsed.name}--${parsed.ext.slice(1)}`);
  return path.posix.join(uploadFolder, safePath.split(path.sep).join("/"));
}

async function uploadImage(filePath, relativePath, credentials) {
  const timestamp = Math.floor(Date.now() / 1000);
  const publicId = createPublicId(relativePath);
  const signatureParameters = { invalidate: "true", overwrite: "true", public_id: publicId, timestamp };
  const file = await readFile(filePath);
  const form = new FormData();

  Object.entries(signatureParameters).forEach(([key, value]) => form.append(key, String(value)));
  form.append("api_key", credentials.apiKey);
  form.append("signature", createSignature(signatureParameters, credentials.apiSecret));
  form.append("file", new Blob([file]), path.basename(filePath));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${credentials.cloudName}/image/upload`, {
    method: "POST",
    body: form,
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error?.message || `Cloudinary returned ${response.status}`);
  }

  return { publicId: result.public_id, secureUrl: result.secure_url };
}

const env = readEnvFile(await readFile(path.join(projectRoot, ".env"), "utf8"));
const credentials = {
  cloudName: env.CLOUDINARY_CLOUD_NAME,
  apiKey: env.CLOUDINARY_API_KEY,
  apiSecret: env.CLOUDINARY_API_SECRET,
};

if (Object.values(credentials).some((value) => !value)) {
  throw new Error("Cloudinary credentials are missing from .env.");
}

const publicDirectory = path.join(projectRoot, "public");
const files = [...(await findImages(publicDirectory)), path.join(projectRoot, "src", "app", "icon.png")];
const manifest = {};
const concurrency = 5;
let nextIndex = 0;

async function uploadNext() {
  while (nextIndex < files.length) {
    const index = nextIndex++;
    const filePath = files[index];
    const relativePath = path.relative(projectRoot, filePath);
    const result = await uploadImage(filePath, relativePath, credentials);
    manifest[`/${relativePath.replace(/^public[\\/]/, "").split(path.sep).join("/")}`] = result;
    console.log(`Uploaded ${index + 1}/${files.length}: ${relativePath}`);
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, files.length) }, uploadNext));

await writeFile(
  path.join(projectRoot, "cloudinary-upload-manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(`Uploaded ${files.length} assets. Manifest: cloudinary-upload-manifest.json`);
