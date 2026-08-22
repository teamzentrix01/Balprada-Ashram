"use client";

import { CalendarDays, Clock3, Hospital, PhoneCall } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { opdInfo } from "../data";

const opdCards = [
  {
    icon: CalendarDays,
    text: opdInfo.items[0],
  },
  {
    icon: Hospital,
    text: opdInfo.items[1],
  },
  {
    icon: Clock3,
    text: opdInfo.items[2],
  },
  {
    icon: PhoneCall,
    text: "Vaidya ji is available at the Moradabad branch on Sundays. Please call or WhatsApp before visiting.",
  },
];

export function OpdHighlight() {
  return (
    <section className="opd-highlight section">
      <div>
        <SectionHeading
          eyebrow="Daily OPD"
          title={opdInfo.title}
          text={opdInfo.summary}
        />
      </div>
      <div className="opd-list opd-card-grid">
        {opdCards.map(({ icon: Icon, text }, index) => (
          <article className="opd-info-card" key={text} style={{ "--opd-card-index": index }}>
            <span className="opd-card-icon" aria-hidden="true">
              <Icon size={22} strokeWidth={1.8} />
            </span>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OpdHighlight;
