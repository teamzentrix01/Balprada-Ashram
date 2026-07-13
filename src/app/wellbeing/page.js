import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { facilities, galleryImages } from "../data";

export const metadata = {
  title: "Wellbeing | Balprada Ayurvedic Hospital & Research Center",
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
        <div>
          <p className="eyebrow">Holistic Wellbeing</p>
          <h2>Balance body, mind and daily life</h2>
        </div>
        <p>
          Balprada combines supportive therapies with consultation and
          medicines. Every facility is recommended according to the patient's
          condition, comfort and treatment plan.
        </p>
      </section>

      <section className="wellbeing-grid section">
        {facilities.map((item, index) => (
          <Link href={`/facilities/${item.slug}`} key={item.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <img src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <strong>Explore facility</strong>
            </div>
          </Link>
        ))}
      </section>

      <ContactPanel />
    </Shell>
  );
}
