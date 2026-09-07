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
      q: "Where is Balprada's branch located in New Moradabad?",
      a: "The New Moradabad branch is located at F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.",
    },
    {
      q: "What are the OPD timings at Balprada?",
      a: "Regular OPD timing is 10:00 AM to 2:00 PM, with free consultation offered on the 15th of every month.",
    },
    {
      q: "Is Vaidya ji available every day at the New Moradabad branch?",
      a: "Vaidya ji is available at this branch on Sundays. It is best to call or WhatsApp before visiting.",
    },
    {
      q: "What health conditions does Balprada treat?",
      a: "Balprada offers Ayurvedic care for kidney, liver, cancer support, heart, diabetes, thyroid, and women's wellness concerns.",
    },
    {
      q: "Can I book an appointment through WhatsApp?",
      a: "Yes, appointments can be booked through the WhatsApp Appointment option for convenience.",
    },
    {
      q: "Does Balprada offer any supportive therapies besides medicine?",
      a: "Yes, facilities include panchakarma, yoga, naturopathy, meditation, and physiotherapy alongside medical consultation.",
    },
    {
      q: "Do I need to bring my medical reports to the consultation?",
      a: "Yes, carrying existing reports and current medicines helps the doctor plan your care more accurately.",
    },
    {
      q: "How experienced is Balprada Ayurvedic Hospital?",
      a: "Balprada has 35 years of experience in Ayurvedic care, research, and community-based healing.",
    },
    {
      q: "Are the medicines prepared by Balprada itself?",
      a: "Yes, Balprada prepares its herbal medicines in-house under supervision to help maintain consistent quality.",
    },
    {
      q: "Can new patients get a consultation on the first visit?",
      a: "Yes, new patients can be seen during regular OPD hours or the free monthly OPD, subject to doctor availability.",
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
                Ayurvedic Hospital in New Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Finding a trusted Ayurvedic hospital in New Moradabad matters when you are looking for genuine, experience-based care rather than quick fixes.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center has been serving patients for 35 years with in-house herbal medicines, experienced doctors, and a disciplined, ashram-rooted approach to healing.</li>
                <li>With a dedicated branch in New Moradabad, patients from the area can access consultation, treatment, and follow-up care without traveling far from home.</li>
              </ul>
            </div>


            {/* Section 2 — About Balprada */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                About Balprada Ayurvedic Hospital &amp; Research Center
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Built on the seva sankalp (spirit of service) of Sw. Vaidya Vijay Pal Singh Ji, carrying forward 35 years of Ayurvedic tradition.</li>
                <li>Combines classical Ayurvedic wisdom with in-house herbal medicines prepared under supervision.</li>
                <li>Operates with a service-first philosophy rather than a purely commercial approach to treatment.</li>
                <li>Maintains a peaceful ashram environment intended to support long-term healing and discipline.</li>
                <li>Offers structured care across multiple health concerns, from kidney and liver conditions to diabetes, thyroid, heart health, and women&apos;s wellness.</li>
                <li>Known locally for combining medical consultation with yoga, naturopathy, and panchakarma for a fuller healing journey.</li>
                <li>Runs two branches serving the wider Moradabad region, including a dedicated presence in New Moradabad for local patients.</li>
                <li>Continues to be guided by a research-oriented outlook, reviewing patient progress and refining care based on real outcomes.</li>
                <li>Welcomes patients across a wide age range, from younger adults managing lifestyle conditions to elderly patients needing long-term support.</li>
              </ul>
            </div>


            {/* Section 3 — Understanding Ayurveda */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Understanding Ayurveda as a System of Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda is a traditional Indian system of medicine that looks at health as a balance between body, mind, and daily routine.</li>
                <li>It works with the concept of three doshas — Vata, Pitta, and Kapha — believed to govern different bodily functions.</li>
                <li>Treatment typically combines herbal medicines, diet correction, and lifestyle changes rather than relying on a single method alone.</li>
                <li>Ayurvedic care is generally considered a gradual, routine-based approach rather than an instant-result system.</li>
                <li>At Balprada, this traditional framework is applied through structured consultation, monitored medicines, and consistent follow-up.</li>
                <li>Patients are encouraged to see Ayurvedic treatment as a partnership between the doctor&apos;s guidance and the patient&apos;s daily discipline.</li>
              </ul>
            </div>


            {/* Section 4 — Why Choose New Moradabad */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why Choose an Ayurvedic Hospital in New Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients avoid long travel to access experienced Ayurvedic consultation and treatment closer to home.</li>
                <li>New Moradabad residents get access to the same quality of herbal medicines used across Balprada&apos;s branches.</li>
                <li>A local branch allows for easier follow-up visits, which are important for chronic and long-term conditions.</li>
                <li>Local availability supports quicker initial consultation for time-sensitive health concerns.</li>
                <li>Reduces dependency on last-minute travel for families managing elderly patients or those with mobility challenges.</li>
                <li>Builds a sense of continuity and trust for patients returning for regular monitoring and care adjustments.</li>
                <li>Offers a familiar, community-based setting where patients can feel comfortable discussing sensitive health concerns.</li>
                <li>Supports working professionals and homemakers alike who need consultation timings that fit around daily responsibilities.</li>
                <li>Makes it easier for patients on long-term Ayurvedic plans to stay consistent, since consistency is central to how Ayurveda works.</li>
                <li>Provides a local point of contact for queries, prescription refills, and guidance between full consultations.</li>
              </ul>
            </div>


            {/* Section 5 — Health Concerns Treated */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Health Concerns Treated at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Kidney and Urinary Care:</strong> Ayurvedic consultation and lifestyle care for kidney function, swelling, stones, and diabetes-linked kidney concerns.</li>
                <li><strong>Liver and Digestive Care:</strong> Medicine, diet, and routine-based care for liver health, fatty liver, jaundice, and weak digestion.</li>
                <li><strong>Cancer Supportive Care:</strong> Sensitive Ayurvedic supportive care focused on strength, diet, energy, and emotional balance during serious illness.</li>
                <li><strong>Heart and Lifestyle Care:</strong> Integrated care for blood pressure, diabetes, weight, and stress-related concerns affecting heart health.</li>
                <li><strong>Diabetes and Thyroid Care:</strong> Personalized support for blood sugar, thyroid function, energy, weight, and metabolic balance.</li>
                <li><strong>Women&apos;s Wellness:</strong> Private and personalized Ayurvedic care for hormonal balance, menstrual health, and general weakness.</li>
                <li>Each concern is addressed with its own dedicated approach rather than a one-size-fits-all treatment plan.</li>
                <li>Conditions linked to lifestyle, such as obesity and stress-related issues, are managed alongside diet and routine correction.</li>
                <li>Patients with overlapping concerns, such as diabetes affecting kidney or heart health, receive care that considers the full picture.</li>
              </ul>
            </div>


            {/* Section 6 — Care Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                The Balprada Care Process
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Step 1 – Consultation:</strong> The doctor reviews the patient&apos;s concern, medical history, existing reports, and current medication before recommending the next step.</li>
                <li><strong>Step 2 – Ayurvedic Plan:</strong> A personalized plan is created using Balprada&apos;s in-house herbal medicines, diet discipline, and suitable lifestyle correction.</li>
                <li><strong>Step 3 – Supportive Facilities:</strong> Yoga, naturopathy, panchakarma, and pathology support are added where they can help complete the treatment journey.</li>
                <li><strong>Step 4 – Follow-Up:</strong> Regular follow-up visits allow the team to track progress, adjust the plan, and support the patient&apos;s long-term discipline and recovery.</li>
                <li>Every step is documented so that the care plan remains consistent even if a patient is seen by different team members over time.</li>
                <li>The process is designed to be transparent, with patients encouraged to ask questions about their medicines and expected timelines.</li>
              </ul>
            </div>


            {/* Section 7 — Facilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Facilities Available at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Panchakarma:</strong> Traditional cleansing therapies planned according to individual health assessment.</li>
                <li><strong>Yoga:</strong> Guided sessions that support balance between body, mind, and breath, building strength and calm over time.</li>
                <li><strong>Naturopathy:</strong> Nature-based healing practices that work with the body&apos;s own recovery capacity.</li>
                <li><strong>Meditation:</strong> Guided meditation and breath awareness for emotional steadiness and restorative rest.</li>
                <li><strong>Physiotherapy:</strong> Professional support for safe movement, mobility, and strength during recovery.</li>
                <li><strong>Pathology Lab:</strong> In-house testing for blood, urine, and other diagnostics needed to support ongoing care decisions.</li>
                <li><strong>Organic Food:</strong> Diet planning supported with naturally grown food as part of the overall treatment approach.</li>
                <li>Facilities are recommended selectively based on what suits the patient&apos;s condition, rather than applied uniformly to everyone.</li>
                <li>The combination of clinical consultation with supportive therapies is intended to address both the physical and emotional aspects of illness.</li>
              </ul>
            </div>


            {/* Section 8 — What Makes Balprada Different */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                What Makes Balprada Different
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of continuous experience in Ayurvedic care and research, not a recently opened setup.</li>
                <li>In-house preparation of herbal medicines, allowing better consistency and quality control.</li>
                <li>A genuine ashram environment that many patients find calming during a difficult health phase.</li>
                <li>A structured care process that goes beyond a single consultation, with real emphasis on follow-up.</li>
                <li>A holistic combination of medicine, diet, yoga, and panchakarma rather than treatment in isolation.</li>
                <li>Transparent OPD timings and a free consultation opportunity offered monthly to make care more accessible.</li>
              </ul>
            </div>


            {/* Section 9 — Patient Experience */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Patient Experience at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Many patients highlight the calm, attentive nature of consultations where doctors take time to explain the treatment plan.</li>
                <li>Families often mention that the ashram environment made them feel supported, not just the individual patient.</li>
                <li>Follow-up guidance on diet, daily habits, and medicines is commonly described as clear and easy to apply at home.</li>
                <li>Patients appreciate the availability of the team for questions even after the main consultation is complete.</li>
                <li>The combination of practical guidance with a service-oriented attitude is frequently mentioned as a reason for continued trust.</li>
              </ul>
            </div>


            {/* Section 10 — OPD Timings */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                OPD Timings and Free Consultation
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada Ashram and Clinic remains open throughout the week for consultation and follow-up care.</li>
                <li>Free OPD consultation is available on the 15th of every month.</li>
                <li>Regular consultation timing is 10:00 AM to 2:00 PM.</li>
                <li>At the Moradabad branch, Vaidya ji is available on Sundays; patients are advised to call or WhatsApp before visiting to confirm availability.</li>
              </ul>
            </div>


            {/* Section 11 — Branch Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Balprada Branch Details for New Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Moradabad Branch (New Moradabad):</strong> F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.</li>
                <li>Vaidya ji availability is on Sundays at this branch; calling or messaging on WhatsApp beforehand is recommended.</li>
                <li>Contact number for this branch: 9410447000.</li>
                <li>Email for appointments and queries: <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a>.</li>
                <li>Appointments can also be arranged through WhatsApp for added convenience.</li>
              </ul>
            </div>


            {/* Section 12 — Main Branch Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Main Branch Details
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Main Branch:</strong> Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.</li>
                <li>Open daily from 10:00 AM to 2:00 PM.</li>
                <li>Contact number: 8126364606.</li>
                <li>Email: <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a>.</li>
                <li>This branch also hosts the ashram setting that supports the hospital&apos;s long-term care philosophy.</li>
              </ul>
            </div>


            {/* Section 13 — Diet and Lifestyle Support */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Support Offered
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Guidance on food timing and suitable meals based on the patient&apos;s specific health concern.</li>
                <li>Recommendations for reducing processed food, excess oil, and unhealthy eating patterns.</li>
                <li>Encouragement of daily routines (Dinacharya) that support digestion, energy, and overall balance.</li>
                <li>Practical suggestions for incorporating yoga or light physical activity into daily life.</li>
                <li>Emphasis on consistency, since Ayurvedic care generally works best with sustained routine discipline.</li>
                <li>Family involvement is often encouraged so that dietary and lifestyle changes are supported at home.</li>
                <li>Seasonal adjustments to diet are sometimes suggested, in line with Ayurvedic principles of eating according to the season.</li>
                <li>Patients are guided on which foods to reduce gradually rather than being asked to make abrupt, difficult changes overnight.</li>
              </ul>
            </div>


            {/* Section 14 — Things to Consider */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Things to Consider Before Choosing an Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Check whether the hospital has genuine long-term experience rather than a newly set-up practice.</li>
                <li>Look for a hospital that offers proper consultation and history review, not just direct medicine dispensing.</li>
                <li>Confirm whether the hospital prepares its own medicines in-house, which can support better quality control.</li>
                <li>Ask about follow-up support, since Ayurvedic treatment usually requires monitoring over weeks or months.</li>
                <li>Consider the availability of supportive facilities such as diet guidance, yoga, or panchakarma alongside medicines.</li>
                <li>Prefer a hospital that is transparent about timings, doctor availability, and consultation processes, as Balprada is with its OPD schedule and Vaidya ji&apos;s availability days.</li>
              </ul>
            </div>


            {/* Section 15 — How to Book */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                How to Book an Appointment at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Call the Main Branch at 8126364606 or the Moradabad Branch at 9410447000 to schedule a visit.</li>
                <li>Use the WhatsApp Appointment option for a quicker, message-based booking process.</li>
                <li>Email <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a> with your query or preferred consultation date.</li>
                <li>Visit during the free OPD on the 15th of the month if you would like an initial consultation without a booking fee.</li>
                <li>Carry any existing medical reports and a list of current medicines to make the consultation more effective.</li>
              </ul>
            </div>


            {/* Section 16 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center&apos;s New Moradabad branch. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients requiring extended ashram-based care, the hospital coordinates with the main branch in Village Bhidwari.
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


                {/* New Moradabad Branch */}
                <div className="flex items-start gap-3 mt-4">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">New Moradabad Branch</p>
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


            {/* Section 17 — FAQs */}
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