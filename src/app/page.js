"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, Clock3, Hospital, PhoneCall } from "lucide-react";
import { ContactPanel, Footer, Header, SectionHeading } from "./_components/SiteChrome";
import TreatmentAccordion from "./_components/TreatmentAccordion";
import TreatmentJourney from "./_components/TreatmentJourney";
import {
  facilities,
  careProcess,
  galleryImages,
  heroImages,
  opdInfo,
  site,
  testimonials,
} from "./data";

const aboutCards = [
  {
    image: galleryImages[5],
    title: "We practice ancient medical systems",
  },
  {
    image: galleryImages[0],
    title: "Legacy carried by visionary vaidyas",
  },
  {
    image: galleryImages[1],
    title: "Trusted Ayurvedic chikitsalaya",
  },
  {
    image: galleryImages[3],
    title: "Passing true seva and knowledge",
  },
  {
    image: galleryImages[2],
    title: "Unmatched quality of medicine",
  },
];

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

function HolisticSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items?.length) {
    return null;
  }

  const activeItem = items[activeIndex];

  return (
    <div className="circle-care">
      <img src={activeItem.image} alt={`${activeItem.title} at Balprada`} />
      <span>{activeItem.title}</span>
      <div className="holistic-counter">
        <b>{String(activeIndex + 1).padStart(2, "0")}</b>
        <i>/{String(items.length).padStart(2, "0")}</i>
        <button
          className="holistic-next"
          type="button"
          onClick={() =>
            setActiveIndex((current) => (current + 1) % items.length)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const slides = [heroImages[1], "/wellness/naturopathy.jpg", galleryImages[5], "/wellness/yoga.jpg", heroImages[0], "/wellness/panchakarma.jpg", "/wellness/physiotherapy.jpg"];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(sliderTimer);
  }, [slides.length]);

  return (
    <main className="site-shell">
      <section className="home-hero">
        <div className="hero-slider" aria-label="Balprada hero image slider">
          {slides.map((image, index) => (
            <img
              className={`hero-slide ${index === activeSlide ? "active" : ""}`}
              key={image}
              src={image}
              alt={`Balprada wellness slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <Header />
        <img className="hero-seal" src="/balprada-seal.svg" alt="" aria-hidden="true" />
        <div className="hero-content home-hero-copy">
          <p className="home-hero-tagline">{site.tagline}</p>
          <h1 className="home-hero-title" aria-label={site.fullName}>
            <span>Balprada Ayurvedic</span>
            <span>Hospital &amp; Research Center</span>
          </h1>
          <span className="home-hero-mantra">{site.mantra}</span>
          <div className="hero-actions home-hero-actions">
            <Link className="button primary gradient" href="/contact">
              Book Now
            </Link>
            <Link className="button glass" href="/treatments">
              Our Treatments
            </Link>
          </div>
        </div>
        <div className="hero-dots" aria-label="Choose hero image">
          {slides.map((image, index) => (
            <button
              type="button"
              key={`${image}-dot`}
              className={index === activeSlide ? "active" : ""}
              aria-label={`Show hero image ${index + 1}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

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

      <section className="about-showcase section">
        <SectionHeading
          align="center"
          eyebrow="About Us"
          title="Healing Rooted in Balprada Tradition"
          text="Built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji, Balprada blends Ayurvedic wisdom, in-house herbal medicines, experienced doctors, and a peaceful ashram environment for long-term healing."
        />
        <div className="image-row">
          {aboutCards.map((item, index) => (
            <figure key={item.title}>
              <img src={item.image} alt={`Balprada about highlight ${index + 1}`} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
        <Link className="button primary gradient about-more" href="/about">
          Explore More
        </Link>
      </section>

      <section className="treatments-stage section" id="treatments">
        <div className="section-heading">
          <SectionHeading
            eyebrow="Our Treatments"
            title="Health concerns we support with Ayurvedic care"
          />
          <Link className="button primary gradient" href="/treatments">
            Explore Our Treatments
          </Link>
        </div>
        <TreatmentAccordion compact />
      </section>

      <section className="holistic section" id="holistic-care">
        <div>
          <SectionHeading
            eyebrow="Our Holistic Approach"
            title="Care that brings body, mind and lifestyle together"
            text="Balprada combines consultation, Ayurvedic medicines, yoga, panchakarma, naturopathy, diet guidance and follow-up care to make the treatment journey more complete."
          />
          <Link className="button primary gradient" href="/facilities">
            Explore More
          </Link>
        </div>
        <HolisticSlider items={facilities.slice(0, 6)} />
      </section>

      <div className="holistic-curve" aria-hidden="true" />

      <section className="care-process section">
        <div className="section-heading">
          <SectionHeading
            eyebrow="Care Process"
            title="A clear path from consultation to follow-up"
          />
          <Link className="button secondary" href="/contact">
            Plan Your Visit
          </Link>
        </div>
        <div className="process-grid">
          {careProcess.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <SectionHeading title={item.title} text={item.text} level={3} />
            </article>
          ))}
        </div>
      </section>

      <TreatmentJourney />

      <section className="section">
        <div className="section-heading centered-heading">
          <SectionHeading eyebrow="Facilities" title="Facilities" />
          
        </div>
        <div className="facility-grid">
          {facilities.map((item) => (
            <Link className="facility-card" href={`/facilities/${item.slug}`} key={item.slug}>
              <img src={item.image} alt={item.title} />
              <div>
                <SectionHeading title={item.title} text={item.text} level={3} />
              </div>
            </Link>
          ))}
        </div>
        <Link className="button secondary" href="/facilities">
            View All
          </Link>
      </section>
      

      <section className="stories section">
        <SectionHeading
          align="center"
          eyebrow="Stories of Trust and Healing"
          title="Blessings and Experiences"
        />
        <div className="story-grid">
          {testimonials.map((item) => (
            <article key={item.name}>
              <small>{item.tag}</small>
              <span>"</span>
              <p>{item.text}</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </section>
      <ContactPanel />
      <Footer />
    </main>
  );
}
