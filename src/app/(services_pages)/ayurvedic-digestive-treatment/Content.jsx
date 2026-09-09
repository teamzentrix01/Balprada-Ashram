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
      q: "How long does Ayurvedic digestive treatment usually take to show results?",
      a: "This varies by individual, but many patients notice gradual improvement in bloating and comfort within a few weeks of consistent medicine and diet discipline.",
    },
    {
      q: "Is Ayurvedic digestive treatment safe alongside other medication?",
      a: "Yes, the doctor reviews your current medication during consultation so the plan is suited to your overall situation. Always share your full medical history at the time of consultation.",
    },
    {
      q: "Do I need to follow a strict diet during treatment?",
      a: "Diet guidance is an important part of the plan, but it is adjusted to your daily routine rather than being an impractical, overly restrictive chart.",
    },
    {
      q: "Can this treatment help with chronic constipation?",
      a: "Ayurvedic care, including medicine, diet correction, and routine changes, is commonly used to support patients with irregular or sluggish bowel movements.",
    },
    {
      q: "Is an in-person visit necessary, or can I get initial guidance remotely?",
      a: "An in-person consultation allows for a more accurate assessment, but you can call or WhatsApp the clinic beforehand to understand the process and plan your visit.",
    },
    {
      q: "Where is Balprada located?",
      a: "The main branch is in Tehsil Bilari, District Moradabad, and a second branch operates in Sector-13, New Moradabad, Delhi Road, Moradabad.",
    },
    {
      q: "Is there a free consultation option?",
      a: "Yes, Balprada offers a free OPD consultation on the 15th of every month at its facility.",
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
                Ayurvedic Digestive Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4">
                Weak digestion is one of the most common health complaints people quietly live with for years — bloating after meals, acidity, irregular bowel movements, low appetite, and a constant feeling of heaviness. At Balprada Ayurvedic Hospital &amp; Research Center, digestive health is treated as the foundation of overall wellness, not a minor issue to be ignored. With 35 years of trusted Ayurvedic care, in-house herbal medicines, and a peaceful ashram-based healing environment, Balprada offers a complete Ayurvedic approach to digestive treatment that looks at diet, daily routine, and the body's natural digestive fire (Agni) together, rather than treating symptoms in isolation.
              </p>
            </div>


            {/* Section 2 — Understanding Digestive Health in Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Digestive Health in Ayurveda
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda considers Agni (digestive fire) to be the center of good health — when Agni is weak or irregular, it affects not just digestion but energy, immunity, and long-term wellbeing.</li>
                <li>Weak digestion is rarely caused by one single factor — it usually develops from a combination of poor eating habits, irregular meal timing, stress, and lack of physical movement.</li>
                <li>Left unaddressed, ongoing digestive imbalance can gradually affect nutrient absorption, weight, skin health, sleep, and even mood.</li>
                <li>Balprada's approach does not rely on temporary relief alone — the focus is on identifying the root cause of the imbalance and correcting it through medicine, diet, and routine.</li>
                <li>Every patient's digestion is assessed individually, since Ayurveda recognizes that the same symptom can come from different underlying causes in different people.</li>
              </ul>
            </div>


            {/* Section 3 — Common Digestive Concerns We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Digestive Concerns We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Acidity and heartburn — a burning sensation after meals or on an empty stomach, often linked to irregular eating and excess spicy or oily food.</li>
                <li>Bloating and gas — a feeling of fullness, discomfort, or trapped gas that continues even after light meals.</li>
                <li>Indigestion (Ajirna) — food that feels like it is sitting heavy in the stomach for hours after eating.</li>
                <li>Irregular bowel movements — constipation, loose motions, or an unpredictable bowel pattern that disrupts daily comfort.</li>
                <li>Loss of appetite — reduced interest in food, or feeling full too quickly.</li>
                <li>Chronic fatigue linked to poor digestion — low energy that often traces back to the body not absorbing nutrients properly.</li>
                <li>Digestive discomfort linked with stress — many patients notice their digestion worsens during periods of tension, travel, or disrupted routine.</li>
              </ul>
            </div>


            {/* Section 4 — The Balprada Approach to Digestive Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Approach to Digestive Treatment
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Detailed Consultation First
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every treatment journey begins with a doctor reviewing the patient's history, current complaints, existing reports, and any ongoing medication.</li>
                    <li>The consulting vaidya takes time to understand eating patterns, work routine, sleep habits, and stress levels — since digestion in Ayurveda is closely tied to lifestyle.</li>
                    <li>This is not a rushed, one-size-fits-all consultation — the plan that follows is based specifically on what is observed during this assessment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    In-House Ayurvedic Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal medicines in-house, which allows the care team to maintain consistency and quality across every batch given to patients.</li>
                    <li>Formulations are selected based on the specific digestive imbalance identified — the approach for acidity is not the same as the approach for chronic constipation or bloating.</li>
                    <li>Medicines are typically combined with clear diet instructions so the herbal support and daily food intake work together rather than working against each other.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diet and Routine Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Diet guidance is considered as important as medicine in the Balprada approach to digestive care.</li>
                    <li>Patients are guided on meal timing, food combinations to avoid, and simple routine changes that support the body's natural digestive rhythm.</li>
                    <li>Rather than handing over a generic diet chart, the guidance is adjusted to the patient's specific digestive pattern and daily schedule.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Supportive Facilities
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Panchakarma — cleansing-based therapies may be recommended where suitable, based on individual assessment, to help support the body's natural balance.</li>
                    <li>Yoga — gentle yoga practices can support digestion, reduce bloating, and improve overall body-mind balance.</li>
                    <li>Naturopathy — nature-led practices are used to complement the herbal treatment plan where appropriate.</li>
                    <li>Balprada Pathology Lab — in-house diagnostic testing helps the care team track relevant markers as part of a more complete treatment journey.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Structured Follow-up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Digestive health rarely improves overnight — regular follow-up allows the doctor to observe how the body is responding and adjust the plan accordingly.</li>
                    <li>Follow-up consultations focus on reinforcing diet discipline and routine, which are often the most important part of long-term digestive improvement.</li>
                    <li>Patients are encouraged to stay in touch with the care team even after visible improvement, to help sustain the results.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — Why Patients Choose Balprada for Digestive Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Digestive Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to quality and consistency rather than sourced from third parties.</li>
                <li>A peaceful ashram environment that supports patients who want a calmer, more disciplined setting for their treatment journey.</li>
                <li>Experienced doctors who take time to understand the person, not just the symptom.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week for consultation and follow-up.</li>
                <li>Free OPD consultation on the 15th of every month, making care more accessible for patients who want to start with a low-cost first step.</li>
                <li>A combined approach — medicine, diet, yoga, panchakarma, naturopathy, and pathology support working together rather than in isolation.</li>
              </ul>
            </div>


            {/* Section 6 — Who Can Consider This Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Consider This Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Individuals experiencing recurring acidity, bloating, or indigestion that has not improved with basic dietary changes.</li>
                <li>People with irregular bowel patterns affecting their daily comfort and routine.</li>
                <li>Patients already under other medical care who want Ayurvedic support for digestion alongside their existing treatment.</li>
                <li>Anyone experiencing digestion-linked fatigue, appetite loss, or general low energy.</li>
                <li>Patients looking for a structured, doctor-guided routine rather than trying scattered home remedies without direction.</li>
              </ul>


              
              
            </div>


            {/* Section 7 — What to Expect During Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring any previous reports, prescriptions, or test results related to your digestive concern, if available.</li>
                <li>Be ready to discuss your daily meal timings, food habits, water intake, sleep pattern, and stress levels honestly — this helps the doctor understand the real picture.</li>
                <li>The first consultation focuses on assessment; the treatment plan, including medicines and diet guidance, is explained clearly before you begin.</li>
                <li>Follow-up visits are used to track progress and fine-tune the plan as your digestion responds to treatment.</li>
              </ul>
            </div>


            {/* Section 8 — Simple Lifestyle Habits That Support Digestive Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Simple Lifestyle Habits That Support Digestive Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eating meals at consistent times each day, rather than skipping meals or eating late at night.</li>
                <li>Avoiding excess cold, fried, or heavily processed food, especially when digestion is already weak.</li>
                <li>Drinking warm water through the day instead of cold water with meals.</li>
                <li>Allowing a short gap of rest after meals instead of lying down immediately or resuming heavy activity.</li>
                <li>Practicing basic yoga or a short walk after dinner to support natural digestion.</li>
                <li>Managing stress through simple daily routine, since digestion is closely linked to mental state in Ayurveda.</li>
              </ul>
            </div>


            {/* Section 9 — How Weak Digestion Affects Overall Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Weak Digestion Affects Overall Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Nutrient absorption — even a healthy diet does not benefit the body fully if digestion is weak, since nutrients are not absorbed properly from food.</li>
                <li>Energy levels — persistent tiredness and low stamina are very often linked back to poor digestion rather than any other cause.</li>
                <li>Skin health — many patients notice that dull skin, breakouts, or irritation improve once digestion is corrected, since Ayurveda views skin and gut health as closely connected.</li>
                <li>Sleep quality — heaviness, bloating, or acidity at night can disturb sleep, which in turn affects digestion the next day, creating a cycle that needs to be broken with proper treatment.</li>
                <li>Immunity — Ayurveda considers strong digestion to be closely tied to the body's overall immunity and resilience against illness.</li>
                <li>Weight management — both unexplained weight gain and weight loss can be connected to how well the body is digesting and absorbing food.</li>
              </ul>
            </div>


            {/* Section 10 — The Balprada Difference in Digestive Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Difference in Digestive Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Unlike generic over-the-counter remedies that only mask symptoms temporarily, Balprada's approach works toward correcting the underlying digestive imbalance.</li>
                <li>The care team does not separate medicine from lifestyle guidance — both are given together as one plan, since Ayurveda considers them inseparable for lasting results.</li>
                <li>Patients are treated as individuals, with formulations and diet plans adjusted rather than a single standard protocol applied to everyone.</li>
                <li>The ashram-based setting allows patients who choose to stay for a period of focused care to follow a disciplined daily routine that supports faster and more consistent improvement.</li>
                <li>Transparent communication is maintained throughout — patients are informed about what is being given and why, rather than being handed medicine without explanation.</li>
              </ul>
            </div>


            {/* Section 11 — Preparing for Long-Term Digestive Wellness */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Long-Term Digestive Wellness
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Digestive treatment at Balprada is not positioned as a one-time fix — the goal is to help patients build habits that keep their digestion stable well after treatment ends.</li>
                <li>Patients are encouraged to gradually adopt the diet and routine principles taught during consultation as part of their everyday life, not just during the treatment period.</li>
                <li>Seasonal changes can affect digestion, so guidance may be adjusted at different times of the year to help the body stay balanced.</li>
                <li>Ongoing awareness of one's own digestive pattern — what foods suit the body and what does not — is encouraged as part of the long-term approach.</li>
                <li>Family members are often included in diet and routine discussions, since shared meals and household habits play a role in sustaining improvement.</li>
              </ul>
            </div>


            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan.
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