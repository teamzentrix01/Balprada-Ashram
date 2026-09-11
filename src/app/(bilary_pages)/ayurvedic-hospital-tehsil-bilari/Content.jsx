import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaTehsilBilariHospital() {
  const faqs = [
    {
      q: "Does Balprada Hospital serve patients from outside Bilari town?",
      a: "Yes, the hospital serves patients from across Tehsil Bilari, including surrounding villages and localities.",
    },
    {
      q: "Is one visit usually enough for a full assessment, given travel distances?",
      a: "The initial consultation is thorough, but ongoing conditions typically require follow-up visits; doctors explain this clearly based on your specific case.",
    },
    {
      q: "Are the same doctors available for follow-up visits regardless of where I travel from?",
      a: "Yes, patients generally continue with the same doctor across visits to maintain consistency in care.",
    },
    {
      q: "Does the hospital treat both common and chronic conditions?",
      a: "Yes, services range from general consultation to long-term chronic disease management and specialized therapies.",
    },
    {
      q: "Is Panchakarma available for patients from all parts of the tehsil?",
      a: "Yes, Panchakarma therapies are available to all patients, regardless of which locality within the tehsil they are traveling from.",
    },
    {
      q: "How does the hospital handle patients who can only visit infrequently due to distance?",
      a: "Doctors provide clear guidance on managing treatment between visits, including dietary and lifestyle instructions to follow at home.",
    },
    {
      q: "Is the hospital a good option compared to traveling to Moradabad city for Ayurvedic treatment?",
      a: "For most patients within the tehsil, Balprada Hospital offers comparable, doctor-led care with significantly less travel involved.",
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
                Ayurvedic Hospital Serving Tehsil Bilari – Balprada Hospital
              </h1>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tehsil Bilari, part of Moradabad district, spans Bilari town
                  along with a wide network of surrounding villages and
                  localities.
                </li>
                <li>
                  For a population this spread out, consistent access to
                  genuine, doctor-supervised Ayurvedic care has historically
                  meant a difficult trade-off: settle for informal,
                  unregulated treatment nearby, or travel long distances to a
                  proper facility in the city.
                </li>
                <li>
                  Balprada Hospital was built to remove that trade-off,
                  functioning as a central, accessible Ayurvedic care point for
                  the entire tehsil rather than a single locality.
                </li>
                <li>
                  This page gives a complete picture of how the hospital serves
                  the region as a whole.
                </li>
              </ul>
            </div>

            {/* Section 2 — Healthcare Catchment Area */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Tehsil Bilari as a Healthcare Catchment Area
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tehsil Bilari includes Bilari town itself along with
                  numerous surrounding villages and smaller settlements, each
                  with its own population relying on nearby healthcare access.
                </li>
                <li>
                  Historically, residents across this tehsil have had limited
                  access to specialized care systems like Ayurveda, often
                  depending on informal practitioners without formal training
                  or supervision.
                </li>
                <li>
                  Balprada Hospital&apos;s positioning within Bilari makes it a
                  realistic, central access point for patients from across the
                  tehsil, rather than serving only the immediate town
                  population.
                </li>
                <li>
                  The hospital&apos;s Ayurvedic wing is designed with this wider
                  catchment area in mind — from documentation and follow-up
                  systems to appointment flexibility for patients traveling
                  from outlying villages.
                </li>
                <li>
                  This tehsil-wide approach means that whether a patient is
                  coming from Bilari town, Bhidwari, Guarau, Vijaynagar, or
                  another nearby village, they receive the same standard of
                  doctor-led consultation and treatment.
                </li>
              </ul>
            </div>

            {/* Section 3 — Localities Served */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Localities and Villages Served by Balprada Hospital&apos;s
                Ayurvedic Wing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bilari Town – The hospital&apos;s home base, offering the full
                  range of Ayurvedic consultation, therapy, and follow-up
                  services.
                </li>
                <li>
                  Bhidwari – Served as one of the nearby villages benefiting
                  from reduced travel time for regular Ayurvedic consultation
                  and chronic disease management.
                </li>
                <li>
                  Guarau – Patients from this locality access the hospital
                  primarily for chronic condition support,
                  affordability-conscious treatment planning, and general
                  Ayurvedic care.
                </li>
                <li>
                  Vijaynagar – Residents here are served with particular
                  attention to skin, respiratory, and allergy-related
                  treatment, alongside general consultation.
                </li>
                <li>
                  Other surrounding villages and hamlets within the tehsil –
                  The hospital&apos;s central location within Bilari makes it a
                  practical option for smaller settlements throughout the
                  tehsil that lack any dedicated Ayurvedic facility of their
                  own.
                </li>
                <li>
                  Regardless of which part of the tehsil a patient travels
                  from, the hospital maintains one consistent standard of
                  assessment, treatment planning, and follow-up care.
                </li>
              </ul>
            </div>

            {/* Section 4 — Centralized Hospital */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Centralized Ayurvedic Hospital Matters for a Tehsil-Wide
                Population
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Smaller villages within the tehsil typically don&apos;t have
                  the population base to support a dedicated, fully staffed
                  Ayurvedic facility of their own, making a centrally located
                  hospital in Bilari town the practical solution for the wider
                  area.
                </li>
                <li>
                  Centralization allows the hospital to maintain consistent
                  quality — the same trained doctors, the same diagnostic
                  standards, and the same treatment protocols — rather than
                  quality varying by locality.
                </li>
                <li>
                  It also allows for better continuity of patient records and
                  follow-up, since a single hospital tracks a patient&apos;s
                  history over time rather than care being fragmented across
                  multiple informal providers.
                </li>
                <li>
                  For chronic conditions requiring ongoing management, this
                  consistency is particularly valuable — patients across the
                  tehsil can rely on the same doctor and treatment plan across
                  repeat visits, regardless of which village they live in.
                </li>
                <li>
                  A centralized facility also makes it more feasible to invest
                  in proper infrastructure — hygienic therapy rooms, a stocked
                  herbal pharmacy, and trained support staff — that a scattered,
                  village-by-village setup could not sustain individually.
                </li>
              </ul>
            </div>

            {/* Section 5 — Core Services */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Core Ayurvedic Services Available Tehsil-Wide
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  General Ayurvedic Consultation – Comprehensive assessment and
                  diagnosis forming the basis of every treatment plan,
                  available to all patients regardless of which part of the
                  tehsil they travel from.
                </li>
                <li>
                  Panchakarma Therapies – Structured detoxification programs
                  including Basti, Virechana, and Nasya, supported by
                  preparatory treatments like Abhyanga and Swedana.
                </li>
                <li>
                  Chronic Disease Management – Long-term Ayurvedic support for
                  conditions such as diabetes, hypertension, and joint
                  disorders, often coordinated alongside conventional
                  treatment.
                </li>
                <li>
                  Skin, Allergy, and Respiratory Care – Targeted treatment for
                  conditions common across the region&apos;s environmental and
                  seasonal patterns.
                </li>
                <li>
                  Women&apos;s and Family Health Support – Ayurvedic guidance
                  for menstrual health, postnatal recovery, and general family
                  wellness across age groups.
                </li>
                <li>
                  Preventive and Seasonal Wellness Programs – Guidance designed
                  around the tehsil&apos;s seasonal health patterns, helping
                  patients reduce recurring flare-ups before they start.
                </li>
              </ul>
            </div>

            {/* Section 6 — Traveling Patients */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Hospital Supports Patients Traveling From Across
                the Tehsil
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Flexible scheduling considerations – Recognizing that
                  patients from outlying villages face longer travel times, the
                  hospital aims to make consultations efficient and thorough in
                  a single visit wherever possible.
                </li>
                <li>
                  Clear documentation – Patient records are maintained
                  properly so that repeat visits don&apos;t require patients to
                  repeat their full history each time, saving time for those
                  traveling from further away.
                </li>
                <li>
                  Transparent guidance on visit frequency – Doctors explain
                  realistically how often follow-up is needed, helping patients
                  plan travel and time around their treatment course.
                </li>
                <li>
                  Family-inclusive consultations – Patients are encouraged to
                  bring family members when relevant, particularly useful for
                  elderly patients or children traveling from villages where
                  independent follow-up visits may be difficult to arrange.
                </li>
                <li>
                  Consistent doctor availability – Patients are not passed
                  between different practitioners on each visit, allowing a
                  stable doctor-patient relationship to build over time despite
                  the distance traveled.
                </li>
              </ul>
            </div>

            {/* Section 7 — Healthcare Landscape */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Bigger Picture: Ayurveda&apos;s Role in Tehsil Bilari&apos;s
                Healthcare Landscape
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ayurveda continues to hold strong cultural relevance across
                  rural Uttar Pradesh, and Tehsil Bilari is no exception —
                  many families already have some familiarity with Ayurvedic
                  principles through household traditions.
                </li>
                <li>
                  Balprada Hospital&apos;s role is to formalize this existing
                  trust into a structured, medically sound treatment system,
                  rather than leaving patients to rely on informal or
                  inconsistent sources.
                </li>
                <li>
                  As lifestyle-related conditions like diabetes, joint
                  disorders, and stress-related complaints rise even in
                  semi-rural populations, having a dependable Ayurvedic care
                  option within the tehsil becomes increasingly important.
                </li>
                <li>
                  The hospital also serves as a bridge between traditional and
                  modern healthcare approaches, guiding patients toward
                  conventional medical evaluation when a condition falls
                  outside Ayurveda&apos;s appropriate scope.
                </li>
                <li>
                  Over time, this positions Balprada Hospital not just as a
                  treatment center, but as a healthcare resource the wider
                  tehsil population can rely on for informed, honest guidance.
                </li>
              </ul>
            </div>

            {/* Section 8 — What Sets Balprada Apart */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Sets Balprada Hospital Apart as a Tehsil-Wide Facility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A genuinely central location that makes the hospital
                  realistically accessible from most parts of the tehsil,
                  rather than only serving the immediate town population.
                </li>
                <li>
                  Consistency in care standards regardless of which locality a
                  patient is traveling from.
                </li>
                <li>
                  A broad range of services under one roof, reducing the need
                  for patients to seek different providers for different
                  conditions.
                </li>
                <li>
                  An honest, transparent approach to treatment timelines and
                  costs, which matters greatly for families managing travel and
                  budget constraints together.
                </li>
                <li>
                  A track record of serving diverse localities across the
                  tehsil, from the town center to surrounding villages, with
                  the same standard of doctor-led care.
                </li>
              </ul>
            </div>

            {/* Section 9 — Common Health Concerns */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Health Concerns Across the Tehsil&apos;s Rural and
                Semi-Urban Population
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Musculoskeletal complaints – Joint pain, back stiffness, and
                  general body ache are widespread across the tehsil, largely
                  linked to physically demanding agricultural and manual labor
                  common in the region.
                </li>
                <li>
                  Digestive irregularities – Acidity, bloating, and inconsistent
                  bowel patterns are frequently reported, often tied to dietary
                  habits and irregular meal timing.
                </li>
                <li>
                  Seasonal skin and respiratory issues – Dust exposure,
                  temperature shifts, and agricultural activity contribute to
                  recurring skin irritation and respiratory discomfort across
                  many villages in the tehsil.
                </li>
                <li>
                  Lifestyle-linked chronic conditions – Diabetes, hypertension,
                  and related metabolic concerns are rising even in semi-rural
                  populations, mirroring broader national health trends.
                </li>
                <li>
                  Stress and fatigue – Financial pressures, physically
                  demanding routines, and limited access to leisure or rest
                  contribute to stress-related complaints across age groups.
                </li>
                <li>
                  Recognizing these shared patterns allows Balprada Hospital to
                  design treatment protocols that are genuinely relevant to the
                  population it serves, rather than generic advice disconnected
                  from local realities.
                </li>
              </ul>
            </div>

            {/* Section 10 — Coordinating Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Coordinating Care Across a Spread-Out Population
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  For a tehsil covering multiple villages, coordination
                  between the hospital and patients&apos; local support
                  systems — family members, local health workers, and community
                  networks — plays an important role in sustaining treatment
                  adherence.
                </li>
                <li>
                  The hospital encourages patients to involve family members in
                  understanding the treatment plan, particularly for elderly
                  patients or those managing chronic conditions who may need
                  help remembering dietary or medication routines between
                  visits.
                </li>
                <li>
                  Clear, written guidance is provided wherever possible, so
                  that instructions aren&apos;t lost in translation between the
                  hospital visit and daily life back in the village.
                </li>
                <li>
                  For patients managing long-term conditions, doctors work to
                  consolidate guidance into practical, sustainable routines
                  rather than complex instructions that are difficult to
                  maintain without close supervision.
                </li>
                <li>
                  This attention to real-world adherence — not just the
                  treatment plan on paper — is central to achieving consistent
                  outcomes across such a geographically spread population.
                </li>
              </ul>
            </div>

            {/* Section 11 — Looking Ahead */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Looking Ahead: Expanding Access Across the Tehsil
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  As awareness of structured, doctor-led Ayurvedic care grows
                  across Tehsil Bilari, Balprada Hospital continues to focus on
                  making the experience as accessible and consistent as
                  possible for patients regardless of which village they call
                  home.
                </li>
                <li>
                  Continued emphasis on transparent communication, fair
                  pricing, and honest treatment timelines remains central to
                  building long-term trust across such a diverse patient base.
                </li>
                <li>
                  The hospital&apos;s role as a central healthcare resource is
                  likely to grow in importance as more families across the
                  tehsil seek reliable alternatives to informal or unsupervised
                  treatment options.
                </li>
                <li>
                  Ultimately, the goal is for every resident of Tehsil Bilari —
                  whether in the town center or its farthest village — to have
                  equal access to genuine, well-supervised Ayurvedic
                  healthcare.
                </li>
              </ul>
            </div>

            {/* Section 12 — CTA */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book an Ayurvedic Consultation at Balprada Hospital
              </h2>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-black">
                <li>
                  Patients from Bilari town and surrounding villages can
                  contact Balprada Hospital for doctor-led Ayurvedic
                  consultation, treatment planning, and follow-up care.
                </li>
                <li>
                  Patients traveling from distant parts of Tehsil Bilari are
                  encouraged to bring previous medical reports, current
                  medication details, and relevant treatment history.
                </li>
                <li>
                  The hospital provides clear guidance regarding the expected
                  number of visits, treatment timelines, and home-care
                  instructions.
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