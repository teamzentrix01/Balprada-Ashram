import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicWeightLossTreatmentInMoradabad() {
  const faqs = [
    {
      q: "Can Ayurveda help with weight loss?",
      a: "Ayurveda offers supportive care through medicines, diet and lifestyle. Results depend on the cause, your discipline and your overall health, and cannot be guaranteed.",
    },
    {
      q: "How much weight can I lose, and how fast?",
      a: "Healthy weight loss is gradual and differs for each person. The doctor will set realistic goals after consultation.",
    },
    {
      q: "Is dieting or fasting necessary?",
      a: "Not extreme dieting. A balanced, warm and light diet with regular timings is advised instead of crash diets.",
    },
    {
      q: "Can I take Ayurvedic medicines with my current medicines?",
      a: "Do not stop any prescribed medicine on your own. Bring your prescriptions so the doctor can advise safely.",
    },
    {
      q: "Is weight loss treatment suitable for everyone?",
      a: "Not always. Children, pregnant women, the elderly and those with serious illness need careful assessment first.",
    },
    {
      q: "What should I bring for consultation?",
      a: "Bring previous prescriptions, recent reports, current medicines and a note of your weight history and diet routine.",
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
                Ayurvedic Weight Loss Treatment in Moradabad – Balprada
                Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Extra weight is more than a matter of appearance: it can affect
                  energy, joints, sleep, hormones, blood sugar, blood pressure and
                  confidence.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center in Moradabad
                  has offered trusted Ayurvedic care since 1991, built on the seva
                  sankalp of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Care combines doctor consultation, in-house Ayurvedic medicines,
                  diet discipline, yoga and lifestyle correction, with regular
                  follow-up.
                </li>
                <li>
                  Patients from Moradabad, Bilari, Sambhal, Rampur, Amroha, Bijnor
                  and nearby districts visit for personalised, practical and
                  supervised guidance.
                </li>
                <li>
                  The aim is steady, healthy and sustainable weight management,
                  not crash dieting or quick-fix promises.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Obesity (Sthaulya) in Ayurveda
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Is Excess Weight?
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Excess weight or obesity means body fat has built up to a level
                  that may affect health.
                </li>
                <li>
                  It is influenced by food, activity, sleep, stress, hormones,
                  genes, medicines and age.
                </li>
                <li>
                  Doctors often look at body weight, waist size and related
                  conditions such as diabetes, thyroid and blood pressure.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                The Ayurvedic View
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes the condition as sthaulya, linked to excess
                  medas (fat tissue).
                </li>
                <li>
                  Weak digestion (agni) and poorly processed food are believed to
                  lead to accumulated fat and toxins (ama).
                </li>
                <li>
                  Kapha dosha is considered dominant, giving heaviness, slow
                  digestion, sluggishness and a tendency to gain weight.
                </li>
                <li>
                  Treatment therefore aims to improve digestion and metabolism,
                  not only to reduce the number on the scale.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Why Weight Loss Is Hard to Sustain
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Crash diets and extreme exercise may give short-term results but
                  are often followed by weight regain.
                </li>
                <li>
                  Underlying causes such as thyroid imbalance, PCOS, stress or
                  poor sleep may be overlooked.
                </li>
                <li>
                  Long-term habits matter more than short bursts of effort, which
                  is why follow-up is a part of care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Weight Gain
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Food and Eating Habits
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Frequent junk food, fried snacks, sweets, bakery items and
                  sugary drinks.
                </li>
                <li>Overeating, late dinners and eating when not hungry.</li>
                <li>
                  Skipping breakfast and then eating heavy meals later in the day.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Sedentary Lifestyle
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long hours of desk work, driving or shop sitting with little
                  movement.
                </li>
                <li>Daytime sleeping and very late nights.</li>
                <li>Lack of regular walking, exercise or yoga.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Medical and Hormonal Factors
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Hypothyroidism and other thyroid disorders.</li>
                <li>PCOS and hormonal imbalance in women.</li>
                <li>
                  Diabetes, insulin resistance and some long-term medicines.
                </li>
                <li>
                  Weight gain after pregnancy, menopause or a period of illness.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Stress, Sleep and Emotional Eating
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chronic stress may increase cravings and fat storage.
                </li>
                <li>
                  Poor or irregular sleep can disturb hunger and metabolism.
                </li>
                <li>
                  Emotional eating is common and needs patient, non-judgmental
                  support.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Family Tendency
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A family history of obesity, diabetes or heart disease increases
                  risk.
                </li>
                <li>
                  Personal body type (prakriti) influences how weight shows
                  itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs and Concerns Linked to Excess Weight
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Everyday Symptoms
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Breathlessness or tiredness on mild exertion.</li>
                <li>Heaviness, sluggishness and excessive sleepiness.</li>
                <li>Joint pain, especially in the knees, hips and back.</li>
                <li>
                  Excessive sweating, body odour or skin folds that become
                  irritated.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Associated Health Concerns
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  High blood pressure, high cholesterol and heart-related risks.
                </li>
                <li>Blood sugar problems and type 2 diabetes.</li>
                <li>Fatty liver, digestive issues and acidity.</li>
                <li>Irregular periods, PCOS and fertility concerns.</li>
                <li>Snoring and disturbed sleep.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                When to Seek Medical Care Without Delay
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Chest pain, severe breathlessness or fainting.</li>
                <li>
                  Rapid, unexplained weight gain or swelling in the legs and face.
                </li>
                <li>
                  Extreme thirst, frequent urination or sudden vision changes.
                </li>
                <li>
                  Emergencies should receive urgent medical care first; Ayurvedic
                  care can follow under proper guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Weight Management in Moradabad
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Detailed Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The vaidya reviews your weight history, eating pattern,
                  activity, sleep, stress and past attempts at weight loss.
                </li>
                <li>
                  Medical history, thyroid, sugar, cholesterol, blood pressure and
                  other reports are reviewed.
                </li>
                <li>
                  Current medicines and previous prescriptions are noted before
                  any guidance is suggested.
                </li>
                <li>
                  Consultation is private, respectful and free of judgment.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Personalised Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The plan is based on dosha balance, digestion, body strength and
                  associated conditions.
                </li>
                <li>
                  Balprada&apos;s in-house Ayurvedic medicines are used where
                  suitable, with attention to quality.
                </li>
                <li>
                  Medicines aim to support digestion, metabolism and the reduction
                  of excess fat and heaviness.
                </li>
                <li>
                  Diet and routine correction are treated as part of the
                  treatment, not as extras.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga and breathing practice help movement, flexibility and
                  stress.
                </li>
                <li>
                  Panchakarma-based approaches may be considered where assessment
                  supports them.
                </li>
                <li>
                  Naturopathy-style guidance supports simple, nature-led habits.
                </li>
                <li>
                  Balprada Pathology Lab offers blood, urine and diagnostic
                  testing so doctors can review health details more clearly.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Regular Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up allows the team to review weight, waist, energy,
                  digestion and response to medicines.
                </li>
                <li>
                  Guidance is adjusted as the body changes, so care remains
                  practical and responsible.
                </li>
                <li>
                  Patients are encouraged to keep a simple food and activity diary
                  between visits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Therapies Used for Weight Management
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Aushadha Chikitsa (Herbal Medicine)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Herbal formulations are chosen to support digestion, metabolism
                  and the clearing of ama.
                </li>
                <li>
                  Medicines differ according to the patient&apos;s dosha pattern
                  and associated conditions, so there is no single remedy for all.
                </li>
                <li>
                  Dose and duration are decided by the vaidya; patients should
                  avoid self-medication, &quot;fat burner&quot; products and
                  unlabelled powders.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Udvartana (Herbal Powder Massage)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Udvartana is a dry herbal powder massage traditionally used to
                  reduce heaviness and support circulation.
                </li>
                <li>
                  It is advised only for suitable patients, and not on irritated
                  or broken skin.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Shodhana (Panchakarma Cleansing)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes cleansing methods such as virechana and
                  basti for suitable cases of excess kapha and medas.
                </li>
                <li>
                  These therapies are planned only after individual assessment and
                  are not suitable for everyone, including weak patients, the
                  elderly or pregnant women unless advised.
                </li>
                <li>
                  Balprada&apos;s panchakarma facility supports cleansing, balance
                  and recovery under supervision.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Rasayana and Strength Support
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Supportive measures help keep strength and energy steady during
                  weight reduction.
                </li>
                <li>
                  They are chosen according to age, digestion and overall
                  condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Weight Concerns Linked to Other Conditions
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Thyroid and Weight Gain
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Hypothyroidism can slow metabolism and make weight loss harder.
                </li>
                <li>
                  Balprada offers care for thyroid and metabolic concerns, which
                  can support the wider picture.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                PCOS and Hormonal Balance
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Irregular periods, acne, excess hair and weight gain may point
                  to PCOS.
                </li>
                <li>
                  Women&apos;s wellness care at Balprada addresses hormonal
                  balance and menstrual health.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Diabetes and Blood Pressure
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Weight, blood sugar and blood pressure often affect each other.
                </li>
                <li>
                  Do not stop or change any prescribed medicine on your own; the
                  doctor will plan care around your current treatment.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Fatty Liver and Digestion
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Excess weight is often linked with fatty liver and weak
                  digestion.
                </li>
                <li>
                  Liver and digestive care at Balprada can be part of the overall
                  plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Healthy Weight Management
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Foods That May Help
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Fresh, warm, light and freshly cooked meals.</li>
                <li>
                  Whole grains, pulses, moong dal, seasonal vegetables and fruits.
                </li>
                <li>
                  Bitter and astringent vegetables such as bitter gourd, bottle
                  gourd and leafy greens, as suited to the patient.
                </li>
                <li>
                  Warm water through the day, and buttermilk (takra) as advised.
                </li>
                <li>Regular meal timings with a light dinner.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Foods to Reduce or Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sugar, sweets, bakery items, cold drinks and packaged snacks.
                </li>
                <li>
                  Fried, oily and very heavy meals, especially late at night.
                </li>
                <li>
                  Excess rice, potatoes, maida and refined flour products.
                </li>
                <li>Alcohol, smoking and sugary tea or coffee.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Eating Habits
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Eat only when hungry and chew food well.</li>
                <li>
                  Avoid overeating, and keep a gap of two to three hours between
                  dinner and sleep.
                </li>
                <li>
                  Avoid crash diets, long fasting and skipping meals, as they can
                  harm health and lead to weight regain.
                </li>
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
                  Wake up early and sleep at regular times, and avoid daytime
                  sleeping.
                </li>
                <li>
                  Walk daily and add movement through the day; take standing
                  breaks from long sitting.
                </li>
                <li>
                  Include simple exercise or yoga as advised, and increase
                  gradually.
                </li>
                <li>Drink warm water and avoid chilled drinks.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Yoga and Movement
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Gentle practices such as surya namaskar, tadasana, bhujangasana
                  and pranayama may support metabolism and flexibility.
                </li>
                <li>
                  Practise under guidance, especially if you have joint pain, high
                  blood pressure, heart concerns or are older.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Stress and Sleep
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Meditation, breathing practice and a calm evening routine help
                  reduce emotional eating.
                </li>
                <li>Aim for sound, regular sleep.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Habits to Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Crash diets, unsupervised fasting and unlabelled
                  &quot;slimming&quot; products.
                </li>
                <li>
                  Comparing yourself with others or expecting quick results.
                </li>
                <li>Stopping prescribed medicines without medical advice.</li>
                <li>Delaying consultation until health problems appear.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Weight Loss in Moradabad
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
                  Supervised, realistic approach: goals are steady and
                  health-focused, not quick-fix promises.
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
                  Share your weight history, routine, reports and current
                  medicines.
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
                Book Your Weight Management Consultation in Moradabad
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Start with a steady, supervised plan instead of another crash
                  diet; early guidance makes healthy habits easier to keep.
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
                  related care for obesity, diabetes, thyroid and panchakarma.
                </li>
              </ul>
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