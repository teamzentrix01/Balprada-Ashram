import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicKidneyCare() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure kidney failure?",
      a: "Ayurveda offers supportive care. Results vary, and no cure or reversal can be promised.",
    },
    {
      q: "Q2. Can I stop dialysis or my tablets?",
      a: "No. Continue dialysis and prescribed medicines unless your own doctor advises otherwise.",
    },
    {
      q: "Q3. Is Ayurvedic care available for kidney stones?",
      a: "Yes, supportive consultation is available. Large or blocked stones need a urologist&apos;s opinion.",
    },
    {
      q: "Q4. Why is swelling checked so carefully?",
      a: "Swelling can come from the kidney, liver, heart or metabolism, so reports guide the plan.",
    },
    {
      q: "Q5. Can painkillers harm the kidneys?",
      a: "Frequent unsupervised painkillers can strain the kidneys. Always ask your doctor first.",
    },
    {
      q: "Q6. Which tests should I bring?",
      a: "Bring creatinine, urea, urine tests, ultrasound reports and current prescriptions.",
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
                Ayurvedic Kidney Care in Rampur
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The kidneys filter waste and extra fluid from the blood,
                  balance salt and minerals, help control blood pressure and
                  support healthy red blood cells, so any decline in kidney
                  function can quietly affect the whole body. Many families in
                  Rampur discover kidney problems late, often after swelling,
                  tiredness or abnormal reports, and look for Ayurvedic support
                  that works alongside proper medical care.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji. Patients from Rampur, Moradabad and
                  nearby areas visit us for consultation, in-house herbal
                  medicines, diet guidance, yoga, naturopathy and regular
                  follow-up under our Kidney and Urinary Care.
                </li>
                <li>
                  This page explains how the kidneys work, common warning signs,
                  how Ayurveda views kidney concerns, and how Balprada supports
                  patients with kidney failure, stones, swelling and
                  diabetes-related kidney concerns. Every plan is personalised,
                  no outcome is promised, and Ayurvedic care is meant to
                  complement, never replace, the advice of your nephrologist or
                  treating doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Kidney Health
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What the Kidneys Do
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Each kidney contains lakhs of tiny filters that clean the
                      blood and pass waste out as urine. The kidneys also
                      regulate water, salt, potassium and other minerals, and
                      they play a role in blood pressure control and bone
                      health.
                    </li>
                    <li>
                      Because the kidneys have a large reserve, early damage
                      often causes few symptoms. This is why regular tests
                      matter, especially for people with diabetes, high blood
                      pressure, a family history of kidney disease or long-term
                      use of painkillers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Common Kidney Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reduced kidney function, sometimes called chronic kidney
                      disease or kidney failure, means the kidneys cannot filter
                      the blood as well as they should. It needs careful
                      assessment, diet support and ongoing monitoring under a
                      qualified doctor.
                    </li>
                    <li>
                      Kidney stones are hard deposits that can cause severe
                      pain, burning urination or blood in the urine, while
                      persistent swelling in the feet, face or body may need
                      kidney, liver and metabolic assessment.
                    </li>
                    <li>
                      Diabetes-related kidney concern develops when
                      long-standing high blood sugar slowly strains the kidney
                      filters, so sugar control, blood pressure care and regular
                      follow-up are essential.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Common Warning Signs to Watch For
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Swelling around the eyes, face, feet or ankles, especially
                      in the morning or by evening, along with weight gain from
                      fluid, is one of the most noticed signs and should always
                      be examined by a doctor.
                    </li>
                    <li>
                      Constant tiredness, weakness, reduced appetite, nausea,
                      itching, poor sleep, difficulty concentrating and a
                      metallic taste in the mouth may appear as waste products
                      build up in the body.
                    </li>
                    <li>
                      Foamy urine, changes in how often you pass urine, blood in
                      the urine, burning during urination or pain in the back or
                      sides may point to urinary or kidney problems that need
                      testing.
                    </li>
                    <li>
                      Many of these signs also occur in other conditions, so
                      proper reports such as creatinine, urea and urine tests
                      are far more reliable than guessing from symptoms alone.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Common Causes and Risk Factors
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Long-standing diabetes and uncontrolled high blood
                      pressure are among the leading causes of kidney damage,
                      which is why careful monitoring of sugar and blood
                      pressure is part of kidney care.
                    </li>
                    <li>
                      Frequent use of over-the-counter painkillers, unsupervised
                      herbal or other medicines, repeated urinary infections,
                      kidney stones, dehydration and a family history of kidney
                      disease can all add to the risk.
                    </li>
                    <li>
                      Excess salt, heavy processed food, too little water,
                      smoking, obesity and a sedentary routine put extra load on
                      the kidneys and on the heart and blood vessels that
                      support them.
                    </li>
                    <li>
                      Conditions in other organs, including the liver and heart,
                      can also lead to swelling and fluid retention, which is
                      why the doctor looks at the complete health picture and
                      not only the kidney report.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of Kidney Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda discusses the urinary system through the idea of
                  mutravaha srotas, the channels that carry urine, and stone
                  formation has long been described under ashmari. Imbalance in
                  the doshas, weak digestion and an unhealthy routine are
                  considered contributing factors in this traditional view.
                </li>
                <li>
                  Ayurvedic care focuses on supporting digestion, hydration
                  habits, routine, sleep and diet, along with in-house herbal
                  medicines chosen after individual assessment. These are
                  traditional principles that guide supportive care, not a
                  modern diagnosis.
                </li>
                <li>
                  Because the kidneys are delicate, every medicine, herb and
                  home remedy must be reviewed against your reports and
                  prescriptions. Patients are encouraged to share all medicines
                  they take so that the plan stays careful and responsible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Medical Supervision Matters
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients on dialysis, or those advised dialysis or transplant
                  evaluation, should never stop or delay it. Ayurvedic care may
                  be considered only as supportive care alongside the treating
                  nephrologist&apos;s plan.
                </li>
                <li>
                  Please do not stop or change prescribed tablets for blood
                  pressure, diabetes or kidney protection on your own. Any
                  change in modern treatment should always be decided by the
                  doctor who prescribed it.
                </li>
                <li>
                  Very little or no urine, severe breathlessness, chest pain,
                  confusion, repeated vomiting, sudden heavy swelling, high
                  fever with back pain, or severe unbearable pain need immediate
                  hospital care and should never be managed at home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Kidney Patients
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
                      kidney function reports, urine tests, ultrasound and any
                      hospital papers you can bring.
                    </li>
                    <li>
                      Associated concerns such as diabetes, blood pressure,
                      swelling, weight and appetite are also discussed, so the
                      care plan remains practical, responsible and based on the
                      whole health picture instead of a single number.
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
                      medicines or dialysis advised by your doctor.
                    </li>
                    <li>
                      Follow-up visits help the team observe progress, review
                      new reports and adjust the guidance as your energy,
                      swelling, appetite and comfort change over time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Fluid Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Simple, kitchen-friendly diet guidance is given in the
                      local food style of Rampur and Moradabad, so patients can
                      follow it every day without expensive or unfamiliar
                      ingredients.
                    </li>
                    <li>
                      Salt, protein, potassium and fluid needs differ widely
                      between patients, so the plan is finalised with your
                      reports and your nephrologist&apos;s advice. Patients are
                      asked not to start any strict diet or fluid limit on their
                      own.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Kidney Stone Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      For stone concerns, Ayurvedic consultation supports
                      urinary comfort, hydration routines and dietary
                      discipline, while the doctor reviews your ultrasound or
                      scan reports and previous treatment.
                    </li>
                    <li>
                      Large stones, blocked urine flow, repeated infection or
                      severe pain need a urologist&apos;s opinion, and patients
                      are guided to seek it promptly instead of delaying care.
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
                      Guided meditation and naturopathy-based routines are
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
                      Fresh, light, home-cooked meals at regular times, with
                      seasonal vegetables and whole grains in amounts approved
                      by your doctor, are generally easier on digestion and help
                      keep sugar and blood pressure steadier.
                    </li>
                    <li>
                      Drinking water in the quantity your doctor advises, rather
                      than too much or too little, is important. Patients with
                      swelling or advanced kidney disease may need a fluid
                      limit, so please ask before changing intake.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Foods and Habits Usually Limited
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Excess salt, pickles, papad, namkeen, packaged snacks,
                      instant noodles and bakery items add hidden sodium and are
                      generally limited, especially when swelling or high blood
                      pressure is present.
                    </li>
                    <li>
                      Painkillers taken without advice, tobacco, alcohol, sugary
                      drinks and heavy late-night meals are best avoided.
                      Potassium-rich and protein-rich foods should be adjusted
                      only according to your reports and your doctor&apos;s
                      advice.
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
                      gentle walking and light yoga, in the amount your doctor
                      allows, supports circulation, weight and mood. Patients
                      with severe weakness or heavy swelling should ask the
                      doctor first.
                    </li>
                    <li>
                      Stress reduction through prayer, breathing practice and
                      time with family is encouraged, because long-term stress
                      and poor sleep can worsen blood pressure and overall
                      health.
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
                  Kidney care is a long-term journey, and progress is judged
                  through how you feel, your reports and your doctor&apos;s
                  review. Improvement, where it comes, usually follows steady
                  habits, correct medicines, controlled sugar and pressure, and
                  patience.
                </li>
                <li>
                  The doctor discusses honest expectations at the first visit
                  and revisits them at follow-ups. Patients are never promised a
                  guaranteed result or reversal of damage, because responsible
                  care means being clear about what supportive Ayurvedic
                  treatment can and cannot do.
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
                  support, which can help the doctor review kidney function,
                  blood sugar and general health alongside your existing
                  reports, since kidney, sugar and pressure concerns often
                  travel together.
                </li>
                <li>
                  Report-based care means the plan is built around real results
                  rather than assumptions, and repeat tests can be advised when
                  needed to review progress and safety.
                </li>
                <li>
                  For ultrasound, scans or specialist nephrology and urology
                  opinions, patients are guided to obtain them from appropriate
                  centres and to bring the reports to the consultation.
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
                  Rampur is a neighbouring district of Moradabad, so patients
                  can choose the branch that is most convenient, and the ashram
                  and clinic remain open seven days a week for guided
                  consultation and follow-up care.
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
                    Carry all kidney function reports, urine tests, ultrasound
                    reports, dialysis or hospital papers and current
                    prescriptions, and note your symptoms, urine output,
                    swelling, sugar and blood pressure readings.
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