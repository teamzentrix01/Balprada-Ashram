import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BestAyurvedicHospitalInIndia() {
  const faqs = [
    {
      q: "Is Balprada the best Ayurvedic hospital in India?",
      a: "Balprada has served patients since 1991 with in-house medicines, a pathology lab and supportive facilities. The best hospital for you depends on your condition, so we invite you to visit and decide.",
    },
    {
      q: "Which conditions does Balprada support?",
      a: "Kidney, liver, cancer supportive care, heart and lifestyle concerns, diabetes, thyroid and womens wellness.",
    },
    {
      q: "What are the OPD timings?",
      a: "10:00 AM to 2:00 PM, with the ashram and clinic open throughout the week. Please call before visiting.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Does Balprada have its own lab?",
      a: "Yes, Balprada Pathology Lab supports blood, urine and diagnostic testing.",
    },
    {
      q: "Can I consult on Sundays?",
      a: "Vaidya ji is available at the Moradabad branch on Sundays. Please call 9410447000 first.",
    },
    {
      q: "Does Ayurvedic care replace regular treatment?",
      a: "No, it works as supportive care. Please continue your current medicines until the doctor advises otherwise.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call or WhatsApp 8126364606, use the appointment page on the website or email balpradaindia@gmail.com.",
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
                Best Ayurvedic Hospital in India: What to Look For and Why
                Patients Choose Balprada
              </h1>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Judge the Best Ayurvedic Hospital in India
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Why No Single Ranking Fits Every Patient
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  India has many Ayurvedic hospitals, ashrams and clinics, and the
                  best choice depends on the health concern, the distance a family
                  can travel, the type of care needed and the level of follow-up
                  the patient can manage over several months.
                </li>
                <li>
                  Instead of relying only on advertisements or social media
                  claims, families should compare hospitals on clear and practical
                  points such as experience, doctors, medicine preparation,
                  diagnostic support, transparency and the way a hospital handles
                  follow-up.
                </li>
                <li>
                  Ayurveda is a long-term, personalized system of care, so the
                  right hospital is one that explains its plan honestly, asks for
                  your reports and history, and does not promise instant or
                  guaranteed results.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Key Points That Separate a Reliable Hospital from an Average One
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Years of continuous service: a hospital that has been working
                  for decades has seen many patients, many seasons and many types
                  of chronic conditions, and it has had time to build systems for
                  consultation and follow-up.
                </li>
                <li>
                  Visible doctors and clear roles: patients should be able to know
                  who is consulting, what experience that person has and how the
                  hospital team is organized.
                </li>
                <li>
                  Control over medicines: hospitals that prepare their own herbal
                  medicines can explain what goes into a formulation and keep a
                  closer eye on quality.
                </li>
                <li>
                  Diagnostic support: access to blood and urine tests helps the
                  doctor review progress with reports instead of guesswork.
                </li>
                <li>
                  Supportive therapies: diet guidance, yoga, naturopathy,
                  panchakarma and physiotherapy make the care journey more
                  complete than medicines alone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital and Research Center
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Seva-Based Beginning in 1991
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada was started in 1991 by Sw. Vaidya Vijay Pal Singh Ji
                  with a vision of Ayurvedic healing joined with social service,
                  and the institution today carries 35 years of experience in
                  natural Ayurvedic care.
                </li>
                <li>
                  The hospital brings together an Ayurvedic chikitsalaya,
                  research, herbal wellness, pathology, yoga, naturopathy and
                  ashram-based service under one trusted ecosystem.
                </li>
                <li>
                  The guiding message of the late Vaidya Shri Vijaypal Singh Ji,
                  that staying positive gives courage to face difficult
                  circumstances, continues to shape the way patients and families
                  are encouraged.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Mission Focused on Chronic and Serious Conditions
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The stated mission is to provide reliable Ayurvedic care for
                  chronic and serious health conditions through consultation,
                  self-prepared medicines, lifestyle guidance and compassionate
                  service.
                </li>
                <li>
                  The vision is to become a trusted Ayurvedic wellness and jansewa
                  center where traditional knowledge, modern organization and
                  community care work together for healthier lives.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Why a Visible Team Matters
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients feel more confident when they can see who is guiding
                  their care, and a hospital that is open about its doctors and
                  research staff gives families a clearer basis for trust.
                </li>
                <li>
                  Please call before your visit to confirm which doctor is
                  available on the day you plan to come, since availability can
                  differ by branch and weekday.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Supported with Ayurvedic Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Kidney and Urinary Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic consultation and lifestyle care are available for
                  kidney function concerns, kidney failure, kidney stones,
                  swelling and diabetes-linked kidney problems.
                </li>
                <li>
                  The doctor considers symptoms, medical history, current
                  treatment, food habits, sleep, stress and daily routine, and
                  reviews diagnostic reports where relevant before suggesting
                  guidance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Liver and Digestive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Medicine, diet and routine-based care are offered for fatty
                  liver, jaundice and weak digestion, with food timing and food
                  quality treated as an important part of recovery.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Cancer Supportive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sensitive supportive care focuses on strength and recovery, diet
                  guidance and stress support during serious illness, with
                  attention to energy, appetite and emotional balance.
                </li>
                <li>
                  This is supportive care and should be taken along with the
                  advice of the treating specialist, never in place of it.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Heart, Diabetes and Thyroid Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Integrated Ayurvedic and lifestyle care is available for blood
                  pressure, diabetes, obesity, hypothyroidism and hyperthyroidism.
                </li>
                <li>
                  Regular follow-up helps the team see how the body is responding
                  and adjust food and routine guidance over time.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Womens Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Private and personalized care is offered for hormonal balance,
                  menstrual health and weakness, in an environment where women can
                  speak openly about their concerns.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic Support at Balprada Pathology Lab
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Tests Available
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The in-house lab lists tests such as Complete Blood Count,
                  Thyroid Profile, Liver Function Test, Kidney Function Test,
                  Diabetes Profile with HbA1c, Lipid Profile, Urine Routine and
                  Microscopy, and Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Other routine and doctor-advised investigations may also be
                  available, so patients should contact the lab to confirm the
                  exact test, preparation, price and reporting time.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                How Reports Help Your Treatment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reports let the doctor understand the present condition, review
                  progress and coordinate care, which is especially useful for
                  kidney, liver, cancer and diabetes patients who need regular
                  monitoring.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities That Complete the Care Journey
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Panchakarma
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma therapies are planned to support cleansing, balance
                  and recovery according to individual assessment, with
                  doctor-guided planning and recovery support.
                </li>
                <li>
                  Before starting, patients are asked to share existing
                  conditions, medicines and mobility concerns so that the team can
                  plan safely.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Yoga, Naturopathy and Meditation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga helps build discipline, strength and calm, naturopathy uses
                  simple nature-led routines to support the natural healing
                  capacity of the body, and guided meditation supports sleep and
                  emotional steadiness.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Physiotherapy
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Professional physiotherapy supports safe movement, mobility,
                  strength and recovery, with mobility assessment and guided
                  rehabilitation alongside the wider plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                In-House Herbal Medicines
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness prepares traditional and specialized
                  Ayurvedic medicines under organized conditions with modern
                  support systems, so the hospital stays close to the quality of
                  what it prescribes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jansewa: Service Beyond Treatment
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Free and Subsidised Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Jansewa offers free and subsidised Ayurvedic healthcare
                  and consultations for underprivileged patients, a service that
                  has been part of the mission since 1991.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Community Initiatives
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Vridhashram is a home for elderly and unsupported
                  people, and Balprada Navtarun Ashram serves children in need
                  with residential school support.
                </li>
                <li>
                  Gaushala-based service is also part of the wider seva work,
                  which reflects the service-first spirit patients mention in
                  their reviews.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What Patients Say
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patient reviews on the website praise the humble and kind staff,
                  the natural ashram surroundings, the Ayurvedic discipline and
                  the genuine herbal preparations.
                </li>
                <li>
                  Reviews are personal experiences and individual results can
                  differ, so every patient should discuss expectations openly with
                  the doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Checklist to Compare Ayurvedic Hospitals Across India
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Questions Worth Asking Before You Decide
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask whether the hospital shares its address, phone numbers and
                  OPD timings openly. Balprada lists both branches with phone
                  numbers and hours, so families can verify details before they
                  start their journey.
                </li>
                <li>
                  Ask who prepares the medicines and under what conditions,
                  because a hospital with its own herbal wellness unit can explain
                  its formulations more clearly than one that only buys ready
                  products.
                </li>
                <li>
                  Ask how reports will be used, how often follow-up is needed and
                  whether the doctor will review your diet and routine, since good
                  Ayurvedic care depends on regular review and not on a single
                  prescription.
                </li>
                <li>
                  Ask about test preparation, price and reporting time directly
                  with the lab, as the pathology page itself advises patients to
                  confirm these points by phone.
                </li>
                <li>
                  Be careful with any place that promises a guaranteed cure, asks
                  you to stop all current medicines at once or avoids explaining
                  the plan in simple words.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Support Beyond Medicines
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Food, Sleep and Routine
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada looks at food habits, sleep, stress and daily routine
                  along with symptoms, because in Ayurveda digestion and daily
                  habits are the base on which medicines can work.
                </li>
                <li>
                  Diet discipline is treated as part of the treatment, and the
                  doctor guides patients on what to continue, what to reduce and
                  how to keep a steady routine at home.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Helpful Reading on the Balprada Blog
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients who want to understand the basics before a visit can
                  read the guides on Agni in Ayurveda, Ama and toxins, Ayurvedic
                  daily routine, Ritucharya and what happens in the first
                  Ayurvedic consultation.
                </li>
                <li>
                  These guides help families prepare better questions for the
                  doctor and understand why routine matters in long-term care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning a Visit from Another City
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Practical Travel Tips
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  before you travel, share your main concern and confirm the
                  branch, the day and the doctor so that your journey is not
                  wasted.
                </li>
                <li>
                  Plan to arrive within the consultation window of 10:00 AM to
                  2:00 PM, and reach early on the 15th of the month when free OPD
                  may bring more patients.
                </li>
                <li>
                  Carry all earlier reports in one folder along with a list of
                  medicines, and bring a family member who can help remember the
                  diet and medicine instructions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Treatment Works Step by Step
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Consultation and Planning
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews the concern, medical history, reports and
                  current medication, and then plans care with Ayurvedic
                  medicines, diet discipline and lifestyle correction where
                  suitable.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Supportive Care and Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga, naturopathy, panchakarma, physiotherapy and pathology
                  support may be added to the plan, and regular follow-up lets the
                  team observe progress and adjust guidance.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What to Bring on the First Visit
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring previous prescriptions, recent reports, current medicines
                  and a clear note of symptoms, duration and diet routine.
                </li>
                <li>
                  Do not stop any ongoing medicine on your own, and share every
                  medicine with the doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">Plan Your Visit</h2>

              <h3 className="mb-3 font-serif text-2xl">
                Main Branch in Bilari
              </h3>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                  Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  Open daily, 10:00 AM to 2:00 PM. Call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 font-serif text-2xl">
                Moradabad Branch on Delhi Road
              </h3>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar
                  Pradesh 244001.
                </li>
                <li>
                  Vaidya ji is available on Sundays, so please call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  before visiting.
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                </li>
              </ul>

              <h3 className="mb-3 font-serif text-2xl">
                Important Note for Patients
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Ayurvedic care supports long-term health and does not replace
                  emergency treatment. In case of severe pain, breathlessness or
                  sudden worsening, seek urgent medical care first.
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