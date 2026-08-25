"use client";

import { useState } from "react";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Calendar,
  X,
} from "lucide-react";

export default function LandingEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    department: "",
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
    <section className="py-1 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* SIDEBAR */}
        <div className="w-[300px] lg:w-[380px] xl:w-[400px] order-2">
          <div className="lg:sticky lg:top-30 space-y-4">

            {/* Appointment Card */}
            <div className="bg-[#F8F4EA] text-gray-900 rounded-2xl p-6 shadow-lg">

              <h3 className="text-xl font-semibold mb-1">
                Book an Appointment
              </h3>

              <p className="text-gray-700 text-sm mb-5">
                Begin your journey towards holistic wellness and Ayurvedic
                care at Balprada.
              </p>

              {/* Contact Numbers */}
<div className="w-full bg-white text-[#7A5C35] py-3 rounded-lg mb-4 flex items-center justify-center text-sm">

  <a
    href="tel:9410447000"
    className="flex items-center gap-2 hover:underline"
  >
    <Phone size={16} />
    <span
      className="font-normal"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      9410447000
    </span>
  </a>

  <span className="mx-4 text-gray-300">|</span>

  <a
    href="tel:8126364606"
    className="flex items-center gap-2 hover:underline"
  >
    <Phone size={16} />
    <span
      className="font-normal"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      8126364606
    </span>
  </a>

</div>

              {/* Appointment Form */}
              <div className="bg-white rounded-xl p-4">

                <p className="text-[#7A5C35] font-semibold text-sm mb-3 flex items-center gap-1">
                  <Calendar size={15} />
                  Book Online
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">

                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name *"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B69B6B]"
                  />

                  {/* Mobile */}
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="Mobile number *"
                    value={form.mobile}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B69B6B]"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B69B6B]"
                  />

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 gap-2">

                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date || ""}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B69B6B]"
                    />

                   

                  </div>

                  {/* Service */}
                  <select
                    name="department"
                    required
                    value={form.department}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B69B6B] bg-white"
                  >
                    <option value="">
                      Select service *
                    </option>

                    <option>
                      Ayurvedic Consultation
                    </option>

                    <option>
                      Ayurvedic Treatment
                    </option>

                    <option>
                      Panchakarma & Traditional Therapies
                    </option>

                    <option>
                      Wellness Consultation
                    </option>

                    <option>
                      Lifestyle & Wellbeing
                    </option>

                    <option>
                      Natural Healing
                    </option>

                    <option>
                      Organic Food & Nutrition
                    </option>

                    <option>
                      General Enquiry
                    </option>

                  </select>

                  

                  {/* Reason */}
                  <textarea
                    name="reason"
                    rows={2}
                    placeholder="Tell us about your enquiry"
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B69B6B] resize-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#7A5C35] hover:bg-[#654A2B] text-white font-semibold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <Calendar size={15} />

                    {loading
                      ? "Submitting..."
                      : "Confirm Appointment"}
                  </button>

                </form>
              </div>
            </div>

            {/* Why Choose Balprada */}
            <div className="bg-[#F8F4EA] border border-[#E6DDCC] rounded-2xl p-6">

              <h3 className="font-semibold text-gray-900 mb-4">
                Why Choose Balprada
              </h3>

              <ul className="space-y-3 text-sm text-gray-700">

                {[
                  "Holistic Ayurvedic Approach",
                  "Traditional Wellness Practices",
                  "Natural & Supportive Care",
                  "Personalized Wellness Guidance",
                  "Focus on Complete Wellbeing",
                  "Peaceful Wellness Environment",
                  "Ayurvedic & Lifestyle Services",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[#7A5C35] mt-0.5 shrink-0"
                    />

                    {point}
                  </li>
                ))}

              </ul>
            </div>


          </div>
        </div>

      </div>

      {/* Thank You Popup */}
      {submitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative">

            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-[#F8F4EA] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2
                size={36}
                className="text-[#7A5C35]"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank You!
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Your appointment enquiry has been received.
              Our Balprada team will contact you shortly to
              confirm your appointment.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-[#7A5C35] hover:bg-[#654A2B] text-white font-semibold py-2.5 rounded-xl transition text-sm"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}