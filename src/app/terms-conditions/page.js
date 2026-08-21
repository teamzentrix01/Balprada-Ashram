import Content from "./Content";

export const metadata = {
  title: "Terms & Conditions | Balprada Ayurvedic Hospital",
  description:
    "Read the Terms & Conditions for using Balprada Ayurvedic Hospital's website, OPD services, treatments, and Ayurvedic product purchases.",
  keywords: [
    "Balprada Terms and Conditions",
    "Ayurvedic Hospital Terms of Use",
    "Balprada Website Terms",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/terms-and-conditions" },
  openGraph: {
    title: "Terms & Conditions | Balprada Ayurvedic Hospital",
    description:
      "Terms governing the use of Balprada Ayurvedic Hospital's website, OPD services, treatments, and product purchases.",
    url: "https://www.balpradaindia.com/terms-and-conditions",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return <Content />;
}