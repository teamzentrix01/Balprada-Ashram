import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";


export default function BalpradaContactNumber() {
  const faqs = [
    {
      q: "What is the contact number for Balprada's main branch?",
      a: "The main branch can be reached at 8126364606 for calls, WhatsApp and appointment enquiries.",
    },
    {
      q: "What is the contact number for the Moradabad branch?",
      a: "The Moradabad branch can be reached at 9410447000, with the vaidya available there on Sundays.",
    },
    {
      q: "Can I book an appointment through WhatsApp?",
      a: "Yes, WhatsApp appointment booking is available through 8126364606.",
    },
    {
      q: "What are the consultation timings at Balprada?",
      a: "Consultation timing is 10:00 AM to 2:00 PM daily, with free OPD available on the 15th of every month.",
    },
    {
      q: "Is there an email address for general enquiries?",
      a: "Yes, you can email balpradaindia@gmail.com for general questions or written communication.",
    },
    {
      q: "Do I need to call before visiting the Moradabad branch?",
      a: "Yes, calling ahead is recommended since the vaidya is available at this branch specifically on Sundays.",
    },
    {
      q: "What should I have ready before calling for the first time?",
      a: "Keep your health concern, past medical reports and current medication details ready so the call can be more productive.",
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
                Reaching Balprada Ayurvedic Hospital
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>If you are looking for the ayurvedic hospital contact number in Moradabad, Balprada Ayurvedic Hospital &amp; Research Center offers multiple ways to connect — phone, WhatsApp and email.</li>
                <li>Balprada has built 35 years of trusted Ayurveda, research and compassionate care, and easy access to its team is an important part of that trust.</li>
                <li>Whether you are booking your first consultation, asking about OPD timing, or checking on treatment availability, the hospital&apos;s contact channels are designed to be simple and responsive.</li>
                <li>This guide brings together all the ways to reach Balprada, along with what to expect when you call, message or visit.</li>
                <li>Having accurate contact details on hand saves time, especially for patients travelling from outside Moradabad for consultation.</li>
                <li>For many families, the first phone call to a hospital sets the tone for the entire treatment journey, which is why Balprada keeps its contact process straightforward and easy to follow.</li>
              </ul>
            </div>


            {/* Section 2 — Main Branch Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Main Branch Contact Details
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Address:</strong> Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.</li>
                <li><strong>Phone:</strong> 8126364606, available for calls regarding consultation, treatment enquiries and appointment booking.</li>
                <li><strong>Timing:</strong> open daily from 10:00 AM to 2:00 PM for consultation.</li>
                <li><strong>Email:</strong> <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a> for general enquiries and written communication.</li>
                <li>This branch operates as the main ashram-based center, making it suitable for patients considering an extended stay for treatment.</li>
                <li>Because this branch also functions as an ashram, it is a good point of contact for patients enquiring about longer stays, daily routines, or accommodation alongside their treatment.</li>
              </ul>
            </div>


            {/* Section 3 — Moradabad Branch Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Moradabad Branch Contact Details
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Address:</strong> F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.</li>
                <li><strong>Phone:</strong> 9410447000, available for enquiries specific to the Moradabad branch.</li>
                <li><strong>Vaidya Availability:</strong> the vaidya is available at this branch on Sundays — calling ahead before visiting is recommended.</li>
                <li><strong>Email:</strong> <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a>, shared across both branches for consistent communication.</li>
                <li>This branch is convenient for patients based within Moradabad city who prefer not to travel to the ashram location.</li>
                <li>City-based patients often find this branch easier for quick consultations or follow-up visits that do not require an extended stay.</li>
              </ul>
            </div>


            {/* Section 4 — WhatsApp Booking */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                WhatsApp Appointment Booking at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada offers a direct WhatsApp appointment option through the number 8126364606, making it easy to send enquiries without a phone call.</li>
                <li>WhatsApp is useful for sharing basic details about your health concern before your first visit, so the team can guide you appropriately.</li>
                <li>Patients can also use WhatsApp to confirm OPD timing, ask about branch-specific availability, or check on the Sunday vaidya schedule at the Moradabad branch.</li>
                <li>This option is especially convenient for patients travelling from outside the city who want to confirm details in advance.</li>
                <li>WhatsApp also allows patients to keep a written record of appointment confirmations and instructions, which can be useful for reference before and after a visit.</li>
              </ul>
            </div>


            {/* Section 5 — Why Contact Number Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Having the Right Contact Number Matters
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurvedic treatment for chronic concerns like kidney, liver, heart, diabetes or thyroid conditions often involves multiple points of contact — initial consultation, follow-up calls and appointment adjustments.</li>
                <li>Reaching the correct branch directly avoids confusion, especially since Balprada operates two separate locations with different timings and vaidya availability.</li>
                <li>Having a working contact number also helps in emergencies or when adjusting appointment timing at short notice.</li>
                <li>Clear communication with the hospital from the start helps set expectations about consultation timing, documentation needed and treatment planning.</li>
                <li>Patients travelling long distances particularly benefit from confirming details in advance, since it reduces the chances of a wasted trip due to mismatched timing.</li>
              </ul>
            </div>


            {/* Section 6 — What to Ask When Calling */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Ask When You Call Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ask about the earliest available consultation slot based on your health concern.</li>
                <li>Confirm whether your visit falls on a day when the vaidya is available, especially for the Moradabad branch.</li>
                <li>Ask what documents or medical reports you should bring to your first consultation.</li>
                <li>Enquire about the free OPD consultation schedule, available on the 15th of every month.</li>
                <li>If considering a stay at the ashram, ask about accommodation arrangements and what to prepare in advance.</li>
                <li>It also helps to ask whether any preliminary tests or reports should be arranged before your visit, so your first consultation can proceed without delay.</li>
              </ul>
            </div>


            {/* Section 7 — Free OPD Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Free OPD Consultation: A Direct Way to Connect
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada offers free OPD consultation on the 15th of every month, giving patients a direct, low-barrier way to meet the doctor and understand the treatment process.</li>
                <li>This is particularly useful for patients unsure about which branch or treatment path suits their concern.</li>
                <li>Calling ahead to confirm free OPD timing is recommended, since consultation hours are generally 10:00 AM to 2:00 PM.</li>
                <li>Free OPD sessions are a good starting point before committing to a longer-term Ayurvedic treatment plan.</li>
                <li>For patients still deciding between different Ayurvedic hospitals, this free consultation offers a practical way to experience Balprada&apos;s approach before making a decision.</li>
              </ul>
            </div>


            {/* Section 8 — How to Prepare */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare Before Contacting Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Note down your primary health concern clearly before calling, so the team can guide you to the right branch or specialist care area.</li>
                <li>Keep previous medical reports and current medication details ready to mention during your call or WhatsApp message.</li>
                <li>Decide whether you are looking for a single consultation or a longer stay at the ashram, as this affects which branch and timing suits you best.</li>
                <li>If travelling from outside Moradabad, ask about the best time to visit to avoid unnecessary waiting.</li>
                <li>Prepare a short list of questions in advance so you don&apos;t forget to ask something important during the call, especially if you are contacting the hospital for the first time.</li>
              </ul>
            </div>


            {/* Section 9 — Common Reasons to Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Reasons Patients Contact Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Booking a first-time consultation for a new health concern such as kidney, liver, heart, diabetes or thyroid issues.</li>
                <li>Scheduling a follow-up visit to review progress after starting treatment.</li>
                <li>Asking about the free OPD schedule and how to plan a visit around it.</li>
                <li>Enquiring about facilities such as panchakarma, yoga, naturopathy or the in-house pathology lab.</li>
                <li>Requesting guidance on diet and daily routine between scheduled visits.</li>
                <li>Checking on vaidya availability at the Moradabad branch before planning a Sunday visit.</li>
              </ul>
            </div>


            {/* Section 10 — Specific Treatment Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contacting Balprada for Specific Treatment Areas
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Kidney and Urinary Care</strong> enquiries, including kidney failure, kidney stones and swelling-related concerns.</li>
                <li><strong>Liver and Digestive Care</strong> enquiries, covering fatty liver, jaundice and weak digestion.</li>
                <li><strong>Cancer Supportive Care</strong> enquiries, for strength, diet guidance and emotional support during treatment.</li>
                <li><strong>Heart and Lifestyle Care</strong> enquiries, addressing blood pressure, diabetes, obesity and related concerns.</li>
                <li><strong>Diabetes and Thyroid Care</strong> enquiries, for blood sugar and thyroid balance support.</li>
                <li><strong>Women&apos;s Wellness</strong> enquiries, covering hormonal balance, menstrual health and weakness.</li>
                <li>Mentioning your specific concern when you call helps the team direct you to the right doctor and treatment pathway from the start.</li>
              </ul>
            </div>


            {/* Section 11 — Directions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Directions to Balprada&apos;s Branches
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The main branch is located in Village Bhidwari, under Tehsil Bilari in Moradabad district, and can be located using the address details shared above.</li>
                <li>The Moradabad branch is located in Sector-13, New Moradabad, along Delhi Road, making it accessible for patients within the city.</li>
                <li>Calling ahead before visiting either branch is recommended, particularly for the Moradabad branch where the vaidya&apos;s Sunday availability affects scheduling.</li>
                <li>Both branches are reachable by road, and patients travelling from other districts are encouraged to confirm directions over a phone call in advance.</li>
                <li>Confirming directions beforehand is especially useful for first-time visitors unfamiliar with the local landmarks near either branch.</li>
              </ul>
            </div>


            {/* Section 12 — Communication Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for a Smooth Communication Experience
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Call during consultation hours between 10:00 AM and 2:00 PM for the quickest response.</li>
                <li>If a call isn&apos;t answered immediately, follow up with a WhatsApp message so your enquiry isn&apos;t missed.</li>
                <li>Keep your message clear and specific — mention your concern, preferred branch and possible visiting dates.</li>
                <li>For non-urgent queries, email is a convenient option that allows the team to respond in detail.</li>
                <li>Save both branch numbers separately so you always reach the right location for your specific need.</li>
              </ul>
            </div>


            {/* Section 13 — Why Balprada Makes Contact Simple */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Balprada Makes Contact Simple for Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Multiple contact options — phone, WhatsApp and email — mean patients can choose the method most convenient for them.</li>
                <li>Two branch locations reduce travel time for patients based in different parts of Moradabad and nearby areas.</li>
                <li>Consistent OPD timing across the week, along with a monthly free consultation, makes planning a visit straightforward.</li>
                <li>Clear communication about vaidya availability, especially at the Moradabad branch, helps patients avoid unnecessary travel.</li>
                <li>This accessibility reflects the hospital&apos;s broader approach of building trust through 35 years of consistent, patient-focused service.</li>
                <li>Ultimately, easy access to the right contact point is what allows patients to move from enquiry to consultation without unnecessary delay.</li>
              </ul>
            </div>


            {/* Section 14 — Booking First Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Booking Your First Consultation at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Call or WhatsApp the main branch at 8126364606 to enquire about consultation timing and treatment options.</li>
                <li>Contact the Moradabad branch at 9410447000, keeping the Sunday vaidya schedule in mind.</li>
                <li>Take advantage of the free OPD consultation offered on the 15th of every month.</li>
                <li>Bring previous medical reports, current medicines and a clear description of your health concern to your first visit.</li>
                <li>Email <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a> for general enquiries if a phone call is not convenient.</li>
              </ul>
            </div>


            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Contact Balprada Today
              </h2>


              <p className="text-black mb-6">
                Patients looking for the ayurvedic hospital contact number in Moradabad can reach Balprada Ayurvedic Hospital &amp; Research Center through phone, WhatsApp or email. With two accessible branches, daily OPD timing from 10:00 AM to 2:00 PM, and free consultation available on the 15th of every month, Balprada makes it easy to book your first consultation and begin your Ayurvedic treatment journey. For patients travelling from outside Moradabad, the hospital team can also assist with planning your visit and coordinating accommodation at the ashram-based main branch.
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


                <div className="flex items-start gap-3">
                  <Mail
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Email Us</p>
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