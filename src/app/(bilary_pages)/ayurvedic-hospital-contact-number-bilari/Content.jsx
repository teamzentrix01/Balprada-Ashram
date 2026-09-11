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
      q: "How can I get the contact number of Balprada Ayurvedic Hospital?",
      a: "The verified contact number is available on the hospital's official website and Google listing.",
    },
    {
      q: "Can I book an appointment directly through a phone call?",
      a: "Yes, patients can call the hospital to book both new and follow-up appointments.",
    },
    {
      q: "Is the hospital accessible from Bilari?",
      a: "Yes, it is located within convenient traveling distance from Bilari.",
    },
    {
      q: "What details should I keep ready before calling?",
      a: "Your name, health concern, and preferred appointment time are usually enough to begin.",
    },
    {
      q: "Can I contact the hospital through WhatsApp or email?",
      a: "Yes, alternative contact methods like WhatsApp and email may be available alongside phone calls.",
    },
    {
      q: "What is the best time to call for a quick response?",
      a: "Morning hours generally offer the fastest response from the hospital's administrative desk.",
    },
    {
      q: "Can I ask about a specific doctor before visiting?",
      a: "Yes, the reception team can confirm doctor availability during your call.",
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
                Ayurvedic Hospital Contact Number Bilari – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Finding the right contact details for a trusted ayurvedic hospital in Bilari can save patients and their families valuable time, especially during health concerns related to kidney, liver, diabetes, or other chronic conditions.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center, located near Bilari in the Moradabad district, makes it simple for patients to reach out through multiple contact channels for appointments, queries, and emergency guidance.</li>
              </ul>
            </div>


            {/* Section 2 — Why Contact Information Matters for Ayurvedic Treatment Seekers */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Contact Information Matters for Ayurvedic Treatment Seekers
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients searching for ayurvedic care in Bilari often need quick access to a hospital's contact number for appointment scheduling.</li>
                <li>Many families prefer calling directly to ask about doctor availability before visiting in person.</li>
                <li>A verified contact number prevents patients from relying on outdated or incorrect listings found on unofficial directories.</li>
                <li>Having the correct number ready helps in emergencies where quick communication with the hospital staff is necessary.</li>
                <li>Contact accessibility reflects a hospital's transparency and commitment to patient service.</li>
              </ul>
            </div>


            {/* Section 3 — How to Reach Balprada Ayurvedic Hospital from Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Reach Balprada Ayurvedic Hospital from Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada Ayurvedic Hospital &amp; Research Center is easily accessible from Bilari through the Moradabad-Bilari route.</li>
                <li>Patients traveling from Bilari can reach the hospital within a short driving distance, making same-day consultations convenient.</li>
                <li>The hospital's official contact number is listed on its website and verified business listings for easy reference.</li>
                <li>Patients are encouraged to call ahead before visiting to confirm doctor availability and avoid unnecessary waiting time.</li>
                <li>Local auto and taxi services in Bilari are familiar with directions to the hospital, making the commute simple for first-time visitors.</li>
              </ul>
            </div>


            {/* Section 4 — Appointment Booking Process Through Contact Number */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Appointment Booking Process Through Contact Number
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients can call the hospital's contact number directly to book a new appointment.</li>
                <li>The reception team assists in selecting the right department based on the patient's health concern.</li>
                <li>For returning patients, follow-up appointments can be scheduled quickly by mentioning previous visit details.</li>
                <li>Phone-based booking helps patients from Bilari avoid long queues at the hospital reception.</li>
                <li>Patients with urgent conditions such as kidney or liver complications are guided on priority consultation slots.</li>
                <li>Appointment confirmations are often communicated back to the patient through a callback or message.</li>
              </ul>
            </div>


            {/* Section 5 — Best Time to Call for Quick Response */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Best Time to Call for Quick Response
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Morning hours are generally the most effective time to call, as the hospital's administrative desk is fully staffed.</li>
                <li>Early afternoon calls may experience slightly longer waiting times due to ongoing consultations.</li>
                <li>Evening slots are useful for patients confirming next-day appointments.</li>
                <li>Patients with non-urgent queries are advised to avoid calling during peak OPD hours for a faster response.</li>
                <li>Emergency-related calls are prioritized regardless of the time of day.</li>
              </ul>
            </div>


            {/* Section 6 — Departments Patients Can Reach Through the Contact Number */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Departments Patients Can Reach Through the Contact Number
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>General Ayurvedic Consultation for new patients unsure of which specialist to see.</li>
                <li>Kidney Care Department for patients managing kidney-related concerns.</li>
                <li>Liver Care Department for those seeking guidance on liver health.</li>
                <li>Diabetes Management Department for lifestyle and treatment-related queries.</li>
                <li>Panchakarma Therapy Department for patients interested in detox and therapeutic treatments.</li>
                <li>Pathology and Diagnostic Department for patients needing test-related information.</li>
                <li>Patients can request the reception to connect them to the relevant department for accurate guidance.</li>
              </ul>
            </div>


            {/* Section 7 — Alternative Ways to Connect With the Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Alternative Ways to Connect With the Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Website contact form for patients who prefer written communication over phone calls.</li>
                <li>Email support for detailed queries, medical history sharing, or document submission.</li>
                <li>WhatsApp-based communication, where available, for quick appointment confirmations.</li>
                <li>Social media pages that provide basic hospital updates and indirect contact assistance.</li>
                <li>Google Maps listing, which often displays the verified contact number alongside hospital location and reviews.</li>
              </ul>
            </div>


            {/* Section 8 — Why Patients From Bilari Prefer Direct Contact Before Visiting */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients From Bilari Prefer Direct Contact Before Visiting
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Confirming doctor availability in advance saves unnecessary travel time.</li>
                <li>Patients can discuss their symptoms briefly and understand which treatment path may suit them.</li>
                <li>First-time visitors get guidance on documents or previous reports to carry.</li>
                <li>Elderly patients and those with chronic illnesses benefit from pre-planned visits with clear instructions.</li>
                <li>Families coordinating a hospital visit find it easier to manage logistics after speaking to hospital staff beforehand.</li>
              </ul>
            </div>


            {/* Section 9 — Verifying the Correct Contact Number */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Verifying the Correct Contact Number
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients are advised to always refer to the hospital's official website for the updated contact number.</li>
                <li>Cross-checking the number with Google My Business listings adds an extra layer of confirmation.</li>
                <li>Avoiding unofficial medical directories reduces the risk of connecting with unrelated or outdated listings.</li>
                <li>Saving the verified number directly in a phone helps avoid future confusion.</li>
                <li>Sharing the verified contact details within family or community groups helps other patients from Bilari as well.</li>
              </ul>
            </div>


            {/* Section 10 — What Information to Keep Ready Before Calling */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Information to Keep Ready Before Calling
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patient's name and age for basic record verification.</li>
                <li>Nature of the health concern, such as kidney, liver, diabetes, or general wellness.</li>
                <li>Previous treatment history, if any, especially for chronic conditions.</li>
                <li>Preferred date and time for the appointment.</li>
                <li>Any specific doctor request, if the patient has visited before.</li>
              </ul>
            </div>


            {/* Section 11 — Benefits of Choosing Balprada Ayurvedic Hospital for Bilari Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing Balprada Ayurvedic Hospital for Bilari Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Trusted ayurvedic care combined with modern diagnostic support.</li>
                <li>Experienced doctors available for consultation across multiple specialties.</li>
                <li>Convenient location accessible from Bilari and nearby areas.</li>
                <li>Transparent communication process from the first phone call to treatment completion.</li>
                <li>Supportive staff who guide patients through appointment and documentation processes.</li>
              </ul>
            </div>


            {/* Section 12 — Tips for a Smooth First Call */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for a Smooth First Call
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Speak clearly about your primary health concern to help the reception team direct your call appropriately.</li>
                <li>Ask about consultation timings for your preferred doctor.</li>
                <li>Confirm whether any prior test reports should be brought along.</li>
                <li>Note down the appointment date and time immediately after the call.</li>
                <li>Request confirmation through a message if available, for personal record-keeping.</li>
              </ul>
            </div>


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Contact Balprada Ayurvedic Hospital Today
              </h2>


              <ul className="text-black space-y-2 mb-6 list-disc pl-5">
                <li>Patients from Bilari and surrounding areas can reach out to Balprada Ayurvedic Hospital &amp; Research Center through the verified contact number for appointments, queries, and guidance.</li>
                <li>The hospital's reception team is available to assist with appointment booking, department selection, and doctor availability confirmation.</li>
                <li>For urgent health concerns related to kidney, liver, diabetes, or other chronic conditions, calling ahead ensures priority attention and streamlined consultation.</li>
                <li>Save the verified contact number for quick access during follow-up visits and ongoing treatment coordination.</li>
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
                    Call Now
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