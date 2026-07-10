import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { galleryImages, services } from "../data";

export const metadata = {
  title: "Other Services | Balprada India",
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
            <h2>{service.title}</h2>
            <p>{service.text}</p>
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
