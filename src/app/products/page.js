import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { galleryImages, products } from "../data";

export const metadata = {
  title: "Products | Balprada India",
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
            <span>{product.category}</span>
            <h2>{product.title}</h2>
            <p>{product.text}</p>
            <strong>View product</strong>
          </Link>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
