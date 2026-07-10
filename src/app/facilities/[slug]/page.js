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
    title: facility ? `${facility.title} | Balprada India` : "Facility | Balprada India",
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
      <section className="section-band detail-band">
        <div>
          <p className="eyebrow">Balprada Facility</p>
          <h2>Complete support for the care journey</h2>
        </div>
        <div>
          <p>
            This facility works alongside Ayurvedic consultation to strengthen
            holistic patient care. Based on medical advice, yoga, naturopathy,
            panchakarma or diagnostic support may be included in the plan.
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
      <ContactPanel />
    </Shell>
  );
}
