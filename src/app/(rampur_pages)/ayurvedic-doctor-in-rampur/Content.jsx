import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicDoctorRampur() {
  const faqs = [
    {
      q: "Q1. Who is the best Ayurvedic doctor in Rampur for chronic diseases?",
      a: "Balprada&apos;s experienced vaidyas have supported patients with chronic concerns since 1991. Consult the doctor with your reports for a personalised plan.",
    },
    {
      q: "Q2. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q3. Which conditions can I consult for?",
      a: "Kidney, liver, cancer support, heart, diabetes, thyroid and women&apos;s health concerns.",
    },
    {
      q: "Q4. Is the first consultation free?",
      a: "Free OPD is available on the 15th of every month. On other days, please call to confirm consultation details.",
    },
    {
      q: "Q5. What are the consultation timings?",
      a: "Daily from 10:00 AM to 2:00 PM at the main branch. The Moradabad branch has Vaidya ji on Sundays, so call first.",
    },
    {
      q: "Q6. What should I carry to my first visit?",
      a: "Earlier reports, prescriptions and a list of all medicines you take.",
    },
    {
      q: "Q7. Can I stop my English medicines during Ayurvedic treatment?",
      a: "No. Never stop prescribed medicines without medical advice. Your doctor will plan care after reviewing them.",
    },
    {
      q: "Q8. Are medicines prepared at Balprada?",
      a: "Yes. Balprada prepares its own Ayurvedic medicines.",
    },
    {
      q: "Q9. Is a pathology lab available?",
      a: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic tests.",
    },
    {
      q: "Q10. How often should I visit for follow-up?",
      a: "Follow-up timing depends on your condition. The doctor will advise a schedule after your first consultation.",
    },
    {
      q: "Q11. Can family members come with me?",
      a: "Yes. Family participation helps with diet, medicines and daily routine at home.",
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
                Ayurvedic Doctor in Rampur – Consult Experienced Vaidyas at
                Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Finding the Right Ayurvedic Doctor in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Choosing an Ayurvedic doctor in Rampur, Uttar Pradesh is an
                  important decision, especially when the concern is
                  long-standing, such as kidney trouble, liver problems,
                  diabetes, thyroid imbalance or recovery during serious
                  illness.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has guided
                  patients through such concerns since 1991, combining
                  experienced vaidyas, in-house herbal medicines and
                  disciplined lifestyle guidance.
                </li>
                <li>
                  Patients travelling from Rampur reach our main branch in
                  Bilari or our branch in Moradabad for unhurried consultation,
                  practical advice and regular follow-up.
                </li>
                <li>
                  This page explains how our Ayurvedic doctors work, which
                  conditions they support, what happens during consultation and
                  how you can book your first visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada and Its Ayurvedic Doctors
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. A Tradition of Healing Since 1991
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada began in 1991 through the seva sankalp of Sw.
                      Vaidya Vijay Pal Singh Ji, who envisioned Ayurvedic
                      healing joined with selfless community service.
                    </li>
                    <li>
                      Over 35 years, the institution has grown into an
                      Ayurvedic chikitsalaya with research, herbal wellness,
                      pathology, yoga, naturopathy and ashram-based care.
                    </li>
                    <li>
                      Our vaidyas follow the founder&apos;s guiding thought:
                      positivity gives patients the courage to face difficult
                      circumstances.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Our Approach to Patient Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Every patient is treated as an individual. The vaidya
                      reviews the main concern, history, reports and current
                      medication before suggesting the next step.
                    </li>
                    <li>
                      Care combines Ayurvedic medicines, diet discipline and
                      lifestyle correction rather than relying on medicine
                      alone.
                    </li>
                    <li>
                      Regular follow-up lets the doctor observe progress, adjust
                      guidance and support long-term discipline.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients from Rampur Trust Balprada Vaidyas
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Experience Built Over Decades
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      More than three decades of continuous Ayurvedic practice
                      means our team has supported patients with a wide range
                      of chronic and long-standing health concerns.
                    </li>
                    <li>
                      Patients from across Uttar Pradesh describe excellent
                      guidance from Vaidya ji and the hospital team in their
                      Google reviews.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Honest and Responsible Guidance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors explain the care plan clearly so that patients
                      and families know what to expect from medicine, diet and
                      routine.
                    </li>
                    <li>
                      Ayurvedic care is planned alongside any ongoing treatment,
                      so patients are asked to share every medicine they
                      currently take and to bring all earlier reports.
                    </li>
                    <li>
                      We avoid unrealistic promises, because chronic conditions
                      need patience, discipline and steady follow-up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Genuine In-House Herbal Medicines
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares its own Ayurvedic medicines, supporting
                      consistency and quality across treatment plans.
                    </li>
                    <li>
                      Visitors often mention the genuine herbal preparations
                      and the calm ashram surroundings that help recovery.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Warm, Respectful Environment
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reviewers highlight humble, smiling staff who go out of
                      their way to help families feel welcomed.
                    </li>
                    <li>
                      The peaceful ashram setting encourages rest, routine and
                      a positive outlook during treatment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does an Ayurvedic Doctor Do?
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  An Ayurvedic doctor, or vaidya, studies the patient as a
                  whole, looking at symptoms, digestion, strength, daily
                  habits, sleep, stress and medical history together.
                </li>
                <li>
                  The doctor prepares a personalised plan that may include
                  herbal medicines, diet changes, daily routine, yoga and, when
                  suitable, panchakarma therapies.
                </li>
                <li>
                  The vaidya monitors progress through follow-up visits and
                  adjusts medicines and guidance as the body responds.
                </li>
                <li>
                  A responsible Ayurvedic doctor also knows the limits of
                  Ayurveda and encourages timely medical tests and emergency
                  care whenever a situation demands it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Amresh Mishra from Uttar Pradesh shared a five-star review
                  praising the guidance of Vaidya ji and the hospital team,
                  along with the natural ashram surroundings and genuine herbal
                  preparations.
                </li>
                <li>
                  Shivam Srivastav described Balprada as a wonderful place
                  where the humble, kind staff greet everyone with a smile and
                  go out of their way to help.
                </li>
                <li>
                  Dr. Jeetesh Vishwas highlighted the knowledgeable vaidyas,
                  authentic herbal formulations and serene healing atmosphere
                  for kidney, liver and chronic illness care.
                </li>
                <li>
                  These experiences reflect the service-first spirit that
                  Balprada has carried forward since 1991.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Ayurvedic Doctor Care Differs from a Quick Prescription
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The consultation is unhurried and focuses on understanding
                  the person, not only the diagnosis written on a report.
                </li>
                <li>
                  Food and routine are treated as part of the treatment, so
                  patients receive practical diet and lifestyle guidance along
                  with medicines.
                </li>
                <li>
                  Therapies such as panchakarma, yoga and naturopathy are
                  suggested only when they suit the patient&apos;s condition
                  and strength.
                </li>
                <li>
                  Follow-up is built into the plan, helping patients stay
                  disciplined and allowing the doctor to respond to changes
                  early.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Consultation Matters
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Many chronic conditions, including kidney, liver and
                  metabolic problems, develop slowly, and early guidance on
                  food, routine and medicines can make long-term management
                  easier.
                </li>
                <li>
                  Persistent swelling, weak digestion, constant fatigue, rising
                  blood sugar or unexplained weakness are signs that deserve a
                  proper consultation and tests rather than self-medication.
                </li>
                <li>
                  Early visits give the doctor more time to build a gentle,
                  practical plan that the patient and family can follow
                  comfortably at home.
                </li>
                <li>
                  Families supporting a loved one through serious illness also
                  benefit from early guidance on strength, diet and emotional
                  balance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions Our Ayurvedic Doctors Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Urinary Concerns
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic consultation and lifestyle care for kidney
                      function, swelling, kidney stones and diabetes-linked
                      kidney concerns.
                    </li>
                    <li>
                      Support includes kidney failure care, kidney stone
                      guidance, persistent swelling and diabetic nephropathy
                      through diet guidance, medicines and regular monitoring.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Liver and Digestive Concerns
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Medicine, diet and routine-based care for fatty liver,
                      jaundice and weak digestion.
                    </li>
                    <li>
                      Doctors focus on food discipline and daily habits so the
                      liver and digestive system receive steady support.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Cancer Supportive Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Sensitive supportive care for strength, energy, diet and
                      emotional balance during serious illness.
                    </li>
                    <li>
                      Strength and recovery support, diet guidance and stress
                      support are offered alongside the patient&apos;s primary
                      oncology treatment, not as a replacement for it.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Heart, Blood Pressure and Lifestyle Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Integrated Ayurvedic and lifestyle care for blood
                      pressure, diabetes, obesity and stress.
                    </li>
                    <li>
                      Practical guidance on food, activity and sleep supports
                      heart and metabolic health.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Diabetes and Thyroid Care
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Personalised support for blood sugar, hypothyroidism,
                      hyperthyroidism, energy, weight and metabolic balance.
                    </li>
                    <li>
                      Follow-up visits help the doctor track progress and
                      fine-tune the plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Women&apos;s Health
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Private, respectful Ayurvedic care for hormonal balance,
                      menstrual health and weakness.
                    </li>
                    <li>
                      Consultations pay attention to diet, lifestyle and
                      emotional wellbeing.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Consultation Journey with Our Ayurvedic Doctor
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Detailed Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The doctor listens to your main concern, reviews your
                      history, reports and current medication, and asks about
                      food, sleep and daily habits.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Personalised Ayurvedic Plan
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      You receive a plan built around Balprada&apos;s Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Therapies
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, naturopathy, panchakarma, physiotherapy and
                      pathology support are added when they suit your
                      condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Follow-Up and Review
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Regular review visits help the team observe progress,
                      answer questions and keep treatment on track.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities Alongside Doctor Consultation
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Panchakarma:</span> therapies
                  are planned individually after assessment to support
                  cleansing, balance and recovery.
                </li>
                <li>
                  <span className="font-semibold">
                    Yoga and meditation:
                  </span>{" "}
                  practices build discipline, strength, calm and emotional
                  steadiness during the healing journey.
                </li>
                <li>
                  <span className="font-semibold">Naturopathy:</span> simple,
                  nature-led routines work with the body&apos;s natural
                  healing capacity.
                </li>
                <li>
                  <span className="font-semibold">Physiotherapy:</span>{" "}
                  professional support for safe movement, mobility and recovery
                  alongside the main care plan.
                </li>
                <li>
                  <span className="font-semibold">
                    Balprada Pathology Lab:
                  </span>{" "}
                  blood, urine and diagnostic testing helps the doctor track
                  progress with confidence.
                </li>
                <li>
                  <span className="font-semibold">
                    Ashram and organic food:
                  </span>{" "}
                  a peaceful setting and wholesome eating support long-term
                  healing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurveda and Modern Medical Reports Working Together
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada&apos;s doctors review your latest reports, scans and
                  prescriptions so that Ayurvedic care is planned with a clear
                  picture of your current health.
                </li>
                <li>
                  Pathology testing at Balprada Labs helps track progress over
                  time and keeps follow-up consultations informed and
                  organised.
                </li>
                <li>
                  Patients are encouraged to keep their regular specialists
                  informed and to seek emergency medical care without delay
                  when symptoms suddenly worsen.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Best Ayurvedic Doctor in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Check experience:</span>{" "}
                  prefer a clinic or hospital with a long, verifiable history
                  of patient care.
                </li>
                <li>
                  <span className="font-semibold">
                    Look for personalisation:
                  </span>{" "}
                  a good vaidya studies your reports and habits instead of
                  giving the same medicine to everyone.
                </li>
                <li>
                  <span className="font-semibold">Ask about medicines:</span>{" "}
                  understand what is prescribed, how it is prepared and how
                  long the plan may take.
                </li>
                <li>
                  <span className="font-semibold">Value honesty:</span> avoid
                  anyone who promises guaranteed or overnight cures for chronic
                  disease.
                </li>
                <li>
                  <span className="font-semibold">Read genuine reviews:</span>{" "}
                  patient feedback shows how the doctor and staff treat
                  families.
                </li>
                <li>
                  <span className="font-semibold">Consider follow-up:</span>{" "}
                  choose a place where regular review visits are practical for
                  you.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Prepare for Your Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring all earlier reports, scans, prescriptions and a list of
                  every medicine or supplement you take.
                </li>
                <li>
                  Note your symptoms, when they began and what makes them
                  better or worse.
                </li>
                <li>
                  Write down your questions about diet, medicines, duration and
                  follow-up.
                </li>
                <li>
                  If possible, bring a family member who helps with your meals
                  and daily care.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and allow time
                  for an unhurried consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Daily Routine for Better Health
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Eat fresh, simple, home-cooked meals at regular times, since
                  Ayurveda treats strong digestion as the foundation of health.
                </li>
                <li>
                  Follow any diet chart given by your doctor, especially for
                  kidney, liver, diabetes and thyroid concerns.
                </li>
                <li>
                  Sleep on time, wake early and avoid heavy meals late at
                  night.
                </li>
                <li>
                  Practise yoga, pranayama and meditation regularly to reduce
                  stress.
                </li>
                <li>
                  Drink fluids as advised for your condition, because needs
                  differ, particularly in kidney care.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                OPD Timings, Address and Contact
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
                        Guarau, Tehsil Bilari, District Moradabad, Uttar
                        Pradesh 244415.
                      </li>
                      <li>
                        Timings: daily, 10:00 AM to 2:00 PM.
                      </li>
                      <li>
                        Call:{" "}
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
                        Vaidya ji is available on Sundays. Please call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Free OPD and Appointments</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Free OPD consultation is available on the 15th of every
                        month.
                      </li>
                      <li>
                        Book by phone, WhatsApp on{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>{" "}
                        or through the Book Appointment page on
                        balpradaindia.com.
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
                Frequently Asked Questions (FAQs)
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

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment with an Ayurvedic Doctor Today
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Take the first step toward balanced, long-term wellness with
                  Balprada Ayurvedic Hospital &amp; Research Center.
                </li>
                <li>
                  Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  or WhatsApp us to book your OPD visit.
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