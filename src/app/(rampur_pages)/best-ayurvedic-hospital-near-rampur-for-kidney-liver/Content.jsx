import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalKidneyLiverCare() {
  const faqs = [
    {
      q: "Q1. Is there an Ayurvedic hospital near Rampur for kidney and liver problems?",
      a: "Balprada has a Main Branch in Bilari and a Moradabad Branch on Delhi Road, both in the Moradabad region, and it offers Ayurvedic care for kidney and liver concerns.",
    },
    {
      q: "Q2. Which kidney and liver conditions do you support?",
      a: "We support kidney failure, kidney stones, swelling, diabetes-related kidney concern, fatty liver, jaundice and weak digestion.",
    },
    {
      q: "Q3. Can Ayurveda replace dialysis or my current medicines?",
      a: "No. Ayurvedic care is supportive, and you should never stop dialysis or prescribed medicines without advice from your treating doctor.",
    },
    {
      q: "Q4. Can I get KFT and LFT tests there?",
      a: "Yes. The Balprada Pathology Lab offers Kidney Function Test, Liver Function Test and other blood and urine tests.",
    },
    {
      q: "Q5. What are the OPD timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and the Moradabad Branch has Sunday vaidya availability.",
    },
    {
      q: "Q6. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
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
                Balprada Ayurvedic Hospital: Kidney and Liver Care for Rampur
                Families
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families from Rampur who are searching for a dependable
                  Ayurvedic hospital for kidney and liver concerns can consult
                  Balprada Ayurvedic Hospital &amp; Research Center, which has
                  served patients across the Moradabad region since 1991.
                </li>
                <li>
                  Kidney and liver problems are rarely simple, because they often
                  travel with diabetes, high blood pressure, weak digestion,
                  swelling and long-term tiredness, so Balprada looks at the
                  complete health picture instead of one report alone.
                </li>
                <li>
                  Care here is built on consultation, review of reports, in-house
                  Ayurvedic medicines, diet discipline, lifestyle correction and
                  regular follow-up, with yoga, naturopathy, panchakarma and a
                  pathology lab available as supportive facilities.
                </li>
                <li>
                  The Main Branch and ashram are open seven days a week, so
                  patients from Rampur can plan a visit without waiting for one
                  special day, although a call before travelling is always
                  recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital &amp; Research Center
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Legacy of Seva
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh
                      Ji with a vision of Ayurvedic healing and social service,
                      and that spirit of seva continues to guide how patients and
                      families are treated today.
                    </li>
                    <li>
                      The institution brings together an Ayurvedic chikitsalaya,
                      research, herbal wellness, pathology, yoga, naturopathy and
                      ashram-based service, so patients find many forms of
                      support within one trusted setting.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Mission and Approach
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our mission is to offer reliable Ayurvedic care for chronic
                      and serious conditions through consultation, self-prepared
                      medicines, lifestyle guidance and compassionate service.
                    </li>
                    <li>
                      The care plan may include Ayurvedic medicines, diet
                      guidance, lifestyle correction and supportive facilities,
                      and progress is reviewed regularly so the guidance remains
                      practical and responsible.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kidney Care at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Reduced Kidney Function and Kidney Failure
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reduced kidney function needs careful assessment, steady
                      diet support and continuous monitoring, and the vaidya
                      first studies symptoms, medical history, current treatment,
                      food habits, sleep, stress and daily routine before
                      suggesting any guidance.
                    </li>
                    <li>
                      Patients are asked to bring all earlier prescriptions,
                      creatinine and urea reports, ultrasound scans and dialysis
                      records, so that the Ayurvedic plan is made with the full
                      picture in view.
                    </li>
                    <li>
                      Ayurvedic care is offered as supportive care, and patients
                      must never stop prescribed medicines or dialysis without
                      speaking to their treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Kidney Stones
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      For kidney stones, Ayurvedic consultation supports urinary
                      comfort, hydration routines and dietary discipline, and the
                      vaidya explains which habits may be worth changing in daily
                      life.
                    </li>
                    <li>
                      Severe pain, fever, blood in the urine or inability to pass
                      urine are warning signs that need prompt medical attention
                      before or alongside any Ayurvedic plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Swelling in Feet, Face or Body
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Persistent swelling may need kidney, liver and metabolic
                      assessment, which is why guided care and proper reports
                      matter more than treating swelling as a small, passing
                      problem.
                    </li>
                    <li>
                      Patients should report any sudden increase in swelling,
                      rapid weight gain or breathlessness without delay.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Diabetes-Related Kidney Concern
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes-related kidney stress is approached through diet,
                      sugar control and regular follow-up, and patients with
                      diabetes are advised to get kidney checks at a regular
                      interval.
                    </li>
                    <li>
                      Because Balprada also provides diabetes and thyroid care,
                      patients do not need to look in different places for each
                      concern.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Liver and Digestive Care at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Fatty Liver
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fatty liver care focuses on lifestyle correction and guided
                      Ayurvedic support for liver metabolism, and the vaidya
                      looks at food habits, sleep, stress and daily routine along
                      with test reports.
                    </li>
                    <li>
                      Weight, blood sugar and daily activity are discussed openly,
                      because liver health is closely linked with metabolism and
                      routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Jaundice
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Jaundice care involves assessment, diet discipline and
                      monitored care, and regular follow-up helps the team watch
                      how the patient is responding.
                    </li>
                    <li>
                      Yellowing of the skin or eyes can point to a serious
                      condition, so patients should get a prompt medical
                      evaluation and share the reports with the Balprada vaidya.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Weak Digestion
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Weak digestion is supported through food timing, daily
                      routine and suitable medicines, and patients receive simple
                      guidance on regular meals, early dinner and avoiding heavy
                      or oily food habits.
                    </li>
                    <li>
                      Digestion, liver health and metabolism are linked, so a
                      good routine often helps several concerns at the same time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Metabolic Balance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The team looks at the links between liver health, weight,
                      blood sugar and daily routine, so the plan supports the
                      patient&apos;s wider metabolic balance rather than a single
                      organ.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Kidney and Liver Care Are Often Planned Together
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The kidneys and liver both help the body clear waste, so
                  tiredness, swelling, poor appetite and changes in urine or
                  digestion can sometimes overlap and need a combined assessment.
                </li>
                <li>
                  Long-standing diabetes, high blood pressure, excess weight and
                  frequent use of painkillers can strain both organs, which is
                  why the vaidya reviews food, medicines and lifestyle together.
                </li>
                <li>
                  Seeing one doctor who understands both areas saves patients from
                  carrying files between different clinics and from receiving
                  advice that does not fit together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Care Process
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, history, reports and
                      current medication before suggesting the next care step,
                      and time is taken to listen to the patient and the family.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, and each plan is adjusted to the patient&apos;s
                      age, strength and overall condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma and
                      physiotherapy are suggested only where suitable, with
                      panchakarma planned after individual assessment to support
                      cleansing, balance and recovery.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team review reports, symptoms,
                      diet and response to medicines, and family members are
                      welcome to join so everyone understands the plan.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Pathology Lab
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The in-house lab provides blood and urine testing to support
                  kidney, liver, cancer and diabetes patients, so reports can be
                  repeated without sending patients to many different places.
                </li>
                <li>
                  Available tests include Kidney Function Test, Liver Function
                  Test, Complete Blood Count, Diabetes Profile with HbA1c, Lipid
                  Profile, Thyroid Profile, Urine Routine and Microscopy, and
                  Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Other doctor-advised tests may also be available, so please ask
                  the lab team about your requirement when you call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Herbal Research
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
                <li>
                  Balprada Herbal Wellness prepares traditional Ayurvedic
                  medicines, which supports consistent quality for patients who
                  follow long treatment plans.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fresh, simple, home-cooked meals taken at regular times are
                  generally encouraged, and the vaidya gives a personal plan
                  because the needs of kidney patients and liver patients can
                  differ.
                </li>
                <li>
                  Patients are advised to avoid self-medication with painkillers
                  or unknown herbal powders, and to keep a small notebook of
                  symptoms, sleep and appetite for each follow-up visit.
                </li>
                <li>
                  Gentle walking, yoga and breathing practice are included where
                  the patient&apos;s strength allows, because steady routine
                  supports digestion, energy and calm.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That Need a Kidney or Liver Check-Up
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Swelling around the eyes, feet or ankles, foamy or reduced
                  urine, burning while passing urine or blood in the urine are
                  reasons to book a consultation and get a kidney function test
                  done.
                </li>
                <li>
                  Constant tiredness, poor appetite, nausea, heaviness after
                  meals, bloating, a swollen abdomen or yellowing of the eyes and
                  skin can be linked to liver or digestive trouble and should not
                  be ignored.
                </li>
                <li>
                  People with diabetes, high blood pressure, a history of stones,
                  excess weight, long-term painkiller use or a family history of
                  kidney or liver disease are advised to check their reports at
                  least once a year.
                </li>
                <li>
                  Severe pain, breathlessness, vomiting that does not stop,
                  confusion or very low urine output are emergencies, and the
                  patient should go to the nearest hospital immediately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A Google review from Dr. Jeetesh Vishwas calls Balprada a place
                  for kidney, liver and chronic illness Ayurvedic care, with
                  knowledgeable vaidyas, authentic herbal formulations and a
                  serene, healing atmosphere.
                </li>
                <li>
                  Other patients mention excellent guidance from Vaidya ji,
                  genuine herbal preparations, and humble, helpful staff who make
                  families feel welcome and cared for.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Rampur Patients Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice and a
                  service-first spirit give patients and families a sense of
                  trust.
                </li>
                <li>
                  <span className="font-semibold">
                    Kidney and liver care under one roof:
                  </span>{" "}
                  consultation, medicines, diagnostic tests and supportive
                  therapies are available within one institution.
                </li>
                <li>
                  <span className="font-semibold">
                    Open throughout the week:
                  </span>{" "}
                  the ashram and clinic stay open seven days a week, with Main
                  Branch consultation from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  <span className="font-semibold">
                    Free OPD on the 15th of every month:
                  </span>{" "}
                  families new to Ayurveda can begin with a consultation, and the
                  branch should be confirmed by phone.
                </li>
                <li>
                  <span className="font-semibold">Honest guidance:</span>{" "}
                  patients are told clearly that Ayurvedic care is supportive and
                  that specialist or emergency treatment must not be stopped.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visiting from Rampur
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
                <p className="mb-2 font-semibold">What to Carry</p>

                <ul className="list-disc space-y-2 pl-5 text-black">
                  <li>
                    Bring previous prescriptions, KFT and LFT reports, ultrasound
                    scans, sugar and blood pressure records and a list of current
                    medicines, and come with a family member who can help
                    remember instructions.
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