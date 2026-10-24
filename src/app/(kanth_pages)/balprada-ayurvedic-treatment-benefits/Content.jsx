import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicTreatmentBenefits() {
  const faqs = [
    {
      q: "What are the benefits of Balprada Ayurvedic treatment?",
      a: "Patients receive a personal consultation, individual planning, in-house herbal medicines, tests, supportive therapies and regular follow up in one institution.",
    },
    {
      q: "Does Balprada promise a cure?",
      a: "No. Outcomes vary from person to person, and no specific result is promised.",
    },
    {
      q: "Can I continue my current medicines?",
      a: "Yes. Never stop prescribed medicines or dialysis without advice from your treating doctor.",
    },
    {
      q: "Which conditions does Balprada support?",
      a: "Kidney, liver, cancer supportive, heart and lifestyle, diabetes and thyroid, and wellness care for women.",
    },
    {
      q: "Are tests available on site?",
      a: "Yes. The Balprada Pathology Lab offers KFT, LFT, CBC, thyroid, diabetes, lipid, urine and vitamin tests.",
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
                Benefits of Balprada Ayurvedic Treatment
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People who look for the benefits of Balprada Ayurvedic
                  treatment want to know what they can reasonably expect from the
                  care, and this page explains the benefits of the approach, the
                  facilities and the support, using information published on the
                  Balprada website.
                </li>
                <li>
                  Balprada Ayurvedic Hospital and Research Center has served
                  patients in Moradabad district since 1991, and it combines
                  Ayurvedic wisdom, in-house herbal medicines, experienced
                  doctors and an ashram environment for long term healing.
                </li>
                <li>
                  The benefits described here are benefits of the way care is
                  planned and delivered, and not promises of a cure, because the
                  website terms state that outcomes vary from person to person
                  and that no specific result is promised.
                </li>
                <li>
                  Ayurvedic care at Balprada is supportive, so patients are
                  advised to continue specialist or emergency treatment whenever
                  it is needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 1: A Personal Consultation Before Any Plan
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Listening Comes First
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the health concern, medical history,
                      current treatment, food habits, sleep, stress, daily
                      routine and treatment goals before suggesting any next
                      step, so the patient is heard before a plan is made.
                    </li>
                    <li>
                      Family members are welcome to listen, which helps the
                      instructions to be remembered and followed at home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Reports Are Reviewed
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Previous prescriptions, test reports and scans are
                      reviewed, and the plan is built around what the patient
                      already takes, which supports safe and sensible care.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 2: Care Planned for the Individual
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Different Plans for Different People
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Age, strength, appetite, digestion, sleep, stress and daily
                      routine differ from person to person, so two patients with
                      the same diagnosis may receive different advice.
                    </li>
                    <li>
                      This personal approach helps patients feel that the care
                      fits their own life and not a fixed formula.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Plain Language Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic medicines, diet guidance and lifestyle correction
                      are explained in simple language, so that the patient and
                      the family understand what to do each day.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 3: A Whole Person Approach
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Medicine, Food and Routine Together
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Treatment is not limited to medicines, because food habits,
                      daily routine, movement and stress all form part of the
                      plan that the vaidya explains.
                    </li>
                    <li>
                      Patients who follow the advice with regularity give
                      themselves the best chance of benefiting from the care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Mind and Body
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, meditation and naturopathy support calm, sleep and
                      stress management, which matter greatly in long standing
                      conditions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 4: In-House Herbal Medicines
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Prepared by Balprada Herbal Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares the
                      traditional and patent Ayurvedic medicines of the
                      institution, with organised pharmacy processes at the Main
                      Branch and research led herbal wellness support.
                    </li>
                    <li>
                      Patients receive medicines from the same institution that
                      examines them, and patients in their reviews mention
                      genuine herbal preparations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Safe Use
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicines should be taken only as explained by the vaidya,
                      and patients should avoid mixing them with unknown herbal
                      powders, oils or home remedies.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 5: Tests and Monitoring in One Place
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
                    2. Following Progress with Facts
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Repeat tests at the interval suggested by the doctor let
                      patients and families follow progress with facts, so the
                      plan can be adjusted at each follow up.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 6: Supportive Therapies When They Suit You
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
                    2. Yoga
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga includes breathing exercises, posture practice,
                      routine building and stress support, and it is best started
                      after assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Naturopathy and Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy offers nature-based therapies, detox support
                      and lifestyle correction, while guided meditation supports
                      calm and sleep.
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
                      support alongside the wider plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Choice and Safety
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      These therapies are suggested only where they suit the
                      patient, and patients should share existing conditions,
                      current medicines and mobility concerns before starting.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 7: Support Across Many Health Concerns
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
                      attention to diet and the reports of the patient.
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
                    4. Heart, Diabetes and Thyroid
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care combines daily routines, food discipline, physical
                      activity, stress management and monitored follow up, with
                      attention to blood pressure, obesity, diabetes and thyroid
                      imbalance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Wellness Care for Women
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
                Benefit 8: A Calm Ashram Environment
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The ashram setting brings healthcare, discipline, emotional
                  support and community service together in a peaceful place.
                </li>
                <li>
                  A quiet surrounding helps patients follow a regular routine of
                  food, rest and medicines, and patients mention the serene,
                  healing atmosphere in their reviews.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 9: Regular Follow Up
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Regular reviews let the team check reports, symptoms and diet,
                  repeat tests when advised and adjust the plan as the needs of
                  the patient change.
                </li>
                <li>
                  The website does not state a fixed follow up interval, so the
                  vaidya tells each patient when to return.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 10: Service-First Values
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Free OPD
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month, and the branch should be confirmed by phone before
                      travelling.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Jansewa
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
                    3. Humble Staff
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients describe staff as humble, kind and helpful, which
                      reflects the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji,
                      who started Balprada in 1991.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefit 11: Experienced Doctors and Research
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
                <li>
                  Vaidya ji is available at the Moradabad Branch on Sundays,
                  which helps families who cannot travel on weekdays.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Get the Most Benefit from Treatment
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
                  Keep a small notebook of symptoms, sleep, appetite and blood
                  sugar or blood pressure readings, and show it at every follow
                  up visit.
                </li>
                <li>
                  Attend follow up visits and repeat tests as advised, and speak
                  openly with the vaidya about any difficulty in following the
                  plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Vaidya
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
                <li>
                  Ask what a realistic expectation looks like, because outcomes
                  vary from person to person and no specific result is promised.
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
                What Benefits Cannot Promise
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Every patient has a different condition, age, strength and
                  history, so a good experience for one person does not guarantee
                  the same outcome for another.
                </li>
                <li>
                  Information on the website is general and does not replace the
                  advice of a doctor, so patients should not skip or delay
                  professional care.
                </li>
                <li>
                  Go to the nearest hospital in an emergency such as severe pain,
                  breathlessness, heavy bleeding, very low urine output or sudden
                  worsening.
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
                      Use the appointment form on balpradaindia.com, call or
                      WhatsApp{" "}
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
                      Arrive about 15 minutes early, and give at least 24 hours
                      of notice if you need to cancel or reschedule, as the
                      website terms request.
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