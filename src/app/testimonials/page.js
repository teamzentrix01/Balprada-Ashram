import ContactPanel from "../_components/ContactPanel";
import PageHero from "../_components/PageHero";
import Shell from "../_components/Shell";
import TestimonialShowcase from "../_components/TestimonialShowcase";
import InstagramFeed from "../_components/InstagramFeed";
import SectionHeading from "../_components/SectionHeading";
import { testimonials } from "../data";

export const metadata = {
  title: "Patient Stories & Testimonials | Balprada Ayurvedic Hospital",
  description:
    "Read verified patient reviews, watch recovery stories, and explore real-time Instagram updates from @balpradaayurvedics. 35+ years of authentic Ayurvedic healing.",
  keywords: [
    "Balprada patient testimonials",
    "Ayurvedic patient reviews",
    "Balprada Ashram experiences",
    "Instagram patient stories ayurveda",
    "Ayurvedic recovery stories",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/testimonials" },
  openGraph: {
    title: "Patient Stories & Testimonials | Balprada Ayurvedic Hospital",
    description:
      "Explore verified healing experiences, patient video accounts, and live Instagram posts from Balprada Ashram.",
    url: "https://www.balpradaindia.com/testimonials",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Testimonials" }],
  },
};

export default function TestimonialsPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Healing Journeys"
        title="Patient Reviews & Live Stories"
        text="Real experiences from families and patients whose lives have been transformed through authentic Ayurvedic chikitsa at Balprada Ashram."
        image="/gallery/ashram-grounds-landscape-balprada.webp"
      />

      {/* Main Testimonial Showcase with Google Reviews & Video Testimonials */}
      <section className="section stories" style={{ paddingTop: "2rem" }}>
        <SectionHeading
          align="center"
          eyebrow="Verified Experiences"
          title="Words of Gratitude & Recovery"
        />
        <TestimonialShowcase items={testimonials} />
      </section>

      {/* Dedicated Instagram Section */}
      <section className="section" style={{ backgroundColor: "#f9f8f3", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            align="center"
            eyebrow="Follow Our Social Community"
            title="Latest from @balpradaayurvedics"
          />
          <p style={{ textAlign: "center", color: "#556b63", maxWidth: "600px", margin: "-1rem auto 2rem" }}>
            Daily glimpses into patient therapies, herb preparations, doctor advice, and ashram life on Instagram.
          </p>
          <InstagramFeed />
        </div>
      </section>

      <ContactPanel />
    </Shell>
  );
}
