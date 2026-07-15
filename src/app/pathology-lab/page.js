import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { facilities } from "../data";
import { pathologyTests } from "../catalogData";

export const metadata = {
  title: "Pathology Lab | Balprada Ayurvedic Hospital & Research Center",
};

const lab = facilities.find((item) => item.slug === "pathology");

export default function PathologyLabPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Pathology Lab"
        title="Reliable diagnostic support for guided care"
        text={lab.text}
        image="/pathology-lab-hero.png"
      />
      <section className="lab-trust-strip" aria-label="Laboratory highlights">
        <span><strong>Modern</strong> diagnostic support</span>
        <span><strong>Major</strong> routine tests</span>
        <span><strong>Clear</strong> report guidance</span>
        <span><strong>Easy</strong> phone enquiry</span>
      </section>
      <section className="section-band detail-band">
        <SectionHeading
          eyebrow="Balprada Labs"
          title="Reports that support clearer consultation"
          text="Testing support helps doctors understand patient condition, review progress and coordinate the ayurvedic care journey with more clarity."
        />
        <div>
          <ul className="detail-list">
            {lab.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <Link className="button primary gradient" href="/facilities/pathology">
            View Facility Detail
          </Link>
        </div>
      </section>
      <section className="section catalog-section">
        <div className="section-heading">
          <SectionHeading
            eyebrow="Test Directory"
            title="Frequently requested pathology tests"
          />
          <a className="button secondary" href="tel:9917114400">Call Lab</a>
        </div>
        <div className="professional-grid">
          {pathologyTests.map((test, index) => (
            <Link className="professional-card" href={`/pathology-lab/${test.slug}`} key={test.slug}>
              <div className="card-image lab-card-image">
                <img src={test.image} alt={`${test.title} diagnostic testing`} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div><small>{test.sample}</small><h3>{test.title}</h3><p>{test.short}</p><strong>View test details</strong></div>
            </Link>
          ))}
        </div>
        <p className="catalog-note">Other routine and doctor-advised investigations may also be available. Please contact the laboratory to confirm the exact test, preparation, price and reporting time.</p>
      </section>
      <ContactPanel />
    </Shell>
  );
}
