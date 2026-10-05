"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  PlayCircle,
  Quote,
  Star,
  CheckCircle2,
} from "lucide-react";
import InstagramFeed from "./InstagramFeed";

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const testimonialVideos = [
  {
    id: "XVSIS1k3ONg",
    platform: "youtube",
    type: "Patient testimonial",
    title: "A Balprada patient shares her experience",
    description:
      "A patient account published by Balprada, reflecting on her treatment journey and experience with the hospital team.",
    thumbnail: "/testimonials/videos/patient-testimonial.jpg",
    sourceUrl:
      "https://balprada.blogspot.com/2022/03/kidney-failure-patients-testimonial.html",
    sourceLabel: "View the Balprada post",
  },
  {
    id: "4QXCurPZ9tw",
    platform: "youtube",
    type: "Hospital feature",
    title: "Inside Balprada Ashram and its care environment",
    description:
      "A public feature filmed at Balprada Ashram, introducing its approach, surroundings and patient-care environment.",
    thumbnail: "/testimonials/videos/balprada-feature.jpg",
    sourceUrl: "https://www.youtube.com/watch?v=4QXCurPZ9tw",
    sourceLabel: "Watch the original feature",
  },
];

const getInitials = (name) => {
  if (!name) return "BP";
  const clean = name.replace(/^Dr\.\s*/i, "").trim().split(" ");
  if (clean.length === 1) return clean[0].slice(0, 2).toUpperCase();
  return (clean[0][0] + clean[clean.length - 1][0]).toUpperCase();
};

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
          Google Reviews ({itemCount})
        </button>
        <button
          type="button"
          role="tab"
          id="instagram-stories-tab"
          className={activeView === "instagram" ? "active" : ""}
          aria-selected={activeView === "instagram"}
          aria-controls="instagram-stories-panel"
          onClick={() => {
            setSlideDirection(null);
            setActiveView("instagram");
          }}
          style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
        >
          <InstagramIcon size={15} />
          Instagram Feed &amp; Reels
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
          Video Stories
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
                  <div className="testimonial-portrait author-card">
                    <div className="testimonial-badge-row">
                      <span className="google-review-badge">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="google-icon"
                        >
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                        <span>Google Review</span>
                      </span>
                    </div>

                    <div className="testimonial-avatar">
                      <span>{getInitials(item.name)}</span>
                    </div>

                    <div className="testimonial-rating-stars">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill="#f59e0b"
                          stroke="none"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="rating-num">5.0</span>
                    </div>

                    <div className="testimonial-meta">
                      <strong>{item.name}</strong>
                      <small>{item.tag}</small>
                      {item.location && (
                        <span className="testimonial-location">{item.location}</span>
                      )}
                    </div>
                  </div>

                  <div className="testimonial-copy">
                    <div className="testimonial-quote-row">
                      <Quote aria-hidden="true" />
                    </div>
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
      ) : activeView === "instagram" ? (
        <div
          id="instagram-stories-panel"
          role="tabpanel"
          aria-labelledby="instagram-stories-tab"
          style={{ width: "100%", animation: "fadeIn 0.3s ease-in-out" }}
        >
          <InstagramFeed />
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
            <a
              href={activeVideo.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
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
