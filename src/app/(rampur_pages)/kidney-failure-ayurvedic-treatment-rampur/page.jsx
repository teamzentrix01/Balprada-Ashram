import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Kidney Failure Ayurvedic Treatment in Rampur | Balprada",
  description:
    "Kidney failure Ayurvedic treatment in Rampur: Balprada offers supportive Ayurvedic kidney care since 1991 with diet guidance and follow-up. Book OPD today.",
  keywords: [
    "kidney failure Ayurvedic treatment Rampur",
    "Ayurvedic treatment for kidney failure",
    "kidney treatment in Rampur UP",
    "Ayurvedic kidney doctor Rampur",
    "renal failure Ayurvedic treatment",
    "Ayurvedic treatment for kidney disease",
    "kidney care Ayurveda",
    "Balprada Ayurvedic Hospital",
    "Ayurvedic hospital for kidney",
    "kidney failure diet Ayurveda",
    "Ayurvedic medicine for kidney",
    "kidney swelling Ayurvedic treatment",
    "kidney stone Ayurvedic treatment",
    "diabetic nephropathy Ayurvedic care",
    "chronic kidney disease Ayurveda",
    "Ayurvedic kidney treatment Moradabad",
    "kidney supportive care",
    "herbal kidney care",
    "kidney patient diet guidance",
    "Ayurvedic doctor for kidney",
    "kidney failure support Uttar Pradesh",
    "Ayurvedic treatment for creatinine",
    "kidney and urinary care",
    "Ayurvedic hospital since 1991",
    "free OPD kidney consultation",
  ],
  alternates: {
    canonical:
      "https://www.balpradaindia.com/kidney-failure-ayurvedic-treatment-rampur",
  },
  openGraph: {
    title: "Kidney Failure Ayurvedic Treatment in Rampur | Balprada",
    description:
      "Kidney failure Ayurvedic treatment in Rampur: Balprada offers supportive Ayurvedic kidney care since 1991 with diet guidance and follow-up. Book OPD today.",
    url: "https://www.balpradaindia.com/kidney-failure-ayurvedic-treatment-rampur",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [
      {
        url: "https://www.balpradaindia.com/images/balprada-logo.png",
        width: 1200,
        height: 630,
        alt: "Kidney Failure Ayurvedic Treatment in Rampur | Balprada",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidney Failure Ayurvedic Treatment in Rampur | Balprada",
    description:
      "Kidney failure Ayurvedic treatment in Rampur: Balprada offers supportive Ayurvedic kidney care since 1991 with diet guidance and follow-up. Book OPD today.",
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