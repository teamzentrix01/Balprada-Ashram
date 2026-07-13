import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, PageHero, Shell } from "../../_components/SiteChrome";
import { facilities } from "../../data";

export function generateStaticParams() {
  return facilities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const facility = facilities.find((item) => item.slug === slug);
  return {
    title: facility ? `${facility.title} | Balprada Ayurvedic Hospital & Research Center` : "Facility | Balprada Ayurvedic Hospital & Research Center",
  };
}

export default async function FacilityDetailPage({ params }) {
  const { slug } = await params;
  const facility = facilities.find((item) => item.slug === slug);

  if (!facility) {
    notFound();
  }

  return (
    <Shell>
      <PageHero eyebrow="Facility" title={facility.title} text={facility.text} image={facility.image} />
      <section className="programme-trust-bar">
        <strong>35 Years of Experience</strong>
        <span>Professional guidance</span>
        <span>Personalised planning</span>
        <span>Integrated Ayurvedic support</span>
      </section>
      <section className="section-band detail-band">
        <div>
          <p className="eyebrow">Balprada Wellness Programme</p>
          <h2>{facility.title}, planned around the individual</h2>
        </div>
        <div>
          <p>
            With 35 years of experience behind Balprada's care ecosystem, this
            programme works alongside Ayurvedic consultation to strengthen the
            patient's complete journey. Frequency and suitability are decided
            after individual assessment.
          </p>
          {facility.highlights ? (
            <ul className="detail-list">
              {facility.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
          <Link className="button primary gradient" href="/contact">
            Book Appointment
          </Link>
        </div>
      </section>
      {facility.slug !== "pathology" ? (
        <section className="programme-image-band section">
          <img src={facility.image} alt={`${facility.title} programme`} />
          <div><p className="eyebrow">What to Expect</p><h2>Careful guidance in a calm environment</h2><p>Our team explains the programme, supports safe participation and coordinates it with the wider treatment plan. Please share existing conditions, medicines and mobility concerns before beginning.</p><Link className="button secondary" href="/ashram">Explore Ashram Care</Link></div>
        </section>
      ) : null}
      <ContactPanel />
    </Shell>
  );
}
