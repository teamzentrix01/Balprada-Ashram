"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // Close modal on Escape key, freeze background scroll & blur background
  useEffect(() => {
    if (!selectedVideo) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    document.addEventListener("keydown", handleKeyDown);

    // Completely lock background scroll on desktop and mobile
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyTouchAction = document.body.style.touchAction;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.body.classList.add("modal-open-blur");

    // Prevent background touch-scrolling on mobile devices
    const preventBackgroundTouch = (e) => {
      const modal = document.querySelector(`.${styles.modalContainer}`);
      if (modal && modal.contains(e.target)) {
        return; // Allow scrolling inside modal details if content overflows
      }
      e.preventDefault();
    };
    document.addEventListener("touchmove", preventBackgroundTouch, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchmove", preventBackgroundTouch);
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.touchAction = originalBodyTouchAction;
      document.body.classList.remove("modal-open-blur");
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

      {/* Video Modal Player - Rendered via Portal to document.body for true screen centering */}
      {isMounted && selectedVideo && typeof document !== "undefined" && createPortal(
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Instagram Reel Video Player"
        >
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prominent High-Contrast Close Button */}
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video player"
              title="Close (Esc)"
            >
              <X size={22} strokeWidth={2.5} />
            </button>

            {/* Video Frame (Native 9:16 Reel Aspect Ratio) */}
            <div className={styles.modalVideoWrapper}>
              <video
                key={selectedVideo.id || selectedVideo.videoUrl}
                src={selectedVideo.videoUrl}
                poster={selectedVideo.poster}
                controls
                autoPlay
                playsInline
                className={styles.modalVideoPlayer}
              />
            </div>

            {/* Reel Details Panel */}
            <div className={styles.modalDetails}>
              <div className={styles.modalHeader}>
                <div className={styles.modalProfile}>
                  <div className={styles.avatarRingSm}>
                    <div className={styles.avatarInnerSm}>BP</div>
                  </div>
                  <div className={styles.profileText}>
                    <div className={styles.handleRow}>
                      <a
                        href={selectedVideo.permalink || "https://www.instagram.com/balpradaayurvedics/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.modalHandle}
                      >
                        @balpradaayurvedics
                      </a>
                      <span className={styles.verifiedBadge} title="Verified Ayurvedic Center">
                        <CheckCircle2 size={15} fill="#0095f6" stroke="#fff" />
                      </span>
                    </div>
                    <span className={styles.modalSubHandle}>
                      Balprada Ayurvedic Ashram
                    </span>
                  </div>
                </div>

                {selectedVideo.tag && (
                  <span className={styles.reelTagBadge}>
                    {selectedVideo.tag}
                  </span>
                )}
              </div>

              <div className={styles.modalBody}>
                <h3 className={styles.modalTitle}>{selectedVideo.title}</h3>
                <p className={styles.modalCaption}>{selectedVideo.caption}</p>

                <div className={styles.modalMetaRow}>
                  {selectedVideo.likes && (
                    <span className={styles.likesBadge}>
                      <Heart size={14} fill="#ff4d6d" stroke="none" />
                      {selectedVideo.likes} likes
                    </span>
                  )}
                  <span className={styles.healingBadge}>
                    🌿 Authentic Ayurvedic Care
                  </span>
                </div>
              </div>

              <div className={styles.modalActions}>
                <a
                  href={selectedVideo.permalink || "https://www.instagram.com/balpradaayurvedics/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instagramCtaBtn}
                >
                  <InstagramLogo size={18} />
                  <span>Open on Instagram</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
