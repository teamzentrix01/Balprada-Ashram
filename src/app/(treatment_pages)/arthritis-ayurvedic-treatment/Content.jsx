import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaArthritisAyurvedicTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure arthritis completely?",
      a: "Many patients experience meaningful relief from pain and improved joint mobility with disciplined Ayurvedic care, Panchakarma therapies and lifestyle correction. Outcomes vary depending on the type and severity of arthritis.",
    },
    {
      q: "Q2. What is the difference between osteoarthritis and rheumatoid arthritis in Ayurveda?",
      a: "Osteoarthritis is generally understood as Sandhivata, related to age-related joint wear, while rheumatoid arthritis is often associated with Amavata, involving accumulated toxins and an inflammatory pattern. Each requires a different approach to care.",
    },
    {
      q: "Q3. Is Panchakarma effective for arthritis pain?",
      a: "Panchakarma-based therapies, such as medicated oil massage and fomentation, are traditionally used to ease Vata-related pain and stiffness. Our doctors evaluate suitability based on each patient's specific condition.",
    },
    {
      q: "Q4. How long does Ayurvedic treatment for arthritis usually take?",
      a: "Duration depends on the type and severity of arthritis, the joints affected and the patient's response to treatment. Progress is reviewed at regular follow-up visits.",
    },
    {
      q: "Q5. Does Balprada offer free consultation for arthritis patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Q6. What foods should be avoided with arthritis?",
      a: "Cold, raw, heavy and processed foods are generally best limited, along with purine-rich foods for patients with gout-related concerns.",
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
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-6 font-serif text-3xl text-gray-900">
                Arthritis Ayurvedic Treatment at Balprada Ayurvedic Hospital
                &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Arthritis is a common condition affecting the joints, causing
                  pain, stiffness and reduced mobility that can gradually impact
                  everyday activities.
                </li>
                <li>
                  At Balprada Ayurvedic Hospital &amp; Research Center, we offer
                  personalized Ayurvedic consultation, in-house herbal
                  medicines, Panchakarma-based therapies and disciplined
                  lifestyle guidance to help ease joint discomfort, improve
                  mobility and support long-term joint health.
                </li>
                <li>
                  With 35 years of experience in Ayurveda, an experienced team
                  of vaidyas and a peaceful ashram-based environment, Balprada
                  focuses on personalized, compassionate and consistent care for
                  every patient.
                </li>
              </ul>
            </div>

            {/* Section 2 — What Is Arthritis */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Is Arthritis?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Arthritis refers to inflammation or degeneration of one or
                  more joints, leading to pain, swelling, stiffness and, over
                  time, reduced range of motion.
                </li>
                <li>
                  Arthritis is a broad term covering more than a hundred
                  different joint-related conditions, each with its own pattern
                  and cause.
                </li>
                <li>
                  The two most common types are osteoarthritis, related to wear
                  and tear of joint cartilage, and rheumatoid arthritis, an
                  autoimmune condition affecting the joint lining.
                </li>
                <li>
                  Arthritis can affect any joint in the body, though knees,
                  hips, hands, wrists and the spine are commonly involved.
                </li>
                <li>
                  The condition often develops gradually, with symptoms
                  worsening over months or years if not managed consistently.
                </li>
                <li>
                  Severity varies widely — some patients experience mild,
                  occasional discomfort, while others face significant pain and
                  movement restriction.
                </li>
                <li>
                  With consistent care, many patients experience meaningful
                  improvement in pain levels, joint function and overall quality
                  of life.
                </li>
              </ul>
            </div>

            {/* Section 3 — Types and Causes */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Common Types and Causes of Arthritis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Osteoarthritis:</span>{" "}
                  gradual wear and tear of joint cartilage, often linked to
                  age, weight and repetitive joint use.
                </li>
                <li>
                  <span className="font-semibold">Rheumatoid arthritis:</span>{" "}
                  an autoimmune condition where the body&apos;s immune system
                  mistakenly attacks the joint lining.
                </li>
                <li>
                  <span className="font-semibold">Gout:</span> caused by the
                  buildup of uric acid crystals in joints, often affecting the
                  big toe initially.
                </li>
                <li>
                  <span className="font-semibold">
                    Cervical and lumbar spondylitis:
                  </span>{" "}
                  arthritis-related changes affecting the neck and lower spine.
                </li>
                <li>
                  <span className="font-semibold">
                    Post-injury arthritis:
                  </span>{" "}
                  joint damage following an old injury that gradually develops
                  into arthritis over time.
                </li>
                <li>
                  Other contributing factors include obesity, sedentary
                  lifestyle, poor posture, family history and certain metabolic
                  conditions.
                </li>
              </ul>
            </div>

            {/* Section 4 — Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs and Symptoms of Arthritis
              </h2>

              <p className="mb-6 text-gray-700">
                Recognizing symptoms early allows for timely consultation and a
                more effective, comfortable recovery process.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Persistent joint pain that may worsen with activity or at the
                  end of the day.
                </li>
                <li>
                  Stiffness, especially noticeable in the morning or after
                  periods of rest.
                </li>
                <li>
                  Swelling, warmth or tenderness around the affected joint.
                </li>
                <li>
                  Reduced range of motion and difficulty performing everyday
                  movements.
                </li>
                <li>
                  A grinding or cracking sensation during joint movement in some
                  cases.
                </li>
                <li>
                  Fatigue and generalized discomfort, particularly common with
                  rheumatoid arthritis.
                </li>
                <li>
                  Joint deformity or visible changes in more advanced or
                  long-standing cases.
                </li>
              </ul>
            </div>

            {/* Section 5 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                The Ayurvedic Understanding of Arthritis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes most arthritis-related conditions under
                  &quot;Sandhivata&quot; (joint disorders linked to Vata) or
                  &quot;Amavata&quot; (a condition involving accumulated toxins
                  affecting the joints, closely related to rheumatoid
                  arthritis).
                </li>
                <li>
                  Vata dosha governs movement and joint function, and its
                  aggravation is traditionally associated with dryness, pain and
                  stiffness in the joints.
                </li>
                <li>
                  Amavata is traditionally linked to weakened Agni (digestive
                  fire), which allows Ama (toxins) to accumulate and settle in
                  joint tissues, causing inflammation and swelling.
                </li>
                <li>
                  Sandhivata is more commonly associated with age-related joint
                  wear, while Amavata often reflects a more active, inflammatory
                  pattern.
                </li>
                <li>
                  Ayurvedic care traditionally focuses on pacifying aggravated
                  Vata, reducing Ama through improved digestion, and nourishing
                  joint tissues.
                </li>
                <li>
                  Panchakarma-based therapies are traditionally valued for
                  supporting detoxification, reducing stiffness and improving
                  joint comfort.
                </li>
                <li>
                  The approach considers diet, daily routine, physical activity
                  and mental well-being together, rather than addressing joint
                  pain in isolation.
                </li>
              </ul>
            </div>

            {/* Section 6 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Our Ayurvedic Treatment Approach for Arthritis
              </h2>

              <p className="mb-6 text-gray-700">
                At Balprada, Ayurvedic care for arthritis is planned around each
                patient&apos;s specific type, severity and overall health
                condition.
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation and Assessment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors review the patient&apos;s history, joint
                      symptoms, pattern of pain and any existing diagnostic
                      reports or blood tests.
                    </li>
                    <li>
                      Assessment includes evaluating the type of arthritis,
                      affected joints, severity and any associated conditions.
                    </li>
                    <li>
                      Existing reports, such as uric acid levels or rheumatoid
                      factor tests, are reviewed to understand the underlying
                      pattern.
                    </li>
                    <li>
                      A personalized care plan is created based on the
                      patient&apos;s constitution (Prakriti) and the specific
                      type of arthritis involved.
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
                      Formulations are selected to pacify aggravated Vata,
                      reduce Ama accumulation and support joint tissue health.
                    </li>
                    <li>
                      Herbal support is generally aimed at easing pain,
                      reducing stiffness and supporting improved joint mobility.
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
                      specific joints affected and the patient&apos;s overall
                      strength.
                    </li>
                    <li>
                      These procedures traditionally aim to reduce stiffness,
                      ease discomfort and support the body&apos;s natural
                      detoxification process.
                    </li>
                    <li>
                      The type and intensity of therapy are adjusted as the
                      patient&apos;s symptoms and mobility improve over time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Diet and Nutrition Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A Vata-balancing, anti-inflammatory diet is recommended,
                      focused on warm, nourishing and easily digestible foods.
                    </li>
                    <li>
                      Patients are guided toward foods that support joint
                      lubrication and reduce Ama accumulation.
                    </li>
                    <li>
                      Guidance on suitable foods is tailored to the specific
                      type of arthritis, such as reducing purine-rich foods for
                      gout-related concerns.
                    </li>
                    <li>
                      Cold, dry, heavy and heavily processed foods are typically
                      minimized, as these are traditionally seen as aggravating
                      to Vata and Ama.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Yoga, Physiotherapy and Gentle Movement
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Specific yoga postures and gentle stretching exercises are
                      recommended based on the patient&apos;s affected joints
                      and tolerance.
                    </li>
                    <li>
                      Physiotherapy support helps patients rebuild strength,
                      flexibility and joint stability safely.
                    </li>
                    <li>
                      Guidance on joint-friendly movement patterns helps reduce
                      strain during daily activities.
                    </li>
                    <li>
                      Activity levels are increased gradually as pain reduces
                      and mobility improves.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Lifestyle Correction and Daily Routine
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A disciplined daily routine (Dinacharya), including
                      consistent activity and rest balance, is encouraged.
                    </li>
                    <li>
                      Guidance on maintaining a healthy body weight is provided,
                      since excess weight places additional strain on weight-
                      bearing joints.
                    </li>
                    <li>
                      Patients are supported in building sustainable daily
                      habits that reduce joint stress over time.
                    </li>
                    <li>
                      The calm, service-oriented ashram environment supports
                      both physical recovery and emotional steadiness.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    7. Regular Monitoring and Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up consultations help track pain levels, joint
                      mobility and overall recovery progress.
                    </li>
                    <li>
                      Patients are encouraged to repeat relevant diagnostic
                      tests periodically to monitor improvement.
                    </li>
                    <li>
                      Consistency in diet, medicine, therapy and daily routine
                      is emphasized as key to lasting relief.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 — Herbs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Commonly Used Ayurvedic Herbs for Arthritis Support
              </h2>

              <p className="mb-6 text-gray-700">
                Several traditional herbs are associated with joint health and
                Vata balance in Ayurvedic texts. These are used only after
                proper evaluation and under medical guidance:
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Guggul (Commiphora mukul) – classically associated with
                  supporting joint comfort and healthy inflammation response.
                </li>
                <li>
                  Shallaki (Boswellia serrata) – traditionally valued for
                  supporting joint comfort and mobility.
                </li>
                <li>
                  Rasna (Pluchea lanceolata) – used in classical texts for
                  easing joint and muscular discomfort.
                </li>
                <li>
                  Nirgundi (Vitex negundo) – traditionally used to support
                  relief from Vata-related pain and stiffness.
                </li>
                <li>
                  Ashwagandha (Withania somnifera) – traditionally used to
                  support strength, tissue nourishment and overall vitality.
                </li>
                <li>
                  Guduchi (Tinospora cordifolia) – associated with supporting
                  immunity and reducing Ama accumulation.
                </li>
                <li>
                  Dashmool – a classical combination of ten roots traditionally
                  used to pacify Vata and support joint health.
                </li>
                <li>
                  Herbal recommendations vary from patient to patient based on
                  their constitution and the type of arthritis. Herbs should
                  always be taken under a qualified vaidya&apos;s guidance for
                  safe and effective results.
                </li>
              </ul>
            </div>

            {/* Section 8 — Diet and Routine */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Favor warm, nourishing, easily digestible meals that support
                  digestion and reduce Ama accumulation.
                </li>
                <li>
                  Include healthy fats, warm soups and suitably cooked
                  vegetables as part of the daily diet.
                </li>
                <li>
                  Avoid cold, raw, heavy and heavily processed foods that can
                  aggravate stiffness and inflammation.
                </li>
                <li>
                  Maintain a healthy body weight to reduce unnecessary strain on
                  weight-bearing joints.
                </li>
                <li>
                  Practice gentle stretching and recommended exercises
                  consistently, as guided by the treating team.
                </li>
                <li>
                  Avoid prolonged inactivity; incorporate short movement breaks
                  throughout the day.
                </li>
                <li>
                  Prioritize adequate rest and quality sleep to support the
                  body&apos;s natural healing process.
                </li>
                <li>
                  Avoid self-medication with over-the-counter painkillers
                  without medical guidance, especially for long-term use.
                </li>
              </ul>
            </div>

            {/* Section 9 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Ayurvedic Arthritis Care?
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
                  Continued follow-up guidance to help patients maintain joint
                  health and mobility over the long term.
                </li>
              </ul>
            </div>

            

        

            {/* Section 13 — CTA */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book an Arthritis Consultation
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Receive personalized Ayurvedic consultation for arthritis,
                  joint stiffness, pain and mobility concerns.
                </li>
                <li>
                  Discuss your joint symptoms, previous reports, current
                  medicines and treatment history with experienced vaidyas.
                </li>
                <li>
                  Get guidance related to herbal medicines, Panchakarma,
                  physiotherapy, yoga, diet and daily routine.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every
                  month.
                </li>
              </ul>

              <div className="mb-6 space-y-4">
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

                <div className="mt-4 flex items-start gap-3">
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
                        href="tel:8126364606"
                        className="hover:underline"
                      >
                        8126364606
                      </a>

                      <span className="text-gray-400">|</span>

                      <a
                        href="tel:9410447000"
                        className="hover:underline"
                      >
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
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
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Explore Treatments
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 12 — FAQs */}
            <div className="mb-12">
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
            </div>
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