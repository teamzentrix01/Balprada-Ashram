import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PCODAyurvedicTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda treat PCOD in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for PCOD at its Bilari branch. It works alongside medical care, and no guaranteed cure is promised.",
    },
    {
      q: "Can PCOD be completely cured?",
      a: "PCOD is usually managed rather than cured. Diet, exercise and guided care can improve cycles and symptoms in many women.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring your ultrasound, thyroid, sugar and hormone reports and earlier prescriptions. Balprada Pathology Lab can support further tests.",
    },
    {
      q: "Which foods should I avoid with PCOD?",
      a: "Avoid sugar, sweets, bakery items, cold drinks, fried and packaged food. Light, home-cooked meals are best.",
    },
    {
      q: "Can I get pregnant with PCOD?",
      a: "Many women with PCOD conceive with guidance on weight and cycles. Please involve your gynaecologist in fertility planning.",
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
                PCOD Ayurvedic Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for PCOD to women from Bilari and
                  nearby villages. The main branch is in Tehsil Bilari, so
                  consultation, lifestyle guidance and follow-up are close to
                  home.
                </li>
                <li>
                  PCOD often brings irregular periods, weight gain, acne, hair
                  changes and worry about fertility, and many women feel unsure
                  where to turn. Balprada provides private, respectful
                  consultation, reviews reports carefully and explains the
                  condition in simple language.
                </li>
                <li>
                  Care combines in-house herbal medicines, a metabolism-friendly
                  diet, stress management, yoga, pranayama and routine
                  correction. The aim is to support hormonal balance, regular
                  cycles and overall wellbeing through steady guidance.
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
                Understanding PCOD in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  PCOD, or polycystic ovarian disease, is a hormonal and
                  metabolic condition in which the ovaries may not release eggs
                  regularly and may show multiple small follicles on ultrasound.
                  It is closely linked with insulin resistance and weight gain in
                  many women.
                </li>
                <li>
                  Ayurveda does not use the name PCOD, but understands such
                  conditions through disturbance of Artava, the female
                  reproductive tissue and menstrual flow. Irregular or delayed
                  cycles are linked with Kapha and Vata imbalance, weak Agni and
                  build-up of Ama and Meda, the fat tissue.
                </li>
                <li>
                  When digestion and metabolism are weak, the body stores fat and
                  moisture, and the channels carrying menstrual blood may be
                  obstructed. This is why diet, digestion and body weight receive
                  so much attention in Ayurvedic care.
                </li>
                <li>
                  Modern medicine diagnoses PCOD through symptoms, hormone tests
                  and ultrasound. Balprada respects these findings and asks
                  patients to bring their reports so that Ayurvedic guidance
                  matches the real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of PCOD
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Irregular, delayed or missed periods are the most common sign.
                  Some women have very few periods in a year, while others have
                  heavy or prolonged bleeding.
                </li>
                <li>
                  Weight gain, especially around the abdomen, and difficulty
                  losing weight are frequent complaints. Many women also notice
                  tiredness, mood swings and low energy.
                </li>
                <li>
                  Acne, oily skin, thinning of scalp hair and extra hair on the
                  face, chin or body may appear. Dark, thick patches of skin on
                  the neck or underarms can indicate insulin resistance.
                </li>
                <li>
                  Difficulty in conceiving, pelvic discomfort and anxiety or low
                  mood can occur. Symptoms vary widely, so proper evaluation by a
                  doctor is always important.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Insulin resistance, where the body does not respond well to
                  insulin, is a key factor in many cases. It raises male-type
                  hormones, which disturb ovulation and cycles.
                </li>
                <li>
                  Family history of PCOD, diabetes or irregular periods raises
                  the risk. Being overweight makes symptoms worse, though PCOD can
                  also occur in women of normal weight.
                </li>
                <li>
                  Sedentary routine, irregular sleep, junk food, sugary drinks
                  and long-term stress strain the hormonal system. Ayurveda
                  counts these everyday habits as important triggers for Kapha and
                  Meda increase.
                </li>
                <li>
                  Early puberty, rapid weight changes, thyroid problems and
                  certain medicines can also contribute. Finding such factors
                  helps the doctor plan safer and more suitable care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Care and Honest Guidance Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  PCOD is a long-term condition, and early lifestyle correction
                  can improve cycles and comfort in many women. Waiting often
                  allows weight, sugar and cholesterol problems to grow.
                </li>
                <li>
                  Untreated PCOD may increase the risk of diabetes, high blood
                  pressure, fatty liver and difficulty in conceiving. Regular
                  monitoring helps catch these problems early.
                </li>
                <li>
                  Women should avoid crash diets, unverified slimming products
                  and hormonal pills taken without advice. These can worsen
                  cycles and harm long-term health.
                </li>
                <li>
                  Balprada encourages patients to keep their gynaecologist
                  informed. Good coordination between treating doctors protects
                  the patient and keeps care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to PCOD Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews menstrual history, symptoms, weight
                  changes, family history, current medicines, food habits, stress,
                  sleep and daily routine. This full picture makes the advice
                  personal and gentle.
                </li>
                <li>
                  Reports such as ultrasound, thyroid profile, blood sugar,
                  insulin, lipid profile and hormone tests are reviewed where
                  available. Patients are asked to bring all earlier
                  prescriptions and reports to the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, diet
                  guidance, yoga, pranayama and lifestyle correction wherever
                  suitable. The plan is explained in simple language so the
                  patient and family know what to follow.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
                  cycles, weight and symptoms change. This steady follow-up keeps
                  care practical, safe and responsible through the whole course.
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
                  Tests such as blood sugar, HbA1c, thyroid profile, lipid
                  profile, vitamin D and hormone levels help understand the wider
                  picture. PCOD often occurs along with thyroid problems, vitamin
                  deficiency and insulin resistance.
                </li>
                <li>
                  Pelvic ultrasound shows the ovaries and uterus, and it is
                  advised by the gynaecologist when needed. Comparing earlier and
                  later reports gives the patient and vaidya a clear view of
                  progress.
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
                  Herbs traditionally used for women health and hormonal balance
                  include Shatavari, Ashoka, Lodhra, Kanchanar, Guduchi and
                  Triphala. The final selection depends on each woman and her
                  cycle pattern, never on a fixed formula for all.
                </li>
                <li>
                  Medicines are chosen to improve digestion, support healthy
                  menstrual flow, reduce heaviness and support calm. They are
                  planned together with diet and exercise, because herbs work
                  best with proper routine.
                </li>
                <li>
                  Women should avoid buying random PCOD powders, hormone-like
                  supplements or slimming products. Wrong herbs or doses,
                  especially in pregnancy or when trying to conceive, can cause
                  harm, so guided use under a vaidya is strongly recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for PCOD
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Warm, freshly cooked and easily digestible meals support Agni
                  and metabolism. Moong dal, vegetables, whole grains, soups and
                  seasonal fruits are commonly suggested, in measured portions.
                </li>
                <li>
                  Reducing sugar, sweets, bakery items, maida and cold drinks
                  helps control insulin and weight. Even small daily amounts add
                  up over months in a woman with PCOD.
                </li>
                <li>
                  Fibre from vegetables, salads, oats, barley and whole pulses
                  supports digestion and sugar balance. Adequate protein from
                  dals, curd, paneer and sprouts helps keep hunger steady.
                </li>
                <li>
                  Regular meal times, a light early dinner and avoiding long gaps
                  without food support hormones and weight. Eating slowly and
                  stopping before the stomach is full helps digestion.
                </li>
                <li>
                  Warm water through the day and light spices such as cumin,
                  coriander, ginger and fenugreek in cooking may support
                  digestion. The vaidya will suggest what suits your
                  constitution.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Habits to Avoid
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fried snacks, fast food, packaged food, sweets and sugary
                  drinks add to weight and insulin resistance. They are best
                  reduced or stopped while the body is rebalancing.
                </li>
                <li>
                  Day sleep, late-night sleeping and long sitting hours increase
                  Kapha and heaviness. A fixed sleep schedule and regular
                  movement support hormonal rhythm.
                </li>
                <li>
                  Tobacco and alcohol should be avoided, as they harm hormones
                  and fertility. Excess tea and coffee may also worsen anxiety
                  and sleep.
                </li>
                <li>
                  Crash diets, skipped meals and extreme fasting can disturb
                  periods further. Weight loss should be gradual and guided, with
                  balanced meals.
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
                  Surya Namaskar, Bhujangasana, Baddha Konasana and Setu
                  Bandhasana are traditionally helpful, when done as advised.
                </li>
                <li>
                  Slow breathing exercises, such as Anulom Vilom and Bhramari,
                  may help reduce stress and support calm. Stress and poor sleep
                  raise hormones that worsen PCOD, so breathing practice has real
                  value.
                </li>
                <li>
                  Meditation and quiet time each day calm the mind, which
                  supports hormonal balance. Even ten to fifteen minutes of
                  regular practice can build steadiness.
                </li>
                <li>
                  Women with pain, heavy bleeding or other conditions should
                  begin yoga only after medical advice. Postures are always
                  chosen individually.
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
                  supports weight, insulin and mood. Women should start slowly
                  and increase time as comfort improves.
                </li>
                <li>
                  Seven to eight hours of sleep at a fixed time is important,
                  because poor sleep disturbs hormones and appetite. Avoid
                  late-night screen use and heavy dinners.
                </li>
                <li>
                  Even a modest weight loss of five to ten percent of body weight
                  can improve cycles in many women with excess weight. Targets
                  should be set with the doctor and approached gradually.
                </li>
                <li>
                  Manage stress through hobbies, family time, prayer and honest
                  conversation. A supportive family makes a major difference to
                  long-term success.
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
                  women after assessment of strength, cycle pattern and reports.
                  They are planned individually and are never applied to every
                  patient in the same way.
                </li>
                <li>
                  Gentle therapies such as warm oil massage may support
                  relaxation and circulation in selected patients. Strong
                  cleansing is avoided during periods, pregnancy or weakness.
                </li>
                <li>
                  Naturopathy, physiotherapy, yoga and meditation facilities
                  complement the main plan. They support weight, movement, sleep
                  and emotional steadiness as part of the wider ashram care.
                </li>
                <li>
                  All supportive care is linked to the main plan, so nothing runs
                  in isolation. The team reviews how each part is helping before
                  continuing or changing it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fertility, Pregnancy and Safety
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Women with PCOD can and do conceive, often with guidance on
                  weight, cycles and ovulation. Balprada supports healthy
                  preparation for pregnancy, and fertility decisions should
                  involve the gynaecologist.
                </li>
                <li>
                  Please tell the vaidya if you are trying to conceive or are
                  pregnant. Some herbs and therapies are avoided, and care is
                  changed accordingly.
                </li>
                <li>
                  Self-use of herbal medicines during pregnancy and breastfeeding
                  is not advised. Always take medicines only after assessment by
                  qualified doctors.
                </li>
                <li>
                  Couples having difficulty in conceiving should be evaluated
                  together, as male factors may also be present. Early evaluation
                  saves time and worry.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once for very heavy bleeding that
                  soaks pads quickly, severe pelvic pain, fainting or extreme
                  weakness. These can be signs of a serious problem.
                </li>
                <li>
                  Sudden severe lower abdominal pain, especially with vomiting or
                  fever, may indicate a cyst problem or other emergency. Such
                  symptoms need immediate evaluation.
                </li>
                <li>
                  Missed periods with pain on one side or spotting may need
                  pregnancy and ectopic pregnancy to be ruled out. Do not delay
                  medical care in such a situation.
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
                Why Bilari Women Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The main branch is in Tehsil Bilari, making visits convenient
                  for women from Bilari, Guarau, Bhidwari, Chandausi, Sambhal and
                  nearby areas. Regular follow-up is much easier when the centre
                  is close.
                </li>
                <li>
                  The hospital carries the seva sankalp of Sw. Vaidya Vijay Pal
                  Singh Ji and over thirty-five years of Ayurvedic experience.
                  Many patients with chronic illness have trusted this centre for
                  long-term care.
                </li>
                <li>
                  Patients describe the staff as humble and kind, and the ashram
                  surroundings as calm and healing. Private and respectful care
                  helps women speak openly about their health.
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
                  Please carry your ultrasound, thyroid and blood reports,
                  earlier prescriptions and a list of current medicines.
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