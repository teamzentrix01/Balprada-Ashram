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
      q: "Can Ayurvedic treatment help after a stroke?",
      a: "Ayurvedic medicine, physiotherapy, and lifestyle support are commonly used alongside neurologist-guided treatment to support gradual recovery of strength and coordination.",
    },
    {
      q: "Is Ayurvedic treatment safe alongside neurological medication?",
      a: "Yes, the doctor reviews your current medication and reports during consultation so the Ayurvedic plan is suited to your overall situation. Always share your full medical history.",
    },
    {
      q: "How long does neurological recovery usually take?",
      a: "Recovery timelines vary widely by condition and severity. The Balprada team focuses on steady, monitored progress rather than promising a fixed timeframe.",
    },
    {
      q: "Does Balprada treat facial paralysis?",
      a: "Yes, facial paralysis is supported through a combination of Ayurvedic medicine and in-house physiotherapy focused on facial muscle recovery.",
    },
    {
      q: "Do I need to stop seeing my neurologist if I start Ayurvedic treatment here?",
      a: "No. Balprada's approach is designed to work alongside your existing neurological treatment, not replace it.",
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
                Ayurvedic Neurological Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4">
                Neurological concerns such as weakness after a stroke, facial paralysis, nerve-related pain, or general nervous system fatigue can affect a person's daily life in ways that go far beyond the physical symptom alone. At Balprada Ayurvedic Hospital &amp; Research Center, neurological care is approached as a slow, disciplined healing process — combining Ayurvedic medicine, physiotherapy, yoga, and structured follow-up — rather than a quick fix. With 35 years of trusted Ayurvedic experience, in-house herbal medicines, and a calm ashram-based environment, Balprada supports patients who are looking for Ayurvedic care to work alongside their existing neurological treatment.
              </p>
            </div>


            {/* Section 2 — Understanding Neurological Health in Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Neurological Health in Ayurveda
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda classifies most neurological disorders under Vata-dominant conditions, since Vata dosha governs movement, the nervous system, and coordination in the body.</li>
                <li>An imbalance in Vata is often described as the underlying reason behind symptoms like tremors, stiffness, weakness, numbness, and nerve pain.</li>
                <li>Ayurvedic neurological care focuses on pacifying aggravated Vata through medicine, oil-based therapies, diet, and daily routine (Dinacharya).</li>
                <li>The approach is gradual and supportive — nervous system recovery is understood to take sustained effort rather than a single course of treatment.</li>
                <li>Every patient's nervous system concern is assessed individually, since the root cause and severity can vary widely between cases.</li>
              </ul>
            </div>


            {/* Section 3 — Common Neurological Concerns We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Neurological Concerns We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Post-stroke weakness — supportive care for patients recovering strength and coordination on one side of the body after a stroke.</li>
                <li>Facial paralysis (Facial Palsy) — Ayurvedic and physiotherapy-based support for regaining facial muscle movement and tone.</li>
                <li>Nerve pain and numbness — ongoing tingling, numbness or shooting pain often linked to nerve compression or Vata imbalance.</li>
                <li>Sciatica and nerve compression discomfort — pain radiating along the nerve path, often affecting the lower back and legs.</li>
                <li>Tremors and coordination difficulty — supportive lifestyle and Ayurvedic care for patients experiencing shakiness or reduced coordination.</li>
                <li>Chronic fatigue linked to the nervous system — persistent tiredness, brain fog or reduced stamina that does not improve with rest.</li>
                <li>Stress-linked nervous system imbalance — sleep disturbance, anxiety-driven physical tension, or nervous exhaustion from prolonged stress.</li>
              </ul>
            </div>


            {/* Section 4 — The Balprada Approach to Neurological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Approach to Neurological Care
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Detailed Consultation First
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every patient begins with a consultation where the doctor reviews medical history, current neurological reports, ongoing medication, and the specific symptoms being experienced.</li>
                    <li>Since neurological conditions often already involve a neurologist or physician, the Balprada team takes time to understand what treatment is already underway before suggesting any Ayurvedic support.</li>
                    <li>The consultation also covers daily routine, sleep pattern, diet, and stress levels, since these directly influence Vata balance and nervous system recovery.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    In-House Ayurvedic Medicines and Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Herbal medicines are prepared in-house at Balprada, allowing consistent quality across every formulation given to patients.</li>
                    <li>Depending on the condition, care may include internal Ayurvedic medicines along with external oil-based therapies traditionally used to support nerve and muscle function.</li>
                    <li>Formulations are selected specifically for the type of neurological concern — the approach for post-stroke weakness is different from the approach for nerve pain or tremors.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Physiotherapy Support
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada's in-house physiotherapy facility works alongside Ayurvedic medicine to support safe movement, mobility, and gradual strength recovery.</li>
                    <li>Physiotherapy sessions are planned to complement the herbal treatment, helping the body rebuild coordination and muscle control over time.</li>
                    <li>This combined approach is especially relevant for patients recovering from stroke-related weakness or facial paralysis.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Yoga and Naturopathy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Gentle, guided yoga practices can support flexibility, breath control, and nervous system balance as part of the wider recovery plan.</li>
                    <li>Naturopathy techniques are used where suitable to complement the herbal and physiotherapy-based care.</li>
                    <li>Meditation and breath awareness practices are also offered to support emotional steadiness, which plays an important role in nervous system recovery.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diet and Routine Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Diet guidance focuses on foods that help pacify Vata imbalance, along with meal timing and routine changes suited to the patient's condition.</li>
                    <li>Patients are guided toward a disciplined daily rhythm, since irregular routine is considered to aggravate Vata-related nervous system concerns.</li>
                    <li>Family members are often included in the diet and routine discussion, especially for patients who need daily support during recovery.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Structured Follow-up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Neurological recovery is typically gradual, so regular follow-up is used to track progress and adjust the treatment plan as needed.</li>
                    <li>The care team observes response to medicine, physiotherapy, and routine changes over time rather than expecting rapid results.</li>
                    <li>Long-term follow-up also helps ensure the Ayurvedic plan continues to stay aligned with the patient's ongoing neurological treatment elsewhere.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — Why Patients Choose Balprada for Neurological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Neurological Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to consistency and quality.</li>
                <li>Dedicated physiotherapy facility, integrated directly into the recovery plan rather than treated as a separate service.</li>
                <li>A peaceful ashram environment suited to patients who benefit from a calm, disciplined setting during a slow recovery process.</li>
                <li>Experienced doctors who coordinate Ayurvedic care with the patient's existing neurological treatment rather than working in isolation.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week.</li>
                <li>Free OPD consultation on the 15th of every month, offering an accessible starting point for patients exploring Ayurvedic support.</li>
              </ul>
            </div>


            {/* Section 6 — Who Can Consider This Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Consider This Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients recovering from stroke who are looking for Ayurvedic and physiotherapy-based support alongside their neurologist's treatment plan.</li>
                <li>Individuals experiencing facial paralysis who want combined Ayurvedic and physiotherapy care for muscle recovery.</li>
                <li>People with ongoing nerve pain, numbness, or tingling that has not fully resolved with standard treatment.</li>
                <li>Patients experiencing tremors, coordination difficulty, or nervous system fatigue looking for supportive lifestyle-based care.</li>
                <li>Anyone already under neurological treatment who wants a structured, doctor-guided Ayurvedic routine to run alongside it.</li>
              </ul>


              
            </div>


            {/* Section 7 — What to Expect During Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Carry all relevant neurological reports, scans, and current prescriptions to your first consultation.</li>
                <li>Be ready to explain when your symptoms began, how they have progressed, and what treatment you have already received.</li>
                <li>The doctor will explain the suggested Ayurvedic and physiotherapy plan clearly before starting, including expected timelines for gradual progress.</li>
                <li>Follow-up visits are used to review your response to treatment and adjust the plan where needed.</li>
              </ul>
            </div>


            {/* Section 8 — Simple Lifestyle Habits That Support Nervous System Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Simple Lifestyle Habits That Support Nervous System Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Following a consistent daily routine for waking, meals, and sleep, since irregularity is considered to aggravate Vata imbalance.</li>
                <li>Practicing gentle stretching or guided yoga regularly, as advised by the care team, to support mobility and coordination.</li>
                <li>Avoiding excess cold, dry, or heavily processed food, which is traditionally associated with aggravating Vata.</li>
                <li>Managing stress through simple daily practices such as breath awareness or short periods of quiet rest.</li>
                <li>Staying consistent with prescribed physiotherapy exercises between clinic visits, since regular practice supports steadier progress.</li>
                <li>Getting adequate, uninterrupted sleep, which plays a direct role in nervous system recovery and overall balance.</li>
              </ul>
            </div>


            {/* Section 9 — How Nervous System Imbalance Affects Daily Life */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Nervous System Imbalance Affects Daily Life
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Movement and mobility — weakness, stiffness, or coordination difficulty can make routine tasks like walking, dressing, or holding objects noticeably harder.</li>
                <li>Sleep quality — nervous system imbalance often disrupts deep, restorative sleep, which in turn slows the body's ability to recover.</li>
                <li>Mood and emotional steadiness — prolonged nerve-related discomfort or reduced mobility can affect confidence and emotional wellbeing, which is why Balprada includes meditation and breath-based support in its care plans.</li>
                <li>Muscle strength — nerves and muscles work together, so ongoing nerve imbalance can gradually lead to reduced muscle tone if not addressed.</li>
                <li>Independence in daily activities — for many patients, especially after a stroke, the real goal of treatment is regaining enough strength and coordination to manage daily activities independently.</li>
                <li>Family and caregiving routine — neurological recovery often involves the whole family, which is why Balprada includes relatives in diet and routine discussions where relevant.</li>
              </ul>
            </div>


            {/* Section 10 — The Balprada Difference in Neurological Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Difference in Neurological Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rather than offering a single generic protocol, Balprada builds each neurological care plan around the specific condition, its severity, and the stage of recovery the patient is in.</li>
                <li>Ayurvedic medicine, physiotherapy, and yoga are not treated as separate add-ons — they are planned together as one coordinated recovery approach.</li>
                <li>The care team stays aware of the patient's existing neurological treatment and works to complement it, rather than suggesting anything that could interfere with ongoing medical care.</li>
                <li>The ashram-based setting gives patients who choose a longer stay the benefit of a structured, distraction-free daily routine, which can be especially valuable during slow, effort-intensive recovery phases.</li>
                <li>Clear communication is maintained at every stage — patients and families are told what to expect, how progress will be measured, and what realistic timelines look like.</li>
              </ul>
            </div>


            {/* Section 11 — Preparing for a Steady, Long-Term Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for a Steady, Long-Term Recovery
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Neurological recovery is rarely linear, and Balprada's care model is built around patience, consistency, and regular reassessment rather than expecting quick change.</li>
                <li>Patients are encouraged to continue prescribed physiotherapy exercises and routine practices at home between clinic visits, since consistency plays a major role in nervous system recovery.</li>
                <li>Small, measurable improvements — in movement, sensation, or energy — are tracked over successive follow-ups rather than looking only for dramatic change.</li>
                <li>As recovery progresses, the treatment plan is adjusted to match the patient's current stage, shifting focus as strength and coordination improve.</li>
                <li>Ongoing awareness of triggers such as stress, poor sleep, or irregular routine is encouraged, since these are commonly linked to setbacks in nervous system balance.</li>
              </ul>
            </div>


            {/* Section 12 — CTA */}
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