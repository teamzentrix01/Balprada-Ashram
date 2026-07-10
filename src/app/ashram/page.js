import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { branches, galleryImages, heroImages, services } from "../data";

export const metadata = {
  title: "Balprada Ashram | Balprada India",
};

export default function AshramPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Balprada Ashram"
        title="A peaceful environment for care and seva"
        text="Balprada Jansewa Ashram brings treatment, disciplined living, emotional support and community service together."
        image={heroImages[1]}
      />

      <section className="ashram-gallery section">
        {galleryImages.slice(0, 4).map((image, index) => (
          <figure key={image}>
            <img src={image} alt={`Balprada Ashram ${index + 1}`} />
            <figcaption>
              {
                [
                  "Ashram Environment",
                  "Clinical Care",
                  "Jansewa",
                  "Daily Life",
                ][index]
              }
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="ashram-services section">
        <div>
          <p className="eyebrow">Jansewa</p>
          <h2>Service beyond the clinic</h2>
        </div>
        <div>
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="ashram-branches section">
        {branches.map((branch) => (
          <article key={branch.title}>
            <p className="eyebrow">{branch.title}</p>
            <h2>{branch.address}</h2>
            <a className="button primary gradient" href={`tel:${branch.phone}`}>
              Call {branch.phone}
            </a>
            <a className="button secondary" href={`mailto:${branch.email}`}>
              {branch.email}
            </a>
          </article>
        ))}
      </section>

      <ContactPanel />
    </Shell>
  );
}
