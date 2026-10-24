import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedaClinicKanth() {
  const faqs = [
    {
      q: "Is Balprada a clinic or a hospital?",
      a: "It is an Ayurvedic hospital and research center with a clinic, ashram, pharmacy and lab.",
    },
    {
      q: "What are the OPD timings?",
      a: "10:00 AM to 2:00 PM, and calling ahead is advised.",
    },
    {
      q: "Is free OPD available?",
      a: "Yes, on the 15th of every month.",
    },
    {
      q: "What should I bring?",
      a: "Past prescriptions, recent reports, current medicines and notes on symptoms and diet.",
    },
    {
      q: "Is Sunday consultation available?",
      a: "Yes, Vaidya ji is available at the Moradabad branch on Sundays, after a call.",
    },
    {
      q: "Can I continue other medicines?",
      a: "Yes, unless your own doctor advises a change.",
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
                Balprada Ayurveda Clinic Kanth: Vaidya Consultation, OPD and
                Follow-up Care for Kanth Families
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                The Balprada Ayurveda Clinic for Patients from Kanth
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What Kind of Clinic Is Balprada
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Ayurvedic Hospital &amp; Research Center is a
                      trusted Ayurvedic chikitsalaya that has served patients
                      since 1991, when Sw. Vaidya Vijay Pal Singh Ji began the
                      work with a vision of ayurvedic healing and social service.
                    </li>
                    <li>
                      The clinic works alongside an ashram, an in-house pharmacy
                      and a pathology lab, so a patient who visits the OPD can
                      receive consultation, medicine guidance, tests and
                      supportive therapies without searching for different
                      places.
                    </li>
                    <li>
                      Families from Kanth, which lies in Moradabad district, can
                      reach the main branch in the same district, and a second
                      clinic branch on Delhi Road in Moradabad gives one more
                      option for Sunday consultations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Why a Clinic Visit Matters in Ayurveda
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurveda treats the person and not only the complaint, so a
                      proper clinic visit allows the vaidya to look at symptoms,
                      history, food habits, sleep, stress and routine together
                      before offering guidance.
                    </li>
                    <li>
                      Chronic conditions such as kidney, liver, sugar, thyroid
                      and heart concerns need regular review, and a clinic that
                      offers follow-up care makes steady progress easier for
                      families who live at a distance.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                OPD Timings and Clinic Days
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Main Branch Clinic
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The main branch in Bhidwari village, Moradabad district,
                      runs consultation daily from 10:00 AM to 2:00 PM, and the
                      ashram and clinic are described as open throughout the
                      week.
                    </li>
                    <li>
                      Because availability can vary, patients should call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>{" "}
                      or send a WhatsApp message before leaving Kanth, so that
                      the visit is planned properly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Moradabad Branch Clinic
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Moradabad branch at F-19, Sector-13, New Moradabad,
                      Delhi Road, offers Vaidya ji on Sundays, and patients are
                      asked to call{" "}
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>{" "}
                      before visiting.
                    </li>
                    <li>
                      This branch suits families who find it easier to travel
                      through the city, or who can come only on a Sunday.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Free OPD on the 15th
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A free OPD consultation is available on the 15th of every
                      month, which gives new patients an easy way to meet the
                      vaidya and understand the clinic&apos;s approach.
                    </li>
                    <li>
                      The website does not list further details about the free
                      OPD, so patients should confirm availability and what it
                      includes when they call.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your First Clinic Visit
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Before You Leave Kanth
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Book through the website form by entering patient details,
                      choosing the preferred branch and selecting the health
                      concern, or call, WhatsApp or email{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>
                      .
                    </li>
                    <li>
                      Bring past prescriptions, recent test reports, the
                      medicines you take now and notes on your symptoms, how long
                      you have had them and your daily diet.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. At the Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor considers symptoms, medical history, current
                      treatment, food habits, sleep, stress and daily routine,
                      and reviews diagnostic reports where relevant before
                      suggesting Ayurvedic guidance.
                    </li>
                    <li>
                      The plan is explained to the patient and family, so that
                      everyone who helps at home understands the diet, medicines
                      and routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. After the Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A personalized plan may include Ayurvedic medicines, diet
                      guidance, lifestyle correction and supportive facilities,
                      and progress is reviewed regularly so that guidance stays
                      practical and responsible.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors Behind the Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Clinical Experience
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. U. S. Sharma serves as CMS at Balprada Ayurvedic
                      Hospital and Research Centre, with more than 20 years of
                      Ayurvedic practice focused on kidney and liver conditions,
                      long-term chronic disease care and general consultation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Research and Herbal Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Dr. Chetan Anand is associated with Balprada Herbal
                      Wellness Private Limited, with more than 7 years of
                      experience in herbal product research and development, and
                      he advises on free health camps.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions Seen at the Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The clinic offers Ayurvedic and lifestyle care for kidney
                      failure, kidney stones, swelling and diabetes-linked kidney
                      concerns, with hydration routines and dietary discipline
                      forming part of the guidance.
                    </li>
                    <li>
                      Prescribed medicines and dialysis should continue until the
                      patient&apos;s own doctor advises any change.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Fatty liver, jaundice, weak digestion and metabolic
                      imbalance are supported through medicine, diet and
                      routine-based care, with an emphasis on diet discipline and
                      monitored care.
                    </li>
                    <li>
                      Severe or worsening symptoms, including marked yellowing,
                      persistent vomiting or extreme weakness, need urgent
                      medical attention first.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Strength and recovery, diet guidance, stress support and
                      regular consultation are offered alongside the
                      patient&apos;s primary medical treatment and never in its
                      place.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Diabetes, Thyroid and Heart Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Diabetes care relies on dietary discipline, regular
                      physical activity, prescribed care and routine blood-sugar
                      monitoring, while thyroid care looks at symptoms and
                      thyroid reports for both hypothyroidism and hyperthyroidism.
                    </li>
                    <li>
                      Blood pressure, obesity and heart-related concerns are
                      supported with Ayurvedic and lifestyle guidance, and
                      prescribed medicines should only be changed by the treating
                      doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private, personalized care is offered for hormonal balance,
                      menstrual health, weakness and maternal wellness, with
                      careful listening and individualized guidance.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Therapies Available Alongside the Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is planned after individual assessment to
                      support cleansing, balance and recovery through traditional
                      procedures, doctor-guided planning and recovery support.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga is offered as part of the wellness programme, with
                      breath and posture practice, routine building and stress
                      support, and it aims to help patients build discipline,
                      strength and calm.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy supports safe movement, mobility, strength
                      and recovery through mobility assessment and guided
                      rehabilitation, coordinated with the wider treatment plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Naturopathy and Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy works with the body&apos;s natural healing
                      capacity, and guided meditation supports emotional
                      steadiness and restful sleep.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Precautions Before Starting Therapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Share existing conditions, current medicines and mobility
                      concerns before beginning any therapy, because frequency
                      and suitability are decided after individual assessment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostics at the Clinic Lab
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Tests Available
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Labs offers Complete Blood Count, Thyroid Profile,
                      Liver Function Test, Kidney Function Test, Diabetes Profile
                      with blood sugar and HbA1c, Lipid Profile, Urine Routine
                      and Microscopy, and Vitamin B12 and Vitamin D tests.
                    </li>
                    <li>
                      Other doctor-advised tests may also be available, and
                      patients should call the lab to confirm preparation and
                      charges.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Report-Based Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reports help the doctor understand the condition and track
                      progress, so follow-up decisions are based on actual
                      results and not guesswork.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines and Products
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. In-House Pharmacy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines in an organized
                      way at the main branch, supported by modern systems.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Herbal and Organic Products
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Enterprises offers herbal tea, spices, oils,
                      avaleh, herbal flour, gram flour, pickle, murabba and
                      dalia, and the Organic Food page lists naturally grown
                      items subject to harvest and season.
                    </li>
                    <li>
                      Patients can ask the team for current stock, price, pickup
                      and courier options.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Patient Experience at the Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. What Reviews Say
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Google reviews describe excellent guidance from Vaidya ji,
                      knowledgeable vaidyas, authentic herbal formulations and
                      humble, kind staff who greet patients with a smile.
                    </li>
                    <li>
                      Reviewers also mention a serene ashram setting that helps
                      patients recover with positivity, although individual
                      results always differ.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Seva and Community
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Jansewa Sansthan runs Vridhashram, Navtarun Ashram,
                      residential school support and Gaushala seva, showing the
                      institution&apos;s seva spirit beyond the clinic.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-up at the Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. How Review Works
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up depends on the condition, and the team may review
                      reports, symptoms, diet and how the patient responds to
                      medicines over time, adjusting the guidance as needed.
                    </li>
                    <li>
                      Regular review matters most in conditions that respond
                      slowly, because steady discipline over months often decides
                      how useful the care becomes.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Keeping Records
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Keep prescriptions, test reports and medicine notes in one
                      folder and bring them to every visit, so that the vaidya
                      can compare results and understand changes since the last
                      consultation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Visit the Clinic
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Long-Term Patients
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      People living with kidney, liver, sugar, thyroid, blood
                      pressure or heart concerns who want Ayurvedic and lifestyle
                      support alongside regular medical care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Families Seeking Clarity
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families who feel confused after many opinions and want a
                      vaidya to explain the condition, diet and routine in clear
                      and simple language.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Elderly Patients and Attendants
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Elderly patients can come with an attendant, who listens to
                      the diet and routine advice and helps at home later, and
                      the staff, described by patients as humble and kind, take
                      time to explain.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Women Seeking Private Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Women who prefer a private and personalized consultation
                      for hormonal, menstrual or weakness-related concerns can
                      speak openly and without hurry.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Vaidya
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask what the plan includes, how food, sleep and daily routine
                  should change, which medicines are prescribed and for how long,
                  and when the next review is due.
                </li>
                <li>
                  Ask whether any tests or therapies such as panchakarma, yoga or
                  physiotherapy are advised, and which warning signs mean you
                  should contact your own doctor at once.
                </li>
                <li>
                  Ask about the charges for consultation, medicines, therapies
                  and tests, since the website does not publish a price list.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Kanth Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Planning the Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Confirm the branch, date and timing by phone or WhatsApp,
                      and keep all reports in one folder so the consultation is
                      not delayed.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Following the Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Take medicines as advised, follow the diet honestly and
                      note the date of your next review, because regular
                      follow-up is where much of the value of Ayurvedic care
                      lies.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Safe and Honest Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada does not ask patients to abandon dialysis, insulin,
                      cancer treatment or other prescribed care, and no honest
                      practitioner can promise guaranteed results.
                    </li>
                    <li>
                      Emergencies should always go to urgent medical care first.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">Visit the Clinic</h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                        Bilari, District Moradabad, Uttar Pradesh 244415, call{" "}
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
                        F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                        Uttar Pradesh 244001, call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>
                        .
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