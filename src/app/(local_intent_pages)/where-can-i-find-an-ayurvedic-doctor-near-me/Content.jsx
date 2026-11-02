import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function WhereToFindAyurvedicDoctorNearMe() {
  const faqs = [
    {
      q: "Where can I find Balprada?",
      a: "Balprada has a Main Branch in Bilari and a Moradabad Branch, both in Uttar Pradesh.",
    },
    {
      q: "Does Balprada have branches in other cities?",
      a: "The website lists only the two branches in the Moradabad region.",
    },
    {
      q: "How do I reach the Main Branch?",
      a: "Use the full address with your map app, and call 8126364606 if you need directions.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and calling ahead is advised.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "When is the vaidya at the Moradabad Branch?",
      a: "Vaidya ji is available on Sundays, so please call before visiting.",
    },
    {
      q: "How do I book?",
      a: "Use the online Book Appointment form, WhatsApp 8126364606, or call a branch.",
    },
    {
      q: "What should I bring?",
      a: "Bring prescriptions, recent reports, current medicines and a symptom and diet note.",
    },
    {
      q: "Is Balprada suitable for emergencies?",
      a: "No. In an emergency, go to urgent medical care first.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Where Can I Find an Ayurvedic Doctor Near Me? Search Tips and
                Balprada Locations
              </h1>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Finding an Ayurvedic Doctor Near You
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Start With What You Need
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Before you search, decide whether you want a consultation for a
                  long-standing concern, a second opinion or supportive care
                  alongside current treatment.
                </li>
                <li>
                  Note your main health concern, because clinics often describe
                  their work by condition, such as kidney, liver, diabetes or
                  women&apos;s health.
                </li>
                <li>
                  Decide how far you are willing to travel, since some Ayurvedic
                  centres are in ashram or village settings away from city
                  centres.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Where People Usually Look
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many people begin with an online search or a map search for
                  Ayurvedic doctors in their area.
                </li>
                <li>
                  Others ask family, friends or their regular doctor for a
                  recommendation.
                </li>
                <li>
                  A good search ends with a phone call or message, because only
                  the clinic can confirm timings and availability.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Ways to Find an Ayurvedic Doctor
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Online Search and Maps
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Search for the treatment you need together with your city or
                  town, and compare the clinics that appear.
                </li>
                <li>
                  Open each clinic&apos;s own website, if it has one, and look for
                  addresses, timings, doctor names and contact numbers.
                </li>
                <li>
                  Treat star ratings and snippets as one input, and read what the
                  clinic says about its own approach.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Recommendations From People You Trust
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask family members who have visited an Ayurvedic doctor what the
                  consultation was like and how follow-up worked.
                </li>
                <li>
                  Ask your regular doctor whether they are comfortable with you
                  consulting an Ayurvedic doctor alongside current treatment.
                </li>
                <li>Remember that one person&apos;s experience does not predict yours.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Checking Details Before You Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Confirm the address, consultation timings and the days the
                  doctor is available.
                </li>
                <li>
                  Ask about the doctor&apos;s experience and registration, because
                  a responsible clinic will answer clearly.
                </li>
                <li>
                  Ask what to bring, and whether any consultation charges apply.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where Balprada Fits In
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Where Balprada Is Located
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has two
                  branches in the Moradabad region of Uttar Pradesh.
                </li>
                <li>
                  The Main Branch is an ashram and clinic in Village Bhidwari,
                  Tehsil Bilari, and the second branch is in New Moradabad.
                </li>
                <li>
                  The website lists no branches in other cities, so patients from
                  elsewhere should plan a visit in advance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                If Balprada Is Not Near You
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  If you live far from Moradabad, a local Ayurvedic doctor may be
                  more practical for regular follow-up.
                </li>
                <li>
                  You can still use the questions in this guide to compare any
                  clinic you are considering.
                </li>
                <li>
                  Contact Balprada by phone or WhatsApp if you wish to discuss
                  whether a visit makes sense for your concern.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Finding the Main Branch (Ashram and Clinic)
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Address and Contact
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  Timing: open daily from 10:00 AM to 2:00 PM, with the ashram and
                  clinic running seven days a week.
                </li>
                <li>
                  Contact: call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  , or write to{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Tips for Finding It
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Share the full postal address, including Village Bhidwari, P.O.
                  Guarau and Tehsil Bilari, with your driver or map app.
                </li>
                <li>
                  The website gives no landmarks, distances or travel times, so
                  call the branch for directions if your map app is unsure.
                </li>
                <li>
                  Reach in time for the 10:00 AM to 2:00 PM consultation window.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Finding the Moradabad Branch
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Address and Contact
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                  Uttar Pradesh 244001.
                </li>
                <li>
                  Contact:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Tips for Finding It
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Delhi Road here is a road in Moradabad, so make sure your map
                  search uses the full address.
                </li>
                <li>
                  Vaidya ji is available at this branch on Sundays, and the
                  website asks patients to call before visiting.
                </li>
                <li>
                  The website gives no landmarks or distances for this branch
                  either, so confirm directions by phone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing Between the Two Branches
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                The Main Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Choose it if you want the ashram setting and daily consultation
                  between 10:00 AM and 2:00 PM.
                </li>
                <li>
                  It suits patients who can travel to a village location and plan
                  the visit in advance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                The Moradabad Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Choose it if you live in or near the city and can plan around
                  Sunday vaidya availability.
                </li>
                <li>
                  Always call before visiting, since availability is
                  branch-specific.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Not Sure Which to Pick
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Send a WhatsApp message to{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  with your concern and let the team guide you.
                </li>
                <li>
                  Mention your preferred day, so they can suggest the right
                  branch.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital &amp; Research Center
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                A Legacy of Seva Since 1991
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji,
                  and its work is built on the spirit of seva, or selfless
                  service.
                </li>
                <li>
                  The website describes about 35 years of experience in natural
                  Ayurvedic care and compassionate service.
                </li>
                <li>
                  The institution grew from an Ayurvedic clinic into a wider
                  centre with an ashram, pharmacy, pathology lab, yoga and
                  naturopathy.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What Patients Say
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website shows Google reviews that mention knowledgeable
                  vaidyas, authentic herbal preparations and a serene healing
                  atmosphere.
                </li>
                <li>
                  Reviewers also describe the staff as humble, kind and welcoming.
                </li>
                <li>
                  These are individual opinions, so read them as one input and not
                  as a guarantee.
                </li>
              </ul>
            </section>

            
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Balprada Supports
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Kidney and Urinary Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic consultation and lifestyle care for kidney function,
                  swelling, stones and diabetes-linked kidney concerns.
                </li>
                <li>
                  Dedicated pages cover kidney failure, kidney stones and
                  swelling.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Liver and Digestive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Medicine, diet and routine-based care for fatty liver, jaundice
                  and weak digestion.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Cancer Supportive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sensitive, complementary support for strength, diet, energy and
                  emotional balance during serious illness.
                </li>
                <li>
                  It is meant to work alongside the treatment advised by your
                  oncologist.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Heart and Lifestyle Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Integrated Ayurvedic and lifestyle care for blood pressure,
                  diabetes, weight and stress concerns.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Diabetes and Thyroid Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Personalised support for blood sugar, thyroid function, energy,
                  weight and metabolic balance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Women&apos;s Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Private and sensitive care for hormonal balance, menstrual
                  health and weakness.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Timings and Free OPD
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Consultation Timings
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Consultation runs from 10:00 AM to 2:00 PM, and calling ahead is
                  advised for branch-specific availability.
                </li>
                <li>
                  The ashram and clinic stay open throughout the week for guided
                  consultation and follow-up care.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Free OPD on the 15th of Every Month
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Call ahead to confirm branch availability and how the
                  consultation flow works that day.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Therapies and Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma is planned for cleansing, balance and recovery after
                  an individual assessment.
                </li>
                <li>
                  Yoga, naturopathy and meditation support balance across body,
                  mind and breath.
                </li>
                <li>
                  Physiotherapy supports safe movement, mobility and strength
                  within the care plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Balprada Pathology Lab
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The in-house lab offers blood and urine testing, with listed
                  tests such as CBC, thyroid, liver, kidney, diabetes, lipid,
                  urine and Vitamin B12 and D.
                </li>
                <li>
                  The website gives no lab hours or prices, so contact the
                  laboratory to confirm the test, preparation, price and reporting
                  time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book a Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Online Appointment Request
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Open the Book Appointment page on balpradaindia.com and enter
                  the patient&apos;s details.
                </li>
                <li>
                  Choose a Preferred Branch, either the Main Branch or the
                  Moradabad Branch.
                </li>
                <li>
                  Select your Health Concern and press Submit Request so the team
                  can guide you on timing and the next step.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Phone, WhatsApp and Email
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  with the patient&apos;s name, concern and preferred branch.
                </li>
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  for the Main Branch or{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  for the Moradabad Branch to confirm availability.
                </li>
                <li>
                  Email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  for longer medical histories or written questions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before You Go
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What to Carry
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Previous prescriptions from every doctor you have consulted.
                </li>
                <li>
                  Recent reports, such as blood, urine or other diagnostic tests,
                  in date order.
                </li>
                <li>
                  Every medicine you currently take, with doses as prescribed.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                A Short Health Summary
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Write a short note on symptoms, how long they have lasted and
                  any earlier treatment.
                </li>
                <li>
                  Add your usual diet, sleep and activity routine, because the
                  doctor may ask about them.
                </li>
                <li>
                  Bring a family member who knows the medical history, especially
                  for elderly or seriously ill patients.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Planning the Trip
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Confirm the date, branch and doctor&apos;s availability by phone
                  before you leave home.
                </li>
                <li>
                  The website lists no accommodation, so ask the team about stay
                  options if you are travelling from far.
                </li>
                <li>
                  Save both branch numbers in your phone, so you can reach the
                  right team if your plans change.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Review
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews your concern, history, reports and current
                  medication before suggesting the next care step.
                </li>
                <li>
                  Food habits, sleep, stress and daily routine may also be
                  discussed.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Plan and Follow-Up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Care is planned with Balprada&apos;s Ayurvedic medicines, diet
                  discipline and lifestyle correction where suitable.
                </li>
                <li>
                  Follow-up depends on the patient&apos;s condition and may
                  include review of reports, symptoms, food routine and medicine
                  response.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Use and Responsible Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Medicines and Emergencies
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Prescribed medicines should only be changed under the guidance
                  of your treating doctor.
                </li>
                <li>
                  Emergency cases should receive urgent medical care first, and
                  Ayurvedic consultation can follow once the patient is stable.
                </li>
                <li>
                  Ayurvedic care here is supportive and individual, and results
                  vary from person to person, so no outcome is promised.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Sharing Your Full Health Picture
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Tell your Ayurvedic doctor about every medicine, supplement and
                  herbal product you use.
                </li>
                <li>
                  Inform your regular doctor about the Ayurvedic guidance you
                  follow, so care stays coordinated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Related Pages on balpradaindia.com
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Where to Read More
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Contact page lists both branches, and the OPD page lists
                  timings.
                </li>
                <li>
                  The Team page introduces the doctors, and the Treatments page
                  explains each care area.
                </li>
                <li>
                  The FAQ, Facilities, Pathology Lab and Ashram pages show how
                  care comes together.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Request Your Appointment
              </h2>

              <h3 className="mb-3 font-serif text-2xl">Ready to Book</h3>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Open the Book Appointment page, choose your branch and concern,
                  and press Submit Request.
                </li>
                <li>
                  Prefer to talk first? Message{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  on WhatsApp or call the branch you plan to visit.
                </li>
                <li>
                  Remember the free OPD on the 15th of every month when choosing
                  your date.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}