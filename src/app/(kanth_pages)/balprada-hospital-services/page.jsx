import React from "react";
import Content from "./Content";

// SEO METADATA – BALPRADA HOSPITAL SERVICES
export const metadata = {
  title: "Balprada Hospital Services | Ayurvedic Treatment, Panchakarma & Lab",

  description:
    "Explore Balprada Hospital services: Ayurvedic OPD, kidney, liver, cancer support, panchakarma, yoga, pathology lab, medicines and ashram care. Free OPD on 15th.",

  keywords: [
    "Balprada Hospital Services",
    "Balprada Ayurvedic Hospital",
    "Balprada Ayurvedic Hospital & Research Center",
    "Ayurvedic Hospital Moradabad",
    "Ayurvedic Treatment Moradabad",
    "Ayurvedic OPD Moradabad",
    "Ayurvedic Treatment for Kidney",
    "Ayurvedic Treatment for Liver",
    "Ayurvedic Cancer Support",
    "Ayurvedic Diabetes Treatment",
    "Ayurvedic Thyroid Treatment",
    "Panchakarma Moradabad",
    "Yoga and Naturopathy Moradabad",
    "Ayurvedic Pathology Lab",
    "Balprada Labs",
    "Ayurvedic Medicines Moradabad",
    "Balprada Herbal Wellness",
    "Balprada Ashram",
    "Balprada Jansewa Sansthan",
    "Free OPD Ayurvedic Moradabad",
    "Women's Wellness Ayurveda",
    "Ayurvedic Physiotherapy",
  ],

  alternates: {
    canonical: "https://www.balpradaindia.com/balprada-hospital-services",
  },

  openGraph: {
    title: "Balprada Hospital Services | Ayurvedic Treatment, Panchakarma & Lab",
    description:
      "Explore Balprada Hospital services: Ayurvedic OPD, kidney, liver, cancer support, panchakarma, yoga, pathology lab, medicines and ashram care. Free OPD on 15th.",
    url: "https://www.balpradaindia.com/balprada-hospital-services",
    siteName: "Balprada India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Balprada Hospital Services | Ayurvedic Treatment, Panchakarma & Lab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Balprada Hospital Services | Ayurvedic Treatment, Panchakarma & Lab",
    description:
      "Explore Balprada Hospital services: Ayurvedic OPD, kidney, liver, cancer support, panchakarma, yoga, pathology lab, medicines and ashram care. Free OPD on 15th.",
    images: ["https://www.balpradaindia.com/icon.png"],
  },

  icons: {
    icon: "/icon.png",
  },
};

const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;