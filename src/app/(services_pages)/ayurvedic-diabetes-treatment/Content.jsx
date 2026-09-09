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
      q: "Can Ayurveda cure diabetes completely?",
      a: "Ayurveda supports blood sugar management and overall metabolic health; it works alongside, not instead of, medical treatment, and results vary by individual.",
    },
    {
      q: "Can I stop my diabetes medication once I start Ayurvedic treatment?",
      a: "No, medication or insulin should only be adjusted by your prescribing doctor based on lab-confirmed blood sugar readings.",
    },
    {
      q: "Is Ayurvedic treatment safe for Type 1 diabetes?",
      a: "It may offer supportive benefits, but requires very close coordination with your endocrinologist given the risks involved with insulin management.",
    },
    {
      q: "How soon will I see changes in my blood sugar levels?",
      a: "Timelines vary by individual; your physician will set realistic expectations based on your specific case and monitor progress through regular testing.",
    },
    {
      q: "Are herbal diabetes formulations safe to combine with metformin or insulin?",
      a: "Only under medical supervision, since interactions can affect blood sugar unpredictably; never combine without your doctor's knowledge.",
    },
    {
      q: "Can diet alone help manage diabetes through Ayurveda?",
      a: "Diet is a major component, but is typically combined with herbal therapy and lifestyle changes for a more complete approach.",
    },
    {
      q: "Do I need to repeat blood tests during treatment?",
      a: "Yes, periodic fasting glucose, postprandial, and HbA1c testing is essential to track progress and guide any adjustments.",
    },
    {
      q: "Is this treatment suitable for prediabetes?",
      a: "Yes, many patients seek Ayurvedic support at the prediabetes stage specifically to help prevent or delay progression to full diabetes.",
    },
    {
      q: "Will I receive a written diet plan I can follow at home?",
      a: "Yes, a personalised diet chart is provided along with guidance on meal timing to support daily blood sugar management.",
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
                Ayurvedic Diabetes Treatment at Balprada Hospital
              </h1>


              <p className="text-gray-700 mb-4">
                Diabetes is rarely just about blood sugar numbers — it touches energy levels, sleep, digestion, weight, and long-term nerve and kidney health. At Balprada Hospital, our ayurvedic diabetes treatment programme is designed to support patients in managing these interconnected effects through personalised herbal therapy, structured diet correction, and lifestyle guidance, always working alongside a patient's existing diabetes care rather than replacing it.
              </p>
            </div>


            {/* Section 2 — Understanding Diabetes Through an Ayurvedic Lens */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Diabetes Through an Ayurvedic Lens
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Diabetes is classified under Prameha in classical Ayurvedic texts, a broad category of urinary disorders associated with excessive or abnormal urination, of which Madhumeha (closely correlated with diabetes mellitus) is a specific type.</li>
                <li>Ayurveda describes twenty variations of Prameha, categorised by dosha involvement, with Kapha-dominant patterns most closely associated with what is understood today as Type 2 diabetes.</li>
                <li>The condition is linked to impaired digestion and metabolism (Agni Mandya), where the body's ability to properly process and utilise nutrients is disrupted.</li>
                <li>Contributing lifestyle factors commonly identified include excessive intake of heavy, sweet, or processed foods, sedentary routines, disrupted sleep, and chronic stress.</li>
                <li>Ayurveda distinguishes between Sthula Pramehi (diabetes in patients with excess body weight) and Krisha Pramehi (diabetes in leaner patients), since the treatment approach differs meaningfully between the two.</li>
              </ul>
            </div>


            {/* Section 3 — Important Note Before Starting Any Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Important Note Before Starting Any Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Diabetes management always requires ongoing coordination with your physician or endocrinologist — Ayurvedic treatment is intended to complement, not replace, prescribed medication or insulin.</li>
                <li>Blood sugar levels must continue to be monitored regularly, and any changes to medication dosage should only be made by the prescribing doctor based on lab-confirmed readings.</li>
                <li>Patients with Type 1 diabetes, or those on insulin, require particularly close coordination between their Ayurvedic physician and their treating doctor to avoid dangerous fluctuations in blood sugar.</li>
                <li>Sudden or unsupervised changes to diet, medication, or insulin dosage based on how a patient &quot;feels&quot; can be genuinely dangerous and should never be attempted without medical guidance.</li>
              </ul>
            </div>


            {/* Section 4 — Diabetes-Related Conditions We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diabetes-Related Conditions We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Type 2 diabetes management support, alongside a patient's existing prescribed treatment</li>
                <li>Prediabetes and insulin resistance, with a focus on preventing progression</li>
                <li>Diabetes-related fatigue and low energy levels</li>
                <li>Diabetic neuropathy-related discomfort, as a supportive approach alongside neurological care</li>
                <li>Diabetes-linked digestive issues, such as bloating or irregular digestion</li>
                <li>Weight management support for patients whose diabetes is linked to excess body weight</li>
                <li>General metabolic support for patients with a strong family history of diabetes</li>
              </ul>
            </div>


            {/* Section 5 — Our Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Treatment Approach
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Assessment and Dosha Evaluation
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every consultation begins with a review of the patient's diagnosis history, current medication or insulin regimen, and recent blood sugar and HbA1c reports.</li>
                    <li>The patient's Prakriti (constitution) and current dosha imbalance are assessed to guide which herbal formulations and dietary adjustments are appropriate.</li>
                    <li>Body weight, activity levels, sleep patterns, and stress are evaluated as contributing factors, since these strongly influence blood sugar control.</li>
                    <li>Reports and medication details from the patient's endocrinologist or physician are reviewed so the Ayurvedic plan is coordinated with existing medical care.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Personalised Herbal Formulations
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Herbal formulations are selected based on the specific dosha pattern and body type of the patient, rather than a single fixed combination for everyone.</li>
                    <li>Classical herbs commonly referenced in Prameha management include Gudmar (Gymnema Sylvestre), Jamun seed, Karela (bitter gourd), Methi (fenugreek), and Vijaysar, chosen for their traditional association with blood sugar support.</li>
                    <li>Formulations are reviewed periodically alongside updated lab reports, and dosage is adjusted only by the treating physician.</li>
                    <li>Patients are advised against combining herbal formulations with their prescribed diabetes medication without medical supervision, since interactions can affect blood sugar unpredictably.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Diet Correction (Pathya-Apathya)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A personalised diet plan is created based on the patient's body type, activity level, and current blood sugar control, rather than a generic &quot;diabetic diet&quot; handout.</li>
                    <li>Emphasis is placed on whole grains, fibre-rich vegetables, and controlled portion sizes to help manage post-meal blood sugar spikes.</li>
                    <li>Guidance is provided on meal timing and spacing, since irregular eating patterns can worsen blood sugar fluctuations.</li>
                    <li>Specific foods known to aggravate Kapha and worsen metabolic sluggishness are identified and limited based on the individual case.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Panchakarma and Detoxification Support
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Selected Panchakarma procedures may be recommended to support digestion and metabolic function, chosen based on the patient's overall health and tolerance.</li>
                    <li>Udvartana (herbal powder massage) is sometimes used to support circulation and management of excess body weight linked to diabetes.</li>
                    <li>Detox protocols are only recommended after confirming the patient is medically fit, particularly for those with fluctuating blood sugar or other complications.</li>
                    <li>Intensity and duration of any Panchakarma therapy are adjusted for patients with diabetic complications such as neuropathy or reduced wound healing.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Yoga, Pranayama, and Stress Management
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Specific yoga asanas are recommended to support metabolic activity, circulation, and stress reduction, adapted to the patient's fitness level.</li>
                    <li>Pranayama techniques are commonly included, since chronic stress is a recognised contributor to blood sugar fluctuation.</li>
                    <li>Guidance on consistent physical activity is provided, since regular movement plays a significant role in insulin sensitivity.</li>
                    <li>Exercise routines are adjusted for patients with diabetic complications affecting the feet, eyes, or cardiovascular system.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 6 — How We Support Long-Term Blood Sugar Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How We Support Long-Term Blood Sugar Management
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular monitoring of fasting blood sugar, postprandial levels, and periodic HbA1c testing to track progress objectively.</li>
                <li>Coordination with the patient's physician so any adjustment to insulin or oral medication is made only by the prescribing doctor.</li>
                <li>Ongoing dietary guidance that evolves as the patient's activity level, weight, and blood sugar control change over time.</li>
                <li>Education on recognising early signs of blood sugar fluctuation, so patients know when to seek prompt medical attention.</li>
                <li>Support for sustainable lifestyle changes rather than short-term restrictive measures that are difficult to maintain long-term.</li>
              </ul>
            </div>


            {/* Section 7 — Why Patients Choose Balprada Hospital for Diabetes Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada Hospital for Diabetes Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Treatment plans are built around each patient's dosha pattern, body type, and current medical management — not a fixed programme applied to everyone.</li>
                <li>Herbal formulations are prepared and quality-checked at our in-house pharmacy.</li>
                <li>Patients are strongly encouraged to continue their prescribed diabetes medication or insulin and to inform their treating doctor about any Ayurvedic therapy they undergo.</li>
                <li>Regular lab monitoring, coordinated with our in-house pathology lab, ensures treatment decisions are based on current data rather than assumption.</li>
                <li>Physicians provide realistic expectations about what Ayurvedic support can achieve, rather than promising a cure or the ability to stop prescribed medication.</li>
              </ul>
            </div>


            {/* Section 8 — What to Expect: The Treatment Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect: The Treatment Journey
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Step 1 – Consultation:</strong> Review of diagnosis history, current medication, recent blood sugar and HbA1c reports, and lifestyle factors.</li>
                <li><strong>Step 2 – Assessment:</strong> Evaluation of Prakriti, dosha imbalance, and body type to guide the treatment approach.</li>
                <li><strong>Step 3 – Plan Design:</strong> A combination of herbal medicine, diet chart, and, where appropriate, Panchakarma and yoga guidance is finalised.</li>
                <li><strong>Step 4 – Supervised Implementation:</strong> Patients begin the plan with clear instructions on how it fits alongside their existing medication schedule.</li>
                <li><strong>Step 5 – Progress Review:</strong> Follow-up consultations track blood sugar trends, weight, energy levels, and any symptom changes.</li>
                <li><strong>Step 6 – Long-Term Maintenance:</strong> Once blood sugar is stable, patients receive a sustainable routine to help maintain control over time.</li>
              </ul>
            </div>


            {/* Section 9 — Signs That Warrant Prompt Medical Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That Warrant Prompt Medical Attention
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Blood sugar readings significantly outside the range advised by your physician</li>
                <li>Symptoms of very low blood sugar, such as sudden sweating, shakiness, confusion, or dizziness</li>
                <li>Non-healing wounds or persistent infections, particularly on the feet</li>
                <li>Sudden vision changes or persistent tingling and numbness in the hands or feet</li>
                <li>Unexplained rapid weight loss or persistent excessive thirst and urination</li>
                <li>Any of these signs should be addressed with your treating doctor immediately rather than managed solely through lifestyle or herbal measures.</li>
              </ul>
            </div>


            {/* Section 10 — Lifestyle Guidance for Better Blood Sugar Control */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Guidance for Better Blood Sugar Control
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintain consistent meal timing and avoid skipping meals, which can cause unpredictable blood sugar swings.</li>
                <li>Incorporate regular, moderate physical activity as advised by your physician, adjusted for any existing complications.</li>
                <li>Prioritise consistent sleep timing, since poor sleep is linked to insulin resistance.</li>
                <li>Monitor blood sugar as frequently as your doctor recommends, and keep a record to share at each consultation.</li>
                <li>Avoid self-adjusting insulin or medication dosage based on diet changes without your doctor's explicit guidance.</li>
                <li>Keep your physician informed about any herbal formulations or Panchakarma therapy you are undergoing.</li>
              </ul>
            </div>


            {/* Section 11 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Hospital. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan.
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


            {/* Section 12 — FAQs */}
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