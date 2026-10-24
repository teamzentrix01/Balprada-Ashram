import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedaKanthCost() {
  const faqs = [
    {
      q: "What is the cost of Balprada Ayurveda treatment?",
      a: "Charges are not listed on the website, so call or message the team to confirm current costs.",
    },
    {
      q: "Is free OPD available?",
      a: "Yes, on the 15th of every month, and it is wise to confirm details by phone.",
    },
    {
      q: "What affects the cost?",
      a: "The condition, medicines, therapies, lab tests and number of follow-up visits.",
    },
    {
      q: "Are lab test prices listed?",
      a: "No, please call the lab to confirm charges and preparation.",
    },
    {
      q: "Is subsidised care available?",
      a: "The Jansewa page mentions free and subsidised care for underprivileged patients, so ask the team.",
    },
    {
      q: "Are product prices listed?",
      a: "No, please contact the team for stock and cost.",
    },
    {
      q: "Should I stop other medicines to save cost?",
      a: "No, continue them unless your own doctor advises a change.",
    },
    {
      q: "How do I book an appointment?",
      a: "Use the website form, call or send a WhatsApp message.",
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
                Balprada Ayurveda Kanth Cost: What Affects Treatment Charges and
                How to Plan
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Understanding the Cost of Ayurvedic Care at Balprada for Kanth
                Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Why Families Ask About Cost
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families from Kanth who are thinking of Ayurvedic treatment
                      for a long-term condition naturally want to know what the
                      care will cost, because treatment for kidney, liver, sugar
                      or heart concerns can continue for many months and needs
                      proper planning.
                    </li>
                    <li>
                      Asking about cost before starting treatment is sensible and
                      respectful, and the Balprada team welcomes such questions,
                      since an honest conversation about expenses helps the
                      patient and family follow the plan without worry.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. An Honest Note on Fixed Prices
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada website does not publish a fixed price list
                      for consultation, medicines, therapies or lab tests,
                      because the cost of Ayurvedic care depends on the
                      patient&apos;s condition, the medicines prescribed and the
                      facilities needed.
                    </li>
                    <li>
                      For this reason, patients are advised to contact the team
                      by phone or WhatsApp to confirm current charges, instead of
                      relying on figures given by outside sources, which may be
                      out of date or incorrect.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Decides the Cost of Treatment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. The Health Concern
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Different conditions need different kinds of care, so the
                      plan for fatty liver, kidney stones, diabetes, thyroid
                      concerns or women&apos;s wellness will not look the same,
                      and neither will the expenses involved.
                    </li>
                    <li>
                      Serious and long-standing conditions such as kidney failure
                      or cancer supportive care usually need closer review, so
                      patients should discuss the expected duration of care with
                      the vaidya at the first visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. The Medicines Prescribed
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines in an organized
                      way, and the cost of each plan depends on which medicines
                      are prescribed, in what quantity and for how long.
                    </li>
                    <li>
                      Patients should ask the vaidya which medicines are
                      essential, how long each course will last and when the next
                      review is due, so that they can plan expenses month by
                      month.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Supportive Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma, yoga, naturopathy, meditation and
                      physiotherapy are added only when the doctor feels they
                      will help, and panchakarma is planned after individual
                      assessment, with the frequency and suitability decided for
                      each patient.
                    </li>
                    <li>
                      Because these therapies are planned per person, patients
                      should ask about the charges for any therapy before they
                      agree to begin it.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Laboratory Tests
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Labs offers Complete Blood Count, Thyroid Profile,
                      Liver Function Test, Kidney Function Test, Diabetes Profile
                      with blood sugar and HbA1c, Lipid Profile, Urine Routine
                      and Microscopy, and Vitamin B12 and Vitamin D tests.
                    </li>
                    <li>
                      The lab page does not list test prices, so patients should
                      call the lab to confirm charges and preparation, and they
                      can bring recent reports from elsewhere to avoid repeating
                      tests that are not needed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Follow-up Visits
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular review is part of good Ayurvedic care, and the
                      number of visits depends on the condition and how the
                      patient responds, so cost over time depends partly on how
                      often review is needed.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Free OPD and Support Available
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Free OPD on the 15th of Every Month
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A free OPD consultation is available on the 15th of every
                      month, which gives new patients from Kanth a comfortable
                      way to meet the vaidya and understand the plan before
                      committing to treatment.
                    </li>
                    <li>
                      The website does not give further details about this clinic
                      day, so patients should call or message in advance to
                      confirm availability at their chosen branch and to ask what
                      the free consultation covers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Jansewa Sansthan and Community Service
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Jansewa Sansthan carries out social service
                      through Vridhashram for elderly and unsupported people,
                      Navtarun Ashram for children in need, residential school
                      support and Gaushala seva.
                    </li>
                    <li>
                      The Jansewa page also describes free and subsidised
                      Ayurvedic healthcare for underprivileged patients, and
                      families who need such support should speak to the team
                      directly to understand how it works, since the website does
                      not list the details.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Ask About Cost
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Questions About Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask whether the first consultation is part of the free OPD
                      or a regular visit, and whether any charge applies for
                      follow-up consultations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Questions About Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask which medicines are prescribed, how long each course
                      will last, whether the medicines are prepared in-house and
                      how often they will need to be refilled.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Questions About Therapies and Tests
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask whether panchakarma or physiotherapy is advised, how
                      many sessions are planned, and what the lab tests will
                      involve, so that there are no surprises later.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Questions About Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Products page lists herbal tea and spices, Ayurvedic
                      oils, avaleh and herbal preparations, herbal flour and gram
                      flour, pickle, murabba and dalia, and custom herbal product
                      inquiries, but it shows no prices, so patients should ask
                      the team about availability and cost.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Budget as a Kanth Patient
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Before the First Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or send a WhatsApp message to{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                      , or call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      for the Moradabad branch, and ask about consultation
                      charges, OPD timings and what to bring.
                    </li>
                    <li>
                      Carry past prescriptions, recent test reports and the
                      medicines you currently take, so that unnecessary repeat
                      tests can be avoided.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. During Treatment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow the diet and routine honestly, because good
                      discipline helps the care plan work as intended and may
                      reduce the need for repeated changes.
                    </li>
                    <li>
                      Keep a simple record of medicines, tests and visit dates,
                      which makes it easier to understand the total expense over
                      time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Travel and Time
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kanth lies in Moradabad district, and the main branch is
                      also in Moradabad district, so travel is often shorter than
                      going to a distant city, but families should still plan
                      time and expenses for regular follow-up.
                    </li>
                    <li>
                      The Moradabad branch on Delhi Road offers Vaidya ji on
                      Sundays, and patients should call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      before visiting, which also helps avoid a wasted trip.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Long-Term Care and Cost
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Why Chronic Conditions Need Planning
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kidney, liver, diabetes and heart conditions develop over
                      years and respond slowly, so Balprada approaches them with
                      steady medicines, discipline and regular review instead of
                      promising quick results that families later regret trusting.
                    </li>
                    <li>
                      Because treatment can continue for months, it helps to ask
                      the vaidya at the start what the plan may look like, how
                      often medicines will need to be taken and when the next
                      review is due.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Avoiding Common Mistakes
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Do not stop prescribed medicines, dialysis, insulin or
                      cancer treatment to save money, because these decisions
                      must always be taken together with your own doctor.
                    </li>
                    <li>
                      Do not repeat tests that you already have recent reports
                      for, and bring those reports to the consultation, so that
                      the doctor can decide which new tests are truly needed.
                    </li>
                    <li>
                      Do not rely on unofficial figures shared by others, and
                      confirm every charge directly with the Balprada team before
                      beginning any therapy or medicine course.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Herbal Products and Organic Food
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Products Page
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Herbal tea, spices, Ayurvedic oils, avaleh, herbal flour,
                      gram flour, pickle, murabba and dalia are available through
                      Balprada Enterprises, and the products are described as
                      prepared under Balprada processes.
                    </li>
                    <li>
                      The page has no cart or price list, and availability can
                      change, so contact the team for current stock and cost.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Organic Food Page
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Organic Food page lists naturally grown items such as
                      potatoes, barley daliya, multigrain atta, fresh amla,
                      natural raw honey, whole grains and pulses, fresh haldi and
                      herbs, seasonal mangoes and an organic family combo.
                    </li>
                    <li>
                      Availability depends on harvest and season, and the team
                      shares current stock, quantity, price, pickup and courier
                      options on request.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Call Before Visiting
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Elderly Patients and Attendants
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Elderly patients and those with serious illness should call
                      first to ask about the day, branch and charges, so that
                      attendants can plan the journey and the expenses calmly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Patients Needing Subsidised Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families who need free or subsidised care should speak
                      openly to the team about their situation, since the website
                      does not list how such support is decided.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Patients Planning Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients interested in panchakarma or physiotherapy should
                      ask for a clear plan with the number of sessions and the
                      charges before agreeing to start.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Value of Care Beyond Price
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation That Takes Time
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor considers symptoms, medical history, current
                      treatment, food habits, sleep, stress and daily routine
                      before suggesting any Ayurvedic guidance, which gives
                      patients a clear understanding of their care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Experience and Research
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada has served patients since 1991 and now brings 35
                      years of experience, with Dr. U. S. Sharma, CMS, having
                      more than 20 years of Ayurvedic practice focused on kidney
                      and liver conditions and long-term chronic care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Everything in One Place
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation, medicines, therapies, diagnostics and ashram
                      care belong to one ecosystem, which can save patients time
                      and travel, even though the cost of each service should be
                      confirmed separately.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Peaceful Ashram Environment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patient reviews describe knowledgeable vaidyas, genuine
                      herbal preparations, humble and kind staff and a serene
                      atmosphere, which families often value alongside the
                      treatment itself.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Safe and Honest Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada does not ask patients to abandon dialysis, insulin,
                      cancer treatment or other prescribed care, and patients
                      should tell the vaidya about every medicine they use.
                    </li>
                    <li>
                      No honest practitioner can promise guaranteed results, and
                      emergencies should always go to urgent medical care first.
                    </li>
                  </ul>
                </div>
              </div>
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
                        Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                        Bilari, District Moradabad, Uttar Pradesh 244415, call{" "}
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
                        F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                        Uttar Pradesh 244001, call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>
                        , Sunday vaidya availability.
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
                      , and email:{" "}
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