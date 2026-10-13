import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalForRampurPatients() {
  const faqs = [
    {
      q: "Q1. Is there an Ayurvedic hospital for patients from Rampur?",
      a: "Yes. Balprada Ayurvedic Hospital & Research Center serves patients from Rampur through its Main Branch in Bilari and its Moradabad Branch.",
    },
    {
      q: "Q2. Which conditions do you treat?",
      a: "We offer Ayurvedic care for kidney, liver, cancer support, heart, diabetes, thyroid and women&apos;s health concerns.",
    },
    {
      q: "Q3. Do I need an appointment?",
      a: "Appointments are recommended. Call or WhatsApp 8126364606, or use the Book Appointment option on the website.",
    },
    {
      q: "Q4. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q5. Are tests available at the hospital?",
      a: "Yes. The Balprada Pathology Lab offers blood and urine tests including KFT, LFT, CBC, thyroid, diabetes and lipid profiles.",
    },
    {
      q: "Q6. Can I continue my current medicines?",
      a: "Yes. Please do not stop any prescribed medicine or treatment without advice from your treating doctor.",
    },
    {
      q: "Q7. When is the Sunday vaidya available?",
      a: "Vaidya ji is available at the Moradabad Branch on Sundays. Please call 9410447000 first to confirm.",
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
                A Trusted Ayurvedic Hospital for Rampur Patients
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Introduction: Care Close to Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients from Rampur who want a calm, honest and experienced
                  Ayurvedic hospital within reach of their city can consult
                  Balprada Ayurvedic Hospital &amp; Research Center, which serves
                  the wider Moradabad region through two branches and an
                  ashram-based care environment.
                </li>
                <li>
                  Balprada began in 1991 with the seva sankalp of Sw. Vaidya
                  Vijay Pal Singh Ji, and that spirit of service continues today
                  through experienced doctors, in-house herbal medicines,
                  research and compassionate follow-up care for patients and
                  their families.
                </li>
                <li>
                  The hospital supports people living with long-standing or
                  serious health concerns such as kidney problems, liver and
                  digestive disorders, cancer-related weakness, heart and blood
                  pressure concerns, diabetes, thyroid imbalance and
                  women&apos;s health issues.
                </li>
                <li>
                  Every visit begins with listening: the vaidya reviews your
                  history, reports and current medicines first, and only then
                  suggests an Ayurvedic plan that is practical, personal and
                  responsible.
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
                    1. Our Story and Mission
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada has carried the work of Sw. Vaidya Vijay Pal
                      Singh Ji for more than three decades, bringing together an
                      Ayurvedic chikitsalaya, research, herbal wellness,
                      pathology, yoga, naturopathy and ashram-based social
                      service under one trusted institution.
                    </li>
                    <li>
                      Our mission is to provide reliable Ayurvedic care for
                      chronic and serious conditions through consultation,
                      self-prepared medicines, lifestyle guidance and
                      compassionate service, helping patients and families find a
                      calmer and clearer path through illness.
                    </li>
                    <li>
                      Our vision is to be a trusted Ayurvedic wellness and
                      jansewa centre where traditional knowledge, modern
                      organisation and community care work together for healthier
                      lives.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Our Guiding Belief
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The founder&apos;s message of staying positive in difficult
                      times is part of daily practice here, because hope,
                      discipline and a steady mind are treated as real support
                      during long treatment journeys.
                    </li>
                    <li>
                      Balprada believes that medicine alone is not enough, so
                      food, routine, sleep, stress and movement are discussed in
                      every plan alongside the Ayurvedic medicines.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns We Support for Rampur Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our kidney care covers reduced kidney function, kidney
                      stones, persistent swelling and diabetes-related kidney
                      concerns, and each plan is built on consultation, history,
                      diet guidance, Ayurvedic medicines and regular follow-up.
                    </li>
                    <li>
                      Kidney Function Test reports can be repeated at the
                      Balprada Pathology Lab, so patients and doctors can follow
                      changes over time instead of relying on a single report.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicine, diet and routine-based care is offered for fatty
                      liver, jaundice, weak digestion and related liver health
                      concerns, with attention to food habits, sleep, stress and
                      daily discipline.
                    </li>
                    <li>
                      Liver Function Test support is available in-house, which
                      helps the vaidya review progress during follow-up visits.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada offers sensitive Ayurvedic supportive care for
                      strength, diet, energy and emotional balance during serious
                      illness, and it is meant to work alongside the
                      patient&apos;s oncologist rather than replace it.
                    </li>
                    <li>
                      Families receive diet guidance, stress support and
                      recovery-focused advice in a respectful and unhurried way.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart and Lifestyle Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care is available for
                      blood pressure, diabetes, weight and stress concerns, with
                      simple daily habits explained clearly so that patients can
                      follow them at home.
                    </li>
                    <li>
                      Patients are reminded to continue prescribed heart and
                      blood pressure medicines unless their own doctor advises a
                      change.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Personalised support is offered for blood sugar,
                      hypothyroidism, hyperthyroidism, energy, weight and
                      metabolic balance, with diabetes and thyroid profile
                      testing available through the Balprada lab.
                    </li>
                    <li>
                      Diet timing, physical activity and stress control are
                      reviewed at each follow-up so that care stays practical for
                      work and family life.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private and sensitive care is available for hormonal
                      balance, menstrual health and general weakness, and women
                      can discuss their concerns openly with the doctor during
                      consultation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Care Process from First Visit to Follow-Up
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, history, reports and
                      current medication before suggesting the next care step, so
                      please bring all old prescriptions, blood tests, scans and
                      discharge papers.
                    </li>
                    <li>
                      Questions about appetite, sleep, digestion, energy, stress
                      and family history help the vaidya understand the whole
                      person rather than only one symptom or one lab value.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, and each plan is adjusted to the patient&apos;s
                      age, strength and condition.
                    </li>
                    <li>
                      Medicines, timings and food rules are explained in simple
                      language to the patient and family members so that nothing
                      is left unclear after the visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma, physiotherapy
                      and pathology support help make the treatment journey more
                      complete, and they are suggested only when they suit the
                      patient.
                    </li>
                    <li>
                      Panchakarma therapies are planned after individual
                      assessment to support cleansing, balance and recovery, with
                      food and daily-routine guidance given alongside.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team observe progress, adjust
                      guidance and support long-term discipline, which matters
                      greatly in chronic conditions.
                    </li>
                    <li>
                      Patients from Rampur can plan follow-up visits around the
                      15th of the month, when free OPD consultation is available.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities That Support Your Treatment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma and Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional cleansing and balancing
                      approach planned according to each person&apos;s
                      assessment, and recovery support is part of the programme.
                    </li>
                    <li>
                      Naturopathy works with the body&apos;s natural healing
                      capacity through simple, nature-led practices and
                      supportive routines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga and Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga helps patients build balance, strength and discipline
                      across body, mind and breath, with gentle practices chosen
                      to suit their level of energy.
                    </li>
                    <li>
                      Guided meditation and breath awareness support emotional
                      steadiness, better rest and a calmer healing journey.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Professional physiotherapy supports safe movement, mobility,
                      strength and recovery alongside the wider care plan, which
                      is useful for patients with weakness or reduced activity.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Balprada Pathology Lab
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The in-house lab provides Complete Blood Count, Kidney
                      Function Test, Liver Function Test, Thyroid Profile,
                      Diabetes Profile with HbA1c, Lipid Profile, Urine Routine
                      and Microscopy, and Vitamin B12 and Vitamin D testing.
                    </li>
                    <li>
                      Other doctor-advised tests may also be available, so please
                      ask the lab team about your specific requirement.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Team
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma brings more than 20 years of Ayurvedic
                  practice and consults on kidney, liver and other chronic
                  conditions at Balprada.
                </li>
                <li>
                  Dr. Chetan Anand, associated with Balprada Herbal Wellness
                  Private Limited, brings more than seven years of herbal product
                  research and development experience and advises on free health
                  camps.
                </li>
                <li>
                  The wider team of vaidyas, pathology staff and ashram volunteers
                  works with a service-first spirit that patients often mention in
                  their reviews.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ashram and Jansewa
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The ashram offers a peaceful care environment, and disciplined
                  routines and nature-led healing are an important part of the
                  Balprada experience.
                </li>
                <li>
                  Balprada Jansewa Sansthan carries the mission of service
                  further through elder care, Navtarun Ashram, residential
                  support initiatives and Gaushala-based service.
                </li>
                <li>
                  If you are travelling from Rampur and wish to ask about staying
                  arrangements, please call the main branch before your visit
                  because details are confirmed directly by the team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Rampur Patients Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice give patients and
                  families a sense of continuity and trust.
                </li>
                <li>
                  <span className="font-semibold">
                    In-house herbal medicines:
                  </span>{" "}
                  Balprada prepares its own medicines, which supports quality and
                  consistency in treatment.
                </li>
                <li>
                  <span className="font-semibold">
                    Everything in one place:
                  </span>{" "}
                  consultation, medicines, diagnostic tests, yoga, naturopathy
                  and panchakarma support are available within one institution.
                </li>
                <li>
                  <span className="font-semibold">
                    Open throughout the week:
                  </span>{" "}
                  the ashram and clinic are open seven days a week, with main
                  branch consultation from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  <span className="font-semibold">
                    Free OPD on the 15th of every month:
                  </span>{" "}
                  families who are new to Ayurveda can start with a consultation
                  without worrying about cost.
                </li>
                <li>
                  <span className="font-semibold">Honest guidance:</span>{" "}
                  patients are told clearly that Ayurvedic care is supportive,
                  and they are advised not to stop prescribed medicines or
                  specialist treatment without speaking to their own doctor.
                </li>
                <li>
                  <span className="font-semibold">Patient reviews:</span> Google
                  reviews describe knowledgeable vaidyas, genuine herbal
                  preparations, humble staff and a serene healing atmosphere.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stories of Trust from Patients
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent guidance from Vaidya ji and the
                  hospital team, and they often mention that the natural ashram
                  surroundings and Ayurvedic discipline make a real difference to
                  their recovery.
                </li>
                <li>
                  Reviews speak of authentic herbal preparations, highly
                  knowledgeable vaidyas and a serene atmosphere that helps
                  patients heal with positivity and strength, especially in
                  kidney, liver and chronic illness care.
                </li>
                <li>
                  Visitors also remember the humility and warmth of the staff,
                  who greet everyone with a smile and go out of their way to help
                  families feel welcome and cared for.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Healthy Habits to Follow Between Visits
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home-cooked food at regular times, and
                  follow the diet rules given by your vaidya instead of copying
                  advice from social media or neighbours.
                </li>
                <li>
                  Take your medicines exactly as explained, keep a small notebook
                  of symptoms, sleep and appetite, and show it at every follow-up
                  so that adjustments can be made accurately.
                </li>
                <li>
                  Walk or practise gentle yoga as advised, keep stress low through
                  breathing and meditation, and avoid self-medication with
                  painkillers or unknown herbal powders.
                </li>
                <li>
                  Repeat your tests at the interval suggested by the doctor,
                  because regular reports help the team judge progress honestly
                  and plan the next step with confidence.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Plan Your Visit from Rampur
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch (Ashram and Clinic)</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415.
                      </li>
                      <li>
                        Timings: daily, 10:00 AM to 2:00 PM. Phone and WhatsApp:{" "}
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
                        before visiting. Email:{" "}
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
              </div>

              <div className="mb-6">
                <p className="mb-2 font-semibold">What to Carry</p>

                <ul className="list-disc space-y-2 pl-5 text-black">
                  <li>
                    Bring all previous reports, prescriptions, scans and a list of
                    current medicines, and note down your questions so that
                    nothing is missed in the consultation.
                  </li>
                  <li>
                    Come with a family member where possible so that diet and
                    medicine instructions are heard by the person who will help
                    at home.
                  </li>
                </ul>
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