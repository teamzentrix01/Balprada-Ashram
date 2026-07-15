"use client";

import Link from "next/link";
import { useState } from "react";
import { aboutAreas } from "../aboutData";
import { SectionHeading } from "./SiteChrome";

export default function AboutExplorer() {
  const [activeSlug, setActiveSlug] = useState(aboutAreas[0].slug);
  const active = aboutAreas.find((item) => item.slug === activeSlug) || aboutAreas[0];

  return (
    <section className="about-explorer section">
      <div className="about-explorer-heading">
        <SectionHeading
          align="center"
          eyebrow="Explore Balprada"
          title="What makes the care experience different"
        />
      </div>

      <div className="about-sticky-tabs" aria-label="Balprada experience areas">
        {aboutAreas.map((item) => (
          <button
            className={item.slug === active.slug ? "active" : ""}
            key={item.slug}
            onClick={() => setActiveSlug(item.slug)}
            type="button"
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div className="about-explorer-panel" key={active.slug}>
        <div className="about-explorer-copy">
          <SectionHeading
            eyebrow={active.eyebrow}
            title={active.title}
            text={active.summary}
            level={3}
          />
          <Link className="button primary gradient" href={`/about/${active.slug}`}>
            Explore Full Page
          </Link>
        </div>
        <img src={active.hero} alt={active.title} />
      </div>

      <div className="about-explorer-cards">
        {active.cards.map((card) => (
          <article key={card.title}>
            <img src={card.image} alt={card.title} />
            <div>
              <SectionHeading title={card.title} text={card.text} level={3} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
