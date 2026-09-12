import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaSpondylosisAyurvedicTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure spondylosis completely?",
      a: "Spondylosis involves natural, age-related spinal changes, so complete reversal isn&apos;t always possible. However, many patients experience significant relief from pain and improved mobility with disciplined Ayurvedic care and Panchakarma therapies.",
    },
    {
      q: "Q2. What is the difference between cervical and lumbar spondylosis?",
      a: "Cervical spondylosis affects the neck region, while lumbar spondylosis affects the lower back. Both are related to age-related spinal degeneration but differ in symptoms and affected movements.",
    },
    {
      q: "Q3. Is Panchakarma effective for spondylosis pain?",
      a: "Panchakarma-based therapies, such as medicated oil massage and fomentation, are traditionally used to ease Vata-related pain and stiffness. Our doctors evaluate suitability based on each patient&apos;s specific condition.",
    },
    {
      q: "Q4. How long does Ayurvedic treatment for spondylosis usually take?",
      a: "Duration depends on the severity of the condition, the spinal region affected and the patient&apos;s response to treatment. Progress is reviewed at regular follow-up visits.",
    },
    {
      q: "Q5. Does Balprada offer free consultation for spondylosis patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Q6. Can posture correction really help with spondylosis?",
      a: "Yes, correcting posture during sitting, sleeping and screen use can meaningfully reduce strain on the spine and support long-term symptom management.",
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
                Spondylosis Ayurvedic Treatment at Balprada Ayurvedic Hospital
                &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Spondylosis is a common, age-related condition involving
                  gradual wear and tear of the spine, often causing pain,
                  stiffness and reduced mobility in the neck or lower back.
                </li>
                <li>
                  At Balprada Ayurvedic Hospital &amp; Research Center, we offer
                  personalized Ayurvedic consultation, in-house herbal
                  medicines, Panchakarma-based therapies and disciplined
                  lifestyle guidance to help ease discomfort, support spinal
                  flexibility and improve everyday movement.
                </li>
                <li>
                  With 35 years of experience in Ayurveda, an experienced team
                  of vaidyas and a peaceful ashram-based environment, Balprada
                  focuses on personalized, compassionate and consistent care for
                  every patient.
                </li>
              </ul>
            </div>

            {/* Section 2 — What Is Spondylosis */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Is Spondylosis?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Spondylosis refers to the gradual degeneration of the spinal
                  discs, joints and bones, most commonly affecting the cervical
                  (neck) or lumbar (lower back) regions.
                </li>
                <li>
                  The condition develops naturally with age, as spinal discs
                  lose hydration and flexibility over time.
                </li>
                <li>
                  Spondylosis can involve disc thinning, bone spur formation and
                  reduced space between vertebrae.
                </li>
                <li>
                  It is commonly categorized as cervical spondylosis (neck) or
                  lumbar spondylosis (lower back), depending on the affected
                  region.
                </li>
                <li>
                  Many people show signs of spondylosis on imaging without
                  experiencing significant symptoms, especially in early stages.
                </li>
                <li>
                  Symptoms typically develop gradually, though certain
                  postures, injuries or repetitive strain can accelerate the
                  process.
                </li>
                <li>
                  With consistent Ayurvedic care and lifestyle correction, many
                  patients experience meaningful improvement in pain, stiffness
                  and mobility.
                </li>
              </ul>
            </div>

            {/* Section 3 — Causes and Risk Factors */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <p className="mb-6 text-gray-700">
                Understanding what contributes to spondylosis helps guide a more
                effective, personalized care plan.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Natural age-related wear and tear of spinal discs and joints.
                </li>
                <li>
                  Prolonged poor posture, especially during desk work or
                  prolonged screen use.
                </li>
                <li>
                  Sedentary lifestyle with minimal spinal movement and weak
                  supporting muscles.
                </li>
                <li>
                  Previous spinal injury or long-term repetitive strain.
                </li>
                <li>
                  Excess body weight, which places additional load on the spine.
                </li>
                <li>
                  Occupational factors involving repetitive bending, lifting or
                  prolonged sitting.
                </li>
                <li>
                  Genetic predisposition and family history of spinal
                  conditions.
                </li>
                <li>
                  Smoking, which can affect disc health and the body&apos;s
                  natural healing capacity.
                </li>
              </ul>
            </div>

            {/* Section 4 — Signs and Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs and Symptoms of Spondylosis
              </h2>

              <p className="mb-6 text-gray-700">
                Recognizing symptoms early allows for timely consultation and a
                more comfortable, well-managed recovery process.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Persistent neck or lower back pain, often worsening with
                  prolonged sitting or certain movements.
                </li>
                <li>
                  Stiffness, particularly noticeable in the morning or after
                  periods of inactivity.
                </li>
                <li>
                  Reduced flexibility and difficulty turning the neck or bending
                  the back.
                </li>
                <li>
                  Headaches originating from neck tension, especially common in
                  cervical spondylosis.
                </li>
                <li>
                  Tingling, numbness or weakness in the arms or legs when nerves
                  are affected.
                </li>
                <li>
                  A grinding or clicking sensation during neck or back movement
                  in some cases.
                </li>
                <li>
                  Muscle spasms or tightness around the affected spinal region.
                </li>
                <li>
                  Sudden loss of bladder or bowel control, significant weakness
                  in the limbs or rapidly worsening numbness are warning signs
                  of a serious condition and require immediate emergency
                  medical attention.
                </li>
              </ul>
            </div>

            {/* Section 5 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                The Ayurvedic Understanding of Spondylosis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes spinal degeneration conditions under
                  &quot;Griva Sandhigata Vata&quot; (cervical spondylosis) and
                  &quot;Katigraha&quot; or &quot;Kati Shoola&quot; (lumbar
                  spondylosis), both linked to aggravated Vata dosha.
                </li>
                <li>
                  Vata dosha governs movement and joint function, and its
                  aggravation is traditionally associated with dryness, stiffness
                  and degeneration in spinal tissues.
                </li>
                <li>
                  Weak Agni (digestive fire) and poor tissue nourishment are
                  traditionally seen as contributing to weakened Asthi Dhatu
                  (bone tissue) and reduced disc cushioning.
                </li>
                <li>
                  Ayurvedic care for spondylosis traditionally focuses on
                  pacifying aggravated Vata, nourishing spinal tissues and
                  restoring healthy, comfortable movement.
                </li>
                <li>
                  Panchakarma-based therapies are traditionally valued for their
                  role in easing stiffness, improving circulation and supporting
                  long-term spinal health.
                </li>
                <li>
                  The approach considers posture, daily routine, diet, physical
                  activity and mental well-being together, rather than addressing
                  pain in isolation.
                </li>
              </ul>
            </div>

            {/* Section 6 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Our Ayurvedic Treatment Approach for Spondylosis
              </h2>

              <p className="mb-6 text-gray-700">
                At Balprada, Ayurvedic care for spondylosis is planned around
                each patient&apos;s specific symptoms, affected spinal region
                and overall physical condition.
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation and Assessment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors review the patient&apos;s history, pain
                      pattern, posture and any existing diagnostic reports such
                      as X-ray or MRI.
                    </li>
                    <li>
                      Assessment includes evaluating neck or back flexibility,
                      muscle strength and any associated numbness, tingling or
                      weakness.
                    </li>
                    <li>
                      Severity is carefully assessed to understand whether the
                      case is suitable for Ayurvedic and Panchakarma-based care.
                    </li>
                    <li>
                      A personalized care plan is created based on the
                      patient&apos;s constitution (Prakriti) and the specific
                      spinal region affected.
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
                      discomfort and support spinal tissue nourishment.
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
                      specific spinal region affected and the patient&apos;s
                      tolerance for treatment.
                    </li>
                    <li>
                      These procedures traditionally aim to ease muscle tension,
                      improve circulation and support relief from Vata-related
                      stiffness.
                    </li>
                    <li>
                      The intensity and type of therapy are adjusted carefully as
                      the patient&apos;s condition improves over time.
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
                      to help patients rebuild strength, flexibility and posture
                      control.
                    </li>
                    <li>
                      Gentle stretching and corrective exercises are introduced
                      gradually, based on the patient&apos;s pain levels and
                      progress.
                    </li>
                    <li>
                      Guidance on safe movement patterns helps patients avoid
                      further spinal strain during daily activities.
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
                      Guidance on posture correction for sitting, standing,
                      sleeping and screen use is provided to help prevent
                      recurrence.
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
            </div>

            {/* Section 7 — Herbs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Commonly Used Ayurvedic Herbs for Spondylosis Support
              </h2>

              <p className="mb-6 text-gray-700">
                Several traditional herbs are associated with joint, nerve and
                spinal tissue health in Ayurvedic texts. These are used only
                after proper evaluation and under medical guidance:
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ashwagandha (Withania somnifera) – traditionally used to
                  support strength, tissue nourishment and overall vitality.
                </li>
                <li>
                  Guggul (Commiphora mukul) – classically associated with
                  supporting joint comfort and healthy inflammation response.
                </li>
                <li>
                  Nirgundi (Vitex negundo) – traditionally used to support
                  relief from Vata-related pain and stiffness.
                </li>
                <li>
                  Rasna (Pluchea lanceolata) – valued in classical texts for
                  easing joint and muscular discomfort.
                </li>
                <li>
                  Shallaki (Boswellia serrata) – traditionally associated with
                  supporting joint comfort and mobility.
                </li>
                <li>
                  Dashmool – a classical combination of ten roots traditionally
                  used to pacify Vata and support spinal health.
                </li>
                <li>
                  Punarnava (Boerhavia diffusa) – traditionally used to support
                  healthy fluid balance and reduce swelling.
                </li>
                <li>
                  Herbal recommendations vary from patient to patient based on
                  their constitution and the severity of the condition. Herbs
                  should always be taken under a qualified vaidya&apos;s
                  guidance for safe and effective results.
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
                  Maintain correct posture while sitting, standing, sleeping and
                  using screens or devices.
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
            </div>

            {/* Section 9 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Ayurvedic Spondylosis Care?
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
            </div>

            

            

            

            {/* Section 13 — CTA */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Spondylosis Consultation
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Receive personalized Ayurvedic consultation for cervical or
                  lumbar spondylosis, spinal stiffness and mobility concerns.
                </li>
                <li>
                  Discuss your pain pattern, posture, diagnostic reports and
                  current treatment with experienced vaidyas.
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