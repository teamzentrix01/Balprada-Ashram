"use client";

import SectionHeading from "./SectionHeading";
import TestimonialShowcase from "./TestimonialShowcase";
import { testimonials } from "../data";

export function HomeTestimonialsSection() {
  return (
    <section className="stories section" id="testimonials">
      <SectionHeading
        align="center"
        eyebrow="Blessings and Experiences"
        title="Stories of Trust and Healing"
      />
      <TestimonialShowcase items={testimonials} />
    </section>
  );
}

export default HomeTestimonialsSection;
