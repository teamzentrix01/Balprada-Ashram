import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { galleryImages, products } from "../data";

export const metadata = {
  title: "Ayurvedic Products | Balprada Ayurvedic Hospital",
  description:
    "Shop authentic in-house herbal and Ayurvedic products from Balprada Ayurvedic Hospital, trusted for quality since 1991.",
  keywords: [
    "Balprada Ayurvedic Products",
    "Herbal Medicines",
    "In-House Ayurvedic Products",
    "Ayurvedic Medicine Online",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/products" },
  openGraph: {
    title: "Ayurvedic Products | Balprada Ayurvedic Hospital",
    description:
      "Authentic in-house herbal and Ayurvedic products, trusted for quality since 1991.",
    url: "https://www.balpradaindia.com/products",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Ayurvedic Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Products | Balprada Ayurvedic Hospital",
    description: "Authentic in-house herbal and Ayurvedic products.",
    images: ["/icon.png"],
  },
};
export default function ProductsPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Herbal Products"
        title="Balprada Enterprises product inquiries"
        text="Explore herbal food, wellness and traditional product categories connected with Balprada Enterprises."
        image={galleryImages[5]}
      />
      <section className="section products-grid">
        {products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.slug}>
            <SectionHeading
              eyebrow={product.category}
              title={product.title}
              text={product.text}
              level={3}
            />
            <strong>View product</strong>
          </Link>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
