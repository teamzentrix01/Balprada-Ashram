import React from "react";
import Content from "./Content";

// SEO METADATA – AYURVEDIC HOSPITAL APPOINTMENT ONLINE
export const metadata = {
  title:
    "Ayurvedic Hospital Appointment Online | Book OPD at Balprada",

  description:
    "Book your Ayurvedic hospital appointment online at Balprada, Moradabad. Choose your branch and health concern, or use WhatsApp and phone. Free OPD on the 15th.",

  keywords: [
    "ayurvedic hospital appointment online",
    "online ayurvedic appointment",
    "book ayurvedic doctor appointment",
    "Balprada appointment",
    "Balprada Ayurvedic Hospital",
    "ayurvedic OPD booking",
    "ayurvedic hospital Moradabad",
    "ayurvedic hospital Bilari",
    "book OPD online",
    "ayurvedic doctor consultation",
    "vaidya consultation online booking",
    "free OPD Moradabad",
    "ayurvedic treatment appointment",
    "ayurvedic kidney care appointment",
    "ayurvedic liver care appointment",
    "ayurvedic cancer supportive care",
    "ayurvedic diabetes thyroid care",
    "ayurvedic hospital WhatsApp appointment",
    "ayurvedic ashram Moradabad",
    "Balprada Ayurvedic Hospital & Research Center",
    "panchakarma appointment",
    "ayurvedic clinic Moradabad",
    "ayurvedic hospital near me",
  ],

  alternates: {
    canonical:
      "https://www.balpradaindia.com/ayurvedic-hospital-appointment-online",
  },

  openGraph: {
    title:
      "Ayurvedic Hospital Appointment Online | Book OPD at Balprada",
    description:
      "Book your Ayurvedic hospital appointment online at Balprada, Moradabad. Choose your branch and health concern, or use WhatsApp and phone. Free OPD on the 15th.",
    url:
      "https://www.balpradaindia.com/ayurvedic-hospital-appointment-online",
    siteName: "Balprada India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.balpradaindia.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Hospital Appointment Online | Book OPD at Balprada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ayurvedic Hospital Appointment Online | Book OPD at Balprada",
    description:
      "Book your Ayurvedic hospital appointment online at Balprada, Moradabad. Choose your branch and health concern, or use WhatsApp and phone. Free OPD on the 15th.",
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