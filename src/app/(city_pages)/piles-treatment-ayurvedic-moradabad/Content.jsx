import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicPilesTreatmentInMoradabad() {
  const faqs = [
    {
      q: "Can piles be treated with Ayurveda?",
      a: "Ayurveda offers supportive care through medicines, diet and lifestyle, especially in early stages. Suitability depends on the grade and symptoms, which the vaidya assesses.",
    },
    {
      q: "How long does piles treatment take?",
      a: "Duration varies with the type, grade, bleeding and lifestyle. Your doctor will explain the expected course after consultation.",
    },
    {
      q: "Is surgery always required?",
      a: "Not always. Many early cases are managed with medicine and routine correction. Advanced or complicated cases may need surgical opinion, and honest guidance is given.",
    },
    {
      q: "Which diet is best during piles?",
      a: "A fibre-rich, warm, easily digestible diet with enough water, and less spice, oil and junk food.",
    },
    {
      q: "Is bleeding from piles dangerous?",
      a: "Mild bleeding is common, but heavy, repeated or unexplained bleeding needs prompt medical evaluation to rule out other causes.",
    },
    {
      q: "What should I bring for consultation?",
      a: "Bring previous prescriptions, recent reports, current medicines and a note of symptoms, duration and diet routine.",
    },
    {
      q: "What are the OPD timings?",
      a: "OPD runs from 10:00 AM to 2:00 PM. Please call before visiting, especially for branch availability.",
    },
    {
      q: "Where can I consult in Moradabad?",
      a: "The Moradabad Branch is at F-19, Sector-13, New Moradabad, Delhi Road. Vaidya ji is available on Sundays, so call first.",
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
                Ayurvedic Piles Treatment in Moradabad – Balprada Ayurvedic
                Hospital &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Piles (bawasir or arsha in Ayurveda) cause pain, bleeding,
                  itching and embarrassment, which is why many people delay
                  seeking help.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center in Moradabad
                  has offered trusted Ayurvedic care since 1991, built on the seva
                  sankalp of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Care combines doctor consultation, in-house Ayurvedic medicines,
                  diet guidance, lifestyle correction and regular follow-up.
                </li>
                <li>
                  Patients from Moradabad, Bilari, Sambhal, Rampur, Amroha, Bijnor
                  and nearby districts visit for private, respectful and practical
                  guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Piles (Bawasir / Arsha)
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Are Piles?
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Piles are swollen blood vessels and tissue in or around the anus
                  and lower rectum.
                </li>
                <li>
                  They are commonly called hemorrhoids, bawasir or khooni bawasir
                  when bleeding is present.
                </li>
                <li>
                  Ayurveda describes the condition as arsha and links it closely
                  with weak digestion and constipation.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Types of Piles
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Internal piles: form inside the rectum, are often painless and
                  may show up as bright red bleeding after a bowel movement.
                </li>
                <li>
                  External piles: form under the skin around the anus and may
                  cause pain, itching, swelling or a tender lump.
                </li>
                <li>
                  Prolapsed piles: internal piles that slip outside during motion
                  and may need to be pushed back.
                </li>
                <li>
                  Bleeding piles (khooni bawasir): the most worrying type for
                  patients, as blood loss may cause weakness and tiredness.
                </li>
                <li>
                  Dry piles (badi bawasir): cause pain, a feeling of fullness,
                  itching and discomfort while sitting.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Grades of Piles
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Grade 1: small swelling inside the canal, usually with mild
                  bleeding and no prolapse.
                </li>
                <li>
                  Grade 2: swelling comes out during motion but returns on its
                  own.
                </li>
                <li>
                  Grade 3: swelling comes out and must be pushed back manually.
                </li>
                <li>
                  Grade 4: swelling remains outside and cannot be pushed back,
                  often with pain and discomfort.
                </li>
                <li>
                  Early-stage piles generally respond better to medicine, diet and
                  routine correction, which is why timely consultation matters.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Piles
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Early Warning Signs
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bright red blood on toilet paper, in the toilet bowl or on the
                  stool.
                </li>
                <li>Itching, burning or irritation around the anal area.</li>
                <li>
                  Feeling that the bowels have not emptied fully after passing
                  stool.
                </li>
                <li>Mild discomfort while sitting for long hours.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Advanced Symptoms
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A lump or swelling near the anus that may be tender.
                </li>
                <li>
                  Pain during or after a bowel movement, sometimes lasting for
                  hours.
                </li>
                <li>
                  Mucus discharge and a constant feeling of dampness.
                </li>
                <li>
                  Repeated blood loss that may lead to tiredness, weakness or pale
                  skin.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                When to See a Doctor Without Delay
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Heavy or continuous bleeding, dizziness, fainting or severe
                  weakness.
                </li>
                <li>
                  Severe, sudden pain with a hard, swollen lump near the anus.
                </li>
                <li>
                  Bleeding along with weight loss, change in bowel habit lasting
                  weeks, or black stools, since other conditions can look like
                  piles.
                </li>
                <li>Fever with anal swelling or discharge.</li>
                <li>
                  Emergency cases should receive urgent medical care first;
                  Ayurvedic care can follow under proper guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors According to Ayurveda
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Agni and Digestion
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda teaches that weak digestive fire (mandagni) is the root
                  of arsha.
                </li>
                <li>
                  Poorly digested food leads to constipation, gas and straining,
                  which put pressure on the rectal veins.
                </li>
                <li>
                  This is why care for piles at Balprada begins with digestion,
                  not just the local symptom.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Dosha Imbalance
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Vata-dominant: dry, hard stools, pain, bloating and difficult
                  passage.
                </li>
                <li>
                  Pitta-dominant: burning, bleeding, heat and a sharp, irritating
                  sensation.
                </li>
                <li>
                  Kapha-dominant: heaviness, sticky mucus discharge and slow
                  digestion.
                </li>
                <li>
                  Identifying the dominant dosha helps the vaidya personalise
                  medicines and diet.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Lifestyle and Dietary Triggers
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Chronic constipation and straining on the toilet.</li>
                <li>
                  Low fibre diet, too little water and frequent junk or fried
                  food.
                </li>
                <li>
                  Excess chilli, spicy pickles, tea, alcohol and heavy
                  non-vegetarian meals.
                </li>
                <li>
                  Sitting for long hours at desks, in shops or while driving.
                </li>
                <li>
                  Delaying the natural urge to pass stool, or sitting too long on
                  the toilet.
                </li>
                <li>
                  Pregnancy, obesity, heavy lifting and a family tendency toward
                  piles.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Piles Treatment in Moradabad
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Detailed Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The vaidya listens to your symptoms, duration, bleeding pattern,
                  bowel habit, food routine, sleep, stress and medical history.
                </li>
                <li>
                  Previous prescriptions, recent reports and current medicines are
                  reviewed before any guidance is suggested.
                </li>
                <li>
                  Consultation is private and comfortable, with sensitivity toward
                  a condition many find difficult to discuss.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Personalised Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Care is planned according to the type of piles, dosha balance,
                  digestive strength and general health.
                </li>
                <li>
                  Balprada&apos;s in-house Ayurvedic medicines are used where
                  suitable, prepared with attention to quality.
                </li>
                <li>
                  The plan may include medicines for digestion, gentle bowel
                  regulation, soothing of inflammation and support for bleeding
                  tendency.
                </li>
                <li>
                  Local care such as sitz baths and herbal applications may be
                  advised according to the condition.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma-based approaches may be considered where the
                  assessment supports them.
                </li>
                <li>
                  Yoga and breathing practices help digestion, circulation and a
                  calmer routine.
                </li>
                <li>
                  Naturopathy-style guidance supports simple, nature-led habits.
                </li>
                <li>
                  Balprada Pathology Lab offers blood, urine and diagnostic
                  testing so doctors can review health details more clearly,
                  including checks for tiredness after blood loss.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Regular Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up allows the team to review symptoms, stool pattern,
                  food routine and response to medicines.
                </li>
                <li>
                  Guidance is adjusted as the condition improves, so care remains
                  practical and responsible.
                </li>
                <li>
                  Patients are encouraged to keep notes of bleeding, pain and
                  bowel habit between visits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Therapies Used for Arsha Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Aushadha Chikitsa (Herbal Medicine)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Herbal formulations are chosen to support digestion, ease
                  constipation and calm irritated tissue.
                </li>
                <li>
                  Different medicines are used for bleeding piles and dry piles,
                  since the symptoms and dosha pattern differ.
                </li>
                <li>
                  Dose and duration are decided by the vaidya after assessment;
                  patients should avoid self-medication.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Kshara and Para-surgical Methods
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes kshara karma, a para-surgical approach, for
                  suitable cases of arsha.
                </li>
                <li>
                  Whether a case is suitable depends on the grade, symptoms and
                  overall health.
                </li>
                <li>
                  Cases that need surgery or urgent intervention are advised
                  accordingly, with honest guidance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Sitz Bath (Avagaha Sweda)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sitting in a tub of warm water with a prescribed herbal
                  preparation may ease pain, itching and swelling.
                </li>
                <li>
                  It is usually advised for a short, regular time each day as
                  guided by the doctor.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Basti and Panchakarma Support
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Basti, a medicated enema therapy, is a core Ayurvedic method for
                  balancing vata and supporting bowel health.
                </li>
                <li>
                  Panchakarma is considered only after individual assessment and
                  is not suitable for everyone.
                </li>
                <li>
                  Balprada&apos;s panchakarma facility supports cleansing, balance
                  and recovery under supervision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Piles
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Foods That Help
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Warm, freshly cooked, easily digestible meals.</li>
                <li>
                  Fibre-rich foods such as whole grains, dalia, oats, seasonal
                  vegetables and fruits.
                </li>
                <li>
                  Bottle gourd, ridge gourd, pumpkin, spinach, papaya, bananas and
                  soaked raisins.
                </li>
                <li>
                  Buttermilk (takra), a traditional Ayurvedic favourite for
                  digestion, taken fresh and not too sour.
                </li>
                <li>
                  Plenty of water through the day, according to your doctor&apos;s
                  advice.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Foods to Reduce or Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Very spicy, oily and fried food, and excess chilli or pickles.
                </li>
                <li>Maida, bakery items, packaged snacks and heavy sweets.</li>
                <li>Excess tea, coffee, alcohol and smoking.</li>
                <li>Heavy, hard-to-digest meals late at night.</li>
                <li>Raw, dry or stale food that worsens constipation.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Eating Habits
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Eat at regular times and chew food well.</li>
                <li>
                  Avoid overeating and keep a gap between dinner and bedtime.
                </li>
                <li>Add fibre gradually to avoid gas and bloating.</li>
                <li>
                  Individual diet charts are shared by the doctor, since needs
                  vary by patient.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Home Care Tips
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Daily Routine
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Wake up early and respond to the natural urge for stool without
                  delay.
                </li>
                <li>
                  Do not strain or sit on the toilet for long; avoid using a phone
                  there.
                </li>
                <li>
                  Walk daily, even 20 to 30 minutes, to support digestion.
                </li>
                <li>
                  Keep the anal area clean and dry, and pat gently after washing.
                </li>
                <li>
                  Avoid sitting on hard surfaces for hours; take short standing
                  breaks.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Yoga and Movement
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Simple practices such as pawanmuktasana, vajrasana after meals,
                  and gentle twists support digestion.
                </li>
                <li>
                  Deep breathing and meditation help reduce stress, which affects
                  gut health.
                </li>
                <li>
                  Practise under guidance and avoid heavy straining postures when
                  piles are painful.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Habits to Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Heavy weight lifting and prolonged straining.</li>
                <li>
                  Ignoring constipation or using strong laxatives without advice.
                </li>
                <li>Skipping water, meals or sleep.</li>
                <li>
                  Delaying consultation until bleeding or pain becomes severe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Piles Treatment in Moradabad
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  35 years of experience: Balprada has served patients since 1991
                  with Ayurvedic consultation and care.
                </li>
                <li>
                  In-house medicines: the team emphasises self-prepared medicines
                  and quality.
                </li>
                <li>
                  Experienced vaidyas: assessment is guided by traditional
                  knowledge and clear communication.
                </li>
                <li>
                  Whole-person care: medicines, diet, yoga, naturopathy and
                  panchakarma work together where suitable.
                </li>
                <li>
                  Private and respectful setting: patients can speak openly about
                  sensitive concerns.
                </li>
                <li>
                  Diagnostic support: Balprada Pathology Lab assists with relevant
                  tests.
                </li>
                <li>
                  Peaceful ashram environment: a calm setting that supports
                  discipline and recovery.
                </li>
                <li>
                  Two branches: the Main Branch near Bilari and the Moradabad
                  Branch in New Moradabad.
                </li>
                <li>
                  Free OPD on the 15th of every month: a chance to consult with
                  ease.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Patient Journey at Balprada
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Step 1: Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Share symptoms, bowel habit, diet, medicines and any reports you
                  already have.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 2: Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Receive a personalised plan covering medicines, diet and
                  routine.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 3: Supportive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga, panchakarma, naturopathy or pathology support are added
                  where suitable.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 4: Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Regular review helps the team observe progress and adjust
                  guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Piles Consultation in Moradabad
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Do not let embarrassment delay care; early guidance often makes
                  recovery easier.
                </li>
                <li>Free OPD is available on the 15th of every month.</li>
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. Daily,
                  10:00 AM to 2:00 PM. Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001. Sunday vaidya availability.
                  Call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>WhatsApp: 8126364606</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                </li>
                <li>
                  Book online at the Balprada appointment page, or explore our
                  related care for weak digestion and panchakarma.
                </li>
              </ul>

              <p className="text-sm text-black">
                Disclaimer: This information is for general awareness and is not a
                substitute for medical advice. Treatment outcomes vary by patient.
                Please consult a qualified doctor before starting any treatment.
              </p>
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