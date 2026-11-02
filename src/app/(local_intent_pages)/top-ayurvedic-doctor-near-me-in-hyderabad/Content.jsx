import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function TopAyurvedicDoctorForHyderabadPatients() {
  const faqs = [
    {
      q: "Does Balprada have a branch in Hyderabad?",
      a: "No, Balprada has two branches in Moradabad district, Uttar Pradesh, the Main Branch in Bilari and the Moradabad Branch in Sector-13.",
    },
    {
      q: "Can I consult a Balprada doctor online from Hyderabad?",
      a: "Online consultation is not listed on the website, so please call 8126364606 and ask before planning anything.",
    },
    {
      q: "Which health problems does Balprada treat?",
      a: "Balprada offers Ayurvedic care for kidney, liver, cancer support, heart, diabetes, thyroid and womens health concerns.",
    },
    {
      q: "What are the OPD timings?",
      a: "The Main Branch is open daily from 10:00 AM to 2:00 PM, and free OPD is available on the 15th of every month.",
    },
    {
      q: "What should I carry for the first visit?",
      a: "Carry old prescriptions, recent reports, current medicines and a short note of symptoms and diet.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call or WhatsApp 8126364606, or use the appointment page on the Balprada website.",
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
                Top Ayurvedic Doctor for Hyderabad Patients at Balprada
                Moradabad
              </h1>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Please Read First: Where Balprada Is Located
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center is located in
                  Moradabad district, Uttar Pradesh, and it does not have a branch
                  in Hyderabad, so patients from Hyderabad must plan a visit to
                  Moradabad for an in-person consultation.
                </li>
                <li>
                  The hospital has two branches, the Main Branch in Village
                  Bhidwari, Tehsil Bilari, and the Moradabad Branch in Sector-13,
                  New Moradabad on Delhi Road, and both are described in detail
                  later on this page.
                </li>
                <li>
                  Online consultation is not listed on the website at present, so
                  families in Hyderabad should call or message on WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  before travelling to confirm the doctor, the day and the
                  documents to bring.
                </li>
                <li>
                  This page is written for Hyderabad families who are searching
                  for a trusted Ayurvedic doctor and are ready to travel for
                  careful, long-term care, especially for kidney, liver, diabetes
                  and other chronic problems.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Top Ayurvedic Doctor Should Offer a Patient
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A good Ayurvedic doctor should listen to the full history of the
                  illness, check old reports and current medicines, and never
                  promise a quick cure for a serious or long-standing condition.
                </li>
                <li>
                  The doctor should explain the diagnosis and care plan in simple
                  language, so that the patient and family understand the
                  medicines, the diet, the daily routine and the expected
                  follow-up.
                </li>
                <li>
                  Safe practice means working along with the specialist doctors a
                  patient already sees, and never asking anyone to stop dialysis,
                  insulin, blood pressure medicines or other essential treatment
                  without advice from the treating doctor.
                </li>
                <li>
                  Medicines should be prepared with care and quality, and the
                  patient should know what they are taking, how long to take it
                  and what warning signs need urgent hospital attention.
                </li>
                <li>
                  Regular follow-up matters as much as the first visit, because
                  the doctor needs to review reports and symptoms and adjust
                  guidance as the condition changes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital and Research Center
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada was started in 1991 by Sw. Vaidya Vijay Pal Singh Ji
                  with a vision of Ayurvedic healing and social service, and the
                  hospital now carries about 35 years of experience in natural
                  Ayurvedic care.
                </li>
                <li>
                  The institution brings together an Ayurvedic clinic, in-house
                  herbal medicines, a pathology lab, yoga, naturopathy,
                  panchakarma, meditation, physiotherapy and an ashram setting
                  under one roof.
                </li>
                <li>
                  The guiding spirit of the hospital is service, and the website
                  describes a service-first approach with disciplined routines,
                  experienced doctors and a peaceful healing environment.
                </li>
                <li>
                  Patients and families share their experience in Google reviews,
                  where they mention knowledgeable vaidyas, humble and kind staff,
                  genuine herbal preparations and the calm ashram surroundings.
                </li>
                <li>
                  A free OPD consultation is available on the 15th of every month,
                  and the ashram and clinic stay open seven days a week for guided
                  consultation and follow-up care.
                </li>
              </ul>
            </section>



            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Treated at Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney and urinary care covers kidney failure, kidney stones,
                  swelling and diabetes related kidney concerns, through
                  consultation, diet guidance, Ayurvedic medicines and regular
                  monitoring of reports.
                </li>
                <li>
                  Liver and digestive care covers fatty liver, jaundice, weak
                  digestion and metabolic imbalance, with medicine, food guidance
                  and routine correction suited to the patient.
                </li>
                <li>
                  Cancer supportive care offers sensitive guidance for strength,
                  diet, energy and emotional balance during serious illness, and
                  it is offered as support alongside the treatment given by the
                  cancer specialist.
                </li>
                <li>
                  Heart and lifestyle care includes blood pressure, diabetes and
                  weight concerns, while diabetes and thyroid care supports blood
                  sugar, thyroid function, energy and metabolic balance.
                </li>
                <li>
                  Womens wellness care covers hormonal balance, menstrual health
                  and weakness, in a private and sensitive way, with personal
                  guidance for each patient.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Hyderabad Families Consider Travelling to Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many patients from big cities look for a hospital where Ayurveda
                  is practised in a disciplined way, with in-house medicines, a
                  clear daily routine and time for the doctor to study the full
                  health picture.
                </li>
                <li>
                  The ashram setting offers rest and calm away from the noise of a
                  metro city, which can help patients who need a structured
                  schedule for diet, sleep, yoga and medicine.
                </li>
                <li>
                  Pathology support at the Balprada lab means that blood and urine
                  tests, including kidney function test, liver function test,
                  diabetes profile, CBC and urine routine, can be reviewed in the
                  same place.
                </li>
                <li>
                  Facilities such as panchakarma, naturopathy, yoga and
                  physiotherapy allow the doctor to plan a wider care programme
                  according to the strength and condition of the patient.
                </li>
                <li>
                  Families can bring all earlier records from Hyderabad hospitals,
                  so that the vaidya can study them and plan care that fits with
                  the treatment already running.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning the Journey from Hyderabad to Moradabad
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Moradabad is in western Uttar Pradesh, a long journey from
                  Hyderabad, so families should plan the travel with comfort in
                  mind, keep a companion with the patient and avoid travelling
                  during acute illness without medical advice.
                </li>
                <li>
                  Patients who are very weak, have severe swelling, breathlessness
                  or recent bleeding should first talk to their local specialist
                  about whether travel is safe, because Ayurvedic care at Balprada
                  is not a replacement for emergency treatment.
                </li>
                <li>
                  Call or WhatsApp the Main Branch on{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  before booking tickets, and ask about the doctor availability,
                  the OPD timing, the pathology tests and whether any in-patient
                  arrangement is possible at the time of the visit.
                </li>
                <li>
                  Travel dates can be planned around the free OPD on the 15th of
                  the month or around the Sunday availability of Vaidya ji at the
                  Moradabad Branch, after confirming by phone.
                </li>
                <li>
                  Balprada has not listed stay, transport or medicine courier
                  services on its website, so families should ask the team
                  directly about such arrangements instead of assuming them.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Documents and Reports to Carry
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring all past prescriptions, discharge summaries and recent
                  reports such as kidney function test, liver function test, blood
                  sugar, HbA1c, thyroid profile, ultrasound and any scan reports.
                </li>
                <li>
                  Carry the current medicine strips and a written list of every
                  tablet, syrup, injection and herbal product being taken, with
                  the dose and timing, so that nothing is missed during the
                  consultation.
                </li>
                <li>
                  Write a short note of the symptoms, when they started, what has
                  made them better or worse, and the diet, sleep and bowel routine
                  of the patient.
                </li>
                <li>
                  Keep a record of blood pressure, blood sugar and weight readings
                  of the last few weeks, because these numbers help the doctor
                  understand the pattern of the illness.
                </li>
                <li>
                  Bring a family member who can understand the diet and routine
                  advice and help the patient follow it after returning to
                  Hyderabad.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Consultation Works
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews the concern, the history, the reports
                  and the current medication before suggesting the next care step,
                  which keeps the guidance practical and responsible.
                </li>
                <li>
                  A personalised Ayurvedic plan is then discussed, which may
                  include Balprada Ayurvedic medicines, diet discipline and
                  lifestyle correction wherever suitable for the patient.
                </li>
                <li>
                  Supportive facilities such as yoga, naturopathy, panchakarma and
                  pathology support are suggested only when they suit the
                  condition and strength of the patient.
                </li>
                <li>
                  Follow-up visits help the team observe progress, review fresh
                  reports and adjust guidance, and patients should ask clearly how
                  follow-up will work when they live far away.
                </li>
                <li>
                  Patients are asked to continue essential modern medicines
                  prescribed by their specialist unless that specialist advises a
                  change, and to share every medicine with the vaidya.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Support After Returning Home
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fresh, light and easily digestible home-cooked meals are usually
                  preferred, with fixed meal times, and heavy, oily, packaged and
                  fried food is reduced because it burdens digestion.
                </li>
                <li>
                  Salt, protein, potassium and fluid limits for kidney and liver
                  patients differ from stage to stage, so the exact advice must
                  come from the treating doctors and not from general internet
                  lists.
                </li>
                <li>
                  A regular sleep and wake time, an early light dinner, gentle
                  yoga, breathing practice and short walks support digestion and
                  mood, when the strength of the patient allows.
                </li>
                <li>
                  Alcohol, tobacco, cold drinks, bakery items and excess sweets
                  are best avoided, and self-medication with painkillers or
                  unverified herbal powders should be avoided as well.
                </li>
                <li>
                  A simple home diary of food, sleep, symptoms and readings helps
                  the patient and family share clear information with the doctor
                  during every follow-up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hospital Branches, OPD Timings and Contact Details
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415, open
                  daily from 10:00 AM to 2:00 PM, phone and WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001, where Vaidya ji is available
                  on Sundays, and patients should call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  before visiting.
                </li>
                <li>
                  Free OPD consultation is held on the 15th of every month, and
                  the consultation timing is 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Patients can book through the appointment page or WhatsApp, and
                  email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  can be used for general questions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Safety Advice
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care at Balprada is offered as supportive and
                  complementary care, and it is not a replacement for emergency
                  treatment, dialysis, surgery or the ongoing care of a specialist
                  doctor.
                </li>
                <li>
                  Breathlessness, chest pain, vomiting of blood, black stools,
                  very little urine, severe confusion or fast growing swelling
                  needs urgent hospital care at the nearest hospital.
                </li>
                <li>
                  Results differ from person to person depending on the condition,
                  stage, age, strength and discipline of the patient, so no one
                  can promise a guaranteed cure.
                </li>
                <li>
                  Regular tests and follow-up with the local doctor in Hyderabad
                  should continue, so that the whole team can track progress and
                  catch complications early.
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