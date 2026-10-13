import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaRampurToBalpradaHospital() {
  const faqs = [
    {
      q: "Q1. Why do patients from Rampur choose Balprada?",
      a: "For consultation, in-house medicines, ashram-based care and 35 years of experience.",
    },
    {
      q: "Q2. Which branch should I visit?",
      a: "The Main Branch in Bilari is open daily. Call before visiting the Moradabad Branch.",
    },
    {
      q: "Q3. What are the consultation timings?",
      a: "Consultations run from 10:00 AM to 2:00 PM. Call to confirm availability.",
    },
    {
      q: "Q4. Is there a free consultation?",
      a: "Yes, free OPD is available on the 15th of every month.",
    },
    {
      q: "Q5. How do I book an appointment?",
      a: "Use the online form, WhatsApp 8126364606, call, or email the team.",
    },
    {
      q: "Q6. Are Balprada products available?",
      a: "Herbal products can be enquired about through the contact form or phone.",
    },
    {
      q: "Q7. Can I continue my regular medicines?",
      a: "Yes. Change prescribed medicines only under your treating doctor&apos;s guidance.",
    },
    {
      q: "Q8. Is pathology support available?",
      a: "Yes, Balprada Pathology Lab offers blood and urine testing support.",
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
                Rampur to Balprada Ayurvedic Hospital
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients and families from Rampur who are searching for a
                  dependable Ayurvedic hospital often want to know more than an
                  address. They want to know who runs the hospital, how long it
                  has been serving patients, what kind of care is offered and
                  whether the journey will be worthwhile.
                </li>
                <li>
                  Balprada has offered Ayurvedic care since 1991, built on the
                  seva sankalp of Sw. Vaidya Vijay Pal Singh Ji. The hospital
                  cites 35 years of experience and combines consultation,
                  in-house medicines, Panchakarma, yoga, naturopathy,
                  meditation, physiotherapy, a pathology lab and ashram-based
                  service under one roof.
                </li>
                <li>
                  Every plan is personalised, no outcome is promised, and
                  Ayurvedic care is meant to complement, never replace, the
                  advice of your treating doctor. If you are travelling from
                  Rampur, the sections below explain who we are and how to
                  connect with the team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital &amp; Research Center
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Legacy of Seva
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada was founded in 1991 with a focus on seva, or
                      service, carrying forward Ayurvedic healing and community
                      care. Over the years it has grown into an Ayurvedic
                      chikitsalaya that brings together research, herbal
                      wellness, pathology, yoga, naturopathy and ashram-based
                      social service.
                    </li>
                    <li>
                      The hospital describes its mission as providing reliable
                      Ayurvedic care for chronic and serious health conditions
                      through consultation, self-prepared medicines, lifestyle
                      guidance and compassionate service, with an emphasis on
                      long-term healing through disciplined routines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Vision and Values
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada aims to become a trusted Ayurvedic wellness and
                      community service centre where traditional knowledge,
                      modern organisation and community care work together for
                      the benefit of patients.
                    </li>
                    <li>
                      Its stated values are discipline, hope and natural healing,
                      along with a service-first spirit. These values shape the
                      way consultations are conducted, the way medicines are
                      prepared and the way patients are guided at every visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Doctors and Care Team
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. U. S. Sharma is listed on the Team page as having more
                      than 20 years of experience in Ayurvedic practice. He
                      consults on kidney, liver and other chronic health
                      concerns, and his focus areas include chronic disease care
                      and Ayurvedic consultation.
                    </li>
                    <li>
                      Dr. Chetan Anand, associated with Balprada Herbal Wellness
                      Private Limited, is listed with more than seven years of
                      experience in herbal product research and development, and
                      he also advises on free health camps.
                    </li>
                    <li>
                      The Moradabad Branch offers vaidya availability on Sundays,
                      so patients who plan to meet the vaidya there should call
                      before visiting. Consultation timing and doctor
                      availability can differ between branches.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Balprada&apos;s Approach to Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care begins with the complete health picture. Before any
                      Ayurvedic guidance is suggested, the doctor considers
                      symptoms, medical history, current treatment, food habits,
                      sleep, stress and daily routine, and diagnostic reports are
                      reviewed where relevant, so that advice is based on your
                      situation and not on a fixed formula.
                    </li>
                    <li>
                      The plan is personalised and may include Ayurvedic
                      medicines, diet guidance, lifestyle correction and
                      supportive facilities. Two patients with the same diagnosis
                      may receive different advice, because age, strength,
                      digestion, routine and other medicines all matter.
                    </li>
                    <li>
                      Progress is reviewed regularly so that guidance remains
                      practical and responsible. Follow-up is treated as an
                      important part of care, not an optional extra, because
                      long-term conditions usually need steady discipline and
                      timely adjustments.
                    </li>
                    <li>
                      Patients are encouraged to ask questions, to bring a family
                      member and to speak openly about any worries, since a clear
                      understanding of food, routine and medicine timing makes it
                      much easier to follow the plan at home.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Look for a Trusted Ayurvedic Hospital
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chronic conditions affect the whole household, so many families
                  prefer a place that offers consultation, medicines, diet advice
                  and testing support together, instead of moving between several
                  clinics without a clear plan.
                </li>
                <li>
                  A trusted hospital is one that explains its approach honestly,
                  lists its addresses and phone numbers openly, welcomes
                  questions before you travel and does not promise a guaranteed
                  cure. Balprada follows this approach and encourages patients to
                  call before visiting.
                </li>
                <li>
                  Continuity matters as well. A hospital that has served patients
                  for 35 years, and that keeps its follow-up and review process
                  simple, gives families confidence that their care will not be
                  left unfinished.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                In-House Medicines and Herbal Wellness
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada places importance on self-prepared, in-house Ayurvedic
                  medicines, which are chosen after individual assessment and
                  explained to the patient with clear guidance on timing,
                  duration and diet. Medicines are never meant to replace the
                  tablets prescribed by your own doctor.
                </li>
                <li>
                  Traditional formulations such as avaleh and other herbal
                  preparations are made under Balprada Herbal Wellness processes,
                  which is a large part of why patients associate the hospital
                  with quality and continuity of care.
                </li>
                <li>
                  The Products section also lists herbal tea and spices, Ayurvedic
                  oils for guided use, herbal flour, gram flour, pickle, murabba
                  and dalia. Patients who are interested can enquire through the
                  contact form or by phone, and custom herbal product requests
                  are discussed based on availability and suitability.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Supported
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney and urinary care covers kidney function concerns,
                  kidney stones, swelling and diabetes-related kidney concerns,
                  while liver and digestive care covers fatty liver, jaundice,
                  weak digestion and metabolic imbalance, always with regular
                  review of reports.
                </li>
                <li>
                  Heart and lifestyle care supports blood pressure, diabetes and
                  weight, and diabetes and thyroid care addresses blood sugar,
                  thyroid function, energy and metabolic balance through diet,
                  routine and monitored follow-up.
                </li>
                <li>
                  Cancer supportive care offers gentle help with strength, diet,
                  energy and emotional balance during serious illness, alongside
                  conventional treatment, and women&apos;s wellness offers
                  private, personalised care for hormonal balance, menstrual
                  health and weakness.
                </li>
                <li>
                  Each page on the website describes the approach in detail, and
                  patients are encouraged to read the page that matches their
                  concern before booking, so that the first consultation can be
                  more focused.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities Under One Care Journey
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma is planned to support cleansing, balance and
                  recovery according to individual assessment, and yoga helps
                  patients build discipline, strength and calm through breath and
                  posture practice, routine building and stress support.
                </li>
                <li>
                  Naturopathy uses simple, nature-led practices, meditation
                  supports emotional steadiness and restful sleep, and
                  physiotherapy supports safe movement, mobility, strength and
                  recovery alongside the wider treatment plan.
                </li>
                <li>
                  Balprada Pathology Lab provides blood and urine testing support
                  and other diagnostic help, so doctors can review your reports
                  along with your symptoms. The frequency and suitability of each
                  facility are decided after individual assessment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jansewa and the Spirit of Seva
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Jansewa is Balprada&apos;s charitable service arm, which the
                  website describes as offering free and subsidised Ayurvedic
                  healthcare and consultations for underprivileged patients, a
                  practice that goes back to 1991.
                </li>
                <li>
                  Its social service work includes Balprada Vridhashram for
                  elderly and unsupported people, Balprada Navtarun Ashram for
                  children in need, residential school support and gaushala
                  seva, described as dignity, discipline and compassionate
                  support for people who need shelter, care and community.
                </li>
                <li>
                  Free OPD consultation is also available on the 15th of every
                  month, which makes the first step easier for families from
                  Rampur who want to meet the team and understand the care plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reviews shared on the Balprada website describe the guidance of
                  the vaidya and the hospital team, the peaceful ashram
                  surroundings and the discipline of Ayurvedic routines as
                  helpful for patients&apos; comfort and recovery.
                </li>
                <li>
                  Other patients mention humble and kind staff who welcome
                  visitors with a smile, and a calm, supportive atmosphere that
                  makes them feel cared for during their visit.
                </li>
                <li>
                  Experiences differ from person to person, and these reviews are
                  not a promise of results. They are shared because many families
                  like to hear how earlier patients felt about the care and
                  environment before deciding to travel.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Patients from Rampur Can Book
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Online Appointment Request
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Open the Book Appointment page, share the patient details,
                      choose the Main Branch or the Moradabad Branch, select the
                      health concern, such as kidney, liver, cancer support,
                      heart, diabetes and thyroid or women&apos;s health, and
                      submit the request.
                    </li>
                    <li>
                      After you submit, the team guides you on consultation
                      timing and the next step, so please keep your phone
                      available for a call or message.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. WhatsApp, Phone or Email
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      You can send a WhatsApp message or call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      for the Main Branch, call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      for the Moradabad Branch, or email{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>{" "}
                      to ask questions before travelling.
                    </li>
                    <li>
                      Please call before visiting to confirm branch-specific
                      availability and consultation flow, particularly if you are
                      planning to meet the vaidya at the Moradabad Branch on a
                      Sunday.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Branches
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch in Bilari
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                      Bilari, District Moradabad, Uttar Pradesh 244415. Open
                      daily from 10:00 AM to 2:00 PM, and the ashram and clinic
                      are listed as open seven days a week.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                      Uttar Pradesh 244001. Sunday vaidya availability, so please
                      call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      before visiting.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Visit from Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please check the route on a map application using the Main
                  Branch address given above, and call the team if you need
                  guidance. Allow enough time to reach the hospital comfortably
                  within the consultation hours of 10:00 AM to 2:00 PM.
                </li>
                <li>
                  Patients who are elderly, weak or unwell should travel with a
                  family member, carry water and regular medicines, and avoid
                  very long journeys on the same day if the doctor has advised
                  rest.
                </li>
                <li>
                  If you are thinking of staying overnight, please ask the team
                  in advance, because arrangements should be confirmed directly
                  and not assumed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews your concern, history, reports and current
                  medication, and asks about food habits, sleep, stress and daily
                  routine before suggesting any Ayurvedic guidance.
                </li>
                <li>
                  A personalised plan may include Ayurvedic medicines, diet
                  guidance and lifestyle correction, with supportive facilities
                  added where suitable and regular follow-up to review progress.
                </li>
                <li>
                  Bring previous prescriptions, recent reports, current medicines
                  and notes on your symptoms and how long you have had them, so
                  the consultation can be productive.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Responsible Care and Safety
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care is supportive. Please do not stop or change
                  prescribed medicines on your own, and never delay dialysis,
                  cancer treatment or any specialist care advised by your doctor.
                </li>
                <li>
                  Chest pain, severe breathlessness, sudden weakness on one side
                  of the body, confusion, heavy bleeding, very high fever or
                  severe unbearable pain are emergencies and need immediate
                  hospital care. Emergencies should go to urgent medical care
                  first.
                </li>
                <li>
                  Ask the team about the purpose of every medicine, share all
                  other medicines and herbs you take, and attend follow-up visits
                  so that the plan can be reviewed responsibly.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Visit Balprada from Rampur
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch in Bilari</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                        Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
                      </li>
                      <li>
                        Open daily from 10:00 AM to 2:00 PM. Call{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>{" "}
                        or send a WhatsApp message before you travel.
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
                        Uttar Pradesh 244001.
                      </li>
                      <li>
                        Vaidya ji is available on Sundays. Please call{" "}
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