import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { branches, heroImages, opdInfo } from "../data";

export const metadata = {
  title: "OPD Timings | Balprada Ayurvedic Hospital & Research Center",
};

export default function OpdPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="OPD Timings"
        title="Daily consultation information"
        text={opdInfo.summary}
        image={heroImages[0]}
      />
      <section className="opd-highlight section">
        <div>
          <SectionHeading
            eyebrow="Daily OPD"
            title={opdInfo.title}
            text="Call before visiting to confirm branch-specific availability and consultation flow."
          />
          <Link className="button primary gradient" href="/appointment">
            Book Appointment
          </Link>
        </div>
        <div className="opd-list">
          {opdInfo.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
      <section className="section branch-page-grid">
        {branches.map((branch) => (
          <article key={branch.title}>
            <SectionHeading
              title={branch.title}
              text={branch.address}
              level={3}
            />
            <small>{branch.timing}</small>
            <span className="branch-contact-links">
              <a href={`tel:${branch.phone}`}>{branch.phone}</a>
              <a href={`mailto:${branch.email}`}>{branch.email}</a>
            </span>
          </article>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
