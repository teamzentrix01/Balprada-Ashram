import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { branches, facilities, galleryImages, services, site } from "../data";

export const metadata = {
  title: "Balprada Ashram | Balprada Ayurvedic Hospital & Research Center",
};

export default function AshramPage() {
  const wellnessOrder = [
    "panchakarma",
    "yoga",
    "naturopathy",
    "meditation",
    "physiotherapy",
  ];
  const wellnessFacilities = wellnessOrder
    .map((slug) => facilities.find((item) => item.slug === slug))
    .filter(Boolean);
  const naturopathy = wellnessFacilities.find((item) => item.slug === "naturopathy");

  return (
    <Shell>
      <PageHero
        eyebrow="Ashram & Integrative Care"
        title="Nature-led healing with clinical guidance"
        text="Balprada Ayurvedic Hospital & Research Center brings Naturopathy, Yoga, Meditation, Panchakarma and Physiotherapy together in a peaceful care environment backed by 35 years of experience."
        image="/wellness/naturopathy.jpg"
      />

      <section className="experience-marquee" aria-label="Balprada experience">
        <strong>35 Years of Experience</strong>
        <span>Ayurvedic Hospital</span><i>-</i><span>Research Center</span><i>-</i><span>Holistic Care</span>
      </section>

      <section className="naturopathy-feature section">
        <div className="naturopathy-visual">
          <img src={naturopathy.image} alt="Professional naturopathy care at Balprada" />
          <span>Primary Wellness Focus</span>
        </div>
        <div>
          <SectionHeading
            className="feature-lead-heading"
            eyebrow="Most Highlighted Programme"
            title="Naturopathy"
            text="Supporting the body's natural healing capacity through thoughtfully planned therapies, disciplined routines and close professional guidance."
          />
          <ul className="nature-list">
            {naturopathy.highlights.map((item) => <li key={item}>{item}</li>)}
            <li>Food, rest and daily-routine guidance</li>
            <li>Individual assessment before therapy</li>
          </ul>
          <div className="official-contact-actions">
            <Link className="button primary" href="/facilities/naturopathy">Explore Naturopathy</Link>
            <a className="button secondary" href={site.appointmentUrl} target="_blank" rel="noreferrer">Book Consultation</a>
          </div>
        </div>
      </section>

      <section className="section wellness-programmes">
        <div className="section-heading">
          <SectionHeading
            eyebrow="Ashram Wellness"
            title="One healing journey, five supportive disciplines"
          />
          <strong className="experience-badge">35 Years<br /><small>of experience</small></strong>
        </div>
        <div className="wellness-programme-grid">
          {wellnessFacilities.map((facility, index) => (
            <Link className={facility.slug === "naturopathy" ? "featured" : ""} href={`/facilities/${facility.slug}`} key={facility.slug}>
              <img src={facility.image} alt={`${facility.title} at Balprada`} />
              <div><span>{String(index + 1).padStart(2, "0")}</span><h3>{facility.title}</h3><p>{facility.text}</p><strong>Discover programme</strong></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="ashram-gallery section">
        {galleryImages.slice(0, 4).map((image, index) => (
          <figure key={image}>
            <img src={image} alt={`Balprada Ashram ${index + 1}`} />
            <figcaption>
              {
                [
                  "Ashram Environment",
                  "Clinical Care",
                  "Jansewa",
                  "Daily Life",
                ][index]
              }
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="ashram-services section">
        <SectionHeading eyebrow="Jansewa" title="Service beyond the clinic" />
        <div>
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="ashram-branches section">
        {branches.map((branch) => (
          <article key={branch.title}>
            <SectionHeading eyebrow={branch.title} title={branch.address} />
            <div className="ashram-branch-actions">
              <a className="button primary gradient" href={`tel:${branch.phone}`}>
                Call {branch.phone}
              </a>
              <a className="button secondary" href={`mailto:${branch.email}`}>
                {branch.email}
              </a>
            </div>
          </article>
        ))}
      </section>

      <ContactPanel />
    </Shell>
  );
}
