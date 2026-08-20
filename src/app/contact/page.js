import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { branches, heroImages, opdInfo } from "../data";

export const metadata = {
  title: "Contact Us | Balprada Ayurvedic Hospital Moradabad",
  description:
    "Get in touch with Balprada Ayurvedic Hospital & Research Center in Moradabad. Find our address, phone number, OPD timings and directions here.",
  keywords: [
    "Contact Balprada Ayurvedic Hospital",
    "Balprada Moradabad Address",
    "Ayurvedic Hospital Contact Number",
    "OPD Timings Moradabad",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/contact" },
  openGraph: {
    title: "Contact Us | Balprada Ayurvedic Hospital Moradabad",
    description:
      "Address, phone number, OPD timings and directions for Balprada Ayurvedic Hospital, Moradabad.",
    url: "https://www.balpradaindia.com/contact",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Contact Balprada Ayurvedic Hospital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Balprada Ayurvedic Hospital Moradabad",
    description: "Address, phone number and OPD timings.",
    images: ["/icon.png"],
  },
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Connect With Us"
        title="Contact us for appointments and consultation"
        text="Balprada Ashram and Clinic is open 7 days a week. Consultation hours are 10:00 AM to 2:00 PM."
        image={heroImages[2]}
      />
      <section className="opd contact-opd">
        <SectionHeading eyebrow="Daily OPD" title={opdInfo.title} />
        <ul>
          {opdInfo.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
