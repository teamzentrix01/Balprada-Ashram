import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaDiabetesAyurvedicTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure diabetes?",
      a: "No. Ayurvedic care at Balprada is supportive and works alongside your doctor&apos;s treatment, never in place of it.",
    },
    {
      q: "Q2. Should I stop insulin or tablets?",
      a: "Never. Stopping or reducing diabetes medicines without your doctor&apos;s advice can be dangerous.",
    },
    {
      q: "Q3. What does Balprada offer for diabetes?",
      a: "Personalised support for blood sugar, weight, energy and metabolic balance through diet, medicines and follow-up.",
    },
    {
      q: "Q4. Does Balprada treat thyroid problems too?",
      a: "Yes. We offer support for hypothyroidism and hyperthyroidism within our Diabetes and Thyroid Care programme.",
    },
    {
      q: "Q5. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q6. Which reports should I bring?",
      a: "Sugar records, HbA1c, kidney, thyroid and cholesterol reports, prescriptions and a list of medicines.",
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
                Diabetes Ayurvedic Treatment in Rampur – Supportive Diabetes
                and Thyroid Care at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Support for Diabetes in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diabetes is one of the most common long-term health
                  conditions in Uttar Pradesh, and many families in Rampur look
                  for gentle Ayurvedic support that can work alongside their
                  doctor&apos;s treatment and help them build lasting
                  discipline around food, routine and stress.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, and our Diabetes and Thyroid Care
                  programme provides personalised support for blood sugar,
                  energy, weight and metabolic balance.
                </li>
                <li>
                  Our care is supportive and personalised. It combines
                  consultation, in-house Ayurvedic medicines, diet guidance,
                  yoga and regular follow-up, and it is always planned with
                  your diabetes doctor&apos;s advice in mind.
                </li>
                <li>
                  This page explains how diabetes affects the body, which
                  warning signs need urgent care, how Balprada supports
                  patients and how families from Rampur can book a
                  consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                An Honest Note About Ayurveda and Diabetes
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diabetes needs regular testing and treatment under a
                  qualified doctor, so Ayurveda should never replace insulin,
                  tablets or any medicine that your doctor has prescribed.
                </li>
                <li>
                  Anyone who promises to cure diabetes permanently or to stop
                  your medicines within days is overstating what natural care
                  can do, and such promises can lead to dangerous sugar levels.
                </li>
                <li>
                  Ayurvedic care can support the person in meaningful ways,
                  including diet, digestion, weight, stress, sleep, daily
                  routine and the long-term discipline that sugar control
                  depends on.
                </li>
                <li>
                  At Balprada, our doctors explain clearly what supportive care
                  can offer and where medical treatment must continue, so that
                  patients and families make safe decisions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Diabetes
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diabetes occurs when the body cannot make enough insulin or
                  cannot use insulin properly, so sugar stays high in the blood
                  instead of being used as energy by the body.
                </li>
                <li>
                  Type 2 diabetes is the most common form and often develops
                  slowly with weight gain, inactivity, family history and an
                  unbalanced diet, which is why lifestyle correction is so
                  important.
                </li>
                <li>
                  Many people feel no symptoms in the early years, and diabetes
                  may be found only through a routine blood test, which makes
                  regular check-ups valuable for adults.
                </li>
                <li>
                  Long-standing high sugar can affect the kidneys, eyes, nerves,
                  heart and feet, so steady control and regular monitoring
                  protect the whole body over the years.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Risk Factors and Early Signs
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Family history, excess weight, a sedentary lifestyle,
                  irregular meals and a diet high in sugar, refined flour and
                  fried food increase the chances of developing diabetes.
                </li>
                <li>
                  High blood pressure, high cholesterol, thyroid problems and
                  long-term stress are often seen together with diabetes and
                  need to be managed together.
                </li>
                <li>
                  Frequent urination, increased thirst, constant hunger,
                  tiredness, blurred vision and slow healing of wounds can be
                  signs of high blood sugar and deserve proper testing.
                </li>
                <li>
                  Unexplained weight loss, tingling in the feet and repeated
                  infections should also be reported to a doctor without delay.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Extreme thirst, repeated vomiting, deep fast breathing,
                  confusion or drowsiness can signal a dangerous complication
                  and needs immediate hospital care.
                </li>
                <li>
                  Sweating, shaking, sudden weakness or fainting may mean low
                  blood sugar, which can happen with insulin or tablets and
                  needs quick treatment as your doctor has taught you.
                </li>
                <li>
                  A foot wound that does not heal, spreading redness, severe
                  swelling or fever needs prompt medical attention, because
                  infections can worsen quickly in diabetes.
                </li>
                <li>
                  Never try to manage emergencies with herbal remedies at home.
                  Reach the nearest hospital without delay.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Diabetes Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya reviews your fasting and post-meal sugar,
                      HbA1c, kidney and cholesterol reports, along with your
                      current medicines, history and daily habits, and explains
                      the plan in simple language.
                    </li>
                    <li>
                      The plan is shaped around your weight, digestion,
                      strength, sleep and routine, because every patient lives
                      differently and needs practical guidance they can follow
                      at home.
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
                      Ayurvedic medicines are planned only after reviewing your
                      current diabetes medicines, because some herbal products
                      can lower sugar further and cause unsafe lows when
                      combined with tablets or insulin.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Lifestyle Correction
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors give practical guidance on meal timing,
                      portion size, food choices, activity and sleep that
                      support steady sugar levels and healthy weight.
                    </li>
                    <li>
                      Patients receive help with the day-to-day habits that
                      matter most, including regular walking, controlled sweets
                      and refined foods, and a calm daily routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Stress and Emotional Balance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle yoga, pranayama and meditation, practised as your
                      doctor permits, help reduce stress, which can raise blood
                      sugar, and support better sleep and energy.
                    </li>
                    <li>
                      Balprada&apos;s founder emphasised positivity as part of
                      recovery, and our team supports patients and families
                      with patience, encouragement and hope.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Working Together with Your Diabetes Doctor
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Tell your doctor about every Ayurvedic medicine, herbal
                      product or supplement you plan to take, because some can
                      interact with diabetes medicines and change sugar levels.
                    </li>
                    <li>
                      Share your prescriptions, HbA1c and sugar records with
                      the Balprada vaidya, so that supportive care is planned
                      safely around your treatment.
                    </li>
                    <li>
                      Never stop or reduce insulin or diabetes tablets on your
                      own, even if your sugar seems controlled. Only your
                      doctor should change doses after reviewing your reports.
                    </li>
                    <li>
                      Avoid unknown herbal powders, juices and miracle remedies
                      promoted on social media, because some are unsafe,
                      unregulated or cause sudden changes in blood sugar.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Related Conditions We Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Thyroid Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Personalised support for hypothyroidism and
                      hyperthyroidism, energy, weight and metabolic balance,
                      because thyroid and sugar problems often affect each
                      other.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Diabetes-Related Kidney Concern
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes-related kidney stress is approached through
                      diet, sugar control and regular follow-up, because steady
                      sugar levels are among the most useful steps for
                      protecting the kidneys.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Obesity, Blood Pressure and Stress
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care for weight, blood
                      pressure and stress, which commonly occur together with
                      diabetes and need joint management.
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
                      Bring your sugar records, HbA1c, kidney and cholesterol
                      reports, prescriptions and a list of all medicines, so
                      that the doctor can understand your present condition
                      clearly.
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
                      suitable, while respecting every instruction from your
                      diabetes doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, meditation, naturopathy and pathology support are
                      added where they suit your condition and strength,
                      helping patients stay active and track progress with
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
                      guidance and support long-term discipline, with repeat
                      tests at Balprada Pathology Lab when advised.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diabetes-Friendly Diet Guidance
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the diet advice given by your doctor or dietitian
                  first, and let Ayurvedic food guidance work within it so that
                  nutrition remains safe, especially if you take insulin or
                  tablets.
                </li>
                <li>
                  Eat fresh, simple, home-cooked meals at regular times, and
                  avoid long gaps or skipped meals, which can cause sugar
                  swings in patients on medicines.
                </li>
                <li>
                  Reduce sugar, sweets, sweet drinks, refined flour, bakery
                  items and deep-fried snacks, and prefer vegetables, pulses,
                  whole grains and fibre-rich foods in sensible portions.
                </li>
                <li>
                  Keep portions moderate, avoid heavy late-night dinners, and
                  take a short walk after meals if your doctor approves, as it
                  supports digestion and sugar control.
                </li>
                <li>
                  Drink enough water through the day unless your doctor has
                  limited fluids for another condition such as kidney or heart
                  disease.
                </li>
                <li>
                  Avoid tobacco and alcohol, and discuss any fasting or special
                  diet with your doctor before starting, because fasting can
                  cause low sugar.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Sugar Control
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Walk daily for at least as long as your doctor recommends,
                  and increase activity gradually, since regular movement
                  improves how the body uses insulin.
                </li>
                <li>
                  Practise yoga, pranayama and meditation only as advised for
                  your condition, and avoid strenuous practices if you have
                  eye, heart or foot complications.
                </li>
                <li>
                  Check blood sugar at the times your doctor suggests and keep
                  a simple record, which helps the doctor and vaidya adjust
                  guidance accurately.
                </li>
                <li>
                  Take care of your feet daily by checking for cuts, wearing
                  comfortable footwear and treating small wounds early.
                </li>
                <li>
                  Sleep on time, manage stress through quiet rest or
                  meditation, and attend every follow-up visit, eye check and
                  repeat test on schedule.
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
                      doctor monitor sugar, kidney function and other markers,
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
                      Gentle yoga and guided meditation build calm and
                      discipline, while naturopathy offers simple, nature-led
                      routines that work with the body&apos;s natural healing
                      capacity.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Physiotherapy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Professional physiotherapy supports safe movement,
                      mobility and strength alongside the wider care plan,
                      which helps patients stay active and keep weight under
                      control.
                    </li>
                  </ul>
                </div>
              </div>
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
                  patients are told clearly what supportive care can offer and
                  that diabetes medicines must continue as advised by their
                  doctor.
                </li>
                <li>
                  <span className="font-semibold">Whole-person care:</span>{" "}
                  medicines, diet, yoga, pathology support and follow-up are
                  planned together as one connected journey.
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
                Tips Before Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Carry your sugar records, HbA1c, kidney, thyroid and
                  cholesterol reports, prescriptions and a list of every
                  medicine and supplement you take.
                </li>
                <li>
                  Note your symptoms, weight, appetite, sleep and energy
                  levels, and write down your questions about diet, medicines
                  and follow-up.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, have your
                  regular medicines and meals as your doctor advises, and bring
                  a family member who helps with meals.
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