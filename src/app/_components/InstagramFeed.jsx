"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  ExternalLink,
  Heart,
  Play,
  Image as ImageIcon,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

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

  useEffect(() => {
    let isMounted = true;
    async function fetchInstagramPosts() {
      try {
        const res = await fetch("/api/instagram");
        const json = await res.json();
        if (isMounted && json.data) {
          setPosts(json.data);
        }
      } catch (err) {
        console.error("Failed to load Instagram feed:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchInstagramPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  const reelsCount = posts.filter((p) => p.isReel || p.media_type === "VIDEO").length;
  const photosCount = posts.filter((p) => !p.isReel && p.media_type !== "VIDEO").length;

  const filteredPosts = posts.filter((post) => {
    if (filter === "reels") return post.isReel || post.media_type === "VIDEO";
    if (filter === "posts") return !post.isReel && post.media_type !== "VIDEO";
    return true;
  });

  // Ensure plenty of slides for seamless loop in Embla
  const emblaItems =
    filteredPosts.length > 0 && filteredPosts.length < 12
      ? [...filteredPosts, ...filteredPosts, ...filteredPosts]
      : filteredPosts;

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
              Authentic Ayurveda, Patient Healing Stories & Herbal Formulations 🌿
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

      {/* Filter and Live Indicator */}
      <div className={styles.filterBar}>
        <div className={styles.filterTabs}>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "all" ? styles.activeTab : ""}`}
            onClick={() => setFilter("all")}
          >
            <Sparkles size={14} />
            All Feed ({posts.length})
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "reels" ? styles.activeTab : ""}`}
            onClick={() => setFilter("reels")}
          >
            <Play size={14} />
            Reels ({reelsCount})
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "posts" ? styles.activeTab : ""}`}
            onClick={() => setFilter("posts")}
          >
            <ImageIcon size={14} />
            Posts ({photosCount})
          </button>
        </div>

      </div>

      {/* Embla Continuous Auto-Scroll Carousel */}
      <div
        className={styles.embla}
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {loading ? (
          <div className={styles.skeletonContainer}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        ) : emblaItems.length > 0 ? (
          <div className={styles.emblaContainer}>
            {emblaItems.map((post, idx) => (
              <div
                key={`${post.id}-${idx}`}
                className={styles.emblaSlide}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <article
                  className={styles.postCard}
                  onClick={() => window.open(post.permalink, "_blank", "noopener,noreferrer")}
                >
                  <img
                    src={post.thumbnail_url || post.media_url}
                    alt={post.caption || "Balprada Instagram Post"}
                    className={styles.postImg}
                    loading="lazy"
                  />

                  <div
                    className={`${styles.mediaBadge} ${
                      post.isReel ? styles.reelBadge : ""
                    }`}
                  >
                    {post.isReel ? (
                      <>
                        <Play size={12} fill="#fff" />
                        <span>Reel</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={12} />
                        <span>Post</span>
                      </>
                    )}
                  </div>

                  <div className={styles.cardOverlay}>
                    <p className={styles.cardCaption}>{post.caption}</p>
                    <div className={styles.cardStats}>
                      <span className={styles.likesCount}>
                        <Heart size={14} fill="#ff4d6d" stroke="none" />
                        {post.likes ? `${post.likes} likes` : "Healing Story"}
                      </span>
                      <span className={styles.openLink}>
                        Watch on IG <ExternalLink size={13} />
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ padding: "2rem", textAlign: "center", color: "#666" }}>
            No posts found for this filter.
          </p>
        )}
      </div>

      <div className={styles.footerNote}>
        <InstagramLogo size={15} />
        <span>
          Auto-syncing real-time posts &amp; reels from <strong>@balpradaayurvedics</strong>
        </span>
      </div>
    </div>
  );
}
