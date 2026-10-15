import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BestAyurvedicHospitalKanth() {
  const faqs = [
    {
      q: "Q1. Which is the best Ayurvedic hospital in Kanth?",
      a: "The best choice depends on the patient&apos;s condition, so use the questions above. Balprada, serving since 1991, welcomes patients from Kanth at its Moradabad district branches.",
    },
    {
      q: "Q2. Does Balprada have a branch in Kanth?",
      a: "No Kanth branch is listed on the website. Please check the route to the Main Branch or Moradabad Branch using the map links on the contact page.",
    },
    {
      q: "Q3. What are the OPD timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and the Moradabad Branch has Sunday vaidya availability.",
    },
    {
      q: "Q4. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
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
                Choosing a Trusted Ayurvedic Hospital for Families in Kanth
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Kanth who search for the best Ayurvedic hospital
                  are usually looking for the same things: an experienced vaidya,
                  honest advice, genuine medicines, proper tests and a place
                  where they are treated with respect.
                </li>
                <li>
                  No single page can decide which hospital is best for every
                  patient, so this guide lists the questions worth asking and
                  explains how Balprada Ayurvedic Hospital &amp; Research Center
                  in Moradabad district answers each one.
                </li>
                <li>
                  Balprada has served patients since 1991, and it offers
                  Ayurvedic care for kidney, liver, cancer-related support,
                  heart, diabetes, thyroid and women&apos;s health concerns
                  through a Main Branch in Tehsil Bilari and a Moradabad Branch
                  on Delhi Road.
                </li>
                <li>
                  The website does not list a branch in Kanth, so patients should
                  check the route on the website&apos;s map links and call before
                  travelling.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Question 1: How Long Has the Hospital Been Serving Patients?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Experience matters most in chronic illness, because long-term
                  conditions need a team that has seen many patients and
                  understands how routines, food and medicines work together over
                  months.
                </li>
                <li>
                  Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji
                  with a vision of Ayurvedic healing and seva, and the
                  institution now describes 35 years of Ayurvedic care.
                </li>
                <li>
                  Dr. U. S. Sharma brings more than 20 years of Ayurvedic
                  practice and consults on kidney, liver and other chronic
                  conditions at Balprada.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Question 2: Does the Doctor Listen Before Prescribing?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A good Ayurvedic consultation begins with the whole picture,
                  and at Balprada the doctor reviews the concern, history,
                  reports and current medication before suggesting the next care
                  step.
                </li>
                <li>
                  Questions about food habits, sleep, stress and daily routine
                  are part of the visit, because Ayurveda treats the person and
                  not only the lab value.
                </li>
                <li>
                  Patients are encouraged to bring old prescriptions, scans and
                  test reports, so that the plan fits what they are already
                  taking.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Question 3: Are the Medicines Prepared with Care?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness Private Limited prepares traditional
                  and patent Ayurvedic medicines, which means patients receive
                  medicines from the same institution that advises them.
                </li>
                <li>
                  Patients should always ask the vaidya how and when to take each
                  medicine, and they should avoid unknown herbal powders or
                  roadside remedies, especially with kidney or liver concerns.
                </li>
                <li>
                  Dr. Chetan Anand, linked with Balprada Herbal Wellness, has
                  over seven years of experience in herbal product research and
                  development.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Question 4: Are Proper Tests Available?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Reliable care needs reliable reports, and the Balprada
                  Pathology Lab provides blood and urine testing that supports
                  kidney, liver, cancer and diabetes patients.
                </li>
                <li>
                  Available tests include Kidney Function Test, Liver Function
                  Test, Complete Blood Count, Diabetes Profile with HbA1c, Lipid
                  Profile, Thyroid Profile, Urine Routine and Microscopy, and
                  Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Other doctor-advised tests may also be available, so please ask
                  the lab team when you call.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Question 5: Is the Hospital Honest About What Ayurveda Can Do?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Trustworthy Ayurvedic care is supportive, and Balprada does not
                  promise miracle cures, which is especially important in kidney,
                  liver and cancer-related illness.
                </li>
                <li>
                  Patients are advised never to stop prescribed medicines,
                  dialysis or oncology treatment without speaking to their
                  treating doctor, and to inform both doctors about everything
                  they take.
                </li>
                <li>
                  Severe pain, breathlessness, heavy bleeding or sudden worsening
                  are emergencies that need the nearest hospital first.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Question 6: Is There Support Beyond Medicines?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Healing depends on food, sleep, movement and calm, so Balprada
                  offers yoga, naturopathy, meditation, panchakarma and
                  physiotherapy as supportive facilities where they suit the
                  patient.
                </li>
                <li>
                  Panchakarma is a traditional programme of cleansing and
                  balancing procedures, planned after individual assessment, with
                  frequency and suitability decided by the doctor.
                </li>
                <li>
                  Physiotherapy begins with a mobility assessment and moves into
                  guided rehabilitation, which helps patients build strength and
                  safe movement.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Question 7: Is Follow-Up Part of the Plan?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chronic conditions need patience, so Balprada schedules regular
                  follow-up to review reports, symptoms, diet and response to
                  medicines, and to adjust the guidance when the patient&apos;s
                  needs change.
                </li>
                <li>
                  Family members are welcome to join so that diet changes,
                  medicine timings and warning signs are understood by the people
                  who care for the patient at home.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Balprada Supports
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care covers reduced kidney function, kidney stones,
                      persistent swelling and diabetes-related kidney concerns,
                      built on consultation, diet guidance, Ayurvedic medicines
                      and monitoring.
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
                      liver, jaundice, weak digestion and metabolic imbalance,
                      and yellowing of the skin or eyes should always get a
                      prompt medical evaluation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Supportive care focuses on strength and recovery,
                      easy-to-digest diet guidance, stress support and regular
                      consultation, and it is planned alongside the
                      patient&apos;s primary medical treatment, never in place
                      of it.
                    </li>
                    <li>
                      Patients should tell their oncologist about every herb or
                      remedy they use, because some can interact with cancer
                      treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Blood Pressure and Metabolic Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for blood pressure, diabetes, obesity and stress
                      combines food habits, movement, stress management,
                      Ayurvedic consultation and regular monitoring, personalised
                      to the patient&apos;s health status.
                    </li>
                    <li>
                      Patients should continue prescribed blood pressure and
                      diabetes medicines unless their own doctor advises a
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
                      Personalised support is available for blood sugar,
                      hypothyroidism, hyperthyroidism, energy, weight and
                      metabolic balance.
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
                      can speak openly with the doctor.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Food, Lifestyle and Wellness Products
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Diet and Routine
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fresh, simple, home-cooked meals taken at regular times are
                      generally encouraged, and the vaidya gives a personal plan
                      because the needs of each patient differ.
                    </li>
                    <li>
                      Patients are advised to avoid self-medication with
                      painkillers and to keep a small notebook of symptoms, sleep
                      and appetite for follow-up visits.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Farm to Family Food
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada&apos;s Organic Food page lists naturally grown
                      items such as barley daliya, multigrain atta, fresh amla,
                      raw honey, whole grains and pulses, and fresh turmeric and
                      herbs.
                    </li>
                    <li>
                      Availability follows the harvest and season, so patients
                      should ask the team for current availability and pickup or
                      courier options, and they should confirm with the vaidya
                      which foods suit their condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Herbal Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea and spices, Ayurvedic
                      oils, avaleh and herbal preparations, herbal and gram
                      flour, and pickle, murabba and dalia, and product enquiries
                      are answered by phone, WhatsApp or email.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Learning from Balprada&apos;s Insights
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The article on holistic healing explains that Ayurveda looks at
                  body, mind, diet, daily routine and environment instead of only
                  symptoms.
                </li>
                <li>
                  The article on lifestyle in kidney and liver health stresses
                  diet discipline, regular consultation and timely testing for
                  people living with chronic conditions.
                </li>
                <li>
                  The article on panchakarma and naturopathy explains how guided
                  traditional practices support cleansing, balance and recovery.
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
                  urine, burning while passing urine or blood in the urine are
                  reasons to book a consultation and get a kidney function test
                  done.
                </li>
                <li>
                  Constant tiredness, poor appetite, bloating, heaviness after
                  meals or yellowing of the eyes and skin can be linked to liver
                  or digestive trouble and should not be ignored.
                </li>
                <li>
                  High blood pressure that is hard to control, increased thirst,
                  frequent urination or unexplained weight change can point to
                  heart or metabolic concerns that deserve a proper review.
                </li>
                <li>
                  People with diabetes, high blood pressure, excess weight,
                  long-term painkiller use or a family history of kidney or liver
                  disease are advised to check their reports at least once a
                  year.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Carry to Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask the vaidya what the plan includes, how long it is expected
                  to continue and when the first review will happen, so that the
                  whole family knows what to expect.
                </li>
                <li>
                  Ask which foods to prefer and which to avoid, how to take each
                  medicine, and which tests should be repeated and when.
                </li>
                <li>
                  Ask what to do if symptoms suddenly worsen, and keep the branch
                  phone numbers saved on your mobile for quick reference.
                </li>
                <li>
                  Bring a family member, a notebook and all earlier reports,
                  because a calm and well-prepared first visit helps the vaidya
                  understand your history and helps you remember every
                  instruction afterwards.
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
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they often mention the natural
                  ashram surroundings and Ayurvedic discipline.
                </li>
                <li>
                  Reviews speak of authentic herbal preparations, highly
                  knowledgeable vaidyas and a serene atmosphere, and visitors
                  remember the humility and warmth of the staff.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Reaching Balprada from Kanth
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
                <p className="mb-2 font-semibold">Free OPD and Booking</p>

                <ul className="list-disc space-y-2 pl-5 text-black">
                  <li>
                    Free OPD consultation is available on the 15th of every
                    month, and the branch should be confirmed by phone before
                    travelling.
                  </li>
                  <li>
                    Book through the appointment form on balpradaindia.com, call
                    or WhatsApp{" "}
                    <a href="tel:8126364606" className="hover:underline">
                      8126364606
                    </a>
                    , or write to{" "}
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