import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalKanthReviews() {
  const faqs = [
    {
      q: "Is Balprada Ayurvedic Hospital located in Kanth?",
      a: "No, the Main Branch is in Village Bhidwari, Tehsil Bilari, District Moradabad, and a second branch is in New Moradabad; patients from Kanth travel to either one.",
    },
    {
      q: "What do patient reviews say about Balprada?",
      a: "Reviews highlight knowledgeable vaidyas, genuine herbal medicines, a calm ashram setting and humble, kind staff.",
    },
    {
      q: "Are the reviews a guarantee of results?",
      a: "No, every patient responds differently, and responsible Ayurvedic care does not promise a guaranteed cure.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and free OPD is available on the 15th of every month.",
    },
    {
      q: "Which conditions can I consult for?",
      a: "You can consult for kidney, liver, heart, diabetes, thyroid, women&apos;s health and cancer supportive care concerns.",
    },
    {
      q: "What should I carry for the first visit?",
      a: "Bring old prescriptions, recent reports, current medicines and a note of symptoms and diet routine.",
    },
    {
      q: "Is pathology testing available?",
      a: "Yes, Balprada Pathology Lab supports blood, urine and diagnostic testing.",
    },
    {
      q: "Can I continue my current medicines?",
      a: "Yes, continue them unless your own doctor advises otherwise, and always tell the Balprada doctor what you take.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call 8126364606, message on WhatsApp, or use the Book Appointment page on the website.",
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
                Ayurvedic Hospital Kanth Reviews: What Patients Should Know
                Before Choosing Balprada
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Introduction
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Kanth and nearby areas of Moradabad district often
                  search for Ayurvedic hospital reviews before booking a
                  consultation, especially for long-standing concerns such as
                  kidney, liver, heart, diabetes, thyroid or women&apos;s health
                  issues.
                </li>
                <li>
                  This page explains what patients say about Balprada Ayurvedic
                  Hospital &amp; Research Center, what the hospital actually
                  offers, and how you can judge any Ayurvedic hospital fairly
                  before you visit.
                </li>
                <li>
                  Balprada has served patients since 1991 and is built on the
                  seva sankalp of Sw. Vaidya Vijay Pal Singh Ji, combining
                  consultation, in-house herbal medicines, yoga, naturopathy,
                  Panchakarma and ashram-based care.
                </li>
                <li>
                  Everything below is drawn from the hospital&apos;s own website
                  and its published patient feedback, so you can compare it with
                  your own experience on the day you visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Kanth Patients Look for Ayurvedic Hospital Reviews
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chronic conditions need long-term trust, so patients naturally
                  want to hear from people who have already completed
                  consultations and follow-ups.
                </li>
                <li>
                  Many families in Kanth prefer a hospital where the vaidya
                  explains the plan, the diet and the medicines clearly instead
                  of rushing the visit.
                </li>
                <li>
                  Reviews help patients understand the atmosphere, staff
                  behaviour, medicine quality and follow-up discipline before
                  they travel for an appointment.
                </li>
                <li>
                  A review is helpful only when it describes real experiences
                  such as waiting time, clarity of advice and courtesy, rather
                  than making dramatic promises about outcomes.
                </li>
                <li>
                  Balprada is located in Tehsil Bilari, District Moradabad, and
                  also runs a branch in Moradabad city, which patients from Kanth
                  can compare when planning their visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital &amp; Research Center
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji,
                  and the institution now describes itself as bringing together
                  an Ayurvedic chikitsalaya, research, herbal wellness,
                  pathology, yoga, naturopathy and ashram-based social service.
                </li>
                <li>
                  The hospital states a mission of providing reliable Ayurvedic
                  care for chronic and serious health conditions through
                  consultation, self-prepared medicines, lifestyle guidance and
                  compassionate service.
                </li>
                <li>
                  The ashram and clinic stay open seven days a week, which gives
                  patients flexibility when planning a first visit or a
                  follow-up.
                </li>
                <li>
                  The site highlights 35 years of experience, experienced
                  doctors, disciplined routines and a service-first spirit as the
                  core of its care experience.
                </li>
                <li>
                  Care is described as personal: the doctor first reviews the
                  concern, history, reports and current medicines before
                  suggesting the next step.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patient Reviews Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The homepage section called Stories of Trust and Healing
                  features Google reviews, Instagram reels and video stories from
                  patients and visitors.
                </li>
                <li>
                  Reviewers repeatedly praise the guidance of Vaidya ji and the
                  hospital team, describing the explanations as knowledgeable and
                  caring.
                </li>
                <li>
                  Several reviews mention the calm, natural ashram surroundings
                  and say the peaceful environment supports patient confidence
                  and recovery.
                </li>
                <li>
                  Patients also comment on the use of genuine herbal preparations
                  and the discipline of the Ayurvedic routine that accompanies
                  treatment.
                </li>
                <li>
                  One reviewer, a doctor by profession, appreciates the kidney,
                  liver and chronic illness care and the serene healing
                  atmosphere.
                </li>
                <li>
                  Another visitor describes the staff as humble, kind and always
                  smiling, and says they felt welcomed and cared for during the
                  visit.
                </li>
                <li>
                  The Google reviews highlighted on the homepage carry five-star
                  ratings, and patients are welcome to compare them with the live
                  Google listing before deciding.
                </li>
                <li>
                  Reviews describe personal experiences only; no one can promise
                  the same result for every patient, because Ayurvedic response
                  depends on the condition, stage, age and discipline.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Read Ayurvedic Hospital Reviews Wisely
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Look for specific details such as how the consultation went,
                  how long the doctor spent listening, and whether diet and
                  routine were explained.
                </li>
                <li>
                  Be cautious about reviews that promise a complete cure or
                  guaranteed results, because responsible Ayurvedic care avoids
                  absolute claims.
                </li>
                <li>
                  Compare reviews across sources, including Google, social media
                  and word of mouth from people in Kanth who have actually
                  visited.
                </li>
                <li>
                  Check whether the hospital publishes real addresses, phone
                  numbers, doctor names and OPD timings, since transparency is a
                  good sign of trustworthiness.
                </li>
                <li>
                  Notice how the hospital talks about serious illness; a good
                  centre encourages patients to continue conventional care where
                  needed and uses Ayurveda as supportive care.
                </li>
                <li>
                  Treat reviews as one input, and make your final decision after
                  your own consultation and a clear conversation with the doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Supported at Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Kidney and Urinary Care:
                  </span>{" "}
                  Ayurvedic consultation and lifestyle care for kidney function,
                  swelling, stones and diabetes-linked kidney concerns.
                </li>
                <li>
                  <span className="font-semibold">
                    Liver and Digestive Care:
                  </span>{" "}
                  medicine, diet and routine-based care for liver health, fatty
                  liver, jaundice and weak digestion.
                </li>
                <li>
                  <span className="font-semibold">
                    Cancer Supportive Care:
                  </span>{" "}
                  sensitive supportive care for strength, diet, energy and
                  emotional balance during serious illness, offered alongside,
                  not instead of, conventional oncology.
                </li>
                <li>
                  <span className="font-semibold">
                    Heart and Lifestyle Care:
                  </span>{" "}
                  integrated Ayurvedic and lifestyle care for blood pressure,
                  diabetes, weight and stress concerns.
                </li>
                <li>
                  <span className="font-semibold">
                    Diabetes and Thyroid Care:
                  </span>{" "}
                  personalised support for blood sugar, thyroid function, energy,
                  weight and metabolic balance, including hypothyroidism and
                  hyperthyroidism.
                </li>
                <li>
                  <span className="font-semibold">Women&apos;s Wellness:</span>{" "}
                  private and sensitive care for hormonal balance, menstrual
                  health and weakness.
                </li>
                <li>
                  Each treatment area has its own page on the website, so Kanth
                  patients can read about their specific concern before calling.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes the Care Experience Different
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Healing is guided by traditional Ayurveda, with consultation,
                  herbal medicines, diet guidance and disciplined routines working
                  together for long-term balance.
                </li>
                <li>
                  A focused personal consultation shapes a practical care path
                  instead of a one-size-fits-all prescription.
                </li>
                <li>
                  Diet and lifestyle guidance supports the medicines, because
                  daily routine strongly influences how well a patient responds.
                </li>
                <li>
                  Regular follow-up keeps the treatment journey clear, so the
                  doctor can adjust guidance as reports and symptoms change.
                </li>
                <li>
                  The ashram setting adds a quiet, positive environment,
                  reflecting the founder&apos;s belief that staying positive
                  gives courage to face difficult circumstances.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Team
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
                  Private Limited and brings more than 7 years of experience in
                  herbal product research, pharmacy development and advisory work
                  in free health camps.
                </li>
                <li>
                  Vaidya ji is available at the Moradabad branch on Sundays, so
                  patients should call or WhatsApp before travelling.
                </li>
                <li>
                  The wider team of doctors, researchers and service-minded staff
                  works together so that consultation, medicines and follow-up
                  stay connected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities That Support the Care Journey
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Panchakarma:</span> traditional
                  procedures planned after individual assessment, with
                  doctor-guided scheduling and recovery support.
                </li>
                <li>
                  <span className="font-semibold">Yoga:</span> breath and posture
                  practice that helps patients build routine, strength and calm
                  alongside their treatment.
                </li>
                <li>
                  <span className="font-semibold">Naturopathy:</span> natural
                  therapies, detox support and lifestyle correction that work
                  with the body&apos;s own healing capacity.
                </li>
                <li>
                  <span className="font-semibold">Meditation:</span> guided
                  meditation and breath awareness that support emotional
                  steadiness, rest and better sleep.
                </li>
                <li>
                  <span className="font-semibold">Physiotherapy:</span> mobility
                  assessment, guided rehabilitation and strength support within
                  the wider care plan.
                </li>
                <li>
                  <span className="font-semibold">
                    Balprada Pathology Lab:
                  </span>{" "}
                  blood and urine tests and diagnostic support so doctors can
                  review reports clearly.
                </li>
                <li>
                  In-house herbal medicines and Balprada Enterprises products such
                  as herbal tea, spices, oils and avaleh are also available
                  through enquiry.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Consultation Process Step by Step
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Step one is consultation, where the doctor reviews the concern,
                  medical history, reports and current medication.
                </li>
                <li>
                  Step two is the Ayurvedic plan, built around Balprada&apos;s
                  medicines, diet discipline and lifestyle correction where
                  suitable.
                </li>
                <li>
                  Step three adds supportive facilities such as yoga,
                  naturopathy, Panchakarma and pathology as the doctor advises.
                </li>
                <li>
                  Step four is follow-up, where the team reviews reports,
                  symptoms, food routine and medicine response and adjusts
                  guidance over time.
                </li>
                <li>
                  Patients should carry previous prescriptions, recent reports,
                  current medicines and a short written note of symptoms,
                  duration and diet routine.
                </li>
                <li>
                  Never stop or change prescribed medicines on your own; discuss
                  every medicine with your doctor first.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                OPD Timings, Branches and Contact Details
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Consultation timing is 10:00 AM to 2:00 PM, and the ashram and
                  clinic are open seven days a week.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
                </li>
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415, phone{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001, phone{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  , with Sunday vaidya availability.
                </li>
                <li>
                  Call or WhatsApp before visiting to confirm branch-specific
                  availability and consultation flow.
                </li>
                <li>
                  Appointments can also be booked through the Book Appointment
                  page on the website.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Balprada Jansewa: Care Beyond Treatment
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada&apos;s Jansewa work includes a Vridhashram for elderly
                  and unsupported people and the Navtarun Ashram for children in
                  need.
                </li>
                <li>
                  The initiative also supports residential schooling and Gaushala
                  seva, carrying the same dignity and discipline as the
                  chikitsalaya.
                </li>
                <li>
                  Many visitors mention this service spirit when describing why
                  they trust the institution.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Practical Tips for Patients Coming from Kanth
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Plan the visit within the 10:00 AM to 2:00 PM consultation
                  window and call ahead to confirm the doctor&apos;s
                  availability.
                </li>
                <li>
                  Ask whether the Main Branch or the Moradabad Branch is better
                  for your concern, because Sunday vaidya availability differs by
                  branch.
                </li>
                <li>
                  Bring all reports, and let the doctor know about every medicine,
                  supplement and home remedy you currently use.
                </li>
                <li>
                  Consider coming on the 15th if you want to use the free OPD
                  consultation, and expect more patients on that day.
                </li>
                <li>
                  Keep a family member with you for serious or long-standing
                  conditions so that the diet and medicine instructions are
                  understood by everyone at home.
                </li>
                <li>
                  For emergencies such as chest pain, severe breathlessness,
                  heavy bleeding or loss of consciousness, go to the nearest
                  emergency hospital first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Responsible Care and Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic treatment supports the body over time and results
                  vary from person to person, so Balprada does not promise
                  guaranteed outcomes.
                </li>
                <li>
                  Patients with serious illness should keep their regular
                  specialist care and share Ayurvedic plans with their treating
                  doctor.
                </li>
                <li>
                  Honest reviews, clear consultation and steady follow-up are the
                  best foundations for long-term trust.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  If you are in Kanth and want to speak with the Balprada team,
                  call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  or send a WhatsApp message to book an appointment.
                </li>
                <li>
                  Visit balpradaindia.com to read about treatments, facilities,
                  doctors, OPD timings and the Jansewa initiative before you
                  travel.
                </li>
                <li>
                  Bring your reports, ask your questions openly and decide with
                  confidence after your own consultation.
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