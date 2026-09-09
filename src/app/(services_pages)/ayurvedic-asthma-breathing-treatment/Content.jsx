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
      q: "Can Ayurveda cure asthma completely?",
      a: "Ayurveda focuses on reducing triggers, supporting respiratory strength, and managing symptoms; asthma is a variable, long-term condition and should continue to be monitored by your physician.",
    },
    {
      q: "Can I stop using my inhaler once I start Ayurvedic treatment?",
      a: "No, prescribed inhalers or rescue medication should only be adjusted by your treating doctor, never stopped independently.",
    },
    {
      q: "Is Panchakarma safe during an active asthma flare-up?",
      a: "No, most Panchakarma procedures are recommended once the patient is stable; intensity and suitability are always assessed individually.",
    },
    {
      q: "How long does Ayurvedic treatment for asthma usually take to show benefit?",
      a: "Timelines vary by patient and severity; the treating Vaidya provides a realistic estimate after the initial assessment and monitors progress at follow-up visits.",
    },
    {
      q: "Are the herbal medicines prepared at Balprada itself?",
      a: "Yes, Balprada prepares its own in-house herbal medicines as part of its long-standing Ayurvedic Chikitsalaya tradition.",
    },
    {
      q: "Is yoga safe for asthma patients?",
      a: "Yes, when guided and adapted to the patient's current condition; certain vigorous breathing techniques are introduced only once symptoms are stable.",
    },
    {
      q: "How do I book a consultation at Balprada?",
      a: "You can call, WhatsApp, or visit either branch during consultation hours, or use the free OPD available on the 15th of every month.",
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
                Ayurvedic Asthma and Breathing Treatment at Balprada Ayurvedic Hospital
              </h1>


              <p className="text-gray-700 mb-4">
                Breathing difficulty, recurring wheeze, and chronic cough can quietly limit daily life — a walk that leaves you gasping, a change of season that triggers weeks of discomfort, disturbed sleep from nighttime breathlessness. At Balprada Ayurvedic Hospital &amp; Research Center, our Ayurvedic approach to asthma and breathing concerns is built on the same seva-rooted, personalised care philosophy that has guided the ashram-based clinic since Sw. Vaidya Vijay Pal Singh Ji founded it in 1991 — combining herbal medicine, Panchakarma, yoga, and disciplined daily routine to support respiratory health.
              </p>
            </div>


            {/* Section 2 — Understanding Asthma and Breathing Disorders in Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Asthma and Breathing Disorders in Ayurveda
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Asthma and related breathing disorders are classified under Swasa Roga in classical Ayurvedic texts, with Tamaka Swasa being the type most closely correlated with bronchial asthma.</li>
                <li>The condition is understood as a Vata-Kapha dominant disorder affecting Pranvaha Srotas, the channels responsible for the circulation of breath and vital energy through the body.</li>
                <li>Accumulated Kapha in the respiratory passages, combined with aggravated Vata causing spasmodic constriction, is described as the core mechanism behind recurring breathlessness and wheeze.</li>
                <li>Contributing factors commonly identified include exposure to cold, dust, and damp environments, irregular eating habits, suppressed natural urges, and disturbed digestion (Agni Mandya).</li>
                <li>Seasonal changes — particularly the transition into winter and the monsoon — are traditionally recognised as periods when Swasa Roga symptoms tend to flare more frequently.</li>
              </ul>
            </div>


            {/* Section 3 — An Important Note Before Starting Any Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                An Important Note Before Starting Any Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Asthma can be a serious, occasionally life-threatening condition; a rescue inhaler or emergency medication prescribed by your doctor should always be kept accessible and should never be discontinued without your treating physician's explicit guidance.</li>
                <li>Ayurvedic care at Balprada is intended to work alongside your pulmonologist or physician's treatment plan, supporting overall respiratory health and reducing the frequency of triggers rather than replacing prescribed emergency medication.</li>
                <li>Patients on long-term inhaled steroids or bronchodilators should continue this medication as prescribed and keep their treating doctor informed of any Ayurvedic therapy being pursued in parallel.</li>
                <li>Any sudden, severe breathing difficulty, bluish discolouration of lips or fingertips, or inability to speak in full sentences requires immediate emergency medical attention and should never be managed by waiting for herbal treatment to take effect.</li>
              </ul>
            </div>


            {/* Section 4 — Breathing Conditions We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Breathing Conditions We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bronchial asthma, including allergic and seasonal patterns</li>
                <li>Chronic bronchitis and recurring respiratory infections</li>
                <li>Persistent dry or productive cough linked to Kapha accumulation</li>
                <li>Breathlessness on exertion, once cardiac causes have been ruled out by a physician</li>
                <li>Wheezing associated with dust, pollen, or seasonal triggers</li>
                <li>Sinus-related congestion contributing to breathing discomfort</li>
                <li>General respiratory weakness and reduced stamina, particularly in older patients</li>
                <li>Post-viral or post-infection respiratory recovery support, alongside medical clearance</li>
              </ul>
            </div>


            {/* Section 5 — Our Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Treatment Approach
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Assessment and Trigger Identification
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every consultation at Balprada begins with a review of the patient's breathing history, frequency of episodes, known triggers, and any existing pulmonology reports or prescribed medication.</li>
                    <li>The patient's Prakriti (constitution) and current dosha imbalance are assessed to understand the specific pattern behind their symptoms.</li>
                    <li>Environmental and dietary triggers — dust exposure, cold food and drink, irregular meal timing — are discussed in detail, since identifying and reducing these is central to Ayurvedic management.</li>
                    <li>Reports and medication from the patient's physician or pulmonologist are reviewed so the Ayurvedic plan is coordinated with existing medical care rather than working against it.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Personalised Herbal Medicine
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal formulations in-house, selected based on the patient's specific dosha pattern, severity, and response over time.</li>
                    <li>Classical herbs commonly referenced in Swasa Roga management include Vasaka, Pushkarmool, Kantakari, and Sitopaladi Churna, chosen for their traditional association with respiratory support.</li>
                    <li>Formulations are adjusted seasonally, since Ayurvedic protocols typically differ between winter aggravation and other periods of the year.</li>
                    <li>Dosage and duration are reviewed at follow-up visits, and patients are guided not to adjust their herbal medicine independently between consultations.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Panchakarma and Detoxification Support
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Selected Panchakarma procedures may be recommended to help reduce Kapha accumulation in the respiratory tract, chosen based on the patient's overall strength and suitability.</li>
                    <li>Swedana (medicated steam therapy) is commonly used to help loosen congestion and ease breathing discomfort.</li>
                    <li>Vamana (therapeutic emesis), a classical Kapha-clearing procedure, may be considered for select patients after careful assessment, and is only performed when the patient is confirmed to be medically fit for it.</li>
                    <li>All Panchakarma procedures at Balprada are planned according to individual assessment, with intensity adjusted for patients who are frail, elderly, or currently symptomatic.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Yoga, Pranayama, and Breath Work
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Yoga at Balprada is used specifically to build breath capacity, chest mobility, and overall respiratory discipline, adapted to each patient's current fitness and symptom severity.</li>
                    <li>Pranayama techniques such as Anulom Vilom (alternate nostril breathing) and Bhramari are commonly introduced for their traditional association with calming the breath and reducing Vata aggravation.</li>
                    <li>More vigorous breathing techniques are introduced gradually and only once the patient's condition is stable, since certain practices are not suitable during an acute flare-up.</li>
                    <li>Guided meditation is included where relevant, given the well-recognised link between anxiety, stress, and breathing pattern.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Diet and Lifestyle Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A Kapha-Vata pacifying diet is generally recommended, with guidance to reduce cold, heavy, and excessively oily foods that are traditionally associated with aggravating respiratory Kapha.</li>
                    <li>Warm fluids, appropriately spiced meals, and consistent meal timing are emphasised to support digestion, which Ayurveda considers closely linked to respiratory health.</li>
                    <li>Patients are guided on practical ways to reduce dust and damp exposure at home, alongside dietary correction.</li>
                    <li>Diet charts are revised across seasons, in line with Ritucharya (seasonal routine) principles that Balprada applies across its treatment plans.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 6 — Why Patients Choose Balprada for Respiratory Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Respiratory Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Balprada has carried forward its founder's seva-rooted approach to Ayurvedic care for over three decades, combining consultation, in-house herbal medicine, and disciplined routine into a single treatment journey.</li>
                <li>Treatment plans are built around the patient's specific dosha pattern and trigger history rather than a single standard protocol.</li>
                <li>The ashram-based clinic environment is designed to support calm, unhurried recovery, which many patients find particularly valuable when managing a condition closely tied to stress and anxiety.</li>
                <li>Supportive facilities — Panchakarma, Yoga, Naturopathy, Meditation, and Physiotherapy — are available under one roof to build a complete care plan around the patient's respiratory health.</li>
                <li>Balprada's in-house Pathology Lab supports relevant testing where needed, helping the treating Vaidya track a patient's progress with objective data alongside symptom review.</li>
                <li>Patients are encouraged to continue any medication prescribed by their physician or pulmonologist, and the team is clear about realistic expectations rather than promising rapid or guaranteed relief.</li>
              </ul>
            </div>


            {/* Section 7 — What to Expect: The Care Journey at Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect: The Care Journey at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Step 1 – Consultation:</strong> The doctor reviews the patient's breathing history, current medication, known triggers, and any existing medical reports.</li>
                <li><strong>Step 2 – Personalised Plan:</strong> Ayurvedic medicine, diet guidance, and lifestyle correction are planned based on the patient's dosha pattern and condition severity.</li>
                <li><strong>Step 3 – Supportive Facilities:</strong> Yoga, Panchakarma, naturopathy, or physiotherapy may be included as part of the wider care plan, based on individual assessment.</li>
                <li><strong>Step 4 – Follow-Up:</strong> Regular follow-up visits allow the team to observe progress, adjust guidance, and support long-term discipline in managing triggers and routine.</li>
              </ul>
            </div>


            {/* Section 8 — Signs That Need Immediate Medical Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That Need Immediate Medical Attention
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Severe difficulty breathing or an inability to complete full sentences without gasping for air</li>
                <li>Bluish discolouration of the lips, face, or fingertips</li>
                <li>Breathlessness that does not respond to a prescribed rescue inhaler</li>
                <li>Rapidly worsening wheeze or chest tightness accompanied by confusion or extreme fatigue</li>
                <li>A first-time severe breathing episode with no prior diagnosis</li>
                <li>Any of these signs require emergency medical care immediately — Ayurvedic consultation should be sought only once the patient is medically stable.</li>
              </ul>
            </div>


            {/* Section 9 — Lifestyle Guidance for Better Respiratory Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Guidance for Better Respiratory Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep prescribed rescue medication accessible at all times and use it exactly as directed by your physician.</li>
                <li>Reduce exposure to known personal triggers such as dust, smoke, and damp environments where possible.</li>
                <li>Maintain warm, regular meals and avoid excessive cold food and drink, particularly during seasonal transitions.</li>
                <li>Practise gentle, physician-approved breathing exercises consistently, rather than only during a flare-up.</li>
                <li>Prioritise consistent sleep and stress management, given the recognised link between anxiety and breathing pattern.</li>
                <li>Keep your pulmonologist or physician informed about any Ayurvedic treatment you are undergoing at Balprada.</li>
              </ul>
            </div>


            {/* Section 10 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan.
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


            {/* Section 11 — FAQs */}
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