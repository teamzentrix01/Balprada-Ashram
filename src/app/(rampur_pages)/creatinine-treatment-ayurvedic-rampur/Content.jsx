import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaCreatinineTreatmentAyurveda() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda reduce high creatinine?",
      a: "Ayurvedic care at Balprada is supportive, using diet, medicines and lifestyle guidance. We do not promise a fixed reduction.",
    },
    {
      q: "Q2. What is a normal creatinine level?",
      a: "It varies by lab, age, gender and muscle mass. Check the reference range on your report and ask your doctor.",
    },
    {
      q: "Q3. Should I stop my current medicines?",
      a: "No. Never stop prescribed medicines or dialysis without your treating doctor&apos;s advice.",
    },
    {
      q: "Q4. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q5. Which reports should I bring?",
      a: "Creatinine, urea, eGFR, urine tests, ultrasound, prescriptions and a list of all medicines.",
    },
    {
      q: "Q6. Are tests available at Balprada?",
      a: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing.",
    },
    {
      q: "Q7. Are medicines prepared at Balprada?",
      a: "Yes. Balprada prepares its own Ayurvedic medicines.",
    },
    {
      q: "Q8. What are the OPD timings?",
      a: "Daily from 10:00 AM to 2:00 PM at the main branch. The Moradabad branch has Vaidya ji on Sundays, so call first.",
    },
    {
      q: "Q9. Is there a free consultation?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q10. How often should creatinine be tested?",
      a: "Your doctor will advise the schedule based on your condition and earlier reports.",
    },
    {
      q: "Q11. Can family members attend the consultation?",
      a: "Yes. Family participation helps with diet, medicines and daily routine at home.",
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
                Creatinine Treatment in Ayurveda – Supportive Kidney Care in
                Rampur at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Support for High Creatinine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A high creatinine report can worry any family. People in
                  Rampur, Uttar Pradesh often search for creatinine treatment
                  in Ayurveda hoping for gentle, practical guidance alongside
                  proper medical follow-up.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care for kidney concerns since 1991 through
                  consultation, Ayurvedic medicines, diet guidance and regular
                  follow-up.
                </li>
                <li>
                  Our Kidney and Urinary Care programme supports patients with
                  concerns about kidney function, swelling, kidney stones and
                  diabetes-linked kidney stress.
                </li>
                <li>
                  This page explains what creatinine means, why levels rise,
                  how Balprada plans supportive care and how patients from
                  Rampur can book a consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Creatinine?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Creatinine is a waste product produced by normal muscle
                  activity. The kidneys filter it from the blood and remove it
                  through urine.
                </li>
                <li>
                  A creatinine test is a blood test that helps doctors judge
                  how well the kidneys are filtering. It is often read together
                  with urea, eGFR and a urine test.
                </li>
                <li>
                  Normal ranges differ between laboratories, age, gender and
                  muscle mass, so always compare your result with the reference
                  range printed on your own report.
                </li>
                <li>
                  A single high value does not explain everything. Your doctor
                  looks at trends, symptoms, blood pressure, sugar levels and
                  other reports before drawing conclusions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Creatinine Levels Rise
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reduced kidney function is the most important reason, because
                  weak filtering allows waste to remain in the blood.
                </li>
                <li>
                  Dehydration, severe infection, heavy exercise or a very
                  high-protein diet can temporarily raise the value in some
                  people.
                </li>
                <li>
                  Uncontrolled diabetes and long-standing high blood pressure
                  can slowly damage the kidneys and push creatinine upward over
                  time.
                </li>
                <li>
                  Kidney stones, urinary blockages or repeated urinary
                  infections may affect how well the kidneys work.
                </li>
                <li>
                  Certain medicines, especially frequent painkillers taken
                  without advice, and some supplements can burden the kidneys.
                </li>
                <li>
                  Because causes differ, the right plan always begins with
                  proper assessment instead of guesswork.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Should Not Be Ignored
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Swelling in the feet, ankles, hands or face, especially in
                  the morning.
                </li>
                <li>
                  Constant tiredness, weakness, poor appetite or nausea.
                </li>
                <li>
                  Changes in urine amount, colour or frequency, including foamy
                  urine.
                </li>
                <li>
                  Breathlessness, itching, disturbed sleep or difficulty
                  concentrating.
                </li>
                <li>
                  High blood pressure or rising blood sugar that is hard to
                  control.
                </li>
                <li>
                  Anyone with these signs and a raised creatinine report should
                  consult a doctor promptly and not wait.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Approaches High Creatinine with Ayurveda
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya reviews your creatinine report, history, other
                      kidney tests, current medication and daily habits before
                      suggesting the next care step.
                    </li>
                    <li>
                      The plan is shaped around your strength, appetite,
                      digestion, swelling and routine rather than a single
                      number.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Supportive Ayurvedic Medicines
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares its own Ayurvedic medicines in-house,
                      supporting quality and consistency in every treatment
                      plan.
                    </li>
                    <li>
                      Medicines are combined with diet and lifestyle
                      correction, because Ayurveda looks at the whole person
                      and not only a lab value.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Responsible, Honest Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic care is planned after reviewing your current
                      medicines, so please share every tablet, injection and
                      supplement you take.
                    </li>
                    <li>
                      Patients under a nephrologist or on dialysis should
                      continue that treatment and keep both teams informed.
                    </li>
                    <li>
                      We do not promise that creatinine will fall by a fixed
                      amount or within a fixed time. Our focus is supportive
                      care, diet discipline and steady follow-up.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Perspective on Kidney Health
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda views health as a balance between body, digestion,
                  mind and daily routine, so care goes beyond one organ or one
                  report.
                </li>
                <li>
                  Weak digestion, irregular meals, poor sleep and stress are
                  seen as factors that can add to the burden on the body.
                </li>
                <li>
                  Treatment therefore combines medicines with diet discipline,
                  routine correction and emotional support, delivered calmly
                  and with regular review.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kidney and Urinary Conditions We Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Reduced Kidney Function and Kidney Failure
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reduced kidney function requires careful assessment, diet
                      support and continuous monitoring.
                    </li>
                    <li>
                      Care focuses on comfort, strength, food discipline and
                      regular review of reports.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Kidney Stones
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation supports urinary comfort,
                      hydration routines and dietary discipline.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Persistent Swelling
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Persistent swelling may need kidney, liver and metabolic
                      assessment with guided care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Diabetes-Related Kidney Concern
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes-related kidney stress is approached through
                      diet, sugar control and follow-up.
                    </li>
                    <li>
                      Good sugar control is one of the most useful steps for
                      protecting kidney health.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Care Journey for High Creatinine
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Consultation and Report Review
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring your latest creatinine, urea, eGFR, urine and
                      ultrasound reports, along with earlier reports for
                      comparison.
                    </li>
                    <li>
                      The doctor explains your results in simple language and
                      decides the next care step.
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
                      suitable.
                    </li>
                    <li>
                      The plan respects any fluid, salt or protein limits
                      already advised by your treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, panchakarma and pathology support are
                      added only when they suit your condition and strength.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Follow-Up and Repeat Testing
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team observe progress, adjust
                      guidance and support long-term discipline.
                    </li>
                    <li>
                      Repeat tests at Balprada Pathology Lab help the doctor
                      track how your body responds over time.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidance for People with High Creatinine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the personalised diet chart provided to you, because
                  kidney diets differ by stage, swelling, blood pressure and
                  sugar levels.
                </li>
                <li>
                  Limit salt as advised, since extra sodium can increase
                  swelling and blood pressure.
                </li>
                <li>
                  Take protein only in the amount your doctor suggests. Both
                  very high and very low protein intake can create problems.
                </li>
                <li>
                  Follow guidance on potassium and phosphorus-rich foods,
                  because the right amounts depend on your reports.
                </li>
                <li>
                  Avoid fried, oily, packaged and heavy foods that burden
                  digestion.
                </li>
                <li>
                  Do not use creatine or bodybuilding supplements unless your
                  doctor approves, as they can affect creatinine readings.
                </li>
                <li>
                  Fluid needs vary. Some people need to drink more, while
                  others with swelling or advanced kidney weakness need limits,
                  so never decide this on your own.
                </li>
                <li>
                  Prefer fresh, simple, home-cooked meals at regular times.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Kidney Health
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Control blood sugar and blood pressure through medicines,
                  diet and regular monitoring as advised.
                </li>
                <li>
                  Avoid smoking and alcohol, which add stress to the kidneys
                  and heart.
                </li>
                <li>
                  Avoid self-medication, especially painkillers and unknown
                  herbal or home remedies, because some can harm weak kidneys.
                </li>
                <li>
                  Walk gently every day and practise light yoga and breathing
                  exercises as your doctor permits.
                </li>
                <li>
                  Sleep on time, avoid late-night meals and manage stress
                  through meditation or quiet rest.
                </li>
                <li>
                  Repeat creatinine tests on the schedule your doctor advises.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Balprada Pathology Lab
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reliable blood, urine and diagnostic testing helps the
                      doctor monitor progress and plan care with confidence.
                    </li>
                    <li>
                      Testing within the same care journey saves patients the
                      effort of moving between multiple centres.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Meditation and Naturopathy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle yoga and breath awareness support calm, discipline
                      and emotional steadiness.
                    </li>
                    <li>
                      Naturopathy uses simple, nature-led routines that work
                      with the body&apos;s natural healing capacity.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Physiotherapy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Professional physiotherapy supports safe movement,
                      mobility and strength alongside the wider care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Ashram Environment and Organic Food
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A peaceful ashram setting supports rest, routine and
                      recovery away from daily stress.
                    </li>
                    <li>
                      Wholesome, clean eating supports the long-term lifestyle
                      correction we encourage.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Rampur Patients Choose Balprada for Kidney Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience:</span> Balprada
                  has served patients since 1991 and carries 35 years of
                  Ayurvedic care and research.
                </li>
                <li>
                  <span className="font-semibold">In-house medicines:</span>{" "}
                  Ayurvedic preparations are made at Balprada, supporting
                  quality and consistency.
                </li>
                <li>
                  <span className="font-semibold">Whole-person care:</span>{" "}
                  medicines, diet, yoga and follow-up are planned together.
                </li>
                <li>
                  <span className="font-semibold">Honest guidance:</span>{" "}
                  patients are told clearly what Ayurvedic care can support and
                  where medical treatment must continue.
                </li>
                <li>
                  <span className="font-semibold">Patient trust:</span> Google
                  reviews praise the knowledgeable vaidyas, authentic herbal
                  formulations and serene healing atmosphere for kidney, liver
                  and chronic illness care.
                </li>
                <li>
                  <span className="font-semibold">Service spirit:</span> free
                  OPD consultation is available on the 15th of every month.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. Jeetesh Vishwas, a reviewer from Moradabad, appreciated
                  the knowledgeable vaidyas, authentic herbal formulations and
                  serene healing atmosphere for kidney, liver and chronic
                  illness care.
                </li>
                <li>
                  Another patient praised the guidance of Vaidya ji and the
                  hospital team, along with the natural ashram surroundings and
                  genuine herbal preparations.
                </li>
                <li>
                  Families often mention the humble, welcoming staff who help
                  patients feel cared for during difficult health journeys.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Consultation Matters
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Creatinine often rises quietly, so early consultation gives
                  the doctor more time to guide food, routine and monitoring.
                </li>
                <li>
                  Early planning helps families prepare practical steps such as
                  diet changes, follow-up dates and emergency contacts.
                </li>
                <li>
                  Timely guidance on sugar, blood pressure and medicines can
                  protect the kidneys from further strain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Go to the nearest hospital emergency immediately for severe
                  breathlessness, chest pain, confusion, very little or no
                  urine, repeated vomiting or sudden heavy swelling.
                </li>
                <li>
                  Kidney problems can worsen quickly, and emergency treatment
                  such as dialysis may be necessary to protect life.
                </li>
                <li>
                  Ayurvedic care supports patients during stable phases and
                  recovery. It should never delay urgent hospital treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips Before Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Carry all kidney reports, including creatinine, urea, eGFR,
                  urine tests, ultrasound and any dialysis records.
                </li>
                <li>
                  Bring prescriptions and a list of every medicine and
                  supplement you take.
                </li>
                <li>
                  Note your symptoms, urine pattern, swelling, appetite, sleep
                  and blood pressure readings.
                </li>
                <li>
                  Bring a family member who helps with your meals and daily
                  care.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and allow time
                  for an unhurried consultation.
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
                        Vaidya ji is available on Sundays. Please call{" "}
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

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Kidney Care Consultation Today
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Take the first step toward guided, responsible Ayurvedic
                  support with Balprada Ayurvedic Hospital &amp; Research
                  Center.
                </li>
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  or WhatsApp us to book your OPD visit.
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