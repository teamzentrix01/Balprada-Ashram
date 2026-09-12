import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHighBPTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda help control high blood pressure?",
      a: "Many patients see improvement in overall balance and stress-related symptoms with disciplined Ayurvedic care, diet correction and lifestyle changes. Our doctors assess each case individually to guide realistic expectations.",
    },
    {
      q: "Q2. Is it safe to take Ayurvedic medicine along with blood pressure tablets?",
      a: "Many patients use supportive Ayurvedic care alongside their prescribed medication. Our doctors review current treatment carefully before suggesting any herbal support, and patients should never stop prescribed medicine on their own.",
    },
    {
      q: "Q3. How long does Ayurvedic treatment for high BP usually take to show results?",
      a: "Duration varies based on severity, lifestyle discipline and overall health. Our doctors review progress at regular follow-up visits and adjust the plan accordingly.",
    },
    {
      q: "Q4. What foods should be avoided with high blood pressure?",
      a: "Excess salt, processed snacks, pickles, caffeine and alcohol are generally best limited or avoided, along with smoking and tobacco use.",
    },
    {
      q: "Q5. Does Balprada offer free consultation for blood pressure patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Q6. Can stress really affect blood pressure levels?",
      a: "Yes, chronic stress is a well-recognized contributor to elevated blood pressure, which is why stress management is an important part of Balprada's supportive care approach.",
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
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                High BP Ayurvedic Treatment at Balprada Ayurvedic Hospital
                &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  High blood pressure, or hypertension, is one of the most
                  common lifestyle-related health concerns today, often
                  developing silently over years of stress, poor diet and
                  irregular routine.
                </li>
                <li>
                  At Balprada Ayurvedic Hospital &amp; Research Center, we offer
                  personalized Ayurvedic consultation, in-house herbal
                  medicines, diet correction and disciplined lifestyle guidance
                  to help support healthy blood pressure and overall
                  cardiovascular well-being.
                </li>
                <li>
                  With 35 years of experience in Ayurveda, an experienced team
                  of vaidyas and a peaceful ashram-based environment, Balprada
                  focuses on personalized, compassionate and consistent care for
                  every patient.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is High Blood Pressure (Hypertension)?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  High blood pressure occurs when the force of blood against
                  artery walls remains consistently higher than normal, placing
                  extra strain on the heart and blood vessels over time.
                </li>
                <li>
                  Blood pressure is measured as two numbers — systolic (pressure
                  when the heart beats) and diastolic (pressure when the heart
                  rests between beats).
                </li>
                <li>
                  Hypertension is generally considered a long-term, manageable
                  condition rather than a one-time illness that resolves
                  quickly.
                </li>
                <li>
                  It is often called a &quot;silent&quot; condition because many
                  people have no noticeable symptoms for years, even as it
                  affects the heart, kidneys and blood vessels.
                </li>
                <li>
                  Left unmanaged over time, high blood pressure can increase the
                  risk of heart disease, stroke and kidney-related complications.
                </li>
                <li>
                  With consistent lifestyle discipline, diet correction and
                  monitored care, blood pressure can often be brought into a
                  healthier, more stable range.
                </li>
                <li>
                  Regular monitoring is essential, since blood pressure can
                  fluctuate with stress, activity, diet and daily habits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding what contributes to high blood pressure helps
                guide a more effective, personalized care plan.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Excess body weight, especially fat concentrated around the
                  abdomen.
                </li>
                <li>
                  High salt intake and diets heavy in processed or packaged
                  foods.
                </li>
                <li>Chronic stress, anxiety and poor sleep quality.</li>
                <li>
                  Sedentary lifestyle with little regular physical activity.
                </li>
                <li>
                  Family history and genetic predisposition to hypertension.
                </li>
                <li>
                  Excessive alcohol consumption and tobacco use.
                </li>
                <li>
                  Underlying conditions such as diabetes, thyroid imbalance or
                  kidney disease.
                </li>
                <li>
                  Age-related changes in blood vessel flexibility over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs and Symptoms to Watch For
              </h2>

              <p className="mb-4 text-gray-700">
                While high blood pressure often has no clear symptoms, some
                patients do notice certain signs, particularly when levels rise
                significantly.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Frequent headaches, especially at the back of the head.
                </li>
                <li>Dizziness or a feeling of lightheadedness.</li>
                <li>
                  Fatigue and reduced stamina during daily activities.
                </li>
                <li>Blurred vision or difficulty focusing.</li>
                <li>Shortness of breath during mild exertion.</li>
                <li>
                  Palpitations or an irregular sense of heartbeat.
                </li>
                <li>
                  Nosebleeds in some cases of significantly elevated pressure.
                </li>
                <li>
                  Difficulty sleeping or restlessness in some patients.
                </li>
                <li>
                  Sudden, very high blood pressure readings accompanied by
                  severe headache, chest pain, confusion or vision changes
                  require immediate medical attention.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic Understanding of High Blood Pressure
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes conditions related to high blood pressure
                  under &quot;Rakta Gata Vata&quot; or &quot;Raktachaap
                  Vriddhi,&quot; traditionally linked to imbalance in Vata and
                  Pitta doshas.
                </li>
                <li>
                  Aggravated Vata is traditionally associated with irregular
                  circulation, anxiety and disturbed nervous system balance, all
                  of which can affect blood pressure.
                </li>
                <li>
                  Pitta imbalance is often linked with heat, inflammation and
                  stress-related patterns that can contribute to elevated
                  pressure.
                </li>
                <li>
                  Ayurveda also considers the role of Rakta Dhatu (blood tissue)
                  and Hridaya (heart) in maintaining balanced circulation.
                </li>
                <li>
                  Weakened Agni (digestive fire) and accumulated Ama (toxins) are
                  sometimes seen as underlying contributors to long-term
                  imbalance.
                </li>
                <li>
                  Ayurvedic care for high blood pressure traditionally focuses
                  on calming aggravated Vata and Pitta, supporting healthy
                  circulation, and building resilience against stress.
                </li>
                <li>
                  The approach considers diet, daily routine, physical activity,
                  sleep and mental well-being together, rather than addressing
                  blood pressure numbers alone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Ayurvedic Treatment Approach for High Blood Pressure
              </h2>

              <p className="mb-6 text-gray-700">
                At Balprada, Ayurvedic care for high blood pressure is planned
                around each patient&apos;s specific readings, lifestyle and
                overall health picture.
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation and Assessment
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors review the patient&apos;s blood pressure
                      history, current readings, lifestyle habits and any
                      existing medical reports.
                    </li>
                    <li>
                      Assessment includes evaluating stress levels, sleep
                      quality, diet patterns, physical activity and any related
                      conditions such as diabetes.
                    </li>
                    <li>
                      Current medications, if any, are reviewed carefully before
                      suggesting any Ayurvedic support plan.
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
                      Formulations are selected to calm aggravated Vata and
                      Pitta, support healthy circulation and ease stress-related
                      patterns.
                    </li>
                    <li>
                      Herbal support is generally aimed at complementing the
                      patient&apos;s routine and, where suitable, their existing
                      medical treatment.
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
                      A heart-friendly, low-salt diet is recommended to support
                      healthy blood pressure levels.
                    </li>
                    <li>
                      Patients are guided toward light, warm, freshly cooked
                      meals over fried, oily or heavily processed food.
                    </li>
                    <li>
                      Emphasis is placed on fiber-rich vegetables, whole grains
                      and potassium-rich foods where suitable.
                    </li>
                    <li>
                      Excess caffeine, sugary beverages and packaged snacks are
                      typically minimized or avoided.
                    </li>
                    <li>
                      Guidance on suitable meal timing and portion control is
                      provided to support consistent digestion and stable
                      energy.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Stress Management and Emotional Balance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Meditation, breath awareness and calming practices are
                      offered to help ease stress-related pressure elevation.
                    </li>
                    <li>
                      The peaceful ashram environment provides space away from
                      the pace and pressure of daily life.
                    </li>
                    <li>
                      Patients are guided on simple daily practices to build
                      long-term resilience against stress.
                    </li>
                    <li>
                      Sleep hygiene and relaxation techniques are addressed as
                      part of the overall care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Yoga and Physical Activity
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle yoga postures and breathing exercises (Pranayama)
                      are recommended to support circulation and relaxation.
                    </li>
                    <li>
                      Patients are encouraged to build a consistent, moderate
                      activity routine suited to their fitness level and current
                      health.
                    </li>
                    <li>
                      Activity plans are introduced gradually, with attention to
                      the patient&apos;s strength and any related health
                      conditions.
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
                      considered for suitable patients to support relaxation and
                      balance.
                    </li>
                    <li>
                      Therapies are planned individually, based on the
                      patient&apos;s strength, dosha balance and overall
                      cardiovascular health.
                    </li>
                    <li>
                      Supportive therapies aim to ease tension, support
                      circulation and complement the broader care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    7. Regular Monitoring and Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up consultations help track blood pressure trends,
                      symptom changes and overall lifestyle progress.
                    </li>
                    <li>
                      Patients are encouraged to monitor their blood pressure
                      regularly and share readings with our team.
                    </li>
                    <li>
                      Consistency in diet, medicine, activity and stress
                      management is emphasized as central to long-term blood
                      pressure balance.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Commonly Used Ayurvedic Herbs for Blood Pressure Support
              </h2>

              <p className="mb-4 text-gray-700">
                Several traditional herbs are associated with circulation,
                calmness and cardiovascular wellness in Ayurvedic texts. These
                are used only after proper evaluation and under medical guidance:
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Sarpagandha (Rauwolfia serpentina)
                  </span>{" "}
                  – a classical herb traditionally associated with calming and
                  blood pressure support.
                </li>
                <li>
                  <span className="font-semibold">
                    Arjuna (Terminalia arjuna)
                  </span>{" "}
                  – valued in Ayurveda for its traditional role in supporting
                  heart and cardiovascular health.
                </li>
                <li>
                  <span className="font-semibold">
                    Ashwagandha (Withania somnifera)
                  </span>{" "}
                  – traditionally used to support stress resilience and overall
                  calm.
                </li>
                <li>
                  <span className="font-semibold">
                    Brahmi (Bacopa monnieri)
                  </span>{" "}
                  – associated with supporting mental clarity and nervous system
                  balance.
                </li>
                <li>
                  <span className="font-semibold">
                    Jatamansi (Nardostachys jatamansi)
                  </span>{" "}
                  – traditionally used to support relaxation and restful sleep.
                </li>
                <li>
                  <span className="font-semibold">
                    Punarnava (Boerhavia diffusa)
                  </span>{" "}
                  – traditionally used to support healthy fluid balance and
                  circulation.
                </li>
                <li>
                  <span className="font-semibold">
                    Guggul (Commiphora mukul)
                  </span>{" "}
                  – classically associated with supporting healthy cholesterol
                  and metabolic balance.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Herbal recommendations vary from patient to patient based on
                their constitution, current readings and any existing
                medication. Herbs should always be taken under a qualified
                vaidya&apos;s guidance, especially alongside prescribed blood
                pressure medication.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reduce salt intake and avoid pickles, packaged snacks and
                  processed foods high in sodium.
                </li>
                <li>
                  Favor light, warm, freshly cooked meals with plenty of
                  vegetables and whole grains.
                </li>
                <li>
                  Limit caffeine, alcohol and sugary beverages that can affect
                  blood pressure and sleep.
                </li>
                <li>
                  Maintain fixed meal timings and avoid heavy, late-night
                  eating.
                </li>
                <li>
                  Build a consistent routine of walking, yoga or light exercise,
                  as suited to individual fitness.
                </li>
                <li>
                  Prioritize good quality sleep and consistent daily rest.
                </li>
                <li>
                  Practice stress management techniques such as meditation or
                  deep breathing daily.
                </li>
                <li>
                  Avoid smoking and tobacco use, and limit self-medication
                  without medical guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Ayurvedic High BP Care?
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
                  Peaceful, ashram-based healing environment that supports
                  relaxation, discipline and sustainable lifestyle change.
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
                  Continued follow-up guidance to help patients maintain healthy
                  blood pressure over the long term.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Consultation for High BP Care
              </h2>

              <p className="mb-6 text-black">
                Contact Balprada Ayurvedic Hospital &amp; Research Center to
                discuss your blood pressure readings, lifestyle concerns and
                suitable Ayurvedic care options with an experienced team.
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
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Explore Treatments
                  </button>
                </Link>
              </div>
            </section>

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