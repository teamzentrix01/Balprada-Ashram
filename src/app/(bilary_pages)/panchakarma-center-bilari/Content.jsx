import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PanchakarmaCenterBilari() {
  const faqs = [
    {
      q: "How long does a Panchakarma treatment program usually take?",
      a: "It varies by condition, but most programs range from 7 to 21 days, depending on the therapies recommended and the individual's response.",
    },
    {
      q: "Is Panchakarma safe for everyone?",
      a: "Most people benefit from it, but certain conditions require caution. A proper consultation helps determine the right approach for your health status.",
    },
    {
      q: "Will I need to follow a special diet during Panchakarma?",
      a: "Yes, a specific diet is usually recommended before, during, and after therapy to support the detoxification process.",
    },
    {
      q: "Can Panchakarma help with chronic back pain?",
      a: "Yes, therapies like Basti and Abhyanga are commonly used and often effective for chronic back pain and stiffness.",
    },
    {
      q: "Are Panchakarma therapies painful?",
      a: "No, most therapies are gentle and relaxing, though some procedures may cause mild, temporary discomfort as toxins are eliminated.",
    },
    {
      q: "Can Panchakarma be combined with regular allopathic treatment?",
      a: "In many cases, yes. It's best discussed with your doctor so both approaches can be coordinated safely.",
    },
    {
      q: "How often should Panchakarma be repeated?",
      a: "Many people benefit from a seasonal detox once or twice a year, while specific health conditions may need a more tailored schedule.",
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
                Panchakarma Center in Bilari – Authentic Ayurvedic Care at
                Balprada Hospital
              </h1>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Panchakarma is one of the oldest and most respected branches
                  of Ayurveda.
                </li>
                <li>
                  It is designed to cleanse the body of accumulated toxins and
                  restore natural balance.
                </li>
                <li>
                  People in Bilari and the surrounding Moradabad region are
                  increasingly looking for lasting, side-effect-free solutions
                  to chronic pain, digestive issues, stress, and lifestyle
                  disorders.
                </li>
                <li>
                  The Panchakarma Center at Balprada Hospital offers a
                  structured and supervised path to genuine wellness.
                </li>
                <li>
                  The treatment approach is rooted in classical Ayurvedic
                  principles.
                </li>
                <li>
                  This article explains what Panchakarma is, who it helps, the
                  therapies offered, and why Balprada Hospital is a trusted
                  choice for authentic Panchakarma treatment in Bilari.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What Is Panchakarma
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Panchakarma literally means &quot;five actions&quot; or
                  &quot;five therapies.&quot;
                </li>
                <li>
                  It is a set of classical Ayurvedic detoxification procedures
                  used to eliminate deep-seated toxins called ama from the
                  body.
                </li>
                <li>
                  Unlike quick-fix treatments, Panchakarma works at the root
                  level.
                </li>
                <li>
                  It aims to restore the balance of the three doshas — Vata,
                  Pitta, and Kapha — that Ayurveda considers essential to good
                  health.
                </li>
                <li>
                  Panchakarma is not a single treatment but a complete
                  therapeutic program.
                </li>
                <li>
                  The program includes preparatory therapies, the main cleansing
                  procedures, and a structured post-care routine.
                </li>
                <li>
                  Panchakarma may be recommended for treating specific health
                  conditions.
                </li>
                <li>
                  It may also be used as a preventive seasonal detox for people
                  who are otherwise healthy but want to maintain long-term
                  wellness.
                </li>
                <li>
                  Every Panchakarma plan is personalized according to an
                  individual&apos;s body constitution, known as prakriti.
                </li>
                <li>
                  Treatment planning also considers the current imbalance, age,
                  and overall health status.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                The Five Classical Panchakarma Therapies
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Vamana (Therapeutic Emesis):</strong> A medically
                  supervised and controlled vomiting therapy used to clear
                  excess Kapha dosha.
                </li>
                <li>
                  Vamana is commonly used for selected respiratory and skin
                  conditions.
                </li>
                <li>
                  <strong>Virechana (Purgation Therapy):</strong> A cleansing
                  procedure that eliminates Pitta-related toxins through the
                  bowel.
                </li>
                <li>
                  Virechana may be recommended for skin disorders, chronic
                  digestive issues, and liver-related imbalances.
                </li>
                <li>
                  <strong>Basti (Medicated Enema):</strong> A Panchakarma
                  therapy that uses herbal decoctions or medicated oils to
                  balance Vata dosha.
                </li>
                <li>
                  Basti is widely used for joint pain, arthritis, and selected
                  neurological conditions.
                </li>
                <li>
                  <strong>Nasya (Nasal Therapy):</strong> Administration of
                  medicated oils or herbal extracts through the nostrils.
                </li>
                <li>
                  Nasya may be used for sinus issues, headaches, migraines, and
                  other conditions above the neck.
                </li>
                <li>
                  <strong>Raktamokshana (Bloodletting Therapy):</strong> A
                  specialized detoxification method used in selected skin and
                  blood-related conditions.
                </li>
                <li>
                  Raktamokshana is performed only when clinically appropriate
                  and under strict supervision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Preparatory and Supporting Therapies
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  <strong>Snehana (Oleation Therapy):</strong> Internal and
                  external application of medicated oils to soften tissues and
                  prepare the body for deeper cleansing.
                </li>
                <li>
                  <strong>Swedana (Sudation or Steam Therapy):</strong> Herbal
                  steam treatment that opens body channels and helps loosen
                  toxins before the main procedures.
                </li>
                <li>
                  <strong>Abhyanga (Full-Body Massage):</strong> A rhythmic and
                  therapeutic oil massage that improves circulation, relaxes
                  muscles, and supports the detox process.
                </li>
                <li>
                  <strong>Shirodhara:</strong> A continuous stream of warm
                  medicated oil poured over the forehead.
                </li>
                <li>
                  Shirodhara is deeply calming for the nervous system and is
                  widely used for stress, anxiety, and sleep disorders.
                </li>
                <li>
                  <strong>Pinda Sweda:</strong> Application of warm herbal
                  poultices to relieve muscular stiffness, joint pain, and
                  chronic body ache.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Health Conditions That Benefit From Panchakarma
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Chronic joint pain, arthritis, and stiffness.</li>
                <li>Back pain, spondylosis, and sciatica-related discomfort.</li>
                <li>
                  Digestive disorders, including bloating, acidity, and
                  irregular bowel habits.
                </li>
                <li>
                  Skin conditions such as psoriasis, eczema, and chronic
                  allergies.
                </li>
                <li>Stress, anxiety, and sleep disturbances.</li>
                <li>Migraines and recurrent headaches.</li>
                <li>
                  Respiratory issues, including chronic cold, sinusitis, and
                  mild asthma-related symptoms.
                </li>
                <li>Obesity and metabolic imbalance.</li>
                <li>General fatigue, low immunity, and post-illness recovery.</li>
                <li>
                  Lifestyle-related disorders linked to poor diet, irregular
                  routine, or high stress levels.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                The Panchakarma Process at Balprada Hospital
              </h2>

              <ul className="list-disc space-y-6 pl-5 text-gray-700">
                <li>
                  <strong>Initial Consultation and Assessment</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      A detailed consultation is conducted to understand the
                      patient&apos;s health history, current complaints,
                      lifestyle, and body constitution.
                    </li>
                    <li>
                      Pulse diagnosis, known as Nadi Pariksha, and other
                      traditional assessment methods are used.
                    </li>
                    <li>
                      Modern evaluation may also be used where needed.
                    </li>
                    <li>
                      Based on the assessment, a personalized Panchakarma
                      protocol is designed.
                    </li>
                    <li>
                      The selected therapies are matched to the individual&apos;s
                      condition.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Purva Karma (Preparatory Phase)</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      Patients undergo Snehana and Swedana therapies over a
                      period of days.
                    </li>
                    <li>
                      These therapies prepare the body and loosen toxins from
                      deep tissues.
                    </li>
                    <li>
                      Dietary guidance is provided during this phase to support
                      the detoxification process from the inside.
                    </li>
                    <li>
                      The preparatory phase is closely monitored.
                    </li>
                    <li>
                      Monitoring ensures that the body is adequately ready
                      before the main cleansing procedures begin.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Pradhana Karma (Main Therapy Phase)</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      The appropriate primary Panchakarma procedure is
                      administered according to the individualized treatment
                      plan.
                    </li>
                    <li>
                      Procedures may include Basti, Virechana, Vamana, or
                      Nasya.
                    </li>
                    <li>
                      Each procedure is carried out under the supervision of
                      trained Ayurvedic practitioners.
                    </li>
                    <li>
                      Careful attention is given to the patient&apos;s comfort
                      and safety throughout the procedure.
                    </li>
                    <li>
                      Vital signs and response to treatment are monitored.
                    </li>
                    <li>
                      The protocol is adjusted if required.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Paschat Karma (Post-Therapy Care)</strong>
                  <ul className="mt-3 list-disc space-y-3 pl-5">
                    <li>
                      After the main procedures, patients follow a structured
                      recovery routine.
                    </li>
                    <li>
                      The recovery routine includes specific dietary
                      recommendations and lifestyle guidelines.
                    </li>
                    <li>
                      Gradual reintroduction of regular food and activity helps
                      the body stabilize the benefits of therapy.
                    </li>
                    <li>
                      Follow-up guidance is provided to help patients maintain
                      the results.
                    </li>
                    <li>
                      Follow-up support also helps prevent recurrence of the
                      original imbalance.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Why Choose Balprada Hospital&apos;s Panchakarma Center
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Authentic and classical Panchakarma procedures performed by
                  trained and experienced practitioners.
                </li>
                <li>
                  Personalized treatment plans rather than a one-size-fits-all
                  approach.
                </li>
                <li>
                  Treatment plans are based on individual assessment.
                </li>
                <li>
                  A clean, hygienic, and dedicated therapy environment designed
                  for comfort and privacy.
                </li>
                <li>
                  Use of high-quality medicated oils, herbal decoctions, and
                  traditional preparations.
                </li>
                <li>
                  Convenient local access for patients in Bilari.
                </li>
                <li>
                  Local access eliminates the need to travel to distant cities
                  for genuine Ayurvedic care.
                </li>
                <li>
                  Integration with the hospital&apos;s broader healthcare
                  setup.
                </li>
                <li>
                  Coordinated care is available for patients who also need
                  general medical evaluation alongside Ayurvedic treatment.
                </li>
                <li>
                  Emphasis on patient education so individuals understand the
                  treatment and the lifestyle changes that support long-term
                  wellness.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                What to Expect During Your Panchakarma Journey
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  An initial consultation to discuss your health goals and
                  concerns in detail.
                </li>
                <li>
                  A customized therapy schedule ranging from a few days to a
                  few weeks, depending on the condition being treated.
                </li>
                <li>
                  Daily therapy sessions combined with dietary and lifestyle
                  guidance.
                </li>
                <li>
                  Ongoing monitoring to ensure that the process is safe,
                  comfortable, and effective.
                </li>
                <li>
                  A structured post-treatment plan to help sustain the benefits
                  long after the sessions are complete.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                The Science Behind Panchakarma&apos;s Growing Popularity
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Modern lifestyles involving processed food, high stress, poor
                  sleep, and low physical activity contribute to a buildup of
                  metabolic toxins.
                </li>
                <li>
                  Ayurveda refers to this buildup as ama.
                </li>
                <li>
                  Panchakarma addresses this buildup directly rather than only
                  managing surface-level symptoms.
                </li>
                <li>
                  This is why many patients turn to Panchakarma after
                  conventional treatments provide only partial or temporary
                  relief.
                </li>
                <li>
                  The therapies work on multiple body systems simultaneously,
                  including the digestive, circulatory, nervous, and
                  musculoskeletal systems.
                </li>
                <li>
                  Patients may report improvements across several complaints,
                  not only the primary condition for which they sought
                  treatment.
                </li>
                <li>
                  Panchakarma is increasingly used alongside modern medicine as
                  a complementary approach.
                </li>
                <li>
                  It may be considered for chronic, lifestyle-linked conditions
                  where long-term medication use requires careful management.
                </li>
                <li>
                  Renewed interest in preventive healthcare has also made
                  seasonal Panchakarma detox programs popular.
                </li>
                <li>
                  People without major illness may use seasonal programs to
                  support energy, immunity, and mental clarity through the year.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Panchakarma for Different Age Groups
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Young adults often use Panchakarma to manage stress, skin
                  issues, and the early effects of sedentary work routines.
                </li>
                <li>
                  Sedentary work-related concerns may include stiffness and
                  digestive irregularity.
                </li>
                <li>
                  Middle-aged patients commonly seek treatment for joint pain,
                  metabolic concerns such as weight gain, and stress-related
                  conditions.
                </li>
                <li>
                  These concerns may accumulate with years of work and family
                  responsibilities.
                </li>
                <li>
                  Elderly patients may benefit from gentler and closely
                  supervised Panchakarma protocols.
                </li>
                <li>
                  These protocols may focus on improving joint mobility,
                  circulation, and overall vitality.
                </li>
                <li>
                  Treatment is tailored carefully to existing health
                  conditions.
                </li>
                <li>
                  Women&apos;s health concerns, including certain menstrual and
                  hormonal imbalances, may also be addressed through specific
                  Panchakarma protocols.
                </li>
                <li>
                  Appropriate care and supervision are provided for women&apos;s
                  health-related protocols.
                </li>
                <li>
                  Treatment intensity, duration, and choice of therapies are
                  adjusted according to age, strength, and the individual&apos;s
                  ability to tolerate the detoxification process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Combining Panchakarma With Lifestyle Guidance
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Therapy sessions at Balprada Hospital are paired with
                  practical guidance on diet, sleep routine, and daily habits.
                </li>
                <li>
                  These daily habits are known as dinacharya in Ayurveda.
                </li>
                <li>
                  Patients are educated on which foods to favor or avoid based
                  on their body constitution.
                </li>
                <li>
                  Patients are not given only generic dietary advice.
                </li>
                <li>
                  Simple yoga postures and breathing practices may be
                  recommended alongside Panchakarma.
                </li>
                <li>
                  These practices may reinforce physical and mental balance.
                </li>
                <li>
                  Seasonal routine adjustments, known as ritucharya, are also
                  discussed.
                </li>
                <li>
                  Ayurveda places strong emphasis on aligning daily habits with
                  seasonal changes to help prevent disease.
                </li>
                <li>
                  This combined approach helps ensure that the benefits of
                  Panchakarma are not temporary.
                </li>
                <li>
                  The approach supports a sustainable, long-term wellness
                  routine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Who Should Consult Before Starting Panchakarma
              </h2>

              <ul className="list-disc space-y-4 pl-5 text-gray-700">
                <li>
                  Pregnant women should consult a qualified practitioner before
                  considering Panchakarma, unless a specific therapy is advised
                  and supervised.
                </li>
                <li>
                  Individuals with certain acute infections should consult
                  before beginning treatment.
                </li>
                <li>
                  Individuals with uncontrolled chronic illnesses should seek
                  medical guidance before Panchakarma.
                </li>
                <li>
                  People who have recently undergone major surgery should
                  consult a qualified practitioner before treatment.
                </li>
                <li>
                  People currently undergoing other intensive medical
                  treatments should discuss Panchakarma with their treating
                  doctor first.
                </li>
                <li>
                  Elderly patients or those with multiple existing health
                  conditions benefit from an individualized and closely
                  supervised approach.
                </li>
                <li>
                  Anyone unsure whether Panchakarma is appropriate for their
                  specific condition should consult Balprada Hospital before
                  starting.
                </li>
                <li>
                  A consultation can help determine the suitability of
                  Panchakarma for the individual patient.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-6 font-serif text-3xl">
                Book a Panchakarma Consultation at Balprada Hospital
              </h2>

              <ul className="mb-6 list-disc space-y-4 pl-5 text-black">
                <li>
                  Patients in Bilari and nearby areas can consult Balprada
                  Hospital for personalized Panchakarma assessment.
                </li>
                <li>
                  The consultation helps determine which therapies are
                  appropriate for the patient&apos;s condition, age, strength,
                  and health status.
                </li>
                <li>
                  Patients should carry previous medical reports,
                  prescriptions, and details of ongoing treatment.
                </li>
                <li>
                  Panchakarma procedures should be performed only under the
                  supervision of qualified Ayurvedic practitioners.
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