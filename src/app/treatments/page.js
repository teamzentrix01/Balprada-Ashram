import Link from "next/link";
import ContactPanel from "../_components/ContactPanel";
import PageHero from "../_components/PageHero";
import SectionHeading from "../_components/SectionHeading";
import Shell from "../_components/Shell";
import TreatmentAccordion from "../_components/TreatmentAccordion";
import { treatments } from "../data";

export const metadata = {
  title: "Ayurvedic Treatments for Kidney, Liver & Cancer | Balprada",
  description:
    "Explore Ayurvedic treatments at Balprada Hospital for kidney disease, liver disorders, cancer support, diabetes and more holistic care.",
  keywords: [
    "Ayurvedic Treatment for Kidney",
    "Ayurvedic Treatment for Liver",
    "Ayurvedic Cancer Support",
    "Ayurvedic Diabetes Treatment",
    "Balprada Treatments",
  ],
  alternates: { canonical: "https://www.balpradaindia.com/treatments" },
  openGraph: {
    title: "Ayurvedic Treatments for Kidney, Liver & Cancer | Balprada",
    description:
      "Ayurvedic treatments for kidney disease, liver disorders, cancer support, diabetes and more.",
    url: "https://www.balpradaindia.com/treatments",
    type: "website",
    siteName: "Balprada Ayurvedic Hospital & Research Center",
    images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Balprada Ayurvedic Treatments" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Treatments for Kidney, Liver & Cancer | Balprada",
    description: "Treatments for kidney, liver, cancer and diabetes.",
    images: ["/icon.png"],
  },
};

export default function TreatmentsPage() {
  return (
    <Shell>
      <PageHero
        className="treatments-page-hero"
        eyebrow="Our Treatments"
        title="Ayurvedic Treatment and Holistic Care"
        text="Personalized consultation is available for kidney, liver, cancer supportive care, heart and lifestyle disorders, diabetes, thyroid concerns and women's health."
        image={treatments[0].image}
      />

      <section className="treatments-stage treatment-overview section">
        <div className="section-heading">
          <SectionHeading
            eyebrow="Our Range of Treatments"
            title="Choose your health concern"
          />
          <Link className="button primary gradient" href="/contact">
            Book Consultation
          </Link>
        </div>
        <TreatmentAccordion compact />
      </section>

      <section className="treatment-process section">
        <SectionHeading
          eyebrow="Treatment Journey"
          title="A clear path from consultation to follow-up"
        />
        <ol>
          <li>
            <span>01</span>
            <h3>Consultation</h3>
            <p>Health concern, medical history, routine and treatment goals are understood.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Personalized Plan</h3>
            <p>Ayurvedic medicines, diet and lifestyle guidance are planned responsibly.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Supportive Care</h3>
            <p>Yoga, naturopathy, panchakarma or diagnostics may support the care plan.</p>
          </li>
          <li>
            <span>04</span>
            <h3>Follow-up</h3>
            <p>Regular review helps the team adjust guidance according to progress.</p>
          </li>
        </ol>
      </section>

      <ContactPanel />
    </Shell>
  );
}
