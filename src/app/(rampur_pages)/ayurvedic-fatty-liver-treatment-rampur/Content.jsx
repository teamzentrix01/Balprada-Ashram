import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaFattyLiverTreatment() {
  const faqs = [
    {
      q: "Q1. Is Ayurvedic fatty liver treatment available near Rampur?",
      a: "Yes, patients from Rampur can consult at the main branch near Bilari or the Moradabad branch, and calling ahead helps confirm timing.",
    },
    {
      q: "Q2. Can Ayurveda cure fatty liver?",
      a: "Outcomes vary, so no honest treatment can promise a cure; Balprada offers supportive care through diet, routine and monitored herbal medicines.",
    },
    {
      q: "Q3. What reports should I bring?",
      a: "Bring your ultrasound, liver function test, blood sugar and lipid reports, along with a list of current medicines.",
    },
    {
      q: "Q4. Do I need to change my diet?",
      a: "Yes, food guidance is central to care, and the doctor gives advice suited to your weight, sugar levels and eating habits.",
    },
    {
      q: "Q5. Is exercise necessary?",
      a: "Regular activity, such as daily walking and suitable yoga, is usually encouraged, with intensity adjusted to your health and age.",
    },
    {
      q: "Q6. Can I continue my allopathic medicines?",
      a: "Yes, continue prescribed medicines and share the full list with the Ayurvedic doctor.",
    },
    {
      q: "Q7. Is Panchakarma suitable for fatty liver?",
      a: "It depends on the individual, and the doctor decides after assessment.",
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
                Ayurvedic Fatty Liver Treatment in Rampur: Supportive Care at
                Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fatty liver is one of the most common liver concerns today,
                  and many people in Rampur discover it by chance when an
                  ultrasound or blood test is done for another reason, often
                  without any clear symptoms.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, built on the seva sankalp of Sw.
                  Vaidya Vijay Pal Singh Ji, and fatty liver is one of the
                  conditions listed under its Liver and Digestive Care
                  programme.
                </li>
                <li>
                  Balprada describes its approach to fatty liver as lifestyle
                  correction and guided Ayurvedic care that supports liver
                  metabolism, which means food, routine and daily habits are
                  treated as seriously as medicines.
                </li>
                <li>
                  This page explains what fatty liver is, how Ayurveda views
                  it, what Balprada&apos;s supportive plan includes and how
                  patients from Rampur can reach the hospital.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Fatty Liver
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What Fatty Liver Means
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fatty liver means that extra fat has built up inside
                      liver cells, and a small amount of fat is normal, but a
                      larger build-up can interfere with how the liver
                      processes food, sugar and fats.
                    </li>
                    <li>
                      Doctors often describe it in grades, usually grade 1 to
                      grade 3, based on ultrasound findings, and the grade
                      helps explain how much fat is present but does not tell
                      the whole story of a person&apos;s health.
                    </li>
                    <li>
                      Left unmanaged for years, fatty liver can progress to
                      inflammation and scarring in some people, which is why
                      early attention to diet and routine is considered so
                      valuable.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Common Causes and Risk Factors
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Excess body weight, a sedentary routine, diabetes or high
                      blood sugar, high cholesterol and high triglycerides are
                      among the most common risk factors for non-alcoholic
                      fatty liver.
                    </li>
                    <li>
                      Regular alcohol use can cause alcohol-related fatty
                      liver, and certain medicines, rapid weight changes and
                      irregular eating patterns can also contribute in some
                      individuals.
                    </li>
                    <li>
                      Balprada&apos;s liver care links liver health with
                      weight, sugar balance and daily routine, so the plan
                      often looks at these connected areas together rather than
                      treating the liver in isolation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Symptoms and Silent Signs
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Many patients feel nothing at all, and the condition is
                      found only on a scan, so the absence of symptoms should
                      not be taken as proof that the liver is fine.
                    </li>
                    <li>
                      When symptoms do appear, they commonly include tiredness,
                      a heavy or full feeling in the upper right abdomen,
                      bloating, poor digestion and a general sense of low
                      energy.
                    </li>
                    <li>
                      Yellowing of the eyes, swelling of the legs or abdomen,
                      vomiting of blood or black stools are not typical of
                      simple fatty liver and need urgent medical attention.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of Fatty Liver
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Yakrit Vikar and Medoroga
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      In Ayurvedic literature, liver disorders are described
                      under Yakrit Vikar, and conditions involving excess fat
                      and heaviness are discussed under Medoroga, so fatty
                      liver is often understood as a meeting point of both.
                    </li>
                    <li>
                      This view explains why Ayurvedic care for fatty liver
                      gives so much attention to digestion, body weight, food
                      quality and activity levels along with any herbal
                      support.
                    </li>
                    <li>
                      These traditional concepts guide diet and routine
                      planning at Balprada, and they are used alongside, not
                      instead of, modern tests and medical advice.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Agni and Metabolism
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurveda places digestion, called agni, at the centre of
                      metabolism, and weak or irregular digestion is considered
                      one reason the body may struggle to process fats and
                      sugars properly.
                    </li>
                    <li>
                      Balprada&apos;s Weak Digestion and Metabolic Imbalance
                      care areas sit next to its fatty liver care for this
                      reason, since food timing, routine and suitable medicines
                      work on the same digestive foundation.
                    </li>
                    <li>
                      The goal is to support liver metabolism through steady
                      habits, and no particular result, such as reduced fat
                      grade, can be promised to any patient.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Patients with Fatty Liver
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation and Assessment
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The first step is a consultation in which the doctor
                      listens to the patient&apos;s symptoms, eating pattern,
                      daily activity, sleep and family history, and asks about
                      diabetes, thyroid or cholesterol problems.
                    </li>
                    <li>
                      Patients are encouraged to bring their ultrasound report,
                      liver function tests, sugar and lipid profile and any
                      previous prescriptions, so the doctor can understand how
                      long the problem has existed and what has already been
                      tried.
                    </li>
                    <li>
                      All current medicines, including allopathic tablets and
                      any herbal products taken at home, should be shared
                      openly so that nothing is combined unsafely.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. In-House Herbal Medicines
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada uses its own in-house herbal medicines, and the
                      hospital presents the quality of its preparations as a
                      core strength developed over more than three decades.
                    </li>
                    <li>
                      Herbal care is suggested only when suitable for the
                      individual, and the doctor decides the dose, duration and
                      combination, so patients should not choose liver herbs by
                      themselves from the internet.
                    </li>
                    <li>
                      Patients should never stop prescribed medicines for
                      diabetes, cholesterol or blood pressure without speaking
                      to the doctor who prescribed them.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Food discipline is the backbone of fatty liver care, and
                      the team guides patients toward freshly cooked, simple
                      meals taken at regular times, with more vegetables, whole
                      grains and pulses and less fried, sugary and packaged
                      food.
                    </li>
                    <li>
                      Patients are usually advised to cut down sweets, sugary
                      drinks, bakery items and excess ghee or oil, and to avoid
                      late-night heavy meals that strain digestion.
                    </li>
                    <li>
                      Alcohol should be avoided completely, and families are
                      encouraged to cook together so that the whole household
                      supports the same healthier pattern.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Routine and Movement
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Daily routine correction means fixed meal times, adequate
                      sleep and regular physical activity such as walking,
                      which many patients find easier to maintain than a strict
                      gym schedule.
                    </li>
                    <li>
                      Yoga and breathing practices are available at the ashram,
                      and the doctor suggests suitable ones depending on age,
                      weight and any joint or heart concerns.
                    </li>
                    <li>
                      Gradual, sustainable weight management is encouraged over
                      crash dieting, since very rapid weight loss can itself
                      stress the liver.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy, meditation and physiotherapy are available
                      at Balprada, and they help patients who need a structured
                      way to begin moving, relaxing and building healthier
                      habits.
                    </li>
                    <li>
                      Panchakarma therapies are planned only after individual
                      assessment, and they are not suitable for every patient
                      or every stage of illness.
                    </li>
                    <li>
                      These facilities work together with consultation and
                      medicines so that care covers body, mind and lifestyle,
                      as described on the hospital&apos;s facilities page.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Pathology Lab Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Pathology Lab provides blood, urine and
                      diagnostic testing support, which helps patients track
                      liver function, sugar and lipid values at suitable
                      intervals.
                    </li>
                    <li>
                      Reviewing test results at follow-up visits makes it
                      easier for the doctor to adjust diet and routine advice
                      and for the patient to see how habits are affecting the
                      numbers.
                    </li>
                    <li>
                      Having consultation and testing in one place saves time
                      and travel for families coming from Rampur.
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
                      Patient reviews on the website mention knowledgeable
                      vaidyas, humble staff and a calm ashram setting, which
                      the hospital sees as part of the healing environment.
                    </li>
                    <li>
                      The founder&apos;s vision of seva continues to shape how
                      patients are received, with careful listening and clear
                      explanation of the care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Disciplined, Practical Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The care process moves from consultation to an Ayurvedic
                      plan, then supportive facilities and regular follow-up,
                      so patients know what to expect at each stage.
                    </li>
                    <li>
                      Advice is given in simple language that families can
                      follow at home, since fatty liver care depends far more
                      on daily habits than on a single visit.
                    </li>
                    <li>
                      Follow-up visits help the team observe progress, adjust
                      guidance and support long-term discipline, which is the
                      hardest part for most patients.
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
                      by road or rail into the city, while the main branch
                      offers the fuller ashram experience.
                    </li>
                    <li>
                      Families are advised to call before travelling,
                      especially if they need a specific vaidya&apos;s
                      availability.
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
                      Collect your recent ultrasound, liver function test,
                      blood sugar and cholesterol reports and arrange them by
                      date so the doctor can read the history quickly.
                    </li>
                    <li>
                      Write down your usual daily meals, snacks, tea or sugar
                      intake and activity level for a typical week, since this
                      information helps the doctor give practical advice.
                    </li>
                    <li>
                      Make a list of all current medicines and supplements,
                      with how long each has been taken.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. During the Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews your reports and symptoms, asks about
                      habits and then explains the suggested plan in plain
                      language, including diet changes and any herbal
                      medicines.
                    </li>
                    <li>
                      Questions are welcome, and patients should ask how often
                      to return, which tests to repeat and which symptoms need
                      urgent medical attention.
                    </li>
                    <li>
                      The plan may include Ayurvedic medicines, food guidance,
                      lifestyle correction and supportive facilities where
                      suitable.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. After the Visit
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up is encouraged because fatty liver
                      improves, when it does, through steady habits sustained
                      over time rather than through short bursts of effort.
                    </li>
                    <li>
                      Repeat tests and scans may be advised at sensible
                      intervals so the patient and doctor can review progress
                      together.
                    </li>
                    <li>
                      Any new or worsening symptom between visits should be
                      reported promptly, and emergency symptoms should be
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
                  Fatty liver can coexist with diabetes, heart disease and
                  other serious conditions, so Ayurvedic care at Balprada is
                  offered as supportive care and does not replace evaluation
                  and treatment by a qualified medical doctor.
                </li>
                <li>
                  Results vary between individuals, and no medicine, diet or
                  therapy can guarantee that fat will reduce or that the
                  condition will not progress.
                </li>
                <li>
                  Patients should avoid unverified home remedies, unregulated
                  herbal powders and crash diets, as some can add strain to the
                  liver.
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