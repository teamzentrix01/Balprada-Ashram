import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalKanthAddress() {
  const faqs = [
    {
      q: "What is the address of Balprada Ayurvedic Hospital?",
      a: "The Main Branch is at Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.",
    },
    {
      q: "Where is the Moradabad branch?",
      a: "It is at F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.",
    },
    {
      q: "Is there a branch in Kanth?",
      a: "No, patients from Kanth visit the Bilari or Moradabad branch.",
    },
    {
      q: "What are the timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and the ashram and clinic are open seven days a week.",
    },
    {
      q: "Which branch is open on Sundays?",
      a: "Vaidya ji is available at the Moradabad Branch on Sundays, and patients should call before visiting.",
    },
    {
      q: "Which phone number should I call for directions?",
      a: "Call 8126364606 for the Main Branch or 9410447000 for the Moradabad Branch.",
    },
    {
      q: "Can I see the location on a map?",
      a: "Yes, the website&apos;s Contact page includes a Google Maps view for each branch.",
    },
    {
      q: "When is the free OPD?",
      a: "Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Do I need an appointment?",
      a: "Calling or messaging before your visit is recommended, and you can also use the Book Appointment page.",
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
                Ayurvedic Hospital Kanth Address: Where to Find Balprada
                Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Introduction
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients searching for an Ayurvedic hospital Kanth address
                  usually need one thing before anything else: the exact place to
                  go, written clearly enough to share with a driver, a relative
                  or a map app.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has served
                  patients since 1991, and it works from two branches in the
                  Moradabad region.
                </li>
                <li>
                  This page lists both published addresses word for word,
                  explains each part of the address, and shows how to confirm the
                  location before you leave home.
                </li>
                <li>
                  Every detail comes from the hospital&apos;s own website, and
                  nothing here is guessed, so patients should still call ahead to
                  confirm availability.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Address at a Glance
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001.
                </li>
                <li>
                  Main Branch phone and WhatsApp:{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch phone:{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
                <li>
                  Consultation timing: 10:00 AM to 2:00 PM, with the ashram and
                  clinic open seven days a week.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is There a Balprada Address in Kanth?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  No, Balprada does not have a branch or clinic address inside
                  Kanth, and this page does not suggest otherwise.
                </li>
                <li>
                  Patients from Kanth travel to one of the two Moradabad-region
                  branches listed above.
                </li>
                <li>
                  The website does not publish distances or travel times from
                  Kanth, so none are stated here.
                </li>
                <li>
                  Use the full written address with a map app, and call the
                  branch for guidance that suits your route.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Branch Address Explained (Bilari)
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Mohalla Vijaynagar is the locality name, and it helps when you
                  speak to local people or drivers.
                </li>
                <li>Village Bhidwari is the village where the centre is located.</li>
                <li>
                  P.O. Guarau is the post office, which is useful for letters,
                  couriers and official forms.
                </li>
                <li>
                  Tehsil Bilari is the administrative tehsil, and Bilari is the
                  name most people use when asking for directions.
                </li>
                <li>
                  District Moradabad and Uttar Pradesh complete the postal
                  address.
                </li>
                <li>
                  The PIN code for this branch is 244415, and it is worth using
                  exactly as published when you type the address into any app.
                </li>
                <li>
                  The Main Branch is the ashram-based centre, where the ashram
                  and clinic stay open throughout the week for guided consultation
                  and follow-up care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Branch Address Explained
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>F-19 is the plot or unit number within the sector.</li>
                <li>
                  Sector-13, New Moradabad is the area, and it is the part that
                  map apps recognise most easily.
                </li>
                <li>
                  Delhi Road is the main road named in the address, which helps
                  drivers orient themselves.
                </li>
                <li>
                  Moradabad, Uttar Pradesh 244001 gives the city and PIN code.
                </li>
                <li>
                  The branch&apos;s published note is Sunday vaidya availability,
                  with a request to call before visiting.
                </li>
                <li>
                  Vaidya ji is available at this branch on Sundays, so confirm by
                  phone before you travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Branch Should You Choose?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Choose the Main Branch in Bilari if you want to consult at the
                  ashram-based centre and your visit does not depend on Sundays.
                </li>
                <li>
                  Choose the Moradabad Branch if you plan to see Vaidya ji on a
                  Sunday, after confirming availability by phone.
                </li>
                <li>
                  Consider the route you will actually take from Kanth, because
                  the better branch depends on your own travel plan.
                </li>
                <li>
                  Ask the phone team which branch is better for your health
                  concern and which doctor will see you.
                </li>
                <li>
                  Remember that consultation timing is 10:00 AM to 2:00 PM, so
                  plan to reach well within that window.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Find Balprada on Google Maps
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The hospital&apos;s Contact page includes a Google Maps view
                  for each branch, so you can see the location before you travel.
                </li>
                <li>
                  Copy the full address exactly as printed above and paste it into
                  your map app, rather than typing only the hospital name.
                </li>
                <li>
                  For the Main Branch, include Bhidwari, Guarau and Bilari in
                  your search, because smaller localities are easier to find with
                  all three names.
                </li>
                <li>
                  For the Moradabad Branch, include Sector-13, New Moradabad and
                  Delhi Road in your search.
                </li>
                <li>
                  Check that the PIN code in your search matches the one published
                  on the website.
                </li>
                <li>
                  If the map shows more than one result, confirm the right one by
                  calling the branch number before you set out.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Clear Address Matters Before You Travel
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many patients travel with elderly or unwell family members, so
                  a wrong turn can cost valuable time and energy.
                </li>
                <li>
                  Consultation runs only from 10:00 AM to 2:00 PM, which means
                  arriving at the right place early is important.
                </li>
                <li>
                  Two branches exist, and each has a different address, phone
                  number and availability pattern.
                </li>
                <li>
                  Confirming the branch and address first prevents a wasted trip,
                  especially on Sundays when availability differs.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Landmarks and Directions: What the Website Does and Does Not Say
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The website publishes the full postal address for each branch
                  and a map view, and these are the details you can rely on.
                </li>
                <li>
                  The website does not describe nearby landmarks, so this page
                  does not invent any.
                </li>
                <li>
                  Ask the branch team for directions in your own words, because
                  they know the approach best.
                </li>
                <li>
                  Ask whether the approach differs for a car, a two-wheeler or
                  public transport, since nothing is published about this.
                </li>
                <li>
                  If you reach the area and are unsure, call the branch number and
                  describe where you are.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Address Details for Forms, Couriers and Records
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Use the full address exactly as published, including the post
                  office and PIN code, whenever you write it on a form.
                </li>
                <li>
                  For the Main Branch, the post office is Guarau and the PIN code
                  is 244415.
                </li>
                <li>For the Moradabad Branch, the PIN code is 244001.</li>
                <li>
                  Email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  if you need a written confirmation of the address for a family
                  member.
                </li>
                <li>
                  Product enquiries for herbal items can also be made through the
                  phone numbers and contact form, so you do not need to visit only
                  to ask.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Sharing the Address with a Driver or Family
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Send the complete written address along with the branch phone
                  number in one message.
                </li>
                <li>
                  Ask the driver to call the branch number if the map and the road
                  do not match.
                </li>
                <li>
                  Mention the locality names, such as Vijaynagar and Bhidwari,
                  because local drivers often know areas by these names.
                </li>
                <li>
                  Save the address in your phone so that every family member can
                  reach the same place.
                </li>
                <li>
                  Write the address on paper as a backup in case network coverage
                  is weak on the way.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Timings at Each Address
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Main Branch consultation timing is daily, 10:00 AM to 2:00
                  PM.
                </li>
                <li>The ashram and clinic stay open seven days a week.</li>
                <li>
                  The Moradabad Branch offers Sunday vaidya availability, and
                  patients should call before visiting.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  and the website does not state a specific branch for it, so
                  confirm by phone.
                </li>
                <li>
                  Arrive early on the free OPD day, because more patients may
                  come.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Available at the Hospital
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Consultation with experienced Ayurvedic doctors and vaidyas.
                </li>
                <li>
                  In-house herbal medicines prepared by Balprada&apos;s pharmacy
                  arm.
                </li>
                <li>
                  Panchakarma, yoga, naturopathy, meditation and physiotherapy as
                  supportive facilities.
                </li>
                <li>
                  Balprada Pathology Lab for blood, urine and diagnostic testing.
                </li>
                <li>
                  The website describes a peaceful care environment, and it does
                  not list accommodation or stay arrangements, so ask the team
                  directly if you need information about staying.
                </li>
                <li>
                  Herbal products such as tea, spices, oils and avaleh can be
                  enquired about by phone, email or the contact form.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors You May Meet
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma serves as CMS at Balprada Ayurvedic Hospital
                  and Research Centre and has more than 20 years of experience in
                  Ayurvedic practice, consulting for kidney, liver and other
                  chronic health concerns.
                </li>
                <li>
                  Dr. Chetan Anand is associated with Balprada Herbal Wellness
                  Private Limited and has more than 7 years of experience in
                  herbal product research, pharmacy development and health camp
                  advisory.
                </li>
                <li>
                  Ask which doctor or vaidya is available on your chosen day when
                  you call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Supported at These Addresses
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney and urinary care, including kidney function, swelling,
                  stones and diabetes-linked kidney concerns.
                </li>
                <li>
                  Liver and digestive care, including fatty liver, jaundice and
                  weak digestion.
                </li>
                <li>
                  Heart and lifestyle care, including blood pressure, diabetes and
                  weight concerns.
                </li>
                <li>
                  Diabetes and thyroid care, including hypothyroidism and
                  hyperthyroidism.
                </li>
                <li>
                  Women&apos;s wellness, including hormonal balance, menstrual
                  health and weakness.
                </li>
                <li>
                  Cancer supportive care for strength, diet, energy and emotional
                  balance, offered alongside conventional treatment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning the Journey from Kanth
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Decide the branch first, then confirm the visit day and time by
                  phone.
                </li>
                <li>
                  Start early enough to reach within the 10:00 AM to 2:00 PM
                  consultation window, because the website gives no travel times.
                </li>
                <li>
                  Take a family member with you if the patient is elderly, unwell
                  or travelling for a first visit.
                </li>
                <li>
                  Ask the team whether there is anything specific you should know
                  about access for elderly or weak patients, because the website
                  does not describe this.
                </li>
                <li>
                  Carry water, any regular medicines and your documents in a
                  single folder.
                </li>
                <li>Keep the branch phone number available throughout the journey.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Carry When You Arrive
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Previous prescriptions from any doctor you have consulted.
                </li>
                <li>
                  Recent reports such as blood tests, urine tests, scans or other
                  diagnostics.
                </li>
                <li>
                  A list of current medicines, including supplements and home
                  remedies.
                </li>
                <li>
                  A short note of symptoms, how long they have lasted and your
                  daily diet routine.
                </li>
                <li>
                  Contact numbers of the patient and the person accompanying them.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation Process After You Reach
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews the concern, history, reports and
                  current medication.
                </li>
                <li>
                  An Ayurvedic plan is prepared using Balprada&apos;s medicines,
                  diet discipline and lifestyle correction where suitable.
                </li>
                <li>
                  Supportive facilities such as yoga, naturopathy, Panchakarma and
                  pathology are added as advised.
                </li>
                <li>
                  Follow-up is planned according to the condition, and the team
                  may review reports, symptoms, food routine and medicine response
                  over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Jansewa Service
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada&apos;s social service includes a Vridhashram for
                  elderly and unsupported people and the Navtarun Ashram for
                  children in need.
                </li>
                <li>
                  The initiative also supports residential schooling and Gaushala
                  seva.
                </li>
                <li>
                  Visitors who want to learn more can use the same phone numbers
                  and email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety and Responsible Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  For emergencies such as chest pain, severe breathlessness,
                  heavy bleeding or loss of consciousness, go to the nearest
                  emergency hospital first.
                </li>
                <li>
                  Never stop or change prescribed medicines on your own; discuss
                  every medicine with your doctor.
                </li>
                <li>
                  Ayurvedic treatment supports the body over time, and results
                  vary from person to person, so no guaranteed outcome is
                  promised.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Balprada to Confirm the Address
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
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
                  Send a WhatsApp message to{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  or write to{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
                </li>
                <li>
                  Visit balpradaindia.com to view the map on the Contact page and
                  to use the Book Appointment page.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/treatments">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-blue-800">
                    Explore Treatments
                  </button>
                </Link>
              </div>
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