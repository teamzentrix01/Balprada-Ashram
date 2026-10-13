import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaLiverFailureTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda treat liver failure?",
      a: "Ayurvedic care at Balprada is supportive, focusing on diet, medicines and lifestyle, and it does not replace specialist or emergency treatment.",
    },
    {
      q: "Q2. Is liver failure an emergency?",
      a: "Sudden liver failure is an emergency. Confusion, vomiting blood or severe drowsiness needs immediate hospital care.",
    },
    {
      q: "Q3. Should I stop my current medicines?",
      a: "Never. Stopping prescribed medicines without your treating doctor&apos;s advice can be dangerous.",
    },
    {
      q: "Q4. Does Balprada treat fatty liver and jaundice?",
      a: "Yes. We offer supportive care for fatty liver, jaundice and weak digestion.",
    },
    {
      q: "Q5. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q6. Which reports should I bring?",
      a: "Liver function tests, ultrasound or scans, prescriptions and a list of all medicines.",
    },
    {
      q: "Q7. Are tests available at Balprada?",
      a: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing.",
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
                Ayurvedic Liver Failure Treatment in Rampur – Supportive Liver
                Care at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Support for Serious Liver Conditions in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Liver failure and advanced liver disease are serious
                  conditions, and families in Rampur, Uttar Pradesh often look
                  for gentle Ayurvedic support that can work alongside proper
                  medical monitoring, reports and specialist advice.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, and our Liver and Digestive Care
                  programme provides medicine, diet and routine-based care for
                  liver health, fatty liver, jaundice and weak digestion.
                </li>
                <li>
                  Care at Balprada is supportive and personalised. It combines
                  consultation, in-house Ayurvedic medicines, diet discipline
                  and regular follow-up, and it is always planned with your
                  treating doctor&apos;s advice in mind.
                </li>
                <li>
                  This page explains how the liver works, what warning signs
                  matter, how Balprada supports patients and families, and when
                  urgent hospital care is essential.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Liver and Liver Failure
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The liver is one of the body&apos;s most important organs. It
                  helps digest food, process medicines, store energy, make
                  proteins and clear toxins, so any serious damage affects the
                  whole body.
                </li>
                <li>
                  Liver failure means the liver can no longer perform these
                  tasks well enough. It can develop suddenly over days or
                  weeks, or slowly over years after long-standing liver damage.
                </li>
                <li>
                  Sudden liver failure is a medical emergency that needs
                  immediate hospital care, while chronic liver disease usually
                  needs careful long-term monitoring by a doctor with regular
                  tests and scans.
                </li>
                <li>
                  Liver reports such as bilirubin, SGOT, SGPT, albumin and
                  clotting tests, along with ultrasound, help doctors judge how
                  the liver is working, so please carry all of them to your
                  consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long-standing fatty liver linked with obesity, diabetes and
                  an inactive lifestyle can slowly progress to serious liver
                  damage if it is ignored for years.
                </li>
                <li>
                  Heavy or regular alcohol use is a major cause of liver injury,
                  and the safest step for anyone with liver disease is to stop
                  alcohol completely.
                </li>
                <li>
                  Viral hepatitis, jaundice and other infections can inflame
                  the liver, and some medicines, painkillers and unregulated
                  supplements or herbal products may also harm it.
                </li>
                <li>
                  Poor diet, irregular meals, weak digestion and long-standing
                  metabolic problems can add to the burden on the liver over
                  time.
                </li>
                <li>
                  Because causes differ, treatment begins with proper tests and
                  assessment, and not with a standard remedy for every patient.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need Prompt Attention
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yellowing of the eyes or skin, dark urine and pale stools can
                  point to jaundice and should be assessed by a doctor without
                  delay.
                </li>
                <li>
                  Swelling in the abdomen or legs, sudden weight changes and
                  persistent nausea, vomiting or loss of appetite are signs
                  that the liver or related organs may need urgent assessment.
                </li>
                <li>
                  Extreme tiredness, itching, easy bruising or bleeding, and
                  black or bloody stools can indicate serious liver problems.
                </li>
                <li>
                  Confusion, unusual sleepiness, personality changes or
                  difficulty staying awake are emergency signs and need
                  immediate hospital care.
                </li>
                <li>
                  Anyone with these signs should seek medical care first, and
                  Ayurvedic consultation can follow as supportive guidance once
                  the situation is stable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Liver Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya reviews your liver reports, scans, history,
                      current medicines and daily habits before suggesting the
                      next care step, and explains the plan in simple language
                      so that families understand what to expect.
                    </li>
                    <li>
                      The plan is shaped around your digestion, strength,
                      appetite and routine, because liver patients often need
                      gentle, step-by-step guidance and not aggressive
                      treatment.
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
                      because Ayurveda sees digestion, food and routine as
                      central to liver health.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Honest and Responsible Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      We do not promise a guaranteed cure for liver failure. Our
                      focus is supportive care, symptom comfort, diet
                      discipline and steady follow-up alongside medical
                      treatment.
                    </li>
                    <li>
                      Patients are asked to share every medicine and supplement
                      they take, because some herbal products can harm the
                      liver when taken without proper guidance.
                    </li>
                    <li>
                      Patients under a hepatologist or gastroenterologist should
                      continue their prescribed treatment and keep both teams
                      informed about their care.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Liver and Digestive Conditions We Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Fatty Liver
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicine, diet and routine-based care for fatty liver,
                      with practical guidance on food, weight, activity and
                      sugar control that patients can follow comfortably at
                      home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Jaundice
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Careful assessment and supportive guidance for jaundice,
                      with attention to light, easily digestible food, rest and
                      regular tests, and with urgent referral advice whenever
                      warning signs appear.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Weak Digestion
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Digestive strength is treated as the foundation of
                      health, so meal timing, food choices, bloating, acidity
                      and appetite are reviewed during consultation and
                      corrected through diet and routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Liver Health in Chronic Illness
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients with long-standing liver concerns receive regular
                      follow-up, so the vaidya can observe progress, track
                      reports and adjust guidance as the body responds.
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
                      Bring liver function tests, ultrasound or other scans,
                      prescriptions and earlier reports, so the doctor can
                      understand your present condition and explain the next
                      care step clearly.
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
                      suitable, while respecting any restrictions advised by
                      your treating specialist.
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
                      they suit your condition and strength, helping patients
                      build discipline, manage stress and track progress with
                      reliable tests.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Regular Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up visits help the team observe progress, adjust
                      guidance and support long-term discipline, while repeat
                      tests at Balprada Pathology Lab show how the body is
                      responding.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidance for Liver Patients
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the personalised diet chart prepared for you, because
                  liver diets differ by condition, swelling, digestion, blood
                  sugar and the stage of liver disease.
                </li>
                <li>
                  Eat light, fresh, home-cooked meals at regular times, and
                  avoid skipping meals or eating late at night, since a steady
                  routine supports weak digestion.
                </li>
                <li>
                  Avoid fried, oily, spicy, packaged and heavy foods that
                  burden the liver and digestive system, and reduce sugary
                  drinks and sweets, especially with fatty liver or diabetes.
                </li>
                <li>
                  Limit salt as advised, because extra sodium can worsen
                  swelling and fluid build-up in patients with advanced liver
                  problems.
                </li>
                <li>
                  Never take alcohol, and do not start supplements, powders or
                  herbal remedies from unverified sources without your
                  doctor&apos;s advice.
                </li>
                <li>
                  Protein needs vary in liver disease, so take the amount your
                  doctor or dietitian suggests instead of guessing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Liver Health
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Stop alcohol completely if you have any liver disease, because
                  even small amounts can add stress to a damaged liver.
                </li>
                <li>
                  Maintain a healthy weight through gentle daily activity such
                  as walking, and practise light yoga and breathing exercises
                  as your doctor permits.
                </li>
                <li>
                  Control blood sugar, cholesterol and blood pressure through
                  prescribed treatment, since metabolic problems are closely
                  linked with fatty liver and long-term liver damage.
                </li>
                <li>
                  Avoid self-medication, especially painkillers and unknown
                  tablets, and always tell every doctor about all the medicines
                  and supplements you use.
                </li>
                <li>
                  Sleep on time, manage stress through meditation or quiet
                  rest, and attend every follow-up visit and repeat test on
                  schedule.
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
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Go to the nearest hospital emergency immediately for
                  confusion, extreme drowsiness, vomiting blood, black stools,
                  severe abdominal pain, high fever or rapidly worsening
                  yellowing of the eyes and skin.
                </li>
                <li>
                  Liver failure can worsen quickly, and emergency treatment or
                  specialist procedures may be necessary to protect life, so
                  never delay hospital care for any other treatment.
                </li>
                <li>
                  Ayurvedic care supports patients during stable phases and
                  recovery. It should never delay or replace urgent treatment
                  advised by your doctor.
                </li>
              </ul>
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
                  when specialist or emergency care must take priority.
                </li>
                <li>
                  <span className="font-semibold">Whole-person care:</span>{" "}
                  medicines, diet, yoga, pathology support and follow-up are
                  planned together as one connected journey.
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
                  Carry all liver function tests, ultrasound or scan reports,
                  prescriptions and a list of every medicine and supplement you
                  take, along with any hospital discharge papers.
                </li>
                <li>
                  Note your symptoms, appetite, weight, urine and stool changes
                  and swelling, and write down your questions about diet,
                  medicines and follow-up.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and bring a
                  family member who helps with your meals and daily care.
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