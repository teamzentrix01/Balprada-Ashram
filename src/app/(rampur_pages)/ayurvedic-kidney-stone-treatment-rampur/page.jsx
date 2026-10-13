import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Ayurvedic Kidney Stone Treatment in Rampur | Balprada",
  description:
    "Looking for Ayurvedic kidney stone treatment in Rampur? Balprada offers supportive stone care since 1991 with diet guidance and follow-up. Book OPD.",
  keywords: [
    "Ayurvedic kidney stone treatment Rampur",
    "kidney stone treatment in Rampur UP",
    "Ayurvedic treatment for kidney stones",
    "kidney stone Ayurvedic medicine",
    "Ayurvedic doctor for kidney stone",
    "kidney stone diet Ayurveda",
    "kidney stone prevention Ayurveda",
    "kidney stone pain relief Ayurvedic",
    "kidney stone without surgery Ayurveda",
    "stone treatment Ayurvedic hospital",
    "urinary stone Ayurvedic care",
    "kidney care Ayurveda",
    "kidney and urinary care",
    "Ayurvedic kidney treatment Rampur",
    "Ayurvedic kidney treatment Moradabad",
    "Balprada Ayurvedic Hospital",
    "Ayurvedic hospital for kidney",
    "kidney swelling Ayurvedic treatment",
    "kidney failure Ayurvedic treatment",
    "hydration and diet for kidney stones",
    "herbal kidney care",
    "Ayurvedic doctor in Rampur",
    "free OPD kidney consultation",
    "Ayurvedic hospital Rampur",
    "Ayurvedic hospital since 1991",
  ],
  alternates: {
    canonical:
      "https://www.balpradaindia.com/ayurvedic-kidney-stone-treatment-rampur",
  },
  openGraph: {
    title: "Ayurvedic Kidney Stone Treatment in Rampur | Balprada",
    description:
      "Looking for Ayurvedic kidney stone treatment in Rampur? Balprada offers supportive stone care since 1991 with diet guidance and follow-up. Book OPD.",
    url: "https://www.balpradaindia.com/ayurvedic-kidney-stone-treatment-rampur",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/images/balprada-logo.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Kidney Stone Treatment in Rampur | Balprada",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Kidney Stone Treatment in Rampur | Balprada",
    description:
      "Looking for Ayurvedic kidney stone treatment in Rampur? Balprada offers supportive stone care since 1991 with diet guidance and follow-up. Book OPD.",
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