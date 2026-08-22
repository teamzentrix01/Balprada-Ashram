"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { galleryImages } from "../data";

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

export function AboutShowcase() {
  return (
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
  );
}

export default AboutShowcase;
