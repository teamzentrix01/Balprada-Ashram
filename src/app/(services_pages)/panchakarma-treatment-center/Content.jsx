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
      q: "How many days does a Panchakarma program usually take?",
      a: "Duration varies by procedure and patient condition, ranging from a few days for simple therapies to two to three weeks for more comprehensive programs.",
    },
    {
      q: "Is Panchakarma safe for everyone?",
      a: "No, not every therapy suits every patient. A physician assessment is required to determine which procedures, if any, are appropriate for you.",
    },
    {
      q: "Will I need to follow a special diet during Panchakarma?",
      a: "Yes, a specific pre- and post-therapy diet is an essential part of the process and significantly affects the results.",
    },
    {
      q: "Can Panchakarma be combined with ongoing allopathic treatment?",
      a: "In many cases yes, but this depends on the specific condition and medication. Our physicians review this during the initial consultation.",
    },
    {
      q: "Is Panchakarma only for detox, or can it help with specific health conditions?",
      a: "Both. It is used for general seasonal detoxification as well as targeted support for conditions like joint pain, digestive issues, and stress-related disorders.",
    },
    {
      q: "What should I avoid during a Panchakarma program?",
      a: "Heavy physical exertion, irregular sleep, and deviation from the prescribed diet should be avoided to get the full benefit of the therapy.",
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
                Panchakarma Treatment Center – Service Page | Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Panchakarma is one of the most powerful branches of classical Ayurveda, designed to cleanse the body, restore balance, and support long-term health.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center, Moradabad, operates a dedicated Panchakarma Treatment Center offering supervised, physician-guided therapies tailored to each patient&apos;s constitution and health condition.</li>
              </ul>
            </div>

            {/* Section 2 — About Our Panchakarma Treatment Center */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Our Panchakarma Treatment Center
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Our Panchakarma Treatment Center is set up as a dedicated facility within the hospital, separate from general consultation areas, to ensure privacy and a calm therapeutic environment.</li>
                <li>All therapies are conducted under the direct supervision of qualified Ayurvedic physicians rather than by therapists working independently.</li>
                <li>The center follows classical Panchakarma protocols, adapted with modern hygiene and safety standards.</li>
                <li>Every patient undergoes a detailed assessment before starting therapy, ensuring the selected procedures are appropriate for their condition and constitution.</li>
                <li>The center caters to a wide range of patients, from those seeking general wellness and detoxification to those managing chronic conditions such as joint pain, digestive issues, or stress-related disorders.</li>
              </ul>
            </div>

            {/* Section 3 — What Panchakarma Therapy Involves */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Panchakarma Therapy Involves
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Panchakarma literally means &quot;five actions,&quot; referring to five classical detoxification procedures used to eliminate accumulated toxins (Ama) from the body.</li>
                <li>The therapy works on the principle of balancing the three doshas — Vata, Pitta, and Kapha — through a structured, phase-wise process.</li>
                <li>Treatment is typically divided into three phases: Purva Karma (preparatory procedures), Pradhan Karma (the main detoxification procedures), and Paschat Karma (post-therapy recovery and diet guidance).</li>
                <li>Each phase is equally important, and skipping preparatory or recovery steps can reduce the overall effectiveness and safety of the therapy.</li>
                <li>Panchakarma is not a one-size-fits-all program; the specific procedures, duration, and intensity are customised for every patient.</li>
              </ul>
            </div>

            {/* Section 4 — Core Therapies Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Core Therapies Offered at Our Panchakarma Center
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Vamana (Therapeutic Emesis): Used to clear excess Kapha dosha, typically recommended for specific respiratory and metabolic conditions under close supervision.</li>
                <li>Virechana (Therapeutic Purgation): Aimed at clearing aggravated Pitta dosha, often used to support liver and digestive health.</li>
                <li>Basti (Medicated Enema Therapy): Considered one of the most versatile Panchakarma procedures, used to balance Vata dosha and support joint, digestive, and nervous system health.</li>
                <li>Nasya (Nasal Administration): Involves administering medicated oils or powders through the nasal passage, commonly used for headaches, sinus issues, and certain neurological conditions.</li>
                <li>Raktamokshana (Blood Purification Therapy): A specialised procedure used selectively for specific skin and blood-related conditions, performed only when clearly indicated.</li>
                <li>Abhyanga (Therapeutic Oil Massage): A preparatory and standalone therapy used to improve circulation, relax muscles, and support overall detoxification.</li>
                <li>Swedana (Herbal Steam Therapy): Often paired with Abhyanga to open channels and prepare the body for deeper detoxification procedures.</li>
              </ul>
            </div>

            {/* Section 5 — Conditions That May Benefit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions That May Benefit From Panchakarma Therapy
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Chronic joint pain, stiffness, and conditions such as osteoarthritis or general musculoskeletal discomfort.</li>
                <li>Digestive disorders, including bloating, acidity, and sluggish digestion linked to poor Agni.</li>
                <li>Skin conditions that are often linked to underlying toxin accumulation and dosha imbalance.</li>
                <li>Stress, anxiety, and sleep disturbances that respond well to calming therapies like Abhyanga and Shirodhara.</li>
                <li>Respiratory conditions such as recurrent sinus congestion, where Nasya therapy may offer support.</li>
                <li>General fatigue, sluggishness, and the desire for a structured seasonal detox program.</li>
                <li>Certain chronic lifestyle conditions where Panchakarma is used as a supportive measure alongside standard medical treatment.</li>
              </ul>

              
            </div>

            {/* Section 6 — How Our Panchakarma Treatment Process Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Our Panchakarma Treatment Process Works
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Initial Consultation: A detailed discussion of the patient&apos;s health history, current symptoms, medications, and lifestyle, along with a Prakriti assessment.</li>
                <li>Suitability Assessment: Physicians determine whether Panchakarma is appropriate at this time, and if so, which specific procedures are indicated.</li>
                <li>Purva Karma (Preparation): Preparatory therapies such as internal oleation and Abhyanga are used to prepare the body for the main detoxification process.</li>
                <li>Pradhan Karma (Main Therapy): The core Panchakarma procedure — such as Basti, Virechana, or Vamana — is administered under close supervision over a defined number of days.</li>
                <li>Paschat Karma (Recovery): Post-therapy diet and lifestyle guidelines are provided to help the body stabilise and retain the benefits of the treatment.</li>
                <li>Follow-Up Review: A follow-up consultation is scheduled to assess results and plan any further supportive care if needed.</li>
              </ul>
            </div>

            {/* Section 7 — Precautions and Safety Protocols */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions and Safety Protocols We Follow
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Every patient undergoes a health assessment before therapy to rule out conditions where Panchakarma may not be safe.</li>
                <li>Procedures such as Vamana and Virechana are reserved for patients who are physically prepared for them, following proper preparatory steps.</li>
                <li>Elderly patients, pregnant women, and those with certain chronic conditions are evaluated with extra caution, and therapies are modified or avoided where necessary.</li>
                <li>All equipment, oils, and therapy rooms follow strict hygiene protocols to ensure patient safety.</li>
                <li>Patients are monitored throughout the therapy period, with physicians available to address any discomfort or unexpected reaction promptly.</li>
                <li>Patients on other ongoing medical treatment are advised to continue their prescribed medication unless specifically guided otherwise by their treating physician.</li>
              </ul>
            </div>

            {/* Section 8 — Seasonal Relevance of Panchakarma Therapy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Seasonal Relevance of Panchakarma Therapy
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda places strong emphasis on Ritucharya (seasonal regimen), and Panchakarma is traditionally aligned with specific seasons for maximum benefit.</li>
                <li>Spring is often considered favourable for Vamana therapy, when Kapha accumulation from winter tends to peak.</li>
                <li>The monsoon and early autumn periods are commonly associated with Basti therapy, as Vata dosha tends to be more active during this time.</li>
                <li>Late summer and early autumn are often linked to Virechana therapy, coinciding with typical Pitta aggravation.</li>
                <li>Our physicians consider the current season alongside the patient&apos;s individual constitution when recommending the right time to begin a Panchakarma program.</li>
                <li>Aligning therapy with the right season can enhance results and reduce the chance of any adverse reaction to the procedures.</li>
              </ul>
            </div>

            {/* Section 9 — Who Should Consider Panchakarma Therapy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Consider Panchakarma Therapy
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Individuals looking for a structured, seasonal detoxification program as part of preventive health care.</li>
                <li>Patients with chronic joint, digestive, or stress-related concerns seeking a more comprehensive Ayurvedic intervention than herbal medicine alone.</li>
                <li>Those recovering from a prolonged illness who want structured support to rebuild strength and balance.</li>
                <li>Individuals who have tried general Ayurvedic remedies without adequate improvement and are looking for a deeper therapeutic approach.</li>
                <li>Patients specifically referred by our physicians as part of a broader treatment plan for kidney, liver, or metabolic health support.</li>
              </ul>
            </div>

            {/* Section 10 — Facilities at Our Panchakarma Treatment Center */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities at Our Panchakarma Treatment Center
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Dedicated therapy rooms designed to maintain privacy, comfort, and a calm therapeutic atmosphere.</li>
                <li>Experienced Panchakarma therapists working under the direct supervision of qualified Ayurvedic physicians.</li>
                <li>Use of authentic, quality-checked medicated oils and herbal preparations for all procedures.</li>
                <li>In-house pathology support for pre- and post-therapy health monitoring where required.</li>
                <li>Clear pre-therapy instructions and post-therapy diet guidance provided to every patient in simple, practical terms.</li>
                <li>Convenient scheduling options to accommodate the multi-day nature of most Panchakarma programs.</li>
              </ul>
            </div>

            {/* Section 11 — What to Expect Before Starting Therapy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect Before Starting Therapy
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients are advised to share their complete medical history, including any ongoing treatment, allergies, or recent surgeries.</li>
                <li>A short preparatory period is often recommended before the main therapy begins, involving dietary adjustments and mild internal oleation.</li>
                <li>Patients are encouraged to keep their schedule relatively light during the therapy period, as some procedures can cause temporary fatigue.</li>
                <li>Comfortable clothing and a willingness to follow the prescribed diet during the program are important for getting the best results.</li>
                <li>Questions about the process, expected duration, and after-effects are welcomed and answered clearly during the initial consultation.</li>
              </ul>
            </div>

            {/* Section 12 — Why Choose Balprada's Panchakarma Treatment Center */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada&apos;s Panchakarma Treatment Center
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A dedicated, physician-supervised center rather than a generic spa-style wellness setup.</li>
                <li>Individualised therapy plans based on Prakriti, current health status, and specific goals rather than fixed packages.</li>
                <li>Strict safety protocols and honest guidance on which therapies are or are not appropriate for a given patient.</li>
                <li>Experienced therapists and physicians working together throughout the treatment journey.</li>
                <li>In-house diagnostic support for better-informed, evidence-guided therapy planning.</li>
                <li>Conveniently located in Moradabad, making a multi-day therapy program more accessible for regional patients.</li>
              </ul>
            </div>

            {/* Section 13 — Taking the Next Step */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Taking the Next Step
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>If you are considering Panchakarma therapy for general wellness or as part of managing a specific health condition, an initial consultation is the right first step.</li>
                <li>Bring along any recent medical reports and a list of current medications so our physicians can assess suitability accurately.</li>
                <li>The team at Balprada Ayurvedic Hospital &amp; Research Center, Moradabad, is available to guide you through a safe, personalised Panchakarma treatment plan.</li>
              </ul>
            </div>

            {/* Section 14 — Aftercare and Long-Term Maintenance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Aftercare and Long-Term Maintenance
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The benefits of Panchakarma are best sustained through consistent post-therapy diet and lifestyle habits, not just the procedure itself.</li>
                <li>Patients are usually given a phased return-to-normal-diet plan, since reintroducing heavy or oily foods too quickly can undo some of the therapy&apos;s benefits.</li>
                <li>Simple daily practices such as regular sleep timing, gentle exercise, and mindful eating are encouraged to help maintain the balance achieved during therapy.</li>
                <li>Periodic follow-up consultations, even after the main program ends, help track whether the improvements are holding steady over time.</li>
                <li>Many patients choose to repeat a lighter Panchakarma program on a seasonal or yearly basis as part of ongoing preventive care rather than a one-time intervention.</li>
              </ul>
            </div>

            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <p className="text-black mb-6">
                Patients interested in exploring Panchakarma therapy for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, Prakriti assessment, and suitability evaluation, followed by a personalised treatment plan. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day therapy schedules.
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