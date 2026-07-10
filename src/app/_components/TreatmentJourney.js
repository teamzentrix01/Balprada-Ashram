"use client";

import { Check, ChevronLeft, ChevronRight, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const steps = [
  {
    key: "concern",
    title: "What is your primary concern?",
    text: "Choose the main purpose of your visit.",
    options: ["Kidney", "Liver", "Cancer Support", "Heart", "Diabetes", "Women Health"],
  },
  {
    key: "duration",
    title: "How long have you had this concern?",
    text: "This helps us understand the stage of your care journey.",
    options: ["Less than 3 months", "3-12 months", "1-3 years", "More than 3 years"],
  },
  {
    key: "support",
    title: "What support are you looking for?",
    text: "Select the outcome that matters most right now.",
    options: ["Doctor consultation", "Ayurvedic medicines", "Diet guidance", "Holistic therapies"],
  },
  {
    key: "history",
    title: "Are you currently taking treatment?",
    text: "Balprada care can be planned responsibly around your current treatment.",
    options: ["Yes, regular treatment", "Occasional medicines", "No current treatment", "Need guidance"],
  },
  {
    key: "visit",
    title: "How would you prefer to connect?",
    text: "Choose the most convenient consultation option.",
    options: ["Main Branch", "Moradabad Branch", "Phone consultation", "Need help deciding"],
  },
  {
    key: "contact",
    title: "Tell us how we can reach you",
    text: "Share your details and our team can guide you with the next step.",
    options: [],
  },
];

const treatmentLinks = {
  Kidney: "/treatments/kidney-care",
  Liver: "/treatments/liver-digestive",
  "Cancer Support": "/treatments/cancer-support",
  Heart: "/treatments/heart-metabolic",
  Diabetes: "/treatments/heart-metabolic/diabetes",
  "Women Health": "/treatments/women-wellness",
};

export default function TreatmentJourney() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const [advancing, setAdvancing] = useState(false);

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;
  const canContinue =
    step === steps.length - 1
      ? contact.name.trim().length > 1 && contact.phone.trim().length >= 8
      : Boolean(answers[current.key]);

  const recommendedLink = useMemo(
    () => treatmentLinks[answers.concern] || "/treatments",
    [answers.concern],
  );

  function choose(value) {
    if (advancing) return;
    setError("");
    setAnswers((previous) => ({ ...previous, [current.key]: value }));
    setAdvancing(true);
    window.setTimeout(() => {
      setStep((currentStep) => Math.min(currentStep + 1, steps.length - 1));
      setAdvancing(false);
    }, 260);
  }

  function next() {
    if (step === steps.length - 1) {
      if (!canContinue) {
        setError("Please enter your name and a valid phone number.");
        return;
      }
      setComplete(true);
      return;
    }
    if (!answers[current.key]) {
      setAnswers((previous) => ({ ...previous, [current.key]: "Not specified" }));
    }
    setError("");
    setStep((value) => value + 1);
  }

  function back() {
    if (complete) {
      setComplete(false);
      return;
    }
    setStep((value) => Math.max(0, value - 1));
  }

  return (
    <section className="journey-card">
      <h2>Get started on your treatment journey</h2>

      <div className="journey-progress" aria-label={`Step ${step + 1} of 6`}>
        <span style={{ width: `${progress}%` }} />
        <strong>{String(step + 1).padStart(2, "0")}/06</strong>
      </div>

      {complete ? (
        <div className="journey-complete">
          <span>
            <ClipboardCheck aria-hidden="true" />
          </span>
          <p className="eyebrow">Journey Complete</p>
          <h3>Thank you, {contact.name}</h3>
          <p>
            Based on your selections, we have prepared a relevant treatment path.
            Our team can further guide you after reviewing your health details.
          </p>
          <div>
            <Link className="button primary gradient" href={recommendedLink}>
              View Recommended Care
            </Link>
            <Link className="button secondary" href="/contact">
              Contact Balprada
            </Link>
          </div>
        </div>
      ) : (
        <div className="journey-grid">
          <div className="journey-question" key={current.key}>
            <h3>{current.title}</h3>
            <p>{current.text}</p>

            {step < steps.length - 1 ? (
              <div className="choice-cloud">
                {current.options.map((option) => (
                  <button
                    className={answers[current.key] === option ? "selected" : ""}
                    disabled={advancing}
                    key={option}
                    onClick={() => choose(option)}
                    type="button"
                  >
                    {answers[current.key] === option ? <Check aria-hidden="true" /> : null}
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <div className="journey-contact-fields">
                <input
                  aria-label="Your name"
                  onChange={(event) =>
                    setContact((value) => ({ ...value, name: event.target.value }))
                  }
                  placeholder="Your Name"
                  type="text"
                  value={contact.name}
                />
                <input
                  aria-label="Phone number"
                  onChange={(event) =>
                    setContact((value) => ({ ...value, phone: event.target.value }))
                  }
                  placeholder="Phone Number"
                  type="tel"
                  value={contact.phone}
                />
                {error ? <p className="journey-error">{error}</p> : null}
              </div>
            )}

            <div className="journey-actions">
              {step > 0 ? (
                <button className="button secondary" onClick={back} type="button">
                  <ChevronLeft aria-hidden="true" />
                  Back
                </button>
              ) : null}
              <button
                className="button primary gradient"
                onClick={next}
                type="button"
              >
                {step === steps.length - 1 ? "Finish" : "Next"}
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <aside>
            <div className="bird-mark">B</div>
            <p>We are analysing your requirements</p>
            <small>
              {Object.entries(answers).map(([key, value]) => (
                <span key={key}>{value}</span>
              ))}
            </small>
          </aside>
        </div>
      )}
    </section>
  );
}
