import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalKanthLocation() {
  const faqs = [
    {
      q: "Where is Balprada Ayurvedic Hospital located?",
      a: "The Main Branch is in Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, and the Moradabad Branch is on Delhi Road, New Moradabad.",
    },
    {
      q: "Is there a Balprada branch in Kanth?",
      a: "No Kanth branch is listed on the website. Patients from Kanth can visit either branch.",
    },
    {
      q: "What are the timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "How do I find directions?",
      a: "Use the Google Maps links on the website contact page, and call the branch for any extra directions.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
    },
    {
      q: "Which phone numbers should I use?",
      a: "Call or WhatsApp 8126364606 for the Main Branch, and call 9410447000 for the Moradabad Branch.",
    },
    {
      q: "When should I arrive?",
      a: "Please arrive about 15 minutes early, and give 24 hours of notice to cancel or reschedule.",
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
                Balprada Ayurvedic Hospital Location for Kanth Patients
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People in Kanth who search for the location of Balprada
                  Ayurvedic Hospital &amp; Research Center usually want one clear
                  answer: where is the hospital, and how do we reach it?
                </li>
                <li>
                  Balprada has two branches, the Main Branch in Tehsil Bilari and
                  the Moradabad Branch on Delhi Road in New Moradabad, and both
                  are in Moradabad district of Uttar Pradesh.
                </li>
                <li>
                  The website does not list a branch in Kanth, so this page does
                  not claim one; it gives the exact addresses, timings, map links
                  and travel tips so that a Kanth family can plan a visit with
                  confidence.
                </li>
                <li>
                  The website contact page gives Google Maps links for both
                  branches but no landmarks or distances, so please confirm the
                  route and the travel time from your own location by phone or
                  map before leaving.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is There a Balprada Branch in Kanth?
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What the Website Says
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada website lists only two branches, the Main
                      Branch in Tehsil Bilari and the Moradabad Branch in New
                      Moradabad, and it does not list a branch, clinic or centre
                      in Kanth.
                    </li>
                    <li>
                      Patients from Kanth are therefore welcome to visit either
                      branch, and the team can guide them on timing before they
                      travel.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Why This Matters
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reading an address carefully avoids a wasted journey,
                      especially for elderly, weak or seriously ill patients who
                      find travel tiring.
                    </li>
                    <li>
                      If Balprada opens a new centre, the website contact page is
                      the place where it will be listed, so please check it for
                      updates.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Branch: Ashram and Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Full Address
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                      Bilari, District Moradabad, Uttar Pradesh 244415.
                    </li>
                    <li>
                      The ashram and clinic stand together at this location,
                      which is the heart of Balprada&apos;s work since 1991.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Timings and Contact
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation is available daily from 10:00 AM to 2:00 PM,
                      and the ashram and clinic are open seven days a week.
                    </li>
                    <li>
                      Phone and WhatsApp:{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                      , and email:{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>
                      .
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. What You Will Find Here
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation with the vaidyas, the Balprada Pathology Lab,
                      in-house herbal medicines, and supportive facilities such
                      as panchakarma, yoga, naturopathy, meditation and
                      physiotherapy.
                    </li>
                    <li>
                      A calm ashram setting that patients often describe as
                      serene and healing in their reviews.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Branch: Delhi Road
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Full Address
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                      Uttar Pradesh 244001.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Timings and Contact
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Vaidya ji is available at this branch on Sundays, and the
                      website advises patients to call before visiting.
                    </li>
                    <li>
                      Phone:{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>
                      . The website does not list daily timings for this branch,
                      so please confirm by phone.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Who May Prefer This Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families who find a city location easier to reach, or who
                      plan a Sunday consultation, may choose the Moradabad
                      Branch, after confirming availability with the team.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Branch Should a Kanth Patient Choose?
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. For Daily Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Main Branch lists consultation every day from 10:00 AM
                      to 2:00 PM, so it suits patients who need a specific
                      weekday or who want to see the ashram and facilities.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. For a Sunday Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Vaidya ji is available at the Moradabad Branch on Sundays,
                      which suits working families, though the branch should be
                      confirmed by phone first.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. For Free OPD
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month, but the website does not say which branch hosts it,
                      so call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to confirm before travelling.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. For Tests and Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The pathology lab, panchakarma and physiotherapy are
                      described in connection with the institution, so ask which
                      facility is available at which branch when you call.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Use the Map Links
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step 1: Open the Contact Page
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Visit balpradaindia.com, open the Contact page and choose
                      the Main Branch or Moradabad Branch map link.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Step 2: Enter Your Starting Point
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Type Kanth or your exact locality as the starting point,
                      and check the route, the road conditions and the travel
                      time shown by the map for the day you plan to travel.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Step 3: Save the Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Save the location on your phone, and share it with the
                      driver or the family member who will accompany the patient.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step 4: Call Before You Leave
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or WhatsApp the branch to confirm that the vaidya is
                      available, and ask for any extra directions from the
                      nearest main road.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning the Journey from Kanth
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Timing
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reach the clinic well within the 10:00 AM to 2:00 PM window
                      at the Main Branch, because consultation, reports and tests
                      can take time.
                    </li>
                    <li>
                      Leave early, allow for traffic or road work, and arrive
                      about 15 minutes before your appointment, as the website
                      terms request.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Comfort for Elderly and Weak Patients
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Choose a comfortable vehicle, carry water and a light
                      snack, and plan rest stops, especially for patients with
                      diabetes, swelling, weakness or kidney and liver concerns.
                    </li>
                    <li>
                      Ask the team on the phone whether a family member can first
                      share the reports and guide the next step if the patient
                      cannot travel far.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Family Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring at least one family member who can listen to the
                      vaidya&apos;s advice, carry the reports and help with
                      medicines and diet afterwards.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Return Planning
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Plan a comfortable return journey, because patients may
                      feel tired after the consultation and tests, and keep the
                      next review date noted in the family calendar.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. What to Carry
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring an identity document, previous prescriptions, recent
                      blood and urine reports, scans and a list of all current
                      medicines.
                    </li>
                    <li>
                      Note down symptoms, sleep, appetite and any blood sugar or
                      blood pressure readings, so that the vaidya sees the full
                      picture.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book Before You Travel
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Appointment Form
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website has an appointment form that asks about your
                      concern, with options such as kidney, liver, cancer, heart
                      and other, so choose the closest one and submit it.
                    </li>
                    <li>
                      Because the form lists only the concern, please also call
                      or WhatsApp so the team knows your name, contact number and
                      preferred branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Phone and WhatsApp
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      for the Main Branch, or call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      for the Moradabad Branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Email
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Write to{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>{" "}
                      if you wish to share reports or questions in advance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Appointment Terms
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Arrive about 15 minutes early, and give at least 24 hours
                      of notice if you need to cancel or reschedule.
                    </li>
                    <li>
                      Appointments depend on doctor availability, so confirming
                      before you travel avoids disappointment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Balprada Offers at Its Locations
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Treatment Areas
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kidney and urinary care, liver and digestive care, cancer
                      supportive care, heart and lifestyle care, diabetes and
                      thyroid care, and women&apos;s wellness.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Pathology Lab
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Listed tests include Complete Blood Count, Kidney Function
                      Test, Liver Function Test, Thyroid Profile, Diabetes
                      Profile with HbA1c, Lipid Profile, Urine Routine and
                      Microscopy, and Vitamin B12 and Vitamin D.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Medicines and Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares the
                      institution&apos;s traditional and patent Ayurvedic
                      medicines, and Balprada Enterprises offers wellness
                      products such as herbal tea, oils, flours and preserves.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Doctors and Team
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. U. S. Sharma has more than 20 years of experience in
                      Ayurvedic practice and consults on kidney, liver and other
                      chronic concerns.
                    </li>
                    <li>
                      Dr. Chetan Anand, associated with Balprada Herbal Wellness
                      Private Limited, has over seven years of experience in
                      herbal product research and development and advises on free
                      health camps.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask When You Call
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask whether the vaidya is available on the day you plan to
                  come, which branch is better for your concern, and whether the
                  free OPD on the 15th is being held at that branch.
                </li>
                <li>
                  Ask which tests are available at the branch, how long the
                  consultation and tests usually take, and which reports you
                  should carry from home.
                </li>
                <li>
                  Ask for any extra directions from the nearest main road,
                  parking arrangements and whether a wheelchair or help for
                  elderly patients can be arranged.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Habits That Support Treatment
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
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That Need a Check-Up
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Swelling around the eyes, feet or ankles, foamy or reduced
                  urine, constant tiredness, poor appetite, bloating or yellowing
                  of the eyes and skin are reasons to book a consultation and get
                  basic tests done.
                </li>
                <li>
                  People with diabetes, high blood pressure, excess weight,
                  long-term painkiller use or a family history of kidney or liver
                  disease are advised to check their reports at least once a
                  year.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Honest Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care at Balprada is supportive, outcomes vary from
                  person to person, and no specific result is promised.
                </li>
                <li>
                  Never stop prescribed medicines or dialysis without asking your
                  treating doctor, and go to the nearest hospital in an emergency
                  such as severe pain, breathlessness, heavy bleeding or sudden
                  worsening.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Why Families Travel to Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Experience since 1991: more than three decades of Ayurvedic
                  practice and a service-first spirit under the seva sankalp of
                  Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Consultation, tests and medicines under one institution, which
                  reduces the number of trips for families.
                </li>
                <li>
                  Patient reviews that speak of knowledgeable vaidyas, genuine
                  herbal preparations, a serene atmosphere and humble, helpful
                  staff.
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