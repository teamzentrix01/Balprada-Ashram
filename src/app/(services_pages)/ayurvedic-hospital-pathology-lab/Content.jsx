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
      q: "Do I need a doctor's prescription to get tests done at the lab?",
      a: "For most routine tests, a physician recommendation ensures the right panel is selected for your specific condition and treatment stage.",
    },
    {
      q: "Is home sample collection available?",
      a: "Home collection is available for select tests; please check with the hospital for the specific tests you require.",
    },
    {
      q: "How long does it take to get my report?",
      a: "Turnaround time varies by test type and is communicated at the time of sample collection.",
    },
    {
      q: "Can I get tested without starting Ayurvedic treatment?",
      a: "Yes, the pathology lab is open for general diagnostic and preventive testing, independent of any specific treatment programme.",
    },
    {
      q: "Will my physician explain what my report means?",
      a: "Yes, reports are reviewed and explained in the context of your overall health and treatment plan during your consultation.",
    },
    {
      q: "Are the lab reports accepted by other hospitals or specialists?",
      a: "Reports are generally accepted for reference, though some specialists may prefer certain tests be repeated at their own facility depending on protocol.",
    },
    {
      q: "How often should I repeat tests during ongoing treatment?",
      a: "This depends on your specific condition; your treating physician will set an appropriate testing schedule as part of your care plan.",
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
                Pathology Lab at Balprada Hospital
              </h1>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Every effective treatment plan — Ayurvedic or otherwise — depends on accurate diagnosis.</li>
                <li>The Pathology Lab at Balprada Hospital is built to support exactly that: reliable, timely diagnostic testing that gives our physicians (and yours) a clear, data-backed picture of a patient's health before any treatment decision is made.</li>
              </ul>
            </div>


            {/* Section 2 — Why Pathology Lab Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why a Pathology Lab Matters Inside an Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurvedic treatment planning depends on understanding not just symptoms but the underlying physiological picture — kidney function, hormone levels, blood counts, and metabolic markers all inform how a formulation or therapy is chosen and dosed.</li>
                <li>Having an in-house lab means test results can be reviewed by the treating physician in the same consultation cycle, rather than patients waiting days between an external lab visit and their next appointment.</li>
                <li>Diagnostic tracking over time — not just a single report — is what allows physicians to confirm whether a treatment plan is actually working and adjust it accordingly.</li>
                <li>For chronic conditions such as kidney disorders, PCOS, or joint disease, periodic lab monitoring is often as important to the treatment outcome as the therapy itself.</li>
                <li>Combining classical Ayurvedic assessment methods with standard pathology testing gives a more complete clinical picture than relying on either approach alone.</li>
              </ul>
            </div>


            {/* Section 3 — Integrated Diagnostics */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Integrated Diagnostics: Ayurvedic Assessment Meets Modern Pathology
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Classical Ayurvedic assessment methods such as Nadi Pariksha (pulse diagnosis), Mutra Pariksha (urine examination), and Jihva Pariksha (tongue examination) are used alongside, not instead of, standard laboratory testing.</li>
                <li>Physicians correlate dosha-based observations with objective lab markers — for example, using creatinine and urea trends alongside pulse-based assessment when monitoring a kidney treatment plan.</li>
                <li>This integrated approach allows a herbal formulation or Panchakarma protocol to be adjusted based on measurable changes in a patient's reports, not only on reported symptom relief.</li>
                <li>Patients undergoing longer treatment programmes, such as those for chronic joint disease or hormonal disorders, typically have a defined testing schedule built into their overall care plan from the outset.</li>
              </ul>
            </div>


            {/* Section 4 — Departments and Test Categories */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Departments and Test Categories Available
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Haematology
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Complete Blood Count (CBC) to assess overall blood health, infection markers, and anaemia</li>
                    <li>Erythrocyte Sedimentation Rate (ESR) to help identify inflammatory activity in the body</li>
                    <li>Haemoglobin and related iron-status testing</li>
                    <li>Coagulation-related screening where clinically indicated</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Clinical Biochemistry
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Kidney function tests, including creatinine, urea, and electrolyte panels</li>
                    <li>Liver function tests to assess overall metabolic and hepatic health</li>
                    <li>Lipid profile to evaluate cholesterol and cardiovascular risk markers</li>
                    <li>Blood glucose testing, including fasting, postprandial, and HbA1c for diabetes monitoring</li>
                    <li>Uric acid testing, relevant for patients with gout or related joint conditions</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Hormone and Endocrine Panels
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Thyroid function tests (T3, T4, TSH) to assess thyroid-related metabolic issues</li>
                    <li>Reproductive hormone panels relevant to menstrual disorders, PCOS, and menopausal assessment</li>
                    <li>Vitamin D and B12 testing, both commonly linked to fatigue, joint discomfort, and general wellbeing</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Clinical Pathology and Microbiology
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Routine and microscopic urine examination</li>
                    <li>Stool examination for digestive and parasitic concerns</li>
                    <li>Culture and sensitivity testing to identify infections and guide appropriate treatment</li>
                    <li>Serology testing for specific infectious markers as clinically required</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Specialised and Preventive Panels
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Full body health checkup packages combining commonly required tests into a single visit</li>
                    <li>Age- and gender-specific screening panels for preventive health monitoring</li>
                    <li>Condition-specific panels, such as a joint-health panel (uric acid, RA factor, CRP) or a women's health panel (hormone levels, thyroid, haemoglobin)</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — How Lab Supports Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How the Lab Supports Ongoing Treatment Plans
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>For Kidney Care:</strong> Periodic creatinine, urea, and electrolyte testing helps track how well a treatment plan is supporting kidney function over time.</li>
                <li><strong>For Gynaecological Care:</strong> Hormone panels and cycle-based testing help physicians adjust herbal and lifestyle protocols across the menstrual cycle.</li>
                <li><strong>For Bone and Joint Care:</strong> Inflammatory markers and uric acid levels help distinguish between different types of joint conditions and monitor treatment response.</li>
                <li><strong>For Naturopathy and General Wellness:</strong> Baseline metabolic panels help identify which lifestyle interventions are likely to have the greatest impact for a given patient.</li>
              </ul>
            </div>


            {/* Section 6 — Sample Collection Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Sample Collection and Reporting Process
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Step 1 – Test Requisition:</strong> The treating physician recommends specific tests based on the patient's condition and treatment stage.</li>
                <li><strong>Step 2 – Sample Collection:</strong> Samples are collected at the hospital lab under standard hygiene protocols, with home collection available for select tests where offered.</li>
                <li><strong>Step 3 – Processing:</strong> Samples are processed using calibrated equipment, with internal quality checks built into the workflow.</li>
                <li><strong>Step 4 – Reporting:</strong> Reports are generated and shared with the treating physician, who interprets results in the context of the patient's overall treatment plan.</li>
                <li><strong>Step 5 – Consultation:</strong> Patients review their reports with their physician rather than interpreting values independently, since reference ranges and clinical context both matter.</li>
                <li><strong>Step 6 – Follow-Up Scheduling:</strong> Where relevant, the next testing interval is scheduled as part of the patient's ongoing treatment calendar.</li>
              </ul>
            </div>


            {/* Section 7 — Quality Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Quality and Accuracy Standards
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Equipment is regularly calibrated and maintained to support consistent, reliable results across testing cycles.</li>
                <li>Internal quality control checks are built into daily lab operations to catch inconsistencies before reports are finalised.</li>
                <li>Samples requiring specialised or highly technical testing not available in-house are coordinated with accredited external reference labs.</li>
                <li>Patient data and reports are handled with confidentiality, shared only with the treating physician and the patient.</li>
                <li>Turnaround times are communicated clearly at the time of sample collection so patients know what to expect.</li>
              </ul>
            </div>


            {/* Section 8 — Why Choose Balprada Lab */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose the Balprada Hospital Pathology Lab
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Reports are reviewed directly by the treating physician, connecting diagnostic data to the actual treatment plan rather than leaving patients to interpret numbers alone.</li>
                <li>On-site testing reduces the delay between assessment, diagnosis, and the start or adjustment of treatment.</li>
                <li>Testing schedules are built into the broader treatment plan for chronic conditions, rather than left to the patient to remember and arrange separately.</li>
                <li>Trained lab technicians and support staff handle sample collection with attention to patient comfort, particularly for patients who are anxious about blood draws.</li>
                <li>Packages combining commonly needed tests help reduce the number of separate visits required for routine monitoring.</li>
              </ul>
            </div>


            {/* Section 9 — Facilities Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Available at the Lab
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dedicated sample collection area maintained under hygienic conditions.</li>
                <li>Processing equipment for haematology, biochemistry, and routine clinical pathology testing.</li>
                <li>Coordination with external accredited labs for specialised or advanced diagnostic panels.</li>
                <li>Waiting areas designed for patient comfort during sample collection and report discussion.</li>
                <li>Digital or printed report delivery options, based on patient preference and hospital protocol.</li>
                <li>Support staff available to guide patients on test preparation requirements, such as fasting instructions.</li>
              </ul>
            </div>


            {/* Section 10 — Who Should Get Tested */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Consider Getting Tested
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients starting a new Ayurvedic treatment plan who need a baseline assessment before therapy begins.</li>
                <li>Patients on an ongoing treatment protocol due for a scheduled follow-up test.</li>
                <li>Individuals experiencing unexplained fatigue, weight change, or persistent symptoms without a confirmed cause.</li>
                <li>Adults due for routine preventive health screening based on age or family history.</li>
                <li>Patients transitioning between different care providers who need updated reports for continuity of treatment.</li>
                <li>Anyone advised by their physician to monitor a specific marker, such as blood sugar, kidney function, or thyroid levels, over time.</li>
              </ul>
            </div>


            {/* Section 11 — Coordination With Treatment Team */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Coordination With Your Treatment Team
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Lab results are shared directly with the department relevant to your care — for example, kidney panels are routed to your nephrology-support physician, while hormone panels reach your gynaecology-support team.</li>
                <li>For patients under multiple departments at once, such as someone managing both joint pain and a hormonal condition, reports are consolidated so no physician is working from partial information.</li>
                <li>Physicians are notified promptly of any critically abnormal values so appropriate follow-up can be arranged without delay.</li>
                <li>Patients travelling from other cities can have their reports prepared in advance of their next in-person visit, reducing the need for an additional trip solely for testing.</li>
                <li>Where a patient is also under the care of an external specialist, reports can be shared in a format suitable for that specialist's review, supporting coordinated, non-duplicated care.</li>
              </ul>
            </div>


            {/* Section 12 — Test Preparation Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Test Preparation Tips for Patients
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Follow fasting instructions exactly as advised, since several biochemistry tests require 8–12 hours of fasting for accurate results.</li>
                <li>Inform the lab staff about any current medication, as certain drugs can affect specific test values.</li>
                <li>Stay adequately hydrated before blood tests, as this can make sample collection easier and more comfortable.</li>
                <li>Avoid strenuous exercise immediately before certain tests, since this can temporarily affect markers like CPK or lactate.</li>
                <li>Carry previous reports to your consultation so your physician can compare trends rather than viewing results in isolation.</li>
                <li>Schedule follow-up tests as recommended, even if you are feeling well, since some markers change before symptoms become noticeable.</li>
              </ul>
            </div>


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Diagnostic Test at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in getting diagnostic tests done can book an appointment at Balprada Hospital's Pathology Lab. The lab supports both patients undergoing Ayurvedic treatment and those seeking general diagnostic or preventive testing. Reports are reviewed directly by physicians to ensure accurate interpretation and appropriate treatment planning.
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