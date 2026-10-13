import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaGallBladderStoneTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda treat gall bladder stones?",
      a: "Ayurveda offers supportive care for digestion, diet and comfort. Results vary by person, so no outcome can be promised.",
    },
    {
      q: "Q2. Do I have to stop my current medicines?",
      a: "No. Continue prescribed medicines unless your own doctor advises a change.",
    },
    {
      q: "Q3. Is surgery always needed for gallstones?",
      a: "Not always, but symptomatic or complicated cases often need a surgeon&apos;s opinion. Discuss it openly with your doctors.",
    },
    {
      q: "Q4. How long does care usually take?",
      a: "It depends on symptoms, stone size and lifestyle. The doctor reviews progress at regular follow-ups.",
    },
    {
      q: "Q5. Which foods should I avoid?",
      a: "Fried, oily and heavy foods are usually limited. The doctor will finalise a diet that suits you.",
    },
    {
      q: "Q6. Is there a free consultation?",
      a: "Yes, free OPD is available on the 15th of every month.",
    },
    {
      q: "Q7. Which branch is better for Rampur patients?",
      a: "Both are accessible. Call ahead to confirm timing and doctor availability.",
    },
    {
      q: "Q8. What reports should I bring?",
      a: "Bring your ultrasound, blood tests, liver function reports and current prescriptions.",
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
                Ayurvedic Gall Bladder Stone Treatment in Rampur
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Gall bladder stones are a common digestive problem, and many
                  families in Rampur look for gentle, well-guided Ayurvedic
                  support alongside proper medical evaluation. Balprada
                  Ayurvedic Hospital &amp; Research Center has offered Ayurvedic
                  care since 1991 for patients from Rampur, Moradabad and
                  nearby districts.
                </li>
                <li>
                  Our approach to gall bladder stone concerns combines careful
                  consultation, review of reports, diet discipline, Ayurvedic
                  medicines and lifestyle correction. This page explains what
                  gall bladder stones are, how Ayurveda looks at them, and how
                  Balprada supports patients.
                </li>
                <li>
                  Care is personalised, and no outcome is promised. Every plan
                  starts with an individual assessment, because stone size,
                  symptoms and overall health differ from person to person.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Gall Bladder Stones
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    What the Gall Bladder Does
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The gall bladder is a small pouch under the liver that
                      stores bile. Bile is released after meals, especially
                      fatty ones, to help the body digest fats.
                    </li>
                    <li>
                      When bile chemistry changes or the gall bladder does not
                      empty well, hardened deposits called stones can form,
                      ranging from tiny grains to larger pebble-like stones.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Types of Gall Bladder Stones
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Cholesterol stones are the most common and usually form
                      when bile carries too much cholesterol. They are often
                      yellowish-green in colour.
                    </li>
                    <li>
                      Pigment stones are darker and linked with conditions that
                      raise bilirubin levels in bile. These are less common but
                      can occur in people with certain liver or blood
                      conditions.
                    </li>
                    <li>
                      Many people have &quot;silent&quot; stones that cause no
                      symptoms and are found by chance during an ultrasound
                      done for another reason.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Common Symptoms to Watch For
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Pain in the upper right side of the abdomen, or in the
                      centre just below the breastbone, often starting after a
                      heavy or oily meal. The pain may last from half an hour
                      to several hours.
                    </li>
                    <li>
                      Pain that spreads to the right shoulder blade or the back
                      between the shoulders, sometimes along with nausea or
                      vomiting.
                    </li>
                    <li>
                      Bloating, belching, acidity, a feeling of heaviness after
                      meals and general discomfort with fried or rich food.
                    </li>
                    <li>
                      Loss of appetite, indigestion that keeps coming back, and
                      occasional pale stools or dark urine in some cases.
                    </li>
                    <li>
                      These symptoms can also point to other digestive or liver
                      conditions, so a proper consultation and tests matter
                      more than self-diagnosis.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eating a diet high in fried, oily, processed and sweet foods
                  over many years can put extra load on bile and digestion.
                </li>
                <li>
                  Being overweight, or losing weight too fast through crash
                  diets, is a well-known risk factor for stone formation.
                </li>
                <li>
                  Women, people above 40, those with a family history of
                  gallstones and people with diabetes are generally at higher
                  risk.
                </li>
                <li>
                  A sedentary routine, long gaps between meals and irregular
                  eating habits can slow gall bladder emptying and weaken
                  digestion.
                </li>
                <li>
                  Chronic stress, poor sleep and weak liver function may also
                  contribute to digestive imbalance, which is why Balprada
                  looks at the whole routine and not only the stone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic View of Gall Bladder Stones
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  In Ayurvedic thought, stone-like formations are often
                  discussed under the idea of ashmari, and gall bladder stones
                  are sometimes described as pittashmari, linked with
                  aggravated pitta, weak digestive fire (agni) and disturbed
                  bile flow.
                </li>
                <li>
                  Ayurveda treats digestion, liver function and daily routine
                  as connected. Care therefore aims to improve digestive
                  strength, support bile balance and reduce factors that
                  aggravate discomfort.
                </li>
                <li>
                  This view is meant to guide supportive care. It does not
                  replace modern diagnosis, and patients are encouraged to
                  share all ultrasound and blood reports with the doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Gall Bladder Stone Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Detailed Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews your symptoms, medical history,
                      current medication, food habits, sleep, stress and daily
                      routine before any Ayurvedic guidance is suggested.
                    </li>
                    <li>
                      Ultrasound reports, liver function results and other
                      diagnostic papers are examined where relevant, so the
                      care plan stays practical, responsible and based on your
                      actual condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Personalised Ayurvedic Plan
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care may include Ayurvedic medicines prepared in-house,
                      chosen according to the individual assessment, along with
                      clear instructions on timing and duration.
                    </li>
                    <li>
                      Medicines are reviewed at follow-up visits, and guidance
                      can be adjusted as symptoms, reports and comfort levels
                      change.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Routine Correction
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients receive simple, kitchen-friendly diet guidance
                      in the local food style of Rampur and Moradabad, so it is
                      easy to follow every day without expensive or unfamiliar
                      ingredients.
                    </li>
                    <li>
                      Meal timing, portion size and gaps between meals are
                      discussed, because regular, light and well-timed eating
                      supports comfortable digestion.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Yoga, Naturopathy and Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Where suitable, patients may be guided toward gentle
                      yoga, breathing practice and naturopathy-based routines
                      available at the Balprada ashram environment.
                    </li>
                    <li>
                      Panchakarma-based approaches and meditation are planned
                      only after assessment, and only if they suit the
                      patient&apos;s condition and strength.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Regular Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up visits help the team observe progress, adjust
                      guidance and keep long-term discipline, which matters
                      because gall bladder problems are strongly linked to
                      lifestyle.
                    </li>
                    <li>
                      Patients are always advised to continue any prescribed
                      modern treatment unless their own doctor says otherwise.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Pathology and Diagnostic Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Pathology Lab offers blood and urine testing
                      support, which can help the doctor understand liver
                      function, infection markers and general health alongside
                      your reports.
                    </li>
                    <li>
                      Report-based care means the Ayurvedic plan is built
                      around real results instead of guesswork.
                    </li>
                    <li>
                      If imaging such as ultrasound is needed, patients are
                      guided on getting it done and bringing the report to the
                      consultation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidance for Gall Bladder Stone Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Foods Generally Preferred
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fresh seasonal vegetables, especially lauki, tori,
                      parwal, spinach and pumpkin, cooked simply with minimal
                      oil and mild spices.
                    </li>
                    <li>
                      Whole grains, moong dal, fresh fruits like papaya and
                      apple, and fibre-rich food that supports regular
                      digestion.
                    </li>
                    <li>
                      Warm water through the day and light, home-cooked meals
                      at fixed times.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Foods Usually Limited
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Deep-fried snacks like samosa, pakora and puri, along
                      with heavy gravies, excess ghee, butter and cream.
                    </li>
                    <li>
                      Street food, bakery items, packaged snacks, sweets and
                      sugary drinks.
                    </li>
                    <li>
                      Skipping meals, very large dinners and long fasts, which
                      may upset bile flow.
                    </li>
                    <li>
                      Your diet should always be finalised with the doctor,
                      since needs differ for diabetes, liver concerns or other
                      conditions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When You Should Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Severe, continuous abdominal pain that does not ease,
                  especially with fever or chills, needs immediate hospital
                  attention.
                </li>
                <li>
                  Yellowing of the eyes or skin, persistent vomiting, or very
                  dark urine with pale stools should never be managed at home.
                </li>
                <li>
                  Ayurvedic care is supportive. Patients with complications,
                  large stones or repeated severe attacks should discuss
                  surgical options with a qualified surgeon and decide together
                  with their doctors.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients from Rampur Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada has served patients with Ayurvedic care for 35
                  years, with a service-first spirit rooted in the seva sankalp
                  of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  The ashram setting offers a calm, disciplined environment,
                  which many patients find helpful for long-term digestive and
                  lifestyle correction.
                </li>
                <li>
                  In-house herbal medicines, experienced doctors, pathology
                  support, yoga, naturopathy and Panchakarma are available
                  under one care journey.
                </li>
                <li>
                  Rampur is a neighbouring district of Moradabad, so patients
                  can plan a visit to either of our two branches, depending on
                  convenience.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every
                  month, which makes the first step more accessible for
                  families.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visit Balprada from Rampur
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
                        Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                        Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415.
                      </li>
                      <li>
                        Open daily, 10:00 AM to 2:00 PM. Call{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>{" "}
                        or message on WhatsApp to book your consultation.
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
                        F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                        Uttar Pradesh 244001.
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
                    <p className="font-semibold">Before You Come</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Carry old ultrasound, blood test and prescription
                        papers, and note your symptoms, meal patterns and any
                        medicines you take.
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