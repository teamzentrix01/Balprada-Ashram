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
      q: "Is naturopathy a replacement for my current medication?",
      a: "No, naturopathy is generally used alongside your doctor's treatment plan, not as a replacement, especially for chronic conditions.",
    },
    {
      q: "Is fasting therapy safe for everyone?",
      a: "No, fasting protocols are only recommended after medical clearance and are adjusted or avoided for certain patients.",
    },
    {
      q: "How long does a typical naturopathy programme last?",
      a: "Duration varies by condition and goals; many programmes range from a few days to a few weeks, based on the physician's recommendation.",
    },
    {
      q: "Can naturopathy help with diabetes or blood pressure?",
      a: "It may support management alongside your existing treatment, but should never replace prescribed medication without your doctor's guidance.",
    },
    {
      q: "Are the therapies painful or uncomfortable?",
      a: "Most therapies are gentle and well tolerated; any discomfort is discussed and managed by your treating physician.",
    },
    {
      q: "Is naturopathy suitable for elderly patients?",
      a: "Yes, therapies and intensity are adapted based on age, mobility, and existing health conditions.",
    },
    {
      q: "Do I need to stay at the hospital for the full programme?",
      a: "Some programmes are structured as daily outpatient visits, while others may involve a short in-facility stay depending on the treatment plan.",
    },
    {
      q: "Will I need any lab tests before starting naturopathy?",
      a: "Basic vitals and relevant existing reports are reviewed at consultation; further tests may be recommended depending on your condition.",
    },
    {
      q: "Can naturopathy be combined with Ayurveda or other therapies?",
      a: "Yes, many patients combine naturopathy with Ayurvedic or allopathic care; your physician will help coordinate the overall plan.",
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
                Naturopathy Treatment Center at Balprada Hospital
              </h1>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Modern lifestyles — long working hours, processed food, disturbed sleep, and constant stress — quietly build up into chronic health issues that medication alone doesn't always resolve.</li>
                <li>The Naturopathy Treatment Center at Balprada Hospital offers a drugless, nature-based approach to healing that focuses on restoring the body's own capacity to recover, using structured diet, water-based therapies, and lifestyle correction under professional supervision.</li>
              </ul>
            </div>


            {/* Section 2 — What Is Naturopathy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Naturopathy and How It Works
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Naturopathy is a drugless healing system built on the belief that the body has an inherent ability to heal itself when given the right conditions — clean nutrition, rest, movement, and a balanced internal environment.</li>
                <li>Treatment is based on the five great elements of nature (Panchamahabhuta) — earth, water, fire, air, and space — each corresponding to specific therapeutic methods.</li>
                <li>Rather than targeting a single symptom, naturopathic assessment looks at diet, sleep, stress levels, digestion, and daily routine as interconnected factors behind most chronic conditions.</li>
                <li>Naturopathy is generally used as a preventive and supportive approach, and for many chronic lifestyle conditions it works best alongside — not instead of — a patient's existing medical care.</li>
                <li>Treatment plans are personalised based on the patient's current health status, existing diagnoses, and any medication they are already taking.</li>
              </ul>
            </div>


            {/* Section 3 — Conditions We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions We Support at the Naturopathy Center
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Lifestyle disorders such as obesity, high blood pressure, and high cholesterol</li>
                <li>Type 2 diabetes management support, alongside a patient's existing diabetic care</li>
                <li>Chronic stress, anxiety, and mental fatigue</li>
                <li>Sleep disturbances and irregular sleep patterns</li>
                <li>Digestive issues such as acidity, bloating, constipation, and irritable bowel symptoms</li>
                <li>Chronic fatigue and low energy levels</li>
                <li>Skin conditions linked to diet and toxin build-up, such as acne and mild eczema</li>
                <li>Joint stiffness and muscular tension related to sedentary routines</li>
                <li>General detoxification needs for individuals recovering from prolonged medication use or unhealthy routines</li>
                <li>Preventive wellness for individuals with a family history of lifestyle diseases</li>
              </ul>
            </div>


            {/* Section 4 — Core Therapies Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Core Naturopathy Therapies Offered
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Hydrotherapy (Water-Based Treatments)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Hot and cold water applications are used to stimulate circulation, reduce inflammation, and support the body's detoxification processes.</li>
                    <li>Contrast baths, spinal baths, and steam baths are selected based on the patient's specific condition and tolerance.</li>
                    <li>Colon hydrotherapy may be recommended for patients with chronic digestive sluggishness, always under professional supervision.</li>
                    <li>Hydrotherapy sessions are adjusted for patients with cardiac conditions, low blood pressure, or other sensitivities identified during assessment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Mud Therapy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Application of natural mud packs is used to draw out toxins, cool inflammation, and soothe the nervous system.</li>
                    <li>Abdominal mud packs are commonly used to support digestion, while local mud applications may target specific areas of joint or muscular discomfort.</li>
                    <li>Mud used in treatment is sourced and processed to meet hygiene and quality standards before application.</li>
                    <li>This therapy is generally well tolerated but is adapted or avoided for patients with certain skin sensitivities or open wounds.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Fasting and Diet Therapy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Structured, supervised fasting protocols — ranging from juice fasting to modified food fasting — are used to give the digestive system periods of rest and support detoxification.</li>
                    <li>Diet therapy forms the backbone of most naturopathic treatment plans, with meal plans built around whole foods, seasonal produce, and the patient's specific condition.</li>
                    <li>Elimination-style diet phases may be used temporarily to identify foods that could be aggravating a patient's symptoms.</li>
                    <li>Fasting protocols are never applied without medical clearance, particularly for patients who are pregnant, elderly, underweight, or managing diabetes or other chronic conditions.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Massage and Manipulative Therapy
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Therapeutic massage techniques are used to relieve muscular tension, improve circulation, and support joint mobility.</li>
                    <li>Acupressure is applied to specific points on the body believed to correspond with different organs and systems.</li>
                    <li>Manipulative therapy may be recommended for patients with postural imbalances or recurring muscular stiffness.</li>
                    <li>Techniques and pressure are adapted for elderly patients or those with underlying joint or bone conditions.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Yoga, Pranayama, and Meditation
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Personalised yoga sessions are designed around the patient's current fitness level, flexibility, and any existing health conditions.</li>
                    <li>Pranayama (breathing exercises) is used to support respiratory health and reduce the physiological effects of chronic stress.</li>
                    <li>Guided meditation and relaxation techniques are included to address the mental and emotional dimension of chronic illness, not just the physical symptoms.</li>
                    <li>Yoga therapy plans are adjusted over time as the patient's strength, flexibility, and condition improve.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Sun, Air, and Space-Based Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Controlled sun exposure (heliotherapy) is used in specific protocols to support vitamin D synthesis and circulation, with exposure duration adjusted to the patient's skin type and tolerance.</li>
                    <li>Fresh air therapy and breathing exercises in open, natural surroundings are encouraged as part of the daily treatment routine.</li>
                    <li>Guided silence and mindfulness periods are included in some programmes to support mental clarity and reduce sensory overload from constant digital exposure.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — A Typical Day */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Typical Day at the Naturopathy Center
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Morning:</strong> Early wake-up followed by yoga, pranayama, or a guided walk, depending on the patient's fitness level.</li>
                <li><strong>Mid-Morning:</strong> Hydrotherapy or mud therapy session, based on the individualised treatment plan.</li>
                <li><strong>Midday:</strong> A naturopathic meal or supervised fasting phase, depending on the patient's protocol for that day.</li>
                <li><strong>Afternoon:</strong> Massage, acupressure, or rest period, allowing the body to process the morning's therapies.</li>
                <li><strong>Evening:</strong> Light movement, meditation, or a relaxation-focused session to wind down the day.</li>
                <li><strong>Night:</strong> Guidance on sleep hygiene practices to support consistent, restorative rest.</li>
              </ul>
            </div>


            {/* Section 6 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada Hospital for Naturopathy
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Treatment plans are built around a full assessment of the patient's medical history, current medication, and lifestyle — not a fixed package applied to everyone.</li>
                <li>All therapies are administered by trained naturopathy practitioners under the supervision of qualified physicians.</li>
                <li>Fasting and detox protocols are only recommended after confirming the patient is medically fit for them.</li>
                <li>Patients are encouraged to keep their primary physician informed of any naturopathic treatment they are undergoing, particularly if they manage a chronic condition like diabetes or hypertension.</li>
                <li>Progress is tracked through regular reviews of symptoms, vitals, and relevant health markers rather than assumed from general wellbeing alone.</li>
                <li>Clear communication is prioritised — patients are told what naturopathy can realistically support, rather than being promised guaranteed cures.</li>
              </ul>
            </div>


            {/* Section 7 — Facilities Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Available at the Center
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dedicated hydrotherapy units for hot, cold, and contrast water treatments.</li>
                <li>Separate treatment rooms for mud therapy and massage, maintained under hygienic conditions.</li>
                <li>Supervised fasting and diet therapy support with regular vital monitoring.</li>
                <li>Yoga and meditation spaces designed for a calm, low-stimulation environment.</li>
                <li>Consultation rooms where physicians review medical history and current reports before finalising a plan.</li>
                <li>Coordination support for patients travelling from other cities who wish to undergo a multi-day wellness programme.</li>
              </ul>
            </div>


            {/* Section 8 — Treatment Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect: The Treatment Journey
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Step 1 – Consultation:</strong> Detailed review of medical history, current medication, lifestyle habits, and health goals.</li>
                <li><strong>Step 2 – Assessment:</strong> Evaluation of vitals, digestion, sleep patterns, and stress levels to identify contributing factors.</li>
                <li><strong>Step 3 – Plan Design:</strong> A combination of hydrotherapy, diet or fasting protocol, massage, and yoga is finalised based on the assessment.</li>
                <li><strong>Step 4 – Supervised Therapy:</strong> Sessions are conducted under professional supervision, with vitals monitored where relevant.</li>
                <li><strong>Step 5 – Progress Review:</strong> Follow-up consultations track changes in symptoms, energy levels, and any relevant health markers.</li>
                <li><strong>Step 6 – Maintenance Plan:</strong> Patients receive a sustainable home routine covering diet, sleep, and movement to maintain progress after the programme ends.</li>
              </ul>
            </div>


            {/* Section 9 — Signs to Explore Naturopathy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That Naturopathy May Be Worth Exploring
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Persistent fatigue or low energy despite adequate sleep</li>
                <li>Recurring digestive discomfort not clearly linked to a specific diagnosis</li>
                <li>Difficulty managing stress, with physical symptoms like tension headaches or disturbed sleep</li>
                <li>Lifestyle-related weight gain that hasn't responded to generic diet advice</li>
                <li>A desire to reduce dependence on long-term medication for manageable lifestyle conditions, done only in consultation with the prescribing doctor</li>
                <li>Interest in a structured, supervised reset for overall health rather than isolated symptom treatment</li>
              </ul>
            </div>


            {/* Section 10 — Lifestyle Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Guidance for Sustained Wellness
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Prioritise consistent sleep and wake times, since irregular sleep undermines most other health efforts.</li>
                <li>Build meals around whole, minimally processed foods rather than restrictive or fad diet patterns.</li>
                <li>Include daily movement, even if brief, rather than relying solely on occasional intense exercise.</li>
                <li>Practise regular stress-reduction techniques such as breathing exercises or short meditation breaks.</li>
                <li>Stay adequately hydrated throughout the day rather than concentrating fluid intake at specific times.</li>
                <li>Continue any prescribed medical treatment for chronic conditions unless your doctor advises a change.</li>
              </ul>
            </div>


            {/* Section 11 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring naturopathy for their health concerns can book a consultation at Balprada Hospital's Naturopathy Treatment Center. The initial consultation typically involves a detailed review of medical history, current medication, lifestyle habits, and health goals, followed by a personalised treatment plan combining hydrotherapy, diet or fasting protocols, massage, yoga, and other nature-based therapies.
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


            {/* Section 12 — FAQs */}
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