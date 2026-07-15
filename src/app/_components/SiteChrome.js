"use client";

import Link from "next/link";
import { useState } from "react";
import { branches, opdInfo, site } from "../data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={`nav ${menuOpen ? "menu-open" : ""}`}>
      <Link className="brand" href="/" aria-label="Balprada Ayurvedic Hospital & Research Center home">
        <img className="brand-logo" src="/balprada-logo.svg" alt="Balprada" />
        <span className="brand-copy">
          <strong>{site.name}</strong>
          <small>Ayurvedic Hospital & Research Center</small>
        </span>
      </Link>
      {!menuOpen ? (
        <nav aria-label="Primary navigation" id="primary-navigation">
          <Link href="/about">About</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/pathology-lab">Pathology</Link>
          <Link href="/ashram">Ashram</Link>
          <Link href="/organic-food">Organic Food</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      ) : null}
      <Link className="nav-cta" href="/appointment">
        Book Appointment
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
      {menuOpen ? (
        <div
          className="mobile-nav-panel"
          id="mobile-navigation"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/treatments" onClick={() => setMenuOpen(false)}>Treatments</Link></li>
            <li><Link href="/pathology-lab" onClick={() => setMenuOpen(false)}>Pathology</Link></li>
            <li><Link href="/ashram" onClick={() => setMenuOpen(false)}>Ashram</Link></li>
            <li><Link href="/organic-food" onClick={() => setMenuOpen(false)}>Organic Food</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      ) : null}

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
    ["Organic Food", "/organic-food"],
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
          Balprada Ayurvedic Hospital & Research Center brings 35 years of
          experience in natural Ayurvedic care,
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
          <SectionHeading title="Explore" level={3} />
          {quickLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-link-group">
          <SectionHeading title="Patients" level={3} />
          {patientLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-link-group">
          <SectionHeading title="Trust" level={3} />
          {trustLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-visit-panel">
        <SectionHeading
          eyebrow="Plan Your Visit"
          title={opdInfo.title}
          text={opdInfo.items[1]}
          level={3}
        />
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
          (c) 2026 Balprada Ayurvedic Hospital & Research Center. 35 years of experience.
        </small>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  level = 2,
  className = "",
}) {
  const HeadingTag = `h${level}`;

  return (
    <div className={`section-heading-block ${align === "center" ? "center" : ""} ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <HeadingTag>{title}</HeadingTag> : null}
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image, className = "" }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <SectionHeading eyebrow={eyebrow} title={title} text={text} level={1} />
      {image ? <img src={image} alt="" /> : null}
    </section>
  );
}

export function ContactPanel() {
  return (
    <section className="contact contact-tight" id="contact">
      <div className="contact-card">
        <SectionHeading
          eyebrow="Contact"
          title="Contact us for appointments and more information"
          text={opdInfo.summary}
        />
        <div className="branch-grid">
          {branches.map((branch) => (
            <article key={branch.title}>
              <SectionHeading title={branch.title} text={branch.address} level={3} />
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
