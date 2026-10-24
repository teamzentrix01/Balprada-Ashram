import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalResearchCenter() {
  const faqs = [
    {
      q: "What is Balprada Ayurvedic Hospital & Research Center?",
      a: "It is an Ayurvedic hospital, ashram and research centre in Moradabad district, serving patients since 1991 under the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.",
    },
    {
      q: "Where are the branches?",
      a: "The Main Branch is in Tehsil Bilari, and the Moradabad Branch is on Delhi Road in New Moradabad.",
    },
    {
      q: "What are the timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
    },
    {
      q: "Which conditions are covered?",
      a: "Kidney, liver, cancer supportive, heart and lifestyle, diabetes and thyroid, and women's wellness care.",
    },
    {
      q: "Are tests available on site?",
      a: "Yes. The Balprada Pathology Lab offers KFT, LFT, CBC, thyroid, diabetes, lipid, urine and vitamin tests.",
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
                Balprada Ayurvedic Hospital &amp; Research Center: Care Rooted
                in Service
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center in Moradabad
                  district, Uttar Pradesh, has offered Ayurvedic care since 1991,
                  built on the seva sankalp, or service vow, of Sw. Vaidya Vijay
                  Pal Singh Ji.
                </li>
                <li>
                  The hospital combines Ayurvedic wisdom, in-house herbal
                  medicines, experienced doctors and a calm ashram environment,
                  so that patients receive consultation, medicines, tests and
                  supportive therapies within one institution.
                </li>
                <li>
                  Its motto, &quot;May all be happy, may all be healthy, may all
                  see what is auspicious, and may no one suffer,&quot; explains
                  the way the team approaches patients: with patience, respect
                  and a wish to serve.
                </li>
                <li>
                  This page explains what Balprada offers, how a visit works,
                  where the branches are and what patients and families should
                  expect, using only information published on
                  balpradaindia.com.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Story and Founding Vision
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Founded in 1991
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada began in 1991 as an Ayurvedic healthcare effort
                      guided by Sw. Vaidya Vijay Pal Singh Ji, and the website
                      describes the work today as more than three decades of
                      Ayurvedic care.
                    </li>
                    <li>
                      The institution has grown from a service vow into a
                      hospital, ashram, research centre and community service
                      organisation that patients from many towns now visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. The Seva Sankalp
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The founder&apos;s service vow remains the heart of the
                      institution, and it is the reason Balprada describes itself
                      as service-first and not only as a place of treatment.
                    </li>
                    <li>
                      Balprada Jansewa Sansthan carries this vow into free and
                      subsidised Ayurvedic healthcare for underprivileged
                      patients.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Ayurveda with Research
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The name &quot;Research Center&quot; reflects the aim of
                      studying and preparing traditional formulations with care,
                      and the institution&apos;s traditional and patent Ayurvedic
                      medicines are prepared by Balprada Herbal Wellness Private
                      Limited.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes Balprada Different
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. In-House Herbal Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicines are prepared under the Balprada Herbal Wellness
                      name, which means patients receive formulations that come
                      from the same institution that examines them.
                    </li>
                    <li>
                      Patients should take every medicine only as explained by
                      the vaidya, and should avoid mixing it with unknown herbal
                      powders or home remedies.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Ashram Environment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The ashram setting brings healthcare, discipline, emotional
                      support and community service together in a peaceful place,
                      which patients often mention in their reviews.
                    </li>
                    <li>
                      A quiet surrounding helps patients follow a regular routine
                      of food, rest and medicines, which matters for long-term
                      care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Consultation Before Prescription
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care begins with listening: the doctor reviews the health
                      concern, medical history, current treatment, food habits,
                      sleep, stress and daily routine before suggesting any plan.
                    </li>
                    <li>
                      Reports, scans and old prescriptions are reviewed so that
                      the plan fits the person and not only the disease name.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Everything in One Place
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation, pathology tests, medicines, yoga,
                      naturopathy, meditation, panchakarma and physiotherapy are
                      all listed under one institution, which reduces repeated
                      travel for families.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Areas at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care are offered for
                      kidney failure, kidney stones and persistent swelling, with
                      attention to diet, hydration habits and the patient&apos;s
                      reports.
                    </li>
                    <li>
                      Patients must never stop prescribed medicines or dialysis
                      without asking their treating doctor, because Ayurvedic
                      care here is supportive.
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
                      evaluation and should never wait for a treatment plan.
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
                    4. Heart and Lifestyle Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for blood pressure, diabetes and obesity combines
                      daily routines, food discipline, physical activity, stress
                      management and monitored follow-up.
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
                      activity, prescribed care and blood-sugar monitoring, while
                      thyroid consultations cover hypothyroidism and
                      hyperthyroidism by reviewing reports, energy, weight,
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
                Facilities and Supportive Therapies
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Balprada Pathology Lab
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The lab provides in-house blood and urine testing, with a
                      focus on kidney, liver, cancer and diabetes patients.
                    </li>
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
                    2. Panchakarma
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
                    3. Yoga, Naturopathy and Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga includes breathing exercises, posture practice and
                      routine building, naturopathy offers nature-based therapies
                      and detox support, and meditation supports calm, sleep and
                      stress management.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy begins with a mobility assessment and moves
                      into guided rehabilitation, with strength and recovery
                      support alongside the wider care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Organic Food Section
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website lists an Organic Food section, but it does not
                      describe it in detail, so please ask the team on the phone
                      what is currently available.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Care Works at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step 1: Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring previous prescriptions, test reports, scans and a
                      list of current medicines, and the vaidya will listen to
                      you and your family before suggesting any next step.
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
                      are planned for the individual and explained in simple
                      language.
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
                      or diagnostics may be added only where they suit the
                      patient.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step 4: Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular reviews let the team check reports, symptoms and
                      diet, repeat tests when advised and adjust the plan as the
                      patient&apos;s needs change.
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
                  The website describes Balprada&apos;s doctors as experienced
                  and names Vaidya ji, who is available at the Moradabad Branch
                  on Sundays.
                </li>
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
                Jansewa: Service to the Community
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Jansewa Sansthan has offered free and subsidised
                  Ayurvedic healthcare for underprivileged patients since 1991.
                </li>
                <li>
                  Its work includes the Vridhashram for the elderly, the
                  Navtarun Ashram, residential school support and gaushala seva.
                </li>
                <li>
                  The free OPD held on the 15th of every month is one way this
                  service spirit reaches patients, and the branch should be
                  confirmed by phone before travelling.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Enterprises: Wellness Products
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Enterprises offers herbal tea and spices, Ayurvedic
                  oils, avaleh and herbal preparations, herbal and gram flour,
                  and pickle, murabba and dalia.
                </li>
                <li>
                  The website has no online checkout, so product orders depend on
                  stock and price confirmation by phone, WhatsApp or email.
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
                  Reviews mention authentic herbal preparations, knowledgeable
                  vaidyas, a serene healing atmosphere and humble, helpful staff.
                </li>
                <li>
                  These are personal experiences, and the website terms state
                  that outcomes vary from person to person.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Honest Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care at Balprada is supportive, no specific result is
                  promised, and information on the website does not replace the
                  advice of a doctor.
                </li>
                <li>
                  In an emergency such as severe pain, breathlessness, heavy
                  bleeding or sudden worsening, go to the nearest hospital first.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Branches, Timings and Contact
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
                        Open daily with consultation from 10:00 AM to 2:00 PM.
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
                  <p className="font-semibold">Planning Your Visit</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Book through the appointment form on balpradaindia.com,
                      call or WhatsApp{" "}
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
                    <li>
                      Arrive about 15 minutes early and give at least 24 hours of
                      notice if you need to cancel or reschedule, as the website
                      terms request.
                    </li>
                    <li>
                      Carry an identity document, previous prescriptions, recent
                      reports and a list of current medicines, and bring a family
                      member if the patient is elderly or weak.
                    </li>
                    <li>
                      Patients from nearby towns such as Kanth, Rampur and Bilari
                      should check the route using the map links on the contact
                      page, because the website does not list a branch in those
                      towns.
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
                  painkillers, and never stop prescribed medicines or dialysis
                  without asking your treating doctor.
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