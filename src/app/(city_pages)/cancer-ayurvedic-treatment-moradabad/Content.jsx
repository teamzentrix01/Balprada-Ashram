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
      q: "Does Balprada treat or cure cancer?",
      a: "No, Balprada offers supportive Ayurvedic care for strength, diet, and emotional wellbeing alongside a patient's primary oncology treatment.",
    },
    {
      q: "Should I stop my chemotherapy or radiation to try Ayurvedic care?",
      a: "No, supportive care is meant to complement your prescribed treatment, not replace it. Always follow your oncologist's guidance.",
    },
    {
      q: "What kind of diet support is offered during cancer treatment?",
      a: "Guidance focuses on easy-to-digest, nutrient-dense foods suited to appetite and digestion changes during treatment.",
    },
    {
      q: "Can family members be involved in the consultation?",
      a: "Yes, family involvement is welcomed, especially for home-based diet and routine support.",
    },
    {
      q: "Is emotional support offered along with physical care?",
      a: "Yes, stress and emotional support are an important part of Balprada's supportive care approach.",
    },
    {
      q: "Do I need to inform my oncologist about this supportive care?",
      a: "Yes, it is important to keep your treating oncologist informed to ensure safe and coordinated care.",
    },
    {
      q: "Is the ashram environment suitable for patients undergoing active treatment?",
      a: "The calm environment is designed to offer comfort, but suitability is discussed individually based on the patient's condition.",
    },
    {
      q: "Does Balprada offer a free consultation for cancer supportive care?",
      a: "Yes, a free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Can supportive care help with fatigue during treatment?",
      a: "Guidance on rest, routine, and gentle activity is offered to help manage fatigue, tailored to the patient's energy levels.",
    },
    {
      q: "How do I book a consultation for cancer supportive care?",
      a: "You can call, WhatsApp, or email the hospital, or visit during the monthly free OPD.",
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
                Cancer Ayurvedic Treatment in Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A cancer diagnosis brings physical, emotional, and family challenges that go beyond the illness itself.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center offers sensitive, supportive Ayurvedic care for patients in Moradabad who are undergoing cancer treatment, focusing on strength, diet, energy, and emotional balance alongside their primary medical care.</li>
              </ul>
            </div>


            {/* Section 2 — Understanding Balprada's Role */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Understanding Balprada&apos;s Role in Cancer Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada offers Ayurvedic supportive care for cancer patients, not a replacement for oncology treatment such as chemotherapy, radiation, or surgery.</li>
                <li>The focus is on helping patients manage strength, appetite, digestion, and emotional wellbeing during a demanding treatment journey.</li>
                <li>Care is planned to work alongside a patient&apos;s existing medical team, not in place of it.</li>
                <li>Patients are always encouraged to continue their prescribed oncology treatment and to inform their treating doctor about any supportive care they are pursuing.</li>
                <li>Balprada&apos;s approach is rooted in providing comfort, routine, and compassionate guidance during a difficult period, rather than making treatment claims about the cancer itself.</li>
                <li>Every patient&apos;s situation is different, so supportive care is personalized after a detailed consultation and honest discussion of the patient&apos;s current medical status.</li>
                <li>The intention behind this care is to add comfort and structure to a patient&apos;s daily life, recognizing that cancer treatment affects far more than the physical body alone.</li>
                <li>Balprada is clear and upfront with patients and families about what supportive care can offer, avoiding any exaggerated claims about outcomes.</li>
              </ul>
            </div>


            {/* Section 3 — Why Supportive Care Matters */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why Supportive Care Matters During Cancer Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Cancer treatments like chemotherapy and radiation can significantly affect appetite, digestion, and energy levels.</li>
                <li>Emotional stress, anxiety, and fatigue are common companions to a cancer diagnosis, for both patients and their families.</li>
                <li>Supportive care aims to help the body cope better with the physical demands of ongoing treatment.</li>
                <li>A structured daily routine can offer a sense of stability during a time that otherwise feels unpredictable.</li>
                <li>Family involvement in supportive care often helps patients feel less isolated during treatment.</li>
                <li>Addressing quality of life alongside medical treatment is increasingly recognized as an important part of overall cancer care.</li>
                <li>Consistent supportive routines can also help patients feel a greater sense of agency during a phase where much feels outside their control.</li>
                <li>Small, manageable improvements in appetite, sleep, or mood can meaningfully affect a patient&apos;s day-to-day experience of treatment.</li>
              </ul>
            </div>


            {/* Section 4 — Areas of Support */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Areas of Support Offered at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Strength and Recovery:</strong> Guidance aimed at helping patients maintain physical strength and manage fatigue during treatment.</li>
                <li><strong>Diet Guidance:</strong> Practical dietary support to help address appetite changes, digestion issues, and nutritional needs during treatment.</li>
                <li><strong>Stress Support:</strong> Emotional and mental wellbeing support to help patients and families cope with the stress of a cancer diagnosis.</li>
                <li>Each of these areas is addressed individually, since patients experience different symptoms and needs at different stages of treatment.</li>
                <li>Support is adjusted over time as the patient&apos;s treatment phase and condition change.</li>
                <li>Patients recovering after active treatment may also continue supportive guidance to help with longer-term recovery and rebuilding strength.</li>
              </ul>
            </div>


            {/* Section 5 — Balprada's Approach */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Approach to Supportive Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Compassionate Consultation:</strong> The doctor takes time to understand the patient&apos;s diagnosis, current treatment stage, and specific concerns.</li>
                <li><strong>Coordination Awareness:</strong> Care is planned with an understanding that the patient is likely under active oncology treatment elsewhere.</li>
                <li><strong>Personalized Guidance:</strong> Diet, routine, and supportive herbal care are tailored to the individual, considering their treatment schedule and physical condition.</li>
                <li><strong>Family Communication:</strong> Where appropriate, family members are included in discussions so that home-based support aligns with the guidance given.</li>
                <li><strong>Emotional Steadiness:</strong> Sessions may include guidance on stress management practices suited to the patient&apos;s current energy and comfort levels.</li>
                <li><strong>Ongoing Follow-Up:</strong> Regular follow-up allows the team to adjust supportive care as the patient&apos;s treatment and condition evolve.</li>
                <li><strong>Respect for Medical Boundaries:</strong> The team is careful to stay within the scope of supportive care and does not offer opinions on oncology treatment decisions, which remain with the patient&apos;s medical team.</li>
              </ul>
            </div>


            {/* Section 6 — Supporting Caregivers */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Supporting Caregivers and Families
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Caregiving during cancer treatment can be physically and emotionally exhausting for family members as well as patients.</li>
                <li>Balprada&apos;s team acknowledges the caregiver&apos;s role and offers guidance on how family members can support the patient at home.</li>
                <li>Simple, practical suggestions on meal preparation, routine planning, and emotional support are shared with caregivers.</li>
                <li>Families are encouraged to look after their own wellbeing too, since sustained caregiving requires rest and support.</li>
                <li>Open communication between the patient, family, and Balprada&apos;s team helps ensure supportive care fits naturally into daily life.</li>
              </ul>
            </div>


            {/* Section 7 — Diet Guidance */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Diet Guidance During Cancer Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Focus on foods that are easy to digest, especially during periods of low appetite or nausea.</li>
                <li>Small, frequent meals are often more manageable than large meals during treatment.</li>
                <li>Adequate hydration is generally emphasized, particularly around chemotherapy or radiation sessions.</li>
                <li>Nutrient-dense foods are prioritized to help support the body&apos;s needs during a physically demanding period.</li>
                <li>Any specific dietary restrictions from the patient&apos;s oncology team are respected and incorporated into the guidance given.</li>
                <li>Family members are often guided on how to prepare suitable meals that align with the patient&apos;s changing appetite and preferences.</li>
              </ul>
            </div>


            {/* Section 8 — Supporting Strength and Energy */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Supporting Strength and Energy Levels
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Gentle guidance on rest and activity balance is offered based on the patient&apos;s current energy levels.</li>
                <li>Where suitable, light movement or breathing exercises may be suggested to support overall wellbeing.</li>
                <li>Sleep quality is addressed as part of overall strength support, since fatigue is common during cancer treatment.</li>
                <li>Patients are encouraged to communicate honestly about their energy levels so guidance can be adjusted appropriately.</li>
                <li>The goal is to support the body&apos;s ability to cope with treatment, not to push patients beyond what feels manageable.</li>
              </ul>
            </div>


            {/* Section 9 — Emotional and Stress Support */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Emotional and Stress Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A cancer diagnosis often brings anxiety, fear, and emotional exhaustion for both patients and their families.</li>
                <li>Balprada&apos;s ashram-based environment is designed to offer a sense of calm that many patients find comforting.</li>
                <li>Guided meditation and breath awareness practices may be offered where suitable to support emotional steadiness.</li>
                <li>Family members are also acknowledged as needing support, since caregiving during cancer treatment can be emotionally demanding.</li>
                <li>Open conversation is encouraged so that patients feel heard rather than rushed through consultations.</li>
                <li>The intention is to create a space where patients feel cared for as individuals, not only as a diagnosis.</li>
              </ul>
            </div>


            {/* Section 10 — Facilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Facilities That Support the Care Journey
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Meditation:</strong> Guided sessions supporting emotional steadiness and restorative rest during a challenging period.</li>
                <li><strong>Yoga:</strong> Gentle sessions adapted to the patient&apos;s comfort level and energy, where considered suitable.</li>
                <li><strong>Naturopathy:</strong> Nature-based supportive practices that align with the patient&apos;s overall wellbeing goals.</li>
                <li><strong>Pathology Lab:</strong> In-house testing support that can assist in tracking relevant health parameters alongside oncology monitoring.</li>
                <li><strong>Organic Food:</strong> Diet support using naturally grown food, relevant to nutritional guidance during treatment.</li>
                <li><strong>Ashram Environment:</strong> A peaceful setting intended to offer comfort and steadiness during a demanding health journey.</li>
              </ul>
            </div>


            {/* Section 11 — Important Considerations */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Important Considerations for Patients and Families
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Supportive Ayurvedic care should always be discussed with the patient&apos;s treating oncologist to avoid any interactions with ongoing treatment.</li>
                <li>Balprada&apos;s role is to support comfort, strength, and emotional wellbeing, not to diagnose, stage, or treat cancer itself.</li>
                <li>Patients should never discontinue or delay prescribed oncology treatment in favor of supportive care alone.</li>
                <li>Any new symptoms or concerns during treatment should be reported promptly to the patient&apos;s primary medical team.</li>
                <li>Supportive care works best as a complement to, not a substitute for, evidence-based cancer treatment.</li>
                <li>Balprada&apos;s team encourages transparency about the patient&apos;s full treatment history so that supportive guidance remains safe and appropriate.</li>
              </ul>
            </div>


            {/* Section 12 — Why Families Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why Families Choose Balprada for Supportive Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>A compassionate, patient-first approach that acknowledges the emotional weight of a cancer diagnosis.</li>
                <li>A calm ashram environment that many families find genuinely comforting during a stressful time.</li>
                <li>Practical, honest guidance on diet, routine, and emotional wellbeing rather than exaggerated claims.</li>
                <li>Coordination-aware care that respects and works alongside the patient&apos;s existing oncology treatment.</li>
                <li>Two accessible branches serving Moradabad and New Moradabad, making regular supportive visits more manageable.</li>
              </ul>
            </div>


            {/* Section 13 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The doctor will begin by understanding your diagnosis, current treatment plan, and specific concerns.</li>
                <li>A supportive care plan is discussed, covering diet, routine, and emotional wellbeing based on your current condition.</li>
                <li>You are encouraged to share details of your oncology treatment schedule so supportive care can be planned around it.</li>
                <li>Follow-up visits allow the team to adjust guidance as your treatment phase and needs change.</li>
                <li>Family members are welcome to be part of the conversation, especially around home-based diet and routine support.</li>
                <li>Questions about what supportive care can and cannot address are always welcomed and answered honestly.</li>
              </ul>
            </div>


            


            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients and families seeking compassionate Ayurvedic supportive care during cancer treatment can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center. The initial consultation involves a detailed discussion of your diagnosis, current treatment plan, and specific concerns, followed by a personalized supportive care plan covering diet, routine, and emotional wellbeing. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate regular supportive visits.
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


                <div className="flex items-start gap-3 mt-4">
                  <Mail
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:balpradaindia@gmail.com" className="text-black hover:underline">
                      balpradaindia@gmail.com
                    </a>
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