import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalNearMe() {
  const faqs = [
    {
      q: "Is Balprada an Ayurvedic hospital near me in Moradabad?",
      a: "Balprada has a main branch in Bilari and a Moradabad branch on Delhi Road, so patients across the Moradabad region can choose the branch that is closer to them.",
    },
    {
      q: "What are the OPD timings?",
      a: "OPD consultation runs from 10:00 AM to 2:00 PM, and the ashram and clinic are open 7 days a week. Please call before visiting.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Which doctor is available on Sundays?",
      a: "Vaidya ji is available at the Moradabad branch on Sundays. Please call 9410447000 to confirm.",
    },
    {
      q: "What should I carry for consultation?",
      a: "Carry previous prescriptions, recent reports, current medicines and a note of symptoms, duration and diet routine.",
    },
    {
      q: "Is pathology testing available?",
      a: "Yes, Balprada Pathology Lab supports blood, urine and diagnostic testing.",
    },
    {
      q: "Can I visit for chronic conditions?",
      a: "Yes, Balprada supports chronic concerns through consultation, Ayurvedic medicines, food discipline, supportive facilities and follow-up. Emergency cases should use urgent medical care first.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call or WhatsApp 8126364606, use the appointment page on the website, or email balpradaindia@gmail.com.",
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
                Finding a Trusted Ayurvedic Hospital Near You
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Why Patients Search for an Ayurvedic Hospital Nearby
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families dealing with long-term health concerns such as kidney
                  problems, liver disorders, diabetes, thyroid imbalance and joint
                  or lifestyle issues often prefer a hospital close to home, so
                  that regular follow-up visits remain practical and do not become
                  a burden on the patient or the caretakers.
                </li>
                <li>
                  A nearby Ayurvedic hospital makes it easier to visit again and
                  again for review, because Ayurvedic care is usually a gradual
                  process that depends on medicines, diet discipline and routine
                  correction rather than a single quick visit.
                </li>
                <li>
                  Many patients want a place that combines consultation,
                  medicines, diagnostic testing and supportive therapies under one
                  roof, so they are not forced to run between several clinics,
                  laboratories and pharmacies.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What Makes Balprada a Reliable Choice
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center has been serving
                  patients since 1991 and today carries 35 years of experience in
                  natural Ayurvedic care, experienced doctors, disciplined
                  routines and a service-first spirit.
                </li>
                <li>
                  The hospital works with in-house herbal medicines prepared by
                  Balprada Herbal Wellness, so patients receive medicines from the
                  same trusted institution that plans their treatment.
                </li>
                <li>
                  Care does not stop at a prescription. The team supports each
                  patient with diet guidance, lifestyle correction, panchakarma,
                  yoga, naturopathy and regular follow-up wherever these are
                  suitable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital and Research Center
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Legacy of Seva Since 1991
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada was started in 1991 by Sw. Vaidya Vijay Pal Singh Ji
                  with a vision of Ayurvedic healing combined with social service,
                  and that spirit of seva still guides how patients and families
                  are treated today.
                </li>
                <li>
                  The institution brings together an Ayurvedic chikitsalaya,
                  research, herbal wellness, pathology, yoga, naturopathy and
                  ashram-based social service in one trusted ecosystem.
                </li>
                <li>
                  Staff are known among patients for humble and warm behavior, and
                  patient reviews on the website often mention a peaceful ashram
                  atmosphere and genuine herbal preparations.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Mission and Care Philosophy
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The mission is to provide reliable Ayurvedic care for chronic
                  and serious health conditions through consultation,
                  self-prepared medicines, lifestyle guidance and compassionate
                  service.
                </li>
                <li>
                  Balprada aims to help patients and families find a calmer and
                  clearer path through illness with discipline, hope and natural
                  healing.
                </li>
                <li>
                  The guiding thought of the late Vaidya Shri Vijaypal Singh Ji,
                  that positivity gives courage in difficult times, remains part
                  of the way the team encourages every patient.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where Is Balprada Located? Two Branches in the Moradabad Region
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Main Branch in Bilari
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  The main branch is the Ashram and Clinic, which stays open
                  throughout the week, with consultation from 10:00 AM to 2:00 PM
                  every day.
                </li>
                <li>
                  For appointments and directions you can call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  or send a WhatsApp message on the same number before you start
                  your journey.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Moradabad Branch on Delhi Road
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                  Uttar Pradesh 244001.
                </li>
                <li>
                  Vaidya ji is available at the Moradabad branch on Sundays, so
                  patients who cannot travel on weekdays can plan their
                  consultation for the weekend.
                </li>
                <li>
                  Please call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  before visiting, because branch-specific availability and
                  consultation flow are best confirmed by phone.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Who Can Reach Balprada Easily
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients from Moradabad, Bilari, Rampur, Sambhal, Amroha, Bijnor
                  and nearby districts of Uttar Pradesh search for an Ayurvedic
                  hospital close to them, and both branches are positioned to
                  serve this region.
                </li>
                <li>
                  Calling ahead helps the team guide you on the best branch, the
                  best day to visit and the documents to carry, which saves time
                  and avoids a wasted trip.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                OPD Timings and Free OPD Day
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Daily OPD Information
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ashram and clinic are open 7 days a week for guided consultation
                  and follow-up care, and the consultation timing is 10:00 AM to
                  2:00 PM.
                </li>
                <li>
                  Patients are advised to call or WhatsApp before visiting,
                  especially when they want to meet a particular doctor or visit a
                  particular branch.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Free OPD on the 15th of Every Month
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  giving families a simple way to meet the vaidya and understand
                  the next care step without worrying about consultation cost on
                  that day.
                </li>
                <li>
                  Because the free OPD day can be busy, it is wise to reach early
                  within the consultation window and keep your reports and
                  medicines ready.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns We Support with Ayurvedic Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Kidney and Urinary Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic consultation and lifestyle care are offered for kidney
                  function concerns, swelling, kidney stones and diabetes-linked
                  kidney problems.
                </li>
                <li>
                  Patients are guided on diet discipline, fluid and salt habits
                  and medicine routine, with regular review of reports so the
                  doctor can adjust the plan step by step.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Liver and Digestive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Medicine, diet and routine-based care are available for liver
                  health, fatty liver, jaundice and weak digestion.
                </li>
                <li>
                  Since Ayurveda treats digestion as the base of health, food
                  timing, food quality and daily habits are corrected along with
                  herbal medicines.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Cancer Supportive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sensitive supportive care helps patients with strength and
                  recovery, diet guidance and stress support during serious
                  illness.
                </li>
                <li>
                  This care is meant to support energy, appetite and emotional
                  balance, and it is planned with respect for the patient and the
                  family.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Heart and Lifestyle Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Integrated Ayurvedic and lifestyle care is available for heart
                  concerns, blood pressure, weight and stress.
                </li>
                <li>
                  Doctors look at food habits, sleep, activity and mental stress
                  together, because lifestyle disorders rarely have a single
                  cause.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Diabetes and Thyroid Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Personalized support is offered for blood sugar, hypothyroidism,
                  hyperthyroidism, energy, weight and metabolic balance.
                </li>
                <li>
                  Regular follow-up lets the team observe how the body responds
                  and refine diet and routine guidance over time.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Womens Wellness
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Private, sensitive and personalized care is available for
                  hormonal balance, menstrual health and weakness.
                </li>
                <li>
                  Women can discuss concerns openly with the doctor and receive a
                  practical plan that fits their routine and family
                  responsibilities.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities That Support Your Treatment
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Panchakarma Therapies
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma therapies are planned to support cleansing, balance
                  and recovery according to individual assessment, and they are
                  guided by the doctor rather than offered as a fixed package.
                </li>
                <li>
                  Procedures are supported by advice on food, rest and daily
                  routine, so the benefit of therapy is not lost once the patient
                  returns home.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Yoga, Naturopathy and Meditation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga and Ayurveda together support balance across body, mind and
                  breath, helping patients build discipline, strength and calm.
                </li>
                <li>
                  Naturopathy works with the natural healing capacity of the body
                  through simple, nature-led practices, while guided meditation
                  and breath awareness support restful sleep and emotional
                  steadiness.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Physiotherapy
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Professional physiotherapy supports safe movement, mobility,
                  strength and recovery alongside the wider care plan.
                </li>
                <li>
                  Mobility assessment and guided rehabilitation help patients who
                  are weak after long illness or who face movement difficulty.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Balprada Pathology Lab
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The pathology lab provides blood and urine tests and diagnostic
                  support, so the doctor can review health details more clearly
                  and plan care on the basis of reports.
                </li>
                <li>
                  Having testing within the same institution reduces delay and
                  keeps your records connected to your treatment plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Herbal Medicines and Pharmacy
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness prepares traditional and specialized
                  Ayurvedic medicines under organized conditions with modern
                  support systems.
                </li>
                <li>
                  Balprada Enterprises also works with herbal tea, spices, oils,
                  avaleh, herbal flour and other Ayurvedic products, and product
                  questions can be shared by phone or the contact form.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Your Treatment Journey Works
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Step One: Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews your concern, medical history, reports and
                  current medication before suggesting the next care step.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step Two: Personalized Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Care is planned with Balprada Ayurvedic medicines, diet
                  discipline and lifestyle correction wherever suitable for your
                  condition.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step Three: Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga, naturopathy, panchakarma, physiotherapy and pathology
                  support may be added to make the journey more complete.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step Four: Regular Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up depends on the condition, and the team may review
                  reports, symptoms, food routine and medicine response over time
                  to adjust guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Bring on Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring previous prescriptions, recent blood and urine reports,
                  scans if available, and a list of all medicines you are taking
                  at present.
                </li>
                <li>
                  Write a short note about your symptoms, how long you have had
                  them and your daily diet routine, because this helps the doctor
                  understand your concern quickly.
                </li>
                <li>
                  Keep one family member with you if the patient is elderly or
                  weak, so that instructions about diet and medicine are
                  understood by the person who will manage them at home.
                </li>
                <li>
                  Do not stop any current medicine on your own. Discuss every
                  ongoing medicine with the doctor first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ashram Environment and Jansewa
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Healing in a Peaceful Setting
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The ashram brings naturopathy, yoga, meditation, panchakarma and
                  physiotherapy together in a calm environment backed by 35 years
                  of experience.
                </li>
                <li>
                  A quiet surrounding helps patients follow routine, rest well and
                  focus on recovery away from daily stress.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Service Beyond the Clinic
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Jansewa Sansthan carries social service work that
                  includes elder care, Navtarun Ashram, residential support
                  initiatives and Gaushala-based service.
                </li>
                <li>
                  This service-first outlook is the reason many patients describe
                  their experience as welcoming and caring.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Choose the Right Ayurvedic Hospital Near You
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Check how long the hospital has been working and whether its
                  doctors explain the treatment plan clearly instead of giving
                  vague promises.
                </li>
                <li>
                  Look for diagnostic support, medicine preparation and follow-up
                  care in the same place, because continuity makes treatment
                  easier to manage.
                </li>
                <li>
                  Read patient reviews carefully and ask the hospital about OPD
                  timings, branch locations and what to carry before you travel.
                </li>
                <li>
                  Remember that Ayurveda works as supportive and long-term care.
                  In any emergency, such as severe pain, breathlessness or sudden
                  worsening, seek urgent medical care first.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment at Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. Call or
                  WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  . Open daily, 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001. Call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  . Sunday vaidya availability, please call before visiting.
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  . Free OPD on the 15th of every month.
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