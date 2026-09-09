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
      q: "Can Ayurveda cure kidney disease completely?",
      a: "Ayurveda focuses on supporting kidney function and managing symptoms; outcomes vary by patient, and it works best alongside regular medical monitoring.",
    },
    {
      q: "Is Panchakarma safe for kidney patients?",
      a: "Yes, when customised and supervised by qualified physicians based on the patient's current health status and lab reports.",
    },
    {
      q: "How long does kidney ayurvedic treatment take to show results?",
      a: "Duration varies by condition severity, but most patients are advised to follow the plan for at least a few months with periodic lab reviews.",
    },
    {
      q: "Should I stop my allopathic medicines during Ayurvedic treatment?",
      a: "No, essential medication should only be changed under your treating doctor's advice, never stopped independently.",
    },
    {
      q: "Is diet really important in kidney treatment?",
      a: "Yes, diet correction is one of the core pillars of the treatment, as it directly affects creatinine and electrolyte levels.",
    },
    {
      q: "Can this treatment help with high creatinine levels?",
      a: "Many patients seek Ayurvedic support specifically for elevated creatinine; a personalised plan is created after reviewing your reports.",
    },
    {
      q: "Do I need to visit the hospital in person for treatment?",
      a: "Initial assessment and Panchakarma procedures require an in-person visit; some follow-ups may be arranged remotely, depending on your case.",
    },
    {
      q: "Will I need repeat lab tests during treatment?",
      a: "Yes, periodic creatinine, urea, and urine tests help the physician track progress and adjust your protocol accordingly.",
    },
    {
      q: "Is the herbal medicine at Balprada Hospital prepared in-house?",
      a: "Yes, formulations are prepared and quality-checked at our in-house pharmacy before being dispensed to patients.",
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
                Kidney Ayurvedic Treatment at Balprada Hospital
              </h1>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Kidney health is often ignored until symptoms become serious, yet early, consistent care can make a real difference in how the kidneys function over time.</li>
                <li>At Balprada Hospital, our kidney ayurvedic treatment programme combines classical Ayurvedic therapies with structured diet and lifestyle correction to support kidney function, manage symptoms, and improve overall quality of life for patients dealing with kidney-related concerns.</li>
              </ul>
            </div>


            {/* Section 2 — Understanding Kidney Disease */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Kidney Disease and Why Ayurveda Is Sought Alongside Conventional Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Kidneys filter waste, balance electrolytes, and regulate blood pressure; when their function declines, waste products such as creatinine and urea build up in the blood.</li>
                <li>Common contributing factors include uncontrolled diabetes, high blood pressure, chronic infections, excessive use of painkillers, poor hydration, and genetic conditions such as polycystic kidney disease.</li>
                <li>Many patients look for Ayurveda as a complementary approach because it focuses on the person as a whole — digestion, metabolism, diet, and daily routine — rather than only the affected organ.</li>
                <li>Ayurvedic texts describe kidney-related disorders under conditions like Mutrakrichha (painful/difficult urination) and Vrikka Roga, and outline herbal, dietary, and therapeutic protocols to support the urinary system.</li>
                <li>Ayurveda is generally used as a supportive or adjunct approach alongside regular nephrology care, not as a replacement for emergency or dialysis-stage treatment, which is why our team works with patients' existing lab reports and medical history before suggesting any protocol.</li>
              </ul>
            </div>


            {/* Section 3 — Our Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Approach to Kidney Ayurvedic Treatment
              </h2>


              <p className="text-gray-700 mb-6">
                Balprada Hospital follows a structured, four-pillar approach so that every patient receives care suited to their specific condition and stage of kidney health.
              </p>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Panchakarma Detoxification Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Customised Panchakarma procedures are used to help the body eliminate accumulated toxins (Ama) that may burden kidney function.</li>
                    <li>Therapies such as Virechana (therapeutic purgation) and Basti (medicated enema) are selected based on the patient's constitution (Prakriti) and current lab values.</li>
                    <li>Snehana (oleation) and Swedana (fomentation) are used as preparatory therapies before deeper detox procedures, when appropriate for the patient's condition.</li>
                    <li>All Panchakarma protocols are administered under supervision, with intensity adjusted for patients who have low haemoglobin, high creatinine, or fluid retention.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Personalised Herbal Formulations
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Herbal combinations are prescribed based on individual assessment rather than a one-size-fits-all formula.</li>
                    <li>Commonly referenced classical herbs in kidney-support protocols include Punarnava, Gokshura, Varun, Kaasni, and Shirish, chosen for their traditional use in supporting urinary and renal wellness.</li>
                    <li>Formulations are reviewed and adjusted periodically based on follow-up blood and urine reports.</li>
                    <li>Patients are guided on correct dosage, timing, and duration; self-medication without supervision is discouraged.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Diet Correction (Pathya-Apathya)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A kidney-friendly Ayurvedic diet plan is created based on the patient's current creatinine, potassium, and protein levels.</li>
                    <li>Guidance is provided on suitable grains, vegetables, and fluid intake, along with foods that should be limited or avoided.</li>
                    <li>Diet charts are revised as lab values change, since dietary needs shift as the condition improves or progresses.</li>
                    <li>Family members are also counselled so that meals prepared at home align with the prescribed plan.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Yoga, Pranayama and Stress Management
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Gentle yoga asanas and breathing exercises are recommended to support circulation, digestion, and stress reduction.</li>
                    <li>Pranayama techniques such as Anulom Vilom and Bhramari are commonly included for patients who are medically fit to practise them.</li>
                    <li>Sleep hygiene and stress management are addressed, since chronic stress and poor sleep can affect blood pressure and, indirectly, kidney health.</li>
                    <li>Exercise intensity is always adapted to the patient's energy levels and clinical condition.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 4 — Kidney Conditions We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Kidney Conditions We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Early to moderate stages of Chronic Kidney Disease (CKD)</li>
                <li>Elevated creatinine and urea levels</li>
                <li>Proteinuria and Nephrotic Syndrome (as a supportive approach alongside medical treatment)</li>
                <li>Recurrent urinary tract infections affecting kidney health</li>
                <li>Kidney-related complications arising from diabetes and hypertension</li>
                <li>Post-treatment recovery support for patients under medical nephrology care</li>
                <li>General preventive kidney care for individuals with a family history of kidney disease</li>
                <li>Fluid retention and mild swelling linked to reduced kidney efficiency</li>
                <li>Fatigue, poor appetite, and low energy levels associated with early kidney function decline</li>
                <li>Support for patients looking to slow disease progression alongside their nephrologist's treatment plan</li>
              </ul>
            </div>


            {/* Section 5 — Why Patients Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Consultations begin with a detailed review of the patient's medical history, current medication, and recent lab reports before any therapy is suggested.</li>
                <li>Treatment plans are individualised; no two patients receive an identical protocol.</li>
                <li>The hospital maintains a hygienic in-house pharmacy for the preparation and quality control of herbal formulations.</li>
                <li>Panchakarma procedures are carried out by trained therapists under the guidance of qualified Ayurvedic physicians.</li>
                <li>Patients are encouraged to continue any essential allopathic medication prescribed by their nephrologist unless advised otherwise by their doctor.</li>
                <li>Regular follow-ups and lab monitoring are built into the treatment journey, not offered as a one-time consultation.</li>
                <li>Clear, honest communication is prioritised — patients are informed about realistic expectations rather than exaggerated promises.</li>
              </ul>
            </div>


            {/* Section 6 — Facilities Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Available at Balprada Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dedicated Panchakarma therapy units equipped for Basti, Virechana, and other detox procedures.</li>
                <li>In-house pharmacy that prepares herbal formulations under quality-controlled conditions.</li>
                <li>Consultation rooms where physicians review lab reports and history in detail before finalising a plan.</li>
                <li>Diet counselling support to help translate prescribed charts into practical daily meals.</li>
                <li>Coordination support for patients travelling from other cities who need to plan multi-day therapy visits.</li>
                <li>Record-keeping of past prescriptions and lab trends so follow-up visits build on previous progress rather than starting over.</li>
              </ul>
            </div>


            {/* Section 7 — Treatment Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How the Treatment Process Works
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Initial Consultation:</strong> Review of symptoms, medical history, current medications, and existing lab reports (creatinine, urea, eGFR, urine routine).</li>
                <li><strong>Prakriti Assessment:</strong> Evaluation of the patient's body constitution to guide herbal and dietary recommendations.</li>
                <li><strong>Customised Protocol Design:</strong> A combination of herbal medicine, diet plan, and, where suitable, Panchakarma therapy is finalised.</li>
                <li><strong>Supervised Therapy Sessions:</strong> Panchakarma and other procedures are conducted at the hospital under clinical supervision.</li>
                <li><strong>Diet and Lifestyle Counselling:</strong> Patients receive a written diet chart along with lifestyle dos and don'ts.</li>
                <li><strong>Periodic Review:</strong> Follow-up consultations and repeat lab tests are scheduled to track progress and adjust the protocol.</li>
                <li><strong>Long-Term Maintenance Plan:</strong> Once stable, patients are guided on a maintenance routine to help sustain kidney health.</li>
              </ul>
            </div>


            {/* Section 8 — Early Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Early Warning Signs You Should Not Ignore
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Persistent fatigue or weakness without an obvious cause</li>
                <li>Swelling in the legs, ankles, or around the eyes</li>
                <li>Changes in urine — frothy urine, reduced output, or increased frequency at night</li>
                <li>Loss of appetite, nausea, or a metallic taste in the mouth</li>
                <li>Difficulty concentrating or unexplained itching of the skin</li>
                <li>Persistently high blood pressure that is difficult to control</li>
                <li>A family history of kidney disease combined with any of the above symptoms</li>
                <li>If any of these signs are present, patients are advised to get kidney function tests done and consult a qualified physician promptly, rather than delaying evaluation.</li>
              </ul>
            </div>


            {/* Section 9 — Why Consider Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Consider Ayurveda as a Complementary Option
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A whole-body approach that looks at diet, digestion, and daily routine alongside kidney-specific symptoms.</li>
                <li>Emphasis on natural herbal formulations, prepared and dosed under professional supervision.</li>
                <li>Structured dietary guidance that many patients find easier to follow long-term compared to generic advice.</li>
                <li>Attention to lifestyle factors — sleep, stress, and physical activity — that influence overall wellbeing.</li>
                <li>A collaborative approach that is designed to work alongside, not instead of, essential conventional medical care.</li>
              </ul>
            </div>


            {/* Section 10 — Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle and Precaution Tips for Kidney Patients
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintain consistent hydration as advised by your doctor; both very low and excess fluid intake can be harmful.</li>
                <li>Avoid self-medicating with over-the-counter painkillers, which can strain kidney function.</li>
                <li>Keep blood pressure and blood sugar levels under regular monitoring.</li>
                <li>Reduce salt and processed food intake as guided by your diet chart.</li>
                <li>Attend every scheduled follow-up so that your treatment plan can be adjusted based on current lab values.</li>
                <li>Inform your Ayurvedic physician about all medications and supplements you are already taking to avoid interactions.</li>
              </ul>
            </div>


            {/* Section 11 — Continuity of Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Continuity of Care After Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients transitioning out of active therapy are given a maintenance diet and lifestyle plan to help sustain progress.</li>
                <li>Periodic check-ins are recommended even after the main treatment phase, so early signs of relapse can be caught quickly.</li>
                <li>Seasonal adjustments to herbal formulations may be suggested, since Ayurveda accounts for changes in climate and routine across the year.</li>
                <li>Patients are encouraged to keep their nephrologist informed of their Ayurvedic treatment so both approaches remain coordinated.</li>
              </ul>
            </div>


            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their kidney health concerns can book a consultation at Balprada Hospital. The initial consultation typically involves a detailed case history review, lab report analysis, and constitution assessment, followed by a personalised treatment plan combining herbal medicine, diet correction, and Panchakarma therapies where suitable.
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