import Link from "next/link";
import { branches, opdInfo, site } from "../data";

export function Header() {
  return (
    <header className="nav">
      <Link className="brand" href="/" aria-label="Balprada India home">
        <img className="brand-logo" src="/balprada-logo.svg" alt="Balprada" />
        <span className="brand-copy">
          <strong>{site.name}</strong>
          <small>Ayurvedic Chikitsalaya & Research Centre</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/about">About</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/wellbeing">Wellbeing</Link>
        <Link href="/ashram">Ashram</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="nav-cta" href="/appointment">
        Book Appointment
      </Link>
    </header>
  );
}

export function Footer() {
  const quickLinks = [
    ["About", "/about"],
    ["Treatments", "/treatments"],
    ["Facilities", "/facilities"],
    ["Team", "/team"],
    ["Gallery", "/gallery"],
    ["Insights", "/insights"],
  ];

  const patientLinks = [
    ["Book Appointment", "/appointment"],
    ["OPD Timings", "/opd"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ];

  const trustLinks = [
    ["Ashram", "/ashram"],
    ["Jansewa", "/jansewa"],
    ["Products", "/products"],
    ["Pathology Lab", "/pathology-lab"],
    ["Services", "/services"],
  ];

  return (
    <footer className="footer">
      <div className="footer-brand-panel">
        <div className="brand footer-brand">
          <img className="brand-logo" src="/balprada-logo.svg" alt="Balprada" />
          <span className="brand-copy">
            <strong>{site.name}</strong>
            <small>Ayurveda | Jansewa | Ashram</small>
          </span>
        </div>
        <p>
          Balprada Jansewa Ashram Trust is guided by natural Ayurvedic care,
          experienced doctors, disciplined routines and a service-first spirit.
        </p>
        <div className="footer-actions">
          <Link className="button primary gradient" href="/appointment">
            Book Appointment
          </Link>
          <a className="button secondary" href={`tel:${branches[0].phone}`}>
            Call Main Branch
          </a>
          <a className="button secondary" href={`mailto:${site.email}`}>
            Email Us
          </a>
        </div>
      </div>
      <div className="footer-nav-panel">
        <div className="footer-link-group">
          <h3>Explore</h3>
          {quickLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-link-group">
          <h3>Patients</h3>
          {patientLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-link-group">
          <h3>Trust</h3>
          {trustLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-visit-panel">
        <div>
          <p className="eyebrow">Plan Your Visit</p>
          <h3>{opdInfo.title}</h3>
          <p>{opdInfo.items[1]}</p>
        </div>
        <div className="footer-branch-list">
          {branches.map((branch) => (
            <article key={branch.title}>
              <strong>{branch.title}</strong>
              <span>{branch.timing}</span>
              <span className="branch-contact-links">
                <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                <a href={`mailto:${branch.email}`}>{branch.email}</a>
              </span>
            </article>
          ))}
        </div>
        <form
          className="newsletter"
          action={site.appointmentUrl}
          target="_blank"
        >
          <input
            type="tel"
            placeholder="Mobile number for callback"
            aria-label="Callback mobile number"
          />
          <button type="submit">Send</button>
        </form>
        <small>
          (c) 2026 Balprada India. Ayurvedic Chikitsalaya & Research Centre.
        </small>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
      </div>
      {image ? <img src={image} alt="" /> : null}
    </section>
  );
}

export function ContactPanel() {
  return (
    <section className="contact contact-tight" id="contact">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Contact us for appointments and more information</h2>
        <p>{opdInfo.summary}</p>
        <div className="branch-grid">
          {branches.map((branch) => (
            <article key={branch.title}>
              <h3>{branch.title}</h3>
              <p>{branch.address}</p>
              <small>{branch.timing}</small>
              <span className="branch-contact-links">
                <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                <a href={`mailto:${branch.email}`}>{branch.email}</a>
              </span>
            </article>
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
        <form action={site.appointmentUrl} target="_blank">
          <input type="text" placeholder="First Name" aria-label="First Name" />
          <input
            type="tel"
            placeholder="Mobile no."
            aria-label="Mobile number"
          />
          <input type="email" placeholder="Email" aria-label="Email" />
          <select aria-label="Concern">
            <option>What Are Your Concerns</option>
            <option>Kidney</option>
            <option>Liver</option>
            <option>Cancer</option>
            <option>Heart</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Type your Query" aria-label="Query" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export function Shell({ children }) {
  return (
    <main className="site-shell">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
