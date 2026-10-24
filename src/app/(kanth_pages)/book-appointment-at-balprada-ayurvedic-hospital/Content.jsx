import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BookAppointmentBalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "How do I book an appointment?",
      a: "Use the website form, call, send a WhatsApp message or email the team.",
    },
    {
      q: "What are the OPD timings?",
      a: "10:00 AM to 2:00 PM, and the team advises calling ahead.",
    },
    {
      q: "Is free OPD available?",
      a: "Yes, on the 15th of every month.",
    },
    {
      q: "Which branch should I choose?",
      a: "The Main Branch for daily visits, or the Moradabad Branch for Sunday vaidya availability.",
    },
    {
      q: "What should I bring?",
      a: "Past prescriptions, recent reports, current medicines and notes on symptoms and diet.",
    },
    {
      q: "Can I book for a family member?",
      a: "Yes, enter the patient's details in the form or call and explain the concern.",
    },
    {
      q: "Is a prior call needed before visiting?",
      a: "Yes, calling or messaging first is advised, especially for the Moradabad branch on Sundays.",
    },
    {
      q: "Can I book for any health concern?",
      a: "Yes, you can choose kidney, liver, cancer support, heart, diabetes and thyroid, women's health or other.",
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
                Book Appointment at Balprada Ayurvedic Hospital: Simple Steps to
                Consult a Vaidya
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                How to Book an Appointment at Balprada Ayurvedic Hospital &amp;
                Research Center
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Ways to Book
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada keeps booking simple, so patients and families can
                      choose the method that suits them, whether that is an
                      online request, a phone call, a WhatsApp message or an
                      email to the team.
                    </li>
                    <li>
                      The ashram and clinic stay open seven days a week for
                      guided consultation and follow-up care, and the team
                      advises patients to reach out by phone or WhatsApp before
                      visiting, so that the visit is planned properly.
                    </li>
                    <li>
                      Whichever way you choose, the aim is the same: to connect
                      you with a vaidya who will listen to your concern and
                      suggest the right next step for your care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Online Appointment Request
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Visit the Book Appointment page on the Balprada website and
                      enter the patient&apos;s details in the form provided.
                    </li>
                    <li>
                      Choose the preferred branch, either the Main Branch in
                      Moradabad district or the Moradabad Branch on Delhi Road,
                      depending on which is easier for you to reach.
                    </li>
                    <li>
                      Select the health concern from the list, which includes
                      Kidney Care, Liver Care, Cancer Support, Heart Care,
                      Diabetes and Thyroid Care, Women&apos;s Health or Other.
                    </li>
                    <li>
                      Press the Submit Request button, after which the team
                      guides you on consultation timing and the next step.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Booking by Phone
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      for the Main Branch, or{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      for the Moradabad Branch, to speak directly with the team
                      about timing and availability.
                    </li>
                    <li>
                      Phone booking is useful for elderly patients and families
                      who prefer to explain the concern in their own words and
                      ask questions before travelling.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Booking by WhatsApp
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Send a message to{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      using the WhatsApp Appointment button on the website, or by
                      saving the number and writing to it directly.
                    </li>
                    <li>
                      WhatsApp is convenient for sharing a short description of
                      the concern and asking whether the doctor is available on
                      the day you wish to visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Booking by Email
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Write to{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>{" "}
                      with the patient&apos;s name, the health concern and the
                      preferred branch, so that the team can reply with guidance.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Branch
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                    </li>
                    <li>
                      Open daily from 10:00 AM to 2:00 PM, and this is where the
                      ashram, clinic and in-house pharmacy work together, so it
                      suits patients who want the complete Balprada experience.
                    </li>
                    <li>
                      Call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to confirm timing and doctor availability before you set
                      out.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Address: F-19, Sector-13, New Moradabad, Delhi Road,
                      Moradabad, Uttar Pradesh 244001.
                    </li>
                    <li>
                      A vaidya is available on Sundays, and patients are asked to
                      call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      before visiting, because availability should always be
                      confirmed in advance.
                    </li>
                    <li>
                      This branch is convenient for families who find it easier
                      to travel through the city, especially on a Sunday.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Free OPD and Consultation Timings
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Regular OPD Timings
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation hours are 10:00 AM to 2:00 PM, and the team
                      advises calling ahead since availability can vary by
                      branch.
                    </li>
                    <li>
                      There is no slot picker on the booking page, so the team
                      will guide you on the best time to come after you submit
                      your request or call.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Free OPD on the 15th of Every Month
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A free OPD consultation is available on the 15th of every
                      month, which gives new patients a comfortable way to meet
                      the vaidya and understand the Balprada approach.
                    </li>
                    <li>
                      Patients planning to use the free OPD should call or
                      message in advance to confirm availability at their chosen
                      branch.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Bring to Your Appointment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Documents and Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring past prescriptions, recent test reports and the
                      medicines you currently take, so that the doctor can see
                      the full picture of your treatment.
                    </li>
                    <li>
                      Carry scans, ultrasound reports and old blood or urine test
                      results if you have them, because diagnostic reports are
                      reviewed where relevant.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Notes About Your Health
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Write down your symptoms, how long you have had them and
                      what your daily diet looks like, as the FAQ page of
                      Balprada advises.
                    </li>
                    <li>
                      Mention sleep, stress and daily routine as well, since the
                      doctor considers all of these before suggesting any
                      Ayurvedic guidance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Who Should Come
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Elderly patients and those with serious illness should be
                      accompanied by a family member, who can listen to the diet
                      and routine advice and help at home later.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens at the Consultation
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Understanding Your Concern
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the health concern, medical history,
                      reports and current medication, so that no plan begins with
                      guesswork.
                    </li>
                    <li>
                      Dr. U. S. Sharma, CMS at Balprada, has more than 20 years
                      of Ayurvedic practice with a focus on kidney and liver
                      conditions and long-term chronic disease care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. A Personalized Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction
                      wherever suitable, and the plan is explained clearly to the
                      patient and family.
                    </li>
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines in an organized
                      way at the main branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma and
                      physiotherapy are added when the doctor feels they will
                      help, and panchakarma is planned only after individual
                      assessment.
                    </li>
                    <li>
                      Balprada Labs offers tests such as Complete Blood Count,
                      Thyroid Profile, Liver Function Test, Kidney Function Test,
                      Diabetes Profile, Lipid Profile, Urine Routine and
                      Microscopy, and Vitamin B12 and Vitamin D, and patients
                      should call the lab to confirm preparation and charges.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Follow-up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team observe progress and adjust
                      guidance, which is especially important for chronic
                      conditions that respond slowly.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns You Can Book For
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic and lifestyle care for kidney failure, kidney
                      stones, swelling and diabetes-linked kidney concerns.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Support for fatty liver, jaundice and weak digestion
                      through medicine, diet and routine-based care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Sensitive support for strength and recovery, diet guidance
                      and stress, alongside the treatment advised by the
                      specialist.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Personalized support for blood pressure, obesity, diabetes,
                      hypothyroidism and hyperthyroidism.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private and sensitive care for hormonal balance, menstrual
                      health and weakness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Smooth Visit
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Before You Travel
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Confirm the date, branch and timing by phone or WhatsApp,
                      especially if you plan to visit the Moradabad branch on a
                      Sunday.
                    </li>
                    <li>
                      Keep all reports in one folder and arrive within
                      consultation hours, so that you have enough time with the
                      vaidya.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. During the Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Speak openly about symptoms, diet slips and any other
                      treatment you are taking, since honest information leads to
                      safer guidance.
                    </li>
                    <li>
                      Ask about how to take medicines, which foods to avoid and
                      when to return for review.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. After the Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Note the date of your next review and call the team if you
                      have any questions about the plan.
                    </li>
                    <li>
                      Keep taking prescribed allopathic medicines unless your own
                      doctor advises a change, and never stop dialysis, insulin
                      or cancer treatment on your own.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking for a Family Member
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Booking on Behalf of Parents or Elders
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Children and relatives often book for elderly parents, and
                      they can do this by entering the patient&apos;s details in
                      the form or by calling and explaining the concern clearly.
                    </li>
                    <li>
                      Mention any difficulty in walking or travelling when you
                      call, so that the team can guide you on the best day and
                      branch for the visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Booking from Another Town
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families travelling from Kanth, Rampur or other towns of
                      Uttar Pradesh should call or send a WhatsApp message before
                      leaving, so that the journey is not wasted if the
                      doctor&apos;s schedule has changed.
                    </li>
                    <li>
                      It is wise to plan the visit within consultation hours, and
                      to ask the team how much time to keep free for the
                      consultation, reports and medicines.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Booking in Advance Helps
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Better Planning
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Advance contact lets the team understand the health concern
                      beforehand, which helps the first consultation begin on the
                      right footing.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Less Waiting and Confusion
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Confirming the branch, timing and doctor availability saves
                      patients and attendants from avoidable confusion,
                      especially at the Moradabad branch, where Sunday vaidya
                      availability depends on a call before visiting.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Clear Expectations
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The booking page asks you to pick a branch and a health
                      concern, and the team then guides you on timing and the
                      next step, so you know what to expect before you arrive.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Safe and Honest Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Emergencies should always go to urgent medical care first,
                      because the appointment service is meant for consultation
                      and follow-up and not for emergency treatment.
                    </li>
                    <li>
                      No honest practitioner can promise guaranteed results, and
                      the Balprada team explains this openly from the first
                      visit.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Trust Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada has served patients since 1991, when Sw. Vaidya Vijay
                  Pal Singh Ji began the work with a vision of ayurvedic healing
                  and social service, and it now brings 35 years of experience.
                </li>
                <li>
                  Patient reviews describe knowledgeable vaidyas, genuine herbal
                  preparations, humble and kind staff and a serene ashram
                  atmosphere.
                </li>
                <li>
                  Balprada Jansewa Sansthan carries the spirit of seva through
                  Vridhashram, Navtarun Ashram, residential school support and
                  Gaushala seva.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">Contact Details</h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>
                        , daily 10:00 AM to 2:00 PM.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>
                        , Sunday vaidya availability, call before visiting.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">WhatsApp and Email</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      WhatsApp:{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
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
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
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