import ContactPanel from "../_components/ContactPanel";
import PageHero from "../_components/PageHero";
import Shell from "../_components/Shell";
import { galleryImages } from "../data";

export const metadata = {
  title: "Gallery | Balprada Ayurvedic Hospital & Research Center",
  description:
    "Browse photos of Balprada Ayurvedic Hospital's facilities, treatment centers, ashram and patient care since 1991 in our official gallery.",
  keywords: [
    "Balprada Gallery",
    "Ayurvedic Hospital Photos",
    "Balprada Ashram Gallery",
    "Hospital Facility Photos",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/gallery" },
  openGraph: {
    title: "Gallery | Balprada Ayurvedic Hospital & Research Center",
    description:
      "Photos of our facilities, treatment centers, ashram and patient care since 1991.",
    url: "https://www.balpradaindia.com/gallery",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Gallery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Balprada Ayurvedic Hospital & Research Center",
    description: "Photos of our facilities, ashram and patient care.",
    images: ["/icon.png"],
  },
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
            <figcaption>Balprada Ayurvedic Hospital & Research Center {String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
