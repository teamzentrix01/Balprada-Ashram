import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaJaundiceAyurvedicTreatment() {
  const faqs = [
    {
      q: "Q1. Is Ayurvedic treatment available for jaundice near Rampur?",
      a: "Yes, patients from Rampur can consult at the main branch near Bilari or the Moradabad branch, and calling ahead helps confirm timing.",
    },
    {
      q: "Q2. Can Ayurveda cure jaundice?",
      a: "Jaundice has different causes, so no honest treatment can guarantee a cure; Balprada offers supportive care through diet, routine and monitored herbal medicines.",
    },
    {
      q: "Q3. Should I get tests done first?",
      a: "Yes, liver function tests and an ultrasound help identify the cause, and Balprada&apos;s pathology lab can support testing.",
    },
    {
      q: "Q4. Can I continue my allopathic medicines?",
      a: "Yes, patients should continue prescribed medicines and share the full list with the Ayurvedic doctor.",
    },
    {
      q: "Q5. What should I eat during jaundice?",
      a: "Light, freshly cooked meals, safe drinking water and complete avoidance of alcohol are commonly advised, with exact guidance given by the doctor.",
    },
    {
      q: "Q6. Is jaundice in newborns treated here?",
      a: "Newborn jaundice needs urgent paediatric evaluation, so please take the baby to a hospital first.",
    },
    {
      q: "Q7. Is Panchakarma suitable for jaundice?",
      a: "It depends on the patient&apos;s strength and cause, and the doctor decides only after assessment.",
    },
    {
      q: "Q8. Is there a free consultation?",
      a: "Free OPD is available on the 15th of every month, and it is best to call before visiting.",
    },
    {
      q: "Q9. How do I book an appointment?",
      a: "Call or WhatsApp 8126364606 for the main branch, or 9410447000 for the Moradabad branch, or use the website&apos;s appointment page.",
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
                Jaundice Ayurvedic Treatment in Rampur: Supportive Care at
                Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Jaundice is a common condition in which the skin, eyes and
                  urine turn yellow, and families in Rampur often look for
                  ayurvedic support when symptoms appear suddenly or keep
                  returning after earlier treatment.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji, and jaundice is one of the
                  conditions listed under its Liver and Digestive Care
                  programme.
                </li>
                <li>
                  Balprada&apos;s own approach says that assessment, diet
                  discipline and monitored care are important for recovery,
                  which means the focus is on understanding the cause first and
                  then supporting the body through food, routine and suitable
                  medicines.
                </li>
                <li>
                  This page explains what jaundice is, how Ayurveda views it,
                  how care is planned at Balprada and how patients from Rampur
                  can reach the hospital.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Jaundice
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What Jaundice Actually Is
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Jaundice is not a disease by itself but a sign that
                      something is affecting the liver, the bile ducts or the
                      breakdown of red blood cells, and the yellow colour comes
                      from a pigment called bilirubin building up in the body.
                    </li>
                    <li>
                      The liver normally processes bilirubin and sends it out
                      through bile, so when the liver is inflamed or the bile
                      flow is blocked, the pigment stays in the blood and
                      becomes visible in the eyes and skin.
                    </li>
                    <li>
                      Because the same yellow colour can have very different
                      causes, a proper assessment matters more than treating
                      the colour alone.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Common Causes
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Viral hepatitis, especially infections spread through
                      contaminated food and water, is a frequent cause of
                      jaundice in this region, particularly during the monsoon
                      and post-monsoon months.
                    </li>
                    <li>
                      Other causes include alcohol-related liver injury, fatty
                      liver, gallstones or bile duct blockage, certain
                      medicines and blood-related conditions, so the underlying
                      cause shapes what kind of care is suitable.
                    </li>
                    <li>
                      Identifying the cause through history, examination and
                      tests helps the doctor decide which supportive steps are
                      safe and which situations need hospital-level medical
                      care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Symptoms to Notice
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yellowing of the eyes and skin, dark yellow or
                      tea-coloured urine, pale stools, itching and persistent
                      tiredness are the signs most often reported by patients
                      and families.
                    </li>
                    <li>
                      Loss of appetite, nausea, a heavy feeling after meals,
                      mild abdominal discomfort and weakness are also common,
                      and they often appear a few days before the yellow colour
                      becomes obvious.
                    </li>
                    <li>
                      Fever, repeated vomiting, severe weakness or drowsiness
                      are signs that the condition may be more serious and
                      should be checked without delay.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of Jaundice
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kamala and Pitta
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      In Ayurveda, jaundice is commonly described as Kamala,
                      and it is traditionally linked to an imbalance of Pitta,
                      which is associated with digestion, metabolism and the
                      liver.
                    </li>
                    <li>
                      This view explains why Ayurvedic care for jaundice pays
                      close attention to digestion, appetite, food timing and
                      the type of meals the patient eats during recovery.
                    </li>
                    <li>
                      Traditional descriptions are used as a framework for
                      guiding diet and routine, and they are never a reason to
                      delay medical tests or hospital care when symptoms are
                      severe.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Digestion and Agni
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The liver is closely connected with digestive strength,
                      called agni, so weak digestion, bloating, nausea and poor
                      appetite are treated as meaningful signs and not as minor
                      side effects.
                    </li>
                    <li>
                      Balprada&apos;s Liver and Digestive Care approach
                      combines consultation, food guidance, routine correction
                      and monitored herbal care, with the aim of supporting
                      liver metabolism and digestion together.
                    </li>
                    <li>
                      Care is always individual, since two patients with
                      jaundice may differ in cause, strength, age and other
                      health conditions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Patients with Jaundice
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation and Assessment
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The first step is a detailed consultation in which the
                      doctor listens to the patient&apos;s symptoms, asks how
                      long the yellowing has been present and reviews recent
                      illness, travel, food habits and medicines.
                    </li>
                    <li>
                      Patients are encouraged to bring any available reports,
                      such as liver function tests, bilirubin values, hepatitis
                      markers and ultrasound, so the doctor can see the full
                      picture before suggesting a plan.
                    </li>
                    <li>
                      Current and recent medicines, including allopathic
                      tablets, syrups and any herbal products taken at home,
                      should be shared openly so that nothing is combined
                      unsafely.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Ayurvedic Medicines and Monitoring
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada uses its own in-house herbal medicines, and the
                      hospital presents the quality of its preparations as a
                      central strength developed over more than three decades.
                    </li>
                    <li>
                      Herbal care is suggested only when suitable for the
                      individual patient, and the dose and duration are decided
                      by the doctor rather than chosen from internet advice or
                      other people&apos;s experiences.
                    </li>
                    <li>
                      Monitoring is an important part of the plan, so patients
                      are asked to return for follow-up and to report any
                      change in colour, appetite, energy or urine so that
                      guidance can be adjusted in time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Daily Routine
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Food discipline is considered central to recovery, and
                      the team guides patients toward light, freshly cooked,
                      easily digestible meals taken at regular times instead of
                      heavy, oily or spicy food.
                    </li>
                    <li>
                      Patients are usually advised to avoid alcohol completely,
                      to stay well hydrated with safe boiled or filtered water
                      and to avoid street food and uncovered items that can
                      carry infection.
                    </li>
                    <li>
                      Rest is encouraged during recovery, and families are
                      guided on gradually returning to normal activity as
                      strength improves, rather than rushing back to work or
                      travel.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The ashram offers yoga, meditation and naturopathy, and
                      the doctor decides whether any of these suit the
                      patient&apos;s strength and stage of illness.
                    </li>
                    <li>
                      Panchakarma therapies are planned only after individual
                      assessment and are not appropriate for every patient,
                      particularly those who are very weak or acutely unwell.
                    </li>
                    <li>
                      Physiotherapy support is available for patients who have
                      lost stamina and need a gentle, safe way to rebuild
                      movement and strength after illness.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Pathology Lab Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Pathology Lab provides blood, urine and
                      diagnostic testing support, which helps the doctor and
                      patient follow how the body is responding over time.
                    </li>
                    <li>
                      Tests commonly used in jaundice care include liver
                      function tests and routine blood work, and the results
                      are reviewed with the patient during follow-up
                      consultations.
                    </li>
                    <li>
                      Having consultation and testing support under one roof
                      saves travel and waiting time for families coming from
                      Rampur, which is especially helpful when the patient
                      feels weak.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients from Rampur Choose Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Experience and Trust
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada has served patients since 1991, and the hospital
                      now describes 35 years of experience in natural Ayurvedic
                      care, experienced doctors and a service-first approach.
                    </li>
                    <li>
                      Patient reviews on the website mention knowledgeable
                      vaidyas, humble and kind staff and a calm ashram setting,
                      which the hospital regards as part of the healing
                      environment.
                    </li>
                    <li>
                      The founder&apos;s vision of seva, or selfless service,
                      continues to shape how patients are welcomed, with
                      careful listening and clear explanation of the care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. A Calm Healing Environment
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The ashram setting offers a quiet space away from the
                      noise of the city, which many families find reassuring
                      during a stressful illness.
                    </li>
                    <li>
                      Rest, regular meals and emotional steadiness are treated
                      as part of recovery, and meditation and breath awareness
                      are available to support calm and better sleep where
                      appropriate.
                    </li>
                    <li>
                      Patients and attendants receive guidance in simple
                      language, so the diet and routine can be followed easily
                      at home after the visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Easy Access from Rampur
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Rampur lies close to the Moradabad region, so patients
                      can reach either the main branch near Bilari or the
                      Moradabad city branch without a long journey.
                    </li>
                    <li>
                      The Moradabad branch is convenient for those travelling
                      into the city by road or rail, while the main branch
                      offers the fuller ashram experience.
                    </li>
                    <li>
                      Families are advised to call before travelling,
                      especially when the patient is weak or when a specific
                      vaidya&apos;s availability is needed.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your First Visit
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Before You Arrive
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Collect all recent reports, including liver function
                      tests, hepatitis markers and ultrasound, and arrange them
                      by date so the consultation can move quickly and clearly.
                    </li>
                    <li>
                      Make a short list of every medicine and home remedy the
                      patient has taken in the last few weeks, along with when
                      each was started.
                    </li>
                    <li>
                      Bring a family member who can describe the
                      patient&apos;s symptoms and remember the diet and routine
                      advice that will be given during the visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. During the Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the symptoms, asks about appetite,
                      digestion, urine colour, sleep and energy, and then
                      explains the likely next steps in plain language.
                    </li>
                    <li>
                      The care plan may include Ayurvedic medicines, specific
                      diet instructions, lifestyle correction and supportive
                      facilities where suitable.
                    </li>
                    <li>
                      Families should feel free to ask about follow-up timing,
                      which signs need urgent attention and how Ayurvedic care
                      fits with any ongoing medical treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. After the Visit
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up allows the team to observe progress,
                      adjust guidance and support long-term discipline, which
                      matters because liver recovery often takes time.
                    </li>
                    <li>
                      Repeat tests may be advised at suitable intervals so that
                      the patient and doctor can review how the body is
                      responding.
                    </li>
                    <li>
                      Any new or worsening symptom between visits should be
                      reported promptly, and emergency symptoms should always
                      be treated as a medical emergency first.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Safety Information
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Jaundice can be a sign of serious liver or bile duct disease,
                  so Ayurvedic care at Balprada is offered as supportive care
                  and does not replace diagnosis or emergency treatment by a
                  qualified medical doctor.
                </li>
                <li>
                  Newborn babies, pregnant women and patients with high fever,
                  repeated vomiting, confusion, severe abdominal pain or black
                  stools should be taken to a hospital immediately.
                </li>
                <li>
                  Results differ from person to person, and no medicine, diet
                  or therapy can promise a particular outcome, so patients
                  should avoid unverified home remedies and unregulated herbal
                  powders.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visit or Contact Balprada
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar
                        Pradesh 244415.
                      </li>
                      <li>
                        Timing: Daily, 10:00 AM to 2:00 PM, with the ashram and
                        clinic open seven days a week.
                      </li>
                      <li>
                        Phone and WhatsApp:{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>
                        , with email at{" "}
                        <a
                          href="mailto:balpradaindia@gmail.com"
                          className="hover:underline"
                        >
                          balpradaindia@gmail.com
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
                        Availability: Vaidya ji is available on Sundays, so
                        please call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting.
                      </li>
                      <li>
                        Free OPD consultation is available on the 15th of every
                        month, which families can use for a first discussion
                        with the team.
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