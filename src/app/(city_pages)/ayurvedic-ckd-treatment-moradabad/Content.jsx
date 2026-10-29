import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicCKDTreatmentInMoradabad() {
  const faqs = [
    {
      q: "Does Ayurveda offer treatment for CKD in Moradabad?",
      a: "Yes, Balprada offers Ayurvedic consultation, medicines, diet guidance and follow-up for kidney concerns at its Moradabad and Bilari branches.",
    },
    {
      q: "Can Ayurveda cure CKD?",
      a: "No cure is promised. Care is supportive and aims to help with comfort, strength and discipline alongside medical advice.",
    },
    {
      q: "Should I stop my allopathic medicines or dialysis?",
      a: "No. Never stop prescribed treatment on your own. Discuss any change with your nephrologist and Balprada&apos;s vaidya.",
    },
    {
      q: "Which reports should I bring?",
      a: "Bring recent KFT, urine reports, sugar and blood pressure records, prescriptions and dialysis details, if any.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation is from 10:00 AM to 2:00 PM. Vaidya ji is at the Moradabad branch on Sundays, so call first.",
    },
    {
      q: "Does Balprada have its own lab?",
      a: "Yes, Balprada Labs offers blood and urine testing, including Kidney Function Test. Confirm test details and price by phone.",
    },
    {
      q: "How can I book an appointment?",
      a: "Use the online appointment form, call 8126364606 or 9410447000, or send a WhatsApp message.",
    },
    {
      q: "Can I take Ayurvedic medicines with my current tablets?",
      a: "Only after telling the vaidya every medicine you take, so the plan can be made safely.",
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
                Ayurvedic CKD Treatment in Moradabad at Balprada Ayurvedic
                Hospital &amp; Research Center
              </h1>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Overview of Ayurvedic CKD Care in Moradabad
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chronic kidney disease (CKD) means the kidneys have worked below
                  their normal level for a long period, usually three months or
                  more, and many families in Moradabad look for a supportive
                  Ayurvedic option alongside regular medical care.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji, and Kidney and Urinary Care is one of
                  its main treatment categories.
                </li>
                <li>
                  Kidney concerns are approached through consultation, medical
                  history, diet guidance, Ayurvedic medicines and regular
                  follow-up, so the care plan stays practical, responsible and
                  personalized.
                </li>
                <li>
                  This page explains how CKD care is planned at Balprada, what to
                  expect at each visit, how to reach the Moradabad branch, and
                  which questions to ask before starting.
                </li>
                <li>
                  Ayurvedic care here is supportive and individual. It does not
                  promise a cure and it is never a replacement for your
                  nephrologist, dialysis schedule or prescribed medicines.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Chronic Kidney Disease
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What CKD Means
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The kidneys filter waste, balance fluids and salts, and help
                  control blood pressure, so a long-term drop in their function
                  can affect the whole body.
                </li>
                <li>
                  CKD often develops slowly, which is why many people notice it
                  only when routine reports show a change in kidney markers.
                </li>
                <li>
                  Reports such as Kidney Function Test (KFT) and urine routine and
                  microscopy are commonly used to assess kidney health and to
                  monitor it over time.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Common Causes and Risk Factors
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long-standing diabetes and high blood pressure are among the
                  most common reasons for gradual kidney stress, which is why
                  sugar and blood pressure control matter in every kidney plan.
                </li>
                <li>
                  Repeated kidney stones, urinary problems, family history, and
                  long-term use of painkillers without medical advice can also add
                  to kidney strain.
                </li>
                <li>
                  Irregular routine, poor sleep, low water intake, high salt
                  intake and stress may worsen overall health in people already
                  living with kidney disease.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Signs That Need a Doctor&apos;s Review
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Persistent swelling in the feet, face or around the eyes,
                  tiredness, weak appetite and breathlessness should never be
                  ignored.
                </li>
                <li>
                  Changes in urine, such as foamy urine, reduced quantity, or
                  frequent night-time urination, are reasons to get tested.
                </li>
                <li>
                  Nausea, itching, disturbed sleep and high blood pressure that is
                  hard to control can also be linked with kidney concerns, so a
                  proper assessment is important.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada&apos;s Approach to Ayurvedic CKD Treatment
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Care Begins With the Complete Health Picture
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Symptoms, medical history, current treatment, food habits,
                  sleep, stress and daily routine are all considered before any
                  Ayurvedic guidance is suggested.
                </li>
                <li>
                  Diagnostic reports, including earlier kidney tests, are reviewed
                  where relevant so the doctor understands where you stand today.
                </li>
                <li>
                  Current medicines, dialysis status and advice from your
                  nephrologist are noted so that the Ayurvedic plan works around
                  them and not against them.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Consultation, Routine and Regular Review
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The care plan may include Ayurvedic medicines, diet guidance,
                  lifestyle correction and supportive facilities, depending on
                  what suits the individual patient.
                </li>
                <li>
                  Progress is reviewed regularly so guidance can be adjusted and
                  remain safe and practical for the patient and the family.
                </li>
                <li>
                  The goal is to support kidney health, comfort, strength and
                  daily discipline, and not to make unrealistic promises.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                In-House Herbal Medicines and Experienced Vaidyas
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada blends Ayurvedic wisdom, in-house herbal medicines,
                  experienced doctors and a peaceful ashram environment for
                  long-term supportive care.
                </li>
                <li>
                  Medicines should be taken only as advised by the treating
                  vaidya, because the right choice depends on the patient&apos;s
                  reports, current medication and overall condition.
                </li>
                <li>
                  Patients should avoid starting random herbal powders or home
                  remedies for kidney disease without guidance, since some
                  products may not suit reduced kidney function.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step Care Journey at Balprada
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Step 1: Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews the main concern, history, reports and
                  current medication before suggesting the next care step.
                </li>
                <li>
                  Bring recent KFT, urine reports, blood pressure and sugar
                  records, prescriptions and any dialysis details so the first
                  visit is more useful.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 2: Personalized Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Care is planned with Balprada&apos;s Ayurvedic medicines, diet
                  discipline and lifestyle correction where suitable.
                </li>
                <li>
                  The plan is explained in simple language so that the patient and
                  caregiver both understand what to follow every day.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 3: Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga, naturopathy, Panchakarma, meditation and physiotherapy
                  are available as supportive facilities, and they are planned
                  only according to individual assessment and suitability.
                </li>
                <li>
                  Panchakarma and other therapies are not suggested for everyone,
                  and weak or advanced-stage patients are assessed carefully
                  before any procedure is considered.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 4: Follow-Up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Regular follow-up helps the team observe progress, adjust
                  guidance and support long-term discipline.
                </li>
                <li>
                  Repeat tests are advised at intervals decided by the doctor, so
                  changes in kidney markers are tracked and not guessed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Guidance for Kidney Patients
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Food Habits
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diet in CKD is highly individual, because limits on salt,
                  potassium, phosphorus, protein and fluids depend on the stage of
                  disease and current reports.
                </li>
                <li>
                  Balprada&apos;s consultation includes diet guidance that fits
                  the patient&apos;s reports and local food habits, so the plan is
                  realistic for Indian households.
                </li>
                <li>
                  Do not copy a diet chart from the internet or from another
                  patient, as a food that suits one person may be unsuitable for
                  another.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Daily Routine
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A regular wake-up time, meal timings and sleep schedule support
                  overall health and make medicine routines easier to follow.
                </li>
                <li>
                  Light movement, gentle yoga and breathing practices may be
                  suggested where the patient&apos;s strength and doctor&apos;s
                  advice allow.
                </li>
                <li>
                  Avoid heavy fried food, excess salt, packaged snacks, alcohol,
                  tobacco and unnecessary painkillers.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Sugar and Blood Pressure Control
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diabetes and high blood pressure often travel with kidney
                  disease, so monitoring both at home and following the prescribed
                  plan is a key part of care.
                </li>
                <li>
                  Balprada also supports diabetes and blood pressure concerns
                  through its Diabetes &amp; Thyroid Care and Heart and Lifestyle
                  Care categories, which helps patients who have more than one
                  issue.
                </li>
                <li>
                  Related kidney pages on the website cover kidney stones,
                  swelling and diabetes-related kidney concerns for patients who
                  want to read further.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic Support at Balprada Pathology Lab
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Tests Commonly Needed in Kidney Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Labs provides blood, urine and diagnostic testing
                  support, which helps doctors understand the patient&apos;s
                  condition and review progress with more clarity.
                </li>
                <li>
                  Kidney Function Test (KFT) covers key renal markers used for
                  kidney-health assessment and ongoing monitoring.
                </li>
                <li>
                  Urine Routine and Microscopy, Diabetes Profile, Complete Blood
                  Count and Lipid Profile are other frequently requested tests
                  that may support a kidney patient&apos;s overall review.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Before You Book a Test
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Other routine and doctor-advised investigations may also be
                  available, so contact the laboratory to confirm the exact test,
                  preparation, price and reporting time.
                </li>
                <li>
                  Keep earlier reports in one folder and carry them to every
                  visit, because comparing old and new values helps the doctor see
                  the direction of change.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Therapies and Ashram Environment
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Yoga and Meditation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga and Ayurveda support balance across body, mind and breath,
                  helping patients build discipline, strength and calm during a
                  long health journey.
                </li>
                <li>
                  Guided meditation and breath awareness support emotional
                  steadiness and restorative rest, which matters because living
                  with CKD can bring worry and fatigue.
                </li>
                <li>
                  Practices are kept gentle and are adjusted for energy levels,
                  swelling, blood pressure and general strength.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Naturopathy and Physiotherapy
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Naturopathy works with the body&apos;s natural healing capacity
                  through simple, nature-led practices and supportive routines.
                </li>
                <li>
                  Professional physiotherapy supports safe movement, mobility and
                  strength alongside the wider care plan, especially for patients
                  who feel weak or have been inactive for long.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                A Calm Place for Long-Term Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The peaceful ashram setting, regular routine and service-first
                  spirit help patients and caregivers stay consistent with diet,
                  medicines and follow-up.
                </li>
                <li>
                  Many families value having consultation, guidance and supportive
                  facilities in one place instead of managing several separate
                  appointments.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Guidance for Family Members and Caregivers
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                How Caregivers Can Help
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep a simple notebook with daily weight, blood pressure, sugar
                  readings, swelling and urine changes, because these notes help
                  the doctor during follow-up.
                </li>
                <li>
                  Maintain a medicine list with names, doses and timings, and
                  share it at every consultation, including any herbs or
                  supplements.
                </li>
                <li>
                  Support the patient with the advised diet and fluid limits
                  without strictness that causes stress, because emotional comfort
                  also matters in long-term care.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Questions to Ask at the First Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  What does my latest report suggest, and which tests should be
                  repeated and when?
                </li>
                <li>
                  Which foods, drinks and routines should I follow or avoid at my
                  stage of kidney disease?
                </li>
                <li>
                  How will the Ayurvedic plan fit with my current medicines,
                  dialysis schedule or nephrologist&apos;s advice?
                </li>
                <li>
                  How often should I come for follow-up, and which symptoms mean I
                  should contact the team at once?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families in Moradabad Choose Balprada
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Trust Built Over Decades
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada brings around 35 years of experience in natural
                  Ayurvedic care, with a service-first spirit and disciplined
                  routines.
                </li>
                <li>
                  Patient reviews shared on the website mention the knowledgeable
                  vaidyas, genuine herbal preparations and the calm ashram
                  surroundings.
                </li>
                <li>
                  The Jansewa spirit of seva is part of the hospital&apos;s
                  identity, and visitors describe the staff as humble, kind and
                  helpful.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Convenience for Patients
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The ashram and clinic are open seven days a week, with
                  consultation timing from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  which helps families take a first opinion without worry about
                  consultation cost.
                </li>
                <li>
                  Consultation, supportive therapies and pathology support are
                  available under one care journey, which reduces travel between
                  different places.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Visit and Contact Details
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Moradabad Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                  Uttar Pradesh 244001.
                </li>
                <li>
                  Vaidya ji is available at the Moradabad branch on Sundays, so
                  please call before visiting.
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  . Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Main Branch near Bilari
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  Daily consultation from 10:00 AM to 2:00 PM. Phone and
                  WhatsApp:{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                How to Book an Appointment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Use the Book Appointment page, choose your preferred branch,
                  select Kidney Care as the health concern and submit the request.
                </li>
                <li>
                  You can also call or send a WhatsApp message before visiting so
                  that the team can guide you on consultation timing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Safety Notes for CKD Patients
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Work With Your Nephrologist
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Continue prescribed medicines, dialysis sessions and follow-up
                  with your nephrologist unless your treating doctor advises a
                  change.
                </li>
                <li>
                  Inform every doctor about all medicines, herbs and supplements
                  you take, so interactions and risks can be avoided.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Emergency Warning Signs
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Seek urgent medical help for severe breathlessness, chest pain,
                  confusion, very little or no urine, repeated vomiting or sudden
                  heavy swelling.
                </li>
                <li>
                  Ayurvedic consultation is not an emergency service, and delays
                  in urgent care can be dangerous.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation
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