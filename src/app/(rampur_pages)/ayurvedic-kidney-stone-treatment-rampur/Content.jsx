import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaKidneyStoneTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda help with kidney stones?",
      a: "Ayurvedic care supports urinary comfort, hydration and diet discipline, but large or blocking stones may need a urologist.",
    },
    {
      q: "Q2. Do all kidney stones need surgery?",
      a: "No. Small stones may pass naturally, but your doctor decides based on scan, size and symptoms.",
    },
    {
      q: "Q3. How much water should I drink?",
      a: "Follow your doctor&apos;s advice, since needs differ, especially if you have kidney weakness or swelling.",
    },
    {
      q: "Q4. Can stones come back?",
      a: "Yes, stones can recur, which is why diet, hydration and follow-up are important.",
    },
    {
      q: "Q5. When is stone pain an emergency?",
      a: "Severe pain, repeated vomiting, fever or very little urine needs immediate hospital care.",
    },
    {
      q: "Q6. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q7. Which reports should I bring?",
      a: "Ultrasound or CT scan, urine and blood tests, prescriptions and a list of medicines.",
    },
    {
      q: "Q8. What are the OPD timings?",
      a: "Daily from 10:00 AM to 2:00 PM at the main branch. The Moradabad branch has Vaidya ji on Sundays, so call first.",
    },
    {
      q: "Q9. Is there a free consultation?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
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
                Ayurvedic Kidney Stone Treatment in Rampur – Supportive Stone
                Care at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Care for Kidney Stones in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney stones can cause sudden, severe pain and long-term
                  worry about recurrence, so many families in Rampur, Uttar
                  Pradesh look for gentle Ayurvedic support alongside proper
                  scans, reports and medical advice.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care for kidney and urinary concerns since 1991
                  through personalised consultation, in-house medicines, diet
                  guidance and regular follow-up.
                </li>
                <li>
                  Our Kidney and Urinary Care programme treats kidney stones as
                  part of a wider picture, supporting urinary comfort,
                  hydration routines and dietary discipline according to each
                  patient&apos;s condition.
                </li>
                <li>
                  This page explains what kidney stones are, why they form, how
                  Balprada plans supportive care and when a stone needs urgent
                  hospital attention.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Kidney Stones?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney stones are hard deposits made of minerals and salts
                  that form inside the kidneys when waste substances in the
                  urine become concentrated and begin to crystallise.
                </li>
                <li>
                  Stones can be as small as a grain of sand or large enough to
                  block the urinary passage, and their size, position and
                  number decide how they should be managed.
                </li>
                <li>
                  Small stones may pass in the urine with fluids and medical
                  guidance, while larger or blocking stones can need procedures
                  advised by a urologist.
                </li>
                <li>
                  An ultrasound or CT scan, along with urine and blood tests,
                  helps the doctor understand your stone, so please carry all
                  such reports to your consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Kidney Stones
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sharp, cramping pain in the side or back that may travel
                  toward the lower abdomen or groin, often coming in waves and
                  becoming severe within a short time.
                </li>
                <li>
                  Burning or pain while passing urine, a frequent urge to
                  urinate, or urine that looks cloudy, dark or contains blood.
                </li>
                <li>
                  Nausea, vomiting and restlessness during a painful episode,
                  because the body reacts strongly to a stone moving through
                  the urinary passage.
                </li>
                <li>
                  Fever with chills and pain can indicate infection and needs
                  urgent medical attention instead of home care.
                </li>
                <li>
                  Some stones remain silent for a long time and are discovered
                  only during a scan, which is why regular check-ups matter for
                  people with a stone history.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Kidney Stones Form
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Drinking too little water is among the most common reasons,
                  because concentrated urine makes it easier for minerals and
                  salts to settle and form crystals.
                </li>
                <li>
                  Diets high in salt, packaged food, sugary drinks or certain
                  stone-forming foods can raise the chances of stones in people
                  who are prone to them.
                </li>
                <li>
                  Repeated urinary infections, urinary blockages and some
                  metabolic or hormonal conditions can also increase the risk
                  of stone formation.
                </li>
                <li>
                  Family history, long hours in hot weather without enough
                  fluids and low physical activity can add to the tendency in
                  some patients.
                </li>
                <li>
                  Because causes vary from person to person, the right plan
                  begins with proper assessment and not a standard remedy for
                  everyone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Approaches Kidney Stone Care
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya studies your scan, urine and blood reports,
                      symptoms, stone history, current medicines and daily
                      habits before suggesting the next care step in a calm and
                      unhurried way.
                    </li>
                    <li>
                      The plan is shaped around the size and position of your
                      stone, your digestion, your fluid habits and your routine,
                      not around a single standard formula.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Supportive Ayurvedic Medicines
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares its own Ayurvedic medicines in-house,
                      which supports quality and consistency in every plan and
                      gives patients more confidence in what they take.
                    </li>
                    <li>
                      Medicines are combined with diet and lifestyle correction
                      because Ayurveda looks at the whole person, including
                      digestion and routine, and not only the stone seen on the
                      scan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Honest and Responsible Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation supports urinary comfort,
                      hydration routines and dietary discipline, but it does
                      not replace urgent hospital care or procedures when a
                      urologist advises them.
                    </li>
                    <li>
                      Patients are asked to share every medicine they are
                      taking and to continue prescribed treatment until their
                      doctor says otherwise.
                    </li>
                    <li>
                      We do not promise that every stone will dissolve or pass
                      within a fixed time, and we explain clearly when a scan
                      or specialist review is needed.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When a Kidney Stone Needs Urgent Medical Attention
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Go to the nearest hospital emergency if pain is severe and
                  unbearable, or if you have repeated vomiting that prevents
                  you from keeping fluids down.
                </li>
                <li>
                  Fever, chills or burning urine together with stone pain can
                  mean an infection that needs prompt treatment.
                </li>
                <li>
                  Very little or no urine, or visible blood in urine with
                  strong pain, should be assessed immediately by a doctor.
                </li>
                <li>
                  A stone that blocks the urinary passage can damage the
                  kidney, so large or stuck stones may need procedures advised
                  by a urologist.
                </li>
                <li>
                  Ayurvedic care supports patients during stable phases and
                  recovery, and it should never delay emergency treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kidney and Urinary Conditions We Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney Stones
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation supports urinary comfort,
                      hydration routines and dietary discipline, with practical
                      food guidance that may help reduce the chances of stones
                      forming again.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Reduced Kidney Function and Kidney Failure
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reduced kidney function requires careful assessment, diet
                      support and continuous monitoring, and patients with
                      repeated stones are advised to keep checking their kidney
                      reports.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Persistent Swelling
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Persistent swelling may need kidney, liver and metabolic
                      assessment, so our doctors study the possible causes and
                      plan diet and medicines with guided care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Diabetes-Related Kidney Concern
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes-related kidney stress is approached through
                      diet, sugar control and regular follow-up, because steady
                      sugar levels protect the kidneys over the long term.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Care Journey at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Consultation and Report Review
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring your ultrasound or CT scan, urine and blood reports
                      and any earlier stone history, so the doctor can
                      understand your present condition and explain the next
                      step in simple language.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Personalised Ayurvedic Plan
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned using Balprada&apos;s Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, with attention to hydration and food habits
                      that suit your reports.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy and pathology support are added where
                      they suit your condition, helping patients build
                      discipline, manage stress and track progress with
                      reliable tests.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Follow-Up and Prevention
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up visits help the team observe progress, adjust
                      guidance and support long-term discipline, while repeat
                      scans and tests show how the stone and kidneys are doing.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Hydration Guidance for Stone Patients
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Drink fluids regularly through the day as your doctor advises,
                  because well-diluted urine is one of the most useful steps in
                  lowering the risk of new stones, unless you have a condition
                  that needs fluid limits.
                </li>
                <li>
                  Reduce salt and packaged, salty snacks, since high sodium
                  intake can increase the chances of some stones forming and
                  also raises blood pressure.
                </li>
                <li>
                  Ask your doctor which foods to limit, because the right diet
                  depends on the type of stone you have and on your reports.
                </li>
                <li>
                  Avoid very high intake of animal protein, sugary drinks and
                  heavy fried foods that can disturb digestion and urinary
                  balance.
                </li>
                <li>
                  Eat fresh, simple, home-cooked meals at regular times, and
                  avoid skipping meals or eating late at night.
                </li>
                <li>
                  Do not start random home remedies or supplements without
                  advice, because some products can irritate the kidneys or
                  interfere with medicines.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Help Prevent Recurrence
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep a water bottle within reach during work, travel and hot
                  weather, and notice your urine colour as a simple sign of
                  whether you are drinking enough.
                </li>
                <li>
                  Stay physically active with daily walking, light yoga and
                  breathing exercises as your doctor permits, since a sedentary
                  routine can add to metabolic imbalance.
                </li>
                <li>
                  Control weight, blood sugar and blood pressure through diet
                  and prescribed treatment, because these conditions are linked
                  with kidney stress and stone formation.
                </li>
                <li>
                  Avoid smoking and alcohol, and avoid taking painkillers
                  regularly without medical advice, as they can strain the
                  kidneys.
                </li>
                <li>
                  Attend follow-up visits and repeat scans on schedule,
                  especially if you have had stones before or have a family
                  history.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Balprada Pathology Lab
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reliable blood, urine and diagnostic testing helps the
                      doctor monitor progress and plan care with confidence,
                      and saves patients the effort of moving between multiple
                      centres.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Meditation and Naturopathy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle yoga and breath awareness support calm, discipline
                      and emotional steadiness, while naturopathy offers
                      simple, nature-led routines that work with the
                      body&apos;s natural healing capacity.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Ashram Environment and Organic Food
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A peaceful ashram setting supports rest, routine and
                      recovery away from daily stress, while wholesome, clean
                      eating supports the long-term lifestyle correction we
                      encourage.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Rampur Families Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience:</span> Balprada
                  has served patients since 1991 and carries 35 years of
                  Ayurvedic care and research, founded on the seva sankalp of
                  Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  <span className="font-semibold">In-house medicines:</span>{" "}
                  Ayurvedic preparations are made at Balprada, which supports
                  quality and consistency in every treatment plan.
                </li>
                <li>
                  <span className="font-semibold">Honest guidance:</span>{" "}
                  patients are told clearly what Ayurvedic care can support and
                  when a urologist or hospital must be involved.
                </li>
                <li>
                  <span className="font-semibold">Whole-person care:</span>{" "}
                  medicines, diet, hydration, yoga and follow-up are planned
                  together as one connected journey.
                </li>
                <li>
                  <span className="font-semibold">Patient trust:</span> Google
                  reviews praise the knowledgeable vaidyas, authentic herbal
                  formulations and serene healing atmosphere for kidney, liver
                  and chronic illness care.
                </li>
                <li>
                  <span className="font-semibold">Service spirit:</span> free
                  OPD consultation is available on the 15th of every month, and
                  the ashram and clinic are open seven days a week.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. Jeetesh Vishwas, a reviewer from Moradabad, appreciated
                  the knowledgeable vaidyas, authentic herbal formulations and
                  the serene healing atmosphere for kidney, liver and chronic
                  illness care.
                </li>
                <li>
                  Another patient praised the guidance of Vaidya ji and the
                  hospital team, along with the natural ashram surroundings
                  that help patients feel supported during recovery.
                </li>
                <li>
                  Families often mention the humble, welcoming staff who go out
                  of their way to help patients feel cared for during difficult
                  health journeys.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips Before Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Carry your ultrasound or CT scan, urine and blood reports,
                  prescriptions and a list of every medicine and supplement you
                  take, along with any earlier stone reports.
                </li>
                <li>
                  Note when your pain began, where it travels, how often it
                  comes and whether you noticed blood in urine, fever or
                  vomiting, and write down your questions about diet and
                  prevention.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and bring a
                  family member if possible, so that diet and routine can be
                  followed properly at home.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                OPD Timings, Address and Contact
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch (Ashram and Clinic)</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar
                        Pradesh 244415.
                      </li>
                      <li>
                        Timings: daily, 10:00 AM to 2:00 PM.
                      </li>
                      <li>
                        Call:{" "}
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

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Free OPD and Appointments</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Free OPD consultation is available on the 15th of every
                        month.
                      </li>
                      <li>
                        Book by phone, WhatsApp on{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>{" "}
                        or through the Book Appointment page on
                        balpradaindia.com.
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