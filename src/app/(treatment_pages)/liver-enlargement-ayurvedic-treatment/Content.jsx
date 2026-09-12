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
      q: "Can Ayurveda help reduce an enlarged liver?",
      a: "Many patients see improvement with disciplined Ayurvedic care, diet correction and consistent herbal support, especially when the underlying cause is identified and addressed early.",
    },
    {
      q: "Is liver enlargement always a serious condition?",
      a: "Liver enlargement can range from mild to significant, depending on the cause. Proper diagnosis is essential to understand its severity and plan the right approach.",
    },
    {
      q: "How long does Ayurvedic treatment for liver enlargement usually take?",
      a: "Duration depends on the underlying cause, severity and the patient's overall health. Our doctors review progress at regular follow-up visits and adjust the plan as needed.",
    },
    {
      q: "What diet is recommended for liver enlargement?",
      a: "A light, easily digestible diet with fresh vegetables, whole grains and minimal fried or sugary food is generally recommended, along with complete avoidance of alcohol.",
    },
    {
      q: "Does Balprada offer free consultation for liver enlargement patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Can liver enlargement be detected without symptoms?",
      a: "Yes, mild liver enlargement is often found incidentally during an ultrasound or physical examination for an unrelated concern, which is why regular check-ups matter.",
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
                Liver Enlargement Ayurvedic Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Liver enlargement, medically known as hepatomegaly, occurs when the liver grows beyond its normal size, often signaling an underlying issue in liver function, digestion or blood-related health.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, we offer personalized Ayurvedic consultation, in-house herbal medicines, diet correction and disciplined lifestyle guidance to support liver health and help the body return to balance.</li>
                <li>With 35 years of experience in Ayurveda, an experienced team of vaidyas and a peaceful ashram-based environment, Balprada focuses on personalized, compassionate and consistent care for every patient.</li>
              </ul>
            </div>


            {/* Section 2 — What Is Liver Enlargement */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Liver Enlargement (Hepatomegaly)?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Liver enlargement is a condition where the liver becomes larger than its normal size, usually as a response to an underlying stress, infection or metabolic imbalance.</li>
                <li>The liver can be felt as swollen or tender below the right rib cage when significantly enlarged.</li>
                <li>Hepatomegaly is a sign of an underlying condition rather than a disease by itself, similar to how fever signals infection.</li>
                <li>It can range from mild enlargement detected only through imaging to noticeable swelling felt during a physical examination.</li>
                <li>Liver enlargement may develop gradually over months or appear more suddenly, depending on the underlying cause.</li>
                <li>Timely evaluation of the cause is essential, since the treatment approach depends heavily on what is driving the enlargement.</li>
                <li>With consistent care, many cases of liver enlargement respond well to diet correction, herbal support and lifestyle changes.</li>
              </ul>
            </div>


            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Liver Enlargement
              </h2>


              <p className="text-gray-700 mb-4">
                Identifying the underlying cause is the first step toward an effective, well-directed care plan.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Fatty liver disease, whether alcoholic or non-alcoholic in origin.</li>
                <li>Viral hepatitis (Hepatitis A, B, C or E) causing liver inflammation.</li>
                <li>Long-term or heavy alcohol consumption affecting liver tissue.</li>
                <li>Chronic liver conditions such as cirrhosis in advanced stages.</li>
                <li>Congestive heart failure, which can cause blood to back up into the liver.</li>
                <li>Metabolic disorders, including diabetes and high cholesterol.</li>
                <li>Infections, parasitic conditions or certain blood disorders affecting the liver.</li>
                <li>Rare genetic or storage disorders that lead to abnormal fat or protein accumulation in liver tissue.</li>
              </ul>
            </div>


            {/* Section 4 — Signs and Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs and Symptoms of Liver Enlargement
              </h2>


              <p className="text-gray-700 mb-4">
                Recognizing symptoms early allows for timely consultation and a more effective recovery process.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A feeling of fullness, heaviness or discomfort in the upper right abdomen.</li>
                <li>Mild to moderate pain or tenderness below the right rib cage.</li>
                <li>Persistent fatigue and reduced energy levels.</li>
                <li>Loss of appetite and occasional nausea.</li>
                <li>Bloating and sluggish digestion after meals.</li>
                <li>Unexplained weight changes, either gain or loss.</li>
                <li>Yellowish discoloration of skin or eyes in more advanced cases.</li>
                <li>Swelling in the abdomen or legs when associated with fluid retention.</li>
              </ul>
            </div>


            {/* Section 5 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Understanding of Liver Enlargement
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda describes conditions related to liver enlargement under &quot;Yakrit Vriddhi,&quot; which is traditionally linked to imbalance in Pitta and Kapha doshas along with weakened digestive fire (Agni).</li>
                <li>The liver (Yakrit) is considered central to digestion, metabolism and blood formation (Rakta Dhatu) in Ayurvedic physiology.</li>
                <li>Weak Agni is believed to allow undigested food to form Ama (toxins), which can accumulate in liver tissue and contribute to enlargement.</li>
                <li>Aggravated Pitta is traditionally associated with inflammation and heat-related liver disturbances, while excess Kapha relates to heaviness and sluggish metabolism.</li>
                <li>Ayurvedic care for Yakrit Vriddhi focuses on correcting the dosha imbalance driving the condition, along with reducing Ama and strengthening digestion.</li>
                <li>The approach considers diet, daily routine, physical activity and mental well-being together, rather than addressing the liver in isolation.</li>
              </ul>
            </div>


            {/* Section 6 — Associated Conditions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions Often Associated with Liver Enlargement
              </h2>


              <p className="text-gray-700 mb-4">
                Since liver enlargement is usually a sign of an underlying issue, it often appears alongside other related conditions that need to be considered during evaluation.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Fatty liver disease: one of the most common contributors, where excess fat accumulation causes the liver to swell.</li>
                <li>Splenomegaly: an enlarged spleen sometimes occurs together with liver enlargement, particularly in chronic liver conditions.</li>
                <li>Jaundice: yellowing of the skin and eyes may accompany liver enlargement when bile processing is also affected.</li>
                <li>Portal hypertension: increased pressure in liver blood vessels can develop in more advanced or long-standing cases.</li>
                <li>Digestive disturbances: bloating, indigestion and irregular bowel habits are commonly seen alongside liver enlargement.</li>
                <li>Metabolic syndrome: obesity, high blood sugar and abnormal cholesterol often coexist with liver enlargement, particularly when fatty liver is the underlying cause.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Because these associated conditions vary widely between patients, our doctors take a broader view of overall health, not just the liver alone, when planning a course of Ayurvedic care.
              </p>
            </div>


            {/* Section 7 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Ayurvedic Treatment Approach for Liver Enlargement
              </h2>


              <p className="text-gray-700 mb-6">
                At Balprada, Ayurvedic care for liver enlargement is planned around the patient&apos;s specific underlying cause, current symptoms and overall constitution.
              </p>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Consultation and Assessment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Our doctors carefully review the patient&apos;s history, symptoms, lifestyle habits and any existing diagnostic reports.</li>
                    <li>Assessment includes checking abdominal tenderness, digestion, appetite, energy levels and associated symptoms.</li>
                    <li>Ultrasound, blood test or liver function reports, where available, are reviewed to understand the underlying cause and severity.</li>
                    <li>A personalized care plan is created based on the patient&apos;s constitution (Prakriti) and the dominant dosha imbalance involved.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. In-House Ayurvedic Herbal Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal medicines to maintain consistent quality, purity and dosage.</li>
                    <li>Formulations are selected to balance the relevant doshas, support digestion and gently aid liver tissue recovery.</li>
                    <li>Herbal support is generally aimed at reducing inflammation-related discomfort, improving appetite and supporting metabolic function.</li>
                    <li>All medicines are administered under the close supervision of experienced vaidyas and adjusted through regular follow-up.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Diet and Nutrition Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A structured, liver-friendly diet is recommended to reduce unnecessary metabolic and digestive load.</li>
                    <li>Patients are guided toward light, warm, freshly cooked meals over fried, oily or heavily processed food.</li>
                    <li>Emphasis is placed on fiber-rich vegetables, whole grains and appropriately portioned meals.</li>
                    <li>Sugar, refined carbohydrates and sweetened beverages are typically minimized, especially where metabolic causes are involved.</li>
                    <li>Guidance on suitable meal timing and portion control is provided to support consistent digestion.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Panchakarma and Supportive Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Select Panchakarma-based procedures may be considered for suitable patients to support detoxification and reduce Ama accumulation.</li>
                    <li>Therapies are planned individually, based on the patient&apos;s strength, dosha balance and the underlying cause of enlargement.</li>
                    <li>Supportive therapies aim to ease discomfort, reduce heaviness and support the liver&apos;s natural recovery process.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Yoga, Naturopathy and Lifestyle Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Gentle yoga postures and breathing exercises are recommended to support digestion, circulation and overall vitality.</li>
                    <li>Naturopathy-based routines emphasize natural healing practices alongside diet and lifestyle correction.</li>
                    <li>A disciplined daily routine (Dinacharya), including consistent meal timing, activity and rest, is encouraged.</li>
                    <li>The calm, service-oriented ashram environment supports patients in building sustainable, long-term habits.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Regular Monitoring and Follow-Up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Follow-up consultations help track liver size, associated symptoms and overall recovery progress.</li>
                    <li>Patients are encouraged to repeat diagnostic tests periodically to monitor improvement.</li>
                    <li>Consistency in diet, medicine, activity and routine is emphasized as central to lasting liver health.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 8 — Commonly Used Herbs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Commonly Used Ayurvedic Herbs for Liver Enlargement Support
              </h2>


              <p className="text-gray-700 mb-4">
                Several traditional herbs are associated with liver and digestive wellness in Ayurvedic texts. These are used only after proper evaluation and under medical guidance:
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bhumyamalaki (Phyllanthus niruri) – traditionally used to support healthy liver function.</li>
                <li>Kutki (Picrorhiza kurroa) – valued for its traditional role in liver and digestive support.</li>
                <li>Punarnava (Boerhavia diffusa) – traditionally used to support digestion and healthy fluid balance.</li>
                <li>Kalmegh (Andrographis paniculata) – known for its bitter, Pitta-balancing properties.</li>
                <li>Guduchi (Tinospora cordifolia) – associated with supporting immunity, digestion and overall vitality.</li>
                <li>Guggul (Commiphora mukul) – classically associated with supporting healthy metabolism and reducing heaviness.</li>
                <li>Bhringraj (Eclipta alba) – referenced in classical formulations related to liver wellness.</li>
              </ul>
            </div>


            {/* Section 9 — Diet and Daily Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Favor light, warm, freshly cooked meals with plenty of vegetables and whole grains.</li>
                <li>Reduce or avoid fried food, refined sugar, bakery items and sweetened beverages.</li>
                <li>Include easily digestible foods such as moong dal, soft khichdi and boiled vegetables.</li>
                <li>Maintain fixed meal timings and avoid heavy, late-night eating.</li>
                <li>Stay adequately hydrated with warm water throughout the day.</li>
                <li>Build a consistent routine of walking or light exercise, as tolerated.</li>
                <li>Prioritize good quality sleep and stress management to support overall digestion and metabolism.</li>
                <li>Avoid alcohol entirely and limit self-medication or unnecessary supplements without medical advice.</li>
              </ul>
            </div>


            {/* Section 10 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada for Ayurvedic Liver Enlargement Care?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of trusted experience in Ayurvedic treatment and patient-centered care.</li>
                <li>In-house preparation of herbal medicines to maintain quality and consistency across every batch.</li>
                <li>Experienced doctors who evaluate each case individually before recommending a care plan.</li>
                <li>Peaceful, ashram-based healing environment that supports discipline, rest and steady recovery.</li>
                <li>Integrated facilities including Panchakarma, yoga, naturopathy, meditation, physiotherapy and an in-house pathology lab.</li>
                <li>A structured care process — from consultation to follow-up — that keeps patients supported at every stage.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>Two accessible branches in Moradabad, Uttar Pradesh, with daily OPD timings.</li>
                <li>A calm, service-first approach (seva sankalp) rooted in the legacy of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Continued follow-up guidance to help patients maintain progress well after their initial treatment.</li>
              </ul>
            </div>


            {/* Section 11 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for liver enlargement can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day therapy schedules.
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