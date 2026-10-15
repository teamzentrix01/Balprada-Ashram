import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicTreatmentInKanth() {
  const faqs = [
    {
      q: "Q1. Is Ayurvedic treatment available for patients from Kanth?",
      a: "Yes. Patients from Kanth can consult the Balprada Main Branch in Tehsil Bilari or the Moradabad Branch on Delhi Road.",
    },
    {
      q: "Q2. Does Balprada have a branch in Kanth?",
      a: "No Kanth branch is listed on the website. Please check the route using the map links on the contact page.",
    },
    {
      q: "Q3. Which conditions do you support?",
      a: "We offer Ayurvedic care for kidney, liver, cancer support, heart, diabetes, thyroid, weight and women&apos;s health concerns.",
    },
    {
      q: "Q4. What are the OPD timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and the Moradabad Branch has Sunday vaidya availability.",
    },
    {
      q: "Q5. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q6. Can I stop my current medicines?",
      a: "No. Never stop prescribed medicines or dialysis without advice from your treating doctor.",
    },
    {
      q: "Q7. How do I book an appointment?",
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
                Ayurvedic Treatment for Kanth Patients at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People in Kanth who want Ayurvedic treatment for long-standing
                  health problems can consult Balprada Ayurvedic Hospital &amp;
                  Research Center, which has served patients since 1991 through
                  its Main Branch in Tehsil Bilari and its Moradabad Branch on
                  Delhi Road in Moradabad district.
                </li>
                <li>
                  Balprada treats the person and not just the report, so the plan
                  brings together consultation, Ayurvedic medicines, diet
                  guidance, lifestyle correction, supportive therapies and
                  regular follow-up.
                </li>
                <li>
                  The website does not list a branch in Kanth, so patients should
                  check the route using the map links on the contact page and
                  call before travelling.
                </li>
                <li>
                  This page explains what Ayurvedic treatment at Balprada looks
                  like, condition by condition and step by step, so that patients
                  and families know what to expect before the first visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Ayurvedic Treatment Works at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Holistic Healing
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada&apos;s approach to holistic healing looks at body,
                      mind, diet, daily routine and environment, instead of
                      focusing only on the symptom that brought the patient to
                      the clinic.
                    </li>
                    <li>
                      This is why every consultation includes questions about
                      food habits, sleep, stress and daily activity, along with
                      the medical history and the current treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Supportive, Not a Replacement
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic care at Balprada is offered as supportive care,
                      and it does not promise cures for serious conditions.
                    </li>
                    <li>
                      Patients should never stop prescribed medicines, dialysis
                      or cancer treatment without advice from their treating
                      doctor, and they should tell every doctor about everything
                      they take.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Personalised Plans
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      No two plans are the same, because the vaidya adjusts
                      medicines, food rules and routines to the patient&apos;s
                      age, strength, condition and reports.
                    </li>
                    <li>
                      Frequency and suitability of supportive therapies are
                      decided only after an individual assessment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Treatment Journey Step by Step
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Consultation and Review of Reports
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, history, reports and
                      current medication before suggesting the next care step, so
                      please bring previous prescriptions, scans and recent test
                      reports.
                    </li>
                    <li>
                      Time is taken to listen to the patient and the family, and
                      questions about appetite, digestion, sleep, energy and
                      stress help the vaidya see the full picture.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Tests Where Needed
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The in-house Balprada Pathology Lab provides Kidney
                      Function Test, Liver Function Test, Complete Blood Count,
                      Diabetes Profile with HbA1c, Lipid Profile, Thyroid
                      Profile, Urine Routine and Microscopy, and Vitamin B12 and
                      Vitamin D testing.
                    </li>
                    <li>
                      Other doctor-advised tests may also be available, and
                      repeat reports help the team judge progress honestly over
                      time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, and the plan is explained clearly to the patient
                      and family.
                    </li>
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines, which supports
                      consistent quality over long treatment plans.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Supportive Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma and
                      physiotherapy are suggested only where they suit the
                      patient, and they run alongside the Ayurvedic consultation
                      as part of one coordinated plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 5: Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team observe progress, review
                      reports, symptoms, diet and response to medicines, and
                      adjust guidance as the patient&apos;s needs change.
                    </li>
                    <li>
                      Family members are welcome to join so diet changes, medicine
                      timings and warning signs are understood by everyone who
                      helps at home.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Treatment by Health Concern
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
                      and diabetes-related kidney concerns, with attention to
                      diet, hydration routines and regular monitoring.
                    </li>
                    <li>
                      Severe pain, fever, blood in the urine or inability to pass
                      urine need prompt medical attention before or alongside any
                      Ayurvedic plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fatty liver care focuses on lifestyle correction and guided
                      Ayurvedic support for liver metabolism, while jaundice care
                      involves assessment, diet discipline and monitored care.
                    </li>
                    <li>
                      Weak digestion is supported through food timing, daily
                      routine and suitable medicines, and yellowing of the eyes
                      or skin should always get a prompt medical evaluation.
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
                      Patients should tell their oncologist about every herb or
                      remedy they use, because some can interact with cancer
                      treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart and Blood Pressure Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for blood pressure combines daily routines, stress
                      management and monitored follow-up, and it is personalised
                      to the patient&apos;s health status.
                    </li>
                    <li>
                      Patients should keep taking prescribed heart and blood
                      pressure medicines unless their own doctor advises a
                      change.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diabetes
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes care focuses on food discipline, physical
                      activity, prescribed care and blood-sugar monitoring, which
                      together support long-term management.
                    </li>
                    <li>
                      Diabetes Profile and HbA1c testing are available at the
                      Balprada lab, so patients can follow their numbers between
                      visits.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Thyroid Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      For hypothyroidism, consultations consider energy, weight,
                      digestion and thyroid reports while planning supportive
                      care.
                    </li>
                    <li>
                      For hyperthyroidism, the doctor reviews thyroid reports,
                      heart rate, sleep, appetite and current medicines before
                      offering support, and prescribed medicines should only be
                      changed under the treating doctor&apos;s guidance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    7. Weight and Metabolic Balance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Sustainable routines for food, movement, sleep and stress
                      may support healthier weight and metabolic balance, and the
                      vaidya sets realistic goals instead of crash plans.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    8. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Women&apos;s health needs privacy, careful listening and
                      individualised guidance, so Balprada offers sensitive care
                      for hormonal balance, menstrual health, weakness and
                      maternal wellness.
                    </li>
                    <li>
                      Hormonal balance support looks at diet, sleep and stress,
                      menstrual consultations address cycle discomfort and
                      routine-related concerns, and weakness is approached
                      through nutrition and suitable Ayurvedic support.
                    </li>
                    <li>
                      Maternal wellness guidance covers nutrition, rest and
                      overall wellbeing, and expecting mothers should always
                      continue regular check-ups with their own doctor.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Therapies in Detail
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures that supports recovery, and the doctor
                      plans it after assessing each patient.
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
                    2. Yoga
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga at Balprada includes breathing exercises, posture
                      practice, routine building and stress support, and it is
                      coordinated with the patient&apos;s overall treatment plan.
                    </li>
                    <li>
                      Session frequency and suitability are decided after an
                      individual assessment, so patients with weakness or health
                      limits receive gentle, appropriate practices.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy supports the body&apos;s own healing through
                      natural therapies, detox support and lifestyle correction,
                      using simple, nature-based methods and steady daily
                      routines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Meditation and Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Guided meditation and breath awareness support emotional
                      steadiness and restful sleep, while physiotherapy begins
                      with a mobility assessment and moves into guided
                      rehabilitation.
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
                  Dr. U. S. Sharma has more than 20 years of Ayurvedic practice
                  and consults on kidney, liver and other chronic conditions at
                  Balprada.
                </li>
                <li>
                  Dr. Chetan Anand, linked with Balprada Herbal Wellness Private
                  Limited, has over seven years of experience in herbal product
                  research and development and advises on free health camps.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet, Lifestyle and Wellness Products
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fresh, simple, home-cooked meals taken at regular times are
                  generally encouraged, and the vaidya gives a personal food plan
                  instead of a generic list.
                </li>
                <li>
                  Balprada Enterprises offers herbal tea and spices, Ayurvedic
                  oils, avaleh and herbal preparations, herbal and gram flour,
                  and pickle, murabba and dalia, and enquiries are answered by
                  phone, WhatsApp or email.
                </li>
                <li>
                  Patients should ask the vaidya before using any oil or herbal
                  product, because suitability depends on the person and the
                  condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Habits That Support Treatment Between Visits
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat at regular times, keep dinner light and early, and follow
                  the diet rules given by your vaidya instead of copying advice
                  from social media or neighbours.
                </li>
                <li>
                  Take medicines exactly as explained, and keep a small notebook
                  of symptoms, sleep, appetite and blood sugar or blood pressure
                  readings so that you can show it at every follow-up visit.
                </li>
                <li>
                  Walk or practise gentle yoga as advised, keep stress low through
                  breathing and meditation, and avoid self-medication with
                  painkillers or unknown herbal powders.
                </li>
                <li>
                  Repeat your tests at the interval suggested by the doctor,
                  because regular reports help the team judge progress honestly
                  and plan the next step with confidence.
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
                  Increased thirst, frequent urination, unexplained weight
                  change, irregular periods or persistent weakness can point to
                  diabetes, thyroid or hormonal concerns that deserve a proper
                  review.
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
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they often mention the natural
                  ashram surroundings and Ayurvedic discipline.
                </li>
                <li>
                  Reviews speak of authentic herbal preparations, highly
                  knowledgeable vaidyas and a serene atmosphere, and visitors
                  remember the humility and warmth of the staff.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visiting from Kanth
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

              <div className="mb-6">
                <p className="mb-2 font-semibold">Free OPD and Booking</p>

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
                  <li>
                    Severe pain, breathlessness, heavy bleeding or sudden
                    worsening are emergencies, and the patient should go to the
                    nearest hospital first.
                  </li>
                </ul>
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