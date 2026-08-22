"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle, Quote } from "lucide-react";

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

export function TestimonialShowcase({ items }) {
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

export default TestimonialShowcase;
