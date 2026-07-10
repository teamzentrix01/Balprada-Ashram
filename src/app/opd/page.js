import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { branches, heroImages, opdInfo } from "../data";

export const metadata = {
  title: "OPD Timings | Balprada India",
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
          <p className="eyebrow">Daily OPD</p>
          <h2>{opdInfo.title}</h2>
          <p>
            Call before visiting to confirm branch-specific availability and
            consultation flow.
          </p>
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
            <h2>{branch.title}</h2>
            <p>{branch.address}</p>
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
