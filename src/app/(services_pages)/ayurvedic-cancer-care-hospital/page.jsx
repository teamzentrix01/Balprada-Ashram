import React from "react";
import Content from "./Content";

// SEO METADATA – AYURVEDIC CANCER CARE HOSPITAL
export const metadata = {
  title: "Ayurvedic Cancer Care Hospital | Balprada Ayurvedic Hospital",

  description:
    "Balprada Ayurvedic Hospital, Moradabad offers dedicated Ayurvedic cancer supportive care — symptom management, nutrition & emotional support alongside oncology treatment.",

  keywords: [
    "ayurvedic cancer care hospital",
    "ayurvedic cancer hospital Moradabad",
    "cancer supportive care ayurveda",
    "ayurvedic cancer treatment support",
    "ayurvedic hospital for cancer patients",
    "cancer care ayurvedic hospital",
    "best ayurvedic hospital for cancer support Moradabad",
    "ayurvedic support during chemotherapy",
    "cancer patient nutrition ayurveda",
    "ayurvedic cancer recovery care",
    "ayurvedic supportive therapy cancer",
    "cancer fatigue ayurvedic treatment",
    "ayurvedic care alongside chemotherapy",
    "cancer symptom management ayurveda",
    "ayurvedic cancer wellness program",
    "oncology supportive care Moradabad",
    "ayurvedic immunity support cancer",
    "cancer patient care hospital Moradabad",
    "ayurvedic post cancer treatment recovery",
    "holistic cancer care hospital",
    "ayurvedic hospital cancer department",
    "cancer supportive treatment center Moradabad",
  ],

  alternates: {
    canonical: "https://www.balpradaindia.com/ayurvedic-cancer-care-hospital",
  },

  openGraph: {
    title: "Ayurvedic Cancer Care Hospital | Balprada Ayurvedic Hospital",
    description:
      "Balprada Ayurvedic Hospital, Moradabad offers dedicated Ayurvedic cancer supportive care — symptom management, nutrition & emotional support alongside oncology treatment.",
    url: "https://www.balpradaindia.com/ayurvedic-cancer-care-hospital",
    siteName: "Balprada Ayurvedic Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Cancer Care Hospital | Balprada Ayurvedic Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Cancer Care Hospital | Balprada Ayurvedic Hospital",
    description:
      "Balprada Ayurvedic Hospital, Moradabad offers dedicated Ayurvedic cancer supportive care — symptom management, nutrition & emotional support alongside oncology treatment.",
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