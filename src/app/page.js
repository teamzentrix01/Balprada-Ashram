import AboutShowcase from "./_components/AboutShowcase";
import CareProcess from "./_components/CareProcess";
import ContactPanel from "./_components/ContactPanel";
import HomeFacilitiesGrid from "./_components/HomeFacilitiesGrid";
import HomeHolisticSection from "./_components/HomeHolisticSection";
import HomeHero from "./_components/HomeHero";
import HomeTestimonialsSection from "./_components/HomeTestimonialsSection";
import HomeTreatmentsStage from "./_components/HomeTreatmentsStage";
import OpdHighlight from "./_components/OpdHighlight";
import TreatmentJourney from "./_components/TreatmentJourney";

export const metadata = {
  title: "Ayurvedic Treatment for Kidney, Liver & Cancer | Balprada",
  description:
    "Trusted Ayurvedic care since 1991 for kidney, liver, cancer & diabetes. In-house herbal medicines, panchakarma & ashram-based healing. Book OPD.",
  keywords: [
    "Balprada Ayurvedic Hospital",
    "Ayurvedic Hospital",
    "Ayurvedic Treatment",
    "Ayurvedic Treatment for Kidney",
    "Ayurvedic Treatment for Liver",
    "Ayurvedic Cancer Support",
    "Panchakarma",
    "Ayurveda",
    "Ayurvedic Hospital Moradabad",
    "Naturopathy",
    "Ayurvedic Ashram",
  ],
  alternates: {
    canonical: "https://www.balpradaindia.com",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Ayurvedic Treatment for Kidney, Liver & Cancer | Balprada",
    description:
      "Since 1991, Balprada offers trusted Ayurvedic care for kidney, liver, cancer & diabetes — in-house medicines, panchakarma, yoga and ashram-based healing.",
    url: "https://www.balpradaindia.com",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/home-banners/01-ayurvedic-treatment.png",
        width: 1200,
        height: 630,
        alt: "Balprada Ayurvedic Hospital & Research Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Treatment for Kidney, Liver & Cancer | Balprada",
    description:
      "Trusted Ayurvedic care since 1991 for kidney, liver, cancer & diabetes at Balprada.",
    images: ["https://www.balpradaindia.com/home-banners/01-ayurvedic-treatment.png"],
  },
};

export default function Page() {
  return (
    <main className="site-shell">
      <HomeHero />
      <OpdHighlight />
      <AboutShowcase />
      <HomeTreatmentsStage />
      <HomeHolisticSection />
      <CareProcess />
      <TreatmentJourney />
      <HomeFacilitiesGrid />
      <HomeTestimonialsSection />
      <ContactPanel />
    </main>
  );
}