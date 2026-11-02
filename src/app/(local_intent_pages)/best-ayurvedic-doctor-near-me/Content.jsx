import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BestAyurvedicDoctorNearMe() {
  const faqs = [
    {
      q: "Is Balprada the best Ayurvedic doctor near me?",
      a: "Balprada does not claim to be the best. Use the checklist above to judge whether it suits you.",
    },
    
    {
      q: "How much experience does Balprada have?",
      a: "It was founded in 1991 and describes about 35 years of experience.",
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
      q: "How do I book?",
      a: "Use the online Book Appointment form, WhatsApp 8126364606, or call a branch.",
    },
    {
      q: "What should I bring?",
      a: "Bring prescriptions, recent reports, current medicines and a symptom and diet note.",
    },
    {
      q: "Can I continue my current medicines?",
      a: "Prescribed medicines should only be changed under your treating doctor’s guidance.",
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
                Best Ayurvedic Doctor Near Me: How to Choose and What Balprada
                Offers
              </h1>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Searching for the Best Ayurvedic Doctor
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What &quot;Best&quot; Really Means
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The best Ayurvedic doctor for one patient may not be the right
                  match for another, because it depends on the health concern, the
                  doctor&apos;s experience and how well the care suits your
                  routine.
                </li>
                <li>
                  No website can honestly name one doctor as the best for
                  everyone, and Balprada&apos;s website does not make that claim.
                </li>
                <li>
                  A better approach is to compare doctors on points you can check
                  yourself, such as experience, assessment, honesty, follow-up and
                  ease of access.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                How This Guide Helps
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  This page gives a simple checklist for choosing an Ayurvedic
                  doctor, then shows what Balprada&apos;s website states against
                  each point.
                </li>
                <li>
                  Everything about Balprada comes from details published on its
                  website, and anything the site does not state is marked clearly.
                </li>
                <li>
                  You can use the same checklist to compare any other clinic you
                  are considering.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Checklist for Choosing an Ayurvedic Doctor
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Experience and Background
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Look for clear information about the doctor&apos;s years of
                  practice and areas of consultation.
                </li>
                <li>
                  Check whether the institution has a long track record, and
                  whether its history is easy to find.
                </li>
                <li>
                  Ask about qualifications directly if they are not published,
                  because a responsible clinic will answer.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                A Full Assessment Before Advice
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A good doctor asks about your symptoms, history, current
                  treatment, food habits, sleep, stress and routine before
                  suggesting anything.
                </li>
                <li>
                  Reports and test results should be reviewed where relevant, not
                  ignored.
                </li>
                <li>
                  Be cautious about any clinic that gives a plan without asking
                  questions.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Honest and Careful Claims
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A responsible doctor does not promise a guaranteed cure,
                  particularly for serious or chronic illness.
                </li>
                <li>
                  You should never be told to stop prescribed medicines on your
                  own.
                </li>
                <li>Emergencies should be sent to urgent medical care first.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Follow-Up and Coordination
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Good care includes regular review, so guidance can change as
                  your condition changes.
                </li>
                <li>
                  The doctor should be comfortable with you sharing the plan with
                  your regular doctor.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Easy Access
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Timings, addresses, phone numbers and booking steps should be
                  clear and consistent.
                </li>
                <li>
                  You should know when the doctor is available before you travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Measures Against the Checklist
              </h2>


              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Assessment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews your concern, history, reports and current
                  medication before suggesting the next care step.
                </li>
                <li>
                  For conditions such as diabetes, the site lists symptoms,
                  medical history, current treatment, food habits, sleep, stress
                  and daily routine as part of the assessment.
                </li>
                <li>Diagnostic reports may be reviewed where relevant.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Responsible Language
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website states that prescribed medicines should only be
                  changed under the guidance of the treating doctor.
                </li>
                <li>
                  Cancer care is presented as supportive and complementary, and
                  emergencies are directed to urgent medical care first.
                </li>
                <li>
                  Care is described as individual, and no guaranteed outcome is
                  promised.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Follow-Up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The FAQ page says follow-up depends on the patient&apos;s
                  condition and may include review of reports, symptoms, food
                  routine and medicine response.
                </li>
                <li>
                  Regular follow-up helps the team observe progress and adjust
                  guidance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Access
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Both branches publish their addresses, phone numbers and
                  timings, and appointments are available through the online form,
                  WhatsApp, phone and email.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
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
                  The institution grew from an Ayurvedic clinic into a wider
                  centre with an ashram, pharmacy, pathology lab, yoga and
                  naturopathy.
                </li>
                <li>
                  Its stated mission is reliable Ayurvedic care for chronic and
                  serious conditions, delivered with compassion.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Patient Reviews on the Website
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
                  These are individual opinions chosen for display, so read them
                  as one input and not as a guarantee.
                </li>
              </ul>
            </section>



            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Branches and Timings
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
                Moradabad Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                  Uttar Pradesh 244001.
                </li>
                <li>
                  Vaidya ji is available on Sundays, and the website asks patients
                  to call before visiting.
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
                Health Concerns You Can Consult About
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
                <li>
                  Separate pages explain hypothyroidism and hyperthyroidism.
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
                Supportive Facilities Alongside Consultation
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
                  The in-house lab offers blood and urine testing to help doctors
                  guide Ayurvedic care.
                </li>
                <li>
                  Listed tests include CBC, thyroid profile, liver function,
                  kidney function, diabetes profile with blood sugar and HbA1c,
                  lipid profile, urine routine, and Vitamin B12 and D.
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

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Asking for a Particular Doctor
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Mention the doctor you wish to consult when you call or message.
                </li>
                <li>
                  The website does not guarantee a named doctor on a given day, so
                  confirm before you travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Documents to Carry
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
                A Clear Health Summary
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
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Any Ayurvedic Doctor
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                About Experience and Approach
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask how long the doctor has treated concerns like yours and what
                  the approach involves.
                </li>
                <li>
                  Ask which parts of the plan are medicines, which are diet and
                  which are lifestyle changes.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                About Safety and Follow-Up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask how the plan fits with the medicines you already take.
                </li>
                <li>
                  Ask how often follow-up is needed and what you should bring each
                  time.
                </li>
                <li>
                  Ask what signs mean you should seek urgent medical care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs to Watch For
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Claims That Should Make You Careful
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Be careful of any promise of a guaranteed or quick cure,
                  particularly for serious illness.
                </li>
                <li>
                  Be careful of advice to stop prescribed medicines without your
                  treating doctor&apos;s guidance.
                </li>
                <li>
                  Be careful of a plan offered without any questions about your
                  history or reports.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What Responsible Care Looks Like
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Care is individual, explained clearly and reviewed at regular
                  follow-up.
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
                  The Team page introduces the doctors, and the OPD page lists
                  timings and branch details.
                </li>
                <li>
                  The Treatments page explains kidney, liver, cancer support,
                  heart, diabetes, thyroid and women&apos;s care.
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