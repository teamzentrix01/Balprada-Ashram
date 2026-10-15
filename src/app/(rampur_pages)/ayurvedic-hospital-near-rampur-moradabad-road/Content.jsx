import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalNearRampurMoradabadRoad() {
  const faqs = [
    {
      q: "Q1. Is there an Ayurvedic hospital near the Rampur–Moradabad road?",
      a: "Balprada Ayurvedic Hospital has a Main Branch in Bilari and a Moradabad Branch on Delhi Road, New Moradabad. Please use the Google Maps links on our contact page to check the route from your location.",
    },
    {
      q: "Q2. What are the OPD timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and the Moradabad Branch has Sunday vaidya availability.",
    },
    {
      q: "Q3. Should I call before visiting?",
      a: "Yes. Please call or WhatsApp first so the team can confirm the branch, doctor and consultation flow.",
    },
    {
      q: "Q4. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q5. Can I get tests done there?",
      a: "Yes. The Balprada Pathology Lab offers KFT, LFT, CBC, thyroid, diabetes and lipid tests, among others.",
    },
    {
      q: "Q6. Which conditions do you treat?",
      a: "We offer Ayurvedic care for kidney, liver, cancer support, heart, diabetes, thyroid and women&apos;s health concerns.",
    },
    {
      q: "Q7. How do I book an appointment?",
      a: "Use the appointment form on balpradaindia.com, call 8126364606, or message the same number on WhatsApp.",
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
                Balprada: An Ayurvedic Hospital for Travellers on the
                Rampur–Moradabad Route
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families travelling between Rampur and Moradabad who are
                  searching for a dependable Ayurvedic hospital can reach
                  Balprada Ayurvedic Hospital &amp; Research Center, which has
                  served patients since 1991 through two branches in the
                  Moradabad region.
                </li>
                <li>
                  Balprada was started on the seva sankalp of Sw. Vaidya Vijay
                  Pal Singh Ji, and today it combines experienced doctors,
                  in-house herbal medicines, a pathology lab and ashram-based
                  care for long-standing and serious health concerns.
                </li>
                <li>
                  Patients usually come to us for kidney, liver, cancer-related
                  support, heart, diabetes, thyroid and women&apos;s health
                  problems, and every plan begins with a calm consultation
                  instead of a rushed prescription.
                </li>
                <li>
                  Because the hospital is open seven days a week, patients coming
                  from Rampur do not have to wait for a special day, although a
                  short phone call before leaving helps confirm the branch and
                  the doctor&apos;s availability.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Two Branches to Choose From
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch: Ashram and Clinic in Bilari
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                    </li>
                    <li>
                      Consultation runs daily from 10:00 AM to 2:00 PM, and you
                      can call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to book your visit and ask about the way to reach.
                    </li>
                    <li>
                      This branch holds the ashram and clinic, where nature-led
                      healing, disciplined routines and the wider Balprada
                      facilities come together for patients who need longer care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch: New Moradabad, Delhi Road
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Address: F-19, Sector-13, New Moradabad, Delhi Road,
                      Moradabad, Uttar Pradesh 244001.
                    </li>
                    <li>
                      Vaidya ji is available at this branch on Sundays, so please
                      call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      before visiting to confirm the timing and the consultation
                      process.
                    </li>
                    <li>
                      This branch is convenient for patients who are already
                      travelling through Moradabad city and prefer a city
                      location for follow-up consultation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Branch
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Choose the Main Branch if you want daily consultation, access
                  to the ashram environment and the full range of facilities in
                  one place.
                </li>
                <li>
                  Choose the Moradabad Branch if Sunday is convenient for you and
                  you want a city address, but always call first because
                  availability is confirmed branch by branch.
                </li>
                <li>
                  Each branch has a Google Maps location on the website contact
                  page, which patients can open for turn-by-turn directions from
                  Rampur or any other starting point.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns We Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      We offer Ayurvedic consultation and lifestyle care for
                      reduced kidney function, kidney stones, persistent swelling
                      and diabetes-related kidney concerns.
                    </li>
                    <li>
                      Care is built on history, reports, diet guidance, Ayurvedic
                      medicines and regular follow-up so that progress can be
                      watched carefully over time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicine, diet and routine-based care is available for
                      fatty liver, jaundice, weak digestion and related liver
                      health concerns.
                    </li>
                    <li>
                      Patients are guided on food timings, sleep and daily
                      discipline, and Liver Function Test support is available at
                      our own lab.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada provides sensitive Ayurvedic supportive care for
                      strength, diet, energy and emotional balance during serious
                      illness, alongside the treatment given by the
                      patient&apos;s oncologist.
                    </li>
                    <li>
                      Families receive diet guidance, strength and recovery
                      support and stress support in a respectful and unhurried
                      manner.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care is offered for
                      blood pressure, diabetes, weight, hypothyroidism and
                      hyperthyroidism, with attention to diet, activity and
                      stress.
                    </li>
                    <li>
                      Patients are reminded to keep taking prescribed medicines
                      unless their own doctor advises a change.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private and personalised care is available for hormonal
                      balance, menstrual health and general weakness, and women
                      can speak freely with the doctor during consultation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Care Process
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, history, reports and
                      current medication before suggesting the next care step, so
                      patients should carry all earlier prescriptions and test
                      reports.
                    </li>
                    <li>
                      Questions about appetite, sleep, digestion, energy and
                      stress help the vaidya see the whole person rather than a
                      single symptom.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, and the plan is explained clearly to the patient
                      and family.
                    </li>
                    <li>
                      Food routine is treated as part of the medicine, and it is
                      reviewed again at each follow-up visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma, physiotherapy
                      and pathology support make the journey more complete, and
                      they are suggested only where suitable for the patient.
                    </li>
                    <li>
                      Panchakarma is planned after individual assessment to
                      support cleansing, balance and recovery, with daily-routine
                      and food guidance given alongside.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up helps the team review reports, symptoms,
                      diet and response to medicine, and the timing depends on
                      the patient&apos;s condition.
                    </li>
                    <li>
                      Patients living along the Rampur–Moradabad route can plan
                      follow-ups around Sundays at the Moradabad Branch or the
                      daily timings at the Main Branch after confirming by phone.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Pathology Lab
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The in-house lab provides blood and urine testing to support
                  Ayurvedic care, especially for kidney, liver, cancer and
                  diabetes patients.
                </li>
                <li>
                  Available tests include Complete Blood Count, Kidney Function
                  Test, Liver Function Test, Thyroid Profile, Diabetes Profile
                  with HbA1c, Lipid Profile, Urine Routine and Microscopy, and
                  Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Other doctor-advised tests may also be available, so please ask
                  the lab team about your requirement when you call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Herbal Research
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma has more than 20 years of Ayurvedic practice
                  and consults on kidney, liver and other chronic conditions at
                  Balprada.
                </li>
                <li>
                  Dr. Chetan Anand, linked with Balprada Herbal Wellness Private
                  Limited, has over seven years of experience in herbal product
                  research and development and advises on free health camps.
                </li>
                <li>
                  Balprada&apos;s in-house herbal medicines are prepared by the
                  institution itself, which supports consistent quality for
                  patients who follow long treatment plans.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Free OPD on the 15th of Every Month
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is held on the 15th of every month during
                  the regular 10:00 AM to 2:00 PM consultation window.
                </li>
                <li>
                  Because the page does not state which branch hosts it, patients
                  should call before travelling to confirm the branch and the
                  consultation flow.
                </li>
                <li>
                  This is a good first step for families who are new to Ayurveda
                  and want to meet the vaidya before deciding on a longer plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Journey
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What to Carry
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring previous prescriptions, recent reports, scans and a
                      list of current medicines so that the vaidya can review
                      your complete picture on the first visit.
                    </li>
                    <li>
                      Carry your mobile phone with the branch number saved, and
                      come with a family member who can help remember diet and
                      medicine instructions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Before You Leave Rampur
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      for the Main Branch, or{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      for the Moradabad Branch, and confirm the day, time and
                      doctor availability.
                    </li>
                    <li>
                      Open the Google Maps link from the website contact page to
                      check the route, and leave early enough to arrive within
                      the 10:00 AM to 2:00 PM consultation window.
                    </li>
                    <li>
                      If you have questions about travel, staying arrangements or
                      charges, ask the team by phone or email because the website
                      does not list these details.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. In an Emergency
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation is not a substitute for emergency
                      care, so anyone with severe pain, breathlessness, heavy
                      bleeding, very low urine output or sudden worsening should
                      go to the nearest emergency hospital first.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice and a
                  service-first spirit give patients and families a sense of
                  trust.
                </li>
                <li>
                  <span className="font-semibold">
                    In-house medicines and lab:
                  </span>{" "}
                  herbal medicines and diagnostic tests are available within the
                  same institution, which saves patients from going to many
                  different places.
                </li>
                <li>
                  <span className="font-semibold">Whole-person care:</span>{" "}
                  consultation, diet, yoga, naturopathy, panchakarma and
                  follow-up work together instead of treating one report in
                  isolation.
                </li>
                <li>
                  <span className="font-semibold">Honest guidance:</span>{" "}
                  patients are told clearly that Ayurvedic care is supportive,
                  and they are advised not to stop prescribed medicines or
                  specialist treatment without asking their own doctor.
                </li>
                <li>
                  <span className="font-semibold">Reviews that speak:</span>{" "}
                  patients describe knowledgeable vaidyas, genuine herbal
                  preparations, a serene ashram atmosphere and humble, helpful
                  staff.
                </li>
                <li>
                  <span className="font-semibold">
                    Open seven days a week:
                  </span>{" "}
                  the ashram and clinic stay open throughout the week, so
                  patients travelling between Rampur and Moradabad can choose a
                  day that suits their schedule instead of rearranging their
                  whole journey.
                </li>
                <li>
                  <span className="font-semibold">
                    Family-friendly guidance:
                  </span>{" "}
                  relatives are welcome to sit in the consultation, and the
                  vaidya explains medicines, food rules and warning signs in
                  simple language so that the entire family can support the
                  patient at home.
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
                  and the hospital team, and they often mention that the natural
                  ashram surroundings and Ayurvedic discipline make a real
                  difference to recovery.
                </li>
                <li>
                  Reviews speak of authentic herbal preparations, highly
                  knowledgeable vaidyas and a serene atmosphere that helps
                  patients heal with positivity and strength, especially in
                  kidney, liver and chronic illness care.
                </li>
                <li>
                  Visitors also remember the humility and warmth of the staff,
                  who greet everyone with a smile and go out of their way to help
                  families feel welcome.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Healthy Habits Between Visits
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home-cooked food at regular times and follow
                  the diet rules given by your vaidya, instead of copying advice
                  from social media or neighbours.
                </li>
                <li>
                  Take medicines exactly as explained, and keep a small notebook
                  of symptoms, sleep and appetite so that you can show it at
                  every follow-up visit.
                </li>
                <li>
                  Walk or practise gentle yoga as advised, keep stress low through
                  breathing and meditation, and avoid self-medication with
                  painkillers or unknown herbal powders.
                </li>
                <li>
                  Repeat your tests at the interval suggested by the doctor,
                  because regular reports help the team judge progress honestly
                  and plan the next step with confidence.
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
                    <p className="font-semibold">Main Branch: Ashram and Clinic in Bilari</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415.
                      </li>
                      <li>
                        Consultation runs daily from 10:00 AM to 2:00 PM. Call or
                        WhatsApp{" "}
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
                    <p className="font-semibold">Moradabad Branch: New Moradabad, Delhi Road</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: F-19, Sector-13, New Moradabad, Delhi Road,
                        Moradabad, Uttar Pradesh 244001.
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