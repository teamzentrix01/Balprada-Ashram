import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import { galleryImages, treatments } from "../data";

export const metadata = {
  title: "Insights | Balprada Ayurvedic Hospital & Research Center",
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
              <p className="eyebrow">Insight</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </Link>
        ))}
      </section>
      <ContactPanel />
    </Shell>
  );
}
