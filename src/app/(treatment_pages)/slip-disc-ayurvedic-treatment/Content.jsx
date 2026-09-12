import Link from "next/link";
import {
  Phone,
  MapPin,
  CheckCircle2,
  Shield,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaSlipDiscTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure a slip disc completely?",
      a: "Many patients experience significant relief from pain and improved mobility with disciplined Ayurvedic care, Panchakarma therapies and lifestyle correction. Outcomes vary depending on severity and how early treatment begins.",
    },
    {
      q: "Q2. Is Panchakarma effective for slip disc pain?",
      a: "Panchakarma-based therapies, such as medicated oil massage and fomentation, are traditionally used to ease Vata-related pain and stiffness. Our doctors evaluate suitability based on each patient's specific condition.",
    },
    {
      q: "Q3. How long does Ayurvedic treatment for slip disc usually take?",
      a: "Duration depends on the severity of the condition, the specific spinal area affected and the patient's response to treatment. Progress is reviewed at regular follow-up visits.",
    },
    {
      q: "Q4. Can slip disc be treated without surgery?",
      a: "Many cases of slip disc improve with non-surgical approaches, including Ayurvedic care, physiotherapy and lifestyle correction. Severe cases with significant neurological symptoms may require surgical evaluation.",
    },
    {
      q: "Q5. Does Balprada offer free consultation for slip disc patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Q6. What activities should be avoided with a slip disc?",
      a: "Heavy lifting, prolonged sitting, sudden bending and strenuous activity are generally best avoided until cleared by the treating doctor.",
    },
    {
      q: "Q7. How can I book an appointment at Balprada?",
      a: "You can call, WhatsApp or visit the Balprada website to book an appointment at either the Main Branch or the Moradabad Branch.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Introduction */}
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Slip Disc Ayurvedic Treatment at Balprada Ayurvedic Hospital &amp;
                Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Slip disc, medically known as a herniated or prolapsed disc,
                  is a common cause of back and neck pain that can significantly
                  affect daily movement and quality of life.
                </li>
                <li>
                  At Balprada Ayurvedic Hospital &amp; Research Center, we offer
                  personalized Ayurvedic consultation, in-house herbal
                  medicines, Panchakarma-based therapies and disciplined
                  lifestyle guidance to help ease pain, support spinal health
                  and restore comfortable movement.
                </li>
                <li>
                  With 35 years of experience in Ayurveda, an experienced team
                  of vaidyas and a peaceful ashram-based environment, Balprada
                  focuses on personalized, compassionate and consistent care for
                  every patient.
                </li>
              </ul>
            </section>

            {/* What Is Slip Disc */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Slip Disc?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A slip disc occurs when the soft, cushion-like disc between
                  two vertebrae shifts out of its normal position or its inner
                  gel-like material pushes through a weakened outer layer, often
                  pressing on nearby nerves.
                </li>
                <li>
                  The spine is made up of vertebrae separated by discs that act
                  as shock absorbers during movement.
                </li>
                <li>
                  A slip disc can occur anywhere along the spine, though it is
                  most common in the lower back (lumbar region) and neck
                  (cervical region).
                </li>
                <li>
                  The condition may develop gradually due to wear and tear, or
                  suddenly following an injury or strenuous activity.
                </li>
                <li>
                  Pressure on nearby nerves is often what causes the pain,
                  tingling or weakness associated with a slip disc.
                </li>
                <li>
                  Severity varies widely — some cases cause mild discomfort,
                  while others involve significant pain and restricted movement.
                </li>
                <li>
                  With appropriate care, many patients experience meaningful
                  improvement without requiring surgical intervention.
                </li>
              </ul>
            </section>

            {/* Causes and Risk Factors */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding what contributes to disc-related problems helps
                guide a more effective, personalized care plan.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Age-related wear and tear that gradually weakens the discs
                  over time.
                </li>
                <li>
                  Poor posture, especially prolonged sitting or incorrect
                  lifting techniques.
                </li>
                <li>
                  Sudden strain, injury or heavy lifting without proper support.
                </li>
                <li>
                  Sedentary lifestyle combined with weak core and back muscles.
                </li>
                <li>
                  Excess body weight, which places additional strain on the
                  spine.
                </li>
                <li>
                  Repetitive physical strain from certain occupations or
                  activities.
                </li>
                <li>
                  Smoking, which can affect disc health and healing capacity.
                </li>
                <li>
                  Genetic factors that may increase individual susceptibility.
                </li>
              </ul>
            </section>

            {/* Signs and Symptoms */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs and Symptoms of Slip Disc
              </h2>

              <p className="mb-4 text-gray-700">
                Recognizing symptoms early allows for timely consultation and a
                more comfortable path toward recovery.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Persistent lower back or neck pain, which may worsen with
                  movement.
                </li>
                <li>
                  Pain that radiates down the leg (sciatica) or into the arm,
                  depending on the affected area.
                </li>
                <li>
                  Numbness or tingling sensations in the arms, legs, hands or
                  feet.
                </li>
                <li>
                  Muscle weakness in the affected limb, making certain movements
                  difficult.
                </li>
                <li>
                  Pain that worsens with sitting, bending, coughing or sneezing.
                </li>
                <li>Reduced flexibility and stiffness in the back or neck.</li>
                <li>
                  Difficulty standing or walking for extended periods in more
                  advanced cases.
                </li>
                <li>
                  Sudden loss of bladder or bowel control, significant weakness
                  in both legs, or rapidly worsening numbness are warning signs
                  of a serious condition and require immediate emergency medical
                  attention.
                </li>
              </ul>
            </section>

            {/* Ayurvedic Understanding */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic Understanding of Slip Disc
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes disc-related and spinal conditions under
                  disorders linked to aggravated Vata dosha, which governs
                  movement, the nervous system and joint function in the body.
                </li>
                <li>
                  Vata is considered the primary dosha responsible for movement,
                  and its imbalance is traditionally linked with pain, stiffness
                  and nerve-related disturbances.
                </li>
                <li>
                  Weak Agni (digestive fire) and poor tissue nourishment are
                  sometimes seen as contributing to weakened Asthi Dhatu (bone
                  tissue) and Majja Dhatu (nerve tissue).
                </li>
                <li>
                  Traditional Ayurvedic care for Vata-related spinal disorders
                  focuses on pacifying aggravated Vata, nourishing tissues and
                  restoring healthy movement.
                </li>
                <li>
                  Panchakarma-based therapies are traditionally valued for their
                  role in easing stiffness, reducing discomfort and supporting
                  overall spinal health.
                </li>
                <li>
                  The approach considers posture, daily routine, diet, physical
                  activity and mental well-being together, rather than
                  addressing pain in isolation.
                </li>
              </ul>
            </section>

            {/* Treatment Approach */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Ayurvedic Treatment Approach for Slip Disc
              </h2>

              <p className="mb-6 text-gray-700">
                At Balprada, Ayurvedic care for slip disc is planned around
                each patient&apos;s specific symptoms, severity and overall
                physical condition.
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation and Assessment
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors review the patient&apos;s history, pain
                      pattern, movement restrictions and any existing
                      diagnostic reports such as MRI or X-ray.
                    </li>
                    <li>
                      Assessment includes evaluating posture, muscle strength,
                      flexibility and any associated numbness, tingling or
                      weakness.
                    </li>
                    <li>
                      Severity is carefully assessed to understand whether the
                      case is suitable for Ayurvedic and Panchakarma-based care.
                    </li>
                    <li>
                      A personalized care plan is created based on the
                      patient&apos;s constitution (Prakriti) and the specific
                      area affected.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. In-House Ayurvedic Herbal Medicines
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares its own herbal medicines to maintain
                      consistent quality, purity and dosage.
                    </li>
                    <li>
                      Formulations are selected to pacify aggravated Vata, ease
                      discomfort and support nerve and tissue health.
                    </li>
                    <li>
                      Herbal support is generally aimed at reducing pain,
                      improving flexibility and supporting the body&apos;s
                      natural healing process.
                    </li>
                    <li>
                      All medicines are given under the close supervision of
                      experienced vaidyas and adjusted through regular
                      follow-up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Panchakarma and Therapeutic Procedures
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Select Panchakarma therapies, such as medicated oil
                      massage and herbal fomentation, may be recommended based
                      on the patient&apos;s condition.
                    </li>
                    <li>
                      Therapies are planned individually, with attention to the
                      specific spinal area affected and the patient&apos;s
                      tolerance for treatment.
                    </li>
                    <li>
                      These procedures traditionally aim to ease muscle tension,
                      improve circulation and support relief from Vata-related
                      discomfort.
                    </li>
                    <li>
                      The intensity and type of therapy are adjusted carefully
                      as the patient&apos;s condition improves over time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Physiotherapy and Gentle Movement
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy support is offered alongside Ayurvedic care
                      to help patients rebuild strength and flexibility safely.
                    </li>
                    <li>
                      Gentle stretching and corrective exercises are introduced
                      gradually, based on the patient&apos;s pain levels and
                      progress.
                    </li>
                    <li>
                      Guidance on safe movement patterns helps patients avoid
                      further strain during daily activities.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diet and Nutrition Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A Vata-balancing diet is recommended, focusing on warm,
                      nourishing and easily digestible foods.
                    </li>
                    <li>
                      Patients are guided toward foods that support tissue
                      strength and reduce dryness or stiffness associated with
                      Vata imbalance.
                    </li>
                    <li>
                      Adequate hydration and suitable healthy fats are
                      encouraged as part of the overall nutrition plan.
                    </li>
                    <li>
                      Cold, dry and heavily processed foods are typically
                      minimized, as these are traditionally seen as aggravating
                      to Vata.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Yoga, Naturopathy and Lifestyle Correction
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Specific yoga postures and gentle stretching exercises are
                      recommended, based on the patient&apos;s condition and
                      tolerance.
                    </li>
                    <li>
                      Naturopathy-based routines emphasize rest, correct posture
                      and gradual return to normal activity.
                    </li>
                    <li>
                      A disciplined daily routine (Dinacharya), including
                      consistent rest and activity balance, is encouraged.
                    </li>
                    <li>
                      Guidance on posture correction for sitting, standing and
                      lifting is provided to help prevent recurrence.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    7. Regular Monitoring and Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up consultations help track pain levels, mobility
                      improvement and overall recovery progress.
                    </li>
                    <li>
                      Patients are encouraged to share any changes in symptoms,
                      especially numbness, weakness or worsening pain.
                    </li>
                    <li>
                      Consistency in therapy, diet, exercise and posture
                      correction is emphasized as key to lasting relief.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Herbs */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Commonly Used Ayurvedic Herbs for Slip Disc Support
              </h2>

              <p className="mb-4 text-gray-700">
                Several traditional herbs are associated with joint, nerve and
                tissue health in Ayurvedic texts. These are used only after
                proper evaluation and under medical guidance:
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Ashwagandha (Withania somnifera)
                  </span>{" "}
                  – traditionally used to support strength, tissue nourishment
                  and overall vitality.
                </li>
                <li>
                  <span className="font-semibold">
                    Guggul (Commiphora mukul)
                  </span>{" "}
                  – classically associated with supporting joint comfort and
                  healthy inflammation response.
                </li>
                <li>
                  <span className="font-semibold">
                    Nirgundi (Vitex negundo)
                  </span>{" "}
                  – traditionally used to support relief from Vata-related pain
                  and stiffness.
                </li>
                <li>
                  <span className="font-semibold">
                    Rasna (Pluchea lanceolata)
                  </span>{" "}
                  – valued in classical texts for its traditional role in easing
                  joint and muscular discomfort.
                </li>
                <li>
                  <span className="font-semibold">
                    Shallaki (Boswellia serrata)
                  </span>{" "}
                  – traditionally associated with supporting joint comfort and
                  mobility.
                </li>
                <li>
                  <span className="font-semibold">Dashmool</span> – a classical
                  combination of ten roots traditionally used to pacify Vata and
                  support nerve health.
                </li>
                <li>
                  <span className="font-semibold">
                    Punarnava (Boerhavia diffusa)
                  </span>{" "}
                  – traditionally used to support healthy fluid balance and
                  reduce swelling.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Herbal recommendations vary from patient to patient based on
                their constitution and the severity of the condition. Herbs
                should always be taken under a qualified vaidya&apos;s guidance
                for safe and effective results.
              </p>
            </section>

            {/* Diet and Routine */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Favor warm, nourishing, easily digestible meals that support
                  tissue strength and reduce Vata aggravation.
                </li>
                <li>
                  Include healthy fats, warm soups and suitable cooked
                  vegetables as part of the daily diet.
                </li>
                <li>
                  Avoid cold, dry, raw or heavily processed foods that can
                  aggravate stiffness and discomfort.
                </li>
                <li>
                  Maintain correct posture while sitting, standing and lifting
                  to reduce strain on the spine.
                </li>
                <li>
                  Avoid prolonged sitting; take short movement breaks throughout
                  the day where possible.
                </li>
                <li>
                  Practice gentle stretching and recommended exercises
                  consistently, as guided by the treating team.
                </li>
                <li>
                  Prioritize adequate rest and quality sleep to support the
                  body&apos;s natural healing process.
                </li>
                <li>
                  Avoid heavy lifting or sudden strenuous activity until cleared
                  by the treating doctor.
                </li>
              </ul>
            </section>

            {/* Why Choose Balprada */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Ayurvedic Slip Disc Care?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  35 years of trusted experience in Ayurvedic treatment and
                  patient-centered care.
                </li>
                <li>
                  In-house preparation of herbal medicines to maintain quality
                  and consistency across every batch.
                </li>
                <li>
                  Experienced doctors who evaluate each case individually before
                  recommending a care plan.
                </li>
                <li>
                  Peaceful, ashram-based healing environment that supports rest,
                  discipline and steady recovery.
                </li>
                <li>
                  Integrated facilities including Panchakarma, physiotherapy,
                  yoga, naturopathy and an in-house pathology lab.
                </li>
                <li>
                  A structured care process — from consultation to follow-up —
                  that keeps patients supported at every stage.
                </li>
                <li>
                  Free OPD consultation available on the 15th of every month.
                </li>
                <li>
                  Two accessible branches in Moradabad, Uttar Pradesh, with
                  daily OPD timings.
                </li>
                <li>
                  A calm, service-first approach (seva sankalp) rooted in the
                  legacy of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Continued follow-up guidance to help patients maintain
                  mobility and prevent recurrence over time.
                </li>
              </ul>
            </section>

            
            {/* CTA */}
            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Consultation for Slip Disc Treatment
              </h2>

              <p className="mb-6 text-black">
                Contact Balprada Ayurvedic Hospital &amp; Research Center to
                discuss your symptoms, diagnostic reports and suitable Ayurvedic
                care options with an experienced team.
              </p>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                      Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
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
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Contact Balprada</p>

                    <div className="flex flex-wrap items-center gap-3 text-black">
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

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/treatments">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-blue-800 hover:text-white">
                    Explore Treatments
                  </button>
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}