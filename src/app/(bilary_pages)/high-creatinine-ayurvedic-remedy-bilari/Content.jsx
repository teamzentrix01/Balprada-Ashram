import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HighCreatinineAyurvedicTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda reduce high creatinine in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for high creatinine. Results vary by cause and stage, so no fixed drop is promised.",
    },
    {
      q: "What creatinine level is considered high?",
      a: "Ranges vary by age, sex and lab, often around 0.6 to 1.3 mg/dL. Please let the doctor read your report with your eGFR.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring creatinine, urea, eGFR, urine tests, ultrasound and earlier prescriptions. Balprada Pathology Lab can support further tests.",
    },
    {
      q: "Which foods should I avoid with high creatinine?",
      a: "Avoid excess salt, packaged and fried food, cold drinks, protein powders and unverified supplements. Your exact diet depends on your reports.",
    },
    {
      q: "Can I use home remedies for creatinine?",
      a: "Please avoid random remedies, as some can harm the kidneys. Take only medicines advised after proper assessment.",
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
                High Creatinine Ayurvedic Care in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers guided
                  Ayurvedic care for patients with high creatinine from Bilari
                  and nearby villages. The main branch is in Tehsil Bilari, so
                  consultation and regular follow-up are close to home.
                </li>
                <li>
                  A high creatinine report often frightens families, and many
                  search for a quick home remedy. Balprada advises against
                  self-treatment and instead offers proper assessment, honest
                  explanation and a step-by-step care plan.
                </li>
                <li>
                  Care combines in-house herbal medicines, a kidney-friendly
                  diet, routine correction and regular review. The aim is to
                  support kidney function, find the reason behind the rise and
                  help the patient follow a safe routine.
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
                Understanding Creatinine and What a High Report Means
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Creatinine is a waste product made by normal muscle activity
                  and removed by the kidneys through urine. When the kidneys are
                  not filtering well, creatinine builds up in the blood and the
                  report shows a higher value.
                </li>
                <li>
                  Normal values differ with age, sex, muscle mass and the
                  laboratory. Many labs show a range of roughly 0.6 to 1.3 mg/dL,
                  so your own report range and your doctor&apos;s opinion matter
                  more than any general number.
                </li>
                <li>
                  Creatinine is read together with urea, eGFR, electrolytes and
                  urine tests. eGFR estimates how well the kidneys are filtering,
                  and a falling eGFR with rising creatinine shows a real change
                  in kidney function.
                </li>
                <li>
                  A single high value does not always mean kidney failure.
                  Dehydration, heavy exercise, high protein supplements or lab
                  variation can cause a temporary rise, so repeat testing and
                  clinical review are important.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Reasons for High Creatinine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long-standing diabetes and high blood pressure are leading
                  reasons for a steady rise in creatinine. Both slowly damage the
                  tiny filters of the kidneys, so control of sugar and pressure
                  is the first protective step.
                </li>
                <li>
                  Chronic kidney disease, kidney stones, urine infection, urinary
                  blockage and prostate enlargement can all raise creatinine.
                  Finding the exact cause helps the doctor choose safe and
                  suitable care.
                </li>
                <li>
                  Dehydration, severe diarrhoea, vomiting or low blood pressure
                  can cause a sudden temporary rise. This is often called acute
                  kidney injury and needs prompt medical attention.
                </li>
                <li>
                  Frequent painkillers, unverified herbal or metal-based
                  preparations, protein powders and creatine supplements may
                  raise creatinine or harm the kidneys. Patients should tell the
                  doctor about everything they take.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That May Come with High Creatinine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Mild rises often cause no symptoms at all, which is why many
                  patients discover the problem only in a routine blood test.
                  Regular testing is important for people with diabetes, blood
                  pressure or family history.
                </li>
                <li>
                  Swelling of feet, ankles, legs and around the eyes, along with
                  changes in urine amount or foamy urine, can appear. Night-time
                  urination may also increase.
                </li>
                <li>
                  Constant tiredness, weakness, poor appetite, nausea, itching
                  and poor sleep are common as creatinine rises further. Some
                  patients also have a metallic taste in the mouth.
                </li>
                <li>
                  Breathlessness, confusion, very little urine or vomiting need
                  urgent medical care. These signs can show that waste has built
                  up to a dangerous level.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Guided Care Matters More Than Home Remedies
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many online remedies for creatinine, such as strong herbal
                  drinks or powders, are not tested and may harm weak kidneys.
                  Some contain heavy metals or high potassium, which can be
                  dangerous.
                </li>
                <li>
                  Creatinine rises for different reasons in different people. A
                  remedy that suits one patient may be unsafe for another, so the
                  cause must be understood first.
                </li>
                <li>
                  Early guided care gives the best chance to protect the kidney
                  function that remains. Delay or experiments with random
                  products can waste valuable time.
                </li>
                <li>
                  Balprada does not promise a quick drop in creatinine. The team
                  explains the likely course honestly and uses repeat reports to
                  show what is truly changing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to High Creatinine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews symptoms, history, diabetes and blood
                  pressure status, current medicines, supplements, food habits,
                  sleep and daily routine. This full picture makes the advice
                  personal and gentle.
                </li>
                <li>
                  Reports such as creatinine, urea, eGFR, electrolytes,
                  haemoglobin, urine tests and ultrasound are reviewed. Patients
                  are asked to bring all earlier prescriptions, previous reports
                  and hospital papers to the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, diet
                  guidance and lifestyle correction wherever suitable. The plan is
                  explained in simple language so the patient and family know
                  what to follow daily.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
                  reports and symptoms change. This steady follow-up keeps care
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
                  a clear view of the trend. Comparing earlier and later reports
                  is more useful than reacting to one single value.
                </li>
                <li>
                  Tests should be done under similar conditions, such as with
                  normal water intake and without heavy exercise before sampling.
                  This helps make comparisons fair and reliable.
                </li>
                <li>
                  If reports show a high or rapidly rising creatinine, patients
                  are guided honestly toward hospital-level care. Ayurvedic
                  support can continue alongside, where suitable, with the
                  treating doctor informed.
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
                  depends on the patient&apos;s reports, strength and stage, and
                  unsuitable herbs are avoided in weak kidneys.
                </li>
                <li>
                  Medicines are selected to support digestion, ease swelling and
                  protect strength. They are planned together with diet, because
                  herbs work best when meals and fluids are managed properly.
                </li>
                <li>
                  Patients should avoid buying random kidney tonics, powders or
                  metal-based preparations sold with big promises. Guided use
                  under a vaidya is strongly recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for High Creatinine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Small, freshly cooked and easily digestible meals suit most
                  patients. Moong dal, khichdi, soft rotis and boiled vegetables
                  are commonly suggested, but the exact plan depends on your
                  reports.
                </li>
                <li>
                  Salt is usually reduced, especially when there is swelling or
                  high blood pressure. Pickles, papad, chips, namkeen and
                  packaged food carry hidden salt and are best avoided.
                </li>
                <li>
                  Protein needs depend on the stage, so the amount should be set
                  by the doctor. Heavy protein powders and very high protein
                  diets should be avoided unless specifically advised.
                </li>
                <li>
                  Potassium and phosphorus may need control when kidney function
                  is lower. The vaidya will guide which fruits, vegetables, dals
                  and dairy items suit you, based on your latest reports.
                </li>
                <li>
                  Fluid intake must follow medical advice. Some patients need
                  good hydration, while others need limits because of swelling,
                  so please never change quantity on your own.
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
                  vessels and overall health. Creatine supplements, bodybuilding
                  powders and unverified herbal products should also be avoided.
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
                  and sugar control, and activity should increase slowly.
                </li>
                <li>
                  Heavy gym workouts and strenuous labour just before a blood
                  test can temporarily raise creatinine. Patients are advised to
                  keep to light routine activity before testing.
                </li>
                <li>
                  Simple breathing practices and meditation can help reduce
                  stress and support blood pressure. Balprada offers yoga and
                  meditation guidance suited to each patient&apos;s strength and
                  condition.
                </li>
                <li>
                  Regular home checks of blood pressure, blood sugar and weight
                  are very useful. Writing readings in a small notebook helps the
                  doctor adjust the plan at each visit.
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
                  Patients on dialysis or regular nephrology care should continue
                  it as advised. Ayurvedic care is offered only as support, never
                  as a replacement.
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
                  A sudden jump in creatinine after illness, vomiting, diarrhoea
                  or medicine use needs immediate medical review. Early treatment
                  of the cause can protect the kidneys.
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