import Link from "next/link";
import {
  Phone,
  MapPin,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";


export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "Can Ayurveda cure CKD completely?",
      a: "No. Ayurveda cannot reverse significant kidney damage, but it may offer supportive care that helps slow progression and improve quality of life.",
    },
    {
      q: "At what CKD stage should Ayurvedic treatment begin?",
      a: "Earlier stages generally offer more scope for supportive benefit, but we evaluate and support patients at any stage, always alongside nephrology care.",
    },
    {
      q: "Will Ayurvedic treatment interfere with my current medications?",
      a: "No. Our formulations are designed to work alongside your prescribed treatment, not against it.",
    },
    {
      q: "How often will I need follow-up visits?",
      a: "This depends on your CKD stage. Earlier stages may need less frequent monitoring, while advanced stages require closer follow-up.",
    },
    {
      q: "Can diet alone slow CKD progression?",
      a: "Diet plays a major role, but it works best combined with herbal support, lifestyle correction, and consistent medical monitoring.",
    },
    {
      q: "Is Balprada's approach suitable for CKD patients already on dialysis?",
      a: "Yes, we offer supportive, symptom-focused care for dialysis patients, always coordinated with their treating nephrologist.",
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
                Understanding Chronic Kidney Disease and Ayurveda&apos;s Supportive Role
              </h1>


              <p className="text-gray-700 mb-4">
                Chronic Kidney Disease (CKD) is a gradual, long-term decline in kidney function that develops over months or years, often silently. At Balprada Ayurvedic Hospital &amp; Research Center, we offer structured Ayurvedic supportive care designed to work alongside nephrology treatment at every stage of CKD — from early detection through advanced management.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>CKD is defined by a gradual reduction in the kidneys&apos; ability to filter waste and excess fluid from the blood, typically tracked through GFR (Glomerular Filtration Rate)</li>
                <li>The condition progresses through recognized stages, from mild reduction in function to complete kidney failure</li>
                <li>Ayurveda views CKD through the lens of weakened Agni (digestive fire), aggravated Apana Vata, and the gradual accumulation of Ama (toxins) that burdens the Mutravaha Srotas (urinary channels)</li>
                <li>Our approach focuses on supporting kidney function, slowing progression where medically possible, and improving the patient&apos;s overall quality of life at every stage</li>
                <li>Every treatment plan is built around the patient&apos;s actual GFR and creatinine reports, reviewed and monitored over time</li>
                <li>Ayurvedic care is always positioned as complementary to nephrology treatment, never as a replacement for it</li>
              </ul>
            </div>


            {/* Section 2 — Stages */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Stages of CKD and What They Mean
              </h2>


              <p className="text-gray-700 mb-4">
                Understanding where a patient stands in the disease process shapes the entire supportive care approach.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Stage 1-2 (mild reduction) — kidney damage may be present with near-normal or mildly reduced function; often detected incidentally through routine testing</li>
                <li>Stage 3 (moderate reduction) — function is noticeably reduced; this is often when symptoms and lab abnormalities first become apparent</li>
                <li>Stage 4 (severe reduction) — significant loss of function; careful planning for future care, including possible dialysis, typically begins at this stage</li>
                <li>Stage 5 (kidney failure) — function has declined to a point where dialysis or transplant becomes medically necessary</li>
                <li>Ayurvedic supportive care looks different at each stage, and we tailor our approach based on where the patient currently stands, not a generic protocol</li>
              </ul>
            </div>


            {/* Section 3 — Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of CKD
              </h2>


              <p className="text-gray-700 mb-4">
                Identifying the underlying cause is central to designing an effective, individualized supportive care plan.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Long-standing uncontrolled diabetes (diabetic nephropathy)</li>
                <li>Chronic high blood pressure (hypertensive nephropathy)</li>
                <li>Chronic glomerulonephritis and other kidney inflammations</li>
                <li>Polycystic kidney disease and other hereditary conditions</li>
                <li>Recurrent kidney stones or urinary tract infections</li>
                <li>Long-term or excessive use of certain painkillers</li>
                <li>Autoimmune conditions affecting kidney tissue</li>
                <li>Obesity and metabolic syndrome, which place added strain on kidney function over time</li>
              </ul>
            </div>


            {/* Section 4 — Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recognizing the Symptoms of CKD
              </h2>


              <p className="text-gray-700 mb-4">
                Because CKD often progresses silently, recognizing symptoms early can make a meaningful difference in outcomes.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Persistent fatigue and low energy</li>
                <li>Swelling in the legs, ankles, feet, or around the eyes</li>
                <li>Changes in urine output, color, or frequency</li>
                <li>Foamy or bubbly urine</li>
                <li>Loss of appetite or nausea</li>
                <li>Difficulty concentrating or mental fog</li>
                <li>Persistent itching of the skin</li>
                <li>Muscle cramps, especially at night</li>
                <li>High blood pressure that is difficult to control</li>
                <li>Shortness of breath in more advanced stages</li>
              </ul>


              <p className="text-gray-700">
                Routine testing is especially important for people with diabetes, high blood pressure, or a family history of kidney disease, since CKD may not cause noticeable symptoms until it has progressed significantly.
              </p>
            </div>


            {/* Section 5 — Ayurvedic Understanding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Understanding of CKD
              </h2>


              <p className="text-gray-700 mb-4">
                Ayurveda approaches CKD as a condition rooted in accumulated Ama and weakened Agni, compounded over time by an imbalance in Apana Vata, the energy responsible for downward elimination in the body.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Weak digestive fire is believed to prevent proper metabolism of waste products, allowing toxins to accumulate gradually</li>
                <li>This accumulation is thought to place increasing strain on the kidneys&apos; filtering capacity over months and years</li>
                <li>Vata imbalance is associated with the gradual loss of the kidneys&apos; natural regulatory function</li>
                <li>Restoring balance is approached as a long-term, gradual process rather than a quick fix, matching the slow-developing nature of CKD itself</li>
                <li>Our treatment strategy is designed to work with this gradual timeline, adjusting as the patient&apos;s condition and reports evolve</li>
              </ul>
            </div>


            {/* Section 6 — Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Approach to CKD Supportive Care
              </h2>


              <p className="text-gray-700 mb-4">
                At Balprada Ayurvedic Hospital, every CKD patient goes through a structured, stage-appropriate evaluation before treatment begins.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed case history and dosha assessment — understanding the patient&apos;s constitution, lifestyle, and disease progression</li>
                <li>Review of nephrology reports — analyzing GFR, creatinine, and related lab values to understand the current stage and trend</li>
                <li>Customized herbal formulations — selected according to the patient&apos;s specific stage and imbalance</li>
                <li>Dietary guidance (Pathya-Apathya) — a structured plan addressing protein, sodium, potassium, and phosphorus as advised by the treating physician</li>
                <li>Lifestyle correction — addressing sleep, stress, and activity levels suited to the patient&apos;s energy and stage of disease</li>
                <li>Long-term monitoring — periodic reassessment through lab reports, since CKD requires ongoing, not one-time, management</li>
                <li>Family involvement — helping families understand realistic expectations and how to support the patient through a long-term condition</li>
              </ul>
            </div>


            {/* Section 7 — Herbs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Herbs Traditionally Used in CKD Support
              </h2>


              <p className="text-gray-700 mb-4">
                These herbs are used in supervised formulations, adjusted for the patient&apos;s stage of CKD and current medical treatment.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Punarnava (Boerhavia diffusa) — traditionally used to support fluid balance and reduce swelling</li>
                <li>Gokshura (Tribulus terrestris) — supportive for the urinary system</li>
                <li>Varuna (Crataeva nurvala) — used in classical formulations related to kidney and urinary health</li>
                <li>Guduchi (Tinospora cordifolia) — traditionally valued for supporting the body&apos;s natural detoxification and immune response</li>
                <li>Shatavari (Asparagus racemosus) — used for general strength and nourishment</li>
                <li>Triphala — used cautiously, only when appropriate, to support digestion and elimination</li>
              </ul>


              <p className="text-gray-700">
                These herbs are never self-prescribed at Balprada. Every formulation is decided only after clinical evaluation and review of the patient&apos;s current lab reports, since inappropriate herbal use can be harmful in CKD.
              </p>
            </div>


            {/* Section 8 — Diet */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dietary Guidance for CKD Patients
              </h2>


              <p className="text-gray-700 mb-4">
                Diet is one of the most important tools in managing CKD progression, and our recommendations are always aligned with the patient&apos;s nephrologist&apos;s advice.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Following a controlled-protein diet appropriate to the patient&apos;s current stage</li>
                <li>Limiting sodium intake to help manage blood pressure and fluid retention</li>
                <li>Restricting potassium and phosphorus-rich foods when advised, particularly in later stages</li>
                <li>Maintaining appropriate fluid intake as guided by the treating physician</li>
                <li>Avoiding processed, canned, and preserved foods high in sodium</li>
                <li>Choosing fresh, seasonal, easily digestible vegetables within medically approved limits</li>
                <li>Avoiding red meat, alcohol, and excessive caffeine</li>
                <li>Eating smaller, more frequent meals to reduce metabolic and digestive load</li>
              </ul>
            </div>


            {/* Section 9 — Lifestyle */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Measures That Support Kidney Function
              </h2>


              <p className="text-gray-700 mb-4">
                Beyond diet and herbs, certain daily habits play a meaningful role in slowing CKD progression and improving quality of life.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keeping blood pressure and blood sugar well controlled, since both are major drivers of CKD progression</li>
                <li>Avoiding self-medication, especially over-the-counter painkillers</li>
                <li>Maintaining consistent, adequate sleep</li>
                <li>Engaging in light, doctor-approved physical activity</li>
                <li>Managing stress through gentle practices such as breathing exercises</li>
                <li>Attending regular follow-ups, even during periods when the patient feels well</li>
              </ul>
            </div>


            {/* Section 10 — Panchakarma */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Panchakarma and CKD: What&apos;s Appropriate
              </h2>


              <p className="text-gray-700 mb-4">
                Certain gentle therapies may be considered as part of CKD supportive care, always based on the patient&apos;s current stage and stability.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Aggressive detoxification procedures are generally avoided or modified in patients with significantly reduced kidney function</li>
                <li>Mild, closely monitored supportive therapies may be considered in stable, early-to-moderate stage patients</li>
                <li>Any therapy involving significant fluid shifts is approached with particular caution</li>
                <li>Decisions are made case-by-case, based on the patient&apos;s stage, reports, and overall health — never as a fixed protocol</li>
              </ul>
            </div>


            {/* Section 11 — Why Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Experienced Ayurvedic physicians with specific focus on kidney health at every CKD stage</li>
                <li>Treatment plans built around actual lab reports, not generic assumptions</li>
                <li>In-house diagnostic facilities to track GFR, creatinine, and related markers over time</li>
                <li>Transparent, honest communication about what Ayurveda can and cannot do for CKD</li>
                <li>Encouraged coordination between our physicians and the patient&apos;s treating nephrologist</li>
                <li>A calm, structured environment for managing a long-term condition that requires patience and consistency</li>
              </ul>
            </div>


            {/* Section 12 — Expectations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Setting Realistic Expectations
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda cannot reverse CKD once significant kidney damage has occurred, but it may support slower progression and better quality of life</li>
                <li>Results vary depending on the stage at which treatment begins, the underlying cause, and how consistently the plan is followed</li>
                <li>CKD supportive care should never replace prescribed nephrology treatment, dialysis, or medication when these become necessary</li>
                <li>Patients should continue all medical treatment and keep their nephrologist informed about any Ayurvedic supportive care they are undergoing</li>
              </ul>
            </div>


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic supportive care for CKD can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation includes a detailed case history, review of nephrology reports, stage assessment, and a personalized supportive care plan designed to work alongside your treating nephrologist.
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


                {/* Contact */}
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


            {/* Section 14 — FAQs */}
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