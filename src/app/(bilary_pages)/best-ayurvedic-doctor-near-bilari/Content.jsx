import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaBestAyurvedicDoctor() {
  const faqs = [
    {
      q: "How do I know if an Ayurvedic doctor is properly qualified?",
      a: "Ask directly about their educational background and training; a genuine practitioner will be transparent about their credentials.",
    },
    {
      q: "Is it normal for an Ayurvedic consultation to take a long time?",
      a: "Yes, a thorough first consultation often takes longer than a typical quick check-up, since detailed assessment is central to accurate Ayurvedic diagnosis.",
    },
    {
      q: "Can I continue seeing my regular doctor while consulting an Ayurvedic doctor?",
      a: "Yes, and a good Ayurvedic doctor will encourage coordination between both approaches rather than discouraging it.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Bring any previous medical reports, a list of current medications, and clear notes on your symptoms and their history.",
    },
    {
      q: "How can I tell if a treatment plan is realistic versus overpromised?",
      a: "Be cautious of guaranteed quick cures for chronic conditions; realistic doctors explain gradual timelines and honest expectations.",
    },
    {
      q: "Does Balprada Hospital treat both new and chronic long-standing conditions?",
      a: "Yes, the hospital manages both acute concerns and ongoing chronic conditions requiring long-term care.",
    },
    {
      q: "Is follow-up care included as part of the treatment process?",
      a: "Yes, scheduled follow-up is a standard part of the treatment approach to monitor progress and adjust care as needed.",
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
                Best Ayurvedic Doctor Near Bilari – Balprada Hospital
              </h1>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Finding the &quot;best&quot; Ayurvedic doctor isn&apos;t about
                  a single label — it&apos;s about finding a practitioner who
                  diagnoses carefully, treats honestly, and stays with you
                  through the full course of your recovery.
                </li>
                <li>
                  For residents of Bilari and nearby areas searching for
                  dependable Ayurvedic care, this guide explains what actually
                  separates a good Ayurvedic doctor from an average one.
                </li>
                <li>
                  This guide also explains how Balprada Hospital&apos;s approach
                  to consultation and treatment reflects those standards.
                </li>
              </ul>
            </div>

            {/* Section 2 — What Makes the Best Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes an Ayurvedic Doctor Genuinely &quot;The Best&quot;
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Proper qualification and training – A good Ayurvedic doctor
                  holds recognized formal education in Ayurvedic medicine (such
                  as a BAMS degree or equivalent), not just informal knowledge
                  passed down without structured training.
                </li>
                <li>
                  Thorough diagnostic process – The best doctors don&apos;t
                  rush to prescribe. They take time to understand the
                  patient&apos;s full history, lifestyle, and current condition
                  before suggesting any treatment.
                </li>
                <li>
                  Honest communication – A trustworthy doctor explains
                  realistic timelines and outcomes rather than promising quick
                  or guaranteed cures, especially for chronic or long-standing
                  conditions.
                </li>
                <li>
                  Personalized treatment approach – Rather than offering the
                  same standard remedy to every patient, an experienced doctor
                  tailors treatment based on individual body constitution
                  (prakriti) and specific imbalance.
                </li>
                <li>
                  Willingness to coordinate with modern medicine – The best
                  Ayurvedic doctors recognize when a condition needs
                  conventional medical evaluation and refer or coordinate
                  accordingly, instead of working in isolation.
                </li>
                <li>
                  Consistent follow-up care – Quality Ayurvedic treatment
                  isn&apos;t a one-time visit; a good doctor tracks patient
                  progress over multiple sessions and adjusts the plan as
                  needed.
                </li>
                <li>
                  Transparent pricing and process – Clear communication about
                  consultation fees, expected treatment duration, and costs
                  involved builds trust and avoids confusion later.
                </li>
              </ul>
            </div>

            {/* Section 3 — Doctor-Led Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Doctor-Led Consultation Matters in Ayurveda
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ayurveda is a personalized system of medicine — two patients
                  with the same complaint may need entirely different treatment
                  plans based on their individual constitution and underlying
                  imbalance.
                </li>
                <li>
                  A doctor-led consultation ensures that treatment decisions
                  are based on proper assessment, not guesswork or generic
                  remedies picked up informally.
                </li>
                <li>
                  Conditions that appear simple on the surface, such as
                  recurring digestive issues or skin flare-ups, often have
                  deeper, individual-specific causes that only a trained doctor
                  can accurately identify.
                </li>
                <li>
                  Self-treatment or unsupervised use of herbal remedies,
                  without proper diagnosis, can delay effective treatment or, in
                  some cases, worsen the underlying condition.
                </li>
                <li>
                  A qualified doctor also knows when a symptom needs urgent
                  attention or referral, protecting patients from relying
                  solely on home remedies for conditions that require timely
                  medical evaluation.
                </li>
              </ul>
            </div>

            {/* Section 4 — Choosing a Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Look for When Choosing an Ayurvedic Doctor Near Bilari
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask about qualifications directly – A reputable doctor will
                  be transparent about their educational background and training
                  without hesitation.
                </li>
                <li>
                  Evaluate the consultation process itself – A rushed,
                  five-minute conversation followed by a prescription is a
                  warning sign; genuine assessment takes time.
                </li>
                <li>
                  Check for a proper clinical setting – Hygienic, organized
                  treatment spaces reflect a doctor&apos;s commitment to
                  patient safety and professional standards.
                </li>
                <li>
                  Look for clarity over exaggeration – Be cautious of doctors
                  who promise complete cures for complex chronic conditions in
                  unrealistically short timeframes.
                </li>
                <li>
                  Consider willingness to explain the &quot;why&quot; – A good
                  doctor explains the reasoning behind a diagnosis and
                  treatment plan, rather than simply issuing instructions.
                </li>
                <li>
                  Notice how follow-up is handled – Ask whether the doctor
                  reviews progress at scheduled intervals or expects you to
                  return only if a problem worsens.
                </li>
                <li>
                  Ask other patients or families locally – In smaller
                  communities like Bilari, word-of-mouth experience often
                  reveals a lot about consistency and reliability over time.
                </li>
              </ul>
            </div>

            {/* Section 5 — Consultation Experience */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic Consultation Experience at Balprada Hospital
              </h2>

              <h3 className="mb-2 font-semibold text-gray-900">
                Detailed Initial Assessment
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Every consultation begins with a comprehensive discussion
                  covering the patient&apos;s symptoms, medical history, daily
                  routine, and dietary habits.
                </li>
                <li>
                  Classical diagnostic methods, including pulse examination
                  (Nadi Pariksha), are used alongside a general physical
                  evaluation to build an accurate picture of the patient&apos;s
                  condition.
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Individualized Treatment Planning
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on this assessment, a treatment plan is designed
                  specifically for the patient — considering their body
                  constitution, current imbalance, and any existing health
                  conditions.
                </li>
                <li>
                  Patients are given a clear explanation of what the treatment
                  involves, how long it may take, and what results are
                  realistically expected.
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Ongoing Care and Adjustment
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow-up visits are scheduled to monitor how the patient is
                  responding, and the treatment plan is adjusted if progress
                  isn&apos;t as expected.
                </li>
                <li>
                  For chronic conditions, this ongoing relationship allows the
                  doctor to fine-tune the approach over time rather than
                  relying on a single, fixed prescription.
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Coordinated, Honest Guidance
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If a condition requires evaluation or treatment outside
                  Ayurveda&apos;s scope, patients are advised clearly rather
                  than being kept solely within Ayurvedic treatment when it
                  isn&apos;t appropriate.
                </li>
                <li>
                  This honest, patient-first approach is central to how
                  consultations are conducted at Balprada Hospital.
                </li>
              </ul>
            </div>

            {/* Section 6 — Areas of Expertise */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Areas of Expertise You Can Expect From an Experienced Ayurvedic
                Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chronic pain and musculoskeletal conditions, including
                  arthritis, back pain, and joint stiffness.
                </li>
                <li>
                  Digestive health, covering acidity, bloating, irregular bowel
                  patterns, and related complaints.
                </li>
                <li>
                  Skin and allergy conditions, addressing both symptom relief
                  and underlying causes.
                </li>
                <li>
                  Respiratory and seasonal health issues, including recurring
                  sinus and cold-related complaints.
                </li>
                <li>
                  Chronic disease support, offering complementary Ayurvedic
                  management for conditions like diabetes and hypertension
                  alongside conventional treatment.
                </li>
                <li>
                  Women&apos;s health concerns, including menstrual
                  irregularities and general hormonal balance.
                </li>
                <li>
                  Stress, sleep, and lifestyle-related disorders, addressed
                  through a combination of herbal support and practical routine
                  guidance.
                </li>
              </ul>
            </div>

            {/* Section 7 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask During Your First Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What is your assessment of my condition, and what is it
                  likely caused by?
                </li>
                <li>
                  What treatment approach do you recommend, and why this one
                  specifically?
                </li>
                <li>
                  How long is the expected treatment course, and what results
                  should I realistically expect?
                </li>
                <li>
                  Will I need to make any changes to my diet or daily routine
                  as part of this treatment?
                </li>
                <li>
                  How often will I need to come back for follow-up, and how
                  will progress be tracked?
                </li>
                <li>
                  Is it safe to continue any current medication alongside this
                  treatment?
                </li>
                <li>
                  What are the approximate costs involved for the full
                  treatment course?
                </li>
              </ul>
            </div>

            {/* Section 8 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Near Bilari Consider Balprada Hospital a Trusted
                Choice
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A structured, transparent consultation process that
                  prioritizes proper diagnosis over quick prescriptions.
                </li>
                <li>
                  Treatment plans built around the individual patient, rather
                  than standardized packages applied to everyone.
                </li>
                <li>
                  Consistent follow-up care that supports better outcomes,
                  particularly for chronic and recurring conditions.
                </li>
                <li>
                  Honest communication about realistic outcomes, helping
                  patients make informed decisions about their treatment.
                </li>
                <li>
                  A local, accessible facility that removes the need for long
                  travel to reach genuine, doctor-supervised Ayurvedic care.
                </li>
                <li>
                  A treatment philosophy that respects and coordinates with
                  conventional medicine when needed, rather than working in
                  isolation.
                </li>
              </ul>
            </div>

            {/* Section 9 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags to Watch For When Evaluating Any Ayurvedic
                Practitioner
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  No willingness to discuss credentials – A practitioner who
                  deflects or becomes vague when asked about formal
                  qualifications is a signal to look elsewhere.
                </li>
                <li>
                  One-size-fits-all remedies – If the same herbal mixture or
                  treatment is offered to every patient regardless of their
                  specific complaint, genuine individualized diagnosis is
                  likely missing.
                </li>
                <li>
                  Pressure to commit to expensive, long-term packages upfront –
                  Reputable doctors explain treatment step by step and allow
                  patients to make informed decisions, rather than pushing
                  costly bundles before proper assessment.
                </li>
                <li>
                  Discouraging all contact with conventional medicine – A
                  doctor who insists patients abandon all conventional
                  treatment, even for serious conditions, is not practicing
                  responsible, patient-first care.
                </li>
                <li>
                  Absence of any follow-up structure – If there&apos;s no plan
                  to review progress or adjust treatment over time, the approach
                  is unlikely to be genuinely personalized or effective for
                  chronic conditions.
                </li>
                <li>
                  Unhygienic or informal treatment settings – Proper Ayurvedic
                  therapy, especially hands-on procedures like Panchakarma,
                  requires a clean, dedicated space — not an improvised setup
                  lacking basic hygiene standards.
                </li>
              </ul>
            </div>

            {/* Section 10 — Complex Cases */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Hospital&apos;s Doctors Approach Complex or
                Long-Standing Cases
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Patients who arrive with a long history of unresolved
                  symptoms, or who have already tried multiple treatments
                  elsewhere without success, are given extra time during the
                  initial consultation to review this full history in detail.
                </li>
                <li>
                  Rather than repeating previously ineffective approaches,
                  doctors look closely at what has and hasn&apos;t worked
                  before, using that information to refine the current
                  treatment strategy.
                </li>
                <li>
                  Complex cases often involve more than one contributing
                  factor — diet, stress, occupational exposure, and underlying
                  imbalance may all play a role — and the treatment plan is
                  built to address these together rather than in isolation.
                </li>
                <li>
                  Patients with long-standing conditions are given realistic
                  expectations about the pace of improvement, since chronic
                  imbalances typically take longer to correct than recently
                  developed issues.
                </li>
                <li>
                  Regular reassessment is built into the treatment plan for
                  these cases, ensuring the approach evolves as the
                  patient&apos;s condition changes rather than staying fixed on
                  an initial diagnosis indefinitely.
                </li>
              </ul>
            </div>

            {/* Section 11 — Making Your Decision */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Making Your Decision With Confidence
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Take time during your first visit to observe how thoroughly
                  the doctor listens and assesses your condition before
                  recommending treatment.
                </li>
                <li>
                  Don&apos;t hesitate to ask direct questions about
                  qualifications, treatment reasoning, and expected outcomes —
                  a confident, transparent doctor will welcome these questions
                  rather than avoid them.
                </li>
                <li>
                  Compare how your concerns are addressed against the qualities
                  outlined above, particularly around honesty, individualized
                  care, and willingness to coordinate with other treatment you
                  may be receiving.
                </li>
                <li>
                  Trust your own observations about the clinical environment,
                  the doctor&apos;s communication style, and how comfortable
                  you feel discussing your health openly.
                </li>
                <li>
                  A good long-term choice of Ayurvedic doctor is one where you
                  feel confident returning for follow-up care, not just for a
                  single visit.
                </li>
              </ul>
            </div>

            {/* Section 12 — CTA */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Consultation With an Ayurvedic Doctor Near Bilari
              </h2>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-black">
                <li>
                  Patients from Bilari and nearby areas can contact Balprada
                  Hospital for an experienced, doctor-led Ayurvedic
                  consultation.
                </li>
                <li>
                  Bring previous medical reports, current medication details,
                  and notes about your symptoms and their history to your first
                  appointment.
                </li>
                <li>
                  The physician will assess your condition, explain the
                  recommended treatment approach, and discuss realistic
                  expectations and follow-up requirements.
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
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-blue-800">
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