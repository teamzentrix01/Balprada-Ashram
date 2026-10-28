import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function ArthritisAyurvedicTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda treat arthritis in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for arthritis at its Bilari branch, including medicines, therapies and guidance. Results vary, so no guaranteed cure is promised.",
    },
    {
      q: "Which types of arthritis can be supported?",
      a: "Care may be planned for osteoarthritis, rheumatoid arthritis and gout after assessment. The plan depends on your type, reports and stage.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring X-ray, uric acid, ESR, CRP and earlier prescriptions. Balprada Pathology Lab can support further tests.",
    },
    {
      q: "Can I stop my arthritis medicines?",
      a: "No, please never stop prescribed medicines without your doctor&apos;s advice. Ayurvedic care is offered as support alongside them.",
    },
    {
      q: "Is physiotherapy available at Balprada?",
      a: "Yes, physiotherapy is part of the facilities at Balprada. It works alongside Ayurvedic care to support safe movement and strength.",
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
                Arthritis Ayurvedic Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for arthritis to patients from Bilari
                  and nearby villages. The main branch is in Tehsil Bilari, so
                  consultation, therapy guidance and follow-up are close to home.
                </li>
                <li>
                  Arthritis causes joint pain, swelling and stiffness that can
                  limit walking, work and sleep. Balprada explains the condition
                  clearly, reviews blood and imaging reports and guides each
                  patient honestly on what Ayurvedic care can support.
                </li>
                <li>
                  Care combines in-house herbal medicines, Panchakarma based
                  therapies where suitable, physiotherapy, yoga and diet
                  correction. The aim is to ease pain and stiffness, improve
                  movement and support long-term joint comfort.
                </li>
                <li>
                  Balprada brings thirty-five years of experience in Ayurvedic
                  care for chronic conditions. Every plan starts with listening
                  to the patient and reading reports before any medicine or
                  therapy is suggested.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Arthritis in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Arthritis means inflammation or wear of one or more joints.
                  Common types include osteoarthritis from wear and tear,
                  rheumatoid arthritis from the immune system, and gout from high
                  uric acid.
                </li>
                <li>
                  Ayurveda describes degenerative joint pain as Sandhivata,
                  mainly linked with Vata dosha imbalance. Painful swollen
                  inflammatory joint disease is described as Amavata, where Ama
                  and Vata together settle in the joints.
                </li>
                <li>
                  Weak digestion, or low Agni, is seen as a central cause. When
                  food is not digested well, Ama collects in the body and moves
                  into the joints, causing heaviness, swelling and stiffness.
                </li>
                <li>
                  Modern medicine identifies the type through examination, blood
                  tests and X-ray or other imaging. Balprada respects these
                  findings and asks patients to bring all reports so that
                  Ayurvedic guidance matches the real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Arthritis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Joint pain that increases with movement or at the end of the
                  day is typical of osteoarthritis. Knees, hips, hands and the
                  lower back are commonly affected, and cracking sounds may be
                  felt on movement.
                </li>
                <li>
                  Long morning stiffness lasting more than half an hour, with
                  swollen, warm and tender joints, may point to rheumatoid
                  arthritis. Small joints of hands and feet are often affected on
                  both sides.
                </li>
                <li>
                  Sudden severe pain, redness and swelling in a single joint,
                  often the big toe, suggests gout. Attacks may come at night and
                  may follow heavy meals or alcohol.
                </li>
                <li>
                  Reduced movement, weakness, tiredness and difficulty in
                  climbing stairs or sitting on the floor are frequent
                  complaints. Some patients also notice joint deformity over
                  time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ageing naturally wears the joint cartilage, so risk rises after
                  the age of forty or fifty. Previous joint injuries, heavy
                  labour and repeated strain on the knees add to the risk.
                </li>
                <li>
                  Being overweight places extra load on the knees, hips and
                  spine. Even a modest steady weight loss can reduce joint pain
                  noticeably in many patients.
                </li>
                <li>
                  Family history, hormonal changes in women and autoimmune
                  tendency can lead to rheumatoid arthritis. Smoking and
                  long-standing infection may also worsen the condition.
                </li>
                <li>
                  High uric acid from rich diet, alcohol, certain medicines and
                  kidney problems causes gout. Irregular meals, heavy late
                  dinners and a sedentary routine also weaken digestion and
                  increase Ama.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Care and Honest Assessment Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Early care helps slow joint damage and keep movement. Waiting
                  until the joint is deformed or very stiff makes recovery of
                  comfort slower and harder.
                </li>
                <li>
                  Rheumatoid arthritis and gout need accurate diagnosis and
                  regular monitoring, because delay can damage joints
                  permanently. Balprada encourages patients to bring tests and
                  follow their rheumatologist advice.
                </li>
                <li>
                  Patients should avoid long self-use of painkillers and
                  steroid-containing products. These can harm the stomach,
                  kidneys and bones, and their pain relief is only temporary.
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
                The Balprada Approach to Arthritis Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews pain pattern, affected joints, morning
                  stiffness, past illness, current medicines, digestion, sleep
                  and daily routine. This full picture makes the advice personal
                  and gentle.
                </li>
                <li>
                  Reports such as X-ray, uric acid, ESR, CRP, rheumatoid factor
                  and anti-CCP are reviewed where available. Patients are asked
                  to bring all earlier prescriptions, scans and hospital papers
                  to the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, suitable
                  therapies, physiotherapy, yoga and diet correction wherever
                  appropriate. The plan is explained in simple language so the
                  patient and family know what to follow.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
                  pain, swelling and movement change. This steady follow-up keeps
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
                  testing support, so patients can complete joint-related tests
                  close to the consultation. This saves time and keeps reports
                  and treatment decisions connected.
                </li>
                <li>
                  Tests such as uric acid, ESR, CRP, calcium and vitamin D help
                  understand inflammation, gout and bone health. The doctor
                  advises only the tests that are needed for your condition.
                </li>
                <li>
                  Comparing earlier and later reports gives the patient and
                  vaidya a clear view of progress. Joint pain scores and walking
                  ability are also reviewed at follow-up visits.
                </li>
                <li>
                  Patients should not stop or change any prescribed modern
                  medicine, especially for rheumatoid arthritis, on their own.
                  Any change should be discussed openly with the doctors
                  involved.
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
                  Herbs traditionally used for joint support include Shallaki,
                  Guggulu, Ashwagandha, Nirgundi, Rasna, Guduchi and Haridra. The
                  final selection depends on the type of arthritis and the
                  patient, never on a fixed formula for all.
                </li>
                <li>
                  Medicines are chosen to ease pain and swelling, improve
                  digestion and reduce Ama. They are planned together with diet
                  and exercise, because herbs work best with proper routine.
                </li>
                <li>
                  Patients should avoid random joint-pain powders, oils and
                  tablets sold with big promises. Some hidden steroids and
                  painkillers can cause serious harm, so guided use under a
                  vaidya is strongly recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Therapy Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma related therapies may be considered for suitable
                  patients after assessment of strength, pain and reports. They
                  are planned individually and are never applied to every patient
                  in the same way.
                </li>
                <li>
                  Warm herbal oil therapies, such as Abhyanga and Janu Basti for
                  the knees, may help ease stiffness and pain. They are chosen
                  only when the vaidya finds them suitable for your stage and
                  joint condition.
                </li>
                <li>
                  Steam therapy and Patra Pinda Sweda style fomentation may
                  support relaxation of stiff joints and muscles in selected
                  patients. Heat is avoided in some hot and inflamed joints, so
                  assessment always comes first.
                </li>
                <li>
                  Basti, the medicated enema therapy, is traditionally important
                  for Vata disorders. It is used only after careful evaluation,
                  and the vaidya decides whether and when it is appropriate.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Physiotherapy, Yoga and Supportive Facilities
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada has a physiotherapy facility, and professional
                  physiotherapy supports safe movement, mobility and strength.
                  Exercises are chosen to protect the joints and are increased
                  slowly as pain settles.
                </li>
                <li>
                  Gentle yoga practices, such as Pawanmuktasana and simple joint
                  rotations, may help keep joints supple. Deep squatting and
                  heavy stress on painful knees are avoided, so postures are
                  advised individually.
                </li>
                <li>
                  Breathing practice and meditation help reduce stress, which can
                  worsen pain and inflammation. A calm mind supports better sleep
                  and recovery.
                </li>
                <li>
                  Naturopathy and rest guidance are also available when long
                  weakness or pain affects daily life. All supportive care is
                  linked to the main plan, so nothing runs in isolation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Arthritis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Warm, freshly cooked and easily digestible meals support Agni
                  and reduce Ama. Moong dal, vegetables, soft rotis, soups and
                  seasonal fruits are commonly suggested, in measured portions.
                </li>
                <li>
                  Turmeric and ginger used in everyday cooking may be helpful for
                  many patients. The vaidya will suggest the right amount,
                  especially for people with acidity or those taking
                  blood-thinning medicines.
                </li>
                <li>
                  Cold drinks, curd at night, fermented food, heavy fried snacks
                  and irregular meals can aggravate stiffness and heaviness.
                  Regular meal timing and a light dinner support better joint
                  comfort.
                </li>
                <li>
                  Patients with gout should reduce red meat, organ meat, alcohol
                  and heavy protein-rich dals as advised. Plenty of water, unless
                  restricted by a doctor, helps the body remove uric acid.
                </li>
                <li>
                  Maintaining a healthy weight reduces pressure on the joints.
                  Weight loss should be gradual and guided, with balanced meals
                  and no crash diets.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Daily Habits to Follow
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep moving gently throughout the day, because long stillness
                  increases stiffness. A short walk after meals and simple
                  stretches in the morning help joints feel looser.
                </li>
                <li>
                  Avoid sitting on the floor for long and avoid deep bending of
                  painful knees. Use a chair with back support, and use a raised
                  toilet seat where needed.
                </li>
                <li>
                  Wear comfortable footwear with good grip and avoid climbing
                  many stairs during painful days. Using a walking stick when
                  advised reduces load and the risk of falls.
                </li>
                <li>
                  Warm water bathing and gentle massage with oil advised by the
                  vaidya may bring comfort. Please avoid forceful massage and hot
                  packs on swollen red joints.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once for sudden severe joint pain
                  with high fever, redness and swelling, as this may be a joint
                  infection. Such cases need urgent evaluation.
                </li>
                <li>
                  A hot, very painful, swollen joint that cannot be moved, or a
                  sudden inability to bear weight after a fall, needs prompt
                  medical assessment. Delay can damage the joint.
                </li>
                <li>
                  New weakness, rapid deformity, chest pain or breathlessness in
                  a patient with rheumatoid arthritis needs quick medical advice.
                  Long-standing inflammation can affect other organs too.
                </li>
                <li>
                  Balprada believes in honest guidance. If your condition needs
                  advanced medical care or joint surgery, the team will say so
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
                  and nearby areas. Regular therapy and follow-up are much easier
                  when the centre is close.
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
                  exercise.
                </li>
                <li>
                  Medicines, Panchakarma, physiotherapy, yoga, pathology and
                  follow-up are available under one roof. This reduces confusion,
                  saves travel and keeps the whole treatment journey connected.
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
                  Please carry your X-ray and blood reports, earlier
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