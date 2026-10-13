import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Liver Cirrhosis Ayurvedic Treatment in Rampur | Balprada",
  description:
    "Looking for ayurvedic care for liver cirrhosis in Rampur? Balprada, trusted since 1991, offers supportive consultation, diet guidance and lab support. Call 8126364606.",
  keywords: [
    "liver cirrhosis treatment ayurvedic Rampur",
    "ayurvedic treatment for liver cirrhosis",
    "liver cirrhosis ayurvedic treatment",
    "ayurvedic hospital in Rampur",
    "ayurvedic liver treatment Rampur",
    "Balprada Ayurvedic Hospital",
    "ayurvedic doctor for liver Rampur",
    "liver disease ayurvedic care",
    "ayurvedic liver specialist Moradabad",
    "liver cirrhosis diet Ayurveda",
    "herbal support for liver",
    "ayurvedic treatment Moradabad",
    "liver supportive care Ayurveda",
    "cirrhosis symptoms Ayurveda",
    "Panchakarma for liver health",
    "ayurvedic ashram Moradabad",
    "best ayurvedic hospital near Rampur",
    "liver care Bilari",
    "ayurvedic vaidya for liver",
    "Ayurvedic Hospital & Research Center",
    "liver function test Moradabad",
    "free OPD ayurvedic Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.balpradaindia.com/liver-cirrhosis-treatment-ayurvedic-rampur",
  },
  openGraph: {
    title: "Liver Cirrhosis Ayurvedic Treatment in Rampur | Balprada",
    description:
      "Looking for ayurvedic care for liver cirrhosis in Rampur? Balprada, trusted since 1991, offers supportive consultation, diet guidance and lab support. Call 8126364606.",
    url: "https://www.balpradaindia.com/liver-cirrhosis-ayurvedic-treatment-in-rampur",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/images/balprada-logo.png",
        width: 1200,
        height: 630,
        alt: "Liver Cirrhosis Ayurvedic Treatment in Rampur | Balprada",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liver Cirrhosis Ayurvedic Treatment in Rampur | Balprada",
    description:
      "Looking for ayurvedic care for liver cirrhosis in Rampur? Balprada, trusted since 1991, offers supportive consultation, diet guidance and lab support. Call 8126364606.",
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