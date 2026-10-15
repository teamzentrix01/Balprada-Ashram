import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicTreatmentTestimonialsKanth() {
  const faqs = [
    {
      q: "Q1. Where can I read Balprada testimonials?",
      a: "Patient testimonials are featured on the Balprada homepage in the Stories of Trust and Healing section.",
    },
    {
      q: "Q2. Are there testimonials from Kanth patients?",
      a: "The featured testimonials do not name Kanth. They come from patients in Uttar Pradesh and Moradabad.",
    },
    {
      q: "Q3. Do testimonials guarantee results?",
      a: "No. Outcomes vary from person to person, and Balprada does not promise specific results.",
    },
    {
      q: "Q4. Does Balprada have a branch in Kanth?",
      a: "No Kanth branch is listed on the website. Balprada has branches in Tehsil Bilari and New Moradabad.",
    },
    {
      q: "Q5. Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Q6. What are the timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
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
                Patient Testimonials for Ayurvedic Treatment at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Kanth who are considering Ayurvedic treatment often
                  want to hear from other patients first, and this page shares
                  testimonials from the Stories of Trust and Healing section of
                  the Balprada Ayurvedic Hospital &amp; Research Center website.
                </li>
                <li>
                  Balprada has served patients since 1991 in Moradabad district,
                  with a Main Branch in Tehsil Bilari and a Moradabad Branch on
                  Delhi Road, and the ashram and clinic are open seven days a
                  week.
                </li>
                <li>
                  The testimonials featured here come from patients in Uttar
                  Pradesh and Moradabad, and none of them is described as coming
                  from Kanth, so this page does not suggest otherwise.
                </li>
                <li>
                  Testimonials are personal experiences and not a promise of
                  results, and the website terms state that outcomes vary from
                  person to person and no specific result is promised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Testimonials from Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Amresh Mishra, Uttar Pradesh: Ayurvedic Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>Rating given: 5.0.</li>
                    <li>
                      The testimonial speaks of excellent service and guidance
                      from Vaidya ji and the hospital team.
                    </li>
                    <li>
                      It also praises the natural ashram surroundings, the
                      Ayurvedic discipline and the genuine herbal preparations,
                      and says these make a tremendous positive impact on patient
                      health and recovery.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Shivam Srivastav, Moradabad: Ashram and Patient Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>Rating given: 5.0.</li>
                    <li>
                      The testimonial calls the Balprada Jansewa Ashram Trust a
                      wonderful place and describes the staff as incredibly
                      humble and kind.
                    </li>
                    <li>
                      It adds that the staff greet everyone with a smile and go
                      out of their way to help, and that the writer felt welcomed
                      and cared for during the visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Dr. Jeetesh Vishwas, Moradabad: Kidney and Liver Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>Rating given: 5.0.</li>
                    <li>
                      The writer describes Balprada as a place for kidney, liver
                      and chronic illness Ayurvedic treatment, and gives his own
                      opinion that it is among the best.
                    </li>
                    <li>
                      The testimonial mentions knowledgeable vaidyas, authentic
                      herbal medicine formulations and a serene, healing
                      atmosphere that helps patients recover with positivity and
                      strength.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. More Stories on the Website
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The testimonial section of the homepage lists more Google
                      reviews, along with Instagram reels and video stories, and
                      visitors can open the website to read and watch them in
                      full.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What These Testimonials Tell Us
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. The Vaidya&apos;s Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Two of the three testimonials mention the guidance of the
                      vaidyas, which matches how care begins at Balprada, with
                      the doctor reviewing the concern, history, reports and
                      current medication before suggesting any next step.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Genuine Herbal Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients mention genuine and authentic herbal preparations,
                      and the institution&apos;s traditional and patent Ayurvedic
                      medicines are prepared by Balprada Herbal Wellness Private
                      Limited.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. A Calm Healing Setting
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The ashram surroundings, the discipline and the serene
                      atmosphere appear in more than one testimonial, and the
                      website describes the ashram as a peaceful setting where
                      healthcare, discipline, emotional support and community
                      service come together.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Warm, Humble Staff
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Staff behaviour is a recurring theme, and it reflects the
                      seva spirit of Sw. Vaidya Vijay Pal Singh Ji, who started
                      Balprada in 1991 with a vision of Ayurvedic healing and
                      social service.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Each Testimonial Connects to the Care Process
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step 1: Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The testimonials about guidance relate to the first visit,
                      where the vaidya listens to the patient and the family and
                      asks about food habits, sleep, stress and daily routine.
                    </li>
                    <li>
                      Bring previous prescriptions, test reports, scans and a
                      list of current medicines, so the doctor has the full
                      picture.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Step 2: Personalised Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned with Balprada&apos;s own Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, adjusted to the patient&apos;s age, strength and
                      condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Step 3: Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma and
                      physiotherapy are suggested only where they suit the
                      patient, and the ashram environment mentioned in the
                      testimonials supports this routine.
                    </li>
                    <li>
                      Frequency and suitability are decided after individual
                      assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step 4: Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team review reports, symptoms,
                      diet and response to medicines, and adjust guidance as the
                      patient&apos;s needs change.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions Behind the Stories
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
                      Patients must never stop prescribed medicines or dialysis
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
                      Care is available for fatty liver, jaundice, weak digestion
                      and metabolic imbalance, and yellowing of the eyes or skin
                      needs a prompt medical evaluation.
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
                      patient&apos;s primary medical treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Diabetes and Thyroid
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care combines daily routines, food discipline, physical
                      activity, stress management and monitored follow-up, and
                      prescribed medicines should be changed only under the
                      treating doctor&apos;s guidance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private and sensitive care is available for hormonal
                      balance, menstrual health, weakness and maternal wellness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests That Support the Stories
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Balprada Pathology Lab provides in-house blood and urine
                  testing, including Kidney Function Test, Liver Function Test,
                  Complete Blood Count, Diabetes Profile with HbA1c, Lipid
                  Profile, Thyroid Profile, Urine Routine and Microscopy, and
                  Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Repeat tests help patients and families follow progress with
                  facts, so the plan can be adjusted at each follow-up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Testimonials Cannot Tell You
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Individual Results Differ
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Every patient has a different condition, age, strength and
                      history, so a good experience for one person does not mean
                      the same outcome for another.
                    </li>
                    <li>
                      Ayurvedic care at Balprada is supportive, and patients are
                      advised to continue specialist or emergency treatment
                      whenever it is needed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Opinions Are Personal
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Words such as best are the opinion of the person who wrote
                      them, and every family should judge the care through its
                      own consultation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Testimonials Are Not Medical Advice
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Information on the website is general and does not replace
                      the advice of a doctor, so patients should not skip or
                      delay professional care because of something they read.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Check for Yourself
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Visit during the free OPD on the 15th of every month, speak to
                  the vaidya and see the facilities, and confirm the branch by
                  phone before travelling.
                </li>
                <li>
                  Ask the questions that matter to you, such as how the plan will
                  work, how often follow-ups are needed and what signs mean you
                  should go to a hospital.
                </li>
                <li>
                  Read the reviews on the website and on Google, and speak to
                  people you trust who have visited.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Habits That Help Any Treatment Succeed
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home-cooked food at regular times and follow
                  the diet rules given by your vaidya instead of copying advice
                  from social media or neighbours.
                </li>
                <li>
                  Take medicines exactly as explained, avoid self-medication with
                  painkillers or unknown herbal powders, and never stop
                  prescribed medicines or dialysis without asking your treating
                  doctor.
                </li>
                <li>
                  Keep a small notebook of symptoms, sleep, appetite and blood
                  sugar or blood pressure readings, and show it at every
                  follow-up visit.
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
                  People with diabetes, high blood pressure, excess weight,
                  long-term painkiller use or a family history of kidney or liver
                  disease are advised to check their reports at least once a
                  year.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice and a
                  service-first spirit give patients and families a sense of
                  continuity.
                </li>
                <li>
                  Consultation, tests and medicines under one institution, so
                  patients do not need to travel between many different places.
                </li>
                <li>
                  Open seven days a week, with Vaidya ji available at the
                  Moradabad Branch on Sundays, which helps working families plan
                  visits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Vaidya
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask how the plan will work for your condition, which tests
                  should be repeated and how often, and when the first review
                  will be.
                </li>
                <li>
                  Ask which foods and habits to change, how to take each
                  medicine, and which signs mean you should return sooner or go
                  to a hospital.
                </li>
                <li>
                  Ask what a realistic expectation looks like, because outcomes
                  vary from person to person and no specific result is promised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Team
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dr. U. S. Sharma has more than 20 years of experience in
                  Ayurvedic practice and consults on kidney, liver and other
                  chronic concerns at Balprada.
                </li>
                <li>
                  Dr. Chetan Anand, associated with Balprada Herbal Wellness
                  Private Limited, has over seven years of experience in herbal
                  product research and development and advises on free health
                  camps.
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
                  alongside the Vridhashram, the Navtarun Ashram, residential
                  school support and gaushala seva.
                </li>
                <li>
                  The service-first spirit behind these activities is part of
                  what patients describe when they speak of humble, helpful
                  staff.
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

                <div>
                  <p className="font-semibold">Booking Tips</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Book through the appointment form on balpradaindia.com,
                      call or WhatsApp{" "}
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
                    <li>
                      Arrive about 15 minutes early and give at least 24 hours of
                      notice if you need to cancel or reschedule, as the website
                      terms request.
                    </li>
                    <li>
                      The website lists no branch in Kanth, so please check the
                      route using the map links on the contact page.
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