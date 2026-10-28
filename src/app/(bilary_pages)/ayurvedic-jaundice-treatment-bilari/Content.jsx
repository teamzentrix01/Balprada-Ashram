import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicJaundiceTreatmentInBilari() {
  const faqs = [
    {
      q: "Can jaundice be treated with Ayurveda in Bilari?",
      a: "Yes, Balprada offers Ayurvedic care for jaundice at its Bilari branch, including medicines, diet and follow-up. Treatment is planned after reviewing your symptoms and reports.",
    },
    {
      q: "How long does Ayurvedic jaundice treatment take?",
      a: "Recovery time depends on the cause, bilirubin level, age and overall strength. The vaidya explains the expected course after the first consultation and reviews it regularly.",
    },
    {
      q: "Do I need to bring reports for the first visit?",
      a: "Yes, please bring bilirubin, liver function and ultrasound reports if available. If you have none, Balprada Pathology Lab can support the required tests.",
    },
    {
      q: "Which foods should I avoid during jaundice?",
      a: "Avoid fried, oily, spicy and outside food, along with alcohol, pickles and heavy sweets. Light home-cooked meals are best.",
    },
    {
      q: "Can I take Ayurvedic medicine with my allopathic medicine?",
      a: "Do not stop any prescribed medicine without advice. Share your full medicine list with the vaidya so guidance stays safe.",
    },
    {
      q: "Is there any free consultation available?",
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
                Ayurvedic Jaundice Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  Ayurvedic jaundice treatment for patients from Bilari and
                  nearby villages. The main branch is in Tehsil Bilari, so
                  families do not need to travel to a big city for consultation
                  and follow-up.
                </li>
                <li>
                  Care is built on thirty-five years of experience in Ayurvedic
                  liver and digestive care. Every plan starts with listening to
                  the patient, reading reports and understanding the full health
                  picture before any medicine or diet is suggested.
                </li>
                <li>
                  Treatment combines in-house herbal medicines, liver-friendly
                  diet discipline, lifestyle correction and regular review. The
                  aim is to support the liver, improve digestion and help the
                  body recover steadily with responsible guidance.
                </li>
                <li>
                  Jaundice is a sign that needs proper attention, not a problem
                  to manage at home alone. Balprada encourages early consultation
                  and works alongside your blood and liver function reports so
                  that care stays safe and practical.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Jaundice in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  In Ayurveda, jaundice is closely linked to Kamala, a condition
                  connected with aggravated Pitta dosha. When Pitta rises, it can
                  disturb the liver, the blood and the digestive fire, leading to
                  the yellow colour seen in the eyes and skin.
                </li>
                <li>
                  Classical texts describe Kamala as involving the liver and the
                  bile-carrying channels. Ayurvedic care therefore focuses on
                  calming Pitta, supporting the liver and restoring healthy
                  digestion rather than only addressing the colour of the skin.
                </li>
                <li>
                  Weak digestive fire, known as Agni, is considered a root
                  factor. When food is not digested well, unprocessed waste
                  called Ama can build up and further burden the liver, which is
                  why diet receives so much attention.
                </li>
                <li>
                  Modern medicine explains jaundice as a rise in bilirubin in the
                  blood. Balprada respects this understanding and encourages
                  patients to bring their bilirubin and liver function reports so
                  Ayurvedic guidance fits the real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Jaundice
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yellowing of the eyes, skin and nails is the most visible sign.
                  It may begin in the whites of the eyes and slowly spread, and
                  many patients notice it first when a family member points it
                  out.
                </li>
                <li>
                  Dark yellow or tea-coloured urine and pale or clay-coloured
                  stools are common signs. These changes suggest that bile is not
                  flowing normally and should always be shown to a doctor.
                </li>
                <li>
                  Weakness, constant tiredness and loss of appetite often come
                  along with jaundice. Patients may feel heavy after meals, avoid
                  oily food and lose interest in eating, which slows recovery if
                  not corrected.
                </li>
                <li>
                  Nausea, vomiting, mild fever, itching and pain or heaviness in
                  the upper right abdomen can also appear. The pattern of
                  symptoms helps the vaidya understand how deeply the liver is
                  affected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Viral infections of the liver, such as hepatitis A and
                  hepatitis E, are frequent causes in this region. They often
                  spread through contaminated water or food, especially during
                  the rainy season.
                </li>
                <li>
                  Fatty liver, long-term alcohol use, and unmonitored use of
                  strong medicines can overload the liver over time. Many
                  patients discover liver stress only when jaundice appears.
                </li>
                <li>
                  Gallstones or blockage in the bile channels can cause
                  obstructive jaundice, which needs careful assessment. Pathology
                  and imaging reports help separate such cases from simple liver
                  inflammation.
                </li>
                <li>
                  Irregular meals, excess spicy, fried and fermented food, poor
                  sleep and ongoing stress are considered Pitta-aggravating
                  habits in Ayurveda. Correcting them is a central part of the
                  recovery plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to Jaundice Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews symptoms, medical history, current
                  medication, food habits, sleep, stress and daily routine. This
                  complete picture ensures that advice is personal and not a
                  one-size-fits-all packet of medicine.
                </li>
                <li>
                  Reports such as bilirubin, SGOT, SGPT, alkaline phosphatase and
                  ultrasound are reviewed where available. Patients are advised
                  to bring all recent papers, including earlier prescriptions, to
                  their first visit.
                </li>
                <li>
                  A care plan is then prepared using Ayurvedic medicines, diet
                  guidance and lifestyle correction wherever suitable. The plan is
                  explained in simple language so the patient and family
                  understand what to follow each day.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
                  symptoms and reports change. This follow-up habit keeps
                  treatment practical, safe and responsible for the whole
                  recovery period.
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
                  testing support, so patients can complete important
                  liver-related tests close to the consultation. This saves time
                  and keeps reports and treatment decisions connected.
                </li>
                <li>
                  Liver function tests help track how the liver is responding
                  over weeks. Comparing reports before and during care gives the
                  patient and the vaidya a clear view of progress.
                </li>
                <li>
                  If reports or symptoms suggest a severe or complicated
                  condition, patients are guided honestly to seek hospital-level
                  medical care. Ayurvedic support can continue alongside, where
                  appropriate, with the treating doctor aware of it.
                </li>
                <li>
                  Patients are asked not to stop or change any prescribed modern
                  medicine on their own. Any change should be discussed openly
                  with the doctors involved.
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
                  Herbs traditionally used for liver and Pitta balance include
                  Bhumi Amla, Kutki, Kalmegh, Punarnava and Guduchi. The exact
                  selection depends on the individual patient, never on a fixed
                  formula for everyone.
                </li>
                <li>
                  Medicines are chosen to support liver function, ease digestion
                  and reduce the heat-related symptoms of Pitta. They are planned
                  together with diet, because herbs work best when meals are
                  light and regular.
                </li>
                <li>
                  Patients should avoid buying random herbal powders or local
                  remedies for jaundice. Wrong herbs or wrong doses can burden
                  the liver, so guided use under a vaidya is strongly
                  recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Jaundice Recovery
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Light, freshly cooked and easily digestible meals are the
                  foundation of recovery. Moong dal khichdi, thin dal, boiled
                  vegetables and soft rotis are commonly advised in the early
                  phase.
                </li>
                <li>
                  Foods that are cooling and gentle on the liver, such as bottle
                  gourd, ridge gourd, pumpkin, pomegranate and sweet seasonal
                  fruit, are usually suggested. Portions are kept small and meals
                  are taken at regular times.
                </li>
                <li>
                  Oily, fried, heavy and very spicy food should be avoided
                  completely during treatment. Pickles, street food, bakery
                  items, red meat and packaged snacks place extra load on the
                  weak liver.
                </li>
                <li>
                  Alcohol, tobacco and unnecessary painkillers must be stopped,
                  as they directly harm the liver. Patients are advised to drink
                  boiled or properly filtered water and avoid outside food during
                  recovery.
                </li>
                <li>
                  Sugarcane juice and coconut water are often taken during
                  jaundice, but they should be used only as advised for your
                  condition. Patients with diabetes or other issues need personal
                  guidance on quantity.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Routine for Faster Recovery
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Adequate rest is essential, because the liver heals better when
                  the body is not under strain. Heavy physical work, late nights
                  and long travel are discouraged until strength returns.
                </li>
                <li>
                  Eating on time and not skipping meals helps stabilise
                  digestion. A fixed daily routine supports Agni and reduces the
                  Pitta aggravation that comes from irregular habits.
                </li>
                <li>
                  Gentle walking, simple breathing practice and calm meditation
                  may be added once energy improves. Balprada offers yoga and
                  meditation support, so patients can learn practices suited to
                  their stage of recovery.
                </li>
                <li>
                  Managing stress, anger and worry matters in Ayurveda, because
                  mental heat can increase Pitta. Family support and a peaceful
                  environment, such as the ashram setting, help the healing
                  journey.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Supportive Facilities
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma therapies may be considered for suitable patients
                  after the acute phase has settled. They are planned according
                  to individual assessment, strength and reports, and are never
                  forced on every patient.
                </li>
                <li>
                  Cleansing and Pitta-balancing approaches are used with great
                  care when the patient is weak. The vaidya decides whether and
                  when such therapy is appropriate for the liver condition.
                </li>
                <li>
                  Naturopathy, yoga and meditation facilities complement the main
                  treatment by supporting digestion, sleep and emotional
                  steadiness. These facilities are part of the wider care
                  available at the Balprada ashram.
                </li>
                <li>
                  Physiotherapy and rest guidance are also available when long
                  weakness or body pain affects daily movement. All supportive
                  care is linked to the main plan, so nothing runs in isolation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital immediately if yellowing comes with
                  severe vomiting, confusion, extreme sleepiness, black stools,
                  bleeding, swelling of the abdomen or very high fever. These can
                  be signs of serious liver trouble.
                </li>
                <li>
                  Newborn jaundice, jaundice in pregnancy and jaundice in people
                  with existing liver disease need prompt medical assessment.
                  Ayurvedic care should never delay urgent evaluation in these
                  situations.
                </li>
                <li>
                  Balprada believes in honest guidance. If your condition needs
                  emergency or advanced hospital care, the team will advise you
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
                  The main branch is located within Tehsil Bilari, making
                  consultation and follow-up convenient for patients from Bilari,
                  Guarau, Bhidwari, Chandausi, Sambhal and surrounding areas.
                </li>
                <li>
                  The hospital carries the seva sankalp of Sw. Vaidya Vijay Pal
                  Singh Ji and over thirty-five years of Ayurvedic experience.
                  Many patients with kidney, liver and chronic illness have
                  trusted this centre for long-term care.
                </li>
                <li>
                  Patients and families describe the staff as humble and kind,
                  and the ashram surroundings as calm and healing. A peaceful
                  setting supports the mind, which is important during any liver
                  illness.
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
                  Patients are advised to carry previous reports, prescriptions
                  and a list of current medicines.
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