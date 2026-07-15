import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { galleryImages, products } from "../data";

export const metadata = {
  title: "Products | Balprada Ayurvedic Hospital & Research Center",
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
