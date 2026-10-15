import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicTreatmentNearMeKanth() {
  const faqs = [
    {
      q: "Q1. Is there Ayurvedic treatment near me in Kanth?",
      a: "Balprada has a Main Branch in Tehsil Bilari and a Moradabad Branch on Delhi Road, both in Moradabad district. Please check the route from Kanth using the map links on the contact page.",
    },
    {
      q: "Q2. Does Balprada have a branch in Kanth?",
      a: "No Kanth branch is listed on the website.",
    },
    {
      q: "Q3. What are the timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "Q4. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
    },
    {
      q: "Q5. Can I get tests done there?",
      a: "Yes. The Balprada Pathology Lab offers KFT, LFT, CBC, thyroid, diabetes and lipid tests, among others.",
    },
    {
      q: "Q6. When should I arrive?",
      a: "The website terms ask patients to arrive about 15 minutes early.",
    },
    {
      q: "Q7. Can I stop my current medicines?",
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
                Ayurvedic Treatment Near Kanth: Quick Answers
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  If you are searching for Ayurvedic treatment near Kanth,
                  Balprada Ayurvedic Hospital &amp; Research Center offers
                  consultation-led care in Moradabad district through a Main
                  Branch in Tehsil Bilari and a Moradabad Branch on Delhi Road.
                </li>
                <li>
                  Balprada has served patients since 1991, and its ashram and
                  clinic are open seven days a week for guided consultation and
                  follow-up care.
                </li>
                <li>
                  The website does not list a branch in Kanth, so please use the
                  Google Maps links on the contact page to check the route and
                  the travel time from your location, and call before you leave.
                </li>
                <li>
                  This page gives fast answers to the questions people ask before
                  they travel: where to go, when it is open, what is treated,
                  what tests are available and how to book.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where and When: Timings at a Glance
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
                      Open daily with consultation from 10:00 AM to 2:00 PM, and
                      you can call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to confirm before travelling.
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
                      before visiting to confirm.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Free OPD
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month during the regular consultation window.
                    </li>
                    <li>
                      The website does not state which branch hosts it, so call
                      to confirm the branch before travelling.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Quick Rules for Appointments
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website terms ask patients to arrive about 15 minutes
                      early, and appointments depend on doctor availability.
                    </li>
                    <li>
                      If you need to cancel or reschedule, the terms ask for at
                      least 24 hours of notice, so please inform the team by
                      phone or WhatsApp.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Treated: Conditions in Brief
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care are offered for
                      reduced kidney function, kidney stones, persistent swelling
                      and diabetes-related kidney concerns.
                    </li>
                    <li>
                      Patients should never stop prescribed medicines or dialysis
                      without advice from their treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Swelling
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Persistent swelling may need kidney, liver and metabolic
                      assessment, so the doctor considers symptoms, medical
                      history, current treatment, diet, sleep, stress and daily
                      routine, and may review diagnostic reports.
                    </li>
                    <li>
                      Sudden or severe swelling, breathing difficulty, chest pain
                      or reduced urination are emergencies that need immediate
                      medical care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is available for fatty liver, jaundice, weak digestion
                      and metabolic imbalance, through consultation, food
                      guidance, routine correction and monitored herbal care.
                    </li>
                    <li>
                      Weak digestion is supported through food timing, routine
                      and suitable medicines, and yellowing of the eyes or skin
                      always needs a prompt medical evaluation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Cancer Supportive Care
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
                    5. Heart, Blood Pressure and Weight
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care combines daily routines, food habits, movement, stress
                      management and monitored follow-up, personalised to the
                      patient&apos;s health status.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Diabetes and Thyroid
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes care focuses on food discipline, physical
                      activity, prescribed care and blood-sugar monitoring, while
                      thyroid consultations review thyroid reports, energy,
                      weight, digestion and current medicines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    7. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Women&apos;s health needs privacy, careful listening and
                      individualised guidance, so care covers hormonal balance,
                      menstrual health, weakness and maternal wellness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Treatment Works in Four Steps
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step 1: Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the health concern, medical history,
                      daily routine and treatment goals, and asks about appetite,
                      sleep, digestion, energy and stress.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Step 2: Personalised Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic medicines, diet guidance and lifestyle correction
                      are planned for the individual, and the vaidya explains
                      them in simple language to the patient and family.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Step 3: Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma, physiotherapy
                      or diagnostics may be added where they suit the patient,
                      and frequency and suitability are decided after individual
                      assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step 4: Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular reviews let the team check progress, repeat tests
                      and adjust the plan as the patient&apos;s needs change.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests Available on Site
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Balprada Pathology Lab provides in-house blood and urine
                  testing, with a focus on kidney, liver, cancer and diabetes
                  patients.
                </li>
                <li>
                  Available tests include Complete Blood Count, Kidney Function
                  Test, Liver Function Test, Thyroid Profile, Diabetes Profile
                  with HbA1c, Lipid Profile, Urine Routine and Microscopy, and
                  Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Other doctor-advised tests may also be available, and you
                  should ask the lab team about your requirement when you call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines, Therapies and Products
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines, and patients
                      should take them only as explained by the vaidya.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures planned after assessment, yoga
                      includes breathing exercises and posture practice, and
                      naturopathy offers nature-based therapies, detox support
                      and lifestyle correction.
                    </li>
                    <li>
                      Before starting any therapy, patients should share existing
                      conditions, current medicines and mobility concerns so the
                      team can support safe participation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Wellness Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea and spices, Ayurvedic
                      oils, avaleh and herbal preparations, herbal and gram
                      flour, and pickle, murabba and dalia.
                    </li>
                    <li>
                      Product orders depend on stock and price confirmation, so
                      please enquire by phone, WhatsApp or email.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Trip from Kanth
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Open the Google Maps link for the Main Branch or the Moradabad
                  Branch on the website contact page, check the route and leave
                  early enough to reach the clinic within the 10:00 AM to 2:00 PM
                  consultation window.
                </li>
                <li>
                  Call or WhatsApp before leaving, because availability is
                  confirmed branch by branch and the Moradabad Branch has the
                  vaidya on Sundays.
                </li>
                <li>
                  Carry your reports in one folder, keep some water and a light
                  snack for elderly patients or those with diabetes, and plan a
                  comfortable return journey because the consultation and tests
                  can take time.
                </li>
                <li>
                  If the patient is weak or unable to travel for long, ask the
                  team on the phone whether a family member can first share the
                  reports and guide the next step.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Local Families Ask About Treatment Near Them
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chronic conditions need repeated visits, so families look for a
                  hospital they can reach again and again for follow-up reviews
                  without exhausting the patient.
                </li>
                <li>
                  Planning follow-ups around Sundays at the Moradabad Branch or
                  the free OPD on the 15th can make repeat visits easier for
                  working families.
                </li>
                <li>
                  Keeping all reports, tests and medicines under one institution
                  reduces the number of trips, which is especially helpful for
                  elderly patients.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Bring
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring previous prescriptions, recent blood and urine reports,
                  scans, a list of all current medicines and an identity
                  document.
                </li>
                <li>
                  Note down symptoms, sleep, appetite and any blood sugar or
                  blood pressure readings, and come with a family member who can
                  help remember the instructions.
                </li>
              </ul>
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
                  Private Limited, has over seven years of experience in herbal
                  product research and development and advises on free health
                  camps.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Honest Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care at Balprada is supportive, and the website terms
                  state that outcomes vary from person to person and no specific
                  result is promised from any treatment.
                </li>
                <li>
                  Information on the website is general and does not replace the
                  advice of a doctor, so patients should not skip or delay
                  professional care.
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
                  painkillers or unknown herbal powders, and repeat tests at the
                  interval suggested by the doctor.
                </li>
                <li>
                  Keep a small notebook of symptoms, sleep and appetite for each
                  follow-up visit, and practise gentle walking or yoga only as
                  advised.
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
                Why Patients Trust Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice and a
                  service-first spirit give patients and families a sense of
                  continuity.
                </li>
                <li>
                  <span className="font-semibold">
                    Consultation, tests and medicines under one institution:
                  </span>{" "}
                  patients do not need to travel between many different places.
                </li>
                <li>
                  <span className="font-semibold">
                    Open seven days a week:
                  </span>{" "}
                  the ashram and clinic stay open throughout the week, with a
                  Sunday vaidya at the Moradabad Branch.
                </li>
                <li>
                  <span className="font-semibold">
                    Service to the community:
                  </span>{" "}
                  Balprada Jansewa Sansthan has offered free and subsidised
                  Ayurvedic healthcare for underprivileged patients since 1991.
                </li>
                <li>
                  <span className="font-semibold">Patient feedback:</span>{" "}
                  reviews on the website speak of knowledgeable vaidyas, genuine
                  herbal preparations, a serene atmosphere and humble, helpful
                  staff.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">How to Book</h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Use the appointment form on balpradaindia.com to choose your
                  preferred branch and health concern, and the team will guide
                  you on timing and the next step.
                </li>
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
                        Bilari, District Moradabad, Uttar Pradesh 244415.
                      </li>
                      <li>
                        Daily, 10:00 AM to 2:00 PM. Phone and WhatsApp:{" "}
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
                        Uttar Pradesh 244001.
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