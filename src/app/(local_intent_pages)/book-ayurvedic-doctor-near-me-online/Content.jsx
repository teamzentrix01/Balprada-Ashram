import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BookAyurvedicDoctorNearMeOnline() {
  const faqs = [
    {
      q: "Can I book an Ayurvedic doctor online at Balprada?",
      a: "Yes. Use the Book Appointment form, or contact the team by phone, WhatsApp or email.",
    },
    {
      q: "Which details does the form ask for?",
      a: "Patient details, a preferred branch and a health concern.",
    },
    {
      q: "Which branches can I choose?",
      a: "The Main Branch in Bilari or the Moradabad Branch on Delhi Road.",
    },
    {
      q: "How soon will I get a confirmation?",
      a: "The website gives no confirmation time, so follow up by phone or WhatsApp.",
    },
    {
      q: "Can I choose my doctor?",
      a: "You can ask when booking, and the team will guide you on availability.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Can I reschedule or cancel online?",
      a: "The website does not say. Please ask the team.",
    },
    {
      q: "Is online booking for emergencies?",
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
                Book Ayurvedic Doctor Near Me Online: A Step-by-Step Guide to
                Booking at Balprada
              </h1>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking an Ayurvedic Doctor Online
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Booking Online Means at Balprada
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center lets you send
                  an appointment request through the Book Appointment page on its
                  website.
                </li>
                <li>
                  You share the patient&apos;s details, a preferred branch and a
                  health concern, and the team can then guide you on consultation
                  timing and the next step.
                </li>
                <li>
                  The website describes this as a request, so treat it as the
                  first step and confirm the final date and time with the team.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Before You Start
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Keep the patient&apos;s name, age and contact number ready, so
                  the form takes only a few minutes.
                </li>
                <li>
                  Decide which branch is easier for you to reach, and which health
                  concern is the main reason for the visit.
                </li>
                <li>
                  Keep your phone nearby, because the team may contact you to
                  guide you on timing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: The Online Request Form
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Step One: Open the Booking Page
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Go to balpradaindia.com and select Book Appointment from the
                  menu, or open the Book Appointment page directly.
                </li>
                <li>
                  The page is titled Plan your visit with Balprada and shows an
                  Appointment Request form.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step Two: Enter the Patient Details
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fill in the patient&apos;s details as the form asks, using the
                  name of the person who will be seen by the doctor.
                </li>
                <li>
                  Use a phone number that is active, so the team can reach you.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step Three: Choose the Preferred Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The form offers two options: Main Branch and Moradabad Branch.
                </li>
                <li>
                  Choose the Main Branch for the ashram and clinic at Bilari, or
                  the Moradabad Branch in New Moradabad.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step Four: Select the Health Concern
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The form lists Kidney Care, Liver Care, Cancer Support, Heart
                  Care, Diabetes &amp; Thyroid Care, Women&apos;s Health and
                  Other.
                </li>
                <li>
                  Pick the closest match, or choose Other and describe your
                  concern when the team contacts you.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step Five: Submit the Request
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Press Submit Request to send your details to the team.</li>
                <li>
                  Keep a screenshot or note of the date and time you submitted, in
                  case you need to follow up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens After You Submit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What the Website States
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website says the team can guide you with consultation timing
                  and the next step.
                </li>
                <li>
                  It also lists WhatsApp, phone and email contacts, so you can
                  reach the team directly at any point.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What the Website Does Not State
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website gives no fixed confirmation time, no confirmation
                  method and no response time.
                </li>
                <li>
                  It does not describe rescheduling, cancellation or payment steps
                  for online requests.
                </li>
                <li>
                  Ask the team about these when they contact you, so you know what
                  to expect.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking by WhatsApp
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Why Use WhatsApp
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Appointments are available through WhatsApp on{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  , which suits people who prefer a quick message.
                </li>
                <li>
                  It also lets you send a short message and continue with your day
                  while you wait for a reply.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What to Include in Your Message
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The patient&apos;s name and age, and who is writing on their
                  behalf.
                </li>
                <li>The main health concern in one or two lines.</li>
                <li>The preferred branch and the day you hope to visit.</li>
                <li>
                  Whether you are travelling from another city, so the team
                  understands your situation.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                A Simple Message You Can Adapt
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Write something like: I would like to book an OPD consultation.
                  Patient name and age, main concern, preferred branch and
                  preferred day.
                </li>
                <li>
                  Add that you will carry your reports and prescriptions to the
                  visit.
                </li>
                <li>
                  Allow time for a reply, since the website does not promise
                  instant responses.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking by Phone or Email
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Calling the Branch
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  for the Main Branch or{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  for the Moradabad Branch.
                </li>
                <li>
                  Calling is best when you want to confirm the doctor&apos;s
                  availability, ask about the day or clear a doubt right away.
                </li>
                <li>
                  Call during consultation hours of 10:00 AM to 2:00 PM, since
                  those are the hours the website lists.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Writing an Email
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
                  when you want to describe a longer medical history in writing.
                </li>
                <li>
                  Include the patient&apos;s name, concern, preferred branch and a
                  phone number.
                </li>
                <li>
                  Email suits families who want a written record of their request.
                </li>
              </ul>
            </section>

            
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Branch When You Book
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
                <li>Vaidya ji is available on Sundays, so call before visiting.</li>
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
                Not Sure Which to Pick
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Send a WhatsApp message with your concern and your preferred
                  day, and let the team suggest the right branch.
                </li>
                <li>
                  The website gives no distances or travel times, so consider how
                  far you can comfortably travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking for the Free OPD Day
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What the Website Says
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  The website asks patients to call before visiting to confirm
                  branch-specific availability.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Tips for That Day
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Submit your request or message early, so the team can guide you
                  on how the day works.
                </li>
                <li>
                  Reach early in the consultation window, because a free day may
                  bring more patients.
                </li>
                <li>
                  Keep your reports and prescriptions ready, so the doctor can
                  review them quickly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking for a Family Member
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Booking for Elderly Parents
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Enter the patient&apos;s own name and details, and add your
                  contact number as the person to reach.
                </li>
                <li>
                  Mention any mobility needs when you speak to the team, and ask
                  what to expect on arrival.
                </li>
                <li>
                  Plan for a family member to accompany the patient and carry the
                  medical papers.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Booking for a Child or Another Adult
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Share the age and concern clearly, and say who will attend.
                </li>
                <li>
                  Ask whether any special arrangements are needed, since the
                  website does not describe them.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns You Can Select
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Care Areas on the Website
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney and urinary care, covering kidney function, swelling,
                  stones and diabetes-linked kidney concerns.
                </li>
                <li>
                  Liver and digestive care, covering fatty liver, jaundice and
                  weak digestion.
                </li>
                <li>
                  Cancer supportive care, offered as complementary support
                  alongside your oncologist&apos;s treatment.
                </li>
                <li>
                  Heart and lifestyle care, diabetes and thyroid care, and
                  women&apos;s wellness.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                If Your Concern Is Not Listed
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Choose Other and describe your concern when the team contacts
                  you.
                </li>
                <li>
                  Ask whether the doctor can assess your concern before you plan
                  travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Carry to Your Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Medical Documents
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
                  A short note on symptoms, how long they have lasted and your
                  diet routine.
                </li>
                <li>
                  A family member who knows the medical history, especially for
                  elderly or seriously ill patients.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If You Do Not Hear Back
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Following Up Politely
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Wait a reasonable time, since the website promises no fixed
                  response time.
                </li>
                <li>
                  Then send a WhatsApp message or call the branch you chose, and
                  mention the date you submitted your request.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Keeping a Record
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Note the date, branch and concern you submitted, so the team can
                  find your request easily.
                </li>
                <li>
                  Keep the phone number you used active until your appointment is
                  confirmed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask When the Team Contacts You
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                About the Appointment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask for the exact date, time and branch, and write them down.
                </li>
                <li>
                  Ask which doctor you will see and how long the consultation may
                  take.
                </li>
                <li>
                  Ask whether any charges apply, because the website lists no
                  prices.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                About the Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask what to bring and whether any tests may be advised on the
                  day.
                </li>
                <li>
                  Ask how follow-up works, since the website says it depends on
                  the patient&apos;s condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities You May Be Offered After Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Therapies and Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma is planned for cleansing, balance and recovery only
                  after an individual assessment.
                </li>
                <li>
                  Yoga, naturopathy, meditation and physiotherapy support the care
                  plan according to your assessment.
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
                Planning the Trip After Booking
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Before You Leave
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Confirm the date, branch and doctor&apos;s availability by phone
                  or WhatsApp.
                </li>
                <li>
                  Save both branch numbers in your phone, so you can reach the
                  right team if your plans change.
                </li>
                <li>
                  Share the full branch address with your driver or booking app.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Travel and Stay
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website gives no distances, travel times or transport
                  details, so check the route yourself.
                </li>
                <li>
                  It lists no accommodation, so ask the team about stay options if
                  you are travelling from far.
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
                  Online booking is not for emergencies, so go to urgent medical
                  care first when someone is seriously unwell.
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
                  The Book Appointment page hosts the form, and the OPD page lists
                  timings and branch details.
                </li>
                <li>
                  The Team page introduces the doctors, and the Treatments page
                  explains each care area.
                </li>
                <li>
                  The FAQ, Facilities and Pathology Lab pages show how care comes
                  together.
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