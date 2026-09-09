import React from "react";
import Content from "./Content";

// SEO METADATA – PATHOLOGY LAB AT BALPRADA AYURVEDIC HOSPITAL
export const metadata = {
  title: "Pathology Lab at Balprada Ayurvedic Hospital | Diagnostic Tests",

  description:
    "Balprada Hospital's in-house pathology lab offers accurate blood, urine & hormone tests to support personalised Ayurvedic treatment plans. Book a diagnostic test today.",

  keywords: [
    "ayurvedic hospital pathology lab",
    "pathology lab near me",
    "diagnostic lab in hospital",
    "blood test lab",
    "pathology test center",
    "ayurvedic hospital diagnostic services",
    "full body checkup lab",
    "kidney function test lab",
    "liver function test lab",
    "thyroid test lab",
    "diabetes test center",
    "lipid profile test",
    "CBC test lab",
    "hormone test lab",
    "urine test lab",
    "pathology lab home collection",
    "accurate blood test reports",
    "health checkup packages",
    "NABL pathology services",
    "diagnostic tests for ayurvedic treatment",
    "Balprada Hospital pathology lab",
  ],

  alternates: {
    canonical: "https://www.balpradaindia.com/ayurvedic-hospital-pathology-lab",
  },

  openGraph: {
    title: "Pathology Lab at Balprada Ayurvedic Hospital | Diagnostic Tests",
    description:
      "Balprada Hospital's in-house pathology lab offers accurate blood, urine & hormone tests to support personalised Ayurvedic treatment plans. Book a diagnostic test today.",
    url: "https://www.balpradaindia.com/ayurvedic-hospital-pathology-lab",
    siteName: "Balprada Ayurvedic Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Pathology Lab at Balprada Ayurvedic Hospital | Diagnostic Tests",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pathology Lab at Balprada Ayurvedic Hospital | Diagnostic Tests",
    description:
      "Balprada Hospital's in-house pathology lab offers accurate blood, urine & hormone tests to support personalised Ayurvedic treatment plans. Book a diagnostic test today.",
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