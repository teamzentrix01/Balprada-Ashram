import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { doctors } from "../data";

export const metadata = {
  title: "Team | Balprada Ayurvedic Hospital & Research Center",
};

export default function TeamPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Our Team"
        title="Experienced Doctors and Service Team"
        text="Balprada's doctors, research team and service-minded staff work together to care for patients."
        image={doctors[1].image}
      />
      <section className="section team-grid">
        {doctors.map((doctor) => (
          <article key={doctor.name}>
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <strong>{doctor.role}</strong>
            <p>{doctor.text}</p>
            {doctor.focus ? (
              <div className="doctor-focus">
                {doctor.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
            <Link className="button secondary" href={`/team/${doctor.slug}`}>
              View Profile
            </Link>
          </article>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
