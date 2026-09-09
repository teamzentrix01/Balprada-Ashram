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
      q: "How long does Ayurvedic weight loss treatment usually take to show results?",
      a: "This varies by individual, but many patients notice gradual improvement in digestion and energy within the first few weeks, with steady weight change following consistent treatment.",
    },
    {
      q: "Is Ayurvedic weight loss treatment safe for people with thyroid issues?",
      a: "Yes, the doctor reviews your thyroid reports and current medication during consultation so the plan is suited to your overall health condition.",
    },
    {
      q: "Will I need to follow a very strict diet?",
      a: "Diet guidance is an important part of the plan, but it is designed to be practical and sustainable rather than extreme or difficult to maintain.",
    },
    {
      q: "Can this treatment help with PCOS-related weight gain?",
      a: "Ayurvedic care, including medicine, diet correction, and routine changes, is commonly used to support women managing PCOS-linked weight concerns, alongside their existing treatment.",
    },
    {
      q: "Do I need to visit in person, or can I get initial guidance remotely?",
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
                Ayurvedic Weight Loss Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4">
                Excess weight rarely comes from a single cause — it usually builds up gradually through slow metabolism, irregular eating habits, disturbed sleep, stress, and reduced physical activity. At Balprada Ayurvedic Hospital &amp; Research Center, weight management is approached as part of overall metabolic health, not as a quick-fix diet plan. With 35 years of trusted Ayurvedic care, in-house herbal medicines, and a disciplined ashram-based environment, Balprada offers Ayurvedic weight loss support that focuses on correcting the root imbalance behind weight gain rather than chasing short-term results.
              </p>
            </div>


            {/* Section 2 — Understanding Weight Gain in Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Weight Gain in Ayurveda
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda links excess weight primarily to an imbalance in Kapha dosha, which governs the body's structure, stability, and metabolism.</li>
                <li>Weak digestive fire (Agni) is considered a major contributing factor — when digestion is sluggish, the body struggles to metabolize food efficiently, leading to fat accumulation.</li>
                <li>The buildup of Ama (metabolic toxins) from poor digestion is seen as another key factor that slows metabolism and contributes to weight gain over time.</li>
                <li>Ayurveda does not view weight loss as simply &quot;eating less&quot; — it focuses on correcting digestion, metabolism, and daily routine together.</li>
                <li>Every patient's weight concern is assessed individually, since the underlying cause of weight gain can differ significantly from person to person.</li>
              </ul>
            </div>


            {/* Section 3 — Common Weight-Related Concerns We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Weight-Related Concerns We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Stubborn weight gain that has not responded well to regular diet and exercise attempts.</li>
                <li>Slow metabolism leading to weight gain even with a controlled diet.</li>
                <li>Weight gain linked to thyroid imbalance, where hormonal factors make weight management more difficult.</li>
                <li>Weight gain linked to PCOS or hormonal imbalance, particularly common among women.</li>
                <li>Post-pregnancy weight retention that has been difficult to manage through diet alone.</li>
                <li>Weight gain associated with stress or disturbed sleep, where irregular routine adds to the difficulty.</li>
                <li>Obesity-related fatigue and low stamina, affecting daily energy and activity levels.</li>
              </ul>
            </div>


            {/* Section 4 — The Balprada Approach to Weight Loss Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Approach to Weight Loss Treatment
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Detailed Consultation First
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every treatment plan begins with the doctor reviewing the patient's medical history, current weight pattern, lifestyle, and any related health conditions such as thyroid or PCOS.</li>
                    <li>The consultation looks closely at eating habits, sleep pattern, activity level, and stress, since these all directly affect Kapha balance and metabolism.</li>
                    <li>Rather than prescribing a generic weight-loss plan, the doctor builds a plan specific to what is observed during this detailed assessment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    In-House Ayurvedic Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal medicines in-house, allowing consistent quality across every formulation given to patients.</li>
                    <li>Formulations are selected to support digestion, metabolism, and Ama (toxin) clearance, based on the specific imbalance identified in each patient.</li>
                    <li>Medicines are given alongside clear diet instructions so herbal support and daily eating habits work together toward the same goal.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diet and Routine Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Diet guidance focuses on foods that support digestion and metabolism, along with correcting meal timing and portion patterns.</li>
                    <li>Patients are guided on simple, sustainable routine changes rather than extreme or restrictive diets that are difficult to maintain long-term.</li>
                    <li>Since weight management is closely tied to daily discipline, the plan also includes guidance on sleep timing and activity levels suited to the patient's lifestyle.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Supportive Facilities
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Panchakarma — cleansing-based therapies may be recommended where suitable to support metabolism and help clear Ama from the body.</li>
                    <li>Yoga — structured yoga practices can support fat metabolism, improve stamina, and build long-term physical discipline.</li>
                    <li>Naturopathy — nature-led practices are used to complement the Ayurvedic and dietary plan where appropriate.</li>
                    <li>Balprada Pathology Lab — in-house diagnostic testing helps track relevant markers such as thyroid function as part of a complete weight management journey.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Structured Follow-up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Weight loss achieved gradually and through correcting the root imbalance tends to be more sustainable than rapid, short-term results.</li>
                    <li>Regular follow-up allows the doctor to track progress, observe how the body is responding, and adjust the plan accordingly.</li>
                    <li>Follow-up visits also help reinforce diet and routine discipline, which are the most important factors in maintaining results over time.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — Why Patients Choose Balprada for Weight Loss Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Weight Loss Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to quality and consistency rather than sourced externally.</li>
                <li>A peaceful ashram environment that supports patients who want a disciplined, distraction-free setting for their weight management journey.</li>
                <li>Experienced doctors who look at weight gain as part of overall metabolic health, not as an isolated concern.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week for consultation and follow-up.</li>
                <li>Free OPD consultation on the 15th of every month, offering an accessible starting point for patients exploring Ayurvedic weight management.</li>
                <li>A combined approach — medicine, diet, yoga, panchakarma, naturopathy, and pathology support working together rather than in isolation.</li>
              </ul>
            </div>


            {/* Section 6 — Who Can Consider This Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Consider This Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Individuals who have struggled with stubborn weight gain despite regular diet and exercise efforts.</li>
                <li>Patients with thyroid-linked or PCOS-linked weight gain looking for Ayurvedic support alongside their existing treatment.</li>
                <li>People experiencing slow metabolism, low stamina, or fatigue connected to excess weight.</li>
                <li>Women managing post-pregnancy weight retention who want a structured, doctor-guided approach.</li>
                <li>Anyone looking for a sustainable, routine-based weight management plan rather than a short-term crash diet.</li>
                <li>Patients who have tried multiple diet programs before and are looking for a more root-cause-focused, medically guided alternative.</li>
              </ul>


              
            </div>


            {/* Section 7 — What to Expect During Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring any recent reports related to thyroid function, blood sugar, or hormonal health, if available.</li>
                <li>Be ready to discuss your daily eating pattern, activity level, sleep routine, and stress levels honestly, as this helps the doctor understand the complete picture.</li>
                <li>The treatment plan, including medicines and diet guidance, is explained clearly before you begin, along with realistic expectations for progress.</li>
                <li>Follow-up visits are used to track your response to treatment and adjust the plan as your metabolism improves.</li>
              </ul>
            </div>


            {/* Section 8 — Simple Lifestyle Habits That Support Healthy Weight Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Simple Lifestyle Habits That Support Healthy Weight Management
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eating meals at consistent times each day and avoiding late-night eating, which can slow digestion and metabolism.</li>
                <li>Favoring warm, freshly prepared food over cold, heavy, or processed food that is harder for the body to metabolize.</li>
                <li>Drinking warm water through the day to support digestion rather than relying on cold beverages.</li>
                <li>Staying physically active through regular walking, yoga, or light exercise suited to your fitness level.</li>
                <li>Prioritizing consistent, adequate sleep, since disturbed sleep is closely linked to weight gain and slow metabolism.</li>
                <li>Managing stress through simple daily practices, as prolonged stress is known to affect eating habits and metabolic balance.</li>
              </ul>
            </div>


            {/* Section 9 — How Excess Weight Affects Overall Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Excess Weight Affects Overall Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Energy levels — carrying excess weight often leads to persistent tiredness and reduced stamina throughout the day.</li>
                <li>Joint health — extra body weight puts additional strain on joints, particularly the knees and lower back, over time.</li>
                <li>Sleep quality — weight gain can contribute to disturbed sleep and breathing difficulty during rest, which further slows metabolism.</li>
                <li>Hormonal balance — excess weight and hormonal imbalance often influence each other, especially in cases linked to thyroid function or PCOS.</li>
                <li>Heart and metabolic health — sustained excess weight is closely connected to blood pressure, blood sugar, and overall metabolic strain.</li>
                <li>Confidence and daily comfort — beyond the physical impact, many patients also experience reduced confidence and comfort in daily activities, which improves as weight stabilizes.</li>
              </ul>
            </div>


            {/* Section 10 — The Balprada Difference in Weight Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Difference in Weight Management
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Instead of offering a one-size-fits-all diet chart, Balprada builds each weight management plan around the patient's specific digestive pattern, metabolism, and daily routine.</li>
                <li>Medicine, diet, and lifestyle guidance are given together as a single coordinated plan, since Ayurveda considers them inseparable for lasting results.</li>
                <li>The focus stays on correcting the root cause — weak digestion and Kapha imbalance — rather than relying on temporary calorie restriction alone.</li>
                <li>The ashram-based setting allows patients who choose a longer stay to follow a structured daily routine, which can meaningfully support consistent progress.</li>
                <li>Clear, honest communication is maintained throughout, with realistic expectations set from the very first consultation.</li>
              </ul>
            </div>


            {/* Section 11 — Preparing for Long-Term Weight Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Long-Term Weight Management
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Balprada's approach to weight loss is built around sustainability, since results achieved gradually through better digestion and routine tend to last longer than rapid, restrictive methods.</li>
                <li>Patients are encouraged to gradually adopt the diet and lifestyle principles taught during consultation as an ongoing habit, not just for the treatment period.</li>
                <li>Seasonal changes can influence metabolism and appetite, so guidance may be adjusted through the year to help maintain balance.</li>
                <li>Continued awareness of personal triggers — such as stress-eating or irregular sleep — is encouraged as part of maintaining results after the initial treatment phase.</li>
                <li>Family involvement in diet planning is encouraged where relevant, since shared household eating habits play a significant role in long-term success.</li>
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