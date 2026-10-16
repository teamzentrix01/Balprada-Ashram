"use client";

import { useState } from "react";
import { Phone, CheckCircle2, Calendar, X } from "lucide-react";

const TREATMENTS = [
  "Ayurvedic Consultation",
  "Panchakarma Therapy",
  "Joint & Pain Management",
  "Digestive & Gut Health",
  "Skin & Hair Care",
  "Women's Health",
  "Weight Management",
  "Stress & Sleep Care",
  "Diet & Lifestyle Counselling",
  "General Enquiry",
];

const WHY_POINTS = [
  "Holistic Ayurvedic Approach",
  "Traditional Wellness Practices",
  "Natural & Supportive Care",
  "Personalized Wellness Guidance",
  "Focus on Complete Wellbeing",
  "Peaceful Wellness Environment",
  "Ayurvedic & Lifestyle Services",
];

// Local date (YYYY-MM-DD), avoids UTC off-by-one issue
const getToday = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const inputClass =
  "w-full min-w-0 border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B69B6B] bg-white";

export default function LandingEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    date: getToday(),
    treatment: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/zentrixit@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: "New Balprada Appointment Enquiry",
          _captcha: "false",
        }),
      });

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }

    setLoading(false);
  };

  return (
    <div className="w-full space-y-3">
      {/* Appointment Card */}
      <div className="bg-[#F8F4EA] text-gray-900 rounded-xl p-4 shadow-lg">
        <h3 className="text-base font-semibold leading-tight">
          Book an Appointment
        </h3>
        <p className="text-gray-700 text-xs mt-0.5 mb-3">
          Begin your journey towards holistic wellness at Balprada.
        </p>

        {/* Contact Numbers */}
        <div className="w-full bg-white text-[#7A5C35] py-2 rounded-md mb-3 flex items-center justify-center text-xs">
          <a
            href="tel:9410447000"
            className="flex items-center gap-1.5 hover:underline"
          >
            <Phone size={13} />
            <span style={{ fontFamily: "Arial, sans-serif" }}>9410447000</span>
          </a>

          <span className="mx-3 text-gray-300">|</span>

          <a
            href="tel:8126364606"
            className="flex items-center gap-1.5 hover:underline"
          >
            <Phone size={13} />
            <span style={{ fontFamily: "Arial, sans-serif" }}>8126364606</span>
          </a>
        </div>

        {/* Appointment Form */}
        <div className="bg-white rounded-lg p-3">
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Name + Mobile */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Full name *"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="tel"
                name="mobile"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="Mobile number *"
                value={form.mobile}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Email + Date */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="date"
                name="date"
                required
                min={getToday()}
                value={form.date || ""}
                onChange={handleChange}
                aria-label="Appointment date"
                className={inputClass}
              />
            </div>

            {/* Service */}
            <select
              name="treatment"
              required
              value={form.treatment}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select treatment *</option>
              {TREATMENTS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Reason */}
            <textarea
              name="reason"
              rows={2}
              placeholder="Tell us about your enquiry"
              value={form.reason}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#7A5C35] hover:bg-[#654A2B] text-white font-semibold py-2 rounded-md transition text-xs flex items-center justify-center gap-1.5 disabled:opacity-60"
            >
              <Calendar size={14} />
              {loading ? "Submitting..." : "Confirm Appointment"}
            </button>
          </form>
        </div>
      </div>

      {/* Why Choose Balprada */}
      <div className="bg-[#F8F4EA] border border-[#E6DDCC] rounded-xl p-4">
        <h3 className="font-semibold text-sm text-gray-900 mb-2">
          Why Choose Balprada
        </h3>

        <ul className="space-y-1.5 text-xs text-gray-700">
          {WHY_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <CheckCircle2
                size={14}
                className="text-[#7A5C35] mt-0.5 shrink-0"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Thank You Popup */}
      {submitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-[#F8F4EA] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} className="text-[#7A5C35]" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank You!
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Your appointment enquiry has been received. Our Balprada team
              will contact you shortly to confirm your appointment.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="w-full bg-[#7A5C35] hover:bg-[#654A2B] text-white font-semibold py-2.5 rounded-xl transition text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}