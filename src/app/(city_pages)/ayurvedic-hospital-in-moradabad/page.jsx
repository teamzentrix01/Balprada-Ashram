import React from "react";
import Content from "./Content";

// SEO METADATA – AYURVEDIC HOSPITAL IN MORADABAD
export const metadata = {
  title: "Ayurvedic Hospital in Moradabad | Balprada India",

  description:
    "Balprada India is an Ayurvedic hospital in Moradabad offering holistic Ayurvedic care, natural healing, traditional therapies, wellness services and supportive treatment for overall wellbeing.",

  keywords: [
    "ayurvedic hospital in moradabad",
    "ayurvedic hospital moradabad",
    "ayurveda hospital moradabad",
    "best ayurvedic hospital in moradabad",
    "ayurvedic treatment in moradabad",
    "ayurvedic treatment moradabad",
    "ayurvedic doctor moradabad",
    "ayurveda treatment moradabad",
    "ayurvedic therapy moradabad",
    "panchakarma treatment moradabad",
    "natural treatment moradabad",
    "holistic treatment moradabad",
    "ayurvedic wellness moradabad",
    "Balprada India",
    "Balprada Ayurvedic hospital",
  ],

  alternates: {
    canonical: "https://www.balpradaindia.com/ayurvedic-hospital-in-moradabad",
  },

  openGraph: {
    title: "Ayurvedic Hospital in Moradabad | Balprada India",
    description:
      "Balprada India is an Ayurvedic hospital in Moradabad offering holistic Ayurvedic care, natural healing, traditional therapies, wellness services and supportive treatment for overall wellbeing.",
    url: "https://www.balpradaindia.com/ayurvedic-hospital-in-moradabad",
    siteName: "Balprada India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Hospital in Moradabad | Balprada India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Hospital in Moradabad | Balprada India",
    description:
      "Balprada India is an Ayurvedic hospital in Moradabad offering holistic Ayurvedic care, natural healing, traditional therapies and wellness services.",
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