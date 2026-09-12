import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaCancerSupportiveTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure cancer?",
      a: "No. Ayurvedic supportive care at Balprada is designed to work alongside prescribed oncology treatment, helping manage symptoms and support strength — it is not a substitute for medical cancer treatment.",
    },
    {
      q: "Q2. Is it safe to take Ayurvedic herbs during chemotherapy or radiation?",
      a: "Any herbal support should be reviewed carefully against the patient's ongoing treatment. Our doctors evaluate this individually and recommend coordinating with the treating oncologist before starting anything.",
    },
    {
      q: "Q3. How can Ayurvedic care help during cancer treatment?",
      a: "It can support appetite, digestion, energy levels, sleep and emotional well-being, helping patients cope more comfortably with the demands of treatment.",
    },
    {
      q: "Q4. Does Balprada replace the need for an oncologist?",
      a: "No. Balprada offers supportive, complementary care and always encourages patients to continue their prescribed oncology treatment and regular medical follow-up.",
    },
    {
      q: "Q5. Does Balprada offer free consultation for cancer patients?",
      a: "Yes, Balprada offers free OPD consultation on the 15th of every month at its Moradabad branches.",
    },
    {
      q: "Q6. Can family members be involved in the consultation process?",
      a: "Yes, family involvement is welcomed and often encouraged, since cancer care is usually a shared journey for the patient and their loved ones.",
    },
    {
      q: "Q7. How can I book an appointment at Balprada?",
      a: "You can call, WhatsApp or visit the Balprada website to book an appointment at either the Main Branch or the Moradabad Branch.",
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
                Cancer Ayurvedic Supportive Treatment at Balprada Ayurvedic
                Hospital &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A cancer diagnosis affects far more than the body — it
                  touches strength, appetite, sleep, emotional balance and the
                  everyday rhythm of life.
                </li>
                <li>
                  At Balprada Ayurvedic Hospital &amp; Research Center, we offer
                  sensitive, personalized Ayurvedic supportive care designed to
                  work alongside oncology treatment, helping patients manage
                  side effects, maintain strength, support digestion and find
                  emotional steadiness through a difficult journey.
                </li>
                <li>
                  With 35 years of experience in Ayurveda, in-house herbal
                  medicines, an experienced team of vaidyas and a peaceful
                  ashram-based environment, Balprada focuses on compassionate,
                  disciplined and personalized care for every patient and
                  family we support.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Ayurvedic Supportive Care Helps for Cancer?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic supportive care is not a treatment for cancer itself,
                  but a complementary approach that works alongside
                  chemotherapy, radiation, surgery or other prescribed oncology
                  treatment.
                </li>
                <li>
                  Supportive care focuses on helping the body cope better with
                  the physical and emotional demands of cancer treatment.
                </li>
                <li>
                  It is designed to work in coordination with, not in place of,
                  a patient&apos;s ongoing medical and oncology care.
                </li>
                <li>
                  The goal is to support strength, appetite, digestion, sleep
                  and overall quality of life throughout the treatment journey.
                </li>
                <li>
                  Ayurveda&apos;s holistic approach considers the whole person —
                  body, mind and daily routine — alongside the specific illness
                  being treated.
                </li>
                <li>
                  Every patient&apos;s needs are different, so supportive care
                  is planned individually based on the type of cancer, stage of
                  treatment and current symptoms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Supportive Care Matters During Cancer Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                Cancer treatments, while essential, often bring physical and
                emotional challenges that benefit from additional, gentle
                support.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chemotherapy and radiation can affect appetite, digestion,
                  energy levels and immunity.
                </li>
                <li>
                  Many patients experience fatigue, nausea, weakness or
                  difficulty sleeping during treatment cycles.
                </li>
                <li>
                  Emotional strain, anxiety and stress are common for both
                  patients and their families throughout the journey.
                </li>
                <li>
                  Maintaining strength and nutrition can help patients tolerate
                  treatment schedules more comfortably.
                </li>
                <li>
                  A calm, structured daily routine can offer a sense of
                  stability during an otherwise uncertain time.
                </li>
                <li>
                  Family involvement and clear guidance often make the treatment
                  journey easier to navigate together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Concerns Addressed Through Supportive Care
              </h2>

              <p className="mb-4 text-gray-700">
                Balprada&apos;s supportive care is built around the everyday
                challenges patients commonly face during cancer treatment.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Loss of appetite and difficulty maintaining adequate
                  nutrition.
                </li>
                <li>Persistent fatigue, weakness and low stamina.</li>
                <li>
                  Digestive discomfort, nausea or irregular bowel movements.
                </li>
                <li>
                  Disturbed sleep patterns and difficulty relaxing.
                </li>
                <li>
                  Emotional stress, anxiety or low mood during the treatment
                  journey.
                </li>
                <li>
                  General immunity support alongside prescribed medical
                  treatment.
                </li>
                <li>
                  Post-treatment recovery of strength and everyday energy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic Perspective on Supportive Cancer Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda traditionally emphasizes Ojas (vital strength and
                  immunity), Agni (digestive fire) and Sattva (mental clarity and
                  calm) as central to how a person copes with serious illness.
                </li>
                <li>
                  Supportive care traditionally focuses on preserving and
                  rebuilding Ojas, which is closely linked to overall resilience
                  and recovery capacity.
                </li>
                <li>
                  Maintaining healthy digestion (Agni) is considered important
                  for the body to absorb nutrition and tolerate treatment
                  better.
                </li>
                <li>
                  Practices that support Sattva, such as meditation and a calm
                  routine, are traditionally valued for emotional steadiness
                  during difficult periods.
                </li>
                <li>
                  The approach is gentle and individualized, recognizing that
                  each patient&apos;s strength, treatment stage and tolerance are
                  different.
                </li>
                <li>
                  Ayurvedic supportive care is always planned to complement,
                  never interfere with, a patient&apos;s prescribed oncology
                  treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supporting the Full Treatment Journey
              </h2>

              <p className="mb-4 text-gray-700">
                Cancer care unfolds over different phases, and support needs
                often shift from one stage to the next.
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Before treatment begins:
                  </span>{" "}
                  building baseline strength, addressing anxiety and preparing
                  the body and mind for the treatment ahead.
                </li>
                <li>
                  <span className="font-semibold">
                    During active treatment:
                  </span>{" "}
                  managing appetite, fatigue, digestive discomfort and
                  emotional strain that often accompany chemotherapy or
                  radiation cycles.
                </li>
                <li>
                  <span className="font-semibold">
                    Between treatment cycles:
                  </span>{" "}
                  using recovery windows to rebuild strength, restore appetite
                  and support rest before the next cycle begins.
                </li>
                <li>
                  <span className="font-semibold">
                    After treatment completion:
                  </span>{" "}
                  supporting the gradual return of energy, digestion and normal
                  daily routine during the recovery phase.
                </li>
                <li>
                  <span className="font-semibold">
                    Long-term follow-up:
                  </span>{" "}
                  continuing gentle, personalized support to help maintain
                  strength and overall well-being over time.
                </li>
                <li>
                  Recognizing which phase a patient is in allows our team to
                  adjust the pace, intensity and focus of supportive care
                  appropriately at every step.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Ayurvedic Supportive Care Approach
              </h2>

              <p className="mb-6 text-gray-700">
                At Balprada, cancer supportive care is planned thoughtfully,
                with close attention to each patient&apos;s treatment stage,
                strength and specific needs.
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Sensitive Consultation and Assessment
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors take time to understand the patient&apos;s
                      diagnosis, treatment stage, current medications and
                      specific concerns.
                    </li>
                    <li>
                      Assessment includes reviewing appetite, digestion, sleep,
                      energy levels and emotional well-being.
                    </li>
                    <li>
                      Family members are welcomed into the conversation, since
                      cancer care is often a shared journey.
                    </li>
                    <li>
                      A personalized supportive care plan is created, always
                      designed to work alongside the patient&apos;s oncology
                      treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. In-House Ayurvedic Herbal Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares its own herbal formulations to maintain
                      consistent quality and safety.
                    </li>
                    <li>
                      Formulations are selected carefully, with attention to
                      any interactions with ongoing chemotherapy, radiation or
                      other medical treatment.
                    </li>
                    <li>
                      Herbal support is generally aimed at improving appetite,
                      supporting digestion and gently building strength.
                    </li>
                    <li>
                      All herbal care is introduced only after understanding the
                      patient&apos;s current oncology treatment plan, and is
                      closely monitored by experienced vaidyas.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Nutrition Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A nourishing, easily digestible diet plan is recommended
                      to help patients meet their nutritional needs during
                      treatment.
                    </li>
                    <li>
                      Guidance is tailored to manage common issues like appetite
                      loss, nausea or taste changes that often accompany cancer
                      treatment.
                    </li>
                    <li>
                      Emphasis is placed on warm, freshly prepared,
                      easy-to-digest meals suited to each patient&apos;s
                      tolerance.
                    </li>
                    <li>
                      Family caregivers are guided on practical meal planning
                      to support consistency at home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Strength and Energy Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle strategies are offered to help patients conserve
                      and gradually rebuild energy between treatment cycles.
                    </li>
                    <li>
                      Guidance focuses on realistic daily routines that respect
                      the patient&apos;s current strength and treatment schedule.
                    </li>
                    <li>
                      Rest, nutrition and gentle activity are balanced carefully
                      rather than pushed beyond what a patient can comfortably
                      manage.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Emotional and Mental Well-Being Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Meditation, breath awareness and calming practices are
                      offered to support emotional steadiness.
                    </li>
                    <li>
                      The peaceful ashram environment provides a supportive
                      space away from everyday stress and hospital settings.
                    </li>
                    <li>
                      Patients and families are encouraged to talk openly with
                      our team about anxiety, fear or emotional exhaustion
                      during treatment.
                    </li>
                    <li>
                      A compassionate, unhurried approach is central to how our
                      team interacts with every patient.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Yoga and Gentle Movement
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Simple, adapted yoga practices are offered where suitable,
                      based on the patient&apos;s strength and treatment stage.
                    </li>
                    <li>
                      Breathing exercises are used to support relaxation, better
                      sleep and a sense of calm.
                    </li>
                    <li>
                      All physical practices are modified carefully to avoid
                      overexertion, especially during active treatment phases.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    7. Ongoing Follow-Up and Coordination
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up helps our team track how the patient is
                      coping with treatment and adjust supportive care
                      accordingly.
                    </li>
                    <li>
                      Patients are encouraged to keep their oncologist informed
                      about any Ayurvedic supportive care they are receiving.
                    </li>
                    <li>
                      Long-term follow-up continues even after active treatment
                      ends, supporting recovery of strength and normal routine.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Commonly Used Supportive Ayurvedic Herbs
              </h2>

              <p className="mb-4 text-gray-700">
                Certain traditional herbs are associated in Ayurveda with
                strength, immunity and overall vitality. These are considered
                only after careful evaluation and are never used as a substitute
                for cancer treatment:
              </p>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Ashwagandha (Withania somnifera)
                  </span>{" "}
                  – traditionally valued for supporting strength, stamina and
                  stress resilience.
                </li>
                <li>
                  <span className="font-semibold">
                    Guduchi (Tinospora cordifolia)
                  </span>{" "}
                  – associated with supporting immunity and overall vitality.
                </li>
                <li>
                  <span className="font-semibold">
                    Shatavari (Asparagus racemosus)
                  </span>{" "}
                  – traditionally used to support nourishment and general
                  strength.
                </li>
                <li>
                  <span className="font-semibold">
                    Amalaki (Emblica officinalis)
                  </span>{" "}
                  – valued as a source of traditional nutritional and antioxidant
                  support.
                </li>
                <li>
                  <span className="font-semibold">Chyawanprash</span> – a
                  classical formulation traditionally used to support immunity
                  and daily vitality.
                </li>
                <li>
                  <span className="font-semibold">
                    Bhumyamalaki (Phyllanthus niruri)
                  </span>{" "}
                  – traditionally used to support healthy liver function during
                  treatment.
                </li>
                <li>
                  <span className="font-semibold">
                    Brahmi (Bacopa monnieri)
                  </span>{" "}
                  – traditionally associated with supporting mental clarity and
                  calm.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Every herbal recommendation is reviewed carefully against the
                patient&apos;s ongoing oncology treatment. No supportive herb
                should ever be self-administered without a qualified
                vaidya&apos;s direct evaluation and, ideally, in coordination
                with the treating oncologist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Daily Routine Recommendations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Choose warm, freshly prepared, easily digestible meals suited
                  to appetite and tolerance levels.
                </li>
                <li>
                  Eat smaller, more frequent meals if appetite is low, rather
                  than forcing large portions.
                </li>
                <li>
                  Stay adequately hydrated, adjusting fluid intake as guided by
                  the treating doctor.
                </li>
                <li>
                  Prioritize rest and quality sleep, allowing the body time to
                  recover between treatment sessions.
                </li>
                <li>
                  Keep daily routines simple and predictable, which can offer
                  comfort during an uncertain time.
                </li>
                <li>
                  Involve family members in meal planning and daily support to
                  ease the caregiving load.
                </li>
                <li>
                  Maintain open communication with both the Ayurvedic and
                  oncology care teams about any new symptoms.
                </li>
                <li>
                  Avoid unverified remedies or supplements not reviewed by
                  either treating team, as these can sometimes interfere with
                  treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Cancer Supportive Care?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  35 years of trusted experience in Ayurvedic treatment and
                  compassionate patient care.
                </li>
                <li>
                  In-house preparation of herbal medicines to maintain quality,
                  safety and consistency.
                </li>
                <li>
                  Experienced doctors who evaluate each case sensitively, with
                  attention to the patient&apos;s full treatment context.
                </li>
                <li>
                  Peaceful, ashram-based healing environment that offers
                  comfort, rest and emotional support.
                </li>
                <li>
                  Integrated facilities including yoga, meditation, naturopathy,
                  physiotherapy and an in-house pathology lab.
                </li>
                <li>
                  A structured, coordinated care process that respects and works
                  alongside each patient&apos;s oncology treatment.
                </li>
                <li>
                  Free OPD consultation available on the 15th of every month.
                </li>
                <li>
                  Two accessible branches in Moradabad, Uttar Pradesh, with
                  daily OPD timings.
                </li>
                <li>
                  A calm, service-first approach (seva sankalp) rooted in the
                  legacy of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Continued follow-up support for patients and families
                  throughout and after the treatment journey.
                </li>
              </ul>
            </section>


            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Consultation for Cancer Supportive Care
              </h2>

              <p className="mb-6 text-black">
                Contact Balprada Ayurvedic Hospital &amp; Research Center to
                discuss supportive Ayurvedic care, treatment-stage needs and
                coordination with the patient&apos;s ongoing oncology treatment.
              </p>

              <div className="mb-6 space-y-5">
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

                <div className="flex items-start gap-3">
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

                    <div className="flex flex-wrap items-center gap-3 text-black">
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