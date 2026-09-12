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
      q: "Can Ayurveda treat liver failure on its own?",
      a: "Liver failure, particularly acute liver failure, requires urgent medical attention. Ayurvedic care at Balprada is offered as supportive treatment alongside ongoing medical management, not as a standalone or emergency solution.",
    },
    {
      q: "Is Ayurvedic support safe to take with hospital treatment for liver failure?",
      a: "Many patients use supportive Ayurvedic care alongside their prescribed medical treatment. Our doctors carefully review current reports and medications before suggesting any herbal support.",
    },
    {
      q: "What is the difference between acute and chronic liver failure?",
      a: "Acute liver failure develops suddenly and needs emergency care, while chronic liver failure develops gradually, often as an advanced stage of long-term liver disease such as cirrhosis.",
    },
    {
      q: "What diet is recommended during liver failure care?",
      a: "A light, easily digestible, low-salt diet with fresh fruits, vegetables and doctor-guided fluid intake is generally recommended, along with complete avoidance of alcohol.",
    },
    {
      q: "Does Balprada offer free consultation for liver patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Are Panchakarma therapies suitable for liver failure patients?",
      a: "Not always. Panchakarma is approached cautiously and only after careful evaluation of the patient's strength and stability, as intensive therapies may not suit every case.",
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
                Liver Failure Ayurvedic Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Liver failure is a critical condition in which the liver loses much of its ability to function, affecting digestion, detoxification, blood clotting and overall body balance.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, we offer supportive Ayurvedic care that works alongside ongoing medical treatment to help patients manage symptoms, support recovery of remaining liver function, and improve overall strength and quality of life.</li>
                <li>With 35 years of experience in Ayurveda, in-house herbal medicines, an experienced team of vaidyas, and a peaceful ashram-based environment, Balprada focuses on disciplined, personalized and compassionate care for every patient.</li>
              </ul>
            </div>


            {/* Section 2 — What Is Liver Failure */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Liver Failure?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Liver failure occurs when a large portion of the liver is damaged and can no longer perform its essential functions effectively.</li>
                <li>The liver plays a central role in digestion, detoxification, protein production and blood clotting, and failure disrupts all of these processes.</li>
                <li>Liver failure may be acute, developing suddenly over days or weeks, or chronic, developing gradually over months or years due to long-term liver damage.</li>
                <li>Acute liver failure is a medical emergency and requires immediate hospital-based treatment; Ayurvedic support is not a substitute for emergency care in such cases.</li>
                <li>Chronic liver failure typically develops as an advanced stage of long-standing liver disease, such as cirrhosis or prolonged hepatitis.</li>
                <li>Early recognition and consistent medical supervision are essential for both types, as the condition can affect multiple body systems.</li>
              </ul>
            </div>


            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Liver Failure
              </h2>


              <p className="text-gray-700 mb-4">
                A clear understanding of the underlying cause helps guide a more effective, integrated care plan.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Advanced, long-standing cirrhosis from chronic liver disease.</li>
                <li>Chronic viral hepatitis (Hepatitis B or C) left untreated over time.</li>
                <li>Long-term or heavy alcohol consumption.</li>
                <li>Severe non-alcoholic fatty liver disease linked to obesity or metabolic disorders.</li>
                <li>Reaction to certain medications, overdose situations or exposure to toxic substances.</li>
                <li>Autoimmune liver conditions that gradually damage liver tissue.</li>
                <li>Rare metabolic or genetic liver disorders in some individuals.</li>
              </ul>
            </div>


            {/* Section 4 — Signs and Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs and Symptoms to Watch For
              </h2>


              <p className="text-gray-700 mb-4">
                Recognizing symptoms early can make a significant difference in how quickly appropriate care is sought.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent fatigue, weakness and a general sense of being unwell.</li>
                <li>Yellowing of the skin and eyes (jaundice).</li>
                <li>Swelling in the abdomen, legs or ankles due to fluid retention.</li>
                <li>Nausea, vomiting or loss of appetite.</li>
                <li>Easy bruising or unusual bleeding due to reduced clotting ability.</li>
                <li>Confusion, forgetfulness or difficulty concentrating (a sign of hepatic encephalopathy).</li>
                <li>Dark-colored urine and pale or clay-colored stools.</li>
                <li>Abdominal discomfort or tenderness, particularly on the upper right side.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If symptoms appear suddenly or worsen quickly, immediate medical attention at a hospital equipped for emergency care is essential.
              </p>
            </div>


            {/* Section 5 — Complications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Complications Associated With Liver Failure
              </h2>


              <p className="text-gray-700 mb-4">
                Because liver failure affects the whole body, it&apos;s important to understand the complications that can arise so care can be planned proactively.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Hepatic encephalopathy: a buildup of toxins affecting brain function, leading to confusion, drowsiness or disorientation.</li>
                <li>Ascites: fluid accumulation in the abdomen, which may require dietary salt restriction and close monitoring.</li>
                <li>Coagulopathy: reduced ability of the blood to clot properly, increasing the risk of bleeding or bruising.</li>
                <li>Infections: weakened immunity makes patients more susceptible to infections that need prompt attention.</li>
                <li>Kidney complications: advanced liver failure can sometimes affect kidney function as well, requiring integrated monitoring.</li>
                <li>Nutritional decline: poor appetite and impaired digestion often lead to muscle weakness and low energy over time.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Given how varied these complications can be, every patient at Balprada is assessed individually, with the Ayurvedic support plan shaped around their specific symptoms and current medical status.
              </p>
            </div>


            {/* Section 6 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Understanding of Liver Health
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda views the liver (Yakrit) as a vital organ closely connected with Pitta dosha, digestive fire (Agni) and blood formation (Rakta Dhatu).</li>
                <li>Liver-related conditions are traditionally described under disorders affecting Yakrit and associated digestive functions.</li>
                <li>Aggravated Pitta dosha is traditionally linked with liver heat, inflammation and disturbed detoxification processes.</li>
                <li>Weakened Agni (digestive fire) is considered a contributing factor in the gradual accumulation of toxins (Ama) that place stress on the liver over time.</li>
                <li>Ayurvedic care traditionally focuses on balancing Pitta, strengthening digestion, and supporting liver tissue through diet, herbs and disciplined routine.</li>
                <li>The Ayurvedic approach considers the whole person — diet, daily habits, mental state and physical symptoms — rather than treating a single isolated concern.</li>
              </ul>
            </div>


            {/* Section 7 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Ayurvedic Treatment Approach for Liver Failure
              </h2>


              <p className="text-gray-700 mb-6">
                At Balprada, Ayurvedic care for liver failure is planned as supportive, long-term management for suitable patients, always alongside their existing medical treatment and never as a replacement for emergency or hospital-based care.
              </p>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Consultation and Assessment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Our doctors carefully review the patient&apos;s medical history, current reports, ongoing medication and the stage or type of liver failure.</li>
                    <li>Assessment includes evaluating digestion, appetite, energy levels, sleep patterns and any associated complications.</li>
                    <li>Existing diagnostic reports are reviewed before suggesting any Ayurvedic support plan, ensuring the care is safe and appropriate.</li>
                    <li>A personalized plan is prepared based on the individual&apos;s condition, rather than a generic protocol.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. In-House Ayurvedic Herbal Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal medicines to maintain consistent quality, purity and dosage.</li>
                    <li>Formulations are selected based on the patient&apos;s constitution (Prakriti), current symptoms and the stage of their condition.</li>
                    <li>Herbal support is typically aimed at easing digestive discomfort, supporting appetite and helping manage associated weakness.</li>
                    <li>All medicines are administered under the close supervision of experienced vaidyas and are monitored regularly.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Diet and Nutrition Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A liver-friendly, easily digestible diet plan is recommended, tailored to the patient&apos;s condition and tolerance.</li>
                    <li>Emphasis is placed on light, warm, freshly prepared food that is gentle on digestion.</li>
                    <li>Salt intake is often restricted where fluid retention or swelling is present, as advised by the treating doctor.</li>
                    <li>Guidance is provided on suitable protein sources, hydration and portion sizes based on the stage of liver function.</li>
                    <li>Complete avoidance of alcohol and other liver-stressing substances is always emphasized as non-negotiable.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Supportive Therapies and Panchakarma
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Gentle, carefully selected supportive therapies may be considered for suitable patients, based on their overall strength and stability.</li>
                    <li>Intensive Panchakarma procedures are approached with caution and are recommended only after thorough evaluation, since many liver failure patients require a gentler approach.</li>
                    <li>The focus remains on comfort, symptom relief and supporting the body&apos;s remaining natural functions.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Yoga, Naturopathy and Lifestyle Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Gentle yoga and breathing exercises are recommended where tolerated, to support relaxation and general well-being.</li>
                    <li>Naturopathy-based routines emphasize rest, light movement and stress reduction suited to the patient&apos;s current strength.</li>
                    <li>A disciplined daily routine (Dinacharya), including consistent meal timing and adequate rest, is encouraged.</li>
                    <li>Emotional and mental well-being is supported through meditation and the calm, service-oriented ashram environment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Regular Monitoring and Follow-Up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Ongoing follow-up consultations help the team track the patient&apos;s progress and adjust care as needed.</li>
                    <li>Patients are encouraged to continue their prescribed medical tests and share updated reports regularly.</li>
                    <li>Long-term discipline in diet, medicine and daily routine is emphasized as central to sustained supportive care.</li>
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
                Several traditional herbs are associated with liver and digestive wellness in Ayurveda. These are used only after proper evaluation and strictly under medical guidance:
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bhumyamalaki (Phyllanthus niruri) – traditionally used to support healthy liver function.</li>
                <li>Kutki (Picrorhiza kurroa) – valued in classical texts for its role in liver and digestive support.</li>
                <li>Kalmegh (Andrographis paniculata) – known for its bitter, Pitta-balancing properties.</li>
                <li>Punarnava (Boerhavia diffusa) – often used traditionally to help manage fluid retention.</li>
                <li>Guduchi (Tinospora cordifolia) – associated with supporting immunity and overall vitality.</li>
                <li>Bhringraj (Eclipta alba) – referenced in classical formulations related to liver wellness.</li>
                <li>Makoy (Solanum nigrum) – traditionally noted for digestive and liver support.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Herbal recommendations vary from patient to patient. Given the seriousness of liver failure, no herb should ever be self-administered without direct evaluation and guidance from a qualified vaidya.
              </p>
            </div>


            {/* Section 9 — Diet and Daily Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Choose freshly cooked, warm, light meals instead of heavy, fried or processed food.</li>
                <li>Include easily digestible foods such as moong dal, soft khichdi, boiled vegetables and suitable seasonal fruits.</li>
                <li>Reduce salt intake where swelling or fluid retention is present, as guided by the treating doctor.</li>
                <li>Avoid alcohol completely, along with tobacco, self-prescribed supplements and unnecessary medications.</li>
                <li>Maintain adequate but appropriate hydration, following the doctor&apos;s specific advice for fluid intake.</li>
                <li>Keep fixed meal timings and avoid heavy, late-night eating.</li>
                <li>Prioritize rest, quality sleep and stress management as essential parts of daily care.</li>
                <li>Never self-medicate, including with over-the-counter painkillers, without checking with a doctor first.</li>
              </ul>
            </div>


            {/* Section 10 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada for Ayurvedic Liver Care?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of trusted experience in Ayurvedic treatment and patient-centered care.</li>
                <li>In-house preparation of herbal medicines to maintain quality and consistency across every batch.</li>
                <li>Experienced doctors who evaluate each case individually before recommending any Ayurvedic support plan.</li>
                <li>Peaceful, ashram-based healing environment that supports rest, discipline and steady recovery of strength.</li>
                <li>Integrated facilities including Panchakarma, yoga, naturopathy, meditation, physiotherapy and an in-house pathology lab.</li>
                <li>A structured care process — from consultation to follow-up — that keeps patients supported at every stage.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>Two accessible branches in Moradabad, Uttar Pradesh, with daily OPD timings.</li>
                <li>A calm, service-first approach (seva sankalp) rooted in the legacy of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Continued follow-up guidance even after patients return home, supporting long-term discipline.</li>
              </ul>
            </div>




            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for liver failure can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day therapy schedules.
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