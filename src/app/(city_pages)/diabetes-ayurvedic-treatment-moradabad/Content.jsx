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
      q: "Can Ayurveda cure diabetes?",
      a: "Ayurveda offers supportive care for diet and lifestyle factors affecting blood sugar, alongside prescribed medical treatment; it is not a substitute for medical care.",
    },
    {
      q: "Should I stop my diabetes medication or insulin to try Ayurvedic care?",
      a: "No, supportive care should always be discussed with your doctor and used alongside, not instead of, prescribed treatment.",
    },
    {
      q: "What diet is recommended for diabetes management?",
      a: "A diet lower in refined sugar and processed carbohydrates, with more fiber-rich foods, is generally advised, personalized to the individual.",
    },
    {
      q: "Can stress affect blood sugar levels?",
      a: "Yes, chronic stress can influence blood sugar regulation, which is why stress management is part of supportive care.",
    },
    {
      q: "Does Balprada offer a free consultation?",
      a: "Yes, a free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Can diabetes and kidney health be managed together?",
      a: "Yes, since diabetes can affect kidney function over time, both are often considered together in supportive care.",
    },
    {
      q: "Do I need to visit the hospital in person?",
      a: "Yes, an in-person consultation helps the doctor understand your condition accurately, with follow-up support by phone or WhatsApp.",
    },
    {
      q: "Should I continue monitoring my blood sugar during Ayurvedic care?",
      a: "Yes, regular blood sugar monitoring should continue alongside any supportive Ayurvedic guidance.",
    },
    {
      q: "Are the herbal medicines safe to take with diabetes medication?",
      a: "This is assessed individually during consultation, considering your current medication and health history.",
    },
    {
      q: "How do I book an appointment for diabetes supportive care?",
      a: "You can call, WhatsApp, or email the hospital, or visit during the free OPD offered on the 15th of every month.",
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
                Diabetes Ayurvedic Treatment in Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4">
                Diabetes is a long-term condition that requires consistent monitoring, disciplined lifestyle habits, and ongoing medical guidance. At Balprada Ayurvedic Hospital &amp; Research Center, patients in Moradabad receive Ayurvedic support for diabetes management through personalized diet planning, herbal guidance, and routine correction, working alongside conventional diabetes care rather than replacing it.
              </p>
            </div>


            {/* Section 2 — Understanding Diabetes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Diabetes
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Diabetes is a condition in which the body has difficulty regulating blood sugar levels, either due to insufficient insulin production or the body&apos;s reduced response to insulin.</li>
                <li>Type 2 diabetes is the most common form and is closely linked to lifestyle factors such as diet, physical activity, and body weight.</li>
                <li>Type 1 diabetes involves the body producing little or no insulin and typically requires lifelong insulin therapy.</li>
                <li>Left unmanaged, diabetes can affect multiple organs over time, including the kidneys, eyes, nerves, and heart.</li>
                <li>Blood sugar levels can fluctuate based on diet, stress, activity, and medication timing, making consistent monitoring important.</li>
                <li>Diabetes management is a long-term commitment rather than a condition addressed through a single treatment episode.</li>
                <li>Gestational diabetes, which can occur during pregnancy, is another form that requires careful monitoring and specific medical guidance.</li>
                <li>Understanding which type of diabetes a patient has is essential, since management approaches differ significantly between types.</li>
              </ul>
            </div>


            {/* Section 3 — Common Risk Factors for Diabetes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Risk Factors for Diabetes
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Excess body weight, particularly abdominal fat, which affects insulin sensitivity.</li>
                <li>Sedentary lifestyle with minimal regular physical activity.</li>
                <li>Family history of diabetes, which can increase individual risk.</li>
                <li>Poor dietary habits, including high intake of refined sugar and processed foods.</li>
                <li>Chronic stress, which can affect blood sugar regulation over time.</li>
                <li>Age-related changes that can reduce the body&apos;s insulin sensitivity.</li>
                <li>Underlying conditions such as high blood pressure or abnormal cholesterol levels, which often occur alongside diabetes.</li>
                <li>Certain hormonal conditions or long-term medication use that can affect blood sugar regulation.</li>
                <li>Limited access to regular health screening, which can delay early detection of rising blood sugar levels.</li>
              </ul>
            </div>


            {/* Section 4 — Common Symptoms of Diabetes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms of Diabetes
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Frequent urination, especially at night.</li>
                <li>Excessive thirst that does not improve with regular fluid intake.</li>
                <li>Unexplained fatigue and low energy levels.</li>
                <li>Blurred vision that may fluctuate with blood sugar changes.</li>
                <li>Slow healing of cuts and wounds.</li>
                <li>Unexplained weight loss, particularly relevant in type 1 diabetes.</li>
                <li>Tingling or numbness in the hands or feet, which may indicate nerve-related effects of long-term high blood sugar.</li>
              </ul>
            </div>


            {/* Section 5 — Why Consider Ayurveda Alongside Diabetes Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Consider Ayurveda Alongside Diabetes Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda approaches diabetes management through the lens of digestion, metabolism, and daily routine, referring to the condition broadly under the term Prameha in classical texts.</li>
                <li>Diet and lifestyle correction are considered central to supporting stable blood sugar levels over the long term.</li>
                <li>Herbal formulations used in Ayurvedic practice are traditionally associated with supporting healthy glucose metabolism.</li>
                <li>This approach is intended to complement conventional diabetes treatment, including prescribed medication or insulin, not replace it.</li>
                <li>Ayurvedic guidance can be particularly useful in addressing lifestyle contributors such as diet, weight, and stress that influence blood sugar control.</li>
                <li>Patients are always encouraged to continue monitoring their blood sugar and follow their prescribed medical treatment alongside any supportive Ayurvedic care.</li>
                <li>Many patients find that structured daily guidance helps them feel more consistent and confident in managing a condition that requires ongoing attention.</li>
              </ul>
            </div>


            {/* Section 6 — The Role of Daily Routine in Blood Sugar Balance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Role of Daily Routine in Blood Sugar Balance
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda places strong emphasis on Dinacharya, or daily routine, as a foundation for stable metabolic health.</li>
                <li>Consistent wake-up times, meal timings, and sleep schedules are considered important for supporting steady blood sugar levels.</li>
                <li>Irregular eating patterns and skipped meals can contribute to blood sugar fluctuations, making routine discipline especially relevant for diabetes management.</li>
                <li>Seasonal dietary adjustments, in line with traditional Ayurvedic principles, may also be considered as part of a long-term management plan.</li>
                <li>Balprada encourages patients to view daily routine correction as an ongoing practice rather than a temporary adjustment.</li>
              </ul>
            </div>


            {/* Section 7 — Balprada's Approach to Diabetes Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Approach to Diabetes Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed Consultation:</strong> The doctor reviews the patient&apos;s blood sugar history, current medications, and specific concerns before suggesting a supportive care plan.</li>
                <li><strong>Personalized Diet Planning:</strong> Diet guidance is tailored to the individual, considering their current blood sugar levels and any related health conditions.</li>
                <li><strong>Lifestyle Correction:</strong> Daily routine, activity levels, and sleep patterns are addressed as part of a comprehensive approach to blood sugar management.</li>
                <li><strong>Pathology Support:</strong> Balprada&apos;s in-house pathology lab helps track relevant blood sugar and related health parameters over time.</li>
                <li><strong>Coordination Awareness:</strong> Care is planned with an understanding that patients are often already on prescribed medication or insulin therapy.</li>
                <li><strong>Regular Follow-Up:</strong> Ongoing follow-up visits allow the team to observe progress and adjust guidance as needed.</li>
              </ul>
            </div>


            {/* Section 8 — Ayurvedic Herbs Traditionally Associated with Diabetes Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Herbs Traditionally Associated with Diabetes Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Karela (Bitter Gourd):</strong> Traditionally used in Ayurvedic and folk practices associated with blood sugar support.</li>
                <li><strong>Methi (Fenugreek Seeds):</strong> Commonly referenced for its traditional association with glucose metabolism support.</li>
                <li><strong>Jamun (Syzygium cumini):</strong> Widely used in traditional formulations associated with blood sugar balance.</li>
                <li><strong>Gudmar (Gymnema sylvestre):</strong> Referenced in classical Ayurveda for its traditional association with sugar craving and glucose support.</li>
                <li><strong>Neem (Azadirachta indica):</strong> Used traditionally for its broad supportive properties, including relevance to metabolic health.</li>
                <li>Balprada&apos;s in-house medicines are prepared under supervision, and the exact formulation for each patient is decided only after proper consultation and review of existing diabetes treatment.</li>
              </ul>
            </div>


            {/* Section 9 — Diet and Lifestyle Guidance for Diabetes Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Guidance for Diabetes Management
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Reduce intake of refined sugar, sweets, and processed carbohydrates.</li>
                <li>Include more fiber-rich foods such as whole grains, legumes, and fresh vegetables.</li>
                <li>Maintain regular meal timings to support stable blood sugar levels throughout the day.</li>
                <li>Engage in regular physical activity suited to individual fitness levels and any existing health conditions.</li>
                <li>Monitor portion sizes, particularly for carbohydrate-rich foods.</li>
                <li>Stay adequately hydrated with water rather than sugary beverages.</li>
                <li>Prioritize good quality sleep, as poor sleep can affect blood sugar regulation.</li>
                <li>Practice stress-reducing routines such as yoga or meditation, which can support more stable glucose levels.</li>
                <li>Track blood sugar readings consistently to understand how specific foods and activities affect your individual levels.</li>
              </ul>
            </div>


            {/* Section 10 — Facilities That Support Diabetes Care at Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities That Support Diabetes Care at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Yoga:</strong> Structured sessions supporting overall balance, activity, and stress reduction relevant to blood sugar management.</li>
                <li><strong>Naturopathy:</strong> Nature-based practices aligned with the body&apos;s overall metabolic wellness goals.</li>
                <li><strong>Meditation:</strong> Guided sessions to support stress reduction, which can positively influence blood sugar stability.</li>
                <li><strong>Pathology Lab:</strong> In-house testing support for blood sugar and related health parameters.</li>
                <li><strong>Organic Food:</strong> Diet planning supported by naturally grown food options relevant to diabetes-friendly eating.</li>
                <li><strong>Ashram Environment:</strong> A calm, disciplined setting that supports patients following a structured, long-term lifestyle correction plan.</li>
              </ul>
            </div>


            {/* Section 11 — Managing Related Conditions Alongside Diabetes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Managing Related Conditions Alongside Diabetes
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Blood pressure and cholesterol levels are often addressed together with diabetes, given their close interconnection.</li>
                <li>Weight management guidance considers overall metabolic health rather than blood sugar levels in isolation.</li>
                <li>Kidney health monitoring is relevant for long-term diabetes management, given the condition&apos;s potential impact on kidney function over time.</li>
                <li>Thyroid function may also be considered, as thyroid imbalances can influence blood sugar regulation.</li>
                <li>A connected approach to these related conditions supports more meaningful long-term outcomes than addressing diabetes in isolation.</li>
              </ul>
            </div>


            {/* Section 12 — Important Considerations for Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Important Considerations for Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurvedic supportive care should always be discussed with the patient&apos;s treating doctor to avoid any interactions with prescribed diabetes medication or insulin.</li>
                <li>Balprada&apos;s role is to support lifestyle correction and overall wellbeing, not to replace prescribed diabetes management.</li>
                <li>Patients should never discontinue or reduce prescribed medication or insulin without consulting their treating doctor first.</li>
                <li>Regular blood sugar monitoring should continue alongside any supportive Ayurvedic guidance.</li>
                <li>Any sudden changes in blood sugar levels or new symptoms should be reported promptly to the patient&apos;s primary medical team.</li>
                <li>Patients traveling or changing daily routines should plan ahead to maintain consistency in medication timing, meals, and monitoring.</li>
              </ul>
            </div>


            {/* Section 13 — Why Choose Balprada Ayurvedic Hospital &amp; Research Center */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital &amp; Research Center
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Experienced doctors who take time to understand each patient&apos;s diabetes history and current treatment.</li>
                <li>In-house preparation of herbal medicines to maintain consistency and quality.</li>
                <li>A combination of consultation, medicine, diet guidance, yoga, and pathology support for a more complete care journey.</li>
                <li>Two accessible branches serving patients from Moradabad and surrounding areas.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>A calm ashram environment supporting patients pursuing disciplined, long-term lifestyle correction.</li>
              </ul>
            </div>


            {/* Section 14 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic supportive care for diabetes can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed review of blood sugar history, current medications, lifestyle patterns, and specific concerns, followed by a personalized supportive care plan. For patients traveling from outside Moradabad, the hospital also assists with planning follow-up support via phone or WhatsApp.
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