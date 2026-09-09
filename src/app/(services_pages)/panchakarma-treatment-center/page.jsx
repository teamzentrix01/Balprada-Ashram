import React from "react";
import Content from "./Content";

// SEO METADATA – PANCHAKARMA TREATMENT CENTER
export const metadata = {
  title: "Panchakarma Treatment Center | Balprada Ayurvedic Hospital",

  description:
    "Balprada Ayurvedic Hospital, Moradabad offers a dedicated Panchakarma Treatment Center with physician-supervised detox therapies, personalised for every patient.",

  keywords: [
    "panchakarma treatment center",
    "panchakarma center Moradabad",
    "panchakarma treatment hospital",
    "best panchakarma center Moradabad",
    "panchakarma therapy Moradabad",
    "ayurvedic detox center",
    "panchakarma treatment for joint pain",
    "panchakarma for digestive health",
    "panchakarma basti therapy",
    "panchakarma virechana treatment",
    "panchakarma vamana therapy",
    "ayurvedic panchakarma hospital",
    "panchakarma detox program",
    "panchakarma nasya therapy",
    "panchakarma abhyanga massage center",
    "ayurvedic wellness center Moradabad",
    "panchakarma treatment cost Moradabad",
    "panchakarma therapy for stress",
    "ayurvedic panchakarma specialist",
    "panchakarma shirodhara center",
    "panchakarma treatment process",
    "panchakarma seasonal detox",
  ],

  alternates: {
    canonical: "https://www.balpradaindia.com/panchakarma-treatment-center",
  },

  openGraph: {
    title: "Panchakarma Treatment Center | Balprada Ayurvedic Hospital",
    description:
      "Balprada Ayurvedic Hospital, Moradabad offers a dedicated Panchakarma Treatment Center with physician-supervised detox therapies, personalised for every patient.",
    url: "https://www.balpradaindia.com/panchakarma-treatment-center",
    siteName: "Balprada Ayurvedic Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Panchakarma Treatment Center | Balprada Ayurvedic Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Panchakarma Treatment Center | Balprada Ayurvedic Hospital",
    description:
      "Balprada Ayurvedic Hospital, Moradabad offers a dedicated Panchakarma Treatment Center with physician-supervised detox therapies, personalised for every patient.",
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