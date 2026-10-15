import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicTreatmentCostKanth() {
  const faqs = [
    {
      q: "What is the cost of Ayurvedic treatment at Balprada?",
      a: "The website lists no fixed prices, so call 8126364606 or 9410447000 for an estimate after describing your concern.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Does the free OPD include medicines or tests?",
      a: "The website does not say, so ask the team when you call.",
    },
    {
      q: "What affects the total cost?",
      a: "Consultation, medicines, tests, therapies, follow-up length and travel all shape the total.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and the ashram and clinic are open seven days a week.",
    },
    {
      q: "Where can I find test prices?",
      a: "Call Balprada Pathology Lab to confirm the exact test, preparation, price and reporting time.",
    },
    {
      q: "Is there help for patients who cannot afford treatment?",
      a: "The Jansewa page mentions support for underprivileged patients, so ask the team about eligibility.",
    },
    {
      q: "Is there a branch in Kanth?",
      a: "No, the branches are in Tehsil Bilari and New Moradabad.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call, send a WhatsApp message to 8126364606, or use the Book Appointment page on the website.",
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
                Ayurvedic Treatment Cost for Kanth Patients: What to Expect at
                Balprada
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Introduction
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Kanth who are considering Ayurvedic care naturally
                  ask about cost first, because chronic conditions need months of
                  consultation, medicines and follow-up rather than a single
                  visit.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has served
                  patients since 1991, and it works through consultation,
                  in-house herbal medicines, diet guidance and supportive
                  facilities.
                </li>
                <li>
                  The hospital&apos;s website does not publish a price list,
                  consultation fee or treatment package, and this page does not
                  invent any figures.
                </li>
                <li>
                  Instead, this guide explains what shapes the cost of Ayurvedic
                  care, what the hospital has published about free consultation
                  and lab support, and how to get a clear estimate before you
                  commit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Balprada Publishes About Cost
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website lists no prices for consultations, treatments,
                  medicines or packages.
                </li>
                <li>
                  The only cost-related offer on the site is a free OPD
                  consultation on the 15th of every month.
                </li>
                <li>
                  The pathology lab page asks patients to contact the lab to
                  confirm the exact test, preparation, price and reporting time.
                </li>
                <li>
                  Product enquiries are discussed with the team based on
                  availability and suitability, and no product prices are listed.
                </li>
                <li>
                  Because nothing is fixed in print, the most reliable way to
                  learn the cost is to call the branch you plan to visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Balprada Located in Kanth?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>No, Balprada does not have a branch inside Kanth.</li>
                <li>
                  The Main Branch is in Village Bhidwari, Tehsil Bilari, District
                  Moradabad, and a second branch is in New Moradabad.
                </li>
                <li>
                  Patients from Kanth should also think about travel and the time
                  taken for repeat visits when planning their overall budget.
                </li>
                <li>
                  No distances or travel times are stated here, because the
                  hospital has not published them.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Ayurvedic Treatment Cost Differs from Patient to Patient
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care is personalised, so the plan for one patient may
                  be very different from the plan for another with a similar
                  diagnosis.
                </li>
                <li>
                  The doctor reviews the concern, history, reports and current
                  medication before suggesting a care step, and the scope of that
                  plan shapes the cost.
                </li>
                <li>
                  Chronic and long-standing conditions usually need longer
                  follow-up than recent or mild concerns.
                </li>
                <li>
                  Diet discipline and lifestyle correction are part of the plan,
                  and they add value without always adding expense.
                </li>
                <li>
                  Costs may also change over time, because the team reviews
                  symptoms, reports and medicine response and adjusts guidance
                  during follow-up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Factors That Influence Total Cost
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Consultation:</span> the first
                  visit and later reviews with the doctor or vaidya.
                </li>
                <li>
                  <span className="font-semibold">Medicines:</span> Balprada
                  prepares its own herbal medicines, and the type, number and
                  duration of medicines depend on the condition.
                </li>
                <li>
                  <span className="font-semibold">Diagnostics:</span> blood,
                  urine and other tests ordered to understand your health
                  clearly.
                </li>
                <li>
                  <span className="font-semibold">Procedures:</span> Panchakarma
                  and other therapies, planned according to individual
                  assessment.
                </li>
                <li>
                  <span className="font-semibold">
                    Supportive facilities:
                  </span>{" "}
                  yoga, naturopathy, meditation and physiotherapy where the
                  doctor advises them.
                </li>
                <li>
                  <span className="font-semibold">Follow-up:</span> the number of
                  review visits depends on how the condition responds.
                </li>
                <li>
                  <span className="font-semibold">Travel and stay:</span>{" "}
                  patients from Kanth should include transport, food and any
                  accompanying family member in their plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Free OPD on the 15th of Every Month
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available on the 15th of every month.
                </li>
                <li>
                  This is a useful way for first-time patients to meet the doctor
                  and understand the care approach without paying a consultation
                  charge.
                </li>
                <li>
                  The website does not state exactly what the free OPD covers, so
                  ask whether medicines, tests or procedures are included.
                </li>
                <li>
                  Expect a larger crowd on this day, and reach early within the
                  10:00 AM to 2:00 PM consultation window.
                </li>
                <li>
                  Call before visiting to confirm that the doctor you wish to see
                  is available on that date.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation Costs and OPD Timings
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  OPD consultation runs from 10:00 AM to 2:00 PM, and the ashram
                  and clinic are open seven days a week.
                </li>
                <li>
                  The Main Branch number is{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  and the Moradabad Branch number is{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>
                  Vaidya ji is available at the Moradabad Branch on Sundays, so
                  call before travelling.
                </li>
                <li>
                  Ask the phone team about the consultation charge for a regular
                  day, since no fee is listed online.
                </li>
                <li>
                  Ask whether a follow-up visit is charged separately or as part
                  of the same plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicine Costs and In-House Herbal Preparations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness Private Limited prepares traditional
                  and patent Ayurvedic medicines, supported by research-led
                  herbal wellness work.
                </li>
                <li>
                  Medicine cost depends on the preparations prescribed, the dose
                  and the number of weeks or months advised.
                </li>
                <li>
                  Ask the doctor to explain each medicine, its purpose and how
                  long you are expected to take it.
                </li>
                <li>
                  Ask for the full list of prescribed medicines before leaving,
                  so you can plan the monthly expense.
                </li>
                <li>
                  Do not buy unverified substitutes or stop prescribed medicines
                  on your own; discuss every change with your doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pathology Lab Tests and Cost
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab provides blood, urine and diagnostic
                  testing support so doctors can review health details clearly.
                </li>
                <li>
                  The lab lists these tests: Complete Blood Count, Thyroid
                  Profile, Liver Function Test, Kidney Function Test, Diabetes
                  Profile, Lipid Profile, Urine Routine and Microscopy, and
                  Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Other routine and doctor-advised investigations may also be
                  available.
                </li>
                <li>
                  The lab asks patients to confirm the exact test, preparation,
                  price and reporting time directly, so call before you arrive.
                </li>
                <li>
                  Bring recent reports from other labs, because the doctor may be
                  able to use them and avoid repeating unnecessary tests.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Supportive Therapy Costs
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma therapies are planned to support cleansing, balance
                  and recovery according to individual assessment.
                </li>
                <li>
                  Because the plan is individual, the number and type of
                  therapies, and therefore the cost, are decided after
                  consultation.
                </li>
                <li>
                  Yoga, naturopathy, meditation and physiotherapy are also
                  available as supportive facilities.
                </li>
                <li>
                  Ask which therapies are essential, which are optional and how
                  many sessions are expected.
                </li>
                <li>
                  Ask whether any therapy requires an overnight stay at the
                  ashram, and what that involves.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns and How Their Cost Planning Differs
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney and urinary care, including kidney function, swelling,
                  stones and diabetes-linked kidney concerns, usually needs
                  regular reports and review.
                </li>
                <li>
                  Liver and digestive care, including fatty liver, jaundice and
                  weak digestion, combines medicine with diet and routine.
                </li>
                <li>
                  Heart and lifestyle care, including blood pressure, diabetes
                  and weight, relies heavily on long-term discipline.
                </li>
                <li>
                  Diabetes and thyroid care, including hypothyroidism and
                  hyperthyroidism, involves periodic testing.
                </li>
                <li>
                  Women&apos;s wellness, including hormonal balance, menstrual
                  health and weakness, is handled privately and sensitively.
                </li>
                <li>
                  Cancer supportive care focuses on strength, diet, energy and
                  emotional balance, and it is offered alongside, not instead of,
                  conventional treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Jansewa and Community Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada&apos;s social service includes a Vridhashram for
                  elderly and unsupported people and the Navtarun Ashram for
                  children in need.
                </li>
                <li>
                  The initiative also supports residential schooling and Gaushala
                  seva.
                </li>
                <li>
                  The Jansewa page description on the website mentions free and
                  subsidised Ayurvedic healthcare for underprivileged patients,
                  but the eligibility and process are not stated.
                </li>
                <li>
                  If cost is a concern for your family, ask the team openly
                  whether any support is available and what you would need to
                  show.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Get a Clear Estimate Before You Start
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  or{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  and explain the patient&apos;s age, main concern and how long
                  it has been present.
                </li>
                <li>
                  Ask for the consultation charge, the expected medicines per
                  month and any tests the doctor may request.
                </li>
                <li>
                  Ask what the doctor expects the length of treatment to be, and
                  when the first review will happen.
                </li>
                <li>
                  Request the details of any Panchakarma or supportive therapy
                  before agreeing to start.
                </li>
                <li>
                  Write down every answer and the date of the call, so the whole
                  family has the same information.
                </li>
                <li>
                  Send a WhatsApp message to{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  if you prefer written communication.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What the Care Process Includes
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The first step is consultation, where the doctor reviews the
                  concern, history, reports and current medication.
                </li>
                <li>
                  The second step is an Ayurvedic plan built around
                  Balprada&apos;s medicines, diet discipline and lifestyle
                  correction where suitable.
                </li>
                <li>
                  The third step adds supportive facilities such as yoga,
                  naturopathy, Panchakarma and pathology as the doctor advises.
                </li>
                <li>
                  The fourth step is follow-up, where the team observes progress,
                  adjusts guidance and supports long-term discipline.
                </li>
                <li>
                  Understanding these four steps helps families see which parts
                  of the journey carry a cost and which parts are simply guidance
                  and routine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Budget Planning Checklist for Families
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  List every expected item: consultation, medicines, tests,
                  therapies, follow-up visits and travel.
                </li>
                <li>
                  Ask the team for a rough monthly picture of medicines once the
                  doctor has finalised the plan.
                </li>
                <li>
                  Keep a small reserve for tests that the doctor may request
                  after reviewing your reports.
                </li>
                <li>
                  Decide in advance who will accompany the patient, since this
                  affects travel and food expenses.
                </li>
                <li>
                  Check the OPD timing and the doctor&apos;s availability before
                  travelling, to avoid a wasted trip.
                </li>
                <li>
                  Review the plan at each follow-up and ask whether any part can
                  be simplified as the patient improves.
                </li>
                <li>
                  Keep all receipts and prescriptions in one folder for easy
                  reference at later visits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Keep Treatment Affordable
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Use the free OPD on the 15th for a first consultation if the
                  date suits you.
                </li>
                <li>
                  Bring all previous prescriptions and reports, so the doctor
                  does not need to repeat tests unnecessarily.
                </li>
                <li>
                  Follow the diet and routine advice carefully, because it
                  supports the medicines and may reduce the need for changes.
                </li>
                <li>
                  Keep appointments for follow-up, as missed reviews can delay
                  progress.
                </li>
                <li>
                  Ask for a clear written medicine list and avoid purchasing
                  items that were not prescribed.
                </li>
                <li>
                  Plan one visit around several needs, such as consultation, tests
                  and medicine collection.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Responsible Care and Honest Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic treatment supports the body over time, and results
                  vary from person to person, so no guaranteed outcome or fixed
                  timeline is promised.
                </li>
                <li>
                  Patients with serious illness should keep regular specialist
                  care and share Ayurvedic plans with their treating doctor.
                </li>
                <li>
                  For emergencies such as chest pain, severe breathlessness,
                  heavy bleeding or loss of consciousness, go to the nearest
                  emergency hospital first.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Balprada for a Cost Estimate
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415, phone{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001, phone{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>
                  Email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  , or visit balpradaindia.com to use the Book Appointment page.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-4">
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