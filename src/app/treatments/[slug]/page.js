import * as Icons from "lucide-react";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ContactPanel, Shell } from "../../_components/SiteChrome";
import { treatmentCategories } from "../../treatmentArchitecture";

const legacyRoutes = {
  kidney: "/treatments/kidney-care",
  liver: "/treatments/liver-digestive",
  cancer: "/treatments/cancer-support",
  heart: "/treatments/heart-metabolic",
  diabetes: "/treatments/heart-metabolic/diabetes",
  "women-health": "/treatments/women-wellness",
};

export function generateStaticParams() {
  return [
    ...treatmentCategories.map((item) => ({ slug: item.slug })),
    ...Object.keys(legacyRoutes).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = treatmentCategories.find((item) => item.slug === slug);
  return {
    title: category ? `${category.title} | Balprada India` : "Treatment | Balprada India",
  };
}

export default async function TreatmentCategoryPage({ params }) {
  const { slug } = await params;

  if (legacyRoutes[slug]) {
    permanentRedirect(legacyRoutes[slug]);
  }

  const category = treatmentCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <Shell>
      <section className="treatment-category-hero">
        <img src={category.image} alt={category.title} />
        <div>
          <p className="eyebrow">Balprada Treatment</p>
          <h1>{category.title}</h1>
          <p>{category.summary}</p>
        </div>
      </section>

      <nav className="treatment-category-nav" aria-label="Treatment categories">
        {treatmentCategories.map((item) => (
          <Link
            className={item.slug === category.slug ? "active" : ""}
            href={`/treatments/${item.slug}`}
            key={item.slug}
          >
            {item.shortTitle}
          </Link>
        ))}
      </nav>

      <section className="treatment-category-intro section">
        <div>
          <p className="eyebrow">Our Approach</p>
          <h2>Personalized Ayurvedic care</h2>
        </div>
        <p>{category.overview}</p>
      </section>

      <section className="condition-page-grid section">
        {category.conditions.map((condition, index) => {
          const Icon = Icons[condition.icon] || Icons.Activity;
          return (
            <Link
              href={`/treatments/${category.slug}/${condition.slug}`}
              key={condition.slug}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon aria-hidden="true" strokeWidth={1.4} />
              <h3>{condition.title}</h3>
              <p>{condition.text}</p>
              <strong>Explore condition</strong>
            </Link>
          );
        })}
      </section>

      <ContactPanel />
    </Shell>
  );
}
