import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicDoctorNearMeForDiabetes() {
  const faqs = [
    {
      q: "Does Balprada have a doctor for diabetes?",
      a: "Diabetes care is offered, and the website names no diabetes-specific doctor, so ask the team.",
    },
    {
      q: "Can I continue my diabetes medicines?",
      a: "Yes. Prescribed medicines should only be changed under your treating doctor’s guidance.",
    },
    {
      q: "What does the doctor review?",
      a: "Symptoms, history, current treatment, food habits, sleep, stress, routine and reports.",
    },
    {
      q: "What should I bring?",
      a: "Bring prescriptions, blood-sugar and HbA1c reports, medicines and a routine note.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and calling ahead is advised.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "How do I book?",
      a: "Use the online form, WhatsApp 8126364606, or call a branch.",
    },
    {
      q: "Is lab testing available?",
      a: "Yes. The lab lists a diabetes profile with blood sugar and HbA1c.",
    },
    {
      q: "Is Balprada suitable for emergencies?",
      a: "No. In an emergency, go to urgent medical care first.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Looking for an Ayurvedic Doctor for Diabetes
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Patients Want From a Doctor
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People living with diabetes often want a doctor who listens to
                  their whole routine, not only their latest sugar reading.
                </li>
                <li>
                  Many families also want a doctor who respects the medicines
                  already prescribed and explains clearly how Ayurvedic guidance
                  fits alongside them.
                </li>
                <li>
                  Easy booking, clear timings and regular follow-up matter just as
                  much as the first consultation.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What This Page Covers
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  This page focuses on the doctor&apos;s consultation for diabetes
                  at Balprada Ayurvedic Hospital &amp; Research Center, and on how
                  to prepare for it.
                </li>
                <li>
                  It uses only details published on the Balprada website, and it
                  marks clearly anything the site does not state.
                </li>
                <li>
                  It does not promise any outcome, and it does not replace the
                  advice of your treating doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Doctor&apos;s Role in Diabetes Care at Balprada
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Reviewing Your Full Picture
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website says that before any Ayurvedic guidance, the care
                  team considers symptoms, medical history and current treatment.
                </li>
                <li>
                  Food habits, sleep, stress and daily routine are also reviewed,
                  because each of them shapes how a patient lives with diabetes.
                </li>
                <li>Diagnostic reports may be reviewed where relevant.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Building an Individual Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The care plan may include Ayurvedic medicines, diet guidance,
                  lifestyle correction and supportive facilities.
                </li>
                <li>
                  Plans are individual, so two patients with diabetes may receive
                  different guidance.
                </li>
                <li>
                  The website presents food discipline, physical activity,
                  prescribed care and regular blood-sugar monitoring as the core
                  of long-term management.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Reviewing Progress
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Progress is reviewed regularly so that guidance stays practical
                  and responsible.
                </li>
                <li>
                  Follow-up may include a look at reports, symptoms, food routine
                  and how you are responding to the plan.
                </li>
              </ul>
            </section>

            
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Working Alongside Your Prescribed Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Medicines and Monitoring
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Prescribed medicines should only be changed under the guidance
                  of your treating doctor.
                </li>
                <li>
                  Regular blood-sugar monitoring is named on the website as part
                  of long-term management, so keep up with it.
                </li>
                <li>
                  Tell the Ayurvedic doctor about every medicine you take,
                  including doses as prescribed.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Keeping Both Doctors Informed
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Share the Ayurvedic guidance you receive with your regular
                  doctor, so care stays coordinated.
                </li>
                <li>
                  Share new test results and prescriptions with both, so everyone
                  sees the same picture.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Documents to Carry
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Previous prescriptions from every doctor you have consulted.
                </li>
                <li>
                  Recent reports, especially blood-sugar results and any HbA1c
                  report you have.
                </li>
                <li>
                  Reports on kidney, liver, thyroid or lipid tests, if you have
                  them.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Your Own Records
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Any home blood-sugar readings you have noted, with dates.
                </li>
                <li>
                  A list of every medicine you take, with doses as prescribed.
                </li>
                <li>
                  A short note on how long you have had diabetes and any earlier
                  treatment.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Daily Routine Notes
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Write down a typical day of meals, snacks, tea and sweets, with
                  timings.
                </li>
                <li>
                  Note your sleep hours, stress levels and usual activity.
                </li>
                <li>
                  Mention anything that changed recently, such as travel, illness
                  or a new routine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                About Your Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask what the doctor understands from your history and reports,
                  and which points need the most attention.
                </li>
                <li>
                  Ask how Ayurvedic guidance should fit with the medicines you
                  already take.
                </li>
                <li>
                  Ask which food and lifestyle changes matter most at the start,
                  and how to make them gradually.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                About Monitoring and Follow-Up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Ask which tests you should repeat and how often.</li>
                <li>
                  Ask how often follow-up is needed and what you should bring each
                  time.
                </li>
                <li>
                  Ask what signs mean you should contact your regular doctor or
                  seek urgent care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Food, Sleep and Stress in the Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Diet Guidance
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diet guidance is built around your own eating habits and
                  schedule, not a generic chart.
                </li>
                <li>
                  Be honest about meals, snacks and sweets, so the advice fits
                  your real life.
                </li>
                <li>
                  Balprada also has an Organic Food section and Balprada
                  Enterprises products, such as herbal flours, spices, oils and
                  teas.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Sleep and Stress
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sleep and stress are listed among the factors the team reviews
                  for diabetes care.
                </li>
                <li>
                  Guided meditation and breath awareness at Balprada support
                  emotional steadiness and restful sleep.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Physical Activity
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Physical activity is one of the pillars of diabetes care named
                  on the website.
                </li>
                <li>
                  Yoga includes breath and posture practice, routine building and
                  stress support, with suitability set after assessment.
                </li>
                <li>
                  Share your medicines, conditions and mobility concerns before
                  starting any activity.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Related Concerns the Doctor May Discuss
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Thyroid and Weight
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diabetes sits in the same Diabetes &amp; Thyroid Care area as
                  hypothyroidism, hyperthyroidism and metabolic and weight
                  balance.
                </li>
                <li>
                  Sustainable routines for food, movement, sleep and stress
                  support healthier weight and metabolism.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Blood Pressure and Kidney Concerns
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diabetes also appears in Heart and Lifestyle Care, alongside
                  blood pressure and obesity.
                </li>
                <li>
                  Kidney and urinary care includes support for diabetes-linked
                  kidney concerns.
                </li>
                <li>
                  Bring related reports, so the doctor sees the complete picture.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Therapies and Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Naturopathy works with nature-led practices, detox support and
                  lifestyle correction.
                </li>
                <li>
                  Panchakarma is planned only after an individual assessment, with
                  food, rest and routine guidance.
                </li>
                <li>
                  Physiotherapy supports safe movement, mobility and strength
                  where it suits the care plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Balprada Pathology Lab
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The in-house lab lists a diabetes profile with blood sugar and
                  HbA1c, along with CBC, thyroid, liver, kidney, lipid and urine
                  tests.
                </li>
                <li>
                  The website gives no lab hours or prices, so contact the
                  laboratory to confirm the test, preparation, price and reporting
                  time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Branches and Timings
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Main Branch (Ashram and Clinic)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>Timing: open daily from 10:00 AM to 2:00 PM.</li>
                <li>
                  Contact: call or WhatsApp{" "}
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

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Moradabad Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                  Uttar Pradesh 244001.
                </li>
                <li>
                  Vaidya ji is available on Sundays, and the website asks patients
                  to call before visiting.
                </li>
                <li>
                  Contact:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  or{" "}
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
                Free OPD on the 15th of Every Month
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Call ahead to confirm branch availability and how the
                  consultation flow works that day.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book a Diabetes Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Online Appointment Request
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Open the Book Appointment page on balpradaindia.com and enter
                  the patient&apos;s details.
                </li>
                <li>
                  Choose a Preferred Branch, then select Diabetes &amp; Thyroid
                  Care as the Health Concern.
                </li>
                <li>
                  Press Submit Request so the team can guide you on timing and the
                  next step.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Phone, WhatsApp and Email
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  with the patient&apos;s name, concern and preferred branch.
                </li>
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  for the Main Branch or{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  for the Moradabad Branch to confirm availability.
                </li>
                <li>
                  Email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  for longer medical histories or written questions.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Asking for a Particular Doctor
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Mention the doctor you wish to consult when you book.
                </li>
                <li>
                  The website does not guarantee a named doctor on a given day, so
                  confirm before you travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up and Daily Routine
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                How Follow-Up Works
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up depends on the patient&apos;s condition and may
                  include review of reports, symptoms, food routine and medicine
                  response.
                </li>
                <li>
                  Regular follow-up helps the team observe progress and adjust
                  guidance over time.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Keeping a Simple Log
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Note your meals, activity, sleep and monitoring results to share
                  at follow-up.
                </li>
                <li>
                  Keep new reports and prescriptions together, so every review
                  builds on the last one.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Families and Caregivers
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Supporting the Patient
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Family members can attend together, so everyone hears the same
                  food and routine guidance.
                </li>
                <li>
                  Shared meals that follow the doctor&apos;s food advice make
                  daily discipline easier for the patient.
                </li>
                <li>
                  Elderly patients may need a family member to keep reports,
                  prescriptions and appointment dates in order.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Your First Consultation Looks Like
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Before the Doctor Advises
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor listens to your concern and reviews your history,
                  reports and current medication before suggesting the next care
                  step.
                </li>
                <li>
                  You may be asked about your meals, sleep, stress and daily
                  activity, so answer as honestly as you can.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                After the Review
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor explains the plan in terms of medicines, food
                  guidance and lifestyle changes where suitable.
                </li>
                <li>
                  You may also hear which supportive facilities, such as yoga or
                  naturopathy, could suit you.
                </li>
                <li>
                  Ask the doctor to repeat anything that is unclear, and write the
                  key points down.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Visit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Choosing the Day
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Pick the 15th if you want the free OPD, and a regular day if you
                  prefer a quieter visit.
                </li>
                <li>
                  Sunday vaidya availability applies to the Moradabad Branch, so
                  call before visiting.
                </li>
                <li>
                  Reach the clinic early in the 10:00 AM to 2:00 PM window.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Travel and Stay
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website gives no distances, travel times or transport
                  details, so check the route yourself.
                </li>
                <li>
                  It lists no accommodation, so ask the team about stay options if
                  you are travelling from far.
                </li>
                <li>
                  Confirm the date, branch and doctor&apos;s availability by phone
                  before you leave home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Use and Responsible Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Medicines and Emergencies
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Never stop, reduce or change prescribed diabetes medicines on
                  your own, and discuss any change with your treating doctor.
                </li>
                <li>
                  Emergency cases should receive urgent medical care first, and
                  Ayurvedic consultation can follow once the patient is stable.
                </li>
                <li>
                  Ayurvedic care here is supportive and individual, and results
                  vary from person to person, so no outcome is promised.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Sharing Your Full Health Picture
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Tell your Ayurvedic doctor about every supplement and herbal
                  product you use.
                </li>
                <li>
                  Inform your regular doctor about the Ayurvedic guidance you
                  follow.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Related Pages on balpradaindia.com
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Where to Read More
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Treatments page explains Diabetes &amp; Thyroid Care, and
                  the Team page introduces the doctors.
                </li>
                <li>
                  The OPD page lists timings and branch details, and the FAQ page
                  answers questions on reports and follow-up.
                </li>
                <li>
                  The Facilities and Pathology Lab pages show how care comes
                  together.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Request Your Appointment
              </h2>

              <h3 className="mb-3 font-serif text-2xl">Ready to Book</h3>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Open the Book Appointment page, choose your branch and Diabetes
                  &amp; Thyroid Care, then press Submit Request.
                </li>
                <li>
                  Prefer to talk first? Message{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  on WhatsApp or call the branch you plan to visit.
                </li>
                <li>
                  Remember the free OPD on the 15th of every month when choosing
                  your date.
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