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

export default function BalpradaParalysisAyurvedicTreatment() {
  const faqs = [
    {
      q: "Can Ayurveda help in paralysis recovery?",
      a: "Ayurveda offers supportive care through Panchakarma, herbs, physiotherapy and lifestyle correction during the recovery phase, alongside conventional treatment.",
    },
    {
      q: "Does Balprada guarantee full recovery from paralysis?",
      a: "No. Ayurvedic care supports the recovery journey; it does not claim to cure paralysis or guarantee a specific outcome.",
    },
    {
      q: "Is Panchakarma safe for all paralysis patients?",
      a: "Not always. Panchakarma is recommended only after individual assessment by the treating doctor based on the patient's condition.",
    },
    {
      q: "When should I rush to a hospital instead of Ayurveda?",
      a: "Sudden facial drooping, weakness, slurred speech or loss of consciousness need emergency medical care immediately.",
    },
    {
      q: "Can physiotherapy and Ayurveda be combined?",
      a: "Yes, Balprada integrates physiotherapy with Ayurvedic medicine and Panchakarma as part of one combined care plan.",
    },
    {
      q: "How long does paralysis recovery support usually take?",
      a: "This depends on the individual's condition and is discussed in detail during consultation, as every case differs.",
    },
    {
      q: "Does Balprada offer a free consultation?",
      a: "Yes, a free OPD consultation is available on the 15th of every month at the ashram and clinic.",
    },
    {
      q: "Can I continue my prescribed medicines with Ayurvedic care?",
      a: "Yes, patients are encouraged to continue prescribed medical treatment while discussing complementary Ayurvedic support with our doctors.",
    },
    {
      q: "How do I book an appointment at Balprada?",
      a: "You can call, WhatsApp, or use the appointment booking option on the Balprada website for either branch.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Understanding Paralysis */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-6 text-gray-900">
                Understanding Paralysis (Pakshaghat) in Ayurveda
              </h1>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Paralysis is described in Ayurveda as &quot;Pakshaghat,&quot;
                  a condition where one side or part of the body loses its
                  normal movement and sensation.
                </li>
                <li>
                  The term &quot;Paksha&quot; means side and &quot;Ghat&quot;
                  means loss, referring to the loss of function commonly seen
                  on one side of the body.
                </li>
                <li>
                  Ayurveda classifies Pakshaghat as a Vata-dominant disorder,
                  where aggravated Vata dosha obstructs the nervous pathways
                  (Srotas) and affects muscle coordination.
                </li>
                <li>
                  It may occur due to a stroke, nerve injury, prolonged illness,
                  or other underlying neurological conditions.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has supported
                  patients with long-term and chronic health concerns for 35
                  years since its founding in 1991.
                </li>
                <li>
                  Our approach is guided by the seva sankalp of Sw. Vaidya Vijay
                  Pal Singh Ji, combining Ayurvedic medicine, physiotherapy,
                  yoga and disciplined routine for long-term supportive care.
                </li>
                <li>
                  Paralysis care at Balprada is offered as complementary and
                  supportive treatment alongside conventional medical
                  management, not as a replacement for emergency or specialist
                  neurological care.
                </li>
              </ul>
            </div>

            {/* Section 2 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Common Causes of Paralysis
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Stroke or brain hemorrhage affecting motor control pathways.
                </li>
                <li>
                  Spinal cord injury or compression affecting nerve signals.
                </li>
                <li>
                  Nerve damage due to accidents, infections or prolonged
                  pressure.
                </li>
                <li>
                  Long-standing diabetes or uncontrolled blood pressure
                  affecting nerve and blood vessel health.
                </li>
                <li>
                  Degenerative neurological conditions that progressively
                  affect movement.
                </li>
                <li>
                  Severe vitamin deficiencies, particularly B-complex vitamins,
                  affecting nerve function.
                </li>
                <li>
                  Prolonged stress, poor sleep and irregular lifestyle
                  contributing to Vata aggravation.
                </li>
                <li>
                  Family history or predisposition toward neurological and
                  vascular conditions.
                </li>
                <li>
                  Sedentary habits combined with poor dietary discipline over
                  many years.
                </li>
              </ul>
            </div>

            {/* Section 3 — Common Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Common Symptoms Associated with Paralysis
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Sudden or gradual weakness on one side of the body, affecting
                  the face, arm or leg.
                </li>
                <li>Difficulty in speaking clearly or slurred speech.</li>
                <li>
                  Drooping of one side of the face or difficulty closing an
                  eye.
                </li>
                <li>
                  Loss of sensation, tingling or numbness in the affected area.
                </li>
                <li>
                  Difficulty walking, maintaining balance, or coordinating
                  movement.
                </li>
                <li>
                  Stiffness or reduced flexibility in the affected limbs over
                  time.
                </li>
                <li>Difficulty swallowing in more advanced cases.</li>
                <li>
                  Emotional distress, low confidence or frustration due to
                  reduced independence.
                </li>
                <li>
                  Muscle wasting in the affected area if the condition
                  continues without proper care.
                </li>
              </ul>
            </div>

            {/* Section 4 — Immediate Medical Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                When Immediate Medical Attention Is Required
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Sudden onset of facial drooping, arm weakness or slurred
                  speech requires emergency evaluation without delay, since this
                  may indicate an active stroke.
                </li>
                <li>
                  Loss of consciousness or severe confusion needs urgent
                  hospital care.
                </li>
                <li>
                  Sudden, severe headache accompanied by weakness needs
                  immediate attention.
                </li>
                <li>
                  Difficulty breathing or swallowing requires urgent
                  conventional medical support.
                </li>
                <li>
                  Ayurvedic supportive care is most suitable during the recovery
                  and rehabilitation phase, once the patient is medically stable
                  and under a treating physician&apos;s guidance.
                </li>
                <li>
                  Patients and families are strongly encouraged to seek
                  emergency care first, and to consider Ayurvedic supportive
                  therapy as a complementary part of the longer recovery
                  journey.
                </li>
              </ul>
            </div>

            {/* Section 5 — Ayurvedic Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Balprada&apos;s Ayurvedic Approach to Paralysis Care
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Detailed consultation to understand the patient&apos;s
                  Prakriti (constitution), medical history, current reports and
                  ongoing treatment.
                </li>
                <li>
                  Assessment of the extent and stage of Pakshaghat, since
                  early-stage and long-standing cases are approached
                  differently.
                </li>
                <li>
                  Personalized herbal medicine plan prepared using Balprada&apos;s
                  in-house Ayurvedic formulations.
                </li>
                <li>
                  Structured Panchakarma-based therapy plan where suitable for
                  the individual&apos;s condition and stage of recovery.
                </li>
                <li>
                  Physiotherapy support to help maintain and gradually improve
                  mobility of the affected limbs.
                </li>
                <li>
                  Yoga and guided movement practices suited to the patient&apos;s
                  current physical capacity.
                </li>
                <li>
                  Diet and lifestyle guidance designed to pacify aggravated Vata
                  dosha.
                </li>
                <li>
                  Ongoing follow-up consultations to track progress and adjust
                  the care plan over time.
                </li>
                <li>
                  Coordination with Balprada Pathology Lab for relevant
                  diagnostic monitoring where required.
                </li>
              </ul>
            </div>

            {/* Section 6 — Panchakarma */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Panchakarma Therapies Considered for Paralysis Support
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Panchakarma recommendations at Balprada are individualized
                  and are never applied as a fixed package for every patient.
                </li>
                <li>
                  Abhyanga (therapeutic herbal oil massage) may be considered to
                  support circulation and Vata balance in the affected area.
                </li>
                <li>
                  Basti (medicated enema therapy) is traditionally associated
                  with Vata-related conditions and may be considered in suitable
                  cases.
                </li>
                <li>
                  Nasya (nasal therapy) may be included where appropriate for
                  the individual&apos;s assessment.
                </li>
                <li>
                  Swedana (herbal steam therapy) may support muscle relaxation
                  and comfort in suitable cases.
                </li>
                <li>
                  Pizhichil and other oil-based therapies may be considered
                  depending on the patient&apos;s tolerance and condition.
                </li>
                <li>
                  Every Panchakarma therapy is recommended only after the
                  treating doctor&apos;s personal evaluation, since paralysis
                  cases vary significantly between patients.
                </li>
              </ul>
            </div>

            {/* Section 7 — Herbs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Ayurvedic Herbs and Formulations Commonly Used
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Ashwagandha (Withania somnifera) – traditionally associated
                  with supporting nerve and muscle strength.
                </li>
                <li>
                  Bala (Sida cordifolia) – used traditionally in Vata-related
                  conditions for supporting strength and stability.
                </li>
                <li>
                  Dashmoola – a traditional combination of ten roots used to
                  help pacify Vata dosha.
                </li>
                <li>
                  Brahmi (Bacopa monnieri) – traditionally associated with
                  supporting nervous system function.
                </li>
                <li>
                  Shatavari and other supportive rasayana herbs used depending
                  on individual assessment.
                </li>
                <li>
                  Medicated oils prepared in-house for external application
                  during massage therapies.
                </li>
                <li>
                  All herbal formulations at Balprada are prescribed only after
                  in-person consultation, since paralysis care requires
                  individual assessment and supervision.
                </li>
              </ul>
            </div>

            {/* Section 8 — Physiotherapy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Physiotherapy and Movement-Based Support
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Guided range-of-motion exercises to help maintain flexibility
                  in the affected limbs.
                </li>
                <li>
                  Gradual strengthening exercises introduced according to the
                  patient&apos;s recovery stage.
                </li>
                <li>
                  Balance and coordination practice to support safer, more
                  independent movement.
                </li>
                <li>
                  Support for daily activities and functional movement
                  retraining where appropriate.
                </li>
                <li>
                  Regular reassessment to adjust the physiotherapy plan as the
                  patient progresses.
                </li>
                <li>
                  Physiotherapy at Balprada works alongside Ayurvedic medicine
                  and Panchakarma as part of one combined care plan.
                </li>
              </ul>
            </div>

            {/* Section 9 — Diet */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Diet Guidance for Paralysis Patients
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Warm, freshly cooked, easily digestible meals to help pacify
                  Vata dosha.
                </li>
                <li>
                  Adequate healthy fats such as ghee, included as guided by the
                  treating doctor.
                </li>
                <li>
                  Regular meal timings to support digestive stability and
                  nervous system balance.
                </li>
                <li>
                  Foods rich in essential nutrients to support overall strength
                  and recovery.
                </li>
                <li>
                  Avoidance of cold, stale, dry or excessively processed foods.
                </li>
                <li>Adequate hydration with warm water through the day.</li>
                <li>
                  Avoidance of excessive fasting or irregular eating patterns,
                  which can aggravate Vata.
                </li>
                <li>
                  Personalized dietary recommendations discussed during
                  consultation, since nutritional needs vary by patient
                  condition.
                </li>
              </ul>
            </div>

            {/* Section 10 — Lifestyle and Yoga */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Lifestyle and Yoga Support
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Gentle yoga practices adapted to the patient&apos;s mobility
                  level, introduced gradually under guidance.
                </li>
                <li>
                  Pranayama and breathing exercises to support relaxation and
                  overall balance.
                </li>
                <li>
                  Regular daily routine (Dinacharya) to support consistency in
                  recovery.
                </li>
                <li>
                  Adequate rest and quality sleep to support the body&apos;s
                  natural healing processes.
                </li>
                <li>
                  Emotional and family support encouraged throughout the
                  recovery journey.
                </li>
                <li>
                  Avoidance of overexertion, with activity levels increased
                  gradually and only as advised.
                </li>
              </ul>
            </div>

            {/* Section 11 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital &amp; Research Center
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  35 years of experience in Ayurvedic care since the hospital&apos;s
                  founding in 1991.
                </li>
                <li>
                  Legacy guided by the seva sankalp of Sw. Vaidya Vijay Pal
                  Singh Ji.
                </li>
                <li>
                  Peaceful, ashram-based environment supportive of long-term
                  recovery and rehabilitation.
                </li>
                <li>
                  In-house herbal medicines prepared under experienced
                  supervision.
                </li>
                <li>
                  Comprehensive facilities including Panchakarma,
                  Physiotherapy, Yoga, Naturopathy and Meditation under one
                  roof.
                </li>
                <li>
                  Balprada Pathology Lab available for ongoing diagnostic
                  support.
                </li>
                <li>
                  Two accessible branches serving patients across Moradabad
                  district and nearby areas.
                </li>
                <li>
                  Free OPD consultation offered on the 15th of every month.
                </li>
                <li>
                  Structured, step-by-step care process moving from consultation
                  to long-term follow-up.
                </li>
              </ul>
            </div>

            {/* Section 12 — Care Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Our Care Process
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  <span className="font-semibold">Consultation –</span> The
                  doctor reviews the patient&apos;s history, current reports,
                  medication and stage of paralysis before suggesting the next
                  step.
                </li>
                <li>
                  <span className="font-semibold">Ayurvedic Plan –</span> Care
                  is planned using Balprada&apos;s Ayurvedic medicines,
                  Panchakarma therapies and lifestyle correction suited to the
                  individual.
                </li>
                <li>
                  <span className="font-semibold">
                    Supportive Facilities –
                  </span>{" "}
                  Physiotherapy, Yoga, Naturopathy and pathology support are
                  included where appropriate.
                </li>
                <li>
                  <span className="font-semibold">Follow-up –</span> Regular
                  follow-up allows the team to track progress, adjust the plan
                  and support long-term discipline and recovery.
                </li>
              </ul>
            </div>

            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation for Paralysis Support
              </h2>

              <ul className="text-black space-y-3 list-disc pl-5 mb-6">
                <li>
                  Patients and families can consult Balprada Ayurvedic Hospital
                  &amp; Research Center for supportive paralysis care during the
                  recovery and rehabilitation phase.
                </li>
                <li>
                  The consultation includes a review of the patient&apos;s
                  medical history, current reports, prescribed medicines and
                  stage of paralysis.
                </li>
                <li>
                  Ayurvedic medicines, Panchakarma, physiotherapy, yoga, diet
                  and lifestyle guidance are recommended only according to the
                  patient&apos;s condition.
                </li>
                <li>
                  Patients should continue emergency and specialist neurological
                  care whenever required.
                </li>
              </ul>

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
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                      Bilari, District Moradabad, Uttar Pradesh 244415
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
                      F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                      Uttar Pradesh 244001
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
                      <a
                        href="tel:9410447000"
                        className="hover:underline"
                      >
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a
                        href="tel:8126364606"
                        className="hover:underline"
                      >
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

                    <p className="text-gray-700">{faq.a}</p>
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