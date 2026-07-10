import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { faqs, galleryImages } from "../data";

export const metadata = {
  title: "FAQ | Balprada India",
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
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
