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
      q: "Can ayurvedic treatment help with kidney failure?",
      a: "It can support diet, lifestyle, and overall balance alongside necessary medical monitoring.",
    },
    {
      q: "Is ayurvedic treatment a replacement for dialysis?",
      a: "No, it is meant to work alongside medical supervision, not replace it.",
    },
    {
      q: "What causes kidney failure?",
      a: "Common causes include long-standing diabetes, high blood pressure, and untreated kidney stones or infections.",
    },
    {
      q: "Does Balprada offer diet guidance for kidney failure patients?",
      a: "Yes, diet correction is a core part of every kidney failure treatment plan.",
    },
    {
      q: "Can kidney function be monitored on-site?",
      a: "Yes, the in-house pathology lab supports relevant blood and urine testing.",
    },
    {
      q: "How soon should I consult a doctor if I notice symptoms?",
      a: "As early as possible; early consultation generally supports better outcomes.",
    },
    {
      q: "Is follow-up required for kidney failure treatment?",
      a: "Yes, regular follow-up is essential to track progress and adjust the plan.",
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
                Kidney Failure Treatment in Moradabad — Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A diagnosis of kidney failure can feel overwhelming for both the patient and the family</li>
                <li>Many people search for a kidney failure treatment in Moradabad that combines genuine medical discipline with a natural, supportive approach rather than only medicines and machines</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center has been guiding families through this journey since 1991, offering ayurvedic consultation, in-house herbal medicine, diet correction, and ashram-based care built specifically around the needs of kidney failure patients</li>
              </ul>
            </div>

            {/* Section 2 — Understanding Kidney Failure */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Kidney Failure Before Starting Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Kidney failure happens when the kidneys lose their ability to filter waste, balance fluids, and regulate essential minerals in the body</li>
                <li>It can develop gradually over years (chronic kidney disease) or appear suddenly due to illness, dehydration, or other triggers</li>
                <li>Common contributing factors include long-standing diabetes, high blood pressure, chronic infections, and untreated kidney stones or swelling</li>
                <li>Early kidney failure often shows few symptoms, which is why regular monitoring matters, especially for high-risk patients</li>
                <li>As kidney function declines further, symptoms such as swelling, fatigue, reduced appetite, and changes in urination tend to become more noticeable</li>
                <li>Understanding the underlying cause is an important first step before any treatment plan, ayurvedic or otherwise, can be meaningfully designed</li>
              </ul>
            </div>

            {/* Section 3 — Why Families Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Families in Moradabad Choose Balprada for Kidney Failure Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience guiding patients through chronic and serious kidney conditions since the hospital&apos;s founding in 1991</li>
                <li>A personal, unhurried consultation process where the doctor reviews history, reports, and current medication in detail</li>
                <li>In-house, self-prepared herbal medicines that allow consistent quality across every kidney failure treatment plan</li>
                <li>An on-site pathology lab that supports ongoing monitoring of kidney-related blood and urine markers</li>
                <li>Diet and lifestyle correction built directly into the treatment plan, since food and routine strongly influence kidney strain</li>
                <li>A calm, ashram-based environment that gives patients space to focus on recovery rather than rushing through appointments</li>
                <li>Structured follow-up that treats kidney failure as an ongoing condition requiring regular review, not a one-time fix</li>
                <li>Free OPD consultation on the 15th of every month, making expert guidance more accessible to families under financial pressure</li>
              </ul>
            </div>

            {/* Section 4 — How Balprada Approaches Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Balprada Approaches Kidney Failure Treatment
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Detailed Assessment First
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Every case begins with a thorough review of the patient&apos;s symptoms, duration of illness, and any existing diagnosis</li>
                    <li>Previous reports, scans, and prescriptions are examined carefully before any new suggestion is made</li>
                    <li>The doctor also asks about diet, water intake, sleep, and daily routine, since these directly affect kidney strain</li>
                    <li>Family history and related conditions such as diabetes or high blood pressure are factored into the assessment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ayurvedic Medicine and Diet Correction
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Herbal medicine is prescribed based on the individual patient&apos;s condition rather than a fixed, universal formula</li>
                    <li>Diet correction focuses on hydration, reduced salt intake, and food choices suited to the patient&apos;s specific stage of kidney function</li>
                    <li>Patients are guided on foods and habits to avoid, since certain choices can place unnecessary strain on already weakened kidneys</li>
                    <li>Diabetes and blood pressure management are addressed alongside kidney care when they are contributing factors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Supportive Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Yoga and naturopathy may be recommended to support overall circulation, digestion, and stress reduction</li>
                    <li>Physiotherapy can be added where mobility or associated joint concerns need attention</li>
                    <li>Meditation is often suggested to help patients and families manage the emotional weight of a kidney failure diagnosis</li>
                    <li>Organic food support is available to reinforce the dietary discipline central to the treatment plan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ongoing Monitoring and Follow-Up
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Regular follow-up visits allow the doctor to track whether the current plan is working as intended</li>
                    <li>The in-house pathology lab makes it convenient to repeat necessary tests without visiting multiple facilities</li>
                    <li>Treatment plans are adjusted over time based on how the patient responds, rather than staying fixed indefinitely</li>
                    <li>Families are kept informed at each stage, so they understand the reasoning behind any changes to the plan</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Section 5 — Role of Diet */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Role of Diet in Kidney Failure Recovery
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Diet is treated as equally important as medicine in ayurvedic kidney failure care at Balprada</li>
                <li>Reduced salt intake helps ease the burden on kidneys that are already struggling to regulate fluid balance</li>
                <li>Hydration is carefully guided rather than left to guesswork, since both too little and too much fluid can be problematic depending on the stage</li>
                <li>Patients are encouraged to limit fried, processed, and heavily preserved foods that can add unnecessary strain</li>
                <li>Protein intake is often discussed individually, since requirements can vary depending on the stage of kidney failure</li>
                <li>Consistent meal timing and a stable daily routine (dinacharya) are treated as part of the recovery process, not optional extras</li>
              </ul>
            </div>

            {/* Section 6 — Recognizing Signs Early */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recognizing the Signs of Kidney Failure Early
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent swelling in the legs, ankles, or around the eyes that does not go away with rest</li>
                <li>Noticeable fatigue or weakness that continues despite adequate sleep</li>
                <li>Changes in urination — reduced frequency, unusual color, or discomfort</li>
                <li>Loss of appetite, nausea, or an unusual taste in the mouth</li>
                <li>Difficulty concentrating or a general sense of unwellness that is hard to pin down</li>
                <li>High blood pressure or poorly controlled diabetes, both of which raise the risk of kidney complications</li>
                <li>Patients noticing several of these signs together are encouraged to seek consultation promptly rather than waiting</li>
              </ul>
            </div>

            {/* Section 7 — Ayurvedic Support Value */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes Ayurvedic Support Valuable Alongside Medical Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurvedic care at Balprada is designed to work alongside, not replace, necessary medical monitoring for serious kidney conditions</li>
                <li>Patients under dialysis or other medical supervision are encouraged to inform the doctor so ayurvedic support can be planned safely around it</li>
                <li>The focus is on supporting the body&apos;s overall balance, easing symptoms, and slowing further strain through diet and lifestyle discipline</li>
                <li>Doctors emphasize that ayurvedic treatment works best as part of an honest, transparent conversation about the patient&apos;s full medical situation</li>
                <li>This combined approach reflects Balprada&apos;s broader philosophy of treating the whole patient, not only the isolated condition</li>
              </ul>
            </div>

            {/* Section 8 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Set aside enough time for a detailed conversation about your symptoms, history, and current medication</li>
                <li>Bring all previous kidney-related reports, prescriptions, and test results with you</li>
                <li>Be ready to discuss diet, water intake, and daily routine honestly, since these shape the entire treatment plan</li>
                <li>If needed, the doctor may recommend fresh testing through the on-site pathology lab</li>
                <li>A clear follow-up schedule will typically be set before you leave, so next steps are never left uncertain</li>
                <li>Family members are welcome to join, especially given how much kidney failure care depends on daily routine at home</li>
              </ul>
            </div>

            {/* Section 9 — Legacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Legacy in Kidney and Chronic Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji with the object of serving humanity and contributing to a better nation</li>
                <li>Kidney and liver treatment have remained core focus areas of the hospital since its earliest years</li>
                <li>Over 35 years, the institution has grown into a complete ayurvedic chikitsalaya with research, herbal wellness, pathology support, and ashram-based care</li>
                <li>The founder&apos;s seva-first philosophy continues to guide how kidney failure patients are treated — with patience and honesty rather than false promises</li>
                <li>Today&apos;s doctors carry this legacy forward while drawing on ongoing research to refine kidney failure care approaches</li>
              </ul>
            </div>

            {/* Section 10 — Common Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Questions Families Ask Before Starting Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Families often want to know whether ayurvedic care can genuinely help once kidney failure has been diagnosed, and doctors are transparent that results vary by stage and cause</li>
                <li>Many ask whether existing allopathic medicines need to be stopped — the answer at Balprada is always to disclose everything so the doctor can plan safely rather than making assumptions</li>
                <li>Questions about cost and duration of treatment are addressed directly during consultation, since kidney failure care is rarely a short, fixed-length process</li>
                <li>Families frequently ask about diet restrictions, and doctors provide specific, individualized guidance rather than generic lists, since kidney failure stages differ from patient to patient</li>
                <li>Some ask whether children or elderly patients can be treated differently — age and overall health are always factored into the plan</li>
              </ul>
            </div>

            {/* Section 11 — Supporting Family Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting a Family Member Through Kidney Failure Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Encourage consistency with diet and medicine timing, since irregular habits can undo the benefit of an otherwise sound treatment plan</li>
                <li>Attend consultations together where possible, so the whole family understands the reasoning behind dietary and lifestyle changes</li>
                <li>Keep a simple record of symptoms, reports, and follow-up dates to make each consultation more productive</li>
                <li>Be patient with the pace of recovery, since kidney failure treatment is generally a long-term process rather than a quick fix</li>
                <li>Maintain open communication with the doctor about any new symptoms or concerns between scheduled follow-ups</li>
              </ul>
            </div>

            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <ul className="text-black space-y-2 list-disc pl-5 mb-6">
                <li>Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad</li>
                <li>The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan</li>
                <li>For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day Panchakarma therapy schedules</li>
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

            {/* Section 13 — FAQs */}
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