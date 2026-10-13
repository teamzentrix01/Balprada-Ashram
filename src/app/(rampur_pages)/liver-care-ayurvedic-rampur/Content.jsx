import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaLiverCareAyurvedic() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure fatty liver?",
      a: "Ayurveda offers supportive care with diet and routine. Results vary, and no cure can be promised.",
    },
    {
      q: "Q2. Should I stop my medicines?",
      a: "No. Continue prescribed medicines unless your own doctor advises otherwise.",
    },
    {
      q: "Q3. Is jaundice treated at Balprada?",
      a: "Supportive care is available after assessment. Severe jaundice needs hospital care first.",
    },
    {
      q: "Q4. Can herbal medicines harm the liver?",
      a: "Unsupervised herbs or medicines can strain the liver. Always share everything you take.",
    },
    {
      q: "Q5. Does fatty liver need lifestyle change?",
      a: "Yes. Diet, weight, sugar control and activity are central to long-term care.",
    },
    {
      q: "Q6. Which tests should I bring?",
      a: "Bring liver function tests, ultrasound reports, hepatitis markers and prescriptions.",
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
                Liver Care Ayurvedic in Rampur
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The liver is one of the hardest-working organs in the body,
                  helping with digestion, metabolism, blood sugar balance, fat
                  processing, immunity and the removal of waste, so even a mild
                  liver problem can show up as tiredness, poor appetite or weak
                  digestion. Many people in Rampur look for Ayurvedic support
                  that works alongside proper medical care when they are told
                  they have a fatty liver, abnormal liver reports or jaundice.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji. Patients from Rampur, Moradabad and
                  nearby areas visit us for consultation, in-house herbal
                  medicines, diet guidance, yoga, naturopathy and regular
                  follow-up under our Liver and Digestive Care.
                </li>
                <li>
                  This page explains how the liver works, common warning signs,
                  how Ayurveda views liver and digestive concerns, and how
                  Balprada supports patients with fatty liver, jaundice, weak
                  digestion and metabolic imbalance. Every plan is personalised,
                  no outcome is promised, and Ayurvedic care is meant to
                  complement, never replace, the advice of your treating doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Liver Health
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What the Liver Does
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The liver produces bile that helps digest fats, stores
                      energy, processes nutrients from food, helps control blood
                      sugar and cholesterol, and filters medicines and toxins
                      from the blood. It also supports the immune system and
                      helps the blood to clot properly.
                    </li>
                    <li>
                      Because the liver can keep working even when it is under
                      strain, early problems often cause few symptoms. This is
                      why routine blood tests and an ultrasound are valuable for
                      people with diabetes, extra weight, high cholesterol or a
                      history of alcohol use.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Common Liver and Digestive Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fatty liver means extra fat has built up in liver cells. It
                      is often linked with weight gain, sugar problems, high
                      cholesterol, a sedentary routine and, in some people,
                      alcohol, and it usually needs lifestyle correction along
                      with medical monitoring.
                    </li>
                    <li>
                      Jaundice shows as yellowing of the eyes, skin and urine
                      because bilirubin builds up in the blood. It is a sign of
                      an underlying problem and always needs proper assessment,
                      monitored care and strict diet discipline.
                    </li>
                    <li>
                      Weak digestion, with bloating, acidity, heaviness after
                      meals and irregular bowel habits, and metabolic imbalance,
                      which connects liver health, weight, sugar balance and
                      daily routine, are common concerns that often appear
                      together.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Common Warning Signs to Watch For
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Constant tiredness, weakness, reduced appetite, nausea, a
                      feeling of fullness or heaviness after meals, and
                      discomfort or dull pain in the upper right side of the
                      abdomen are commonly reported by patients.
                    </li>
                    <li>
                      Yellow eyes or skin, dark urine, pale stools, itching,
                      unexplained weight changes and swelling in the abdomen or
                      legs need prompt medical evaluation and should never be
                      ignored.
                    </li>
                    <li>
                      Frequent acidity, gas, constipation or loose motions, along
                      with poor sleep and low energy, may point to weak
                      digestion, which can be related to food habits, stress and
                      routine.
                    </li>
                    <li>
                      Many of these signs also occur in other conditions, so
                      liver function tests, an ultrasound and a doctor&apos;s
                      examination are far more reliable than guessing from
                      symptoms alone.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Common Causes and Risk Factors
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Being overweight, a sedentary routine, diabetes, high
                      cholesterol and a diet heavy in fried, oily, sugary and
                      processed food are among the most common contributors to
                      fatty liver in India today.
                    </li>
                    <li>
                      Regular alcohol use, certain infections such as hepatitis,
                      long-term use of some medicines, and unsupervised herbal
                      or over-the-counter remedies can strain the liver, so every
                      medicine you take should be shared with the doctor.
                    </li>
                    <li>
                      Irregular meals, late-night eating, poor sleep and
                      long-term stress can weaken digestion and make liver and
                      metabolic problems harder to manage, which is why Balprada
                      looks at the whole routine and not only the report.
                    </li>
                    <li>
                      Contaminated food or water, family history of liver disease
                      and being a carrier of hepatitis infection also raise the
                      risk, and some of these can be reduced through hygiene,
                      vaccination and timely testing.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of Liver Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  In Ayurveda, the liver is called yakrit and is closely linked
                  with pitta and with digestive strength (agni). Jaundice has
                  long been described under the term kamala, and fat-related
                  imbalance is discussed through concepts such as weak agni and
                  excess medas.
                </li>
                <li>
                  Ayurvedic care focuses on supporting digestion, routine,
                  sleep, food timing and diet, along with in-house herbal
                  medicines chosen after individual assessment. These are
                  traditional principles that guide supportive care, not a
                  modern diagnosis.
                </li>
                <li>
                  Because the liver processes everything we consume, every herb,
                  medicine and home remedy needs careful review against your
                  reports and prescriptions. Patients are encouraged to share all
                  medicines they take so that the plan stays careful and
                  responsible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Medical Supervision Matters
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Jaundice, a sudden rise in liver tests, abdominal swelling or
                  long-standing liver disease needs a proper diagnosis from a
                  qualified doctor, with tests such as liver function,
                  ultrasound and hepatitis markers, before any supportive
                  Ayurvedic care is planned.
                </li>
                <li>
                  Please do not stop or change prescribed medicines on your own,
                  and avoid alcohol completely if advised. Any change in modern
                  treatment should always be decided by the doctor who
                  prescribed it.
                </li>
                <li>
                  Yellow eyes with confusion or drowsiness, vomiting blood,
                  black stools, severe abdominal pain, high fever, a rapidly
                  swelling abdomen or extreme weakness need immediate hospital
                  care and should never be managed at home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Liver Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Before any Ayurvedic guidance is suggested, the doctor
                      reviews your symptoms, medical history, current treatment,
                      food habits, sleep, stress and daily routine, along with
                      liver function reports, ultrasound findings and any
                      hospital papers you can bring.
                    </li>
                    <li>
                      Associated concerns such as weight, blood sugar,
                      cholesterol, acidity, bowel habits and alcohol or tobacco
                      use are also discussed, so the care plan remains practical,
                      responsible and based on the whole health picture instead
                      of a single number.
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
                      medicines advised by your doctor.
                    </li>
                    <li>
                      Follow-up visits help the team observe progress, review new
                      reports and adjust the guidance as your energy, digestion,
                      appetite and comfort change over time.
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
                      Meal timing, portion size, food quality and sleep schedule
                      are discussed in detail, because small daily habits, such
                      as an early light dinner and regular meals, often make the
                      biggest difference to digestion and liver comfort.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Support for Jaundice Recovery
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Jaundice recovery depends on assessment, diet discipline
                      and monitored care. Patients are asked to follow the
                      doctor&apos;s food and rest advice carefully and to repeat
                      tests when advised.
                    </li>
                    <li>
                      Because the cause of jaundice must be identified, patients
                      are guided to complete the necessary tests and to seek
                      hospital care promptly if symptoms worsen.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Yoga, Naturopathy and Stress Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada&apos;s yoga programme includes breath and posture
                      practice, routine building and stress support, and it is
                      coordinated with the wider treatment plan after an
                      individual assessment.
                    </li>
                    <li>
                      Patients should inform the team about existing conditions,
                      current medicines and mobility concerns before beginning.
                      Naturopathy-based routines and guided meditation are
                      suggested only where suitable and safe.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Guidance
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Foods and Habits Generally Encouraged
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fresh, warm, home-cooked meals at regular times, with
                      seasonal vegetables, moong dal, whole grains and fruits in
                      amounts that suit your digestion and sugar levels, are
                      generally easier on the liver and help manage weight.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Foods and Habits Usually Limited
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Deep-fried snacks, excess ghee, butter and cream, sweets,
                      sugary drinks, bakery items, packaged snacks and heavy
                      late-night meals add load to the liver and are generally
                      limited, especially in fatty liver and weak digestion.
                    </li>
                    <li>
                      Alcohol, tobacco and unsupervised herbal or painkiller use
                      are best avoided. Your doctor will finalise the diet
                      because needs differ for diabetes, jaundice, kidney
                      concerns and other conditions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Daily Routine Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A fixed routine with timely sleep, a regular wake-up time,
                      daily walking and light yoga, in the amount your doctor
                      allows, supports metabolism, weight and mood. Patients with
                      severe weakness or jaundice should rest as advised before
                      starting new exercise.
                    </li>
                    <li>
                      Stress reduction through prayer, breathing practice and
                      time with family is encouraged, because long-term stress,
                      irregular sleep and emotional eating can make digestive and
                      metabolic problems harder to settle.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Setting Realistic Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Liver care is usually a long-term journey, and progress is
                  judged through how you feel, your reports and your
                  doctor&apos;s review. Improvement, where it comes, usually
                  follows steady habits, weight and sugar control, correct
                  medicines and patience.
                </li>
                <li>
                  The doctor discusses honest expectations at the first visit and
                  revisits them at follow-ups. Patients are never promised a
                  guaranteed result or reversal of liver damage, because
                  responsible care means being clear about what supportive
                  Ayurvedic treatment can and cannot do.
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
                  support, which can help the doctor review liver function,
                  blood sugar and general health alongside your existing
                  reports, since liver, sugar and weight concerns often travel
                  together.
                </li>
                <li>
                  Report-based care means the plan is built around real results
                  rather than assumptions, and repeat tests can be advised when
                  needed to review progress and safety.
                </li>
                <li>
                  For ultrasound, scans or specialist gastroenterology opinions,
                  patients are guided to obtain them from appropriate centres and
                  to bring the reports to the consultation.
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
                  doctors, in-house herbal medicines and a service-first spirit,
                  offering Ayurvedic consultation, yoga, naturopathy,
                  Panchakarma, physiotherapy and pathology support within one
                  care journey.
                </li>
                <li>
                  The calm ashram environment provides discipline and peace,
                  which many patients find helpful for stress reduction, sleep
                  and lifestyle correction during long-term care.
                </li>
                <li>
                  Rampur is a neighbouring district of Moradabad, so patients can
                  choose the branch that is most convenient, and the ashram and
                  clinic remain open seven days a week for guided consultation
                  and follow-up care.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  which makes the first step easier for families planning
                  long-term care.
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
                        Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
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
              </div>

              <div className="mb-6">
                <p className="mb-2 font-semibold">Before You Come</p>

                <ul className="list-disc space-y-2 pl-5 text-black">
                  <li>
                    Carry liver function reports, ultrasound reports, hepatitis
                    test results, hospital papers and current prescriptions, and
                    note your symptoms, appetite, bowel habits, weight changes
                    and any alcohol or tobacco use.
                  </li>
                </ul>
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