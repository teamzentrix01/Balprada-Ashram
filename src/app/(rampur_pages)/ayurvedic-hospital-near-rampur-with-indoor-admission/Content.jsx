import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalAdmissionEnquiry() {
  const faqs = [
    {
      q: "Q1. Does Balprada offer indoor admission?",
      a: "The website does not describe indoor admission, so please call 8126364606 to confirm availability for your condition before travelling.",
    },
    {
      q: "Q2. Is there an Ayurvedic hospital near Rampur?",
      a: "Balprada has a Main Branch in Bilari and a Moradabad Branch on Delhi Road, both in the Moradabad region.",
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
                Balprada Ayurvedic Hospital for Patients Who Need Closer, Longer
                Care
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families from Rampur who need more than a quick prescription
                  often search for an Ayurvedic hospital with indoor admission,
                  and Balprada Ayurvedic Hospital &amp; Research Center in the
                  Moradabad region is a name many of them reach out to for
                  guided, long-term care.
                </li>
                <li>
                  Balprada has served patients since 1991 on the seva sankalp of
                  Sw. Vaidya Vijay Pal Singh Ji, and it brings together
                  consultation, in-house herbal medicines, a pathology lab, yoga,
                  naturopathy, panchakarma and an ashram environment under one
                  institution.
                </li>
                <li>
                  The Main Branch and ashram stay open seven days a week, and
                  every patient is first heard, examined and guided by a vaidya
                  before any plan is suggested.
                </li>
                <li>
                  If you are looking for indoor admission or an overnight stay
                  for yourself or a family member, please call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  before travelling, because admission and stay arrangements are
                  confirmed directly by the team and are not listed on the
                  website.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Indoor Admission and Stay: What to Ask Before You Come
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Confirming Availability
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada website describes guided consultation,
                      follow-up care and ashram-based healing, but it does not
                      publish details of wards, rooms, beds or admission
                      criteria, so the correct and honest step is to ask the team
                      directly.
                    </li>
                    <li>
                      Call or WhatsApp{" "}
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
                      , and ask clearly whether indoor admission or a stay is
                      possible for the patient&apos;s condition, and for how many
                      days.
                    </li>
                    <li>
                      Mention the patient&apos;s age, main health concern, current
                      medicines and whether the patient can walk and manage daily
                      needs, because the vaidya will use these details to advise
                      whether OPD care or a longer stay suits them better.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Questions Worth Asking
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask about the expected length of stay, the daily routine
                      followed, the food provided and whether a family member may
                      stay with the patient.
                    </li>
                    <li>
                      Ask about charges, what is included, and what the family
                      should bring, since the website does not list fees or
                      accommodation details.
                    </li>
                    <li>
                      Ask which tests should be done before arrival, so that the
                      Balprada Pathology Lab or your own laboratory reports are
                      ready for the first review.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. When Hospital Care Comes First
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic care is supportive, and patients with severe
                      pain, breathlessness, heavy bleeding, very low urine
                      output, high fever or sudden worsening should go to the
                      nearest emergency hospital before anything else.
                    </li>
                    <li>
                      Patients already on dialysis, chemotherapy or specialist
                      treatment should continue it and inform both their own
                      doctor and the Balprada vaidya about every medicine they
                      take.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Balprada&apos;s Ashram-Based Care
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Peaceful Care Environment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Ashram is described as a peaceful care environment
                      in which nature-led healing, disciplined routines and
                      Ayurvedic guidance work together for long-term recovery.
                    </li>
                    <li>
                      Patients and families often mention the calm surroundings,
                      the humble staff and the sense of discipline, which can
                      make a long treatment journey feel less stressful.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Daily Routine and Discipline
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Daily routine guidance is part of the Balprada approach,
                      covering regular meal times, rest, gentle movement,
                      breathing practice and the correct timing of medicines.
                    </li>
                    <li>
                      Food guidance is treated as part of the treatment, and the
                      vaidya reviews it again at each follow-up so that it stays
                      suitable for the patient&apos;s strength and condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Jansewa and Seva
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Jansewa Sansthan has offered free and subsidised
                      Ayurvedic healthcare for underprivileged patients since
                      1991, which reflects the service-first spirit of the
                      institution.
                    </li>
                    <li>
                      Its wider seva work includes the Vridhashram for elderly
                      people, the Navtarun Ashram for children in need,
                      residential school support and gaushala seva.
                    </li>
                    <li>
                      These residential services are for the elderly and children
                      supported by the Sansthan, and they are separate from
                      patient admission, which should be confirmed with the
                      hospital team.
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
                      The care plan combines history, reports, diet guidance,
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
                      fatty liver, jaundice, weak digestion and related liver
                      concerns.
                    </li>
                    <li>
                      Liver Function Test support is available at the Balprada
                      lab, so progress can be reviewed through repeat reports.
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
                      illness, alongside the patient&apos;s oncology treatment.
                    </li>
                    <li>
                      Families receive diet guidance, recovery support and stress
                      support in a respectful and unhurried way.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care is offered for
                      blood pressure, diabetes, weight, hypothyroidism and
                      hyperthyroidism, with attention to diet, activity and
                      stress.
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
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private and personalised care is available for hormonal
                      balance, menstrual health and general weakness, and women
                      can speak openly with the doctor during consultation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Supportive Facilities
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
                      and frequency and suitability are decided by the doctor for
                      each patient.
                    </li>
                    <li>
                      Before starting, patients should share existing conditions,
                      current medicines and any mobility concerns, so that the
                      team can explain the programme and support safe
                      participation.
                    </li>
                    <li>
                      The website does not state the length of a panchakarma
                      programme or whether it needs a stay, so please ask the
                      team when you call.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Naturopathy and Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga builds balance, strength and discipline across body,
                      mind and breath, with gentle practices chosen to suit the
                      patient&apos;s energy.
                    </li>
                    <li>
                      Naturopathy works with the body&apos;s natural healing
                      capacity through simple nature-led routines, and guided
                      meditation supports emotional steadiness and restful sleep.
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
                      into guided rehabilitation, which helps patients build
                      strength and safe movement alongside the wider care plan.
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
                      Other doctor-advised tests may also be available, and the
                      reports are used by the vaidya to guide and review the care
                      plan.
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
                      current medication before suggesting the next step, so
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
                      suitable, and the plan is explained clearly to the patient
                      and family.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Supportive Facilities
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, meditation, panchakarma, physiotherapy
                      and pathology support are suggested only where they suit
                      the patient.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Follow-Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular follow-up lets the team review reports, symptoms,
                      diet and response to medicine, and the timing depends on
                      the patient&apos;s condition.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Herbal Research
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
                <li>
                  Balprada Herbal Wellness prepares traditional Ayurvedic
                  medicines, which supports consistent quality for patients who
                  follow long treatment plans.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience since 1991:</span>{" "}
                  more than three decades of Ayurvedic practice and a
                  service-first spirit give patients and families a sense of
                  trust.
                </li>
                <li>
                  <span className="font-semibold">
                    Everything under one institution:
                  </span>{" "}
                  consultation, medicines, diagnostic tests, yoga, naturopathy,
                  panchakarma and follow-up are available within one
                  organisation.
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
                Visit Balprada from Rampur
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch: Ashram and Clinic in Bilari</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415.
                      </li>
                      <li>
                        Consultation runs daily from 10:00 AM to 2:00 PM. Call or
                        WhatsApp{" "}
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
                    <p className="font-semibold">Moradabad Branch: New Moradabad, Delhi Road</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: F-19, Sector-13, New Moradabad, Delhi Road,
                        Moradabad, Uttar Pradesh 244001.
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