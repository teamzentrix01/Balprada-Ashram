import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../../_components/SiteChrome";
import { organicFoods } from "../../catalogData";
import { site } from "../../data";

export function generateStaticParams() { return organicFoods.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const product = organicFoods.find((item) => item.slug === slug); return { title: product ? `${product.title} | Balprada Organic Food` : "Organic Food | Balprada" }; }

export default async function OrganicFoodDetail({ params }) {
  const { slug } = await params; const product = organicFoods.find((item) => item.slug === slug); if (!product) notFound();
  return <Shell><PageHero eyebrow={product.category} title={product.title} text={product.text} image={product.image} /><section className="section-band detail-band organic-detail"><div><SectionHeading eyebrow="Naturally Selected" title="Ask about today's fresh stock" text="Fresh produce varies by harvest, location and weather. The team will confirm current availability, quantity, pricing and whether courier delivery is suitable for your destination." /><div className="availability-dot"><span /> Seasonal availability</div></div><div><ul className="detail-list">{product.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="official-contact-actions"><a className="button primary" href={site.appointmentUrl} target="_blank" rel="noreferrer">WhatsApp to Order</a><a className="button secondary" href={`tel:${site.primaryPhone}`}>Call {site.primaryPhone}</a><Link className="button secondary" href="/organic-food">All Organic Food</Link></div></div></section><ContactPanel /></Shell>;
}
