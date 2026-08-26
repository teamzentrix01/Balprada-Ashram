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
      q: "Where can I consult an ayurvedic doctor in Moradabad at Balprada?",
      a: "At the main branch in Bhidwari, Bilari, or the Moradabad branch in New Moradabad, Delhi Road.",
    },
    {
      q: "Is the ayurvedic doctor available every day?",
      a: "The main branch is open daily. At the Moradabad branch, vaidya ji is available on Sundays; please call ahead.",
    },
    {
      q: "Do I need an appointment for consultation?",
      a: "Calling or WhatsApping in advance is recommended, especially for the Moradabad branch.",
    },
    {
      q: "What conditions can I consult the doctor for?",
      a: "Kidney, liver, cancer support, heart, diabetes, thyroid, and women's health concerns.",
    },
    {
      q: "Is there a free consultation available?",
      a: "Yes, free OPD consultation is offered on the 15th of every month.",
    },
    {
      q: "Should I bring my medical reports to the consultation?",
      a: "Yes, carrying previous reports and prescriptions helps the doctor plan an accurate treatment.",
    },
    {
      q: "Does the doctor also guide on diet and lifestyle?",
      a: "Yes, diet and daily routine guidance are a core part of every consultation.",
    },
    {
      q: "Are follow-up consultations required?",
      a: "Yes, regular follow-up is recommended, especially for chronic conditions.",
    },
    {
      q: "Can family members join the consultation?",
      a: "Yes, family involvement is welcomed, particularly for elderly or seriously ill patients.",
    },
    {
      q: "How do I book a consultation?",
      a: "Call or WhatsApp 8126364606, or reach the Moradabad branch at 9410447000.",
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
                Ayurvedic Doctor in Moradabad — Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Choosing the right ayurvedic doctor in Moradabad is not just about finding someone who prescribes herbal medicine — it is about finding a vaidya who takes time to understand history, reports, lifestyle, and the person behind the illness</li>
                <li>At Balprada Ayurvedic Hospital &amp; Research Center, this personal, seva-driven approach has guided patient care since 1991</li>
                <li>With 35 years of experience, two branches in the Moradabad region, and an ashram-based healing environment, Balprada&apos;s vaidyas continue the tradition of disciplined, honest, and compassionate ayurvedic consultation</li>
              </ul>
            </div>

            {/* Section 2 — Why Patients Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients in Moradabad Trust Balprada&apos;s Ayurvedic Doctors
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Vaidyas at Balprada carry forward the seva sankalp started by Sw. Vaidya Vijay Pal Singh Ji in 1991</li>
                <li>Every consultation begins with a genuine review of the patient&apos;s history, current medication, and existing reports before any suggestion is made</li>
                <li>Doctors here rely on in-house, self-prepared herbal medicines rather than mass-produced or outsourced formulations</li>
                <li>Consultations happen in a calm, ashram-based setting rather than a rushed hospital corridor</li>
                <li>Vaidya ji personally visits the Moradabad branch on Sundays, giving patients direct access to experienced guidance</li>
                <li>The main branch in Bhidwari, Bilari is open daily for consultation and follow-up</li>
                <li>Follow-up is treated as part of the treatment, not an optional extra, so patients always know their next step</li>
                <li>Doctors work alongside yoga instructors, naturopathy specialists, and physiotherapists to build a complete care plan</li>
              </ul>
            </div>

            {/* Section 3 — What Makes Balprada Different */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes an Ayurvedic Doctor at Balprada Different
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Personal, Unhurried Consultation</strong> — Time is given to understand the patient&apos;s full condition, not just the immediate symptom</li>
                <li><strong>Medicine Prepared In-House</strong> — Doctors prescribe formulations made within Balprada&apos;s own setup, keeping quality consistent and traceable</li>
                <li><strong>Diet and Routine Guidance</strong> — Every prescription is paired with practical diet and daily routine (dinacharya) advice</li>
                <li><strong>Long-Term View of Healing</strong> — Chronic conditions like kidney and liver disease are approached with patience and discipline, not shortcuts</li>
                <li><strong>Seva-First Attitude</strong> — The doctor&apos;s role is treated as an extension of service to the community, not only a professional duty</li>
                <li><strong>Research-Oriented Mindset</strong> — Treatment approaches are reviewed and refined as part of Balprada&apos;s ongoing ayurvedic research work</li>
              </ul>
            </div>

            {/* Section 4 — Health Conditions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Health Conditions Our Ayurvedic Doctors Guide Patients Through
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kidney and Urinary Concerns
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Consultation and lifestyle correction for declining kidney function</li>
                    <li>Herbal and dietary guidance for patients dealing with kidney failure</li>
                    <li>Natural approach to kidney stones alongside routine correction</li>
                    <li>Support for swelling and diabetes-linked kidney complications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Liver and Digestive Health
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Ayurvedic medicine and diet planning for overall liver wellness</li>
                    <li>Focused guidance for fatty liver through herbal support and lifestyle change</li>
                    <li>Traditional protocols for jaundice recovery</li>
                    <li>Care for weak digestion and related stomach discomfort</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Cancer Supportive Consultation
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Sensitive, doctor-led supportive care alongside a patient&apos;s ongoing cancer treatment</li>
                    <li>Diet and strength-building guidance suited to the treatment stage</li>
                    <li>Emotional steadiness support for both patients and their families</li>
                    <li>Attention to energy levels and recovery pace throughout the journey</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Heart, Diabetes, and Thyroid Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Doctor-guided lifestyle correction for blood pressure management</li>
                    <li>Diabetes care built around herbal medicine and dietary discipline</li>
                    <li>Thyroid guidance for both hypothyroidism and hyperthyroidism</li>
                    <li>Weight and metabolic balance support for long-term lifestyle conditions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Women&apos;s Health Consultation
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Private, sensitive consultations for women&apos;s health concerns</li>
                    <li>Doctor-guided support for hormonal balance</li>
                    <li>Menstrual health guidance rooted in ayurvedic principles</li>
                    <li>Care for general weakness and low energy in women patients</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Section 5 — How Consultation Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How a Consultation With Our Ayurvedic Doctor Works
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Step 1: Detailed Review</strong> — The doctor goes through the patient&apos;s concern, history, reports, and current medicines</li>
                <li><strong>Step 2: Personalized Plan</strong> — A care plan is built using Balprada&apos;s own medicines, diet correction, and lifestyle guidance</li>
                <li><strong>Step 3: Supportive Therapies</strong> — Yoga, naturopathy, panchakarma, or physiotherapy are added to the plan where appropriate</li>
                <li><strong>Step 4: Ongoing Follow-Up</strong> — Regular review appointments let the doctor track progress and adjust the treatment as needed</li>
                <li>Patients travelling from outside Moradabad can plan their visit around the free OPD offered on the 15th of every month</li>
              </ul>
            </div>

            {/* Section 6 — Legacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Legacy Behind Balprada&apos;s Ayurvedic Doctors
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji with the object of serving humanity and contributing to a better nation</li>
                <li>The founder&apos;s philosophy continues to guide how doctors approach patients today — with patience, honesty, and a service-first attitude</li>
                <li>Over 35 years, the institution has grown from a single vaidya&apos;s seva into a full ayurvedic chikitsalaya with research, herbal wellness, and pathology support</li>
                <li>The founder often reminded patients that staying positive gives courage to face even the most difficult health circumstances — a philosophy doctors still carry into every consultation</li>
                <li>Today&apos;s doctors are entrusted with continuing this legacy while also expanding it through research and wider community service (jansewa)</li>
              </ul>
            </div>

            {/* Section 7 — Diet and Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Ayurvedic Doctors Emphasize Diet and Routine
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda treats diet (ahara) and daily routine (dinacharya) as equally important as medicine, and Balprada&apos;s doctors follow this closely</li>
                <li>For kidney and liver patients, food choices directly affect how well the body responds to herbal treatment</li>
                <li>Doctors often recommend organic food, which is why Balprada maintains its own organic food guidance alongside consultation</li>
                <li>A fixed daily routine — sleep, meals, and activity — is seen as essential for supporting the body&apos;s natural healing capacity</li>
                <li>Patients who follow both medicine and lifestyle guidance consistently are more likely to see steady, long-term improvement</li>
                <li>This is one reason why the doctor&apos;s role at Balprada extends beyond prescription into ongoing lifestyle coaching</li>
              </ul>
            </div>

            {/* Section 8 — Doctor-Patient Relationship */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Doctor-Patient Relationship at an Ashram-Based Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Consultations at Balprada happen within an ashram environment, which many patients say reduces the stress often associated with hospital visits</li>
                <li>Doctors are described by patients as approachable, patient, and willing to explain the reasoning behind every suggestion</li>
                <li>The relationship does not end after one prescription — regular follow-up keeps the doctor updated on how the treatment is working</li>
                <li>Family members are welcomed into consultations, especially for elderly patients or those managing serious illness</li>
                <li>The seva-based culture means doctors are as focused on guidance and reassurance as they are on medicine</li>
              </ul>
            </div>

            {/* Section 9 — Supporting Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting Facilities Alongside Doctor Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Panchakarma</strong> — planned by the doctor according to individual assessment for cleansing and recovery</li>
                <li><strong>Yoga</strong> — recommended alongside medicine to build strength, discipline, and calm</li>
                <li><strong>Naturopathy</strong> — used to support the body&apos;s own healing capacity through simple, nature-led practices</li>
                <li><strong>Meditation</strong> — guided sessions recommended for emotional steadiness during long treatment journeys</li>
                <li><strong>Physiotherapy</strong> — professional support for safe movement and recovery where needed</li>
                <li><strong>Balprada Pathology Lab</strong> — enables the doctor to review blood, urine, and diagnostic reports on-site before finalizing a plan</li>
              </ul>
            </div>

            {/* Section 10 — Tips Before Visiting */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips Before Visiting an Ayurvedic Doctor in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Carry all previous medical reports, prescriptions, and test results to your first consultation</li>
                <li>Be honest and detailed about symptoms, duration, and any medicines currently being taken</li>
                <li>Mention any ongoing allopathic treatment so the doctor can plan ayurvedic support accordingly</li>
                <li>Ask about diet changes clearly, since food discipline plays a major role in ayurvedic recovery</li>
                <li>Plan for regular follow-up visits rather than expecting a one-time consultation to resolve chronic conditions</li>
                <li>If travelling from outside Moradabad, check OPD timings and call ahead, especially for the Sunday vaidya availability at the Moradabad branch</li>
              </ul>
            </div>

            {/* Section 11 — Common Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Signs It&apos;s Time to See an Ayurvedic Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent fatigue or weakness that does not improve with rest</li>
                <li>Digestive discomfort, bloating, or irregular appetite lasting more than a few weeks</li>
                <li>Swelling in the legs or face, which can sometimes point to kidney-related concerns</li>
                <li>Unexplained weight changes, low energy, or hair thinning, which may relate to thyroid imbalance</li>
                <li>Ongoing stress, poor sleep, or lifestyle-related blood pressure and sugar concerns</li>
                <li>Any diagnosis of a chronic condition where the patient wants a supportive, natural approach alongside existing treatment</li>
                <li>A family history of kidney, liver, or metabolic disease, where early guidance can help with prevention</li>
              </ul>
            </div>

            {/* Section 12 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect on Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Plan to spend enough time for a detailed conversation — first consultations are rarely rushed at Balprada</li>
                <li>The doctor will ask about your main concern, when it started, and how it has progressed</li>
                <li>Existing reports and prescriptions will be reviewed carefully before any new medicine is suggested</li>
                <li>You may be guided toward the pathology lab on-site if further testing is needed before finalizing a plan</li>
                <li>Diet, daily routine, and any supportive therapies like yoga or panchakarma will be discussed as part of the same visit</li>
                <li>A follow-up schedule will usually be set before you leave, so the next steps are clear from day one</li>
              </ul>
            </div>

            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <ul className="text-black space-y-2 list-disc pl-5 mb-6">
                <li>Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad</li>
                <li>The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan</li>
                <li>For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day Panchakarma therapy schedules</li>
              </ul>

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