"use client";

import dynamic from "next/dynamic";

const TestimonialShowcase = dynamic(
  () => import("./TestimonialShowcase"),
  { ssr: false }
);

export default function ClientTestimonialShowcase(props) {
  return <TestimonialShowcase {...props} />;
}
