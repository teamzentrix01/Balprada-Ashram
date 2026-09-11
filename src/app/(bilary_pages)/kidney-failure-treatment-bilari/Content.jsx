import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function KidneyFailureTreatmentBilari() {
  const faqs = [
    {
      q: "Q1. Can Ayurvedic treatment cure kidney failure?",
      a: "No. At the kidney failure stage, Ayurvedic care is supportive only and does not replace nephrology-directed treatment or dialysis when medically necessary.",
    },
    {
      q: "Q2. Is this treatment suitable for patients already on dialysis?",
      a: "Yes, supportive care can be adjusted for dialysis patients, focused on symptom management and nutrition around their dialysis schedule.",
    },
    {
      q: "Q3. Will the diet plan differ from a general kidney disease diet?",
      a: "Yes, kidney failure requires stricter, more individualized guidance on protein, potassium, phosphorus, and fluid intake based on lab values and dialysis status.",
    },
    {
      q: "Q4. Should I inform my nephrologist if I start Ayurvedic supportive care?",
      a: "Yes, it's strongly recommended so both treating teams have a complete picture of your care.",
    },
    {
      q: "Q5. What if my symptoms suddenly worsen?",
      a: "Seek immediate medical attention or emergency care — do not wait for your next scheduled Ayurvedic consultation.",
    },
    {
      q: "Q6. How is progress tracked for kidney failure patients?",
      a: "Through coordination with nephrology reports and, where appropriate, testing at the hospital's in-house pathology lab, alongside symptom review.",
    },
    {
      q: "Q7. How can families from Bilari book a supportive care consultation?",
      a: "Contact the hospital through its website or helpline in advance, and bring complete nephrology records to the first visit.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-6 font-serif text-3xl text-gray-900">
                Kidney Failure Treatment in Bilari – Supportive Ayurvedic Care
                at Balprada Ayurvedic Hospital
              </h1>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Kidney failure is a serious and advanced stage of kidney
                  disease that requires close medical supervision.
                </li>
                <li>
                  For patients in Bilari, Ayurveda can play an important
                  supportive role alongside standard nephrology treatment.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center in Moradabad
                  provides structured Ayurvedic support for kidney failure
                  patients.
                </li>
                <li>
                  Support focuses on symptom management, diet correction, and
                  slowing further decline.
                </li>
                <li>
                  Ayurvedic care is provided in coordination with the
                  patient&apos;s primary kidney specialist.
                </li>
                <li>
                  This page focuses specifically on kidney failure, its meaning,
                  the role of supportive Ayurvedic care, and important
                  information for patients and families from Bilari.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Kidney Failure Means
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Kidney failure refers to a severe loss of kidney function.
                </li>
                <li>
                  In kidney failure, the kidneys can no longer adequately
                  filter waste and excess fluid from the blood.
                </li>
                <li>
                  It is typically classified as acute or chronic.
                </li>
                <li>
                  Acute kidney failure has a sudden onset and may sometimes be
                  reversible.
                </li>
                <li>
                  Chronic kidney failure is a long-term decline reaching an
                  advanced stage.
                </li>
                <li>
                  The advanced chronic stage is often called end-stage renal
                  disease or ESRD.
                </li>
                <li>
                  Common symptoms include significant fatigue, swelling in the
                  legs and face, reduced or changed urination, nausea, and
                  difficulty concentrating.
                </li>
                <li>
                  Patients at this stage are usually already under a
                  nephrologist&apos;s care.
                </li>
                <li>
                  Treatment decisions, including dialysis planning, should
                  always be led by the nephrologist.
                </li>
                <li>
                  Ayurvedic care at this stage is strictly supportive
                  management.
                </li>
                <li>
                  Ayurvedic care is never a substitute for nephrology-directed
                  treatment or dialysis when medically indicated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                The Role of Supportive Ayurvedic Care in Kidney Failure
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Symptom management:</strong> Herbal support may help
                  manage fatigue, digestive discomfort, and general weakness
                  that often accompany advanced kidney failure.
                </li>
                <li>
                  <strong>Strict dietary guidance:</strong> A carefully
                  controlled diet plan addresses protein, potassium,
                  phosphorus, and fluid intake.
                </li>
                <li>
                  The diet plan is tailored to the patient&apos;s specific
                  laboratory values.
                </li>
                <li>
                  <strong>Coordination with the treating nephrologist:</strong>{" "}
                  Ayurvedic recommendations are designed to complement, not
                  conflict with, ongoing medical management.
                </li>
                <li>
                  <strong>Quality-of-life focus:</strong> The focus is on
                  helping patients feel more comfortable and maintain strength.
                </li>
                <li>
                  Supportive care does not claim to reverse advanced kidney
                  failure.
                </li>
                <li>
                  <strong>Family guidance:</strong> Families are counselled on
                  how to support the patient&apos;s diet and daily routine at
                  home in Bilari.
                </li>
                <li>
                  Kidney failure management can be demanding for both patients
                  and families.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Balprada&apos;s Approach Does Not Claim
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Supportive Ayurvedic care is not presented as a cure for
                  kidney failure.
                </li>
                <li>
                  It is not presented as a way to avoid medically necessary
                  dialysis.
                </li>
                <li>
                  Patients are never advised to delay or discontinue dialysis.
                </li>
                <li>
                  Patients are never advised to stop nephrologist-prescribed
                  treatment in favor of Ayurvedic therapy alone.
                </li>
                <li>
                  Herbal formulations are not marketed as a way to restore lost
                  kidney function once it has reached an advanced and
                  irreversible stage.
                </li>
                <li>
                  The hospital is transparent that its role is to support the
                  patient&apos;s comfort, nutrition, and overall management.
                </li>
                <li>
                  Supportive care is provided alongside the patient&apos;s
                  primary medical team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Assessment Process for Kidney Failure Patients
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Complete medical history review:</strong> Includes
                  current nephrology treatment, dialysis status if applicable,
                  and all current medications.
                </li>
                <li>
                  <strong>Review of recent lab reports:</strong> Creatinine,
                  blood urea, eGFR, potassium, and other relevant markers are
                  reviewed.
                </li>
                <li>
                  Laboratory review helps doctors understand the patient&apos;s
                  current status.
                </li>
                <li>
                  <strong>Symptom evaluation:</strong> Fatigue, appetite,
                  digestive comfort, and overall strength are assessed.
                </li>
                <li>
                  Symptom evaluation helps guide supportive care priorities.
                </li>
                <li>
                  <strong>Coordination check:</strong> Physicians confirm what
                  the patient&apos;s nephrologist has already advised.
                </li>
                <li>
                  This helps ensure Ayurvedic recommendations do not conflict
                  with the existing treatment plan.
                </li>
                <li>
                  <strong>Personalized supportive plan:</strong> A plan is
                  created covering diet, herbal support where appropriate, and
                  lifestyle guidance.
                </li>
                <li>
                  The plan is specific to the patient&apos;s stage and needs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Dietary Guidance for Kidney Failure Patients
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Protein intake is carefully calculated based on the
                  patient&apos;s specific stage.
                </li>
                <li>
                  Protein requirements differ significantly between
                  pre-dialysis and dialysis patients.
                </li>
                <li>
                  Potassium and phosphorus restrictions are common at this
                  stage.
                </li>
                <li>
                  These restrictions are important because the kidneys have a
                  reduced ability to regulate these minerals.
                </li>
                <li>
                  Fluid intake guidance is based on the patient&apos;s urine
                  output and fluid retention symptoms.
                </li>
                <li>
                  Fluid intake should always follow the treating doctor&apos;s
                  specific instructions.
                </li>
                <li>
                  Salt restriction remains important to help manage blood
                  pressure and fluid retention.
                </li>
                <li>
                  Patients are strongly advised against unsupervised dietary
                  supplements or herbal products outside what is prescribed.
                </li>
                <li>
                  Some products can worsen electrolyte imbalances.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Supporting Patients Undergoing Dialysis
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  For patients already on dialysis, Ayurvedic supportive care
                  focuses on managing between-session symptoms.
                </li>
                <li>
                  Symptoms may include fatigue, appetite loss, and general
                  discomfort.
                </li>
                <li>
                  Diet guidance is closely aligned with dialysis-specific
                  nutritional requirements.
                </li>
                <li>
                  Dialysis-specific dietary requirements differ from
                  earlier-stage kidney disease diets.
                </li>
                <li>
                  The Ayurvedic physician stays informed about the patient&apos;s
                  dialysis schedule.
                </li>
                <li>
                  The Ayurvedic physician also remains informed about changes
                  reported by the nephrology team.
                </li>
                <li>
                  Family members are guided on how to help maintain the
                  patient&apos;s strength and nutrition around dialysis
                  sessions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Warning Signs That Need Immediate Medical Attention
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Sudden, severe swelling or difficulty breathing.</li>
                <li>Significant decrease or complete stoppage of urination.</li>
                <li>
                  Severe confusion, drowsiness, or difficulty staying alert.
                </li>
                <li>Chest pain or irregular heartbeat.</li>
                <li>
                  Persistent vomiting or inability to keep fluids down.
                </li>
                <li>
                  Patients or family members noticing any of these symptoms
                  should seek emergency medical care immediately.
                </li>
                <li>
                  Do not wait for a scheduled Ayurvedic consultation when these
                  warning signs occur.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Why Families from Bilari Choose Supportive Care at Balprada
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  A centrally located Moradabad facility that is manageable to
                  reach for regular supportive visits.
                </li>
                <li>
                  Visits can be planned alongside dialysis or nephrology
                  appointments elsewhere.
                </li>
                <li>
                  Physicians experienced in coordinating supportive care with a
                  patient&apos;s existing and more intensive medical treatment.
                </li>
                <li>
                  An in-house pathology lab for tracking relevant markers
                  between nephrology visits when appropriate.
                </li>
                <li>
                  Honest communication about what supportive Ayurvedic care can
                  realistically offer at this advanced stage.
                </li>
                <li>
                  A structured follow-up approach that helps families stay
                  organized amid a demanding treatment schedule.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Practical Guidance for Bilari Families
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Bring complete nephrology records, the dialysis schedule if
                  applicable, and the current medication list to the first
                  consultation.
                </li>
                <li>
                  Clarify with your nephrologist that you are also seeking
                  Ayurvedic supportive care.
                </li>
                <li>
                  This ensures both teams are aware of the full treatment
                  picture.
                </li>
                <li>
                  Ask specifically which symptoms Ayurvedic support may help
                  with.
                </li>
                <li>
                  Ask which symptoms require immediate contact with the
                  nephrology team instead.
                </li>
                <li>
                  Plan visit timing around dialysis sessions or other medical
                  appointments.
                </li>
                <li>
                  This can reduce the travel burden from Bilari.
                </li>
                <li>
                  Keep a shared record of symptoms, diet adherence, and any
                  changes.
                </li>
                <li>
                  A shared record helps the care team review information
                  accurately at each visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Common Causes Leading to Kidney Failure
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Long-term uncontrolled diabetes:</strong> One of the
                  leading causes of progressive kidney decline.
                </li>
                <li>
                  Uncontrolled diabetes can eventually result in kidney failure
                  if it is not managed early.
                </li>
                <li>
                  <strong>Chronic, poorly controlled hypertension:</strong>{" "}
                  Sustained high blood pressure gradually damages kidney blood
                  vessels over years.
                </li>
                <li>
                  <strong>Untreated or repeated kidney infections:</strong>{" "}
                  Recurrent infections left unmanaged can contribute to
                  cumulative kidney damage.
                </li>
                <li>
                  <strong>Delayed diagnosis of earlier-stage CKD:</strong>{" "}
                  Patients who miss regular testing during early or moderate
                  CKD stages are more likely to reach kidney failure without
                  adequate preparation or intervention.
                </li>
                <li>
                  <strong>Certain long-term medication use:</strong> Some
                  medications, when used without medical supervision over
                  extended periods, can contribute to kidney decline.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Emotional and Practical Support for Patients and Families
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  A kidney failure diagnosis is understandably stressful for
                  both patients and families.
                </li>
                <li>
                  The hospital&apos;s team is available to explain the
                  condition and treatment plan clearly in plain language.
                </li>
                <li>
                  Families are encouraged to ask questions openly about what
                  to expect.
                </li>
                <li>
                  Open communication helps families avoid navigating the
                  diagnosis with uncertainty.
                </li>
                <li>
                  Practical planning includes coordinating dialysis schedules,
                  travel from Bilari, and appointment timing.
                </li>
                <li>
                  Practical planning is discussed as part of ongoing supportive
                  care.
                </li>
                <li>
                  Patients are encouraged to maintain connections with support
                  systems.
                </li>
                <li>
                  Support systems include family members and the primary
                  nephrology team.
                </li>
                <li>
                  The focus remains on realistic and honest guidance rather
                  than false reassurance about outcomes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                How Supportive Care Fits Into the Overall Treatment Timeline
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Pre-dialysis stage:</strong> Supportive Ayurvedic
                  care may focus on slowing further decline through diet and
                  lifestyle correction.
                </li>
                <li>
                  Pre-dialysis support is provided alongside close nephrology
                  monitoring.
                </li>
                <li>
                  <strong>Dialysis initiation:</strong> Once dialysis begins,
                  supportive care shifts toward managing symptoms and nutrition
                  specific to the dialysis routine.
                </li>
                <li>
                  <strong>Ongoing dialysis management:</strong> Continued
                  supportive visits help address fatigue, appetite, and comfort
                  between dialysis sessions.
                </li>
                <li>
                  <strong>Post-transplant considerations:</strong> Patients
                  who undergo kidney transplant should consult their transplant
                  team before considering supportive Ayurvedic care.
                </li>
                <li>
                  Transplant patients have specific medication and monitoring
                  requirements.
                </li>
                <li>
                  At every stage, the nephrology or transplant team&apos;s
                  guidance takes precedence.
                </li>
                <li>
                  Ayurvedic support is adjusted according to the guidance of the
                  nephrology or transplant team.
                </li>
              </ul>
            </section>



            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-6 font-serif text-3xl">
                Book a Supportive Kidney Care Consultation
              </h2>

              <ul className="mb-6 list-disc space-y-4 pl-5 text-black">
                <li>
                  Families from Bilari can contact Balprada Ayurvedic Hospital
                  for supportive kidney care consultation.
                </li>
                <li>
                  Bring complete nephrology records, dialysis details if
                  applicable, and the current medication list.
                </li>
                <li>
                  Inform your nephrologist before beginning supportive
                  Ayurvedic care.
                </li>
                <li>
                  Seek emergency care immediately if severe symptoms develop.
                </li>
              </ul>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <p className="text-black">
                      F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                      Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Contact Balprada</p>

                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                >
                  <Phone className="mr-2 inline" size={18} />
                  Contact Us
                </Link>

                <Link
                  href="/treatments"
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Explore Treatments
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

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}