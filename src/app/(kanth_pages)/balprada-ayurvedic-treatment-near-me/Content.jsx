import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicTreatmentNearMe() {
  const faqs = [
    {
      q: "Is there Balprada Ayurvedic treatment near me?",
      a: "Balprada has a Main Branch in Tehsil Bilari and a Moradabad Branch on Delhi Road. Open the map links on the contact page to check which is closer to you.",
    },
    {
      q: "Does Balprada have other branches?",
      a: "No other branch is listed on the website.",
    },
    {
      q: "What are the timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month. Please call to confirm the branch.",
    },
    {
      q: "Can I get tests done there?",
      a: "Yes. The Balprada Pathology Lab offers KFT, LFT, CBC, thyroid, diabetes, lipid, urine and vitamin tests.",
    },
    {
      q: "How far is the hospital from my place?",
      a: "The website gives no distances. Open the map link from your phone to see your route and travel time.",
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
                Balprada Ayurvedic Treatment Near Me: How to Find the Closest
                Branch
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  When people search for Ayurvedic treatment near me, they want a
                  trusted place they can actually reach, so this page explains
                  where Balprada Ayurvedic Hospital and Research Center works,
                  how to check which branch is closer to you and how to plan a
                  visit.
                </li>
                <li>
                  Balprada has served patients in Moradabad district of Uttar
                  Pradesh since 1991, and it has two branches: the Main Branch in
                  Tehsil Bilari and the Moradabad Branch on Delhi Road in New
                  Moradabad.
                </li>
                <li>
                  The website lists no other branch, so this page does not name
                  any other town as a Balprada location, and patients from other
                  places should check the route by map before travelling.
                </li>
                <li>
                  The website gives Google Maps links but no landmarks or
                  distances, so this page gives no distance figures, and you can
                  see your own distance by opening the map link from your phone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where Balprada Is Located
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
                      Consultation is available daily from 10:00 AM to 2:00 PM,
                      and the ashram and clinic are open seven days a week.
                    </li>
                    <li>
                      Phone and WhatsApp:{" "}
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
                      Address: F-19, Sector-13, New Moradabad, Delhi Road,
                      Moradabad, Uttar Pradesh 244001.
                    </li>
                    <li>
                      Vaidya ji is available on Sundays, and the website asks
                      patients to call before visiting.
                    </li>
                    <li>
                      Phone:{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Check Which Branch Is Near You
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step 1: Open the Official Website
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Visit balpradaindia.com and open the Contact page, where
                      each branch has its own Google Maps link.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Step 2: Use Your Phone Location
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Open the map link on your phone, allow the map to use your
                      location and see the route and the travel time from where
                      you are.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Step 3: Compare Both Branches
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Compare the two routes and the usual road conditions, and
                      think about the day you plan to travel, because the Main
                      Branch consults daily and the Moradabad Branch has the
                      vaidya on Sundays.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step 4: Call to Confirm
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call the branch you prefer and confirm that the vaidya is
                      available on your day, so that you do not make a journey
                      for nothing.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Ayurvedic Treatment Near You Should Offer
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. A Doctor Who Listens
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Good Ayurvedic care begins with listening, and at Balprada
                      the doctor reviews the health concern, medical history,
                      current treatment, food habits, sleep, stress and daily
                      routine before suggesting any plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Tests Close at Hand
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada Pathology Lab provides blood and urine
                      testing, so patients can complete the doctor advised tests
                      within the same institution.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Medicines from a Known Source
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares the
                      traditional and patent Ayurvedic medicines of the
                      institution, so patients know where their medicines come
                      from.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Honest Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A trustworthy centre explains what Ayurveda can and cannot
                      do and advises patients to continue specialist or emergency
                      treatment whenever it is needed, and Balprada states that
                      outcomes vary and that no specific result is promised.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Follow Up You Can Keep
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Chronic conditions need repeated visits, so choose a branch
                      you can reach again and again without exhausting the
                      patient.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions Treated at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care are offered for
                      kidney failure, kidney stones and persistent swelling.
                    </li>
                    <li>
                      Patients must never stop prescribed medicines or dialysis
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
                      digestion through food guidance, routine correction and
                      monitored herbal care.
                    </li>
                    <li>
                      Yellowing of the eyes or skin needs a prompt medical
                      evaluation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Supportive care focuses on strength and recovery, easy to
                      digest diet guidance and stress support, and it is planned
                      alongside the primary medical treatment of the patient.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart and Lifestyle Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for blood pressure, diabetes and obesity combines
                      daily routines, food discipline, physical activity, stress
                      management and monitored follow up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes care focuses on food discipline, physical
                      activity, prescribed care and blood sugar monitoring, while
                      thyroid consultations cover hypothyroidism and
                      hyperthyroidism.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Wellness Care for Women
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
                Therapies and Facilities
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures, planned only after individual
                      assessment, with frequency and suitability decided by the
                      doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Naturopathy and Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga includes breathing exercises and posture practice,
                      naturopathy offers nature-based therapies and detox
                      support, and guided meditation supports calm and sleep.
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
                      into guided rehabilitation, with strength and recovery
                      support alongside the wider plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Ashram Setting
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The ashram brings healthcare, discipline, emotional support
                      and community service together in a peaceful place that
                      patients describe as serene and healing.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Timing Your Visit
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch Window
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Main Branch consults daily from 10:00 AM to 2:00 PM, so
                      plan to arrive well within this window, because
                      consultation, reports and tests can take time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Sunday Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Vaidya ji is available at the Moradabad Branch on Sundays,
                      which helps working families, though the branch should be
                      confirmed by phone first.
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
                      month, and the website does not say which branch hosts it,
                      so call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to confirm before you travel.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Arrival
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Arrive about 15 minutes early, as the website terms
                      request, and give at least 24 hours of notice if you need
                      to cancel or reschedule.
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
                    1. Comfort
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
                    2. Family Support
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
                    3. If Travel Is Difficult
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      If the patient is too weak to travel far, ask the team on
                      the phone whether a family member can first share the
                      reports and guide the next step.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. What to Carry
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
                How to Book
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Use the appointment form on balpradaindia.com, where you choose
                  a concern such as kidney, liver, cancer, heart or other, and
                  also call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  with your name, contact number and preferred branch.
                </li>
                <li>
                  Call{" "}
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
                  , and ask for directions from the nearest main road, because
                  the website gives no landmarks.
                </li>
              </ul>
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
                Doctors and Team
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma has more than 20 years of experience in
                  Ayurvedic practice and consults on kidney, liver and other
                  chronic concerns.
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
                  Service to the community: Balprada Jansewa Sansthan has offered
                  free and subsidised Ayurvedic healthcare for underprivileged
                  patients since 1991.
                </li>
                <li>
                  Patient feedback: reviews on the website speak of knowledgeable
                  vaidyas, genuine herbal preparations, a serene atmosphere and
                  humble, helpful staff, and these are personal experiences.
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
                  painkillers or unknown herbal powders, and never stop
                  prescribed medicines without asking your treating doctor.
                </li>
                <li>
                  Keep a small notebook of symptoms, sleep and appetite for each
                  follow up visit.
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
                  People with diabetes, high blood pressure, excess weight, long
                  term painkiller use or a family history of kidney or liver
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