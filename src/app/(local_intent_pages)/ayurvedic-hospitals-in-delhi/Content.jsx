import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalsInDelhi() {
  const faqs = [
    {
      q: "Does Balprada have a hospital in Delhi?",
      a: "No. Balprada has two branches in the Moradabad region of Uttar Pradesh. The Moradabad branch is on Delhi Road in Moradabad, not in Delhi.",
    },
    {
      q: "Can patients from Delhi consult at Balprada?",
      a: "Yes, patients from any city can visit. Please call 8126364606 before travelling to confirm the branch and timing.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and the ashram and clinic are open throughout the week.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Is Sunday consultation available?",
      a: "Vaidya ji is available at the Moradabad branch on Sundays. Please call 9410447000 first.",
    },
    {
      q: "Which tests are available?",
      a: "CBC, thyroid, liver, kidney, diabetes, lipid, urine, vitamin B12 and vitamin D tests are listed. Confirm details with the lab.",
    },
    {
      q: "Does Ayurvedic care replace regular treatment?",
      a: "No, it works as supportive care. Continue current medicines until your doctor advises otherwise.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call or WhatsApp 8126364606, use the website appointment page or email balpradaindia@gmail.com.",
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
                Ayurvedic Hospitals in Delhi: How to Choose and Why Families
                Also Consider Balprada in Moradabad
              </h1>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Your Options for Ayurvedic Hospitals in Delhi
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Why Delhi Families Search for Ayurvedic Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Delhi is a large city with many hospitals, clinics and wellness
                  centers, so families dealing with long-term concerns such as
                  kidney problems, liver disorders, diabetes, thyroid imbalance or
                  lifestyle disease often feel confused about where to begin.
                </li>
                <li>
                  Many patients look for Ayurvedic hospitals in Delhi because they
                  want a natural, routine-based approach alongside their present
                  treatment, or because they want a second opinion that looks at
                  diet, sleep, stress and daily habits.
                </li>
                <li>
                  Ayurvedic care is usually gradual, so the best hospital for you
                  is one that you can visit regularly, understand clearly and
                  trust over many months, not only on the first day.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What You Should Compare Before Choosing
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Check how long the hospital has been working, who the consulting
                  doctors are and whether the team explains the treatment plan in
                  simple words instead of making large promises.
                </li>
                <li>
                  Check whether medicines are prepared under the hospital or
                  sourced from outside, and whether the doctor reviews your
                  reports before suggesting any plan.
                </li>
                <li>
                  Check if diagnostic tests, diet guidance and supportive
                  therapies are available, because a complete care journey is
                  easier to follow than scattered visits to different places.
                </li>
                <li>
                  Check the real cost of travel, time and follow-up for your
                  family, since a hospital that looks good on paper may be
                  difficult to visit again and again.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                An Honest Note About Balprada and Delhi
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center does not have a
                  branch inside Delhi. Its two branches are in the Moradabad
                  region of Uttar Pradesh, so patients from Delhi would need to
                  travel to reach the hospital.
                </li>
                <li>
                  The Moradabad branch is located on Delhi Road in New Moradabad,
                  which refers to the road name and not a location in Delhi, and
                  we mention this clearly so that no family is misled.
                </li>
                <li>
                  This page is meant to help Delhi families compare choices fairly
                  and to explain what Balprada offers for those who are willing to
                  travel for focused, long-term Ayurvedic care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital and Research Center
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Legacy of Seva Since 1991
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada was started in 1991 by Sw. Vaidya Vijay Pal Singh Ji
                  with a vision of Ayurvedic healing joined with social service,
                  and the institution now carries 35 years of experience in
                  natural Ayurvedic care.
                </li>
                <li>
                  The hospital brings together an Ayurvedic chikitsalaya,
                  research, herbal wellness, pathology, yoga, naturopathy and
                  ashram-based service in one trusted ecosystem.
                </li>
                <li>
                  The late Vaidya Shri Vijaypal Singh Ji often reminded patients
                  that staying positive gives courage in difficult circumstances,
                  and this thought still guides how families are supported.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Mission and Approach
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The mission is to provide reliable Ayurvedic care for chronic
                  and serious health conditions through consultation,
                  self-prepared medicines, lifestyle guidance and compassionate
                  service.
                </li>
                <li>
                  Care begins with the complete health picture, which includes
                  symptoms, medical history, current treatment, food habits,
                  sleep, stress and daily routine, and diagnostic reports are
                  reviewed where relevant.
                </li>
              </ul>

            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where Balprada Is Located
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Main Branch in Bilari
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                  Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  The Ashram and clinic stay open throughout the week, with
                  consultation from 10:00 AM to 2:00 PM, and the phone and
                  WhatsApp number is{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Moradabad Branch on Delhi Road
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar
                  Pradesh 244001.
                </li>
                <li>
                  Vaidya ji is available on Sundays, and patients should call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  before visiting.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Planning the Journey from Delhi
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Moradabad is in western Uttar Pradesh and is reached from Delhi
                  by road or rail, but travel time depends on traffic, season and
                  the mode you choose, so please plan the journey with some
                  margin.
                </li>
                <li>
                  The website does not publish a map or step-by-step directions,
                  so call the team before leaving and ask for the exact route and
                  landmarks for the branch you have chosen.
                </li>
                <li>
                  Arrive within the 10:00 AM to 2:00 PM consultation window, and
                  consider an early start or an overnight plan if the patient is
                  elderly or weak.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Concerns Supported with Ayurvedic Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Kidney and Urinary Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic consultation and lifestyle care are available for
                  kidney function concerns, kidney failure, kidney stones,
                  swelling and diabetes-linked kidney problems.
                </li>
                <li>
                  The plan may include Ayurvedic medicines, diet guidance,
                  lifestyle correction and supportive facilities, with regular
                  review of progress.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Liver and Digestive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Medicine, diet and routine-based care are offered for fatty
                  liver, jaundice and weak digestion, with food quality and timing
                  treated as part of recovery.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Cancer Supportive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sensitive supportive care focuses on strength and recovery, diet
                  guidance and stress support during serious illness.
                </li>
                <li>
                  This is supportive care and must be taken together with the
                  advice of the treating specialist, never instead of it.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Heart, Diabetes and Thyroid Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Integrated care is available for blood pressure, obesity,
                  diabetes, hypothyroidism and hyperthyroidism, with attention to
                  food discipline, activity and regular monitoring.
                </li>
                <li>
                  Patients should continue prescribed medicines and blood sugar
                  checks unless their doctor advises otherwise.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Wellness for Women
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Private and personalized care is offered for hormonal balance,
                  menstrual health and weakness, in a setting where women can
                  speak openly about concerns.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostics and Facilities Under One Roof
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Balprada Pathology Lab
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The lab lists tests such as Complete Blood Count, Thyroid
                  Profile, Liver Function Test, Kidney Function Test, Diabetes
                  Profile with HbA1c, Lipid Profile, Urine Routine and Microscopy,
                  and Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Patients coming from far away should contact the lab to confirm
                  test preparation, price and reporting time before the visit.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Therapies and Supportive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma is planned according to individual assessment with
                  doctor guidance, and patients are asked to share existing
                  conditions, medicines and mobility concerns before beginning.
                </li>
                <li>
                  Yoga, naturopathy, meditation and physiotherapy support balance,
                  routine, stress relief, safe movement and strength alongside the
                  main plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Herbal Medicines and Products
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness prepares traditional and specialized
                  Ayurvedic medicines under organized conditions with modern
                  support systems.
                </li>
                <li>
                  Balprada Enterprises works with herbal tea, spices, Ayurvedic
                  oils, avaleh, herbal flour, gram flour, pickle, murabba and
                  dalia, and product questions can be raised through the inquiry
                  route or by phone.
                </li>
                <li>
                  The organic food range, such as barley dalia, multigrain atta,
                  fresh amla, raw honey and whole grains, follows the harvest
                  season, so patients should ask on WhatsApp for current
                  availability.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Jansewa and Community Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Jansewa offers free and subsidised Ayurvedic
                  consultations for underprivileged patients, and the work
                  includes Balprada Vridhashram for elderly people and Balprada
                  Navtarun Ashram for children in need.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Local Hospital or Travel for Care: How to Decide
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                When a Hospital Inside Delhi May Suit You Better
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  If the patient needs frequent in-person visits, emergency access
                  or has difficulty travelling, a hospital close to home in Delhi
                  is usually the more practical choice.
                </li>
                <li>
                  If your family wants a hospital that is easy to reach within a
                  day, a nearby option avoids the cost, tiredness and planning
                  that a long journey needs.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                When Travelling to Balprada May Make Sense
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Some families prefer a calm ashram setting away from city noise,
                  and Balprada combines consultation, in-house medicines,
                  pathology, yoga, naturopathy and panchakarma in one place.
                </li>
                <li>
                  Families who already know the hospital through reviews,
                  relatives or the free OPD may choose to travel because they want
                  care from a team with 35 years of experience in chronic and
                  serious conditions.
                </li>
                <li>
                  Whatever you decide, speak to the team first, explain your
                  condition honestly and ask whether a visit is suitable before
                  you spend time and money on the trip.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-up Planning for Patients Living in Another City
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Make Follow-up Realistic
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic treatment depends on regular review of symptoms,
                  reports, food routine and medicine response, so ask the team how
                  often you will need to visit and what can be discussed by phone.
                </li>
                <li>
                  Keep a simple diary of symptoms, appetite, sleep, bowel habits
                  and energy, and note any change after medicines or diet changes,
                  because this helps the doctor adjust guidance at the next visit.
                </li>
                <li>
                  Keep all reports in date order and carry the latest ones every
                  time, especially kidney function, liver function, thyroid and
                  blood sugar tests.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Keep Your Local Doctor Informed
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Tell your regular physician or specialist in Delhi about any
                  Ayurvedic medicines you are taking, since good communication
                  between both sides protects your safety.
                </li>
                <li>
                  Never stop or change prescribed medicines for kidney, heart,
                  diabetes or any serious illness without medical advice.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Realistic Expectations from Ayurvedic Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Patients Should Keep in Mind
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda focuses on long-term balance through medicines, diet
                  discipline and routine, so progress is usually gradual and
                  differs from person to person.
                </li>
                <li>
                  The website does not publish clinical outcomes or success rates,
                  and families should be careful about any hospital that
                  guarantees a cure.
                </li>
                <li>
                  Patient reviews on the site praise the humble staff, the
                  peaceful surroundings and the genuine herbal preparations, but
                  they are personal experiences and should not be treated as a
                  promise of results.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book Your Appointment
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Simple Booking Steps
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  , or use the appointment page on the website and share patient
                  details, your preferred branch and your health concern such as
                  kidney, liver, cancer support, heart, diabetes and thyroid,
                  women health or other.
                </li>
                <li>
                  The team will guide you on consultation timing and the next
                  step, so keep your reports and phone ready for any questions.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What to Carry
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring previous prescriptions, recent blood and urine reports,
                  scans if available, a list of current medicines and a short note
                  of symptoms, duration and diet routine.
                </li>
                <li>
                  Bring a family member who can help remember diet and medicine
                  instructions, and do not stop any ongoing medicine on your own.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Important Note for Patients
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care supports long-term health and does not replace
                  emergency treatment. In case of severe pain, breathlessness or
                  sudden worsening, go to the nearest hospital at once.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation
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