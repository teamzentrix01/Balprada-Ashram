import Link from "next/link";
import ContactPanel from "../_components/ContactPanel";
import PageHero from "../_components/PageHero";
import SectionHeading from "../_components/SectionHeading";
import Shell from "../_components/Shell";
import { branches, heroImages, opdInfo } from "../data";

export const metadata = {
  title: "OPD Services | Balprada Ayurvedic Hospital",
  description:
    "Visit the OPD at Balprada Ayurvedic Hospital for expert consultation on kidney, liver, cancer, diabetes and other Ayurvedic treatments.",
  keywords: [
    "Balprada OPD",
    "Ayurvedic OPD Services",
    "OPD Consultation",
    "Ayurvedic Doctor OPD",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/opd" },
  openGraph: {
    title: "OPD Services | Balprada Ayurvedic Hospital",
    description:
      "Expert OPD consultation for kidney, liver, cancer, diabetes and other Ayurvedic treatments.",
    url: "https://www.balpradaindia.com/opd",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada OPD Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OPD Services | Balprada Ayurvedic Hospital",
    description: "Expert OPD consultation for Ayurvedic treatment.",
    images: ["/icon.png"],
  },
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
