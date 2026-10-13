import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaThyroidTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure thyroid problems?",
      a: "Ayurveda offers supportive care through diet, routine and medicines. Results vary, and no cure can be promised.",
    },
    {
      q: "Q2. Should I stop my thyroid tablets?",
      a: "No. Change prescribed medicines only under your treating doctor&apos;s guidance.",
    },
    {
      q: "Q3. Is the care different for low and high thyroid?",
      a: "Yes. Guidance is planned after reviewing your reports, symptoms and current medicines.",
    },
    {
      q: "Q4. Does stress affect the thyroid?",
      a: "Long-term stress and poor sleep can worsen symptoms, so calm routines are encouraged.",
    },
    {
      q: "Q5. Is yoga safe with thyroid problems?",
      a: "Gentle yoga is usually helpful, but suitability is decided after assessment. Share your conditions first.",
    },
    {
      q: "Q6. Which tests should I bring?",
      a: "Bring recent thyroid reports such as TSH, T3 and T4, plus old prescriptions.",
    },
    {
      q: "Q7. Is there a free consultation?",
      a: "Yes, free OPD is available on the 15th of every month.",
    },
    {
      q: "Q8. How long does care take?",
      a: "It depends on your condition and consistency. Progress is reviewed at regular follow-ups.",
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
                Thyroid Ayurvedic Treatment in Rampur
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The thyroid is a small butterfly-shaped gland in the neck
                  that controls how the body uses energy, so when it works too
                  slowly or too quickly, patients may feel the effects in their
                  weight, mood, digestion, sleep, skin and heartbeat. Many
                  people in Rampur live with thyroid problems for years before
                  the cause is identified, and many look for Ayurvedic support
                  that works alongside their regular medical treatment.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji. Patients from Rampur, Moradabad
                  and nearby areas visit us for consultation, in-house herbal
                  medicines, diet guidance, yoga, naturopathy and regular
                  follow-up, with thyroid concerns supported under our Diabetes
                  and Thyroid Care.
                </li>
                <li>
                  This page explains how the thyroid works, the difference
                  between low and high thyroid function, how Ayurveda views
                  these conditions, and how Balprada supports patients. Every
                  plan is personalised, no outcome is promised, and prescribed
                  medicines should only be changed under the guidance of the
                  treating doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Thyroid Gland
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    What the Thyroid Does
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The thyroid produces hormones that influence metabolism,
                      body temperature, heart rate, digestion, muscle strength,
                      menstrual regularity, skin and hair health, and even
                      concentration and mood. Because these hormones reach
                      almost every organ, a small imbalance can create many
                      different symptoms.
                    </li>
                    <li>
                      Thyroid function is usually assessed through blood tests
                      that the treating doctor interprets together with
                      symptoms, so reports and clinical examination are always
                      more reliable than guessing from symptoms alone.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Hypothyroidism and Hyperthyroidism
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Hypothyroidism means the gland produces too little
                      hormone, which slows the body down. It is more common in
                      women and may develop slowly, so tiredness and weight
                      gain are sometimes mistaken for ordinary ageing or a busy
                      lifestyle.
                    </li>
                    <li>
                      Hyperthyroidism means the gland produces too much
                      hormone, which speeds the body up. Patients may feel
                      restless, anxious or unusually warm, and may notice a
                      fast heartbeat despite eating well.
                    </li>
                    <li>
                      Goitre, which is a visible swelling in the neck, can
                      occur in either situation or even when hormone levels are
                      normal, so any swelling or lump in the neck should be
                      examined by a doctor.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms to Watch For
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Signs Often Seen in Low Thyroid Function
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Constant tiredness, sluggishness, sleepiness, weight gain
                      despite normal eating, constipation, feeling cold, dry
                      skin, hair fall, brittle nails and a puffy face are
                      commonly reported by patients.
                    </li>
                    <li>
                      Low mood, poor memory, slow thinking, muscle aches, joint
                      stiffness, irregular or heavy periods and swelling in the
                      legs may also occur, and these signs can build up
                      gradually over months.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Signs Often Seen in High Thyroid Function
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Unexplained weight loss despite a good appetite, a fast
                      or irregular heartbeat, sweating, heat intolerance,
                      tremor in the hands, restlessness, irritability and
                      difficulty falling asleep are typical concerns.
                    </li>
                    <li>
                      Frequent loose motions, muscle weakness, thinning hair,
                      lighter periods and prominent or irritated eyes may also
                      be seen. These symptoms overlap with other conditions, so
                      only proper tests can confirm the cause.
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
                  Autoimmune conditions, where the body&apos;s own defence
                  system affects the thyroid, are among the most common causes
                  of both low and high thyroid function. A family history of
                  thyroid disease increases the likelihood.
                </li>
                <li>
                  Women are affected more often than men, and hormonal phases
                  such as pregnancy, the period after childbirth and menopause
                  can bring thyroid changes that need careful monitoring by a
                  doctor.
                </li>
                <li>
                  Iodine imbalance, certain medicines, previous neck treatment,
                  long-term stress, poor sleep and irregular eating habits can
                  add to the burden, and conditions like diabetes may occur
                  together with thyroid problems.
                </li>
                <li>
                  A sedentary routine, weight gain and digestive weakness often
                  travel together with thyroid concerns, which is why Balprada
                  looks at the whole routine and not only the report.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of Thyroid Disorders
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda does not describe thyroid disease in modern terms,
                  but swelling in the neck has been discussed under the idea of
                  galaganda, and the broader picture of low or high metabolism
                  is understood through digestive strength (agni), kapha, vata
                  and pitta balance, and the health of the body&apos;s tissues.
                </li>
                <li>
                  Low thyroid patterns with heaviness, weight gain and
                  sluggishness are often discussed as kapha and agni imbalance,
                  while high thyroid patterns with heat, restlessness and
                  weight loss are often discussed as increased pitta and vata.
                  These ideas guide supportive care and are not a modern
                  diagnosis.
                </li>
                <li>
                  Ayurvedic care therefore focuses on digestion, routine,
                  sleep, stress and diet, along with in-house herbal medicines
                  chosen after assessment, while the thyroid reports and
                  prescribed medicines continue to guide the overall treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Medical Supervision Matters
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Thyroid medicines are usually prescribed at a carefully
                  adjusted dose, and stopping or changing them without your
                  doctor&apos;s advice can cause symptoms to return or become
                  worse. Please continue all prescribed tablets unless your
                  physician tells you otherwise.
                </li>
                <li>
                  Pregnant women, patients with heart problems, and those with
                  sudden worsening of symptoms need close monitoring by a
                  qualified doctor, and thyroid levels should be rechecked at
                  the intervals advised.
                </li>
                <li>
                  Very fast heartbeat with chest pain, breathlessness, high
                  fever, confusion or severe weakness, or sudden swelling in
                  the neck that makes swallowing or breathing difficult, needs
                  immediate hospital care and should never be managed at home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Thyroid Patients
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
                      along with thyroid reports, heart rate, appetite and the
                      medicines you are taking.
                    </li>
                    <li>
                      For low thyroid concerns, the discussion often includes
                      energy levels, weight changes, digestion and routine. For
                      high thyroid concerns, the focus includes heart rate,
                      sleep and appetite, so that support remains responsible
                      and suited to your situation.
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
                      guidance on timing, duration and diet. These are meant to
                      support your treatment and are never a replacement for
                      medicines prescribed by your doctor.
                    </li>
                    <li>
                      Follow-up visits help the team observe progress, review
                      new reports, and adjust the guidance as your energy,
                      weight, sleep and comfort change over time.
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
                      Meal timing, portion size, sleep schedule and activity
                      are discussed in detail, because regular habits help
                      digestion, weight and energy, which are the areas most
                      patients struggle with.
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
                      Patients should inform the team about existing
                      conditions, current medicines and mobility concerns
                      before beginning, so that gentle practice remains safe,
                      especially for those with a fast heart rate or weakness.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Naturopathy and Meditation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy-based routines use simple, nature-led
                      practices that support digestion, movement and restful
                      habits, and may complement the Ayurvedic plan where
                      suitable.
                    </li>
                    <li>
                      Guided meditation and breath awareness support emotional
                      steadiness, which is valuable because anxiety, low mood
                      and irritability are common in thyroid conditions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidance for Thyroid Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Foods Generally Encouraged
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fresh, warm, home-cooked meals made from seasonal
                      vegetables, moong dal, whole grains, fruits and enough
                      water, eaten at regular times, are generally easier on
                      digestion and help keep weight and energy steadier.
                    </li>
                    <li>
                      Patients with low thyroid function may be advised to
                      include fibre-rich food and light, easily digested meals,
                      while those with high thyroid function may need adequate
                      nourishing meals and enough fluids, according to the
                      doctor&apos;s assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Foods and Habits Usually Limited
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Packaged snacks, fried food, bakery items, sugary drinks,
                      very heavy late-night meals and long gaps between meals
                      can upset digestion and weight, so these are generally
                      limited.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Thyroid Health
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A fixed daily routine with timely sleep, a regular wake-up
                  time and an early dinner helps the body keep a steadier
                  rhythm. Seven to eight hours of restful sleep is generally
                  advised for adults.
                </li>
                <li>
                  Daily walking and gentle yoga, in the amount your doctor
                  allows, support metabolism, mood and weight. Patients with a
                  rapid heartbeat, severe tiredness or joint pain should ask
                  the doctor before starting new exercise.
                </li>
                <li>
                  Stress reduction through prayer, breathing practice, time
                  with family and a calmer evening routine is encouraged,
                  because long-term stress and irregular sleep can make thyroid
                  symptoms feel worse.
                </li>
                <li>
                  Tobacco should be avoided, and thyroid tests should be
                  repeated at the intervals advised by the doctor, since
                  symptoms alone may not show whether the dose or the plan
                  needs review.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Setting Realistic Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Thyroid care is usually a long-term journey, and progress is
                  measured through how you feel, your reports and your
                  doctor&apos;s review. Improvement often comes from steady
                  habits, correct medicines and patience, and it differs from
                  person to person.
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
                  Thyroid conditions are guided by blood reports, and the
                  doctor may advise tests such as TSH, T3 and T4. Balprada
                  Pathology Lab provides blood and urine testing support, and
                  patients are guided on getting the right tests done and
                  bringing the reports for review.
                </li>
                <li>
                  Report-based care means the plan is built around real results
                  rather than assumptions, and repeat tests can be advised when
                  needed to review progress and safety.
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
                        Carry all thyroid reports, old prescriptions and the
                        names of current medicines, and note your symptoms,
                        weight changes, sleep pattern and food habits.
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