import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHeartDiseaseTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure heart disease?",
      a: "No. Ayurvedic care at Balprada is supportive and works alongside cardiology treatment, never in place of it.",
    },
    {
      q: "Q2. Should I stop my heart medicines?",
      a: "Never. Stopping heart medicines or blood thinners without your cardiologist&apos;s advice can be dangerous.",
    },
    {
      q: "Q3. What heart-related support does Balprada offer?",
      a: "Ayurvedic and lifestyle care for blood pressure, diabetes, obesity and stress.",
    },
    {
      q: "Q4. What should I do during chest pain?",
      a: "Treat it as an emergency and reach the nearest hospital immediately without trying home remedies.",
    },
    {
      q: "Q5. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q6. Which reports should I bring?",
      a: "ECG, echocardiogram, other heart reports, blood pressure and sugar records, prescriptions and medicines list.",
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
                Ayurvedic Heart Disease Treatment in Rampur – Supportive Heart
                and Lifestyle Care at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Support for Heart Health in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Heart disease affects millions of families across Uttar
                  Pradesh, and many people in Rampur look for gentle Ayurvedic
                  support that can work alongside their cardiologist&apos;s
                  treatment and help them live with more discipline, strength
                  and calm.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, and our Heart and Lifestyle Care
                  programme provides integrated Ayurvedic and lifestyle care
                  for blood pressure, diabetes, obesity and stress concerns.
                </li>
                <li>
                  Our care is supportive and personalised. It combines
                  consultation, in-house Ayurvedic medicines, diet guidance,
                  yoga and regular follow-up, and it is always planned with
                  your cardiologist&apos;s advice in mind.
                </li>
                <li>
                  This page explains how heart disease develops, which warning
                  signs need urgent care, how Balprada supports patients and
                  how families from Rampur can book a consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                An Honest Note About Ayurveda and Heart Disease
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Heart disease needs proper diagnosis, tests and treatment by
                  a qualified doctor, so Ayurveda should never replace
                  medicines, procedures or emergency care that your
                  cardiologist has advised.
                </li>
                <li>
                  Anyone who promises to clear blocked arteries or cure heart
                  disease completely with herbs alone is overstating what
                  natural care can do, and such promises can put lives at
                  risk.
                </li>
                <li>
                  Ayurvedic care can support the person in meaningful ways,
                  including diet, digestion, weight, stress, sleep, daily
                  routine and the long-term discipline that heart health
                  depends on.
                </li>
                <li>
                  At Balprada, our doctors explain clearly what supportive
                  care can offer and where cardiology treatment must lead, so
                  that patients and families decide with confidence.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Heart Disease
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Heart disease is a broad term that includes blocked or
                  narrowed arteries, high blood pressure related heart strain,
                  rhythm problems, weakened heart muscle and heart failure, and
                  each condition needs its own medical plan.
                </li>
                <li>
                  Many heart problems develop slowly over years through high
                  blood pressure, high cholesterol, diabetes, excess weight,
                  smoking, stress and a sedentary routine, which is why
                  lifestyle correction matters so much.
                </li>
                <li>
                  Some people feel no symptoms for a long time, and a heart
                  problem may be found only during a check-up, an ECG, an
                  echocardiogram or a blood test done for another reason.
                </li>
                <li>
                  The real goals of long-term care are to control risk factors,
                  follow prescribed treatment, prevent complications and
                  support a calmer, more active daily life.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Risk Factors Behind Heart Problems
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long-standing high blood pressure forces the heart to work
                  harder every day, and uncontrolled pressure is one of the
                  most important and most preventable risks.
                </li>
                <li>
                  Diabetes and high cholesterol can damage blood vessels over
                  the years, so steady sugar and cholesterol control are
                  central to protecting the heart.
                </li>
                <li>
                  Obesity, a sedentary lifestyle, irregular meals, heavy fried
                  food and excess salt add steady strain on the heart and blood
                  vessels.
                </li>
                <li>
                  Smoking, tobacco and heavy alcohol use directly harm the
                  heart and arteries, and stopping them is among the most
                  valuable steps any patient can take.
                </li>
                <li>
                  Chronic stress, poor sleep and family history can also raise
                  risk, so regular check-ups are wise even when you feel well.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need Immediate Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chest pain, pressure or heaviness, especially if it spreads
                  to the arm, jaw, neck or back, or comes with sweating, nausea
                  or breathlessness, needs emergency hospital care immediately.
                </li>
                <li>
                  Sudden severe breathlessness, fainting, a racing or irregular
                  heartbeat with dizziness, or sudden weakness on one side of
                  the body also needs urgent attention.
                </li>
                <li>
                  Swelling of the feet, rapid weight gain, tiredness on small
                  effort and difficulty lying flat can suggest that the heart
                  needs prompt assessment by a doctor.
                </li>
                <li>
                  Never wait at home or try herbal remedies during a suspected
                  heart attack. Call for emergency help and reach the nearest
                  hospital without delay.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Heart and Lifestyle Care
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya reviews your reports, such as ECG,
                      echocardiogram, blood pressure readings, sugar and
                      cholesterol tests, along with your current medicines,
                      history and daily habits, and explains the plan in simple
                      language.
                    </li>
                    <li>
                      The plan is shaped around your strength, weight,
                      digestion, sleep and routine, because heart patients need
                      steady, practical guidance that they can follow
                      comfortably at home.
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
                      current heart medicines, so that care remains responsible
                      and coordinated with your cardiologist.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Lifestyle Correction
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors give practical guidance on food, activity,
                      sleep and stress habits that support heart and metabolic
                      health, using fresh, simple and balanced meals.
                    </li>
                    <li>
                      Patients receive help with the day-to-day habits that
                      matter most, including meal timing, salt and oil control,
                      weight management and a steady walking routine.
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
                      doctor permits, help reduce stress, support sleep and
                      build the calm that long-term heart care needs.
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
                    5. Working Together with Your Cardiologist
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Tell your cardiologist about every Ayurvedic medicine,
                      herbal product or supplement you plan to take, because
                      some products can interact with blood thinners, blood
                      pressure tablets or other heart medicines.
                    </li>
                    <li>
                      Share your prescriptions, reports and any hospital
                      discharge papers with the Balprada vaidya, so that
                      supportive care is planned safely around your treatment.
                    </li>
                    <li>
                      Never stop or change heart medicines, blood thinners or
                      blood pressure tablets without your cardiologist&apos;s
                      advice, even if you feel better.
                    </li>
                    <li>
                      Avoid unknown herbal powders, concentrated extracts and
                      high-dose supplements recommended by social media or
                      neighbours, because some can raise or lower blood
                      pressure or affect heart rhythm.
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
                    1. Blood Pressure
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care that supports
                      salt control, weight, stress, sleep and steady
                      monitoring, alongside your prescribed blood pressure
                      treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Diabetes and Thyroid Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Personalised support for blood sugar, hypothyroidism,
                      hyperthyroidism, energy, weight and metabolic balance,
                      because steady sugar and thyroid control protect the
                      heart over time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Obesity and Weight Management
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Practical guidance on food, activity and daily routine
                      that helps patients move toward a healthier weight in a
                      safe, gradual and sustainable way.
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
                      Bring ECG, echocardiogram, blood pressure records, sugar
                      and cholesterol reports, prescriptions and hospital
                      papers, so the doctor can understand your present
                      condition clearly.
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
                      cardiologist.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, meditation, naturopathy, physiotherapy and
                      pathology support are added where they suit your
                      condition and strength, helping patients stay active and
                      track progress with reliable tests.
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
                Heart-Friendly Diet Guidance
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the diet advice given by your cardiologist first, and
                  let Ayurvedic food guidance work within it so that nutrition
                  remains safe for your condition.
                </li>
                <li>
                  Reduce salt, pickles, papad, packaged snacks and processed
                  food, because excess sodium raises blood pressure and
                  increases swelling in patients with weak hearts.
                </li>
                <li>
                  Limit fried, oily and sugary foods, and prefer fresh
                  vegetables, fruits, whole grains, pulses and simple
                  home-cooked meals taken at regular times.
                </li>
                <li>
                  Avoid heavy dinners and late-night eating, and keep portions
                  moderate so that digestion remains light and the body is not
                  overburdened.
                </li>
                <li>
                  Drink fluids as your doctor advises, because patients with
                  heart failure or swelling may need fluid limits that differ
                  from the general advice.
                </li>
                <li>
                  Avoid tobacco and alcohol completely, and do not begin
                  special diets or supplements without discussing them with
                  your doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Protect the Heart
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Walk gently every day for as long as your doctor permits, and
                  increase activity slowly, since regular movement supports
                  weight, sugar control and heart strength.
                </li>
                <li>
                  Practise yoga, pranayama and meditation only as advised for
                  your condition, and avoid strenuous or breath-holding
                  practices without medical approval.
                </li>
                <li>
                  Check blood pressure and blood sugar regularly at home or at
                  a clinic, and keep a simple record to show your doctors at
                  each visit.
                </li>
                <li>
                  Sleep on time, manage stress through quiet rest, prayer or
                  meditation, and make time for family, because emotional
                  wellbeing supports heart health.
                </li>
                <li>
                  Attend every follow-up visit and repeat test on schedule,
                  since regular monitoring helps catch problems early and keeps
                  treatment on track.
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
                      doctor monitor sugar, cholesterol and other markers, and
                      saves patients the effort of moving between multiple
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
                      which is useful for patients returning to activity after
                      illness.
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
                  that cardiology treatment and emergency care must continue as
                  advised.
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
                  Carry your ECG, echocardiogram, angiography or other heart
                  reports, blood pressure and sugar records, prescriptions and
                  a list of every medicine and supplement you take.
                </li>
                <li>
                  Note your symptoms, breathlessness, swelling, sleep, weight
                  and energy levels, and write down your questions about diet,
                  medicines and follow-up.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and bring a
                  family member who helps with meals, medicines and hospital
                  visits.
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