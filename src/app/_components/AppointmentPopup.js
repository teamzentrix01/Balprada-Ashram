"use client";

import { CalendarDays, CheckCircle2, LoaderCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./AppointmentPopup.module.css";

function getLocalDate() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export default function AppointmentPopup() {
  const [open, setOpen] = useState(false);
  const [minimumDate, setMinimumDate] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const nameInput = useRef(null);

  useEffect(() => {
    setMinimumDate(getLocalDate());

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => nameInput.current?.focus(), 50);

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  async function submitAppointment(event) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Unable to send your request.");

      form.reset();
      setStatus("success");
      setMessage("Thank you. Our team will contact you shortly to confirm your appointment.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  }

  if (!open) return null;

  return createPortal(
    <div className={`${styles.backdrop} appointment-popup-backdrop`} role="presentation" onMouseDown={() => setOpen(false)}>
      <section
        className={`${styles.popup} appointment-popup`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-popup-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className={`${styles.close} appointment-popup-close`} type="button" aria-label="Close appointment form" onClick={() => setOpen(false)}>
          <X aria-hidden="true" />
        </button>

        <div className={`${styles.visual} appointment-popup-visual`}>
          <img src="/appointment-consultation.png" alt="Ayurvedic doctor speaking with a patient" />
          <div className={`${styles.visualCopy} appointment-popup-visual-copy`}>
            <p>Personalised Ayurveda</p>
            <h2>Trusted care for your healing journey</h2>
            <ul>
              <li><CheckCircle2 aria-hidden="true" /> Experienced Ayurvedic doctors</li>
              <li><CheckCircle2 aria-hidden="true" /> Thoughtful consultation</li>
              <li><CheckCircle2 aria-hidden="true" /> Main &amp; Moradabad branches</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.content} appointment-popup-content`}>
          {status === "success" ? (
            <div className={`${styles.success} appointment-popup-success`} role="status">
              <span><CheckCircle2 aria-hidden="true" /></span>
              <p className="eyebrow">Request received</p>
              <h2>We’ll be in touch soon</h2>
              <p>{message}</p>
              <button className={`${styles.submit} appointment-popup-submit`} type="button" onClick={() => setOpen(false)}>Close</button>
            </div>
          ) : (
            <>
              <div className={`${styles.heading} appointment-popup-heading`}>
                <span><CalendarDays aria-hidden="true" /></span>
                <div>
                  <h2 id="appointment-popup-title">Book an Appointment</h2>
                  <p>Share your details and our team will confirm your slot.</p>
                </div>
              </div>

              <form className={`${styles.form} appointment-popup-form`} onSubmit={submitAppointment}>
                <div className={`${styles.honeypot} appointment-popup-honeypot`} aria-hidden="true">
                  <label htmlFor="appointment-company">Company</label>
                  <input id="appointment-company" name="company" tabIndex="-1" autoComplete="off" />
                </div>
                <label className={`${styles.wide} appointment-popup-wide`}>
                  <span>Full name *</span>
                  <input ref={nameInput} name="name" type="text" placeholder="Full name" autoComplete="name" maxLength="100" required />
                </label>
                <label>
                  <span>Mobile number *</span>
                  <input name="phone" type="tel" placeholder="Mobile number" autoComplete="tel" inputMode="tel" minLength="8" maxLength="18" required />
                </label>
                <label>
                  <span>Email address</span>
                  <input name="email" type="email" placeholder="Email address" autoComplete="email" maxLength="150" />
                </label>
                <label>
                  <span>Preferred date *</span>
                  <input name="date" type="date" min={minimumDate} required />
                </label>
                <label>
                  <span>Preferred time *</span>
                  <select name="time" defaultValue="" required>
                    <option value="" disabled>Select time</option>
                    <option>10:00 AM – 11:00 AM</option>
                    <option>11:00 AM – 12:00 PM</option>
                    <option>12:00 PM – 1:00 PM</option>
                    <option>1:00 PM – 2:00 PM</option>
                  </select>
                </label>
                <label>
                  <span>Branch *</span>
                  <select name="branch" defaultValue="" required>
                    <option value="" disabled>Select branch</option>
                    <option>Main Branch</option>
                    <option>Moradabad Branch</option>
                    <option>Phone Consultation</option>
                  </select>
                </label>
                <label>
                  <span>Concern *</span>
                  <select name="concern" defaultValue="" required>
                    <option value="" disabled>Select concern</option>
                    <option>Kidney Care</option>
                    <option>Liver Care</option>
                    <option>Cancer Support</option>
                    <option>Heart Care</option>
                    <option>Diabetes &amp; Thyroid Care</option>
                    <option>Women’s Health</option>
                    <option>General Consultation</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className={`${styles.wide} appointment-popup-wide`}>
                  <span>Reason for visit</span>
                  <textarea name="message" placeholder="Tell us briefly how we can help" rows="3" maxLength="1000" />
                </label>

                {message ? <p className={`${styles.error} appointment-popup-error`} role="alert">{message}</p> : null}

                <button className={`${styles.submit} ${styles.wide} appointment-popup-submit appointment-popup-wide`} type="submit" disabled={status === "sending"}>
                  {status === "sending" ? <LoaderCircle className={`${styles.spinner} appointment-popup-spinner`} aria-hidden="true" /> : <CalendarDays aria-hidden="true" />}
                  {status === "sending" ? "Sending request…" : "Request Appointment"}
                </button>
                <small className={`${styles.privacy} ${styles.wide} appointment-popup-privacy appointment-popup-wide`}>Your details are used only to contact you about this appointment.</small>
              </form>
            </>
          )}
        </div>
      </section>
    </div>,
    document.body,
  );
}
