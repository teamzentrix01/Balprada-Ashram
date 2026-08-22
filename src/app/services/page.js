import Link from "next/link";
import ContactPanel from "../_components/ContactPanel";
import PageHero from "../_components/PageHero";
import SectionHeading from "../_components/SectionHeading";
import Shell from "../_components/Shell";
import { galleryImages, services } from "../data";

export const metadata = {
  title: "Our Services | Balprada Ayurvedic Hospital",
  description:
    "Explore Ayurvedic services at Balprada Hospital including panchakarma, yoga, naturopathy, physiotherapy and specialised disease treatment.",
  keywords: [
    "Balprada Services",
    "Panchakarma Services",
    "Ayurvedic Physiotherapy",
    "Naturopathy Services",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/services" },
  openGraph: {
    title: "Our Services | Balprada Ayurvedic Hospital",
    description:
      "Panchakarma, yoga, naturopathy, physiotherapy and specialised disease treatment services.",
    url: "https://www.balpradaindia.com/services",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Balprada Ayurvedic Hospital",
    description: "Panchakarma, yoga, naturopathy and physiotherapy.",
    images: ["/icon.png"],
  },
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
