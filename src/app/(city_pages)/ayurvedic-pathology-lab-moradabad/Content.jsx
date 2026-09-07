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
      q: "Does Balprada have its own pathology lab?",
      a: "Yes, Balprada offers in-house pathology testing to support diagnosis and ongoing treatment monitoring.",
    },
    {
      q: "What kind of tests are available at the lab?",
      a: "Common tests include blood sugar, kidney function, liver function, lipid profile, thyroid function, CBC, and urine analysis, based on individual needs.",
    },
    {
      q: "Do I need a doctor's consultation before getting tested?",
      a: "Yes, testing is generally recommended by the doctor as part of your overall consultation and treatment plan.",
    },
    {
      q: "Can I get tested for general wellness without a specific health concern?",
      a: "Yes, general wellness testing is available for patients interested in preventive health tracking.",
    },
    {
      q: "How are test results used in Ayurvedic treatment?",
      a: "Results help the doctor refine your treatment plan, including diet and herbal guidance, based on objective health data.",
    },
    {
      q: "Is the pathology lab available at both branches?",
      a: "Pathology support is centered around Balprada's facilities; it's best to confirm availability at your preferred branch before visiting.",
    },
    {
      q: "Can family members get tested during the same visit?",
      a: "Yes, subject to availability and doctor guidance, family members can often be tested during the same visit.",
    },
    {
      q: "How do I book a consultation that includes pathology testing?",
      a: "You can call, WhatsApp, or email the hospital, or visit during the free OPD offered on the 15th of every month.",
    },
    {
      q: "Are test results explained to me, or just handed over?",
      a: "The doctor explains results clearly and discusses how they relate to your Ayurvedic treatment plan.",
    },
    {
      q: "Can testing be repeated periodically to track my progress?",
      a: "Yes, periodic testing is often recommended for chronic conditions to help monitor progress over time.",
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
                Ayurvedic Pathology Lab in Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Accurate diagnostic testing plays an important role in guiding effective treatment, even within an Ayurvedic care setting.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center offers an in-house pathology lab in Moradabad, allowing patients to combine traditional Ayurvedic consultation with reliable diagnostic support under one roof.</li>
              </ul>
            </div>


            {/* Section 2 — Why In-House Lab Matters */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why an In-House Pathology Lab Matters
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Having a pathology lab within the hospital allows doctors to review relevant health parameters without sending patients elsewhere for basic testing.</li>
                <li>It supports a more connected care experience, where consultation, diagnosis, and treatment planning happen in a coordinated manner.</li>
                <li>In-house testing reduces the time and effort patients would otherwise spend visiting a separate diagnostic center.</li>
                <li>It allows the treating doctor to track changes in a patient&apos;s condition more efficiently across follow-up visits.</li>
                <li>For chronic conditions requiring regular monitoring, having lab support on-site makes consistent tracking more practical for patients.</li>
                <li>This integration reflects Balprada&apos;s broader approach of offering complete, coordinated care rather than fragmented services.</li>
                <li>Patients traveling from outside Moradabad especially benefit from being able to complete consultation and testing in a single visit.</li>
                <li>It also reduces the chance of delayed treatment decisions that can happen when test results take longer to arrive from an external facility.</li>
              </ul>
            </div>


            {/* Section 3 — Role of Pathology Testing */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Role of Pathology Testing in Ayurvedic Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>While Ayurveda&apos;s diagnostic approach traditionally includes pulse examination and detailed history-taking, modern pathology testing adds an additional layer of objective data.</li>
                <li>Lab results can help confirm or clarify findings from the doctor&apos;s clinical assessment.</li>
                <li>Testing supports safer treatment planning, particularly for patients with chronic conditions like diabetes, kidney concerns, or thyroid imbalance.</li>
                <li>Pathology results are useful for tracking progress over time, helping both the doctor and patient understand how the body is responding to treatment.</li>
                <li>Combining traditional assessment with laboratory data reflects a thoughtful, well-rounded approach to patient care.</li>
                <li>This integration is particularly valuable for patients managing more than one health concern at a time.</li>
                <li>It also supports safer use of herbal medicines, since certain formulations are chosen with an understanding of the patient&apos;s current health parameters.</li>
              </ul>
            </div>


            {/* Section 4 — Types of Testing */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Types of Testing Typically Supported by Hospital Pathology Labs
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Blood Sugar Testing:</strong> Relevant for monitoring diabetes and related metabolic conditions.</li>
                <li><strong>Kidney Function Tests:</strong> Useful for tracking kidney health, particularly for patients with kidney stones or chronic kidney concerns.</li>
                <li><strong>Liver Function Tests:</strong> Relevant for monitoring liver health, especially for patients undergoing liver-related Ayurvedic care.</li>
                <li><strong>Lipid Profile Testing:</strong> Useful for tracking cholesterol levels relevant to heart health monitoring.</li>
                <li><strong>Thyroid Function Tests:</strong> Relevant for patients managing thyroid imbalances alongside other health concerns.</li>
                <li><strong>Complete Blood Count (CBC):</strong> A general test that provides an overview of overall health and can help identify underlying concerns.</li>
                <li><strong>Urine Analysis:</strong> Relevant for kidney and urinary tract-related monitoring.</li>
                <li>The exact tests recommended for each patient depend on their specific condition and are decided by the treating doctor.</li>
                <li>Additional or specialized tests can be discussed with the doctor if a patient&apos;s condition requires more specific diagnostic information.</li>
              </ul>
            </div>


            {/* Section 5 — Long-Term Treatment Support */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                How Testing Supports Long-Term Treatment Journeys
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>For patients on multi-month Ayurvedic care plans, periodic testing offers a clear, measurable way to track improvement.</li>
                <li>It helps avoid guesswork, allowing both doctor and patient to make decisions based on actual health data rather than assumptions.</li>
                <li>Testing can reveal early warning signs before symptoms become noticeable, supporting more proactive care.</li>
                <li>For patients switching between conventional treatment and Ayurvedic supportive care, updated test results help ensure continuity and safety.</li>
                <li>Consistent testing over time also builds a health record that can be valuable for any future medical consultation, Ayurvedic or otherwise.</li>
              </ul>
            </div>


            {/* Section 6 — Care Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                How Pathology Support Fits into Balprada&apos;s Care Process
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Initial Assessment:</strong> The doctor reviews the patient&apos;s history and symptoms and determines whether diagnostic testing would support the treatment plan.</li>
                <li><strong>Testing Conducted On-Site:</strong> Relevant tests are conducted within the hospital&apos;s own pathology facility, reducing the need for external referrals.</li>
                <li><strong>Result Review:</strong> The doctor reviews results alongside the patient&apos;s overall clinical picture to refine the Ayurvedic treatment plan.</li>
                <li><strong>Ongoing Monitoring:</strong> For chronic conditions, periodic testing helps track how the patient&apos;s health is progressing over time.</li>
                <li><strong>Informed Adjustments:</strong> Treatment plans, including diet and herbal guidance, may be adjusted based on testing outcomes.</li>
                <li><strong>Patient Communication:</strong> Results are explained to patients in a clear, understandable way, helping them stay informed about their own health.</li>
              </ul>
            </div>


            {/* Section 7 — Conditions That Benefit */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Conditions That Often Benefit from Pathology Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Diabetes Management:</strong> Regular blood sugar monitoring is essential for understanding how well a management plan is working.</li>
                <li><strong>Kidney Stone and Kidney Health Concerns:</strong> Kidney function tests and urine analysis help track relevant parameters over time.</li>
                <li><strong>Liver-Related Concerns:</strong> Liver function tests support monitoring of conditions like fatty liver or general liver health support.</li>
                <li><strong>Heart-Related Lifestyle Care:</strong> Lipid profile and related tests help track cardiovascular risk factors over time.</li>
                <li><strong>Thyroid Imbalances:</strong> Thyroid function tests help guide appropriate lifestyle and Ayurvedic support.</li>
                <li><strong>General Wellness Monitoring:</strong> Even patients without a specific diagnosis may benefit from periodic testing as part of preventive health tracking.</li>
              </ul>
            </div>


            {/* Section 8 — Benefits of Combined Approach */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Benefits of Combining Pathology Testing with Ayurvedic Consultation
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients receive a more complete picture of their health, combining traditional assessment with objective lab data.</li>
                <li>Treatment plans can be more precisely tailored based on actual test results rather than symptoms alone.</li>
                <li>Follow-up visits become more meaningful, as doctors can directly compare current results with previous ones.</li>
                <li>Patients gain a clearer understanding of their own health status, which can support better adherence to lifestyle and diet guidance.</li>
                <li>The convenience of on-site testing supports better consistency in follow-up, since patients are more likely to complete recommended tests when they don&apos;t need to travel elsewhere.</li>
                <li>This combined approach reflects a balanced model of care that respects both traditional Ayurvedic wisdom and the value of modern diagnostics.</li>
                <li>Patients often find it reassuring to have both a traditional consultation and objective test data supporting the same treatment recommendation.</li>
              </ul>
            </div>


            {/* Section 9 — Broader Facilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Broader Facilities Supporting Patient Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Panchakarma:</strong> Traditional cleansing therapies planned according to individual assessment.</li>
                <li><strong>Yoga:</strong> Structured sessions supporting balance across body, breath, and mind.</li>
                <li><strong>Naturopathy:</strong> Nature-based practices that work with the body&apos;s own healing capacity.</li>
                <li><strong>Meditation:</strong> Guided sessions supporting emotional steadiness and rest.</li>
                <li><strong>Physiotherapy:</strong> Support for safe movement and mobility during recovery.</li>
                <li><strong>Organic Food:</strong> Diet planning supported by naturally grown food options.</li>
                <li><strong>Ashram Environment:</strong> A calm, disciplined setting that supports long-term healing and routine consistency.</li>
                <li>Pathology testing works alongside these facilities as part of Balprada&apos;s overall, connected approach to patient care.</li>
              </ul>
            </div>


            {/* Section 10 — Who Can Use the Lab */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Who Can Use the Pathology Lab at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients currently under Ayurvedic consultation at Balprada who require testing as part of their treatment plan.</li>
                <li>Patients managing chronic conditions who need regular monitoring of specific health parameters.</li>
                <li>Individuals seeking general wellness testing as part of preventive health tracking.</li>
                <li>Patients transitioning between conventional medical care and Ayurvedic supportive care who need updated test results for their treatment plan.</li>
                <li>Family members accompanying a patient who may also wish to get relevant testing done during the same visit, subject to availability and doctor guidance.</li>
                <li>Patients simply seeking a trusted, single-location option for both consultation and basic diagnostic testing in Moradabad.</li>
              </ul>
            </div>


            {/* Section 11 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital &amp; Research Center
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>A combination of experienced doctors, in-house herbal medicines, and diagnostic support under one roof.</li>
                <li>A connected model of care where consultation, testing, and treatment planning happen together rather than across multiple locations.</li>
                <li>A calm ashram environment that supports patients following a structured, long-term care routine.</li>
                <li>Two accessible branches serving patients from Moradabad and surrounding areas.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
              </ul>
            </div>


            {/* Section 12 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                What to Expect During a Visit Involving Pathology Testing
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The doctor will first conduct a detailed consultation to understand your health concern and history.</li>
                <li>If testing is recommended, it will be explained clearly, including why it is relevant to your treatment plan.</li>
                <li>Samples are collected on-site, reducing the need for a separate visit to an external lab.</li>
                <li>Results are reviewed by the doctor and explained to you in a way that supports understanding of your own health.</li>
                <li>Your Ayurvedic treatment plan, including diet and herbal guidance, is adjusted based on the findings where relevant.</li>
                <li>Follow-up testing may be scheduled periodically to track how your condition is progressing over time.</li>
              </ul>
            </div>


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment with integrated pathology support can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients requiring diagnostic testing, the hospital&apos;s in-house pathology lab provides convenient, on-site support.
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


                <div className="flex items-start gap-3 mt-4">
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


                <div className="flex items-start gap-3 mt-4">
                  <Mail
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:balpradaindia@gmail.com" className="text-black hover:underline">
                      balpradaindia@gmail.com
                    </a>
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