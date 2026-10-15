import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BookAyurvedicTreatmentKanth() {
  const faqs = [
    {
      q: "How can I book Ayurvedic treatment from Kanth?",
      a: "Use the Book Appointment page, call 8126364606 or 9410447000, or send a WhatsApp message to 8126364606.",
    },
    {
      q: "Is there a Balprada branch in Kanth?",
      a: "No, patients from Kanth book at the Bilari or Moradabad branch.",
    },
    {
      q: "What does the online form ask?",
      a: "It includes patient details, a preferred branch and a health concern, followed by a Submit Request button.",
    },
    {
      q: "Will I get a confirmation?",
      a: "The website does not describe one, so follow up by phone if you do not hear back.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and the ashram and clinic are open seven days a week.",
    },
    {
      q: "Do I need to book the free OPD?",
      a: "The website does not say, so call or message to confirm before the 15th.",
    },
    {
      q: "Which branch is open on Sundays?",
      a: "Vaidya ji is available at the Moradabad Branch on Sundays, and patients should call before visiting.",
    },
    {
      q: "What should I bring to the first visit?",
      a: "Bring prescriptions, recent reports, current medicines and a note of symptoms and diet routine.",
    },
    {
      q: "Can I change my appointment?",
      a: "The website does not describe this, so call the branch you booked with.",
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
                Book Ayurvedic Treatment from Kanth: A Simple Appointment Guide
                for Balprada
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Introduction
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients in Kanth who want to book Ayurvedic treatment usually
                  need a clear answer to three questions: where to go, how to
                  book, and what to prepare.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has served
                  patients since 1991, and the ashram and clinic stay open seven
                  days a week for guided consultation and follow-up care.
                </li>
                <li>
                  This page explains every booking route the hospital publishes,
                  in plain steps that a patient or a family member can follow.
                </li>
                <li>
                  Everything below comes from the hospital&apos;s own website,
                  and where the website is silent, this page says so and suggests
                  a quick phone call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ways to Book at a Glance
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Online: use the Book Appointment page on balpradaindia.com and
                  submit a request.
                </li>
                <li>
                  Phone: call{" "}
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
                  WhatsApp: send a message to{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Email: write to{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
                <li>
                  In every case, the website recommends calling or messaging
                  before you visit, especially to confirm branch-specific
                  availability.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is There a Balprada Branch in Kanth?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  No, Balprada does not have a branch inside Kanth, and this page
                  does not suggest otherwise.
                </li>
                <li>
                  Patients from Kanth book a visit at one of two branches in the
                  Moradabad region.
                </li>
                <li>
                  The Main Branch is in Tehsil Bilari, and the second branch is
                  in New Moradabad.
                </li>
                <li>
                  The website does not publish travel distances or journey times,
                  so none are given here.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step One: Choose Your Branch
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415, open
                  daily from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001, with Sunday vaidya
                  availability and a request to call before visiting.
                </li>
                <li>
                  Pick the Main Branch for the ashram-based centre and weekday or
                  daily consultation within the published window.
                </li>
                <li>
                  Pick the Moradabad Branch if you plan to see Vaidya ji on a
                  Sunday, after confirming by phone.
                </li>
                <li>
                  The booking form also asks for a preferred branch, so decide
                  before you start.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step Two: Choose Your Health Concern
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Appointment page lists these concern options: Kidney Care,
                  Liver Care, Cancer Support, Heart Care, Diabetes and Thyroid
                  Care, Women&apos;s Health, and Other.
                </li>
                <li>
                  A shorter enquiry form on the website offers Kidney, Liver,
                  Cancer, Heart and Other.
                </li>
                <li>
                  Choose the option closest to the main reason for the visit, and
                  use Other if your concern does not fit.
                </li>
                <li>
                  You can explain further details on the phone call or during the
                  consultation, so do not worry about an exact label.
                </li>
                <li>
                  Cancer Support refers to supportive care for strength, diet,
                  energy and emotional balance, offered alongside conventional
                  treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step Three: Submit the Online Appointment Request
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Open the Book Appointment page on balpradaindia.com.</li>
                <li>
                  Fill in the patient details section, then select your preferred
                  branch and your health concern.
                </li>
                <li>
                  Press the Submit Request button to send your request to the
                  team.
                </li>
                <li>
                  The website says the team can guide you with consultation
                  timing and the next step.
                </li>
                <li>
                  The website does not describe a confirmation message, a
                  response time or slot selection, so follow up by phone if you
                  do not hear back.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking by Phone
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  for the Main Branch, or{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  for the Moradabad Branch.
                </li>
                <li>
                  Call during the 10:00 AM to 2:00 PM consultation window so the
                  team can answer promptly.
                </li>
                <li>
                  Tell the team the patient&apos;s name, age, main concern and
                  how long it has been present.
                </li>
                <li>
                  Ask for the visit day, the consultation window and, at the
                  Moradabad Branch, whether the vaidya is available.
                </li>
                <li>
                  Write down the date, branch and time confirmed during the call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking by WhatsApp
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Send a WhatsApp message to{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  , which is the same number as the Main Branch phone.
                </li>
                <li>
                  Write the patient&apos;s name, age, main concern and preferred
                  branch in one clear message.
                </li>
                <li>
                  Mention if you would like to use the free OPD on the 15th, so
                  the team can guide you on timing.
                </li>
                <li>
                  Share reports only if the team asks, and otherwise bring them
                  in person.
                </li>
                <li>
                  WhatsApp is convenient for families who prefer writing or who
                  are travelling for the first time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking by Email
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Write to{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  , which the website lists under both branches.
                </li>
                <li>
                  Use a clear subject such as the patient&apos;s name and the
                  health concern.
                </li>
                <li>
                  Include a contact number in the message, so that the team can
                  call you back if needed.
                </li>
                <li>
                  Because email may take longer, use the phone for urgent timing
                  questions.
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
                  The website does not say whether this day needs a booking, so
                  call or message in advance to confirm.
                </li>
                <li>
                  The website also does not say what the free OPD covers, so ask
                  whether medicines, tests or procedures are included.
                </li>
                <li>
                  Expect a larger gathering on this day, and reach early within
                  the 10:00 AM to 2:00 PM window.
                </li>
                <li>
                  If the 15th does not suit you, a regular consultation is
                  available throughout the week.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                OPD Timings You Should Plan Around
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Consultation timing is 10:00 AM to 2:00 PM at the Main Branch,
                  daily.
                </li>
                <li>The ashram and clinic are open seven days a week.</li>
                <li>
                  Vaidya ji is available at the Moradabad Branch on Sundays, and
                  patients should call before visiting.
                </li>
                <li>
                  Plan your arrival early in the window, because late arrivals
                  may have less time with the doctor.
                </li>
                <li>
                  Confirm the doctor&apos;s availability for your chosen day when
                  you book.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Details to Keep Ready Before You Book
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The patient&apos;s full name, age and a working contact number.
                </li>
                <li>
                  The main health concern and how long it has been present.
                </li>
                <li>
                  The branch you prefer and the day you hope to visit.
                </li>
                <li>
                  Names of any medicines the patient currently takes, including
                  supplements and home remedies.
                </li>
                <li>
                  A note of recent tests or hospital visits, so that the team can
                  guide you on what to bring.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Carry to the First Consultation
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Previous prescriptions from any doctor you have consulted.
                </li>
                <li>
                  Recent reports such as blood tests, urine tests, scans or other
                  diagnostics.
                </li>
                <li>A list of current medicines.</li>
                <li>
                  A short written note of symptoms, duration and daily diet
                  routine.
                </li>
                <li>
                  A family member or caregiver for serious or long-standing
                  conditions, so that instructions are understood at home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens at the First Consultation
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews the concern, history, reports and current
                  medication before suggesting the next care step.
                </li>
                <li>
                  An Ayurvedic plan is then prepared around Balprada&apos;s
                  medicines, diet discipline and lifestyle correction where
                  suitable.
                </li>
                <li>
                  Supportive facilities such as yoga, naturopathy, Panchakarma
                  and pathology are added as the doctor advises.
                </li>
                <li>
                  Follow-up is planned according to the condition, and the team
                  may review reports, symptoms, food routine and medicine
                  response over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Support Available After Booking
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab provides blood, urine and diagnostic
                  testing so doctors can review health details clearly, and the
                  lab asks patients to confirm test, preparation, price and
                  reporting time directly.
                </li>
                <li>
                  Panchakarma, yoga, naturopathy, meditation and physiotherapy
                  are available as supportive facilities.
                </li>
                <li>
                  In-house herbal medicines are prepared by Balprada&apos;s
                  pharmacy arm, and product enquiries can be made by phone, email
                  or the contact form.
                </li>
                <li>
                  Dr. U. S. Sharma, CMS, has more than 20 years of experience and
                  consults for kidney, liver and other chronic health concerns.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Changing or Cancelling a Booking
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website does not describe a rescheduling or cancellation
                  process.
                </li>
                <li>
                  If your plans change, call the same branch number you used to
                  book and explain the situation.
                </li>
                <li>
                  Give as much notice as you can, so that the team can arrange
                  the day well for other patients.
                </li>
                <li>
                  Ask for a new date and write it down once confirmed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Booking Ahead Helps
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Two branches work with different availability, so a quick call
                  tells you which one suits your day.
                </li>
                <li>
                  The vaidya&apos;s presence at the Moradabad Branch is published
                  only for Sundays, which makes confirmation especially useful
                  there.
                </li>
                <li>
                  Consultation runs only from 10:00 AM to 2:00 PM, so a confirmed
                  plan prevents a wasted journey.
                </li>
                <li>
                  The team can guide you on consultation timing and the next
                  step, which the website specifically offers.
                </li>
                <li>
                  Families travelling with elderly or unwell patients benefit most
                  from knowing the plan in advance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Booking Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Arriving without calling, especially at the Moradabad Branch,
                  where the website asks patients to call before visiting.
                </li>
                <li>
                  Choosing the wrong branch because the addresses and phone
                  numbers look similar.
                </li>
                <li>
                  Reaching late in the day, close to the end of the consultation
                  window.
                </li>
                <li>
                  Forgetting previous reports and prescriptions, which help the
                  doctor understand the case.
                </li>
                <li>
                  Assuming the free OPD needs no confirmation, when the website
                  does not state the rule.
                </li>
                <li>
                  Not noting down the confirmed date and branch, which can cause
                  confusion within the family.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Quick Booking Checklist
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Decide the branch and the preferred day.</li>
                <li>Choose the health concern that fits best.</li>
                <li>Submit the online request, or call or message the branch.</li>
                <li>Note the confirmed date, branch and time.</li>
                <li>Gather reports, prescriptions and a medicine list.</li>
                <li>Arrange a family member to accompany the patient.</li>
                <li>Save the branch phone number for the journey.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Kanth Patients Booking a Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Decide the branch first, because the phone number and
                  availability differ.
                </li>
                <li>
                  Book a day when a family member can accompany the patient,
                  especially for a first visit.
                </li>
                <li>
                  Start early enough to reach within the consultation window,
                  since no travel times are published.
                </li>
                <li>
                  Ask the team whether there is anything you should know about
                  access for elderly or weak patients, because the website does
                  not describe this.
                </li>
                <li>
                  Keep the branch phone number saved on your phone throughout the
                  journey.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety and Responsible Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  For emergencies such as chest pain, severe breathlessness,
                  heavy bleeding or loss of consciousness, go to the nearest
                  emergency hospital first.
                </li>
                <li>
                  Never stop or change prescribed medicines on your own; discuss
                  every medicine with your doctor.
                </li>
                <li>
                  Ayurvedic treatment supports the body over time, and results
                  vary from person to person, so no guaranteed outcome is
                  promised.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
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
                  Visit balpradaindia.com and use the Book Appointment page to
                  submit your request.
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
                        Daily, 10:00 AM to 2:00 PM. Phone and WhatsApp:{" "}
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
                        Vaidya ji is available on Sundays, so please call{" "}
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