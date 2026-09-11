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
      q: "Is Balprada Ayurvedic Hospital easily reachable from Bilari?",
      a: "Yes, the hospital is located in Moradabad, a short and convenient drive from Bilari by road.",
    },
    {
      q: "Does Balprada Hospital treat chronic kidney disease?",
      a: "Yes, the hospital offers dedicated Ayurvedic treatment protocols for early and moderate-stage kidney disease, along with regular monitoring.",
    },
    {
      q: "Can diabetic patients from Bilari get Ayurvedic support here?",
      a: "Yes, Ayurvedic care is offered alongside standard diabetes medication, focused on diet, lifestyle, and blood sugar management support.",
    },
    {
      q: "Is Panchakarma therapy available for patients from Bilari?",
      a: "Yes, classical Panchakarma procedures are conducted under expert supervision for both disease management and wellness.",
    },
    {
      q: "Does the hospital provide cancer treatment?",
      a: "Balprada offers Ayurvedic supportive care alongside standard cancer treatment — it is not offered as a replacement or cure.",
    },
    {
      q: "Are diagnostic tests available at the hospital itself?",
      a: "Yes, an in-house pathology lab allows most essential tests to be done on-site, saving patients an extra trip.",
    },
    {
      q: "How can I book a consultation from Bilari?",
      a: "You can call the hospital helpline or check the website for appointment slots before planning your visit.",
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
                Best Ayurvedic Hospital in Bilari – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bilari is a fast-growing town in Moradabad district, Uttar Pradesh, and more and more families here are turning to Ayurveda for long-term relief from chronic kidney disease, liver disorders, diabetes, and other lifestyle conditions.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center, located just a short drive from Bilari in Moradabad, is trusted by patients across the region for authentic, research-backed Ayurvedic treatment combined with modern diagnostic support.</li>
                <li>If you are searching for an ayurvedic hospital near Bilari, this guide covers everything you need to know — treatments offered, facilities, distance, and how to plan your visit.</li>
              </ul>
            </div>


            {/* Section 2 — About Balprada Ayurvedic Hospital & Research Center */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Balprada Ayurvedic Hospital &amp; Research Center
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A dedicated Ayurvedic hospital and research center serving Moradabad district, including Bilari, Baniyathir, Chandausi Road belt, and nearby rural and urban areas.</li>
                <li>Focuses on classical Ayurvedic principles combined with a structured, research-oriented approach to chronic disease management.</li>
                <li>Treats patients holistically — addressing the root cause of disease rather than only managing symptoms.</li>
                <li>Offers a single point of care for diagnosis, consultation, Panchakarma therapy, and follow-up treatment.</li>
                <li>Known among patients from Bilari for personalized treatment plans rather than a one-size-fits-all approach.</li>
              </ul>
            </div>


            {/* Section 3 — Why Patients from Bilari Choose Balprada Ayurvedic Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients from Bilari Choose Balprada Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Easy accessibility — Bilari is well-connected to Moradabad by road, making a same-day visit convenient for consultation, tests, and treatment.</li>
                <li>Specialized departments — dedicated treatment protocols for kidney disease, liver disease, diabetes, cancer supportive care, and heart-related lifestyle conditions.</li>
                <li>In-house pathology lab — reduces the need to travel elsewhere for tests, saving time for patients commuting from Bilari.</li>
                <li>Experienced Ayurvedic physicians — trained in classical Ayurveda with years of clinical experience managing chronic and complex cases.</li>
                <li>Transparent treatment plans — patients and families are clearly informed about the expected course of treatment, duration, and lifestyle changes needed.</li>
                <li>Affordable compared to long-distance travel — patients from Bilari no longer need to travel to Delhi, Lucknow, or other cities for quality Ayurvedic care.</li>
                <li>Follow-up and continuity of care — the hospital maintains patient records for ongoing monitoring, which is especially important in chronic kidney and liver conditions.</li>
              </ul>
            </div>


            {/* Section 4 — Distance and Accessibility from Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Distance and Accessibility from Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bilari lies within comfortable driving distance of Moradabad city, where Balprada Ayurvedic Hospital is located.</li>
                <li>The route is well-served by regular road transport, making it practical for both first-time consultations and repeat Panchakarma sessions.</li>
                <li>Many patients from Bilari prefer Balprada over traveling to distant metro cities because of the shorter travel time and lower travel fatigue — an important factor for patients dealing with kidney or liver illness.</li>
                <li>The hospital's central Moradabad location also makes it convenient for family members accompanying patients for extended treatment stays.</li>
              </ul>
            </div>


            {/* Section 5 — Key Ayurvedic Treatments Available for Bilari Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Key Ayurvedic Treatments Available for Bilari Patients
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Kidney Disease Treatment</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Ayurvedic management for early to moderate stages of chronic kidney disease (CKD).</li>
                    <li>Herbal formulations aimed at supporting kidney function and reducing creatinine levels naturally.</li>
                    <li>Customized diet and lifestyle guidance to slow disease progression.</li>
                    <li>Regular monitoring through the hospital's in-house lab to track kidney function over time.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Liver Disease Treatment</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Ayurvedic protocols for fatty liver, liver enlargement, jaundice recovery, and other hepatic conditions.</li>
                    <li>Detoxification-based therapies to support liver regeneration.</li>
                    <li>Diet-focused counseling to reduce further liver stress.</li>
                    <li>Ongoing assessment to track improvement in liver function markers.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Panchakarma Therapy</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Classical Panchakarma procedures for detoxification and disease prevention.</li>
                    <li>Includes therapies such as Virechana, Basti, and Abhyanga, administered under expert supervision.</li>
                    <li>Popular among Bilari patients for both chronic disease management and general wellness/rejuvenation.</li>
                    <li>Conducted in a hygienic, professionally managed treatment setup.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Diabetes Supportive Ayurvedic Care</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Herbal and lifestyle-based support alongside prescribed medication or insulin — not positioned as a replacement for standard diabetes care.</li>
                    <li>Diet plans designed to help manage blood sugar levels more effectively.</li>
                    <li>Guidance on daily routine (Dinacharya) to support long-term sugar control.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">5. Cancer Supportive Care</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Ayurvedic supportive care designed to work alongside standard cancer treatment, not as a substitute or cure.</li>
                    <li>Focus on improving strength, digestion, and quality of life during and after conventional cancer therapy.</li>
                    <li>Personalized herbal support based on the patient's treatment stage and condition.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">6. Heart Disease Supportive Care</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Lifestyle and diet-based Ayurvedic support alongside ongoing cardiac treatment.</li>
                    <li>Herbal formulations aimed at supporting circulation and overall heart health.</li>
                    <li>Stress-management and routine guidance suited to heart patients.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">7. General Ayurvedic Consultation</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>OPD consultations for common health issues — digestive problems, joint pain, skin conditions, and general wellness concerns.</li>
                    <li>Preventive health check-ups and Ayurvedic body-constitution (Prakriti) assessment.</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 6 — In-House Diagnostic and Pathology Facility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                In-House Diagnostic and Pathology Facility
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>On-site pathology lab for essential blood, kidney function, liver function, and diabetes-related tests.</li>
                <li>Removes the need for Bilari patients to visit a separate diagnostic center before or after consultation.</li>
                <li>Faster turnaround on reports, helping physicians adjust treatment promptly.</li>
                <li>Supports accurate, data-backed monitoring of chronic disease progress.</li>
              </ul>
            </div>


            {/* Section 7 — Expert Doctors and Treatment Team */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Expert Doctors and Treatment Team
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Team of qualified Ayurvedic physicians (BAMS/MD-Ayurveda) with focused experience in chronic disease management.</li>
                <li>Doctors trained to combine classical Ayurvedic texts with a modern, evidence-informed treatment approach.</li>
                <li>Emphasis on detailed case history-taking, especially important for kidney, liver, and diabetes patients coming from outside Moradabad city, including Bilari.</li>
                <li>Continuous doctor availability for follow-up consultations and treatment adjustments.</li>
              </ul>
            </div>


            {/* Section 8 — Facilities at Balprada Ayurvedic Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities at Balprada Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Clean, well-maintained hospital infrastructure designed for both OPD and in-patient Panchakarma care.</li>
                <li>Dedicated therapy rooms for Panchakarma procedures.</li>
                <li>In-house pharmacy for classical and formulated Ayurvedic medicines.</li>
                <li>Comfortable waiting areas suited for patients traveling from Bilari and nearby towns.</li>
                <li>Support staff trained to assist elderly and chronically ill patients.</li>
              </ul>
            </div>


            {/* Section 9 — What Makes Balprada Different from Other Ayurvedic Centers */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes Balprada Different from Other Ayurvedic Centers
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Research-oriented approach rather than generic herbal prescriptions.</li>
                <li>Specialization in serious chronic conditions (kidney, liver, cancer supportive care) rather than only wellness and beauty treatments.</li>
                <li>Combination of diagnostics, consultation, and therapy under a single roof.</li>
                <li>Clear communication with patients about realistic treatment timelines and expected outcomes.</li>
                <li>Strong focus on continuity of care for patients who need long-term monitoring.</li>
              </ul>
            </div>


            {/* Section 10 — The Ayurvedic Approach Followed at Balprada Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Approach Followed at Balprada Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Treatment begins with a detailed case history and Prakriti (body constitution) assessment rather than a generic prescription.</li>
                <li>Diagnosis combines classical Ayurvedic examination methods with modern lab reports for a more complete picture of the patient's condition.</li>
                <li>Herbal formulations are selected based on the individual patient's disease stage, body type, and existing medical history.</li>
                <li>Diet (Pathya-Apathya) is treated as a core part of treatment, not an optional suggestion — patients receive a written diet plan alongside medicines.</li>
                <li>Lifestyle correction, including sleep, daily routine, and stress management, is built into every treatment plan.</li>
                <li>Treatment progress is reviewed at regular intervals so the plan can be adjusted based on how the patient is responding.</li>
              </ul>
            </div>


            {/* Section 11 — Lifestyle and Diet Guidance for Chronic Patients from Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle and Diet Guidance for Chronic Patients from Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Kidney and liver patients are given specific food lists — items to avoid and items to include — based on their lab reports.</li>
                <li>Diabetic patients receive guidance on meal timing, portion control, and foods that help maintain stable blood sugar.</li>
                <li>Patients are counseled on avoiding self-medication or unverified home remedies that can worsen kidney or liver conditions.</li>
                <li>Family members are also briefed on how to support the patient's diet and daily routine at home in Bilari.</li>
                <li>Simple daily practices — adequate water intake (as advised by the physician), light physical activity, and consistent sleep timing — are emphasized for long-term results.</li>
              </ul>
            </div>


            {/* Section 12 — Precautions Before Starting Ayurvedic Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions Before Starting Ayurvedic Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Always share your complete medical history, including any ongoing allopathic treatment, with the Ayurvedic physician.</li>
                <li>Do not stop prescribed allopathic medicines (for diabetes, heart disease, or cancer) without your primary doctor's advice — Ayurvedic care here is designed to work alongside, not replace, standard treatment.</li>
                <li>Bring previous test reports and prescriptions to your first visit for a more accurate assessment.</li>
                <li>Follow the prescribed course duration; chronic conditions like kidney and liver disease typically require sustained treatment rather than a one-time fix.</li>
                <li>Report any unusual symptoms to the treating physician promptly during the course of therapy.</li>
              </ul>
            </div>


            {/* Section 13 — How Bilari Patients Can Book an Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Bilari Patients Can Book an Appointment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Visit the hospital website to check available consultation slots.</li>
                <li>Call the hospital helpline to schedule an OPD appointment or Panchakarma session in advance.</li>
                <li>First-time patients are advised to carry previous medical reports (if any) for a more accurate initial assessment.</li>
                <li>Follow-up patients can coordinate visit timing with their assigned physician for continuity of treatment.</li>
              </ul>
            </div>


            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <ul className="text-black space-y-2 mb-6 list-disc pl-5">
                <li>Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center.</li>
                <li>The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan.</li>
                <li>For patients traveling from Bilari and surrounding areas, the hospital offers convenient scheduling for both OPD visits and extended Panchakarma therapy sessions.</li>
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


            {/* Section 16 — FAQs */}
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