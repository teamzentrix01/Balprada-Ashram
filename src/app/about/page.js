import Link from "next/link";
import AboutExplorer from "../_components/AboutExplorer";
import { ContactPanel, Shell } from "../_components/SiteChrome";
import { heroImages } from "../data";

export const metadata = {
  title: "About Balprada | Balprada Ayurvedic Hospital & Research Center",
};

const timeline = [
  {
    year: "1991",
    title: "Foundation of Seva",
    text: "Sw. Vaidya Vijay Pal Singh Ji started Balprada with a vision of ayurvedic healing and social service.",
  },
  {
    year: "Today",
    title: "Ayurvedic Chikitsalaya",
    text: "Balprada serves patients through experienced doctors, in-house medicines, research and ashram-based care.",
  },
  {
    year: "Next",
    title: "Wider Jansewa",
    text: "The mission continues through ashram care, herbal wellness, pathology, yoga, naturopathy and community service.",
  },
];

export default function AboutPage() {
  return (
    <Shell>
      <section className="about-hero-pro">
        <img src={heroImages[0]} alt="Balprada Ashram" />
        <div>
          <p className="eyebrow">About Balprada</p>
          <h1>Trusted Ayurvedic Care Since 1991</h1>
          <p>
            Balprada Ayurvedic Hospital & Research Center carries forward the spirit of seva,
            ayurvedic healing and community care started by Sw. Vaidya Vijay Pal
            Singh Ji in 1991.
          </p>
        </div>
      </section>

      <section className="about-meaning section">
        <p className="eyebrow center-text">Welcome to Balprada</p>
        <h2>Balprada: strength, healing and seva for every life</h2>
        <p>
          The institution brings together ayurvedic chikitsalaya, research,
          herbal wellness, pathology, yoga, naturopathy and ashram-based social
          service under one trusted ecosystem.
        </p>
        <div className="about-stats">
          <div>
            <strong>1991</strong>
            <span>Founded with Seva</span>
          </div>
          <div>
            <strong>7 Days</strong>
            <span>Ashram & Clinic Open</span>
          </div>
          <div>
            <strong>2 Branches</strong>
            <span>Moradabad Region</span>
          </div>
          <div>
            <strong>Holistic</strong>
            <span>Ayurvedic Care</span>
          </div>
        </div>
      </section>

      <section className="about-timeline section">
        <h2>Legacy of Balprada</h2>
        <div className="timeline-bird" aria-hidden="true"><span className="bird-shape" /></div>
        <div className="timeline-line">
          {timeline.map((item) => (
            <article key={item.year}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-mission section">
        <article>
          <h2>Our Mission</h2>
          <p>
            To provide reliable ayurvedic care for chronic and serious health
            conditions through consultation, self-prepared medicines, lifestyle
            guidance and compassionate service.
          </p>
          <p>
            Balprada aims to help patients and families find a calmer, clearer
            path through illness with discipline, hope and natural healing.
          </p>
        </article>
        <article className="vision-card">
          <h2>Our Vision</h2>
          <p>
            To become a trusted ayurvedic wellness and jansewa center where
            traditional knowledge, modern organization and community care work
            together for healthier lives.
          </p>
        </article>
      </section>

      <AboutExplorer />

      <section className="about-quote">
        <p>
          "Never let go of positivity in life. Staying positive gives us the
          courage to face difficult circumstances."
        </p>
        <strong>- Late Vaidya Shri Vijaypal Singh Ji</strong>
      </section>

      <section className="about-next section">
        <h2>Begin your Balprada journey</h2>
        <div>
          <Link className="button primary gradient" href="/treatments">
            Explore Treatments
          </Link>
          <Link className="button secondary" href="/contact">
            Contact Us
          </Link>
        </div>
      </section>

      <ContactPanel />
    </Shell>
  );
}
