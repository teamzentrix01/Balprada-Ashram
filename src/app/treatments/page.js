import Link from "next/link";
import { ContactPanel, PageHero, Shell } from "../_components/SiteChrome";
import TreatmentAccordion from "../_components/TreatmentAccordion";
import { treatments } from "../data";

export const metadata = {
  title: "Treatments | Balprada Ayurvedic Hospital & Research Center",
};

export default function TreatmentsPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Our Treatments"
        title="Ayurvedic Treatment and Holistic Care"
        text="Personalized consultation is available for kidney, liver, cancer supportive care, heart and lifestyle disorders, diabetes and women's health."
        image={treatments[0].image}
      />

      <section className="treatment-overview section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our Range of Treatments</p>
            <h2>Choose your health concern</h2>
          </div>
          <Link className="button primary gradient" href="/contact">
            Book Consultation
          </Link>
        </div>
        <TreatmentAccordion />
      </section>

      <section className="treatment-process section">
        <div>
          <p className="eyebrow">Treatment Journey</p>
          <h2>A clear path from consultation to follow-up</h2>
        </div>
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
