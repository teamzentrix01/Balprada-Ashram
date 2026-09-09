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
      q: "Can Ayurveda cure fatty liver completely?",
      a: "Ayurveda supports liver function and helps manage fatty liver through diet and herbs, but results depend on the stage and the patient's consistency with lifestyle changes.",
    },
    {
      q: "Is Ayurvedic liver treatment safe alongside allopathic medicine?",
      a: "Yes, when supervised by qualified physicians, Ayurvedic care is generally designed to complement ongoing hepatology treatment rather than replace it.",
    },
    {
      q: "How long does Ayurvedic liver treatment take to show results?",
      a: "This varies by patient and condition severity; mild cases may improve in a few weeks, while chronic liver issues often need several months of consistent care.",
    },
    {
      q: "Can jaundice be managed with Ayurveda?",
      a: "Mild to moderate jaundice may respond well to supportive Ayurvedic care, but severe cases require close medical supervision alongside treatment.",
    },
    {
      q: "Is Panchakarma safe for all liver patients?",
      a: "Not always. Panchakarma therapies are recommended only after a thorough evaluation, as some procedures may not suit patients with significantly reduced liver function.",
    },
    {
      q: "Do I need to stop my current medication to start Ayurvedic treatment?",
      a: "No, patients are generally advised to continue their prescribed medication and use Ayurvedic care as a supportive addition, under proper medical guidance.",
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
                Liver Ayurvedic Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The liver is one of the body&apos;s hardest-working organs, responsible for digestion, detoxification, and metabolism.</li>
                <li>Due to poor eating habits, alcohol consumption, stress, and rising cases of fatty liver, liver-related concerns are becoming increasingly common across all age groups.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, Moradabad, liver ayurvedic treatment is offered as a supportive, root-cause-focused approach that works alongside modern hepatology care to help patients manage liver health more effectively and reduce the risk of long-term complications.</li>
              </ul>
            </div>

            {/* Section 2 — Understanding Liver Health Through Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Liver Health Through the Lens of Ayurveda
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>In Ayurveda, the liver (Yakrit) is considered the seat of Pitta dosha and plays a central role in digestion, metabolism, and blood formation.</li>
                <li>Most liver disorders are linked to an aggravation of Pitta dosha, along with accumulated toxins (Ama) that build up due to poor digestion.</li>
                <li>Ayurveda views the liver as closely connected to Agni (digestive fire); when Agni is weak, toxins accumulate and gradually affect liver tissue.</li>
                <li>Rather than only managing symptoms, the Ayurvedic approach focuses on correcting the underlying imbalance that is placing stress on the liver.</li>
                <li>Detoxification, dietary correction, and rejuvenation together form the foundation of liver-focused Ayurvedic care at Balprada.</li>
              </ul>
            </div>

            {/* Section 3 — Common Causes of Liver Disorders */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Liver Disorders
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Excessive consumption of alcohol, which places a direct and continuous strain on liver function.</li>
                <li>Poor dietary habits, including frequent consumption of fried, oily, and processed foods.</li>
                <li>Unmanaged obesity and sedentary lifestyle, both closely linked to the rise in fatty liver cases.</li>
                <li>Uncontrolled diabetes and high cholesterol, which are known contributors to non-alcoholic fatty liver disease.</li>
                <li>Overuse of certain medications or unsupervised self-medication that adds metabolic burden on the liver.</li>
                <li>Viral infections such as hepatitis that directly affect liver tissue over time.</li>
                <li>Chronic stress and disturbed sleep patterns, which Ayurveda links to weakened digestive fire and toxin accumulation.</li>
              </ul>
            </div>

            {/* Section 4 — Warning Signs You Should Not Ignore */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs You Should Not Ignore
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent fatigue and weakness that does not improve with rest.</li>
                <li>Loss of appetite, nausea, or discomfort after eating oily or heavy meals.</li>
                <li>Yellowish discolouration of the skin or eyes, a sign that should never be ignored.</li>
                <li>Abdominal bloating, discomfort, or a feeling of heaviness in the upper right abdomen.</li>
                <li>Unexplained weight loss or, in some cases, gradual weight gain linked to fluid retention.</li>
                <li>Dark-coloured urine or pale stools, which may indicate an underlying liver issue.</li>
                <li>Abnormal liver function test results, such as raised SGOT, SGPT, or bilirubin levels.</li>
              </ul>
            </div>

            {/* Section 5 — The Ayurvedic Approach to Liver Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Approach to Liver Treatment at Balprada
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Nidan Parivarjan (Cause Elimination): The first step involves identifying and removing dietary and lifestyle triggers that are placing stress on the liver.</li>
                <li>Shodhana (Detoxification): Gentle, personalised detox procedures help clear accumulated toxins and support the liver&apos;s natural cleansing function.</li>
                <li>Shamana (Pacification Therapy): Herbal formulations are used to pacify aggravated Pitta dosha and support smoother liver function.</li>
                <li>Rasayana (Rejuvenation): Once the acute imbalance is addressed, rejuvenating herbs are introduced to strengthen liver tissue and improve resilience over time.</li>
                <li>Anuvartan (Continued Monitoring): Regular follow-ups and diet adjustments ensure the treatment plan evolves along with the patient&apos;s improving liver parameters.</li>
                <li>Every treatment plan at Balprada is personalised based on the patient&apos;s Prakriti (body constitution), current lab reports, and the stage of liver involvement.</li>
              </ul>
            </div>

            {/* Section 6 — Key Ayurvedic Herbs Used in Liver Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Key Ayurvedic Herbs Used in Liver Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bhumyamalaki: Widely regarded for its supportive role in maintaining healthy liver enzyme levels and overall liver function.</li>
                <li>Kutki: Traditionally used for its liver-supportive and mild detoxifying properties.</li>
                <li>Kalmegh: Known for its role in supporting the body&apos;s natural defence mechanisms and liver health.</li>
                <li>Punarnava: Used to help manage fluid retention and support overall detoxification alongside liver care.</li>
                <li>Guduchi: Valued for its immune-supportive and anti-inflammatory properties beneficial to liver tissue.</li>
                <li>Bhringraj: Commonly included in formulations aimed at supporting liver rejuvenation.</li>
                <li>These herbs are never used in isolation; they are combined into customised formulations based on individual assessment and current liver function reports.</li>
              </ul>
            </div>

            {/* Section 7 — Panchakarma Therapies That Support Liver Function */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Panchakarma Therapies That Support Liver Function
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Virechana (Therapeutic Purgation): Considered one of the most effective Panchakarma procedures for balancing Pitta dosha and supporting liver detoxification.</li>
                <li>Basti (Medicated Enema Therapy): Used selectively to support overall metabolic balance alongside liver-focused treatment.</li>
                <li>Swedana (Herbal Steam Therapy): Assists in improving circulation and supporting the body&apos;s natural elimination process.</li>
                <li>All Panchakarma procedures are recommended only after a detailed evaluation of the patient&apos;s liver function, since not every therapy suits every stage of liver involvement.</li>
                <li>These procedures are always performed under close medical supervision at the hospital, particularly for patients with significantly reduced liver function.</li>
              </ul>
            </div>

            {/* Section 8 — Ayurvedic Diet and Lifestyle Guidelines */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Diet and Lifestyle Guidelines for Liver Patients
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Avoid fried, oily, and heavily processed foods that add unnecessary metabolic load on the liver.</li>
                <li>Reduce or eliminate alcohol consumption completely, as it is one of the most direct contributors to liver damage.</li>
                <li>Include light, easily digestible meals such as moong dal, seasonal vegetables, and warm soups.</li>
                <li>Stay adequately hydrated with plain water and avoid sugary or carbonated beverages.</li>
                <li>Include bitter and detoxifying foods such as bitter gourd, drumstick, and leafy greens as advised by the physician.</li>
                <li>Maintain a fixed meal schedule and avoid late-night eating, which disturbs digestive fire (Agni).</li>
                <li>Practice gentle yoga, pranayama, and regular light physical activity to support metabolism and reduce stress.</li>
                <li>Prioritise consistent sleep patterns, as disturbed sleep is closely linked to weakened liver function in Ayurvedic understanding.</li>
              </ul>
            </div>

            {/* Section 9 — Liver Conditions Addressed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Liver Conditions Addressed Through Ayurvedic Care at Balprada
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Fatty liver disease, both alcoholic and non-alcoholic, in its early and moderate stages.</li>
                <li>Elevated liver enzymes identified through routine liver function tests.</li>
                <li>Mild to moderate jaundice, managed alongside standard medical treatment.</li>
                <li>Chronic liver inflammation and general sluggish liver function.</li>
                <li>Digestive issues linked to poor liver function, such as bloating and food intolerance.</li>
                <li>Post-viral hepatitis recovery support, in coordination with the treating physician.</li>
                <li>General liver weakness and early signs of reduced liver function identified during health check-ups.</li>
              </ul>

              
            </div>

            {/* Section 10 — Ayurvedic Support Across Different Stages */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Support Across Different Stages of Liver Disease
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Early Stage (Mild Fatty Liver or Enzyme Elevation): Focus is on dietary correction, improving digestion, and using mild herbal formulations to prevent further progression.</li>
                <li>Moderate Stage (Persistent Symptoms, Rising Enzymes): A more structured combination of herbs, dietary restriction, and closely monitored detox support may be introduced.</li>
                <li>Advanced Stage (Significant Liver Involvement): Ayurvedic care is offered strictly as a supportive measure to manage symptoms such as fatigue and digestive discomfort, alongside ongoing hepatology treatment.</li>
                <li>At every stage, treatment intensity and herb selection are adjusted based on the latest lab reports rather than following a fixed template.</li>
                <li>Patients are encouraged to share updated liver function reports at each visit so the treatment plan can be modified safely and accurately.</li>
              </ul>
            </div>

            {/* Section 11 — Precautions to Keep in Mind */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions to Keep in Mind During Liver Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Never self-medicate with Ayurvedic herbs for liver issues without consulting a qualified physician, as certain herbs may not suit every stage of liver disease.</li>
                <li>Always inform your Ayurvedic physician about all ongoing allopathic medications to avoid any unwanted interaction.</li>
                <li>Avoid skipping scheduled follow-ups, since liver parameters can change gradually and need consistent monitoring.</li>
                <li>Do not discontinue prescribed medication or hepatologist visits based on Ayurvedic treatment alone.</li>
                <li>Report any new symptoms, such as sudden yellowing of the skin, severe abdominal pain, or swelling, to your treating doctor immediately.</li>
                <li>Keep a simple daily log of diet, symptoms, and energy levels, as this helps the physician fine-tune the treatment plan more effectively over time.</li>
              </ul>
            </div>

            {/* Section 12 — Why Choose Balprada Ayurvedic Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital for Liver Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Experienced Ayurvedic physicians with focused expertise in liver and digestive health.</li>
                <li>Personalised treatment plans based on Prakriti assessment, lab reports, and disease stage rather than a one-size-fits-all protocol.</li>
                <li>In-house pathology and diagnostic facilities for accurate monitoring of liver parameters.</li>
                <li>Supervised Panchakarma therapy conducted with strict hygiene and safety protocols.</li>
                <li>A patient-first approach that combines classical Ayurvedic wisdom with modern diagnostic support.</li>
                <li>Conveniently located in Moradabad, making it accessible for patients across the region.</li>
                <li>Continuous follow-up care to track progress and adjust the treatment plan as needed.</li>
              </ul>
            </div>

            {/* Section 13 — How Treatment Begins at Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Treatment Begins at Balprada
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Initial Consultation: A detailed discussion of symptoms, medical history, current medications, and lifestyle habits.</li>
                <li>Diagnostic Review: Assessment of existing liver function reports, with fresh tests recommended if needed.</li>
                <li>Prakriti Assessment: Understanding the patient&apos;s individual body constitution to design a tailored treatment plan.</li>
                <li>Treatment Plan Design: A combination of herbal medicines, dietary guidance, and, where appropriate, Panchakarma therapy.</li>
                <li>Regular Follow-Up: Scheduled reviews to monitor progress and make adjustments based on response to treatment.</li>
              </ul>
            </div>

            {/* Section 14 — Taking the First Step Towards Better Liver Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Taking the First Step Towards Better Liver Health
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Liver damage often progresses silently for years before symptoms become noticeable, which makes early attention to diet and lifestyle especially important.</li>
                <li>Ayurveda offers a structured, gentle way to support the liver&apos;s natural detoxification and metabolic processes without adding unnecessary strain.</li>
                <li>Combining timely medical diagnosis with a personalised Ayurvedic plan gives patients a more complete, well-rounded approach to managing liver health over the long term.</li>
                <li>If you or a family member are experiencing early signs of liver trouble or want to explore supportive Ayurvedic care alongside existing treatment, a proper consultation is the right starting point.</li>
                <li>The team at Balprada Ayurvedic Hospital &amp; Research Center, Moradabad, is available to guide you through a safe, individualised liver care plan based on your current health status.</li>
              </ul>
            </div>

            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for liver health can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, liver function assessment, and personalised treatment planning. For patients traveling from outside Moradabad, the hospital also assists with scheduling follow-ups aligned with their treatment progress.
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

            {/* Section 16 — FAQs */}
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