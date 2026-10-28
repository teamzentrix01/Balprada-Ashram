import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicSlipDiscTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda treat slip disc in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for slip disc at its Bilari branch, including medicines, therapies and guidance. Results vary, so no guaranteed outcome is promised.",
    },
    {
      q: "Can slip disc be treated without surgery?",
      a: "Many patients improve with rest, therapy and exercise under guidance. Severe nerve weakness or bladder and bowel problems may need a spine specialist opinion.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring your MRI, X-ray and earlier prescriptions. Balprada Pathology Lab can support any further tests.",
    },
    {
      q: "Can I do yoga or exercise with a slip disc?",
      a: "Only gentle exercises advised for your condition are safe. Avoid forward bending and heavy workouts until the doctor allows.",
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
                Ayurvedic Slip Disc Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for slip disc to patients from Bilari
                  and nearby villages. The main branch is in Tehsil Bilari, so
                  consultation, therapy guidance and follow-up are close to home.
                </li>
                <li>
                  Slip disc often causes severe back or neck pain, leg or arm
                  numbness and difficulty in daily work. Balprada explains the
                  condition clearly, reviews MRI or X-ray reports and guides each
                  patient honestly on what Ayurvedic care can support.
                </li>
                <li>
                  Care combines in-house herbal medicines, Panchakarma based
                  therapies where suitable, physiotherapy, yoga and routine
                  correction. The aim is to ease pain, improve movement and
                  strengthen the body through steady guidance.
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
                Understanding Slip Disc in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The spine has soft cushion-like discs between the bones. A slip
                  disc, also called a herniated or prolapsed disc, happens when a
                  disc bulges or its inner part pushes out and may press on a
                  nearby nerve.
                </li>
                <li>
                  Ayurveda understands such pain mainly as Vata dosha imbalance
                  in the back and joints. Conditions such as Gridhrasi, similar
                  to sciatica, and Katishula, meaning low back pain, are
                  described in classical texts.
                </li>
                <li>
                  Weak digestion, poor nutrition, long sitting and heavy lifting
                  can aggravate Vata and reduce strength of the spinal tissues.
                  The vaidya studies these background factors along with the pain
                  itself.
                </li>
                <li>
                  Modern medicine diagnoses slip disc through examination and
                  MRI, and describes the level and severity of the disc. Balprada
                  respects these findings and asks patients to bring all reports
                  so that guidance matches the real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Slip Disc
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sharp or burning pain in the lower back, which may spread to
                  the buttock, thigh, calf or foot, is common in lumbar slip
                  disc. The pain often increases on bending, sitting for long or
                  coughing.
                </li>
                <li>
                  Neck pain spreading to the shoulder, arm or fingers can occur
                  in cervical slip disc. Patients may also notice tingling, pins
                  and needles or a feeling of heaviness in the arm.
                </li>
                <li>
                  Numbness, weakness in the leg or arm, difficulty lifting the
                  foot and a feeling of the limb giving way are signs of nerve
                  involvement. These need careful assessment and regular
                  monitoring.
                </li>
                <li>
                  Stiffness in the morning, difficulty standing straight and pain
                  that disturbs sleep are frequent complaints. Some patients also
                  develop muscle spasm and limited movement.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long hours of sitting, especially with poor posture, put steady
                  pressure on the spinal discs. Desk work, driving, farming and
                  shop work with constant bending are common reasons.
                </li>
                <li>
                  Lifting heavy weights with a bent back, sudden jerks or
                  twisting movements can strain a disc. Falls, road accidents and
                  sports injuries can also cause disc injury.
                </li>
                <li>
                  Being overweight, weak back and abdominal muscles, smoking and
                  lack of exercise add to the risk. Ageing naturally dries and
                  weakens the discs, so risk increases with age.
                </li>
                <li>
                  Poor nutrition, low calcium and vitamin D, and long-standing
                  weakness may reduce spinal strength. Family history can also
                  play a role in some patients.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Care and Honest Assessment Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many slip disc cases improve with rest, correct posture, guided
                  therapy and gradual exercise. Early care helps reduce nerve
                  irritation and prevents repeated pain attacks from becoming
                  chronic.
                </li>
                <li>
                  Persistent weakness, worsening numbness or severe pain not
                  settling with care may need a spine specialist opinion. Delay
                  in such cases can risk permanent nerve damage.
                </li>
                <li>
                  Patients should avoid unsupervised massage, forceful
                  manipulation or heavy exercises during severe pain. Wrong
                  handling can worsen the disc and nerve pressure.
                </li>
                <li>
                  Balprada encourages patients to keep their doctor or spine
                  specialist informed. Good coordination between treating doctors
                  protects the patient and keeps care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to Slip Disc Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews pain pattern, symptoms, occupation,
                  posture habits, past injuries, current medicines, digestion and
                  sleep. This full picture makes the advice personal and gentle.
                </li>
                <li>
                  Reports such as MRI, X-ray and relevant blood tests are
                  reviewed. Patients are asked to bring all earlier
                  prescriptions, scans and hospital papers to the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, suitable
                  therapies, physiotherapy, yoga and lifestyle correction
                  wherever appropriate. The plan is explained in simple language
                  so the patient and family know what to follow.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
                  pain, movement and strength change. This steady follow-up keeps
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
                  Tests such as calcium, vitamin D, uric acid and inflammatory
                  markers may help understand weakness or joint problems
                  alongside the disc condition. The doctor advises only the tests
                  that are needed.
                </li>
                <li>
                  Patients with severe nerve signs may need updated imaging or a
                  specialist opinion. Balprada guides such patients honestly
                  toward suitable hospital-level evaluation.
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
                  Herbs traditionally used for Vata balance, pain and nerve
                  support include Ashwagandha, Shallaki, Guggulu, Nirgundi, Rasna
                  and Bala. The final selection depends on each patient, never on
                  a fixed formula for all.
                </li>
                <li>
                  Medicines are chosen to ease pain and stiffness, support nerve
                  and muscle strength and improve digestion. They are planned
                  together with therapy and exercise, because herbs work best
                  with proper routine.
                </li>
                <li>
                  Patients should avoid random pain-relief powders,
                  steroid-containing products or unverified oils bought from
                  local sources. Guided use under a vaidya is strongly
                  recommended.
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
                  Warm herbal oil therapies, such as Abhyanga and Kati Basti for
                  the lower back, may help ease stiffness and muscle spasm. They
                  are chosen only when the vaidya finds them suitable for your
                  stage.
                </li>
                <li>
                  Steam and Patra Pinda Sweda style therapies may support muscle
                  relaxation in selected patients. Heat or oil therapy is avoided
                  in some conditions, so assessment always comes first.
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
                  Exercises are chosen to protect the spine and are increased
                  slowly as pain settles.
                </li>
                <li>
                  Yoga guidance may include gentle stretches such as
                  Pawanmuktasana, Bhujangasana and Setu Bandhasana, once pain
                  allows. Forward bending and strong twists are avoided in many
                  slip disc cases, so postures are advised individually.
                </li>
                <li>
                  Breathing practice and meditation help reduce stress and muscle
                  tension, which can worsen back pain. A calm mind supports
                  better sleep and recovery.
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
                Diet Guidelines for Spine Health
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Warm, freshly cooked and easily digestible meals support
                  strength and reduce Vata aggravation. Dals, vegetables, soft
                  rotis, seasonal fruits and soups are commonly suggested.
                </li>
                <li>
                  Adequate calcium, protein and vitamin D support bones and
                  muscles. Milk, curd, sesame, green leafy vegetables and nuts
                  may be helpful when they suit your digestion and reports.
                </li>
                <li>
                  Cold drinks, cold leftovers, excess dry or fried snacks and
                  very spicy food can aggravate Vata and digestion. Regular meal
                  timing and light dinners support comfort and sleep.
                </li>
                <li>
                  Maintaining a healthy weight reduces pressure on the spine.
                  Weight loss should be gradual and guided, with balanced meals
                  and no crash diets.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Posture and Daily Habits to Follow
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sit with the back supported and feet flat on the floor, and
                  take a short walking break every thirty to forty five minutes.
                  Long unbroken sitting is one of the biggest triggers of disc
                  pain.
                </li>
                <li>
                  Bend from the knees and not from the waist when lifting. Keep
                  the load close to the body and avoid sudden twisting while
                  carrying weight.
                </li>
                <li>
                  Sleep on a firm but comfortable mattress, in a position that
                  keeps the spine neutral. A small pillow under the knees when
                  lying on the back may reduce strain.
                </li>
                <li>
                  Avoid long two-wheeler rides on rough roads and heavy lifting
                  during the painful phase. Gentle walking and gradual return to
                  activity usually help more than complete bed rest.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once if there is loss of control of
                  urine or stool, numbness around the groin or inner thighs, or
                  sudden severe weakness in both legs. These can be signs of
                  serious nerve compression.
                </li>
                <li>
                  Sudden severe pain after a fall or accident, fever with back
                  pain, or unexplained weight loss with back pain need prompt
                  medical evaluation. They can point to causes other than a
                  simple disc problem.
                </li>
                <li>
                  Progressive weakness in an arm or leg, or a foot that drags,
                  also needs a spine specialist opinion without delay. Early
                  action protects nerve function.
                </li>
                <li>
                  Balprada believes in honest guidance. If your condition needs
                  surgery or emergency care, the team will say so clearly and
                  support your recovery afterwards where possible.
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
                  the mind and helps patients stay disciplined with exercise and
                  routine.
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
                  Please carry your MRI or X-ray reports, earlier prescriptions
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