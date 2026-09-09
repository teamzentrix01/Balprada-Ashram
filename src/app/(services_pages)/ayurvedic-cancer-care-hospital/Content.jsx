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
      q: "Does Ayurveda cure cancer?",
      a: "No. Our Cancer Supportive Care program does not claim to cure cancer; it is designed to support patients alongside standard oncology treatment.",
    },
    {
      q: "Can Ayurvedic supportive care be taken during chemotherapy?",
      a: "Yes, in many cases, with close coordination and monitoring to ensure it does not interfere with the ongoing chemotherapy schedule.",
    },
    {
      q: "Will Ayurvedic treatment interfere with my oncology medication?",
      a: "Our physicians review your current medications before recommending anything, but you should always inform both your oncologist and our team about all treatments you are undergoing.",
    },
    {
      q: "Is this program suitable for all cancer stages?",
      a: "Supportive care can be adapted for most stages, but the intensity and type of support offered depends on the patient's current condition and treatment schedule.",
    },
    {
      q: "Can supportive care help with side effects like nausea and fatigue?",
      a: "Yes, this is one of the primary focus areas of our Cancer Supportive Care program, alongside nutritional and emotional support.",
    },
    {
      q: "Do I need a referral from my oncologist to start this program?",
      a: "A referral is not mandatory, but sharing your current oncology treatment details helps us design a safer and more effective supportive care plan.",
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
                Ayurvedic Cancer Care Hospital – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A cancer diagnosis brings not just physical challenges but also emotional and nutritional strain on patients and their families.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center, Moradabad, operates as a dedicated ayurvedic cancer care hospital offering structured supportive care designed to work alongside oncology treatment, helping patients manage side effects, maintain strength, and improve overall quality of life during their cancer journey.</li>
              </ul>
            </div>

            {/* Section 2 — What Is Ayurvedic Cancer Supportive Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Ayurvedic Cancer Supportive Care?
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurvedic cancer supportive care focuses on managing the side effects of cancer and its treatment, rather than treating cancer as a standalone cure.</li>
                <li>It works as a complementary layer of care alongside chemotherapy, radiation, surgery, or any ongoing oncology protocol.</li>
                <li>The goal is to help the body cope better with treatment-related stress, support digestion, and maintain energy and immunity throughout the treatment period.</li>
                <li>This approach is rooted in classical Ayurvedic principles of balance, nourishment, and gentle detoxification, adapted carefully for patients undergoing active cancer treatment.</li>
                <li>At Balprada, this care is always provided as an addition to, and never a replacement for, prescribed oncology treatment.</li>
              </ul>
            </div>

            {/* Section 3 — Our Ayurvedic Cancer Care Hospital Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Ayurvedic Cancer Care Hospital Services
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Symptom Management Support: Ayurvedic formulations and guidance aimed at easing common treatment-related discomforts such as nausea, fatigue, and loss of appetite.</li>
                <li>Nutritional Guidance: Personalised, easily digestible diet plans designed to help patients maintain strength and body weight during treatment cycles.</li>
                <li>Gentle Detoxification Support: Mild, physician-supervised procedures aimed at supporting the body&apos;s natural elimination process, adapted for patients undergoing active treatment.</li>
                <li>Immunity and Strength Support: Herbal formulations traditionally used to support the body&apos;s resilience and overall stamina during a demanding treatment schedule.</li>
                <li>Emotional and Counselling Support: Guidance sessions to help patients and family members cope with the emotional aspects of a cancer diagnosis and treatment journey.</li>
                <li>Post-Treatment Recovery Care: Continued Ayurvedic support after the completion of oncology treatment to help the body recover and rebuild strength.</li>
              </ul>
            </div>

            {/* Section 4 — Who Can Benefit From Ayurvedic Cancer Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Benefit From Ayurvedic Cancer Care at Balprada
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients currently undergoing chemotherapy or radiation who are experiencing fatigue, nausea, or appetite loss.</li>
                <li>Patients recovering after cancer surgery who need nutritional and strength-building support.</li>
                <li>Individuals in the post-treatment recovery phase looking for a structured approach to rebuild energy and immunity.</li>
                <li>Family members seeking guidance on diet and lifestyle adjustments to support a loved one through treatment.</li>
                <li>Patients looking for a complementary care option to use alongside their existing oncology treatment plan, with their oncologist&apos;s knowledge.</li>
              </ul>

              
            </div>

            {/* Section 5 — The Ayurvedic Approach Followed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Approach Followed at Our Cancer Care Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Individual Assessment: Every patient&apos;s Prakriti (body constitution), current treatment stage, and specific symptoms are carefully assessed before designing a care plan.</li>
                <li>Coordination with Oncology Team: Wherever possible, our physicians review the patient&apos;s ongoing oncology treatment details to ensure the supportive plan is safe and complementary.</li>
                <li>Gradual, Gentle Intervention: Given the sensitivity of cancer treatment, all Ayurvedic interventions are introduced gradually and monitored closely for tolerance.</li>
                <li>Focus on Comfort, Not Cure Claims: The emphasis throughout remains on symptom relief, nutritional support, and improved comfort rather than disease reversal claims.</li>
                <li>Continuous Monitoring: Regular follow-up visits allow the care plan to be adjusted based on the patient&apos;s response and changing treatment schedule.</li>
              </ul>
            </div>

            {/* Section 6 — Common Concerns Addressed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Addressed Through Our Supportive Care Program
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent fatigue and low energy levels during and after treatment cycles.</li>
                <li>Loss of appetite, altered taste, and difficulty maintaining adequate nutrition.</li>
                <li>Nausea and digestive discomfort associated with chemotherapy or radiation.</li>
                <li>Sleep disturbances and general weakness affecting daily functioning.</li>
                <li>Emotional stress, anxiety, and difficulty coping with the treatment journey.</li>
                <li>Weakened immunity and slower recovery between treatment cycles.</li>
              </ul>
            </div>

            {/* Section 7 — Herbal and Nutritional Support Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Herbal and Nutritional Support Offered
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Formulations traditionally used to support appetite and digestion during treatment, selected based on individual tolerance.</li>
                <li>Nutrient-dense, easily digestible meal guidance designed around the patient&apos;s current treatment schedule and energy levels.</li>
                <li>Herbs traditionally associated with supporting general strength and vitality, introduced cautiously and only where appropriate for the patient&apos;s condition.</li>
                <li>Hydration and gut-health guidance to help manage common digestive side effects of cancer treatment.</li>
                <li>All herbal recommendations are reviewed for safety alongside the patient&apos;s ongoing oncology medications before being introduced.</li>
              </ul>
            </div>

            {/* Section 8 — Facilities Available at Our Cancer Care Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Available at Our Cancer Care Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Experienced Ayurvedic physicians trained in supportive and palliative-style care for cancer patients.</li>
                <li>A calm, patient-friendly environment designed to reduce stress during hospital visits.</li>
                <li>In-house pathology and diagnostic support for monitoring general health parameters during the care journey.</li>
                <li>Dedicated consultation sessions that allow adequate time for patients and families to discuss concerns.</li>
                <li>Nutrition counselling support integrated directly into the treatment planning process.</li>
                <li>Continuity of care through scheduled follow-ups aligned with the patient&apos;s oncology treatment calendar.</li>
              </ul>
            </div>

            {/* Section 9 — What to Expect During Your First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Detailed Health Discussion: A thorough conversation about the current diagnosis, treatment stage, symptoms, and any ongoing medications.</li>
                <li>Review of Medical Records: Existing oncology reports and treatment plans are reviewed to understand the patient&apos;s current status.</li>
                <li>Prakriti and Symptom Assessment: Understanding the patient&apos;s body constitution and specific discomforts to design an appropriate supportive plan.</li>
                <li>Care Plan Explanation: A clear discussion of what supportive measures are recommended and how they fit alongside the existing treatment.</li>
                <li>Follow-Up Scheduling: Setting up a realistic follow-up schedule based on the patient&apos;s treatment calendar and response to care.</li>
              </ul>
            </div>

            {/* Section 10 — Supporting Families Through the Cancer Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting Families Through the Cancer Journey
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Cancer treatment affects not just the patient but the entire family, and clear guidance can ease a lot of uncertainty.</li>
                <li>Our physicians take time to explain dietary do&apos;s and don&apos;ts in simple, practical terms that families can follow at home.</li>
                <li>Guidance is also provided on creating a supportive home environment that helps the patient rest and recover between hospital visits.</li>
                <li>Families are encouraged to ask questions freely, as understanding the supportive care plan helps them stay actively involved in the patient&apos;s comfort and recovery.</li>
                <li>Emotional support sessions are also made available for family members who may be experiencing stress or caregiver fatigue.</li>
              </ul>
            </div>

            {/* Section 11 — Precautions We Follow */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions We Follow at Our Cancer Care Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>No Ayurvedic formulation is introduced without reviewing the patient&apos;s current oncology treatment and medication list.</li>
                <li>Detox-related procedures are avoided or heavily modified during periods of low immunity, such as immediately after chemotherapy sessions.</li>
                <li>Patients are always advised to continue their prescribed oncology treatment schedule without interruption.</li>
                <li>Any unexpected reaction or discomfort is reported to the treating oncologist promptly, in coordination with our physicians.</li>
                <li>Herbal recommendations are reviewed periodically as the patient&apos;s treatment stage and blood parameters change.</li>
              </ul>
            </div>

            {/* Section 12 — How Ayurvedic Care Fits Alongside Different Stages */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Ayurvedic Care Fits Alongside Different Stages of Cancer Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Before Treatment Begins: Supportive care can help build baseline strength, improve digestion, and prepare the body for the demands of upcoming treatment cycles.</li>
                <li>During Active Treatment: The focus shifts to managing side effects such as nausea, fatigue, and appetite loss, while closely monitoring the patient&apos;s tolerance to any herbal support.</li>
                <li>Between Treatment Cycles: This period is often used to rebuild strength, improve nutrition, and support the immune system before the next cycle begins.</li>
                <li>After Treatment Completion: Supportive care continues to help the body recover, rebuild stamina, and gradually return to normal daily function.</li>
                <li>Long-Term Wellness Follow-Up: Even after active treatment ends, periodic consultations can help patients maintain general health and catch any new concerns early.</li>
                <li>Throughout every stage, the supportive plan is adjusted in line with the patient&apos;s oncologist-guided treatment calendar rather than following a fixed timeline.</li>
              </ul>
            </div>

            {/* Section 13 — Why Choose Balprada Ayurvedic Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital for Cancer Supportive Care
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A dedicated, honestly-positioned Cancer Supportive Care program that does not make unrealistic cure claims.</li>
                <li>Experienced physicians who understand the sensitivities and precautions required while caring for cancer patients.</li>
                <li>A structured, individualised approach rather than a generic wellness package.</li>
                <li>In-house diagnostic facilities that allow continuous, convenient monitoring of general health parameters.</li>
                <li>A calm, supportive hospital environment that prioritises patient comfort throughout the visit.</li>
                <li>Conveniently located in Moradabad, making regular follow-up visits accessible for patients across the region.</li>
              </ul>
            </div>

            {/* Section 14 — Taking the Next Step */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Taking the Next Step
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>If you or a loved one are undergoing cancer treatment and looking for structured supportive care to manage side effects and improve daily comfort, a consultation is a good starting point.</li>
                <li>Bring along recent medical reports and details of the current treatment plan so our physicians can design a safe, well-coordinated supportive care approach.</li>
                <li>The team at Balprada Ayurvedic Hospital &amp; Research Center, Moradabad, is available to guide patients and families through this journey with honest, realistic, and compassionate care.</li>
              </ul>
            </div>

            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic supportive care for cancer treatment can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, assessment of current oncology treatment, and supportive care planning. For patients traveling from outside Moradabad, the hospital also assists with scheduling follow-ups aligned with their treatment calendar.
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