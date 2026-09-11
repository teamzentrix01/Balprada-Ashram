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
      q: "How far is Balprada Ayurvedic Hospital from Bilari?",
      a: "The hospital is located in Moradabad city, a short and manageable drive from Bilari by road.",
    },
    {
      q: "Does the hospital treat both new and long-term chronic patients?",
      a: "Yes, the hospital manages both first-time consultations and long-term follow-up care for chronic conditions.",
    },
    {
      q: "Is Ayurvedic treatment here a replacement for my current medicines?",
      a: "No. For conditions like diabetes, heart disease, and cancer, treatment is offered as supportive care alongside your existing prescribed medication.",
    },
    {
      q: "Can I get all my tests done at the hospital itself?",
      a: "Yes, the in-house pathology lab covers most essential tests needed for diagnosis and monitoring.",
    },
    {
      q: "How many visits are typically needed for Panchakarma therapy?",
      a: "This depends on the condition being treated; the physician will explain the recommended number of sessions during your consultation.",
    },
    {
      q: "Is the treatment plan the same for every patient?",
      a: "No, treatment plans are personalized based on the patient's condition, body constitution, and medical history.",
    },
    {
      q: "How do I schedule my first appointment from Bilari?",
      a: "You can contact the hospital in advance through its website or helpline to check consultation availability before traveling.",
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
                Ayurvedic Hospital in Bilari, Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Families in Bilari, Moradabad district, are increasingly choosing Ayurveda as a serious, structured option for managing chronic illness rather than a last resort.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center in Moradabad has become a preferred destination for patients from Bilari who want authentic Ayurvedic treatment backed by proper diagnosis, monitoring, and follow-up — not just herbal medicines handed out without a plan.</li>
                <li>This page explains how the hospital serves the Bilari–Moradabad belt, what conditions are treated, and what patients should expect from their treatment journey.</li>
              </ul>
            </div>


            {/* Section 2 — Balprada Ayurvedic Hospital's Connection to the Bilari–Moradabad Belt */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada Ayurvedic Hospital's Connection to the Bilari–Moradabad Belt
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Located centrally in Moradabad, making it a practical treatment hub for the surrounding towns and villages, including Bilari.</li>
                <li>Regularly treats patients traveling in from Bilari and nearby areas for both first consultations and ongoing chronic-disease management.</li>
                <li>Positioned as a full-service Ayurvedic center rather than a small local clinic — patients get diagnosis, treatment, and therapy under one roof.</li>
                <li>Serves as an alternative to traveling long distances to Delhi or other metro cities for genuine Ayurvedic care.</li>
                <li>Works with a research-based treatment philosophy, meaning protocols are built on documented Ayurvedic principles rather than guesswork.</li>
              </ul>
            </div>


            {/* Section 3 — The Patient Journey: From Bilari to Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Patient Journey: From Bilari to Recovery
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Step 1 — Initial consultation: Physician reviews medical history, current symptoms, and any existing lab reports or prescriptions.</li>
                <li>Step 2 — Diagnosis and testing: Relevant tests are conducted at the hospital's own pathology lab to confirm disease stage and severity.</li>
                <li>Step 3 — Personalized treatment plan: Herbal formulations, diet, and lifestyle guidance are prescribed based on the individual case, not a standard template.</li>
                <li>Step 4 — Therapy sessions: Panchakarma or other therapeutic procedures are scheduled as needed, based on the condition being treated.</li>
                <li>Step 5 — Follow-up and monitoring: Patients return for periodic review so the physician can track progress and adjust the plan.</li>
                <li>Step 6 — Long-term maintenance: Once the condition stabilizes, patients receive guidance on maintaining results through diet and routine.</li>
              </ul>
            </div>


            {/* Section 4 — Conditions Treated at Balprada Ayurvedic Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions Treated at Balprada Ayurvedic Hospital
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kidney Disease</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Ayurvedic protocols for early and moderate chronic kidney disease (CKD).</li>
                    <li>Herbal support aimed at improving kidney function markers over time.</li>
                    <li>Strict dietary guidance to reduce further strain on the kidneys.</li>
                    <li>Regular creatinine and kidney function monitoring through the in-house lab.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Liver Disorders</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Treatment for fatty liver, liver enlargement, and post-jaundice recovery.</li>
                    <li>Detoxification-focused herbal therapy to support liver repair.</li>
                    <li>Diet correction to reduce fat accumulation and inflammation in the liver.</li>
                    <li>Periodic liver function testing to track improvement.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Diabetes (Supportive Care)</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Herbal and lifestyle support alongside prescribed diabetes medication or insulin — never positioned as a replacement for standard care.</li>
                    <li>Meal-timing and portion guidance to help stabilize blood sugar levels.</li>
                    <li>Routine (Dinacharya) recommendations suited to diabetic patients.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cancer (Supportive Care)</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Ayurvedic supportive treatment designed to complement ongoing conventional cancer therapy.</li>
                    <li>Focus on improving appetite, digestion, and overall strength during treatment.</li>
                    <li>Not offered or claimed as a cure — supportive care only, alongside the patient's oncologist-led treatment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Heart Disease (Supportive Care)</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Diet and lifestyle-based Ayurvedic support alongside standard cardiac treatment.</li>
                    <li>Herbal formulations aimed at supporting healthy circulation.</li>
                    <li>Stress-reduction guidance suited to cardiac patients.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Panchakarma and Detoxification</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Classical Panchakarma therapies including Virechana, Basti, and Abhyanga.</li>
                    <li>Used both for chronic disease management and general body detoxification.</li>
                    <li>Conducted under physician supervision in a dedicated therapy setup.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">General OPD and Preventive Care</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Consultation for digestive issues, joint pain, skin conditions, and general wellness.</li>
                    <li>Prakriti (body constitution) assessment for preventive health planning.</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 5 — Why Ayurveda for Chronic Disease Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Ayurveda for Chronic Disease Management
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Chronic conditions like kidney and liver disease often need long-term, sustained management rather than a single course of treatment — Ayurveda's emphasis on root-cause correction fits this need.</li>
                <li>Diet and lifestyle correction, built into every Ayurvedic plan, addresses factors that purely medicinal approaches may not cover.</li>
                <li>For supportive conditions (diabetes, heart disease, cancer), Ayurveda is used alongside — not instead of — standard medical treatment, giving patients a combined approach.</li>
                <li>Regular monitoring ensures treatment is adjusted based on actual progress rather than followed blindly.</li>
              </ul>
            </div>


            {/* Section 6 — Facilities That Support Out-of-Town Patients from Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities That Support Out-of-Town Patients from Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>In-house pathology lab, so patients don't need a separate trip for blood or function tests.</li>
                <li>In-house pharmacy stocking classical and prepared Ayurvedic formulations.</li>
                <li>Dedicated Panchakarma therapy rooms for patients undergoing multi-day treatment.</li>
                <li>Clean, organized OPD setup designed to reduce waiting time for patients traveling from outside Moradabad city.</li>
                <li>Support staff experienced in assisting elderly and chronically ill patients through the visit.</li>
              </ul>
            </div>


            {/* Section 7 — What Sets Balprada Apart for Bilari Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Sets Balprada Apart for Bilari Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A research-driven approach rather than generic, one-size-fits-all herbal prescriptions.</li>
                <li>Specialization in serious chronic disease management, not just wellness or beauty-focused treatments.</li>
                <li>Diagnosis, consultation, pharmacy, and therapy available under a single roof.</li>
                <li>Physicians who explain realistic timelines and expected outcomes rather than making exaggerated promises.</li>
                <li>A structured follow-up system so patients from outside Moradabad city stay on track with their treatment.</li>
              </ul>
            </div>


            {/* Section 8 — Practical Tips for Patients Traveling from Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Practical Tips for Patients Traveling from Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Carry all previous medical reports and current prescriptions to your first visit.</li>
                <li>Plan your visit around the physician's OPD hours to avoid long waiting times.</li>
                <li>If Panchakarma therapy is recommended, ask about the number of sessions needed so you can plan travel accordingly.</li>
                <li>Continue any prescribed allopathic medication unless your primary doctor advises otherwise — Ayurvedic supportive care works alongside, not in place of, essential medication.</li>
                <li>Keep a simple diary of symptoms between visits to help the physician track your progress accurately.</li>
              </ul>
            </div>


            {/* Section 9 — Common Concerns Patients from Bilari Have Before Starting Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Patients from Bilari Have Before Starting Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>"Will I have to stop my current medicines?" — In most supportive-care cases (diabetes, heart disease, cancer), no. Treatment is designed to run alongside your existing prescriptions unless your primary doctor advises a change.</li>
                <li>"How soon will I see results?" — Chronic conditions like kidney and liver disease typically require sustained treatment over weeks to months; the physician will set realistic expectations at your first visit rather than promising quick fixes.</li>
                <li>"Do I need to be admitted for treatment?" — Not always. Many patients are managed through OPD visits and periodic Panchakarma sessions; admission is only recommended when the condition requires closer monitoring.</li>
                <li>"Will the diet plan be difficult to follow at home in Bilari?" — Diet plans are built around commonly available foods and local eating habits, making them practical to follow at home rather than requiring hard-to-find ingredients.</li>
                <li>"How will my progress be tracked?" — Through periodic lab testing at the in-house pathology lab and follow-up consultations, so adjustments to your plan are based on actual reports, not guesswork.</li>
              </ul>
            </div>


            {/* Section 10 — Comparing the Treatment Journey: Local Clinic vs. Balprada Ayurvedic Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Comparing the Treatment Journey: Local Clinic vs. Balprada Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Diagnosis: A local clinic in Bilari may rely only on symptoms; Balprada combines physician assessment with lab-based diagnosis for a more accurate picture.</li>
                <li>Treatment planning: Small clinics often use fixed herbal packages; Balprada builds a plan specific to the patient's condition, stage, and body constitution.</li>
                <li>Monitoring: Ongoing lab-based monitoring at Balprada helps confirm whether treatment is actually working, rather than relying on how the patient feels alone.</li>
                <li>Specialization: General local practitioners may not focus specifically on serious chronic conditions like kidney or liver disease; Balprada has dedicated protocols for these cases.</li>
                <li>Continuity: Patient records are maintained across visits, so follow-up consultations build on previous treatment history instead of starting fresh each time.</li>
              </ul>
            </div>


            {/* Section 11 — Seasonal Health Tips for Bilari Residents */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Seasonal Health Tips for Bilari Residents
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Summer months: Kidney and liver patients are advised to stay well-hydrated (as per physician guidance) and avoid excessive heat exposure, which can add extra strain during treatment.</li>
                <li>Monsoon season: Extra care is advised for digestive health, as diet-related complications tend to rise during this period; the hospital's OPD sees a seasonal increase in digestive consultations.</li>
                <li>Winter months: Joint pain and circulation-related concerns often increase; patients on heart-supportive care are advised to maintain consistent daily routines during colder weeks.</li>
                <li>Year-round: Diabetic and chronic kidney/liver patients are encouraged to keep up with scheduled lab tests regardless of season, since silent progression of these conditions can otherwise go unnoticed.</li>
              </ul>
            </div>




            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <ul className="text-black space-y-2 mb-6 list-disc pl-5">
                <li>Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center.</li>
                <li>The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan.</li>
                <li>For patients traveling from Bilari and the Moradabad district, the hospital offers convenient scheduling for both OPD visits and extended Panchakarma therapy sessions.</li>
                <li>The in-house pathology lab allows patients to complete necessary diagnostic tests during the same visit, saving time and travel.</li>
              </ul>


              <div className="space-y-4 mb-6">


                {/* Main Branch */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Main Branch (Bilari)</p>
                    <p className="text-black">
                      Tehsil Bilari, District Moradabad, Uttar Pradesh
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


                <div className="flex items-start gap-3 mt-4">
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