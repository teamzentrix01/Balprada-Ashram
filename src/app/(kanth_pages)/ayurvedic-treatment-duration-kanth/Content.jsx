import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicTreatmentDurationKanth() {
  const faqs = [
    {
      q: "Q1. How long does Ayurvedic treatment take at Balprada?",
      a: "The website gives no fixed duration. The vaidya plans care individually and explains the expected timeline after consultation.",
    },
    {
      q: "Q2. How often are follow-ups?",
      a: "Follow-up timing depends on the patient's condition, and the vaidya tells each patient when to return.",
    },
    {
      q: "Q3. How long does panchakarma take?",
      a: "The website does not state its length. Please ask the team about the programme advised for you.",
    },
    {
      q: "Q4. Can treatment be shared with my current doctor's plan?",
      a: "Yes. Ayurvedic care is supportive, so continue prescribed medicines and dialysis and inform both doctors.",
    },
    {
      q: "Q5. Does Balprada have a branch in Kanth?",
      a: "No Kanth branch is listed on the website. Check the route using the map links on the contact page.",
    },
    {
      q: "Q6. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q7. How do I book an appointment?",
      a: "Use the appointment form on balpradaindia.com, call 8126364606 or message the same number on WhatsApp.",
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
                How Long Does Ayurvedic Treatment Take? A Guide for Kanth
                Patients
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients and families in Kanth often ask how many weeks or
                  months Ayurvedic treatment will last, and the honest answer is
                  that it depends on the person, the condition and how the body
                  responds, which is why a proper consultation comes first.
                </li>
                <li>
                  At Balprada Ayurvedic Hospital &amp; Research Center in
                  Moradabad district, which has served patients since 1991, the
                  doctor plans care individually, and the website does not
                  publish a fixed duration for any condition or therapy.
                </li>
                <li>
                  Instead of promising a number of days, this page explains what
                  decides the length of care, how reviews and follow-ups work,
                  and which questions to ask the vaidya so that your family can
                  plan with clear expectations.
                </li>
                <li>
                  The website lists no branch in Kanth, so please check the route
                  using the map links on the contact page and call before you
                  travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Balprada Does Not Give a Fixed Duration
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Every Patient Is Different
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Age, strength, appetite, digestion, sleep, stress, daily
                      routine, past treatment and the reports of each patient
                      differ, so two people with the same diagnosis may need
                      different plans and different lengths of care.
                    </li>
                    <li>
                      The website explains that care begins with the complete
                      health picture, including symptoms, medical history,
                      current treatment, food habits, sleep, stress and daily
                      routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Frequency and Suitability Are Decided After Assessment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      For supportive facilities such as yoga, naturopathy,
                      meditation, physiotherapy and panchakarma, the website says
                      that frequency and suitability are decided after individual
                      assessment, and it does not state the number of sessions or
                      total days.
                    </li>
                    <li>
                      This is why patients should ask the team directly about the
                      likely length of any therapy that is suggested for them.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. No Promises of Results
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website terms state that outcomes vary from person to
                      person and that no specific result is promised from any
                      Ayurvedic treatment, panchakarma or therapy.
                    </li>
                    <li>
                      A trustworthy hospital explains this clearly, because
                      promising a cure in a fixed number of days can mislead
                      patients, especially in serious illness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Decides How Long Care Continues
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Type of Condition
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Short-term concerns such as weak digestion or a temporary
                      routine problem may need a different length of care from
                      long-standing conditions such as kidney problems, liver
                      disorders, diabetes, thyroid imbalance or serious illness.
                    </li>
                    <li>
                      Chronic conditions usually involve continued monitoring,
                      diet discipline and lifestyle correction over a long
                      period, with the plan adjusted as the reports change.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Stage and History
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      How long the problem has been present, how advanced it is
                      and what treatment the patient has already received all
                      influence the plan the vaidya suggests.
                    </li>
                    <li>
                      Patients should share every report and prescription,
                      including dialysis or chemotherapy records where relevant,
                      so the doctor understands the stage clearly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Response to Medicines and Routine
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The team reviews reports, symptoms, diet and response to
                      medicines at follow-up visits, and it adjusts guidance when
                      needed, so the plan is not fixed on the first day.
                    </li>
                    <li>
                      Regular tests help the family see whether the plan is
                      moving in the right direction.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. How Regularly the Patient Follows the Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic care depends on discipline, so taking medicines
                      on time, following the diet, keeping a regular routine and
                      attending follow-ups all affect how care progresses.
                    </li>
                    <li>
                      Skipping medicines or returning to old habits can delay
                      progress, and patients should speak openly with the vaidya
                      about any difficulty.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Other Treatments Running Alongside
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients on dialysis, chemotherapy, heart treatment or
                      diabetes medicines continue those treatments, and Ayurvedic
                      care is planned alongside them as supportive care.
                    </li>
                    <li>
                      Cancer supportive care is planned responsibly alongside the
                      patient&apos;s primary medical treatment, so its timeline
                      follows the patient&apos;s overall treatment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Follow-Ups Work at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Regular Review
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website says progress is reviewed regularly so the
                      guidance stays practical, but it does not state a fixed
                      interval, so the vaidya tells each patient when to return.
                    </li>
                    <li>
                      Follow-up depends on the patient&apos;s condition, and the
                      team reviews reports, symptoms, diet and how the patient
                      responds to medicine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Repeat Tests
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada Pathology Lab provides Kidney Function Test,
                      Liver Function Test, Complete Blood Count, Diabetes Profile
                      with HbA1c, Lipid Profile, Thyroid Profile, Urine Routine
                      and Microscopy, and Vitamin B12 and Vitamin D testing.
                    </li>
                    <li>
                      Doctor-advised repeat tests at planned intervals help the
                      family follow progress with facts and not guesswork.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Adjusting the Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      As reports, strength and symptoms change, the vaidya may
                      change the diet, medicines or supportive therapies, which
                      is why attending follow-ups matters as much as the first
                      consultation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Planning Follow-Ups from Kanth
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask for the next review date before leaving and note it in
                      the family calendar, along with the tests to repeat before
                      the visit.
                    </li>
                    <li>
                      Plan visits around days that suit the family, such as
                      Sundays at the Moradabad Branch or the free OPD on the 15th
                      of every month, and always call to confirm.
                    </li>
                    <li>
                      If the patient cannot travel on a particular day, a family
                      member can call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to explain the situation and ask for guidance.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Duration by Type of Care: What the Website Says
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is built on consultation, diet guidance, Ayurvedic
                      medicines and regular follow-up, and the website does not
                      state a duration for kidney failure, kidney stones,
                      swelling or diabetes-related kidney concerns.
                    </li>
                    <li>
                      Patients must never stop prescribed medicines or dialysis
                      without asking their treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for fatty liver, jaundice, weak digestion and
                      metabolic imbalance combines food guidance, routine
                      correction and monitored herbal care, and no fixed duration
                      is published.
                    </li>
                    <li>
                      Yellowing of the skin or eyes needs a prompt medical
                      evaluation and should not wait for a treatment timeline.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Supportive care for strength and recovery, diet guidance,
                      stress support and regular consultation is planned
                      alongside the primary medical treatment, with no duration
                      stated.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Blood Pressure and Diabetes
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care combines daily routines, food discipline, physical
                      activity, stress management and monitored follow-up, with
                      progress reviewed regularly and no fixed interval given.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Thyroid and Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Thyroid consultations review reports, energy, weight,
                      digestion and current medicines, and women&apos;s wellness
                      care covers hormonal balance, menstrual health, weakness
                      and maternal wellness, each planned individually.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Panchakarma and Other Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures planned after assessment, and the
                      website gives neither the length of a session nor the total
                      length of a programme.
                    </li>
                    <li>
                      Please ask the team about the expected length of any
                      therapy, whether it needs a stay or can be done as a visit,
                      and what to prepare.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Vaidya About Duration
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask how long the doctor expects the first phase of the plan to
                  last, and when the first review will happen.
                </li>
                <li>
                  Ask which signs will show that the plan is working and which
                  signs mean you should return sooner or go to a hospital.
                </li>
                <li>
                  Ask which tests should be repeated, how often, and what the
                  numbers should be compared with.
                </li>
                <li>
                  Ask how many visits to expect, whether visits can be shared
                  between the two branches, and how to reach the team between
                  visits.
                </li>
                <li>
                  Ask what happens if you miss a medicine or a follow-up, and how
                  to restart safely.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Support Your Treatment at Home
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home-cooked food at regular times and follow
                  the diet rules given by your vaidya instead of copying advice
                  from social media or neighbours.
                </li>
                <li>
                  Take medicines exactly as explained, avoid self-medication with
                  painkillers or unknown herbal powders, and never stop
                  prescribed medicines without asking your treating doctor.
                </li>
                <li>
                  Keep a small notebook of symptoms, sleep, appetite and blood
                  sugar or blood pressure readings, and show it at every
                  follow-up visit.
                </li>
                <li>
                  Practise gentle walking, yoga or breathing as advised, and keep
                  stress low, because calm and regular routines support long-term
                  care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Team
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma has more than 20 years of experience in
                  Ayurvedic practice and consults on kidney, liver and other
                  chronic concerns at Balprada.
                </li>
                <li>
                  Dr. Chetan Anand, associated with Balprada Herbal Wellness
                  Private Limited, has over seven years of experience in herbal
                  product research and development and advises on free health
                  camps.
                </li>
                <li>
                  Balprada Herbal Wellness Private Limited prepares traditional
                  and patent Ayurvedic medicines, and patients should take them
                  only as explained by the vaidya.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Not to Wait
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Severe pain, breathlessness, heavy bleeding, very low urine
                  output, high fever, yellowing of the eyes or sudden worsening
                  are emergencies, and the patient should go to the nearest
                  hospital immediately.
                </li>
                <li>
                  Ayurvedic care is supportive and does not replace emergency or
                  specialist treatment, so no one should delay medical care
                  because they are waiting for a treatment period to finish.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they often mention the natural
                  ashram surroundings and Ayurvedic discipline.
                </li>
                <li>
                  Reviews speak of authentic herbal preparations, knowledgeable
                  vaidyas and a serene atmosphere that helps patients heal with
                  positivity and strength.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visiting from Kanth
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">
                      Main Branch (Ashram and Clinic)
                    </p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415.
                      </li>
                      <li>
                        Timings: daily, 10:00 AM to 2:00 PM. Phone and WhatsApp:{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>
                        .
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
                        Address: F-19, Sector-13, New Moradabad, Delhi Road,
                        Moradabad, Uttar Pradesh 244001.
                      </li>
                      <li>
                        Vaidya ji is available on Sundays, so please call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Free OPD and Booking</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month, and the branch should be confirmed by phone before
                      travelling.
                    </li>
                    <li>
                      Book through the appointment form on balpradaindia.com,
                      call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                      , or write to{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>
                      , and arrive about 15 minutes early.
                    </li>
                  </ul>
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