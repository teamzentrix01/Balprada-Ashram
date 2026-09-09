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
      q: "What is the Ayurvedic explanation for heart disease?",
      a: "Ayurveda links heart function to Sadhaka Pitta, Vyana Vayu, and Avalambaka Kapha, and understands imbalance among these as contributing to cardiac strain.",
    },
    {
      q: "Are herbs like Arjuna used in treatment at Balprada?",
      a: "Classical heart-supportive herbs are included in formulations where suitable, based on the doctor's assessment of the patient's specific condition.",
    },
    {
      q: "Is cleansing therapy safe for heart patients?",
      a: "Cleansing therapy is only recommended after careful individual assessment and is approached with particular caution for patients with cardiac conditions.",
    },
    {
      q: "Can this approach help prevent heart disease progression?",
      a: "Early-stage lifestyle and dietary correction based on this methodology is commonly used to support patients aiming to manage risk factors like blood pressure and cholesterol.",
    },
    {
      q: "Do I need to stop my cardiac medication for this treatment?",
      a: "No, patients are always advised to continue prescribed medication and monitoring alongside Ayurvedic support.",
    },
    {
      q: "Where is Balprada located?",
      a: "The main branch is in Tehsil Bilari, District Moradabad, with a second branch in Sector-13, New Moradabad, Delhi Road, Moradabad.",
    },
    {
      q: "Is there a free consultation option?",
      a: "Yes, Balprada offers a free OPD consultation on the 15th of every month.",
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
                Heart Disease Ayurvedic Treatment Methodology at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Heart-related concerns such as high blood pressure, elevated cholesterol, poor circulation, and general cardiac weakness are approached in Ayurveda through a structured, dosha-based understanding of how the heart functions within the body.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, this classical framework guides every treatment plan — combining herbal formulations, cleansing therapies, diet correction, and lifestyle discipline to support heart health as part of the body&apos;s complete balance.</li>
                <li>With 35 years of trusted Ayurvedic experience, in-house herbal medicines, and a peaceful ashram-based environment, Balprada applies this traditional methodology to support patients managing cardiac concerns alongside their existing cardiology care.</li>
              </ul>
            </div>

            {/* Section 2 — The Ayurvedic Understanding of Heart Function */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Understanding of Heart Function
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda describes the heart (Hridaya) as the seat of Sadhaka Pitta, which governs emotional balance and clarity, and as closely connected to Vyana Vayu, the sub-type of Vata responsible for circulation throughout the body.</li>
                <li>Avalambaka Kapha, located in the chest region, is understood to provide structural support and stability to the heart and lungs.</li>
                <li>When these three functions fall out of balance, Ayurveda considers the heart more vulnerable to strain, irregular rhythm, poor circulation, and reduced resilience.</li>
                <li>Classical texts describe a category of heart-related conditions collectively referred to as Hridroga, broadly linked to imbalances of Vata, Pitta, Kapha, or a combination of doshas.</li>
                <li>This framework allows the Balprada care team to look beyond a single symptom and understand the deeper pattern of imbalance contributing to a patient&apos;s cardiac concern.</li>
              </ul>
            </div>

            {/* Section 3 — Diagnostic Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diagnostic Approach — Nidan and Assessment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The first step in Ayurvedic heart care is Nidan (diagnosis) — a detailed understanding of the patient&apos;s symptoms, digestive strength, body constitution, and lifestyle.</li>
                <li>The doctor reviews existing cardiology reports, current medication, blood pressure and cholesterol history, and any prior cardiac events before forming a treatment plan.</li>
                <li>Pulse assessment (Nadi Pariksha) is traditionally used alongside modern reports to understand the patient&apos;s current dosha balance and overall vitality.</li>
                <li>This combined approach — traditional assessment alongside the patient&apos;s existing medical reports — ensures the Ayurvedic plan is grounded in both classical understanding and the patient&apos;s actual clinical picture.</li>
              </ul>
            </div>

            {/* Section 4 — Shodhana Cleansing-Based Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Shodhana — Cleansing-Based Support
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Where suitable, cleansing therapies are used to help clear Ama (metabolic toxins) that Ayurveda considers a contributing factor in circulatory strain and cholesterol-related imbalance.</li>
                <li>Panchakarma-based procedures may be recommended based on individual assessment, always adjusted to the patient&apos;s cardiac status and overall strength.</li>
                <li>Cleansing therapy for heart-related concerns is approached with particular caution, and is only recommended when the doctor determines it is safe and appropriate for the individual patient.</li>
              </ul>
            </div>

            {/* Section 5 — Shamana Herbal and Medicinal Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Shamana — Herbal and Medicinal Support
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada prepares its own herbal medicines in-house, allowing consistent quality across every formulation given to patients.</li>
                <li>Classical Ayurvedic herbs traditionally associated with heart support — such as Arjuna, known for its role in supporting cardiac tissue and circulation — are commonly included in formulations where suitable.</li>
                <li>Formulations are selected based on the specific dosha imbalance identified, whether the concern is more Vata-linked (circulation, irregularity), Pitta-linked (heat, inflammation-related strain), or Kapha-linked (cholesterol, sluggish circulation).</li>
                <li>Medicines are given alongside clear diet and routine guidance so herbal support and daily habits work toward the same goal of cardiac stability.</li>
              </ul>
            </div>

            {/* Section 6 — Rasayana Long-Term Strengthening */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Rasayana — Long-Term Strengthening
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Following initial stabilization, Rasayana-based rejuvenation support may be introduced to help strengthen cardiac tissue and improve overall resilience over time.</li>
                <li>This phase focuses on sustained nourishment and strength-building rather than rapid symptom suppression.</li>
                <li>Long-term Rasayana support is typically combined with consistent lifestyle discipline, since Ayurveda considers ongoing routine as important as the medicine itself.</li>
              </ul>
            </div>

            {/* Section 7 — Diet and Lifestyle Correction */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Correction (Pathya-Apathya)
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Diet guidance follows the classical principle of Pathya-Apathya — recommending foods and habits that support the heart (Pathya) while identifying those that aggravate imbalance (Apathya).</li>
                <li>Patients are guided toward foods that support healthy circulation and reduce excess Kapha and Ama, along with clear direction on foods to limit or avoid.</li>
                <li>Meal timing, portion discipline, and avoiding heavy or late-night eating are emphasized, since irregular habits are considered to strain digestive and cardiac balance together.</li>
                <li>Daily routine guidance (Dinacharya) includes recommendations on sleep timing, gentle physical activity, and stress management suited to the patient&apos;s condition.</li>
              </ul>
            </div>

            {/* Section 8 — Stage-Wise Approach to Cardiac Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Stage-Wise Approach to Cardiac Support
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Early-stage support — for patients managing mild blood pressure or cholesterol concerns, the focus is on diet, herbal support, and lifestyle correction to prevent progression.</li>
                <li>Ongoing management support — for patients already on cardiac medication, Ayurvedic care is coordinated to complement the existing treatment plan.</li>
                <li>Post-cardiac-event recovery support — for patients recovering from a cardiac event, care is planned conservatively, prioritizing safety and close coordination with the treating cardiologist.</li>
                <li>Long-term maintenance support — for patients in stable condition, the focus shifts toward sustained lifestyle discipline and periodic Rasayana-based strengthening.</li>
                <li>Preventive support for at-risk individuals — for patients with a family history of heart disease but no current diagnosis, guidance focuses on early lifestyle correction to reduce long-term risk.</li>
              </ul>
            </div>

            {/* Section 9 — Precautions in Ayurvedic Heart Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions in Ayurvedic Heart Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>All therapies are adjusted based on the patient&apos;s current cardiac status, and any therapy considered unsuitable for a specific condition is avoided.</li>
                <li>Patients are always advised to continue their prescribed cardiac medication and regular monitoring alongside Ayurvedic support, not in place of it.</li>
                <li>Cleansing therapies and certain herbal formulations require careful individual assessment, particularly for patients with a history of cardiac events.</li>
                <li>Full medical history, including current medication and recent reports, must be shared with the doctor before any treatment begins.</li>
                <li>Patients experiencing acute chest pain, breathlessness, or any emergency cardiac symptoms should seek immediate medical attention rather than relying on Ayurvedic guidance alone.</li>
                <li>Any herbal formulation is reviewed for potential interaction with existing cardiac medication before being included in a patient&apos;s treatment plan.</li>
              </ul>
            </div>

            {/* Section 10 — Why Patients Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada&apos;s Methodology-Based Approach
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to classical formulation principles and consistent quality.</li>
                <li>Doctors trained in classical diagnostic methods, combining traditional assessment with the patient&apos;s existing medical reports.</li>
                <li>A peaceful ashram environment suited to patients who benefit from a calm, disciplined setting during their treatment journey.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week for consultation and follow-up.</li>
                <li>Free OPD consultation on the 15th of every month, offering an accessible starting point for patients exploring this approach.</li>
              </ul>

              
            </div>

            {/* Section 11 — How Cardiac Dosha Imbalance Shows Up */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Cardiac Dosha Imbalance Shows Up
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Vata-linked signs — irregular heartbeat sensations, palpitations, restlessness, and circulation-related coldness in the extremities.</li>
                <li>Pitta-linked signs — a sense of heat or burning in the chest, heightened emotional intensity, and inflammation-related strain on cardiac tissue.</li>
                <li>Kapha-linked signs — heaviness in the chest, sluggish circulation, elevated cholesterol tendencies, and reduced stamina during physical activity.</li>
                <li>Combined imbalance — many patients present with a mix of these patterns, which is why individual assessment is central to the Balprada approach rather than applying one fixed protocol to every case.</li>
                <li>Understanding which dosha pattern is dominant helps guide not only the choice of herbal formulation but also the specific diet and lifestyle recommendations given to each patient.</li>
              </ul>
            </div>

            {/* Section 12 — Integrating Classical Methodology With Modern Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Integrating Classical Methodology With Modern Monitoring
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>While the diagnostic and treatment framework at Balprada follows classical Ayurvedic principles, the care team remains closely attentive to the patient&apos;s modern cardiology reports and test results.</li>
                <li>Blood pressure readings, cholesterol panels, ECG findings, and other relevant reports are reviewed alongside traditional pulse assessment to build a complete picture.</li>
                <li>This combined approach allows the Ayurvedic plan to be adjusted safely as the patient&apos;s cardiac status is monitored over time by their treating cardiologist.</li>
                <li>Patients are encouraged to bring updated reports to each follow-up visit, so the Ayurvedic plan can evolve in step with any changes in their cardiac health.</li>
                <li>This integration reflects Balprada&apos;s broader philosophy — using classical Ayurvedic wisdom to complement, not compete with, modern medical monitoring.</li>
              </ul>
            </div>

            {/* Section 13 — Building Long-Term Cardiac Resilience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Building Long-Term Cardiac Resilience
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The ultimate goal of this methodology is not only symptom management but building the heart&apos;s long-term resilience through sustained balance across Vata, Pitta, and Kapha.</li>
                <li>Patients are guided to view treatment as an ongoing practice — consistent diet, herbal support, and lifestyle discipline — rather than a short course aimed at quick relief.</li>
                <li>Periodic follow-up allows the care team to reassess dosha balance as the patient&apos;s condition evolves, adjusting herbal formulations and guidance accordingly.</li>
                <li>Family involvement in understanding dietary changes is encouraged, since shared household eating habits significantly influence a patient&apos;s ability to maintain long-term discipline.</li>
                <li>Patients are reminded that consistency over time, rather than short bursts of strict adherence, tends to produce the most stable and lasting results within this framework.</li>
              </ul>
            </div>

            {/* Section 14 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for heart-related concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day therapy schedules.
              </p>

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

            {/* Section 15 — FAQs */}
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