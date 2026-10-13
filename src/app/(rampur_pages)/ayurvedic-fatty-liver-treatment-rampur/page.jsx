import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Ayurvedic Fatty Liver Treatment in Rampur | Balprada",
  description:
    "Seeking ayurvedic fatty liver treatment in Rampur? Balprada, trusted since 1991, offers consultation, diet and lifestyle guidance and lab support. Call 8126364606.",
  keywords: [
    "ayurvedic fatty liver treatment Rampur",
    "fatty liver ayurvedic treatment",
    "fatty liver treatment in Ayurveda",
    "fatty liver diet Ayurveda",
    "ayurvedic hospital in Rampur",
    "ayurvedic doctor for fatty liver",
    "Balprada Ayurvedic Hospital",
    "fatty liver care Moradabad",
    "liver and digestive care Ayurveda",
    "herbal support for liver",
    "fatty liver grade 1 2 3 care",
    "Yakrit Roga Ayurveda",
    "Medoroga Ayurveda",
    "metabolic imbalance Ayurveda",
    "ayurvedic vaidya Rampur",
    "ayurvedic treatment Moradabad",
    "Panchakarma for liver health",
    "ayurvedic ashram Moradabad",
    "best ayurvedic hospital near Rampur",
    "liver function test Moradabad",
    "Ayurvedic Hospital & Research Center",
    "free OPD ayurvedic Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.balpradaindia.com/ayurvedic-fatty-liver-treatment-rampur",
  },
  openGraph: {
    title: "Ayurvedic Fatty Liver Treatment in Rampur | Balprada",
    description:
      "Seeking ayurvedic fatty liver treatment in Rampur? Balprada, trusted since 1991, offers consultation, diet and lifestyle guidance and lab support. Call 8126364606.",
    url: "https://www.balpradaindia.com/ayurvedic-fatty-liver-treatment-rampur",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/images/balprada-logo.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Fatty Liver Treatment in Rampur | Balprada",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Fatty Liver Treatment in Rampur | Balprada",
    description:
      "Seeking ayurvedic fatty liver treatment in Rampur? Balprada, trusted since 1991, offers consultation, diet and lifestyle guidance and lab support. Call 8126364606.",
    images: ["https://www.balpradaindia.com/images/balprada-logo.png"],
  },
  icons: {
    icon: "/images/balprada-logo.png",
  },
};


export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Services />
    </>
  );
}