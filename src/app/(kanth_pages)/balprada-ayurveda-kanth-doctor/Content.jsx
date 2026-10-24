import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedaKanthDoctor() {
  const faqs = [
    {
      q: "Who are the doctors at Balprada?",
      a: "The Team page lists Dr. U. S. Sharma, an Ayurvedic consultant with more than 20 years of experience, and Dr. Chetan Anand, a herbal research and health camp advisor with more than seven years of experience.",
    },
    {
      q: "Is there a Balprada doctor in Kanth?",
      a: "No Kanth branch is listed on the website. Patients from Kanth can visit the Main Branch or the Moradabad Branch.",
    },
    {
      q: "Which doctor sees kidney and liver patients?",
      a: "Dr. U. S. Sharma's listed areas include kidney and liver concerns, so confirm his availability by phone.",
    },
    {
      q: "When is Vaidya ji available?",
      a: "Vaidya ji is available at the Moradabad Branch on Sundays, and the Main Branch consults daily from 10:00 AM to 2:00 PM.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
    },
    {
      q: "Can I stop my current medicines?",
      a: "No. Never stop prescribed medicines or dialysis without advice from your treating doctor.",
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
                Balprada Ayurveda Doctors for Kanth Patients
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients in Kanth who search for a Balprada Ayurveda doctor
                  usually want to know who will examine them, what experience the
                  doctors have and how to book a consultation, and this page
                  answers those questions using only information from the
                  Balprada website.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care in Moradabad district since 1991, and its Team
                  page introduces the doctors, the research team and the
                  service-minded staff who support patients.
                </li>
                <li>
                  The website lists no branch in Kanth, so patients visit the
                  Main Branch in Tehsil Bilari or the Moradabad Branch on Delhi
                  Road, and they should confirm the doctor&apos;s availability by
                  phone before travelling.
                </li>
                <li>
                  Doctor profiles on a health website should be read honestly, so
                  this page states what is published and says plainly where the
                  website gives no detail.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Doctors and Team Page at a Glance
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Two Published Profiles
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Team page of the website carries two individual
                      profiles, Dr. U. S. Sharma and Dr. Chetan Anand, and it
                      also mentions Vaidya ji, who is available at the Moradabad
                      Branch on Sundays.
                    </li>
                    <li>
                      The website describes a wider group of doctors, research
                      staff and service-minded staff, but only the two profiles
                      above are described in detail.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. What the Website Does Not State
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website does not list degrees, registration numbers or
                      individual timetables for the doctors, so patients who want
                      such details should ask the team directly on the phone or
                      at the clinic.
                    </li>
                    <li>
                      It is reasonable for any patient to ask a doctor about
                      qualifications and experience, and a good institution
                      answers such questions openly.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. U. S. Sharma: Ayurvedic Consultant
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Experience
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. U. S. Sharma is listed with more than 20 years of
                      experience in Ayurvedic practice, which means he has seen a
                      wide range of long-standing conditions over two decades.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Areas of Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      His listed areas are kidney and liver concerns, chronic
                      disease care and general Ayurvedic consultation, which
                      matches the conditions for which many families approach
                      Balprada.
                    </li>
                    <li>
                      Chronic conditions need patience, careful follow-up and
                      honest guidance, and the consultation is the place where
                      these are explained to the patient and the family.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. What This Means for a Patient
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A patient with swelling, reduced kidney function, fatty
                      liver, jaundice or a long-term condition can discuss it
                      with a senior Ayurvedic consultant and ask what a
                      supportive plan could look like.
                    </li>
                    <li>
                      The website does not state which days he consults, so
                      please call to confirm availability before you travel.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Chetan Anand: Herbal Research and Health Camp Advisor
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Experience
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. Chetan Anand is associated with Balprada Herbal
                      Wellness Private Limited and has more than seven years of
                      experience in herbal product research and development.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Role
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      His published work covers herbal product research, pharmacy
                      development and advisory support for free health camps, so
                      his role is linked to medicines and community outreach.
                    </li>
                    <li>
                      The website does not describe him as a consulting
                      physician, so patients should not assume he will conduct
                      personal consultations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Why Research Matters to Patients
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness prepares the institution&apos;s
                      traditional and patent Ayurvedic medicines, so careful
                      research and preparation support the quality of what
                      patients take.
                    </li>
                    <li>
                      Patients should take every medicine only as explained by
                      the vaidya and avoid mixing it with unknown herbal powders
                      or home remedies.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Vaidya ji at the Moradabad Branch
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website says Vaidya ji is available at the Moradabad Branch
                  on Sundays, and it asks patients to call before visiting.
                </li>
                <li>
                  The Moradabad Branch is at F-19, Sector-13, New Moradabad,
                  Delhi Road, and the phone number is{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>
                  This Sunday availability helps working families who cannot
                  travel on weekdays, but the branch should still be contacted
                  first to confirm the day.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Doctor&apos;s Consultation Works at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Listening First
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the health concern, medical history,
                      current treatment, food habits, sleep, stress, daily routine
                      and treatment goals before suggesting any next step.
                    </li>
                    <li>
                      Patients are encouraged to speak openly, and family members
                      are welcome to listen so that advice is remembered at home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Reviewing Reports
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring previous prescriptions, blood and urine reports,
                      scans and a list of current medicines, so the vaidya can
                      plan guidance around what you already take.
                    </li>
                    <li>
                      Doctor-advised tests can be done at the Balprada Pathology
                      Lab, which lists Kidney Function Test, Liver Function Test,
                      Complete Blood Count, Thyroid Profile, Diabetes Profile
                      with HbA1c, Lipid Profile, Urine Routine and Microscopy,
                      and Vitamin B12 and Vitamin D.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Personalised Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic medicines, diet guidance and lifestyle correction
                      are planned for the individual and explained in simple
                      language.
                    </li>
                    <li>
                      Yoga, naturopathy, meditation, panchakarma or physiotherapy
                      are added only where they suit the patient after individual
                      assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular reviews let the team check reports, symptoms and
                      diet and adjust the plan as the patient&apos;s needs
                      change.
                    </li>
                    <li>
                      The website does not state a fixed follow-up interval, so
                      ask the doctor when to return.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Concerns Can You Discuss with the Doctor
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care are offered for
                      kidney failure, kidney stones and persistent swelling, and
                      patients must never stop prescribed medicines or dialysis
                      without asking their treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is available for fatty liver, jaundice and weak
                      digestion, and yellowing of the eyes or skin needs a prompt
                      medical evaluation.
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
                      easy-to-digest diet guidance and stress support, and it is
                      planned alongside the patient&apos;s primary medical
                      treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Diabetes and Thyroid
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care combines daily routines, food discipline, physical
                      activity, stress management and monitored follow-up, with
                      attention to blood pressure, diabetes, obesity and thyroid
                      imbalance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for hormonal balance, menstrual health, weakness and
                      maternal wellness is offered with privacy, careful
                      listening and individual guidance.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask what the doctor thinks is the main concern in your reports,
                  which tests are still needed and whether you should also see a
                  specialist or physician.
                </li>
                <li>
                  Ask how the plan will work, how long the first phase may take,
                  how often follow-ups are needed and which signs mean you should
                  return sooner or go to a hospital.
                </li>
                <li>
                  Ask which foods to prefer or avoid, how to take each medicine
                  and which current medicines you must continue.
                </li>
                <li>
                  Ask what a realistic expectation looks like, because outcomes
                  vary from person to person and no specific result is promised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose an Ayurvedic Doctor Wisely
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Look for clear experience, such as years of practice and the
                  conditions a doctor consults on, and be careful with anyone who
                  promises a guaranteed cure or discourages you from continuing
                  specialist treatment.
                </li>
                <li>
                  Prefer a doctor who listens, reviews your reports and explains
                  the plan in simple language, and who tells you honestly what
                  Ayurveda can and cannot do.
                </li>
                <li>
                  Check that tests, medicines and follow-up are available in an
                  organised way, so that you do not need to run between many
                  places.
                </li>
                <li>
                  Visit once, ask your questions and judge for yourself, because
                  the free OPD on the 15th of every month is a convenient chance
                  to meet the doctors without a consultation fee.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Visit from Kanth
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What to Carry
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring an identity document, previous prescriptions, recent
                      reports, scans and a list of all current medicines, and
                      note down symptoms, sleep, appetite and any blood sugar or
                      blood pressure readings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Who Should Come with You
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring a family member who can listen to the doctor, carry
                      the reports and help with medicines and diet afterwards,
                      especially if the patient is elderly or weak.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Timing
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Main Branch consults daily from 10:00 AM to 2:00 PM, so
                      leave early, allow for traffic and arrive about 15 minutes
                      before your appointment.
                    </li>
                    <li>
                      Check the route from Kanth using the map links on the
                      website contact page, and call before leaving to confirm
                      that the doctor is available.
                    </li>
                  </ul>
                </div>
              </div>
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
                  Keep a small notebook of symptoms, sleep and appetite for each
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
                  Go to the nearest hospital in an emergency such as severe pain,
                  breathlessness, heavy bleeding, very low urine output or sudden
                  worsening, and do not wait for an Ayurvedic appointment.
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
                  staff, and none of the featured reviews names Kanth.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Branches and Booking
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

                <div>
                  <p className="font-semibold">How to Book</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Use the appointment form on balpradaindia.com, where you
                      choose your concern, and also call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      so the team has your name, contact number and preferred
                      branch.
                    </li>
                    <li>
                      Write to{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>{" "}
                      if you wish to share reports in advance, and give at least
                      24 hours of notice if you need to cancel or reschedule.
                    </li>
                  </ul>
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