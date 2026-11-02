import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalAppointmentOnline() {
  const faqs = [
    {
      q: "Can I book an Ayurvedic hospital appointment online at Balprada?",
      a: "Yes. Use the Book Appointment form on balpradaindia.com, or contact the team by phone, WhatsApp or email.",
    },
    {
      q: "Which branches can I choose?",
      a: "You can select the Main Branch in Bilari or the Moradabad Branch on Delhi Road.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and calling ahead is advised for branch availability.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "What should I bring for consultation?",
      a: "Bring prescriptions, recent reports, current medicines and a note on symptoms and diet.",
    },
    {
      q: "When is the vaidya at the Moradabad Branch?",
      a: "Vaidya ji is available at the Moradabad Branch on Sundays, so please call before visiting.",
    },
    {
      q: "Can I visit for chronic conditions?",
      a: "Yes. Balprada supports chronic concerns through consultation, medicines, food discipline and follow-up.",
    },
    {
      q: "Is pathology testing available?",
      a: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing.",
    },
    {
      q: "Is online booking suitable for emergencies?",
      a: "No. In an emergency, go to urgent medical care first.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Hospital Appointment Online: Overview
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Online Booking Means at Balprada
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center lets patients
                  send an appointment request online by sharing patient details, a
                  preferred branch and the main health concern.
                </li>
                <li>
                  The team then guides you on consultation timing and the next
                  step, so you do not have to travel without knowing when the
                  vaidya is available.
                </li>
                <li>
                  You can also connect through phone, WhatsApp or email if you
                  prefer to talk to someone before visiting the hospital.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Why Patients Prefer Booking Before They Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Booking first helps you choose between the Main Branch and the
                  Moradabad Branch according to your convenience and the
                  vaidya&apos;s availability.
                </li>
                <li>
                  It saves time for families travelling from nearby villages,
                  towns and cities, because branch-specific availability can be
                  confirmed before leaving home.
                </li>
                <li>
                  It lets you prepare reports, prescriptions and a symptom note in
                  advance, which makes the first consultation more useful.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital &amp; Research Center
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                A Legacy of Seva Since 1991
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada has offered Ayurvedic care since 1991 and now brings
                  about 35 years of experience in natural, service-first
                  healthcare.
                </li>
                <li>
                  The institution is built on the seva sankalp of Sw. Vaidya Vijay
                  Pal Singh Ji, and that spirit of service continues in everyday
                  patient care.
                </li>
                <li>
                  Care combines Ayurvedic wisdom, in-house herbal medicines,
                  experienced doctors and disciplined routines for long-term
                  healing.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Ashram-Based Healing Environment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Main Branch sits in a peaceful ashram setting in Village
                  Bhidwari, Tehsil Bilari, District Moradabad, away from the noise
                  of the city.
                </li>
                <li>
                  The calm surroundings support rest, routine and discipline,
                  which are important parts of the Ayurvedic approach.
                </li>
                <li>
                  Patients often describe the staff as humble, kind and welcoming,
                  and the site features Google reviews that mention a serene
                  healing atmosphere.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns You Can Select While Booking
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Kidney Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The kidney and urinary care section supports consultation and
                  lifestyle guidance for kidney function, swelling, stones and
                  diabetes-linked kidney concerns.
                </li>
                <li>
                  Treatment pages cover kidney failure, kidney stones and
                  swelling, so you can read about your concern before you book.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Liver Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Liver and digestive care focuses on medicine, diet and
                  routine-based support for fatty liver, jaundice and weak
                  digestion.
                </li>
                <li>
                  Choose this option if you have liver reports, digestive
                  complaints or long-standing stomach issues you want an Ayurvedic
                  doctor to review.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Cancer Support
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Cancer supportive care is offered as sensitive, complementary
                  support for strength, diet, energy and emotional balance during
                  serious illness.
                </li>
                <li>
                  It is meant to sit alongside, not replace, the treatment advised
                  by your oncologist.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Heart Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Heart and lifestyle care covers blood pressure, diabetes, weight
                  and stress concerns through integrated Ayurvedic and lifestyle
                  guidance.
                </li>
                <li>
                  Bring your current medicine list so the doctor can understand
                  your routine fully.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Diabetes and Thyroid Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  This section supports blood sugar, thyroid function, energy,
                  weight and metabolic balance with personalised guidance.
                </li>
                <li>
                  Hypothyroidism and hyperthyroidism both have dedicated pages on
                  the website.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Women&apos;s Health
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Women&apos;s wellness care is private and sensitive, covering
                  hormonal balance, menstrual health and weakness.
                </li>
                <li>
                  If your concern does not fit any category, select Other and
                  describe it in your own words.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ways to Book Your Appointment
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Online Appointment Request Form
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Open the Book Appointment page on balpradaindia.com, enter the
                  patient details and choose your Preferred Branch.
                </li>
                <li>
                  Select the Health Concern that best matches your need, then
                  press Submit Request so the team can reach you with guidance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                WhatsApp Appointment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Message{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  on WhatsApp to share the patient&apos;s name, concern and
                  preferred branch in a few lines.
                </li>
                <li>
                  WhatsApp is useful when you want to send details quickly or ask
                  a simple question before visiting.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Phone Call
              </h3>

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
                  for the Moradabad Branch to confirm availability.
                </li>
                <li>
                  Calling is the best choice if you are unsure which branch suits
                  you or want to check the vaidya&apos;s schedule.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Email
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Write to{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  with the patient&apos;s concern and any questions about
                  consultation.
                </li>
                <li>
                  Email suits families who want to describe a longer medical
                  history in writing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book Online, Step by Step
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Before You Start
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep the patient&apos;s full name, age and contact number ready.
                </li>
                <li>
                  Decide which health concern is the main reason for the visit,
                  since the form asks for one primary concern.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Submitting the Request
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Visit the Book Appointment page and fill in the patient details.
                </li>
                <li>
                  Pick the Main Branch or the Moradabad Branch as your preferred
                  location.
                </li>
                <li>
                  Select the concern, press Submit Request and keep your phone
                  nearby.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                After Submitting
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website does not state a fixed confirmation time, so if you
                  do not hear back, call or WhatsApp the number listed for your
                  branch.
                </li>
                <li>
                  Confirm the day, the time and whether the vaidya will be
                  available before you travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Branches and OPD Timings
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Main Branch (Ashram and Clinic)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  Timing: open daily, 10:00 AM to 2:00 PM, with the ashram and
                  clinic running seven days a week.
                </li>
                <li>
                  Contact:{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  and{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Moradabad Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                  Uttar Pradesh 244001.
                </li>
                <li>
                  Vaidya ji is available at this branch on Sundays, so calling
                  before you visit is strongly advised.
                </li>
                <li>
                  Contact:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  and{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Free OPD on the 15th of Every Month
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  with consultation timing from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Call before visiting to confirm branch-specific availability and
                  how the consultation flow works that day.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Carry to Your Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Medical Documents
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Previous prescriptions from any doctor you have consulted,
                  including Ayurvedic, homeopathic or allopathic prescriptions.
                </li>
                <li>
                  Recent reports such as blood, urine, ultrasound or other
                  diagnostic tests, as they help the doctor review your health
                  clearly.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Current Medicines and Notes
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring every medicine you are taking at present, so the doctor
                  can plan care with full knowledge of your treatment.
                </li>
                <li>
                  Write a short note on your symptoms, how long they have lasted
                  and your daily diet routine.
                </li>
                <li>
                  Never stop prescribed medicines on your own, and discuss any
                  change with your treating doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Your First Visit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews your concern, history, reports and current
                  medication before suggesting the next care step.
                </li>
                <li>
                  This is the time to ask about diet, routine and how long the
                  plan may continue.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Care is planned with Balprada&apos;s Ayurvedic medicines, diet
                  discipline and lifestyle correction where suitable.
                </li>
                <li>
                  The plan is individual, so two patients with the same diagnosis
                  may receive different guidance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga, naturopathy, panchakarma and pathology support help make
                  the treatment journey more complete.
                </li>
                <li>
                  Which facilities are recommended depends on your assessment by
                  the doctor.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Follow-Up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up depends on the patient&apos;s condition and may
                  include review of reports, symptoms, food routine and medicine
                  response.
                </li>
                <li>
                  Regular follow-up helps the team observe progress, adjust
                  guidance and support long-term discipline.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities Available Alongside Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Therapies and Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma therapies are planned to support cleansing, balance
                  and recovery according to individual assessment.
                </li>
                <li>
                  Yoga, naturopathy and meditation support balance across body,
                  mind and breath, and help patients build calm and discipline.
                </li>
                <li>
                  Physiotherapy supports safe movement, mobility, strength and
                  recovery alongside the wider care plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Diagnostics and Products
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab provides blood, urine and diagnostic
                  testing support so doctors can review health details more
                  clearly.
                </li>
                <li>
                  Product inquiries for herbal tea, spices, oils, avaleh and other
                  Balprada Enterprises products can be shared through the contact
                  form or phone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Smooth Online Booking
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Choosing the Right Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Pick the Main Branch if you want the ashram setting and daily
                  consultation between 10:00 AM and 2:00 PM.
                </li>
                <li>
                  Pick the Moradabad Branch if you live in the city and can plan
                  your visit around Sunday availability.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Planning Your Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reach a little before the consultation window ends, since the
                  OPD runs from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Bring a family member who knows the medical history, especially
                  for elderly patients or those with serious illness.
                </li>
                <li>
                  Read the treatment pages on the website first so your questions
                  to the vaidya are clear.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Explore More on the Website
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Visit the Treatments page at balpradaindia.com/treatments to
                  read about kidney, liver, cancer support, heart, diabetes,
                  thyroid and women&apos;s care.
                </li>
                <li>
                  Visit the OPD page at balpradaindia.com/opd for timings and the
                  FAQ page at balpradaindia.com/faq for common questions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Emergencies and Safe Use
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Emergency cases should receive urgent medical care first, and
                  Ayurvedic consultation can follow once the patient is stable.
                </li>
                <li>
                  Ayurvedic care here is supportive and individual, and results
                  vary from person to person, so no outcome is promised.
                </li>
                <li>
                  Always share all current treatments with your Ayurvedic doctor
                  and your regular doctor to keep care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Request Your Appointment Today
              </h2>

              <h3 className="mb-3 font-serif text-2xl">Ready to Book</h3>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Open the Book Appointment page, choose your branch and concern,
                  and press Submit Request.
                </li>
                <li>
                  Prefer a quick chat? Message{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  on WhatsApp or call the branch you plan to visit.
                </li>
                <li>
                  Remember the free OPD on the 15th of every month if you want a
                  consultation on that day.
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