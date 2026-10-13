import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaCancerSupportiveCare() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure cancer?",
      a: "No. Ayurvedic care at Balprada is supportive and works alongside oncology treatment, never in place of it.",
    },
    {
      q: "Q2. Should I stop chemotherapy or radiotherapy?",
      a: "Never. Stopping or delaying treatment without your oncologist&apos;s advice can be dangerous.",
    },
    {
      q: "Q3. What support does Balprada offer?",
      a: "Strength and recovery support, diet guidance and stress support during serious illness.",
    },
    {
      q: "Q4. Do I need to tell my oncologist?",
      a: "Yes. Share every Ayurvedic medicine or supplement, as some may interact with treatment.",
    },
    {
      q: "Q5. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q6. Which reports should I bring?",
      a: "Diagnosis papers, biopsy and scan reports, oncology plan, blood tests and a list of medicines.",
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
                Cancer Supportive Care with Ayurveda in Rampur – Balprada
                Ayurvedic Hospital &amp; Research Center
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Supportive Care for Cancer Patients in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A cancer diagnosis changes life for the whole family, and
                  many people in Rampur, Uttar Pradesh look for Ayurvedic
                  support that can stand beside their oncology treatment and
                  help them stay stronger, calmer and better nourished.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, and our Cancer Supportive Care
                  programme provides sensitive support for strength, energy,
                  diet and emotional balance during serious illness.
                </li>
                <li>
                  Our care is supportive. It is offered alongside the treatment
                  planned by your oncologist and never as a replacement for
                  surgery, chemotherapy, radiotherapy or any other treatment
                  your cancer team advises.
                </li>
                <li>
                  This page explains how Ayurveda can support patients, what
                  Balprada offers, what to discuss with your oncologist and how
                  families from Rampur can book a consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                An Honest Note About Ayurveda and Cancer
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Cancer needs timely diagnosis and treatment by qualified
                  oncologists, so Ayurveda should never be used to delay or
                  replace scans, biopsy, surgery, chemotherapy, radiotherapy or
                  other advised treatment.
                </li>
                <li>
                  Anyone who promises a guaranteed cure for cancer through
                  herbs or home remedies is overstating what natural care can
                  do, and such promises can cost patients precious time.
                </li>
                <li>
                  Ayurvedic care can support the person in other meaningful
                  ways, including appetite, digestion, strength, comfort,
                  sleep, diet discipline and emotional steadiness during a long
                  and tiring journey.
                </li>
                <li>
                  At Balprada, our doctors explain clearly what supportive care
                  can offer and where oncology treatment must lead, so that
                  patients and families make decisions with open eyes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Cancer and Its Impact on the Body
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Cancer begins when cells grow abnormally and spread, and its
                  type, stage and location decide what treatment is needed,
                  which is why every patient must follow the plan set by their
                  oncology team.
                </li>
                <li>
                  Treatment itself can be demanding, and patients commonly face
                  weakness, loss of appetite, nausea, weight loss, digestive
                  upset, disturbed sleep and emotional strain.
                </li>
                <li>
                  Families also carry stress, because caring for a loved one
                  involves practical decisions about food, routine, medicines,
                  hospital visits and emotional support at home.
                </li>
                <li>
                  Supportive care aims to help the person stay as strong and
                  comfortable as possible, so that they can go through
                  treatment with better nourishment and a calmer mind.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Cancer Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya listens to your story and reviews your
                      diagnosis, oncology plan, reports, current medicines and
                      daily habits before suggesting any supportive step, and
                      explains everything in simple language for you and your
                      family.
                    </li>
                    <li>
                      The plan is shaped around your strength, appetite,
                      digestion, sleep and routine, because every patient
                      responds differently and needs gentle, individual
                      guidance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Strength and Recovery Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic care focuses on helping patients maintain
                      energy, rebuild strength and recover steadily between
                      treatment phases, with attention to digestion, food and
                      daily rest.
                    </li>
                    <li>
                      Balprada prepares its own Ayurvedic medicines in-house,
                      and they are planned only after reviewing your current
                      treatment so that care remains responsible and carefully
                      coordinated.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors give practical diet guidance that helps
                      patients eat in a way that suits their digestion, taste
                      changes, appetite and treatment schedule, with fresh,
                      simple and easily digestible food.
                    </li>
                    <li>
                      Food advice is adapted to each person&apos;s condition,
                      and patients are asked to follow any dietary instructions
                      already given by their oncologist or dietitian.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Stress and Emotional Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle yoga, breath awareness and meditation, practised
                      as comfort allows, help patients and families find calm,
                      reduce anxiety and sleep better during a stressful phase.
                    </li>
                    <li>
                      Balprada&apos;s founder emphasised positivity as part of
                      recovery, and our team supports patients and families
                      with patience, kindness and hope.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Working Together with Your Oncology Team
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Tell your oncologist about every Ayurvedic medicine,
                      herbal product or supplement you plan to take, because
                      some products can interact with chemotherapy or other
                      treatment.
                    </li>
                    <li>
                      Share your oncology plan, recent blood reports and
                      current medicines with the Balprada vaidya at your first
                      visit, so that supportive care can be planned safely.
                    </li>
                    <li>
                      Never stop or delay chemotherapy, radiotherapy, surgery
                      or prescribed medicines because of Ayurvedic treatment,
                      and consult your oncologist before changing any part of
                      your plan.
                    </li>
                    <li>
                      Avoid taking unknown herbal powders, concentrated
                      extracts or high-dose supplements recommended by social
                      media or neighbours, as some may harm the liver, kidneys
                      or blood counts.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Challenges During Cancer Treatment That Supportive Care
                Addresses
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Weakness and Fatigue
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fatigue is one of the most common problems, and
                      supportive care focuses on gentle routines, digestion,
                      balanced food and rest that help patients conserve and
                      rebuild energy.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Poor Appetite and Digestion
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Nausea, taste changes, acidity, constipation or bloating
                      can make eating difficult, so our doctors suggest light,
                      fresh food and a steady meal routine adapted to each
                      patient.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Sleep and Emotional Strain
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Worry and treatment effects can disturb sleep, so calming
                      routines, breath awareness and meditation are taught to
                      support rest and emotional balance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Recovery Between Treatments
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the vaidya observe how the patient
                      feels, adjust diet and guidance and support recovery
                      between treatment cycles in coordination with the
                      oncology team.
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
                      Bring your diagnosis papers, biopsy and scan reports,
                      oncology plan, recent blood tests and a full list of
                      medicines, so that the doctor can understand your present
                      condition clearly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Personalised Supportive Plan
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned using Balprada&apos;s Ayurvedic
                      medicines, diet guidance and lifestyle support where
                      suitable, always respecting the treatment and
                      restrictions advised by your oncologist.
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
                      added where they suit your strength, helping patients
                      stay calm and track their health with reliable tests.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Regular Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up visits help the team observe how you are
                      feeling, adjust guidance and support long-term
                      discipline, with repeat tests at Balprada Pathology Lab
                      when advised.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Guidance for Cancer Patients
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the diet plan given by your oncologist or dietitian
                  first, and let Ayurvedic food guidance work within it so that
                  nutrition remains safe during treatment.
                </li>
                <li>
                  Eat small, fresh, home-cooked meals at regular times, and
                  choose light, easily digestible food when appetite is weak or
                  nausea is present.
                </li>
                <li>
                  Keep drinking fluids as your doctor advises, because
                  hydration supports energy, digestion and comfort during
                  treatment.
                </li>
                <li>
                  Avoid very oily, spicy, stale or packaged food, and avoid
                  alcohol, tobacco and any substances that your doctors have
                  asked you to stop.
                </li>
                <li>
                  Rest well, take short gentle walks when strength allows, and
                  practise light breathing exercises or meditation to support
                  calm.
                </li>
                <li>
                  Do not start supplements, extracts or special diets without
                  telling your oncologist, since some can interfere with
                  treatment.
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
                      doctor monitor how the patient is doing and plan
                      supportive care with confidence, while saving effort for
                      tired patients.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga and Meditation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle yoga and guided meditation build calm, patience
                      and emotional steadiness, and can be adjusted to each
                      patient&apos;s strength and comfort.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Naturopathy and Physiotherapy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy offers simple, nature-led routines, while
                      professional physiotherapy supports safe movement,
                      mobility and strength alongside the wider care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Ashram Environment and Organic Food
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A peaceful ashram setting supports rest and a positive
                      outlook, while wholesome, clean eating supports the
                      long-term lifestyle correction that we encourage.
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
                  Contact your oncology team or go to the nearest hospital
                  immediately for high fever, uncontrolled vomiting, severe
                  pain, bleeding, breathlessness, confusion or sudden severe
                  weakness.
                </li>
                <li>
                  Patients on chemotherapy can develop infections quickly, so
                  fever or chills during treatment must always be reported to
                  the treating hospital without delay.
                </li>
                <li>
                  Ayurvedic care supports patients during stable phases and
                  recovery. It should never delay urgent hospital treatment or
                  replace advice from your oncologist.
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
                  patients are told clearly what supportive care can offer and
                  that oncology treatment must continue as advised.
                </li>
                <li>
                  <span className="font-semibold">
                    Compassionate service:
                  </span>{" "}
                  Google reviews praise the knowledgeable vaidyas, humble staff
                  and serene healing atmosphere that help patients feel
                  supported.
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
                  Carry your diagnosis papers, biopsy and scan reports,
                  oncology treatment plan, recent blood tests, prescriptions
                  and a list of every medicine and supplement you take.
                </li>
                <li>
                  Note your symptoms, appetite, weight, sleep and energy
                  levels, and write down your questions about diet, medicines
                  and follow-up for the doctor.
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