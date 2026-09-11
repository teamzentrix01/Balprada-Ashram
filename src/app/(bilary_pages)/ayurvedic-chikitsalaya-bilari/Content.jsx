import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "What makes Balprada different from other Ayurvedic clinics in Moradabad?",
      a: "Balprada combines classical Ayurvedic treatment protocols with a research-driven, hospital-grade setup — qualified BAMS/MD doctors, in-house prepared medicines, and hygienic therapy infrastructure, unlike smaller unregistered clinics common in the region.",
    },
    {
      q: "Does Balprada treat chronic conditions like arthritis and psoriasis?",
      a: "Yes, Balprada has dedicated protocols for chronic joint disorders (arthritis, spondylitis, sciatica) and skin conditions (psoriasis, eczema, vitiligo) using a combination of internal medication and Panchakarma therapies.",
    },
    {
      q: "Is Panchakarma treatment available at Balprada?",
      a: "Yes, Balprada operates a fully functional Panchakarma unit offering Vamana, Virechana, Basti, Nasya, and Raktamokshana under supervised, trained therapists.",
    },
    {
      q: "Do I need a prior diagnosis or reports before visiting Balprada?",
      a: "While not mandatory, bringing existing medical reports helps physicians design a more accurate, personalized treatment plan alongside the traditional Nadi Pariksha (pulse diagnosis) and case history review.",
    },
    {
      q: "Can patients from outside Moradabad get treatment at Balprada?",
      a: "Yes, many patients travel from Rampur, Amroha, Sambhal, and surrounding districts. The hospital also helps out-of-town patients plan multi-day stays for Panchakarma therapy courses.",
    },
    {
      q: "Does Balprada offer Ayurvedic treatment for kidney, liver, and heart conditions?",
      a: "Yes, these are among Balprada's core specializations. The hospital manages kidney stones, elevated creatinine, and early-stage CKD; fatty liver and elevated liver enzymes; and supportive care for high blood pressure, cholesterol, and mild cardiac weakness — using nephro-protective and hepatoprotective herbs, Panchakarma detox, and structured diet plans, typically alongside a patient's existing specialist care.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Main Content */}
          <div className="flex-1 order-1">

            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Chikitsalaya in Bilari – Balprada Ayurvedic Hospital & Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  An ayurvedic chikitsalaya is meant to be more than a place that hands out herbal medicine — it is a treatment center built on classical diagnosis (Nidan), personalized therapy (Chikitsa), and follow-up care rooted in traditional Ayurvedic methodology.
                </li>
                <li>
                  For patients in Bilari searching for a genuine ayurvedic chikitsalaya, Balprada Ayurvedic Hospital & Research Center in Moradabad offers this classical approach, backed by modern diagnostic support.
                </li>
                <li>
                  This page explains how Balprada&apos;s chikitsalaya model works, the treatment methodology followed, and what patients from Bilari can expect from consultation to recovery.
                </li>
              </ul>
            </div>

            {/* Section 2 — What Defines a True Ayurvedic Chikitsalaya */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Defines a True Ayurvedic Chikitsalaya
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  A proper chikitsalaya follows the classical Ayurvedic framework of Nidan (diagnosis), Chikitsa (treatment), and Pathya (diet/lifestyle regulation) — not medicine alone.
                </li>
                <li>
                  Diagnosis includes assessment of the patient&apos;s Prakriti (body constitution) and current Dosha imbalance (Vata, Pitta, Kapha), alongside modern lab findings where relevant.
                </li>
                <li>
                  Treatment is individualized — the same disease in two different patients may require different formulations based on their constitution and disease stage.
                </li>
                <li>
                  A genuine chikitsalaya maintains patient records and follows up over time, rather than offering a one-time consultation.
                </li>
                <li>
                  Ethical practice means being clear about when a condition needs supportive Ayurvedic care alongside allopathic treatment, rather than claiming a cure for everything.
                </li>
              </ul>
            </div>

            {/* Section 3 — Balprada's Chikitsalaya Treatment Methodology */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Chikitsalaya Treatment Methodology
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Roga Pariksha (Disease Examination): Detailed case history, symptom review, and physical assessment form the starting point of every consultation.
                </li>
                <li>
                  Dosha Assessment: Physicians evaluate the balance of Vata, Pitta, and Kapha to understand the root imbalance driving the condition.
                </li>
                <li>
                  Sahayak Pariksha (Supporting Diagnosis): Relevant lab tests are conducted at the in-house pathology lab to confirm findings and track disease severity.
                </li>
                <li>
                  Chikitsa Yojana (Treatment Planning): A personalized plan combining herbal formulations, Panchakarma therapy (where needed), and lifestyle correction is prepared.
                </li>
                <li>
                  Pathya-Apathya (Diet Regulation): Patients receive a clear list of foods to include and avoid, tailored to their specific condition and Dosha imbalance.
                </li>
                <li>
                  Anuvartan (Follow-Up): Progress is reviewed at set intervals, with the treatment plan adjusted based on the patient&apos;s actual response.
                </li>
              </ul>
            </div>

            {/* Section 4 — Conditions Treated at the Chikitsalaya */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions Treated at the Chikitsalaya
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kidney Disorders (Mutrapind Roga)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Classical and modern assessment of chronic kidney disease at early and moderate stages.
                    </li>
                    <li>
                      Herbal formulations aimed at supporting kidney function and slowing disease progression.
                    </li>
                    <li>
                      Strict Pathya (diet) guidance based on the patient&apos;s kidney function level.
                    </li>
                    <li>
                      Regular monitoring through lab tests to track creatinine and related markers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Liver Disorders (Yakrit Roga)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Treatment for fatty liver, liver enlargement, and recovery support after jaundice.
                    </li>
                    <li>
                      Detoxification-based herbal therapy (Shodhana) to support liver regeneration.
                    </li>
                    <li>
                      Diet correction to reduce further liver strain and inflammation.
                    </li>
                    <li>
                      Periodic liver function testing to confirm treatment progress.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diabetes (Prameha) — Supportive Care
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Herbal and lifestyle support offered alongside prescribed medication or insulin, never as a substitute.
                    </li>
                    <li>
                      Diet and daily-routine (Dinacharya) guidance aimed at supporting stable blood sugar levels.
                    </li>
                    <li>
                      Regular review to adjust the supportive plan as needed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Cancer Supportive Care
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Ayurvedic support designed to complement ongoing oncology treatment, focused on strength, digestion, and quality of life.
                    </li>
                    <li>
                      Not offered or claimed as a cure — clearly positioned as supportive chikitsa alongside standard cancer treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Heart Disease (Hridroga) — Supportive Care
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Diet and lifestyle-based support alongside standard cardiac treatment.
                    </li>
                    <li>
                      Herbal formulations aimed at supporting healthy circulation.
                    </li>
                    <li>
                      Stress-management guidance rooted in classical Ayurvedic routine principles.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Panchakarma Chikitsa
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Classical detoxification procedures including Virechana, Basti, and Abhyanga.
                    </li>
                    <li>
                      Recommended based on the patient&apos;s Dosha imbalance and treatment goals.
                    </li>
                    <li>
                      Conducted under physician supervision in a dedicated therapy setup designed for multi-session care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    General Chikitsa (OPD)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Consultation for digestive issues, joint pain, skin conditions, and general wellness concerns.
                    </li>
                    <li>
                      Prakriti assessment for preventive health planning and personalized routine recommendations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 — Why the Classical Chikitsa Approach Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the Classical Chikitsa Approach Matters for Chronic Disease
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Chronic conditions like kidney and liver disease rarely respond to a single quick treatment — the Nidan-Chikitsa framework is built for sustained, root-cause management.
                </li>
                <li>
                  Dosha-based personalization means treatment isn&apos;t a generic package; it&apos;s adjusted to how the imbalance shows up in each individual patient.
                </li>
                <li>
                  Pathya (diet regulation) is treated as equally important to medicine, addressing daily habits that often drive disease progression.
                </li>
                <li>
                  Anuvartan (structured follow-up) ensures the treatment plan evolves based on real progress rather than staying fixed indefinitely.
                </li>
              </ul>
            </div>

            {/* Section 6 — Facilities Supporting the Chikitsalaya Model */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Supporting the Chikitsalaya Model
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  In-house pathology lab for Sahayak Pariksha (supporting diagnostic tests), reducing the need for a separate diagnostic visit.
                </li>
                <li>
                  In-house pharmacy stocking classical and prepared Ayurvedic formulations.
                </li>
                <li>
                  Dedicated Panchakarma therapy rooms for patients undergoing Shodhana (detoxification) procedures.
                </li>
                <li>
                  Organized OPD setup designed to reduce waiting time for patients traveling from Bilari and nearby areas.
                </li>
                <li>
                  Trained support staff experienced in assisting elderly and chronically ill patients through their visit.
                </li>
              </ul>
            </div>

            {/* Section 7 — What Makes Balprada's Chikitsalaya Model Different */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes Balprada&apos;s Chikitsalaya Model Different
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  A structured Nidan-Chikitsa-Anuvartan framework rather than symptom-only treatment.
                </li>
                <li>
                  Specialization in serious chronic conditions, not only general wellness or beauty-focused services.
                </li>
                <li>
                  Diagnosis, consultation, pharmacy, and therapy available together, reducing coordination effort for patients from outside Moradabad city.
                </li>
                <li>
                  Physicians who explain realistic timelines rather than promising instant results.
                </li>
                <li>
                  Clear distinction between primary treatment and supportive chikitsa, especially for diabetes, heart disease, and cancer cases.
                </li>
              </ul>
            </div>

            {/* Section 8 — Tips for Bilari Patients Visiting the Chikitsalaya */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for Bilari Patients Visiting the Chikitsalaya
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Carry previous medical records, prescriptions, and test reports to your first visit.
                </li>
                <li>
                  Be ready to describe your symptoms in detail, including onset and any patterns you&apos;ve noticed, to support accurate Dosha assessment.
                </li>
                <li>
                  Continue any prescribed allopathic medication unless your primary doctor advises otherwise.
                </li>
                <li>
                  Ask about the expected Chikitsa duration and number of visits so you can plan travel from Bilari accordingly.
                </li>
                <li>
                  Follow the Pathya-Apathya guidance closely, as diet plays a central role in the treatment outcome.
                </li>
              </ul>
            </div>

            {/* Section 9 — The Role of Aushadhi (Medicine) */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Role of Aushadhi (Medicine) in the Chikitsalaya System
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Formulations are selected based on the patient&apos;s Dosha imbalance, disease stage, and constitution, not a one-size-fits-all herbal mix.
                </li>
                <li>
                  Both classical (Shastriya) preparations and specially formulated combinations are used depending on the condition being treated.
                </li>
                <li>
                  Medicines are prepared and dispensed through the hospital&apos;s own pharmacy, helping ensure consistency in quality and dosage across a patient&apos;s treatment course.
                </li>
                <li>
                  Dosage and duration are adjusted over time based on follow-up assessment rather than fixed for the entire treatment period.
                </li>
                <li>
                  Patients are counseled on correct timing and method of taking Aushadhi, since this affects how effectively the formulation works.
                </li>
              </ul>
            </div>

            {/* Section 10 — Shodhana vs. Shamana */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Shodhana vs. Shamana: Two Approaches Used at the Chikitsalaya
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Shodhana (detoxification therapy): Panchakarma-based procedures aimed at eliminating vitiated Doshas from the body — used when the physician determines the patient is fit for such therapy.
                </li>
                <li>
                  Shamana (pacification therapy): Herbal formulations and dietary correction aimed at balancing Doshas without invasive detoxification — often used for patients who are not suitable candidates for Shodhana, such as those who are elderly or medically fragile.
                </li>
                <li>
                  The physician decides which approach — or combination of both — suits the patient based on age, disease stage, and overall strength (Bala).
                </li>
                <li>
                  This distinction is part of what separates a structured chikitsalaya from a clinic offering only generic herbal products.
                </li>
              </ul>
            </div>

            {/* Section 11 — Long-Term Wellness, Not Just Disease Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How the Chikitsalaya Supports Long-Term Wellness, Not Just Disease Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Beyond disease-specific Chikitsa, the hospital offers Prakriti-based lifestyle guidance for patients interested in preventive health.
                </li>
                <li>
                  Seasonal routine adjustments (Ritucharya) are sometimes recommended to help patients maintain balance across changing weather, particularly relevant for Bilari&apos;s seasonal climate shifts.
                </li>
                <li>
                  Patients recovering from a treated condition are often given a maintenance plan to help prevent relapse.
                </li>
                <li>
                  The chikitsalaya model treats health as an ongoing relationship between physician and patient, not a service that ends once symptoms subside.
                </li>
              </ul>
            </div>

            {/* Section 12 — Common Questions Before First Chikitsa Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Questions Patients Ask Before Their First Chikitsa Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  &quot;Do I need to fast or prepare specially before my consultation?&quot; — Generally no special preparation is required for the initial consultation; the physician will advise if any specific tests need fasting beforehand.
                </li>
                <li>
                  &quot;Will I be given a large number of medicines?&quot; — Formulations are kept as focused as possible on the patient&apos;s actual imbalance, rather than prescribing an unnecessarily large combination.
                </li>
                <li>
                  &quot;How is progress measured beyond how I feel?&quot; — Alongside the patient&apos;s reported symptoms, lab markers from the in-house pathology lab are used to objectively track improvement.
                </li>
                <li>
                  &quot;Can I bring a family member to the consultation?&quot; — Yes, and it is often encouraged for elderly patients or those with chronic conditions, since family support plays a role in following diet and lifestyle guidance at home.
                </li>
                <li>
                  &quot;Is the chikitsalaya suitable for children or elderly patients?&quot; — Treatment plans are adjusted for age and overall strength (Bala), with gentler approaches used for elderly or medically fragile patients.
                </li>
              </ul>
            </div>

            

            {/* Section 14 — CTA (kept same structure, updated text to match chikitsalaya context) */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Book a Chikitsa Consultation at Balprada
              </h2>

              <ul className="text-black space-y-2 list-disc pl-5 mb-6">
                <li>
                  Patients interested in classical Ayurvedic Chikitsa can book a consultation at Balprada Ayurvedic Hospital & Research Center in Moradabad.
                </li>
                <li>
                  The initial consultation typically involves detailed case history, Dosha/Prakriti assessment, and supporting lab tests where needed, followed by a personalized Chikitsa plan.
                </li>
                <li>
                  For patients traveling from Bilari and outside Moradabad, the hospital can help plan multi-visit schedules for Shodhana/Shamana therapies.
                </li>
              </ul>

              <div className="space-y-4 mb-6">
                {/* Main Branch */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                {/* Moradabad Branch */}
                <div className="flex items-start gap-3 mt-4">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <p className="text-black">
                      F-19, Sector-13, New Moradabad, Delhi Road,
                      Moradabad, Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Contact Balprada</p>

                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact">
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    <Phone className="inline mr-2" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/treatments">
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Explore Treatments
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 15 — FAQs (unchanged logic, same faqs array) */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}