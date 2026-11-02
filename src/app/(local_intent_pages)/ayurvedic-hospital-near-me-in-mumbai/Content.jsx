import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalForMumbaiPatients() {
  const faqs = [
    {
      q: "Does Balprada have a hospital in Mumbai?",
      a: "No. The two branches are in Bilari and Moradabad, Uttar Pradesh.",
    },
    {
      q: "How can I book from Mumbai?",
      a: "Use the online Book Appointment form, or contact the team by phone, WhatsApp or email.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and calling ahead is advised.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Is online or video consultation available?",
      a: "The website does not say. Please ask the team before planning.",
    },
    {
      q: "Is accommodation available?",
      a: "The website lists no accommodation details, so please ask the team.",
    },
    {
      q: "What should I bring?",
      a: "Bring prescriptions, recent reports, current medicines and a symptom and diet note.",
    },
    {
      q: "Which concerns can I select while booking?",
      a: "Kidney, liver, cancer support, heart, diabetes and thyroid, women’s health or other.",
    },
    {
      q: "Is Balprada suitable for emergencies?",
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
                Searching for an Ayurvedic Hospital from Mumbai
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Mumbai Patients Should Know First
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center does not run a
                  branch in Mumbai, and its two branches are in the Moradabad
                  region of Uttar Pradesh.
                </li>
                <li>
                  This guide is written for Mumbai families who are searching for
                  an Ayurvedic hospital and want to understand how Balprada works
                  before deciding on a visit.
                </li>
                <li>
                  Knowing the location, timings and booking steps in advance helps
                  you plan a long-distance visit with confidence.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Why Families Look Beyond the City
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many people with long-standing health concerns look for a
                  traditional vaidya, an ashram-style setting and in-house herbal
                  medicines.
                </li>
                <li>
                  Some patients want a doctor who reviews reports, diet and daily
                  routine together, rather than a short consultation.
                </li>
                <li>
                  Balprada has offered Ayurvedic care since 1991, so it often
                  comes up when families research established Ayurvedic centres.
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
                  Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji,
                  and its work is built on the idea of seva, or selfless service.
                </li>
                <li>
                  The website describes about 35 years of experience in natural
                  Ayurvedic care, disciplined routines and a service-first spirit.
                </li>
                <li>
                  The institution grew from an Ayurvedic clinic into a wider
                  centre with an ashram, herbal wellness, pathology, yoga and
                  naturopathy.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Ashram-Based Care Environment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Main Branch is an ashram and clinic in a village setting,
                  which gives patients a calm place away from the pace of a metro
                  city.
                </li>
                <li>
                  The ashram and clinic stay open seven days a week for guided
                  consultation and follow-up care.
                </li>
                <li>
                  Google reviews on the website mention humble staff, authentic
                  herbal preparations and a serene healing atmosphere.
                </li>
              </ul>

              
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where Balprada Is Located
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
                  Timing: open daily from 10:00 AM to 2:00 PM, with the ashram and
                  clinic running seven days a week.
                </li>
                <li>
                  Contact: call or WhatsApp{" "}
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
                  Vaidya ji is available at this branch on Sundays, so patients
                  are asked to call before visiting.
                </li>
                <li>
                  Contact:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  or{" "}
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
                Choosing a Branch as an Outstation Patient
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask the team which branch is better for your health concern and
                  the day you plan to travel.
                </li>
                <li>
                  Confirm that the doctor you wish to see will be available on
                  that date before you book tickets.
                </li>
                <li>
                  Both branches share the same email,{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  , so written questions can be sent to one address whichever
                  branch you choose.
                </li>
                <li>
                  If you are unsure, start with a WhatsApp message to{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  and let the team guide you on the next step.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Balprada Supports
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Kidney and Urinary Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic consultation and lifestyle care for kidney function,
                  swelling, stones and diabetes-linked kidney concerns.
                </li>
                <li>
                  Dedicated pages on the website cover kidney failure, kidney
                  stones and swelling.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Liver and Digestive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Medicine, diet and routine-based care for fatty liver, jaundice
                  and weak digestion.
                </li>
                <li>
                  Suitable for patients who bring liver reports or long-standing
                  digestive complaints for review.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Cancer Supportive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sensitive, complementary support for strength, diet, energy and
                  emotional balance during serious illness.
                </li>
                <li>
                  It is meant to work alongside the treatment advised by your
                  oncologist, not to replace it.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Heart and Lifestyle Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Integrated Ayurvedic and lifestyle care for blood pressure,
                  diabetes, weight and stress concerns.
                </li>
                <li>
                  Patients should bring their current medicine list so the doctor
                  sees the full picture.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Diabetes and Thyroid Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Personalised support for blood sugar, thyroid function, energy,
                  weight and metabolic balance.
                </li>
                <li>
                  Separate pages explain hypothyroidism and hyperthyroidism.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Women&apos;s Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Private and sensitive care for hormonal balance, menstrual
                  health and weakness.
                </li>
                <li>
                  Patients with a concern outside these categories can choose
                  Other when they contact the team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities Alongside Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Therapies and Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma is planned for cleansing, balance and recovery after
                  an individual assessment, with food, rest and daily-routine
                  guidance.
                </li>
                <li>
                  Yoga and meditation help build breath awareness, calm and
                  discipline, and support sleep and stress.
                </li>
                <li>
                  Naturopathy and physiotherapy support natural routines, safe
                  movement, mobility and strength within the wider care plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Pathology and Herbal Products
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab offers blood, urine and diagnostic
                  testing so doctors can review reports more clearly.
                </li>
                <li>
                  Herbal tea, spices, oils, avaleh and other Balprada Enterprises
                  products are available, and product questions can be shared by
                  phone or the contact form.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Mumbai Patients Can Start the Booking Process
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Online Appointment Request
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Open the Book Appointment page on balpradaindia.com and enter
                  the patient&apos;s details.
                </li>
                <li>
                  Choose a Preferred Branch, either the Main Branch or the
                  Moradabad Branch.
                </li>
                <li>
                  Select a Health Concern such as kidney, liver, cancer support,
                  heart, diabetes and thyroid, women&apos;s health or other, then
                  press Submit Request.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Phone, WhatsApp and Email
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  with the patient&apos;s name, concern and preferred branch for a
                  quick start.
                </li>
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
                  Email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  if you want to describe a longer medical history in writing.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Questions to Ask Before You Travel
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask whether the doctor is available on your planned date and
                  whether a free OPD day suits you.
                </li>
                <li>
                  The website does not state whether remote or video consultation
                  is offered, so ask the team directly if you need it.
                </li>
                <li>
                  The website also does not list accommodation, so ask about
                  nearby stay options when you call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Visit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                OPD Timings and Free OPD
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Consultation runs from 10:00 AM to 2:00 PM, so plan to arrive
                  well before the window ends.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  and calling ahead helps confirm that day&apos;s flow.
                </li>
                <li>
                  Sunday vaidya availability applies to the Moradabad Branch, so
                  call before visiting.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What to Carry
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Previous prescriptions, recent reports and every medicine you
                  currently take.
                </li>
                <li>
                  A short note on symptoms, how long they have lasted and your
                  diet routine.
                </li>
                <li>
                  A family member who knows the medical history, especially for
                  elderly or seriously ill patients.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Travel Planning
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Check the route, travel time and timings yourself, because the
                  website gives no distances or transport details.
                </li>
                <li>
                  Share the Main Branch address, Mohalla Vijaynagar, Village
                  Bhidwari, Tehsil Bilari, with your driver or booking app.
                </li>
                <li>
                  Avoid long-distance travel if the patient is unwell, and seek
                  local medical care first in an emergency.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the First Visit
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
                  This is the right time to ask about diet, routine and the likely
                  length of the plan.
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
                  Two patients with the same diagnosis may receive different
                  guidance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga, naturopathy, panchakarma and pathology support are used
                  according to your assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up for Patients From Outside the Region
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                How Follow-Up Works
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up depends on the patient&apos;s condition and may
                  include review of reports, symptoms, food routine and medicine
                  response.
                </li>
                <li>
                  Regular follow-up helps the team observe progress and adjust
                  guidance over time.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Planning Follow-Up From Mumbai
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask during your first visit how often follow-up is needed and
                  whether any review can be done by phone.
                </li>
                <li>
                  Keep all reports, prescriptions and notes in one folder so every
                  review is easy and complete.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jansewa and Community Service
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Balprada Jansewa Sansthan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada&apos;s social service arm works in elder care, the
                  Navtarun Ashram, residential support initiatives and
                  Gaushala-based service.
                </li>
                <li>
                  This service-first spirit is part of the institution&apos;s
                  identity and reflects the seva sankalp on which it was founded.
                </li>
                <li>
                  Patients and families can ask the team about Jansewa activities
                  when they visit the ashram.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Organic Food and Herbal Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website has an Organic Food section, and Balprada
                  Enterprises offers herbal flours, spices, oils, teas and
                  pickles.
                </li>
                <li>
                  Food and daily routine are treated as part of care, so diet
                  guidance forms a regular part of consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Tips for Mumbai Families
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Before You Decide
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Read the Treatments page for your concern so your questions to
                  the vaidya are clear and specific.
                </li>
                <li>
                  Write down your current medicines, test dates and symptoms in
                  one note before you call the team.
                </li>
                <li>
                  Speak with your regular doctor about your plan, especially if
                  you are on long-term prescribed medicines.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Before You Leave Home
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Confirm the branch, the date and the doctor&apos;s availability
                  by phone or WhatsApp.
                </li>
                <li>
                  Save the team&apos;s number,{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  for the Main Branch and{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  for the Moradabad Branch, in your phone.
                </li>
                <li>
                  Carry original reports and prescriptions, along with a few
                  photocopies, so nothing is missed during the review.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                After You Return
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the diet and routine guidance you received and keep a
                  simple daily log of how you feel.
                </li>
                <li>
                  Contact the team if you have questions about the plan, and share
                  new test results at your next review.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Related Pages on balpradaindia.com
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Where to Read More
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Treatments page explains kidney, liver, cancer support,
                  heart, diabetes, thyroid and women&apos;s care.
                </li>
                <li>
                  The OPD page lists timings, and the FAQ page answers common
                  questions on reports, follow-up and products.
                </li>
                <li>
                  The Facilities, Team and Ashram pages show how care, doctors and
                  routines come together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Care Note
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Safe Use and Emergencies
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Emergency cases should receive urgent medical care first.
                </li>
                <li>
                  Ayurvedic care here is supportive and individual, and results
                  vary from person to person, so no outcome is promised.
                </li>
                <li>
                  Share all current treatments with both your Ayurvedic doctor and
                  your regular doctor, and never stop prescribed medicines on your
                  own.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Request Your Appointment
              </h2>

              <h3 className="mb-3 font-serif text-2xl">Ready to Connect</h3>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Open the Book Appointment page, choose your branch and concern,
                  and press Submit Request.
                </li>
                <li>
                  Prefer to talk first? Message{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  on WhatsApp or call the branch you plan to visit.
                </li>
                <li>
                  Remember the free OPD on the 15th of every month when choosing
                  your date.
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