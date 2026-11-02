import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalNearMeWithFreeOPD() {
  const faqs = [
    {
      q: "Is consultation free at Balprada?",
      a: "Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Is it free on other days?",
      a: "The website states the free OPD only for the 15th, so please call to confirm other days.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and calling ahead is advised.",
    },
    {
      q: "Are medicines and tests free?",
      a: "The website lists no prices for them, so please ask the team.",
    },
    {
      q: "How do I book?",
      a: "Use the online Book Appointment form, WhatsApp 8126364606, or call a branch.",
    },
    {
      q: "Which branches can I visit?",
      a: "Choose the Main Branch in Bilari or the Moradabad Branch on Delhi Road.",
    },
    {
      q: "What should I bring?",
      a: "Bring prescriptions, recent reports, current medicines and a symptom and diet note.",
    },
    {
      q: "When is the vaidya at the Moradabad Branch?",
      a: "Vaidya ji is available on Sundays, so please call before visiting.",
    },
    {
      q: "Is pathology testing available?",
      a: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing.",
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
                Looking for an Ayurvedic Hospital with Free Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Patients Want to Know
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families searching for an Ayurvedic hospital near them with free
                  consultation usually want to know when it is free, who can use
                  it and how to book.
                </li>
                <li>
                  Many also want to understand what happens during the
                  consultation, and whether medicines and tests are included.
                </li>
                <li>
                  This guide answers those questions using only what
                  Balprada&apos;s website states, so you can plan with confidence.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                The Clear Answer on Free Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center offers free
                  OPD consultation on the 15th of every month.
                </li>
                <li>
                  On other days the clinic remains open for guided consultation
                  and follow-up care, but the website does not state that those
                  visits are free.
                </li>
                <li>
                  Please call before visiting to confirm how the free OPD works at
                  your chosen branch.
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
                  Ayurvedic care, disciplined routines and compassionate service.
                </li>
                <li>
                  The free OPD reflects this service-first approach, giving more
                  people a chance to meet the doctor.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Ashram-Based Care Environment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Main Branch is an ashram and clinic in a calm village
                  setting, open seven days a week.
                </li>
                <li>
                  In-house herbal medicines, experienced doctors and a peaceful
                  environment support long-term healing.
                </li>
                <li>
                  Google reviews on the website mention humble staff, genuine
                  herbal preparations and a serene atmosphere.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Free OPD on the 15th of Every Month
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What the Website Says
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available on the 15th of every month.
                </li>
                <li>Consultation timing is 10:00 AM to 2:00 PM.</li>
                <li>
                  Patients can connect by phone or WhatsApp before visiting.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Making the Most of the Free OPD Day
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reach early in the consultation window, because a free day may
                  bring more patients.
                </li>
                <li>
                  Keep your reports, prescriptions and medicine list ready so the
                  doctor can review them quickly.
                </li>
                <li>
                  Prepare a short note on symptoms, duration and diet, so the time
                  with the doctor is well used.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What to Confirm Before You Go
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask which branch will hold the free OPD and whether the vaidya
                  will be present.
                </li>
                <li>
                  Ask how the consultation flow works that day, since the website
                  advises calling ahead for branch-specific availability.
                </li>
                <li>
                  Ask whether any other charges apply, because the website does
                  not list prices for tests, medicines or therapies.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Free Consultation and Other Costs
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Is Free and What Is Not Stated
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website states that the OPD consultation is free on the 15th
                  of every month.
                </li>
                <li>
                  It does not list charges for medicines, pathology tests,
                  panchakarma or other therapies, and no figures are given here.
                </li>
                <li>
                  Ask the team about any costs before you begin, so there are no
                  surprises.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Questions About Cost
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The lab page asks patients to contact the laboratory to confirm
                  the test, preparation, price and reporting time.
                </li>
                <li>
                  For medicines and therapies, call the branch or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  and ask for an estimate.
                </li>
                <li>
                  Keep a written note of what you are told, so you can plan
                  follow-up visits.
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
                <li>Timing: open daily from 10:00 AM to 2:00 PM.</li>
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
                  Vaidya ji is available at this branch on Sundays, so please call
                  before visiting.
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
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns You Can Discuss
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
                What Happens During the Consultation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Understanding Your Concern
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews your concern, history, reports and current
                  medication before suggesting the next care step.
                </li>
                <li>
                  Food habits, sleep, stress and daily routine may also be
                  discussed, as they shape long-term health.
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
                  The plan is individual, so two patients with the same diagnosis
                  may receive different guidance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga, naturopathy, meditation, physiotherapy and panchakarma
                  support the care journey according to your assessment.
                </li>
                <li>
                  Balprada Pathology Lab offers blood and urine testing, with
                  listed tests such as CBC, thyroid, liver, kidney, diabetes,
                  lipid, urine and Vitamin B12 and D.
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
                How to Book Your Consultation
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
                What to Carry
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Medical Documents
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Previous prescriptions from any doctor you have consulted.
                </li>
                <li>
                  Recent reports, such as blood, urine or other diagnostic tests.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Medicines and Notes
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Every medicine you currently take, so the doctor sees your full
                  treatment.
                </li>
                <li>
                  A clear note of symptoms, how long they have lasted and your
                  diet routine.
                </li>
                <li>
                  A family member who knows the medical history, especially for
                  elderly patients.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Visit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Choosing the Day
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Pick the 15th if you want the free OPD, and a regular day if you
                  prefer a quieter visit.
                </li>
                <li>
                  Sunday vaidya availability applies to the Moradabad Branch, so
                  call before visiting.
                </li>
                <li>
                  Confirm the date, timing and doctor&apos;s availability by phone
                  before leaving home.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Travel and Stay
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Check the route and travel time yourself, because the website
                  gives no distances or transport details.
                </li>
                <li>
                  The website does not list accommodation or stay terms, so ask
                  the team if you are travelling from far.
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
                Tips for First-Time Patients
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Before the Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Read the Treatments page for your concern, so your questions to
                  the vaidya are clear.
                </li>
                <li>
                  Gather all reports in date order, with the newest on top.
                </li>
                <li>
                  Write down questions about food, routine and follow-up, so none
                  are forgotten.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                After the Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow the diet and routine guidance and note how you feel each
                  day.
                </li>
                <li>
                  Keep new reports and prescriptions together, so every review
                  builds on the last one.
                </li>
                <li>Contact the team with questions between visits.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Can Benefit from the Free OPD
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                First-Time Visitors
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients new to Ayurveda can meet the vaidya, ask basic
                  questions and understand how consultation works before
                  committing to a longer plan.
                </li>
                <li>
                  Bringing earlier reports helps the doctor see your history even
                  in a first meeting.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Patients With Long-Standing Concerns
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada supports chronic concerns through consultation,
                  Ayurvedic medicines, food discipline, supportive facilities and
                  follow-up.
                </li>
                <li>
                  Patients who have tried other routes can bring their
                  prescriptions and ask how Ayurvedic guidance may fit alongside
                  them.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Families Seeking Guidance
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Family members can attend together, so everyone hears the same
                  advice on food and routine.
                </li>
                <li>
                  Caregivers of elderly or seriously ill patients can use the
                  visit to ask practical questions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                About Your Concern
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask what the doctor understands from your history and reports,
                  and which points need more attention.
                </li>
                <li>
                  Ask how Ayurvedic guidance should fit with any medicines you
                  already take.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                About the Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask which food and lifestyle changes matter most at the start,
                  and how to make them gradually.
                </li>
                <li>
                  Ask how often follow-up is needed, and what you should bring
                  each time.
                </li>
                <li>
                  Ask which supportive facilities, such as yoga or naturopathy,
                  may suit you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Free OPD Day and Regular Days Compared
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                On the 15th of the Month
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available, with consultation timing
                  from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  The day may be busier, so arrive early and keep your documents
                  ready.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                On Other Days
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The ashram and clinic stay open throughout the week for guided
                  consultation and follow-up care.
                </li>
                <li>
                  The website does not state that these consultations are free, so
                  confirm any charges by phone.
                </li>
                <li>
                  Sunday vaidya availability applies to the Moradabad Branch, and
                  calling ahead is advised.
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
                  The OPD page lists timings and branch details, and the Contact
                  page lists both branches.
                </li>
                <li>
                  The FAQ page answers questions on reports, follow-up, pathology
                  and product inquiries.
                </li>
                <li>
                  The Treatments, Facilities, Pathology Lab and Ashram pages show
                  how care comes together.
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