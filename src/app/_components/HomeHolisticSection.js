"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import HolisticSlider from "./HolisticSlider";
import { homeFacilities } from "./HomeFacilitiesGrid";

export function HomeHolisticSection() {
  return (
    <>
      <section className="holistic section" id="holistic-care">
        <div>
          <SectionHeading
            eyebrow="Our Holistic Approach"
            title="Care that brings body, mind and lifestyle together"
            text="Balprada combines consultation, Ayurvedic medicines, yoga, panchakarma, naturopathy, diet guidance and follow-up care to make the treatment journey more complete."
          />
          <Link className="button primary gradient" href="/facilities">
            Explore More
          </Link>
        </div>
        <HolisticSlider items={homeFacilities} />
      </section>
      <div className="holistic-curve" aria-hidden="true" />
    </>
  );
}

export default HomeHolisticSection;
