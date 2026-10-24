import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicTreatmentKanth() {
  const faqs = [
    {
      q: "Does Balprada provide Ayurvedic treatment for Kanth patients?",
      a: "Yes, patients from Kanth regularly consult at the main branch in Moradabad district and at the Moradabad branch on Delhi Road.",
    },
    {
      q: "Which conditions are supported?",
      a: "Kidney, liver, cancer supportive care, heart, blood pressure, diabetes, thyroid and women's health concerns are supported.",
    },
    {
      q: "Is a prior appointment needed?",
      a: "Calling or messaging on WhatsApp at 8126364606 before visiting is recommended so the team can guide you on timing and documents.",
    },
    {
      q: "What are the OPD timings?",
      a: "The main branch is open daily from 10:00 AM to 2:00 PM, and a free OPD is held on the 15th of every month.",
    },
    {
      q: "Can I continue my allopathic medicines?",
      a: "Yes, continue them unless your own doctor advises a change, and share all medicines with the vaidya at the first visit.",
    },
    {
      q: "Is Panchakarma available?",
      a: "Yes, Panchakarma is offered after individual assessment, with doctor-guided planning and food and rest guidance.",
    },
    {
      q: "Can family members sit in the consultation?",
      a: "Yes, family members are welcome and are encouraged to listen to the diet and routine advice.",
    },
    {
      q: "Does Ayurvedic treatment give guaranteed results?",
      a: "No honest practitioner can promise guaranteed results, because outcomes depend on the condition, stage, discipline and follow-up.",
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
                Balprada Ayurvedic Treatment Kanth: Trusted Ayurvedic Care for
                Kanth and Moradabad District Patients
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Balprada Ayurvedic Treatment for Kanth Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Who We Are
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Ayurvedic Hospital &amp; Research Center was
                      started in 1991 by Sw. Vaidya Vijay Pal Singh Ji with a
                      vision of ayurvedic healing and social service, and today
                      it brings 35 years of experience to patients coming from
                      Kanth and nearby towns of Moradabad district.
                    </li>
                    <li>
                      The institution brings an ayurvedic chikitsalaya, research,
                      in-house herbal medicines, pathology, yoga, naturopathy and
                      ashram-based care into one trusted ecosystem, so patients
                      do not have to run between different places for every
                      need.
                    </li>
                    <li>
                      Our guiding thought is that every patient deserves calm,
                      honest and disciplined care, which is why consultation,
                      medicine, diet and follow-up are planned together instead
                      of being offered as separate, disconnected steps.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Why Kanth Families Choose Balprada
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families from Kanth look for a place where the vaidya
                      listens patiently, reviews old reports and explains the
                      treatment plan in simple words, and this personal attention
                      is the first thing Balprada tries to give every patient who
                      walks in.
                    </li>
                    <li>
                      Patients who have shared Google reviews describe
                      knowledgeable vaidyas, humble and kind staff, authentic
                      herbal preparations and a serene ashram atmosphere, which
                      together make the visit comfortable for the patient and the
                      attendants.
                    </li>
                    <li>
                      The main branch is located in Moradabad district itself,
                      and a second branch on Delhi Road in Moradabad city gives
                      Kanth patients a choice of where to consult depending on
                      their convenience and travel plans.
                    </li>
                    <li>
                      The ashram and clinic stay open seven days a week, and a
                      free OPD consultation is available on the 15th of every
                      month, which helps families begin their Ayurvedic journey
                      without worrying about the first consultation.
                    </li>
                  </ul>
                </div>
              </div>
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
                      Balprada offers Ayurvedic consultation and lifestyle care
                      for kidney function, swelling, kidney stones and
                      diabetes-linked kidney concerns, and each plan is built
                      around the patient&apos;s own reports, history and current
                      medication.
                    </li>
                    <li>
                      Patients are encouraged to bring old creatinine, urea,
                      ultrasound and other test reports so the vaidya can
                      understand the condition properly before suggesting
                      medicines, diet limits and a daily routine.
                    </li>
                    <li>
                      Kidney care at Balprada works as supportive care alongside
                      the advice of the treating doctor, and no patient is told
                      to stop prescribed medicines or dialysis without proper
                      medical consultation.
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
                      fatty liver, jaundice and weak digestion, which are among
                      the most common concerns that families bring to the OPD.
                    </li>
                    <li>
                      Ayurveda treats digestion as the base of good health, so
                      liver care at Balprada begins with simple corrections in
                      meal timing, oil and spice use, sleep and stress before
                      moving to stronger measures.
                    </li>
                    <li>
                      Blood tests and other diagnostics from the Balprada
                      Pathology Lab help the team track progress during follow-up
                      visits, so the plan can be adjusted calmly and based on
                      actual results.
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
                      illness, offered alongside and never in place of the main
                      treatment advised by the patient&apos;s cancer specialist.
                    </li>
                    <li>
                      Strength and recovery support, diet guidance and stress
                      support are the three focus areas, and family members are
                      included in the conversation so that everyone at home
                      understands what to expect.
                    </li>
                    <li>
                      The team speaks openly about what Ayurvedic care can and
                      cannot do, because honest communication builds the trust
                      that patients and families need during a difficult time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Blood Pressure, Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care is offered for
                      blood pressure, diabetes, obesity, heart concerns and
                      stress, with attention to food habits, physical activity
                      and sleep along with herbal medicines.
                    </li>
                    <li>
                      Personalized support for blood sugar, thyroid function,
                      energy, weight and metabolic balance is available for
                      diabetes, hypothyroidism and hyperthyroidism, based on the
                      patient&apos;s reports and daily routine.
                    </li>
                    <li>
                      Patients on regular allopathic medicines for these
                      conditions are advised to continue them until their own
                      doctor suggests any change, while Balprada works on diet
                      discipline and lifestyle correction.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private, sensitive and personalized Ayurvedic care is
                      available for hormonal balance, menstrual health and
                      general weakness, with enough time given to understand each
                      woman&apos;s symptoms and routine.
                    </li>
                    <li>
                      Care plans combine suitable herbal medicines, nourishing
                      food guidance and gentle yoga, so that recovery feels
                      steady and practical for women managing both home and work.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Treatment Journey Works
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step One: Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the health concern, medical history,
                      reports and current medication before suggesting the next
                      care step, so no plan begins with guesswork.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Step Two: Personalized Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction
                      wherever suitable, and the plan is explained clearly to the
                      patient and family.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Step Three: Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, panchakarma and pathology support are
                      added when the doctor feels they will help, which makes the
                      treatment journey more complete than medicines alone.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step Four: Follow-up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team observe progress, adjust
                      guidance and support long-term discipline, which matters
                      most in chronic conditions where results come through
                      steady effort.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ashram, Panchakarma and Supportive Facilities
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma therapies are planned to support cleansing,
                      balance and recovery after an individual assessment, and
                      they come with doctor-guided planning, food, rest and
                      daily-routine guidance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Meditation and Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga and breath awareness help patients build discipline,
                      strength and calm, while guided meditation supports
                      emotional steadiness and restful sleep during a long
                      healing journey.
                    </li>
                    <li>
                      Naturopathy works with the body&apos;s natural healing
                      capacity through simple, nature-led practices and
                      supportive routines that fit easily into daily life after
                      the patient returns home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Physiotherapy and Pathology Lab
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Professional physiotherapy supports safe movement, mobility
                      and strength alongside the wider care plan, which is useful
                      for patients recovering from long illness or weakness.
                    </li>
                    <li>
                      Balprada Labs offers reliable blood, urine and diagnostic
                      testing support, so many routine checks can be done within
                      the same care environment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines, Diet and Lifestyle Guidance
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. In-House Herbal Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and specialized Ayurvedic medicines under
                      organized conditions with modern support systems, which
                      gives the doctors confidence in the quality of what they
                      prescribe.
                    </li>
                    <li>
                      Patients are guided to take medicines exactly as advised
                      and to keep the vaidya informed about any other treatment
                      they are following, so there is no confusion in the care
                      plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Diet and Daily Routine
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Food guidance is treated as part of treatment, with simple
                      advice on what to eat, what to reduce and when to eat,
                      based on the patient&apos;s condition and local food habits
                      in Kanth and nearby villages.
                    </li>
                    <li>
                      Balprada Enterprises also works with herbal flour, gram
                      flour, tea, spices, oils, avaleh, pickles, murabba and
                      other Ayurvedic products, which supports patients who want
                      cleaner everyday food choices.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Positive Mind, Positive Recovery
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The late Vaidya Shri Vijaypal Singh Ji taught that staying
                      positive gives courage to face difficult circumstances, and
                      this thought still shapes how the Balprada team speaks with
                      patients and families.
                    </li>
                    <li>
                      Balprada Jansewa Sansthan carries the spirit of seva
                      through elder care, Navtarun Ashram, residential support
                      initiatives and Gaushala-based service, showing that the
                      institution cares for people beyond the clinic.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Care for Chronic and Long-Term Conditions
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Why Chronic Illness Needs Patience
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kidney, liver, diabetes and heart conditions develop over
                      years, so Balprada approaches them with realistic
                      expectations, steady medicines and disciplined routines
                      instead of promising quick fixes that families later regret
                      trusting.
                    </li>
                    <li>
                      The team explains each stage of the plan to the patient and
                      attendants, including what improvement may look like, how
                      long review visits are needed and which warning signs mean
                      the patient should contact their treating doctor at once.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Family Involvement in Treatment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Because food, rest and medicine timing are managed at home,
                      family members from Kanth are invited to sit in the
                      consultation, listen to the diet advice and ask questions,
                      which makes the plan much easier to follow after returning.
                    </li>
                    <li>
                      Elderly patients and those with serious illness are given
                      extra time, and the staff, known by patients for their
                      humble and kind behaviour, help attendants understand the
                      routine without hurry.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Who Can Consult at Balprada
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients with long-standing kidney, liver, sugar, thyroid,
                      blood pressure or heart concerns who want a complementary
                      Ayurvedic and lifestyle plan along with their regular
                      medical care.
                    </li>
                    <li>
                      Patients dealing with serious illness who want supportive
                      care for strength, appetite, sleep and emotional balance,
                      planned in a sensitive and honest manner.
                    </li>
                    <li>
                      Women facing hormonal, menstrual or weakness-related
                      concerns who prefer a private and personalized
                      consultation.
                    </li>
                    <li>
                      Families looking for a peaceful ashram environment,
                      panchakarma guidance or disciplined routine support after a
                      long period of illness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Safe and Honest Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Every plan begins with understanding the patient&apos;s
                  history, reports and current medication, so that Ayurvedic
                  medicines are suggested responsibly and do not clash with
                  treatment already running.
                </li>
                <li>
                  Balprada does not ask patients to abandon dialysis, insulin,
                  cancer treatment or other prescribed care, and it encourages
                  patients to keep their treating doctors informed about the
                  Ayurvedic plan.
                </li>
                <li>
                  Progress is reviewed through regular follow-up and, where
                  needed, laboratory tests, and the guidance is adjusted calmly
                  based on how the patient is responding.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visiting Balprada from Kanth
              </h2>

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
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415, open daily from 10:00 AM to 2:00 PM.
                      </li>
                      <li>
                        Call or WhatsApp{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>{" "}
                        to book an appointment, ask about the doctor&apos;s
                        availability or find out what to carry for the first
                        visit.
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
                        Moradabad, Uttar Pradesh 244001, where Vaidya ji is
                        available on Sundays.
                      </li>
                      <li>
                        Please call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting, because Sunday availability can change
                        and advance confirmation saves patients a wasted journey.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Before You Come</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Carry previous prescriptions, test reports, scans and a
                      list of current medicines, so the doctor gets the full
                      picture in the first consultation itself.
                    </li>
                    <li>
                      Free OPD is available on the 15th of every month, and
                      patients from Kanth are welcome to use it for a first
                      consultation.
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