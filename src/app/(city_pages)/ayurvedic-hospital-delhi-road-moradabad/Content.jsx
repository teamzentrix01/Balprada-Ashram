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
      q: "Where exactly is Balprada's Delhi Road branch located?",
      a: "It is located at F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.",
    },
    {
      q: "Is Vaidya ji available every day at this branch?",
      a: "No, Vaidya ji is available at this branch specifically on Sundays. Calling ahead is recommended.",
    },
    {
      q: "What are the regular OPD timings?",
      a: "Regular consultation hours are 10:00 AM to 2:00 PM, with a free OPD offered on the 15th of every month.",
    },
    {
      q: "What health conditions are treated here?",
      a: "Kidney, liver, cancer support, heart, diabetes, thyroid, and women's wellness concerns are all treated at this branch.",
    },
    {
      q: "Can I book my appointment on WhatsApp?",
      a: "Yes, appointments can be arranged through the WhatsApp Appointment option for convenience.",
    },
    {
      q: "Are the medicines given here prepared by Balprada itself?",
      a: "Yes, Balprada prepares its herbal medicines in-house under supervision for consistent quality.",
    },
    {
      q: "Should I bring my medical reports to the first visit?",
      a: "Yes, bringing existing reports and current medicines helps the doctor plan your treatment more effectively.",
    },
    {
      q: "Can I choose between the Main Branch and the Delhi Road branch?",
      a: "Yes, patients can choose either branch depending on convenience and the doctor's availability on a given day.",
    },
    {
      q: "Does this branch offer supportive therapies like yoga or panchakarma?",
      a: "Yes, supportive therapies are available and recommended based on individual suitability.",
    },
    {
      q: "How long has Balprada been providing Ayurvedic care?",
      a: "Balprada has 35 years of experience in Ayurvedic treatment, research, and community-based healing.",
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
                Ayurvedic Hospital on Delhi Road, Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Delhi Road is one of the busiest and most accessible stretches in Moradabad, connecting New Moradabad and surrounding sectors to the rest of the city.</li>
                <li>For residents and commuters along this route, having a dependable Ayurvedic hospital nearby makes a real difference.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center operates a branch on Delhi Road in Sector-13, New Moradabad, bringing 35 years of Ayurvedic experience, in-house herbal medicines, and disciplined care to patients in this part of the city.</li>
              </ul>
            </div>


            {/* Section 2 — Balprada's Presence */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Presence on Delhi Road
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The Balprada branch is located at F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.</li>
                <li>This branch is easily reachable for residents living in and around New Moradabad&apos;s sector-based colonies.</li>
                <li>Being on a major connecting road makes the branch convenient for patients traveling from other parts of Moradabad as well.</li>
                <li>The location supports both walk-in consultation on available days and pre-scheduled appointments.</li>
                <li>Vaidya ji is available at this branch on Sundays; patients are advised to call or WhatsApp before visiting to confirm the schedule.</li>
                <li>Contact for this branch: 9410447000, or email <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a> for queries and appointment requests.</li>
                <li>The branch is designed to serve as a full consultation point, not just a satellite office, so patients can expect complete assessment and treatment planning here.</li>
                <li>Its position on Delhi Road also makes it a convenient stop for patients traveling between Moradabad city and outlying areas.</li>
              </ul>
            </div>


            {/* Section 3 — About Balprada */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                About Balprada Ayurvedic Hospital &amp; Research Center
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Founded on the seva sankalp (spirit of service) of Sw. Vaidya Vijay Pal Singh Ji, with 35 years of experience in Ayurvedic care.</li>
                <li>Combines traditional Ayurvedic knowledge with in-house herbal medicines prepared under close supervision.</li>
                <li>Operates with a research-oriented and service-first approach rather than a purely transactional model of treatment.</li>
                <li>Maintains an ashram-based main branch that reflects the organization&apos;s long-term philosophy of disciplined healing.</li>
                <li>Serves patients across a wide range of concerns, from kidney and liver conditions to diabetes, thyroid, heart health, cancer support, and women&apos;s wellness.</li>
                <li>Places equal importance on medicine, diet, routine, and emotional steadiness during the treatment journey.</li>
                <li>Draws on Ayurveda&apos;s traditional understanding of the three doshas — Vata, Pitta, and Kapha — to guide individualized care rather than generic prescriptions.</li>
                <li>Approaches treatment as a gradual, routine-based process, encouraging patients to commit to consistency rather than expecting instant results.</li>
                <li>Continues to refine its methods based on ongoing patient observation, reflecting its identity as a research center alongside a hospital.</li>
              </ul>
            </div>


            {/* Section 4 — Why Delhi Road Location Matters */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why the Delhi Road Location Matters for Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Saves travel time for patients living in New Moradabad, Sector-13, and nearby residential areas.</li>
                <li>Makes regular follow-up visits more practical, which is important since Ayurvedic treatment often depends on consistency.</li>
                <li>Offers a familiar, easily identifiable location for patients giving directions to family members accompanying them.</li>
                <li>Reduces the burden on elderly patients or those with mobility limitations who would otherwise need to travel further for care.</li>
                <li>Allows patients to combine a hospital visit with other errands along Delhi Road, saving overall time.</li>
                <li>Provides a reliable option for patients who prefer sticking to one trusted hospital rather than switching between providers.</li>
                <li>Supports better communication between appointments, since patients closer to the branch can more easily call or visit for clarification.</li>
                <li>Helps working patients schedule visits around office hours without needing to take an entire day off for travel.</li>
              </ul>
            </div>


            {/* Section 5 — Health Concerns Treated */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Health Concerns Treated at the Delhi Road Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Kidney and Urinary Care:</strong> Support for kidney function, swelling, stones, and diabetes-linked kidney concerns.</li>
                <li><strong>Liver and Digestive Care:</strong> Care for fatty liver, jaundice, weak digestion, and related metabolic imbalance.</li>
                <li><strong>Cancer Supportive Care:</strong> Sensitive support focused on strength, diet, energy, and emotional balance during serious illness.</li>
                <li><strong>Heart and Lifestyle Care:</strong> Guidance for blood pressure, weight, and stress-related concerns affecting heart health.</li>
                <li><strong>Diabetes and Thyroid Care:</strong> Support for blood sugar control, hypothyroidism, hyperthyroidism, and metabolic balance.</li>
                <li><strong>Women&apos;s Wellness:</strong> Private, personalized care for hormonal balance, menstrual health, and general weakness.</li>
                <li>Patients with more than one concern, such as diabetes affecting the kidneys, receive care that considers the connected picture rather than isolated symptoms.</li>
              </ul>
            </div>


            {/* Section 6 — How Consultation Works */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                How Consultation Works at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The doctor begins by reviewing the patient&apos;s history, current reports, and any medicines already being taken.</li>
                <li>Based on this review, a personalized Ayurvedic plan is suggested, which may include herbal medicines, diet correction, and routine changes.</li>
                <li>Supportive therapies such as yoga, naturopathy, or panchakarma may be recommended depending on the patient&apos;s specific condition.</li>
                <li>Pathology testing is available in-house to help track relevant health markers as treatment progresses.</li>
                <li>Follow-up visits are scheduled to review progress, make adjustments, and reinforce the discipline needed for long-term results.</li>
                <li>Patients are encouraged to ask questions about their treatment plan so they clearly understand what is expected of them.</li>
                <li>Consultation notes and reports are maintained so that a patient&apos;s care history stays consistent across visits, even months apart.</li>
                <li>Where suitable, the doctor may also involve family members in the discussion, especially when routine and diet changes need home support.</li>
              </ul>
            </div>


            {/* Section 7 — Facilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Facilities Supporting Treatment at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Panchakarma:</strong> Traditional cleansing therapies suited to the patient&apos;s individual health assessment.</li>
                <li><strong>Yoga:</strong> Structured sessions supporting balance across body, breath, and mind for gradual strength and calm.</li>
                <li><strong>Naturopathy:</strong> Nature-based healing practices that work alongside the body&apos;s own recovery process.</li>
                <li><strong>Meditation:</strong> Guided sessions to support emotional steadiness and better rest during treatment.</li>
                <li><strong>Physiotherapy:</strong> Support for safe movement and mobility as part of a broader recovery plan.</li>
                <li><strong>Pathology Lab:</strong> In-house testing for blood, urine, and other diagnostics relevant to ongoing monitoring.</li>
                <li><strong>Organic Food:</strong> Diet support using naturally grown food, aligned with the hospital&apos;s overall care philosophy.</li>
                <li>These facilities are offered selectively, based on what genuinely benefits the patient&apos;s specific condition rather than as a standard package for everyone.</li>
              </ul>
            </div>


            {/* Section 8 — What Sets Balprada Apart */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                What Sets Balprada Apart from Other Options on Delhi Road
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of consistent Ayurvedic practice, rather than a newly opened clinic without an established track record.</li>
                <li>In-house preparation of herbal medicines, which supports better consistency in quality across visits.</li>
                <li>A genuine emphasis on follow-up care, not just a one-time consultation and prescription.</li>
                <li>A calm, structured environment that many patients find reassuring during a stressful health period.</li>
                <li>Transparent OPD timings, branch-specific doctor availability, and a free monthly consultation opportunity.</li>
                <li>A holistic care model that brings together medicine, diet, yoga, and panchakarma under one roof.</li>
              </ul>
            </div>


            {/* Section 9 — Diet and Daily Routine */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Diet and Daily Routine Guidance
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients receive specific guidance on food timing and suitable meals based on their health concern.</li>
                <li>Reducing processed foods, excess oil, and irregular eating patterns is commonly emphasized.</li>
                <li>Daily routine correction (Dinacharya) is treated as a core part of the treatment, not an optional suggestion.</li>
                <li>Gradual, sustainable changes are generally recommended over sudden, difficult-to-maintain restrictions.</li>
                <li>Family members are often encouraged to support the patient&apos;s diet and routine changes at home.</li>
                <li>Seasonal dietary adjustments may be suggested in line with traditional Ayurvedic principles.</li>
                <li>Patients are guided toward changes they can realistically sustain, rather than being asked to overhaul their entire routine at once.</li>
              </ul>
            </div>


            {/* Section 10 — Patient Trust */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Patient Trust and Community Reputation
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada&apos;s 35-year presence in the Moradabad region has built familiarity across generations of patients.</li>
                <li>Many patients are introduced to the hospital through family referrals, reflecting sustained trust over time.</li>
                <li>The ashram-based philosophy behind Balprada&apos;s approach is often cited by patients as a reason they feel comfortable returning for long-term care.</li>
                <li>Consistent doctor availability and transparent communication about timings help maintain this trust at the Delhi Road branch as well.</li>
                <li>Patients often value being treated as individuals with a specific history, rather than being processed through a generic treatment routine.</li>
              </ul>
            </div>


            {/* Section 11 — OPD Timings */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                OPD Timings and Free Consultation Details
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada Ashram and Clinic remains open through the week for consultation and follow-up support.</li>
                <li>Free OPD consultation is offered on the 15th of every month.</li>
                <li>Standard consultation hours run from 10:00 AM to 2:00 PM.</li>
                <li>Vaidya ji&apos;s availability at the Delhi Road (Moradabad) branch is specifically on Sundays, so calling ahead is recommended.</li>
                <li>Patients preferring the Main Branch can visit daily, as it follows a different, more frequent schedule.</li>
              </ul>
            </div>


            {/* Section 12 — Main Branch Reference */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Main Branch for Reference
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Main Branch:</strong> Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.</li>
                <li>Open daily from 10:00 AM to 2:00 PM.</li>
                <li>Contact number: 8126364606.</li>
                <li>This branch also houses the ashram setting central to Balprada&apos;s long-term care philosophy.</li>
                <li>Patients from Delhi Road can choose either branch depending on convenience and the specific doctor&apos;s availability on a given day.</li>
              </ul>
            </div>


            {/* Section 13 — Things to Check */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Things to Check Before Choosing an Ayurvedic Hospital Nearby
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Confirm whether the hospital offers a proper consultation and history review rather than direct medicine dispensing alone.</li>
                <li>Check if medicines are prepared in-house, which generally supports better quality control.</li>
                <li>Ask about the structure of follow-up care, since Ayurvedic treatment usually needs monitoring over time.</li>
                <li>Look for a hospital that is transparent about OPD timings and doctor availability, as Balprada is about its Sunday Vaidya ji schedule.</li>
                <li>Consider whether supportive therapies like yoga, panchakarma, or naturopathy are available alongside medicine.</li>
                <li>Prefer a hospital with an established track record over one that is newly set up without a clear history.</li>
              </ul>
            </div>


            {/* Section 14 — How to Book */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                How to Book an Appointment at the Delhi Road Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Call 9410447000 to schedule a consultation at the Delhi Road, Sector-13 branch in New Moradabad.</li>
                <li>Use the WhatsApp Appointment option for a faster, message-based booking process.</li>
                <li>Email <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a> with your preferred date and a brief description of your concern.</li>
                <li>Visit during the free OPD on the 15th of the month if you would like an initial consultation without a booking fee.</li>
                <li>Bring any existing medical reports and a list of current medicines so the doctor can plan your care accurately.</li>
                <li>Confirm Vaidya ji&apos;s Sunday availability in advance by phone or WhatsApp before planning your visit.</li>
              </ul>
            </div>


            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center&apos;s Delhi Road branch in New Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients requiring extended ashram-based care, the hospital coordinates with the main branch in Village Bhidwari.
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


                {/* Delhi Road Branch */}
                <div className="flex items-start gap-3 mt-4">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Delhi Road Branch</p>
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