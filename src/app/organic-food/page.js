import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { organicFoods } from "../catalogData";
import { site } from "../data";

export const metadata = { title: "Organic Food | Balprada Ayurvedic Hospital & Research Center", description: "Explore Balprada organic vegetables, fruits, honey, grains and seasonal farm products." };

export default function OrganicFoodPage() {
  return <Shell>
    <PageHero eyebrow="Farm to Family" title="Fresh, wholesome organic food" text="Explore naturally grown vegetables, seasonal fruit, raw honey, grains and farm products. Contact us to check today's availability and courier eligibility." image="/organic-food-hero.png" />
    <section className="organic-promise section-band">
      <div><p className="eyebrow">Balprada Organic</p><h2>Simple food, grown closer to nature</h2></div>
      <div><p>Availability follows the harvest and season. Connect directly with the Balprada team for current stock, quantity, price, pickup and courier options.</p><a className="button primary" href={site.appointmentUrl} target="_blank" rel="noreferrer">Ask Current Availability</a></div>
    </section>
    <section className="section catalog-section">
      <div className="section-heading"><div><p className="eyebrow">Organic Selection</p><h2>Fresh food and pantry essentials</h2></div></div>
      <div className="professional-grid organic-grid">{organicFoods.map((product) => <Link className="professional-card" href={`/organic-food/${product.slug}`} key={product.slug}><div className="card-image organic-card-image"><img src={product.image} alt={product.title} /><span>Seasonal</span></div><div><small>{product.category}</small><h3>{product.title}</h3><p>{product.text}</p><strong>Check availability -&gt;</strong></div></Link>)}</div>
    </section>
    <ContactPanel />
  </Shell>;
}
