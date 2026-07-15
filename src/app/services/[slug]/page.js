import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../../_components/SiteChrome";
import { galleryImages, services } from "../../data";

export function generateStaticParams() {
  return services.map((item, index) => ({ slug: item.slug || `service-${index + 1}` }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item, index) => (item.slug || `service-${index + 1}`) === slug);
  return {
    title: service ? `${service.title} | Balprada Ayurvedic Hospital & Research Center` : "Service | Balprada Ayurvedic Hospital & Research Center",
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((item, index) => (item.slug || `service-${index + 1}`) === slug);

  if (!service) {
    notFound();
  }

  return (
    <Shell>
      <PageHero eyebrow="Balprada Service" title={service.title} text={service.text} image={galleryImages[4]} />
      <section className="section-band detail-band">
        <SectionHeading
          eyebrow="Service Detail"
          title="Jansewa and Health Protection"
          text="This service is part of Balprada's broader commitment to social welfare, Ayurveda and community health protection. Our team can be contacted for more information, collaboration and support."
        />
        <div>
          {service.points ? (
            <ul className="detail-list">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
          <Link className="button primary gradient" href="/contact">
            Contact Team
          </Link>
        </div>
      </section>
      <ContactPanel />
    </Shell>
  );
}
