"use client";

import { SectionHeading } from "./SectionHeading";
import { branches, opdInfo, site } from "../data";

export function ContactPanel() {
  return (
    <section className="contact contact-tight" id="contact">
      <div className="contact-card">
        <SectionHeading
          title="Contact us for appointments and more information"
          text={opdInfo.summary}
        />
        <div className="contact-body-grid">
          <div className="branch-grid">
            {branches.map((branch) => (
              <article key={branch.title} className="branch-card-box">
                <div className="branch-card-header">
                  <h3 className="branch-title">{branch.title}</h3>
                  <p className="branch-address">{branch.address}</p>
                  <small className="branch-timing">{branch.timing}</small>
                  <span className="branch-contact-links">
                    <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                    <a href={`mailto:${branch.email}`}>{branch.email}</a>
                  </span>
                </div>
                <div className="branch-map">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(branch.address)}&output=embed`}
                    title={`${branch.title} location on Google Maps`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="contact-form-side">
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
              <div className="form-input-grid">
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
              </div>
              <textarea placeholder="Type your Query" aria-label="Query" />
              <button type="submit" className="button primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPanel;
