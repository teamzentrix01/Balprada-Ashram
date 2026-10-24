import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHospitalServices() {
  const faqs = [
    {
      q: "What services does Balprada Hospital offer?",
      a: "Ayurvedic OPD, disease-specific care, panchakarma, yoga, naturopathy, meditation, physiotherapy, pathology lab, medicines and ashram care.",
    },
    {
      q: "Which diseases are treated?",
      a: "Kidney, liver, cancer supportive care, heart, blood pressure, diabetes, thyroid and women's health concerns.",
    },
    {
      q: "Is there a pathology lab?",
      a: "Yes, Balprada Labs offers blood, urine and other diagnostic tests in-house.",
    },
    {
      q: "Is free OPD available?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "How can I book an appointment?",
      a: "Use the website appointment page, call 8126364606 or 9410447000, or message on WhatsApp.",
    },
    {
      q: "Does Balprada make its own medicines?",
      a: "Yes, Balprada Herbal Wellness prepares traditional and patent Ayurvedic medicines.",
    },
    {
      q: "Should I stop my current medicines?",
      a: "No, continue them unless your own doctor advises otherwise and inform the vaidya about them.",
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
                Balprada Hospital Services: Complete Ayurvedic Care Under One
                Roof
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Balprada Ayurvedic Hospital &amp; Research Center Services
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. About Our Services
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Ayurvedic Hospital &amp; Research Center has
                      served patients since 1991, when Sw. Vaidya Vijay Pal
                      Singh Ji began the work with a vision of ayurvedic healing
                      and social service, and the same seva spirit now shapes
                      every service offered at the hospital.
                    </li>
                    <li>
                      The services bring together consultation, Ayurvedic
                      medicines, panchakarma, yoga, naturopathy, meditation,
                      physiotherapy and pathology testing, so a patient can
                      follow one connected care plan instead of moving between
                      unrelated places.
                    </li>
                    <li>
                      With 35 years of experience, two branches in the Moradabad
                      region and an ashram that stays open seven days a week,
                      Balprada tries to make good Ayurvedic care simple to reach
                      for families from towns and villages around Moradabad.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic OPD and Consultation Services
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Doctor Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya begins every consultation by understanding the
                      health concern, medical history, old reports and current
                      medicines, because a careful first conversation decides how
                      safe and useful the whole treatment plan will be.
                    </li>
                    <li>
                      The main branch in Moradabad district runs the OPD daily
                      from 10:00 AM to 2:00 PM, and the Moradabad branch on Delhi
                      Road offers Vaidya ji on Sundays, so patients can pick the
                      branch that suits their travel.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Free OPD on the 15th of Every Month
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Free OPD consultation is available on the 15th of every
                      month, which gives new patients an easy way to meet the
                      vaidya and understand the Balprada approach before
                      committing to a long treatment.
                    </li>
                    <li>
                      Patients are advised to call or message before visiting, so
                      the team can confirm availability at the chosen branch and
                      avoid a wasted journey.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Appointment Booking
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Appointments can be booked through the website appointment
                      page, by calling{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      at the main branch or{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      at the Moradabad branch, or by sending a WhatsApp message
                      to{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                      .
                    </li>
                    <li>
                      The email address{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>{" "}
                      is also available for questions, and it is wise to carry
                      earlier prescriptions and test reports to the first visit.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Disease-Specific Treatment Services
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care is offered for
                      kidney failure, kidney stones, swelling and diabetes-linked
                      kidney concerns, with each plan built around the
                      patient&apos;s reports and daily routine.
                    </li>
                    <li>
                      Kidney care at Balprada supports the regular treatment
                      advised by the patient&apos;s own doctor, and patients are
                      never asked to stop prescribed medicines or dialysis
                      without proper medical guidance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicine, diet and routine-based care is available for
                      fatty liver, jaundice and weak digestion, with simple
                      corrections in meal timing, food choices and sleep forming
                      the base of the plan.
                    </li>
                    <li>
                      Liver function test results from the in-house lab help the
                      doctors follow progress at each follow-up visit and adjust
                      the plan calmly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Sensitive Ayurvedic supportive care is provided for
                      strength and recovery, diet guidance and stress support
                      during serious illness, always alongside and never instead
                      of the main treatment advised by the cancer specialist.
                    </li>
                    <li>
                      Family members are included in the conversation, and the
                      team speaks honestly about what supportive care can offer,
                      so the patient and family can decide with a clear mind.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Blood Pressure and Lifestyle Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care is available for
                      blood pressure, diabetes, obesity and heart-related
                      concerns, combining herbal medicines with food, activity
                      and stress guidance.
                    </li>
                    <li>
                      Patients are advised to continue their regular medicines
                      until their own doctor says otherwise, while Balprada works
                      on discipline in diet and routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Personalized support for blood sugar, thyroid function,
                      energy, weight and metabolic balance is offered for
                      diabetes, hypothyroidism and hyperthyroidism.
                    </li>
                    <li>
                      Diabetes profile and thyroid profile tests in the lab make
                      it easier to review numbers and discuss progress during
                      follow-up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private, sensitive and personalized care is available for
                      hormonal balance, menstrual health and general weakness,
                      with enough time given to listen to each woman&apos;s
                      concerns.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Therapy and Wellness Facilities
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma therapies are planned to support cleansing,
                      balance and recovery after individual assessment, and they
                      include traditional procedures, doctor-guided planning and
                      recovery support.
                    </li>
                    <li>
                      Food, rest and daily-routine guidance is given along with
                      therapy, because the benefit of panchakarma depends on how
                      the patient lives during and after the treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga and Ayurveda together support balance across body,
                      mind and breath, helping patients build discipline,
                      strength and calm through breath and posture practice.
                    </li>
                    <li>
                      Regular yoga also supports daily routine building and
                      stress management, which matter greatly in long-term
                      conditions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy works with the body&apos;s natural healing
                      capacity through simple, nature-led practices, detox
                      support and lifestyle correction that patients can continue
                      at home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Guided meditation and breath awareness help steady the
                      emotions, improve sleep and make the healing journey feel
                      calmer for both patients and attendants.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Professional physiotherapy supports safe movement, mobility,
                      strength and recovery through mobility assessment and
                      guided rehabilitation, alongside the wider care plan.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Pathology Lab Services
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Tests Available
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The in-house lab provides Complete Blood Count, Thyroid
                      Profile including TSH, T3 and T4, Liver Function Test,
                      Kidney Function Test, Diabetes Profile with blood sugar and
                      HbA1c, Lipid Profile, Urine Routine and Microscopy, and
                      Vitamin B12 and Vitamin D tests.
                    </li>
                    <li>
                      Other routine or doctor-advised tests may also be available,
                      and patients should contact the lab to confirm the test,
                      any preparation needed and the charges.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Sample and Reports
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Seven of the listed tests need a blood sample, while Urine
                      Routine and Microscopy needs a fresh urine sample, and the
                      team explains this at the time of testing.
                    </li>
                    <li>
                      Reports support report-based care, helping doctors
                      understand the condition and track progress, so patients
                      should bring earlier reports for comparison during every
                      follow-up.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines and Herbal Products
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Balprada Herbal Wellness Private Limited
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The pharmacy prepares traditional and patent Ayurvedic
                      medicines in an organized manner at the main branch,
                      supported by modern systems and research-led herbal
                      wellness work.
                    </li>
                    <li>
                      In-house preparation helps the doctors stay confident about
                      the quality of the medicines they prescribe to patients.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Balprada Enterprises
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea, spices, oils,
                      herbal flour, gram flour, avaleh, pickles, murabba and
                      other grain-based wellness products for everyday use.
                    </li>
                    <li>
                      Product inquiries and custom herbal preparation support are
                      available, and the Organic Food and Products pages on the
                      website carry further details.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ashram and Social Service
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Ashram Environment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada Ashram offers a peaceful, nature-led setting
                      where Ayurveda, yoga, naturopathy, meditation,
                      panchakarma and physiotherapy come together with clinical
                      guidance.
                    </li>
                    <li>
                      Patients and attendants often describe the surroundings as
                      calm and the staff as humble and kind, which helps patients
                      rest and follow the routine with a settled mind.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Balprada Jansewa Sansthan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The social service wing runs Vridhashram for elderly people
                      and those without support, Navtarun Ashram for children in
                      need, residential school support and Gaushala seva.
                    </li>
                    <li>
                      This service work reflects the thought of the late Vaidya
                      Shri Vijaypal Singh Ji, who taught that staying positive
                      gives courage to face difficult circumstances.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Trust Balprada Services
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Experience and Tradition
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Thirty-five years of continuous work, guided by the seva
                      sankalp of the founder, has given the hospital deep
                      experience with chronic and serious conditions that
                      families often bring after trying many other options.
                    </li>
                    <li>
                      Google reviews from patients mention knowledgeable vaidyas,
                      genuine herbal preparations, a serene atmosphere and staff
                      who greet everyone with a smile, which reflects the
                      service-first spirit the institution tries to keep alive.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Everything in One Place
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation, medicines, therapies, diagnostics and ashram
                      care are all part of the same ecosystem, which saves
                      patients time, travel and confusion, especially elderly
                      patients and those who need an attendant with them.
                    </li>
                    <li>
                      The doctors can read lab reports from Balprada Labs
                      together with the patient&apos;s symptoms, so decisions at
                      follow-up visits are based on actual results rather than
                      guesswork.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Who Can Use These Services
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients with long-standing kidney, liver, sugar, thyroid,
                      blood pressure or heart concerns who want Ayurvedic and
                      lifestyle support alongside their regular medical care.
                    </li>
                    <li>
                      Patients dealing with serious illness who need supportive
                      care for strength, diet, energy and emotional balance,
                      planned sensitively and honestly.
                    </li>
                    <li>
                      Women who prefer a private and personalized consultation
                      for hormonal, menstrual or weakness-related concerns.
                    </li>
                    <li>
                      Families looking for panchakarma, yoga, naturopathy or
                      physiotherapy support in a calm environment, or those who
                      simply want a trusted second opinion from an Ayurvedic
                      vaidya.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Promise of Safe and Honest Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada does not ask patients to abandon dialysis, insulin,
                  cancer treatment or any other prescribed care, and it
                  encourages patients to keep their treating doctors informed
                  about the Ayurvedic plan.
                </li>
                <li>
                  No honest practitioner can promise guaranteed results, because
                  outcomes depend on the condition, its stage, the
                  patient&apos;s discipline and regular follow-up, and the
                  Balprada team explains this openly from the first visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Care Works
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Health concern, medical history, reports and current
                      medication are understood before any plan is suggested.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Personalized Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic medicines, diet and lifestyle guidance are
                      planned responsibly, with clear explanation to the patient
                      and family.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, panchakarma, physiotherapy or
                      diagnostics are added when they help the care plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Follow-up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular review helps the team adjust guidance according to
                      progress and support long-term discipline.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">Visit Balprada</h2>

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
                        Bilari, District Moradabad, Uttar Pradesh 244415, open
                        daily from 10:00 AM to 2:00 PM, phone and WhatsApp{" "}
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
                        F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                        Uttar Pradesh 244001, Vaidya ji available on Sundays,
                        call{" "}
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