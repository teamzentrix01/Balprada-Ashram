import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function FattyLiverAyurvedicTreatmentInBilari() {
  const faqs = [
    {
      q: "Can fatty liver be treated with Ayurveda in Bilari?",
      a: "Balprada offers Ayurvedic care for fatty liver at its Bilari branch, including medicines, diet and follow-up. The plan is made after reviewing your symptoms and reports.",
    },
    {
      q: "How long does Ayurvedic fatty liver treatment take?",
      a: "It depends on the grade, weight, sugar and cholesterol levels, and how well diet and routine are followed. The vaidya explains the expected course after the first consultation.",
    },
    {
      q: "Do I need to bring my ultrasound report?",
      a: "Yes, please bring ultrasound, SGPT, SGOT and lipid reports if you have them. If not, Balprada Pathology Lab can support the required tests.",
    },
    {
      q: "Which foods should I avoid with fatty liver?",
      a: "Avoid fried food, sweets, sugary drinks, bakery items, alcohol and heavy late dinners. Light, home-cooked meals are best.",
    },
    {
      q: "Can I take Ayurvedic medicine with my regular medicines?",
      a: "Do not stop any prescribed medicine without advice. Share your full medicine list with the vaidya so guidance stays safe.",
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
                Fatty Liver Ayurvedic Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  Ayurvedic care for fatty liver to patients from Bilari and
                  nearby villages. The main branch is in Tehsil Bilari, so
                  consultation and regular follow-up are close to home.
                </li>
                <li>
                  Fatty liver often causes few symptoms at first, so many people
                  find it only on an ultrasound done for another reason. Balprada
                  encourages patients to take such a report seriously and begin
                  care early rather than wait for discomfort.
                </li>
                <li>
                  Care combines in-house herbal medicines, a liver-friendly diet,
                  daily routine correction and regular review. The goal is to
                  support liver function, improve digestion and help the body
                  reduce excess fat through steady, responsible guidance.
                </li>
                <li>
                  Balprada brings thirty-five years of experience in Ayurvedic
                  liver and digestive care. Every plan starts with listening to
                  the patient and reading reports before any medicine or diet is
                  suggested.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Fatty Liver in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fatty liver is the build-up of excess fat inside liver cells.
                  Ayurvedic thinking connects it with Yakrit Vriddhi and Medo
                  Dushti, where aggravated Kapha and Meda, the fat tissue,
                  burden the liver and slow its natural work.
                </li>
                <li>
                  Weak digestive fire, called Agni, is seen as a root factor.
                  When food is not digested well, unprocessed waste called Ama
                  collects in the body and the channels, and the liver slowly
                  becomes heavy and sluggish.
                </li>
                <li>
                  Ayurveda treats the whole person and not only the organ. Food
                  habits, sleep, movement, stress and body weight are all
                  studied, because they decide how the liver handles fat every
                  single day.
                </li>
                <li>
                  Modern medicine groups fatty liver into alcohol-related and
                  non-alcohol-related types and describes it in grades on
                  ultrasound. Balprada respects these findings and asks patients
                  to bring their reports so that Ayurvedic guidance matches the
                  real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Fatty Liver
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many patients have no clear symptoms in the early stage. The
                  problem may only be seen on an ultrasound, or as raised SGPT
                  and SGOT in a routine blood test.
                </li>
                <li>
                  Constant tiredness, low energy and a feeling of heaviness after
                  meals are common complaints. Some patients also notice poor
                  sleep and slow digestion that does not improve with ordinary
                  home care.
                </li>
                <li>
                  Mild discomfort, fullness or dull pain in the upper right side
                  of the abdomen can appear. Bloating, gas and an uneasy stomach
                  are also reported, especially after oily food.
                </li>
                <li>
                  Increasing belly fat, difficulty losing weight and darkening of
                  skin folds can point toward a metabolic imbalance. These signs
                  often come along with fatty liver and should be discussed with
                  the doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Excess oily, fried, sweet and packaged food is a leading cause.
                  Daily use of sweets, bakery items, cold drinks and heavy late
                  dinners keeps the liver loaded with fat.
                </li>
                <li>
                  A sedentary routine with long sitting hours and little walking
                  slows metabolism. Over time the body stores more fat around the
                  abdomen and inside the liver.
                </li>
                <li>
                  Obesity, diabetes, high cholesterol and high triglycerides are
                  strongly linked with fatty liver. Patients with these
                  conditions should check their liver health even when they feel
                  well.
                </li>
                <li>
                  Regular alcohol use, long use of certain medicines without
                  guidance, stress and irregular sleep also strain the liver.
                  Ayurveda counts irregular meal timing and day sleep as habits
                  that aggravate Kapha.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Care Matters
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  In the early stage, fatty liver may be eased through diet,
                  routine and guided medicines. Waiting allows inflammation to
                  build, and the liver may become harder to support later.
                </li>
                <li>
                  Untreated fatty liver can progress to liver inflammation and
                  scarring in some patients. This is why regular monitoring and
                  honest follow-up are important even when symptoms are mild.
                </li>
                <li>
                  Early care also helps the related problems of weight, sugar and
                  cholesterol. Improving the liver often goes hand in hand with
                  better energy, digestion and daily comfort.
                </li>
                <li>
                  Patients who act early usually need simpler changes. Balprada
                  guides families step by step so that the plan feels practical
                  and not overwhelming.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to Fatty Liver Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews symptoms, history, current medicines,
                  food habits, sleep, stress and daily routine. This full picture
                  ensures advice is personal and not a standard packet of
                  medicine for everyone.
                </li>
                <li>
                  Reports such as ultrasound, SGPT, SGOT, lipid profile and blood
                  sugar are reviewed where available. Patients are asked to bring
                  all earlier prescriptions and reports to the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, diet
                  guidance and lifestyle correction wherever suitable. The plan is
                  explained in simple language so that the patient and family
                  know what to follow each day.
                </li>
                <li>
                  Progress is reviewed regularly and guidance is adjusted as
                  reports and energy levels change. This steady follow-up keeps
                  the treatment safe, practical and responsible over the whole
                  course.
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
                  testing support, so patients can complete liver-related tests
                  close to the consultation. This saves time and keeps reports
                  and treatment decisions connected.
                </li>
                <li>
                  Liver function tests and lipid profile help track how the body
                  responds over weeks and months. Comparing earlier and later
                  reports gives both the patient and the vaidya a clear view of
                  progress.
                </li>
                <li>
                  If reports suggest advanced liver disease or another serious
                  problem, patients are guided honestly to seek hospital-level
                  medical care. Ayurvedic support can continue alongside, where
                  suitable, with the treating doctor informed.
                </li>
                <li>
                  Patients should not stop or change any prescribed modern
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
                  Herbs traditionally used for liver and fat metabolism include
                  Bhumi Amla, Kutki, Punarnava, Guduchi, Triphala and
                  Daruharidra. The final selection depends on each patient and is
                  never a fixed formula for all.
                </li>
                <li>
                  Medicines are chosen to support liver function, kindle Agni and
                  reduce Kapha and Meda build-up. They are planned together with
                  diet and movement, because herbs work best when daily habits
                  support them.
                </li>
                <li>
                  Patients should avoid buying random herbal powders or online
                  liver tonics. Wrong herbs or wrong doses can burden the liver,
                  so guided use under a vaidya is strongly recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Fatty Liver
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Warm, freshly cooked and light meals form the base of the plan.
                  Moong dal, vegetable soups, boiled or lightly sauteed
                  vegetables and whole grain rotis in measured portions are
                  commonly suggested.
                </li>
                <li>
                  Bitter and astringent vegetables such as bottle gourd, ridge
                  gourd, bitter gourd, spinach and fenugreek leaves are helpful
                  for Kapha balance. They are best eaten cooked and with minimal
                  oil.
                </li>
                <li>
                  Fruits such as papaya, apple and pomegranate may be taken in
                  sensible amounts. Patients with diabetes should take personal
                  advice on fruit quantity, as natural sugar still affects blood
                  glucose.
                </li>
                <li>
                  Meals should be taken at fixed times, with a light dinner at
                  least two to three hours before sleep. Eating slowly and
                  stopping before the stomach is full supports digestion and
                  weight control.
                </li>
                <li>
                  Warm water through the day and a pinch of cumin, coriander or
                  ajwain in food can support digestion. These are simple habits,
                  and the vaidya will suggest what suits your constitution.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Habits to Avoid
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fried snacks, deep fried sweets, samosa, pakora, ghee-heavy
                  gravies and bakery items should be reduced or stopped. These
                  add fat load directly and slow the digestive fire.
                </li>
                <li>
                  Sugary drinks, packaged juices, sweets, white bread and excess
                  polished rice raise blood sugar and fat storage. Even small
                  daily amounts add up over months for a person with fatty liver.
                </li>
                <li>
                  Alcohol, tobacco and unnecessary painkillers should be stopped,
                  as they directly harm the liver. Patients are also advised to
                  avoid heavy late-night meals and frequent outside food.
                </li>
                <li>
                  Day sleep after heavy meals and long sitting hours increase
                  Kapha and heaviness. Small habit changes, repeated daily, often
                  matter more than any single strict rule.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle, Yoga and Exercise Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Regular walking of thirty to forty five minutes a day is among
                  the simplest and most effective steps. Patients are advised to
                  start slowly and increase time as strength and stamina improve.
                </li>
                <li>
                  Yoga practices such as Surya Namaskar, Bhujangasana,
                  Dhanurasana and Pawanmuktasana support digestion and abdominal
                  fitness. Balprada offers yoga guidance, so patients learn
                  postures suitable for their age and condition.
                </li>
                <li>
                  Pranayama, especially Kapalabhati and Anulom Vilom where
                  suitable, supports metabolism and calm. Patients with heart,
                  blood pressure or hernia issues should practise only after
                  medical advice.
                </li>
                <li>
                  Adequate sleep and stress control matter because both affect
                  weight and liver health. Meditation support at Balprada helps
                  patients build calm and a steady routine.
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
                  after assessment of strength, reports and constitution. They
                  are planned individually and never applied to every patient in
                  the same way.
                </li>
                <li>
                  Gentle cleansing and Kapha-reducing approaches may support
                  metabolism when the vaidya finds them appropriate. Timing is
                  chosen carefully, especially if the patient is weak or has
                  other conditions.
                </li>
                <li>
                  Naturopathy, physiotherapy, yoga and meditation facilities
                  complement the main plan. They support digestion, movement,
                  sleep and emotional steadiness as part of the wider ashram
                  care.
                </li>
                <li>
                  All supportive care is linked to the main treatment, so nothing
                  runs in isolation. The team reviews how each part is helping
                  before continuing or changing it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once if there is yellowing of eyes,
                  severe abdominal pain, repeated vomiting, black stools,
                  bleeding, confusion or swelling of the abdomen or legs. These
                  signs can point to serious liver trouble.
                </li>
                <li>
                  Patients already diagnosed with cirrhosis or advanced liver
                  disease should stay under their hepatologist. Ayurvedic care in
                  such cases should be supportive and coordinated, never a
                  replacement.
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
                  and nearby areas. Regular follow-up becomes easier when the
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
                  surroundings as calm and healing. A peaceful setting helps the
                  mind, which supports discipline in diet and routine.
                </li>
                <li>
                  Medicines, pathology, diet guidance, yoga and follow-up are
                  available under one roof. This reduces confusion, saves travel
                  and keeps the whole treatment journey connected.
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
                  Please carry your ultrasound, blood reports, earlier
                  prescriptions and a list of current medicines.
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