import Link from "next/link";
import {
  Phone,
  MapPin,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "Can Ayurveda cure cancer?",
      a: "No. Ayurveda at Balprada is offered strictly as supportive care alongside oncology treatment, not as a cure.",
    },
    {
      q: "Is it safe to combine Ayurveda with chemotherapy?",
      a: "Many supportive measures are safe when supervised by a qualified physician, but every therapy is reviewed against the patient's ongoing treatment first.",
    },
    {
      q: "Will Balprada ask me to stop my current cancer treatment?",
      a: "No. Patients are always encouraged to continue prescribed oncology treatment; ayurvedic care is designed to work alongside it.",
    },
    {
      q: "How far is Balprada from Bilari?",
      a: "The hospital is located in Moradabad, a short and manageable distance from Bilari, making regular visits practical.",
    },
    {
      q: "Can Ayurveda help with chemotherapy side effects like nausea or fatigue?",
      a: "Supportive herbal and dietary measures may help ease some side effects, based on the patient's individual condition.",
    },
    {
      q: "Do I need to bring my medical reports to the first visit?",
      a: "Yes, bringing recent oncology reports and current medication details helps the physician design a safe, individualized plan.",
    },
    {
      q: "Is this treatment suitable for all stages of cancer?",
      a: "Suitability depends on the patient's specific condition and treatment stage; this is assessed individually during consultation.",
    },
    {
      q: "Can caregivers also get guidance from Balprada?",
      a: "Yes, guidance on home care, diet preparation, and emotional support is often extended to family caregivers as well.",
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
                Cancer Ayurvedic Treatment in Bilari – Balprada Ayurvedic
                Hospital &amp; Research Center
              </h1>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Families in Bilari searching for cancer care often want more
                  than just hospital-based treatment — they want a plan that
                  also protects the patient&apos;s strength, digestion, sleep,
                  and mental peace through a long and difficult treatment
                  journey.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center, located
                  close to Bilari in the Moradabad district, offers ayurvedic
                  supportive care designed to work alongside modern oncology
                  treatment, not instead of it.
                </li>
                <li>
                  This page explains what ayurvedic cancer support actually
                  means, what patients from Bilari can expect at Balprada, and
                  how classical Ayurveda addresses the physical and emotional
                  toll of cancer treatment.
                </li>
                <li>
                  Important note: Ayurveda at Balprada is offered as a
                  complementary, supportive therapy. It is not presented as a
                  cure for cancer, and patients are always encouraged to
                  continue their prescribed oncology treatment (surgery,
                  chemotherapy, radiation, or targeted therapy) under their
                  treating oncologist.
                </li>
              </ul>
            </div>

            {/* Section 2 — Why Bilari Residents */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Bilari Residents Are Turning to Ayurvedic Supportive Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Proximity and convenience — Bilari residents no longer need
                  to travel to Delhi or other metro cities for supportive
                  ayurvedic care; Balprada&apos;s Moradabad facility is a
                  short, manageable distance away.
                </li>
                <li>
                  Rising treatment-related side effects — Chemotherapy and
                  radiation often bring nausea, fatigue, appetite loss, and
                  weakened immunity; many families look for additional support
                  to manage these symptoms.
                </li>
                <li>
                  Preference for a holistic approach — Many patients want their
                  emotional wellbeing, diet, and daily routine addressed
                  together with their medical treatment, not treated as
                  separate issues.
                </li>
                <li>
                  Trust in traditional medicine — Ayurveda has deep cultural
                  roots in this region, and many families already understand
                  and trust its principles of diet, herbs, and lifestyle
                  balance.
                </li>
                <li>
                  Word-of-mouth confidence — Patients from Bilari, Katghar,
                  Thakurdwara, and nearby areas increasingly share their
                  experiences of combining Balprada&apos;s care with their
                  existing cancer treatment.
                </li>
              </ul>
            </div>

            {/* Section 3 — What Ayurveda Can and Cannot Offer */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Ayurveda Can (and Cannot) Offer Cancer Patients
              </h2>

              <h3 className="mb-2 font-semibold text-gray-900">
                What it can support:
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Easing digestive discomfort and appetite loss during
                  chemotherapy cycles
                </li>
                <li>
                  Reducing fatigue and improving energy levels between
                  treatment sessions
                </li>
                <li>Supporting sleep quality and reducing treatment-related stress</li>
                <li>Strengthening general immunity through herbal formulations and diet</li>
                <li>
                  Managing mouth ulcers, skin dryness, and other common
                  radiation/chemo side effects
                </li>
                <li>
                  Providing emotional grounding through counselling-style
                  consultations and lifestyle routine (dinacharya)
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                What it does not claim to do:
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ayurveda at Balprada is never positioned as a replacement for
                  surgery, chemotherapy, radiation, or any oncologist-prescribed
                  treatment.
                </li>
                <li>
                  No formulation offered is claimed to &quot;cure&quot; or
                  &quot;eliminate&quot; cancer.
                </li>
                <li>
                  Patients are always advised to inform their oncologist before
                  starting any ayurvedic supportive therapy, to avoid
                  interactions with ongoing treatment.
                </li>
              </ul>
            </div>

            {/* Section 4 — Balprada Approach */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to Cancer Supportive Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Step 1 – Detailed Case History: Doctors review the
                  patient&apos;s cancer type, treatment stage, current oncology
                  reports, and medication history before suggesting any
                  supportive plan.
                </li>
                <li>
                  Step 2 – Dosha and Constitution Assessment: As per classical
                  Ayurveda, the physician evaluates the patient&apos;s
                  Vata-Pitta-Kapha balance, since imbalance patterns often shift
                  significantly during chemotherapy and radiation.
                </li>
                <li>
                  Step 3 – Personalized Supportive Plan: A combination of
                  herbal formulations, diet guidance, and gentle therapies is
                  designed specifically for the patient&apos;s current
                  treatment phase (pre-treatment, mid-treatment, or recovery).
                </li>
                <li>
                  Step 4 – Coordination with Oncology Treatment: The ayurvedic
                  plan is scheduled around the patient&apos;s chemotherapy or
                  radiation calendar, avoiding any overlap that could interfere
                  with medical treatment.
                </li>
                <li>
                  Step 5 – Ongoing Monitoring: Regular follow-up visits track
                  appetite, weight, energy levels, and side-effect severity,
                  with the plan adjusted as the patient&apos;s treatment
                  progresses.
                </li>
              </ul>
            </div>

            {/* Section 5 — Panchakarma */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Cancer Patients — What&apos;s Appropriate
              </h2>

              <ul >
                <li>
                  Not all Panchakarma procedures are suitable during active
                  cancer treatment; Balprada&apos;s physicians carefully select
                  only gentle, low-intensity therapies appropriate to the
                  patient&apos;s condition.
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Commonly considered supportive therapies:
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild Abhyanga (oil massage) for fatigue and muscle stiffness,
                  when medically appropriate
                </li>
                <li>
                  Basti (medicated enema) in select cases for digestive and
                  bowel-related side effects
                </li>
                <li>
                  Herbal steam or localized therapies for specific discomfort,
                  only after medical clearance
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Therapies generally avoided during active treatment:
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Strong detox procedures like Vamana or Virechana are
                  typically avoided during chemotherapy or radiation unless the
                  treating physician determines otherwise.
                </li>
                <li>
                  Any therapy involving significant physical stress is
                  reconsidered on a case-by-case basis.
                </li>
              </ul>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Every therapy decision at Balprada is individualized —
                  nothing is applied as a standard package to every cancer
                  patient.
                </li>
              </ul>
            </div>

            {/* Section 6 — Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Guidance for Cancer Patients
              </h2>

              <h3 className="mb-2 font-semibold text-gray-900">
                Appetite and digestion support:
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Light, easily digestible meals recommended during chemotherapy
                  cycles
                </li>
                <li>
                  Warm, freshly cooked food preferred over cold or processed
                  items
                </li>
                <li>
                  Small, frequent meals suggested when appetite is low
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Immunity-focused additions:
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Herbal decoctions (kadha) as guided by the physician to
                  support general strength
                </li>
                <li>
                  Foods rich in natural antioxidants, as appropriate for the
                  patient&apos;s condition
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Daily routine (Dinacharya) adjustments:
              </h3>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fixed sleep and wake times to stabilize energy levels</li>
                <li>
                  Gentle breathing exercises or short walks when the
                  patient&apos;s condition allows
                </li>
                <li>
                  Avoiding excessive physical strain during active treatment
                  phases
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                What families are advised on:
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>How to prepare meals during low-appetite days</li>
                <li>Simple home-care routines between hospital visits</li>
                <li>
                  Warning signs that need immediate oncologist attention,
                  separate from routine ayurvedic follow-up
                </li>
              </ul>
            </div>

            {/* Section 7 — Emotional Support */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional and Psychological Support
              </h2>

              <ul>
                <li>
                  A cancer diagnosis affects the whole family, not just the
                  patient — Balprada&apos;s consultations often include
                  guidance for caregivers as well.
                </li>
              </ul>

              <h3 className="mb-2 font-semibold text-gray-900">
                Areas of focus:
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Simple stress-reduction practices such as guided breathing
                  and light meditation
                </li>
                <li>
                  Conversations about diet and routine that help patients feel
                  a sense of control during treatment
                </li>
                <li>
                  Encouragement to stay connected to oncology follow-ups,
                  rather than replacing them
                </li>
              </ul>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emotional wellbeing is treated as part of the overall care
                  plan, alongside physical symptom management.
                </li>
              </ul>
            </div>

            {/* Section 8 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada Ayurvedic Hospital for Supportive Cancer
                Care Near Bilari
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Experienced physicians trained in classical Ayurveda who
                  understand how to work safely alongside modern oncology
                  treatment.
                </li>
                <li>
                  Individualized care plans rather than fixed, one-size-fits-all
                  packages for every cancer patient.
                </li>
                <li>
                  In-house diagnostic support, allowing physicians to track
                  relevant health parameters during the supportive care journey.
                </li>
                <li>
                  Clear, honest communication — patients are never told that
                  Ayurveda will cure their cancer; the focus stays on genuine
                  supportive value.
                </li>
                <li>
                  Convenient access for Bilari residents, removing the need to
                  travel long distances for quality ayurvedic consultation.
                </li>
                <li>
                  Family-inclusive approach, recognizing that caregivers need
                  guidance and support too.
                </li>
              </ul>
            </div>

            {/* Section 9 — Who Should Consider */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Consider This Supportive Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Patients currently undergoing chemotherapy or radiation who
                  are struggling with fatigue, appetite loss, or digestive
                  discomfort
                </li>
                <li>
                  Patients in the recovery phase after surgery or completed
                  treatment, looking to rebuild strength
                </li>
                <li>
                  Families seeking a structured diet and lifestyle plan to
                  support a loved one&apos;s treatment journey
                </li>
                <li>
                  Anyone wanting a second layer of care focused on quality of
                  life, used with — never instead of — their oncologist&apos;s
                  treatment plan
                </li>
              </ul>
            </div>

            {/* Section 10 — How to Begin */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Begin Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bring along recent oncology reports, current treatment
                  schedule, and a list of ongoing medications to the first
                  visit.
                </li>
                <li>
                  The physician will explain clearly what supportive measures
                  are appropriate at the patient&apos;s current treatment
                  stage.
                </li>
                <li>
                  Follow-up visits are scheduled around the patient&apos;s
                  chemotherapy/radiation calendar for convenience.
                </li>
                <li>
                  Patients from Bilari and nearby areas can reach the hospital
                  directly for appointment booking and guidance on the first
                  visit.
                </li>
              </ul>
            </div>

            {/* Section 11 — CTA */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Supportive Cancer Care Consultation
              </h2>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-black">
                <li>
                  Patients and families interested in ayurvedic supportive care
                  can book a consultation at Balprada Ayurvedic Hospital &amp;
                  Research Center in Moradabad.
                </li>
                <li>
                  Patients should bring recent oncology reports, their current
                  treatment schedule, and a list of ongoing medications.
                </li>
                <li>
                  Ayurvedic supportive care is planned alongside the
                  oncologist&apos;s treatment and is not presented as a
                  replacement for necessary cancer treatment.
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

            {/* Section 12 — FAQs */}
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