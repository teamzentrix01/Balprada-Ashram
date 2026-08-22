"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { careProcess } from "../data";

export function CareProcess() {
  return (
    <section className="care-process section">
      <div className="section-heading">
        <SectionHeading
          eyebrow="Care Process"
          title="A clear path from consultation to follow-up"
        />
        <Link className="button secondary" href="/contact">
          Plan Your Visit
        </Link>
      </div>
      <div className="process-grid">
        {careProcess.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <SectionHeading title={item.title} text={item.text} level={3} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default CareProcess;
