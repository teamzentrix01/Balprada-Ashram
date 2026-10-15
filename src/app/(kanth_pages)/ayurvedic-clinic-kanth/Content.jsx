import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicClinicKanth() {
  const faqs = [
    {
      q: "Q1. Is there an Ayurvedic clinic for patients from Kanth?",
      a: "Patients from Kanth can visit the Balprada clinic at the Main Branch in Tehsil Bilari or at the Moradabad Branch on Delhi Road.",
    },
    {
      q: "Q2. Does Balprada have a clinic in Kanth?",
      a: "No Kanth clinic is listed on the website. Please check the route using the map links on the contact page.",
    },
    {
      q: "Q3. What are the clinic timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "Q4. Is there a free OPD?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
    },
    {
      q: "Q5. Are tests available at the clinic?",
      a: "Yes. The Balprada Pathology Lab offers KFT, LFT, CBC, thyroid, diabetes and lipid tests, among others.",
    },
    {
      q: "Q6. How do I book an appointment?",
      a: "Use the appointment form on balpradaindia.com, call 8126364606 or message the same number on WhatsApp.",
    },
    {
      q: "Q7. Should I stop my current medicines?",
      a: "No. Never stop prescribed medicines or dialysis without advice from your treating doctor.",
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
                An Ayurvedic Clinic for Kanth Patients in Moradabad District
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People from Kanth who are looking for an Ayurvedic clinic with
                  proper consultation, tests, medicines and follow-up can visit
                  Balprada Ayurvedic Hospital &amp; Research Center, which has
                  served patients since 1991 in Moradabad district.
                </li>
                <li>
                  Balprada runs its clinic at two locations, the Main Branch in
                  Tehsil Bilari and the Moradabad Branch on Delhi Road in New
                  Moradabad, and the ashram and clinic stay open seven days a
                  week.
                </li>
                <li>
                  The website does not list a clinic in Kanth, so patients should
                  check the route on the website&apos;s map links and call before
                  leaving home.
                </li>
                <li>
                  This page walks through what a visit to the Balprada clinic
                  looks like, from booking an appointment to follow-up, so that
                  families from Kanth can plan the day with confidence.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Clinic Timings and Days
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch Timings
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Main Branch consults daily from 10:00 AM to 2:00 PM,
                      and the ashram and clinic are open throughout the week, so
                      patients can choose a day that suits their family.
                    </li>
                    <li>
                      Please arrive early within the consultation window, because
                      the doctor spends time listening to each patient and
                      reviewing reports.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch Timings
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Vaidya ji is available at the Moradabad Branch on Sundays,
                      which is useful for working families who find a weekday
                      visit difficult.
                    </li>
                    <li>
                      Because availability is confirmed branch by branch, please
                      call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      before visiting this branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Free OPD Day
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month during the regular 10:00 AM to 2:00 PM window.
                    </li>
                    <li>
                      The website does not say which branch hosts it, so call to
                      confirm the branch and the consultation flow before you
                      travel.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book Your Clinic Appointment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Online Appointment Request
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The appointment page on balpradaindia.com lets you share
                      your details, choose a preferred branch and select your
                      health concern, and then submit the request so the team can
                      guide you on timing and the next step.
                    </li>
                    <li>
                      Health concern options include Kidney Care, Liver Care,
                      Cancer Support, Heart Care, Diabetes and Thyroid Care,
                      Women&apos;s Health and Other.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. WhatsApp, Phone and Email
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      You can message or call{" "}
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
                    <li>
                      Booking by phone or WhatsApp is helpful when you are not
                      sure which concern to select, because the team can listen
                      and guide you directly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Your Information
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada privacy policy says patient information such as
                      name, phone number, address and appointment details is used
                      to schedule appointments, follow up on treatment and keep
                      medical records.
                    </li>
                    <li>
                      It also states that the information is not sold or rented,
                      and it is shared only with the doctors and lab staff
                      involved in your care, with service providers under
                      confidentiality terms, or when the law requires it.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Your First Visit
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Welcome and Registration
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients are greeted by the clinic staff, and families often
                      remark on the humility and warmth of the team, who go out
                      of their way to help.
                    </li>
                    <li>
                      Please carry an identity document, previous prescriptions,
                      recent reports, scans and a list of all current medicines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Consultation with the Vaidya
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, medical history, current
                      treatment, food habits, sleep, stress and daily routine
                      before suggesting any guidance.
                    </li>
                    <li>
                      The vaidya explains the plan in simple language, and family
                      members are welcome to listen so that nothing is missed at
                      home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Tests at the Clinic Lab
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada Pathology Lab provides in-house blood and urine
                      testing, including Kidney Function Test, Liver Function
                      Test, Complete Blood Count, Diabetes Profile with HbA1c,
                      Lipid Profile, Thyroid Profile, Urine Routine and
                      Microscopy, and Vitamin B12 and Vitamin D.
                    </li>
                    <li>
                      Other doctor-advised tests may also be available, so please
                      ask the lab team about your requirement when you call.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Medicines and Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, and each plan is adjusted to the patient&apos;s
                      age, strength and condition.
                    </li>
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines, and patients
                      should take them only as explained by the vaidya.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Follow-Up Planning
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The team suggests when to return with fresh reports, and
                      regular follow-up helps review symptoms, diet and response
                      to medicines so that guidance can change as the
                      patient&apos;s needs change.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions Seen at the Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The clinic offers Ayurvedic consultation and lifestyle care
                      for reduced kidney function, kidney stones, persistent
                      swelling and diabetes-related kidney concerns, and patients
                      must never stop prescribed medicines or dialysis without
                      asking their treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is available for fatty liver, jaundice, weak digestion
                      and metabolic imbalance through food guidance, routine
                      correction and monitored herbal care, and yellowing of the
                      eyes or skin needs a prompt medical evaluation.
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
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart and Blood Pressure Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for blood pressure combines daily routines, stress
                      management and monitored follow-up, and patients should
                      continue prescribed medicines unless their own doctor
                      advises a change.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes care focuses on food discipline, physical activity,
                      prescribed care and blood-sugar monitoring, while thyroid
                      consultations review thyroid reports, energy, weight,
                      digestion and current medicines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Women&apos;s health needs privacy, careful listening and
                      individualised guidance, so the clinic offers sensitive care
                      for hormonal balance, menstrual health, weakness and
                      maternal wellness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Therapy and Wellness Support Beyond the OPD
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures, planned after individual assessment,
                      with frequency and suitability decided by the doctor.
                    </li>
                    <li>
                      Patients should share their conditions, current medicines
                      and mobility concerns before starting, so the team can
                      explain the programme and support safe participation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Naturopathy and Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga includes breathing exercises, posture practice and
                      stress support, naturopathy offers natural therapies, detox
                      support and lifestyle correction, and guided meditation
                      supports emotional steadiness and restful sleep.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy begins with a mobility assessment and moves
                      into guided rehabilitation, which helps patients build
                      strength and safe movement alongside the wider care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Wellness Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea and spices, Ayurvedic
                      oils, avaleh and herbal preparations, herbal and gram flour,
                      and pickle, murabba and dalia, and enquiries are answered by
                      phone, WhatsApp or email.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Team
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma has more than 20 years of experience in
                  Ayurvedic practice and consults on kidney, liver and other
                  chronic concerns at Balprada.
                </li>
                <li>
                  Dr. Chetan Anand, associated with Balprada Herbal Wellness
                  Private Limited, has more than seven years of experience in
                  herbal product research and development and advises on free
                  health camps.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Visit
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Checklist
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Carry previous prescriptions, recent blood and urine
                      reports, scans, a list of current medicines and an identity
                      document.
                    </li>
                    <li>
                      Note down your symptoms, sleep, appetite and any blood sugar
                      or blood pressure readings, and write your questions so that
                      nothing is forgotten in the consultation.
                    </li>
                    <li>
                      Come with a family member who can help remember diet and
                      medicine instructions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Habits That Support Your Treatment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Eat fresh, simple, home-cooked food at regular times and
                      follow the diet rules given by your vaidya instead of
                      copying advice from social media or neighbours.
                    </li>
                    <li>
                      Take medicines exactly as explained, avoid self-medication
                      with painkillers or unknown herbal powders, and repeat tests
                      at the interval suggested by the doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. When to Go to a Hospital First
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Severe pain, breathlessness, heavy bleeding, very low urine
                      output, high fever or sudden worsening are emergencies, and
                      the patient should go to the nearest hospital before
                      visiting any clinic.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Choose the Balprada Clinic
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice and a
                  service-first spirit give patients and families a sense of trust
                  and continuity.
                </li>
                <li>
                  <span className="font-semibold">
                    Consultation, tests and medicines in one place:
                  </span>{" "}
                  the doctor, the pathology lab and the in-house herbal medicines
                  are part of one institution, which saves patients from
                  travelling between many different places.
                </li>
                <li>
                  <span className="font-semibold">
                    Open throughout the week:
                  </span>{" "}
                  the ashram and clinic stay open seven days a week, and a Sunday
                  vaidya at the Moradabad Branch helps families who cannot visit
                  on weekdays.
                </li>
                <li>
                  <span className="font-semibold">Honest guidance:</span>{" "}
                  patients are told clearly that Ayurvedic care is supportive, and
                  they are advised to continue specialist or emergency treatment
                  when it is needed.
                </li>
                <li>
                  <span className="font-semibold">
                    Service for the community:
                  </span>{" "}
                  Balprada Jansewa Sansthan has offered free and subsidised
                  Ayurvedic healthcare for underprivileged patients since 1991.
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
                  of the eyes and skin are reasons to book an OPD visit and get
                  basic tests done.
                </li>
                <li>
                  Increased thirst, frequent urination, unexplained weight change,
                  irregular periods or persistent weakness can point to diabetes,
                  thyroid or hormonal concerns that deserve a proper review.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About the Clinic
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
              <h2 className="mb-4 font-serif text-3xl">Clinic Addresses</h2>

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
                        Timings: daily, 10:00 AM to 2:00 PM. Phone and WhatsApp:{" "}
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