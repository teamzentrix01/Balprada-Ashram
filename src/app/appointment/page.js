import ContactPanel from "../_components/ContactPanel";
import PageHero from "../_components/PageHero";
import SectionHeading from "../_components/SectionHeading";
import Shell from "../_components/Shell";
import { branches, heroImages, opdInfo, site, treatments } from "../data";

export const metadata = {
  title: "Book an Appointment | Balprada Ayurvedic Hospital",
  description:
    "Book your OPD appointment at Balprada Ayurvedic Hospital. Consult our Ayurvedic doctors for kidney, liver, cancer, diabetes and holistic treatment.",
  keywords: [
    "Book Ayurvedic Appointment",
    "Balprada OPD Booking",
    "Ayurvedic Doctor Consultation",
    "Ayurvedic Hospital Appointment",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/appointment" },
  openGraph: {
    title: "Book an Appointment | Balprada Ayurvedic Hospital",
    description:
      "Book your OPD appointment for kidney, liver, cancer and diabetes Ayurvedic treatment.",
    url: "https://www.balpradaindia.com/appointment",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Book Appointment at Balprada" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Appointment | Balprada Ayurvedic Hospital",
    description: "Book your OPD appointment online.",
    images: ["/icon.png"],
  },
};

export default function AppointmentPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Book Appointment"
        title="Plan your visit with Balprada"
        text="Share patient details, preferred branch and health concern. The team can guide you with consultation timing and the next step."
        image={heroImages[2]}
      />
      <section className="section appointment-layout">
        <form
          className="appointment-form"
          action={site.appointmentUrl}
          target="_blank"
        >
          <SectionHeading eyebrow="Patient Details" title="Appointment Request" />
          <input
            type="text"
            placeholder="Patient Name"
            aria-label="Patient Name"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            aria-label="Mobile Number"
          />
          <select aria-label="Preferred Branch">
            <option>Preferred Branch</option>
            {branches.map((branch) => (
              <option key={branch.title}>{branch.title}</option>
            ))}
          </select>
          <select aria-label="Health Concern">
            <option>Health Concern</option>
            {treatments.map((treatment) => (
              <option key={treatment.slug}>{treatment.title}</option>
            ))}
            <option>Other</option>
          </select>
          <input type="date" aria-label="Preferred Date" />
          <textarea
            placeholder="Briefly describe the concern"
            aria-label="Concern details"
          />
          <button type="submit" className="button primary gradient">
            Submit Request
          </button>
        </form>
        <aside className="appointment-aside">
          <SectionHeading
            eyebrow="Before You Visit"
            title={opdInfo.title}
            text={opdInfo.summary}
          />
          <div className="opd-list">
            {opdInfo.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="official-contact-actions">
            <a
              className="button primary gradient"
              href={site.appointmentUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Appointment
            </a>
            <a className="button secondary" href={`tel:${site.primaryPhone}`}>
              Call {site.primaryPhone}
            </a>
            <a className="button secondary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </aside>
      </section>
      <ContactPanel />
    </Shell>
  );
}
