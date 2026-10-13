import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaLiverCirrhosisTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure liver cirrhosis?",
      a: "Cirrhosis involves lasting scarring, so no treatment can honestly promise a cure; Balprada offers supportive Ayurvedic care for digestion, diet and routine alongside medical treatment.",
    },
    {
      q: "Q2. Is Ayurvedic treatment for cirrhosis available near Rampur?",
      a: "Yes, patients from Rampur can consult at the main branch near Bilari or the Moradabad city branch, and calling ahead helps confirm timing.",
    },
    {
      q: "Q3. Can I continue my allopathic medicines?",
      a: "Yes, patients should continue prescribed medicines and share the full list with the Ayurvedic doctor, who will guide any supportive care around it.",
    },
    {
      q: "Q4. What reports should I bring?",
      a: "Bring liver function tests, ultrasound, viral marker reports, endoscopy findings and discharge summaries, along with a list of current medicines.",
    },
    {
      q: "Q5. Is Panchakarma safe in cirrhosis?",
      a: "It is not suitable for everyone, and the doctor decides after assessing strength, stage and complications.",
    },
    {
      q: "Q6. Is there a free consultation?",
      a: "Free OPD is available on the 15th of every month at Balprada, and it is best to call before visiting.",
    },
    {
      q: "Q7. What diet is advised for liver patients?",
      a: "Guidance is individual, but it usually stresses light, easily digestible meals, controlled salt, good hydration and complete avoidance of alcohol.",
    },
    {
      q: "Q8. When should I go to a hospital emergency?",
      a: "Vomiting blood, black stools, severe confusion, extreme drowsiness or sudden abdominal swelling need immediate emergency care.",
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
                Liver Cirrhosis Treatment Ayurvedic in Rampur: Supportive Care
                at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Liver cirrhosis is a long-term condition in which healthy
                  liver tissue is gradually replaced by scar tissue, and
                  families in Rampur often begin searching for ayurvedic support
                  after conventional treatment has already started or when
                  symptoms keep returning.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji, and its liver and digestive care
                  programme is open to patients travelling from Rampur and
                  nearby districts.
                </li>
                <li>
                  Ayurveda approaches the liver through digestion, metabolism,
                  diet and daily routine, so care is planned around the whole
                  person rather than around a single test value or a single
                  medicine.
                </li>
                <li>
                  This page explains what liver cirrhosis is, how Balprada&apos;s
                  supportive Ayurvedic approach works, what a first visit looks
                  like and how patients from Rampur can reach the hospital.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Liver Cirrhosis
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What Happens in the Liver
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Cirrhosis develops slowly over months or years when the
                      liver is repeatedly injured, and the scar tissue that
                      forms makes it harder for blood to flow through the organ
                      and for the liver to do its normal work.
                    </li>
                    <li>
                      The liver supports digestion, metabolism, the processing
                      of nutrients and medicines, and immunity, so when it is
                      under strain, patients may notice effects across the whole
                      body and not only in the abdomen.
                    </li>
                    <li>
                      Early cirrhosis can be quiet, which is why many people
                      discover it only during a routine blood test or ultrasound
                      done for another reason.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Common Causes
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Long-term alcohol use, chronic hepatitis B or C infection
                      and fatty liver linked to obesity, diabetes or poor
                      metabolic health are among the commonly recognised causes
                      of cirrhosis.
                    </li>
                    <li>
                      Other contributors include autoimmune liver conditions,
                      bile duct problems, certain medicines taken for long
                      periods and inherited metabolic disorders, so identifying
                      the underlying cause is an important part of any care
                      plan.
                    </li>
                    <li>
                      A clear diagnosis from reports such as ultrasound and
                      liver function tests helps the doctor decide which
                      supportive steps are suitable for the individual patient.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Symptoms Patients Often Report
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Persistent tiredness, weakness, loss of appetite, nausea,
                      a feeling of heaviness after meals and unexplained weight
                      loss are frequently described by people living with liver
                      disease.
                    </li>
                    <li>
                      Yellowing of the eyes or skin, swelling in the feet or
                      abdomen, itching and easy bruising can indicate more
                      advanced involvement and need prompt medical attention.
                    </li>
                    <li>
                      Confusion, drowsiness, vomiting of blood or black stools
                      are warning signs, and patients with these symptoms should
                      go to the nearest emergency hospital immediately.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of Liver Health
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Digestion, Agni and Metabolism
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      In Ayurveda, the liver is closely linked with digestive
                      fire (agni) and with the body&apos;s metabolic processes,
                      so weak digestion, bloating and irregular appetite are
                      treated as important clues rather than minor complaints.
                    </li>
                    <li>
                      Balprada&apos;s liver and digestive care focuses on food
                      timing, routine correction and suitable herbal medicines
                      that aim to support digestion and overall metabolism
                      alongside the patient&apos;s ongoing medical care.
                    </li>
                    <li>
                      Because cirrhosis is a serious condition, the Ayurvedic
                      approach here is positioned as supportive and
                      complementary, and no outcome is promised or guaranteed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Individual Assessment Comes First
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Every patient is assessed individually, as two people with
                      cirrhosis can differ widely in cause, stage, appetite,
                      strength and other health conditions such as diabetes or
                      kidney concerns.
                    </li>
                    <li>
                      The doctor reviews the patient&apos;s history, current
                      symptoms, reports and ongoing medication before suggesting
                      any next step, which keeps the plan safe and personal.
                    </li>
                    <li>
                      Care is adjusted over time through follow-up, since a plan
                      that suits one month may need changes as the
                      patient&apos;s condition and strength change.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Patients with Liver Cirrhosis
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation and Report Review
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The first step is a consultation with the Ayurvedic team,
                      where the patient or family explains symptoms, how long
                      the problem has existed and what treatment has been taken
                      so far.
                    </li>
                    <li>
                      Patients are encouraged to bring recent reports such as
                      liver function tests, ultrasound, viral marker results and
                      any discharge summaries, so the doctor sees the complete
                      picture before advising anything.
                    </li>
                    <li>
                      Current medicines must be shared openly, because the team
                      needs to know what the patient is already taking before
                      suggesting any herbal support.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. In-House Herbal Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares and uses its own Ayurvedic medicines,
                      and the hospital describes the quality of its preparations
                      as a core strength built over more than three decades of
                      practice.
                    </li>
                    <li>
                      Herbal care is suggested only where suitable for the
                      individual patient, and doses and duration are guided by
                      the doctor rather than self-selected from the internet or
                      from other patients&apos; experiences.
                    </li>
                    <li>
                      Patients should never stop prescribed conventional
                      medicines on their own, and any change to the overall
                      treatment plan should be discussed with all treating
                      doctors.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Lifestyle Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Food discipline is central to liver care, and the team
                      gives practical guidance on meal timing, easily
                      digestible foods, hydration and avoiding items that burden
                      digestion.
                    </li>
                    <li>
                      Patients and families are advised on salt intake, since
                      swelling and fluid retention are common concerns, and on
                      the importance of regular small meals when appetite is
                      poor.
                    </li>
                    <li>
                      Alcohol should be avoided completely by anyone with liver
                      disease, and families are encouraged to support the
                      patient with a calm routine, adequate rest and consistent
                      sleep.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle practices such as yoga, meditation and naturopathy
                      are available at the ashram, and the doctor decides what
                      is suitable for each patient depending on strength and
                      stage.
                    </li>
                    <li>
                      Panchakarma therapies are planned only after individual
                      assessment, and they are not suitable for every patient,
                      particularly those who are weak or have advanced
                      complications.
                    </li>
                    <li>
                      Physiotherapy support helps patients who have lost
                      strength or mobility, making movement safer and helping
                      them rebuild stamina at a comfortable pace.
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
                      diagnostic testing support, which helps the team and the
                      patient track progress through regular tests.
                    </li>
                    <li>
                      Tests such as liver function tests and routine blood work
                      are commonly used to monitor how a patient is doing over
                      time, and results are discussed during follow-up visits.
                    </li>
                    <li>
                      Having testing and consultation in one place reduces
                      travel and delay for families coming from Rampur, which
                      matters when the patient is weak.
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
                      care, experienced doctors and a service-first spirit.
                    </li>
                    <li>
                      Patient reviews on the website describe knowledgeable
                      vaidyas, humble staff and a calm ashram setting, and the
                      hospital treats this atmosphere as part of the healing
                      environment.
                    </li>
                    <li>
                      The founder&apos;s vision of seva, or selfless service,
                      shapes how patients are received, with an emphasis on
                      listening carefully and explaining the care plan clearly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Peaceful Ashram Environment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The ashram setting offers a quiet space away from the
                      stress of city life, which many families find helpful
                      during a long and worrying illness.
                    </li>
                    <li>
                      Rest, routine and emotional steadiness are considered part
                      of recovery, and yoga and meditation are available to
                      support calm and restful sleep where appropriate.
                    </li>
                    <li>
                      Patients and attendants are welcomed in an atmosphere that
                      is disciplined yet warm, with guidance given in simple
                      language the family can follow at home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Convenient Access from Rampur
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Rampur lies close to the Moradabad region, so patients can
                      reach either the main branch near Bilari or the Moradabad
                      city branch without a long journey.
                    </li>
                    <li>
                      The Moradabad branch is easier for those travelling by
                      road or rail into the city, while the main branch offers
                      the full ashram experience.
                    </li>
                    <li>
                      Families are advised to call before travelling, especially
                      when the patient is weak or when a particular
                      doctor&apos;s availability is needed.
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
                      Collect all previous medical papers, including ultrasound,
                      blood tests, endoscopy reports and any hospital records,
                      and arrange them in date order so the consultation is
                      faster and clearer.
                    </li>
                    <li>
                      Prepare a list of every medicine currently taken,
                      including tablets, syrups and herbal products, along with
                      how long each has been used.
                    </li>
                    <li>
                      Bring a family member who knows the patient&apos;s history
                      well, as they can answer questions and remember the diet
                      and routine guidance that is given.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. During the Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor listens to the patient&apos;s concerns, reviews
                      the reports and asks about appetite, digestion, sleep,
                      swelling, energy and daily habits before explaining the
                      plan.
                    </li>
                    <li>
                      The care plan may include Ayurvedic medicines, diet
                      instructions, lifestyle correction and, where suitable,
                      supportive facilities such as yoga or naturopathy.
                    </li>
                    <li>
                      Questions are welcome, and families should ask about
                      expected follow-up timing, which signs need urgent
                      attention and how Ayurvedic care fits with ongoing medical
                      treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. After the Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up visits allow the team to observe
                      progress, adjust guidance and support long-term
                      discipline, which is especially important in a chronic
                      condition.
                    </li>
                    <li>
                      Repeat tests may be advised at suitable intervals so the
                      patient and doctor can review how the body is responding.
                    </li>
                    <li>
                      Any new or worsening symptom between visits should be
                      reported promptly, and emergency symptoms should always be
                      treated as a medical emergency first.
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
                  Liver cirrhosis is a serious medical condition, and Ayurvedic
                  care at Balprada is offered as supportive care alongside, not
                  as a replacement for, evaluation and treatment by a qualified
                  gastroenterologist or hepatologist.
                </li>
                <li>
                  Results vary from person to person, and no medicine, diet or
                  therapy can promise to reverse established scarring or to
                  guarantee a particular outcome.
                </li>
                <li>
                  Patients should avoid unverified home remedies, unregulated
                  herbal powders and alcohol, as some products can place
                  additional strain on an already weakened liver.
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
                        month, and families can use this day to meet the team
                        for a first discussion.
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