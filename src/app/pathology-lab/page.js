import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { facilities } from "../data";

export const metadata = {
  title: "Pathology Lab | Balprada India",
};

const lab = facilities.find((item) => item.slug === "pathology");

export default function PathologyLabPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Pathology Lab"
        title="Reliable diagnostic support for guided care"
        text={lab.text}
        image={lab.image}
      />
      <section className="section-band detail-band">
        <div>
          <p className="eyebrow">Balprada Labs</p>
          <h2>Reports that support clearer consultation</h2>
        </div>
        <div>
          <p>
            Testing support helps doctors understand patient condition, review
            progress and coordinate the ayurvedic care journey with more clarity.
          </p>
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
      <ContactPanel />
    </Shell>
  );
}
