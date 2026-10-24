import React from "react";
import Content from "./Content";

// SEO METADATA – BALPRADA AYURVEDA KANTH TREATMENT
export const metadata = {
  title: "Balprada Ayurveda Kanth Treatment | Kidney, Liver, Diabetes Care",

  description:
    "Balprada Ayurveda treatment for Kanth patients: consultation by experienced vaidyas, in-house medicines, panchakarma, pathology lab and follow-up care. Free OPD on 15th.",

  keywords: [
    "Balprada Ayurveda Kanth Treatment",
    "Balprada Ayurvedic Hospital",
    "Ayurveda Treatment Kanth",
    "Ayurvedic Treatment in Kanth",
    "Ayurvedic Hospital Kanth",
    "Ayurvedic Doctor Kanth",
    "Ayurvedic Hospital near Kanth Moradabad",
    "Ayurvedic Treatment Moradabad",
    "Ayurvedic Hospital Moradabad",
    "Ayurvedic Treatment for Kidney",
    "Ayurvedic Treatment for Liver",
    "Ayurvedic Diabetes Treatment",
    "Ayurvedic Thyroid Treatment",
    "Ayurvedic Cancer Support",
    "Panchakarma Moradabad",
    "Balprada Herbal Wellness",
    "Balprada Pathology Lab",
    "Balprada Ashram",
    "Ayurvedic Chikitsalaya Moradabad",
    "Free OPD Ayurvedic Moradabad",
    "Vaidya Consultation Kanth",
    "Ayurvedic Treatment Since 1991",
  ],

  alternates: {
    canonical:
      "https://www.balpradaindia.com/balprada-ayurveda-kanth-treatment",
  },

  openGraph: {
    title: "Balprada Ayurveda Kanth Treatment | Kidney, Liver, Diabetes Care",
    description:
      "Balprada Ayurveda treatment for Kanth patients: consultation by experienced vaidyas, in-house medicines, panchakarma, pathology lab and follow-up care. Free OPD on 15th.",
    url: "https://www.balpradaindia.com/balprada-ayurveda-kanth-treatment",
    siteName: "Balprada India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Balprada Ayurveda Kanth Treatment | Kidney, Liver, Diabetes Care",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Balprada Ayurveda Kanth Treatment | Kidney, Liver, Diabetes Care",
    description:
      "Balprada Ayurveda treatment for Kanth patients: consultation by experienced vaidyas, in-house medicines, panchakarma, pathology lab and follow-up care. Free OPD on 15th.",
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