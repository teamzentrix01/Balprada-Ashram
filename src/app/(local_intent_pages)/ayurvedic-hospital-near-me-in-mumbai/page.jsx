import React from "react";
import Content from "./Content";

// SEO METADATA – AYURVEDIC HOSPITAL FOR MUMBAI PATIENTS
export const metadata = {
  title:
    "Ayurvedic Hospital for Mumbai Patients | Balprada",

  description:
    "Looking for an Ayurvedic hospital from Mumbai? See how Balprada (Moradabad, UP) works: OPD timings, branches, WhatsApp booking and free OPD on the 15th.",

  keywords: [
    "ayurvedic hospital near me Mumbai",
    "ayurvedic hospital Mumbai",
    "best ayurvedic hospital for Mumbai patients",
    "ayurvedic doctor Mumbai",
    "ayurvedic treatment from Mumbai",
    "Balprada Ayurvedic Hospital",
    "Balprada Ayurvedic Hospital & Research Center",
    "ayurvedic hospital Moradabad",
    "ayurvedic hospital Bilari",
    "ayurvedic hospital Uttar Pradesh",
    "ayurvedic OPD booking",
    "book ayurvedic appointment",
    "ayurvedic WhatsApp appointment",
    "free OPD Moradabad",
    "ayurvedic kidney care",
    "ayurvedic liver care",
    "ayurvedic cancer supportive care",
    "ayurvedic diabetes thyroid care",
    "ayurvedic women’s wellness",
    "panchakarma treatment",
    "ayurvedic ashram",
    "ayurvedic consultation outstation patients",
    "ayurvedic hospital outside Mumbai",
    "ayurvedic treatment Uttar Pradesh",
  ],

  alternates: {
    canonical:
      "https://www.balpradaindia.com/ayurvedic-hospital-near-me-in-mumbai",
  },

  openGraph: {
    title:
      "Ayurvedic Hospital for Mumbai Patients | Balprada",
    description:
      "Looking for an Ayurvedic hospital from Mumbai? See how Balprada (Moradabad, UP) works: OPD timings, branches, WhatsApp booking and free OPD on the 15th.",
    url:
      "https://www.balpradaindia.com/ayurvedic-hospital-near-me-in-mumbai",
    siteName: "Balprada India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Hospital for Mumbai Patients | Balprada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ayurvedic Hospital for Mumbai Patients | Balprada",
    description:
      "Looking for an Ayurvedic hospital from Mumbai? See how Balprada (Moradabad, UP) works: OPD timings, branches, WhatsApp booking and free OPD on the 15th.",
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