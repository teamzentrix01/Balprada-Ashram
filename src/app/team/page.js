import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { doctors } from "../data";

export const metadata = {
  title: "Our Doctors & Team | Balprada Ayurvedic Hospital",
  description:
    "Meet the experienced Ayurvedic doctors and healthcare team at Balprada Ayurvedic Hospital, dedicated to patient care since 1991.",
  keywords: [
    "Balprada Doctors",
    "Ayurvedic Doctors Moradabad",
    "Balprada Team",
    "Ayurvedic Hospital Staff",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/team" },
  openGraph: {
    title: "Our Doctors & Team | Balprada Ayurvedic Hospital",
    description:
      "Experienced Ayurvedic doctors and healthcare team, dedicated to patient care since 1991.",
    url: "https://www.balpradaindia.com/team",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Doctors & Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Doctors & Team | Balprada Ayurvedic Hospital",
    description: "Experienced Ayurvedic doctors and healthcare team.",
    images: ["/icon.png"],
  },
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
            <SectionHeading title={doctor.name} text={doctor.role} level={3} />
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
