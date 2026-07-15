import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { facilities } from "../data";

export const metadata = {
  title: "Facilities | Balprada Ayurvedic Hospital & Research Center",
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
