import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { facilities } from "../data";

export const metadata = {
  title: "Facilities | Balprada Ayurvedic Hospital & Research Center",
  description:
    "Explore the facilities at Balprada Ayurvedic Hospital, including in-patient care, panchakarma units, pathology lab, pharmacy and ashram-based healing.",
  keywords: [
    "Balprada Hospital Facilities",
    "Ayurvedic Hospital Infrastructure",
    "Panchakarma Unit",
    "In-Patient Ayurvedic Care",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/facilities" },
  openGraph: {
    title: "Facilities | Balprada Ayurvedic Hospital & Research Center",
    description:
      "In-patient care, panchakarma units, pathology lab, pharmacy and ashram-based healing facilities.",
    url: "https://www.balpradaindia.com/facilities",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Hospital Facilities" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facilities | Balprada Ayurvedic Hospital & Research Center",
    description: "In-patient care, panchakarma units, lab and pharmacy.",
    images: ["/icon.png"],
  },
};

export default function FacilitiesPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Facilities"
        title="Facilities"
        text="Yoga, naturopathy, panchakarma and pathology lab support the patient's complete care journey."
        image={facilities[2].image}
      />
      <section className="section feature-page-grid">
        {facilities.map((item) => (
          <Link className="facility-detail-card" href={`/facilities/${item.slug}`} key={item.slug}>
            <img src={item.image} alt={item.title} />
            <div>
              <SectionHeading title={item.title} text={item.text} level={3} />
              {item.highlights ? (
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Link>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
