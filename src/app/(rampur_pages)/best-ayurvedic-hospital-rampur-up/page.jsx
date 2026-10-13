import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Ayurvedic Hospital in Rampur UP | Balprada Ayurveda",
  description:
    "Looking for the best Ayurvedic hospital in Rampur, UP? Balprada offers trusted Ayurvedic care since 1991 for kidney, liver, cancer support & more. Book OPD.",
  keywords: [
    "best ayurvedic hospital in Rampur UP",
    "ayurvedic hospital Rampur",
    "Ayurvedic treatment in Rampur",
    "Balprada Ayurvedic Hospital",
    "ayurvedic doctor in Rampur",
    "best ayurvedic doctor Rampur UP",
    "Ayurvedic hospital near Rampur",
    "Ayurvedic hospital Moradabad",
    "Ayurvedic treatment for kidney",
    "Ayurvedic treatment for liver",
    "Ayurvedic cancer support",
    "Ayurvedic treatment for diabetes",
    "Ayurvedic treatment for thyroid",
    "panchakarma treatment Rampur",
    "Ayurvedic clinic Rampur",
    "Ayurvedic ashram Uttar Pradesh",
    "herbal medicine treatment",
    "Ayurvedic research center",
    "Ayurvedic treatment for fatty liver",
    "kidney stone Ayurvedic treatment",
    "Ayurvedic treatment for kidney failure",
    "women's wellness Ayurveda",
    "naturopathy and yoga treatment",
    "free OPD Ayurvedic hospital",
    "Ayurvedic hospital since 1991",
  ],
  alternates: {
    canonical:
      "https://www.balpradaindia.com/best-ayurvedic-hospital-rampur-up",
  },
  openGraph: {
    title: "Best Ayurvedic Hospital in Rampur UP | Balprada Ayurveda",
    description:
      "Looking for the best Ayurvedic hospital in Rampur, UP? Balprada offers trusted Ayurvedic care since 1991 for kidney, liver, cancer support & more. Book OPD.",
    url: "https://www.balpradaindia.com/best-ayurvedic-hospital-rampur-up",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/images/balprada-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Ayurvedic Hospital in Rampur UP | Balprada Ayurveda",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Ayurvedic Hospital in Rampur UP | Balprada Ayurveda",
    description:
      "Looking for the best Ayurvedic hospital in Rampur, UP? Balprada offers trusted Ayurvedic care since 1991 for kidney, liver, cancer support & more. Book OPD.",
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