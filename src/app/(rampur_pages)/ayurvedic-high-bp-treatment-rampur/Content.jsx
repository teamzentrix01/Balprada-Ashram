import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHighBPTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure high blood pressure?",
      a: "Ayurveda offers supportive care through diet, routine and medicines. Results vary, and no cure can be promised.",
    },
    {
      q: "Q2. Should I stop my BP tablets?",
      a: "No. Continue prescribed medicines unless your own doctor advises a change.",
    },
    {
      q: "Q3. How often should I check my BP?",
      a: "As advised by your doctor. Many patients check at home and keep a written record.",
    },
    {
      q: "Q4. Does stress really affect blood pressure?",
      a: "Yes, long-term stress and poor sleep can raise readings, so calm routines are encouraged.",
    },
    {
      q: "Q5. Is yoga safe for BP patients?",
      a: "Gentle yoga is usually helpful, but suitability is decided after assessment. Share your conditions first.",
    },
    {
      q: "Q6. Which foods should I avoid?",
      a: "Excess salt, pickles, packaged snacks and fried foods are usually limited.",
    },
    {
      q: "Q7. Is there a free consultation?",
      a: "Yes, free OPD is available on the 15th of every month.",
    },
    {
      q: "Q8. Which reports should I bring?",
      a: "Bring prescriptions, BP readings, blood tests and any ECG or heart reports.",
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
                Ayurvedic High BP Treatment in Rampur
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  High blood pressure, also called hypertension, often develops
                  quietly and may cause no clear symptoms for years, which is
                  why many people in Rampur discover it only during a routine
                  check-up or after a sudden health scare. Because it is
                  closely linked with stress, food habits, sleep and daily
                  routine, many families look for Ayurvedic support that works
                  alongside regular medical care.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji. Patients from Rampur, Moradabad
                  and nearby areas visit us for consultation, in-house herbal
                  medicines, diet guidance, yoga, naturopathy, Panchakarma and
                  regular follow-up.
                </li>
                <li>
                  This page explains what high blood pressure is, how Ayurveda
                  views it, and how Balprada supports patients through routine
                  correction and monitored care. Every plan is personalised, no
                  outcome is promised, and Ayurvedic guidance is meant to
                  complement, never replace, prescribed medicines or your own
                  doctor&apos;s advice.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding High Blood Pressure
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    What High Blood Pressure Means
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Blood pressure is the force with which blood pushes
                      against the walls of your arteries as the heart pumps. It
                      is written as two numbers, the upper (systolic) and lower
                      (diastolic) reading, and it changes through the day with
                      activity, stress, food and sleep.
                    </li>
                    <li>
                      When readings stay high across several visits, the heart
                      and blood vessels work under extra strain. Over time this
                      can affect the heart, brain, kidneys and eyes, so regular
                      monitoring matters more than a single reading taken on a
                      stressful day.
                    </li>
                    <li>
                      Only a doctor can confirm hypertension after repeated
                      measurements. Patients should therefore avoid labelling
                      themselves from a single home reading and should discuss
                      any consistently raised numbers with a qualified
                      physician.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Why It Is Called a Silent Condition
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Many patients feel completely normal even when their
                      pressure is high, so the condition can remain unnoticed
                      for a long time. Others feel occasional headache,
                      heaviness in the head, dizziness, tiredness,
                      palpitations or disturbed sleep, though these signs can
                      also have other causes.
                    </li>
                    <li>
                      Because symptoms are unreliable, regular blood pressure
                      checks at home or at a clinic are the safest way to know
                      where you stand and to see whether your routine and
                      treatment are working.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A diet high in salt, pickles, papad, packaged snacks, fried
                  food and processed items is one of the most common
                  contributors. Eating out often and adding extra salt at the
                  table can quietly push daily salt intake well above what the
                  body needs.
                </li>
                <li>
                  Being overweight, a sedentary routine, lack of walking or
                  exercise, and long hours of sitting make it harder for the
                  body to keep blood pressure steady and also increase the risk
                  of diabetes and high cholesterol.
                </li>
                <li>
                  Long-term stress, worry, anger, irregular sleep and
                  late-night routines can keep the body in a constant state of
                  alertness, which often shows up as higher readings. Work
                  pressure and family responsibilities frequently play a hidden
                  role.
                </li>
                <li>
                  Smoking, tobacco, excess alcohol, advancing age, family
                  history, diabetes and kidney problems also raise the risk.
                  Many patients have more than one factor at the same time,
                  which is why a complete picture is important.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of High Blood Pressure
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda does not have a single exact term that matches
                  modern hypertension, but the condition is often discussed in
                  terms of imbalance in vata and pitta, disturbed circulation,
                  weak digestion and a stressed mind. The focus is on
                  restoring balance through food, routine and calm.
                </li>
                <li>
                  Ayurvedic care aims to support healthy circulation,
                  digestion, sleep and emotional steadiness through medicines,
                  diet guidance, yoga, breath practice and lifestyle
                  correction. These are traditional principles that guide
                  supportive care, not a substitute for modern diagnosis.
                </li>
                <li>
                  Patients are encouraged to share every prescription, blood
                  test and past report with the doctor, so that the Ayurvedic
                  plan respects the modern diagnosis and does not conflict with
                  the medicines already being taken.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When High Blood Pressure Needs Urgent Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Severe headache, chest pain, sudden breathlessness, blurred
                  vision, confusion, weakness on one side of the body, slurred
                  speech or fainting along with high readings can be a medical
                  emergency and need immediate hospital care without delay.
                </li>
                <li>
                  Very high readings with symptoms should never be managed at
                  home with herbs, rest or waiting. Please go to the nearest
                  hospital with emergency facilities, and inform the doctor
                  about all medicines you take.
                </li>
                <li>
                  Ayurvedic support is intended for long-term, supportive care
                  once the patient is stable, and it is always coordinated with
                  the treating physician wherever needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Blood Pressure Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Before any Ayurvedic guidance is suggested, the doctor
                      reviews your symptoms, medical history, current
                      treatment, food habits, sleep, stress and daily routine,
                      along with any recent readings and reports that you can
                      bring.
                    </li>
                    <li>
                      Associated concerns such as diabetes, weight, kidney
                      health, cholesterol and heart-related history are also
                      discussed, so that the care plan remains practical,
                      responsible and based on the whole health picture instead
                      of one number.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Personalised Ayurvedic Plan
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care may include Ayurvedic medicines prepared in-house,
                      chosen after individual assessment, along with clear
                      guidance on timing, duration and diet. Medicines are
                      never meant to replace the tablets prescribed by your own
                      doctor.
                    </li>
                    <li>
                      Patients are asked to continue prescribed medicines
                      unless their physician advises a change. Any adjustment
                      to modern treatment should always be decided by the
                      doctor who prescribed it.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Routine Correction
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Simple, kitchen-friendly diet guidance is given in the
                      local food style of Rampur and Moradabad, so patients can
                      follow it every day without expensive or unfamiliar
                      ingredients.
                    </li>
                    <li>
                      Meal timing, portion size, salt control and sleep
                      schedule are discussed in detail, because small daily
                      habits often make the biggest difference to long-term
                      comfort and monitoring results.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Yoga, Breath Practice and Stress Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada&apos;s yoga programme includes breath and
                      posture practice, routine building and stress support,
                      and it is coordinated with the wider treatment plan after
                      an individual assessment.
                    </li>
                    <li>
                      Gentle practices are adapted to age and ability, and
                      patients should tell the team about existing conditions,
                      current medicines and mobility concerns before beginning,
                      so participation stays safe.
                    </li>
                    <li>
                      Guided meditation and breath awareness support emotional
                      steadiness and restful sleep, which are valuable because
                      stress and poor sleep are common companions of raised
                      blood pressure.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Naturopathy and Panchakarma
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy-based routines use simple, nature-led
                      practices and supportive habits to complement the
                      Ayurvedic plan, especially for patients with weight,
                      digestion or lifestyle concerns.
                    </li>
                    <li>
                      Panchakarma is planned only when the doctor finds it
                      suitable for the patient&apos;s condition and strength,
                      and the frequency is decided after assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Regular Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular review helps the team observe progress, adjust
                      guidance and support long-term discipline. Patients are
                      encouraged to bring a written record of home blood
                      pressure readings to each visit.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidance for High BP Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Foods Generally Encouraged
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fresh seasonal vegetables such as lauki, tori, spinach,
                      carrot and pumpkin, cooked simply with less oil and mild
                      spices, along with whole grains, moong dal and
                      fibre-rich food that supports digestion and healthy
                      weight.
                    </li>
                    <li>
                      Fresh fruits as suggested by the doctor, curd or
                      buttermilk in moderation, and enough water through the
                      day. Light, warm, home-cooked meals at fixed times are
                      easier on digestion than heavy or irregular eating.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Foods Usually Limited
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Excess salt in cooking and at the table, along with
                      pickles, papad, namkeen, chips, instant noodles, bakery
                      items and other packaged foods that carry hidden salt.
                      Health bodies commonly advise keeping total daily salt
                      below about five grams.
                    </li>
                    <li>
                      Deep-fried snacks, heavy gravies, excess ghee, sweets and
                      sugary drinks, as well as tobacco, alcohol and very
                      strong tea or coffee. Your doctor will finalise the diet
                      because needs differ for diabetes, kidney concerns and
                      other conditions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Healthy Blood Pressure
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A fixed daily routine with timely sleep, early dinner and a
                  regular wake-up time helps the body settle into a steadier
                  rhythm. Seven to eight hours of restful sleep is generally
                  advised for adults.
                </li>
                <li>
                  Daily walking, light yoga and gentle stretching, in the
                  amount your doctor allows, help circulation and weight
                  control. Patients with heart problems, joint pain or very
                  high readings should ask the doctor before starting any new
                  exercise.
                </li>
                <li>
                  Stress reduction through prayer, breathing practice, time
                  with family, hobbies and limiting late-night screen use is
                  encouraged, because lowering the daily stress load is an
                  important part of long-term care.
                </li>
                <li>
                  Tobacco should be stopped, alcohol should be avoided, and
                  body weight should be kept in a healthy range wherever
                  possible. Small, steady changes are more sustainable than
                  sudden extreme restrictions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Setting Realistic Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Blood pressure care is a long-term journey, not a quick fix.
                  Improvement usually comes from steady habits, correct
                  medicines, regular monitoring and patience, and the pace
                  differs from one person to another.
                </li>
                <li>
                  The doctor discusses honest expectations at the first visit
                  and revisits them at follow-ups. Patients are never promised
                  a guaranteed result, because responsible care means being
                  clear about what supportive Ayurvedic treatment can and
                  cannot do.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pathology and Diagnostic Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab provides blood and urine testing
                  support that helps the doctor review blood sugar, kidney
                  status and general health alongside your existing reports,
                  since these conditions often travel together with high blood
                  pressure.
                </li>
                <li>
                  Report-based care means the plan is built around real results
                  rather than assumptions, and repeat tests can be advised when
                  needed to review progress and safety.
                </li>
                <li>
                  For ECG, echocardiography or specialist cardiology opinions,
                  patients are guided to obtain them from appropriate centres
                  and to bring the reports to the consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients from Rampur Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada has served patients for 35 years with experienced
                  doctors, in-house herbal medicines and a service-first
                  spirit, offering Ayurvedic consultation, yoga, naturopathy,
                  Panchakarma, physiotherapy and pathology support within one
                  care journey.
                </li>
                <li>
                  The calm ashram environment provides discipline and peace,
                  which many patients find helpful for stress reduction, sleep
                  and lifestyle correction.
                </li>
                <li>
                  Rampur is a neighbouring district of Moradabad, so patients
                  can choose the branch that is most convenient, and the ashram
                  and clinic remain open seven days a week for guided
                  consultation and follow-up care.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every
                  month, which makes the first step easier for families
                  planning long-term care.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visit Balprada from Rampur
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                        Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415.
                      </li>
                      <li>
                        Open daily from 10:00 AM to 2:00 PM. Call{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>{" "}
                        or send a WhatsApp message to book a consultation.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                        Uttar Pradesh 244001.
                      </li>
                      <li>
                        Vaidya ji is available on Sundays, so please call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting to confirm the timing.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Before You Come</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Carry old prescriptions, blood pressure readings, blood
                        test reports and ECG papers, and note your symptoms,
                        sleep pattern, food habits and the medicines you
                        currently take.
                      </li>
                    </ul>
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
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-blue-800">
                    Explore Treatments
                  </button>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
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