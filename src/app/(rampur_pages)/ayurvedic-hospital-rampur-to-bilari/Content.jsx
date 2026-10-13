import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalRampurToBilari() {
  const faqs = [
    {
      q: "Q1. Which branch is better for patients from Rampur?",
      a: "Both are accessible. Call ahead to confirm timing and doctor availability.",
    },
    {
      q: "Q2. What are the OPD timings?",
      a: "The Main Branch is open daily, 10:00 AM to 2:00 PM. Call before visiting.",
    },
    {
      q: "Q3. Is there a free consultation?",
      a: "Yes, free OPD is available on the 15th of every month.",
    },
    {
      q: "Q4. Do I need an appointment?",
      a: "Booking by call, WhatsApp or online is recommended, so please confirm before you travel.",
    },
    {
      q: "Q5. What should I carry?",
      a: "Bring prescriptions, recent reports, current medicines and notes on your symptoms.",
    },
    {
      q: "Q6. Can I get tests done at Balprada?",
      a: "Balprada Pathology Lab offers blood and urine testing support.",
    },
    {
      q: "Q7. Can I continue my regular medicines?",
      a: "Yes. Change prescribed medicines only under your treating doctor&apos;s guidance.",
    },
    {
      q: "Q8. Is overnight stay available?",
      a: "Please ask the team in advance, since arrangements are confirmed directly.",
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
                Ayurvedic Hospital Rampur to Bilari
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Rampur who are looking for a trusted Ayurvedic
                  hospital often ask whether the journey to Bilari is worth
                  making. Balprada Ayurvedic Hospital &amp; Research Center,
                  located in Tehsil Bilari of Moradabad district, has offered
                  Ayurvedic care since 1991, and patients from Rampur and nearby
                  areas travel to us for consultation, in-house herbal
                  medicines, diet guidance, yoga, naturopathy and follow-up
                  care.
                </li>
                <li>
                  Balprada was built on the seva sankalp of Sw. Vaidya Vijay Pal
                  Singh Ji and describes its mission as reliable Ayurvedic care
                  for chronic and serious health conditions through
                  consultation, self-prepared medicines, lifestyle guidance and
                  compassionate service. The hospital has 35 years of experience
                  and two branches in the Moradabad region.
                </li>
                <li>
                  This page is a practical guide for patients travelling from
                  Rampur to Bilari. It explains what care is available, which
                  branch to choose, how to plan the visit, what to carry and how
                  follow-up works. Every plan is personalised, no outcome is
                  promised, and Ayurvedic care is meant to complement, never
                  replace, the advice of your treating doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Travel from Rampur to Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many patients are looking for care that goes beyond a short
                  prescription, with time for a proper consultation, a review of
                  reports and clear guidance on food and routine. Balprada&apos;s
                  approach begins with the complete health picture, including
                  symptoms, medical history, current treatment, food habits,
                  sleep, stress and daily routine.
                </li>
                <li>
                  The hospital combines Ayurvedic consultation, in-house
                  medicines, Panchakarma, yoga, naturopathy, meditation,
                  physiotherapy and pathology support within one care journey,
                  so patients do not need to visit several different places for
                  different parts of their care.
                </li>
                <li>
                  The ashram-based setting offers a calm, disciplined
                  environment that many families find helpful for long-term
                  healing, especially for chronic illness, stress, sleep
                  problems and lifestyle correction.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  which makes the first visit easier for families who want to
                  understand the care plan before committing to long-term
                  follow-up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Supported at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care are available for
                      kidney function concerns, kidney stones, persistent
                      swelling and diabetes-related kidney concerns, with regular
                      review of reports and diet guidance.
                    </li>
                    <li>
                      Patients on dialysis or specialist treatment should
                      continue it, and Ayurvedic care is offered only as
                      supportive care alongside the treating doctor&apos;s plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicine, diet and routine-based care are offered for
                      fatty liver, jaundice, weak digestion and metabolic
                      imbalance, with attention to food timing, weight, sugar
                      balance and daily habits.
                    </li>
                    <li>
                      Jaundice and long-standing liver conditions need a proper
                      medical diagnosis first, and patients are guided to
                      complete the required tests and seek hospital care when
                      symptoms are serious.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Heart, Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care supports blood
                      pressure, diabetes, weight, stress and thyroid concerns
                      through diet, routine, yoga and regular monitoring of
                      reports.
                    </li>
                    <li>
                      Prescribed medicines for these conditions should only be
                      changed under the guidance of the treating doctor, and
                      patients are encouraged to bring their latest reports to
                      every visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Cancer Supportive Care and Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Sensitive Ayurvedic supportive care is offered for
                      strength, diet, energy and emotional balance during
                      serious illness, always alongside and never instead of
                      conventional cancer treatment.
                    </li>
                    <li>
                      Private and personalised care is available for hormonal
                      balance, menstrual health and weakness in women, with
                      respectful consultation and follow-up.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities That Support Your Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma therapies are planned to support cleansing,
                  balance and recovery according to individual assessment, and
                  they are suggested only when the doctor finds them suitable
                  for the patient&apos;s condition and strength.
                </li>
                <li>
                  Yoga and meditation support balance across body, mind and
                  breath, helping patients build discipline, strength and calm.
                  Naturopathy offers simple, nature-led practices and supportive
                  routines that complement the Ayurvedic plan.
                </li>
                <li>
                  Physiotherapy supports safe movement, mobility, strength and
                  recovery alongside the wider care plan, and the programme is
                  coordinated with the Ayurvedic treatment after an individual
                  assessment.
                </li>
                <li>
                  Balprada Pathology Lab provides blood and urine testing
                  support, so reports can be reviewed along with your symptoms.
                  Frequency and suitability of every programme are decided after
                  individual assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Branch
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch in Bilari
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Main Branch is at Mohalla Vijaynagar, Village
                      Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad,
                      Uttar Pradesh 244415. It is open daily from 10:00 AM to
                      2:00 PM, and the ashram and clinic are listed as open
                      seven days a week.
                    </li>
                    <li>
                      This is the best choice for a full consultation,
                      ashram-based care and regular follow-up. Call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      or send a WhatsApp message before you travel to confirm
                      availability.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Moradabad Branch is at F-19, Sector-13, New Moradabad,
                      Delhi Road, Moradabad, Uttar Pradesh 244001, and the
                      vaidya is available there on Sundays.
                    </li>
                    <li>
                      Please call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      before visiting so that the team can confirm timing and
                      consultation flow. Patients who find this branch more
                      convenient can start here and ask about the next steps.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Journey from Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please check the route on a map application before you leave,
                  using the Main Branch address given above, and call us for
                  guidance if you are unsure about the way. Allow enough time to
                  arrive comfortably within the consultation hours of 10:00 AM
                  to 2:00 PM.
                </li>
                <li>
                  Patients who are weak, elderly or unwell should travel with a
                  family member, carry water and any regular medicines, and
                  avoid very long journeys on the same day if the doctor has
                  advised rest.
                </li>
                <li>
                  If you are planning to stay overnight or are travelling with a
                  patient who needs assistance, please ask the team in advance,
                  since arrangements should be confirmed directly and not
                  assumed.
                </li>
                <li>
                  Call or WhatsApp before visiting, especially for the Moradabad
                  Branch or on busy days, so that you do not travel a long way
                  and find that the doctor is unavailable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Carry for Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring previous prescriptions, recent reports, current medicines
                  and any hospital or discharge papers, so that the doctor can
                  understand your treatment history without repeating tests that
                  are already done.
                </li>
                <li>
                  Carry blood tests, ultrasound or scan reports and any dialysis,
                  thyroid, sugar or blood pressure records that relate to your
                  concern, along with a list of all medicines, supplements and
                  herbal products you take.
                </li>
                <li>
                  Write down your symptoms, how long you have had them, your
                  usual food and sleep routine, and any questions you wish to
                  ask, because a clear history helps the doctor plan
                  responsibly.
                </li>
                <li>
                  Bring a family member who understands your condition and can
                  help remember the diet and medicine instructions, particularly
                  if you are elderly or unwell.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Consultation Works
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step One: Detailed Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews your health concern, history, reports
                      and current medication before suggesting the next care
                      step. Diagnostic reports are reviewed where relevant, so
                      the guidance remains practical and responsible.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step Two: Personalised Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s Ayurvedic medicines,
                      diet discipline and lifestyle correction where suitable,
                      along with clear instructions on timing and duration.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step Three: Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, Panchakarma, physiotherapy and pathology
                      support may be added to make the care journey more
                      complete, depending on your condition and the
                      doctor&apos;s advice.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step Four: Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up helps the team observe progress, adjust
                      guidance and support long-term discipline. Patients who
                      live far away can ask the team how follow-up is usually
                      managed for their condition.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Making the Most of Each Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep one folder or file for all reports, prescriptions and
                  discharge papers, arranged by date, so the doctor can quickly
                  see how your condition and tests have changed over time. A
                  simple notebook of daily symptoms, sugar or blood pressure
                  readings and food routine is also very helpful.
                </li>
                <li>
                  Ask the doctor to explain the plan clearly, including which
                  medicines to take, how long to take them, which foods to limit
                  and which signs mean you should seek urgent help. Writing the
                  answers down, or asking a family member to do so, prevents
                  confusion after you reach home.
                </li>
                <li>
                  Share everything honestly, including other medicines, home
                  remedies, alcohol or tobacco use and any earlier treatment that
                  was stopped. This is not to judge you, but to keep the
                  Ayurvedic plan safe and responsible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up and Staying Connected
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care for long-term conditions depends on regular
                  review, so patients are encouraged to plan follow-up visits at
                  the interval the doctor suggests instead of waiting until
                  symptoms become difficult again.
                </li>
                <li>
                  Before each follow-up journey, call or send a WhatsApp message
                  to confirm the branch, timing and doctor availability, and
                  carry any new reports so that progress can be reviewed
                  properly.
                </li>
                <li>
                  If your condition changes suddenly, or if you start a new
                  medicine from another doctor, inform the Balprada team at the
                  earliest so the plan can be reviewed in time.
                </li>
                <li>
                  Family members are welcome to take part in the discussion,
                  because diet, routine and medicine timing are easier to follow
                  when the whole household understands them.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Look for in an Ayurvedic Hospital
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A responsible Ayurvedic hospital begins with a proper
                  consultation and report review, explains its plan clearly, and
                  does not promise a guaranteed cure. Balprada follows this
                  approach through its cautious, individual assessment.
                </li>
                <li>
                  Transparent contact details, a visible address, clear timings
                  and a team that answers questions before you travel are signs
                  of a dependable place. Balprada lists both branches with
                  addresses and phone numbers, and encourages patients to call
                  before visiting.
                </li>
                <li>
                  Care that works with your existing doctors, supports
                  diagnostic testing and respects prescribed medicines is safer
                  than care that asks you to stop everything else. Patients
                  should always feel free to ask about the purpose of every
                  medicine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Safety Guidance
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care is supportive. Please do not stop or change
                  prescribed medicines on your own, and never delay dialysis,
                  cancer treatment or any specialist care advised by your
                  doctor.
                </li>
                <li>
                  Chest pain, severe breathlessness, sudden weakness on one side
                  of the body, confusion, heavy bleeding, very high fever,
                  vomiting blood or severe unbearable pain are emergencies. These
                  need immediate hospital care and should not wait for an
                  Ayurvedic appointment.
                </li>
                <li>
                  The hospital&apos;s own guidance is that emergencies should go
                  to urgent medical care first, and the team can help with
                  follow-up once the patient is stable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Beyond the Clinic
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada&apos;s wider ashram identity includes Jansewa, its
                  community service work, and an Organic Food section with
                  Ayurvedic products such as herbal teas, spices, oils and
                  avaleh. Patients can ask about these products through the
                  contact form or by phone.
                </li>
                <li>
                  This service-first spirit, along with the calm ashram
                  environment, is a large part of why families choose Balprada
                  for long-term care, and it is reflected in the experiences
                  patients share on Google reviews.
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
                    <p className="font-semibold">Main Branch in Bilari</p>

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
                        or send a WhatsApp message before you travel.
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
                        Vaidya ji is available on Sundays. Please call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting.
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