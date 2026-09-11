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
      q: "Does Balprada Hospital treat chronic skin conditions specifically?",
      a: "Yes, the Ayurvedic wing offers dedicated treatment protocols for recurring skin and allergy-related conditions.",
    },
    {
      q: "Can I continue my regular medication while taking Ayurvedic treatment?",
      a: "In most cases yes, but this should be reviewed by the doctor to ensure the two approaches are properly coordinated.",
    },
    {
      q: "How is respiratory treatment approached at the hospital?",
      a: "Through a combination of therapies like Nasya, herbal support, and lifestyle guidance aimed at both symptom relief and long-term immunity.",
    },
    {
      q: "Is preventive Ayurvedic consultation available, or only treatment during a flare-up?",
      a: "Yes, patients are welcome to consult ahead of a season known to trigger their condition for preventive guidance.",
    },
    {
      q: "How long does skin or allergy treatment typically take to show results?",
      a: "This varies by condition and severity, though many patients notice gradual improvement over several weeks of consistent treatment.",
    },
    {
      q: "Is Vijaynagar within reasonable distance of the hospital?",
      a: "Yes, the hospital's location within the Bilari area makes it accessible for residents of Vijaynagar without long-distance travel.",
    },
    {
      q: "Will the doctor coordinate with my existing physician if needed?",
      a: "Patients are encouraged to keep both treating doctors informed, and the Ayurvedic team supports this coordinated approach.",
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
                Ayurvedic Hospital Near Vijaynagar, Bilari – Balprada Hospital
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Residents of Vijaynagar and the surrounding localities within Bilari have a dependable option for genuine, doctor-supervised Ayurvedic treatment at Balprada Hospital.</li>
                <li>Beyond general wellness, the hospital places particular focus on integrative care — using Ayurveda alongside, not instead of, conventional medicine where appropriate — along with dedicated attention to skin, respiratory, and allergy-related conditions that are common in this region.</li>
                <li>This page walks through what the hospital offers and how patients from Vijaynagar can access it.</li>
              </ul>
            </div>


            {/* Section 2 — Ayurvedic Care Designed Around Local Health Patterns */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Care Designed Around Local Health Patterns
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Vijaynagar residents, like much of the Bilari area, often deal with seasonal skin flare-ups, recurring allergies, and respiratory discomfort linked to dust, temperature shifts, and local environmental factors.</li>
                <li>Balprada Hospital's Ayurvedic wing pays close attention to these recurring, region-specific complaints, rather than applying a generic treatment approach unrelated to the patient's actual living conditions.</li>
                <li>The hospital combines classical Ayurvedic diagnosis with a practical understanding of what triggers flare-ups locally, allowing more targeted, relevant treatment plans.</li>
                <li>For chronic conditions that tend to recur seasonally, patients are guided not just on treatment during an active flare-up but also on preventive steps to reduce the frequency and severity of future episodes.</li>
              </ul>
            </div>


            {/* Section 3 — Skin and Allergy Care: A Core Strength */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Skin and Allergy Care: A Core Strength
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Chronic Skin Conditions – Ayurvedic protocols for recurring rashes, eczema-like symptoms, and persistent itching, focused on identifying and addressing root causes rather than only calming visible symptoms.</li>
                <li>Seasonal Allergies – Treatment approaches for allergic reactions that flare up during specific seasons, combining herbal support with practical guidance on avoiding known triggers.</li>
                <li>Skin Detoxification Therapies – Panchakarma-based treatments, including Virechana, often used to support the body's internal cleansing process in chronic skin cases.</li>
                <li>Scalp and Hair-Related Concerns – Ayurvedic approaches to common scalp irritation and hair thinning linked to underlying imbalance, treated as part of overall skin and system health rather than in isolation.</li>
                <li>Long-Term Skin Health Maintenance – Guidance on diet and daily routine adjustments that help maintain results after the active treatment phase is complete.</li>
              </ul>
            </div>


            {/* Section 4 — Respiratory and Immunity-Focused Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Respiratory and Immunity-Focused Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Recurring Cold and Sinus Congestion – Ayurvedic management aimed at reducing frequency and severity of recurring respiratory episodes, particularly during seasonal transitions.</li>
                <li>Nasya Therapy – Nasal administration of medicated oils used for chronic sinus issues, headaches, and general respiratory support.</li>
                <li>Mild Asthma-Related Symptom Support – Complementary Ayurvedic care used alongside conventional respiratory treatment, always with clear coordination between approaches.</li>
                <li>General Immunity Building – Herbal formulations and lifestyle guidance intended to strengthen overall resilience against recurring seasonal illness.</li>
                <li>Breathing and Lifestyle Guidance – Simple, sustainable practices recommended to support respiratory health as part of daily routine, not just during active treatment.</li>
              </ul>
            </div>


            {/* Section 5 — Integrative Care: Ayurveda Alongside Modern Medicine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Integrative Care: Ayurveda Alongside Modern Medicine
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Many patients from Vijaynagar arrive already under treatment from a general physician or specialist for conditions like diabetes, thyroid imbalance, or chronic pain, and want to explore Ayurvedic support without discontinuing existing care.</li>
                <li>Balprada Hospital's approach is to work within this reality — reviewing what conventional treatment a patient is already receiving and designing Ayurvedic support that complements rather than conflicts with it.</li>
                <li>Patients are never advised to abruptly stop prescribed conventional medication without proper medical guidance; instead, any adjustments are discussed carefully and coordinated responsibly.</li>
                <li>This integrative mindset is particularly valuable for chronic conditions where a purely single-system approach often falls short, and a combined strategy offers better day-to-day symptom management.</li>
                <li>Clear communication between the patient and both treating approaches — Ayurvedic and conventional — is encouraged, and patients are supported in keeping their respective doctors informed of all treatments being followed.</li>
              </ul>
            </div>


            {/* Section 6 — The Treatment Process at Balprada Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Treatment Process at Balprada Hospital
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Step 1: Comprehensive Assessment</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>The consultation begins with a detailed history covering current symptoms, past medical treatment, seasonal patterns of illness, and lifestyle factors relevant to the patient's condition.</li>
                    <li>For skin and respiratory cases in particular, doctors ask about specific triggers, timing of flare-ups, and any patterns noticed by the patient, which helps refine the treatment approach.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Step 2: Individualized Treatment Design</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Based on the assessment, a plan is created that may include herbal medication, targeted therapies such as Nasya or Virechana, and specific dietary or environmental guidance.</li>
                    <li>Where the patient is also under conventional treatment, the plan is designed to work alongside it, with clear communication about how the two approaches fit together.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Step 3: Active Treatment and Monitoring</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Patients follow the prescribed treatment course, with scheduled follow-ups to monitor response, particularly important for skin and respiratory conditions that can fluctuate with the seasons.</li>
                    <li>Adjustments are made as needed based on how the patient is responding, rather than rigidly continuing an approach that isn't producing results.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Step 4: Preventive Maintenance</h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Once the active phase of treatment is complete, patients receive guidance on maintaining results, particularly ahead of seasons known to trigger their specific condition.</li>
                    <li>This preventive focus is especially useful for recurring skin and respiratory issues, helping patients reduce the severity of future flare-ups rather than only treating them after they occur.</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 7 — Why Vijaynagar Residents Choose Balprada Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Vijaynagar Residents Choose Balprada Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Local accessibility that removes the need to travel to Moradabad or beyond for genuine, doctor-led Ayurvedic care.</li>
                <li>A treatment approach specifically attentive to the skin, allergy, and respiratory patterns common in the local environment.</li>
                <li>An integrative mindset that respects and coordinates with any existing conventional treatment a patient is following.</li>
                <li>Consistent doctor availability for follow-up visits, which matters greatly for conditions that require monitoring over time.</li>
                <li>Transparent communication about realistic treatment timelines and expected outcomes, without overstating what Ayurveda can achieve for a given condition.</li>
              </ul>
            </div>


            {/* Section 8 — Common Reasons Patients From Vijaynagar Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Reasons Patients From Vijaynagar Visit
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Recurring skin rashes, itching, or seasonal allergic skin reactions.</li>
                <li>Chronic sinus congestion, recurring cold, or mild respiratory discomfort.</li>
                <li>Joint pain and stiffness affecting daily mobility and comfort.</li>
                <li>Digestive complaints including bloating, acidity, and irregular bowel habits.</li>
                <li>General fatigue and low immunity, particularly following recurring seasonal illness.</li>
                <li>Interest in complementary Ayurvedic support alongside existing treatment for chronic conditions like diabetes or thyroid imbalance.</li>
                <li>Preventive consultation ahead of a season known to trigger a recurring health issue.</li>
              </ul>
            </div>


            {/* Section 9 — Understanding Environmental Triggers in and Around Vijaynagar */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Environmental Triggers in and Around Vijaynagar
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Localities like Vijaynagar within Bilari often sit close to dust-prone roads, seasonal crop-burning activity, and fluctuating temperatures — all recognized triggers for skin and respiratory sensitivity.</li>
                <li>Households using traditional cooking fuels or exposed to smoke from nearby agricultural activity may notice a higher frequency of respiratory irritation, which Ayurvedic assessment takes into account when building a treatment plan.</li>
                <li>Hard water common in parts of the region can also contribute to certain skin and scalp complaints, and doctors may factor this into both treatment and simple preventive advice.</li>
                <li>Occupational exposure — whether through farm work, small-scale trade, or household labor — is discussed during consultation, since repeated exposure to specific irritants often explains why a condition keeps recurring despite temporary relief.</li>
                <li>By identifying these environmental and occupational factors clearly, treatment moves beyond simply managing symptoms and toward genuinely reducing how often a condition returns.</li>
              </ul>
            </div>


            {/* Section 10 — Building a Long-Term Relationship With Vijaynagar Families */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Building a Long-Term Relationship With Vijaynagar Families
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Many patients from Vijaynagar begin with treatment for a single complaint — often a skin or respiratory issue — and continue returning for broader family healthcare needs once trust is established.</li>
                <li>The hospital encourages patients to view Ayurvedic care as an ongoing part of their health routine rather than a one-time intervention, particularly for conditions with a seasonal or recurring pattern.</li>
                <li>Doctors maintain patient records over time, which allows for more informed treatment decisions during repeat visits rather than starting the assessment process from scratch each time.</li>
                <li>Feedback from patients about what has and hasn't worked in previous treatment cycles is actively used to refine future recommendations, making care more precise with each visit.</li>
                <li>This continuity, made practical by the hospital's accessible location for Vijaynagar residents, is central to achieving lasting results rather than temporary relief.</li>
              </ul>
            </div>


            {/* Section 11 — What to Bring to Your First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Bring to Your First Visit
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Any photos or notes documenting the pattern of your skin or respiratory symptoms over time, which can help the doctor identify triggers more accurately than a single-visit description.</li>
                <li>A list of current medications, including anything prescribed for chronic conditions, so the treatment plan can be designed safely around them.</li>
                <li>Details of any known allergies or previous reactions to treatments, whether Ayurvedic, conventional, or otherwise.</li>
                <li>Information about your typical daily environment — work conditions, cooking fuel used at home, or specific exposure you suspect may be linked to your symptoms.</li>
                <li>Enough time for an unhurried first consultation, since a thorough initial assessment for skin and respiratory conditions often leads to a more accurate and effective treatment plan.</li>
              </ul>
            </div>


            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book Your Consultation at Balprada Hospital
              </h2>


              <ul className="text-black space-y-2 mb-6 list-disc pl-5">
                <li>Residents of Vijaynagar and surrounding areas in Bilari can access comprehensive Ayurvedic care for skin, respiratory, and chronic conditions at Balprada Hospital.</li>
                <li>The hospital's integrative approach ensures Ayurvedic treatment works alongside your existing conventional care, with coordinated guidance from experienced doctors.</li>
                <li>For recurring skin flare-ups, seasonal allergies, or respiratory concerns, the hospital offers both active treatment and preventive consultation to reduce future episodes.</li>
                <li>Call or visit the hospital to schedule your first consultation and begin a personalized treatment plan designed around your specific health patterns and local environmental factors.</li>
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