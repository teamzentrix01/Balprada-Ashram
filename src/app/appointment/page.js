import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { branches, heroImages, opdInfo, site, treatments } from "../data";

export const metadata = {
  title: "Book Appointment | Balprada Ayurvedic Hospital & Research Center",
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
          <div>
            <p className="eyebrow">Patient Details</p>
            <h2>Appointment Request</h2>
          </div>
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
          <p className="eyebrow">Before You Visit</p>
          <h2>{opdInfo.title}</h2>
          <p>{opdInfo.summary}</p>
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
