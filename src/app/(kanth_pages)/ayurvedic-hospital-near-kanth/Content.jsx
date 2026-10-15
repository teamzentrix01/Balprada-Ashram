import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalNearKanthFamilyCareGuide() {
  const faqs = [
    {
      q: "Q1. Is there an Ayurvedic hospital near Kanth?",
      a: "Balprada has a Main Branch in Tehsil Bilari and a Moradabad Branch on Delhi Road, both in Moradabad district, and patients from Kanth can visit either one.",
    },
    {
      q: "Q2. Does Balprada have a branch in Kanth?",
      a: "No Kanth branch is listed on the website. Please check the route using the map links on the contact page.",
    },
    {
      q: "Q3. When should we arrive for the appointment?",
      a: "The terms ask patients to arrive about 15 minutes early, and to give at least 24 hours of notice to cancel or reschedule.",
    },
    {
      q: "Q4. What are the timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "Q5. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q6. What should we bring?",
      a: "Bring previous prescriptions, test reports, scans and a list of all current medicines.",
    },
    {
      q: "Q7. Can the patient stop current medicines?",
      a: "No. Never stop prescribed medicines or dialysis without advice from the treating doctor.",
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
                Planning Care at an Ayurvedic Hospital Near Kanth
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  When someone in the family has a long-standing illness, the
                  first question is often where to go and how to manage the
                  visits, and this guide helps families in Kanth plan their care
                  at Balprada Ayurvedic Hospital &amp; Research Center in
                  Moradabad district.
                </li>
                <li>
                  Balprada has served patients since 1991, and it offers
                  Ayurvedic care for kidney, liver, cancer-related support,
                  heart, diabetes, thyroid and women&apos;s health concerns
                  through two branches: the Main Branch in Tehsil Bilari and the
                  Moradabad Branch on Delhi Road.
                </li>
                <li>
                  The website does not list a branch in Kanth, so families should
                  check the route on the website&apos;s map links and call before
                  travelling.
                </li>
                <li>
                  Long-term care works best when the whole family is involved,
                  which is why this page explains how to organise reports, plan
                  visits, support the patient at home and keep follow-ups on
                  track.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing Between the Two Branches
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch in Tehsil Bilari
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Main Branch is the ashram and clinic, open daily from
                      10:00 AM to 2:00 PM, and it offers the full range of
                      consultation, supportive facilities and pathology support
                      in one place.
                    </li>
                    <li>
                      It suits patients who want to visit on any day of the week
                      and who benefit from the calm, disciplined environment of
                      the ashram.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch on Delhi Road
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Moradabad Branch is in Sector-13, New Moradabad, and
                      Vaidya ji is available there on Sundays.
                    </li>
                    <li>
                      It suits families who prefer a city address or who find
                      weekdays difficult, and they should call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      before visiting to confirm availability.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Deciding Which to Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      If you are unsure, call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      and tell the team your concern, the patient&apos;s age and
                      how far you are travelling, and they will guide you on the
                      branch and the timing.
                    </li>
                    <li>
                      Each branch has a Google Maps link on the website contact
                      page, which helps families plan the route and the travel
                      time from Kanth.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before the First Visit: A Family Checklist
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Gather the Medical Papers
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Collect all previous prescriptions, blood and urine
                      reports, ultrasound or other scans, discharge summaries and
                      dialysis or chemotherapy records, and arrange them in date
                      order in one folder.
                    </li>
                    <li>
                      Write down the names and doses of every medicine the
                      patient takes, including tablets, syrups, injections and
                      any herbal products, because the vaidya plans guidance
                      around them.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Note the Daily Pattern
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Keep a short note of appetite, digestion, sleep, energy,
                      pain and urine pattern for a few days before the visit, so
                      that the doctor receives a clear picture.
                    </li>
                    <li>
                      If the patient has diabetes or high blood pressure, bring
                      recent sugar or blood pressure readings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Prepare Your Questions
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Write down what worries the family most, such as swelling,
                      weakness, poor appetite or fear about test values, and ask
                      the vaidya to explain the plan in simple language.
                    </li>
                    <li>
                      Ask when the first review will be, which tests should be
                      repeated and what signs mean the patient needs urgent care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Plan the Day
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The terms on the website ask patients to arrive about 15
                      minutes early, and appointments depend on doctor
                      availability and may be rescheduled by the hospital.
                    </li>
                    <li>
                      If you need to cancel or change the appointment, the terms
                      ask for at least 24 hours of notice, so please inform the
                      team by phone or WhatsApp.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Care Is Planned at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, history, reports and
                      current medication before suggesting the next care step,
                      and time is taken to listen to both the patient and the
                      family.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Tests
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The in-house pathology lab provides Kidney Function Test,
                      Liver Function Test, Complete Blood Count, Diabetes Profile
                      with HbA1c, Lipid Profile, Thyroid Profile, Urine Routine
                      and Microscopy, and Vitamin B12 and Vitamin D testing.
                    </li>
                    <li>
                      Other doctor-advised tests may also be available, and
                      repeat reports help the family see whether the plan is
                      moving in the right direction.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, adjusted to the patient&apos;s age, strength and
                      condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma and
                      physiotherapy are suggested only where they suit the
                      patient, and their frequency and suitability are decided
                      after individual assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team review reports, symptoms,
                      diet and response to medicines, and adjust the plan as the
                      patient&apos;s needs change.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supporting the Patient at Home
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Food and Routine
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fresh, simple, home-cooked meals at regular times are
                      generally encouraged, and the vaidya gives a personal food
                      plan, so the family should follow it exactly instead of
                      copying advice from neighbours or social media.
                    </li>
                    <li>
                      Keep dinner light and early, keep a regular sleep time and
                      encourage gentle walking or yoga only as advised.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Give medicines exactly as explained, keep a weekly pill box
                      if the patient takes many, and write down any new symptom
                      that appears after a change.
                    </li>
                    <li>
                      Avoid self-medication with painkillers or unknown herbal
                      powders, especially in kidney and liver conditions, and
                      never stop prescribed medicines or dialysis without asking
                      the treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Emotional Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Illness is stressful for the whole family, so patience,
                      calm conversation and encouragement matter, and the
                      founder&apos;s message that staying positive gives courage
                      in difficult circumstances remains part of the Balprada
                      culture.
                    </li>
                    <li>
                      Guided meditation and breath awareness at Balprada support
                      emotional steadiness and restful sleep, and families
                      dealing with serious illness are encouraged to ask about
                      them.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Keeping a Care Diary
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Record dates of visits, tests, medicines and symptoms in
                      one notebook, and bring it to each follow-up so the vaidya
                      can see the patient&apos;s progress over time.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Making Follow-Ups Easier from Kanth
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask the vaidya for the next review date before leaving, and
                  note it on the family calendar along with the tests that should
                  be repeated before that visit.
                </li>
                <li>
                  Plan follow-ups around the days that suit the family, such as
                  Sundays at the Moradabad Branch or the 15th of the month for
                  free OPD, and always call to confirm before travelling.
                </li>
                <li>
                  If the patient cannot travel on a particular day, a family
                  member can call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  to explain the situation, and the team can guide the next step.
                </li>
                <li>
                  Keep the branch numbers saved on every family member&apos;s
                  mobile, so that anyone can reach the clinic quickly when a
                  question arises.
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
                Conditions Families Commonly Ask About
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care are offered for
                      reduced kidney function, kidney stones, persistent swelling
                      and diabetes-related kidney concerns.
                    </li>
                    <li>
                      Severe pain, fever, blood in the urine or inability to pass
                      urine need prompt medical attention.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is available for fatty liver, jaundice, weak digestion
                      and metabolic imbalance, and yellowing of the eyes or skin
                      needs a prompt medical evaluation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Supportive care focuses on strength and recovery,
                      easy-to-digest diet guidance, stress support and regular
                      consultation, and it is planned alongside the
                      patient&apos;s primary medical treatment.
                    </li>
                    <li>
                      Families should tell the oncologist about every herb or
                      remedy the patient uses, because some can interact with
                      cancer treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Blood Pressure and Diabetes
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care combines daily routines, stress management, food
                      discipline, physical activity and monitored follow-up, and
                      prescribed medicines should be changed only under the
                      treating doctor&apos;s guidance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Thyroid and Women&apos;s Health
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Thyroid consultations review thyroid reports, energy,
                      weight, digestion and current medicines, and women&apos;s
                      wellness care covers hormonal balance, menstrual health,
                      weakness and maternal wellness with privacy and careful
                      listening.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Honest Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada&apos;s terms state that outcomes vary from person to
                  person and that no specific result is promised from any
                  Ayurvedic treatment, panchakarma or therapy.
                </li>
                <li>
                  Ayurvedic care at Balprada is supportive, and information on
                  the website is general and does not replace the advice of a
                  doctor.
                </li>
                <li>
                  In an emergency such as severe pain, breathlessness, heavy
                  bleeding or sudden worsening, go to the nearest hospital or
                  call emergency services first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors, Medicines and Products
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Doctors and Team
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. U. S. Sharma has more than 20 years of experience in
                      Ayurvedic practice and consults on kidney, liver and other
                      chronic concerns at Balprada.
                    </li>
                    <li>
                      Dr. Chetan Anand, associated with Balprada Herbal Wellness
                      Private Limited, has over seven years of experience in
                      herbal product research and development and advises on free
                      health camps.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Medicines and Wellness Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines, and Balprada
                      Enterprises offers herbal tea and spices, Ayurvedic oils,
                      avaleh, herbal and gram flour, and pickle, murabba and
                      dalia.
                    </li>
                    <li>
                      Product orders depend on stock and price confirmation, so
                      please enquire by phone, WhatsApp or email before planning
                      a purchase.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Ashram and Jansewa
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The ashram is a peaceful setting where healthcare,
                      discipline, emotional support and community service come
                      together, and it reflects the institution&apos;s
                      service-first spirit.
                    </li>
                    <li>
                      Balprada Jansewa Sansthan has offered free and subsidised
                      Ayurvedic healthcare for underprivileged patients since
                      1991, alongside the Vridhashram, the Navtarun Ashram,
                      residential school support and gaushala seva.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they often mention the natural
                  ashram surroundings and Ayurvedic discipline.
                </li>
                <li>
                  Reviews speak of authentic herbal preparations, knowledgeable
                  vaidyas and a serene atmosphere that helps patients heal with
                  positivity and strength.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Booking and Contact
              </h2>

              <div className="mb-6">
                <p className="mb-2 font-semibold">Free OPD and Appointments</p>

                <ul className="list-disc space-y-2 pl-5 text-black">
                  <li>
                    Free OPD consultation is available on the 15th of every
                    month, and the branch should be confirmed by phone before
                    travelling.
                  </li>
                  <li>
                    Book through the appointment form on balpradaindia.com, call
                    or WhatsApp{" "}
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
              </div>

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
                        Bilari, District Moradabad, Uttar Pradesh 244415. Daily,
                        10:00 AM to 2:00 PM. Phone and WhatsApp:{" "}
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
                        Uttar Pradesh 244001. Vaidya ji is available on Sundays,
                        so please call{" "}
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