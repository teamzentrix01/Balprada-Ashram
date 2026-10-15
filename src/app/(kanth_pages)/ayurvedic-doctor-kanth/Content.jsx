import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicDoctorKanth() {
  const faqs = [
    {
      q: "Q1. Can patients from Kanth consult an Ayurvedic doctor at Balprada?",
      a: "Yes. Patients from Kanth can consult the vaidyas at the Main Branch in Tehsil Bilari or the Moradabad Branch on Delhi Road.",
    },
    {
      q: "Q2. Does Balprada have a branch in Kanth?",
      a: "No Kanth branch is listed on the website. Please check the route using the map links on the contact page.",
    },
    {
      q: "Q3. Who are the doctors at Balprada?",
      a: "The team page lists Dr. U. S. Sharma, with more than 20 years of Ayurvedic practice, and Dr. Chetan Anand, who works in herbal research and health camp advisory.",
    },
    {
      q: "Q4. What are the consultation timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "Q5. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q6. Should I bring my reports?",
      a: "Yes. Bring previous prescriptions, test reports, scans and a list of current medicines.",
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
                Consult an Ayurvedic Doctor from Kanth at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients and families in Kanth who want to consult an
                  experienced Ayurvedic doctor for a long-standing health problem
                  can meet the vaidyas at Balprada Ayurvedic Hospital &amp;
                  Research Center in Moradabad district.
                </li>
                <li>
                  Balprada has served patients since 1991, and it offers
                  consultation, in-house herbal medicines, pathology tests, yoga,
                  naturopathy and panchakarma support, so that the
                  doctor&apos;s advice is backed by tests, medicines and
                  follow-up.
                </li>
                <li>
                  The Main Branch in Tehsil Bilari is open daily, and the
                  Moradabad Branch on Delhi Road has Vaidya ji available on
                  Sundays.
                </li>
                <li>
                  The website does not list a branch in Kanth, so patients should
                  check the route using the map links on the contact page and
                  call before travelling.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Vaidyas at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Dr. U. S. Sharma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. U. S. Sharma is listed on the Balprada team page with
                      more than 20 years of experience in Ayurvedic practice.
                    </li>
                    <li>
                      He consults on kidney and liver concerns, chronic disease
                      care and general Ayurvedic consultation, which are the
                      areas for which most families approach Balprada.
                    </li>
                    <li>
                      Patients are welcome to ask the hospital team, when
                      booking, which doctor will see them, so that the right
                      reports and questions are ready for the visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Dr. Chetan Anand
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. Chetan Anand is associated with Balprada Herbal
                      Wellness Private Limited and brings more than seven years
                      of experience in herbal product research and development.
                    </li>
                    <li>
                      His listed focus areas are herbal product research,
                      pharmacy development and health camp advisory, which
                      supports the quality of the medicines that reach patients
                      and the free health camps run by the institution.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. The Founder&apos;s Legacy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada was started in 1991 by Sw. Vaidya Vijay Pal Singh
                      Ji, whose vision of Ayurvedic healing and seva still guides
                      how patients are heard and treated.
                    </li>
                    <li>
                      His message that staying positive gives courage in
                      difficult circumstances remains part of the culture of the
                      hospital, because hope and discipline are treated as real
                      support during illness.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Research and Service Team
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website also mentions a research team and service-minded
                      staff, including pathology staff and ashram volunteers, who
                      work with the doctors so that patients and families feel
                      guided at every step.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens When You Consult the Vaidya
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Listening First
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, medical history, daily
                      routine, current treatment and treatment goals before
                      suggesting any next step.
                    </li>
                    <li>
                      Questions about appetite, digestion, sleep, energy, stress
                      and food habits help the vaidya understand the whole person
                      instead of only one symptom.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Examining Your Reports
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Please bring previous prescriptions, blood and urine
                      reports, scans and a list of current medicines, because the
                      doctor plans the Ayurvedic guidance around what you already
                      take.
                    </li>
                    <li>
                      Where needed, tests can be done at the Balprada Pathology
                      Lab, including Kidney Function Test, Liver Function Test,
                      Complete Blood Count, Diabetes Profile with HbA1c, Lipid
                      Profile, Thyroid Profile, Urine Routine and Microscopy, and
                      Vitamin B12 and Vitamin D.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Making a Personal Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The plan may include Ayurvedic medicines, diet guidance,
                      lifestyle correction and supportive therapies, and it is
                      adjusted to the patient&apos;s age, strength and overall
                      condition.
                    </li>
                    <li>
                      The vaidya explains medicines, timings and food rules in
                      simple language, and family members are encouraged to
                      listen so that nothing is missed at home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Reviewing Progress
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the doctor review reports, symptoms,
                      diet and response to medicines, and change the guidance
                      when the patient&apos;s needs change.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Our Doctors Support
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
                      The doctor studies symptoms, history, current treatment,
                      food habits, sleep and stress before suggesting any
                      guidance, and patients must never stop prescribed medicines
                      or dialysis without asking their treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is offered for fatty liver, jaundice, weak digestion
                      and metabolic imbalance, through food guidance, routine
                      correction and monitored herbal care.
                    </li>
                    <li>
                      Yellowing of the skin or eyes can point to a serious
                      condition, so patients should get a prompt medical
                      evaluation and share the reports with the vaidya.
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
                    4. Heart and Blood Pressure Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for blood pressure combines daily routines, stress
                      management and monitored follow-up, and patients should
                      keep taking prescribed medicines unless their own doctor
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
                      Diabetes care focuses on food discipline, physical
                      activity, prescribed care and blood-sugar monitoring, which
                      together support long-term management.
                    </li>
                    <li>
                      For hypothyroidism and hyperthyroidism, the doctor reviews
                      thyroid reports, energy, weight, digestion, heart rate,
                      sleep and current medicines before offering supportive
                      care.
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
                      individualised guidance, so the doctor offers sensitive
                      care for hormonal balance, menstrual health, weakness and
                      maternal wellness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Doctor for Your Concern
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. When to Consult an Ayurvedic Doctor
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consider a consultation when a health problem has lasted
                      for a long time, when reports keep showing the same
                      abnormal values, or when you want to add diet and lifestyle
                      support to your existing treatment.
                    </li>
                    <li>
                      Families dealing with kidney, liver, diabetes, thyroid,
                      blood pressure or serious illness often benefit from a
                      consultation that looks at food, routine and stress along
                      with medicines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. When to See a Hospital First
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Severe pain, breathlessness, heavy bleeding, very low urine
                      output, high fever or sudden worsening are emergencies, and
                      the patient should go to the nearest hospital before
                      anything else.
                    </li>
                    <li>
                      Ayurvedic care is supportive and does not replace emergency
                      or specialist treatment, so patients on dialysis,
                      chemotherapy or heart treatment should continue it and
                      inform every doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Questions Worth Asking the Doctor
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask what the plan includes, how long it is likely to
                      continue, when the first review will be and which tests
                      should be repeated.
                    </li>
                    <li>
                      Ask which foods to prefer and avoid, how to take each
                      medicine, and what to do if symptoms suddenly worsen.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities Guided by the Doctor
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures planned after assessment by the
                      doctor, who also decides its frequency and suitability.
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
                      stress support, naturopathy offers nature-based therapies,
                      detox support and lifestyle correction, and meditation
                      supports emotional steadiness and restful sleep.
                    </li>
                    <li>
                      All three run alongside the Ayurvedic consultation and are
                      coordinated with the patient&apos;s overall treatment plan.
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
                      strength and safe movement.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines Prepared Under the Balprada Name
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness Private Limited prepares traditional
                  and patent Ayurvedic medicines, which supports consistent
                  quality for patients who follow long treatment plans.
                </li>
                <li>
                  Patients should take medicines only as explained by the vaidya,
                  and avoid unknown herbal powders or self-medication with
                  painkillers.
                </li>
                <li>
                  Balprada Enterprises also offers herbal tea and spices,
                  Ayurvedic oils, avaleh and herbal preparations, herbal and gram
                  flour, and pickle, murabba and dalia, with enquiries answered
                  by phone, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Free OPD and Jansewa
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  and the branch should be confirmed by phone before travelling.
                </li>
                <li>
                  Balprada Jansewa Sansthan has offered free and subsidised
                  Ayurvedic healthcare for underprivileged patients since 1991,
                  alongside the Vridhashram, the Navtarun Ashram, residential
                  school support and gaushala seva.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Following the Doctor&apos;s Advice at Home
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home-cooked food at regular times and follow
                  the diet rules given by your vaidya, instead of copying advice
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
                Signs That Need a Doctor&apos;s Attention
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
                What Patients Say About Our Vaidyas
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they often mention the natural
                  ashram surroundings and Ayurvedic discipline.
                </li>
                <li>
                  A Google review from Dr. Jeetesh Vishwas speaks of
                  knowledgeable vaidyas, authentic herbal formulations and a
                  serene, healing atmosphere for kidney, liver and chronic
                  illness care.
                </li>
                <li>
                  Other visitors remember the humility and warmth of the staff,
                  who greet everyone with a smile and go out of their way to
                  help.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Meeting the Doctor from Kanth
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
                <p className="mb-2 font-semibold">Booking</p>

                <ul className="list-disc space-y-2 pl-5 text-black">
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

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. Phone
                  and WhatsApp:{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001. Phone:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
              </ul>
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