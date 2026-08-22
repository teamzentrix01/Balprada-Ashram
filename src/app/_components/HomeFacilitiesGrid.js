"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { facilities } from "../data";

const homeFacilityOrder = [
  "panchakarma",
  "yoga",
  "naturopathy",
  "meditation",
  "physiotherapy",
  "pathology",
];

export const homeFacilities = homeFacilityOrder
  .map((slug) => facilities.find((item) => item.slug === slug))
  .filter(Boolean);

export function HomeFacilitiesGrid() {
  return (
    <section className="section">
      <div className="section-heading centered-heading">
        <SectionHeading eyebrow="Facilities" title="Facilities" />
      </div>
      <div className="facility-grid">
        {homeFacilities.map((item) => (
          <Link className="facility-card" href={`/facilities/${item.slug}`} key={item.slug}>
            <img src={item.image} alt={item.title} />
            <div>
              <SectionHeading title={item.title} text={item.text} level={3} />
            </div>
          </Link>
        ))}
      </div>
      <Link className="button secondary" href="/facilities">
        View All
      </Link>
    </section>
  );
}

export default HomeFacilitiesGrid;
