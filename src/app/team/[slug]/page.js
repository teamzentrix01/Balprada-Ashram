import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, PageHero, Shell } from "../../_components/SiteChrome";
import { doctors } from "../../data";

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  return {
    title: doctor ? `${doctor.name} | Balprada India` : "Doctor | Balprada India",
  };
}

export default async function DoctorDetailPage({ params }) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <Shell>
      <PageHero eyebrow="Doctor Profile" title={doctor.name} text={doctor.role} image={doctor.image} />
      <section className="section-band detail-band">
        <div>
          <p className="eyebrow">Clinical Focus</p>
          <h2>Experience-led guidance for patients and families</h2>
        </div>
        <div>
          <p>{doctor.detail}</p>
          <ul className="detail-list">
            {doctor.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="button primary gradient" href="/appointment">
            Book Appointment
          </Link>
        </div>
      </section>
      <ContactPanel />
    </Shell>
  );
}
