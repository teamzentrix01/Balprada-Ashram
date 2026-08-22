"use client";

import { SectionHeading } from "./SectionHeading";

export function PageHero({ eyebrow, title, text, image, className = "" }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <SectionHeading eyebrow={eyebrow} title={title} text={text} level={1} />
      {image ? <img src={image} alt="" /> : null}
    </section>
  );
}

export default PageHero;
