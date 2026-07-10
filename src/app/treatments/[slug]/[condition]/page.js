import * as Icons from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, Shell } from "../../../_components/SiteChrome";
import {
  findTreatmentCondition,
  treatmentCategories,
  treatmentSupportImage,
} from "../../../treatmentArchitecture";

export function generateStaticParams() {
  return treatmentCategories.flatMap((category) =>
    category.conditions.map((condition) => ({
      slug: category.slug,
      condition: condition.slug,
    })),
  );
}

export async function generateMetadata({ params }) {
  const { slug, condition: conditionSlug } = await params;
  const { condition } = findTreatmentCondition(slug, conditionSlug);
  return {
    title: condition ? `${condition.title} | Balprada India` : "Treatment | Balprada India",
  };
}

export default async function ConditionPage({ params }) {
  const { slug, condition: conditionSlug } = await params;
  const { category, condition } = findTreatmentCondition(slug, conditionSlug);

  if (!category || !condition) {
    notFound();
  }

  const Icon = Icons[condition.icon] || Icons.Activity;

  return (
    <Shell>
      <section className="condition-hero">
        <div>
          <Link href={`/treatments/${category.slug}`}>{category.title}</Link>
          <span className="condition-icon">
            <Icon aria-hidden="true" strokeWidth={1.35} />
          </span>
          <h1>{condition.title}</h1>
          <p>{condition.text}</p>
          <Link className="button primary gradient" href="/contact">
            Book Consultation
          </Link>
        </div>
        <img src={category.image} alt={condition.title} />
      </section>

      <section className="condition-content section">
        <article>
          <p className="eyebrow">Understanding the Concern</p>
          <h2>Care begins with the complete health picture</h2>
          <p>
            Symptoms, medical history, current treatment, food habits, sleep,
            stress and daily routine are considered before any Ayurvedic guidance
            is suggested. Diagnostic reports may be reviewed where relevant.
          </p>
        </article>
        <article>
          <p className="eyebrow">Balprada Approach</p>
          <h2>Consultation, routine and regular review</h2>
          <p>
            The care plan may include Ayurvedic medicines, diet guidance,
            lifestyle correction and supportive facilities. Progress is reviewed
            regularly so guidance can remain practical and responsible.
          </p>
        </article>
        <img src={treatmentSupportImage} alt="Balprada Ayurvedic care" />
      </section>

      <section className="related-conditions section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Related Care</p>
            <h2>Explore this treatment category</h2>
          </div>
        </div>
        <div>
          {category.conditions
            .filter((item) => item.slug !== condition.slug)
            .map((item) => {
              const RelatedIcon = Icons[item.icon] || Icons.Activity;
              return (
                <Link
                  href={`/treatments/${category.slug}/${item.slug}`}
                  key={item.slug}
                >
                  <RelatedIcon aria-hidden="true" strokeWidth={1.4} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
        </div>
      </section>

      <ContactPanel />
    </Shell>
  );
}
