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
      q: "Does Balprada treat kidney failure?",
      a: "Yes, through consultation, herbal medicine, diet correction, and ongoing monitoring.",
    },
    {
      q: "Can Balprada help with kidney stones?",
      a: "Yes, with a natural, diet-supported approach guided by the doctor.",
    },
    {
      q: "Is swelling linked to kidney problems treated here?",
      a: "Yes, swelling is assessed and addressed as part of kidney and diabetes-related care.",
    },
    {
      q: "Does Balprada have facilities to monitor kidney function?",
      a: "Yes, the in-house pathology lab supports relevant blood and urine testing.",
    },
    {
      q: "Is diet guidance included in kidney treatment?",
      a: "Yes, diet and hydration correction are a core part of every kidney treatment plan.",
    },
    {
      q: "How often should kidney patients visit for follow-up?",
      a: "Regular follow-up is recommended; the exact schedule depends on the individual case.",
    },
    {
      q: "Is there a free consultation for kidney patients?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Can ayurvedic kidney treatment be combined with allopathic care?",
      a: "Patients should inform the doctor about ongoing allopathic treatment so both can be coordinated safely.",
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
                Kidney Treatment Hospital in Moradabad — Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Kidney disease is often a silent condition, progressing quietly until symptoms become hard to ignore</li>
                <li>For families in Moradabad searching for a dependable kidney treatment hospital, Balprada Ayurvedic Hospital &amp; Research Center offers a natural, disciplined, and doctor-guided approach rooted in 35 years of ayurvedic experience</li>
                <li>Since 1991, Balprada has supported patients dealing with kidney failure, kidney stones, and swelling-related concerns through consultation, in-house herbal medicine, diet correction, and an ashram-based environment built for long-term healing</li>
              </ul>
            </div>

            {/* Section 2 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada for Kidney Treatment in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Serving patients since 1991, with 35 years of dedicated ayurvedic experience in kidney and related chronic conditions</li>
                <li>Every kidney case begins with a personal consultation, not a fixed or generic prescription</li>
                <li>In-house, self-prepared herbal medicines allow doctors to maintain consistent quality across every treatment plan</li>
                <li>An on-site pathology lab supports blood, urine, and diagnostic testing needed to track kidney function closely</li>
                <li>Diet and lifestyle correction are built into every kidney treatment plan, not offered as a separate add-on</li>
                <li>The ashram-based setting gives patients a calm space to focus on recovery rather than a rushed hospital visit</li>
                <li>Regular follow-up is treated as essential, since kidney conditions require ongoing monitoring rather than a single visit</li>
                <li>Free OPD consultation on the 15th of every month makes expert guidance accessible to more families</li>
              </ul>
            </div>

            {/* Section 3 — Kidney Concerns Addressed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Kidney Concerns Addressed at Balprada
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kidney Failure
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Ayurvedic consultation and lifestyle guidance for patients experiencing declining kidney function</li>
                    <li>Herbal medicine support combined with dietary correction to ease strain on the kidneys</li>
                    <li>Close monitoring through the in-house pathology lab to track relevant markers over time</li>
                    <li>Guidance for patients managing diabetes-linked kidney complications alongside kidney failure</li>
                    <li>Emotional and family support, since kidney failure often affects the whole household, not just the patient</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kidney Stones
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Natural, herb-based approach aimed at supporting the body&apos;s process of managing kidney stones</li>
                    <li>Dietary guidance focused on hydration and food choices known to influence stone formation</li>
                    <li>Routine correction to reduce recurrence risk over the long term</li>
                    <li>Doctor-led monitoring to track whether the current approach is working as expected</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Swelling and Fluid Retention
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Ayurvedic assessment of swelling linked to kidney function or diabetes</li>
                    <li>Herbal and dietary support aimed at reducing fluid retention naturally</li>
                    <li>Lifestyle correction to address underlying causes rather than only visible symptoms</li>
                    <li>Coordination with diabetes and heart care guidance where swelling is linked to multiple conditions</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Section 4 — Ayurvedic Lens */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Kidney Health Through an Ayurvedic Lens
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda views the kidneys as organs closely tied to the body&apos;s fluid balance, digestion, and overall metabolic health</li>
                <li>Poor diet, dehydration, high salt intake, and unmanaged diabetes are commonly seen as contributing factors to kidney strain</li>
                <li>Ayurvedic approaches to kidney care generally emphasize hydration, dietary discipline, and gentle detoxification support</li>
                <li>Herbs traditionally associated with kidney and urinary support are used only after personalized assessment, not as a one-size-fits-all formula</li>
                <li>Long-term kidney health is treated as a combination of medicine, diet, daily routine, and consistent monitoring</li>
                <li>This is why Balprada pairs herbal medicine with structured follow-up rather than offering medicine alone</li>
              </ul>
            </div>

            {/* Section 5 — Kidney Care Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Kidney Care Process
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Step 1: Detailed Consultation</strong> — The doctor reviews the patient&apos;s kidney-related history, existing reports, and current medication</li>
                <li><strong>Step 2: Diagnostic Support</strong> — The in-house pathology lab helps confirm current kidney function markers where needed</li>
                <li><strong>Step 3: Personalized Ayurvedic Plan</strong> — Herbal medicine, diet correction, and lifestyle guidance are combined into one plan</li>
                <li><strong>Step 4: Supportive Therapies</strong> — Yoga, naturopathy, and physiotherapy may be added depending on the patient&apos;s overall condition</li>
                <li><strong>Step 5: Ongoing Follow-Up</strong> — Regular review appointments track progress and allow the doctor to adjust the plan as needed</li>
              </ul>
            </div>

            {/* Section 6 — Supporting Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting Facilities for Kidney Patients
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Balprada Pathology Lab</strong> — enables regular tracking of kidney-related blood and urine markers without visiting multiple locations</li>
                <li><strong>Diet Guidance</strong> — structured food planning suited to kidney patients, including hydration and salt-intake correction</li>
                <li><strong>Yoga</strong> — gentle practices recommended to support circulation, digestion, and overall balance</li>
                <li><strong>Naturopathy</strong> — nature-led practices used to support the body&apos;s own healing capacity alongside medicine</li>
                <li><strong>Physiotherapy</strong> — recommended where mobility or associated joint concerns need attention alongside kidney care</li>
                <li><strong>Organic Food</strong> — supports the dietary discipline that is central to every kidney treatment plan at the ashram</li>
              </ul>
            </div>

            {/* Section 7 — Diet and Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Diet and Routine Matter So Much in Kidney Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Kidney function is directly influenced by daily food and fluid habits, making diet correction central to any real recovery plan</li>
                <li>Excess salt, fried food, and processed items are generally discouraged for patients dealing with kidney strain</li>
                <li>Adequate hydration, guided by the doctor rather than guesswork, plays an important role in supporting kidney function</li>
                <li>A fixed daily routine, including consistent sleep and meal timing, is treated as part of ayurvedic kidney care, not a separate suggestion</li>
                <li>Diabetes management is closely linked to kidney health, so blood sugar discipline is often addressed together with kidney treatment</li>
                <li>Patients who follow both medicine and lifestyle guidance consistently tend to see more stable, long-term outcomes</li>
              </ul>
            </div>

            {/* Section 8 — What Patients Say */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Patients and Families Say About Kidney Care at Balprada
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Families often describe the follow-up guidance as giving them a clear structure for diet, daily habits, and future consultations</li>
                <li>Many patients highlight the calm, ashram-based environment as helpful during the stress of managing a kidney condition</li>
                <li>The team&apos;s availability and willingness to explain each step is frequently mentioned as reassuring for both patients and families</li>
                <li>Continued support after the first visit is seen as a key difference compared to a one-time consultation elsewhere</li>
              </ul>
            </div>

            {/* Section 9 — Tips for Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for Patients Seeking Kidney Treatment in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bring all previous kidney-related reports, prescriptions, and test results to your first consultation</li>
                <li>Be clear about symptoms such as swelling, fatigue, changes in urination, or diagnosed conditions like diabetes</li>
                <li>Ask specifically about diet and hydration guidance, since these play a major role in kidney treatment outcomes</li>
                <li>Plan for regular follow-up visits rather than expecting a single consultation to resolve a chronic kidney condition</li>
                <li>Mention any ongoing allopathic treatment so the ayurvedic plan can be coordinated appropriately</li>
                <li>If travelling from outside Moradabad, consider planning your visit around the free OPD offered on the 15th of every month</li>
              </ul>
            </div>

            {/* Section 10 — Legacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Legacy in Chronic Care, Including Kidney Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji with the object of serving humanity and contributing to a better nation</li>
                <li>Over 35 years, the institution has grown into a full ayurvedic chikitsalaya offering research, herbal wellness, pathology support, and ashram-based care</li>
                <li>Kidney treatment has remained one of the core focus areas of the hospital since its earliest years</li>
                <li>The founder&apos;s seva-first philosophy continues to shape how kidney patients are treated today — with patience, honesty, and long-term commitment rather than quick promises</li>
                <li>Today&apos;s doctors carry this legacy forward while also drawing on ongoing ayurvedic research to refine kidney care approaches</li>
              </ul>
            </div>

            {/* Section 11 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Warning Signs of Kidney Concerns to Watch For
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent swelling in the legs, ankles, or face that does not resolve on its own</li>
                <li>Noticeable changes in urination frequency, color, or comfort</li>
                <li>Ongoing fatigue or weakness that does not improve with rest</li>
                <li>High blood pressure or poorly controlled diabetes, both of which are closely linked to kidney strain</li>
                <li>Loss of appetite, nausea, or a metallic taste, which can sometimes accompany declining kidney function</li>
                <li>A family history of kidney disease, which makes early consultation and preventive guidance especially valuable</li>
                <li>Patients noticing any of these signs are encouraged not to delay a consultation, since early guidance often supports better outcomes</li>
              </ul>
            </div>

            {/* Section 12 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your First Kidney Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Expect a detailed, unhurried conversation about your symptoms, their duration, and how they have progressed over time</li>
                <li>The doctor will review any previous reports, prescriptions, and ongoing medication before suggesting next steps</li>
                <li>If needed, the on-site pathology lab can support fresh testing so the treatment plan is based on current information</li>
                <li>Diet, hydration, and daily routine will be discussed as part of the same visit, not left for a later appointment</li>
                <li>A clear follow-up schedule will usually be set before you leave, so you know exactly what to expect next</li>
                <li>Family members are welcome to join the consultation, especially for elderly patients or those managing advanced kidney concerns</li>
              </ul>
            </div>

            {/* Section 13 — CTA */}
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

            {/* Section 14 — FAQs */}
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