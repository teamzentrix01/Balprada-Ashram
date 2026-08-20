import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { faqs, galleryImages } from "../data";

export const metadata = {
  title: "FAQs | Balprada Ayurvedic Hospital & Research Center",
  description:
    "Find answers to common questions about treatments, OPD timings, appointments and facilities at Balprada Ayurvedic Hospital & Research Center.",
  keywords: [
    "Balprada FAQ",
    "Ayurvedic Hospital Questions",
    "OPD Timings FAQ",
    "Ayurvedic Treatment FAQ",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/faq" },
  openGraph: {
    title: "FAQs | Balprada Ayurvedic Hospital & Research Center",
    description:
      "Answers to common questions about treatments, OPD timings, appointments and facilities.",
    url: "https://www.balpradaindia.com/faq",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada FAQs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Balprada Ayurvedic Hospital & Research Center",
    description: "Common questions about treatments and appointments.",
    images: ["/icon.png"],
  },
};

export default function FaqPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="FAQ"
        title="Answers before your visit"
        text="Common questions about consultation, OPD, reports, follow-up, pathology support and product inquiries."
        image={galleryImages[5]}
      />
      <section className="section faq-grid">
        {faqs.map((item) => (
          <article key={item.question}>
            <SectionHeading title={item.question} text={item.answer} level={3} />
          </article>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
