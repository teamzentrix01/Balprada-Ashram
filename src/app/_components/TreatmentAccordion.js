"use client";

import Link from "next/link";
import {
  Activity,
  Apple,
  BatteryCharging,
  Brain,
  BrainCircuit,
  CalendarCheck,
  CalendarDays,
  Droplets,
  Gauge,
  Gem,
  HeartHandshake,
  HeartPulse,
  PersonStanding,
  Scale,
  Sparkles,
  Sun,
  TestTube,
  Utensils,
  Waves,
} from "lucide-react";
import { useState } from "react";
import { treatmentCategories } from "../treatmentArchitecture";

const iconMap = {
  Activity,
  Apple,
  BatteryCharging,
  Brain,
  BrainCircuit,
  CalendarCheck,
  CalendarDays,
  Droplets,
  Gauge,
  Gem,
  HeartHandshake,
  HeartPulse,
  PersonStanding,
  Scale,
  Sparkles,
  Sun,
  TestTube,
  Utensils,
  Waves,
};

export default function TreatmentAccordion({ compact = false }) {
  const [activeSlug, setActiveSlug] = useState(treatmentCategories[0].slug);

  return (
    <div className={`treatment-accordion ${compact ? "compact" : ""}`}>
      {treatmentCategories.map((category) => {
        const isActive = category.slug === activeSlug;

        return (
          <article
            className={`treatment-accordion-item ${isActive ? "active" : ""}`}
            key={category.slug}
            onFocus={() => setActiveSlug(category.slug)}
            onMouseEnter={() => setActiveSlug(category.slug)}
          >
            <img src={category.image} alt="" />
            <div className="treatment-accordion-shade" />

            {isActive ? (
              <div className="treatment-accordion-content">
                <div>
                  <p className="eyebrow">Balprada Treatment</p>
                  <h3>{category.title}</h3>
                  <p>{category.summary}</p>
                </div>

                <p className="treatment-includes">Our treatments include</p>
                <div className="condition-icon-grid">
                  {category.conditions.map((condition) => {
                    const Icon = iconMap[condition.icon] || Activity;
                    return (
                      <Link
                        href={`/treatments/${category.slug}/${condition.slug}`}
                        key={condition.slug}
                      >
                        <span>
                          <Icon aria-hidden="true" strokeWidth={1.5} />
                        </span>
                        <strong>{condition.title}</strong>
                      </Link>
                    );
                  })}
                </div>

                <Link className="button accordion-button" href={`/treatments/${category.slug}`}>
                  Explore More
                </Link>
              </div>
            ) : (
              <button
                aria-label={`Open ${category.title}`}
                className="treatment-accordion-label"
                onClick={() => setActiveSlug(category.slug)}
                type="button"
              >
                <span>{category.shortTitle}</span>
              </button>
            )}
          </article>
        );
      })}
    </div>
  );
}
