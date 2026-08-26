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
      q: "Does Balprada treat fatty liver?",
      a: "Yes, through herbal medicine, diet correction, and lifestyle guidance.",
    },
    {
      q: "Can jaundice be treated here?",
      a: "Yes, with careful monitoring alongside herbal and dietary support.",
    },
    {
      q: "Is weak digestion connected to liver health?",
      a: "Yes, and it is addressed as part of overall liver and digestive care.",
    },
    {
      q: "Does Balprada have facilities to monitor liver function?",
      a: "Yes, the in-house pathology lab supports relevant blood testing.",
    },
    {
      q: "Is diet guidance included in liver treatment?",
      a: "Yes, diet correction is a core part of every liver treatment plan.",
    },
    {
      q: "How often should liver patients visit for follow-up?",
      a: "Regular follow-up is recommended; the exact schedule depends on the individual case.",
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
                Liver Treatment Hospital in Moradabad — Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The liver is one of the body&apos;s hardest-working organs, and once it starts showing signs of strain, families often look for a liver treatment hospital in Moradabad that treats the condition with patience rather than shortcuts</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center has supported patients dealing with fatty liver, jaundice, and weak digestion since 1991, combining ayurvedic consultation, in-house herbal medicine, diet correction, and an ashram-based environment built for steady, long-term recovery</li>
              </ul>
            </div>

            {/* Section 2 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada for Liver Treatment in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of ayurvedic experience in liver and digestive care, dating back to the hospital&apos;s founding in 1991</li>
                <li>Every liver case begins with a detailed, personal consultation rather than a fixed or generic prescription</li>
                <li>In-house, self-prepared herbal medicines allow doctors to maintain consistent quality across every liver treatment plan</li>
                <li>An on-site pathology lab supports the blood and diagnostic testing often needed to track liver function over time</li>
                <li>Diet and daily routine correction are built directly into the treatment plan, since food choices strongly affect liver strain</li>
                <li>The ashram-based setting gives patients a calm space to focus on recovery instead of rushing through appointments</li>
                <li>Structured follow-up ensures liver conditions are monitored consistently rather than treated as a one-time visit</li>
                <li>Free OPD consultation on the 15th of every month makes expert guidance accessible to more families</li>
              </ul>
            </div>

            {/* Section 3 — Liver Concerns Addressed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Liver and Digestive Concerns Addressed at Balprada
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Fatty Liver
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Ayurvedic consultation and lifestyle correction aimed at supporting the liver&apos;s natural function</li>
                    <li>Herbal medicine combined with diet guidance to help reduce excess fat accumulation over time</li>
                    <li>Attention to related factors such as weight, diabetes, and daily activity levels</li>
                    <li>Ongoing monitoring to track how well the current approach is working for the patient</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Jaundice
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Ayurvedic evaluation of jaundice symptoms alongside careful review of existing reports</li>
                    <li>Herbal and dietary support aimed at assisting the liver&apos;s recovery process</li>
                    <li>Close monitoring during the treatment period, since jaundice can vary widely in severity</li>
                    <li>Guidance on rest, hydration, and food choices suited to the recovery phase</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Weak Digestion
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Ayurvedic assessment of digestive discomfort, bloating, and irregular appetite often linked to liver strain</li>
                    <li>Herbal support combined with routine correction to ease digestive load on the liver</li>
                    <li>Diet planning that avoids foods known to aggravate digestive and liver-related discomfort</li>
                    <li>Long-term lifestyle guidance to prevent recurring digestive issues</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Section 4 — Ayurvedic Lens */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Liver Health Through an Ayurvedic Lens
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda views the liver as central to digestion, metabolism, and the body&apos;s overall detoxification process</li>
                <li>Poor diet, excess fried or processed food, irregular eating habits, and unmanaged weight are commonly seen as contributing factors to liver strain</li>
                <li>Ayurvedic approaches to liver care generally emphasize dietary discipline, digestive support, and gentle detoxification guidance</li>
                <li>Herbs traditionally associated with liver support are used only after personalized assessment, not as a one-size-fits-all formula</li>
                <li>Long-term liver health is treated as a combination of medicine, diet, daily routine, and consistent monitoring rather than medicine alone</li>
                <li>This is why Balprada pairs herbal treatment with structured follow-up instead of offering a single prescription and no further guidance</li>
              </ul>
            </div>

            {/* Section 5 — Liver Care Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Liver Care Process
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Step 1: Detailed Consultation</strong> — The doctor reviews the patient&apos;s liver-related history, symptoms, and any existing reports</li>
                <li><strong>Step 2: Diagnostic Support</strong> — The in-house pathology lab helps confirm relevant liver function markers where needed</li>
                <li><strong>Step 3: Personalized Ayurvedic Plan</strong> — Herbal medicine, diet correction, and lifestyle guidance are combined into a single plan</li>
                <li><strong>Step 4: Supportive Therapies</strong> — Yoga, naturopathy, or physiotherapy may be added depending on the patient&apos;s overall condition</li>
                <li><strong>Step 5: Ongoing Follow-Up</strong> — Regular review appointments track progress and allow the plan to be adjusted as needed</li>
              </ul>
            </div>

            {/* Section 6 — Supporting Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting Facilities for Liver Patients
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Balprada Pathology Lab</strong> — enables regular tracking of liver-related blood markers without visiting multiple facilities</li>
                <li><strong>Diet Guidance</strong> — structured food planning suited to liver patients, including fat, sugar, and portion correction</li>
                <li><strong>Yoga</strong> — gentle practices recommended to support digestion, circulation, and overall balance</li>
                <li><strong>Naturopathy</strong> — nature-led practices used to support the body&apos;s own healing capacity alongside medicine</li>
                <li><strong>Physiotherapy</strong> — recommended where mobility or associated concerns need attention alongside liver care</li>
                <li><strong>Organic Food</strong> — supports the dietary discipline that is central to every liver treatment plan at the ashram</li>
              </ul>
            </div>

            {/* Section 7 — Diet and Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Diet and Routine Matter So Much in Liver Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Liver function is closely tied to daily food habits, making diet correction one of the most important parts of any real recovery plan</li>
                <li>Excess fried food, sugar, and processed items are generally discouraged for patients dealing with fatty liver or digestive strain</li>
                <li>Regular meal timing and avoiding late-night eating are often part of the routine correction suggested to liver patients</li>
                <li>Adequate hydration and moderate physical activity are encouraged alongside medicine to support overall liver function</li>
                <li>Alcohol and other known liver-stressing habits are addressed directly and honestly during consultation</li>
                <li>Patients who follow both medicine and lifestyle guidance consistently tend to see steadier, longer-lasting improvement</li>
              </ul>
            </div>

            {/* Section 8 — Recognizing Signs Early */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recognizing the Signs of Liver Concerns Early
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent fatigue or weakness that does not improve with rest</li>
                <li>Loss of appetite, bloating, or discomfort after meals</li>
                <li>Yellowing of the skin or eyes, which may indicate jaundice and needs prompt attention</li>
                <li>Unexplained weight changes or swelling in the abdomen</li>
                <li>Dark urine or pale stools, which can sometimes point to liver-related concerns</li>
                <li>A history of fatty liver, diabetes, or irregular eating habits, which raises the importance of preventive consultation</li>
                <li>Patients noticing several of these signs together are encouraged to seek consultation promptly rather than waiting</li>
              </ul>
            </div>

            {/* Section 9 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your First Liver Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Set aside enough time for a detailed conversation about your symptoms, history, and current medication</li>
                <li>Bring all previous liver-related reports, prescriptions, and test results with you</li>
                <li>Be ready to discuss diet, eating habits, and daily routine honestly, since these shape the entire treatment plan</li>
                <li>If needed, the doctor may recommend fresh testing through the on-site pathology lab</li>
                <li>A clear follow-up schedule will typically be set before you leave, so next steps are never left uncertain</li>
                <li>Family members are welcome to join, especially since liver recovery often depends heavily on habits followed at home</li>
              </ul>
            </div>

            {/* Section 10 — What Patients Say */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Patients and Families Say About Liver Care at Balprada
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Families often describe the follow-up guidance as giving them a clear structure for diet, daily habits, and future consultations</li>
                <li>Many patients highlight the calm, ashram-based environment as helpful during the stress of managing a liver condition</li>
                <li>The team&apos;s availability and willingness to explain each step is frequently mentioned as reassuring for both patients and families</li>
                <li>Continued support after the first visit is seen as a key difference compared to a one-time consultation elsewhere</li>
              </ul>
            </div>

            {/* Section 11 — Legacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Legacy in Liver and Chronic Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji with the object of serving humanity and contributing to a better nation</li>
                <li>Liver and kidney treatment have remained core focus areas of the hospital since its earliest years</li>
                <li>Over 35 years, the institution has grown into a complete ayurvedic chikitsalaya with research, herbal wellness, pathology support, and ashram-based care</li>
                <li>The founder&apos;s seva-first philosophy continues to guide how liver patients are treated — with patience and honesty rather than false promises</li>
                <li>Today&apos;s doctors carry this legacy forward while drawing on ongoing research to refine liver care approaches</li>
              </ul>
            </div>

            {/* Section 12 — Common Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Questions Families Ask Before Starting Liver Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Families often ask whether ayurvedic care can genuinely help with fatty liver or jaundice, and doctors are transparent that results depend on severity and how consistently guidance is followed</li>
                <li>Many ask whether existing allopathic medicines need to be stopped — the answer is always to disclose everything so the doctor can plan safely rather than assuming</li>
                <li>Questions about how long liver treatment typically takes are addressed directly during consultation, since recovery timelines vary by patient and condition</li>
                <li>Families frequently ask about specific foods to avoid, and doctors provide individualized guidance rather than generic lists, since liver conditions differ from patient to patient</li>
                <li>Some ask whether children or elderly patients need a different approach — age and overall health are always factored into the plan</li>
              </ul>
            </div>

            {/* Section 13 — Supporting Family Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting a Family Member Through Liver Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Encourage consistency with diet and medicine timing, since irregular habits can undo the benefit of an otherwise sound treatment plan</li>
                <li>Attend consultations together where possible, so the whole family understands the reasoning behind dietary and lifestyle changes</li>
                <li>Keep a simple record of symptoms, reports, and follow-up dates to make each consultation more productive</li>
                <li>Be patient with the pace of recovery, since liver treatment is generally a gradual process rather than an overnight fix</li>
                <li>Maintain open communication with the doctor about any new symptoms or concerns between scheduled follow-ups</li>
              </ul>
            </div>

            {/* Section 14 — CTA */}
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