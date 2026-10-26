import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaHospitalReviews() {
  const faqs = [
    {
      q: "Where can I read authentic Balprada Hospital reviews?",
      a: "You can read verified patient reviews directly on the Balprada official website in the Stories of Trust section, and on Google Reviews by searching for Balprada Ayurvedic Hospital & Research Center.",
    },
    {
      q: "What do patient reviews praise most about Balprada?",
      a: "Reviews consistently highlight knowledgeable and patient vaidyas, authentic in-house herbal medicines, humble and kind staff, and the calm, peaceful ashram environment.",
    },
    {
      q: "Do reviews guarantee a cure for chronic conditions?",
      a: "No, authentic Ayurvedic care does not promise overnight miracles or guaranteed cures. Treatment outcomes depend on individual constitution, severity of condition, diet discipline, and regular follow-ups.",
    },
    {
      q: "What conditions do patients review Balprada for?",
      a: "Patients consult and leave feedback for chronic kidney care, liver diseases, cancer supportive care, diabetes, thyroid management, joint pain, paralysis recovery, and digestive issues.",
    },
    {
      q: "Is free OPD consultation available at Balprada Hospital?",
      a: "Yes, free OPD consultation is provided on the 15th of every month, carrying forward our tradition of selfless community seva.",
    },
    {
      q: "Should I continue my current allopathic medicines?",
      a: "Yes, continue all prescribed medications such as insulin, blood pressure tablets, or dialysis unless your prescribing doctor advises a change. Always disclose your complete medical history to our vaidyas.",
    },
    {
      q: "How can I book an appointment or visit the hospital?",
      a: "You can call or WhatsApp our helpline at 8126364606, or visit the Contact page on our website to schedule your consultation.",
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
                Balprada Hospital Reviews: What Patients &amp; Families Say
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Authentic Experiences from 35 Years of Compassionate Ayurvedic Care
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Why Reviews Matter When Choosing Ayurvedic Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      When dealing with chronic illnesses or seeking holistic
                      wellness, reading firsthand experiences from other
                      patients and families provides vital clarity and peace of
                      mind before taking the first step.
                    </li>
                    <li>
                      Reviews show how a hospital behaves in real moments: the
                      thoroughness of the vaidya&apos;s pulse reading and consultation,
                      the purity of herbal medicines, and the warmth of the
                      supporting team.
                    </li>
                    <li>
                      At Balprada Ayurvedic Hospital &amp; Research Center, we
                      encourage patients to share their honest journeys openly on
                      Google and public forums, fostering transparency and trust.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. How to Read Reviews Wisely
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic healing operates deeply at the root cause,
                      requiring patience, lifestyle alignment, and herbal
                      consistency. A single review reflects one individual&apos;s
                      unique health constitution (Prakriti and Vikriti).
                    </li>
                    <li>
                      Look for overarching themes: sustained doctor-patient
                      trust, attentiveness of the medical staff, hygiene and
                      quality of medicinal preparations, and post-consultation
                      follow-up support.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Value Most at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Deep, Unhurried Vaidya Consultations
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients frequently appreciate that consultations are
                      detailed and personal. Senior vaidyas, led by Dr. U. S.
                      Sharma and Dr. Chetan Anand, examine medical reports,
                      symptom histories, diet habits, and emotional factors.
                    </li>
                    <li>
                      Rather than rushing to write prescriptions, our doctors
                      explain the &apos;why&apos; behind the health condition and
                      the precise role of herbs and dietary corrections in
                      recovery.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. In-House Genuine Herbal Formulations
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A recurring point of praise in reviews is our reliance on
                      authentic herbal preparations manufactured under strict
                      quality controls by Balprada Herbal Wellness.
                    </li>
                    <li>
                      From classic churnas and kwaths to specialized herbal
                      extracts, our preparations avoid harmful additives and
                      maintain classical Ayurvedic potency.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Humble, Service-Driven Staff
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Operating under the ethos of the Balprada Jansewa Ashram
                      Trust, our staff treats every visiting patient as a
                      honoured guest with humility, prompt support, and kindness.
                    </li>
                    <li>
                      Whether assisting elderly patients, arranging diagnostic
                      tests, or explaining medicine dosage routines, the team
                      aims to make every visit stress-free.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Serene Ashram Atmosphere
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Far away from chaotic urban hospital settings, our campus
                      provides green open spaces, clean air, and spiritual calm
                      conducive to mental and physical healing.
                    </li>
                    <li>
                      Patients undergoing Panchakarma and Naturopathy therapies
                      benefit from this peaceful environment that promotes
                      deep rest and nervous system rejuvenation.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Patient Stories Across Care Categories
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Chronic Kidney and Liver Support
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients dealing with high creatinine, proteinuria, fatty
                      liver, and related disorders report noticeable
                      improvements in digestion, stamina, and lab parameters
                      under supervised herbal and dietary protocols.
                    </li>
                    <li>
                      Our vaidyas work ethically alongside nephrology and
                      hepatology treatments, ensuring complete patient safety.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Cancer Supportive Care &amp; Immunity
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reviews from cancer patients highlight supportive
                      therapies that improve appetite, manage fatigue, and boost
                      vitality during or after chemotherapy and radiation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Joint Health, Spine &amp; Paralysis Rehabilitation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients receiving Janu Basti, Kati Basti, Abhyanga, and
                      physiotherapy report significant relief from chronic back
                      pain, arthritis, slip disc discomfort, and motor weakness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Complete Facilities Under One Roof
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      <strong>Panchakarma Center:</strong> Classical detox and
                      rejuvenation therapies supervised by trained vaidyas and
                      therapists.
                    </li>
                    <li>
                      <strong>Balprada Pathology Lab:</strong> Routine and
                      specialized diagnostic testing (CBC, KFT, LFT, Lipid, HbA1c,
                      Vitamins) for integrated monitoring.
                    </li>
                    <li>
                      <strong>Yoga &amp; Naturopathy:</strong> Therapeutic yoga
                      sessions, breathing exercises, and natural healing routines.
                    </li>
                    <li>
                      <strong>Pure Living &amp; Organics:</strong> Organic food
                      and health essentials from Balprada Enterprises to support
                      home wellness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Plan Your Visit to Balprada
              </h2>

              <div className="mb-6 space-y-5">
                <div>
                  <p className="font-semibold">Before You Arrive</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Bring past prescriptions, recent pathology and radiology
                      reports, and current medications.
                    </li>
                    <li>
                      Call ahead or WhatsApp to confirm doctor availability on
                      your planned day of visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">OPD Timings &amp; Free Camp</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Daily OPD consultations run from 10:00 AM to 2:00 PM, 7 days
                      a week.
                    </li>
                    <li>
                      Free OPD consultations are organized on the 15th of every
                      month for all patients.
                    </li>
                  </ul>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Main Ashram Branch</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                        Bilari, District Moradabad, UP 244415.
                      </li>
                      <li>
                        Phone / WhatsApp:{" "}
                        <a href="tel:8126364606" className="hover:underline font-semibold">
                          8126364606
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />

                  <div>
                    <p className="font-semibold">Moradabad City Branch</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                        UP 244001 (Sunday Vaidya consultations).
                      </li>
                      <li>
                        Phone:{" "}
                        <a href="tel:9410447000" className="hover:underline font-semibold">
                          9410447000
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
                    <Phone className="mr-2 inline" size={18} />
                    Book Consultation
                  </button>
                </Link>

                <Link href="/testimonials">
                  <button className="rounded-lg border-2 border-green-700 px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50">
                    View More Testimonials
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