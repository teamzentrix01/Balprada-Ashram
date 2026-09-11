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
      q: "What is naturopathy used for?",
      a: "Naturopathy focuses on natural, drugless methods like diet, hydrotherapy, and lifestyle correction to support the body's own healing ability.",
    },
    {
      q: "Is naturopathy safe for everyone?",
      a: "Most therapies are safe when supervised by a qualified physician, but suitability depends on the patient's individual health condition.",
    },
    {
      q: "Can naturopathy replace my current medical treatment?",
      a: "No. Naturopathy at Balprada is offered as a supportive, complementary approach alongside necessary medical treatment.",
    },
    {
      q: "How far is Balprada from Bilari?",
      a: "The hospital is located in Moradabad, a short and convenient distance from Bilari.",
    },
    {
      q: "Does Balprada combine naturopathy with Ayurveda?",
      a: "Yes, many patients benefit from a combined plan using both naturopathic and ayurvedic therapies under one care team.",
    },
    {
      q: "Is fasting recommended for everyone at the naturopathy center?",
      a: "No, fasting protocols are only recommended after a proper health assessment and are not suitable for every patient.",
    },
    {
      q: "What should I bring to my first naturopathy consultation?",
      a: "Bring your recent medical history, current medications, and details of any ongoing treatment.",
    },
    {
      q: "Can naturopathy help with stress and poor sleep?",
      a: "Lifestyle counselling and select therapies at Balprada are commonly used to support better sleep and stress management.",
    },
    {
      q: "How long does it take to see results from naturopathy?",
      a: "Results vary by individual and condition; naturopathy generally works gradually through consistent lifestyle change rather than overnight effects.",
    },
    {
      q: "Can elderly patients undergo naturopathy treatment at Balprada?",
      a: "Yes, but therapies are modified to suit their health status, and a thorough assessment is done before recommending any protocol.",
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
                Naturopathy Center in Bilari – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4 ">
                Many people in and around Bilari are now looking beyond conventional medicine alone, searching for a naturopathy center that can help them manage lifestyle diseases, chronic fatigue, digestive issues, and stress through natural, drugless methods.
              </p>


              <p className="text-gray-700">
                Balprada Ayurvedic Hospital &amp; Research Center, based in Moradabad and easily accessible from Bilari, offers naturopathy-based care as part of its broader natural healing services, alongside its established ayurvedic treatment programs.
              </p>


              <p className="text-gray-700 mt-4">
                This page explains what naturopathy involves, how it is practiced at Balprada, why residents of Bilari are choosing this natural approach, and what to realistically expect from the process.
              </p>


              <p className="text-gray-700 mt-4">
                Note: Naturopathy at Balprada is offered as a natural, supportive wellness therapy. For any diagnosed medical condition, patients are advised to continue consulting their treating doctor; naturopathy is not positioned as a replacement for necessary medical treatment.
              </p>
            </div>


            {/* Section 2 — What Is Naturopathy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Naturopathy?
              </h2>


              <p className="text-gray-700 mb-4">
                Naturopathy is a drugless system of healing that uses natural elements — earth, water, air, sunlight, and diet — to support the body&apos;s own healing processes.
              </p>


              <p className="text-gray-700 mb-4">
                It focuses on identifying and correcting the root cause of poor health, rather than only managing individual symptoms.
              </p>


              <p className="text-gray-700 mb-4">
                Core naturopathy principles include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The body has an inherent ability to heal itself when given the right conditions</li>
                <li>Disease often results from accumulated toxins, poor diet, and unhealthy lifestyle habits over time</li>
                <li>Treatment works by removing these root causes, not simply suppressing symptoms</li>
                <li>Health is viewed as a balance between the physical body, diet, environment, and mental state</li>
              </ul>


              <p className="text-gray-700 mb-4">
                Naturopathy is recognized in India under the AYUSH system and is often practiced alongside Ayurveda and Yoga for a more complete wellness approach.
              </p>


              <p className="text-gray-700">
                Unlike conventional treatment, which often targets a specific symptom, naturopathy looks at the person&apos;s overall daily habits — sleep, food, activity, and stress levels — as a connected system.
              </p>
            </div>


            {/* Section 3 — Background on Naturopathy in India */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Brief Background on Naturopathy in India
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Naturopathy has been practiced in India for well over a century, gaining structured recognition through institutions such as the National Institute of Naturopathy and the Central Council for Research in Yoga &amp; Naturopathy</li>
                <li>It is formally included as one of the recognized systems under India&apos;s AYUSH framework (Ayurveda, Yoga, Unani, Siddha, Homeopathy), reflecting its established place in the country&apos;s healthcare landscape</li>
                <li>Over the years, naturopathy has grown from a niche practice into a widely used complementary approach, particularly for lifestyle-related and chronic conditions</li>
                <li>In smaller towns and semi-urban areas like Bilari, awareness of naturopathy is growing as more people look for accessible, natural alternatives to manage everyday health issues without heavy dependence on medication</li>
              </ul>
            </div>


            {/* Section 4 — Why Bilari Residents Are Choosing Naturopathy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Bilari Residents Are Choosing Naturopathy at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rising lifestyle diseases — Many families in Bilari are dealing with issues like obesity, high blood pressure, poor digestion, and chronic fatigue linked to modern lifestyle habits</li>
                <li>Desire for a natural, low-risk approach — Naturopathy appeals to those looking for treatment options with minimal side effects</li>
                <li>Convenient access — Balprada&apos;s Moradabad facility is close enough for Bilari residents to visit regularly without long travel</li>
                <li>Combined expertise — Patients benefit from a facility that offers both classical Ayurveda and naturopathy-based care under one roof</li>
                <li>Preventive health focus — Many visitors come not because they are unwell, but because they want to build long-term resistance to disease through natural means</li>
                <li>Growing dissatisfaction with quick-fix treatment — Some patients have tried multiple short-term remedies for chronic issues and are now looking for a more root-cause-focused approach</li>
                <li>Family-oriented care culture — Naturopathy sessions often involve simple guidance that entire households can adopt together, making it practical for joint families common in and around Bilari</li>
              </ul>
            </div>


            {/* Section 5 — Naturopathy Therapies Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Naturopathy Therapies Offered at Balprada
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diet Therapy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Personalized natural diet plans based on the individual&apos;s health condition and constitution</li>
                    <li>Emphasis on fresh, unprocessed, seasonal foods</li>
                    <li>Guidance on eliminating foods that contribute to toxin build-up</li>
                    <li>Practical meal-timing advice suited to the patient&apos;s daily routine and work schedule</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hydrotherapy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Use of water in various forms and temperatures to stimulate circulation and relaxation</li>
                    <li>Commonly used for muscular stiffness, stress relief, and general rejuvenation</li>
                    <li>Includes techniques such as hot and cold water applications suited to the patient&apos;s tolerance and condition</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Mud Therapy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Application of natural mud packs to support detoxification and skin health</li>
                    <li>Traditionally used for cooling and soothing inflamed areas of the body</li>
                    <li>Often combined with rest periods to enhance the calming effect on the body</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Massage Therapy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Therapeutic massage to relieve muscular tension and improve blood circulation</li>
                    <li>Often combined with herbal oils for added benefit</li>
                    <li>Adjusted in pressure and technique depending on the patient&apos;s age and health condition</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Fasting and Detox Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Supervised, structured fasting protocols suited to the patient&apos;s health status</li>
                    <li>Never recommended without proper physician assessment, especially for patients with existing medical conditions</li>
                    <li>Typically paired with gradual reintroduction of food to avoid digestive strain</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Lifestyle and Routine Counselling
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Practical guidance on sleep, activity levels, and daily routine (dinacharya)</li>
                    <li>Simple, sustainable changes rather than extreme lifestyle overhauls</li>
                    <li>Guidance tailored to work patterns common in Bilari&apos;s local community, including farming and business schedules</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 6 — Conditions Where Naturopathy May Offer Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions Where Naturopathy May Offer Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Digestive issues such as bloating, acidity, and irregular bowel movements</li>
                <li>Chronic fatigue and low energy levels</li>
                <li>Stress-related concerns and disturbed sleep patterns</li>
                <li>Weight management and metabolic imbalance</li>
                <li>Joint stiffness and general muscular discomfort</li>
                <li>Skin issues linked to poor diet or toxin accumulation</li>
                <li>General immunity building for people prone to frequent minor illnesses</li>
                <li>Mild respiratory discomfort linked to seasonal changes, addressed through lifestyle and dietary adjustment</li>
                <li>Recurring headaches associated with stress or poor daily routine</li>
              </ul>


              <p className="text-gray-700">
                Note: For serious or diagnosed medical conditions, naturopathy is offered as a supportive measure alongside — not instead of — appropriate medical treatment.
              </p>
            </div>


            {/* Section 7 — The Balprada Naturopathy Consultation Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Naturopathy Consultation Process
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Step 1 – Initial Health Assessment: The physician reviews the patient&apos;s medical history, current lifestyle, diet habits, and specific health concerns</li>
                <li>Step 2 – Identifying Root Causes: Rather than only addressing symptoms, the consultation focuses on lifestyle patterns and habits that may be contributing to the problem</li>
                <li>Step 3 – Customized Natural Care Plan: A plan combining diet changes, appropriate therapies, and daily routine adjustments is created for the individual</li>
                <li>Step 4 – Therapy Sessions: Based on the plan, the patient undergoes selected therapies such as hydrotherapy, massage, or mud therapy under supervision</li>
                <li>Step 5 – Follow-Up and Adjustment: Progress is reviewed periodically, and the plan is adjusted as the patient&apos;s condition improves</li>
                <li>Step 6 – Long-Term Maintenance Plan: Once the initial concern improves, patients are often given a simplified routine to maintain results independently at home</li>
              </ul>
            </div>


            {/* Section 8 — How Naturopathy Complements Ayurvedic Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Naturopathy Complements Ayurvedic Treatment at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Both systems share a common philosophy — treating the root cause of disease rather than just the symptoms</li>
                <li>Patients undergoing ayurvedic treatment for conditions like kidney, liver, or digestive issues often benefit from naturopathy-based diet and lifestyle support running alongside their main treatment</li>
                <li>Combining both approaches allows for more comprehensive lifestyle correction</li>
                <li>Better long-term sustainability of health improvements</li>
                <li>A single, coordinated care team managing both aspects of the patient&apos;s wellness journey</li>
                <li>Reduced likelihood of the same health issue recurring after treatment ends</li>
              </ul>


              <p className="text-gray-700">
                Physicians at Balprada assess which combination of ayurvedic and naturopathic therapies suits each patient individually — nothing is applied as a fixed, one-size-fits-all package.
              </p>
            </div>


            {/* Section 9 — What a Typical First Visit Looks Like */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What a Typical First Visit Looks Like
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients are asked to describe their main health concern along with any relevant medical history and current medications</li>
                <li>The physician may ask detailed questions about daily diet, sleep patterns, work routine, and stress levels, since these form the basis of the natural care plan</li>
                <li>Basic health parameters may be reviewed to understand the patient&apos;s general condition before recommending any therapy</li>
                <li>The consultation concludes with a clear explanation of the recommended therapies, expected outcomes, and realistic timelines — patients are not given vague or exaggerated promises</li>
                <li>Where relevant, family members are also given simple guidance so the recommended lifestyle changes can be followed consistently at home</li>
              </ul>
            </div>


            {/* Section 10 — Setting Realistic Expectations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Setting Realistic Expectations
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Naturopathy generally works gradually, through consistent lifestyle and dietary correction, rather than offering immediate results</li>
                <li>Patients are encouraged to view it as a long-term wellness process rather than a quick fix for chronic conditions</li>
                <li>Results can vary from person to person depending on the condition, consistency of follow-up, and adherence to the recommended routine</li>
                <li>Physicians at Balprada are transparent about what natural therapies can realistically achieve, avoiding exaggerated or unverified claims</li>
              </ul>
            </div>


            {/* Section 11 — Who Should Consider Visiting */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Consider Visiting the Naturopathy Center
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Individuals dealing with lifestyle-related health issues such as poor digestion, fatigue, or weight concerns</li>
                <li>People looking for a natural, low-risk way to build long-term immunity and resilience</li>
                <li>Patients seeking a complementary, drugless approach alongside their existing medical treatment</li>
                <li>Anyone interested in a structured detox and diet correction plan under professional supervision</li>
                <li>Families in Bilari wanting a nearby, trusted natural healing option instead of traveling to distant cities</li>
                <li>Individuals recovering from prolonged illness who want to rebuild strength through gentle, natural methods</li>
              </ul>
            </div>


            {/* Section 12 — Precautions and Safety Notes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions and Safety Notes
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Naturopathy therapies, especially fasting and detox protocols, should only be undertaken under the guidance of a qualified physician</li>
                <li>Patients with existing serious medical conditions should always disclose their full medical history before beginning any naturopathy therapy</li>
                <li>Naturopathy is not intended to replace prescribed medication or ongoing treatment for diagnosed conditions without a doctor&apos;s explicit guidance</li>
                <li>Balprada&apos;s physicians coordinate naturopathy plans carefully with any other treatment the patient is currently undergoing</li>
                <li>Pregnant women, elderly patients, and those with chronic illnesses are given specially modified plans rather than standard protocols</li>
              </ul>
            </div>


            {/* Section 13 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital for Naturopathy Near Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Experienced physicians trained in natural healing methods, working within a properly supervised clinical setting</li>
                <li>Personalized care plans built around the individual&apos;s specific health condition and lifestyle, not generic templates</li>
                <li>Combined expertise in both Ayurveda and naturopathy, offering a broader range of natural treatment options</li>
                <li>Convenient location for patients from Bilari and surrounding areas, avoiding the need to travel to bigger cities</li>
                <li>Honest, safety-first guidance — therapies are recommended based on suitability, not applied indiscriminately to every patient</li>
                <li>Transparent communication at every stage, so patients understand exactly what to expect from their treatment plan</li>
              </ul>
            </div>


            {/* Section 14 — How to Book */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Book a Naturopathy Consultation
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring your recent medical history and any ongoing treatment details to your first visit</li>
                <li>The physician will assess your condition and recommend a suitable combination of naturopathy and, where appropriate, ayurvedic therapies</li>
                <li>Follow-up sessions are scheduled based on your treatment plan and response to therapy</li>
                <li>Patients from Bilari and nearby localities can contact the hospital directly to book their first consultation</li>
              </ul>
            </div>


            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring naturopathy treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, lifestyle and diet assessment, followed by a personalized natural care plan. For patients traveling from Bilari and surrounding areas, the hospital offers convenient access for regular therapy sessions.
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