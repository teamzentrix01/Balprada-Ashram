import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHospitalAddress() {
  const faqs = [
    {
      q: "What is the Balprada Hospital address?",
      a: "The Main Branch is at Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. The Moradabad Branch is at F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.",
    },
    {
      q: "What are the timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "What are the phone numbers?",
      a: "Call or WhatsApp 8126364606 for the Main Branch, and call 9410447000 for the Moradabad Branch.",
    },
    {
      q: "Is there a map link?",
      a: "Yes. The contact page of the website has a Google Maps link for each branch.",
    },
    {
      q: "Are landmarks or distances given?",
      a: "No. The website gives only the addresses and map links, so please call for extra directions.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month. Please call to confirm the branch.",
    },
    {
      q: "How do I book an appointment?",
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
                Balprada Hospital Address: Both Branches in One Place
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients and families who search for the Balprada Hospital
                  address usually want exact details they can copy, share with a
                  driver and check on a map, so this page lists every address,
                  timing and contact number published on the Balprada website.
                </li>
                <li>
                  Balprada Ayurvedic Hospital and Research Center has served
                  patients in Moradabad district of Uttar Pradesh since 1991, and
                  it works from two branches: the Main Branch in Tehsil Bilari
                  and the Moradabad Branch on Delhi Road.
                </li>
                <li>
                  The website gives Google Maps links for both branches on its
                  contact page, but it does not give landmarks or distances, so
                  this page does not invent any and advises a phone call before
                  travelling.
                </li>
                <li>
                  Please read the address of each branch carefully, because the
                  two branches have different timings, different phone numbers
                  and different arrangements for the vaidya.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Branch Address: Ashram and Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Full Postal Address
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                      Bilari, District Moradabad, Uttar Pradesh 244415.
                    </li>
                    <li>
                      The ashram and clinic are located together at this address,
                      and this is the original home of Balprada since 1991.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Timings
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Main Branch consults daily from 10:00 AM to 2:00 PM,
                      and the ashram and clinic are open seven days a week for
                      guided consultation and follow up care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Contact Details
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Phone and WhatsApp:{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
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
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. What You Will Find at the Main Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation with the vaidyas, the Balprada Pathology Lab,
                      in-house Ayurvedic medicines, and supportive facilities
                      such as panchakarma, yoga, naturopathy, meditation and
                      physiotherapy.
                    </li>
                    <li>
                      A calm ashram setting, which patients often describe as
                      serene and healing in their reviews.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Branch Address: Delhi Road
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Full Postal Address
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
                    2. Timings
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Vaidya ji is available at this branch on Sundays, and the
                      website asks patients to call before visiting.
                    </li>
                    <li>
                      The website does not list daily timings for this branch, so
                      please confirm by phone before you leave.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Contact Details
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Phone:{" "}
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
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Who May Prefer This Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families who find a city location easier to reach, or who
                      plan a Sunday consultation, may choose the Moradabad Branch
                      after confirming the vaidya availability with the team.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Address at a Glance
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Place: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh, PIN
                      244415.
                    </li>
                    <li>
                      Time: daily, 10:00 AM to 2:00 PM. Call:{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                      .
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Place: F-19, Sector-13, New Moradabad, Delhi Road,
                      Moradabad, Uttar Pradesh, PIN 244001.
                    </li>
                    <li>
                      Time: Sundays for the vaidya, so call first. Call:{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>
                      .
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Free OPD
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Place: not stated on the website. Free OPD consultation is
                      held on the 15th of every month, so call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to confirm the branch.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Find the Hospital on a Map
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step 1: Open the Contact Page
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Visit balpradaindia.com and open the Contact page, where
                      the Main Branch and the Moradabad Branch each have a Google
                      Maps link.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Step 2: Check the Route
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Enter your own starting point, and check the route, the
                      road conditions and the travel time shown by the map for
                      the day you plan to travel.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Step 3: Save the Location
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Save the branch on your phone, and share it with the driver
                      or the family member who will accompany the patient.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step 4: Call for Directions
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or WhatsApp the branch and ask for any extra
                      directions from the nearest main road, because the website
                      does not list landmarks.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Step 5: Confirm Availability
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask whether the vaidya is available on your planned day,
                      and whether the free OPD is being held at that branch if
                      you plan to come on the 15th.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Branch Should You Visit
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
                    3. For Tests and Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The pathology lab, panchakarma and physiotherapy are
                      described under the institution, so ask which facility is
                      available at which branch when you call.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning the Journey
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Timing
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reach the Main Branch well within the 10:00 AM to 2:00 PM
                      window, because consultation, reports and tests can take
                      time.
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
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Family Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring at least one family member who can listen to the
                      vaidya, carry the reports and help with medicines and diet
                      afterwards.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Return Journey
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Plan a comfortable return, because patients may feel tired
                      after the consultation and tests, and note the next review
                      date in the family calendar.
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
                Facilities Available at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation and Specialised Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kidney and urinary care, liver and digestive care, cancer
                      supportive care, heart and lifestyle care, diabetes and
                      thyroid care, and wellness care for women.
                    </li>
                    <li>
                      In every area the care is supportive, and patients are
                      advised to continue specialist or emergency treatment
                      whenever it is needed.
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
                      traditional and patent Ayurvedic medicines of the
                      institution, and Balprada Enterprises offers wellness
                      products such as herbal tea, oils, flours and preserves.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Community Service
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Jansewa Sansthan has offered free and subsidised
                      Ayurvedic healthcare for underprivileged patients since
                      1991, alongside the Vridhashram, the Navtarun Ashram,
                      residential school support and gaushala seva.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Doctors and Team
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
                How to Book Before You Travel
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Appointment Form
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website appointment form asks about your concern, with
                      options such as kidney, liver, cancer, heart and other, so
                      choose the closest one and submit it.
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
                    2. Phone, WhatsApp and Email
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      for the Main Branch, call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      for the Moradabad Branch, or write to{" "}
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
                    3. Appointment Terms
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Arrive about 15 minutes early, and give at least 24 hours
                      of notice if you need to cancel or reschedule, as the
                      website terms request.
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
                  Ask for extra directions from the nearest main road, parking
                  arrangements and whether help for elderly patients can be
                  arranged.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they speak warmly of the natural
                  ashram surroundings and Ayurvedic discipline.
                </li>
                <li>
                  Reviews mention knowledgeable vaidyas, authentic herbal
                  preparations, a serene healing atmosphere and humble, helpful
                  staff, and these are personal experiences.
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
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Why Families Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Experience since 1991: more than three decades of Ayurvedic
                  practice and a service first spirit give patients and families
                  a sense of continuity.
                </li>
                <li>
                  Consultation, tests and medicines under one institution, so
                  patients do not need to travel between many different places.
                </li>
                <li>
                  Open seven days a week, with Vaidya ji available at the
                  Moradabad Branch on Sundays, which helps working families plan
                  visits.
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Habits That Support Treatment
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home cooked food at regular times and follow
                  the diet rules given by your vaidya instead of copying advice
                  from social media or neighbours.
                </li>
                <li>
                  Take medicines exactly as explained, avoid self medication with
                  painkillers or unknown herbal powders, and never stop
                  prescribed medicines or dialysis without asking your treating
                  doctor.
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
                  Go to the nearest hospital in an emergency such as severe pain,
                  breathlessness, heavy bleeding, very low urine output or sudden
                  worsening, and do not wait for an Ayurvedic appointment.
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