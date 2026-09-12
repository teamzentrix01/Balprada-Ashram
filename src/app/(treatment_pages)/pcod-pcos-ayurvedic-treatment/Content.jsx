import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaPcodPcosAyurvedicTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure PCOD/PCOS completely?",
      a: "Many patients experience meaningful improvement in menstrual regularity, weight and related symptoms with disciplined Ayurvedic care, diet correction and lifestyle changes. Outcomes vary depending on individual severity and consistency of care.",
    },
    {
      q: "Q2. Is Ayurvedic treatment for PCOD/PCOS safe alongside allopathic medication?",
      a: "Many patients use supportive Ayurvedic care alongside their prescribed medical treatment. Our doctors review current medications carefully before suggesting any herbal support.",
    },
    {
      q: "Q3. How long does Ayurvedic treatment for PCOD/PCOS usually take?",
      a: "Duration varies based on severity, hormonal pattern and lifestyle discipline. Our doctors review progress at regular follow-up visits and adjust the plan accordingly.",
    },
    {
      q: "Q4. Can PCOD/PCOS affect fertility?",
      a: "Yes, irregular ovulation associated with PCOD/PCOS can affect fertility in some women. Our team addresses this sensitively as part of a broader, personalized care plan.",
    },
    {
      q: "Q5. Does Balprada offer free consultation for PCOD/PCOS patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Q6. What lifestyle changes help most with PCOD/PCOS?",
      a: "Consistent diet correction, regular physical activity, stress management and good sleep habits together tend to offer the most meaningful, sustainable improvement.",
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
                PCOD/PCOS Ayurvedic Treatment at Balprada Ayurvedic Hospital
                &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  PCOD (Polycystic Ovarian Disease) and PCOS (Polycystic Ovary
                  Syndrome) are common hormonal conditions affecting many women
                  today, often bringing irregular periods, weight changes, skin
                  concerns and emotional strain.
                </li>
                <li>
                  At Balprada Ayurvedic Hospital &amp; Research Center, we offer
                  sensitive, personalized Ayurvedic consultation, in-house
                  herbal medicines, diet correction and disciplined lifestyle
                  guidance to help support hormonal balance and overall
                  reproductive wellness.
                </li>
                <li>
                  With 35 years of experience in Ayurveda, an experienced team
                  of vaidyas and a peaceful ashram-based environment, Balprada
                  focuses on private, compassionate and consistent care for
                  every patient.
                </li>
              </ul>
            </div>

            {/* Section 2 — What Is PCOD/PCOS */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Is PCOD/PCOS?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  PCOD and PCOS are related hormonal conditions in which the
                  ovaries produce excess androgens (male hormones) and develop
                  multiple small cysts, leading to irregular ovulation and a
                  range of related symptoms.
                </li>
                <li>
                  PCOD is generally considered a more common and often milder
                  condition, while PCOS is regarded as a more complex metabolic
                  and hormonal syndrome.
                </li>
                <li>
                  Both conditions are closely linked to hormonal imbalance,
                  insulin resistance and disrupted ovulation patterns.
                </li>
                <li>
                  Symptoms and severity vary widely from person to person, with
                  some experiencing mild irregularities and others facing more
                  pronounced hormonal disruption.
                </li>
                <li>
                  The condition typically develops during the reproductive years
                  and can affect fertility, metabolism and skin health if left
                  unmanaged.
                </li>
                <li>
                  With early diagnosis and consistent care, many women see
                  meaningful improvement in symptoms and menstrual regularity.
                </li>
                <li>
                  Long-term management often combines diet, lifestyle correction
                  and medical or Ayurvedic support tailored to the individual.
                </li>
              </ul>
            </div>

            {/* Section 3 — Causes and Risk Factors */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <p className="mb-6 text-gray-700">
                Understanding what contributes to PCOD/PCOS helps guide a more
                effective, personalized care plan.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Hormonal imbalance, particularly elevated androgen levels.
                </li>
                <li>
                  Insulin resistance, which is closely linked to both PCOD and
                  PCOS.
                </li>
                <li>
                  Genetic and family history of PCOD, PCOS or related metabolic
                  conditions.
                </li>
                <li>
                  Excess body weight or obesity, which can worsen hormonal
                  imbalance.
                </li>
                <li>
                  Sedentary lifestyle with minimal regular physical activity.
                </li>
                <li>
                  Chronic stress, which can disrupt hormonal regulation over
                  time.
                </li>
                <li>
                  Poor dietary habits, including high intake of refined sugar
                  and processed food.
                </li>
                <li>
                  Disrupted sleep patterns, which can further affect hormonal
                  balance.
                </li>
              </ul>
            </div>

            {/* Section 4 — Signs and Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs and Symptoms of PCOD/PCOS
              </h2>

              <p className="mb-6 text-gray-700">
                Recognizing symptoms early allows for timely consultation and a
                more effective, personalized care approach.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Irregular, delayed or missed menstrual periods.</li>
                <li>
                  Heavy or prolonged bleeding during periods in some cases.
                </li>
                <li>Excess facial or body hair growth (hirsutism).</li>
                <li>Acne or oily skin, often linked to hormonal fluctuation.</li>
                <li>
                  Unexplained weight gain or difficulty losing weight.
                </li>
                <li>Thinning hair or hair loss on the scalp.</li>
                <li>
                  Darkening of skin around the neck, underarms or other skin
                  folds.
                </li>
                <li>
                  Difficulty conceiving in some women trying to become
                  pregnant.
                </li>
                <li>
                  Mood swings, anxiety or emotional fluctuations linked to
                  hormonal imbalance.
                </li>
              </ul>
            </div>

            {/* Section 5 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                The Ayurvedic Understanding of PCOD/PCOS
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda relates PCOD/PCOS symptoms to imbalance in Kapha and
                  Vata doshas, along with disturbed Artava Dhatu (reproductive
                  tissue) and weakened Agni (digestive fire).
                </li>
                <li>
                  Aggravated Kapha is traditionally associated with heaviness,
                  sluggish metabolism and cyst formation within the reproductive
                  system.
                </li>
                <li>
                  Vata imbalance is linked to irregular menstrual cycles and
                  disrupted ovulation patterns.
                </li>
                <li>
                  Weak Agni is considered a contributing factor, allowing Ama
                  (toxins) to accumulate and disturb hormonal and reproductive
                  balance.
                </li>
                <li>
                  Ayurvedic care for PCOD/PCOS traditionally focuses on balancing
                  Kapha and Vata, reducing Ama, and nourishing Artava Dhatu to
                  support regular ovulation.
                </li>
                <li>
                  The approach considers diet, physical activity, stress, sleep
                  and emotional well-being together, rather than addressing
                  symptoms in isolation.
                </li>
              </ul>
            </div>

            {/* Section 6 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Our Ayurvedic Treatment Approach for PCOD/PCOS
              </h2>

              <p className="mb-6 text-gray-700">
                At Balprada, Ayurvedic care for PCOD/PCOS is planned around each
                patient&apos;s specific symptoms, hormonal pattern and overall
                health.
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Sensitive Consultation and Assessment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors take time to understand the patient&apos;s
                      menstrual history, symptoms, lifestyle habits and any
                      existing diagnostic reports.
                    </li>
                    <li>
                      Assessment includes evaluating cycle regularity, weight
                      patterns, skin and hair changes, and any associated
                      metabolic concerns.
                    </li>
                    <li>
                      Consultations are conducted with privacy and sensitivity,
                      recognizing the personal nature of reproductive health
                      concerns.
                    </li>
                    <li>
                      A personalized care plan is created based on the
                      patient&apos;s constitution (Prakriti) and the dominant
                      dosha imbalance involved.
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
                      Formulations are selected to balance Kapha and Vata,
                      support hormonal regulation and nourish reproductive
                      tissue.
                    </li>
                    <li>
                      Herbal support is generally aimed at supporting menstrual
                      regularity, healthy metabolism and overall hormonal
                      balance.
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
                    3. Diet and Nutrition Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A structured diet plan is recommended to support insulin
                      sensitivity, hormonal balance and healthy weight
                      management.
                    </li>
                    <li>
                      Patients are guided toward light, warm, freshly cooked
                      meals over fried, oily or heavily processed food.
                    </li>
                    <li>
                      Emphasis is placed on fiber-rich vegetables, whole grains
                      and appropriately portioned meals to support stable blood
                      sugar levels.
                    </li>
                    <li>
                      Refined sugar, sweetened beverages and processed snacks
                      are typically minimized or avoided as part of the dietary
                      plan.
                    </li>
                    <li>
                      Guidance on suitable meal timing and portion control is
                      provided to support consistent metabolism.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Weight Management and Physical Activity
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients are encouraged to build a consistent routine of
                      physical activity suited to their fitness level and
                      lifestyle.
                    </li>
                    <li>
                      Gradual, sustainable weight management is emphasized,
                      since even modest weight changes can meaningfully support
                      hormonal balance.
                    </li>
                    <li>
                      Simple daily movement, walking and yoga-based exercises
                      are recommended as a starting point for most patients.
                    </li>
                    <li>
                      Progress is monitored over time, with adjustments made to
                      the activity plan as needed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Stress Management and Emotional Well-Being
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Meditation, breath awareness and calming practices are
                      offered to support emotional steadiness and reduce
                      stress-related hormonal disruption.
                    </li>
                    <li>
                      The peaceful ashram environment provides a supportive
                      space for patients dealing with the emotional impact of
                      PCOD/PCOS.
                    </li>
                    <li>
                      Sleep hygiene and relaxation techniques are addressed as
                      part of the overall care plan.
                    </li>
                    <li>
                      Patients are encouraged to speak openly about emotional
                      concerns, which are common with hormonal conditions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Panchakarma and Supportive Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Select, gentle Panchakarma-based procedures may be
                      considered for suitable patients to support detoxification
                      and hormonal balance.
                    </li>
                    <li>
                      Therapies are planned individually, based on the
                      patient&apos;s strength, dosha balance and overall health
                      status.
                    </li>
                    <li>
                      Supportive therapies aim to ease heaviness, support
                      metabolism and assist the body&apos;s natural regulatory
                      processes.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    7. Regular Monitoring and Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up consultations help track cycle regularity,
                      symptom improvement and overall progress.
                    </li>
                    <li>
                      Patients are encouraged to repeat relevant diagnostic
                      tests periodically to monitor hormonal and metabolic
                      improvement.
                    </li>
                    <li>
                      Consistency in diet, medicine, activity and stress
                      management is emphasized as key to long-term hormonal
                      balance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 — Herbs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Commonly Used Ayurvedic Herbs for PCOD/PCOS Support
              </h2>

              <p className="mb-6 text-gray-700">
                Several traditional herbs are associated with hormonal balance
                and reproductive wellness in Ayurvedic texts. These are used
                only after proper evaluation and under medical guidance:
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Shatavari (Asparagus racemosus) – traditionally valued for
                  supporting reproductive health and hormonal balance.
                </li>
                <li>
                  Ashoka (Saraca asoca) – classically associated with supporting
                  healthy menstrual function.
                </li>
                <li>
                  Guduchi (Tinospora cordifolia) – associated with supporting
                  immunity, metabolism and overall vitality.
                </li>
                <li>
                  Guggul (Commiphora mukul) – traditionally used to support
                  healthy metabolism and reduce heaviness.
                </li>
                <li>
                  Ashwagandha (Withania somnifera) – traditionally used to
                  support stress resilience and hormonal balance.
                </li>
                <li>
                  Triphala – a classical combination traditionally used to
                  support digestion and gentle detoxification.
                </li>
                <li>
                  Chandraprabha Vati – a classical formulation traditionally
                  associated with supporting metabolic and reproductive health.
                </li>
                <li>
                  Herbal recommendations vary from patient to patient based on
                  their constitution and specific symptoms. Herbs should always
                  be taken under a qualified vaidya&apos;s guidance for safe and
                  effective results.
                </li>
              </ul>
            </div>

            {/* Section 8 — Diet and Daily Routine */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Favor light, warm, freshly cooked meals with plenty of
                  vegetables and whole grains.
                </li>
                <li>
                  Reduce or avoid refined sugar, fried food, bakery items and
                  sweetened beverages.
                </li>
                <li>
                  Include foods that support stable blood sugar, such as whole
                  grains and fiber-rich vegetables.
                </li>
                <li>
                  Maintain fixed meal timings and avoid skipping meals or eating
                  late at night.
                </li>
                <li>
                  Build a consistent routine of walking, yoga or light exercise
                  suited to individual fitness.
                </li>
                <li>
                  Prioritize good quality sleep and consistent daily rest.
                </li>
                <li>
                  Practice stress management techniques such as meditation or
                  deep breathing regularly.
                </li>
                <li>
                  Avoid self-medication and always consult a doctor before
                  starting any new supplement or treatment.
                </li>
              </ul>
            </div>

            {/* Section 9 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Ayurvedic PCOD/PCOS Care?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  35 years of trusted experience in Ayurvedic treatment and
                  compassionate patient care.
                </li>
                <li>
                  In-house preparation of herbal medicines to maintain quality
                  and consistency across every batch.
                </li>
                <li>
                  Experienced doctors who evaluate each case individually and
                  sensitively before recommending a care plan.
                </li>
                <li>
                  Peaceful, ashram-based healing environment that supports
                  discipline, rest and sustainable lifestyle change.
                </li>
                <li>
                  Integrated facilities including Panchakarma, yoga,
                  naturopathy, meditation, physiotherapy and an in-house
                  pathology lab.
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
                  Private, respectful consultations designed around the
                  sensitive nature of women&apos;s health concerns.
                </li>
              </ul>
            </div>




            

            {/* Section 13 — CTA */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a PCOD/PCOS Consultation
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Receive personalized Ayurvedic consultation for PCOD/PCOS,
                  hormonal balance and reproductive wellness.
                </li>
                <li>
                  Discuss menstrual history, lifestyle, reports and current
                  medication with experienced vaidyas.
                </li>
                <li>
                  Get guidance related to herbal medicines, diet, daily routine,
                  yoga and supportive therapies.
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
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-blue-800 hover:text-white">
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