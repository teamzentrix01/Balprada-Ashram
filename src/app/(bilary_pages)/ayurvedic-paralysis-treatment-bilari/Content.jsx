import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicParalysisTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda treat paralysis in Bilari?",
      a: "Balprada offers supportive Ayurvedic care during paralysis recovery at its Bilari branch. It works alongside hospital treatment, and no guaranteed cure is promised.",
    },
    {
      q: "What should I do when paralysis starts suddenly?",
      a: "Go to a hospital immediately, as stroke treatment is time-sensitive. Ayurvedic care can be considered after the patient is stable.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring CT or MRI scans, discharge papers, blood reports and earlier prescriptions. Balprada Pathology Lab can support further tests.",
    },
    {
      q: "Can facial paralysis recover with Ayurveda?",
      a: "Many facial paralysis cases improve with timely medical care and therapy. Balprada may support recovery after the doctor confirms the cause.",
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
                Ayurvedic Paralysis Recovery Care in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for patients recovering from
                  paralysis to patients from Bilari and nearby villages. The main
                  branch is in Tehsil Bilari, so consultation, therapy guidance
                  and follow-up are close to home.
                </li>
                <li>
                  Paralysis can follow a stroke, nerve injury or other illness,
                  and it affects the whole family. Balprada explains the
                  condition clearly, reviews scans and reports, and guides each
                  patient honestly on what Ayurvedic care can support.
                </li>
                <li>
                  Care combines in-house herbal medicines, Panchakarma based
                  therapies where suitable, physiotherapy, yoga and diet
                  guidance. The aim is to support strength, movement, comfort and
                  confidence during the recovery period.
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
                First Step: Emergency Care for Sudden Paralysis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sudden weakness of the face, arm or leg, slurred speech,
                  confusion or loss of balance is a medical emergency. The
                  patient should be taken to a hospital with scan facilities
                  immediately, because the first few hours are very important.
                </li>
                <li>
                  Ayurvedic care is not a substitute for emergency stroke
                  treatment. Balprada always advises that urgent hospital care
                  comes first, and Ayurvedic support is considered only after the
                  patient is stable.
                </li>
                <li>
                  Please do not delay by trying home remedies, oil massage or
                  local treatments at the time of a sudden attack. Wasted time
                  can mean greater and sometimes permanent damage.
                </li>
                <li>
                  Once the patient is stable, rehabilitation can begin. Balprada
                  works alongside the treating doctor and physiotherapist so that
                  recovery support stays safe and well planned.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Paralysis in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Paralysis means loss of muscle movement in a part of the body.
                  Hemiplegia affects one side, paraplegia affects both legs, and
                  facial paralysis affects one side of the face.
                </li>
                <li>
                  Ayurveda describes one-sided paralysis as Pakshaghata and
                  facial paralysis as Ardita. These conditions are mainly linked
                  with severe imbalance of Vata dosha affecting the nerves and
                  channels of the body.
                </li>
                <li>
                  Weak digestion, long-standing illness, uncontrolled blood
                  pressure and sugar, and faulty routine are seen as background
                  factors. The vaidya studies these along with the paralysis
                  itself.
                </li>
                <li>
                  Modern medicine finds the cause through examination and scans,
                  such as stroke, nerve injury, spinal injury or infection.
                  Balprada respects these findings and asks patients to bring all
                  reports so that guidance matches the real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Stroke, caused by a blocked or burst blood vessel in the brain,
                  is the leading cause of one-sided paralysis. High blood
                  pressure, diabetes, high cholesterol, smoking and heart rhythm
                  problems greatly increase this risk.
                </li>
                <li>
                  Facial paralysis, often called Bell palsy, may follow viral
                  infection, cold exposure or sudden nerve inflammation. Many
                  such cases improve with timely medical treatment and therapy.
                </li>
                <li>
                  Spinal cord injury, slip disc with severe nerve pressure, brain
                  injury and nerve diseases can also cause weakness or paralysis.
                  The doctor must find the exact cause before planning recovery
                  care.
                </li>
                <li>
                  Family history, advancing age, obesity, lack of exercise and
                  heavy alcohol use add to the risk. Controlling these factors is
                  the best protection against a first or repeat attack.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms and Effects During Recovery
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Weakness or loss of movement in one arm, leg or half of the
                  body is the main sign. Muscles may be stiff and tight, or very
                  loose and weak, depending on the stage.
                </li>
                <li>
                  Drooping of one side of the face, difficulty closing the eye,
                  dribbling of saliva and slurred or unclear speech are common
                  after stroke or facial paralysis. Swallowing may also become
                  difficult.
                </li>
                <li>
                  Numbness, tingling, pain in the affected limb and swelling of
                  the hand or foot may follow. Shoulder pain on the weak side is
                  frequent and needs careful handling.
                </li>
                <li>
                  Tiredness, low mood, anxiety, sleep problems and loss of
                  confidence are common among patients and caregivers. Emotional
                  support is an important part of recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Rehabilitation and Honest Assessment Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Recovery is usually best when rehabilitation starts early under
                  proper guidance. Gentle regular movement helps prevent
                  stiffness, pressure sores and joint contracture.
                </li>
                <li>
                  Recovery differs from person to person and depends on the
                  cause, age, severity and how quickly treatment began. Balprada
                  does not promise complete recovery, and it explains realistic
                  goals to the family.
                </li>
                <li>
                  Patients should avoid forceful massage, strong manipulation or
                  untested remedies. Wrong handling can cause injury, pain and
                  shoulder damage in a weak limb.
                </li>
                <li>
                  Balprada encourages patients to keep their neurologist or
                  physician informed. Good coordination between treating doctors
                  protects the patient and keeps care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to Paralysis Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews the cause, date of onset, affected
                  body parts, speech and swallowing, current medicines,
                  digestion, sleep and daily routine. This full picture makes the
                  advice personal and gentle.
                </li>
                <li>
                  Reports such as CT scan, MRI, blood pressure and sugar records,
                  lipid profile and hospital discharge papers are reviewed.
                  Patients are asked to bring all earlier prescriptions and
                  papers to the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, suitable
                  therapies, physiotherapy, yoga and diet guidance wherever
                  appropriate. The plan is explained in simple language so the
                  patient and family know what to follow.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
                  strength, movement and speech change. This steady follow-up
                  keeps care practical, safe and responsible through the whole
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
                  testing support, so patients can complete required tests close
                  to the consultation. This saves time and keeps reports and
                  treatment decisions connected.
                </li>
                <li>
                  Tests such as blood sugar, lipid profile, kidney function,
                  vitamin B12 and thyroid help understand risk factors and
                  weakness. The doctor advises only the tests that are needed for
                  you.
                </li>
                <li>
                  Patients with repeated attacks, new weakness or worsening
                  symptoms may need updated imaging or a specialist opinion.
                  Balprada guides such patients honestly toward suitable
                  hospital-level evaluation.
                </li>
                <li>
                  Patients should not stop or change any prescribed modern
                  medicine, such as blood thinners or blood pressure tablets, on
                  their own. Any change should be discussed openly with the
                  doctors involved.
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
                  Herbs traditionally used for Vata balance and nerve and muscle
                  support include Ashwagandha, Bala, Guggulu, Rasna, Brahmi and
                  Shankhpushpi. The final selection depends on each patient,
                  never on a fixed formula for all.
                </li>
                <li>
                  Medicines are chosen to support strength, nerve function,
                  digestion and calm. They are planned together with therapy and
                  exercise, because herbs work best with proper routine.
                </li>
                <li>
                  Patients should avoid random paralysis powders, oils and
                  tablets sold with big promises. Some products may interact with
                  blood thinners or blood pressure medicines, so guided use under
                  a vaidya is strongly recommended.
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
                  patients after assessment of strength, stability and reports.
                  They are planned individually and are never applied to every
                  patient in the same way.
                </li>
                <li>
                  Warm herbal oil massage, called Abhyanga, and gentle steam
                  therapy may help ease stiffness and support circulation in
                  suitable patients. Heat is used with care in patients with
                  numbness, because they may not feel burns.
                </li>
                <li>
                  Traditional therapies such as Shirodhara, where warm oil flows
                  on the forehead, may support calm and sleep in selected
                  patients. They are used only after assessment and when the
                  patient is stable.
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
                  physiotherapy supports safe movement, balance and strength.
                  Exercises start gently and are increased slowly as the patient
                  gains control.
                </li>
                <li>
                  Simple supported movements, breathing practice and gentle yoga
                  based on ability may help body awareness and calm. Poses are
                  always chosen to suit the patient, and nothing forceful is
                  done.
                </li>
                <li>
                  Meditation and counselling-style support help patients and
                  caregivers manage low mood, worry and fatigue. A calm mind
                  supports better sleep and recovery.
                </li>
                <li>
                  Naturopathy and rest guidance are also available when long
                  weakness affects daily life. All supportive care is linked to
                  the main plan, so nothing runs in isolation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines During Recovery
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Warm, freshly cooked and easily digestible meals support
                  strength and reduce Vata aggravation. Dals, vegetables, soft
                  rotis, khichdi, soups and seasonal fruits are commonly
                  suggested.
                </li>
                <li>
                  Patients with swallowing difficulty may need soft, semi-solid
                  or thickened food. A speech or swallowing specialist should
                  guide this, because wrong food texture can cause choking.
                </li>
                <li>
                  Low salt, low oil and controlled sugar are important for stroke
                  prevention. Blood pressure, diabetes and cholesterol diets
                  should follow the treating doctor&apos;s advice.
                </li>
                <li>
                  Cold drinks, fried snacks, packaged food, sweets, tobacco and
                  alcohol should be avoided. Regular meal timing and a light
                  dinner support digestion and comfort.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Caregiver Guidance and Daily Habits
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Change the position of a bedridden patient every two hours, and
                  keep the skin clean and dry. This helps prevent pressure sores,
                  which are painful and slow recovery.
                </li>
                <li>
                  Support the weak arm and leg gently in a comfortable position.
                  Never pull the weak arm to lift the patient, because this can
                  injure the shoulder.
                </li>
                <li>
                  Encourage the patient to do small daily tasks within safe
                  limits. Patience, praise and a regular routine build confidence
                  and speed up adaptation.
                </li>
                <li>
                  Remove floor hazards, add grab bars in the bathroom and use
                  non-slip footwear. A fall can cause new injury and set back
                  recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once for new sudden weakness, face
                  drooping, slurred speech, severe headache, vision loss or loss
                  of consciousness. These can be signs of a new stroke.
                </li>
                <li>
                  Chest pain, severe breathlessness, high fever, choking or
                  repeated vomiting also need immediate medical attention. Do not
                  wait for the next OPD visit.
                </li>
                <li>
                  Blood pressure or sugar that is very high or very low, and
                  sudden swelling or pain in one leg, should be checked urgently.
                  These can be dangerous in a patient with paralysis.
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
                  the mind and helps patients and caregivers stay hopeful and
                  disciplined.
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
                  Please carry scans, hospital papers, earlier prescriptions and
                  a list of current medicines.
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