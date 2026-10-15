import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalKanthContact() {
  const faqs = [
    {
      q: "What is the contact number of Balprada Ayurvedic Hospital?",
      a: "The Main Branch number is 8126364606, and the Moradabad Branch number is 9410447000.",
    },
    {
      q: "Is there a Balprada branch in Kanth?",
      a: "No, the branches are in Tehsil Bilari and New Moradabad, and patients from Kanth visit either one.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and the ashram and clinic are open seven days a week.",
    },
    {
      q: "When is the free OPD?",
      a: "Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Can I book through WhatsApp?",
      a: "Yes, you can send a WhatsApp message to 8126364606 or use the Book Appointment page on the website.",
    },
    {
      q: "Which branch has Sunday availability?",
      a: "Vaidya ji is available at the Moradabad Branch on Sundays, and patients should call before visiting.",
    },
    {
      q: "What should I bring to the first visit?",
      a: "Bring prescriptions, recent reports, current medicines and a note of symptoms and diet routine.",
    },
    {
      q: "Is a pathology lab available?",
      a: "Yes, Balprada Pathology Lab supports blood, urine and diagnostic testing.",
    },
    {
      q: "Can I enquire about herbal products?",
      a: "Yes, product enquiries for herbal tea, spices, oils and avaleh can be made through the contact form or phone.",
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
                Ayurvedic Hospital Kanth Contact: Phone, Address, OPD Timings
                and Appointment Guide
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Introduction
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients searching for an Ayurvedic hospital Kanth contact
                  usually want four things quickly: a working phone number, a
                  clear address, consultation timings and a simple way to book.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center serves
                  patients across the Moradabad region and has done so since
                  1991, guided by the seva sankalp of Sw. Vaidya Vijay Pal Singh
                  Ji.
                </li>
                <li>
                  This page gathers every published contact detail in one place,
                  so families in Kanth and nearby areas can plan a visit without
                  confusion.
                </li>
                <li>
                  All details below are taken from the hospital&apos;s own
                  website, and patients are advised to call before travelling
                  because availability can differ by branch and day.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Quick Contact Details at a Glance
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Main Branch phone and WhatsApp:{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch phone:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
                <li>Consultation timing: 10:00 AM to 2:00 PM.</li>
                <li>Ashram and clinic: open seven days a week.</li>
                <li>
                  Free OPD consultation: available on the 15th of every month.
                </li>
                <li>
                  Website: balpradaindia.com, where the Book Appointment page is
                  available.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Balprada Located in Kanth?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  No, Balprada does not have a branch inside Kanth, and this page
                  does not claim otherwise.
                </li>
                <li>
                  The hospital runs two branches in the Moradabad region: the
                  Main Branch in Tehsil Bilari and a second branch in New
                  Moradabad.
                </li>
                <li>
                  Patients from Kanth choose whichever branch suits their
                  schedule and condition, after confirming availability by phone.
                </li>
                <li>
                  No travel distances or journey times are given here because the
                  hospital has not published them; a quick call or a map search
                  gives the most accurate guidance for your route.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Branch Contact Details (Bilari)
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  Phone and WhatsApp:{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>Timings: daily, 10:00 AM to 2:00 PM.</li>
                <li>
                  The Main Branch is the ashram-based centre where the ashram and
                  clinic remain open throughout the week for guided consultation
                  and follow-up care.
                </li>
                <li>
                  Patients who want a calm, residential-style environment for
                  their treatment journey usually prefer this branch.
                </li>
                <li>
                  The Google Maps link for this address is available on the
                  hospital&apos;s Contact page, which helps drivers and
                  passengers navigate.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Branch Contact Details
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                  Uttar Pradesh 244001.
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>
                  Availability: Sunday vaidya availability, so patients should
                  call before visiting.
                </li>
                <li>
                  Vaidya ji is available at this branch on Sundays, which makes
                  it useful for patients who cannot travel on weekdays.
                </li>
                <li>
                  Always confirm the vaidya&apos;s presence and consultation flow
                  by phone before leaving home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Phone and WhatsApp Appointment
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
                  for the Moradabad Branch during consultation hours.
                </li>
                <li>
                  Send a WhatsApp message to{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  if you prefer writing, because it lets you share your concern
                  in your own words.
                </li>
                <li>
                  Patients can connect through phone or WhatsApp before visiting,
                  which the hospital specifically recommends.
                </li>
                <li>
                  Keep your previous reports handy while speaking so you can
                  answer the team&apos;s questions about your condition.
                </li>
                <li>
                  Write down the date, branch and time confirmed during the call
                  so that nothing is missed on the day.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book an Appointment Step by Step
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Step one: decide whether the Main Branch in Bilari or the
                  Moradabad Branch is more convenient for you.
                </li>
                <li>
                  Step two: call or send a WhatsApp message, or use the Book
                  Appointment page on balpradaindia.com.
                </li>
                <li>
                  Step three: share the patient&apos;s name, age, main health
                  concern and how long it has been present.
                </li>
                <li>
                  Step four: confirm the visit day, the consultation window and,
                  for the Moradabad Branch, whether the vaidya is available that
                  day.
                </li>
                <li>
                  Step five: gather prescriptions, reports and medicines, then
                  arrive within the 10:00 AM to 2:00 PM window.
                </li>
                <li>
                  Step six: after the first consultation, follow the
                  doctor&apos;s advice on medicines, diet and the next follow-up
                  date.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                OPD Timings and Free OPD Day
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The OPD consultation timing is 10:00 AM to 2:00 PM, and
                  patients should call before visiting, especially for
                  branch-specific availability.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  which is helpful for families who want a first opinion.
                </li>
                <li>
                  The ashram and clinic stay open seven days a week, so patients
                  are not limited to a single weekday.
                </li>
                <li>
                  On the free OPD day, more patients may arrive, so reaching
                  early within the consultation window is sensible.
                </li>
                <li>
                  Sunday vaidya availability applies to the Moradabad Branch, so
                  weekend visitors should confirm by phone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Carry to Your First Consultation
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Previous prescriptions from any doctor you have consulted.
                </li>
                <li>
                  Recent reports such as blood tests, urine tests, scans or other
                  diagnostics.
                </li>
                <li>
                  A list of all current medicines, including supplements and home
                  remedies.
                </li>
                <li>
                  A short written note of symptoms, how long they have lasted and
                  your daily diet routine.
                </li>
                <li>
                  A family member or caregiver for serious or long-standing
                  conditions, so that instructions are understood at home.
                </li>
                <li>
                  Valid contact numbers of the patient and the person
                  accompanying them, so follow-up calls reach the right person.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns You Can Enquire About
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
                  Cancer supportive care for strength, diet, energy and emotional
                  balance, offered alongside conventional treatment.
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
                  Each area has a dedicated page on the website, so you can read
                  about your concern before you call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask When You Call
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask which branch is suitable for your health concern and which
                  doctor or vaidya will see you.
                </li>
                <li>
                  Ask whether the vaidya is available on your chosen day,
                  especially for Sundays at the Moradabad Branch.
                </li>
                <li>
                  Ask what time within the 10:00 AM to 2:00 PM window is best for
                  a first consultation.
                </li>
                <li>
                  Ask whether you should bring any specific reports, scans or
                  past prescriptions beyond the usual ones.
                </li>
                <li>
                  Ask whether the free OPD on the 15th is suitable for your
                  situation or whether a regular consultation would be better.
                </li>
                <li>
                  Ask how follow-up will work, so you know whom to call after the
                  first visit.
                </li>
                <li>
                  Note the answers in one place, so every family member knows the
                  plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect When You Visit the Ashram
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Main Branch is an ashram-based centre, and patients often
                  describe the surroundings as calm, natural and welcoming.
                </li>
                <li>
                  The care model combines consultation, herbal medicines, diet
                  guidance and disciplined routines for long-term balance.
                </li>
                <li>
                  Staff are described by visitors as humble and kind, and the
                  hospital&apos;s own message is that no one should suffer.
                </li>
                <li>
                  Yoga, meditation and naturopathy are part of the wider
                  facilities, so patients may be guided on simple daily routines.
                </li>
                <li>
                  Patients should dress comfortably, carry their documents in one
                  folder and keep a bottle of water for the consultation window.
                </li>
                <li>
                  Respect the quiet, disciplined atmosphere of the ashram,
                  because it is central to the healing environment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors Patients Can Consult
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma serves as CMS at Balprada Ayurvedic Hospital
                  and Research Centre and has more than 20 years of experience in
                  Ayurvedic practice, consulting for kidney, liver and other
                  chronic health concerns.
                </li>
                <li>
                  Dr. Chetan Anand is associated with Balprada Herbal Wellness
                  Private Limited and has more than 7 years of experience in
                  herbal product research, pharmacy development and health camp
                  advisory.
                </li>
                <li>
                  Ask the phone team which doctor or vaidya is available on your
                  preferred day before you travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities Available for Patients
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma, planned according to individual assessment with
                  doctor-guided scheduling and recovery support.
                </li>
                <li>
                  Yoga for breath, posture, routine building and stress support.
                </li>
                <li>
                  Naturopathy, including natural therapies, detox support and
                  lifestyle correction.
                </li>
                <li>
                  Meditation, including guided practice, breath awareness and
                  sleep support.
                </li>
                <li>
                  Physiotherapy for mobility assessment, guided rehabilitation
                  and strength support.
                </li>
                <li>
                  Balprada Pathology Lab for blood and urine tests and
                  report-based care, helping doctors review your health details
                  clearly.
                </li>
                <li>
                  In-house herbal medicines, with product enquiries for herbal
                  tea, spices, oils and avaleh accepted through the contact form
                  or phone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation and Follow-Up Process
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews the concern, history, reports and
                  current medication before suggesting a care step.
                </li>
                <li>
                  An Ayurvedic plan is then prepared using Balprada&apos;s
                  medicines, diet discipline and lifestyle correction where
                  suitable.
                </li>
                <li>
                  Supportive facilities such as yoga, naturopathy, Panchakarma
                  and pathology are added as the doctor advises.
                </li>
                <li>
                  Follow-up depends on the condition, and the team may review
                  reports, symptoms, food routine and medicine response over
                  time.
                </li>
                <li>
                  Call the same number for follow-up questions, so your records
                  and advice stay connected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Jansewa and Ashram Service
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
                  The Jansewa page on the website describes this work, and
                  visitors who want to learn more can use the same contact
                  numbers.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Patients Contacting Balprada from Kanth
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call during the 10:00 AM to 2:00 PM window so the team can
                  answer your questions promptly.
                </li>
                <li>
                  Ask which branch is better for your concern and whether the
                  doctor you wish to see is present on your chosen day.
                </li>
                <li>
                  Mention if the patient is elderly or has difficulty travelling,
                  so the team can guide you on the visit.
                </li>
                <li>
                  Share your reports on WhatsApp only if the team asks, and
                  otherwise bring them in person.
                </li>
                <li>
                  Never stop or change prescribed medicines on your own; discuss
                  every medicine with your doctor first.
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
                Responsible Ayurvedic Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic treatment supports the body over time, and results
                  vary from person to person, so no guaranteed outcome is
                  promised.
                </li>
                <li>
                  Patients with serious illness should keep regular specialist
                  care and share Ayurvedic plans with their treating doctor.
                </li>
                <li>
                  Honest questions at the time of booking help the team guide you
                  correctly from the very first call.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Balprada Today
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  for the Main Branch in Bilari or{" "}
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
                  </a>{" "}
                  with your concern.
                </li>
                <li>
                  Visit balpradaindia.com to read about treatments, facilities,
                  doctors and OPD timings, and to use the Book Appointment page.
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