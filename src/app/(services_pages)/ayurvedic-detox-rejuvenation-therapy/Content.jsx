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
      q: "How long does detox and rejuvenation therapy usually take?",
      a: "The duration depends on individual assessment and the therapies recommended, and is explained clearly by the doctor before the treatment begins.",
    },
    {
      q: "Is this therapy only for people who are unwell?",
      a: "No, many patients undergo this therapy purely for preventive wellness and to maintain long-term vitality, even without a specific illness.",
    },
    {
      q: "Is detox therapy safe for everyone?",
      a: "The suitability and intensity of the therapy are assessed individually based on the patient's health status, which is why a detailed consultation is required beforehand.",
    },
    {
      q: "What is the difference between detox and rejuvenation therapy?",
      a: "Detox (Shodhana) focuses on clearing accumulated toxins, while rejuvenation (Rasayana) focuses on rebuilding strength and vitality afterward. Balprada's approach includes both phases.",
    },
    {
      q: "Do I need to stay at the ashram for this therapy?",
      a: "An ashram stay is recommended for a more complete, immersive experience, though the doctor will guide you on the most suitable option for your situation.",
    },
    {
      q: "Where is Balprada located?",
      a: "The main branch is in Tehsil Bilari, District Moradabad, with a second branch in Sector-13, New Moradabad, Delhi Road, Moradabad.",
    },
    {
      q: "Is there a free consultation option?",
      a: "Yes, Balprada offers a free OPD consultation on the 15th of every month.",
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
                Ayurvedic Detox & Rejuvenation Therapy at Balprada Ayurvedic Hospital & Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Modern lifestyle habits — irregular eating, poor sleep, stress, and reduced physical activity — gradually lead to a buildup of toxins and imbalance in the body, even without any specific disease being present.</li>
                <li>At Balprada Ayurvedic Hospital & Research Center, detox and rejuvenation therapy is offered as a preventive and restorative service for people who want to reset their body's natural balance and build long-term vitality.</li>
                <li>With 35 years of trusted Ayurvedic experience, in-house herbal medicines, and a peaceful ashram-based environment, Balprada provides a structured detox and rejuvenation journey rooted in classical Ayurvedic principles.</li>
              </ul>
            </div>


            {/* Section 2 — Understanding Detox and Rejuvenation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Detox and Rejuvenation in Ayurveda
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda describes the buildup of Ama (undigested metabolic toxins) as the root cause of many long-term health imbalances, even before specific symptoms appear.</li>
                <li>Shodhana (cleansing therapy) is the classical Ayurvedic approach to removing accumulated Ama and restoring the body's natural balance.</li>
                <li>Rasayana (rejuvenation therapy) follows cleansing and focuses on nourishing the body's tissues, strengthening immunity, and supporting long-term vitality.</li>
                <li>Detox and rejuvenation together are considered a complete cycle — first clearing what is disturbing balance, then rebuilding strength and resilience.</li>
                <li>This therapy is suited both to people managing mild, ongoing imbalance and to those who are generally healthy but want to proactively maintain their wellbeing.</li>
              </ul>
            </div>


            {/* Section 3 — Who This Therapy Is For */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who This Therapy Is Designed For
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Individuals experiencing persistent low energy, sluggishness, or a general feeling of heaviness without a specific diagnosis.</li>
                <li>People who have been through a period of poor eating habits, high stress, or disrupted routine and want to reset their system.</li>
                <li>Patients recovering from illness who want structured Ayurvedic support to rebuild strength and vitality.</li>
                <li>Individuals looking for a seasonal detox, since Ayurveda recommends periodic cleansing aligned with seasonal transitions (Ritucharya).</li>
                <li>Anyone interested in preventive wellness — using Ayurveda not just to treat illness, but to actively maintain long-term health and immunity.</li>
                <li>Individuals transitioning between major life or seasonal changes who want a structured reset for both body and mind.</li>
              </ul>
            </div>


            {/* Section 4 — The Balprada Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Approach to Detox & Rejuvenation
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Detailed Consultation and Assessment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every detox and rejuvenation journey begins with a thorough consultation to understand the patient's current health, digestion, lifestyle, and specific goals.</li>
                    <li>The doctor assesses the patient's body constitution (Prakriti) and current imbalance (Vikriti) before recommending a suitable therapy plan.</li>
                    <li>This individualized assessment ensures the detox process is suited to the person's actual capacity and health status, rather than following a generic program.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Shodhana — The Cleansing Phase
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Cleansing therapies are planned according to individual assessment and may include Panchakarma-based procedures suited to the patient's condition and constitution.</li>
                    <li>The cleansing phase is designed to gently and safely support the body's natural elimination processes, helping clear accumulated Ama.</li>
                    <li>Preparatory steps, including diet adjustment and internal oleation where appropriate, are used to prepare the body before deeper cleansing procedures.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Rasayana — The Rejuvenation Phase
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Following the cleansing phase, Ayurvedic rejuvenation medicines and nourishing therapies are introduced to rebuild strength and vitality.</li>
                    <li>Rasayana herbs and formulations are traditionally used to support immunity, tissue strength, and overall resilience.</li>
                    <li>This phase focuses on helping the body absorb and utilize nourishment more effectively after the cleansing process.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diet and Daily Routine Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Diet guidance during and after the therapy is carefully planned to support digestion and prevent the reaccumulation of toxins.</li>
                    <li>Patients are guided on daily routine practices (Dinacharya) that support sustained balance long after the therapy is complete.</li>
                    <li>Simple, practical lifestyle adjustments are emphasized, since long-term benefit depends on habits continuing beyond the treatment period.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Supportive Facilities
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Yoga — gentle, structured yoga practices support circulation, flexibility, and the body's natural detoxification process.</li>
                    <li>Naturopathy — nature-led practices complement the cleansing and rejuvenation therapies where suitable.</li>
                    <li>Meditation — guided meditation supports mental clarity and emotional balance alongside the physical detox process.</li>
                    <li>Balprada Pathology Lab — in-house diagnostic testing helps track relevant health markers before and after the therapy, where needed.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Detox & Rejuvenation
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to quality and consistency for both the cleansing and rejuvenation phases.</li>
                <li>A peaceful, disciplined ashram environment ideally suited to the focused routine that detox and rejuvenation therapy requires.</li>
                <li>Experienced doctors who personalize the therapy based on individual constitution and health status, rather than offering a fixed package.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week for consultation and planning.</li>
                <li>Free OPD consultation on the 15th of every month, offering an accessible starting point for patients exploring this therapy.</li>
                <li>A complete, coordinated approach — cleansing, rejuvenation, diet, yoga, and follow-up guidance working together rather than in isolation.</li>
              </ul>
            </div>


            {/* Section 6 — Difference From Regular Panchakarma */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes This Different From Regular Panchakarma Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>While Panchakarma is often sought for specific conditions, detox and rejuvenation therapy at Balprada is designed as a broader wellness and preventive journey.</li>
                <li>The therapy places equal emphasis on the rejuvenation (Rasayana) phase, focused on rebuilding vitality, not only on the cleansing phase.</li>
                <li>It is suited to people without a specific diagnosis who simply want to reset their system and strengthen long-term resilience.</li>
                <li>The plan is often structured around a defined period of focused care, especially for patients who choose to stay at the ashram for the full journey.</li>
                <li>The goal extends beyond symptom relief — it is centered on helping the body function at its natural best over the long term.</li>
              </ul>


              
            </div>


            {/* Section 7 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Be ready to discuss your general health, current lifestyle, sleep pattern, diet, and specific reasons for seeking detox and rejuvenation therapy.</li>
                <li>Share any existing medical conditions, medications, or recent health reports during your consultation.</li>
                <li>The doctor will explain the suggested therapy plan, expected duration, and what to expect at each phase before you begin.</li>
                <li>Follow-up guidance is provided to help you sustain the benefits of the therapy through diet and routine after your treatment is complete.</li>
              </ul>
            </div>


            {/* Section 8 — Lifestyle Habits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Simple Lifestyle Habits That Support Ongoing Detox Benefits
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eating light, freshly prepared, easily digestible food regularly, rather than reverting to heavy or processed meals.</li>
                <li>Drinking warm water through the day to support the body's natural elimination processes.</li>
                <li>Maintaining a consistent daily routine for meals, sleep, and waking time.</li>
                <li>Practicing regular yoga or light physical activity to support circulation and digestion.</li>
                <li>Taking periodic breaks from excess screen time and daily pressures to support mental clarity.</li>
                <li>Considering a seasonal detox check-in, as Ayurveda recommends periodic cleansing aligned with seasonal changes.</li>
              </ul>
            </div>


            {/* Section 9 — How Toxin Buildup Affects the Body */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Ongoing Toxin Buildup Affects the Body
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Digestive comfort:</strong> Accumulated Ama is often linked to bloating, sluggish digestion, and a persistent feeling of heaviness after meals.</li>
                <li><strong>Energy levels:</strong> Many patients describe ongoing tiredness that does not fully resolve with rest, which Ayurveda connects to internal imbalance.</li>
                <li><strong>Skin health:</strong> Dullness, breakouts, or uneven skin tone are commonly linked to internal toxin buildup in Ayurvedic understanding.</li>
                <li><strong>Immunity:</strong> A body carrying excess Ama is considered less resilient, making it more prone to frequent minor illness or slow recovery.</li>
                <li><strong>Mental clarity:</strong> Physical imbalance is understood in Ayurveda to also affect mental sharpness, focus, and emotional steadiness.</li>
                <li><strong>Sleep quality:</strong> Internal imbalance can disturb restful sleep, which further slows the body's natural recovery and detoxification processes.</li>
              </ul>
            </div>


            {/* Section 10 — The Balprada Difference */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Difference in Detox & Rejuvenation Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Unlike generic detox programs that focus only on short-term cleansing, Balprada's approach is built around the complete Shodhana-to-Rasayana cycle for lasting benefit.</li>
                <li>Every therapy plan is personalized to the patient's body constitution and current imbalance, rather than following a fixed, one-size-fits-all package.</li>
                <li>The ashram-based setting allows for a genuinely focused environment, free from daily distractions, which supports a more complete therapeutic experience.</li>
                <li>Diet, yoga, naturopathy, and meditation are integrated into the plan alongside the core therapies, supporting the body and mind together.</li>
                <li>The care team provides clear guidance on sustaining results afterward, so the benefits of the therapy extend well beyond the treatment period itself.</li>
              </ul>
            </div>


            {/* Section 11 — Preparing for Lasting Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Lasting Results After Therapy
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The benefits of detox and rejuvenation therapy depend significantly on how well the guided diet and routine are maintained afterward.</li>
                <li>Patients are encouraged to gradually reintroduce regular foods following the guidance provided, rather than returning abruptly to previous habits.</li>
                <li>Periodic follow-up or seasonal check-ins are recommended to help sustain balance, particularly around seasonal transitions.</li>
                <li>Continuing simple daily practices such as warm water intake, consistent meal timing, and light yoga helps preserve the benefits of the therapy long-term.</li>
                <li>Patients are encouraged to view this therapy as part of an ongoing wellness practice rather than a single isolated treatment.</li>
              </ul>
            </div>


            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic detox and rejuvenation therapy can book a consultation at Balprada Ayurvedic Hospital & Research Center. The initial consultation involves a thorough assessment of your health, lifestyle, and goals, followed by a personalized therapy plan combining cleansing (Shodhana), rejuvenation (Rasayana), diet guidance, yoga, and follow-up support. Free OPD consultation available on the 15th of every month.
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