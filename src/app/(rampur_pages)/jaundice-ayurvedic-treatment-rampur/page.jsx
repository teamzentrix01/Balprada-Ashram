import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Jaundice Ayurvedic Treatment in Rampur | Balprada Hospital",
  description:
    "Looking for jaundice ayurvedic treatment in Rampur? Balprada, trusted since 1991, offers supportive consultation, diet guidance and lab support. Call 8126364606.",
  keywords: [
    "jaundice ayurvedic treatment Rampur",
    "ayurvedic treatment for jaundice",
    "jaundice treatment in Ayurveda",
    "Kamala roga Ayurveda",
    "ayurvedic hospital in Rampur",
    "ayurvedic doctor for jaundice",
    "Balprada Ayurvedic Hospital",
    "jaundice ayurvedic care Moradabad",
    "liver and digestive care Ayurveda",
    "jaundice diet Ayurveda",
    "herbal support for liver",
    "ayurvedic vaidya Rampur",
    "ayurvedic treatment Moradabad",
    "hepatitis jaundice ayurvedic care",
    "bilirubin ayurvedic consultation",
    "Panchakarma for liver health",
    "ayurvedic ashram Moradabad",
    "best ayurvedic hospital near Rampur",
    "jaundice symptoms and care",
    "liver function test Moradabad",
    "Ayurvedic Hospital & Research Center",
    "free OPD ayurvedic Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.balpradaindia.com/jaundice-ayurvedic-treatment-rampur",
  },
  openGraph: {
    title: "Jaundice Ayurvedic Treatment in Rampur | Balprada Hospital",
    description:
      "Looking for jaundice ayurvedic treatment in Rampur? Balprada, trusted since 1991, offers supportive consultation, diet guidance and lab support. Call 8126364606.",
    url: "https://www.balpradaindia.com/jaundice-ayurvedic-treatment-rampur",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/images/balprada-logo.png",
        width: 1200,
        height: 630,
        alt: "Jaundice Ayurvedic Treatment in Rampur | Balprada Hospital",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaundice Ayurvedic Treatment in Rampur | Balprada Hospital",
    description:
      "Looking for jaundice ayurvedic treatment in Rampur? Balprada, trusted since 1991, offers supportive consultation, diet guidance and lab support. Call 8126364606.",
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