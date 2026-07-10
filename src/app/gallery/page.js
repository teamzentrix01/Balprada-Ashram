import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { galleryImages } from "../data";

export const metadata = {
  title: "Gallery | Balprada India",
};

export default function GalleryPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Gallery"
        title="Balprada Gallery"
        text="Glimpses of the ashram, chikitsalaya, service work and natural environment."
        image={galleryImages[3]}
      />
      <section className="section gallery-grid">
        {galleryImages.map((image, index) => (
          <figure key={image}>
            <img src={image} alt={`Balprada gallery ${index + 1}`} />
            <figcaption>Balprada India {String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
