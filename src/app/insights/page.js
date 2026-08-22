import Link from "next/link";
import ContactPanel from "../_components/ContactPanel";
import PageHero from "../_components/PageHero";
import SectionHeading from "../_components/SectionHeading";
import Shell from "../_components/Shell";
import { galleryImages, treatments } from "../data";

export const metadata = {
  title: "Health Insights & Ayurveda Articles | Balprada",
  description:
    "Read expert Ayurveda articles and health insights from Balprada Ayurvedic Hospital on kidney, liver, cancer care, panchakarma and holistic wellness.",
  keywords: [
    "Ayurveda Articles",
    "Balprada Insights",
    "Ayurvedic Health Blog",
    "Kidney Liver Cancer Ayurveda",
    "Panchakarma Articles",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/insights" },
  openGraph: {
    title: "Health Insights & Ayurveda Articles | Balprada",
    description:
      "Expert Ayurveda articles on kidney, liver, cancer care, panchakarma and holistic wellness.",
    url: "https://www.balpradaindia.com/insights",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Health Insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Insights & Ayurveda Articles | Balprada",
    description: "Expert Ayurveda articles and health insights.",
    images: ["/icon.png"],
  },
};

const insights = [
  {
    title: "The Importance of Holistic Healing in Ayurveda",
    text:
      "Ayurveda looks beyond symptoms and studies the balance of body, mind, food, routine and environment.",
    image: galleryImages[5],
    href: "/treatments",
  },
  {
    title: "The Role of Lifestyle in Kidney and Liver Health",
    text:
      "Food discipline, regular consultation and timely testing play an important role in chronic health care.",
    image: treatments[0].image,
    href: "/treatments/kidney-care",
  },
  {
    title: "Panchakarma and Naturopathy",
    text:
      "Panchakarma and naturopathy support cleansing, balance and recovery through guided traditional practices.",
    image: galleryImages[2],
    href: "/facilities/panchakarma",
  },
];

export default function InsightsPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Media & Insights"
        title="Ayurvedic Insights and Balprada Updates"
        text="Articles and glimpses from health, Ayurveda, lifestyle and Balprada's service journey."
        image={galleryImages[5]}
      />
      <section className="section insights-grid">
        {insights.map((item) => (
          <Link href={item.href} key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>
              <SectionHeading
                eyebrow="Insight"
                title={item.title}
                text={item.text}
                level={3}
              />
            </div>
          </Link>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
