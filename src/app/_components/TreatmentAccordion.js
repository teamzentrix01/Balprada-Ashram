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
import { useEffect, useRef, useState } from "react";
import { treatmentCategories } from "../treatmentArchitecture";
import SectionHeading from "./SectionHeading";

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
  const hoverTimer = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(hoverTimer.current);
  }, []);

  const activateOnHoverIntent = (slug, pointerType) => {
    if (pointerType && pointerType !== "mouse") return;
    if (slug === activeSlug) return;

    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setActiveSlug(slug);
      hoverTimer.current = null;
    }, 150);
  };

  const cancelHoverIntent = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };

  return (
    <div className={`treatment-accordion ${compact ? "compact" : ""}`}>
      {treatmentCategories.map((category) => {
        const isActive = category.slug === activeSlug;

        return (
          <article
            className={`treatment-accordion-item ${isActive ? "active" : ""}`}
            key={category.slug}
            onFocus={() => {
              cancelHoverIntent();
              setActiveSlug(category.slug);
            }}
            onPointerEnter={(event) => activateOnHoverIntent(category.slug, event.pointerType)}
            onPointerLeave={cancelHoverIntent}
          >
            <img src={category.image} alt="" />
            <div className="treatment-accordion-shade" />

            <div
              aria-hidden={!isActive}
              className="treatment-accordion-content"
              inert={!isActive}
            >
              <div>
                <SectionHeading
                  eyebrow="Balprada Treatment"
                  title={category.title}
                  text={category.summary}
                  level={3}
                />
              </div>

              <p className="treatment-includes">Our treatments include</p>
              <div className="condition-icon-grid">
                {category.conditions.slice(0, 3).map((condition) => {
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

            <button
              aria-label={`Open ${category.title}`}
              aria-hidden={isActive}
              className="treatment-accordion-label"
              onClick={() => setActiveSlug(category.slug)}
              tabIndex={isActive ? -1 : 0}
              type="button"
            >
              <span>{category.shortTitle}</span>
            </button>
          </article>
        );
      })}
    </div>
  );
}
