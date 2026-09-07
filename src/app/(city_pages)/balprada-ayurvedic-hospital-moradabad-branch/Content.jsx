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
      q: "Where is the Balprada Moradabad branch located?",
      a: "It is located at F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.",
    },
    {
      q: "When is the vaidya available at the Moradabad branch?",
      a: "The vaidya is available at this branch on Sundays, so calling ahead is recommended.",
    },
    {
      q: "What is the contact number for the Moradabad branch?",
      a: "The Moradabad branch can be reached at 9410447000 for enquiries and appointment scheduling.",
    },
    {
      q: "Can I get the same treatments here as at the main branch?",
      a: "Yes, the Moradabad branch follows the same treatment philosophy, though some facilities may be coordinated with the main ashram branch.",
    },
    {
      q: "Do I need to stay overnight at the Moradabad branch?",
      a: "No, this branch is designed for consultations and follow-up visits rather than extended ashram stays.",
    },
    {
      q: "How do I book my first visit to this branch?",
      a: "Call 9410447000 directly, or contact the main branch at 8126364606 for WhatsApp booking assistance.",
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
              


              <h2 className="text-2xl font-serif mb-4 text-gray-900 mt-6">
                About the Balprada Moradabad Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The Balprada Ayurvedic Hospital Moradabad branch is a key part of the hospital&apos;s network, offering patients within the city an accessible point of contact for Ayurvedic consultation and care.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center has built 35 years of trusted Ayurveda, research and compassionate care, and the Moradabad branch extends this legacy directly into the city.</li>
                <li>Located in Sector-13, New Moradabad, this branch is designed for patients who want quality Ayurvedic guidance without travelling to the main ashram-based center.</li>
                <li>This article covers everything you need to know about the Moradabad branch — its location, timing, services and how it fits into Balprada&apos;s overall care approach.</li>
                <li>Whether you are visiting for the first time or planning a follow-up consultation, understanding how this branch operates helps you plan your visit better.</li>
              </ul>
            </div>


            {/* Section 2 — Location and Address */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Location and Address of the Moradabad Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Address:</strong> F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.</li>
                <li>The branch sits along Delhi Road, making it relatively easy to reach for patients travelling within Moradabad city.</li>
                <li>Its location in New Moradabad places it conveniently for residents in and around Sector-13 and nearby localities.</li>
                <li>Patients travelling from outside the city are encouraged to confirm directions over a phone call before their first visit.</li>
                <li>This branch complements the main ashram-based center in Village Bhidwari, giving patients a choice between a city-based consultation point and a full ashram healing environment.</li>
              </ul>
            </div>


            {/* Section 3 — Consultation Timing */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Consultation Timing and Vaidya Availability
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The vaidya is available at the Moradabad branch specifically on Sundays, making this an important detail to plan around before visiting.</li>
                <li>Patients are advised to call or WhatsApp before visiting, especially if their visit depends on meeting the vaidya directly.</li>
                <li>General consultation timing across Balprada&apos;s branches typically runs from 10:00 AM to 2:00 PM.</li>
                <li>Confirming vaidya availability in advance helps avoid a wasted trip, particularly for patients travelling from other parts of the district.</li>
                <li>This structured availability reflects how Balprada organises its team across both branches to serve patients efficiently.</li>
              </ul>
            </div>


            {/* Section 4 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Contact Details for the Moradabad Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Phone:</strong> 9410447000, available for enquiries specific to the Moradabad branch.</li>
                <li><strong>Email:</strong> <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a>, shared across both Balprada branches for consistent communication.</li>
                <li>Patients can also reach the main branch at 8126364606 for WhatsApp appointment booking if needed.</li>
                <li>Having the correct branch-specific number saves time when booking appointments or asking about vaidya availability.</li>
                <li>Clear contact channels reflect Balprada&apos;s broader approach of making Ayurvedic care accessible and easy to reach.</li>
              </ul>
            </div>


            {/* Section 5 — Why the Moradabad Branch Matters */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why the Moradabad Branch Matters for City-Based Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Not every patient can travel to the main ashram-based center in Village Bhidwari, especially for quick consultations or follow-up visits.</li>
                <li>The Moradabad branch offers a convenient, city-based alternative that still carries Balprada&apos;s 35 years of Ayurvedic experience and treatment philosophy.</li>
                <li>For patients managing ongoing treatment, having a nearby branch reduces travel time for regular follow-up visits.</li>
                <li>The branch also serves as an accessible starting point for new patients who want to understand Balprada&apos;s approach before considering a longer ashram stay.</li>
                <li>This dual-branch structure allows Balprada to serve both city-based and ashram-focused patients without compromising on care quality.</li>
              </ul>
            </div>


            {/* Section 6 — Treatments Available */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Treatments Available Through the Moradabad Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Kidney and Urinary Care:</strong> consultation and lifestyle support for kidney failure, kidney stones and swelling-related concerns.</li>
                <li><strong>Liver and Digestive Care:</strong> guidance for fatty liver, jaundice and weak digestion through medicine, diet and routine correction.</li>
                <li><strong>Cancer Supportive Care:</strong> sensitive Ayurvedic support for strength, diet guidance and emotional wellbeing during serious illness.</li>
                <li><strong>Heart and Lifestyle Care:</strong> support for blood pressure, diabetes, obesity and related lifestyle concerns.</li>
                <li><strong>Diabetes and Thyroid Care:</strong> personalised guidance for blood sugar, hypothyroidism, hyperthyroidism and metabolic balance.</li>
                <li><strong>Women&apos;s Wellness:</strong> private, sensitive care for hormonal balance, menstrual health and general weakness.</li>
                <li>Patients can discuss their specific concern when contacting the branch to understand how their treatment would be structured.</li>
              </ul>
            </div>


            {/* Section 7 — Care Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                How the Moradabad Branch Fits Into Balprada&apos;s Care Process
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Consultation:</strong> even at the Moradabad branch, the process begins with a thorough review of the patient&apos;s concern, history, reports and current medication.</li>
                <li><strong>Ayurvedic Plan:</strong> treatment is based on Balprada&apos;s in-house medicines, combined with diet discipline and lifestyle correction where suitable.</li>
                <li><strong>Supportive Facilities:</strong> patients may be guided toward yoga, naturopathy, panchakarma or pathology testing as part of a more complete treatment journey, coordinated with the main branch where needed.</li>
                <li><strong>Follow-up:</strong> regular follow-up visits help track progress and refine the treatment plan over time.</li>
                <li>This ensures that patients visiting the Moradabad branch receive the same structured, doctor-led approach that defines Balprada&apos;s overall philosophy.</li>
              </ul>
            </div>


            {/* Section 8 — Comparing Branches */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Comparing the Moradabad Branch and the Main Ashram Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The main branch in Village Bhidwari operates as a full ashram, suited to patients considering an extended, immersive healing stay.</li>
                <li>The Moradabad branch is more suited to quicker consultations and follow-up visits for patients who live within the city.</li>
                <li>Vaidya availability differs between branches, with the Moradabad branch offering Sunday access specifically.</li>
                <li>Both branches share the same underlying treatment philosophy, in-house medicine standards and structured care process.</li>
                <li>Choosing between the two often comes down to convenience, travel distance and whether a longer stay is part of the patient&apos;s treatment plan.</li>
              </ul>
            </div>


            {/* Section 9 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                What to Expect When Visiting the Moradabad Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A calm, professional environment where the doctor takes time to understand your health concern before recommending treatment.</li>
                <li>Clear communication about diet, daily routine and medicine usage as part of your care plan.</li>
                <li>Guidance on whether additional facilities, such as panchakarma or naturopathy, would benefit your specific condition.</li>
                <li>The option to coordinate further treatment at the main ashram branch if a more immersive care plan is recommended.</li>
                <li>A consistent standard of care that reflects Balprada&apos;s 35 years of experience, regardless of which branch you visit.</li>
              </ul>
            </div>


            {/* Section 10 — How to Prepare */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                How to Prepare for a Visit to the Moradabad Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Confirm the vaidya&apos;s availability in advance, especially if your visit depends on a Sunday consultation.</li>
                <li>Carry previous medical reports and a list of current medicines to your appointment.</li>
                <li>Prepare a clear, concise description of your health concern to make the consultation more efficient.</li>
                <li>Call ahead if you are travelling from outside the city, to avoid any scheduling mismatch.</li>
                <li>Ask about follow-up scheduling during your first visit so you know what to expect going forward.</li>
              </ul>
            </div>


            {/* Section 11 — Why Patients Choose */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Why Patients Choose the Moradabad Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Convenient city location along Delhi Road in Sector-13, New Moradabad.</li>
                <li>Access to the same trusted Ayurvedic treatment philosophy that has guided Balprada for 35 years.</li>
                <li>A practical option for patients who want quality care without committing to an extended ashram stay.</li>
                <li>Coordinated access to the main branch&apos;s broader facilities when a more complete treatment plan is needed.</li>
                <li>A reliable point of contact for ongoing follow-up visits without long travel times.</li>
              </ul>
            </div>


            {/* Section 12 — Booking an Appointment */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">
                Booking an Appointment at the Moradabad Branch
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Call 9410447000 to enquire about consultation timing and vaidya availability.</li>
                <li>Confirm your visit in advance, especially if it depends on meeting the vaidya on a Sunday.</li>
                <li>Alternatively, contact the main branch at 8126364606 for WhatsApp appointment booking and general guidance.</li>
                <li>Bring previous medical reports, current medicines and a clear description of your health concern to your appointment.</li>
                <li>Email <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a> for general enquiries if a phone call is not convenient.</li>
              </ul>
            </div>


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Visit Balprada Moradabad Branch
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can visit Balprada Ayurvedic Hospital &amp; Research Center&apos;s Moradabad branch. The consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients requiring extended ashram-based care, the hospital coordinates with the main branch in Village Bhidwari.
              </p>


              <div className="space-y-4 mb-6">


                {/* Moradabad Branch */}
                <div className="flex items-start gap-3">
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


                {/* Main Branch */}
                <div className="flex items-start gap-3 mt-4">
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