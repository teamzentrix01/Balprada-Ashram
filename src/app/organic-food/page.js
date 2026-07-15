import Link from "next/link";
import { ContactPanel, PageHero, SectionHeading, Shell } from "../_components/SiteChrome";
import { organicFoods } from "../catalogData";
import { site } from "../data";

export const metadata = { title: "Organic Food | Balprada Ayurvedic Hospital & Research Center", description: "Explore Balprada organic vegetables, fruits, honey, grains and seasonal farm products." };

export default function OrganicFoodPage() {
  return <Shell>
    <PageHero eyebrow="Farm to Family" title="Fresh, wholesome organic food" text="Explore naturally grown vegetables, seasonal fruit, raw honey, grains and farm products. Contact us to check today's availability and courier eligibility." image="/organic-food-hero.png" />
    <section className="organic-promise section-band">
      <SectionHeading eyebrow="Balprada Organic" title="Simple food, grown closer to nature" text="Availability follows the harvest and season. Connect directly with the Balprada team for current stock, quantity, price, pickup and courier options." />
      <div><a className="button primary" href={site.appointmentUrl} target="_blank" rel="noreferrer">Ask Current Availability</a></div>
    </section>
    <section className="section catalog-section">
      <div className="section-heading"><SectionHeading eyebrow="Organic Selection" title="Fresh food and pantry essentials" /></div>
      <div className="professional-grid organic-grid">{organicFoods.map((product) => <Link className="professional-card" href={`/organic-food/${product.slug}`} key={product.slug}><div className="card-image organic-card-image"><img src={product.image} alt={product.title} /><span>Seasonal</span></div><div><small>{product.category}</small><h3>{product.title}</h3><p>{product.text}</p><strong>Check availability</strong></div></Link>)}</div>
    </section>
    <ContactPanel />
  </Shell>;
}
