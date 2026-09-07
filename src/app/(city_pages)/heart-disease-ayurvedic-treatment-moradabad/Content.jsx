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
      q: "Can Ayurveda cure heart disease?",
      a: "Ayurveda offers supportive care for lifestyle factors affecting heart health, alongside prescribed cardiac treatment; it is not a substitute for medical care.",
    },
    {
      q: "Should I stop my heart medication to try Ayurvedic care?",
      a: "No, supportive care should always be discussed with your cardiologist and used alongside, not instead of, prescribed treatment.",
    },
    {
      q: "What diet is recommended for heart health?",
      a: "A diet low in salt, fried food, and processed snacks, with more fresh vegetables, fruits, and whole grains, is generally advised.",
    },
    {
      q: "Can stress really affect heart health?",
      a: "Yes, chronic stress is closely linked to cardiovascular strain, which is why stress management is part of supportive care.",
    },
    {
      q: "Does Balprada offer a free consultation?",
      a: "Yes, a free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Can diabetes and heart health be managed together?",
      a: "Yes, since the two are closely connected, guidance often addresses both together for better overall outcomes.",
    },
    {
      q: "Do I need to visit the hospital in person?",
      a: "Yes, an in-person consultation helps the doctor understand your condition accurately, with follow-up support by phone or WhatsApp.",
    },
    {
      q: "What should I do if I experience chest pain?",
      a: "Seek immediate emergency medical attention. Supportive Ayurvedic care is not appropriate for acute cardiac emergencies.",
    },
    {
      q: "Are the herbal medicines safe to take with heart medication?",
      a: "This is assessed individually during consultation, considering your current medication and cardiac history.",
    },
    {
      q: "How do I book an appointment for heart-related supportive care?",
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
                Heart Disease Ayurvedic Treatment in Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4">
                Heart health is closely connected to daily habits, stress levels, and long-term lifestyle choices. At Balprada Ayurvedic Hospital &amp; Research Center, patients in Moradabad receive Ayurvedic support for heart-related concerns through personalized guidance on diet, routine, blood pressure management, and stress reduction, working alongside conventional cardiac care rather than replacing it.
              </p>
            </div>


            {/* Section 2 — Understanding Heart Disease */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Heart Disease
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Heart disease refers to a range of conditions affecting the heart&apos;s structure and function, including blocked arteries, irregular heart rhythm, and weakened heart muscle.</li>
                <li>It often develops gradually over years, influenced by lifestyle, genetics, and underlying conditions like diabetes or high blood pressure.</li>
                <li>Risk factors can build silently, making regular health checks important even without obvious symptoms.</li>
                <li>Heart disease remains one of the leading health concerns worldwide, closely linked to modern lifestyle patterns.</li>
                <li>Both prevention and long-term management play essential roles in maintaining heart health.</li>
                <li>Early attention to risk factors can meaningfully reduce the likelihood of serious cardiac events later in life.</li>
                <li>Heart disease can affect people differently based on age, gender, and existing health conditions, which is why individualized assessment matters.</li>
                <li>Understanding personal risk factors, rather than relying on general assumptions, is an important first step toward better heart health.</li>
              </ul>
            </div>


            {/* Section 3 — Common Risk Factors for Heart Disease */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Risk Factors for Heart Disease
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>High blood pressure that remains unmanaged over long periods.</li>
                <li>Elevated cholesterol levels affecting blood vessel health.</li>
                <li>Diabetes and insulin resistance, which place additional stress on the cardiovascular system.</li>
                <li>Obesity and excess body weight, particularly around the abdomen.</li>
                <li>Chronic stress and poor sleep patterns affecting overall cardiovascular function.</li>
                <li>Sedentary lifestyle with minimal physical activity.</li>
                <li>Smoking and excessive alcohol consumption.</li>
                <li>Family history of heart disease, which can increase individual risk.</li>
                <li>Air quality and environmental factors, which can contribute to overall cardiovascular stress over time.</li>
                <li>Age-related changes in blood vessels and heart muscle function that naturally increase risk over time.</li>
              </ul>
            </div>


            {/* Section 4 — Common Symptoms Linked to Heart Concerns */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms Linked to Heart Concerns
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Chest discomfort, tightness, or pain, especially during physical exertion.</li>
                <li>Shortness of breath during activity or even at rest in more serious cases.</li>
                <li>Unusual fatigue that does not match the level of activity performed.</li>
                <li>Irregular heartbeat, palpitations, or a fluttering sensation in the chest.</li>
                <li>Swelling in the legs, ankles, or feet due to fluid retention.</li>
                <li>Dizziness or lightheadedness, particularly during physical activity.</li>
                <li>Any severe or sudden chest pain should be treated as a medical emergency requiring immediate attention, not delayed for alternative care.</li>
              </ul>
            </div>


            {/* Section 5 — Why Consider Ayurveda Alongside Heart Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Consider Ayurveda Alongside Heart Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda approaches heart health through the lens of overall balance, including digestion, stress levels, and daily routine.</li>
                <li>Diet and lifestyle correction are considered central to supporting long-term cardiovascular wellness.</li>
                <li>Herbal formulations used in Ayurvedic practice are traditionally associated with supporting healthy circulation and stress balance.</li>
                <li>Ayurvedic guidance can complement conventional cardiac treatment by addressing contributing lifestyle factors such as diet, weight, and stress.</li>
                <li>This approach is intended to work alongside a cardiologist&apos;s care, not as a substitute for prescribed heart medication or emergency treatment.</li>
                <li>Patients are always encouraged to continue their prescribed cardiac treatment and inform their doctor about any supportive Ayurvedic care they pursue.</li>
                <li>Many patients find that combining medical treatment with structured lifestyle guidance helps them feel more actively involved in their own recovery.</li>
              </ul>
            </div>


            {/* Section 6 — Ayurveda's View of Preventive Heart Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurveda&apos;s View of Preventive Heart Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda places strong emphasis on prevention through daily routine (Dinacharya) and seasonal awareness (Ritucharya).</li>
                <li>Consistent sleep, meal timing, and activity patterns are considered foundational to maintaining balance in the body, including cardiovascular function.</li>
                <li>Prevention-focused guidance is especially relevant for individuals with a family history of heart disease or early warning signs like high blood pressure.</li>
                <li>This preventive approach is intended to reduce long-term risk factors rather than address an acute cardiac event, which always requires immediate medical care.</li>
                <li>Balprada encourages patients to view heart health as an ongoing, daily commitment rather than something addressed only after a diagnosis.</li>
              </ul>
            </div>


            {/* Section 7 — Balprada's Approach to Heart-Related Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Approach to Heart-Related Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed Consultation:</strong> The doctor reviews the patient&apos;s cardiac history, current medications, and specific concerns before suggesting a supportive care plan.</li>
                <li><strong>Personalized Guidance:</strong> Diet, routine, and lifestyle correction are tailored to the individual, considering their existing cardiac treatment.</li>
                <li><strong>Blood Pressure and Diabetes Support:</strong> Since these conditions closely affect heart health, guidance often addresses them together rather than in isolation.</li>
                <li><strong>Stress Management Support:</strong> Techniques for reducing stress are offered, recognizing the strong link between chronic stress and heart health.</li>
                <li><strong>Pathology Support:</strong> Balprada&apos;s in-house pathology lab helps track relevant health parameters to support ongoing monitoring.</li>
                <li><strong>Regular Follow-Up:</strong> Ongoing follow-up visits allow the team to observe progress and adjust guidance appropriately.</li>
              </ul>
            </div>


            {/* Section 8 — Ayurvedic Herbs Traditionally Associated with Heart Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Herbs Traditionally Associated with Heart Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Arjuna (Terminalia arjuna):</strong> Widely referenced in classical Ayurvedic texts for its traditional association with heart and circulatory support.</li>
                <li><strong>Guggul (Commiphora mukul):</strong> Traditionally used in formulations associated with supporting healthy cholesterol balance.</li>
                <li><strong>Ashwagandha (Withania somnifera):</strong> Commonly used for stress support, which is closely linked to overall cardiovascular wellbeing.</li>
                <li><strong>Punarnava (Boerhavia diffusa):</strong> Referenced for supporting fluid balance, which can be relevant in certain heart-related concerns.</li>
                <li><strong>Brahmi (Bacopa monnieri):</strong> Traditionally associated with calming the nervous system and supporting stress resilience.</li>
                <li>Balprada&apos;s in-house medicines are prepared under supervision, and the exact formulation for each patient is decided only after proper consultation and review of existing cardiac treatment.</li>
              </ul>
            </div>


            {/* Section 9 — Diet and Lifestyle Guidance for Heart Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Guidance for Heart Health
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Reduce intake of excess salt, fried foods, and processed snacks that can affect blood pressure and cholesterol.</li>
                <li>Include more fresh vegetables, fruits, and whole grains as part of a balanced daily diet.</li>
                <li>Maintain regular meal timings to support digestion and overall metabolic balance.</li>
                <li>Engage in regular, doctor-approved physical activity suited to individual fitness levels and any existing cardiac condition.</li>
                <li>Prioritize good quality sleep, as poor sleep is closely linked to cardiovascular strain.</li>
                <li>Practice stress-reducing routines such as gentle yoga, breathing exercises, or meditation, where suitable.</li>
                <li>Limit alcohol consumption and avoid smoking entirely.</li>
                <li>Maintain a healthy body weight through sustainable, gradual lifestyle changes rather than extreme measures.</li>
                <li>Keep track of routine health parameters, such as blood pressure and cholesterol, through regular checks rather than only during symptomatic periods.</li>
              </ul>
            </div>


            {/* Section 10 — Facilities That Support Heart-Related Care at Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities That Support Heart-Related Care at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Yoga:</strong> Structured sessions that support balance across body, breath, and mind, relevant to stress and lifestyle management.</li>
                <li><strong>Meditation:</strong> Guided sessions to support emotional steadiness and reduce stress-related strain on the heart.</li>
                <li><strong>Naturopathy:</strong> Nature-based practices aligned with the body&apos;s overall wellness goals.</li>
                <li><strong>Pathology Lab:</strong> In-house testing support for relevant blood parameters linked to heart health monitoring.</li>
                <li><strong>Organic Food:</strong> Diet planning supported by naturally grown food options as part of the overall care approach.</li>
                <li><strong>Ashram Environment:</strong> A calm, disciplined setting that supports patients following a structured, long-term lifestyle correction plan.</li>
              </ul>
            </div>


            {/* Section 11 — Managing Related Conditions That Affect Heart Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Managing Related Conditions That Affect Heart Health
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Diabetes management is often addressed alongside heart-related guidance, given the close connection between the two.</li>
                <li>Blood pressure monitoring and lifestyle correction are emphasized as part of a comprehensive supportive care plan.</li>
                <li>Weight management guidance considers the patient&apos;s overall metabolic health, not just cardiovascular risk alone.</li>
                <li>Thyroid imbalances, when present, are also considered, since they can influence heart rate and overall cardiovascular function.</li>
                <li>A connected approach to these related conditions is intended to support more meaningful long-term outcomes than addressing heart health in isolation.</li>
              </ul>
            </div>


            {/* Section 12 — Important Considerations for Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Important Considerations for Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurvedic supportive care should always be discussed with the patient&apos;s treating cardiologist to avoid any interactions with prescribed medication.</li>
                <li>Balprada&apos;s role is to support lifestyle correction and overall wellbeing, not to diagnose or treat acute cardiac emergencies.</li>
                <li>Patients should never discontinue or delay prescribed heart medication in favor of supportive care alone.</li>
                <li>Any new or worsening symptoms should be reported promptly to the patient&apos;s primary medical team.</li>
                <li>Supportive Ayurvedic care works best as a complement to, not a substitute for, evidence-based cardiac treatment.</li>
              </ul>
            </div>


            {/* Section 13 — Why Choose Balprada Ayurvedic Hospital &amp; Research Center */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital &amp; Research Center
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Experienced doctors who take time to understand each patient&apos;s cardiac history and current treatment.</li>
                <li>In-house preparation of herbal medicines to maintain consistency and quality.</li>
                <li>A combination of consultation, medicine, diet guidance, yoga, and stress support for a more complete care journey.</li>
                <li>Two accessible branches serving patients from Moradabad and surrounding areas.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>A calm ashram environment supporting patients pursuing disciplined, long-term lifestyle correction.</li>
              </ul>
            </div>


            


            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic supportive care for heart disease can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed review of cardiac history, current medications, lifestyle patterns, and specific concerns, followed by a personalized supportive care plan. For patients traveling from outside Moradabad, the hospital also assists with planning follow-up support via phone or WhatsApp.
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