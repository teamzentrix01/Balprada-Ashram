import BlogPostPage from "./BlogPostPage";

const SITE_URL = "https://www.balpradaindia.com";
const OG_IMAGE = `${SITE_URL}/icon.png`; // apni actual logo/OG image ka path yahan daalo

export const metadata = {
  title:
    "Balprada Ayurvedic Hospital Blog | Ayurveda Tips, Treatments & Health Insights",

  description:
    "Explore expert Ayurvedic health blogs from Balprada Ayurvedic Hospital, Bilari, Moradabad. Get trusted guidance on Ayurvedic treatments, lifestyle, diet, and wellness from experienced practitioners.",

  keywords:
    "Balprada Ayurvedic Hospital blog, Ayurvedic hospital Moradabad, Ayurvedic treatment Bilari, Ayurveda doctor Moradabad, Ayurvedic hospital Rampur, Ayurvedic health tips, natural treatment India, Ayurveda lifestyle and diet, patient care tips, health awareness articles",

  alternates: {
    canonical: `${SITE_URL}/blog`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "Balprada Ayurvedic Hospital",
    title: "Balprada Ayurvedic Hospital Blog | Ayurveda Tips & Health Insights",
    description:
      "Read expert blogs from Balprada Ayurvedic Hospital on Ayurvedic treatments, natural healing, diet, and overall wellness. Trusted guidance for a healthier life.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Balprada Ayurvedic Hospital Blog – Ayurveda & Wellness Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Balprada Ayurvedic Hospital Blog | Ayurveda & Wellness Insights",
    description:
      "Stay informed with expert Ayurvedic blogs from Balprada Ayurvedic Hospital. Learn about treatments, prevention, and wellness tips from experienced practitioners.",
    images: [OG_IMAGE],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogPostPage />
    </div>
  );
}