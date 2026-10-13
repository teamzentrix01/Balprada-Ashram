import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Dialysis Alternative Ayurvedic Care in Rampur | Balprada",
  description:
    "Seeking Ayurvedic support around dialysis in Rampur? Balprada offers supportive kidney care since 1991 with diet guidance, follow-up and honest advice.",
  keywords: [
    "dialysis alternative Ayurvedic Rampur",
    "Ayurvedic treatment for dialysis patients",
    "Ayurveda for kidney failure Rampur",
    "Ayurvedic kidney care Rampur UP",
    "dialysis support Ayurveda",
    "Ayurvedic treatment for kidney failure",
    "kidney failure Ayurvedic treatment",
    "Ayurvedic doctor for kidney",
    "diet for dialysis patients Ayurveda",
    "kidney patient diet guidance",
    "Ayurvedic treatment for creatinine",
    "high creatinine Ayurvedic care",
    "chronic kidney disease Ayurveda",
    "Ayurvedic kidney treatment Moradabad",
    "Balprada Ayurvedic Hospital",
    "Ayurvedic hospital for kidney",
    "kidney and urinary care",
    "kidney swelling Ayurvedic treatment",
    "kidney stone Ayurvedic treatment",
    "diabetic nephropathy Ayurvedic care",
    "herbal kidney care",
    "supportive kidney care",
    "free OPD kidney consultation",
    "Ayurvedic hospital Rampur",
    "Ayurvedic hospital since 1991",
  ],
  alternates: {
    canonical:
      "https://www.balpradaindia.com/dialysis-alternative-ayurvedic-rampur",
  },
  openGraph: {
    title: "Dialysis Alternative Ayurvedic Care in Rampur | Balprada",
    description:
      "Seeking Ayurvedic support around dialysis in Rampur? Balprada offers supportive kidney care since 1991 with diet guidance, follow-up and honest advice.",
    url: "https://www.balpradaindia.com/dialysis-alternative-ayurvedic-rampur",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/images/balprada-logo.png",
        width: 1200,
        height: 630,
        alt: "Dialysis Alternative Ayurvedic Care in Rampur | Balprada",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dialysis Alternative Ayurvedic Care in Rampur | Balprada",
    description:
      "Seeking Ayurvedic support around dialysis in Rampur? Balprada offers supportive kidney care since 1991 with diet guidance, follow-up and honest advice.",
    images: ["https://www.balpradaindia.com/images/balprada-logo.png"],
  },
  icons: {
    icon: "/images/balprada-logo.png",
  },
};


export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Services />
    </>
  );
}