import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalForKanthPatients() {
  const faqs = [
    {
      q: "Q1. Is there an Ayurvedic hospital for patients from Kanth?",
      a: "Balprada has a Main Branch in Tehsil Bilari and a Moradabad Branch on Delhi Road, both in Moradabad district, and patients from Kanth can consult either branch.",
    },
    {
      q: "Q2. Does Balprada have a branch in Kanth?",
      a: "No branch in Kanth is listed on the website. Please use the Google Maps links on the contact page to check the route to the Main Branch or the Moradabad Branch.",
    },
    {
      q: "Q3. What are the OPD timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and the Moradabad Branch has Sunday vaidya availability.",
    },
    {
      q: "Q4. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
    },
    {
      q: "Q5. Can I get tests done there?",
      a: "Yes. The Balprada Pathology Lab offers KFT, LFT, CBC, thyroid, diabetes and lipid tests, among others.",
    },
    {
      q: "Q6. Can I stop my current medicines?",
      a: "No. Never stop prescribed medicines or dialysis without advice from your treating doctor.",
    },
    {
      q: "Q7. How do I book an appointment?",
      a: "Use the appointment form on balpradaindia.com, call 8126364606 or message the same number on WhatsApp.",
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
                Balprada Ayurvedic Hospital for Patients from Kanth
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families from Kanth who are looking for an experienced
                  Ayurvedic hospital in Moradabad district can consult Balprada
                  Ayurvedic Hospital &amp; Research Center, which has served
                  patients since 1991 through its Main Branch in Tehsil Bilari
                  and its Moradabad Branch on Delhi Road.
                </li>
                <li>
                  Balprada supports people living with long-standing or serious
                  health concerns such as kidney problems, liver and digestive
                  disorders, cancer-related weakness, heart and blood pressure
                  concerns, diabetes, thyroid imbalance and women&apos;s health
                  issues.
                </li>
                <li>
                  Every visit begins with listening, because the vaidya reviews
                  your history, reports and current medicines before suggesting
                  an Ayurvedic plan that is personal, practical and responsible.
                </li>
                <li>
                  The ashram and clinic are open seven days a week, and a short
                  phone call before leaving Kanth helps confirm the branch, the
                  timing and the doctor&apos;s availability.
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
                    1. Our Legacy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada began in 1991 with the seva sankalp of Sw. Vaidya
                      Vijay Pal Singh Ji, who envisioned Ayurvedic healing
                      together with social service, and that spirit continues in
                      the care patients receive today.
                    </li>
                    <li>
                      The institution brings together an Ayurvedic chikitsalaya,
                      research, herbal wellness, pathology, yoga, naturopathy and
                      ashram-based social service under one trusted ecosystem.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Mission and Vision
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our mission is to provide reliable Ayurvedic care for
                      chronic and serious conditions through consultation,
                      self-prepared medicines, lifestyle guidance and
                      compassionate service.
                    </li>
                    <li>
                      Our vision is to be a trusted Ayurvedic wellness and
                      jansewa centre where traditional knowledge, modern
                      organisation and community care work together for healthier
                      lives.
                    </li>
                    <li>
                      The founder&apos;s message that staying positive gives
                      courage in difficult times is part of daily practice,
                      because hope and discipline are treated as real support
                      during long treatment journeys.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns We Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care are offered for
                      reduced kidney function, kidney stones, persistent swelling
                      and diabetes-related kidney concerns.
                    </li>
                    <li>
                      The plan combines history, reports, diet guidance,
                      Ayurvedic medicines and regular follow-up, and patients are
                      advised never to stop prescribed medicines or dialysis
                      without asking their treating doctor.
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
                      fatty liver, jaundice, weak digestion and metabolic
                      imbalance, with attention to food timing, sleep, stress and
                      daily discipline.
                    </li>
                    <li>
                      Yellowing of the skin or eyes can point to a serious
                      condition, so patients should seek prompt medical
                      evaluation and share the reports with the vaidya.
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
                      patient&apos;s oncology treatment.
                    </li>
                    <li>
                      Strength and recovery support, diet guidance and stress
                      support are offered in a respectful and unhurried way for
                      the patient and the family.
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
                      simple daily habits explained clearly so patients can
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
                      metabolic balance, with diabetes and thyroid testing
                      available through the Balprada lab.
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
                      balance, menstrual health and weakness, and women can speak
                      openly with the doctor during consultation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Care Process
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor reviews the concern, history, reports and
                      current medication before suggesting the next care step, so
                      please bring previous prescriptions, scans and recent test
                      reports.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Ayurvedic Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, and each plan is adjusted to the patient&apos;s
                      age, strength and condition.
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
                      physiotherapy are suggested only where they suit the
                      patient, and pathology support helps the doctor review
                      progress.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team observe progress, adjust
                      guidance and support long-term discipline, and family
                      members are welcome to join so everyone understands the
                      plan.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities That Support Treatment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures planned after individual assessment,
                      with frequency and suitability decided by the doctor for
                      each patient.
                    </li>
                    <li>
                      Before starting, patients should share existing conditions,
                      current medicines and any mobility concerns, so the team
                      can explain the programme and support safe participation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Naturopathy and Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga helps patients build balance, strength and discipline
                      across body, mind and breath, with gentle practices chosen
                      to suit their energy.
                    </li>
                    <li>
                      Naturopathy works with the body&apos;s natural healing
                      capacity through simple routines, and guided meditation
                      supports emotional steadiness and restful sleep.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy begins with a mobility assessment and moves
                      into guided rehabilitation, helping patients build strength
                      and safe movement alongside the wider care plan.
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
                      ask the lab team about your requirement when you call.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Herbal Medicines and Wellness Products
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. In-House Herbal Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines, which supports
                      consistent quality for patients who follow long treatment
                      plans.
                    </li>
                    <li>
                      Medicines should be taken only as explained by the vaidya,
                      because the right choice and timing depend on the
                      patient&apos;s condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Wellness Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea and spices, Ayurvedic
                      oils, avaleh and herbal preparations, herbal and gram
                      flour, and pickle, murabba and dalia.
                    </li>
                    <li>
                      The website has no online checkout, so product enquiries go
                      to the team by phone, WhatsApp or email, and availability
                      and suitability are confirmed for each request.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Insights from Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">
                    The importance of holistic healing in Ayurveda:
                  </span>{" "}
                  care looks at body, mind, diet, daily routine and environment
                  instead of only the symptom.
                </li>
                <li>
                  <span className="font-semibold">
                    The role of lifestyle in kidney and liver health:
                  </span>{" "}
                  diet discipline, regular consultation and timely testing are
                  key parts of managing chronic conditions.
                </li>
                <li>
                  <span className="font-semibold">
                    Panchakarma and naturopathy:
                  </span>{" "}
                  guided traditional practices support cleansing, balance and
                  recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Team
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma has more than 20 years of Ayurvedic practice
                  and consults on kidney, liver and other chronic conditions at
                  Balprada.
                </li>
                <li>
                  Dr. Chetan Anand, linked with Balprada Herbal Wellness Private
                  Limited, has over seven years of experience in herbal product
                  research and development and advises on free health camps.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jansewa and Seva
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Jansewa Sansthan has offered free and subsidised
                  Ayurvedic healthcare for underprivileged patients since 1991,
                  which reflects the service-first spirit of the institution.
                </li>
                <li>
                  Its wider seva work includes the Vridhashram for elderly
                  people, the Navtarun Ashram for children in need, residential
                  school support and gaushala seva.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Kanth Patients Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice give patients and
                  families a sense of trust and continuity.
                </li>
                <li>
                  <span className="font-semibold">
                    Everything in one institution:
                  </span>{" "}
                  consultation, medicines, diagnostic tests, yoga, naturopathy
                  and panchakarma support are available together.
                </li>
                <li>
                  <span className="font-semibold">
                    Open throughout the week:
                  </span>{" "}
                  the ashram and clinic stay open seven days a week, with Main
                  Branch consultation from 10:00 AM to 2:00 PM.
                </li>
                <li>
                  <span className="font-semibold">
                    Free OPD on the 15th of every month:
                  </span>{" "}
                  families new to Ayurveda can begin with a consultation, and the
                  branch should be confirmed by phone.
                </li>
                <li>
                  <span className="font-semibold">Honest guidance:</span>{" "}
                  patients are told clearly that Ayurvedic care is supportive and
                  that specialist or emergency treatment must not be stopped.
                </li>
                <li>
                  <span className="font-semibold">Reviews that speak:</span>{" "}
                  patients describe knowledgeable vaidyas, genuine herbal
                  preparations, a serene ashram atmosphere and humble, helpful
                  staff.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they often mention that the natural
                  ashram surroundings and Ayurvedic discipline make a real
                  difference to recovery.
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
                Healthy Habits Between Visits
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home-cooked food at regular times and follow
                  the diet rules given by your vaidya, instead of copying advice
                  from social media or neighbours.
                </li>
                <li>
                  Take medicines exactly as explained, and keep a small notebook
                  of symptoms, sleep and appetite so that you can show it at
                  every follow-up visit.
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
                Planning Your Visit from Kanth
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
                        before visiting.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-2 font-semibold">Before You Travel</p>

                <ul className="list-disc space-y-2 pl-5 text-black">
                  <li>
                    Call or WhatsApp first to confirm the branch, timing and
                    doctor availability, and open the Google Maps link on the
                    website contact page to check the route from Kanth.
                  </li>
                  <li>
                    Bring previous prescriptions, recent reports, scans and a
                    list of current medicines, and come with a family member who
                    can help remember diet and medicine instructions.
                  </li>
                  <li>
                    Severe pain, breathlessness, heavy bleeding or sudden
                    worsening are emergencies, and the patient should go to the
                    nearest hospital first.
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