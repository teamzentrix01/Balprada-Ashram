import * as Icons from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, SectionHeading, Shell } from "../../../_components/SiteChrome";
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
    title: condition ? `${condition.title} | Balprada Ayurvedic Hospital & Research Center` : "Treatment | Balprada Ayurvedic Hospital & Research Center",
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
          <SectionHeading title={condition.title} text={condition.text} level={1} />
          <Link className="button primary gradient" href="/contact">
            Book Consultation
          </Link>
        </div>
        <img src={category.image} alt={condition.title} />
      </section>

      <section className="condition-content section">
        <article>
          <SectionHeading
            eyebrow="Understanding the Concern"
            title="Care begins with the complete health picture"
            text="Symptoms, medical history, current treatment, food habits, sleep, stress and daily routine are considered before any Ayurvedic guidance is suggested. Diagnostic reports may be reviewed where relevant."
          />
        </article>
        <article>
          <SectionHeading
            eyebrow="Balprada Approach"
            title="Consultation, routine and regular review"
            text="The care plan may include Ayurvedic medicines, diet guidance, lifestyle correction and supportive facilities. Progress is reviewed regularly so guidance can remain practical and responsible."
          />
        </article>
        <img src={treatmentSupportImage} alt="Balprada Ayurvedic care" />
      </section>

      <section className="related-conditions section">
        <div className="section-heading">
          <SectionHeading eyebrow="Related Care" title="Explore this treatment category" />
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
