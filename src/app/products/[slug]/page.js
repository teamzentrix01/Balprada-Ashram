import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../../_components/SiteChrome";
import { products, site } from "../../data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product
      ? `${product.title} | Balprada Products`
      : "Balprada Product",
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <Shell>
      <PageHero
        eyebrow={product.category}
        title={product.title}
        text={product.text}
        image={product.image}
      />
      <section className="section-band detail-band">
        <SectionHeading
          eyebrow="Balprada Enterprises"
          title="Product inquiry and availability"
          text="Balprada product availability can vary by preparation and suitability. Please connect with the team before ordering or using any wellness product as part of a health routine."
        />
        <div>
          <ul className="detail-list">
            {product.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="official-contact-actions">
            <a
              className="button primary gradient"
              href={site.appointmentUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Inquiry
            </a>
            <a className="button secondary" href={`tel:${site.primaryPhone}`}>
              Call {site.primaryPhone}
            </a>
            <Link className="button secondary" href="/products">
              All Products
            </Link>
          </div>
        </div>
      </section>
      <ContactPanel />
    </Shell>
  );
}
