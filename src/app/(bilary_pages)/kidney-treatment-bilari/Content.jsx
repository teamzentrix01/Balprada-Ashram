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
                Kidney Treatment in Bilari – Ayurvedic Care at Balprada Ayurvedic Hospital
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Kidney disease often progresses silently, with symptoms appearing only after significant damage has already occurred.
                </li>
                <li>
                  For patients in Bilari looking for kidney treatment options beyond standard medication, Balprada Ayurvedic Hospital & Research Center in Moradabad offers a structured Ayurvedic approach to managing chronic kidney disease (CKD) — built on proper diagnosis, personalized herbal therapy, and ongoing monitoring.
                </li>
                <li>
                  This page focuses specifically on kidney treatment: what causes kidney decline, how Ayurvedic management works, what patients from Bilari can expect, and where Ayurveda fits alongside standard nephrology care.
                </li>
              </ul>
            </div>

            {/* Section 2 — Understanding Kidney Disease Before Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Kidney Disease Before Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Chronic kidney disease (CKD) develops in stages, often without noticeable symptoms until function has already declined significantly.
                </li>
                <li>
                  Common contributing factors include long-standing diabetes, high blood pressure, chronic infections, and prolonged use of certain medications.
                </li>
                <li>
                  Early warning signs can include fatigue, swelling in the legs or face, changes in urination patterns, and reduced appetite — though many patients notice nothing until routine tests reveal abnormal kidney markers.
                </li>
                <li>
                  Regular testing (creatinine, blood urea, eGFR) is the only reliable way to catch kidney decline early, especially for patients with diabetes or hypertension.
                </li>
                <li>
                  Once diagnosed, ongoing monitoring becomes essential, since kidney function can change gradually over months.
                </li>
              </ul>
            </div>

            {/* Section 3 — How Ayurvedic Kidney Treatment Works at Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Ayurvedic Kidney Treatment Works at Balprada
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Detailed assessment first: Every kidney patient undergoes a full case history review along with lab testing to confirm the current stage of kidney function.
                </li>
                <li>
                  Personalized herbal formulations: Treatment is not a fixed package — formulations are chosen based on the patient&apos;s specific kidney function level, other health conditions, and body constitution.
                </li>
                <li>
                  Diet as a core component: Patients receive a written diet plan covering protein intake, salt restriction, and other adjustments specific to their kidney function stage.
                </li>
                <li>
                  Lifestyle correction: Guidance on hydration (as advised by the physician), rest, and daily routine is built into the treatment plan.
                </li>
                <li>
                  Structured monitoring: Follow-up visits include repeat lab testing to track whether creatinine and related markers are stabilizing or improving over time.
                </li>
                <li>
                  Realistic expectations: Physicians explain clearly that kidney treatment is a gradual process requiring sustained commitment, not a short-term fix.
                </li>
              </ul>
            </div>

            {/* Section 4 — Stages of Kidney Disease and the Ayurvedic Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Stages of Kidney Disease and the Ayurvedic Approach
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Early-Stage Kidney Dysfunction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Focus on identifying and addressing contributing factors, such as poorly controlled blood sugar or blood pressure.
                    </li>
                    <li>
                      Herbal support aimed at slowing further decline in kidney function.
                    </li>
                    <li>
                      Dietary correction introduced early to reduce ongoing strain on the kidneys.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Moderate Chronic Kidney Disease
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      More structured herbal protocols combined with closer monitoring of lab markers.
                    </li>
                    <li>
                      Stricter dietary guidelines, often including protein and salt restrictions tailored to the patient&apos;s test results.
                    </li>
                    <li>
                      Regular follow-up to catch and respond to any further decline promptly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kidney Stones and Related Conditions
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Herbal formulations aimed at supporting natural stone management and reducing recurrence risk.
                    </li>
                    <li>
                      Dietary guidance to reduce factors that contribute to stone formation.
                    </li>
                    <li>
                      Monitoring to confirm whether the approach is effectively addressing the condition.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 — What Makes Kidney Treatment at Balprada Different */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes Kidney Treatment at Balprada Different
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  An in-house pathology lab allows kidney function tests to be done on-site, so results used for treatment decisions are consistent and quickly available.
                </li>
                <li>
                  Physicians specialize specifically in chronic kidney cases rather than offering generic herbal remedies for all conditions.
                </li>
                <li>
                  Treatment plans are adjusted over time based on actual lab results, not left unchanged for months at a stretch.
                </li>
                <li>
                  Diet plans are practical and based on commonly available foods, making them realistic for patients to follow at home in Bilari.
                </li>
                <li>
                  The hospital is clear about when Ayurvedic care is supportive and when a patient should also be under nephrology supervision for advanced disease.
                </li>
              </ul>
            </div>

            {/* Section 6 — Where Ayurveda Fits Alongside Standard Kidney Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Where Ayurveda Fits Alongside Standard Kidney Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  For patients with advanced kidney disease already under a nephrologist&apos;s care, Ayurvedic treatment is offered as a supportive addition, not a replacement for prescribed medication or dialysis planning.
                </li>
                <li>
                  Patients are never advised to stop nephrologist-prescribed medication without consulting their treating doctor.
                </li>
                <li>
                  The Ayurvedic physician may coordinate treatment focus areas — such as diet and herbal support — while remaining mindful of the patient&apos;s ongoing nephrology management and any restrictions it requires.
                </li>
                <li>
                  For patients in earlier stages without a nephrologist yet involved, Ayurvedic treatment can serve as a first structured intervention, combined with regular monitoring to catch any need for specialist referral.
                </li>
              </ul>
            </div>

            {/* Section 7 — Diet and Lifestyle Guidance for Kidney Patients from Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Guidance for Kidney Patients from Bilari
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  A written, condition-specific diet plan is provided, covering protein sources, salt intake, and fluid guidance based on the patient&apos;s exact kidney function stage.
                </li>
                <li>
                  Patients are counseled to avoid unverified home remedies or supplements that could add strain to already-compromised kidneys.
                </li>
                <li>
                  Family members are briefed on how to support the patient&apos;s diet at home, since consistent adherence matters more than occasional strict days.
                </li>
                <li>
                  Simple daily habits — regular sleep timing, avoiding excessive salt, and following the prescribed hydration guidance — are emphasized as part of long-term management.
                </li>
                <li>
                  Patients are encouraged to avoid over-the-counter painkillers without medical advice, as some can further stress kidney function.
                </li>
              </ul>
            </div>

            {/* Section 8 — Monitoring Progress: What to Expect Over Time */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Monitoring Progress: What to Expect Over Time
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Initial follow-up visits are typically scheduled closer together to establish a clear baseline and confirm the treatment plan is well-tolerated.
                </li>
                <li>
                  As the condition stabilizes, follow-up intervals may be spaced out, though regular testing continues throughout treatment.
                </li>
                <li>
                  Each visit includes a review of recent lab results alongside the patient&apos;s reported symptoms and diet adherence.
                </li>
                <li>
                  If markers show worsening rather than improvement, the physician reassesses the approach and may recommend additional evaluation.
                </li>
                <li>
                  Long-term maintenance guidance is provided once kidney function stabilizes, to help sustain results.
                </li>
              </ul>
            </div>

            {/* Section 9 — Precautions Kidney Patients Should Keep in Mind */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions Kidney Patients Should Keep in Mind
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Always disclose all current medications, including over-the-counter drugs, to the treating physician.
                </li>
                <li>
                  Do not discontinue any nephrologist-prescribed treatment without medical advice.
                </li>
                <li>
                  Attend scheduled follow-up tests even if you are feeling well, since kidney markers can change without obvious symptoms.
                </li>
                <li>
                  Report any new symptoms — such as increased swelling, reduced urination, or unusual fatigue — to the hospital promptly rather than waiting for the next scheduled visit.
                </li>
                <li>
                  Avoid self-adjusting your diet plan without consulting the physician, especially regarding protein and salt intake.
                </li>
              </ul>
            </div>

            {/* Section 10 — Tips for Bilari Patients Starting Kidney Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for Bilari Patients Starting Kidney Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Bring all previous kidney function test reports and current prescriptions to your first visit.
                </li>
                <li>
                  Be prepared to discuss your diabetes or blood pressure history, since these are common contributing factors to kidney decline.
                </li>
                <li>
                  Ask directly about your current kidney disease stage and what results are realistic to expect from treatment.
                </li>
                <li>
                  Confirm the recommended testing schedule so you can plan travel from Bilari for follow-up visits in advance.
                </li>
                <li>
                  Keep a simple log of symptoms and diet adherence between visits to help the physician track your progress accurately.
                </li>
              </ul>
            </div>

            {/* Section 11 — Common Causes of Kidney Decline Seen in Bilari-Area Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Kidney Decline Seen in Bilari-Area Patients
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Long-standing diabetes: Poorly controlled blood sugar over years is one of the most common contributors to kidney damage seen in patients from Bilari and the wider Moradabad district.
                </li>
                <li>
                  Uncontrolled high blood pressure: Persistent hypertension places ongoing strain on kidney blood vessels, gradually reducing function.
                </li>
                <li>
                  Chronic dehydration or excessive heat exposure: Common in patients doing physically demanding outdoor work without adequate fluid intake.
                </li>
                <li>
                  Frequent use of painkillers: Long-term or unsupervised use of certain over-the-counter medications can contribute to kidney stress over time.
                </li>
                <li>
                  Delayed testing: Many patients only discover kidney issues during an unrelated check-up, since early-stage CKD often has no obvious symptoms.
                </li>
              </ul>
            </div>

            {/* Section 12 — Questions to Ask Before Starting Kidney Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Before Starting Kidney Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  What stage is my kidney disease currently at, based on my test results?
                </li>
                <li>
                  What specific dietary changes do I need to make immediately?
                </li>
                <li>
                  How often will my kidney function be re-tested during treatment?
                </li>
                <li>
                  Should I continue seeing a nephrologist alongside this treatment?
                </li>
                <li>
                  What symptoms should prompt me to seek urgent medical attention rather than waiting for my next visit?
                </li>
                <li>
                  How will I know if the treatment is working versus if my condition is progressing?
                </li>
              </ul>
            </div>

            {/* Section 13 — Why Early Intervention Matters for Kidney Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Early Intervention Matters for Kidney Patients
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Kidney function, once significantly lost, generally cannot be fully restored — which makes early-stage intervention far more valuable than treatment started after major decline.
                </li>
                <li>
                  Patients who begin structured management — diet, herbal support, and monitoring — at an earlier stage tend to have more stable, manageable disease progression.
                </li>
                <li>
                  Regular testing, even without symptoms, is the most reliable way to catch decline early enough for treatment to have a meaningful impact.
                </li>
                <li>
                  Waiting for visible symptoms like swelling or fatigue often means the disease has already progressed significantly.
                </li>
              </ul>
            </div>

            

            {/* Section 15 — CTA (kidney-focused text, same structure) */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Book a Kidney Treatment Consultation at Balprada
              </h2>

              <ul className="text-black space-y-2 list-disc pl-5 mb-6">
                <li>
                  Patients in Bilari and nearby areas can book a dedicated kidney treatment consultation at Balprada Ayurvedic Hospital & Research Center in Moradabad.
                </li>
                <li>
                  The initial consultation includes detailed case history, review of kidney function reports (creatinine, urea, eGFR), and a personalized Ayurvedic management plan.
                </li>
                <li>
                  For out-of-town patients, the hospital can help plan follow-up testing and visits in advance to make ongoing monitoring easier.
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
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
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

            {/* Section 16 — FAQs (unchanged logic, same faqs array) */}
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