import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHeartBlockageTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda remove or reverse heart blockage?",
      a: "Ayurvedic supportive care at Balprada focuses on lifestyle correction, stress management and overall cardiovascular support alongside prescribed cardiac treatment. It is not a substitute for medical or procedural treatment recommended by a cardiologist.",
    },
    {
      q: "Q2. Is it safe to take Ayurvedic medicine along with heart medication?",
      a: "Many patients use supportive Ayurvedic care alongside their prescribed cardiac treatment. Our doctors carefully review current medications before suggesting any herbal support, and patients should never stop prescribed medicine on their own.",
    },
    {
      q: "Q3. Can Ayurvedic care help reduce the risk of further blockage?",
      a: "Diet correction, stress management and lifestyle discipline can support overall heart health and may help reduce certain risk factors, though this should always be managed alongside regular cardiac monitoring.",
    },
    {
      q: "Q4. Is yoga safe for patients with heart blockage?",
      a: "Gentle, adapted yoga may be suitable for some patients, but only within limits approved by their cardiologist. Our team tailors activity recommendations carefully to each patient's cardiac status.",
    },
    {
      q: "Q5. Does Balprada offer free consultation for heart patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Q6. What should I do if I experience sudden chest pain?",
      a: "Sudden, severe chest pain, breathlessness or pain radiating to the arm or jaw requires immediate emergency medical attention and should never be treated as a routine consultation matter.",
    },
    {
      q: "Q7. How can I book an appointment at Balprada?",
      a: "You can call, WhatsApp or visit the Balprada website to book an appointment at either the Main Branch or the Moradabad Branch.",
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
                Heart Blockage Ayurvedic Treatment at Balprada Ayurvedic
                Hospital &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Heart blockage, medically known as coronary artery disease,
                  occurs when the blood vessels supplying the heart become
                  narrowed or restricted, often due to years of plaque buildup,
                  poor lifestyle habits or underlying metabolic conditions.
                </li>
                <li>
                  At Balprada Ayurvedic Hospital &amp; Research Center, we offer
                  personalized Ayurvedic supportive care, in-house herbal
                  medicines, diet correction and disciplined lifestyle guidance
                  to help support cardiovascular health alongside a patient&apos;s
                  ongoing cardiac treatment.
                </li>
                <li>
                  With 35 years of experience in Ayurveda, an experienced team
                  of vaidyas and a peaceful ashram-based environment, Balprada
                  focuses on personalized, compassionate and consistent care for
                  every patient.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Heart Blockage (Coronary Artery Disease)?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Heart blockage develops when fatty deposits, cholesterol and
                  other substances build up along the inner walls of the
                  coronary arteries, gradually narrowing the space through
                  which blood flows to the heart muscle.
                </li>
                <li>
                  The coronary arteries supply oxygen-rich blood directly to the
                  heart muscle, and any narrowing reduces this vital blood flow.
                </li>
                <li>
                  Blockages are often described in percentages, indicating how
                  much a particular artery has narrowed.
                </li>
                <li>
                  The condition typically develops gradually over many years,
                  often linked to long-term lifestyle and metabolic factors.
                </li>
                <li>
                  Mild blockages may cause no noticeable symptoms, while
                  significant blockages can lead to chest discomfort,
                  breathlessness or more serious cardiac events.
                </li>
                <li>
                  Diagnosis usually involves tests such as ECG,
                  echocardiography, stress tests or angiography, ordered by a
                  cardiologist.
                </li>
                <li>
                  Management typically combines medical treatment, lifestyle
                  correction and, in some cases, medical procedures, depending
                  on the severity of blockage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding what contributes to heart blockage helps guide a
                more comprehensive, well-directed supportive care plan.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  High cholesterol and abnormal lipid levels in the blood.
                </li>
                <li>
                  High blood pressure placing extra strain on artery walls over
                  time.
                </li>
                <li>
                  Diabetes and insulin resistance, which affect blood vessel
                  health.
                </li>
                <li>Obesity, particularly excess fat around the abdomen.</li>
                <li>
                  Sedentary lifestyle with minimal regular physical activity.
                </li>
                <li>
                  Smoking and tobacco use, which damage blood vessel linings.
                </li>
                <li>Chronic stress and poor sleep quality.</li>
                <li>
                  Family history and genetic predisposition to heart disease.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs and Symptoms to Watch For
              </h2>

              <p className="mb-4 text-gray-700">
                Recognizing symptoms early allows for timely medical evaluation
                and a more effective, coordinated care approach.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chest discomfort, tightness or a sensation of pressure,
                  especially during exertion.
                </li>
                <li>
                  Shortness of breath during physical activity or, in advanced
                  cases, even at rest.
                </li>
                <li>Fatigue and reduced stamina during everyday tasks.</li>
                <li>
                  Pain or discomfort that may spread to the arm, jaw, neck or
                  back.
                </li>
                <li>
                  Dizziness, lightheadedness or occasional palpitations.
                </li>
                <li>
                  Swelling in the legs or ankles in more advanced cases.
                </li>
                <li>
                  Cold sweats accompanying chest discomfort in some patients.
                </li>
                <li>
                  Sudden, severe chest pain, breathlessness, cold sweats or pain
                  radiating to the arm or jaw are signs of a possible heart
                  attack and require immediate emergency medical attention — do
                  not wait for a scheduled consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic Understanding of Heart Blockage
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes cardiac conditions under
                  &quot;Hridroga,&quot; traditionally associated with imbalance
                  in Vata, Pitta and Kapha doshas along with disturbed
                  circulation and metabolic function.
                </li>
                <li>
                  The heart (Hridaya) is considered a vital seat of Prana (life
                  force) and Ojas (vital strength) in Ayurvedic physiology.
                </li>
                <li>
                  Aggravated Kapha is traditionally linked with heaviness,
                  sluggish metabolism and accumulation-related patterns
                  affecting circulation.
                </li>
                <li>
                  Vata imbalance is associated with irregular circulation and
                  nervous system disturbances, while Pitta imbalance relates to
                  inflammation and heat-related stress on blood vessels.
                </li>
                <li>
                  Weakened Agni (digestive fire) and accumulated Ama (toxins) are
                  traditionally seen as underlying contributors to long-term
                  metabolic imbalance affecting the heart.
                </li>
                <li>
                  Ayurvedic supportive care traditionally focuses on balancing
                  the doshas involved, supporting healthy circulation, and
                  strengthening Ojas for overall cardiac resilience.
                </li>
                <li>
                  The approach considers diet, physical activity, stress, sleep
                  and daily routine together, always working alongside a
                  patient&apos;s prescribed cardiac treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Ayurvedic Supportive Care Approach for Heart Blockage
              </h2>

              <p className="mb-6 text-gray-700">
                At Balprada, Ayurvedic supportive care for heart blockage is
                planned carefully around each patient&apos;s diagnosis, current
                cardiac treatment and overall health.
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation and Assessment
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors review the patient&apos;s cardiac history,
                      diagnostic reports, current medications and severity of
                      blockage as assessed by their cardiologist.
                    </li>
                    <li>
                      Assessment includes evaluating lifestyle habits, diet
                      patterns, stress levels, sleep quality and physical
                      activity.
                    </li>
                    <li>
                      Coordination with the patient&apos;s existing cardiac
                      treatment plan is prioritized before suggesting any
                      Ayurvedic support.
                    </li>
                    <li>
                      A personalized care plan is created based on the
                      patient&apos;s constitution (Prakriti) and the dominant
                      dosha imbalance involved.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. In-House Ayurvedic Herbal Medicines
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares its own herbal medicines to maintain
                      consistent quality, purity and dosage.
                    </li>
                    <li>
                      Formulations are selected to support healthy circulation,
                      balance relevant doshas and strengthen overall cardiac
                      resilience.
                    </li>
                    <li>
                      Herbal support is introduced only after understanding the
                      patient&apos;s current cardiac medications, to avoid any
                      unwanted interaction.
                    </li>
                    <li>
                      All medicines are given under the close supervision of
                      experienced vaidyas and adjusted through regular
                      follow-up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Nutrition Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A heart-friendly diet plan is recommended, focused on
                      reducing unhealthy fat, cholesterol and sodium intake.
                    </li>
                    <li>
                      Patients are guided toward light, warm, freshly cooked
                      meals over fried, oily or heavily processed food.
                    </li>
                    <li>
                      Emphasis is placed on fiber-rich vegetables, whole grains
                      and foods that support healthy lipid levels.
                    </li>
                    <li>
                      Guidance on portion control and consistent meal timing is
                      provided to support stable digestion and metabolism.
                    </li>
                    <li>
                      Excess salt, sugar and processed snacks are typically
                      minimized or avoided as part of the dietary plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Stress Management and Emotional Balance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Meditation, breath awareness and calming practices are
                      offered to help reduce stress-related strain on the heart.
                    </li>
                    <li>
                      The peaceful ashram environment provides space for
                      patients to rest and recover away from daily pressures.
                    </li>
                    <li>
                      Sleep hygiene and relaxation techniques are addressed as
                      an important part of the overall supportive care plan.
                    </li>
                    <li>
                      Patients are encouraged to build simple, sustainable daily
                      habits that support long-term emotional balance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Yoga and Gentle Physical Activity
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Adapted yoga postures and breathing exercises (Pranayama)
                      are recommended, based on the patient&apos;s cardiac
                      status and strength.
                    </li>
                    <li>
                      Physical activity is introduced gradually and only within
                      limits approved by the patient&apos;s cardiologist.
                    </li>
                    <li>
                      The focus remains on gentle, sustainable movement rather
                      than intensive exertion, particularly for patients with
                      significant blockage.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Panchakarma and Supportive Therapies
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Select, gentle supportive therapies may be considered for
                      suitable patients, based on careful evaluation of cardiac
                      stability.
                    </li>
                    <li>
                      Intensive Panchakarma procedures are approached with
                      caution and are not recommended for patients with
                      significant or unstable blockage without cardiologist
                      clearance.
                    </li>
                    <li>
                      The focus remains on comfort, relaxation and supporting
                      overall well-being alongside medical treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    7. Ongoing Monitoring and Coordination
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up helps track lifestyle progress, symptom
                      changes and overall well-being.
                    </li>
                    <li>
                      Patients are encouraged to continue all
                      cardiologist-prescribed tests, medications and follow-up
                      appointments.
                    </li>
                    <li>
                      Open coordination between the patient&apos;s cardiac care
                      team and our Ayurvedic team is always encouraged for safe,
                      integrated care.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Commonly Used Ayurvedic Herbs for Heart Support
              </h2>

              <p className="mb-4 text-gray-700">
                Several traditional herbs are associated with cardiovascular
                wellness and healthy circulation in Ayurvedic texts. These are
                used only after proper evaluation and under medical guidance:
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Arjuna (Terminalia arjuna)
                  </span>{" "}
                  – a classical herb traditionally valued for its role in
                  supporting heart and cardiovascular health.
                </li>
                <li>
                  <span className="font-semibold">
                    Guggul (Commiphora mukul)
                  </span>{" "}
                  – traditionally associated with supporting healthy cholesterol
                  and lipid metabolism.
                </li>
                <li>
                  <span className="font-semibold">
                    Ashwagandha (Withania somnifera)
                  </span>{" "}
                  – traditionally used to support stress resilience and overall
                  vitality.
                </li>
                <li>
                  <span className="font-semibold">
                    Pushkarmool (Inula racemosa)
                  </span>{" "}
                  – referenced in classical texts for its traditional role in
                  supporting respiratory and cardiac comfort.
                </li>
                <li>
                  <span className="font-semibold">
                    Punarnava (Boerhavia diffusa)
                  </span>{" "}
                  – traditionally used to support healthy fluid balance and
                  circulation.
                </li>
                <li>
                  <span className="font-semibold">
                    Brahmi (Bacopa monnieri)
                  </span>{" "}
                  – associated with supporting mental clarity and nervous system
                  balance.
                </li>
                <li>
                  <span className="font-semibold">Triphala</span> – a classical
                  combination traditionally used to support digestion and gentle
                  detoxification.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Herbal recommendations vary from patient to patient and are
                reviewed carefully against existing cardiac medication. No herb
                should ever be self-administered without a qualified
                vaidya&apos;s evaluation, and ideally in coordination with the
                treating cardiologist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Favor light, warm, freshly cooked meals with plenty of
                  vegetables, whole grains and healthy fats.
                </li>
                <li>
                  Reduce or avoid fried food, red meat, excess salt and heavily
                  processed snacks.
                </li>
                <li>
                  Maintain fixed meal timings and avoid heavy, late-night
                  eating.
                </li>
                <li>
                  Build a consistent, doctor-approved routine of gentle physical
                  activity, such as walking.
                </li>
                <li>
                  Prioritize good quality sleep and daily stress management
                  practices.
                </li>
                <li>
                  Avoid smoking, tobacco and excessive alcohol consumption
                  entirely.
                </li>
                <li>
                  Monitor cholesterol, blood pressure and blood sugar regularly,
                  as advised by the treating doctor.
                </li>
                <li>
                  Never stop or alter prescribed cardiac medication without
                  consulting the treating cardiologist.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Ayurvedic Heart Blockage Support?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  35 years of trusted experience in Ayurvedic treatment and
                  patient-centered care.
                </li>
                <li>
                  In-house preparation of herbal medicines to maintain quality
                  and consistency across every batch.
                </li>
                <li>
                  Experienced doctors who evaluate each case individually, with
                  attention to existing cardiac treatment and reports.
                </li>
                <li>
                  Peaceful, ashram-based healing environment that supports
                  relaxation, discipline and sustainable lifestyle change.
                </li>
                <li>
                  Integrated facilities including yoga, naturopathy, meditation,
                  physiotherapy and an in-house pathology lab.
                </li>
                <li>
                  A structured, coordinated care process that respects and works
                  alongside each patient&apos;s cardiac treatment.
                </li>
                <li>
                  Free OPD consultation available on the 15th of every month.
                </li>
                <li>
                  Two accessible branches in Moradabad, Uttar Pradesh, with
                  daily OPD timings.
                </li>
                <li>
                  A calm, service-first approach (seva sankalp) rooted in the
                  legacy of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Continued follow-up guidance to help patients maintain
                  heart-healthy habits over the long term.
                </li>
              </ul>
            </section>

            

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Consultation for Heart Blockage Support
              </h2>

              <p className="mb-6 text-black">
                Contact Balprada Ayurvedic Hospital &amp; Research Center to
                discuss supportive Ayurvedic care, lifestyle guidance and
                coordination with your ongoing cardiac treatment.
              </p>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                      Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <p className="text-black">
                      F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                      Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Contact Balprada</p>

                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a
                        href="tel:9410447000"
                        className="hover:underline"
                      >
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a
                        href="tel:8126364606"
                        className="hover:underline"
                      >
                        8126364606
                      </a>
                    </div>
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
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Explore Treatments
                  </button>
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