import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaPanchakarmaTreatment() {
  const faqs = [
    {
      q: "Q1. What is panchakarma?",
      a: "A group of Ayurvedic cleansing therapies planned individually to support balance and recovery.",
    },
    {
      q: "Q2. Is panchakarma safe for everyone?",
      a: "No. It is advised only after assessment, and some patients need gentler care or should avoid it.",
    },
    {
      q: "Q3. Can panchakarma cure serious diseases?",
      a: "No. It is supportive and does not replace medical treatment for serious conditions.",
    },
    {
      q: "Q4. Do I have to stop my medicines?",
      a: "Never. Continue prescribed medicines unless your treating doctor advises otherwise.",
    },
    {
      q: "Q5. Does Balprada offer panchakarma near Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q6. Which reports should I bring?",
      a: "Earlier reports, scans, prescriptions and a list of all medicines you take.",
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
                Ayurvedic Panchakarma in Rampur – Personalised Cleansing and
                Recovery Care at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Panchakarma Care for Rampur Families
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma is one of the best-known therapies of Ayurveda,
                  and many people in Rampur, Uttar Pradesh search for a trusted
                  place where it is planned carefully, explained honestly and
                  supported by proper consultation and follow-up.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, and panchakarma is part of the
                  facilities that support cleansing, balance and recovery
                  within a complete, personalised care plan.
                </li>
                <li>
                  At Balprada, panchakarma is never offered as a quick package.
                  Therapies are planned individually after assessment, so each
                  patient receives what suits their condition, strength and
                  overall health.
                </li>
                <li>
                  This page explains what panchakarma means, who may benefit,
                  how our doctors plan therapy safely, what to expect and how
                  families from Rampur can book a consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Panchakarma?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The word panchakarma means five actions, and it refers to a
                  group of Ayurvedic cleansing therapies designed to support
                  the body&apos;s natural balance and help remove accumulated
                  imbalance.
                </li>
                <li>
                  In Ayurveda, good health depends on balanced digestion,
                  balanced body energies and a calm mind, and panchakarma is
                  used as part of a wider plan that includes medicines, diet
                  and daily routine.
                </li>
                <li>
                  Therapies are usually preceded by preparation, such as gentle
                  diet changes and supportive treatment, and followed by a
                  careful recovery routine so that the body can settle and
                  regain strength.
                </li>
                <li>
                  Panchakarma is not a single treatment for every person. The
                  right therapies, their order and their duration depend on the
                  person&apos;s condition, age, strength and digestion.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                An Honest Note About Panchakarma
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma should be done only after a proper consultation,
                  because not every patient is suitable for every therapy, and
                  some conditions or weak states need gentler care or no
                  cleansing therapy at all.
                </li>
                <li>
                  Anyone promising that panchakarma will cure serious disease
                  or remove all toxins in a few days is overstating what the
                  therapy can do and may put patients at risk.
                </li>
                <li>
                  Patients with serious conditions such as kidney failure,
                  liver disease, heart disease, cancer or uncontrolled diabetes
                  must follow their specialist&apos;s treatment, and
                  panchakarma is considered only after careful assessment of
                  strength and safety.
                </li>
                <li>
                  At Balprada, our doctors explain clearly what panchakarma can
                  support, where it may not be advisable, and why supportive
                  care must always sit alongside the medical treatment you
                  already need.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Plans Panchakarma
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Assessment First
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya reviews your main concern, medical history,
                      reports, current medicines, digestion, strength and daily
                      habits before deciding whether panchakarma is suitable at
                      all.
                    </li>
                    <li>
                      Because no two patients are alike, the plan is shaped
                      around your condition and capacity rather than a fixed
                      schedule or package.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Careful Selection of Therapies
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Therapies are chosen only after assessment, so each
                      patient receives what suits their condition and strength,
                      and therapies that are not suitable are avoided or
                      postponed.
                    </li>
                    <li>
                      Patients are told what each step involves, how long it
                      may take and what they should expect, so that they feel
                      informed and comfortable throughout.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Preparation and Recovery
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Preparation may include light, easily digestible food,
                      rest and supportive medicines, so that the body is ready
                      for therapy and the process feels gentler.
                    </li>
                    <li>
                      After therapy, a recovery routine with simple food, rest
                      and gradual return to activity helps the body regain
                      strength and helps the benefits last longer.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Combined with Ayurvedic Medicines
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares its own Ayurvedic medicines in-house,
                      and they are combined with panchakarma only when
                      suitable, so the plan remains coordinated and
                      responsible.
                    </li>
                    <li>
                      Medicines, diet and lifestyle correction continue after
                      therapy, because lasting benefit depends on daily habits
                      and not on a single course of treatment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who May Consider Panchakarma
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People with long-standing digestive problems such as weak
                  digestion, acidity, bloating or heaviness may be assessed for
                  suitable cleansing and supportive therapies as part of a
                  wider plan.
                </li>
                <li>
                  Patients with lifestyle-related concerns such as weight gain,
                  stress, sleep disturbance and metabolic imbalance may benefit
                  from supervised therapy combined with diet and routine
                  correction.
                </li>
                <li>
                  People seeking general wellbeing, seasonal balance or
                  recovery support after a long period of stress may consult
                  our doctors to find out which therapies, if any, suit them.
                </li>
                <li>
                  Patients with chronic conditions should come only after
                  sharing their reports, because the doctor must first decide
                  whether therapy is safe and how it should be adapted.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Be Careful or Avoid Panchakarma
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People who are very weak, severely ill or recovering from
                  surgery or a recent hospital stay may not be able to tolerate
                  cleansing therapy and need gentler supportive care first.
                </li>
                <li>
                  Pregnant women, young children, older adults with frailty and
                  people with serious heart, kidney, liver or bleeding
                  conditions need a doctor&apos;s careful judgement before any
                  therapy.
                </li>
                <li>
                  Patients on insulin, blood thinners or other critical
                  medicines must inform both their regular doctor and the
                  vaidya, because therapy and diet changes can affect how the
                  body responds.
                </li>
                <li>
                  Anyone with fever, severe pain, breathlessness or sudden
                  worsening of symptoms should seek medical care first and
                  postpone any therapy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Panchakarma Journey at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Consultation and Report Review
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring your reports, prescriptions and a list of every
                      medicine you take, so that the doctor can understand your
                      condition and decide whether therapy is advisable.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Personalised Plan
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      If suitable, the vaidya prepares a plan with therapies,
                      diet, medicines and rest, explained in simple language so
                      that you and your family know what to expect.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supervised Therapy and Supportive Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Therapy is carried out in a calm environment with
                      attention to comfort, hygiene and your response, and the
                      plan is adjusted if the body needs a slower pace.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Recovery and Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up visits help the team observe how you feel,
                      adjust diet and medicines, and support long-term
                      discipline, with repeat tests at Balprada Pathology Lab
                      when advised.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle During Panchakarma
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the diet plan given by your vaidya carefully, because
                  simple, light and fresh food is an important part of
                  preparation, therapy and recovery.
                </li>
                <li>
                  Eat at regular times, avoid heavy, oily, spicy, stale and
                  packaged foods, and avoid cold drinks, alcohol and tobacco
                  during the plan.
                </li>
                <li>
                  Rest well, sleep on time and avoid heavy physical effort,
                  travel and stressful commitments during the period of therapy
                  and recovery whenever possible.
                </li>
                <li>
                  Continue prescribed medicines unless your doctor advises
                  otherwise, and never stop insulin, blood pressure tablets or
                  other important medicines on your own.
                </li>
                <li>
                  Practise gentle yoga, breathing exercises and meditation only
                  as advised, because calm and steady routines support the
                  effect of therapy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities Alongside Panchakarma
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Yoga and Meditation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga helps build discipline, strength and calm across
                      body, mind and breath, while guided meditation and breath
                      awareness support emotional steadiness and restorative
                      rest.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Naturopathy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy uses simple, nature-led practices and
                      supportive routines that work with the body&apos;s
                      natural healing capacity and fit well with a cleansing
                      and recovery plan.
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
                      mobility, strength and recovery alongside the wider care
                      plan, especially for patients who feel stiff or weak.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Balprada Pathology Lab
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reliable blood, urine and diagnostic testing helps the
                      doctor decide whether therapy is safe and track progress,
                      while saving patients the effort of visiting several
                      centres.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Ashram Environment and Organic Food
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A peaceful ashram environment supports rest, routine and
                      recovery away from daily stress, and wholesome, clean
                      eating supports the long-term lifestyle correction we
                      encourage.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Supported at Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney and urinary care, including swelling, kidney stones
                  and diabetes-linked kidney concerns, with diet guidance,
                  medicines and regular monitoring.
                </li>
                <li>
                  Liver and digestive care for fatty liver, jaundice and weak
                  digestion, using medicine, diet and routine-based support.
                </li>
                <li>
                  Cancer supportive care for strength, energy, diet and
                  emotional balance, offered alongside the patient&apos;s
                  primary oncology treatment.
                </li>
                <li>
                  Heart and lifestyle care for blood pressure, diabetes, obesity
                  and stress, and diabetes and thyroid care for sugar, weight
                  and metabolic balance.
                </li>
                <li>
                  Women&apos;s wellness care for hormonal balance, menstrual
                  health and weakness, with private and respectful
                  consultation.
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
                  patients are told clearly what panchakarma can support, when
                  it is not suitable and when medical treatment must come
                  first.
                </li>
                <li>
                  <span className="font-semibold">Whole-person care:</span>{" "}
                  therapy, medicines, diet, yoga, pathology support and
                  follow-up are planned together as one connected journey.
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
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips Before Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Carry all earlier reports, scans, prescriptions and a list of
                  every medicine and supplement you take, so the doctor can
                  judge whether panchakarma is suitable.
                </li>
                <li>
                  Note your symptoms, digestion, sleep, weight and energy
                  levels, and write down your questions about therapy,
                  duration, diet and follow-up.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and bring a
                  family member who can help you follow the diet and routine at
                  home.
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