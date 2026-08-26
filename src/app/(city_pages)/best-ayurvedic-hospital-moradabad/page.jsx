import React from "react";
import Content from "./Content";

// SEO METADATA – BEST AYURVEDIC HOSPITAL IN MORADABAD
export const metadata = {
  title: "Best Ayurvedic Hospital in Moradabad | Balprada Ayurvedic Hospital",

  description:
    "Balprada Ayurvedic Hospital & Research Center, Moradabad — trusted ayurvedic care since 1991 for kidney, liver, cancer support, diabetes & more. Free OPD on the 15th. Book now.",

  keywords: [
    "Best Ayurvedic Hospital in Moradabad",
    "Balprada Ayurvedic Hospital",
    "Ayurvedic Hospital Moradabad",
    "Ayurvedic Treatment Moradabad",
    "Ayurvedic Hospital Bilari",
    "Ayurvedic Treatment for Kidney",
    "Ayurvedic Treatment for Liver",
    "Ayurvedic Kidney Failure Treatment",
    "Ayurvedic Cancer Support Moradabad",
    "Panchakarma Center Moradabad",
    "Ayurvedic Diabetes Treatment",
    "Ayurvedic Thyroid Treatment",
    "Ayurvedic Doctor Moradabad",
    "Ayurvedic Ashram Moradabad",
    "Naturopathy Center Moradabad",
    "Yoga and Ayurveda Moradabad",
    "Ayurvedic Women's Wellness",
    "Ayurvedic Hospital Near Me",
    "Herbal Medicine Hospital Moradabad",
    "Ayurvedic Research Center Moradabad",
    "Free OPD Ayurvedic Hospital",
    "Balprada Pathology Lab",
  ],

  alternates: {
    canonical: "https://www.balpradaindia.com/best-ayurvedic-hospital-moradabad",
  },

  openGraph: {
    title: "Best Ayurvedic Hospital in Moradabad | Balprada Ayurvedic Hospital",
    description:
      "Balprada Ayurvedic Hospital & Research Center, Moradabad — trusted ayurvedic care since 1991 for kidney, liver, cancer support, diabetes & more. Free OPD on the 15th. Book now.",
    url: "https://www.balpradaindia.com/best-ayurvedic-hospital-moradabad",
    siteName: "Balprada Ayurvedic Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Best Ayurvedic Hospital in Moradabad | Balprada Ayurvedic Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Ayurvedic Hospital in Moradabad | Balprada Ayurvedic Hospital",
    description:
      "Balprada Ayurvedic Hospital & Research Center, Moradabad — trusted ayurvedic care since 1991 for kidney, liver, cancer support, diabetes & more. Free OPD on the 15th.",
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