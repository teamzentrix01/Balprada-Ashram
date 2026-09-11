import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaKidneyStoneTreatment() {
  const faqs = [
    {
      q: "Can kidney stones pass on their own without surgery?",
      a: "Yes, many smaller stones pass naturally with adequate hydration and medication, though this depends on the stone's size and location.",
    },
    {
      q: "What size of kidney stone typically requires surgery?",
      a: "Stones larger than about 10mm are less likely to pass naturally and often need active treatment such as lithotripsy or surgical removal.",
    },
    {
      q: "Is kidney stone pain always this severe?",
      a: "Yes, renal colic is widely recognized as one of the most intense forms of pain, though severity can vary by stone size and position.",
    },
    {
      q: "How can I prevent kidney stones from coming back?",
      a: "Increased water intake, dietary adjustments based on stone type, and regular follow-up are key steps in reducing recurrence.",
    },
    {
      q: "Does Balprada Hospital perform kidney stone surgery on-site?",
      a: "The hospital manages diagnosis, pain relief, and medical treatment directly, and coordinates prompt referral for advanced procedures like lithotripsy when required.",
    },
    {
      q: "Are kidney stones linked to diet?",
      a: "Yes, diet plays a significant role, particularly salt, animal protein, and certain oxalate-rich foods, depending on the type of stone involved.",
    },
    {
      q: "When should I seek emergency care for a kidney stone?",
      a: "Seek immediate care if you have severe pain with fever, chills, or an inability to urinate, as these may indicate a serious complication.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Kidney Stone Treatment in Bilari – Balprada Hospital
              </h1>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kidney stones are one of the most common urological problems
                  seen across India, and Bilari is no exception.
                </li>
                <li>
                  The sudden, intense pain associated with a kidney stone often
                  brings patients to the hospital in distress, needing
                  immediate relief and a clear treatment plan.
                </li>
                <li>
                  Balprada Hospital provides structured diagnosis, pain
                  management, and treatment guidance for kidney stones, helping
                  patients in Bilari get timely relief and, when needed, a
                  smooth path to advanced surgical care.
                </li>
                <li>
                  This guide covers what kidney stones are, why they form, how
                  they&apos;re diagnosed, and how Balprada Hospital approaches
                  treatment for patients at every stage of the condition.
                </li>
              </ul>
            </div>

            {/* Section 2 — What Are Kidney Stones */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Kidney Stones
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kidney stones are hard deposits made of minerals and salts
                  that form inside the kidneys when urine becomes concentrated,
                  allowing crystals to stick together.
                </li>
                <li>
                  Stones can range in size from as small as a grain of sand to
                  as large as a golf ball, and their size largely determines
                  whether they pass naturally or require intervention.
                </li>
                <li>
                  Stones may remain in the kidney without causing symptoms, or
                  they may move into the ureter — the tube connecting the kidney
                  to the bladder — where they often cause severe pain.
                </li>
                <li>
                  Kidney stones are a recurring condition for many patients;
                  once someone has had one stone, the chance of developing
                  another increases without proper preventive care.
                </li>
                <li>
                  The condition affects people across all age groups, though
                  certain dietary habits, climate, and hydration levels common
                  in this region can increase the risk.
                </li>
              </ul>
            </div>

            {/* Section 3 — Causes and Risk Factors */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Low fluid intake – Inadequate water consumption, especially in
                  hot weather, concentrates urine and makes crystal formation
                  more likely.
                </li>
                <li>
                  Dietary patterns – Diets high in salt, animal protein, or
                  oxalate-rich foods (such as certain leafy greens and nuts) can
                  contribute to stone formation in susceptible individuals.
                </li>
                <li>
                  Family history – A family history of kidney stones increases
                  individual risk significantly.
                </li>
                <li>
                  Certain medical conditions – Conditions such as obesity, gout,
                  and some digestive disorders are linked to a higher
                  likelihood of stone formation.
                </li>
                <li>
                  Reduced physical activity – Prolonged inactivity has been
                  associated with increased risk in some patients.
                </li>
                <li>
                  Climate and occupation – Hot climates and physically demanding
                  outdoor work, common in this region, can lead to excessive
                  fluid loss through sweat, increasing urine concentration if
                  fluid intake isn&apos;t adjusted accordingly.
                </li>
                <li>
                  Recurrent urinary tract infections – Certain types of stones
                  are linked to chronic or recurrent infections in the urinary
                  tract.
                </li>
              </ul>
            </div>

            {/* Section 4 — Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recognizing the Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sudden, severe pain in the back or side, often described as
                  one of the most intense pains a person can experience
                </li>
                <li>
                  Pain that radiates to the lower abdomen or groin as the stone
                  moves through the urinary tract
                </li>
                <li>
                  Pain that comes in waves, fluctuating in intensity as the
                  stone moves
                </li>
                <li>Nausea and vomiting accompanying the pain</li>
                <li>
                  Blood in the urine, which may appear pink, red, or brown
                </li>
                <li>
                  Cloudy or foul-smelling urine, sometimes indicating an
                  accompanying infection
                </li>
                <li>
                  A persistent urge to urinate, or urinating more frequently
                  than usual
                </li>
                <li>
                  Fever and chills, which may indicate a more serious infection
                  requiring urgent attention
                </li>
                <li>
                  Some smaller stones cause no symptoms at all and are
                  discovered incidentally during imaging done for another
                  reason
                </li>
              </ul>
            </div>

            {/* Section 5 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnosis at Balprada Hospital
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed clinical history and examination to understand the
                  pattern, location, and severity of pain, along with any
                  relevant risk factors.
                </li>
                <li>
                  Urinalysis to check for blood, signs of infection, and
                  crystal formation in the urine.
                </li>
                <li>
                  Blood tests, including kidney function tests, to assess how
                  well the kidneys are working and to rule out related
                  complications.
                </li>
                <li>
                  Ultrasound imaging, often the first and most accessible
                  imaging option, used to detect stones and assess for any
                  resulting blockage or swelling in the kidney.
                </li>
                <li>
                  Further imaging when required, such as CT scanning, which may
                  be arranged through coordination with imaging centers or
                  referral partners for a more detailed evaluation of stone
                  size, number, and exact location.
                </li>
                <li>
                  Stone composition analysis, when a stone is passed or removed,
                  to help guide future prevention strategies specific to the
                  patient.
                </li>
              </ul>
            </div>

            {/* Section 6 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approach for Kidney Stones
              </h2>

              <h3 className="mb-2 font-semibold text-gray-900">
                Immediate Pain Relief
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Patients arriving with acute pain are prioritized for prompt
                  pain management, typically using anti-inflammatory medication
                  as a first-line option.
                </li>
                <li>
                  Pain control is treated as a priority alongside diagnosis,
                  since renal colic can be severe enough to require urgent
                  intervention even before a full treatment plan is finalized.
                </li>
                <li>
                  Anti-nausea medication is provided when needed, as nausea and
                  vomiting frequently accompany acute stone pain.
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Medical Management for Smaller Stones
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  For smaller stones with a reasonable chance of passing
                  naturally, treatment often focuses on supporting that process
                  rather than immediate intervention.
                </li>
                <li>
                  Increased fluid intake is strongly encouraged to help flush
                  the stone through the urinary tract.
                </li>
                <li>
                  Medications that relax the muscles of the ureter may be
                  prescribed to make natural passage easier and less painful.
                </li>
                <li>
                  Patients are monitored during this period, with follow-up to
                  confirm whether the stone has passed or whether further
                  intervention becomes necessary.
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                When Active Intervention Is Needed
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Stones that are too large to pass naturally, causing
                  significant blockage, or associated with infection or
                  worsening kidney function require more active treatment.
                </li>
                <li>
                  Depending on the stone&apos;s size and location, options
                  include shock wave lithotripsy (breaking the stone using
                  targeted sound waves), ureteroscopy with laser lithotripsy,
                  or, for larger stones, more involved surgical removal.
                </li>
                <li>
                  Balprada Hospital evaluates each case and, where advanced
                  procedures are required beyond what can be performed locally,
                  coordinates prompt referral to appropriate urology and
                  lithotripsy centers, ensuring the patient&apos;s reports and
                  history transfer smoothly to avoid delays in care.
                </li>
                <li>
                  Patients with signs of infection alongside an obstructing
                  stone are treated as a medical priority, since this
                  combination can quickly become serious if not addressed
                  promptly.
                </li>
              </ul>
            </div>

            {/* Section 7 — Prevention */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventing Future Stones
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Once the acute episode is managed, patients receive
                  personalized guidance to reduce the risk of recurrence, since
                  kidney stones are highly likely to return without preventive
                  changes.
                </li>
                <li>
                  Increased daily water intake is one of the most effective and
                  simple preventive measures, tailored to the patient&apos;s
                  activity level and climate exposure.
                </li>
                <li>
                  Dietary guidance is provided based on the type of stone
                  identified, since different stone compositions call for
                  different dietary adjustments.
                </li>
                <li>
                  Patients with recurrent stones may be advised on further
                  metabolic evaluation to identify any underlying condition
                  contributing to repeated stone formation.
                </li>
              </ul>
            </div>

            {/* Section 8 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada Hospital for Kidney Stone Care in Bilari
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Local, accessible care that allows patients to receive prompt
                  pain relief and diagnosis without traveling during a painful,
                  urgent situation.
                </li>
                <li>
                  A structured diagnostic pathway using clinical assessment, lab
                  tests, and imaging to accurately identify the size and
                  location of stones.
                </li>
                <li>
                  Clear, honest guidance on when a stone is likely to pass
                  naturally versus when active intervention is needed.
                </li>
                <li>
                  Coordinated referral support for advanced procedures like
                  lithotripsy or surgical stone removal, ensuring continuity of
                  care when specialized treatment is required.
                </li>
                <li>
                  Personalized prevention counseling aimed at reducing the
                  likelihood of future stones, not just treating the current
                  episode.
                </li>
                <li>
                  A patient-first approach that prioritizes pain relief
                  immediately, recognizing how debilitating acute kidney stone
                  pain can be.
                </li>
              </ul>
            </div>

            {/* Section 9 — Long-Term Kidney Health */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prevention Tips for Long-Term Kidney Health
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Drink plenty of water throughout the day, aiming for enough
                  fluid intake to keep urine consistently pale in color.
                </li>
                <li>
                  Reduce salt intake, as high sodium levels increase calcium
                  excretion in urine, which contributes to stone formation.
                </li>
                <li>
                  Limit excessive animal protein consumption, particularly if
                  you have a history of stone formation.
                </li>
                <li>
                  Avoid excessive intake of oxalate-rich foods if you have been
                  advised to do so based on your specific stone type.
                </li>
                <li>
                  Maintain a healthy body weight, since obesity is linked to
                  increased stone risk.
                </li>
                <li>
                  Stay physically active, as regular movement supports overall
                  kidney and metabolic health.
                </li>
                <li>
                  If you have had a kidney stone before, follow up with
                  periodic check-ups to monitor for recurrence, especially if
                  advised based on your specific risk factors.
                </li>
              </ul>
            </div>

            {/* Section 10 — Differential Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kidney Stones vs Other Causes of Abdominal Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Because kidney stone pain can sometimes mimic other conditions
                  such as appendicitis, gallstones, or muscular strain, proper
                  clinical evaluation is important before assuming the cause
                  without testing.
                </li>
                <li>
                  The classic pattern of colicky, wave-like pain that radiates
                  from the back or side toward the groin is a strong indicator
                  of a kidney stone, but confirmation through urinalysis and
                  imaging remains essential.
                </li>
                <li>
                  Blood in the urine, when present alongside flank pain,
                  strengthens the likelihood of a kidney stone but can also
                  occur with other urinary tract conditions, making accurate
                  diagnosis important rather than relying on symptoms alone.
                </li>
                <li>
                  Patients who have previously experienced kidney stones often
                  recognize the pain pattern quickly, but even in these cases, a
                  fresh evaluation helps confirm the stone&apos;s current size
                  and position before deciding on treatment.
                </li>
                <li>
                  Ruling out infection alongside a stone is a key part of the
                  diagnostic process, since an infected, obstructed kidney
                  requires urgent, prioritized treatment rather than routine
                  management.
                </li>
              </ul>
            </div>

            {/* Section 11 — Hospital Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Hospital Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  On arrival with acute pain, patients are assessed quickly so
                  that pain relief can begin as early as possible, rather than
                  waiting until a full diagnostic workup is complete.
                </li>
                <li>
                  Basic tests such as urinalysis and a physical examination are
                  typically done first, with imaging arranged promptly to
                  confirm the diagnosis and assess stone size.
                </li>
                <li>
                  Once results are available, the doctor explains the findings
                  clearly, including whether the stone is likely to pass
                  naturally or whether further treatment will be needed.
                </li>
                <li>
                  Patients are given clear instructions on what to watch for at
                  home if they are being managed conservatively, including
                  specific warning signs that would require an immediate return
                  to the hospital.
                </li>
                <li>
                  For patients who need referral to a specialized center for
                  procedures like lithotripsy, the hospital assists in
                  organizing this transition, including sharing relevant reports
                  so treatment isn&apos;t delayed by repeated testing elsewhere.
                </li>
              </ul>
            </div>

            {/* Section 12 — CTA */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Kidney Stone Consultation at Balprada Hospital
              </h2>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-black">
                <li>
                  Patients experiencing kidney stone symptoms can contact
                  Balprada Hospital in Bilari or Moradabad for timely
                  evaluation, pain management, diagnosis, and treatment
                  guidance.
                </li>
                <li>
                  Patients should bring previous medical reports, imaging
                  results, current medications, and details of any earlier
                  kidney stone episodes to the consultation.
                </li>
                <li>
                  If advanced treatment is needed, the hospital coordinates
                  referral support and transfer of relevant medical reports to
                  help avoid delays in specialized care.
                </li>
              </ul>

              <div className="mb-6 space-y-4">
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

                <div className="mt-4 flex items-start gap-3">
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

                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8126364606" className="hover:underline">
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
            </div>

            {/* Section 13 — FAQs */}
            <div className="mb-12">
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
            </div>
          </div>

          {/* Sidebar */}
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