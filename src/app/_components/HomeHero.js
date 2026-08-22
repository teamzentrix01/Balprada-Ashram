"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "../data";

const homeBannerSlides = [
  {
    src: "/home-banners/01-ayurvedic-treatment.png",
    mobileSrc: "/home-banners/mobile-v2/01-ayurvedic-treatment.webp",
    alt: "Traditional Ayurvedic herbal body treatment",
    position: "center top",
  },
  {
    src: "/home-banners/02-facial-oil-therapy.png",
    mobileSrc: "/home-banners/mobile-v2/02-facial-oil-therapy.webp",
    alt: "Ayurvedic facial oil therapy",
    position: "center top",
  },
  {
    src: "/home-banners/03-ayurvedic-herbs.png",
    mobileSrc: "/home-banners/mobile-v2/03-ayurvedic-herbs.webp",
    alt: "Ayurvedic herbs, oils and traditional preparations",
    position: "center top",
  },
  {
    src: "/home-banners/04-panchakarma-therapy-room.png",
    mobileSrc: "/home-banners/mobile-v2/04-panchakarma-therapy-room.webp",
    alt: "Traditional Panchakarma therapy room",
    position: "center top",
  },
  {
    src: "/home-banners/05-herbal-medicines.png",
    mobileSrc: "/home-banners/mobile-v2/05-herbal-medicines.webp",
    alt: "Traditional herbal medicines and mortar",
    position: "center top",
  },
];

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeBannerSlides.length);
    }, 5500);

    return () => window.clearInterval(sliderTimer);
  }, []);

  return (
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
  );
}

export default HomeHero;
