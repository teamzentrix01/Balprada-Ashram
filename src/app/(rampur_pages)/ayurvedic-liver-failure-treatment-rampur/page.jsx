import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Ayurvedic Liver Failure Treatment in Rampur | Balprada",
  description:
    "Seeking Ayurvedic liver failure treatment in Rampur? Balprada offers supportive liver care since 1991 with diet guidance and follow-up. Book OPD.",
  keywords: [
    "Ayurvedic liver failure treatment Rampur",
    "liver failure Ayurvedic treatment",
    "Ayurvedic treatment for liver in Rampur UP",
    "Ayurvedic doctor for liver",
    "liver care Ayurveda",
    "Ayurvedic treatment for fatty liver",
    "fatty liver Ayurvedic treatment Rampur",
    "Ayurvedic treatment for jaundice",
    "jaundice Ayurvedic care",
    "Ayurvedic treatment for weak digestion",
    "liver and digestive care",
    "liver cirrhosis Ayurvedic support",
    "liver diet Ayurveda",
    "liver patient diet guidance",
    "Ayurvedic liver treatment Moradabad",
    "Balprada Ayurvedic Hospital",
    "Ayurvedic hospital for liver",
    "herbal liver care",
    "supportive liver care",
    "liver function test follow-up",
    "Ayurvedic doctor in Rampur",
    "Ayurvedic hospital Rampur",
    "free OPD liver consultation",
    "chronic liver disease Ayurveda",
    "Ayurvedic hospital since 1991",
  ],
  alternates: {
    canonical:
      "https://www.balpradaindia.com/ayurvedic-liver-failure-treatment-rampur",
  },
  openGraph: {
    title: "Ayurvedic Liver Failure Treatment in Rampur | Balprada",
    description:
      "Seeking Ayurvedic liver failure treatment in Rampur? Balprada offers supportive liver care since 1991 with diet guidance and follow-up. Book OPD.",
    url: "https://www.balpradaindia.com/ayurvedic-liver-failure-treatment-rampur",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/images/balprada-logo.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Liver Failure Treatment in Rampur | Balprada",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Liver Failure Treatment in Rampur | Balprada",
    description:
      "Seeking Ayurvedic liver failure treatment in Rampur? Balprada offers supportive liver care since 1991 with diet guidance and follow-up. Book OPD.",
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