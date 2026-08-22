"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import TreatmentAccordion from "./TreatmentAccordion";

export function HomeTreatmentsStage() {
  return (
    <section className="treatments-stage section" id="treatments">
      <div className="section-heading">
        <SectionHeading
          eyebrow="Our Treatments"
          title="Health concerns we support with Ayurvedic care"
        />
        <Link className="button primary gradient" href="/treatments">
          Explore Our Treatments
        </Link>
      </div>
      <TreatmentAccordion compact />
    </section>
  );
}

export default HomeTreatmentsStage;
