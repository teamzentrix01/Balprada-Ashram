import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { galleryImages, services } from "../data";

export const metadata = {
  title: "Jansewa | Balprada Ayurvedic Hospital & Research Center",
};

const jansewa = services.find((item) => item.slug === "jansewa-sansthan");

export default function JansewaPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Jansewa"
        title="Service beyond treatment"
        text={jansewa.text}
        image={galleryImages[4]}
      />
      <section className="section-band detail-band">
        <div>
          <p className="eyebrow">Balprada Jansewa Sansthan</p>
          <h2>Ashram care, dignity and community support</h2>
        </div>
        <div>
          <p>
            Balprada's service work carries the same spirit as its chikitsalaya:
            dignity, discipline and compassionate support for people who need
            shelter, care and community.
          </p>
          <ul className="detail-list">
            {jansewa.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link className="button primary gradient" href="/services/jansewa-sansthan">
            View Service Detail
          </Link>
        </div>
      </section>
      <section className="section ashram-gallery">
        {galleryImages.slice(0, 4).map((image, index) => (
          <figure key={image}>
            <img src={image} alt={`Balprada Jansewa ${index + 1}`} />
            <figcaption>Balprada seva glimpse</figcaption>
          </figure>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
