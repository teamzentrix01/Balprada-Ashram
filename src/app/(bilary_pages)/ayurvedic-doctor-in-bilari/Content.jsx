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
      q: "Where exactly is Balprada Ayurvedic Hospital located?",
      a: "The main branch is located in Tehsil Bilari, District Moradabad, with a second branch in Sector-13, New Moradabad, Delhi Road, Moradabad.",
    },
    {
      q: "What are the OPD timings at the Bilari campus?",
      a: "The OPD is open seven days a week, with standard consultation hours from 10:00 AM to 2:00 PM.",
    },
    {
      q: "Can I consult Sw. Vaidya Vijay Pal Singh Ji at the Bilari campus?",
      a: "He is available for consultation on Sundays at the Moradabad branch — it's best to call or message ahead to confirm details.",
    },
    {
      q: "Is there a free consultation option for local patients?",
      a: "Yes, Balprada offers a free OPD consultation on the 15th of every month at its facility.",
    },
    {
      q: "Can patients from outside Bilari also visit this campus?",
      a: "Yes, patients from other districts and cities regularly visit the Bilari campus, often specifically for its calm, ashram-based environment.",
    },
    {
      q: "Does the Bilari campus offer Panchakarma and other therapies?",
      a: "Yes, Panchakarma, yoga, naturopathy, physiotherapy, and in-house pathology services are all available, based on individual assessment.",
    },
    {
      q: "How can I plan my first visit to Balprada?",
      a: "You can call or WhatsApp the hospital in advance to confirm timings and understand what to bring for your first consultation.",
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
                Ayurvedic Hospital in Bilari | Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Tucked away from the noise of the city, Balprada Ayurvedic Hospital &amp; Research Center is based in Tehsil Bilari, District Moradabad — a location chosen deliberately to give patients the calm, ashram-like setting that traditional Ayurvedic healing is meant to happen in.</li>
                <li>For residents of Bilari and the surrounding villages and towns, this means access to 35 years of trusted Ayurvedic care without needing to travel to a distant city.</li>
                <li>With in-house herbal medicines, a resident care team, and a peaceful natural environment, Balprada has become a well-known name in Ayurvedic treatment for the Bilari region.</li>
              </ul>
            </div>


            {/* Section 2 — Why Balprada Is Based in Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada’s Presence in Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Bilari's quieter, more rural setting was chosen specifically to support the kind of disciplined, distraction-free environment that Ayurvedic healing traditionally requires.</li>
                <li>The ashram-based structure of the hospital allows patients to stay for focused treatment periods away from the noise and pace of city life.</li>
                <li>Being rooted in Bilari has allowed Balprada to build deep, long-standing trust within the local community over 35 years of continuous service.</li>
                <li>The natural surroundings around the Bilari campus support therapies such as yoga, meditation, and naturopathy that rely on a calm outdoor setting.</li>
                <li>This location reflects the seva sankalp — the spirit of service — on which Sw. Vaidya Vijay Pal Singh Ji founded the hospital.</li>
              </ul>
            </div>


            {/* Section 3 — What Bilari Residents Can Access at Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Bilari Residents Can Access at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Comprehensive OPD services covering kidney and urinary care, liver and digestive care, cancer support, heart and lifestyle care, diabetes and thyroid care, and women's wellness.</li>
                <li>In-house herbal medicines, prepared on-site to maintain consistent quality without needing to travel elsewhere for treatment.</li>
                <li>Panchakarma therapies, planned and administered based on individual assessment for patients across the Bilari region.</li>
                <li>Yoga and naturopathy sessions, integrated into treatment plans for patients seeking a complete, lifestyle-based approach to healing.</li>
                <li>In-house pathology lab services, allowing relevant diagnostic testing to be done without needing a separate facility outside the hospital.</li>
                <li>Physiotherapy support, particularly useful for patients in the region managing joint, muscle, or nerve-related concerns.</li>
              </ul>
            </div>


            {/* Section 4 — Convenience for Patients Across the Region */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Convenience for Patients Across the Region
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients from Bilari town itself can access daily OPD services without the time and cost of traveling to Moradabad city or beyond.</li>
                <li>Residents of nearby villages and smaller towns around Bilari find the hospital to be a more accessible option than traveling to larger district hospitals.</li>
                <li>The free OPD consultation held on the 15th of every month makes quality Ayurvedic consultation more accessible for families in the region who may otherwise hesitate due to cost.</li>
                <li>For patients requiring a longer treatment course, the ashram setting allows a stay close to home rather than needing to travel to a distant Ayurvedic center.</li>
                <li>Families who prefer to visit together, especially for elderly relatives, find the Bilari campus more manageable to reach and navigate than a busy city hospital.</li>
              </ul>
            </div>


            {/* Section 5 — Daily OPD Timings and Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Daily OPD Timings and Availability
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The OPD at Balprada is open seven days a week, with standard consultation hours from 10:00 AM to 2:00 PM.</li>
                <li>Sw. Vaidya Vijay Pal Singh Ji is available for consultation on Sundays at the Moradabad branch, giving patients from Bilari and nearby areas a specific day to plan around if they wish to consult him directly.</li>
                <li>Patients are encouraged to call or message the hospital ahead of their visit to confirm timings and plan their appointment.</li>
                <li>The free OPD consultation on the 15th of every month is a key date many local families plan around for an accessible first consultation.</li>
                <li>Daily availability, without the restrictive scheduling seen at some larger hospitals, makes it easier for working patients and families in the Bilari region to plan a visit.</li>
              </ul>
            </div>


            {/* Section 6 — The Ashram Experience for Local and Visiting Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ashram Experience for Local and Visiting Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The ashram-based setting in Bilari offers a structured daily routine — consultation, medicine, therapy, and rest — that supports focused healing.</li>
                <li>For patients staying at the ashram, the peaceful surroundings are designed to complement the internal Ayurvedic treatment being given.</li>
                <li>Even for patients who do not stay overnight, the calm campus environment is intended to make each visit feel less rushed and more attentive than a typical clinical visit.</li>
                <li>The Bilari campus reflects a balance between traditional Ayurvedic practice and the practical needs of a busy patient population from across the wider region.</li>
                <li>Visiting patients from outside Bilari also benefit from this setting, often choosing to combine their treatment with a short, focused stay away from home.</li>
              </ul>
            </div>


            {/* Section 7 — Why Patients Choose Balprada's Bilari Campus */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada's Bilari Campus
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to quality and consistency, available directly at the Bilari campus.</li>
                <li>A peaceful, ashram-based environment that supports focused, disciplined healing away from city distractions.</li>
                <li>Comprehensive treatment categories covering a wide range of health concerns under one roof.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week.</li>
                <li>Free OPD consultation on the 15th of every month, making care accessible to families across the region.</li>
                <li>A second branch in Sector-13, New Moradabad, Delhi Road, for patients who find that location more convenient.</li>
              </ul>
            </div>


            {/* Section 8 — Who Typically Visits the Bilari Campus */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Typically Visits the Bilari Campus
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Local residents of Bilari town seeking Ayurvedic consultation for ongoing or new health concerns.</li>
                <li>Families from surrounding villages looking for accessible, trusted care without traveling to a distant city hospital.</li>
                <li>Patients specifically seeking Panchakarma therapy, given the suitability of the ashram setting for this kind of structured treatment.</li>
                <li>Individuals wanting to consult Sw. Vaidya Vijay Pal Singh Ji directly during his Sunday availability.</li>
                <li>Patients from other districts who choose Bilari specifically for its calmer, more focused healing environment compared to a city-based clinic.</li>
              </ul>


            </div>


            {/* Section 9 — What to Bring for Your Visit to the Bilari Campus */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Bring for Your Visit to the Bilari Campus
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Any existing medical reports, prescriptions, or test results relevant to your health concern.</li>
                <li>Details of any current medication you are taking, so the doctor can plan your Ayurvedic care accordingly.</li>
                <li>Comfortable clothing, especially if your visit includes yoga, physiotherapy, or Panchakarma-related therapy.</li>
                <li>A list of any allergies or specific dietary preferences, particularly if you expect to receive diet guidance as part of your treatment plan.</li>
                <li>A clear note of your main symptoms and how long you have been experiencing them, to help the doctor assess your case efficiently.</li>
                <li>Directions or a mapped route in advance, since the Bilari campus is set slightly away from the main town center.</li>
              </ul>
            </div>


            {/* Section 10 — The Role of a Local Ayurvedic Hospital in a Region Like Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Role of a Local Ayurvedic Hospital in a Region Like Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Access to a trusted, well-established Ayurvedic hospital close to home reduces the burden of long travel for patients managing chronic conditions.</li>
                <li>For elderly patients or those with limited mobility, having a comprehensive facility within the region makes consistent follow-up care realistically achievable.</li>
                <li>A local hospital with decades of established trust also means patients are more likely to know someone in their community who has already experienced the care firsthand.</li>
                <li>Having in-house diagnostics, medicine preparation, and multiple therapy options under one roof reduces the need for patients to coordinate across several separate facilities.</li>
                <li>For a region like Bilari, where access to specialized city hospitals can mean significant travel time, Balprada's presence fills an important gap in accessible, trusted Ayurvedic care.</li>
              </ul>
            </div>


            {/* Section 11 — How Balprada Serves the Wider Bilari and Moradabad Region */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Balprada Serves the Wider Bilari and Moradabad Region
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients travel to the Bilari campus not only from Bilari town itself but also from surrounding rural areas within the district.</li>
                <li>The hospital's reputation, built over 35 years, has made it a recognized name for Ayurvedic treatment well beyond the immediate town.</li>
                <li>Word-of-mouth trust within families and communities in the region continues to bring new patients to the Bilari campus each year.</li>
                <li>The presence of a second branch in New Moradabad extends this accessibility further, giving patients across the wider district a choice of location.</li>
                <li>Both branches maintain the same standards of in-house medicine preparation and doctor-led consultation, ensuring consistency regardless of which location a patient chooses to visit.</li>
              </ul>
            </div>


            {/* Section 12 — Planning a First-Time Visit From Outside Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Planning a First-Time Visit From Outside Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients traveling from other towns or districts are encouraged to call or message ahead to confirm OPD timings and plan their journey accordingly.</li>
                <li>It helps to check whether your visit falls closer to the free OPD date on the 15th of the month, in case you wish to take advantage of it.</li>
                <li>If Panchakarma or a longer treatment course is being considered, ask about expected duration in advance so you can plan any necessary stay.</li>
                <li>First-time visitors are advised to arrive with all relevant medical history and reports ready, to make the most of the initial consultation.</li>
              </ul>
            </div>


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <ul className="text-black space-y-2 mb-6 list-disc pl-5">
                <li>Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Tehsil Bilari, District Moradabad.</li>
                <li>The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan.</li>
                <li>For patients traveling from outside Bilari, the hospital also assists with treatment planning to accommodate multi-day therapy schedules at the ashram campus.</li>
                <li>The free OPD consultation on the 15th of every month provides an accessible entry point for first-time visitors from the region.</li>
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