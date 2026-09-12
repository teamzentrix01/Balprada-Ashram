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
      q: "Can Ayurveda cure jaundice completely?",
      a: "Many patients recover well with disciplined Ayurvedic care, diet and monitored herbal support, especially when the underlying cause is properly identified and addressed. Recovery time varies depending on the cause and severity.",
    },
    {
      q: "Is Ayurvedic treatment safe for jaundice in children?",
      a: "Ayurvedic support can be considered for children after careful evaluation by our doctors, with appropriate dosage and close monitoring. Always consult a qualified vaidya before starting any treatment for a child.",
    },
    {
      q: "How long does jaundice recovery usually take with Ayurvedic care?",
      a: "Recovery time depends on the underlying cause, severity and the patient's overall health. Our doctors assess progress at each follow-up and adjust the plan accordingly.",
    },
    {
      q: "What diet is recommended during jaundice recovery?",
      a: "A light, easily digestible diet with warm, freshly cooked food, adequate fluids and no oily or fried items is generally recommended, along with complete avoidance of alcohol.",
    },
    {
      q: "Does Balprada offer free consultation for jaundice patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "When should jaundice be treated as a medical emergency?",
      a: "If jaundice develops suddenly, worsens quickly, or is accompanied by high fever, confusion or severe abdominal pain, immediate medical evaluation is necessary rather than waiting for a scheduled consultation.",
    },
    {
      q: "How can I book an appointment at Balprada?",
      a: "You can call, WhatsApp or visit the Balprada website to book an appointment at either the Main Branch or the Moradabad Branch.",
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
                Jaundice Ayurvedic Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Jaundice is a condition in which the skin and eyes take on a yellowish tint due to a buildup of bilirubin in the blood, usually pointing to an underlying liver, bile duct or blood-related issue.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, we offer Ayurvedic consultation, diet discipline and monitored herbal care to support recovery from jaundice, always alongside proper diagnosis and, where needed, ongoing medical supervision.</li>
                <li>With 35 years of experience in Ayurveda, in-house herbal medicines, an experienced team of vaidyas and a peaceful ashram-based environment, Balprada focuses on disciplined, personalized and compassionate care for every patient.</li>
              </ul>
            </div>


            {/* Section 2 — What Is Jaundice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Jaundice?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Jaundice is not a disease in itself but a visible sign that bilirubin, a yellow pigment produced during the normal breakdown of red blood cells, is not being processed or eliminated properly by the body.</li>
                <li>Bilirubin is normally processed by the liver and removed from the body through bile and stool.</li>
                <li>When this process is disrupted, bilirubin builds up in the blood, causing yellow discoloration of the skin and eyes.</li>
                <li>Jaundice can appear at any age, from newborns to elderly adults, though the underlying causes differ.</li>
                <li>The severity and color intensity of jaundice can give doctors clues about how advanced or serious the underlying condition may be.</li>
                <li>Since jaundice is a symptom rather than a standalone illness, proper diagnosis of the root cause is essential before starting treatment.</li>
              </ul>
            </div>


            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Jaundice
              </h2>


              <p className="text-gray-700 mb-4">
                Understanding what is causing the jaundice helps guide the most appropriate and effective care plan.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Viral hepatitis (Hepatitis A, B, C or E) affecting liver function.</li>
                <li>Fatty liver disease or long-term liver stress from poor diet and lifestyle.</li>
                <li>Gallstones or bile duct blockages that prevent normal bile flow.</li>
                <li>Excessive breakdown of red blood cells (hemolytic conditions).</li>
                <li>Long-term alcohol use affecting liver processing capacity.</li>
                <li>Certain medications or toxin exposure that impact liver function.</li>
                <li>Underlying liver conditions such as cirrhosis or, in some cases, liver failure.</li>
                <li>Newborn jaundice, which is common in infants and usually needs pediatric evaluation.</li>
              </ul>
            </div>


            {/* Section 4 — Signs and Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs and Symptoms of Jaundice
              </h2>


              <p className="text-gray-700 mb-4">
                Recognizing symptoms early allows for timely consultation and a more comfortable recovery process.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Yellowish discoloration of the skin and the white part of the eyes.</li>
                <li>Dark-colored urine, often described as tea-colored.</li>
                <li>Pale or clay-colored stools.</li>
                <li>Persistent fatigue, weakness and low energy.</li>
                <li>Loss of appetite and mild nausea.</li>
                <li>Itchy skin in some cases.</li>
                <li>Mild fever, especially when jaundice is linked to a viral infection.</li>
                <li>Abdominal discomfort, particularly in the upper right side near the liver.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If jaundice appears suddenly, worsens quickly, or is accompanied by high fever, confusion or severe abdominal pain, immediate medical evaluation is necessary.
              </p>
            </div>


            {/* Section 5 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Understanding of Jaundice (Kamala)
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>In Ayurveda, jaundice is traditionally described as &quot;Kamala,&quot; a condition closely linked to Pitta dosha imbalance and impaired liver and digestive function.</li>
                <li>Kamala is traditionally associated with aggravated Pitta affecting Yakrit (liver) and Rakta Dhatu (blood tissue).</li>
                <li>Weakened digestive fire (Agni) is considered a contributing factor, allowing toxins (Ama) to accumulate and affect liver processing.</li>
                <li>Ayurvedic texts describe different presentations of Kamala based on the dominant dosha involved and the severity of symptoms.</li>
                <li>Traditional care focuses on pacifying aggravated Pitta, supporting healthy digestion, and gently helping the body restore normal bilirubin processing.</li>
                <li>The approach considers diet, daily routine, mental state and physical symptoms together, rather than treating an isolated sign in isolation.</li>
              </ul>
            </div>


            {/* Section 6 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Ayurvedic Treatment Approach for Jaundice
              </h2>


              <p className="text-gray-700 mb-6">
                At Balprada, Ayurvedic care for jaundice is planned around the patient&apos;s specific cause, severity and overall health, with close monitoring throughout recovery.
              </p>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Consultation and Assessment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Our doctors review the patient&apos;s history, current symptoms, diagnostic reports and any existing liver or blood-related conditions.</li>
                    <li>Assessment includes checking digestion, appetite, energy levels, urine and stool color, and the pace at which jaundice developed.</li>
                    <li>Existing lab reports, including bilirubin and liver function tests, are reviewed before suggesting a care plan.</li>
                    <li>A personalized plan is prepared for each patient rather than a generic, standard protocol.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. In-House Ayurvedic Herbal Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal medicines to maintain consistent quality, purity and dosage.</li>
                    <li>Formulations are selected based on the patient&apos;s constitution (Prakriti), the type of Kamala and the severity of symptoms.</li>
                    <li>Herbal support is generally aimed at supporting healthy liver function, improving digestion and helping restore normal appetite.</li>
                    <li>All medicines are given under the close supervision of experienced vaidyas and monitored through regular follow-up.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Diet and Nutrition Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A light, easily digestible diet is recommended to reduce strain on the liver and digestive system.</li>
                    <li>Patients are guided toward warm, freshly cooked meals and away from oily, fried or heavy food.</li>
                    <li>Adequate hydration is encouraged, along with suitable fruits and fluids as guided by the doctor.</li>
                    <li>Sugar and processed foods are typically minimized, as they can add unnecessary digestive load.</li>
                    <li>Complete avoidance of alcohol is emphasized throughout the recovery period.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Panchakarma and Supportive Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Select, gentle Panchakarma-based procedures may be considered for suitable patients based on their strength and the underlying cause of jaundice.</li>
                    <li>Therapies are planned only after proper evaluation, since not every patient with jaundice is suited for intensive detox procedures.</li>
                    <li>Supportive care aims to ease discomfort, support digestion and assist the liver&apos;s natural recovery process.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Yoga, Naturopathy and Lifestyle Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Gentle yoga and breathing exercises are recommended, as tolerated, to support relaxation and overall well-being.</li>
                    <li>Naturopathy-based routines emphasize rest, light activity and stress reduction during the recovery phase.</li>
                    <li>A disciplined daily routine (Dinacharya), including consistent meal timing and sufficient rest, is encouraged.</li>
                    <li>The calm, service-oriented ashram environment supports both physical recovery and emotional steadiness.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Regular Monitoring and Follow-Up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Follow-up consultations help track bilirubin levels, symptom improvement and overall recovery progress.</li>
                    <li>Patients are encouraged to continue any prescribed medical tests and share updated reports with our team.</li>
                    <li>Consistency in diet, medicine and daily routine is emphasized as key to a smooth and complete recovery.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 7 — Commonly Used Herbs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Commonly Used Ayurvedic Herbs for Jaundice Support
              </h2>


              <p className="text-gray-700 mb-4">
                Several traditional herbs are associated with liver and digestive wellness in Ayurvedic texts. These are used only after proper evaluation and strictly under medical guidance:
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bhumyamalaki (Phyllanthus niruri) – traditionally used to support healthy liver function.</li>
                <li>Kalmegh (Andrographis paniculata) – known for its bitter, Pitta-balancing properties, traditionally used in Kamala.</li>
                <li>Kutki (Picrorhiza kurroa) – valued in classical texts for its role in liver and digestive support.</li>
                <li>Bhringraj (Eclipta alba) – referenced in traditional formulations related to liver wellness.</li>
                <li>Guduchi (Tinospora cordifolia) – associated with supporting immunity and overall vitality during recovery.</li>
                <li>Punarnava (Boerhavia diffusa) – traditionally used to support healthy fluid balance.</li>
                <li>Makoy (Solanum nigrum) – noted in traditional texts for digestive and liver support.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Herbal recommendations vary from patient to patient based on the cause and severity of jaundice. No herb should ever be self-administered without a qualified vaidya&apos;s direct evaluation, especially in infants, elderly patients or cases with high bilirubin levels.
              </p>
            </div>


            {/* Section 8 — Diet and Daily Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Favor light, warm, freshly cooked meals such as moong dal, soft khichdi and boiled vegetables.</li>
                <li>Include easily digestible fruits and adequate fluids as advised by the treating doctor.</li>
                <li>Avoid oily, fried, spicy and heavily processed foods during the recovery period.</li>
                <li>Completely avoid alcohol, along with tobacco and unnecessary over-the-counter medications.</li>
                <li>Maintain fixed meal timings and avoid skipping meals or eating late at night.</li>
                <li>Prioritize adequate rest and sleep, as the body needs energy to recover.</li>
                <li>Practice good hygiene, especially with food and water, to prevent recurrence in cases linked to viral hepatitis.</li>
                <li>Avoid self-medication and always consult a doctor before starting any new treatment or supplement.</li>
              </ul>
            </div>


            {/* Section 9 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada for Ayurvedic Jaundice Care?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of trusted experience in Ayurvedic treatment and patient-centered care.</li>
                <li>In-house preparation of herbal medicines to maintain quality and consistency across every batch.</li>
                <li>Experienced doctors who evaluate each case individually before recommending a care plan.</li>
                <li>Peaceful, ashram-based healing environment that supports rest, discipline and steady recovery.</li>
                <li>Integrated facilities including Panchakarma, yoga, naturopathy, meditation, physiotherapy and an in-house pathology lab for monitoring bilirubin and liver function.</li>
                <li>A structured care process — from consultation to follow-up — that keeps patients supported at every stage.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>Two accessible branches in Moradabad, Uttar Pradesh, with daily OPD timings.</li>
                <li>A calm, service-first approach (seva sankalp) rooted in the legacy of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Continued follow-up guidance even after patients return home, supporting complete and lasting recovery.</li>
              </ul>
            </div>




            {/* Section 11 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for jaundice can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day therapy schedules.
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


            {/* Section 12 — FAQs */}
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