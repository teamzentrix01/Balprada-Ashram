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
      q: "How long does Ayurvedic stress management treatment usually take to show results?",
      a: "This varies by individual, but many patients notice improved sleep and reduced physical tension within the first few weeks of consistent treatment and routine correction.",
    },
    {
      q: "Is Ayurvedic stress treatment suitable for work-related burnout?",
      a: "Yes, the approach is commonly used to support patients dealing with high-pressure work schedules and prolonged mental fatigue.",
    },
    {
      q: "Can this treatment help with stress-related digestive issues?",
      a: "Yes, since Ayurveda links stress and digestion closely, the treatment plan often addresses both together through medicine, diet, and routine correction.",
    },
    {
      q: "Do I need to stay at the ashram, or can I visit as an outpatient?",
      a: "Both options are available. Some patients benefit from a longer ashram stay, while others manage well with regular OPD visits and follow-up.",
    },
    {
      q: "Is yoga or meditation compulsory as part of the treatment?",
      a: "These are strongly recommended as part of a complete plan, but the exact combination is adjusted based on what suits each patient.",
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
                Ayurvedic Stress Management Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Chronic stress rarely stays contained to the mind — over time, it affects sleep, digestion, energy, blood pressure, and overall emotional balance.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, stress management is approached as part of the body&apos;s complete wellbeing, combining Ayurvedic medicine, yoga, meditation, and daily routine correction rather than offering temporary relaxation techniques alone.</li>
                <li>With 35 years of trusted Ayurvedic experience, in-house herbal medicines, and a peaceful ashram-based environment, Balprada supports patients looking for a structured, doctor-guided approach to managing long-term stress.</li>
              </ul>
            </div>

            {/* Section 2 — Understanding Stress in Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Stress in Ayurveda
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda associates chronic stress primarily with an imbalance in Vata dosha, which governs the nervous system, movement, and mental activity.</li>
                <li>Prolonged stress is understood to disturb Agni (digestive fire), which is why many stressed individuals also experience digestive discomfort, poor appetite, or irregular bowel habits.</li>
                <li>Ayurveda recognizes a close connection between the mind and body, meaning ongoing mental strain can eventually show up as physical symptoms such as fatigue, tension, or disturbed sleep.</li>
                <li>The Ayurvedic approach to stress focuses on restoring balance through daily routine (Dinacharya), diet, herbal support, and calming practices, rather than only addressing the symptom in the moment.</li>
                <li>Every patient&apos;s stress pattern is assessed individually, since the triggers, intensity, and physical impact of stress vary from person to person.</li>
              </ul>
            </div>

            {/* Section 3 — Common Stress-Related Concerns We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Stress-Related Concerns We Support
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Chronic mental fatigue and a persistent feeling of being overwhelmed or unable to relax.</li>
                <li>Disturbed sleep — difficulty falling asleep, frequent waking, or waking up feeling unrested.</li>
                <li>Stress-linked digestive discomfort, including bloating, acidity, or irregular bowel movements during stressful periods.</li>
                <li>Irritability and mood fluctuation connected to prolonged tension or workload.</li>
                <li>Physical tension, including tightness in the neck, shoulders, or headaches linked to stress.</li>
                <li>Stress-related fatigue and low energy that does not fully improve with rest alone.</li>
                <li>Work or life-related burnout, where prolonged pressure has led to noticeable physical and emotional exhaustion.</li>
              </ul>
            </div>

            {/* Section 4 — The Balprada Approach to Stress Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Approach to Stress Management
              </h2>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">Detailed Consultation First</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Every treatment plan begins with the doctor understanding the patient&apos;s daily routine, work pattern, sleep habits, and the nature of the stress being experienced.</li>
                <li>The consultation also reviews any physical symptoms linked to stress, such as digestive discomfort, fatigue, or sleep disturbance.</li>
                <li>Rather than offering generic relaxation advice, the plan is built around the patient&apos;s specific triggers, lifestyle, and current health condition.</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">In-House Ayurvedic Medicines</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada prepares its own herbal medicines in-house, allowing consistent quality across every formulation given to patients.</li>
                <li>Formulations are selected to help calm an aggravated nervous system, support restful sleep, and stabilize digestion affected by ongoing stress.</li>
                <li>Medicines are given alongside clear routine guidance so herbal support and daily habits work toward the same goal of restoring balance.</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">Yoga and Meditation</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Guided yoga practices are used to release physical tension, improve breath control, and support overall nervous system balance.</li>
                <li>Meditation and breath awareness practices help build emotional steadiness and a calmer response to daily stress over time.</li>
                <li>Regular practice, rather than occasional sessions, is encouraged as part of building sustainable stress resilience.</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">Naturopathy and Diet Correction</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Naturopathy techniques are used where suitable to support the body&apos;s natural ability to relax and recover.</li>
                <li>Diet guidance focuses on foods that calm Vata imbalance and support stable digestion and energy, since diet plays a direct role in how the body manages stress.</li>
                <li>Patients are guided toward consistent meal timing and simple routine changes, since irregularity is understood to worsen stress-related imbalance.</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">Structured Follow-up</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Stress management is rarely a one-time fix, so regular follow-up allows the doctor to track how the patient is responding to treatment and routine changes.</li>
                <li>Follow-up visits help reinforce discipline around sleep, diet, and daily practices that support long-term stress resilience.</li>
                <li>The care team also uses follow-up to adjust the plan as life circumstances or stress triggers change over time.</li>
              </ul>
            </div>

            {/* Section 5 — Why Patients Choose Balprada for Stress Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Stress Management
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to quality and consistency.</li>
                <li>A peaceful ashram environment that offers a genuinely calm setting, away from daily pressures, for patients who want a more immersive reset.</li>
                <li>Dedicated yoga, meditation, and naturopathy facilities integrated directly into the treatment plan.</li>
                <li>Experienced doctors who look at stress as connected to overall physical and digestive health, not as an isolated mental concern.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week for consultation and follow-up.</li>
                <li>Free OPD consultation on the 15th of every month, offering an accessible starting point for patients exploring Ayurvedic stress support.</li>
              </ul>
            </div>

            {/* Section 6 — Who Can Consider This Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Consider This Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Individuals experiencing ongoing mental fatigue, tension, or a persistent inability to relax.</li>
                <li>Patients with stress-linked sleep disturbance or digestive discomfort that has not improved on its own.</li>
                <li>People managing high-pressure work schedules or major life changes who want structured support for stress.</li>
                <li>Anyone experiencing physical tension, headaches, or fatigue connected to prolonged stress.</li>
                <li>Patients looking for a calming, disciplined environment — such as Balprada&apos;s ashram setting — to reset their routine and mental state.</li>
              </ul>

              
            </div>

            {/* Section 7 — What to Expect During Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Be ready to discuss your daily routine, work pattern, sleep habits, and the situations that tend to trigger your stress.</li>
                <li>Share any physical symptoms you have noticed alongside stress, such as digestive discomfort, fatigue, or tension.</li>
                <li>The suggested Ayurvedic plan, including medicines, yoga, and routine guidance, is explained clearly before you begin.</li>
                <li>Follow-up visits are used to track your progress and adjust the plan as your response to treatment develops.</li>
              </ul>
            </div>

            {/* Section 8 — Simple Lifestyle Habits That Support Stress Resilience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Simple Lifestyle Habits That Support Stress Resilience
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Following a consistent daily routine for waking, meals, and sleep, since irregularity tends to aggravate stress-related imbalance.</li>
                <li>Practicing a few minutes of guided breathing or meditation daily, even during busy schedules.</li>
                <li>Limiting excessive screen time, especially close to bedtime, to support better sleep quality.</li>
                <li>Eating warm, freshly prepared meals rather than skipping meals or relying on processed food during stressful periods.</li>
                <li>Staying physically active through regular walking, yoga, or light exercise to help release built-up tension.</li>
                <li>Setting aside short breaks through the day to rest the mind, rather than working continuously without pause.</li>
              </ul>
            </div>

            {/* Section 9 — How Balprada&apos;s Ashram Environment Supports Stress Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Balprada&apos;s Ashram Environment Supports Stress Recovery
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The ashram setting offers a naturally quieter, more disciplined environment compared to typical daily surroundings, which can support faster mental reset.</li>
                <li>A structured daily rhythm — consultation, medicine, yoga, and rest — helps patients rebuild healthy routine habits during their stay.</li>
                <li>Being away from usual work and household pressures allows some patients to focus more fully on recovery than they could manage at home.</li>
                <li>The combination of natural surroundings, guided practices, and consistent care is designed to support both the body and mind together.</li>
                <li>Patients who cannot stay long-term can still benefit from periodic visits and structured OPD guidance to apply similar principles at home.</li>
              </ul>
            </div>

            {/* Section 10 — How Chronic Stress Affects Overall Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Chronic Stress Affects Overall Health
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Digestive health — stress is one of the most common triggers for bloating, acidity, and irregular digestion, since Ayurveda links mental strain directly to Agni.</li>
                <li>Sleep quality — a mind that stays active and tense often struggles to settle into deep, restorative sleep, creating a cycle that worsens stress further.</li>
                <li>Immunity — prolonged stress is widely understood to weaken the body&apos;s natural resilience, making illness and fatigue more frequent.</li>
                <li>Blood pressure and heart health — sustained stress can contribute to elevated blood pressure and general strain on the cardiovascular system.</li>
                <li>Muscle tension and pain — many patients carry stress physically, in the form of neck, shoulder, or back tension and recurring headaches.</li>
                <li>Emotional balance — unmanaged stress over time can affect mood stability, patience, and the ability to stay present in daily life and relationships.</li>
              </ul>
            </div>

            {/* Section 11 — The Balprada Difference in Stress Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Difference in Stress Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Rather than offering only relaxation techniques, Balprada builds each stress management plan around the patient&apos;s specific triggers, physical symptoms, and daily routine.</li>
                <li>Ayurvedic medicine, yoga, meditation, and diet correction are planned together as one coordinated approach, since the mind and body are treated as connected, not separate.</li>
                <li>The ashram-based setting offers a genuinely different environment from a patient&apos;s usual routine, which many find essential for a real mental reset.</li>
                <li>The care team focuses on building sustainable daily habits rather than offering short-term relief that fades once the patient returns to their regular schedule.</li>
                <li>Clear, practical guidance is given at every step, so patients leave with habits they can realistically continue at home.</li>
              </ul>
            </div>

            {/* Section 12 — Preparing for Long-Term Stress Resilience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Long-Term Stress Resilience
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Stress management at Balprada is approached as an ongoing practice rather than a one-time treatment, since daily habits play the biggest role in long-term resilience.</li>
                <li>Patients are encouraged to continue their yoga, meditation, and routine practices at home consistently, even after visible improvement.</li>
                <li>Periodic follow-up visits help identify new stress triggers early and adjust the treatment plan before they build into bigger concerns.</li>
                <li>Awareness of personal stress patterns — what situations, habits, or times of day tend to worsen symptoms — is encouraged as part of long-term self-management.</li>
                <li>Family involvement in understanding the patient&apos;s routine and triggers is encouraged where relevant, since a supportive home environment plays a meaningful role in recovery.</li>
              </ul>
            </div>

            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for stress management can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center. The initial consultation typically involves a detailed case history review, stress pattern assessment, and personalised treatment planning. For patients traveling from outside Moradabad, the hospital also assists with scheduling follow-ups aligned with their treatment progress.
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

            {/* Section 14 — FAQs */}
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