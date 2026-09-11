import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export const metadata = {
  title: "Ayurvedic Hospital Near Bhidwari, Bilari | Balprada Hospital",
  description:
    "Balprada Hospital brings trusted Ayurvedic care to Bhidwari and Bilari. Consult experienced Ayurvedic doctors for holistic diagnosis, therapy & long-term treatment.",
};

export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "Does Balprada Hospital treat patients from Bhidwari village?",
      a: "Yes, the hospital regularly serves patients from Bhidwari and other nearby villages around Bilari.",
    },
    {
      q: "Is an appointment necessary for Ayurvedic consultation?",
      a: "It's advisable to check current OPD timings and, where possible, book in advance to avoid waiting time.",
    },
    {
      q: "Can Ayurvedic treatment be combined with ongoing allopathic medication?",
      a: "In many cases yes, but this should always be discussed with the treating doctor to ensure safety and coordination.",
    },
    {
      q: "What conditions is Ayurveda most effective for?",
      a: "Chronic pain, digestive issues, skin conditions, stress-related concerns, and lifestyle disorders typically respond well to Ayurvedic treatment.",
    },
    {
      q: "How long does a typical Ayurvedic treatment course last?",
      a: "It varies by condition, ranging from a few weeks for milder issues to longer courses for chronic conditions.",
    },
    {
      q: "Are the herbal medicines used at the hospital safe?",
      a: "Yes, formulations are prescribed and dispensed under proper medical supervision based on individual assessment.",
    },
    {
      q: "Does the hospital offer Panchakarma along with general Ayurvedic treatment?",
      a: "Yes, Panchakarma therapies are available as part of the hospital's broader Ayurvedic treatment offerings.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-6 font-serif text-3xl text-gray-900">
                Ayurvedic Hospital Near Bhidwari, Bilari – Balprada Hospital
              </h1>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  For families in Bhidwari and the wider Bilari area of
                  Moradabad district, access to genuine, well-supervised
                  Ayurvedic healthcare has traditionally meant long trips to
                  bigger cities.
                </li>
                <li>
                  Balprada Hospital changes that by bringing a full-fledged
                  Ayurvedic hospital setup close to home.
                </li>
                <li>
                  The hospital combines classical treatment principles with
                  organized, doctor-led care.
                </li>
                <li>
                  This page explains what the hospital offers, which
                  conditions it treats, and why it has become a trusted
                  healthcare destination for residents of Bhidwari and
                  neighboring villages.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                About Balprada Hospital&apos;s Ayurvedic Care
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Balprada Hospital operates a dedicated Ayurvedic wing that
                  follows classical treatment principles while maintaining
                  modern standards of hygiene, documentation, and patient
                  monitoring.
                </li>
                <li>
                  The hospital is positioned to serve not just Bilari town but
                  the surrounding rural belt, including Bhidwari and other
                  nearby villages.
                </li>
                <li>
                  This reduces travel time for patients who previously had to
                  go to Moradabad or farther locations for authentic Ayurvedic
                  consultation.
                </li>
                <li>
                  Care is delivered by doctors trained in Ayurvedic medicine.
                </li>
                <li>
                  Trained therapists support hands-on procedures such as
                  massage, steam therapy, and specialized detox treatments.
                </li>
                <li>
                  The approach followed at the hospital blends diagnosis,
                  personalized treatment planning, and structured follow-up.
                </li>
                <li>
                  The hospital does not rely on generic remedies for every
                  patient.
                </li>
                <li>
                  Patients are treated as individuals, with treatment plans
                  built around their specific body constitution, current
                  condition, and lifestyle.
                </li>
                <li>
                  The treatment approach follows core Ayurvedic philosophy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Why Bhidwari and Bilari Residents Choose Balprada Hospital
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Proximity:</strong> Residents of Bhidwari no longer
                  need to travel long distances for reliable Ayurvedic
                  consultation and treatment.
                </li>
                <li>
                  Proximity helps save time and travel costs, especially for
                  elderly patients and those with chronic conditions requiring
                  repeat visits.
                </li>
                <li>
                  <strong>Doctor-led diagnosis:</strong> Every treatment plan
                  begins with a proper consultation rather than a standardized
                  package.
                </li>
                <li>
                  Doctor-led diagnosis ensures that therapy matches the
                  patient&apos;s actual condition.
                </li>
                <li>
                  <strong>Continuity of care:</strong> Because the hospital
                  also has broader healthcare capabilities, patients with
                  health concerns beyond Ayurveda&apos;s scope can be guided
                  appropriately.
                </li>
                <li>
                  Patients are not left without direction when additional
                  medical evaluation is required.
                </li>
                <li>
                  <strong>Trust built on transparency:</strong> Patients are
                  informed clearly about what a treatment involves, how long it
                  may take, and what results are realistic.
                </li>
                <li>
                  The hospital avoids false promises commonly associated with
                  unregulated practitioners.
                </li>
                <li>
                  <strong>Community familiarity:</strong> As a hospital serving
                  the local region, Balprada Hospital understands common health
                  patterns, occupational stresses, and dietary habits of the
                  Bhidwari-Bilari population.
                </li>
                <li>
                  This understanding allows the hospital to provide more
                  relevant and practical advice.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Departments and Services Within the Ayurvedic Wing
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>General Ayurvedic Consultation (Kaya Chikitsa):</strong>{" "}
                  Diagnosis and management of general and chronic health
                  conditions using classical Ayurvedic assessment methods,
                  including pulse examination and detailed history-taking.
                </li>
                <li>
                  <strong>Panchakarma Therapies:</strong> Structured
                  detoxification programs including Basti, Virechana, Nasya,
                  and supporting therapies such as Abhyanga and Swedana.
                </li>
                <li>
                  Panchakarma therapies may be used for chronic pain, digestive
                  issues, and lifestyle disorders.
                </li>
                <li>
                  <strong>Herbal and Medicinal Treatment:</strong> Preparation
                  and prescription of classical herbal formulations tailored to
                  individual conditions.
                </li>
                <li>
                  Herbal formulations are sourced and dispensed under proper
                  supervision.
                </li>
                <li>
                  <strong>Pain and Musculoskeletal Care:</strong> Focused
                  treatment for joint pain, back pain, and stiffness.
                </li>
                <li>
                  Treatment may use a combination of therapies, massage, and
                  herbal support.
                </li>
                <li>
                  <strong>Skin and Allergy Management:</strong> Ayurvedic
                  approaches to chronic skin conditions and recurring allergies.
                </li>
                <li>
                  Treatment focuses on addressing root causes rather than only
                  surface symptoms.
                </li>
                <li>
                  <strong>Digestive Health Programs:</strong> Treatment
                  protocols for acidity, bloating, irregular digestion, and
                  other gut-related complaints.
                </li>
                <li>
                  These complaints may be associated with dietary and lifestyle
                  patterns common in the region.
                </li>
                <li>
                  <strong>Stress and Lifestyle Disorder Management:</strong>{" "}
                  Therapies and guidance aimed at reducing stress, improving
                  sleep, and correcting lifestyle-related imbalances.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Common Health Conditions Treated
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Chronic joint pain, arthritis, and general body stiffness.</li>
                <li>
                  Digestive complaints including acidity, constipation, and
                  irregular bowel patterns.
                </li>
                <li>
                  Skin conditions such as chronic itching, rashes, and
                  recurring allergic reactions.
                </li>
                <li>
                  Respiratory issues like recurring cold, sinus congestion, and
                  mild breathing difficulty.
                </li>
                <li>
                  Fatigue, low energy, and general weakness, particularly
                  following illness.
                </li>
                <li>Stress, anxiety, and sleep-related concerns.</li>
                <li>Metabolic issues including weight management challenges.</li>
                <li>
                  Women&apos;s health concerns related to menstrual
                  irregularities and general hormonal balance.
                </li>
                <li>
                  Lifestyle-linked conditions arising from irregular routines,
                  poor diet, or physically demanding work common in
                  agricultural communities.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                The Patient Journey at Balprada Hospital&apos;s Ayurvedic Wing
              </h2>

              <ul className="list-disc space-y-5 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Initial Consultation</strong>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      Patients are assessed through a detailed conversation
                      covering their health history, current symptoms, daily
                      routine, and dietary habits.
                    </li>
                    <li>
                      Traditional diagnostic methods, including pulse
                      examination, are used alongside a general physical
                      assessment.
                    </li>
                    <li>
                      These methods help doctors understand the nature of the
                      imbalance.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Step 2: Personalized Treatment Planning</strong>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      Doctors design a plan based on the patient&apos;s
                      assessment.
                    </li>
                    <li>
                      The plan may include herbal medication, dietary changes,
                      lifestyle adjustments, and Panchakarma therapies where
                      appropriate.
                    </li>
                    <li>
                      Patients are given a realistic timeline and clear
                      expectations about the treatment process.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Step 3: Active Treatment Phase</strong>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      Depending on the condition, treatment may involve regular
                      medication, scheduled therapy sessions, or a combination
                      of both.
                    </li>
                    <li>
                      Progress is reviewed periodically.
                    </li>
                    <li>
                      The plan is adjusted if the patient&apos;s response calls
                      for a change in approach.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Step 4: Follow-Up and Maintenance</strong>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      Once the primary concern is addressed, patients receive
                      guidance on maintaining results through diet and routine.
                    </li>
                    <li>
                      Periodic preventive therapy may be recommended where
                      relevant.
                    </li>
                    <li>
                      Ongoing support is available for patients managing
                      chronic conditions that require long-term monitoring.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Sets This Ayurvedic Hospital Apart From Local Clinics
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Unlike informal or unregistered practitioners, Balprada
                  Hospital follows a structured and documented approach to
                  diagnosis and treatment.
                </li>
                <li>
                  Patients have access to a proper facility with hygienic
                  therapy rooms rather than makeshift treatment setups.
                </li>
                <li>
                  The hospital&apos;s broader medical presence means Ayurvedic
                  patients are not treated in isolation.
                </li>
                <li>
                  If a condition requires evaluation outside Ayurveda&apos;s
                  scope, appropriate guidance is provided.
                </li>
                <li>
                  Treatment plans are individualized rather than following a
                  fixed package regardless of the patient&apos;s actual
                  condition.
                </li>
                <li>
                  The hospital&apos;s local presence near Bhidwari makes
                  continuity of care realistic.
                </li>
                <li>
                  Patients can return for follow-up visits without the burden
                  of long travel.
                </li>
                <li>
                  Easier follow-up significantly improves treatment adherence
                  and outcomes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Ayurveda for Everyday Rural Life
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Farming and physically demanding daily work in and around
                  Bhidwari often lead to chronic back pain, joint stress, and
                  muscular fatigue.
                </li>
                <li>
                  Ayurveda addresses these concerns through targeted therapies.
                </li>
                <li>
                  Seasonal changes common in this region can trigger respiratory
                  and skin issues.
                </li>
                <li>
                  Ayurvedic seasonal routines and treatments may help manage
                  these recurring problems.
                </li>
                <li>
                  Dietary patterns in rural households are often wholesome but
                  can sometimes contribute to digestive complaints.
                </li>
                <li>
                  Such complaints may respond to Ayurvedic dietary correction
                  and herbal support.
                </li>
                <li>
                  For many families, Ayurveda is a familiar and trusted system
                  rooted in tradition.
                </li>
                <li>
                  This familiarity can make it easier to adopt lifestyle
                  recommendations that support long-term healing.
                </li>
                <li>
                  Balprada Hospital aims to combine this cultural familiarity
                  with proper clinical structure.
                </li>
                <li>
                  Patients can receive both trust and reliability in their
                  treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Ayurvedic Hospital Infrastructure and Patient Comfort
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Dedicated consultation rooms allow private, unhurried
                  discussions between patients and doctors.
                </li>
                <li>
                  Private consultations are especially important when
                  discussing chronic or sensitive health concerns.
                </li>
                <li>
                  Separate, hygienic therapy areas are maintained for
                  Panchakarma and other hands-on procedures.
                </li>
                <li>
                  Proper cleanliness protocols are followed between patients.
                </li>
                <li>
                  A pharmacy stocking classical herbal formulations ensures
                  patients can access prescribed medicines without searching
                  elsewhere.
                </li>
                <li>
                  This is especially helpful in smaller towns.
                </li>
                <li>
                  Waiting areas and general hospital amenities are designed with
                  rural and semi-urban patients in mind.
                </li>
                <li>
                  The overall experience is intended to remain comfortable
                  rather than clinical and intimidating.
                </li>
                <li>
                  Support staff are available to guide first-time patients
                  through the consultation and treatment process.
                </li>
                <li>
                  This helps reduce confusion for patients unfamiliar with
                  formal Ayurvedic hospital settings.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Building Long-Term Trust With the Local Community
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Balprada Hospital&apos;s presence near Bhidwari is not limited
                  to one-time treatment.
                </li>
                <li>
                  The goal is to build an ongoing relationship where families
                  can return for preventive care, seasonal check-ins, and
                  management of recurring conditions.
                </li>
                <li>
                  Word-of-mouth trust matters greatly in smaller communities.
                </li>
                <li>
                  The hospital emphasizes honest communication, including
                  telling patients when a condition may need longer-term
                  management.
                </li>
                <li>
                  The hospital avoids promising quick cures when they are not
                  realistic.
                </li>
                <li>
                  Local language communication allows patients from Bhidwari
                  and surrounding villages to discuss their health concerns
                  comfortably in Hindi.
                </li>
                <li>
                  Clear communication helps prevent language barriers from
                  affecting the quality of consultation.
                </li>
                <li>
                  The hospital encourages family involvement in treatment
                  planning.
                </li>
                <li>
                  Family involvement is particularly helpful for elderly
                  patients and those managing chronic conditions.
                </li>
                <li>
                  Family support also helps ensure that home-based lifestyle
                  changes are followed correctly.
                </li>
                <li>
                  Over time, this consistent and transparent approach has helped
                  Balprada Hospital become a recognizable and dependable name
                  for Ayurvedic care in the Bilari region.
                </li>
                <li>
                  Balprada Hospital is positioned as more than just another
                  treatment center.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Preparing for Your First Visit
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Carry any previous medical reports, prescriptions, or test
                  results, even if they are from allopathic treatment.
                </li>
                <li>
                  Previous documents help the doctor understand your complete
                  health condition.
                </li>
                <li>
                  Note down your main symptoms along with when they started.
                </li>
                <li>
                  Mention what makes the symptoms better or worse.
                </li>
                <li>
                  This information helps speed up the diagnostic conversation.
                </li>
                <li>
                  Mention any ongoing medications or supplements you are
                  currently taking.
                </li>
                <li>
                  This helps the doctor consider safety and possible
                  interactions with prescribed herbal formulations.
                </li>
                <li>
                  Come with a general idea of your daily routine, diet, and
                  sleep pattern.
                </li>
                <li>
                  These details directly influence the Ayurvedic assessment and
                  treatment plan.
                </li>
                <li>
                  If you are accompanying an elderly family member or someone
                  with a chronic condition, be present during the consultation
                  when possible.
                </li>
                <li>
                  Your involvement can support ongoing care decisions at home.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-6 font-serif text-3xl">
                Visit Balprada Hospital for Ayurvedic Care
              </h2>

              <ul className="mb-6 list-disc space-y-4 pl-5 text-black">
                <li>
                  Residents of Bhidwari, Bilari, and nearby villages can
                  consult Balprada Hospital for structured Ayurvedic care.
                </li>
                <li>
                  The hospital provides doctor-led consultation, personalized
                  treatment planning, Ayurvedic therapies, herbal medicines,
                  and follow-up support.
                </li>
                <li>
                  Patients should bring their previous medical reports,
                  prescriptions, and details of ongoing treatment for a more
                  complete consultation.
                </li>
              </ul>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <p className="text-black">
                      F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                      Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Contact Balprada</p>

                    <div className="flex items-center gap-3 text-black">
                      <a
                        href="tel:9410447000"
                        className="hover:underline"
                      >
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a
                        href="tel:8126364606"
                        className="hover:underline"
                      >
                        8126364606
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                >
                  <Phone className="mr-2 inline" size={18} />
                  Contact Us
                </Link>

                <Link
                  href="/treatments"
                  className="rounded-lg border-2 border-black px-6 py-3 font-semibold transition hover:bg-gray-100"
                >
                  Explore Treatments
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

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}