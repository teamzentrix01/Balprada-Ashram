import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHospitalKanth() {
  const faqs = [
    {
      q: "What is Balprada Hospital?",
      a: "It is Balprada Ayurvedic Hospital & Research Center, an Ayurvedic hospital, ashram and research centre in Moradabad district, serving patients since 1991.",
    },
    {
      q: "Is there a Balprada Hospital in Kanth?",
      a: "No Kanth branch is listed on the website. Patients from Kanth can visit the Main Branch in Tehsil Bilari or the Moradabad Branch on Delhi Road.",
    },
    {
      q: "What are the timings?",
      a: "The Main Branch consults daily from 10:00 AM to 2:00 PM, and Vaidya ji is available at the Moradabad Branch on Sundays.",
    },
    {
      q: "Which conditions are covered?",
      a: "Kidney, liver, cancer supportive, heart and lifestyle, diabetes and thyroid, and women's wellness care.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
    },
    {
      q: "Are tests available on site?",
      a: "Yes. The Balprada Pathology Lab offers KFT, LFT, CBC, thyroid, diabetes, lipid, urine and vitamin tests.",
    },
    {
      q: "How do I book an appointment?",
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
                Balprada Hospital for Kanth Patients: What Families Should Know
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Hospital, officially Balprada Ayurvedic Hospital &amp;
                  Research Center, is an Ayurvedic hospital, ashram and research
                  centre in Moradabad district of Uttar Pradesh, and it has
                  served patients since 1991.
                </li>
                <li>
                  People in Kanth often search simply for &quot;Balprada
                  Hospital&quot;, and this page gives them the essential facts in
                  one place: who runs it, what it offers, where its branches are
                  and how to prepare for a visit.
                </li>
                <li>
                  The website lists no branch in Kanth, so Kanth patients travel
                  to the Main Branch in Tehsil Bilari or the Moradabad Branch on
                  Delhi Road, and they should call before leaving to confirm
                  availability.
                </li>
                <li>
                  The hospital is described on its website as a place that
                  combines Ayurvedic wisdom, in-house herbal medicines,
                  experienced doctors and an ashram environment for long-term
                  healing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Story
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Founded on a Service Vow
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada was built on the seva sankalp, or service vow, of
                      Sw. Vaidya Vijay Pal Singh Ji, who began the work in 1991
                      with a vision of Ayurvedic healing combined with social
                      service.
                    </li>
                    <li>
                      The institution&apos;s motto reads, &quot;May all be happy,
                      may all be healthy, may all see what is auspicious, and may
                      no one suffer,&quot; and it explains why service sits at
                      the centre of the hospital&apos;s identity.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. More Than Three Decades of Ayurvedic Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website describes the institution as having decades of
                      experience, which gives patients and families a sense of
                      continuity and trust when they plan long-term care.
                    </li>
                    <li>
                      Over this time Balprada has grown into a hospital, ashram,
                      pharmacy, research centre and community service
                      organisation, and each part supports the others.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. A Hospital and an Ashram Together
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The ashram setting brings healthcare, discipline, emotional
                      support and community service together, and patients often
                      describe the surroundings as peaceful and healing.
                    </li>
                    <li>
                      A calm environment helps patients follow a regular routine
                      of food, rest and medicines, which matters greatly in
                      long-standing conditions.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Balprada Hospital Offers
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Consultation-Led Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care begins with listening: the doctor reviews the health
                      concern, medical history, current treatment, food habits,
                      sleep, stress and daily routine before suggesting any plan.
                    </li>
                    <li>
                      Reports, scans and previous prescriptions are reviewed, so
                      the plan fits the person and not only the name of the
                      disease.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Specialised Treatment Areas
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kidney and urinary care, liver and digestive care, cancer
                      supportive care, heart and lifestyle care, diabetes and
                      thyroid care, and women&apos;s wellness are the listed care
                      areas.
                    </li>
                    <li>
                      In each area the care is supportive, and patients are
                      advised to continue specialist or emergency treatment
                      whenever it is needed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Pathology Lab
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada Pathology Lab provides in-house blood and
                      urine testing, with a focus on kidney, liver, cancer and
                      diabetes patients.
                    </li>
                    <li>
                      Listed tests include Complete Blood Count, Kidney Function
                      Test, Liver Function Test, Thyroid Profile, Diabetes
                      Profile with HbA1c, Lipid Profile, Urine Routine and
                      Microscopy, and Vitamin B12 and Vitamin D.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Supportive Therapies
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma, yoga, naturopathy, meditation and
                      physiotherapy are available where they suit the patient,
                      and frequency and suitability are decided after individual
                      assessment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. In-House Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares the
                      institution&apos;s traditional and patent Ayurvedic
                      medicines, and patients should take them only as explained
                      by the vaidya.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Areas in More Detail
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care are offered for
                      kidney failure, kidney stones and persistent swelling, with
                      attention to diet and the patient&apos;s reports.
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
                      Care is available for fatty liver, jaundice and weak
                      digestion through food guidance, routine correction and
                      monitored herbal care.
                    </li>
                    <li>
                      Yellowing of the eyes or skin needs a prompt medical
                      evaluation.
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
                      easy-to-digest diet guidance and stress support, and it is
                      planned alongside the patient&apos;s primary medical
                      treatment.
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
                      activity, stress management and monitored follow-up, with
                      attention to blood pressure, obesity, diabetes and thyroid
                      imbalance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for hormonal balance, menstrual health, weakness and
                      maternal wellness is offered with privacy, careful
                      listening and individual guidance.
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
                  Dr. U. S. Sharma has more than 20 years of experience in
                  Ayurvedic practice and consults on kidney, liver and other
                  chronic concerns.
                </li>
                <li>
                  Dr. Chetan Anand, associated with Balprada Herbal Wellness
                  Private Limited, has over seven years of experience in herbal
                  product research and development and advises on free health
                  camps.
                </li>
                <li>
                  Vaidya ji is available at the Moradabad Branch on Sundays, and
                  the website does not list degrees or individual timetables, so
                  patients should ask the team by phone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Service Beyond the Clinic: Balprada Jansewa Sansthan
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Free and Subsidised Healthcare
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Jansewa Sansthan has offered free and subsidised
                      Ayurvedic healthcare for underprivileged patients since
                      1991, and the free OPD on the 15th of every month is part
                      of this spirit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Care for the Elderly and Children
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Vridhashram is a home for elderly and unsupported
                      people, and the Navtarun Ashram is a home for children in
                      need.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Other Seva
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The work also includes residential school support and
                      gaushala seva, and these activities explain why patients
                      often speak of humble and helpful staff.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Wellness Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea, spices, Ayurvedic
                      oils, avaleh, herbal and gram flour, pickle, murabba and
                      dalia.
                    </li>
                    <li>
                      The website has no online checkout, so orders depend on
                      stock and price confirmation by phone, WhatsApp or email.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada Hospital
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they speak warmly of the natural
                  ashram surroundings and Ayurvedic discipline.
                </li>
                <li>
                  Reviews mention authentic herbal preparations, knowledgeable
                  vaidyas, a serene healing atmosphere and humble, helpful staff.
                </li>
                <li>
                  These are personal experiences, none of the featured reviews
                  names Kanth, and the website terms state that outcomes vary
                  from person to person.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reaching Balprada Hospital from Kanth
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Choose Your Branch
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Main Branch in Tehsil Bilari consults daily from 10:00
                      AM to 2:00 PM, and the Moradabad Branch has the vaidya on
                      Sundays.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Check the Route
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Open the Google Maps link for either branch on the website
                      contact page and enter Kanth or your locality as the
                      starting point, because the website gives no landmarks or
                      distances.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Call Before You Leave
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      for the Main Branch, or call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      for the Moradabad Branch, and confirm that the vaidya is
                      available on your day.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Plan Comfortably
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Leave early, carry water and a light snack, bring a family
                      member if the patient is elderly or weak, and plan a
                      comfortable return journey.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. What to Carry
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring an identity document, previous prescriptions, recent
                      blood and urine reports, scans and a list of all current
                      medicines.
                    </li>
                    <li>
                      Note down symptoms, sleep, appetite and any blood sugar or
                      blood pressure readings so that the vaidya sees the full
                      picture.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book an Appointment
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Use the appointment form on balpradaindia.com, where you choose
                  a concern such as kidney, liver, cancer, heart or other, and
                  also call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  with your name, contact number and preferred branch.
                </li>
                <li>
                  Write to{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  if you wish to share reports in advance.
                </li>
                <li>
                  Arrive about 15 minutes early, and give at least 24 hours of
                  notice if you need to cancel or reschedule, as the website
                  terms request.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Habits That Support Treatment
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
                  prescribed medicines without asking your treating doctor.
                </li>
                <li>
                  Keep a small notebook of symptoms, sleep and appetite for each
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
                  Experience since 1991: more than three decades of Ayurvedic
                  practice and a service-first spirit give patients and families
                  a sense of continuity.
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
                <li>
                  A free OPD on the 15th of every month, which lets a family meet
                  the vaidya and judge the care for itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Honest Expectations
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care at Balprada is supportive, outcomes vary from
                  person to person, and no specific result is promised.
                </li>
                <li>
                  Go to the nearest hospital in an emergency such as severe pain,
                  breathlessness, heavy bleeding, very low urine output or sudden
                  worsening, and do not wait for an Ayurvedic appointment.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Branches and Contact
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
                        Open daily, with consultation from 10:00 AM to 2:00 PM.
                        Phone and WhatsApp:{" "}
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