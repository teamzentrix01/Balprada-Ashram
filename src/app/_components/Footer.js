"use client";

import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { branches, opdInfo, site } from "../data";

export function Footer() {
  const quickLinks = [
    ["About", "/about"],
    ["Treatments", "/treatments"],
    ["Facilities", "/facilities"],
    ["Team", "/team"],
    ["Gallery", "/gallery"],
    ["Insights", "/insights"],
    ["Organic Food", "/organic-food"],
    ["Privacy Policy", "/privacy-policy"],
    ["Terms of Service", "/terms-conditions"],
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
        <img className="footer-seal" src="/balprada-seal.svg" alt="" aria-hidden="true" />
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

export default Footer;
