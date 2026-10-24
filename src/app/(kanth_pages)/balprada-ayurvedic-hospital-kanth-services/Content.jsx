import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalKanthServices() {
  const faqs = [
    {
      q: "What services does Balprada offer?",
      a: "Ayurvedic consultation, specialised disease care, a pathology lab, panchakarma, yoga, naturopathy, meditation, physiotherapy, in-house medicines, wellness products and community services.",
    },
    {
      q: "Is there a Balprada branch in Kanth?",
      a: "No Kanth branch is listed on the website. Patients can visit the Main Branch or the Moradabad Branch.",
    },
    {
      q: "Which tests are available?",
      a: "KFT, LFT, CBC, thyroid, diabetes with HbA1c, lipid, urine and Vitamin B12 and D tests.",
    },
    {
      q: "Are X-ray or MRI available?",
      a: "Imaging is not listed on the website. Please bring your own scan reports.",
    },
    {
      q: "Is there a free consultation?",
      a: "Yes. Free OPD consultation is available on the 15th of every month, so call to confirm the branch.",
    },
    {
      q: "Can I buy products online?",
      a: "The website has no online checkout. Enquire by phone, WhatsApp or email.",
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
                Services at Balprada Ayurvedic Hospital for Kanth Patients
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families in Kanth who ask about the services of Balprada
                  Ayurvedic Hospital &amp; Research Center want a clear list of
                  what is available, so this page walks through each service in
                  the order a patient meets it, from consultation to follow-up.
                </li>
                <li>
                  Balprada has offered Ayurvedic care in Moradabad district since
                  1991, and its ashram and clinic are open seven days a week for
                  guided consultation and follow-up care.
                </li>
                <li>
                  The website lists no branch in Kanth, so patients visit the
                  Main Branch in Tehsil Bilari or the Moradabad Branch on Delhi
                  Road, and they should confirm any service by phone before
                  travelling.
                </li>
                <li>
                  Where the website gives only the name of a service and no
                  detail, this page says so plainly, so that nobody travels with
                  wrong expectations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Clinical Services
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Ayurvedic Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation is the first and central service, and the
                      doctor reviews the health concern, medical history, current
                      treatment, food habits, sleep, stress, daily routine and
                      treatment goals before suggesting any next step.
                    </li>
                    <li>
                      The Main Branch consults daily from 10:00 AM to 2:00 PM,
                      and Vaidya ji is available at the Moradabad Branch on
                      Sundays.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Specialised Disease Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada lists specialised care areas for kidney and
                      urinary concerns, liver and digestive concerns, cancer
                      support, heart and lifestyle conditions, diabetes and
                      thyroid, and women&apos;s wellness.
                    </li>
                    <li>
                      In every area the care is supportive, and patients are
                      advised to continue specialist or emergency treatment
                      whenever it is needed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Follow-Up Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up lets the team review reports, symptoms, diet and
                      response to medicines and adjust the plan as the
                      patient&apos;s needs change.
                    </li>
                    <li>
                      The website does not state a fixed follow-up interval, so
                      the vaidya tells each patient when to return.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Free OPD Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Free OPD is held on the 15th of every month, and because
                      the website does not name the branch, patients should call
                      to confirm before travelling.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Condition-Wise Services
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
                    4. Heart and Lifestyle Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for blood pressure, diabetes and obesity combines
                      daily routines, food discipline, physical activity, stress
                      management and monitored follow-up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diabetes and Thyroid Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes care focuses on food discipline, physical
                      activity, prescribed care and blood-sugar monitoring, while
                      thyroid consultations cover hypothyroidism and
                      hyperthyroidism by reviewing reports, energy, weight,
                      digestion and current medicines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care for hormonal balance, menstrual health and weakness,
                      together with maternal wellness, is offered with privacy,
                      careful listening and individual guidance.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic Services: Balprada Pathology Lab
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Blood and Urine Testing
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The lab provides in-house blood and urine testing, with a
                      focus on kidney, liver, cancer and diabetes patients.
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
                    2. How Tests Help
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Repeat tests at the interval suggested by the doctor let
                      patients and families follow progress with facts, so the
                      plan can be adjusted at each follow-up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. What Is Not Listed
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Imaging such as X-ray, MRI or ultrasound is not listed on
                      the website, so please bring your own scan reports and ask
                      the team which other tests are possible.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Therapies and Supportive Facilities
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is a traditional programme of cleansing and
                      balancing procedures, planned only after individual
                      assessment, with frequency and suitability decided by the
                      doctor.
                    </li>
                    <li>
                      The website does not state the length of a session or a
                      programme, so please ask the team about the plan advised
                      for you.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga includes breathing exercises, posture practice,
                      routine building and stress support, and it is best started
                      after assessment, following only the practices the team
                      advises.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy offers nature-based therapies, detox support
                      and lifestyle correction, using simple methods and steady
                      routines.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Guided meditation and breath awareness support calm, sleep
                      and stress management, which matter in long-term care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic physiotherapy begins with a mobility assessment
                      and moves into guided rehabilitation, with strength and
                      recovery support alongside the wider care plan.
                    </li>
                    <li>
                      Patients should share their conditions, medicines and
                      mobility concerns before starting.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pharmacy and Medicines
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Balprada Herbal Wellness Private Limited
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      This pharmacy arm prepares the institution&apos;s
                      traditional and patent Ayurvedic medicines, with organised
                      pharmacy processes at the Main Branch and research-led
                      herbal wellness support.
                    </li>
                    <li>
                      Patients should take every medicine only as explained by
                      the vaidya, and avoid mixing it with unknown herbal powders
                      or home remedies.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Safe Use
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Keep the doctor informed about every medicine, supplement
                      and home remedy you use, and never stop prescribed
                      medicines without asking your treating doctor.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Wellness Products: Balprada Enterprises
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What Is Offered
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea, spices, Ayurvedic
                      oils, avaleh, herbal and gram flour, pickle, murabba and
                      dalia, along with product enquiries and support for custom
                      herbal preparations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. How to Order
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The website has no online checkout, so orders depend on
                      stock and price confirmation by phone, WhatsApp or email.
                    </li>
                    <li>
                      Ask the vaidya before using any oil or herbal preparation
                      for a health concern, because products are not a substitute
                      for medical advice.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Community Services: Balprada Jansewa Sansthan
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Free and Subsidised Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Jansewa Sansthan has offered free and subsidised
                      Ayurvedic healthcare for underprivileged patients since
                      1991.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Vridhashram and Navtarun Ashram
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
                      gaushala seva, and these services reflect the seva sankalp
                      of Sw. Vaidya Vijay Pal Singh Ji.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. What the Website Lists Without Detail
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The navigation of the website lists an Organic Food
                      section, a Gallery, Facilities and Insights, but it gives
                      no detail on the Organic Food section, so please ask the
                      team on the phone what is available.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Access These Services from Kanth
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Step 1: Choose a Branch
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
                    2. Step 2: Book
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Use the appointment form on balpradaindia.com, where you
                      choose a concern such as kidney, liver, cancer, heart or
                      other, and also call or WhatsApp{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      with your name, contact number and preferred branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Step 3: Prepare
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring an identity document, previous prescriptions, recent
                      reports, scans and a list of all current medicines, and
                      bring a family member if the patient is elderly or weak.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Step 4: Visit and Follow Up
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Arrive about 15 minutes early, and give at least 24 hours
                      of notice if you need to cancel or reschedule.
                    </li>
                    <li>
                      Check the route from Kanth using the map links on the
                      website contact page, because the website gives no
                      landmarks or distances.
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
                  Take medicines exactly as explained, and keep a small notebook
                  of symptoms, sleep and appetite to show at every follow-up
                  visit.
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
                  worsening.
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
                What Patients Say
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients describe excellent service and guidance from Vaidya ji
                  and the hospital team, and they speak warmly of the natural
                  ashram surroundings and Ayurvedic discipline.
                </li>
                <li>
                  Reviews mention knowledgeable vaidyas, authentic herbal
                  preparations, a serene healing atmosphere and humble, helpful
                  staff, and none of the featured reviews names Kanth.
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