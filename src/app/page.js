import Link from "next/link";
import { ContactPanel, Footer, Header } from "./_components/SiteChrome";
import TreatmentAccordion from "./_components/TreatmentAccordion";
import TreatmentJourney from "./_components/TreatmentJourney";
import {
  facilities,
  careProcess,
  galleryImages,
  heroImages,
  opdInfo,
  site,
  testimonials,
} from "./data";

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

export default function Home() {
  const slides = [heroImages[1], galleryImages[5], heroImages[0], galleryImages[3]];

  return (
    <main className="site-shell">
      <section className="home-hero">
        <div className="hero-slider" aria-label="Balprada hero image slider">
          {slides.map((image, index) => (
            <img
              className="hero-slide"
              key={image}
              src={image}
              alt={`Balprada wellness slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <Header />
        <img className="hero-seal" src="/balprada-seal.svg" alt="" aria-hidden="true" />
        <div className="hero-content">
          <p>{site.tagline}</p>
          <h1>{site.fullName}</h1>
          <span>{site.mantra}</span>
          <div className="hero-actions center">
            <Link className="button primary gradient" href="/contact">
              Book Now
            </Link>
            <Link className="button glass" href="/treatments">
              Our Treatments
            </Link>
          </div>
        </div>
        <div className="hero-dots" aria-hidden="true">
          {slides.map((image, index) => (
            <span key={`${image}-dot`} className={index === 0 ? "active" : ""} />
          ))}
        </div>
      </section>

      <section className="opd-highlight section">
        <div>
          <p className="eyebrow">Daily OPD</p>
          <h2>{opdInfo.title}</h2>
          <p>{opdInfo.summary}</p>
        </div>
        <div className="opd-list">
          {opdInfo.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="about-showcase section">
        <p className="eyebrow center-text">About Us</p>
        <h2>Healing Rooted in Balprada Tradition</h2>
        <p>
          Built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji, Balprada
          blends Ayurvedic wisdom, in-house herbal medicines, experienced doctors,
          and a peaceful ashram environment for long-term healing.
        </p>
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

      <section className="treatments-stage section" id="treatments">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our Treatments</p>
            <h2>Health concerns we support with Ayurvedic care</h2>
          </div>
          <Link className="button primary gradient" href="/treatments">
            Explore Our Treatments
          </Link>
        </div>
        <TreatmentAccordion compact />
      </section>

      <section className="holistic section">
        <div>
          <p className="eyebrow">Our Holistic Approach</p>
          <h2>Care that brings body, mind and lifestyle together</h2>
          <p>
            Balprada combines consultation, Ayurvedic medicines, yoga,
            panchakarma, naturopathy, diet guidance and follow-up care to make
            the treatment journey more complete.
          </p>
          <Link className="button primary gradient" href="/facilities">
            Explore More
          </Link>
        </div>
        <div className="circle-care">
          <img src={galleryImages[0]} alt="Balprada care" />
          <span>Personalized Doctor Care</span>
        </div>
      </section>

      <section className="care-process section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Care Process</p>
            <h2>A clear path from consultation to follow-up</h2>
          </div>
          <Link className="button secondary" href="/contact">
            Plan Your Visit
          </Link>
        </div>
        <div className="process-grid">
          {careProcess.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <TreatmentJourney />

      <section className="section">
        <div className="section-heading centered-heading">
          <div>
            <p className="eyebrow">Facilities</p>
            <h2>Facilities</h2>
          </div>
          <Link className="button secondary" href="/facilities">
            View All
          </Link>
        </div>
        <div className="facility-grid">
          {facilities.map((item) => (
            <Link className="facility-card" href={`/facilities/${item.slug}`} key={item.slug}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="stories section">
        <p className="eyebrow center-text">Stories of Trust and Healing</p>
        <h2>Blessings and Experiences</h2>
        <div className="story-grid">
          {testimonials.map((item) => (
            <article key={item.name}>
              <small>{item.tag}</small>
              <span>"</span>
              <p>{item.text}</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-blessing section">
        <img src="/balprada-seal.svg" alt="" aria-hidden="true" />
        <div>
          <p className="eyebrow">Aashirvachan</p>
          <h2>{site.founderQuote}</h2>
          <strong>- {site.founder}</strong>
        </div>
      </section>

      <ContactPanel />
      <Footer />
    </main>
  );
}
