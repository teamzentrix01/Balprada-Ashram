import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicTreatmentCentre() {
  const faqs = [
    {
      q: "Q1. Which is a trusted Ayurvedic treatment centre near Rampur?",
      a: "Balprada Ayurvedic Hospital & Research Center, serving patients since 1991, is a trusted option for Rampur families.",
    },
    {
      q: "Q2. Does Balprada have a centre in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q3. Which conditions are treated?",
      a: "Kidney, liver, cancer support, heart, diabetes, thyroid and women&apos;s health concerns.",
    },
    {
      q: "Q4. Are medicines prepared at Balprada?",
      a: "Yes. Balprada prepares its own Ayurvedic medicines.",
    },
    {
      q: "Q5. Is panchakarma available?",
      a: "Yes. It is planned individually after assessment of your condition and strength.",
    },
    {
      q: "Q6. Are pathology tests available?",
      a: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic tests.",
    },
    {
      q: "Q7. What are the OPD timings?",
      a: "Daily from 10:00 AM to 2:00 PM at the main branch. The Moradabad branch has Vaidya ji on Sundays, so call first.",
    },
    {
      q: "Q8. Is there a free consultation?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q9. Can I continue my current medicines?",
      a: "Yes. Never stop prescribed medicines without your treating doctor&apos;s advice.",
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
                Ayurvedic Treatment Centre in Rampur – Balprada Ayurvedic
                Hospital &amp; Research Center
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                A Trusted Ayurvedic Treatment Centre for Rampur Families
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Rampur, Uttar Pradesh searching for an Ayurvedic
                  treatment centre usually want more than a quick prescription.
                  They look for an experienced team, genuine medicines, honest
                  guidance and a calm place where long-term care can be planned
                  properly.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has served
                  patients since 1991 and brings together an Ayurvedic
                  chikitsalaya, research, herbal wellness, pathology, yoga,
                  naturopathy and ashram-based social service under one trusted
                  ecosystem.
                </li>
                <li>
                  Patients from Rampur and nearby areas reach our main branch
                  in Bilari or our Moradabad branch for consultation, in-house
                  Ayurvedic medicines, diet guidance, supportive therapies and
                  regular follow-up.
                </li>
                <li>
                  This page explains what our treatment centre offers, which
                  health concerns we support, how your care journey works and
                  how to book your first visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Treatment Centre
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Our Legacy of Seva
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada was built on the seva sankalp of Sw. Vaidya
                      Vijay Pal Singh Ji, who began the work in 1991 with a
                      vision of combining Ayurvedic healing with selfless
                      community service for every patient who came for help.
                    </li>
                    <li>
                      Today the centre carries 35 years of experience and
                      continues the founder&apos;s belief that positivity gives
                      patients the courage to face difficult circumstances and
                      stay disciplined during long treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Mission and Vision
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our mission is to provide reliable Ayurvedic care for
                      chronic and serious health conditions through
                      consultation, self-prepared medicines, lifestyle guidance
                      and compassionate service for patients and their
                      families.
                    </li>
                    <li>
                      Our vision is to be a trusted Ayurvedic wellness and
                      jansewa centre where traditional knowledge, modern
                      organisation and community care work together for
                      healthier lives across Uttar Pradesh.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. What Makes Balprada Different from an Ordinary Clinic
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      <span className="font-semibold">Experienced vaidyas:</span>{" "}
                      patients meet doctors who have supported a wide range of
                      chronic and long-standing concerns over decades, and who
                      take time to understand the person behind the report.
                    </li>
                    <li>
                      <span className="font-semibold">
                        In-house herbal medicines:
                      </span>{" "}
                      Balprada prepares its own Ayurvedic medicines, which
                      supports quality, consistency and trust in every
                      treatment plan and gives families more confidence in what
                      they take.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Complete care under one roof:
                      </span>{" "}
                      consultation, yoga, naturopathy, panchakarma,
                      physiotherapy, meditation and pathology support are
                      planned together rather than scattered across different
                      centres.
                    </li>
                    <li>
                      <span className="font-semibold">Ashram environment:</span>{" "}
                      the peaceful surroundings encourage rest, discipline and
                      recovery, which many patients mention as an important
                      part of their experience.
                    </li>
                    <li>
                      <span className="font-semibold">Service-first spirit:</span>{" "}
                      free OPD consultation is available on the 15th of every
                      month, and the ashram and clinic are open seven days a
                      week for guided consultation and follow-up.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Treated at Our Ayurvedic Centre
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care for kidney
                      function, swelling, kidney stones and diabetes-linked
                      kidney concerns, planned through diet guidance, medicines
                      and regular monitoring.
                    </li>
                    <li>
                      Reduced kidney function needs careful assessment and
                      continuous monitoring, so patients are asked to bring
                      their reports and continue necessary medical treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicine, diet and routine-based care for liver health,
                      fatty liver, jaundice and weak digestion, with practical
                      food discipline that patients can follow comfortably at
                      home.
                    </li>
                    <li>
                      Digestive strength is treated as the foundation of
                      health, so meal timing, food choices and daily routine
                      are reviewed carefully during consultation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Sensitive Ayurvedic supportive care for strength, energy,
                      diet and emotional balance during serious illness,
                      offered as support alongside the patient&apos;s primary
                      oncology treatment and never as a replacement for it.
                    </li>
                    <li>
                      Services include strength and recovery support, diet
                      guidance and stress support for patients and for the
                      families who care for them.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart and Lifestyle Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care for blood
                      pressure, diabetes, obesity and stress, with practical
                      guidance on food, activity, sleep and daily habits that
                      support heart and metabolic health.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diabetes and Thyroid Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Personalised support for blood sugar, hypothyroidism,
                      hyperthyroidism, energy, weight and metabolic balance,
                      with regular follow-up so the vaidya can observe progress
                      and adjust the plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Women&apos;s Wellness
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private, sensitive and personalised Ayurvedic care for
                      hormonal balance, menstrual health and weakness, with
                      respectful consultations that pay attention to diet,
                      lifestyle and emotional wellbeing.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Therapies and Facilities at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma therapies are planned individually to support
                      cleansing, balance and recovery, and they are chosen only
                      after assessment so that each patient receives what suits
                      their condition and strength.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga and Meditation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga helps build discipline, strength and calm across
                      body, mind and breath, while guided meditation and breath
                      awareness support emotional steadiness and restorative
                      rest.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Naturopathy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy works with the body&apos;s natural healing
                      capacity through simple, nature-led practices and
                      supportive routines that fit easily into everyday life.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Physiotherapy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Professional physiotherapy supports safe movement,
                      mobility, strength and recovery alongside the wider care
                      plan, which is especially helpful for patients who feel
                      weak or stiff.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Balprada Pathology Lab
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Labs provides reliable blood, urine and
                      diagnostic testing support, helping the doctor track
                      progress and plan care with confidence while saving
                      patients the effort of visiting several centres.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Organic Food and Ashram Living
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Wholesome, clean eating and a peaceful ashram setting
                      support the long-term lifestyle correction that Ayurvedic
                      care depends on, away from the stress of daily routine.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Care Journey at Our Treatment Centre
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews your concern, history, reports and
                      current medication, listens to your questions and
                      explains the next care step in simple language before any
                      plan is suggested.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Personalised Ayurvedic Plan
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned using Balprada&apos;s Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, so the plan fits your condition, strength and
                      daily routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, panchakarma, physiotherapy and
                      pathology support are added where they suit your
                      condition, making the treatment journey more complete and
                      better organised.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Regular Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up visits help the team observe progress, adjust
                      guidance and support long-term discipline, because
                      chronic conditions need patience, regular review and
                      steady effort from the whole family.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Safe and Responsible Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic treatment is planned only after reviewing your
                  current medicines, so please share every tablet, injection
                  and supplement you take and bring all earlier reports to your
                  first visit.
                </li>
                <li>
                  Patients with serious conditions such as kidney failure,
                  cancer, heart disease or diabetes should continue treatment
                  prescribed by their specialists, and Ayurvedic care is
                  offered as supportive guidance alongside it.
                </li>
                <li>
                  We avoid unrealistic promises, because honest doctors explain
                  what Ayurveda can support, what may take time and when
                  hospital or emergency care is required.
                </li>
                <li>
                  Please never stop prescribed medicines or advised procedures
                  without consulting your treating doctor, and seek emergency
                  care immediately for severe symptoms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Rampur Patients Trust Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Long experience:</span> more
                  than three decades of continuous Ayurvedic practice give our
                  team a practical understanding of chronic conditions and the
                  patience they need.
                </li>
                <li>
                  <span className="font-semibold">Genuine feedback:</span>{" "}
                  Google reviews describe knowledgeable vaidyas, authentic
                  herbal medicine formulations and a serene, healing atmosphere
                  that helps patients recover with positivity.
                </li>
                <li>
                  <span className="font-semibold">Humble service:</span>{" "}
                  patients repeatedly mention staff who greet everyone with a
                  smile and go out of their way to help families feel welcomed
                  and cared for.
                </li>
                <li>
                  <span className="font-semibold">Clear process:</span> from
                  consultation to follow-up, every step is explained so that
                  patients and families know what to expect from medicines,
                  diet and routine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Amresh Mishra shared a five-star review praising the guidance
                  of Vaidya ji and the hospital team, along with the natural
                  ashram surroundings, Ayurvedic discipline and genuine herbal
                  preparations.
                </li>
                <li>
                  Shivam Srivastav described Balprada as a wonderful place
                  where the humble, kind staff always help visitors and make
                  them feel welcomed and cared for during their visit.
                </li>
                <li>
                  Dr. Jeetesh Vishwas appreciated the knowledgeable vaidyas,
                  authentic herbal formulations and serene atmosphere for
                  kidney, liver and chronic illness care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Ayurvedic Treatment Centre in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Check the history of the centre, because a long and
                  verifiable record of patient care shows that the team has
                  experience with chronic and long-standing health concerns.
                </li>
                <li>
                  Ask how medicines are prepared and whether the centre
                  explains its formulations, since transparency about medicines
                  builds trust and safety.
                </li>
                <li>
                  Look for complete facilities such as pathology, yoga,
                  panchakarma and physiotherapy, because care that is connected
                  makes follow-up easier for patients and families.
                </li>
                <li>
                  Read genuine reviews and observe how staff treat visitors, as
                  respectful and humble service often reflects the character of
                  the whole institution.
                </li>
                <li>
                  Avoid any centre that promises guaranteed or overnight cures
                  for serious disease, because honest guidance matters more
                  than bold claims.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Consultation Matters
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many chronic conditions, including kidney, liver and
                  metabolic problems, develop slowly, and early guidance on
                  food, routine and medicines makes long-term management easier
                  for the patient and the family.
                </li>
                <li>
                  Persistent swelling, weak digestion, constant tiredness or
                  rising blood sugar deserve a proper consultation and tests
                  instead of self-medication or waiting for symptoms to worsen.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Diet and Lifestyle Tips
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home-cooked meals at regular times,
                  because Ayurveda treats strong digestion as the foundation of
                  good health and steady energy.
                </li>
                <li>
                  Follow any diet chart given by your doctor, especially for
                  kidney, liver, diabetes and thyroid concerns, since the right
                  food supports medicines and recovery.
                </li>
                <li>
                  Keep a steady daily routine by waking early, sleeping on
                  time, walking daily and avoiding heavy meals late at night.
                </li>
                <li>
                  Practise yoga, pranayama and meditation regularly to reduce
                  stress and support emotional balance, which strongly
                  influences long-term health.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips Before Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Carry all earlier reports, scans, prescriptions and a list of
                  every medicine or supplement you take, so the doctor can
                  understand your present condition and plan care responsibly.
                </li>
                <li>
                  Note your symptoms, when they began and what makes them
                  better or worse, and write down your questions about diet,
                  medicines, duration and follow-up.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and bring a
                  family member who helps with your meals and daily care.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                OPD Timings, Address and Contact
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch (Ashram and Clinic)</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar
                        Pradesh 244415.
                      </li>
                      <li>
                        Timings: daily, 10:00 AM to 2:00 PM.
                      </li>
                      <li>
                        Call:{" "}
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

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Free OPD and Appointments</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Free OPD consultation is available on the 15th of every
                        month.
                      </li>
                      <li>
                        Book by phone, WhatsApp on{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>{" "}
                        or through the Book Appointment page on
                        balpradaindia.com.
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
                Frequently Asked Questions (FAQs)
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