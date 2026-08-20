import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { facilities, galleryImages } from "../data";

export const metadata = {
  title: "Wellbeing | Balprada Ayurvedic Hospital",
  description:
    "Discover holistic wellbeing tips and Ayurvedic lifestyle guidance from Balprada Ayurvedic Hospital for a healthier mind and body.",
  keywords: [
    "Balprada Wellbeing",
    "Ayurvedic Lifestyle Tips",
    "Holistic Wellness",
    "Ayurveda Mind Body Health",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/wellbeing" },
  openGraph: {
    title: "Wellbeing | Balprada Ayurvedic Hospital",
    description:
      "Holistic wellbeing tips and Ayurvedic lifestyle guidance for a healthier mind and body.",
    url: "https://www.balpradaindia.com/wellbeing",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Wellbeing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellbeing | Balprada Ayurvedic Hospital",
    description: "Holistic wellbeing and Ayurvedic lifestyle guidance.",
    images: ["/icon.png"],
  },
};

export default function WellbeingPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Wellbeing"
        title="Healing beyond medicines"
        text="Yoga, naturopathy, panchakarma and diagnostics support the complete Ayurvedic care journey at Balprada."
        image={galleryImages[5]}
      />

      <section className="wellbeing-intro section">
        <SectionHeading
          eyebrow="Holistic Wellbeing"
          title="Balance body, mind and daily life"
          text="Balprada combines supportive therapies with consultation and medicines. Every facility is recommended according to the patient's condition, comfort and treatment plan."
        />
      </section>

      <section className="wellbeing-grid section">
        {facilities.map((item, index) => (
          <Link href={`/facilities/${item.slug}`} key={item.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <img src={item.image} alt={item.title} />
            <div>
              <SectionHeading title={item.title} text={item.text} level={3} />
              <strong>Explore facility</strong>
            </div>
          </Link>
        ))}
      </section>

      <ContactPanel />
    </Shell>
  );
}
