import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicTreatmentCost() {
  const faqs = [
    {
      q: "What is the cost of Ayurvedic treatment at Balprada?",
      a: "The website does not publish treatment costs. The vaidya plans care individually, and the team can explain expenses when you call or visit.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month. Please call to confirm the branch.",
    },
    {
      q: "Does the free OPD include medicines or tests?",
      a: "The website does not say. Please ask the team before you visit.",
    },
    {
      q: "Are there any fees for follow up visits?",
      a: "The website does not state this. Ask the team when you book.",
    },
    {
      q: "Does Balprada accept insurance?",
      a: "The website does not mention insurance. Please confirm with the team.",
    },
    {
      q: "Are free or subsidised services available?",
      a: "Balprada Jansewa Sansthan has offered free and subsidised Ayurvedic healthcare for underprivileged patients since 1991.",
    },
    {
      q: "How do I get a cost estimate?",
      a: "Call or WhatsApp 8126364606, or write to balpradaindia@gmail.com, and ask for the estimate after your consultation.",
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
                Balprada Ayurvedic Treatment Cost: What Patients Should Know
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families who search for Balprada Ayurvedic treatment cost want
                  to plan their budget before they travel, and this page explains
                  honestly what is known about fees, free consultation and how to
                  get a clear estimate.
                </li>
                <li>
                  Balprada Ayurvedic Hospital and Research Center has served
                  patients in Moradabad district since 1991, with a Main Branch
                  in Tehsil Bilari and a Moradabad Branch on Delhi Road.
                </li>
                <li>
                  The Balprada website does not publish a price list, package
                  rate, consultation fee, medicine price or lab test charge, so
                  this page does not quote any figure and does not guess one.
                </li>
                <li>
                  The only fee related statement on the website is that free OPD
                  consultation is available on the 15th of every month, and for
                  every other question about cost the team should be asked
                  directly by phone, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What the Website Says About Cost
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Free OPD Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month, which gives families a chance to meet the vaidya and
                      discuss the concern without a consultation fee.
                    </li>
                    <li>
                      The website does not say which branch hosts the free OPD,
                      so please call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      to confirm the branch before travelling.
                    </li>
                    <li>
                      The website also does not say whether medicines, tests or
                      follow-up visits are included in the free OPD, so ask this
                      clearly when you call.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Free and Subsidised Care Through Jansewa
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Jansewa Sansthan has offered free and subsidised
                      Ayurvedic healthcare for underprivileged patients since
                      1991.
                    </li>
                    <li>
                      The website does not describe the conditions for this
                      support, so families who need it should speak to the team
                      politely and share their situation openly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. What Is Not Published
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website does not publish consultation fees, treatment
                      package prices, medicine prices, panchakarma rates, therapy
                      charges or pathology lab charges.
                    </li>
                    <li>
                      It also does not state payment methods, insurance
                      acceptance or a refund policy, so please confirm these
                      directly with the team.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Ayurvedic Treatment Cost Differs from Patient to Patient
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Every Plan Is Individual
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care begins with a consultation in which the doctor reviews
                      the health concern, medical history, current treatment,
                      food habits, sleep, stress and daily routine, so the plan
                      and its cost depend on the person.
                    </li>
                    <li>
                      Two patients with the same diagnosis may need different
                      medicines, different diet guidance and different supportive
                      therapies.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Type and Stage of the Condition
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Short term concerns such as weak digestion may need a
                      different plan from long standing conditions such as kidney
                      problems, liver disorders, diabetes, thyroid imbalance or
                      serious illness.
                    </li>
                    <li>
                      Chronic conditions usually involve a longer period of care
                      with regular follow up, which affects the total expense
                      over time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Medicines Prescribed
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares the
                      traditional and patent Ayurvedic medicines of the
                      institution, and the number and type of medicines advised
                      by the vaidya will influence the cost.
                    </li>
                    <li>
                      Medicines should be taken only as explained, and patients
                      should not buy unknown herbal powders or oils on their own.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Tests Advised
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada Pathology Lab provides blood and urine
                      testing, and the tests the doctor advises, such as Kidney
                      Function Test, Liver Function Test, Complete Blood Count,
                      Thyroid Profile, Diabetes Profile with HbA1c, Lipid
                      Profile, Urine Routine and Microscopy, and Vitamin B12 and
                      Vitamin D, add to the total.
                    </li>
                    <li>
                      Repeat tests at the interval suggested by the doctor help
                      families follow progress with facts.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Supportive Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma, yoga, naturopathy, meditation and
                      physiotherapy are suggested only where they suit the
                      patient, and the frequency and suitability are decided
                      after individual assessment.
                    </li>
                    <li>
                      The website does not state the length of a session or a
                      programme, so ask the team how many sessions are advised
                      before you plan the budget.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Length of Care and Follow Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website does not publish a fixed duration for any
                      condition, and the vaidya tells each patient when to return
                      for review.
                    </li>
                    <li>
                      Regular follow up lets the team review reports, symptoms
                      and diet and adjust the plan, so ask for the expected
                      number of visits in the first phase.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cost Items to Ask About Before You Start
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask whether a consultation fee applies on the day you plan
                      to visit, and whether follow up visits have a separate fee.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask which medicines are advised, how long they will be
                      needed, how they are packed and what the cost is for the
                      first phase of care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Tests
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask which tests are advised, which can be done at the
                      Balprada Pathology Lab, and whether you can bring recent
                      reports to avoid repeating a test.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask whether panchakarma, yoga, naturopathy, meditation or
                      physiotherapy is advised for you, how many sessions are
                      needed and whether a stay or a daily visit is planned.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Travel and Stay
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask whether you need to come on specific days, because the
                      Main Branch consults daily from 10:00 AM to 2:00 PM and the
                      Moradabad Branch has the vaidya on Sundays, and plan travel
                      and food costs for the visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Payment and Receipts
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask which payment methods are accepted, whether a receipt
                      is given and what the policy is for cancellation or change
                      of appointment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Plan Your Budget Wisely
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Start with the Free OPD
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      If the patient is stable and the visit can wait, the free
                      OPD on the 15th of every month is a sensible first step,
                      because it lets the family understand the plan before
                      committing to a long course of care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Carry All Reports
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring previous prescriptions, blood and urine reports,
                      scans and a list of current medicines, so that tests are
                      not repeated without need and the doctor can plan clearly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Ask for the Plan in Phases
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask the vaidya to explain the first phase of the plan, the
                      review date and the expected number of visits, so that the
                      family can budget in stages and not for an unknown length
                      of time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Keep a Written Record
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Note down the medicines, doses, tests and dates, and keep
                      every receipt and report in one folder, which helps at
                      follow up visits and avoids confusion.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Avoid Costly Mistakes
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Do not buy medicines or oils from unknown sellers, and do
                      not stop prescribed medicines or dialysis without asking
                      your treating doctor, because wrong decisions can cost more
                      in health and in money.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Services That Cost May Relate To
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation and Specialised Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kidney and urinary care for kidney failure, kidney stones
                      and persistent swelling, and liver and digestive care for
                      fatty liver, jaundice and weak digestion.
                    </li>
                    <li>
                      Cancer supportive care, heart and lifestyle care, diabetes
                      and thyroid care, and wellness care for women, all planned
                      individually and alongside any primary medical treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Wellness Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea, spices, Ayurvedic
                      oils, avaleh, herbal and gram flour, pickle, murabba and
                      dalia.
                    </li>
                    <li>
                      The website has no online checkout, and product orders
                      depend on stock and price confirmation by phone, WhatsApp
                      or email.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Doctors and Team
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. U. S. Sharma has more than 20 years of experience in
                      Ayurvedic practice and consults on kidney, liver and other
                      chronic concerns.
                    </li>
                    <li>
                      Dr. Chetan Anand, associated with Balprada Herbal Wellness
                      Private Limited, has over seven years of experience in
                      herbal product research and development and advises on free
                      health camps.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Value Beyond Price
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Experience since 1991: more than three decades of Ayurvedic
                      practice and a service first spirit give patients and
                      families a sense of continuity.
                    </li>
                    <li>
                      Consultation, tests and medicines under one institution, so
                      patients do not need to travel between many different
                      places.
                    </li>
                    <li>
                      Patients describe excellent service and guidance from
                      Vaidya ji, knowledgeable vaidyas, authentic herbal
                      preparations, a serene atmosphere and humble, helpful
                      staff, and these are personal experiences.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Honest Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care at Balprada is supportive, outcomes vary from
                  person to person, and no specific result is promised.
                </li>
                <li>
                  Cost should never be a reason to delay care in an emergency,
                  and patients should go to the nearest hospital for severe pain,
                  breathlessness, heavy bleeding, very low urine output or sudden
                  worsening.
                </li>
                <li>
                  Never stop prescribed medicines or dialysis without asking your
                  treating doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That Need a Check-Up
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Swelling around the eyes, feet or ankles, foamy or reduced
                  urine, constant tiredness, poor appetite, bloating or yellowing
                  of the eyes and skin are reasons to book a consultation and get
                  basic tests done.
                </li>
                <li>
                  People with diabetes, high blood pressure, excess weight, long
                  term painkiller use or a family history of kidney or liver
                  disease are advised to check their reports at least once a
                  year.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                How to Book and Ask About Cost
              </h2>

              <div className="mb-6 space-y-5">
                <div>
                  <p className="font-semibold">Appointment</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Use the appointment form on balpradaindia.com, where you
                      choose a concern such as kidney, liver, cancer, heart or
                      other, and also call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      with your name, contact number and preferred branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Phone and Email</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      for the Main Branch, call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      for the Moradabad Branch, or write to{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>{" "}
                      for questions about fees.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Appointment Terms</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Arrive about 15 minutes early, and give at least 24 hours
                      of notice if you need to cancel or reschedule, as the
                      website terms request.
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

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Branches and Contact
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">
                      Main Branch (Ashram and Clinic)
                    </p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415.
                      </li>
                      <li>
                        Open daily, with consultation from 10:00 AM to 2:00 PM.
                        Phone and WhatsApp:{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>
                        .
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
                        Address: F-19, Sector-13, New Moradabad, Delhi Road,
                        Moradabad, Uttar Pradesh 244001.
                      </li>
                      <li>
                        Vaidya ji is available on Sundays, so please call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting.
                      </li>
                    </ul>
                  </div>
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