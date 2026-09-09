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
      q: "Can I get a full diagnosis and treatment plan over the phone?",
      a: "No, a full diagnosis and personalized treatment plan require an in-person consultation, since Ayurvedic assessment includes physical examination. Phone and WhatsApp support is used for guidance and planning.",
    },
    {
      q: "Can I ask general questions before deciding to visit?",
      a: "Yes, the team is available by phone and WhatsApp to answer general questions and help you understand whether Balprada's treatment is suited to your concern.",
    },
    {
      q: "Can existing patients use WhatsApp for follow-up questions?",
      a: "Yes, existing patients can reach out for quick clarification on medicine or diet guidance between scheduled in-person visits.",
    },
    {
      q: "Which branch should I contact for my visit?",
      a: "The team can guide you based on your location and condition — the main branch is in Tehsil Bilari, and the second branch is in New Moradabad on Delhi Road.",
    },
    {
      q: "Can I book the free OPD consultation through phone or WhatsApp?",
      a: "Yes, you can confirm details about the free OPD, held on the 15th of every month, by contacting the team in advance.",
    },
    {
      q: "Is there a cost for the initial phone or WhatsApp guidance?",
      a: "Reach out directly to the team for current details on consultation and appointment arrangements.",
    },
    {
      q: "What should I have ready before calling?",
      a: "It helps to have a brief description of your concern, any existing reports, and details of current medication ready before reaching out.",
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
                Ayurvedic Doctor Consultation Online at Balprada Ayurvedic Hospital & Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>For patients who cannot travel immediately, live far from Moradabad, or simply want to understand their treatment options before visiting in person, Balprada Ayurvedic Hospital & Research Center offers phone and WhatsApp-based consultation support to guide patients toward the right care.</li>
                <li>With 35 years of trusted Ayurvedic experience, in-house herbal medicines, and doctors who are reachable directly by call or WhatsApp, Balprada makes it easier for patients to take the first step toward Ayurvedic care, get their questions answered, and plan a visit that is suited to their specific health concern.</li>
              </ul>
            </div>


            {/* Section 2 — Why Remote Consultation Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Remote Consultation Support Matters
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Many patients live in cities or towns away from Moradabad and want to understand whether Ayurvedic treatment at Balprada is suitable for their condition before making the journey.</li>
                <li>Some patients are managing ongoing conditions such as kidney, liver, or thyroid concerns and want to ask specific questions before their first in-person visit.</li>
                <li>Families often need guidance on which branch to visit, what to bring, and how to prepare, especially for elderly patients or those traveling long distances.</li>
                <li>Existing patients frequently need quick guidance between scheduled visits — clarifying medicine instructions, diet questions, or minor concerns.</li>
                <li>Remote support through phone and WhatsApp allows patients to start their care journey with clarity, rather than arriving without knowing what to expect.</li>
              </ul>
            </div>


            {/* Section 3 — How It Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Phone and WhatsApp Consultation Works at Balprada
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Initial Guidance Call or Message
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Patients can call or message Balprada directly to describe their health concern and ask preliminary questions about treatment options.</li>
                    <li>The team helps patients understand which branch, which specialist area, and what documentation may be useful for their first visit.</li>
                    <li>This step is especially useful for patients unsure whether their condition is suited to Ayurvedic care or who want a general understanding before booking an appointment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Appointment Planning and Scheduling
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Once initial guidance is provided, the team helps patients plan their visit, including appropriate timing and which branch suits their location.</li>
                    <li>Patients are informed about OPD timings, including the standard 10:00 AM to 2:00 PM consultation window and the availability of Vaidya ji on Sundays at the Moradabad branch.</li>
                    <li>For patients aiming to attend the free OPD on the 15th of every month, the team can confirm details and help plan accordingly.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pre-Visit Document and Report Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Patients are advised on which existing medical reports, prescriptions, or test results would be useful to bring for a more accurate first consultation.</li>
                    <li>This preparation helps the consulting doctor assess the case more thoroughly once the patient arrives for their in-person visit.</li>
                    <li>Clear guidance in advance helps reduce repeat visits and ensures the first consultation is as productive as possible.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Follow-up Support Between Visits
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Existing patients can reach out by phone or WhatsApp for quick clarification on medicine instructions, diet guidance, or minor concerns between scheduled visits.</li>
                    <li>This ongoing accessibility supports patients who are following a longer treatment journey and need periodic reassurance or clarification.</li>
                    <li>For any concern requiring a detailed physical assessment, patients are guided to schedule an in-person follow-up rather than relying solely on remote communication.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 4 — What Remote Support Can and Cannot Replace */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Remote Consultation Support Can and Cannot Replace
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Phone and WhatsApp support is well suited for initial guidance, appointment planning, general questions, and follow-up clarification.</li>
                <li>A detailed physical examination, pulse diagnosis (Nadi Pariksha), and hands-on assessment — central to traditional Ayurvedic diagnosis — require an in-person visit.</li>
                <li>Herbal medicines and personalized treatment plans are prescribed following proper in-person consultation, ensuring the doctor has assessed the patient directly.</li>
                <li>Patients with more complex or serious conditions, such as kidney failure, cancer support, or neurological concerns, are especially encouraged to prioritize an in-person visit for accurate assessment.</li>
                <li>Remote support functions as a helpful starting point and ongoing communication channel — not a replacement for the thorough, in-person consultation that Ayurvedic treatment planning requires.</li>
              </ul>
            </div>


            {/* Section 5 — Who Can Benefit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Benefit From This Service
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients living outside Moradabad who want guidance before planning a visit.</li>
                <li>Families helping elderly or unwell relatives understand the process before traveling for treatment.</li>
                <li>New patients who are unsure which treatment category or branch is suited to their condition.</li>
                <li>Existing patients who need quick clarification on medicine, diet, or minor concerns between visits.</li>
                <li>Anyone wanting to understand OPD timings, free consultation dates, or appointment planning before their first visit.</li>
              </ul>
            </div>


            {/* Section 6 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Guidance and Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Direct phone and WhatsApp access, making it easier for patients to reach the team without navigating complex booking systems.</li>
                <li>In-house herbal medicines, prepared with attention to quality and consistency once a treatment plan is confirmed.</li>
                <li>Two accessible branches — the main branch in Tehsil Bilari and a second branch in New Moradabad on Delhi Road — with guidance provided on which suits each patient.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week for consultation and follow-up.</li>
                <li>Free OPD consultation on the 15th of every month, which the team can help patients plan around.</li>
                <li>Experienced doctors who take time to understand each patient's situation, whether through an initial call or a full in-person consultation.</li>
              </ul>
            </div>


            


            {/* Section 8 — What to Prepare */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Prepare Before Reaching Out
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A brief, clear description of your main health concern and how long you have been experiencing it.</li>
                <li>Any existing medical reports, prescriptions, or test results relevant to your condition.</li>
                <li>Details of any current medication you are taking, so the team can note this ahead of your visit.</li>
                <li>Your location and preferred branch, so the team can guide you on travel and appointment planning.</li>
                <li>Any specific questions you would like addressed before committing to an in-person visit.</li>
                <li>A note of any language preference, in case a specific team member is better suited to assist you.</li>
              </ul>
            </div>


            {/* Section 9 — Steps to Get Started */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Steps to Get Started With Balprada's Consultation Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Call or message the Balprada team directly using the contact number provided on the website to describe your concern.</li>
                <li>Share any relevant reports or medication details so the team can guide you appropriately.</li>
                <li>Discuss which branch and appointment timing would suit your situation, including OPD hours and Sunday availability at the Moradabad branch.</li>
                <li>Plan your in-person visit with the guidance provided, bringing all recommended documents for a thorough first consultation.</li>
                <li>Use phone or WhatsApp for follow-up questions once your treatment plan has begun, as needed between scheduled visits.</li>
              </ul>
            </div>


            {/* Section 10 — Common Situations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Situations Where Patients Reach Out Remotely
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients living outside Uttar Pradesh who want to understand whether traveling to Balprada is worthwhile for their specific condition.</li>
                <li>Family members researching Ayurvedic options on behalf of an elderly parent who is unable to travel or communicate their symptoms clearly.</li>
                <li>Patients managing chronic conditions such as kidney or liver concerns who want to understand the general treatment approach before their first visit.</li>
                <li>People who have seen Balprada's testimonials or online presence and want to verify details, timings, or treatment scope before committing to a visit.</li>
                <li>Patients coordinating their Ayurvedic care alongside ongoing allopathic treatment who want to check compatibility before starting.</li>
              </ul>
            </div>


            {/* Section 11 — Making the Most of Remote Interaction */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Making the Most of Your Remote Interaction
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep your communication clear and specific — mentioning your main symptom, its duration, and any prior diagnosis helps the team guide you accurately.</li>
                <li>Ask directly about which branch and which treatment category (such as kidney, liver, or diabetes care) is most relevant to your concern.</li>
                <li>Use the opportunity to ask about travel logistics, nearby stay options, and OPD timings if you are planning to travel from another city.</li>
                <li>If you are an existing patient, be specific about what has changed since your last visit, so follow-up guidance can be more accurate.</li>
                <li>Treat the phone or WhatsApp interaction as a starting point for a relationship with the care team, not a one-time transaction.</li>
              </ul>
            </div>


            {/* Section 12 — Balprada's Commitment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada's Commitment to Accessible Communication
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The team aims to respond to patient queries promptly, recognizing that many patients are anxious or uncertain when first reaching out about a health concern.</li>
                <li>Communication is kept clear and honest — patients are told directly when an in-person visit is necessary rather than being given vague reassurance.</li>
                <li>The goal of remote guidance is always to help patients make an informed decision, not simply to encourage a visit regardless of suitability.</li>
                <li>Both branches maintain accessible contact numbers, and the WhatsApp appointment option is designed to make reaching the team straightforward.</li>
                <li>This accessibility reflects Balprada's broader seva-based approach — treating every patient interaction, however it begins, with genuine care and attention.</li>
              </ul>
            </div>


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Contact Balprada for Consultation Guidance
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment or seeking guidance before their visit can contact Balprada Ayurvedic Hospital & Research Center by phone or WhatsApp. The team is available to answer your questions, help plan your appointment, and guide you on which branch and treatment category best suits your health concern. Free OPD consultation available on the 15th of every month.
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