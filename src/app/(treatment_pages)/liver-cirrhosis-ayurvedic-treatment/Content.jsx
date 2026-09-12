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
      q: "Can Ayurveda cure liver cirrhosis completely?",
      a: "Cirrhosis involves permanent scarring of liver tissue. Ayurvedic care focuses on supporting liver function, easing symptoms and improving quality of life alongside ongoing medical treatment, rather than claiming a complete cure.",
    },
    {
      q: "Is Ayurvedic treatment safe to take along with allopathic medicines?",
      a: "Many patients use supportive Ayurvedic care alongside their prescribed medical treatment. Our doctors review current medications and reports before suggesting any herbal support to ensure safety.",
    },
    {
      q: "How long does Ayurvedic liver support treatment usually take?",
      a: "Duration varies by patient, stage of condition and response to care. Our doctors assess progress at each follow-up and adjust the plan accordingly.",
    },
    {
      q: "What diet is recommended during liver cirrhosis care?",
      a: "A light, easily digestible, low-salt diet with fresh fruits, vegetables and adequate hydration is generally recommended, along with complete avoidance of alcohol.",
    },
    {
      q: "Does Balprada offer free consultation for liver patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Is Panchakarma suitable for every cirrhosis patient?",
      a: "Not necessarily. Panchakarma procedures are recommended only after careful evaluation of the patient's strength and stage of illness, since intensive therapies are not suitable for every case.",
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
                Liver Cirrhosis Ayurvedic Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Liver cirrhosis is a serious, progressive condition in which healthy liver tissue is gradually replaced by scar tissue, reducing the liver&apos;s ability to function normally.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, we offer supportive Ayurvedic care that works alongside modern medical management to help patients cope with symptoms, support liver function, and improve overall quality of life.</li>
                <li>With 35 years of experience in Ayurveda, in-house herbal medicines, an experienced team of vaidyas, and a peaceful ashram-based environment, Balprada focuses on disciplined, personalized and compassionate care for every patient.</li>
              </ul>
            </div>


            {/* Section 2 — What Is Liver Cirrhosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Liver Cirrhosis?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Cirrhosis develops when the liver is repeatedly damaged over a long period, causing scarring (fibrosis) that slowly replaces normal, healthy tissue.</li>
                <li>The liver loses its ability to filter toxins, produce essential proteins and support digestion as scar tissue builds up.</li>
                <li>Cirrhosis usually develops slowly, often over several years of ongoing liver stress or injury.</li>
                <li>Early stages may show few or no symptoms, which is why regular check-ups matter for at-risk individuals.</li>
                <li>Advanced cirrhosis can affect digestion, blood clotting, immunity and overall energy levels.</li>
                <li>The condition is generally categorized as compensated (liver still manages basic functions) or decompensated (liver function is significantly reduced).</li>
              </ul>
            </div>


            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Liver Cirrhosis
              </h2>


              <p className="text-gray-700 mb-4">
                Understanding the underlying cause is an important part of any care plan.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Long-term or heavy alcohol consumption.</li>
                <li>Chronic viral hepatitis (Hepatitis B or C infections).</li>
                <li>Non-alcoholic fatty liver disease linked to obesity, diabetes or poor metabolic health.</li>
                <li>Prolonged use of certain medications or exposure to toxins without medical supervision.</li>
                <li>Genetic and metabolic liver disorders in some individuals.</li>
                <li>Chronic bile duct disorders that affect normal liver drainage.</li>
                <li>Repeated exposure to environmental toxins or industrial chemicals over long periods.</li>
                <li>Poor dietary habits combined with a sedentary lifestyle, which can gradually add stress to liver function.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Identifying and addressing the root cause, wherever possible, remains an essential part of any comprehensive care plan, whether managed through modern medicine, Ayurveda, or an integrated approach.
              </p>
            </div>


            {/* Section 4 — Early Signs and Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Early Signs and Symptoms to Watch For
              </h2>


              <p className="text-gray-700 mb-4">
                Recognizing symptoms early can help patients seek timely consultation and care.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent fatigue and generalized weakness.</li>
                <li>Loss of appetite and unintended weight loss.</li>
                <li>Mild nausea or discomfort in the upper right abdomen.</li>
                <li>Yellowish discoloration of skin or eyes (jaundice).</li>
                <li>Swelling in the legs, ankles or abdomen (fluid retention).</li>
                <li>Easy bruising or bleeding due to reduced clotting factors.</li>
                <li>Itchy skin and changes in stool or urine color.</li>
                <li>Mental confusion or difficulty concentrating in advanced stages.</li>
              </ul>
            </div>


            {/* Section 5 — Stages and Complications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Stages and Complications of Liver Cirrhosis
              </h2>


              <p className="text-gray-700 mb-4">
                Understanding how cirrhosis can progress helps patients and families plan care more effectively.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Compensated cirrhosis: the liver is scarred but still manages to perform most essential functions; symptoms may be mild or absent.</li>
                <li>Decompensated cirrhosis: liver function is significantly reduced, and symptoms such as jaundice, fluid buildup or confusion become more noticeable.</li>
                <li>Portal hypertension: increased pressure in the blood vessels supplying the liver, which can lead to further complications if untreated.</li>
                <li>Ascites: accumulation of fluid in the abdomen, often requiring dietary salt restriction and close monitoring.</li>
                <li>Reduced immunity: patients with advanced cirrhosis may be more prone to infections and slower recovery.</li>
                <li>Nutritional deficiencies: poor appetite and impaired digestion can lead to weakness and muscle loss over time.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Because complications can vary widely, every patient&apos;s care plan at Balprada is reviewed individually, with attention to the exact stage and associated symptoms.
              </p>
            </div>


            {/* Section 6 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Understanding of Liver Health
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda views the liver (Yakrit) as a vital organ connected closely with Pitta dosha, digestion (Agni) and blood formation (Rakta Dhatu).</li>
                <li>Ayurvedic texts describe liver-related disorders under conditions affecting Yakrit and Pliha (liver and spleen functions).</li>
                <li>An imbalance in Pitta dosha is traditionally associated with liver heat, inflammation and impaired detoxification.</li>
                <li>Weak digestive fire (Agni) is considered a contributing factor in the gradual buildup of toxins (Ama) that stress the liver.</li>
                <li>Ayurvedic care traditionally focuses on pacifying aggravated Pitta, supporting healthy digestion, and nourishing liver tissue through diet, herbs and routine.</li>
                <li>The approach is holistic — addressing diet, daily routine, mental stress and physical symptoms together, rather than a single isolated concern.</li>
              </ul>
            </div>


            {/* Section 7 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Ayurvedic Treatment Approach for Liver Cirrhosis
              </h2>


              <p className="text-gray-700 mb-6">
                At Balprada, Ayurvedic care for liver cirrhosis is planned as supportive, long-term management alongside a patient&apos;s ongoing medical treatment, never as a replacement for it.
              </p>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Consultation and Assessment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Our doctors review the patient&apos;s medical history, current reports, medication and stage of liver condition.</li>
                    <li>Assessment includes understanding digestion, appetite, sleep, energy levels and associated symptoms.</li>
                    <li>Reports from pathology or diagnostic tests are considered before suggesting any Ayurvedic support plan.</li>
                    <li>A personalized care plan is prepared rather than a generic, one-size-fits-all protocol.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. In-House Ayurvedic Herbal Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal medicines to maintain consistent quality and dosage.</li>
                    <li>Formulations are selected based on the patient&apos;s constitution (Prakriti), current symptoms and stage of condition.</li>
                    <li>Medicines are typically aimed at supporting digestion, reducing fluid retention discomfort, and easing associated weakness.</li>
                    <li>All herbal support is given under the supervision of experienced vaidyas and is closely monitored.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Diet and Nutrition Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A liver-friendly, easily digestible diet plan is suggested based on the individual&apos;s condition.</li>
                    <li>Emphasis is placed on foods that are light, warm and easy on digestion.</li>
                    <li>Guidance is given on limiting salt intake where fluid retention is a concern.</li>
                    <li>Patients are advised on suitable fruits, vegetables, grains and hydration habits.</li>
                    <li>Strict avoidance of alcohol and other liver-stressing substances is always emphasized.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Panchakarma and Supportive Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Select, gentle Panchakarma-based procedures may be considered for suitable patients, based on their strength and stage of illness.</li>
                    <li>These therapies are planned only after careful evaluation, since not every cirrhosis patient is suitable for intensive detox procedures.</li>
                    <li>Supportive therapies aim to ease discomfort, support digestion and improve overall comfort.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Yoga, Naturopathy and Lifestyle Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Gentle yoga and breathing practices are recommended to support relaxation and overall well-being, as tolerated by the patient.</li>
                    <li>Naturopathy-based routines focus on rest, simple movement and stress reduction.</li>
                    <li>A disciplined daily routine (Dinacharya) is encouraged, including consistent meal timing and adequate rest.</li>
                    <li>Emotional and mental well-being is addressed through meditation and a calm ashram environment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Regular Monitoring and Follow-Up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Follow-up consultations help the team track progress, symptom changes and any need to adjust the care plan.</li>
                    <li>Patients are encouraged to continue their prescribed medical tests and share updated reports.</li>
                    <li>Long-term discipline in diet, medicine and routine is emphasized as central to supportive liver care.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 8 — Commonly Used Herbs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Commonly Used Ayurvedic Herbs for Liver Support
              </h2>


              <p className="text-gray-700 mb-4">
                Several traditional herbs are known in Ayurveda for their association with liver and digestive health. These are used only after proper evaluation and under medical guidance:
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bhumyamalaki (Phyllanthus niruri) – traditionally used to support healthy liver function.</li>
                <li>Kalmegh (Andrographis paniculata) – known in Ayurveda for its bitter, Pitta-balancing properties.</li>
                <li>Kutki (Picrorhiza kurroa) – traditionally associated with liver and digestive support.</li>
                <li>Punarnava (Boerhavia diffusa) – often used traditionally to help manage fluid retention.</li>
                <li>Guduchi (Tinospora cordifolia) – valued for its traditional role in supporting immunity and overall vitality.</li>
                <li>Bhringraj (Eclipta alba) – used in classical formulations related to liver wellness.</li>
                <li>Makoy (Solanum nigrum) – referenced in traditional texts for digestive and liver support.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Herbal recommendations vary from patient to patient and should never be self-administered without a qualified vaidya&apos;s guidance, especially in a condition as serious as cirrhosis.
              </p>
            </div>


            {/* Section 9 — Diet and Daily Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Favor freshly cooked, warm, light meals over heavy, fried or processed food.</li>
                <li>Include easily digestible foods such as moong dal, soft khichdi, boiled vegetables and seasonal fruits.</li>
                <li>Reduce salt intake if swelling or fluid retention is present, as advised by the doctor.</li>
                <li>Avoid alcohol completely, along with tobacco and other substances that burden the liver.</li>
                <li>Stay well hydrated with warm water and doctor-approved herbal preparations.</li>
                <li>Maintain fixed meal timings and avoid late-night eating.</li>
                <li>Prioritize adequate sleep and stress management as part of daily discipline.</li>
                <li>Avoid self-medication, including over-the-counter painkillers, without medical advice.</li>
              </ul>
            </div>


            {/* Section 10 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada for Ayurvedic Liver Care?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of trusted experience in Ayurvedic treatment and patient care.</li>
                <li>In-house preparation of herbal medicines to maintain quality and consistency.</li>
                <li>Experienced doctors who evaluate each case individually before suggesting a care plan.</li>
                <li>Peaceful, ashram-based healing environment that supports rest and discipline.</li>
                <li>Integrated facilities including Panchakarma, yoga, naturopathy, meditation, physiotherapy and an in-house pathology lab.</li>
                <li>Structured care process — from consultation to follow-up — that keeps patients supported throughout their journey.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>Two accessible branches in Moradabad, Uttar Pradesh, with daily OPD timings.</li>
                <li>A calm, service-first approach (seva sankalp) rooted in the legacy of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Emphasis on family involvement and clear communication, so patients and caregivers understand each step of the care journey.</li>
                <li>Continued guidance even after the patient returns home, through structured follow-up support.</li>
              </ul>
            </div>


            


            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for liver cirrhosis can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day therapy schedules.
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