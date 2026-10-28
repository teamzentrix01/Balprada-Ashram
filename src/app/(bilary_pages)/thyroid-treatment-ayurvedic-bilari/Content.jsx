import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function ThyroidAyurvedicTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda treat thyroid problems in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for thyroid disorders at its Bilari branch. It works alongside medical treatment, and no guaranteed cure is promised.",
    },
    {
      q: "Can I stop my thyroid tablets if my TSH becomes normal?",
      a: "No, please never stop prescribed tablets without your doctor&apos;s advice. A normal TSH often means the medicine is working.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring your TSH, T3, T4, antibody and ultrasound reports and earlier prescriptions. Balprada Pathology Lab can support further tests.",
    },
    {
      q: "Which foods should I avoid with thyroid problems?",
      a: "Avoid cold drinks, sweets, fried and packaged food, and unverified iodine or kelp supplements. Your exact diet depends on your type and reports.",
    },
    {
      q: "Is yoga helpful for thyroid?",
      a: "Gentle yoga and slow breathing may support calm and metabolism. Please practise only as advised, especially if you have neck pain or high blood pressure.",
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
                Thyroid Ayurvedic Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for thyroid disorders to patients
                  from Bilari and nearby villages. The main branch is in Tehsil
                  Bilari, so consultation, lifestyle guidance and follow-up are
                  close to home.
                </li>
                <li>
                  Thyroid problems often cause weight change, tiredness, hair
                  fall, mood changes and irregular periods, and many patients
                  take years to find the cause. Balprada explains the condition
                  clearly, reviews thyroid reports and guides each patient
                  honestly on what Ayurvedic care can support.
                </li>
                <li>
                  Care combines in-house herbal medicines, thyroid-friendly diet,
                  stress management, yoga, pranayama and routine correction. The
                  aim is to support metabolism, energy and hormonal balance
                  through steady guidance.
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
                Understanding Thyroid Problems in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The thyroid is a small butterfly-shaped gland in the neck that
                  controls metabolism, energy, body temperature, heart rate and
                  mood. When it makes too little hormone it is called
                  hypothyroidism, and when it makes too much it is called
                  hyperthyroidism.
                </li>
                <li>
                  Ayurveda does not describe the thyroid by that name, but
                  swelling of the neck is described as Galaganda. Thyroid
                  imbalance is understood mainly through disturbance of Agni, the
                  digestive and metabolic fire, along with Kapha and Vata
                  imbalance in hypothyroidism and Pitta increase in
                  hyperthyroidism.
                </li>
                <li>
                  Weak Agni leads to slow metabolism, weight gain, heaviness and
                  tiredness, which is how many patients experience low thyroid.
                  Excess heat and over-activity of metabolism are seen as
                  features of high thyroid.
                </li>
                <li>
                  Modern medicine diagnoses thyroid disease through blood tests
                  such as TSH, T3 and T4, and sometimes antibody tests and
                  ultrasound. Balprada respects these findings and asks patients
                  to bring their reports so that Ayurvedic guidance matches the
                  real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Hypothyroidism
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Unexplained weight gain, constant tiredness, sluggishness and a
                  feeling of heaviness are common. Patients often feel cold when
                  others feel comfortable and may sleep more than usual without
                  feeling rested.
                </li>
                <li>
                  Hair fall, dry skin, brittle nails and puffiness of the face
                  are frequent complaints. Constipation, slow digestion and
                  bloating may also appear.
                </li>
                <li>
                  Irregular, heavy or delayed periods, difficulty in conceiving
                  and low mood are common in women. Some patients also notice
                  memory problems, poor concentration and low motivation.
                </li>
                <li>
                  Swelling in the front of the neck, hoarse voice and muscle or
                  joint aches may occur in some cases. These symptoms overlap
                  with other conditions, so proper testing is always needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Hyperthyroidism
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Weight loss despite good appetite, palpitations, fast heartbeat
                  and a feeling of restlessness are typical. Patients often feel
                  hot, sweat more than usual and cannot tolerate warm weather.
                </li>
                <li>
                  Tremor of the hands, irritability, anxiety and difficulty
                  sleeping are frequent. Muscle weakness, tiredness and frequent
                  loose stools may also be present.
                </li>
                <li>
                  Light or irregular periods in women, hair thinning and warm
                  moist skin can occur. Some patients develop bulging or
                  irritated eyes, which needs specialist attention.
                </li>
                <li>
                  Chest pain, severe palpitation, fainting or very high fever
                  with these symptoms is an emergency. Such patients need
                  hospital care immediately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Autoimmune conditions, such as Hashimoto thyroiditis in
                  hypothyroidism and Graves disease in hyperthyroidism, are
                  leading causes. Family history makes these conditions more
                  likely.
                </li>
                <li>
                  Iodine imbalance, whether too little or too much, can disturb
                  thyroid function. Certain medicines, past neck radiation and
                  previous thyroid surgery can also cause problems.
                </li>
                <li>
                  Women are affected more often than men, especially after
                  pregnancy and around menopause. Hormonal changes and ongoing
                  stress can unmask or worsen thyroid disease.
                </li>
                <li>
                  Irregular routine, poor sleep, long-term stress, heavy
                  processed food and lack of exercise weaken digestion and
                  metabolism. Ayurveda counts these as everyday factors that
                  affect thyroid health.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Testing and Honest Guidance Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Thyroid disease is usually long-term and needs regular blood
                  tests, commonly TSH, to track control. Untreated or
                  uncontrolled thyroid problems can affect the heart, bones,
                  fertility, mood and pregnancy.
                </li>
                <li>
                  Many patients stop thyroid tablets when they feel better or
                  when they start herbal medicines. Balprada strongly advises
                  against this, as the hormone level may fall or rise again
                  without warning.
                </li>
                <li>
                  Patients should avoid unverified thyroid powders, kelp and
                  iodine supplements and online remedies. Some products can push
                  thyroid levels in the wrong direction or interact with
                  medicines.
                </li>
                <li>
                  Balprada encourages patients to keep their doctor or
                  endocrinologist informed. Good coordination between treating
                  doctors protects the patient and keeps care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to Thyroid Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews symptoms, thyroid history, family
                  history, current medicines, food habits, stress, sleep,
                  menstrual history and daily routine. This full picture makes
                  the advice personal and gentle.
                </li>
                <li>
                  Reports such as TSH, T3, T4, thyroid antibodies, ultrasound and
                  related tests are reviewed. Patients are asked to bring all
                  earlier prescriptions and reports to the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, diet
                  guidance, yoga, pranayama and lifestyle correction wherever
                  suitable. The plan is explained in simple language so the
                  patient and family know what to follow.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
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
                  testing support, so patients can complete required tests close
                  to the consultation. This saves time and keeps reports and
                  treatment decisions connected.
                </li>
                <li>
                  Thyroid profile, blood sugar, lipid profile, haemoglobin and
                  vitamin D help understand the wider picture. Thyroid problems
                  often occur along with diabetes, anaemia and vitamin
                  deficiency.
                </li>
                <li>
                  Comparing earlier and later TSH values gives the patient and
                  vaidya a clear view of progress. Tests should be done at
                  similar times and conditions, as advised by the doctor.
                </li>
                <li>
                  Patients should not stop or change any prescribed thyroid
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
                  Herbs traditionally used for metabolism, hormonal balance and
                  energy include Ashwagandha, Guggulu, Kanchanar, Triphala,
                  Punarnava and Brahmi. The final selection depends on each
                  patient and on whether the thyroid is low or high, never on a
                  fixed formula for all.
                </li>
                <li>
                  Medicines are chosen to improve digestion, reduce heaviness or
                  excess heat, and support calm and sleep. They are planned
                  together with diet and exercise, because herbs work best with
                  proper routine.
                </li>
                <li>
                  Patients should be careful with strong herbs and supplements,
                  such as Ashwagandha in hyperthyroidism, which may not suit
                  everyone. Guided use under a vaidya is strongly recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Thyroid Health
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Warm, freshly cooked and easily digestible meals support Agni
                  and metabolism. Moong dal, vegetables, soft rotis, soups and
                  seasonal fruits are commonly suggested, in measured portions.
                </li>
                <li>
                  Iodine from normal iodised salt is usually sufficient, and
                  extra iodine supplements are not advised without testing.
                  Over-use or avoidance of salt on your own can disturb thyroid
                  balance.
                </li>
                <li>
                  Thyroid tablets should be taken on an empty stomach as
                  prescribed, with a gap before food or tea. Calcium, iron
                  tablets and some foods can reduce absorption, so timing should
                  follow your doctor&apos;s advice.
                </li>
                <li>
                  Raw cabbage, cauliflower, broccoli and soy in large amounts may
                  affect the thyroid in some patients. Cooking these vegetables
                  and using sensible portions is usually acceptable, and the
                  doctor can guide you.
                </li>
                <li>
                  Patients with weight gain may need lighter dinners and less
                  sugar and fried food. Patients with weight loss may need
                  adequate protein and regular nourishing meals.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Habits to Avoid
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Cold drinks, sweets, bakery items, fried snacks and packaged
                  foods weaken digestion and add weight. They are best reduced,
                  especially in hypothyroidism.
                </li>
                <li>
                  Excess tea, coffee, energy drinks and spicy food may worsen
                  palpitation and restlessness in hyperthyroidism. Moderation and
                  regular meal times help comfort.
                </li>
                <li>
                  Tobacco and alcohol should be stopped, as they harm hormones,
                  heart health and overall energy. Smoking also worsens eye
                  problems in Graves disease.
                </li>
                <li>
                  Crash diets, skipped meals and self-medication with slimming
                  products can disturb metabolism. Weight change should be
                  gradual and guided.
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
                  Surya Namaskar, Sarvangasana variations, Matsyasana and
                  Bhujangasana are traditionally linked with thyroid health, but
                  they should be done only as advised.
                </li>
                <li>
                  Slow breathing exercises, such as Anulom Vilom, Bhramari and
                  Ujjayi, may help reduce stress and support calm. Forceful
                  breathing is avoided in patients with palpitation or high blood
                  pressure.
                </li>
                <li>
                  Patients with neck pain, high blood pressure, eye problems or
                  heart disease should skip inverted poses and begin only after
                  medical advice. Postures are always chosen individually.
                </li>
                <li>
                  Meditation and quiet time each day calm the mind, which
                  supports hormonal balance. Even ten to fifteen minutes of
                  regular practice can build steadiness.
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
                  supports metabolism, mood and weight. Patients should start
                  slowly and increase time as comfort improves.
                </li>
                <li>
                  Seven to eight hours of sleep at a fixed time is important,
                  because poor sleep disturbs hormones. Avoid late-night screen
                  use and heavy dinners.
                </li>
                <li>
                  Maintain a regular wake-up time, meal timing and daily routine.
                  A steady routine supports Agni and reduces the Vata and Kapha
                  disturbance linked with thyroid problems.
                </li>
                <li>
                  Manage stress through hobbies, family time, prayer and honest
                  conversation. Long-term stress can worsen autoimmune and
                  hormonal conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Care for Women and During Pregnancy
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Thyroid problems are common in women and can affect periods,
                  fertility, pregnancy and menopause. Balprada Women Wellness
                  care can be combined with thyroid guidance where suitable.
                </li>
                <li>
                  Women planning pregnancy should have thyroid levels checked, as
                  uncontrolled thyroid can affect mother and baby. Treatment
                  during pregnancy must be managed by the treating gynaecologist
                  or endocrinologist.
                </li>
                <li>
                  Herbs and therapies are chosen with extra caution in pregnancy
                  and breastfeeding. Self-use of herbal medicines at these times
                  is not advised.
                </li>
                <li>
                  Irregular periods, hair fall and mood changes should be
                  discussed with the doctor, as they may be linked with thyroid.
                  Early testing helps avoid long delay in diagnosis.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once for severe chest pain, very
                  fast or irregular heartbeat, fainting, extreme weakness, high
                  fever with sweating or confusion. These can be signs of a
                  thyroid emergency or heart problem.
                </li>
                <li>
                  Difficulty in breathing or swallowing, rapid neck swelling, or
                  a hard painless lump in the neck needs prompt medical
                  assessment. Such signs should never be ignored.
                </li>
                <li>
                  Extreme drowsiness, very slow heartbeat, severe cold
                  intolerance and swelling can indicate severe low thyroid. These
                  patients need urgent medical care.
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
                  Please carry your TSH, T3 and T4 reports, earlier prescriptions
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