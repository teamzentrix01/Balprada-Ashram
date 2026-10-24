import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHospitalContactNumber() {
  const faqs = [
    {
      q: "What is the Balprada Hospital contact number?",
      a: "Call or WhatsApp 8126364606 for the Main Branch, and call 9410447000 for the Moradabad Branch.",
    },
    {
      q: "What is the email address?",
      a: "The email address is balpradaindia@gmail.com.",
    },
    {
      q: "Is there a WhatsApp number?",
      a: "Yes. The Main Branch number 8126364606 is also used for WhatsApp.",
    },
    {
      q: "When can I call?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, so calling in that window is best. The website does not publish separate phone hours.",
    },
    {
      q: "Is there an emergency helpline?",
      a: "No emergency helpline is listed. In an emergency, go to the nearest hospital.",
    },
    {
      q: "Which number is for the free OPD?",
      a: "Free OPD is held on the 15th of every month. Call 8126364606 to confirm the branch.",
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
                Balprada Hospital Contact Number: Every Way to Reach the Team
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients and families who search for the Balprada Hospital
                  contact number want a number that works, so this page lists
                  every phone number, WhatsApp number and email address published
                  on the Balprada website and explains which one to use for which
                  purpose.
                </li>
                <li>
                  Balprada Ayurvedic Hospital and Research Center has served
                  patients in Moradabad district since 1991, with a Main Branch
                  in Tehsil Bilari and a Moradabad Branch on Delhi Road in New
                  Moradabad.
                </li>
                <li>
                  The website lists no separate emergency helpline, so this page
                  does not claim one, and in a medical emergency patients should
                  go to the nearest hospital first.
                </li>
                <li>
                  The website also does not publish calling hours for the phone
                  lines, so it is sensible to call during the consultation window
                  and to try WhatsApp or email if no one answers.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Numbers at a Glance
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch
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
                      The Main Branch consults daily from 10:00 AM to 2:00 PM,
                      and the ashram and clinic are open seven days a week.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch
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
                      Vaidya ji is available at this branch on Sundays, and the
                      website asks patients to call before visiting.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Email
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>{" "}
                      for both branches, for general questions, and for sharing
                      reports before a visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Appointment Form
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The appointment form on balpradaindia.com asks about your
                      concern, with options such as kidney, liver, cancer, heart
                      and other, and it is another way to start a request.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Number Should You Use
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. For the Main Branch in Bilari
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to ask about consultation, timings, directions, tests,
                      medicines and appointments at the ashram and clinic.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. For the Moradabad Branch on Delhi Road
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      to confirm whether Vaidya ji is available on the Sunday you
                      plan to visit, and to ask about timings at this branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. For the Free OPD
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month, and the website does not say which branch hosts it,
                      so call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to confirm the branch before you travel.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. For Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea, spices, Ayurvedic
                      oils, avaleh, herbal and gram flour, pickle, murabba and
                      dalia, and orders depend on stock and price confirmation by
                      phone, WhatsApp or email.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. For Reports and Documents
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
                      if you wish to send reports in advance, and keep the
                      originals with you to carry on the day of the visit.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Use WhatsApp Well
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Start with a Clear Message
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Write your name, age, place, the main concern and the
                      branch you prefer, and ask for the right day and time for a
                      consultation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Share Only What Is Needed
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Send recent reports and prescriptions only when the team
                      asks, and avoid sharing identity documents or payment
                      details in a message unless you are sure of the purpose.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Keep the Conversation Handy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Save the number as Balprada Hospital in your phone, so that
                      you can find the chat easily on the day of the visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Be Patient
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Replies may take time because the team is busy with
                      patients, so if the matter is urgent for the same day, call
                      the number instead.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Say When You Call
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Introduce Yourself
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Say your name, your place and whether you are calling for
                      yourself or for a family member, and mention the main
                      concern in a few words.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Ask the Right Questions
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask which branch is suitable, whether the vaidya is
                      available on your planned day, what time to arrive and
                      whether an appointment is needed.
                    </li>
                    <li>
                      Ask which reports to carry, whether tests can be done on
                      the same day, and whether the free OPD is running at that
                      branch if you plan to come on the 15th.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Note Down the Answers
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Write down the name of the person you spoke to, the branch,
                      the day and the time, so that there is no confusion on
                      arrival.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Keep Ready Before You Call
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep the list of current medicines, the latest reports and the
                  main symptoms in front of you, so that the call is short and
                  clear.
                </li>
                <li>
                  Keep a pen and paper ready, and have a family member nearby who
                  can help if the patient is elderly or weak.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Branch Addresses for Your Journey
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch (Ashram and Clinic)
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                    </li>
                    <li>
                      Open daily, with consultation from 10:00 AM to 2:00 PM.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
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

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Map Links
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The contact page of the website has a Google Maps link for
                      each branch, and the website gives no landmarks or
                      distances, so ask for directions when you call.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Appointment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Option 1: Appointment Form
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Use the appointment form on balpradaindia.com and choose
                      the closest concern, and because the form lists only the
                      concern, also call or WhatsApp so the team has your name,
                      contact number and preferred branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Option 2: Phone or WhatsApp
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
                    3. Option 3: Email
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
                      with your name, contact number, concern and preferred
                      branch.
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
                      of notice if you need to cancel or reschedule, as the
                      website terms request.
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
                What to Carry on the Day
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring an identity document, previous prescriptions, recent
                  blood and urine reports, scans and a list of all current
                  medicines.
                </li>
                <li>
                  Note down symptoms, sleep, appetite and any blood sugar or
                  blood pressure readings, and bring a family member who can help
                  remember the instructions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Beware of Wrong Numbers
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Use only the numbers published on the official website
                  balpradaindia.com, because numbers shared on unknown pages or
                  messages may not belong to the hospital.
                </li>
                <li>
                  The team will not need your bank details, card numbers or one
                  time passwords to book a consultation, so never share them in a
                  call or a message.
                </li>
                <li>
                  If something seems unusual, call the Main Branch number from
                  the official website and ask for confirmation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What the Team Can Help You With
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
                    3. Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma, yoga, naturopathy, meditation and
                      physiotherapy are suggested only where they suit the
                      patient, and frequency and suitability are decided after
                      individual assessment.
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
                Why Families Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
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
                <li>
                  A free OPD on the 15th of every month, which lets a family meet
                  the vaidya and judge the care for itself.
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
                Questions to Ask the Vaidya at Your Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask how the plan will work for your condition, which tests
                  should be repeated and how often, and when the first review
                  will be.
                </li>
                <li>
                  Ask which foods and habits to change, how to take each
                  medicine, and which signs mean you should return sooner or go
                  to a hospital.
                </li>
              </ul>
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
                  painkillers or unknown herbal powders, and keep a small
                  notebook of symptoms, sleep and appetite to show at every
                  follow up visit.
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
                  treating doctor.
                </li>
                <li>
                  Go to the nearest hospital in an emergency such as severe pain,
                  breathlessness, heavy bleeding, very low urine output or sudden
                  worsening, and do not wait for a call back.
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
                Branches and Contact
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
                        Open daily, with consultation from 10:00 AM to 2:00 PM.
                        Phone and WhatsApp:{" "}
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