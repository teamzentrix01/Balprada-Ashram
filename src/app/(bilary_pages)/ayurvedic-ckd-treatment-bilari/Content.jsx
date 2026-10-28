import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicCKDTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda support CKD treatment in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for CKD at its Bilari branch, alongside your medical care. It aims to support strength, digestion and comfort.",
    },
    {
      q: "Can CKD be completely cured?",
      a: "Lost kidney function is not easily restored. Early care, sugar and blood pressure control and regular monitoring can help slow progression.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring creatinine, urea, eGFR, urine tests, ultrasound and earlier prescriptions. Balprada Pathology Lab can support further tests.",
    },
    {
      q: "Which foods should I avoid with CKD?",
      a: "Avoid excess salt, packaged and fried food, cold drinks and unverified supplements. Your exact diet depends on your stage and reports.",
    },
    {
      q: "Can I stop dialysis or my medicines?",
      a: "No, please never stop dialysis or prescribed medicines without your nephrologist&apos;s advice. Ayurvedic care is offered as support only.",
    },
    {
      q: "Is free consultation available?",
      a: "Yes, free OPD is available on the 15th of every month from 10:00 AM to 2:00 PM. Please call 8126364606 to confirm.",
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
                Ayurvedic CKD Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for chronic kidney disease, known as
                  CKD, to patients from Bilari and nearby villages. The main
                  branch is in Tehsil Bilari, so consultation and follow-up are
                  close to home.
                </li>
                <li>
                  CKD is a long-term condition in which the kidneys slowly lose
                  their filtering power. Balprada approaches it with honesty and
                  patience, offering Ayurvedic guidance to support strength,
                  digestion and comfort alongside the patient&apos;s medical
                  care.
                </li>
                <li>
                  Treatment combines in-house herbal medicines, a kidney-friendly
                  diet, routine correction and regular review. The aim is to
                  support remaining kidney function, ease symptoms such as
                  swelling and weakness, and improve daily quality of life.
                </li>
                <li>
                  Balprada brings thirty-five years of experience in Ayurvedic
                  kidney and liver care. Every plan starts with listening to the
                  patient and reading reports before any medicine or diet is
                  suggested.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding CKD in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  CKD means the kidneys have been damaged for three months or
                  more, and their work of cleaning blood and balancing water and
                  minerals is reduced. It usually develops slowly, often with few
                  early signs.
                </li>
                <li>
                  Ayurvedic thinking connects kidney problems with the urinary
                  channels, called Mutravaha Srotas, and with imbalance of Vata,
                  Pitta and Kapha along with build-up of Ama. Weak digestion and
                  long-standing illness are seen as important background factors.
                </li>
                <li>
                  Ayurveda studies the whole person, including digestion,
                  strength, sleep, mind and daily habits. This helps the vaidya
                  choose gentle care that does not overload already weak kidneys.
                </li>
                <li>
                  Modern medicine describes CKD in five stages using eGFR and
                  creatinine. Balprada respects this understanding and asks
                  patients to bring all reports so that Ayurvedic guidance
                  matches the real stage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of CKD
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Early CKD may cause no clear symptoms, so many patients learn
                  about it only through a blood test showing high creatinine or
                  urea. Regular testing is essential for people with diabetes,
                  high blood pressure or family history.
                </li>
                <li>
                  Swelling of feet, ankles, legs and around the eyes is common.
                  Reduced or increased urine, foamy urine and night-time
                  urination can also appear as kidney function changes.
                </li>
                <li>
                  Constant tiredness, weakness, poor appetite, nausea and a
                  metallic taste in the mouth are frequent complaints. Some
                  patients also have itching, poor sleep and trouble
                  concentrating.
                </li>
                <li>
                  Breathlessness, high blood pressure, muscle cramps and pale
                  skin from low haemoglobin can occur in later stages. Sudden
                  worsening, chest pain or confusion needs emergency medical
                  care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long-standing diabetes is a leading cause of CKD. Poorly
                  controlled blood sugar slowly damages the tiny filters of the
                  kidney, so steady sugar control is the most important
                  protective step.
                </li>
                <li>
                  High blood pressure strains the kidney blood vessels over many
                  years. Regular blood pressure checks and prescribed medicines
                  taken on time are vital for protecting kidney function.
                </li>
                <li>
                  Repeated kidney stones, urine infections, urinary blockage and
                  inherited kidney conditions can also lead to CKD. Finding the
                  cause helps the doctor plan safer care.
                </li>
                <li>
                  Frequent use of painkillers, unmonitored herbal or metal-based
                  preparations and dehydration can add to kidney damage. Patients
                  should never use these without guidance from a qualified
                  doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Care and Regular Monitoring Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  In early stages, CKD can often be slowed when the cause is
                  controlled and diet, medicines and review are followed. Early
                  support helps protect kidney function that still remains.
                </li>
                <li>
                  Patients should never rely only on home remedies or advertised
                  cures. Some products can harm the kidneys, so every medicine
                  and supplement should be taken only under qualified guidance.
                </li>
                <li>
                  Regular tests for creatinine, urea, eGFR, electrolytes and
                  urine protein show how the kidneys are doing. Honest monitoring
                  allows early action before problems become an emergency.
                </li>
                <li>
                  Balprada encourages patients to keep their nephrologist or
                  physician informed. Good coordination between treating doctors
                  protects the patient and keeps care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to CKD Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews symptoms, history, past illness,
                  diabetes and blood pressure status, current medicines, food
                  habits, sleep and daily routine. This full picture makes the
                  advice personal and gentle.
                </li>
                <li>
                  Reports such as creatinine, urea, eGFR, electrolytes, urine
                  tests and ultrasound are reviewed. Patients are asked to bring
                  all earlier prescriptions and hospital papers to the first
                  visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, diet
                  guidance and lifestyle correction wherever suitable. The plan is
                  explained in simple language so the patient and family know
                  what to follow daily.
                </li>
                <li>
                  Progress is reviewed regularly and guidance is adjusted as
                  symptoms and reports change. This steady follow-up keeps care
                  practical, safe and responsible through the whole course.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnosis and Pathology Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab provides blood, urine and diagnostic
                  testing support, so patients can complete kidney-related tests
                  close to the consultation. This saves time and keeps reports
                  and treatment decisions connected.
                </li>
                <li>
                  Tracking creatinine, urea and eGFR over weeks and months gives
                  a clear view of the trend. A single report can mislead, so
                  comparing earlier and later results is more useful.
                </li>
                <li>
                  If reports show advanced CKD or complications, patients are
                  guided honestly toward hospital-level care. Ayurvedic support
                  can continue alongside, where suitable, with the treating
                  doctor informed.
                </li>
                <li>
                  Patients must not stop or change any prescribed modern
                  medicine, including blood pressure, sugar or dialysis plans, on
                  their own. Any change should be discussed openly with the
                  doctors involved.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Medicines and Herbal Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada prepares Ayurvedic medicines in-house under
                  experienced supervision, with attention to the quality of herbs
                  and preparation. Patients receive clear instructions on dose,
                  timing and what to take with food.
                </li>
                <li>
                  Herbs traditionally used for urinary and kidney support include
                  Punarnava, Gokshura, Varuna, Pashanbhed and Guduchi. The choice
                  depends on the patient&apos;s stage, strength and reports, and
                  unsuitable herbs are avoided in weak kidneys.
                </li>
                <li>
                  Medicines are selected to support digestion, ease swelling, and
                  protect strength. They are planned together with diet, because
                  herbs work best when meals and fluids are managed properly.
                </li>
                <li>
                  Patients should avoid buying random kidney tonics, powders or
                  metal-based preparations. Wrong herbs or wrong doses can burden
                  the kidneys, so guided use under a vaidya is strongly
                  recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kidney-Friendly Diet Guidelines
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Small, freshly cooked and easily digestible meals suit most
                  CKD patients. Moong dal, khichdi, soft rotis and boiled
                  vegetables are commonly suggested, but the exact plan depends
                  on the stage and blood reports.
                </li>
                <li>
                  Salt should usually be reduced, especially when there is
                  swelling or high blood pressure. Pickles, papad, chips, namkeen
                  and packaged food carry hidden salt and are best avoided.
                </li>
                <li>
                  Protein needs differ at each stage, so the amount should be set
                  by the doctor and not guessed. Too much or too little protein
                  can both cause problems.
                </li>
                <li>
                  Potassium and phosphorus control may be needed in later stages.
                  The vaidya will guide which fruits, vegetables, dairy and dals
                  are suitable for you, based on your latest reports.
                </li>
                <li>
                  Fluid intake should follow medical advice, as some patients
                  need to limit water and others need more. Please never change
                  fluid quantity on your own.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Habits to Avoid
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fried, oily and heavy foods, bakery items, sweets and cold
                  drinks should be avoided. They weaken digestion and can raise
                  sugar, weight and blood pressure, which add to kidney strain.
                </li>
                <li>
                  Painkillers such as diclofenac and ibuprofen can damage kidneys
                  when used often. Always ask the doctor before taking any pain
                  medicine, even for a common headache or joint pain.
                </li>
                <li>
                  Tobacco and alcohol should be stopped, as they harm blood
                  vessels and overall health. Patients should also avoid
                  self-medication with supplements, protein powders and
                  unverified herbal products.
                </li>
                <li>
                  Late-night heavy meals and long gaps without food disturb
                  digestion. Regular meal timing and an early light dinner
                  support better comfort and sleep.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Daily Routine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Adequate rest is important, but complete inactivity is not
                  advised. Gentle walking within comfort helps circulation, mood
                  and sugar control, and patients should increase activity
                  slowly.
                </li>
                <li>
                  Simple breathing practices and meditation can help reduce
                  stress and support blood pressure. Balprada offers yoga and
                  meditation guidance suited to each patient&apos;s strength and
                  condition.
                </li>
                <li>
                  Regular checks of blood pressure, blood sugar and weight at
                  home are very useful. Writing readings in a small notebook
                  helps the doctor adjust the plan at each visit.
                </li>
                <li>
                  Emotional support from family is very valuable. A calm routine
                  and the peaceful ashram setting help patients and caregivers
                  face the long journey with patience.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Care and Facilities
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Strong cleansing therapies are generally not suitable when
                  kidneys are weak and strength is low. Panchakarma is advised
                  only after careful assessment, and only where the vaidya finds
                  it safe.
                </li>
                <li>
                  Gentle supportive measures, rest and digestion support may be
                  planned for suitable patients. The focus stays on comfort,
                  strength and safety rather than aggressive treatment.
                </li>
                <li>
                  Naturopathy, physiotherapy, yoga and meditation facilities can
                  support movement, sleep and emotional steadiness. They are
                  linked to the main plan and adjusted to the patient&apos;s
                  condition.
                </li>
                <li>
                  Patients already on dialysis should continue it as advised by
                  their nephrologist. Ayurvedic care may be offered only as
                  supportive care, never as a replacement.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once for severe breathlessness,
                  chest pain, very little or no urine, repeated vomiting,
                  confusion, extreme drowsiness or sudden heavy swelling. These
                  can be dangerous signs.
                </li>
                <li>
                  Very high potassium, fluid overload or severe infection can
                  develop quickly in CKD. Patients with advanced CKD should stay
                  in regular contact with their nephrologist.
                </li>
                <li>
                  Balprada believes in honest guidance. If your condition needs
                  emergency or advanced hospital care, the team will say so
                  clearly and support your recovery afterwards where possible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Bilari Patients Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The main branch is in Tehsil Bilari, making visits convenient
                  for patients from Bilari, Guarau, Bhidwari, Chandausi, Sambhal
                  and nearby areas. Regular follow-up is much easier when the
                  centre is close.
                </li>
                <li>
                  The hospital carries the seva sankalp of Sw. Vaidya Vijay Pal
                  Singh Ji and over thirty-five years of Ayurvedic experience.
                  Many patients with kidney, liver and chronic illness have
                  trusted this centre for long-term care.
                </li>
                <li>
                  Patients describe the staff as humble and kind, and the ashram
                  surroundings as calm and healing. A peaceful setting supports
                  the mind and helps patients stay disciplined with diet and
                  routine.
                </li>
                <li>
                  Medicines, pathology, diet guidance and follow-up are available
                  under one roof. This reduces confusion, saves travel and keeps
                  the whole treatment journey connected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                OPD Timings and Contact Details
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. Open
                  daily from 10:00 AM to 2:00 PM. Call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001. Vaidya ji is available on
                  Sundays, so please call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  before visiting.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
                  Please carry creatinine, urea, eGFR, urine and ultrasound
                  reports, earlier prescriptions and a list of current medicines.
                </li>
                <li>
                  Email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  or use the Book Appointment option on the website to plan your
                  visit.
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