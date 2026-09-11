import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function LiverTreatmentBilari() {
  const faqs = [
    {
      q: "Q1. Can Ayurvedic treatment reverse fatty liver disease?",
      a: "In many early to moderate cases, sustained herbal and dietary treatment can meaningfully improve fatty liver; results depend on the individual case and adherence to guidance.",
    },
    {
      q: "Q2. Is Ayurvedic liver treatment safe alongside my current medication?",
      a: "Yes, treatment is designed to work alongside prescribed medication; never stop physician-prescribed treatment without medical advice.",
    },
    {
      q: "Q3. How is my liver condition tracked during treatment?",
      a: "Through regular liver function testing at the hospital's in-house pathology lab, reviewed alongside your reported symptoms.",
    },
    {
      q: "Q4. How long does liver treatment typically take?",
      a: "This varies by condition and severity; the physician will explain a realistic timeline based on your specific case during consultation.",
    },
    {
      q: "Q5. Is this treatment suitable for jaundice recovery as well as chronic liver conditions?",
      a: "Yes, the hospital offers separate protocols for jaundice recovery, fatty liver, liver enlargement, and chronic liver inflammation.",
    },
    {
      q: "Q6. Do I need a specialist's referral to start liver treatment here?",
      a: "No referral is required, though patients with a diagnosed liver infection or serious condition should keep both treating doctors informed.",
    },
    {
      q: "Q7. How can I book a liver treatment consultation from Bilari?",
      a: "Contact the hospital through its website or helpline in advance to confirm consultation availability before traveling.",
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
                Liver Treatment in Bilari – Ayurvedic Care at Balprada
                Ayurvedic Hospital
              </h1>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Liver disease often develops gradually, and many patients
                  don&apos;t notice symptoms until the condition has already
                  progressed.
                </li>
                <li>
                  For patients in Bilari looking for liver treatment rooted in
                  proper diagnosis rather than generic herbal remedies,
                  Balprada Ayurvedic Hospital &amp; Research Center in
                  Moradabad offers a structured Ayurvedic approach.
                </li>
                <li>
                  The approach combines lab-based assessment, personalized
                  herbal therapy, and diet correction to support liver recovery.
                </li>
                <li>
                  This page focuses specifically on liver treatment, common
                  liver conditions, Ayurvedic management, expectations for
                  patients from Bilari, and how this care fits alongside
                  standard medical treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Understanding Common Liver Conditions
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Fatty liver disease:</strong> Excess fat accumulation
                  in liver cells, often linked to diet, obesity, or metabolic
                  factors.
                </li>
                <li>
                  Fatty liver disease is increasingly common even in younger
                  patients.
                </li>
                <li>
                  <strong>Liver enlargement (hepatomegaly):</strong> Can result
                  from several causes, including fatty liver, infection, or
                  other underlying conditions requiring proper diagnosis.
                </li>
                <li>
                  <strong>Jaundice and post-jaundice recovery:</strong>{" "}
                  Yellowing of the skin and eyes due to elevated bilirubin,
                  often requiring supportive care during and after the acute
                  phase.
                </li>
                <li>
                  <strong>Chronic liver inflammation:</strong> Ongoing liver
                  stress that, if unaddressed, can progress toward more serious
                  liver damage over time.
                </li>
                <li>
                  Many liver conditions show few symptoms in their early stages.
                </li>
                <li>
                  Fatigue, mild digestive discomfort, or reduced appetite may
                  be the only early signs.
                </li>
                <li>
                  Regular liver function testing is valuable for early
                  detection.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                How Ayurvedic Liver Treatment Works at Balprada
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Assessment first:</strong> Every liver patient
                  undergoes a detailed case history review along with liver
                  function testing.
                </li>
                <li>
                  The assessment helps doctors understand the exact nature and
                  stage of the condition.
                </li>
                <li>
                  <strong>Personalized herbal formulations:</strong> Treatment
                  is tailored to the specific liver condition, its severity,
                  and the patient&apos;s overall constitution.
                </li>
                <li>
                  Treatment does not rely on a single fixed remedy for all
                  liver issues.
                </li>
                <li>
                  <strong>Detoxification-focused therapy:</strong> Herbal
                  protocols are aimed at supporting the liver&apos;s natural
                  detoxification and regeneration processes.
                </li>
                <li>
                  <strong>Diet as a central pillar:</strong> Patients receive
                  specific dietary guidance to reduce further fat accumulation
                  or inflammation in the liver.
                </li>
                <li>
                  <strong>Structured monitoring:</strong> Follow-up visits
                  include repeat liver function testing to confirm whether the
                  treatment is producing measurable improvement.
                </li>
                <li>
                  <strong>Realistic expectations:</strong> Physicians explain
                  that liver recovery, particularly for fatty liver and chronic
                  conditions, takes sustained effort over weeks to months.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Condition-Specific Treatment Approaches
              </h2>

              <ul className="list-disc space-y-6 pl-5 text-gray-700">
                <li>
                  <strong>Fatty Liver Disease</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      Herbal formulations aimed at reducing fat accumulation
                      and supporting healthy liver metabolism.
                    </li>
                    <li>
                      A structured diet plan focused on reducing high-fat,
                      high-sugar, and processed food intake.
                    </li>
                    <li>
                      Guidance on physical activity levels appropriate to the
                      patient&apos;s overall health.
                    </li>
                    <li>
                      Periodic liver function testing and, where relevant,
                      imaging-based reassessment to track progress.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Liver Enlargement</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      Assessment to understand the underlying cause before
                      finalizing a treatment approach.
                    </li>
                    <li>
                      Herbal support tailored to the specific contributing
                      factor.
                    </li>
                    <li>
                      Contributing factors may include fatty liver, infection
                      recovery, or other causes.
                    </li>
                    <li>
                      Close monitoring to ensure the condition is improving
                      rather than progressing.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Jaundice Recovery</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      Supportive herbal care focused on aiding liver recovery
                      once the acute cause of jaundice has been medically
                      addressed.
                    </li>
                    <li>
                      A diet plan designed to ease the digestive load on the
                      recovering liver.
                    </li>
                    <li>
                      Follow-up testing to confirm that bilirubin and liver
                      enzyme levels are normalizing.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Chronic Liver Inflammation</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      Long-term herbal and dietary management aimed at
                      reducing ongoing inflammatory stress on the liver.
                    </li>
                    <li>
                      Regular monitoring to track whether inflammation markers
                      are improving over the treatment course.
                    </li>
                    <li>
                      Lifestyle guidance to remove or reduce factors
                      contributing to continued liver stress.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Makes Liver Treatment at Balprada Different
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  An in-house pathology lab allows liver function tests to be
                  conducted on-site.
                </li>
                <li>
                  On-site testing ensures consistent and quickly available
                  results to guide treatment decisions.
                </li>
                <li>
                  Physicians focus specifically on liver conditions with
                  dedicated protocols.
                </li>
                <li>
                  Liver issues are not treated identically regardless of their
                  cause or severity.
                </li>
                <li>
                  Treatment plans are adjusted based on actual laboratory
                  results over time.
                </li>
                <li>
                  Treatment plans are not left unchanged regardless of patient
                  progress.
                </li>
                <li>
                  Diet guidance is built around practical and commonly
                  available foods suited to daily life in Bilari and
                  surrounding areas.
                </li>
                <li>
                  Patients receive clear communication about which liver
                  conditions respond well to Ayurvedic management.
                </li>
                <li>
                  Patients are also informed about which conditions require
                  closer medical supervision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Where Ayurveda Fits Alongside Standard Liver Care
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  For liver conditions linked to infections such as hepatitis
                  or requiring specific medical management, Ayurvedic treatment
                  is offered as a supportive addition alongside standard
                  medical care.
                </li>
                <li>
                  Ayurvedic treatment is not presented as a replacement for
                  essential standard medical treatment.
                </li>
                <li>
                  Patients with a diagnosed liver infection or serious
                  underlying condition are encouraged to continue under their
                  treating physician&apos;s supervision.
                </li>
                <li>
                  Patients may pursue supportive Ayurvedic care while keeping
                  their treating physician informed.
                </li>
                <li>
                  For fatty liver and mild-to-moderate hepatomegaly without a
                  serious underlying cause, Ayurvedic treatment can serve as a
                  primary structured intervention.
                </li>
                <li>
                  Primary treatment should be combined with regular monitoring.
                </li>
                <li>
                  The physician clarifies at the outset whether a patient&apos;s
                  condition falls into a supportive-care category or a
                  primary-treatment category.
                </li>
                <li>
                  This decision is based on diagnostic findings.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Guidance for Liver Patients from Bilari
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  A written diet plan is provided to reduce fried, processed,
                  and high-sugar foods that contribute to fat accumulation in
                  the liver.
                </li>
                <li>
                  Patients are guided toward foods that support liver health
                  based on their specific condition and stage.
                </li>
                <li>
                  Alcohol avoidance is strongly advised for all liver patients,
                  regardless of the specific condition being treated.
                </li>
                <li>
                  Family members are briefed on supporting the patient&apos;s
                  diet at home.
                </li>
                <li>
                  Consistency matters more than occasional strict adherence.
                </li>
                <li>
                  Patients are cautioned against unverified herbal supplements
                  or &quot;liver cleanse&quot; products taken without medical
                  guidance.
                </li>
                <li>
                  Some unverified products can add unnecessary strain to an
                  already stressed liver.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Monitoring Progress: What to Expect Over Time
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Initial follow-up visits are usually scheduled closer
                  together.
                </li>
                <li>
                  Closer follow-up helps establish a clear baseline and confirm
                  that the treatment plan is well tolerated.
                </li>
                <li>
                  Liver function tests are repeated at intervals to objectively
                  track enzyme levels and other markers.
                </li>
                <li>
                  Each visit includes a review of test results alongside the
                  patient&apos;s reported symptoms and diet adherence.
                </li>
                <li>
                  If markers don&apos;t show expected improvement, the
                  physician reassesses the treatment approach.
                </li>
                <li>
                  Further evaluation may be recommended when required.
                </li>
                <li>
                  Long-term maintenance guidance, especially around diet, is
                  provided once liver function stabilizes.
                </li>
                <li>
                  Maintenance guidance helps sustain results over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Precautions Liver Patients Should Keep in Mind
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Always disclose all current medications and diagnosed liver
                  conditions to the treating physician.
                </li>
                <li>
                  Do not discontinue any physician-prescribed treatment for
                  liver infections or serious conditions without medical advice.
                </li>
                <li>
                  Attend scheduled follow-up tests even if symptoms have
                  improved.
                </li>
                <li>
                  Liver markers can shift without obvious symptoms.
                </li>
                <li>
                  Report new symptoms such as worsening fatigue, yellowing of
                  the skin or eyes, or abdominal discomfort to the hospital
                  promptly.
                </li>
                <li>
                  Avoid self-adjusting your diet plan without consulting the
                  physician.
                </li>
                <li>
                  This is particularly important regarding fat and sugar
                  intake.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Tips for Bilari Patients Starting Liver Treatment
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Bring all previous liver function test reports and current
                  prescriptions to your first visit.
                </li>
                <li>
                  Be ready to discuss any history of jaundice, hepatitis, or
                  long-term medication use.
                </li>
                <li>
                  These details are relevant to liver assessment.
                </li>
                <li>
                  Ask directly about your specific liver condition and what
                  results are realistic from treatment.
                </li>
                <li>
                  Confirm the recommended testing schedule.
                </li>
                <li>
                  Planning ahead can help you arrange travel from Bilari for
                  follow-up visits.
                </li>
                <li>
                  Keep a simple log of symptoms and diet adherence between
                  visits.
                </li>
                <li>
                  This helps the physician track your progress accurately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Common Causes of Liver Stress Seen in Bilari-Area Patients
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Diet high in fried and processed foods:</strong> A
                  major contributor to fatty liver disease across all age
                  groups, including younger patients.
                </li>
                <li>
                  <strong>Sedentary lifestyle:</strong> Limited physical
                  activity combined with high-calorie diets accelerates fat
                  accumulation in the liver.
                </li>
                <li>
                  <strong>Untreated infections:</strong> Delayed treatment of
                  hepatitis or other liver infections can allow liver stress to
                  progress further before diagnosis.
                </li>
                <li>
                  <strong>Long-term unsupervised medication use:</strong>{" "}
                  Certain medications, when taken without medical guidance over
                  extended periods, can add to liver burden.
                </li>
                <li>
                  <strong>Delayed testing:</strong> Many patients only discover
                  liver issues during a routine check-up.
                </li>
                <li>
                  Early-stage fatty liver often produces no obvious symptoms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Questions to Ask Before Starting Liver Treatment
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  What specific liver condition do I have, and how severe is it
                  based on my test results?
                </li>
                <li>What dietary changes should I prioritize immediately?</li>
                <li>
                  How often will my liver function be re-tested during
                  treatment?
                </li>
                <li>
                  Should I continue seeing a specialist if I have a diagnosed
                  liver infection?
                </li>
                <li>
                  What symptoms should prompt me to seek urgent medical
                  attention?
                </li>
                <li>
                  How will I know if my treatment is working versus if my
                  condition needs a different approach?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Why Early Treatment Matters for Liver Health
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  The liver has a notable capacity to regenerate.
                </li>
                <li>
                  Early-stage conditions like fatty liver often respond well to
                  timely diet correction and herbal support.
                </li>
                <li>
                  Patients who begin treatment before significant scarring or
                  damage occurs tend to see more meaningful improvement in liver
                  function markers.
                </li>
                <li>
                  Left unaddressed, chronic liver stress can progress toward
                  more serious and harder-to-reverse liver damage.
                </li>
                <li>
                  Regular testing remains the most reliable way to catch liver
                  issues early enough for treatment to be most effective.
                </li>
                <li>
                  Testing remains important even when there are no obvious
                  symptoms.
                </li>
              </ul>
            </section>


            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-6 font-serif text-3xl">
                Book a Liver Treatment Consultation
              </h2>

              <ul className="mb-6 list-disc space-y-4 pl-5 text-black">
                <li>
                  Patients from Bilari can contact Balprada Ayurvedic Hospital
                  for liver treatment consultation and follow-up care.
                </li>
                <li>
                  Bring previous liver function reports, prescriptions, and
                  details of current medication.
                </li>
                <li>
                  Patients with serious liver conditions or diagnosed
                  infections should continue standard medical supervision.
                </li>
                <li>
                  The treating physician should be informed about any
                  supportive Ayurvedic treatment.
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