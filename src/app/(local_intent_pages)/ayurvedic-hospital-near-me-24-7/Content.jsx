import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalNearMe247() {
  const faqs = [
    {
      q: "Is Balprada open 24/7?",
      a: "No. The ashram and clinic are open seven days a week, with OPD from 10:00 AM to 2:00 PM.",
    },
    {
      q: "Is emergency care available?",
      a: "The website lists no emergency service. Go to urgent medical care first.",
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
      q: "What lab tests are available?",
      a: "The lab lists CBC, thyroid, liver, kidney, diabetes, lipid, urine, Vitamin B12 and D tests.",
    },
    {
      q: "Is stay available for patients?",
      a: "The website gives no stay terms, so please ask the team.",
    },
    {
      q: "What should I bring?",
      a: "Bring prescriptions, recent reports, current medicines and a symptom and diet note.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Searching for an Ayurvedic Hospital Near Me 24/7
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What the 24/7 Search Really Means
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  People searching for an Ayurvedic hospital near them 24/7
                  usually want to know when a doctor is available and how quickly
                  they can be seen.
                </li>
                <li>
                  Some are looking for emergency care, while others want a place
                  that is open every day for consultation and follow-up.
                </li>
                <li>
                  This guide explains clearly what Balprada offers, so you can
                  decide before you travel.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                The Honest Answer About Timings
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center states that its
                  ashram and clinic are open seven days a week.
                </li>
                <li>
                  OPD consultation timing is 10:00 AM to 2:00 PM, and the website
                  does not describe a round-the-clock service.
                </li>
                <li>
                  Balprada is not presented as a 24/7 emergency hospital, so
                  urgent cases should go to emergency medical care first.
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
                  The institution has grown from an Ayurvedic clinic into a wider
                  centre with an ashram, pharmacy, pathology lab, yoga and
                  naturopathy.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Ashram-Based Care Environment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Main Branch is an ashram and clinic in a calm village
                  setting, away from the noise of a busy city.
                </li>
                <li>
                  Disciplined routines, in-house herbal medicines and a
                  service-first culture are part of everyday care.
                </li>
                <li>
                  Google reviews on the website mention humble staff, genuine
                  herbal preparations and a serene healing atmosphere.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Availability at a Glance
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Open Seven Days a Week
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The ashram and clinic stay open throughout the week for guided
                  consultation and follow-up care.
                </li>
                <li>
                  This means patients are not limited to a single weekday, which
                  helps working people and families travelling from a distance.
                </li>
                <li>
                  Because the website&apos;s footer and branch hours are worded
                  differently, confirm the day&apos;s timing by phone before you
                  leave home.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Main Branch Timings
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Main Branch lists daily consultation from 10:00 AM to 2:00
                  PM.
                </li>
                <li>
                  Arrive well before the window closes so the doctor has enough
                  time to review your concern and reports.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Moradabad Branch Timings
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Vaidya ji is available at the Moradabad Branch on Sundays, and
                  the website asks patients to call before visiting.
                </li>
                <li>
                  Other days and timings at this branch should be confirmed on{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
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
                Locations of Balprada Branches
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Main Branch (Ashram and Clinic)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
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
                Moradabad Branch
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
                Choosing Between Branches
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask the team which branch suits your health concern and the day
                  you plan to visit.
                </li>
                <li>
                  Share the full address with your driver or map app, and confirm
                  the doctor&apos;s availability first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reaching the Team Outside OPD Hours
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Phone and WhatsApp
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  with the patient&apos;s name, concern and preferred branch, and
                  the team can guide you on the next step.
                </li>
                <li>
                  The website does not promise instant replies at all hours, so
                  allow time for a response.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Email and Online Form
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Write to{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  for longer medical histories or written questions.
                </li>
                <li>
                  Open the Book Appointment page, choose a Preferred Branch and
                  Health Concern, and press Submit Request at any hour you prefer.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Balprada Is Not
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Not an Emergency Service
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website does not list 24/7 emergency care, ambulance service
                  or an overnight helpline.
                </li>
                <li>
                  Chest pain, difficulty breathing, severe bleeding, loss of
                  consciousness and similar problems need urgent medical care
                  first.
                </li>
                <li>
                  Ayurvedic consultation can follow once the patient is stable and
                  the treating team agrees.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Not a Substitute for Prescribed Treatment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care here is supportive and individual, and results
                  vary from person to person.
                </li>
                <li>
                  Prescribed medicines should only be changed under the guidance
                  of your treating doctor.
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
                Facilities Available During OPD
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Therapies and Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma is planned for cleansing, balance and recovery after
                  an individual assessment, and coordinated with the wider
                  treatment plan.
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
                  The in-house lab offers blood and urine testing to help doctors
                  guide Ayurvedic care.
                </li>
                <li>
                  Listed tests include CBC, thyroid profile, liver function,
                  kidney function, diabetes profile with blood sugar and HbA1c,
                  lipid profile, urine routine, and Vitamin B12 and D.
                </li>
                <li>
                  The website gives no lab hours, so contact the laboratory to
                  confirm the test, preparation, price and reporting time.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Pharmacy and Herbal Products
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness prepares traditional Ayurvedic
                  medicines, and Balprada Enterprises offers herbal flours, tea,
                  spices, oils, avaleh and pickles.
                </li>
                <li>
                  Product questions can be shared through the contact form or
                  phone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Plan a Visit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Before You Leave
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call the branch to confirm the date, timing and doctor&apos;s
                  availability.
                </li>
                <li>
                  Keep prescriptions, recent reports and every current medicine
                  ready in one folder.
                </li>
                <li>
                  Write a short note on symptoms, how long they have lasted and
                  your diet routine.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                On the Day
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reach the clinic early in the 10:00 AM to 2:00 PM window,
                  especially if you are travelling from far.
                </li>
                <li>
                  Carry original reports along with a few photocopies, so nothing
                  is missed.
                </li>
                <li>
                  Bring a family member who knows the medical history,
                  particularly for elderly or seriously ill patients.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                After the Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the diet and routine guidance you received and note how
                  you feel each day.
                </li>
                <li>
                  Contact the team with questions, and share new test results at
                  your next review.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Your First Visit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews your concern, history, reports and current
                  medication before suggesting the next care step.
                </li>
                <li>
                  This is the right time to ask how often follow-up is needed.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Care is planned with Balprada&apos;s Ayurvedic medicines, diet
                  discipline and lifestyle correction where suitable.
                </li>
                <li>
                  Supportive facilities such as yoga, naturopathy and panchakarma
                  are used according to your assessment.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Follow-Up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up depends on the patient&apos;s condition and may
                  include review of reports, symptoms, food routine and medicine
                  response.
                </li>
                <li>
                  Regular follow-up helps the team observe progress and adjust
                  guidance over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stay and Admission Questions
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What the Website Says
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website mentions an ashram environment and residential
                  support initiatives under its social service work, but it gives
                  no admission or stay terms for patients.
                </li>
                <li>
                  The Panchakarma page does not describe any stay or accommodation
                  arrangement either.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What to Ask the Team
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask whether stay is possible for your treatment, and what the
                  arrangement would be.
                </li>
                <li>
                  Ask about nearby options if you are travelling from another
                  city.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Use and Responsible Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
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

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Emergencies and Warning Signs
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Go to the nearest emergency department for sudden or severe
                  symptoms, whatever the time of day.
                </li>
                <li>
                  Do not delay urgent care to wait for an Ayurvedic consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Families Searching Late at Night
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Using the Night Wisely
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  If you are researching at night, use the online form or send a
                  WhatsApp message with the patient&apos;s details, so the team
                  can see it when the clinic opens.
                </li>
                <li>
                  Write down symptoms, medicines and test dates while they are
                  fresh in your mind.
                </li>
                <li>
                  Do not wait for morning if the patient is in distress, and seek
                  emergency medical care at once.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Questions to Ask When You Call
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask which branch is open on the day you want to visit and
                  whether the doctor you wish to see is available.
                </li>
                <li>
                  Ask whether a free OPD day suits your plan, since it falls on
                  the 15th of every month.
                </li>
                <li>
                  Ask how long the consultation may take, so you can plan travel
                  and return.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Weekend and Sunday Visits
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Why Daily Opening Helps
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Seven-day opening helps patients who cannot take a weekday off
                  work or school.
                </li>
                <li>
                  Families from nearby villages and towns can choose a day that
                  suits the patient&apos;s health and travel.
                </li>
                <li>
                  Sunday vaidya availability at the Moradabad Branch gives city
                  patients another option.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Planning a Weekend Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Confirm availability by phone before you leave, especially for
                  the Moradabad Branch.
                </li>
                <li>
                  Keep reports and prescriptions ready, since the consultation
                  window is only four hours long.
                </li>
                <li>
                  Save both branch numbers in your phone, so you can reach the
                  right team quickly if your plans change on the way.
                </li>
                <li>
                  If you plan to use the free OPD on the 15th, expect a busier day
                  and arrive early in the window.
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
                  The OPD page lists timings, and the Contact page lists both
                  branches.
                </li>
                <li>
                  The Treatments page explains kidney, liver, cancer support,
                  heart, diabetes, thyroid and women&apos;s care.
                </li>
                <li>
                  The Pathology Lab, Facilities and Ashram pages show how care
                  comes together.
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