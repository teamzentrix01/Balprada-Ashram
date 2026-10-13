import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaParalysisTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure paralysis?",
      a: "Ayurveda offers supportive and rehabilitative care. Results vary by patient, and no cure can be promised.",
    },
    {
      q: "Q2. Should I stop my current medicines?",
      a: "No. Continue all prescribed medicines unless your own doctor advises otherwise.",
    },
    {
      q: "Q3. When can Ayurvedic care begin after a stroke?",
      a: "Usually after emergency treatment, once the patient is medically stable and the doctors agree.",
    },
    {
      q: "Q4. Is physiotherapy available at Balprada?",
      a: "Yes, physiotherapy is available for mobility assessment and guided rehabilitation, planned individually.",
    },
    {
      q: "Q5. Can bedridden patients be treated?",
      a: "The doctor will assess whether a visit is possible. Please call before travelling with such patients.",
    },
    {
      q: "Q6. How long does recovery take?",
      a: "It depends on the cause, severity, age and consistency of care. Progress is reviewed at follow-ups.",
    },
    {
      q: "Q7. Is there a free consultation?",
      a: "Yes, free OPD is available on the 15th of every month.",
    },
    {
      q: "Q8. Which reports should I bring?",
      a: "Bring MRI or CT scans, blood tests, discharge papers and all current prescriptions.",
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
                Paralysis Treatment Ayurvedic in Rampur
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Paralysis, or loss of movement and strength in a part of the
                  body, is a serious condition that changes daily life for the
                  patient and the whole family. Many families in Rampur search
                  for Ayurvedic support that can work alongside proper medical
                  treatment, helping the patient regain comfort, strength and
                  confidence through a patient and well-guided recovery
                  journey.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji. Patients from Rampur, Moradabad
                  and nearby areas visit us for consultation, in-house herbal
                  medicines, diet guidance, Panchakarma, physiotherapy, yoga
                  and follow-up care.
                </li>
                <li>
                  This page explains what paralysis is, how Ayurveda looks at
                  it, and how Balprada supports patients with supportive and
                  rehabilitative care. Every plan is personalised, no outcome
                  is promised, and care is always meant to complement, never
                  replace, emergency and specialist treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Paralysis
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    What Paralysis Means
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Paralysis is the partial or complete loss of voluntary
                      muscle movement in one or more parts of the body. It
                      happens when the signals between the brain, spinal cord,
                      nerves and muscles are interrupted, which can be sudden
                      or may develop slowly over time.
                    </li>
                    <li>
                      It can affect one side of the body, both legs, one limb,
                      or the face. Some patients also face difficulty in
                      speech, swallowing, balance, sensation or bladder
                      control, depending on the underlying cause and the area
                      affected.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Common Types
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Hemiplegia affects one side of the body, usually the arm,
                      leg and sometimes the face, and is commonly seen after a
                      stroke. Patients often notice weakness, stiffness and
                      reduced coordination on the affected side.
                    </li>
                    <li>
                      Paraplegia affects both legs and is often linked with
                      spinal cord problems, while quadriplegia involves all
                      four limbs. These conditions need careful long-term
                      rehabilitation and strong family support.
                    </li>
                    <li>
                      Facial paralysis, often called Bell&apos;s palsy, causes
                      drooping on one side of the face. Monoplegia affects only
                      one limb and may follow nerve injury or other
                      neurological conditions.
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
                  Stroke is among the most common causes, occurring when blood
                  supply to a part of the brain is blocked or a blood vessel
                  bursts. Uncontrolled blood pressure, diabetes, high
                  cholesterol and heart disease are major risk factors.
                </li>
                <li>
                  Spinal cord injury from accidents or falls, nerve damage,
                  infections, tumours, and conditions that affect the nervous
                  system can also lead to paralysis. The exact cause must
                  always be identified through medical evaluation.
                </li>
                <li>
                  Smoking, tobacco use, obesity, a sedentary routine, excess
                  salt, irregular sleep and long-term stress can add to the
                  risk. Lifestyle correction is therefore an important part of
                  long-term recovery and prevention.
                </li>
                <li>
                  Family history, advancing age and untreated chronic illnesses
                  make careful monitoring even more important, which is why
                  regular follow-up and report review remain central to our
                  approach.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of Paralysis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  In Ayurveda, paralysis is often discussed under the concept
                  of pakshaghata, which is linked with aggravated vata dosha
                  affecting the nerves and movement channels. Facial and
                  nerve-related weakness are also understood through vata
                  imbalance.
                </li>
                <li>
                  Ayurvedic care aims to support nerve nourishment, muscle
                  strength, circulation, digestion and mental calm through
                  medicines, diet, routine and supportive therapies. This is a
                  traditional framework that guides supportive care and
                  rehabilitation.
                </li>
                <li>
                  Ayurveda is not a replacement for emergency care. Patients
                  are encouraged to share every scan, report and prescription
                  with our doctor, so the plan always respects the modern
                  diagnosis already made.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Paralysis Is a Medical Emergency
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sudden weakness or numbness on one side, a drooping face,
                  slurred speech, confusion, sudden severe headache, or loss of
                  vision can be signs of a stroke. These require immediate
                  hospital care without any delay.
                </li>
                <li>
                  Time is critical in stroke, so patients should be taken to
                  the nearest hospital with emergency facilities at once. Do
                  not wait for symptoms to settle, and do not rely on home
                  remedies in the first hours.
                </li>
                <li>
                  Ayurvedic and rehabilitative support is usually considered
                  after the emergency has been handled and the patient is
                  medically stable, with approval and coordination from the
                  treating doctors where needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Paralysis Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor carefully reviews the history of the illness,
                      when the weakness began, current symptoms, MRI or CT scan
                      reports, blood tests, existing medicines and daily
                      routine before suggesting any Ayurvedic guidance.
                    </li>
                    <li>
                      Food habits, sleep, bowel and bladder function, stress
                      levels and the family&apos;s caregiving situation are
                      also discussed, so the care plan remains practical and
                      realistic for the patient&apos;s home environment.
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
                      selected according to individual assessment, along with
                      clear guidance on timing, duration and diet. Medicines
                      are never given as a substitute for prescribed modern
                      treatment.
                    </li>
                    <li>
                      Follow-up visits help the doctor observe progress, adjust
                      the plan as strength and comfort change, and respond to
                      any new concern raised by the patient or the caregiver.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Panchakarma Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma at Balprada is planned to support cleansing,
                      balance and recovery according to individual assessment.
                      Traditional procedures are suggested only when the doctor
                      finds them suitable for the patient&apos;s condition and
                      strength.
                    </li>
                    <li>
                      Patients are asked to share their existing conditions,
                      medicines and mobility concerns before beginning, so that
                      the programme can be coordinated safely with the wider
                      treatment plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Physiotherapy and Rehabilitation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada&apos;s physiotherapy facility supports mobility
                      assessment, guided rehabilitation, and strength and
                      recovery work. Regular, supervised exercise helps keep
                      joints flexible, muscles active and movement safer.
                    </li>
                    <li>
                      Frequency and suitability are decided after individual
                      assessment, and the programme is coordinated with the
                      wider Ayurvedic plan so that patients are not overloaded.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Yoga, Naturopathy and Meditation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Where suitable, gentle yoga, breath awareness and
                      naturopathy-based routines can help build discipline,
                      flexibility and calm. Simple practices are adapted to the
                      patient&apos;s ability, even for those who can only
                      practise while seated or assisted.
                    </li>
                    <li>
                      Guided meditation supports emotional steadiness and
                      restful sleep, which is valuable because anxiety, low
                      mood and frustration are common during long recovery
                      periods.
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
                    1. Food Habits That Support Recovery
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fresh, warm, home-cooked meals at regular times,
                      including seasonal vegetables, moong dal, whole grains,
                      fruits and enough water, are generally encouraged. The
                      doctor finalises the diet according to digestion, weight
                      and other conditions.
                    </li>
                    <li>
                      Patients with high blood pressure, diabetes or high
                      cholesterol are guided to reduce salt, sugar, fried food
                      and processed snacks, because controlling these factors
                      is important to protect against further complications.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Daily Routine Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A fixed daily routine with timely sleep, gentle movement,
                      sunlight exposure and regular medicines helps the body
                      settle into a steadier rhythm. Caregivers are encouraged
                      to follow the same schedule each day.
                    </li>
                    <li>
                      Tobacco, alcohol and late-night eating are strongly
                      discouraged. Stress reduction through prayer, breathing
                      practice, family time and light activity is recommended
                      wherever the patient is able.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Support for Caregivers
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families are guided on safe turning, positioning, skin
                      care to prevent pressure sores, and assisted walking,
                      since correct handling reduces discomfort and protects
                      both patient and caregiver.
                    </li>
                    <li>
                      Caregivers are also reminded to look after their own rest
                      and health, because recovery is often a long journey that
                      needs patience, consistency and emotional support at
                      home.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Setting Realistic Recovery Goals
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Recovery from paralysis is usually gradual, and progress is
                  often measured in small steps such as holding a cup, sitting
                  without support, taking a few assisted steps, or speaking a
                  little more clearly. Our team encourages patients and
                  families to celebrate these steps instead of waiting for a
                  single dramatic change.
                </li>
                <li>
                  The speed of improvement depends on the cause, how early
                  rehabilitation begins, the patient&apos;s age, other health
                  conditions, and how consistently medicines, exercises and
                  diet are followed at home. Two patients with similar reports
                  may therefore recover at very different paces.
                </li>
                <li>
                  The doctor discusses honest expectations at the first visit
                  and revisits them at every follow-up. Patients are never
                  promised a guaranteed result, because responsible care means
                  being clear about what supportive Ayurvedic treatment can and
                  cannot do.
                </li>
                <li>
                  Emotional wellbeing matters as much as physical strength. Low
                  mood, fear of dependence and loss of confidence are common,
                  so patients are encouraged to stay socially connected, take
                  part in family activities, and share their worries openly
                  with the care team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventing Further Complications
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keeping blood pressure, blood sugar and cholesterol under
                  control through regular medicines, timely tests and a
                  disciplined diet is one of the most important ways to lower
                  the chance of another stroke or further nerve damage.
                </li>
                <li>
                  Bedridden or low-mobility patients need regular position
                  changes, clean and dry skin, and gentle limb movement as
                  advised, because pressure sores, stiff joints and chest
                  infections are avoidable problems that can slow recovery.
                </li>
                <li>
                  Patients should never stop or change prescribed modern
                  medicines on their own, and should report any new weakness,
                  fever, breathlessness or sudden change in speech or vision to
                  a doctor at once.
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
                  support that helps the doctor understand blood sugar, kidney
                  and liver status, and general health alongside your scan
                  reports.
                </li>
                <li>
                  Report-based care means the Ayurvedic plan is built around
                  real results rather than assumptions, and repeat tests can be
                  advised when needed to review progress and safety.
                </li>
                <li>
                  For MRI, CT scans or specialist neurological opinions,
                  patients are guided to obtain them from appropriate centres
                  and to bring the reports to the consultation for review.
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
                  spirit, offering Ayurvedic consultation, Panchakarma, yoga,
                  naturopathy, physiotherapy and pathology support within one
                  care journey.
                </li>
                <li>
                  The calm ashram environment provides discipline and peace,
                  which many families find helpful for the long and patient
                  process of rehabilitation and lifestyle correction.
                </li>
                <li>
                  Rampur is a neighbouring district of Moradabad, so patients
                  and caregivers can choose the branch that is most convenient,
                  and the clinic remains open seven days a week for guided
                  consultation and follow-up care.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every
                  month, which makes the first step easier for families who are
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
                        Carry all scan reports, blood tests, discharge
                        summaries and current prescriptions, and arrange a
                        caregiver who can accompany the patient and understand
                        the doctor&apos;s instructions clearly.
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