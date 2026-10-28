import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HighBPAyurvedicTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda control high blood pressure in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for high blood pressure at its Bilari branch. It works alongside medical treatment, and no guaranteed cure is promised.",
    },
    {
      q: "Can I stop my BP tablets if readings become normal?",
      a: "No, please never stop prescribed tablets without your doctor&apos;s advice. Normal readings often mean the medicine is working.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring your BP record, blood sugar, lipid profile, kidney reports and earlier prescriptions. Balprada Pathology Lab can support further tests.",
    },
    {
      q: "Which foods should I avoid with high BP?",
      a: "Avoid excess salt, pickles, papad, packaged snacks, fried food, alcohol and energy drinks. Light, low-salt home meals are best.",
    },
    {
      q: "Is yoga safe for high blood pressure?",
      a: "Gentle yoga and slow breathing are usually helpful. Please begin only after the doctor advises, and avoid forceful practices.",
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
                High BP Ayurvedic Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for high blood pressure to patients
                  from Bilari and nearby villages. The main branch is in Tehsil
                  Bilari, so consultation, lifestyle guidance and follow-up are
                  close to home.
                </li>
                <li>
                  High blood pressure often causes no symptoms for years, yet it
                  can quietly harm the heart, brain, kidneys and eyes. Balprada
                  explains the condition clearly, reviews blood pressure records
                  and reports, and guides each patient honestly on what Ayurvedic
                  care can support.
                </li>
                <li>
                  Care combines in-house herbal medicines, a low-salt diet,
                  stress management, yoga, pranayama and routine correction. The
                  aim is to support steady blood pressure, reduce risk factors
                  and improve daily comfort through regular guidance.
                </li>
                <li>
                  Balprada brings thirty-five years of experience in Ayurvedic
                  care for chronic conditions. Every plan starts with listening
                  to the patient and reading reports before any medicine or diet
                  is suggested.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding High Blood Pressure in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Blood pressure is the force of blood against the walls of the
                  arteries. A reading that stays at or above 140 over 90 on
                  repeated checks is usually called high blood pressure, and your
                  doctor will confirm what applies to you.
                </li>
                <li>
                  Ayurvedic thinking links raised pressure with imbalance of Vata
                  and Pitta, along with disturbed Rakta, the blood tissue, and
                  strained channels of the body. Stress, anger, poor sleep and
                  heavy food are seen as strong aggravating factors.
                </li>
                <li>
                  The heart, called Hridaya, is considered the seat of mind and
                  life energy in Ayurveda. This is why emotional strain and
                  mental restlessness receive as much attention as diet and
                  medicines.
                </li>
                <li>
                  Modern medicine measures blood pressure with a monitor and
                  classifies it by stage. Balprada respects these readings and
                  asks patients to bring their records so that Ayurvedic guidance
                  matches the real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of High Blood Pressure
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many patients feel nothing at all, which is why high blood
                  pressure is called a silent condition. The problem is often
                  found during a routine check or when another illness is
                  investigated.
                </li>
                <li>
                  Headache, especially at the back of the head in the morning,
                  dizziness, heaviness in the head and a feeling of restlessness
                  can occur. These symptoms are not specific, so a proper reading
                  is always needed.
                </li>
                <li>
                  Palpitation, tiredness, disturbed sleep, blurred vision and
                  easy irritability may appear in some patients. Nosebleed and
                  chest discomfort can also occur when the pressure is very high.
                </li>
                <li>
                  Severe headache, chest pain, breathlessness, sudden weakness or
                  confusion with high pressure is an emergency. Such patients
                  need hospital care immediately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Excess salt, pickles, papad, packaged snacks and fast food
                  raise blood pressure over time. Many families add extra salt at
                  the table, which silently increases daily intake.
                </li>
                <li>
                  Being overweight, lack of exercise, long sitting hours and poor
                  sleep strain the heart and arteries. A sedentary routine also
                  raises sugar and cholesterol, which add to the risk.
                </li>
                <li>
                  Ongoing stress, worry, anger and shift work keep the body in a
                  state of alert. Alcohol, tobacco and excessive tea or coffee
                  can push the pressure higher.
                </li>
                <li>
                  Family history, advancing age, diabetes, kidney disease and
                  thyroid problems also raise risk. Some medicines, such as
                  painkillers and steroids, can increase blood pressure too.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Monitoring and Honest Guidance Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Uncontrolled high blood pressure increases the risk of stroke,
                  heart attack, kidney damage and eye problems. Steady control
                  over years is the best protection against these complications.
                </li>
                <li>
                  Many patients stop their tablets when they feel well or when
                  readings look normal. Balprada strongly advises against this,
                  because pressure often rises again without notice.
                </li>
                <li>
                  Patients should avoid random herbal powders, juices and home
                  remedies promised to cure blood pressure quickly. Some products
                  can lower pressure dangerously or interact with regular
                  medicines.
                </li>
                <li>
                  Balprada encourages patients to keep their doctor informed.
                  Good coordination between treating doctors protects the patient
                  and keeps care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to High BP Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews blood pressure records, symptoms,
                  family history, current medicines, food habits, stress, sleep
                  and daily routine. This full picture makes the advice personal
                  and gentle.
                </li>
                <li>
                  Reports such as blood sugar, lipid profile, kidney function,
                  thyroid and ECG are reviewed where available. Patients are
                  asked to bring their BP diary, earlier prescriptions and
                  hospital papers to the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, diet
                  guidance, yoga, pranayama and lifestyle correction wherever
                  suitable. The plan is explained in simple language so the
                  patient and family know what to follow.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
                  readings and symptoms change. This steady follow-up keeps care
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
                  testing support, so patients can complete required tests close
                  to the consultation. This saves time and keeps reports and
                  treatment decisions connected.
                </li>
                <li>
                  Tests such as blood sugar, lipid profile, kidney function,
                  uric acid and thyroid help find causes and complications of
                  high pressure. The doctor advises only the tests that are
                  needed for you.
                </li>
                <li>
                  Patients are encouraged to measure blood pressure at home at
                  the same time each day and note the readings. A written record
                  gives a far better picture than a single clinic reading.
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
                  Herbs traditionally used for heart and mind support include
                  Arjuna, Brahmi, Shankhpushpi, Ashwagandha, Jatamansi and
                  Sarpagandha. The final selection depends on each patient, never
                  on a fixed formula for all.
                </li>
                <li>
                  Medicines are chosen to support calm, sleep, heart strength and
                  healthy circulation. They are planned together with diet and
                  exercise, because herbs work best with proper routine.
                </li>
                <li>
                  Patients should avoid buying random blood pressure powders or
                  tablets from local sources. Wrong herbs or doses, especially
                  along with regular medicines, can cause low pressure or other
                  harm.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for High Blood Pressure
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reducing salt is the single most useful step for most patients.
                  Cook with less salt, avoid extra salt on salad and curd, and
                  read labels, since packaged foods carry hidden sodium.
                </li>
                <li>
                  Fresh vegetables, fruits, whole grains, dals and soups are the
                  base of a heart-friendly diet. Bottle gourd, spinach, carrot,
                  beetroot, papaya and banana are often suggested, unless your
                  doctor limits any of them.
                </li>
                <li>
                  Light, home-cooked meals with limited oil support digestion and
                  weight control. Fried food, ghee-heavy gravies, bakery items
                  and sweets should be reduced.
                </li>
                <li>
                  Tea and coffee should be limited, and cold drinks and energy
                  drinks avoided. Plenty of water through the day is helpful
                  unless a doctor has restricted fluids.
                </li>
                <li>
                  Patients with kidney disease or on potassium-affecting
                  medicines should take personal advice before increasing fruits
                  and vegetables rich in potassium.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Habits to Avoid
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Pickles, papad, chips, namkeen, instant noodles, salted nuts
                  and processed meat contain large amounts of salt. They should
                  be avoided or taken only rarely.
                </li>
                <li>
                  Alcohol and tobacco should be stopped, as they raise blood
                  pressure and damage blood vessels. Smoking also reduces the
                  benefit of every medicine for the heart.
                </li>
                <li>
                  Late-night heavy meals, irregular eating and skipping breakfast
                  disturb digestion and metabolism. A regular routine with an
                  early light dinner supports comfort and sleep.
                </li>
                <li>
                  Self-medication with painkillers, cough syrups or decongestants
                  can raise blood pressure. Always ask the doctor before using
                  any new medicine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Yoga, Pranayama and Stress Management
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada offers yoga and meditation guidance suited to each
                  patient&apos;s strength and condition. Gentle practices such as
                  Tadasana, Vajrasana and Shavasana can support calm and
                  flexibility.
                </li>
                <li>
                  Slow breathing exercises, such as Anulom Vilom, Bhramari and
                  deep abdominal breathing, may help reduce stress and support
                  blood pressure. Forceful breathing and breath-holding should be
                  avoided unless the vaidya advises.
                </li>
                <li>
                  Meditation and quiet time each day calm the mind, which is
                  central to blood pressure care in Ayurveda. Even ten to fifteen
                  minutes of regular practice can help build steadiness.
                </li>
                <li>
                  Patients with severe pressure, heart disease or other
                  conditions should begin yoga only after medical advice.
                  Postures and breathing are always chosen individually.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Daily Routine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Regular walking of thirty to forty five minutes on most days
                  supports the heart, weight and mood. Patients should start
                  slowly and increase time as comfort improves.
                </li>
                <li>
                  Seven to eight hours of sleep at a fixed time is important,
                  because poor sleep raises blood pressure. Avoid late-night
                  screen use and heavy dinners.
                </li>
                <li>
                  Maintain a healthy weight, as even modest weight loss may lower
                  pressure. Weight reduction should be gradual and guided, with
                  balanced meals and no crash diets.
                </li>
                <li>
                  Manage stress through hobbies, family time, prayer and honest
                  conversation. Learning to pause before reacting is a simple but
                  powerful habit for heart health.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Supportive Facilities
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma related therapies may be considered for suitable
                  patients after assessment of strength and reports. They are
                  planned individually and are never applied to every patient in
                  the same way.
                </li>
                <li>
                  Gentle calming therapies, such as soothing oil massage and
                  Shirodhara, may support relaxation in selected patients. Such
                  therapies are used only when the vaidya finds them suitable and
                  safe.
                </li>
                <li>
                  Naturopathy and rest guidance are also available, along with
                  yoga and meditation, as part of the wider ashram care. All
                  supportive care is linked to the main plan, so nothing runs in
                  isolation.
                </li>
                <li>
                  Strong cleansing therapies are avoided when blood pressure is
                  very high or unstable. Safety always comes first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once for severe headache, chest
                  pain, breathlessness, sudden weakness, face drooping, slurred
                  speech, confusion or loss of vision with high blood pressure.
                  These can be signs of stroke or heart trouble.
                </li>
                <li>
                  Repeated readings above 180 over 120, especially with symptoms,
                  need urgent medical review. Do not wait for the next OPD visit.
                </li>
                <li>
                  Very low readings with fainting, giddiness or extreme weakness
                  also need prompt attention. This can happen when medicines are
                  changed or taken wrongly.
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
                  Many patients with chronic illness have trusted this centre for
                  long-term care.
                </li>
                <li>
                  Patients describe the staff as humble and kind, and the ashram
                  surroundings as calm and healing. A peaceful setting supports
                  the mind and helps patients stay disciplined with diet and
                  routine.
                </li>
                <li>
                  Medicines, yoga, pathology, diet guidance and follow-up are
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
                  Please carry your BP records, blood reports, earlier
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