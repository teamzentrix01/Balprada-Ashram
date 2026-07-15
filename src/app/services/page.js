import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { galleryImages, services } from "../data";

export const metadata = {
  title: "Other Services | Balprada Ayurvedic Hospital & Research Center",
};

export default function ServicesPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Other Services"
        title="A Wider Family of Service"
        text="The Balprada group works across health, jansewa, ashram care, pharmacy and herbal product initiatives."
        image={galleryImages[4]}
      />
      <section className="section service-page">
        {services.map((service, index) => (
          <Link href={`/services/${service.slug}`} key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <SectionHeading title={service.title} text={service.text} level={3} />
            {service.points ? (
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </Link>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
