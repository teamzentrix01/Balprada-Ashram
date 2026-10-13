import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaDialysisAlternativeAyurvedicCare() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda replace dialysis?",
      a: "No. Ayurveda is supportive care and should not replace dialysis that your nephrologist has advised.",
    },
    {
      q: "Q2. Should I stop dialysis or my medicines?",
      a: "Never. Stopping dialysis or prescribed medicines without your treating doctor&apos;s advice can be dangerous.",
    },
    {
      q: "Q3. Can Ayurveda help patients on dialysis?",
      a: "It may support diet, digestion, strength and emotional balance, planned after reviewing your medicines and schedule.",
    },
    {
      q: "Q4. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q5. Which reports should I bring?",
      a: "Kidney function tests, urine reports, ultrasound, prescriptions, dialysis records and a list of all medicines.",
    },
    {
      q: "Q6. Are tests available at Balprada?",
      a: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing.",
    },
    {
      q: "Q7. Are medicines prepared at Balprada?",
      a: "Yes. Balprada prepares its own Ayurvedic medicines.",
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
                Dialysis Alternative Ayurvedic Treatment in Rampur – Supportive
                Kidney Care at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Looking for Ayurvedic Support Around Dialysis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Rampur, Uttar Pradesh who hear the word dialysis
                  often feel fear and urgency, and many search for a dialysis
                  alternative in Ayurveda. This page explains honestly what
                  Ayurvedic care can support and where medical treatment must
                  continue.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care for kidney concerns since 1991, combining
                  personalised consultation, in-house medicines, diet
                  discipline and regular follow-up for patients and their
                  families.
                </li>
                <li>
                  Our Kidney and Urinary Care programme supports kidney
                  function concerns, swelling, kidney stones and
                  diabetes-linked kidney stress through a practical,
                  responsible and personalised care plan.
                </li>
                <li>
                  Ayurvedic care at Balprada is supportive. It is planned
                  alongside your nephrologist&apos;s advice and never asks you
                  to stop dialysis or prescribed medicines on your own.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Dialysis Does and Why Doctors Advise It
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dialysis is a medical treatment that removes waste and extra
                  fluid from the blood when the kidneys can no longer do this
                  work well enough, helping to keep the body safe and stable.
                </li>
                <li>
                  Doctors usually advise dialysis based on test results,
                  symptoms, fluid overload and overall condition, so the
                  decision must always come from your nephrologist and never
                  from guesswork or online claims.
                </li>
                <li>
                  Stopping or delaying advised dialysis can be dangerous,
                  because waste, potassium and excess fluid can build up
                  quickly and affect the heart and lungs.
                </li>
                <li>
                  Some patients need dialysis for a short period, while others
                  need it long term. Your treating team explains which
                  situation applies to you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can Ayurveda Replace Dialysis? An Honest Answer
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda should not be presented as a replacement for
                  dialysis when a patient medically needs it. Anyone promising
                  to make dialysis unnecessary for every patient is
                  overstating what natural care can do.
                </li>
                <li>
                  Ayurvedic care can support patients in other ways, including
                  guidance on diet, digestion, daily routine, strength,
                  comfort and emotional balance during a long and stressful
                  health journey.
                </li>
                <li>
                  In earlier stages of reduced kidney function, early
                  consultation may help patients follow disciplined food and
                  lifestyle habits that support kidney health alongside their
                  medical treatment.
                </li>
                <li>
                  Balprada&apos;s doctors review your reports and current
                  medicines first, then explain clearly what supportive care
                  can offer and when hospital treatment must continue.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Kidney Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya reviews your main concern, history, kidney
                      reports, current medication, dialysis schedule if any,
                      and daily habits before suggesting the next care step in
                      a calm, unhurried way.
                    </li>
                    <li>
                      Because no two kidney patients are alike, the plan is
                      shaped around your strength, appetite, swelling,
                      digestion and routine instead of a single report value.
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
                      which supports quality and consistency across treatment
                      plans and gives families more confidence in what they are
                      taking.
                    </li>
                    <li>
                      Medicines are combined with diet and lifestyle
                      correction, because Ayurveda looks at the whole person
                      and not only a laboratory number.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Coordination with Your Medical Team
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients are asked to share every tablet, injection and
                      supplement they take so that Ayurvedic care is planned
                      responsibly without clashing with their
                      nephrologist&apos;s treatment.
                    </li>
                    <li>
                      Patients are encouraged to keep their regular doctor
                      informed about Ayurvedic care and to follow fluid, salt,
                      potassium and protein limits already advised.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kidney and Urinary Conditions We Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Reduced Kidney Function and Kidney Failure
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reduced kidney function requires careful assessment, diet
                      support and continuous monitoring, which is why regular
                      reports and doctor review are central to our approach.
                    </li>
                    <li>
                      Our focus is comfort, strength, food discipline and
                      steady follow-up, and we do not promise guaranteed cures
                      for kidney failure.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Kidney Stones
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation supports urinary comfort,
                      hydration routines and dietary discipline, with practical
                      food guidance that may help reduce the chances of stones
                      forming again.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Persistent Swelling
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Persistent swelling may need kidney, liver and metabolic
                      assessment, so our doctors study possible causes and plan
                      diet and medicines accordingly with guided care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Diabetes-Related Kidney Concern
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
                      Bring kidney function tests, urine reports, ultrasound,
                      prescriptions and dialysis records, so the doctor can
                      understand your present condition and explain the next
                      care step in simple language.
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
                      suitable, while respecting any fluid, salt or protein
                      limits set by your treating doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, panchakarma and pathology support are
                      added only where they suit your condition and strength,
                      and panchakarma is considered only after careful
                      assessment.
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
                      tests at Balprada Pathology Lab help track how your body
                      responds.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidance for Kidney Patients
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the personalised diet chart prepared for you, because
                  kidney diets differ by stage of kidney function, swelling,
                  blood pressure, sugar levels and whether the patient is on
                  dialysis.
                </li>
                <li>
                  Limit salt as advised, since extra sodium can increase
                  swelling, thirst and blood pressure, which makes both daily
                  life and dialysis sessions harder to manage.
                </li>
                <li>
                  Take protein, potassium and phosphorus-rich foods only as
                  your doctor advises, because the right amounts depend on your
                  reports and treatment schedule.
                </li>
                <li>
                  Fluid intake needs individual guidance. Many dialysis
                  patients must limit fluids, so never increase or reduce water
                  intake without your doctor&apos;s approval.
                </li>
                <li>
                  Avoid fried, oily, packaged and heavy foods that burden
                  digestion, and prefer fresh, simple, home-cooked meals taken
                  at regular times.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Kidney Health
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep blood sugar and blood pressure under control through
                  prescribed medicines, diet and regular monitoring, since
                  uncontrolled levels continue to damage the kidneys.
                </li>
                <li>
                  Avoid smoking and alcohol, which add stress to the kidneys
                  and heart and can make recovery and daily energy more
                  difficult.
                </li>
                <li>
                  Avoid self-medication, especially painkillers and unknown
                  herbal or home remedies, because some products can harm weak
                  kidneys or interfere with prescribed medicines.
                </li>
                <li>
                  Walk gently every day and practise light yoga and breathing
                  exercises only as your doctor permits, keeping the body
                  active without causing exhaustion.
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
                      and emotional steadiness during a long health journey,
                      while naturopathy offers simple, nature-led routines.
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
                      which is especially valuable for weak or tired patients.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Ashram Environment and Organic Food
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
                  where medical treatment, including dialysis, must continue.
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
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Go to the nearest hospital emergency immediately for severe
                  breathlessness, chest pain, confusion, very little or no
                  urine, repeated vomiting, sudden heavy swelling or extreme
                  weakness.
                </li>
                <li>
                  Kidney problems can worsen quickly, and emergency treatment
                  such as dialysis may be necessary to protect life, so never
                  delay it for any other treatment.
                </li>
                <li>
                  Ayurvedic care supports patients during stable phases and
                  recovery. It should never delay urgent hospital treatment or
                  replace sessions your nephrologist has advised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips Before Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Carry all earlier reports, including kidney function tests,
                  urine reports, ultrasound and dialysis records, together with
                  prescriptions and a list of every medicine and supplement you
                  take.
                </li>
                <li>
                  Note your symptoms, urine pattern, swelling, appetite, sleep
                  and blood pressure readings, and write down any questions
                  about diet, medicines and follow-up.
                </li>
                <li>
                  Bring a family member who helps with your meals and daily
                  care, and arrive during OPD hours, 10:00 AM to 2:00 PM, to
                  allow an unhurried consultation.
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
                        Vaidya ji is available on Sundays. Please call{" "}
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