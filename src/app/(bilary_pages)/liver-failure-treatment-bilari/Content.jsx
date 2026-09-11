import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function LiverFailureTreatmentBilari() {
  const faqs = [
    {
      q: "Is liver failure always life-threatening?",
      a: "Liver failure is always serious, but outcomes vary widely depending on the cause, how early it is diagnosed, and how quickly treatment begins.",
    },
    {
      q: "Can liver failure be reversed?",
      a: "Some causes, especially certain drug reactions or acute infections, can be reversible with prompt treatment. Chronic, cirrhosis-related failure is generally not reversible, though progression can be slowed.",
    },
    {
      q: "What is the first sign of liver failure people usually notice?",
      a: "Jaundice, or yellowing of the skin and eyes, and unusual fatigue are often among the earliest noticeable signs.",
    },
    {
      q: "Does Balprada Hospital treat liver failure patients directly?",
      a: "Yes, patients receive diagnosis, stabilization, and ongoing medical management at the hospital, with referral support arranged for advanced procedures like liver transplant when needed.",
    },
    {
      q: "Is liver transplant the only cure for liver failure?",
      a: "For advanced, irreversible liver failure, transplant is often the definitive option. Many patients, however, are managed successfully through medical treatment without reaching that stage.",
    },
    {
      q: "How is hepatic encephalopathy treated?",
      a: "It is managed with medications that lower ammonia levels in the blood, along with treatment of any underlying trigger such as infection or dehydration.",
    },
    {
      q: "Can a healthy diet help during liver failure treatment?",
      a: "Yes, a carefully planned, liver-friendly diet supports recovery and helps manage complications like fluid retention.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-6 font-serif text-3xl text-gray-900">
                Liver Failure Treatment in Bilari – Expert Care at Balprada
                Hospital
              </h1>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Liver failure is a serious medical condition that develops
                  when the liver loses its ability to perform essential
                  functions.
                </li>
                <li>
                  Essential liver functions include detoxifying the blood,
                  producing proteins, and aiding digestion.
                </li>
                <li>
                  For residents of Bilari and the surrounding areas of
                  Moradabad district, timely diagnosis and specialist-led
                  treatment can make a critical difference in outcomes.
                </li>
                <li>
                  Balprada Hospital brings structured, evidence-based liver care
                  closer to home.
                </li>
                <li>
                  Local access means patients do not have to travel long
                  distances during a medical emergency.
                </li>
                <li>
                  This guide explains what liver failure is, why it happens,
                  how it is diagnosed, and how Balprada Hospital approaches
                  treatment and long-term management for patients in Bilari.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Is Liver Failure
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Liver failure occurs when a large portion of the liver is
                  damaged and can no longer function well enough to meet the
                  body&apos;s needs.
                </li>
                <li>
                  It can develop suddenly as acute liver failure in a person
                  with a previously healthy liver.
                </li>
                <li>
                  It can also develop gradually over months to years as chronic
                  liver failure.
                </li>
                <li>
                  Chronic liver failure may result from long-standing liver
                  disease such as cirrhosis.
                </li>
                <li>
                  A third pattern, called acute-on-chronic liver failure,
                  occurs when a person with existing chronic liver disease
                  experiences a sudden and severe worsening.
                </li>
                <li>
                  Acute-on-chronic liver failure may be triggered by an
                  infection or another illness.
                </li>
                <li>
                  The liver performs over 500 functions, including filtering
                  toxins, producing clotting factors, regulating blood sugar,
                  and processing medications.
                </li>
                <li>
                  Liver failure can therefore affect nearly every system in the
                  body.
                </li>
                <li>
                  Early liver damage often shows few symptoms.
                </li>
                <li>
                  Many patients in smaller towns like Bilari may be diagnosed
                  only after the disease has progressed.
                </li>
                <li>
                  Regular check-ups are important for people with risk factors
                  or a history of liver disease.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Common Causes of Liver Failure
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Viral hepatitis:</strong> Hepatitis A, B, and E
                  infections remain common in North India and can trigger acute
                  and chronic liver failure.
                </li>
                <li>
                  <strong>Chronic alcohol use:</strong> Long-term, heavy
                  alcohol consumption is one of the leading causes of cirrhosis
                  and liver failure seen in this region.
                </li>
                <li>
                  <strong>Non-alcoholic fatty liver disease:</strong> Rising
                  obesity, diabetes, and sedentary lifestyles are increasing
                  fatty liver cases in smaller towns and rural belts.
                </li>
                <li>
                  <strong>Drug-induced liver injury:</strong> Overdose or
                  prolonged misuse of certain medicines can severely damage
                  liver cells.
                </li>
                <li>
                  Drug-induced injury may involve some painkillers and
                  unregulated herbal or over-the-counter products.
                </li>
                <li>
                  <strong>Autoimmune liver disease:</strong> In some patients,
                  the body&apos;s own immune system attacks liver tissue,
                  leading to progressive damage.
                </li>
                <li>
                  <strong>Genetic and metabolic conditions:</strong> Disorders
                  such as Wilson&apos;s disease or hemochromatosis can cause
                  liver failure, particularly in younger patients.
                </li>
                <li>
                  <strong>Bile duct obstruction and other structural issues:</strong>{" "}
                  Blockages that prevent bile flow can lead to liver damage if
                  left untreated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Warning Signs and Symptoms
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Yellowing of the skin and eyes, known as jaundice.</li>
                <li>Persistent fatigue, weakness, and loss of appetite.</li>
                <li>Swelling in the abdomen, known as ascites, or in the legs.</li>
                <li>
                  Easy bruising or unusual bleeding, including bleeding from
                  the gums or nose.
                </li>
                <li>
                  Nausea, vomiting, or a bloated feeling after small meals.
                </li>
                <li>
                  Confusion, forgetfulness, or difficulty concentrating, which
                  may signal hepatic encephalopathy.
                </li>
                <li>Dark-colored urine and pale or clay-colored stools.</li>
                <li>
                  In advanced or acute cases, drowsiness may progress to
                  unresponsiveness.
                </li>
                <li>
                  Unresponsiveness is a medical emergency requiring immediate
                  hospital care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Acute vs Chronic Liver Failure: Why the Distinction Matters
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Acute liver failure:</strong> Develops within days to
                  a few weeks.
                </li>
                <li>
                  Acute liver failure is often linked to poisoning, viral
                  hepatitis, or drug reactions.
                </li>
                <li>
                  It requires immediate hospitalization and close monitoring.
                </li>
                <li>
                  Complications such as brain swelling can arise quickly in
                  acute liver failure.
                </li>
                <li>
                  <strong>Chronic liver failure:</strong> Develops slowly,
                  usually as an end-stage result of cirrhosis.
                </li>
                <li>
                  Symptoms build gradually, and patients may live with mild
                  liver dysfunction for years before a major decompensation
                  event occurs.
                </li>
                <li>
                  <strong>Acute-on-chronic liver failure:</strong> Combines the
                  urgency of an acute event with the underlying fragility of
                  chronic liver disease.
                </li>
                <li>
                  Acute-on-chronic liver failure typically carries the highest
                  risk and requires intensive, closely supervised care.
                </li>
                <li>
                  Correctly identifying the category shapes the entire treatment
                  plan.
                </li>
                <li>
                  The category influences the tests ordered and the intensity
                  of monitoring required.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Diagnosis at Balprada Hospital
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Detailed clinical history and examination to identify
                  possible causes such as alcohol use, medication history, or
                  prior liver disease.
                </li>
                <li>
                  Liver function tests, or LFTs, to measure enzymes, bilirubin,
                  and proteins that indicate how well the liver is working.
                </li>
                <li>
                  Complete blood count and coagulation profile, since liver
                  failure often affects blood clotting.
                </li>
                <li>
                  Viral hepatitis screening, including Hepatitis A, B, C, and E
                  markers, to confirm or rule out infectious causes.
                </li>
                <li>
                  Abdominal ultrasound to assess liver size, texture, blood
                  flow, fluid buildup, and structural abnormalities.
                </li>
                <li>
                  Blood ammonia levels and metabolic panels to help assess the
                  risk of hepatic encephalopathy.
                </li>
                <li>
                  Additional imaging or specialist referral when required for
                  advanced staging.
                </li>
                <li>
                  Additional evaluation may be required for higher-level
                  interventions such as liver transplant assessment at a
                  tertiary center.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Liver Failure Treatment Approach at Balprada Hospital
              </h2>

              <ul className="list-disc space-y-6 pl-5 text-gray-700">
                <li>
                  <strong>Immediate Stabilization</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      Patients arriving with signs of acute or severely
                      decompensated liver failure are prioritized for rapid
                      assessment and stabilization.
                    </li>
                    <li>
                      Vital signs, oxygen levels, blood sugar, and neurological
                      status are closely monitored.
                    </li>
                    <li>
                      Monitoring is particularly important for patients showing
                      early confusion or drowsiness.
                    </li>
                    <li>
                      Intravenous fluids and correction of electrolyte
                      imbalances are started promptly to support organ function.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Treating the Underlying Cause</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      If a medication or toxin is responsible, the offending
                      substance is stopped immediately.
                    </li>
                    <li>
                      Supportive or specific antidotal treatment is given where
                      available.
                    </li>
                    <li>
                      Confirmed viral hepatitis cases are managed with
                      appropriate antiviral therapy and monitoring.
                    </li>
                    <li>
                      Alcohol-related liver disease is managed alongside
                      counseling support to address the root cause.
                    </li>
                    <li>
                      Counseling support also helps prevent further damage.
                    </li>
                    <li>
                      Where an autoimmune or metabolic cause is suspected,
                      treatment is tailored accordingly.
                    </li>
                    <li>
                      Specialist consultation may be arranged when required.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Managing Complications</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      Hepatic encephalopathy is managed with medications that
                      reduce ammonia levels.
                    </li>
                    <li>
                      Triggering factors such as infection or constipation are
                      also corrected.
                    </li>
                    <li>
                      Ascites, or fluid buildup, is treated with dietary salt
                      restriction and diuretics.
                    </li>
                    <li>
                      Therapeutic drainage may be used when necessary for
                      symptom relief.
                    </li>
                    <li>
                      Bleeding risk from impaired clotting is monitored
                      closely.
                    </li>
                    <li>
                      Blood products or vitamin K may be given as needed.
                    </li>
                    <li>
                      Infections are screened for proactively because they are
                      common and dangerous in liver failure patients.
                    </li>
                    <li>
                      Infections are treated promptly with appropriate
                      antibiotics.
                    </li>
                    <li>
                      Kidney function is monitored throughout treatment.
                    </li>
                    <li>
                      Liver failure can affect kidney performance in more
                      advanced cases.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Nutritional and Supportive Care</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      A liver-friendly diet plan is designed for each patient.
                    </li>
                    <li>
                      The diet balances protein needs with the individual&apos;s
                      tolerance level.
                    </li>
                    <li>
                      Vitamin and mineral supplementation is provided when
                      deficiencies are identified.
                    </li>
                    <li>
                      Deficiencies are common in long-standing liver disease.
                    </li>
                    <li>
                      Patients and families are counselled on fluid intake,
                      salt restriction, and lifestyle changes.
                    </li>
                    <li>
                      These measures support liver recovery and help manage
                      complications.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Intensive and Critical Care</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      Patients with severe or rapidly worsening liver failure
                      are managed in a closely monitored care setting.
                    </li>
                    <li>
                      Continuous observation is provided when clinically
                      required.
                    </li>
                    <li>
                      The care team focuses on maximizing the chance of liver
                      regeneration.
                    </li>
                    <li>
                      The team also works to prevent complications that could
                      worsen outcomes.
                    </li>
                    <li>
                      For patients who need advanced interventions such as
                      liver transplant evaluation, Balprada Hospital
                      coordinates timely referral and transfer.
                    </li>
                    <li>
                      Referrals are made to appropriate tertiary liver-care and
                      transplant centers.
                    </li>
                    <li>
                      Complete documentation helps ensure continuity of care
                      and a smooth transition.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Why Choose Balprada Hospital for Liver Care in Bilari
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Accessible local liver care that reduces the need for
                  long-distance travel during a medical emergency.
                </li>
                <li>
                  A structured diagnostic pathway that helps identify the cause
                  of liver dysfunction efficiently.
                </li>
                <li>
                  Round-the-clock monitoring facilities for patients who need
                  close observation.
                </li>
                <li>
                  A team-based approach involving physicians experienced in
                  general medicine and gastro-related conditions.
                </li>
                <li>
                  Clear guidance and referral support for patients who require
                  specialized procedures unavailable locally.
                </li>
                <li>
                  Patients are connected to the right center without
                  unnecessary delay.
                </li>
                <li>
                  Emphasis on patient and family education.
                </li>
                <li>
                  Education helps families recognize early warning signs sooner
                  in the future.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Prevention and Long-Term Liver Health
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Limit or avoid alcohol consumption, especially if you already
                  have any degree of liver dysfunction.
                </li>
                <li>
                  Get vaccinated against Hepatitis A and B if you have not
                  already done so.
                </li>
                <li>
                  Practice safe food and water hygiene to reduce the risk of
                  Hepatitis A and E.
                </li>
                <li>
                  Hepatitis A and E can spread through contaminated sources.
                </li>
                <li>
                  Avoid self-medicating with unregulated herbal products.
                </li>
                <li>
                  Do not exceed recommended doses of common painkillers.
                </li>
                <li>
                  Maintain a healthy body weight and stay physically active to
                  reduce the risk of fatty liver disease.
                </li>
                <li>
                  Manage diabetes and cholesterol levels because both are
                  closely linked to liver health.
                </li>
                <li>
                  Schedule regular liver function checks if you have risk
                  factors such as family history, obesity, or prior hepatitis
                  exposure.
                </li>
                <li>
                  Seek medical attention promptly if you notice jaundice,
                  unexplained fatigue, or abdominal swelling.
                </li>
                <li>
                  Early intervention significantly improves outcomes.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-6 font-serif text-3xl">
                Consult Balprada Hospital for Liver Care
              </h2>

              <ul className="mb-6 list-disc space-y-4 pl-5 text-black">
                <li>
                  Patients in Bilari and nearby areas can consult Balprada
                  Hospital for liver-related diagnosis and treatment.
                </li>
                <li>
                  Patients with jaundice, confusion, severe drowsiness,
                  abdominal swelling, or unusual bleeding should seek urgent
                  medical attention.
                </li>
                <li>
                  Bring previous medical reports, prescriptions, test results,
                  and details of ongoing medication to the consultation.
                </li>
                <li>
                  Patients with suspected acute liver failure should not delay
                  hospital assessment.
                </li>
              </ul>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <p className="text-black">
                      F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                      Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Contact Balprada</p>

                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                >
                  <Phone className="mr-2 inline" size={18} />
                  Contact Us
                </Link>

                <Link
                  href="/treatments"
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Explore Treatments
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

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}