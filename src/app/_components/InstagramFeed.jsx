"use client";

import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  ExternalLink,
  Heart,
  Play,
  CheckCircle2,
  X,
} from "lucide-react";
import { CLOUDINARY_REELS } from "./cloudinaryVideos";
import styles from "./InstagramFeed.module.css";

const InstagramLogo = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramFeed() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 1.2,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        startDelay: 0,
      }),
    ]
  );

  // Close modal on Escape key & lock scroll when open
  useEffect(() => {
    if (!selectedVideo) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedVideo]);

  // Ensure enough items for seamless loop in Embla carousel
  const emblaItems =
    CLOUDINARY_REELS.length < 12
      ? [...CLOUDINARY_REELS, ...CLOUDINARY_REELS, ...CLOUDINARY_REELS]
      : CLOUDINARY_REELS;

  const handleMouseEnter = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll) autoScroll.stop();
  };

  const handleMouseLeave = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll) autoScroll.play();
  };

  return (
    <div className={styles.feedSection}>
      {/* Profile Bar */}
      <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>BP</div>
          </div>
          <div className={styles.profileMeta}>
            <div className={styles.handleRow}>
              <a
                href="https://www.instagram.com/balpradaayurvedics/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.handle}
              >
                @balpradaayurvedics
              </a>
              <span className={styles.verifiedBadge} title="Verified Ayurvedic Center">
                <CheckCircle2 size={16} fill="#0095f6" stroke="#fff" />
              </span>
            </div>
            <p className={styles.bioSnippet}>
              Authentic Ayurveda, Patient Healing Stories &amp; Herbal Formulations 🌿
            </p>
          </div>
        </div>

        <div className={styles.headerActions}>
          <a
            href="https://www.instagram.com/balpradaayurvedics/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.followBtn}
          >
            <InstagramLogo size={18} />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>

      {/* Embla Continuous Auto-Scroll Carousel */}
      <div
        className={styles.embla}
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.emblaContainer}>
          {emblaItems.map((reel, idx) => (
            <div
              key={`${reel.id}-${idx}`}
              className={styles.emblaSlide}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <article
                className={styles.postCard}
                onClick={() => setSelectedVideo(reel)}
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector("video");
                  if (vid) vid.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector("video");
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                {/* Background Video Preview */}
                <video
                  src={reel.videoUrl}
                  poster={reel.poster}
                  preload="metadata"
                  muted
                  playsInline
                  loop
                  className={styles.postImg}
                />

                {/* Reel Badge */}
                <div className={`${styles.mediaBadge} ${styles.reelBadge}`}>
                  <Play size={12} fill="#fff" />
                  <span>Reel</span>
                </div>

                {/* Center Play Icon Hover Effect */}
                <div className={styles.centerPlayButton} aria-hidden="true">
                  <Play size={22} fill="#fff" />
                </div>

                {/* Hover / Overlay Details */}
                <div className={styles.cardOverlay}>
                  <p className={styles.cardCaption}>{reel.title}</p>
                  <div className={styles.cardStats}>
                    <span className={styles.openLink}>
                      Watch Reel <ExternalLink size={13} />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Caption */}
      <div className={styles.footerNote}>
        <InstagramLogo size={15} />
        <span>
          Real patient stories &amp; Ayurvedic reels from <strong>@balpradaayurvedics</strong>
        </span>
      </div>

      {/* Video Modal Player - Landscape Cinema Format */}
      {selectedVideo && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video player"
            >
              <X size={20} />
            </button>

            <div className={styles.modalVideoWrapper}>
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className={styles.modalVideoPlayer}
              />
            </div>

            <div className={styles.modalDetails}>
              <div className={styles.modalInfoLeft}>
                <div
                  className={styles.avatarRing}
                  style={{ width: 42, height: 42, padding: 2, flexShrink: 0 }}
                >
                  <div
                    className={styles.avatarInner}
                    style={{ fontSize: "0.82rem" }}
                  >
                    BP
                  </div>
                </div>
                <div className={styles.modalTitleGroup}>
                  <div className={styles.handleRow}>
                    <span
                      className={styles.handle}
                      style={{ fontSize: "0.95rem", color: "#e8f5e9" }}
                    >
                      @balpradaayurvedics
                    </span>
                    <CheckCircle2 size={15} fill="#0095f6" stroke="#fff" />
                  </div>
                  <h3 className={styles.modalTitle}>{selectedVideo.title}</h3>
                  <p className={styles.modalCaption}>{selectedVideo.caption}</p>
                </div>
              </div>

              <div className={styles.modalActions}>
                <a
                  href={selectedVideo.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.followBtn}
                  style={{ padding: "0.5rem 1.15rem", fontSize: "0.82rem" }}
                >
                  <InstagramLogo size={16} />
                  <span>Open on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
