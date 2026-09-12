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
      q: "Can fatty liver be reversed with Ayurvedic treatment?",
      a: "Early-stage fatty liver often responds well to disciplined Ayurvedic care, diet correction and lifestyle changes. Our doctors assess each case individually to guide realistic expectations and progress.",
    },
    {
      q: "How long does Ayurvedic treatment for fatty liver usually take?",
      a: "Duration depends on the stage of fatty liver, the patient's lifestyle discipline and overall health. Progress is reviewed at regular follow-up visits.",
    },
    {
      q: "Is weight loss necessary to treat fatty liver?",
      a: "Gradual, sustainable weight loss often supports fatty liver recovery, especially in overweight patients. Our team guides an appropriate pace suited to each individual.",
    },
    {
      q: "What foods should be avoided with fatty liver?",
      a: "Fried food, refined sugar, processed snacks and sweetened beverages are generally best avoided, along with alcohol.",
    },
    {
      q: "Does Balprada offer free consultation for fatty liver patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Can fatty liver be prevented?",
      a: "A balanced diet, regular physical activity, limited alcohol intake and routine health check-ups can help reduce the risk of developing fatty liver.",
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
                Fatty Liver Ayurvedic Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Fatty liver disease occurs when excess fat builds up in liver cells, gradually affecting the liver&apos;s ability to function efficiently.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, we offer personalized Ayurvedic consultation, in-house herbal medicines, diet correction and lifestyle guidance to help support liver metabolism and reverse the early stages of fatty liver naturally.</li>
                <li>With 35 years of experience in Ayurveda, an experienced team of vaidyas and a peaceful ashram-based environment, Balprada focuses on disciplined, personalized and compassionate care for every patient.</li>
              </ul>
            </div>


            {/* Section 2 — What Is Fatty Liver Disease */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Fatty Liver Disease?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Fatty liver develops when fat accumulates in liver cells beyond normal levels, interfering with the liver&apos;s regular metabolic and detoxification work.</li>
                <li>A healthy liver contains a small amount of fat; fatty liver is diagnosed when fat exceeds 5–10% of the liver&apos;s weight.</li>
                <li>Fatty liver is broadly divided into alcoholic fatty liver disease and non-alcoholic fatty liver disease (NAFLD).</li>
                <li>NAFLD has become increasingly common due to sedentary lifestyles, poor diet and rising rates of obesity and diabetes.</li>
                <li>Fatty liver often develops silently, with many people unaware of the condition until it is found during a routine check-up.</li>
                <li>If left unmanaged over time, fatty liver can progress to inflammation (steatohepatitis), fibrosis and eventually more serious liver conditions.</li>
                <li>Early-stage fatty liver is generally considered manageable and even reversible with consistent diet, lifestyle and Ayurvedic support.</li>
              </ul>
            </div>


            {/* Section 3 — Common Causes and Risk Factors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes and Risk Factors
              </h2>


              <p className="text-gray-700 mb-4">
                Understanding what contributes to fatty liver helps guide a more effective and personalized care plan.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Obesity or being overweight, especially with excess fat around the abdomen.</li>
                <li>Insulin resistance, prediabetes or type 2 diabetes.</li>
                <li>High intake of refined sugar, processed food and unhealthy fats.</li>
                <li>Sedentary lifestyle with little to no regular physical activity.</li>
                <li>Long-term or heavy alcohol consumption.</li>
                <li>High cholesterol or triglyceride levels.</li>
                <li>Certain medications and rapid weight loss in some cases.</li>
                <li>Genetic and metabolic factors that increase individual susceptibility.</li>
              </ul>
            </div>


            {/* Section 4 — Signs and Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs and Symptoms of Fatty Liver
              </h2>


              <p className="text-gray-700 mb-4">
                Fatty liver often shows few or no symptoms in its early stages, which makes awareness and regular check-ups important.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Mild fatigue or a general feeling of low energy.</li>
                <li>Discomfort or a dull ache in the upper right side of the abdomen.</li>
                <li>Unexplained weight gain or difficulty losing weight.</li>
                <li>Bloating and sluggish digestion after meals.</li>
                <li>Mild weakness and reduced stamina during daily activities.</li>
                <li>In more advanced stages: jaundice, swelling or noticeable weight loss.</li>
                <li>Many cases are detected incidentally through routine blood tests or ultrasound scans.</li>
              </ul>
            </div>


            {/* Section 5 — Stages of Fatty Liver Disease */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Stages of Fatty Liver Disease
              </h2>


              <p className="text-gray-700 mb-4">
                Fatty liver typically progresses through recognizable stages, and understanding where a patient stands helps shape the right treatment intensity.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Simple fatty liver (Steatosis): fat builds up in liver cells with little to no inflammation; this stage is usually the most responsive to diet and lifestyle correction.</li>
                <li>Non-alcoholic steatohepatitis (NASH): fat accumulation is accompanied by inflammation, which can begin to damage liver cells if not managed.</li>
                <li>Fibrosis: ongoing inflammation leads to early scarring of liver tissue, though the liver can often still function reasonably well at this stage.</li>
                <li>Cirrhosis: long-term, unmanaged fatty liver can eventually progress to significant scarring, similar to cirrhosis from other causes.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Because outcomes differ significantly by stage, our doctors assess exactly where a patient&apos;s condition stands before recommending the intensity and pace of Ayurvedic care.
              </p>
            </div>


            {/* Section 6 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Understanding of Fatty Liver
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda views fatty liver as a condition closely connected to weakened digestive fire (Agni), accumulated toxins (Ama) and imbalance in Kapha and Medo Dhatu (fat tissue).</li>
                <li>The liver (Yakrit) plays a key role in metabolism, and Ayurveda links its efficient functioning to strong, balanced Agni.</li>
                <li>Weak digestion allows undigested food to convert into Ama, which can accumulate as excess fat and toxins in liver tissue.</li>
                <li>Aggravated Kapha dosha is traditionally associated with heaviness, sluggish metabolism and fat accumulation in the body.</li>
                <li>Ayurvedic care for fatty liver focuses on rekindling digestive fire, reducing Ama, and gently supporting the body&apos;s natural fat metabolism.</li>
                <li>The approach considers diet, physical activity, daily routine and mental well-being together, rather than treating the liver in isolation.</li>
              </ul>
            </div>


            {/* Section 7 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Ayurvedic Treatment Approach for Fatty Liver
              </h2>


              <p className="text-gray-700 mb-6">
                At Balprada, Ayurvedic care for fatty liver is designed as a structured, sustainable plan that supports the liver&apos;s natural ability to recover and function well.
              </p>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Consultation and Assessment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Our doctors review the patient&apos;s history, lifestyle habits, diet patterns and any existing diagnostic reports.</li>
                    <li>Assessment includes evaluating body weight, digestion, activity levels and metabolic risk factors such as sugar and cholesterol.</li>
                    <li>Ultrasound or blood test reports, if available, are reviewed to understand the stage and severity of fatty liver.</li>
                    <li>A personalized care plan is created for each patient, based on their constitution (Prakriti) and current condition.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. In-House Ayurvedic Herbal Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal medicines to maintain consistent quality, purity and dosage.</li>
                    <li>Formulations are selected to support digestion, balance Kapha and Pitta, and gently aid the liver&apos;s fat-metabolizing function.</li>
                    <li>Herbal support is generally aimed at improving appetite, digestion and overall metabolic efficiency.</li>
                    <li>All medicines are given under the supervision of experienced vaidyas and adjusted based on regular follow-up.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Diet and Nutrition Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A structured diet plan is recommended to reduce unnecessary fat and sugar intake while supporting healthy digestion.</li>
                    <li>Patients are guided toward light, warm, freshly cooked meals over fried, processed or heavily oily food.</li>
                    <li>Emphasis is placed on fiber-rich vegetables, whole grains and appropriately portioned meals.</li>
                    <li>Sugar, refined carbohydrates and sweetened beverages are typically minimized or eliminated from the daily diet.</li>
                    <li>Guidance on suitable snacking habits and meal timing is provided to support steady digestion throughout the day.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Physical Activity and Weight Management
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Patients are encouraged to build a consistent routine of physical activity suited to their fitness level.</li>
                    <li>Gradual, sustainable weight loss is emphasized over rapid or extreme approaches, which can sometimes stress the liver further.</li>
                    <li>Simple daily movement, walking and yoga-based exercises are recommended as a starting point for most patients.</li>
                    <li>Progress is monitored over time, with adjustments made to the activity plan as strength and stamina improve.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Panchakarma and Supportive Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Select Panchakarma-based procedures may be considered for suitable patients to support detoxification and metabolic balance.</li>
                    <li>Therapies are planned individually, based on the patient&apos;s strength, Kapha-Pitta balance and overall health status.</li>
                    <li>Supportive therapies aim to ease heaviness, improve digestion and support the body&apos;s natural cleansing processes.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Yoga, Naturopathy and Lifestyle Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Specific yoga postures and breathing practices are recommended to support digestion, metabolism and overall vitality.</li>
                    <li>Naturopathy-based routines emphasize natural healing practices alongside diet and activity correction.</li>
                    <li>A disciplined daily routine (Dinacharya), including consistent meal timing, sleep and activity, is encouraged.</li>
                    <li>The calm, service-oriented ashram environment supports patients in building lasting, sustainable habits.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Regular Monitoring and Follow-Up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Follow-up consultations help track weight, liver-related test results and overall lifestyle progress.</li>
                    <li>Patients are encouraged to repeat diagnostic tests periodically to monitor improvement in liver fat levels.</li>
                    <li>Consistency in diet, medicine, activity and routine is emphasized as the foundation of long-term liver health.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 8 — Commonly Used Herbs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Commonly Used Ayurvedic Herbs for Fatty Liver Support
              </h2>


              <p className="text-gray-700 mb-4">
                Several traditional herbs are associated with liver metabolism and digestive wellness in Ayurvedic texts. These are used only after proper evaluation and under medical guidance:
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bhumyamalaki (Phyllanthus niruri) – traditionally used to support healthy liver function.</li>
                <li>Kutki (Picrorhiza kurroa) – valued for its traditional role in liver and metabolic support.</li>
                <li>Guggul (Commiphora mukul) – classically associated with supporting healthy fat and cholesterol metabolism.</li>
                <li>Punarnava (Boerhavia diffusa) – traditionally used to support digestion and healthy fluid balance.</li>
                <li>Guduchi (Tinospora cordifolia) – associated with supporting immunity, digestion and overall vitality.</li>
                <li>Triphala – a classical combination traditionally used to support digestion and gentle detoxification.</li>
                <li>Kalmegh (Andrographis paniculata) – known for its bitter, Pitta-balancing properties supportive of liver health.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Herbal recommendations vary from patient to patient based on their constitution and the stage of fatty liver. Herbs should always be taken under a qualified vaidya&apos;s guidance for safe and effective results.
              </p>
            </div>


            {/* Section 9 — Diet and Daily Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Favor light, warm, freshly cooked meals with plenty of vegetables and whole grains.</li>
                <li>Reduce or avoid fried food, refined sugar, bakery items and sweetened beverages.</li>
                <li>Include foods that support digestion, such as light soups, steamed vegetables and moderate portions of lean protein.</li>
                <li>Maintain fixed meal timings and avoid skipping breakfast or eating heavy meals late at night.</li>
                <li>Stay adequately hydrated with warm water throughout the day.</li>
                <li>Build a consistent routine of walking or light exercise, gradually increasing activity as tolerated.</li>
                <li>Prioritize good quality sleep and stress management, as both influence metabolism and digestion.</li>
                <li>Avoid alcohol entirely and limit self-medication or unnecessary supplements without medical advice.</li>
              </ul>
            </div>


            {/* Section 10 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada for Ayurvedic Fatty Liver Care?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of trusted experience in Ayurvedic treatment and patient-centered care.</li>
                <li>In-house preparation of herbal medicines to maintain quality and consistency across every batch.</li>
                <li>Experienced doctors who evaluate each case individually before recommending a care plan.</li>
                <li>Peaceful, ashram-based healing environment that supports discipline, rest and sustainable lifestyle change.</li>
                <li>Integrated facilities including Panchakarma, yoga, naturopathy, meditation, physiotherapy and an in-house pathology lab.</li>
                <li>A structured care process — from consultation to follow-up — that keeps patients supported at every stage.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>Two accessible branches in Moradabad, Uttar Pradesh, with daily OPD timings.</li>
                <li>A calm, service-first approach (seva sankalp) rooted in the legacy of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Continued follow-up guidance to help patients maintain progress long after their initial treatment.</li>
              </ul>
            </div>


            {/* Section 11 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for fatty liver can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day therapy schedules.
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