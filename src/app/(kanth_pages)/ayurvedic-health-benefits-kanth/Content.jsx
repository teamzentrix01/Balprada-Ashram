import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHealthBenefitsKanth() {
  const faqs = [
    {
      q: "What are the benefits of Ayurvedic treatment?",
      a: "Ayurveda offers personalised consultation, diet and lifestyle guidance and supportive therapies, and results vary from person to person.",
    },
    {
      q: "Does Ayurveda guarantee a cure?",
      a: "No, Ayurvedic care supports the body over time and no outcome is guaranteed.",
    },
    {
      q: "Can I use Ayurveda along with my current treatment?",
      a: "Yes, but tell both your regular doctor and the Balprada doctor about every medicine you take.",
    },
    {
      q: "What does Panchakarma do?",
      a: "It is planned to support cleansing, balance and recovery after individual assessment.",
    },
    {
      q: "How does yoga help during treatment?",
      a: "It supports discipline, strength, calm and stress support through breath and posture practice.",
    },
    {
      q: "Is there a pathology lab at Balprada?",
      a: "Yes, it supports blood, urine and diagnostic testing so doctors can review health details clearly.",
    },
    {
      q: "Is there a branch in Kanth?",
      a: "No, patients from Kanth visit the Bilari or Moradabad branch.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and free OPD is available on the 15th of every month.",
    },
    {
      q: "How do I book a consultation?",
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
                Ayurvedic Health Benefits for Kanth Patients: How Balprada
                Supports Long-Term Wellbeing
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Introduction
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Kanth who are exploring Ayurveda often ask a
                  sensible question: what can Ayurvedic care realistically
                  offer, and how is it different from a quick prescription?
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has worked
                  with patients since 1991, and its approach brings together
                  consultation, in-house herbal medicines, diet guidance, yoga,
                  Panchakarma and follow-up care.
                </li>
                <li>
                  This page explains the supportive benefits of that approach in
                  plain language, using only what the hospital itself describes
                  on its website.
                </li>
                <li>
                  Ayurvedic care supports the body over time, so the benefits
                  described here are not guarantees, and results differ from one
                  patient to another.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Ayurveda Looks At Beyond Symptoms
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda looks past a single symptom and considers the balance
                  of body, mind, food, daily routine and environment together.
                </li>
                <li>
                  Balprada describes holistic healing as an important part of its
                  approach, because long-standing health concerns rarely come
                  from one cause alone.
                </li>
                <li>
                  This wider view helps the doctor ask about sleep, appetite,
                  stress, work routine and food habits, not only the main
                  complaint.
                </li>
                <li>
                  Patients often find that being asked about their whole routine
                  makes the consultation feel more complete and more personal.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit One: A Personalised Consultation
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews the concern, history, reports and current
                  medication before suggesting the next care step.
                </li>
                <li>
                  Care is planned around the individual, so two patients with a
                  similar diagnosis may receive different guidance.
                </li>
                <li>
                  A focused personal assessment helps shape a practical care path
                  that a family can actually follow at home.
                </li>
                <li>
                  Patients are encouraged to bring prescriptions, reports and a
                  note of symptoms, which helps the doctor understand the full
                  picture.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Two: Diet and Food Discipline
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada&apos;s own insights describe food discipline as an
                  important part of chronic health care, especially for kidney
                  and liver concerns.
                </li>
                <li>
                  Daily food guidance supports the medicines, because what a
                  person eats each day shapes how the body responds over time.
                </li>
                <li>
                  Diet advice is given within the care plan, so patients
                  understand not only what to avoid but also why.
                </li>
                <li>
                  Regular, mindful eating is widely encouraged for general
                  wellbeing, and Ayurveda treats it as a daily practice rather
                  than a short-term rule.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Three: Lifestyle and Routine Correction
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Daily routine, regular consultation and timely testing are
                  described as part of chronic health care.
                </li>
                <li>
                  Lifestyle correction helps patients build steady habits around
                  meals, rest, activity and stress.
                </li>
                <li>
                  Small, consistent changes are easier to continue than sudden,
                  dramatic ones, which is why the team focuses on discipline over
                  time.
                </li>
                <li>
                  Families often benefit together, because a change in the home
                  routine supports the patient and everyone around them.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Four: In-House Herbal Medicines
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness Private Limited prepares traditional
                  and patent Ayurvedic medicines, supported by research-led
                  herbal wellness work.
                </li>
                <li>
                  The hospital describes its medicines as in-house and
                  self-prepared, which gives patients one place for consultation
                  and medicine.
                </li>
                <li>
                  Medicines are prescribed after assessment, so the type and
                  duration depend on the individual.
                </li>
                <li>
                  Patients should take medicines only as advised and never stop
                  or change prescribed medicines without speaking to the doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Five: Panchakarma for Cleansing, Balance and Recovery
                Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma therapies are planned to support cleansing, balance
                  and recovery according to individual assessment.
                </li>
                <li>
                  The programme is doctor-guided and coordinated with the wider
                  treatment plan, rather than offered as a standalone treatment.
                </li>
                <li>
                  Before starting, patients share existing conditions, current
                  medicines and mobility concerns, so the team can support safe
                  participation.
                </li>
                <li>
                  Frequency and suitability are decided after assessment, which
                  means Panchakarma is not recommended for everyone in the same
                  way.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Six: Yoga for Discipline, Strength and Calm
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga and Ayurveda support balance across body, mind and breath,
                  helping patients build discipline, strength and calm.
                </li>
                <li>
                  The practices include breath and posture work, routine building
                  and stress support.
                </li>
                <li>
                  Regular practice can help patients feel more settled during a
                  long treatment journey.
                </li>
                <li>
                  Patients should mention any medical condition or mobility
                  concern before starting, so that the programme stays safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Seven: Naturopathy and Natural Therapies
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Naturopathy works with the body&apos;s natural healing
                  capacity through simple, nature-led practices and supportive
                  routines.
                </li>
                <li>
                  It includes natural therapies, detox support and lifestyle
                  correction.
                </li>
                <li>
                  It is coordinated with Ayurvedic consultation, so patients are
                  not left to follow separate and conflicting advice.
                </li>
                <li>
                  As with every other service, suitability and frequency are
                  decided after individual assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Eight: Meditation and Emotional Steadiness
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Guided meditation and breath awareness support emotional
                  steadiness, restorative rest and a calmer healing journey.
                </li>
                <li>
                  Meditation also supports stress and sleep, which matter for
                  patients dealing with long-standing health concerns.
                </li>
                <li>
                  A calmer mind helps patients follow diet, medicine and routine
                  more consistently.
                </li>
                <li>
                  The founder&apos;s belief, shared on the website, is that
                  staying positive gives courage to face difficult circumstances.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Nine: Physiotherapy for Safe Movement
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Professional physiotherapy supports safe movement, mobility,
                  strength and recovery alongside the wider care plan.
                </li>
                <li>
                  The service includes mobility assessment, guided rehabilitation
                  and strength support.
                </li>
                <li>
                  It is useful for patients who need guided movement as part of
                  recovery, under professional supervision.
                </li>
                <li>
                  Ask the doctor whether physiotherapy is suitable for your
                  concern before starting.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Ten: Clear Reports Through the Pathology Lab
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab provides blood, urine and diagnostic
                  testing support so doctors can review health details more
                  clearly.
                </li>
                <li>
                  Listed tests include blood count, thyroid profile, liver
                  function, kidney function, diabetes profile, lipid profile,
                  urine routine and vitamin B12 and D.
                </li>
                <li>
                  Timely testing helps the doctor follow progress and adjust
                  guidance, which is why reports matter during follow-up.
                </li>
                <li>
                  Call the lab to confirm the exact test, preparation, price and
                  reporting time before you arrive.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit Eleven: Follow-Up That Keeps Care Connected
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up depends on the patient&apos;s condition, and the
                  team may review reports, symptoms, food routine and medicine
                  response over time.
                </li>
                <li>
                  Regular review helps the team observe progress, adjust guidance
                  and support long-term discipline.
                </li>
                <li>
                  Patients who keep follow-up appointments give the doctor a
                  clearer picture than those who visit only once.
                </li>
                <li>
                  Use the same phone numbers for follow-up questions, so your
                  records and advice stay together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Where Supportive Ayurvedic Care Is Offered
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney and urinary care, including kidney function, swelling,
                  stones and diabetes-linked kidney concerns.
                </li>
                <li>
                  Liver and digestive care, including fatty liver, jaundice and
                  weak digestion.
                </li>
                <li>
                  Heart and lifestyle care, including blood pressure, diabetes,
                  weight and stress concerns.
                </li>
                <li>
                  Diabetes and thyroid care, including hypothyroidism and
                  hyperthyroidism.
                </li>
                <li>
                  Women&apos;s wellness, including hormonal balance, menstrual
                  health and weakness.
                </li>
                <li>
                  Cancer supportive care for strength, diet, energy and emotional
                  balance, offered alongside conventional treatment and never as
                  a replacement for it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Care Fits Together: A Typical Patient Journey
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The journey begins with consultation, where the doctor reviews
                  the concern, history, reports and current medication.
                </li>
                <li>
                  An Ayurvedic plan follows, built around Balprada&apos;s
                  medicines, diet discipline and lifestyle correction where
                  suitable.
                </li>
                <li>
                  Supportive facilities such as yoga, naturopathy, Panchakarma
                  and pathology are added when the doctor advises them.
                </li>
                <li>
                  Follow-up closes the loop, so the team can observe progress and
                  adjust guidance as the patient&apos;s needs change.
                </li>
                <li>
                  Each step supports the next, which is why the benefits come
                  from the whole journey and not from any single service.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Ways to Get More from Ayurvedic Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep a simple note of symptoms, sleep, appetite and energy, so
                  that follow-up conversations are specific and useful.
                </li>
                <li>
                  Follow the diet and routine advice consistently, because the
                  medicines work alongside daily habits.
                </li>
                <li>
                  Attend follow-up visits even when you feel better, so the
                  doctor can decide the next step.
                </li>
                <li>
                  Bring every report, prescription and medicine list to each
                  visit.
                </li>
                <li>
                  Ask questions openly, and make sure a family member also
                  understands the plan.
                </li>
                <li>
                  Do not start new supplements, home remedies or other medicines
                  without telling the doctor.
                </li>
                <li>
                  Be patient with the process, because supportive care is built
                  on steady discipline rather than quick change.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor About Benefits
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  What is the goal of this plan, and how will we know whether it
                  is helping?
                </li>
                <li>
                  Which parts of the plan are medicines, and which are diet,
                  routine or therapy?
                </li>
                <li>
                  Are Panchakarma, yoga or naturopathy suitable for my condition
                  and my mobility?
                </li>
                <li>
                  Which tests should I repeat, and when should the next review
                  happen?
                </li>
                <li>
                  How should I combine this plan with my current prescribed
                  medicines?
                </li>
                <li>
                  Which warning signs mean I should seek urgent medical care?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Honest Expectations About Benefits
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care supports the body gradually, and no timeline or
                  outcome is guaranteed.
                </li>
                <li>
                  Benefits depend on the condition, its stage, the patient&apos;s
                  age and how consistently the advice is followed.
                </li>
                <li>
                  Patients with serious illness should keep regular specialist
                  care and share their Ayurvedic plan with their treating doctor.
                </li>
                <li>
                  If any symptom worsens, or a new symptom appears, contact the
                  doctor and seek medical care without delay.
                </li>
                <li>
                  For emergencies such as chest pain, severe breathlessness,
                  heavy bleeding or loss of consciousness, go to the nearest
                  emergency hospital first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who May Find This Approach Useful
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People with long-standing health concerns who want
                  consultation, diet guidance and follow-up in one place.
                </li>
                <li>
                  Families who prefer a calm, personalised approach to care over
                  a rushed visit.
                </li>
                <li>
                  Patients who are willing to follow a disciplined routine for
                  food, rest and activity.
                </li>
                <li>
                  Those who want to add supportive care alongside conventional
                  treatment, after discussing it with their own doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visiting Balprada from Kanth
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Balprada does not have a branch in Kanth, and patients from
                  Kanth visit one of two Moradabad-region branches.
                </li>
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
                  , with Sunday vaidya availability.
                </li>
                <li>
                  Consultation timing is 10:00 AM to 2:00 PM, and the ashram and
                  clinic are open seven days a week.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
                </li>
                <li>
                  Call before visiting to confirm branch-specific availability.
                </li>
              </ul>

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
                        Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                        Bilari, District Moradabad, Uttar Pradesh 244415.
                      </li>
                      <li>
                        Daily, 10:00 AM to 2:00 PM. Phone:{" "}
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
                        F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                        Uttar Pradesh 244001.
                      </li>
                      <li>
                        Phone:{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>
                        . Sunday vaidya availability.
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  for the Main Branch or{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  for the Moradabad Branch.
                </li>
                <li>
                  Send a WhatsApp message to{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  or write to{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
                <li>
                  Visit balpradaindia.com to read about treatments and facilities
                  and to use the Book Appointment page.
                </li>
              </ul>
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