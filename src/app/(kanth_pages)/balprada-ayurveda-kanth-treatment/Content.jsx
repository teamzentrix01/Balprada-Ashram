import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedaKanthTreatment() {
  const faqs = [
    {
      q: "Does Balprada treat patients from Kanth?",
      a: "Yes, patients from Kanth can consult at both branches.",
    },
    {
      q: "What should I bring for consultation?",
      a: "Past prescriptions, recent reports, current medicines and notes on symptoms and diet.",
    },
    {
      q: "What are the OPD timings?",
      a: "10:00 AM to 2:00 PM, and free OPD is held on the 15th of every month.",
    },
    {
      q: "Can I visit for chronic conditions?",
      a: "Yes, long-term conditions are supported through consultation, medicines, diet guidance and follow-up.",
    },
    {
      q: "Is pathology testing available?",
      a: "Yes, Balprada Labs offers blood, urine and other tests.",
    },
    {
      q: "Should I stop my other medicines?",
      a: "No, continue them unless your own doctor advises a change.",
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
                Balprada Ayurveda Kanth Treatment: Careful, Personalized
                Ayurvedic Care for Kanth Families
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Treatment at Balprada for Patients from Kanth
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. The Balprada Idea of Ayurveda
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Ayurvedic Hospital &amp; Research Center has
                      followed the path of traditional Ayurveda since 1991, when
                      Sw. Vaidya Vijay Pal Singh Ji started the institution with
                      a vision of healing and social service, and that vision
                      still guides how patients from Kanth and nearby areas are
                      treated.
                    </li>
                    <li>
                      Ayurveda at Balprada is not limited to a packet of
                      medicines, because the team looks at food habits, sleep,
                      stress and daily routine along with symptoms, so the
                      treatment reaches the cause and not just the complaint.
                    </li>
                    <li>
                      The founder&apos;s belief that staying positive gives
                      courage in difficult circumstances remains part of the
                      culture, and patients are treated with patience, respect
                      and a calm voice.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Why Kanth Patients Visit Balprada
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kanth lies in Moradabad district, and Balprada&apos;s main
                      branch also stands in Moradabad district, so patients can
                      reach a long-established Ayurvedic chikitsalaya without
                      travelling to a far-off city.
                    </li>
                    <li>
                      The Moradabad branch on Delhi Road gives a second option,
                      which is useful for families who find it easier to come
                      through the city or who plan the visit on a Sunday when
                      Vaidya ji is available there.
                    </li>
                    <li>
                      Many patients arrive with long-running problems and old
                      reports, and they value a place where the vaidya studies
                      the full history before speaking about medicines.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Team
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Experienced Vaidya Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. U. S. Sharma serves as CMS at Balprada Ayurvedic
                      Hospital and Research Centre and has more than 20 years of
                      Ayurvedic practice, with a focus on kidney and liver
                      conditions, long-term chronic disease care and general
                      Ayurvedic consultation.
                    </li>
                    <li>
                      Because experience in chronic care matters when patients
                      come with several linked problems, families from Kanth can
                      expect the consultation to cover the whole condition and
                      not a single symptom.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Research and Herbal Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. Chetan Anand is associated with Balprada Herbal
                      Wellness Private Limited and has more than 7 years of
                      experience in herbal product research and development, and
                      he also advises on free health camps.
                    </li>
                    <li>
                      This link between the clinic and the research and pharmacy
                      side helps keep medicine preparation and patient care
                      connected.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Consultation Begins
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Full Health Review
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor considers symptoms, medical history, current
                      treatment, food habits, sleep, stress and daily routine
                      before suggesting any Ayurvedic guidance, which is why the
                      first visit takes time and should not be rushed.
                    </li>
                    <li>
                      Diagnostic reports are reviewed where relevant, so patients
                      should not feel worried if they have no new tests, because
                      the lab can support that step.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. What to Bring from Kanth
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring past prescriptions, recent test reports, the
                      medicines you are currently taking and brief notes on your
                      symptoms, how long you have had them and what your daily
                      diet looks like.
                    </li>
                    <li>
                      If an attendant usually helps with food or medicine at
                      home, bringing that person along makes it easier to follow
                      the advice later.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. OPD Timings and Appointments
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      OPD consultation runs from 10:00 AM to 2:00 PM at the main
                      branch, and the team advises calling ahead because
                      availability can vary by branch.
                    </li>
                    <li>
                      You can book through the website appointment page, call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      or{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>
                      , send a WhatsApp message to{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      or write to{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>
                      .
                    </li>
                    <li>
                      A free OPD consultation is available on the 15th of every
                      month, and new patients from Kanth are welcome to use it.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions Supported with Ayurvedic Care
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic and lifestyle care is offered for kidney failure,
                      kidney stones, swelling and diabetes-linked kidney
                      concerns, with the plan shaped by reports, diet and
                      routine.
                    </li>
                    <li>
                      Because kidney disease is serious, patients are advised to
                      stay in touch with their own doctor, and prescribed
                      medicines or dialysis should not be changed without medical
                      advice.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fatty liver, jaundice and weak digestion are supported
                      through medicine, diet and routine-based care, with simple
                      changes in meal timing and food choices forming the first
                      step.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Supportive care is offered for strength and recovery, diet
                      guidance and stress support during serious illness, and it
                      works alongside the treatment advised by the
                      patient&apos;s specialist.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Diabetes, Thyroid and Heart Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      For long-term diabetes management, the care plan supports
                      food discipline, physical activity, prescribed care and
                      regular blood sugar monitoring, instead of promising a
                      quick cure.
                    </li>
                    <li>
                      Thyroid concerns such as hypothyroidism and hyperthyroidism,
                      as well as blood pressure and obesity, are supported with
                      personalized medicine and lifestyle guidance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private and sensitive care is available for hormonal
                      balance, menstrual health and weakness, with time to listen
                      to the patient without hurry.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Therapies
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is planned after individual assessment to
                      support cleansing, balance and recovery, with traditional
                      procedures, doctor-guided planning and guidance on food,
                      rest and daily routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Meditation and Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga builds balance across body, mind and breath,
                      meditation supports sleep and emotional steadiness, and
                      naturopathy uses simple nature-led practices that patients
                      can carry on at home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy supports safe movement, mobility, strength
                      and recovery through mobility assessment and guided
                      rehabilitation within the larger care plan.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pathology Lab Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Tests Available
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Labs offers Complete Blood Count, Thyroid Profile,
                      Liver Function Test, Kidney Function Test, Diabetes Profile
                      with blood sugar and HbA1c, Lipid Profile, Urine Routine
                      and Microscopy, and Vitamin B12 and Vitamin D tests.
                    </li>
                    <li>
                      Other routine or doctor-advised tests may also be
                      available, so patients should call to confirm the test,
                      preparation and charges.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Why the Lab Matters
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reports help the doctor understand the condition and track
                      progress, which makes follow-up visits more useful for
                      patients who come from Kanth at intervals.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines, Products and Seva
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. In-House Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines in an organized
                      way at the main branch, supported by modern systems.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Herbal Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients can ask about herbal tea, spices, oils, avaleh,
                      herbal flour, gram flour, pickles and murabba through the
                      contact form or by phone.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Jansewa Sansthan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The social service wing runs Vridhashram, Navtarun Ashram,
                      residential school support and Gaushala seva, showing that
                      Balprada works for the community beyond the clinic.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ashram Environment and Patient Experience
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Peaceful Healing Setting
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada Ashram brings naturopathy, yoga, meditation,
                      panchakarma and physiotherapy together in a peaceful care
                      environment backed by 35 years of experience, which helps
                      patients rest, follow routines and stay mentally calm
                      during treatment.
                    </li>
                    <li>
                      The ashram and clinic stay open seven days a week, so
                      families from Kanth do not have to worry about finding a
                      suitable day for a visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. What Patients Say
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Google reviews describe excellent guidance from Vaidya ji
                      and the hospital team, genuine herbal preparations, a
                      serene natural surrounding and staff who are humble, kind
                      and quick to help.
                    </li>
                    <li>
                      Patients from Uttar Pradesh and Moradabad also mention a
                      warm and welcoming atmosphere, which matters a great deal
                      to families who are anxious about a long illness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your First Visit Step by Step
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step One: Contact
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or message on WhatsApp before leaving Kanth, so the
                      team can confirm timing, the doctor&apos;s availability at
                      your chosen branch and anything you should carry.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Step Two: Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya listens to your symptoms and history, reviews
                      reports and understands your current medicines, food
                      habits, sleep and stress before suggesting a next step.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Step Three: Personalized Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic medicines, diet guidance and lifestyle correction
                      are planned in a practical way, and supportive facilities
                      such as yoga, panchakarma or diagnostics are added only
                      when they are suitable.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step Four: Review
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Progress is reviewed regularly so that the guidance remains
                      practical and responsible, and the plan is adjusted as the
                      patient&apos;s condition changes.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Consider Balprada Ayurveda
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Long-Term Patients
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      People living with kidney, liver, sugar, thyroid, blood
                      pressure or heart concerns who want to add Ayurvedic and
                      lifestyle support to their ongoing medical care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Families Needing Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families who feel confused after many reports and opinions,
                      and want a vaidya to explain the condition, diet and
                      routine in clear and simple language.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Women and Elderly Patients
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Women seeking private, personalized care, and elderly
                      patients who need a calm, patient setting where attendants
                      can also ask questions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reminders for Safe Treatment
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Emergencies should always go to urgent medical care first, and
                  Ayurvedic care should be seen as supportive guidance and not a
                  replacement for emergency treatment.
                </li>
                <li>
                  Tell the vaidya about every medicine, supplement or home remedy
                  you are using, so that the plan remains safe and clear for
                  everyone involved.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-up Care for Kanth Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. How Follow-up Works
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up depends on the condition, and the team may review
                      reports, symptoms, diet and how the patient responds to
                      medicines over time.
                    </li>
                    <li>
                      Regular review lets the vaidya adjust the guidance, which
                      is important because chronic conditions respond slowly and
                      need steady effort.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Practical Tips
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Note the date of your next visit, keep all reports in one
                      folder and tell the vaidya honestly about missed medicines
                      or diet slips.
                    </li>
                    <li>
                      Call before travelling from Kanth, especially for the
                      Sunday availability at the Moradabad branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Honest Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada does not promise guaranteed cures, and patients
                      with serious illness should seek emergency medical care
                      first when needed and keep their treating doctors informed.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">Visit Balprada</h2>

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
                        Bilari, District Moradabad, Uttar Pradesh 244415, daily
                        10:00 AM to 2:00 PM, call{" "}
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
                        Uttar Pradesh 244001, Sunday vaidya availability, call{" "}
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