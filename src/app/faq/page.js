import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { faqs, galleryImages } from "../data";

export const metadata = {
  title: "FAQ | Balprada Ayurvedic Hospital & Research Center",
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
