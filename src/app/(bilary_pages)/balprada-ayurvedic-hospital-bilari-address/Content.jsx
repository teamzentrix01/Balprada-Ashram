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
      q: "Where is Balprada Ayurvedic Hospital located in relation to Bilari?",
      a: "The hospital is situated within the Moradabad district, accessible via the main Bilari-Moradabad road.",
    },
    {
      q: "How can I find the exact address of the hospital?",
      a: "The verified address is available on the hospital's official website and Google Maps listing.",
    },
    {
      q: "Is the hospital reachable by public transport from Bilari?",
      a: "Yes, shared autos and buses operating on the Bilari-Moradabad route can be used to reach nearby drop points.",
    },
    {
      q: "Are there landmarks near the hospital to help with directions?",
      a: "Yes, calling the hospital in advance can provide the latest landmark-based directions for easier navigation.",
    },
    {
      q: "How much travel time should I plan from Bilari?",
      a: "Travel time is generally short, though early morning traffic may add a few extra minutes.",
    },
    {
      q: "Is parking available at the hospital for personal vehicles?",
      a: "Yes, parking arrangements are available for patients arriving by car or two-wheeler.",
    },
    {
      q: "Should I call the hospital before starting my journey?",
      a: "Yes, calling ahead helps confirm the address and get simple directions if you're unfamiliar with the route.",
    },
    {
      q: "Can I use navigation apps to reach the hospital?",
      a: "Yes, entering the hospital's official address into any navigation app provides turn-by-turn directions.",
    },
    {
      q: "Does the hospital serve patients from areas beyond Bilari?",
      a: "Yes, its central location within Moradabad district makes it accessible to surrounding villages and townships as well.",
    },
    {
      q: "What should I carry in case of network issues while navigating?",
      a: "Carrying a printed or saved digital copy of the address and a nearby landmark name is recommended.",
    },
    {
      q: "Is the route suitable for elderly or unwell patients?",
      a: "Yes, the road connectivity is generally smooth, making the journey manageable for elderly and chronically ill patients.",
    },
    {
      q: "Should returning patients re-check the address before each visit?",
      a: "It's a good practice, especially if a long time has passed since the last visit, to confirm any updates.",
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
                Balprada Ayurvedic Hospital Bilari Address – Complete Location Guide
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Knowing the exact address and how to reach Balprada Ayurvedic Hospital &amp; Research Center is one of the first steps for patients from Bilari planning their first visit.</li>
                <li>Whether traveling by personal vehicle, shared transport, or public transit, having clear address details, nearby landmarks, and route guidance ensures a smooth and stress-free journey to the hospital.</li>
              </ul>
            </div>


            {/* Section 2 — Why the Correct Address Matters for Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the Correct Address Matters for Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Many patients rely on online searches for hospital addresses, and incorrect listings can lead to confusion or delays.</li>
                <li>A verified address helps patients plan their travel time accurately, especially for early morning appointments.</li>
                <li>Families arranging transport for elderly or unwell patients need precise location details to avoid unnecessary detours.</li>
                <li>Clear address information builds trust, showing that the hospital is transparent and easy to locate.</li>
                <li>First-time visitors from Bilari often depend on landmark references rather than just the address line, making detailed location guidance essential.</li>
                <li>Accurate address details also help patients share the hospital's location with relatives or friends accompanying them.</li>
                <li>A correct address reduces the chances of patients arriving late and missing their scheduled consultation slot.</li>
              </ul>
            </div>


            {/* Section 3 — Balprada Ayurvedic Hospital's Location in Relation to Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada Ayurvedic Hospital's Location in Relation to Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The hospital is situated within the Moradabad district, at a convenient distance from Bilari town.</li>
                <li>Patients traveling from Bilari can reach the hospital through the main Moradabad-Bilari road connectivity.</li>
                <li>The route is commonly used by local transport, making it familiar to auto and taxi drivers in the area.</li>
                <li>The hospital's location places it within easy reach for patients from Bilari as well as surrounding villages and townships.</li>
                <li>Its position along a well-connected road makes it accessible without requiring multiple transport changes.</li>
                <li>The hospital's placement within the district also allows patients to combine their visit with other errands in Moradabad city if needed.</li>
                <li>Proximity to Bilari makes the hospital a practical option for patients who require repeated visits during a treatment course.</li>
              </ul>
            </div>


            {/* Section 4 — How to Reach the Hospital From Bilari by Road */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Reach the Hospital From Bilari by Road
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients driving from Bilari can follow the main road connecting to Moradabad city.</li>
                <li>The journey typically involves a straightforward route without complicated turns, making it manageable for first-time visitors.</li>
                <li>Google Maps and other navigation apps can be used by entering the hospital's official address for turn-by-turn directions.</li>
                <li>Local drivers familiar with the Bilari-Moradabad stretch can also guide patients verbally if navigation apps are not preferred.</li>
                <li>Patients unfamiliar with the route are encouraged to call the hospital in advance for landmark-based directions.</li>
                <li>Two-wheeler riders from Bilari often find the route manageable within a short travel window.</li>
                <li>Patients driving during early morning hours generally experience lighter traffic and a quicker journey.</li>
              </ul>
            </div>


            {/* Section 5 — Using Public Transport to Reach the Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Using Public Transport to Reach the Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Shared autos and local buses operating on the Bilari-Moradabad route are a common mode of transport for patients.</li>
                <li>Patients using public transport should ask local conductors or drivers about the nearest drop-off point to the hospital.</li>
                <li>After reaching the nearest stop, a short auto ride typically completes the journey to the hospital gate.</li>
                <li>Elderly patients using public transport are advised to travel with a family member for a more comfortable experience.</li>
                <li>Checking the schedule for return transport in advance helps patients plan their full day around the appointment.</li>
                <li>Patients relying on public transport are encouraged to start their journey earlier to accommodate waiting times between connections.</li>
                <li>Asking the hospital reception about the most common public transport routes used by other patients can also help first-time travelers.</li>
              </ul>
            </div>


            {/* Section 6 — Landmarks Near Balprada Ayurvedic Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Landmarks Near Balprada Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The hospital's location is often described in relation to well-known local landmarks for easier identification.</li>
                <li>Patients unfamiliar with exact address numbers often find it easier to navigate using nearby recognizable points.</li>
                <li>Asking locals for directions using landmark references is a common and effective method in this area.</li>
                <li>Prominent road junctions along the Bilari-Moradabad stretch serve as helpful reference points during the journey.</li>
                <li>Calling the hospital reception for the latest landmark-based directions is recommended for absolute clarity.</li>
                <li>Patients traveling at night or during foggy conditions especially benefit from landmark-based guidance, since street signage may be harder to spot.</li>
                <li>Local shopkeepers and transport drivers along the route are often familiar with the hospital and can offer quick directional help.</li>
              </ul>
            </div>


            {/* Section 7 — Address Verification Before Visiting */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Address Verification Before Visiting
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients are advised to always check the hospital's official website for the most updated address details.</li>
                <li>Cross-referencing the address with the hospital's Google My Business listing adds an extra layer of confirmation.</li>
                <li>Avoiding third-party or unofficial directories reduces the risk of relying on outdated or incorrect address information.</li>
                <li>Saving the verified address in a maps application in advance helps prevent last-minute confusion.</li>
                <li>Sharing the confirmed address within family or community groups helps other patients from Bilari plan their visits confidently.</li>
                <li>Patients are encouraged to re-verify the address if it has been some time since their last visit, in case of any updates.</li>
                <li>Keeping a screenshot of the verified address and map location can be useful in areas with weak network connectivity.</li>
              </ul>
            </div>


            {/* Section 8 — Planning Your Visit Around Travel Time From Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Planning Your Visit Around Travel Time From Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Estimating travel time in advance helps patients arrive comfortably before their scheduled consultation.</li>
                <li>Morning traffic along the Bilari-Moradabad road may add slightly to travel time compared to midday hours.</li>
                <li>Patients with early appointments are advised to start their journey with some buffer time.</li>
                <li>Families traveling with elderly or unwell patients should factor in additional time for comfortable, unhurried travel.</li>
                <li>Checking weather conditions before departure is useful during monsoon or foggy winter mornings, which can affect road visibility.</li>
                <li>Patients with multiple stops planned for the same day, such as diagnostic tests followed by consultation, should allow extra time accordingly.</li>
                <li>Building in a small time cushion helps reduce stress, especially for patients managing chronic conditions who prefer unhurried visits.</li>
              </ul>
            </div>


            {/* Section 9 — What to Expect Upon Arrival at the Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect Upon Arrival at the Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The hospital's entrance and reception area are designed to be easily identifiable upon arrival.</li>
                <li>Signage at the hospital premises helps first-time visitors locate the reception desk without difficulty.</li>
                <li>Parking arrangements are available for patients traveling by personal vehicle.</li>
                <li>Reception staff assist walk-in patients with registration and directing them to the appropriate department.</li>
                <li>Patients with prior phone appointments are guided quickly, reducing waiting time upon arrival.</li>
                <li>Waiting areas near the reception are designed to accommodate patients comfortably before their consultation.</li>
                <li>First-time visitors can ask reception staff for a brief orientation of the hospital layout if needed.</li>
              </ul>
            </div>


            {/* Section 10 — Tips for First-Time Visitors From Bilari */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for First-Time Visitors From Bilari
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Save the hospital's verified address and contact number together for quick reference.</li>
                <li>Call ahead if uncertain about the exact route, especially during early morning or late evening visits.</li>
                <li>Carry a printed or digital copy of the address in case of network issues with navigation apps.</li>
                <li>Ask local transport drivers if they are familiar with the hospital's location before starting the journey.</li>
                <li>Keep a nearby landmark name handy to communicate with drivers unfamiliar with exact street addresses.</li>
                <li>Plan for slightly extra travel time on the first visit, since familiarity with the route improves with repeated trips.</li>
                <li>Note down any specific instructions given by hospital staff during the confirmation call for a smoother arrival.</li>
              </ul>
            </div>


            {/* Section 11 — Why Bilari Patients Prefer This Hospital's Convenient Location */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Bilari Patients Prefer This Hospital's Convenient Location
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The hospital's proximity to Bilari makes it a practical choice for regular consultations and follow-up visits.</li>
                <li>Patients managing chronic conditions such as kidney or liver concerns benefit from a location that doesn't require long-distance travel.</li>
                <li>The straightforward road connectivity minimizes travel fatigue, especially for elderly patients.</li>
                <li>Families find it easier to coordinate visits without needing to navigate complex city routes.</li>
                <li>A well-connected location supports timely access to ayurvedic consultation, diagnostics, and therapy sessions.</li>
                <li>Patients undergoing longer treatment plans, such as panchakarma therapy, appreciate the reduced travel burden for repeated visits.</li>
                <li>The convenient distance also makes it practical for patients accompanying family members for joint consultations.</li>
              </ul>
            </div>


            {/* Section 12 — Nearby Areas Also Served by the Hospital's Location */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Nearby Areas Also Served by the Hospital's Location
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients from villages and townships surrounding Bilari also find the hospital's location convenient.</li>
                <li>The central positioning within the Moradabad district allows accessibility from multiple directions.</li>
                <li>Patients traveling from neighboring rural areas often combine their visit with other errands in Moradabad city.</li>
                <li>The hospital's location supports patients from a wider catchment area beyond Bilari alone.</li>
                <li>This central accessibility is one reason the hospital serves as a regional point for ayurvedic treatment seekers.</li>
                <li>Patients from smaller settlements near Bilari often travel together in shared transport to make the journey more convenient.</li>
                <li>The hospital's reach across multiple nearby areas reflects its role as a trusted regional ayurvedic care destination.</li>
              </ul>
            </div>


            {/* Section 13 — Common Mistakes to Avoid When Locating the Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Mistakes to Avoid When Locating the Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Relying solely on outdated address listings found on unofficial websites.</li>
                <li>Not confirming the address before starting the journey, leading to last-minute route changes.</li>
                <li>Ignoring landmark references and depending only on navigation apps, which can occasionally misguide first-time visitors.</li>
                <li>Starting the journey without accounting for peak traffic hours along the Bilari-Moradabad road.</li>
                <li>Forgetting to save the hospital's contact number alongside the address for quick assistance during the journey.</li>
                <li>Assuming all navigation apps display identical routes, when slight variations may exist depending on the app used.</li>
                <li>Not asking for updated directions if the address was saved a long time ago and roads or landmarks may have changed.</li>
              </ul>
            </div>


            {/* Section 14 — How Address Accuracy Supports a Stress-Free Hospital Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Address Accuracy Supports a Stress-Free Hospital Visit
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Confirmed address details reduce anxiety for patients already dealing with health concerns.</li>
                <li>Clear directions allow families to focus on the patient's comfort rather than navigation issues.</li>
                <li>Accurate location information supports better time management for both new and follow-up appointments.</li>
                <li>Patients arriving on time experience shorter waiting periods and smoother consultation scheduling.</li>
                <li>A well-understood route also makes return visits for ongoing treatment more convenient over time.</li>
                <li>Reduced travel uncertainty allows patients to arrive calmer, which can make the overall consultation experience smoother.</li>
                <li>Families who understand the route well are better able to support elderly or unwell patients throughout the journey.</li>
              </ul>
            </div>


            {/* Section 15 — Additional Guidance for Returning Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Additional Guidance for Returning Patients
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Returning patients are encouraged to keep the hospital's address saved for quick access during follow-up visits.</li>
                <li>Long-term patients managing chronic treatment plans often become familiar with the fastest route over time.</li>
                <li>Any changes in road conditions along the Bilari-Moradabad stretch can be confirmed with the hospital reception before travel.</li>
                <li>Patients switching transport modes between visits, such as from personal vehicle to public transport, can request fresh directions accordingly.</li>
                <li>Consistent use of the verified address helps avoid confusion even after multiple visits.</li>
              </ul>
            </div>


            {/* Section 16 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Plan Your Visit to Balprada
              </h2>


              <ul className="text-black space-y-2 mb-6 list-disc pl-5">
                <li>Patients planning their first visit to Balprada Ayurvedic Hospital &amp; Research Center can verify the address and get directions through the official website or by calling the hospital directly.</li>
                <li>The hospital's convenient location within Moradabad district makes it easily accessible for patients from Bilari and surrounding areas.</li>
                <li>For landmark-based directions or assistance with travel planning, patients are encouraged to contact the hospital reception before starting their journey.</li>
                <li>Parking is available for personal vehicles, and public transport options via the Bilari-Moradabad route provide convenient access for all patients.</li>
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
                    Get Directions
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