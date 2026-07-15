import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../../_components/SiteChrome";
import { pathologyTests } from "../../catalogData";
import { site } from "../../data";

export function generateStaticParams() { return pathologyTests.map((test) => ({ slug: test.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const test = pathologyTests.find((item) => item.slug === slug);
  return { title: test ? `${test.title} | Balprada Pathology Lab` : "Pathology Test | Balprada" };
}

export default async function PathologyTestPage({ params }) {
  const { slug } = await params;
  const test = pathologyTests.find((item) => item.slug === slug);
  if (!test) notFound();
  return <Shell>
    <PageHero eyebrow="Balprada Pathology Lab" title={test.title} text={test.short} image={test.image} />
    <section className="section-band detail-band clinical-detail">
      <div><SectionHeading eyebrow="Test Information" title="Simple preparation, dependable support" /><div className="sample-badge"><small>Sample required</small><strong>{test.sample}</strong></div></div>
      <div><h3>What this profile includes</h3><ul className="detail-list">{test.includes.map((item) => <li key={item}>{item}</li>)}</ul><p><strong>Preparation:</strong> {test.preparation}</p><p className="medical-note">Test requirements and reporting time can vary. Please follow the laboratory or treating doctor's instructions.</p><div className="official-contact-actions"><a className="button primary" href={site.appointmentUrl} target="_blank" rel="noreferrer">Book / Ask on WhatsApp</a><a className="button secondary" href={`tel:${site.primaryPhone}`}>Call Lab</a><Link className="button secondary" href="/pathology-lab">All Tests</Link></div></div>
    </section>
    <ContactPanel />
  </Shell>;
}
