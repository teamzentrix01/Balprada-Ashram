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
      q: "Can Ayurveda help with kidney stones?",
      a: "Ayurveda focuses on supporting healthy urinary function, diet, and lifestyle to help manage and reduce the recurrence of kidney stones.",
    },
    {
      q: "Can small kidney stones pass on their own?",
      a: "Some smaller stones may pass naturally with adequate hydration, but this should be confirmed and monitored by a doctor.",
    },
    {
      q: "What foods should I avoid with kidney stones?",
      a: "Foods high in oxalates, excess salt, and animal protein are generally advised to be reduced, based on individual assessment.",
    },
    {
      q: "Does Balprada offer a free consultation?",
      a: "Yes, a free OPD consultation is available on the 15th of every month at Balprada Ashram and Clinic.",
    },
    {
      q: "How much water should I drink to prevent kidney stones?",
      a: "Increased water intake generally supports prevention, but the right amount should be personalized based on your health condition.",
    },
    {
      q: "Can Ayurvedic treatment be combined with ongoing medical care?",
      a: "Your existing reports and medicines are reviewed during consultation so the doctor can guide you on how to proceed safely.",
    },
    {
      q: "Do I need to visit the hospital in person for treatment?",
      a: "Yes, an in-person consultation helps the doctor assess your condition accurately, with follow-up support available by phone or WhatsApp.",
    },
    {
      q: "Where is Balprada Ayurvedic Hospital located?",
      a: "Balprada has two branches — the Main Branch in Village Bhidwari, Tehsil Bilari, and a branch in Sector-13, New Moradabad, Delhi Road.",
    },
    {
      q: "Are kidney stones likely to come back after treatment?",
      a: "Recurrence is possible, which is why long-term diet and lifestyle discipline is emphasized alongside initial treatment.",
    },
    {
      q: "What should I do if I experience severe pain from a kidney stone?",
      a: "Seek urgent medical attention immediately if pain is severe or accompanied by fever, vomiting, or inability to urinate.",
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
                Kidney Stone Treatment in Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Kidney stones are one of the most common urinary concerns faced by patients today, often causing sudden pain, discomfort, and disruption to daily life.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, patients in Moradabad receive Ayurvedic consultation and care aimed at supporting kidney function, easing discomfort, and guiding long-term prevention through medicine, diet, and disciplined routine.</li>
              </ul>
            </div>


            {/* Section 2 — What Are Kidney Stones */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                What Are Kidney Stones?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Kidney stones are hard mineral and salt deposits that form inside the kidneys.</li>
                <li>They develop when urine becomes concentrated, allowing minerals to crystallize and stick together over time.</li>
                <li>Stones can vary greatly in size, from tiny grain-like particles to larger masses that cause significant discomfort.</li>
                <li>Some stones pass naturally through urine, while others may require medical attention if they cause blockage or severe pain.</li>
                <li>Kidney stones are known to recur in some patients, making long-term prevention an important part of care.</li>
                <li>Both men and women can develop kidney stones, though certain lifestyle and dietary patterns increase the risk.</li>
                <li>Stones are broadly classified by their mineral composition, such as calcium oxalate, uric acid, struvite, and cystine stones, each with different contributing factors.</li>
                <li>Understanding the type of stone a patient has formed can help guide more targeted dietary and lifestyle recommendations.</li>
              </ul>
            </div>


            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Common Causes of Kidney Stones
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Inadequate water intake, leading to concentrated urine and higher mineral crystallization.</li>
                <li>Diets high in oxalate-rich foods, excess salt, or animal protein.</li>
                <li>A sedentary lifestyle with limited physical activity.</li>
                <li>Family history of kidney stones, which can increase individual risk.</li>
                <li>Certain metabolic conditions that affect calcium, oxalate, or uric acid levels in the body.</li>
                <li>Chronic urinary tract infections that contribute to stone formation in some cases.</li>
                <li>Hot climates or occupations involving heavy sweating without adequate fluid replacement.</li>
                <li>Certain long-term medication use that may influence mineral levels in urine, when not monitored properly.</li>
                <li>Digestive conditions that affect how the body absorbs calcium and other minerals.</li>
              </ul>
            </div>


            {/* Section 4 — Common Symptoms */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Common Symptoms of Kidney Stones
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Sudden, severe pain in the back or side, often described as one of the most intense forms of pain.</li>
                <li>Pain that radiates toward the lower abdomen and groin as the stone moves.</li>
                <li>Blood in the urine, which may appear pink, red, or brown.</li>
                <li>Cloudy or foul-smelling urine.</li>
                <li>A frequent urge to urinate, sometimes with only small amounts passed.</li>
                <li>Nausea and vomiting accompanying episodes of pain.</li>
                <li>Fever and chills, which may indicate an associated infection requiring urgent medical attention.</li>
                <li>General fatigue or discomfort that persists even between acute pain episodes.</li>
                <li>In some cases, no symptoms at all, with the stone only discovered during unrelated diagnostic testing.</li>
              </ul>
            </div>


            {/* Section 5 — Why Consider Ayurveda */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why Consider Ayurveda for Kidney Stone Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda approaches kidney stone concerns by looking at digestion, metabolism, and fluid balance as interconnected systems.</li>
                <li>Herbal formulations used in Ayurvedic practice are traditionally associated with supporting healthy urine flow and reducing crystal formation.</li>
                <li>Diet and lifestyle correction are considered central to both managing current stones and preventing future ones.</li>
                <li>Ayurvedic care focuses on the body&apos;s overall balance rather than treating the stone as an isolated problem.</li>
                <li>A structured, doctor-guided approach can help patients understand the root factors contributing to repeated stone formation.</li>
                <li>Ayurvedic support is intended to complement medical evaluation, not replace urgent care needed for severe blockage or infection.</li>
                <li>Many patients appreciate that Ayurveda also addresses recurrence prevention, rather than only focusing on the immediate stone episode.</li>
              </ul>
            </div>


            {/* Section 6 — Complements Conventional Treatment */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                How Ayurvedic Care Complements Conventional Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>For larger stones or urgent blockages, conventional medical procedures may be necessary, and Balprada&apos;s doctors are transparent about when this is the right course of action.</li>
                <li>For smaller stones, recurrent stone formers, or general urinary wellness, Ayurvedic diet and herbal support can play a meaningful supportive role.</li>
                <li>Patients already under conventional urological care can use Ayurvedic guidance for diet correction and long-term prevention alongside their existing treatment.</li>
                <li>The goal at Balprada is not to discourage necessary medical intervention but to support the body&apos;s overall balance before, during, and after treatment.</li>
              </ul>
            </div>


            {/* Section 7 — Balprada's Approach */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Approach to Kidney Stone Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed Consultation:</strong> The doctor reviews the patient&apos;s history, current symptoms, and any existing reports before suggesting a care plan.</li>
                <li><strong>Personalized Ayurvedic Plan:</strong> Herbal medicines, diet correction, and lifestyle guidance are combined based on the individual&apos;s specific condition.</li>
                <li><strong>Diet and Hydration Guidance:</strong> Patients receive practical advice on fluid intake and food choices that support healthy urinary function.</li>
                <li><strong>Supportive Therapies:</strong> Yoga and naturopathy may be recommended where suitable to support overall wellness during treatment.</li>
                <li><strong>Pathology Support:</strong> Balprada&apos;s in-house pathology lab helps track relevant urine and blood parameters to monitor progress.</li>
                <li><strong>Regular Follow-Up:</strong> Ongoing follow-up visits allow the team to observe how the patient is responding and adjust the plan accordingly.</li>
              </ul>
            </div>


            {/* Section 8 — Ayurvedic Herbs */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Ayurvedic Herbs Traditionally Used for Kidney Stone Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Pashanbheda (Bergenia ligulata):</strong> A herb traditionally referenced in Ayurvedic texts for supporting kidney and urinary health.</li>
                <li><strong>Gokshura (Tribulus terrestris):</strong> Commonly used in traditional formulations associated with urinary tract support.</li>
                <li><strong>Punarnava (Boerhavia diffusa):</strong> Widely used for supporting fluid balance and kidney-related concerns.</li>
                <li><strong>Varuna (Crataeva nurvala):</strong> Referenced in classical Ayurveda for urinary tract and stone-related support.</li>
                <li><strong>Kulattha (Horse Gram):</strong> Traditionally used as part of dietary support believed to assist with stone-related concerns.</li>
                <li>Balprada&apos;s in-house medicines are prepared under supervision, and the exact combination for each patient is decided only after proper consultation.</li>
              </ul>
            </div>


            {/* Section 9 — Diet and Lifestyle Guidance */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Guidance for Kidney Stone Prevention
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Increase daily water intake to help dilute urine and reduce crystal formation, unless advised otherwise by a doctor.</li>
                <li>Reduce intake of oxalate-rich foods such as excess spinach, certain nuts, and specific processed foods, based on individual advice.</li>
                <li>Limit salt and animal protein intake, as both can contribute to stone formation over time.</li>
                <li>Include fresh fruits and vegetables as part of a balanced daily diet.</li>
                <li>Avoid holding urine for long periods and maintain regular urination habits.</li>
                <li>Engage in regular physical activity to support overall metabolic health.</li>
                <li>Avoid excessive intake of caffeinated or sugary beverages, which may affect hydration and mineral balance.</li>
                <li>Follow up with periodic health checks if you have a history of recurring stones.</li>
              </ul>
            </div>


            {/* Section 10 — Facilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Facilities That Support Kidney Stone Care at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Panchakarma:</strong> Traditional cleansing therapies considered where suitable, based on individual assessment.</li>
                <li><strong>Yoga:</strong> Structured sessions that support overall balance and can complement lifestyle correction efforts.</li>
                <li><strong>Naturopathy:</strong> Nature-based practices that align with the body&apos;s own healing processes.</li>
                <li><strong>Pathology Lab:</strong> In-house testing support for urine, blood, and related diagnostics relevant to kidney stone monitoring.</li>
                <li><strong>Organic Food:</strong> Diet planning supported by naturally grown food options as part of the treatment journey.</li>
                <li><strong>Ashram Environment:</strong> A calm, disciplined setting that supports patients following a structured, long-term care routine.</li>
              </ul>
            </div>


            {/* Section 11 — When to Seek Urgent Care */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                When to Seek Urgent Medical Attention
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Severe, unbearable pain that does not improve and is accompanied by vomiting.</li>
                <li>Fever and chills alongside kidney stone symptoms, which may indicate an infection.</li>
                <li>Visible blood in the urine along with significant discomfort.</li>
                <li>Difficulty passing urine or a complete inability to urinate.</li>
                <li>Persistent symptoms that worsen despite home management or initial treatment.</li>
                <li>In such situations, timely medical evaluation is essential, and Ayurvedic care should be pursued alongside, not instead of, urgent medical attention when required.</li>
              </ul>
            </div>


            {/* Section 12 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital &amp; Research Center
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Experienced doctors who take time to understand each patient&apos;s specific history and current condition.</li>
                <li>In-house preparation of herbal medicines to maintain consistency and quality.</li>
                <li>A combination of consultation, medicine, diet guidance, and supportive therapies for a more complete treatment journey.</li>
                <li>Two accessible branches serving patients from Moradabad and surrounding areas.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>A calm ashram environment supporting patients who prefer a disciplined, long-term approach to health.</li>
              </ul>
            </div>


            {/* Section 13 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The doctor will review your medical history, current symptoms, and any existing reports during the first consultation.</li>
                <li>A personalized Ayurvedic plan is suggested based on the assessment, which may include medicines, diet changes, and lifestyle correction.</li>
                <li>Pathology testing may be advised to track relevant urinary and kidney-related parameters.</li>
                <li>Supportive therapies may be recommended depending on individual suitability and overall health status.</li>
                <li>Regular follow-up visits help monitor progress and adjust the treatment plan as needed.</li>
                <li>Patients are encouraged to communicate openly about any changes in symptoms during the course of treatment.</li>
              </ul>
            </div>


            {/* Section 14 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic care for kidney stones can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients requiring diagnostic testing, the hospital&apos;s in-house pathology lab provides convenient, on-site support.
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