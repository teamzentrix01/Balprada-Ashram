import Content from "./Content";

export const metadata = {
  title: "Privacy Policy | Balprada Ayurvedic Hospital",
  description:
    "Read Balprada Ayurvedic Hospital's privacy policy to understand how we collect, use, and protect your personal and health information.",
  keywords: [
    "Balprada Privacy Policy",
    "Ayurvedic Hospital Privacy Policy",
    "Patient Data Protection",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Balprada Ayurvedic Hospital",
    description:
      "How Balprada Ayurvedic Hospital collects, uses, and protects your personal and health information.",
    url: "https://www.balpradaindia.com/privacy-policy",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
  },
};

export default function PrivacyPolicyPage() {
  return <Content />;
}