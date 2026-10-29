import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AsthmaAyurvedicTreatmentInMoradabad() {
  const faqs = [
    {
      q: "Can Ayurveda cure asthma?",
      a: "Asthma is a long-term condition. Ayurveda offers supportive care to help manage symptoms and general health, and results vary by patient.",
    },
    {
      q: "Can I stop my inhaler during Ayurvedic treatment?",
      a: "No. Never stop or change prescribed medicines on your own. Any change must be decided by your treating doctor.",
    },
    {
      q: "How long does treatment take?",
      a: "Duration depends on severity, how long you have had asthma, triggers and discipline. The doctor will explain the expected course after consultation.",
    },
    {
      q: "Is diet important in asthma?",
      a: "Yes. Warm, light food and avoiding personal triggers form an important part of care.",
    },
    {
      q: "Can children be treated?",
      a: "Children can be assessed, but dose, therapies and safety need extra care. Please bring the child for a proper consultation.",
    },
    {
      q: "What should I bring for consultation?",
      a: "Bring previous prescriptions, inhalers, recent reports, current medicines and a note of symptoms, triggers and diet routine.",
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
                Asthma Ayurvedic Treatment in Moradabad – Balprada Ayurvedic
                Hospital &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Asthma can bring breathlessness, wheezing, chest tightness and
                  night-time cough, disturbing sleep, work and daily activity.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center in Moradabad
                  has offered trusted Ayurvedic care since 1991, built on the seva
                  sankalp of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Care combines doctor consultation, in-house Ayurvedic medicines,
                  diet guidance, yoga and breathing practice, and regular
                  follow-up.
                </li>
                <li>
                  Patients from Moradabad, Bilari, Sambhal, Rampur, Amroha, Bijnor
                  and nearby districts visit for respectful, practical and
                  personalised guidance.
                </li>
                <li>
                  Ayurvedic care is offered as supportive care alongside, and not
                  in place of, urgent or prescribed asthma treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Asthma (Tamak Shwasa) in Ayurveda
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Is Asthma?
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Asthma is a long-term condition in which the airways become
                  inflamed and narrow, making breathing difficult.
                </li>
                <li>
                  Symptoms often come in episodes and may be triggered by dust,
                  smoke, cold air, infection, allergy or stress.
                </li>
                <li>
                  It can occur at any age and often runs in families with
                  allergies.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                The Ayurvedic View
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes breathing disorders under shwasa roga, and
                  the condition resembling asthma as tamak shwasa.
                </li>
                <li>
                  Vata and kapha are considered the main doshas involved: kapha
                  blocks the airways with mucus, and vata disturbs the natural
                  downward movement of breath.
                </li>
                <li>
                  Weak digestion (agni) and accumulated toxins (ama) are believed
                  to feed the cycle, which is why diet and digestion receive
                  attention.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Why Asthma Needs Long-Term Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Asthma tends to be recurring, with good and bad phases.
                </li>
                <li>
                  Managing triggers, strengthening general health and following a
                  steady routine can help reduce the burden of flare-ups.
                </li>
                <li>
                  This is why regular follow-up is an important part of
                  Balprada&apos;s approach.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Asthma
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Everyday Symptoms
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Shortness of breath, especially on walking, climbing stairs or
                  exertion.
                </li>
                <li>A whistling or wheezing sound while breathing out.</li>
                <li>Chest tightness or a feeling of heaviness.</li>
                <li>
                  Dry or mucus-producing cough, often worse at night or early
                  morning.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Symptoms Around a Flare-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Breathlessness that increases through the day or after a
                  trigger.
                </li>
                <li>
                  Difficulty speaking in full sentences or needing to sit upright
                  to breathe.
                </li>
                <li>
                  Disturbed sleep, tiredness and reduced ability to work or play.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                When to Seek Urgent Medical Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Severe breathlessness, blue or grey lips, or inability to speak
                  a full sentence.
                </li>
                <li>
                  Little or no relief from your prescribed reliever inhaler or
                  medicine.
                </li>
                <li>
                  Chest pain, confusion, extreme drowsiness or fast, shallow
                  breathing.
                </li>
                <li>
                  A child who is struggling to breathe, feeding poorly or looks
                  unusually tired.
                </li>
                <li>
                  These are emergencies: go to a hospital immediately, and do not
                  wait for any other treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Triggers of Asthma
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Allergens and Irritants
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  House dust, dust mites, pollen, mould and pet hair.
                </li>
                <li>
                  Smoke from cigarettes, chulha, crop burning, incense and
                  vehicles.
                </li>
                <li>
                  Strong perfumes, sprays, paint fumes and industrial pollution.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Weather and Seasonal Triggers
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Cold air, sudden temperature changes and the change of season.
                </li>
                <li>Humid or foggy weather, and winter mornings.</li>
                <li>
                  Many patients notice flare-ups at seasonal turns, which is why
                  preparation matters.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Infections and Lifestyle
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Colds, throat infections and sinus problems.</li>
                <li>
                  Heavy, oily or cold food, chilled drinks and curd or banana at
                  night, which some patients find worsen mucus.
                </li>
                <li>
                  Overexertion, irregular sleep, constipation and indigestion.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Stress and Emotions
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Anxiety, anger and strong emotions can bring on breathlessness
                  in some people.
                </li>
                <li>
                  Calm routines and breathing practice support emotional
                  steadiness.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Constitution and Family Tendency
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A family history of asthma, eczema or allergies increases the
                  likelihood.
                </li>
                <li>
                  Personal body type (prakriti) influences how the condition shows
                  itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Asthma Care in Moradabad
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Detailed Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The vaidya reviews symptoms, how often episodes occur, known
                  triggers, season pattern, night symptoms and family history.
                </li>
                <li>
                  Food habits, digestion, sleep, stress, work environment and
                  living conditions are discussed.
                </li>
                <li>
                  Previous prescriptions, inhaler use, recent reports and current
                  medicines are reviewed before any guidance is suggested.
                </li>
                <li>Consultation is private and unhurried.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Personalised Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The plan is based on the pattern of the condition, dosha
                  balance, digestive strength and overall health.
                </li>
                <li>
                  Balprada&apos;s in-house Ayurvedic medicines are used where
                  suitable, with attention to quality.
                </li>
                <li>
                  Medicines may aim to support clearer breathing, reduce mucus,
                  strengthen digestion and improve general resilience.
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
                  Yoga and pranayama help breathing capacity, posture and calm.
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
                  Follow-up allows the team to review symptoms, night cough,
                  triggers and response to medicines.
                </li>
                <li>
                  Guidance is adjusted as the condition changes, so care remains
                  practical and responsible.
                </li>
                <li>
                  Patients are encouraged to note flare-ups and possible triggers
                  between visits.
                </li>
                <li>
                  Families are guided on how to prepare for seasonal change, when
                  flare-ups are more likely.
                </li>
                <li>
                  Where needed, the doctor advises coordination with your chest
                  physician or treating doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Therapies Used for Breathing Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Aushadha Chikitsa (Herbal Medicine)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Herbal formulations are chosen to support the lungs, ease mucus
                  and improve digestion.
                </li>
                <li>
                  Different medicines suit dry cough, mucus-heavy cough and
                  allergic patterns, so there is no single remedy for every
                  patient.
                </li>
                <li>
                  Dose and duration are decided by the vaidya; patients should
                  avoid self-medication.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Swedana and Steam Support
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Gentle, supervised steam and sweating therapies are
                  traditionally used to loosen congestion in suitable patients.
                </li>
                <li>
                  They are not suitable during an acute attack, in high fever, or
                  for every patient, so they are used only on advice.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Shodhana (Panchakarma Cleansing)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes cleansing methods such as vamana
                  (therapeutic emesis) for kapha-dominant breathing problems in
                  suitable cases.
                </li>
                <li>
                  These therapies are planned only after individual assessment and
                  are not suitable for everyone, including weak patients, children,
                  the elderly or pregnant women unless advised.
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
                  Rasayana measures support general strength and immunity during
                  the stable phase.
                </li>
                <li>
                  They are chosen according to the patient&apos;s age, digestion
                  and condition.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Important Note on Inhalers and Current Medicines
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Do not stop or reduce any inhaler, steroid or prescribed asthma
                  medicine on your own.
                </li>
                <li>
                  Any change to modern medicines should only be made by the
                  treating doctor.
                </li>
                <li>
                  Ayurvedic care at Balprada is planned with your current
                  treatment in mind, so please bring all prescriptions to the
                  consultation.
                </li>
                <li>
                  Always keep your reliever inhaler with you if it has been
                  prescribed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Asthma Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Foods That May Help
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Warm, freshly cooked, light and easily digestible meals.
                </li>
                <li>
                  Moong dal soup, khichdi, vegetable soups and cooked seasonal
                  vegetables.
                </li>
                <li>
                  Warm water through the day, and ginger, tulsi or turmeric used
                  as per the doctor&apos;s advice.
                </li>
                <li>Regular meal timings with a light dinner.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Foods to Reduce or Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Cold drinks, ice cream, refrigerated food and chilled water.
                </li>
                <li>
                  Curd, banana and heavy sweets at night, if they worsen mucus for
                  you.
                </li>
                <li>Fried, oily, packaged and bakery foods.</li>
                <li>
                  Foods you have personally noticed trigger breathlessness or
                  cough.
                </li>
                <li>Smoking, alcohol and tobacco in any form.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Eating Habits
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Eat only when hungry and avoid overeating.</li>
                <li>
                  Keep a gap of at least two to three hours between dinner and
                  sleep.
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
                  Sleep and wake at regular times, and avoid daytime sleeping.
                </li>
                <li>
                  Keep the bedroom clean, airy and dust-free; wash bedsheets and
                  pillow covers often.
                </li>
                <li>
                  Cover your nose and mouth in dusty or polluted places, and avoid
                  smoke.
                </li>
                <li>Keep the chest and neck warm in cold weather.</li>
                <li>
                  Avoid sudden exposure to cold air and wet hair at night.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Yoga and Breathing Practice
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Gentle practices such as anulom vilom, bhramari and slow deep
                  breathing may support breathing comfort.
                </li>
                <li>
                  Simple postures such as sukhasana and vajrasana can help posture
                  and calm.
                </li>
                <li>
                  Practise under guidance, never during an acute attack, and avoid
                  forceful breathing techniques unless advised.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Habits to Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Smoking, passive smoke and burning garbage or wood indoors.
                </li>
                <li>
                  Ignoring early warning signs such as night cough or wheeze.
                </li>
                <li>Stopping prescribed medicines without medical advice.</li>
                <li>
                  Delaying consultation until breathing becomes difficult.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Asthma Care in Moradabad
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
                  Respectful, honest guidance: patients are told clearly when
                  urgent or specialist care is needed.
                </li>
                <li>
                  Diagnostic support: Balprada Pathology Lab assists with relevant
                  tests.
                </li>
                <li>
                  Peaceful ashram environment: a calm, clean setting that supports
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
                  Share your symptoms, triggers, medicines, inhaler use and any
                  reports.
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
                Book Your Asthma Consultation in Moradabad
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Do not wait for breathing to worsen; early guidance helps you
                  plan for seasonal flare-ups.
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