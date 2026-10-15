import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicTreatmentForBackPainKanth() {
  const faqs = [
    {
      q: "Q1. Does Balprada treat back pain?",
      a: "Back pain is not listed as a dedicated treatment area on the website. You can consult the vaidya, who will tell you what supportive care suits your case.",
    },
    {
      q: "Q2. Is there physiotherapy?",
      a: "Yes. Balprada offers physiotherapy with mobility assessment and guided rehabilitation, and the team decides its suitability after assessment.",
    },
    {
      q: "Q3. Can back pain be a kidney problem?",
      a: "Sometimes. Back or side pain with urinary symptoms, blood in the urine or fever needs prompt medical attention, and Balprada's vaidyas can review kidney concerns.",
    },
    {
      q: "Q4. Are X-ray or MRI available?",
      a: "Imaging is not listed on the website. Please bring your own scan reports.",
    },
    {
      q: "Q5. Does Balprada have a branch in Kanth?",
      a: "No Kanth branch is listed on the website. Check the route using the map links on the contact page.",
    },
    {
      q: "Q6. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q7. Should I stop my painkillers?",
      a: "No. Do not stop or change any prescribed medicine without advice from your treating doctor.",
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
                Back Pain Care for Kanth Patients: Where to Start
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Back pain is one of the most common reasons people look for
                  Ayurvedic care, and patients from Kanth can begin with a
                  consultation at Balprada Ayurvedic Hospital &amp; Research
                  Center, which has served patients since 1991 in Moradabad
                  district.
                </li>
                <li>
                  Balprada&apos;s listed treatment areas are kidney, liver,
                  cancer support, heart, diabetes and thyroid, and women&apos;s
                  wellness, and the website does not publish a dedicated back
                  pain or spine programme, so this page explains honestly what
                  the vaidya, physiotherapy and supportive therapies can offer.
                </li>
                <li>
                  The best first step is a consultation, where the doctor listens
                  to your pain, reviews your history and reports, and tells you
                  what Balprada can and cannot support in your case.
                </li>
                <li>
                  The website lists no branch in Kanth, so please check the route
                  using the map links on the contact page and call before you
                  travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Back Pain
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Common Everyday Causes
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Back pain is often linked to muscle strain, long hours of
                      sitting, poor posture, lifting heavy loads, lack of
                      movement, excess weight and stress, and it can also appear
                      with age.
                    </li>
                    <li>
                      Because the causes are many, a proper assessment matters
                      more than any single remedy, and the pain should not be
                      treated by guesswork or by repeated use of painkillers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. When Back Pain Is Not Only About the Back
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Pain in the lower back or the side of the back can
                      sometimes be linked to the kidneys, especially when it
                      comes with burning urine, blood in the urine, fever or
                      vomiting, and kidney stones are one example.
                    </li>
                    <li>
                      Balprada has long experience with kidney and urinary
                      concerns, so the vaidya can look at back pain together with
                      urinary symptoms, swelling, diabetes and kidney reports
                      where relevant.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Warning Signs That Need Urgent Medical Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Go to the nearest hospital without delay if back pain
                      follows a fall or injury, or comes with numbness, tingling,
                      weakness in a leg, difficulty passing urine or stool, loss
                      of control of the bladder or bowel, fever, or unexplained
                      weight loss.
                    </li>
                    <li>
                      Severe pain that is sudden, that does not ease with rest,
                      or that comes with breathlessness, sweating or chest
                      discomfort also needs emergency care before any Ayurvedic
                      consultation.
                    </li>
                    <li>
                      People with cancer, a history of osteoporosis, or long-term
                      steroid use should speak to their treating doctor first
                      about any new back pain.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Consultation at Balprada Looks Like
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Listening to Your Pain
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, medical history, daily
                      routine, current treatment and treatment goals before
                      suggesting any next step.
                    </li>
                    <li>
                      Be ready to describe where the pain is, when it started,
                      what makes it better or worse, how it affects sleep and
                      walking, and whether it spreads to the legs.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Reviewing Your Papers
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Please bring previous prescriptions, X-ray, MRI or
                      ultrasound reports, blood and urine reports, and a list of
                      all current medicines, including painkillers, because the
                      vaidya plans guidance around what you already take.
                    </li>
                    <li>
                      Balprada&apos;s in-house pathology lab provides blood and
                      urine tests, but imaging such as X-ray or MRI is not listed
                      on the website, so carry your own scan reports.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Honest Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya will tell you whether Balprada&apos;s supportive
                      care suits your situation or whether you should first see
                      an orthopaedic doctor, a spine specialist or a physician.
                    </li>
                    <li>
                      Ayurvedic care at Balprada is supportive, outcomes vary
                      from person to person, and no specific result is promised
                      from any treatment or therapy.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities That May Be Suggested
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy at Balprada begins with a mobility assessment
                      and moves into guided rehabilitation, with strength and
                      recovery support alongside the wider care plan.
                    </li>
                    <li>
                      Session frequency and suitability are decided after
                      individual assessment, and patients should share their
                      conditions, medicines and mobility concerns before
                      starting.
                    </li>
                    <li>
                      The physiotherapy page does not name back pain, so please
                      ask the team on the phone whether physiotherapy is suitable
                      for your pain.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga at Balprada includes breathing exercises, posture
                      practice, routine building and stress support, and it runs
                      alongside the Ayurvedic consultation.
                    </li>
                    <li>
                      Because the wrong movement can aggravate pain, yoga should
                      be started only after assessment, and only the practices
                      the team advises should be followed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures that supports recovery, planned after
                      individual assessment, with frequency and suitability
                      decided by the doctor.
                    </li>
                    <li>
                      Patients should share their existing conditions, current
                      medicines and mobility concerns first, so the team can
                      explain the programme and support safe participation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy supports the body&apos;s own healing through
                      natural therapies, detox support and lifestyle correction,
                      using simple, nature-based methods and steady routines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Guided meditation and breath awareness support stress and
                      sleep, which matter because poor sleep and constant tension
                      can make pain feel worse.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Ayurvedic Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines, and any
                      medicine should be taken only as explained by the vaidya.
                    </li>
                    <li>
                      Patients should avoid applying unknown oils or taking
                      unknown herbal powders on their own, and should ask the
                      vaidya before using any oil from the Balprada product
                      range.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits That Support a Healthy Back
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Posture and Movement
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Change position often, avoid sitting for very long without
                      a short walk, and keep the back supported when sitting,
                      because long unbroken sitting is a common trigger for pain.
                    </li>
                    <li>
                      Lift heavy objects by bending the knees and keeping the
                      load close to the body, and avoid sudden twisting
                      movements.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Weight, Food and Routine
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fresh, simple, home-cooked food at regular times helps
                      support healthy weight and digestion, and the vaidya can
                      give a personal plan, because extra weight can add strain
                      to the back.
                    </li>
                    <li>
                      Regular sleep timings and a firm, comfortable bed or
                      mattress can help patients rest better.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Stress and Sleep
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Breathing practice, gentle walking and relaxation help
                      reduce tension in the body, and they are best followed as
                      advised after assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Medicines Safety
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Do not rely on repeated painkillers without medical advice,
                      because frequent use can strain the stomach and the
                      kidneys, which is a special concern for patients with
                      kidney or liver problems.
                    </li>
                    <li>
                      Never stop prescribed medicines without asking the treating
                      doctor, and tell every doctor about everything you take.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Consult the Vaidya for Back Pain
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People with long-standing, dull or recurring back pain who want
                  guidance on routine, diet and supportive therapy alongside
                  their existing treatment can begin with a consultation.
                </li>
                <li>
                  People with diabetes, high blood pressure, excess weight or
                  kidney concerns, whose back pain may be connected to wider
                  health conditions, benefit from the whole-person approach
                  Balprada follows.
                </li>
                <li>
                  Women with back pain linked to weakness or hormonal concerns
                  can discuss it privately, because Balprada offers sensitive
                  care for hormonal balance, menstrual health, weakness and
                  maternal wellness.
                </li>
                <li>
                  Elderly patients should come with a family member, carry all
                  their reports and tell the team about any difficulty in walking
                  or balance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Vaidya About Back Pain
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask what the doctor thinks may be causing your pain, which
                  reports are still needed and whether you should also see an
                  orthopaedic doctor or a physician.
                </li>
                <li>
                  Ask which supportive therapies, if any, suit your pain, how
                  often they are advised and which movements you should avoid at
                  home.
                </li>
                <li>
                  Ask which foods and daily habits to change, how to take each
                  medicine, and which painkillers are safe to continue.
                </li>
                <li>
                  Ask when the first review will be, what improvement to expect
                  realistically and which signs mean you should return sooner or
                  go to a hospital.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Carry an identity document, previous prescriptions, scan and
                  blood reports and a list of current medicines, and note down
                  when the pain began, what triggers it and how it affects your
                  sleep and walking.
                </li>
                <li>
                  Wear loose, comfortable clothes, bring a family member if
                  walking is difficult, and arrive about 15 minutes early as the
                  website terms request.
                </li>
                <li>
                  If you need to cancel or reschedule, give at least 24 hours of
                  notice by phone or WhatsApp, because appointments depend on
                  doctor availability.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Trust Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice and a
                  service-first spirit give patients and families a sense of
                  continuity.
                </li>
                <li>
                  One institution for consultation, tests, medicines and
                  supportive therapies, which reduces the number of trips for
                  patients who find travel painful.
                </li>
                <li>
                  Open seven days a week, with Vaidya ji available at the
                  Moradabad Branch on Sundays, which helps working families plan
                  visits.
                </li>
                <li>
                  Patient reviews on the website speak of knowledgeable vaidyas,
                  genuine herbal preparations, a serene atmosphere and humble,
                  helpful staff.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Team
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma has more than 20 years of experience in
                  Ayurvedic practice and consults on kidney, liver and other
                  chronic concerns at Balprada.
                </li>
                <li>
                  Dr. Chetan Anand, associated with Balprada Herbal Wellness
                  Private Limited, has over seven years of experience in herbal
                  product research and development and advises on free health
                  camps.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Care Is Planned
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Step 1, consultation: the doctor reviews the concern, history,
                  reports and current medication, and listens to the patient and
                  the family.
                </li>
                <li>
                  Step 2, personalised plan: Ayurvedic medicines, diet guidance
                  and lifestyle correction are planned where suitable and
                  explained in simple language.
                </li>
                <li>
                  Step 3, supportive care: physiotherapy, yoga, naturopathy,
                  meditation or panchakarma may be added only after individual
                  assessment.
                </li>
                <li>
                  Step 4, follow-up: regular reviews let the team check progress
                  and adjust the plan as the patient&apos;s needs change.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visiting from Kanth
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
                        Timings: daily, 10:00 AM to 2:00 PM. Phone and WhatsApp:{" "}
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

                <div>
                  <p className="font-semibold">Free OPD and Booking</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month, and the branch should be confirmed by phone before
                      travelling.
                    </li>
                    <li>
                      Book through the appointment form on balpradaindia.com,
                      call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                      , or write to{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>
                      , and arrive about 15 minutes early.
                    </li>
                  </ul>
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