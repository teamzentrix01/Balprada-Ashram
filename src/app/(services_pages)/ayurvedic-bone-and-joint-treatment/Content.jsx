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
      q: "Can Ayurveda cure arthritis completely?",
      a: "Ayurveda focuses on reducing pain, inflammation, and stiffness, and supporting joint function; results vary and work best alongside regular medical monitoring.",
    },
    {
      q: "Is Panchakarma safe for elderly joint patients?",
      a: "Yes, when customised and supervised by qualified physicians based on the patient's age, mobility, and overall health.",
    },
    {
      q: "How many sessions of Basti are usually required?",
      a: "This depends on the condition's severity; the physician recommends a specific course after the initial assessment.",
    },
    {
      q: "Can I continue my current arthritis medication?",
      a: "Yes, essential medication should continue unless your treating doctor advises otherwise.",
    },
    {
      q: "Is the treatment suitable for slip disc or sciatica?",
      a: "Yes, specific protocols exist for these conditions, though severe cases should first be evaluated by a spine specialist.",
    },
    {
      q: "How soon can I expect relief from joint pain?",
      a: "Timelines vary by condition and severity; the physician provides a realistic estimate after assessing your case.",
    },
    {
      q: "Do I need to stay at the hospital for the full treatment?",
      a: "Some Panchakarma procedures are recommended as daily outpatient sessions over several days; your physician will advise the most suitable schedule.",
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
                Ayurvedic Bone and Joint Treatment at Balprada Hospital
              </h1>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Joint stiffness, chronic back pain, and reduced mobility often get pushed aside as an unavoidable part of ageing or a busy lifestyle.</li>
                <li>At Balprada Hospital, our ayurvedic bone and joint treatment programme addresses these concerns at their root — using classical Panchakarma therapies, herbal formulations, and structured movement therapy to support joint function, ease pain, and help patients stay active for longer.</li>
              </ul>
            </div>


            {/* Section 2 — Understanding Bone and Joint Disorders */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Bone and Joint Disorders in Ayurveda
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda classifies most joint and musculoskeletal conditions under Vata-dominant disorders, since Vata dosha governs movement, nerve function, and the lubrication of joints.</li>
                <li>Sandhivata (the Ayurvedic correlate of osteoarthritis) is described as a degenerative condition where joint lubrication and cartilage cushioning gradually reduce.</li>
                <li>Amavata (linked to rheumatoid arthritis) is understood as a condition where improperly digested metabolic waste (Ama) accumulates in the joints, contributing to inflammation and stiffness.</li>
                <li>Katishoola (lower back pain), Griva Stambha (neck stiffness), and Gridhrasi (sciatica) are among the specific conditions with dedicated classical treatment protocols.</li>
                <li>Long sitting hours, poor posture, sedentary lifestyles, and inadequate hydration are commonly identified contributing factors in modern patients presenting with these conditions.</li>
              </ul>
            </div>


            {/* Section 3 — Conditions We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Bone and Joint Conditions We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Osteoarthritis of the knee, hip, and other weight-bearing joints</li>
                <li>Rheumatoid arthritis and other inflammatory joint conditions, as a supportive approach alongside rheumatology care</li>
                <li>Chronic and acute lower back pain, including early-stage disc-related discomfort</li>
                <li>Cervical spondylosis and neck stiffness from prolonged desk work</li>
                <li>Sciatica (Gridhrasi) with radiating pain down the leg</li>
                <li>Frozen shoulder and restricted shoulder mobility</li>
                <li>Gout-related joint pain and swelling</li>
                <li>Post-fracture stiffness and recovery support, once cleared by an orthopaedic specialist</li>
                <li>General muscular stiffness, cramps, and reduced flexibility linked to sedentary routines</li>
                <li>Age-related joint degeneration and preventive joint care for older adults</li>
              </ul>
            </div>


            {/* Section 4 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Treatment Approach
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Assessment and Nidana Parivarjana
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every consultation begins with a review of the affected joints, pain pattern, duration, and any existing X-rays, MRI reports, or blood markers (such as RA factor or uric acid levels).</li>
                    <li>Nidana Parivarjana — identifying and reducing exposure to the specific causative factors behind the patient's condition — is central to the initial plan, whether that means posture correction, dietary triggers, or activity modification.</li>
                    <li>The patient's Prakriti (constitution) and current dosha imbalance are assessed to guide the choice of therapy and herbal formulation.</li>
                    <li>Reports and medication from the patient's orthopaedist or rheumatologist are reviewed so the Ayurvedic plan works alongside existing medical care rather than in place of it.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Panchakarma and Externally Applied Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Abhyanga (therapeutic oil massage) is used to improve circulation, ease muscular stiffness, and support joint mobility.</li>
                    <li>Swedana (medicated steam therapy) is typically combined with Abhyanga to help loosen stiff joints and reduce Vata aggravation.</li>
                    <li>Basti (medicated enema therapy) is considered one of the primary treatments for Vata-dominant joint disorders and is customised based on the patient's specific condition.</li>
                    <li>Janu Basti, Greeva Basti, and Kati Basti — localised oil-retention therapies for the knee, neck, and lower back respectively — are used to target specific problem areas directly.</li>
                    <li>Elakizhi (herbal leaf bundle massage) and Njavarakizhi (medicated rice bolus massage) may be included for patients with muscular stiffness or reduced joint nourishment.</li>
                    <li>Lepa (herbal paste application) may be used locally to help manage swelling and inflammation in affected joints.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Personalised Herbal Formulations
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Internal herbal medicine is prescribed based on the specific joint condition, its severity, and the patient's constitution.</li>
                    <li>Classical herbs commonly referenced in joint-care protocols include Guggulu, Shallaki (Boswellia), Rasna, and Nirgundi, chosen for their traditional association with joint and musculoskeletal support.</li>
                    <li>Formulations for Amavata-type conditions typically differ from those used for Sandhivata, since the underlying imbalance is not the same.</li>
                    <li>Dosage and duration are reviewed periodically, and patients are advised against continuing or adjusting herbal medicine without follow-up.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Diet Correction (Pathya-Apathya)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A Vata-pacifying diet is generally recommended for joint disorders, along with specific guidance to reduce Ama-forming foods for Amavata-type conditions.</li>
                    <li>Patients are guided on suitable warm, easily digestible meals and adequate hydration to support joint lubrication.</li>
                    <li>Foods that tend to aggravate joint inflammation, such as certain fried, cold, or heavily processed items, are identified and limited based on the individual case.</li>
                    <li>Diet charts are revised as symptoms and mobility improve, since nutritional needs shift through the course of treatment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Guided Movement Therapy and Yoga
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Specific joint-friendly yoga asanas and stretches are recommended, adapted to the patient's current mobility and pain levels.</li>
                    <li>Pranayama and relaxation techniques are introduced to help manage the muscular tension that often accompanies chronic pain.</li>
                    <li>Patients are guided on safe daily movement routines to prevent stiffness from prolonged inactivity, without aggravating already inflamed joints.</li>
                    <li>Exercise intensity is always adjusted in coordination with any physiotherapy or orthopaedic advice the patient is already following.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — Who Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Benefits From This Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Adults experiencing early to moderate joint degeneration who want to slow progression and manage pain naturally.</li>
                <li>Patients with chronic rheumatoid arthritis looking for complementary support alongside their rheumatologist's treatment plan.</li>
                <li>Individuals with desk-based jobs experiencing recurring neck, shoulder, or lower back stiffness.</li>
                <li>Athletes and physically active individuals managing recurring muscular or joint strain.</li>
                <li>Older adults seeking preventive joint care to maintain mobility and independence.</li>
                <li>Patients recovering from fractures or joint surgery who have been cleared by their orthopaedic surgeon for supportive Ayurvedic therapy.</li>
              </ul>
            </div>


            {/* Section 6 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada Hospital for Joint Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Treatment plans are built around each patient's specific joint condition, pain pattern, and constitution — not a single standard protocol applied to everyone.</li>
                <li>Panchakarma procedures are performed by trained therapists under the direct supervision of qualified Ayurvedic physicians.</li>
                <li>Our in-house pharmacy prepares herbal formulations and medicated oils under quality-controlled conditions.</li>
                <li>Patients are encouraged to continue any essential medication or physiotherapy advised by their orthopaedist or rheumatologist unless their doctor directs otherwise.</li>
                <li>Follow-up consultations are scheduled at intervals appropriate to the condition, so mobility and pain levels can be tracked with each visit.</li>
                <li>Clear guidance is given on realistic recovery timelines, rather than promising rapid or guaranteed results.</li>
              </ul>
            </div>


            {/* Section 7 — Facilities Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Available at Balprada Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dedicated Panchakarma therapy units equipped for Basti, Abhyanga, Swedana, and localised oil-retention procedures.</li>
                <li>Trained therapists experienced in handling patients with limited mobility or acute pain.</li>
                <li>In-house pharmacy for the preparation and quality control of herbal medicines and medicated oils.</li>
                <li>Consultation rooms where physicians review imaging and lab reports in detail before finalising a treatment plan.</li>
                <li>Diet counselling support to help translate prescribed charts into practical daily meals.</li>
                <li>Coordination support for patients travelling from other cities who need to plan multi-day therapy visits.</li>
              </ul>
            </div>


            {/* Section 8 — Treatment Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect: The Treatment Journey
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Step 1 – Consultation:</strong> Review of symptoms, affected joints, pain history, and any existing imaging or blood reports.</li>
                <li><strong>Step 2 – Assessment:</strong> Evaluation of Prakriti and current dosha imbalance to identify the likely root cause of the condition.</li>
                <li><strong>Step 3 – Plan Design:</strong> A combination of herbal medicine, Panchakarma therapy, diet chart, and movement guidance is finalised.</li>
                <li><strong>Step 4 – Supervised Therapy:</strong> Panchakarma sessions are scheduled and carried out with clear pre- and post-care instructions.</li>
                <li><strong>Step 5 – Progress Review:</strong> Follow-up consultations track changes in pain levels, mobility, and relevant lab markers.</li>
                <li><strong>Step 6 – Maintenance Plan:</strong> Once symptoms stabilise, patients receive a long-term routine to help sustain mobility and prevent recurrence.</li>
              </ul>
            </div>


            {/* Section 9 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs You Shouldn't Ignore
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Joint pain or stiffness that persists for more than a few weeks without improvement</li>
                <li>Morning stiffness lasting longer than 30 minutes, which can be a marker of inflammatory joint conditions</li>
                <li>Swelling, warmth, or redness around a joint</li>
                <li>Pain that radiates from the lower back down one leg</li>
                <li>Reduced range of motion that is starting to affect daily activities like climbing stairs or gripping objects</li>
                <li>Recurring muscle spasms or cramps affecting the same area repeatedly</li>
                <li>If any of these signs are present, patients are advised to get appropriate imaging or blood tests done and consult a qualified physician before starting any treatment plan.</li>
              </ul>
            </div>


            {/* Section 10 — Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Tips for Joint Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintain a consistent, gentle movement routine rather than alternating between long inactivity and sudden strenuous activity.</li>
                <li>Stay adequately hydrated, since joint lubrication depends partly on overall hydration levels.</li>
                <li>Maintain a healthy body weight to reduce mechanical stress on weight-bearing joints like the knees and hips.</li>
                <li>Correct posture during long sitting hours, and take short movement breaks every 45–60 minutes.</li>
                <li>Avoid self-medicating with painkillers for recurring joint pain without medical evaluation of the underlying cause.</li>
                <li>Keep your orthopaedist or rheumatologist informed about any Ayurvedic treatment you are undergoing so both approaches remain coordinated.</li>
              </ul>
            </div>


            {/* Section 11 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their bone and joint concerns can book a consultation at Balprada Hospital. The initial consultation typically involves a detailed review of symptoms, affected joints, pain history, and any existing imaging or blood reports, followed by a personalised treatment plan combining herbal medicine, Panchakarma therapies, diet correction, and guided movement therapy.
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