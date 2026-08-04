"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  ExternalLink,
  Hospital,
  PhoneCall,
  PlayCircle,
  Quote,
} from "lucide-react";
import { ContactPanel, Footer, Header, SectionHeading } from "./_components/SiteChrome";
import TreatmentAccordion from "./_components/TreatmentAccordion";
import TreatmentJourney from "./_components/TreatmentJourney";
import {
  facilities,
  careProcess,
  galleryImages,
  opdInfo,
  site,
  testimonials,
} from "./data";

const homeBannerSlides = [
  {
    src: "/home-banners/01-ayurvedic-treatment.png",
    mobileSrc: "/home-banners/mobile-v2/01-ayurvedic-treatment.webp",
    alt: "Traditional Ayurvedic herbal body treatment",
    position: "center center",
  },
  {
    src: "/home-banners/02-facial-oil-therapy.png",
    mobileSrc: "/home-banners/mobile-v2/02-facial-oil-therapy.webp",
    alt: "Ayurvedic facial oil therapy",
    position: "center 45%",
  },
  {
    src: "/home-banners/03-ayurvedic-herbs.png",
    mobileSrc: "/home-banners/mobile-v2/03-ayurvedic-herbs.webp",
    alt: "Ayurvedic herbs, oils and traditional preparations",
    position: "center 58%",
  },
  {
    src: "/home-banners/04-panchakarma-therapy-room.png",
    mobileSrc: "/home-banners/mobile-v2/04-panchakarma-therapy-room.webp",
    alt: "Traditional Panchakarma therapy room",
    position: "center center",
  },
  {
    src: "/home-banners/05-herbal-medicines.png",
    mobileSrc: "/home-banners/mobile-v2/05-herbal-medicines.webp",
    alt: "Traditional herbal medicines and mortar",
    position: "center center",
  },
];

const testimonialVideos = [
  {
    id: "XVSIS1k3ONg",
    type: "Patient testimonial",
    title: "A Balprada patient shares her experience",
    description:
      "A patient account published by Balprada, reflecting on her treatment journey and experience with the hospital team.",
    thumbnail: "/testimonials/videos/patient-testimonial.jpg",
    sourceUrl:
      "https://balprada.blogspot.com/2022/03/kidney-failure-patients-testimonial.html",
    sourceLabel: "View the original Balprada post",
  },
  {
    id: "4QXCurPZ9tw",
    type: "Hospital feature",
    title: "Inside Balprada Ashram and its care environment",
    description:
      "A public feature filmed at Balprada Ashram, introducing its approach, surroundings and patient-care environment.",
    thumbnail: "/testimonials/videos/balprada-feature.jpg",
    sourceUrl: "https://www.youtube.com/watch?v=4QXCurPZ9tw",
    sourceLabel: "Watch the original feature",
  },
];

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

function TestimonialShowcase({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeView, setActiveView] = useState("stories");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const itemCount = items?.length ?? 0;

  const startSlide = (direction) => {
    if (slideDirection) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveIndex((current) =>
        direction === "next"
          ? (current + 1) % itemCount
          : (current - 1 + itemCount) % itemCount,
      );
      return;
    }

    setSlideDirection(direction);
  };

  const finishSlide = () => {
    if (!slideDirection) return;

    setActiveIndex((current) =>
      slideDirection === "next"
        ? (current + 1) % itemCount
        : (current - 1 + itemCount) % itemCount,
    );
    setSlideDirection(null);
  };

  useEffect(() => {
    if (!itemCount || activeView !== "stories" || isPaused || slideDirection) {
      return undefined;
    }

    const timer = window.setTimeout(() => startSlide("next"), 6000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, activeView, isPaused, itemCount, slideDirection]);

  if (!itemCount) {
    return null;
  }

  const visibleItems = [
    items[(activeIndex - 1 + itemCount) % itemCount],
    items[activeIndex],
    items[(activeIndex + 1) % itemCount],
  ];
  const activeVideo = testimonialVideos[activeVideoIndex];

  return (
    <div
      className="testimonial-showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onKeyDown={(event) => {
        if (activeView !== "stories") return;
        if (event.key === "ArrowLeft") startSlide("previous");
        if (event.key === "ArrowRight") startSlide("next");
      }}
    >
      <div className="testimonial-tabs" role="tablist" aria-label="Testimonial type">
        <button
          type="button"
          role="tab"
          id="patient-stories-tab"
          className={activeView === "stories" ? "active" : ""}
          aria-selected={activeView === "stories"}
          aria-controls="patient-stories-panel"
          onClick={() => {
            setSlideDirection(null);
            setActiveView("stories");
          }}
        >
          Patient Stories
        </button>
        <button
          type="button"
          role="tab"
          id="video-stories-tab"
          className={activeView === "video" ? "active" : ""}
          aria-selected={activeView === "video"}
          aria-controls="video-stories-panel"
          onClick={() => {
            setSlideDirection(null);
            setActiveView("video");
          }}
        >
          Video Testimonials
        </button>
      </div>

      {activeView === "stories" ? (
        <div
          id="patient-stories-panel"
          role="tabpanel"
          aria-labelledby="patient-stories-tab"
          className="testimonial-panel"
        >
          <div className="testimonial-viewport">
            <div
              className={`testimonial-track testimonial-index-1 ${
                slideDirection ? `animating-${slideDirection}` : ""
              }`}
              onAnimationEnd={finishSlide}
            >
              {visibleItems.map((item, index) => (
                <article
                  className={`testimonial-card ${index === 1 ? "active" : ""}`}
                  key={`${item.name}-${index}`}
                  aria-hidden={index !== 1}
                >
                  <div className="testimonial-portrait">
                    <img src={item.image} alt={item.imageAlt} loading="lazy" />
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.tag}</small>
                    </div>
                  </div>
                  <div className="testimonial-copy">
                    <Quote aria-hidden="true" />
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="testimonial-controls">
            <button
              type="button"
              onClick={() => startSlide("previous")}
              aria-label="Previous testimonial"
              disabled={Boolean(slideDirection)}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <span aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(itemCount).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => startSlide("next")}
              aria-label="Next testimonial"
              disabled={Boolean(slideDirection)}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <div
          id="video-stories-panel"
          role="tabpanel"
          aria-labelledby="video-stories-tab"
          className="testimonial-video-panel"
        >
          <div className="testimonial-video-frame">
            <iframe
              key={activeVideo.id}
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?rel=0`}
              title={activeVideo.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="testimonial-video-copy">
            <span>{activeVideo.type}</span>
            <h3>{activeVideo.title}</h3>
            <p>{activeVideo.description}</p>
            <a href={activeVideo.sourceUrl} target="_blank" rel="noreferrer">
              {activeVideo.sourceLabel}
              <ExternalLink aria-hidden="true" />
            </a>
            <div className="testimonial-video-list" aria-label="Choose a video story">
              {testimonialVideos.map((video, index) => (
                <button
                  type="button"
                  key={video.id}
                  className={index === activeVideoIndex ? "active" : ""}
                  aria-pressed={index === activeVideoIndex}
                  onClick={() => setActiveVideoIndex(index)}
                >
                  <span className="testimonial-video-thumb">
                    <img src={video.thumbnail} alt="" loading="lazy" />
                    <PlayCircle aria-hidden="true" />
                  </span>
                  <span className="testimonial-video-label">
                    <small>{video.type}</small>
                    <strong>{video.title}</strong>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeBannerSlides.length);
    }, 5500);

    return () => window.clearInterval(sliderTimer);
  }, []);

  return (
    <main className="site-shell">
      <section className="home-hero">
        <div className="hero-slider" aria-label="Balprada hero image slider">
          {homeBannerSlides.map((slide, index) => (
            <picture key={slide.src}>
              <source media="(max-width: 767px)" srcSet={slide.mobileSrc} />
              <img
                className={`hero-slide ${index === activeSlide ? "active" : ""}`}
                src={slide.src}
                alt={slide.alt}
                style={{ objectPosition: slide.position }}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </picture>
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
          {homeBannerSlides.map((slide, index) => (
            <button
              type="button"
              key={`${slide.src}-dot`}
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
      

      <section className="stories section" id="testimonials">
        <SectionHeading
          align="center"
          eyebrow="Blessings and Experiences"
          title="Stories of Trust and Healing"
        />
        <TestimonialShowcase items={testimonials} />
      </section>
      <ContactPanel />
      <Footer />
    </main>
  );
}
