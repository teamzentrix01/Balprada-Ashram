import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "Can Ayurvedic treatment help manage thyroid symptoms?",
      a: "Ayurvedic medicine, diet, and lifestyle correction are commonly used alongside prescribed thyroid medication to support overall metabolic and hormonal balance.",
    },
    {
      q: "Is Ayurvedic thyroid treatment safe alongside thyroid medication?",
      a: "Yes, the doctor reviews your current medication and reports during consultation so the Ayurvedic plan is suited to your overall situation. Always share your full medical history.",
    },
    {
      q: "Will I need to stop my thyroid medication if I start Ayurvedic treatment?",
      a: "No. Balprada's approach is designed to work alongside your prescribed treatment, not replace it. Continue your medication as advised by your physician.",
    },
    {
      q: "Does Balprada treat both hypothyroidism and hyperthyroidism?",
      a: "Yes, care is tailored differently depending on whether the imbalance is hypothyroid or hyperthyroid in nature.",
    },
    {
      q: "How long does Ayurvedic thyroid support usually take to show results?",
      a: "This varies by individual, but many patients are guided to continue treatment over several months, alongside regular monitoring and follow-up.",
    },
    {
      q: "Where is Balprada located?",
      a: "The main branch is in Tehsil Bilari, District Moradabad, with a second branch in Sector-13, New Moradabad, Delhi Road, Moradabad.",
    },
    {
      q: "Is there a free consultation option?",
      a: "Yes, Balprada offers a free OPD consultation on the 15th of every month.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Main Content */}
          <div className="flex-1 order-1">

            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Thyroid Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Thyroid imbalance can quietly affect nearly every part of daily life — energy levels, weight, mood, sleep, hair health, and metabolism.</li>
                <li>Whether it shows up as an underactive thyroid (hypothyroidism) or an overactive one (hyperthyroidism), many patients continue managing daily discomfort even while on standard treatment.</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, thyroid care is approached as part of the body&apos;s overall metabolic and hormonal balance, with a treatment plan designed to work alongside a patient&apos;s existing medical care.</li>
                <li>With 35 years of trusted Ayurvedic experience, in-house herbal medicines, and a calm ashram-based environment, Balprada offers structured Ayurvedic support for patients managing thyroid-related concerns.</li>
              </ul>
            </div>

            {/* Section 2 — Understanding Thyroid Imbalance in Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Thyroid Imbalance in Ayurveda
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda links thyroid function closely to Agni (digestive and metabolic fire) and the balance of the three doshas — Vata, Pitta, and Kapha.</li>
                <li>Hypothyroidism is generally associated with a Kapha-dominant imbalance, often linked to slow metabolism, weight gain, fatigue, and sluggish digestion.</li>
                <li>Hyperthyroidism is generally associated with a Pitta-dominant imbalance, often linked to excess heat, restlessness, rapid heartbeat, and weight loss.</li>
                <li>Ayurveda considers weak digestion and the buildup of Ama (metabolic toxins) to be significant contributing factors in ongoing thyroid imbalance.</li>
                <li>Every patient&apos;s thyroid concern is assessed individually, since the pattern of imbalance and its severity can vary widely from person to person.</li>
              </ul>
            </div>

            {/* Section 3 — Common Thyroid Concerns We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Thyroid Concerns We Support
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Hypothyroidism — fatigue, weight gain, cold sensitivity, hair thinning, and sluggish digestion linked to an underactive thyroid.</li>
                <li>Hyperthyroidism — restlessness, rapid heartbeat, unexplained weight loss, and heat intolerance linked to an overactive thyroid.</li>
                <li>Thyroid-linked weight fluctuation — difficulty managing weight despite regular diet and exercise due to underlying thyroid imbalance.</li>
                <li>Thyroid-related fatigue — persistent low energy that does not improve with rest alone.</li>
                <li>Hormonal imbalance affecting menstrual health, where thyroid dysfunction contributes to irregular cycles in women.</li>
                <li>Hair and skin changes linked to thyroid imbalance, including hair thinning, dryness, or dullness.</li>
                <li>Stress-linked thyroid disturbance, where ongoing tension appears to be affecting hormonal balance and thyroid symptoms.</li>
              </ul>
            </div>

            {/* Section 4 — The Balprada Approach to Thyroid Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Approach to Thyroid Treatment
              </h2>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">Detailed Consultation First</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Every treatment plan begins with the doctor reviewing thyroid function reports, current medication, symptoms, and overall health history.</li>
                <li>The consultation looks closely at diet, digestion, sleep pattern, and stress levels, since these directly influence metabolic and hormonal balance.</li>
                <li>Since most thyroid patients are already on medical treatment, the Balprada team takes care to understand what is currently prescribed before suggesting any Ayurvedic support.</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">In-House Ayurvedic Medicines</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada prepares its own herbal medicines in-house, allowing consistent quality across every formulation given to patients.</li>
                <li>Formulations are selected based on whether the imbalance is hypothyroid or hyperthyroid in nature, along with the patient&apos;s overall digestive and metabolic pattern.</li>
                <li>Medicines are given alongside clear diet and routine guidance so internal support and daily habits work toward the same goal.</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">Diet and Routine Correction</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Diet guidance is tailored to the type of thyroid imbalance — supporting metabolism in hypothyroid cases, and providing cooling, calming nutrition in hyperthyroid cases.</li>
                <li>Patients are guided on meal timing, food choices, and simple lifestyle adjustments known to support thyroid and hormonal balance.</li>
                <li>Since stress is recognized as a contributing factor in thyroid imbalance, routine guidance often includes practical suggestions for a calmer, more consistent daily rhythm.</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">Supportive Facilities</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Panchakarma — cleansing-based therapies may be recommended where suitable, based on individual assessment, to support metabolic balance.</li>
                <li>Yoga — specific yoga practices are traditionally used to support thyroid function, metabolism, and overall hormonal balance.</li>
                <li>Meditation — guided meditation and breath awareness help manage stress, which is closely linked to thyroid health.</li>
                <li>Balprada Pathology Lab — in-house diagnostic testing helps the care team track thyroid function markers as part of a complete care journey.</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2 mt-4">Structured, Ongoing Follow-up</h3>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Thyroid-related treatment often requires monitoring over a period of months, so regular follow-up is a core part of the Balprada approach.</li>
                <li>The care team observes how the body is responding to treatment, reviewing symptoms and relevant reports to guide adjustments.</li>
                <li>Follow-up also ensures the Ayurvedic plan continues to stay coordinated with the patient&apos;s ongoing thyroid medication and monitoring.</li>
              </ul>
            </div>

            {/* Section 5 — Why Patients Choose Balprada for Thyroid Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Thyroid Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to quality and consistency.</li>
                <li>In-house pathology support for tracking thyroid function alongside the Ayurvedic treatment plan.</li>
                <li>A peaceful ashram environment suited to patients managing a condition that benefits from a calm, disciplined daily routine.</li>
                <li>Experienced doctors who coordinate Ayurvedic care with a patient&apos;s existing thyroid medication rather than working in isolation.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week.</li>
                <li>Free OPD consultation on the 15th of every month, offering an accessible starting point for patients exploring Ayurvedic thyroid support.</li>
              </ul>
            </div>

            {/* Section 6 — Who Can Consider This Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Consider This Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients diagnosed with hypothyroidism or hyperthyroidism who want Ayurvedic support alongside their prescribed medication.</li>
                <li>Individuals experiencing thyroid-linked fatigue, weight change, or hair and skin concerns.</li>
                <li>Women managing thyroid-related menstrual irregularities looking for a combined approach to hormonal balance.</li>
                <li>Patients who feel their thyroid symptoms are not fully managed by medication alone and are looking for additional lifestyle-based support.</li>
                <li>Anyone seeking a structured, doctor-guided Ayurvedic routine to support long-term thyroid and metabolic balance.</li>
                <li>Patients who have completed initial diagnosis and want an additional, coordinated layer of lifestyle and dietary support.</li>
              </ul>

              
            </div>

            {/* Section 7 — What to Expect During Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bring your most recent thyroid function test reports (TSH, T3, T4) and current prescription details to your consultation.</li>
                <li>Be ready to discuss your diet, sleep pattern, energy levels, and stress, as this helps the doctor understand the complete picture.</li>
                <li>The suggested Ayurvedic plan, including medicines and diet guidance, is explained clearly before you begin.</li>
                <li>Follow-up visits are used to track your progress and adjust the plan based on your response and updated reports.</li>
              </ul>
            </div>

            {/* Section 8 — Simple Lifestyle Habits That Support Thyroid Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Simple Lifestyle Habits That Support Thyroid Health
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Following a consistent daily routine for meals, sleep, and waking time, since irregularity can disturb metabolic and hormonal balance.</li>
                <li>Eating warm, freshly prepared food and avoiding excess cold, processed, or heavily fried food.</li>
                <li>Practicing gentle yoga or light physical activity regularly, as guided by the care team.</li>
                <li>Managing stress through simple daily practices such as meditation, breath awareness, or quiet rest.</li>
                <li>Prioritizing consistent, adequate sleep, since disturbed sleep is closely linked to hormonal imbalance.</li>
                <li>Continuing regular thyroid function testing as advised by your physician, alongside the Ayurvedic care plan.</li>
                <li>Keeping a simple record of energy levels, sleep, and symptoms to discuss during follow-up visits.</li>
              </ul>
            </div>

            {/* Section 9 — How Thyroid Imbalance Affects Overall Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Thyroid Imbalance Affects Overall Health
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Energy levels — both hypothyroidism and hyperthyroidism can leave patients feeling persistently tired, though in different ways.</li>
                <li>Weight and metabolism — thyroid imbalance is one of the most common hidden reasons behind unexplained weight gain or weight loss.</li>
                <li>Heart rate and circulation — hyperthyroidism in particular can affect heart rate and overall circulatory comfort.</li>
                <li>Skin, hair, and nails — thinning hair, dry skin, and brittle nails are commonly linked to thyroid imbalance.</li>
                <li>Mood and mental clarity — patients often report mood swings, irritability, or difficulty concentrating alongside thyroid dysfunction.</li>
                <li>Menstrual and reproductive health — thyroid imbalance frequently affects menstrual regularity and overall hormonal balance in women.</li>
              </ul>
            </div>

            {/* Section 10 — The Balprada Difference in Thyroid Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Difference in Thyroid Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Rather than offering a single generic protocol, Balprada tailors each thyroid care plan to whether the imbalance is hypothyroid or hyperthyroid, along with the patient&apos;s broader digestive and metabolic pattern.</li>
                <li>Ayurvedic medicine, diet, and stress-support practices such as yoga and meditation are planned together as one coordinated approach rather than separate, disconnected services.</li>
                <li>The in-house pathology lab allows the care team to track thyroid markers directly, keeping the Ayurvedic plan closely aligned with measurable progress.</li>
                <li>The ashram-based setting offers a calm, structured environment that can support the discipline needed for sustained hormonal balance.</li>
                <li>The care team remains closely coordinated with each patient&apos;s existing prescribed treatment, ensuring the Ayurvedic plan complements rather than conflicts with ongoing medical care.</li>
              </ul>
            </div>

            {/* Section 11 — Preparing for Long-Term Thyroid Balance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Long-Term Thyroid Balance
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Thyroid-related imbalance is generally a long-term condition, so Balprada&apos;s approach is built around sustained care and regular monitoring rather than a one-time treatment.</li>
                <li>Patients are encouraged to continue their prescribed medication and thyroid function testing throughout the Ayurvedic treatment period.</li>
                <li>Gradual adoption of the diet and lifestyle principles taught during consultation is encouraged as an ongoing habit, not just for the treatment period.</li>
                <li>Seasonal changes can influence metabolism and energy levels, so guidance may be adjusted through the year to help maintain balance.</li>
                <li>Continued awareness of stress, sleep, and daily routine is encouraged as part of maintaining thyroid balance over the long term.</li>
              </ul>
            </div>

            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for thyroid concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center. The initial consultation typically involves a detailed case history review, thyroid function assessment, and personalised treatment planning. For patients traveling from outside Moradabad, the hospital also assists with scheduling follow-ups aligned with their treatment progress.
              </p>

              <div className="space-y-4 mb-6">

                {/* Main Branch */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                {/* Moradabad Branch */}
                <div className="flex items-start gap-3 mt-4">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <p className="text-black">
                      F-19, Sector-13, New Moradabad, Delhi Road,
                      Moradabad, Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

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

              <div className="flex gap-4 flex-wrap">

                <Link href="/contact">
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    <Phone className="inline mr-2" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/treatments">
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Explore Treatments
                  </button>
                </Link>

              </div>
            </div>

            {/* Section 13 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">

                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">
                      {faq.a}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}