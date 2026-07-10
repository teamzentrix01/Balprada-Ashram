import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { branches, heroImages, opdInfo } from "../data";

export const metadata = {
  title: "Contact | Balprada India",
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Connect With Us"
        title="Contact us for appointments and consultation"
        text="Balprada Ashram and Clinic is open 7 days a week. Consultation hours are 10:00 AM to 2:00 PM."
        image={heroImages[2]}
      />
      <section className="opd contact-opd">
        <div>
          <p className="eyebrow">Daily OPD</p>
          <h2>{opdInfo.title}</h2>
        </div>
        <ul>
          {opdInfo.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="section branch-page-grid">
        {branches.map((branch) => (
          <article key={branch.title}>
            <h2>{branch.title}</h2>
            <p>{branch.address}</p>
            <small>{branch.timing}</small>
            <span className="branch-contact-links">
              <a href={`tel:${branch.phone}`}>{branch.phone}</a>
              <a href={`mailto:${branch.email}`}>{branch.email}</a>
            </span>
          </article>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
