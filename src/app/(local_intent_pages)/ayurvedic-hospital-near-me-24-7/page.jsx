import React from "react";
import Content from "./Content";

// SEO METADATA – AYURVEDIC HOSPITAL NEAR ME 24/7
export const metadata = {
  title:
    "Ayurvedic Hospital Near Me: Open 7 Days a Week | Balprada",

  description:
    "Searching for an Ayurvedic hospital near me 24/7? Balprada is open 7 days a week, OPD 10 AM to 2 PM. See branches, booking and free OPD on the 15th.",

  keywords: [
    "ayurvedic hospital near me 24/7",
    "ayurvedic hospital open 7 days",
    "ayurvedic hospital near me open now",
    "ayurvedic hospital Moradabad",
    "ayurvedic hospital Bilari",
    "ayurvedic hospital Uttar Pradesh",
    "Balprada Ayurvedic Hospital",
    "Balprada Ayurvedic Hospital & Research Center",
    "ayurvedic OPD timings",
    "ayurvedic OPD Sunday",
    "free OPD Moradabad",
    "book ayurvedic appointment",
    "ayurvedic WhatsApp appointment",
    "ayurvedic doctor consultation",
    "ayurvedic ashram Moradabad",
    "ayurvedic clinic Moradabad",
    "ayurvedic pathology lab",
    "panchakarma treatment",
    "ayurvedic kidney care",
    "ayurvedic liver care",
    "ayurvedic diabetes thyroid care",
    "ayurvedic cancer supportive care",
    "ayurvedic women’s wellness",
    "ayurvedic hospital near me",
  ],

  alternates: {
    canonical:
      "https://www.balpradaindia.com/ayurvedic-hospital-near-me-24-7",
  },

  openGraph: {
    title:
      "Ayurvedic Hospital Near Me: Open 7 Days a Week | Balprada",
    description:
      "Searching for an Ayurvedic hospital near me 24/7? Balprada is open 7 days a week, OPD 10 AM to 2 PM. See branches, booking and free OPD on the 15th.",
    url:
      "https://www.balpradaindia.com/ayurvedic-hospital-near-me-24-7",
    siteName: "Balprada India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Hospital Near Me: Open 7 Days a Week | Balprada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ayurvedic Hospital Near Me: Open 7 Days a Week | Balprada",
    description:
      "Searching for an Ayurvedic hospital near me 24/7? Balprada is open 7 days a week, OPD 10 AM to 2 PM. See branches, booking and free OPD on the 15th.",
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