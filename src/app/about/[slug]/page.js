import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, Shell } from "../../_components/SiteChrome";
import { aboutAreas } from "../../aboutData";

export function generateStaticParams() {
  return aboutAreas.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = aboutAreas.find((item) => item.slug === slug);
  return {
    title: area ? `${area.tab} | About Balprada` : "About Balprada",
  };
}

export default async function AboutAreaPage({ params }) {
  const { slug } = await params;
  const area = aboutAreas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <Shell>
      <section className="about-area-hero">
        <img src={area.hero} alt={area.title} />
        <div>
          <p className="eyebrow">{area.eyebrow}</p>
          <h1>{area.title}</h1>
          <p>{area.summary}</p>
        </div>
      </section>

      <nav className="about-area-nav" aria-label="About Balprada sections">
        {aboutAreas.map((item) => (
          <Link
            className={item.slug === area.slug ? "active" : ""}
            href={`/about/${item.slug}`}
            key={item.slug}
          >
            {item.tab}
          </Link>
        ))}
      </nav>

      <section className="about-area-intro section">
        <div>
          <p className="eyebrow">The Balprada Approach</p>
          <h2>{area.title}</h2>
        </div>
        <p>{area.detail}</p>
      </section>

      <section className="about-area-cards section">
        {area.cards.map((card, index) => (
          <article key={card.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <img src={card.image} alt={card.title} />
            <div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="about-area-quote">
        <p>
          Ayurveda becomes most meaningful when knowledge, discipline and
          compassionate care move together.
        </p>
        <Link className="button primary gradient" href="/contact">
          Connect With Balprada
        </Link>
      </section>

      <ContactPanel />
    </Shell>
  );
}
