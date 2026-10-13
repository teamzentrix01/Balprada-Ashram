import React from "react";
import Content from "./Content";

// SEO METADATA – AYURVEDIC TREATMENT CENTRE IN RAMPUR
export const metadata = {
  title: "Ayurvedic Treatment Centre in Rampur | Balprada Hospital",

  description:
    "Trusted Ayurvedic treatment centre for Rampur patients since 1991. Balprada offers kidney, liver, cancer support, diabetes and women's care. Book your OPD.",

  keywords: [
    "Ayurvedic treatment centre Rampur",
    "Ayurvedic centre in Rampur UP",
    "Ayurvedic treatment in Rampur",
    "Ayurvedic hospital Rampur",
    "Ayurvedic clinic Rampur",
    "best Ayurvedic centre near Rampur",
    "Balprada Ayurvedic Hospital",
    "Ayurvedic treatment centre Moradabad",
    "Ayurvedic ashram Uttar Pradesh",
    "panchakarma centre Rampur",
    "Ayurvedic treatment for kidney",
    "Ayurvedic treatment for liver",
    "Ayurvedic cancer supportive care",
    "Ayurvedic treatment for diabetes",
    "Ayurvedic treatment for thyroid",
    "women's wellness Ayurveda",
    "herbal medicine centre",
    "yoga and naturopathy centre",
    "Ayurvedic pathology lab",
    "Ayurvedic research center",
    "in-house herbal medicines",
    "Ayurvedic doctor in Rampur",
    "free OPD Ayurvedic centre",
    "chronic disease Ayurvedic treatment",
    "Ayurvedic hospital since 1991",
  ],

  alternates: {
    canonical:
      "https://www.balpradaindia.com/ayurvedic-treatment-centre-rampur",
  },

  openGraph: {
    title: "Ayurvedic Treatment Centre in Rampur | Balprada Hospital",
    description:
      "Trusted Ayurvedic treatment centre for Rampur patients since 1991. Balprada offers kidney, liver, cancer support, diabetes and women's care. Book your OPD.",
    url: "https://www.balpradaindia.com/ayurvedic-treatment-centre-rampur",
    siteName: "Balprada India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Treatment Centre in Rampur | Balprada Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Treatment Centre in Rampur | Balprada Hospital",
    description:
      "Trusted Ayurvedic treatment centre for Rampur patients since 1991. Balprada offers kidney, liver, cancer support, diabetes and women's care. Book your OPD.",
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