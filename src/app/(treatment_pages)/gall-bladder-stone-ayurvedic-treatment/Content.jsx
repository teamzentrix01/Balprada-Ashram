import Link from "next/link";
import {
  Phone,
  MapPin,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaGallbladderStoneTreatment() {
  const faqs = [
    {
      q: "Can Ayurveda help manage gallbladder stones?",
      a: "Ayurveda offers supportive care through diet, herbs and lifestyle correction to help manage digestive balance under medical guidance.",
    },
    {
      q: "Does Balprada guarantee dissolving of gallbladder stones?",
      a: "No. Ayurvedic care supports overall digestive and liver function; it does not claim to cure or guarantee stone removal.",
    },
    {
      q: "What diet should I follow for gallbladder stones?",
      a: "Light, warm, low-fat meals with regular timings and adequate water intake are generally recommended.",
    },
    {
      q: "Is Panchakarma suitable for every gallstone patient?",
      a: "Not always. Panchakarma is recommended only after individual assessment by the treating doctor.",
    },
    {
      q: "When should I see a conventional doctor instead?",
      a: "Severe pain, fever, jaundice or persistent vomiting require immediate medical attention, not home or herbal remedies.",
    },
    {
      q: "How long does Ayurvedic supportive care usually take?",
      a: "This varies by individual condition and is discussed during consultation, since every patient's case is different.",
    },
    {
      q: "Does Balprada offer free consultation?",
      a: "Yes, a free OPD consultation is available on the 15th of every month at the ashram and clinic.",
    },
    {
      q: "Can I continue my allopathic treatment alongside Ayurvedic care?",
      a: "Yes, patients are encouraged to continue prescribed medical treatment while discussing complementary Ayurvedic support with our doctors.",
    },
    {
      q: "How do I book an appointment at Balprada?",
      a: "You can call, WhatsApp, or use the appointment booking option on the Balprada website for either branch.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Understanding Gallbladder Stones */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-6 text-gray-900">
                Understanding Gallbladder Stones (Pittashmari) in Ayurveda
              </h1>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Gallbladder stones, known in Ayurveda as &quot;Pittashmari,&quot;
                  are hard deposits that form inside the gallbladder due to
                  imbalance in bile composition.
                </li>
                <li>
                  Ayurveda classifies this condition under Pitta and Kapha dosha
                  imbalance, where vitiated Pitta thickens bile and Kapha
                  contributes to stone formation.
                </li>
                <li>
                  Modern diagnosis identifies these as cholesterol stones,
                  pigment stones, or mixed stones depending on their
                  composition.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has supported
                  patients with digestive and liver-related concerns for 35
                  years since 1991, guided by the seva sankalp of Sw. Vaidya
                  Vijay Pal Singh Ji.
                </li>
                <li>
                  Our approach looks at gallbladder health as part of the wider
                  liver and digestive system, not as an isolated organ problem.
                </li>
                <li>
                  Ayurvedic care focuses on supporting healthy bile flow, easing
                  associated discomfort, and correcting the underlying digestive
                  imbalance through medicine, diet and routine.
                </li>
              </ul>
            </div>

            {/* Section 2 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Common Causes of Gallbladder Stones
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Excess intake of oily, fried and heavy foods that aggravate
                  Kapha and Pitta dosha.
                </li>
                <li>
                  Irregular eating habits, long gaps between meals, or frequent
                  skipping of meals.
                </li>
                <li>
                  Sedentary lifestyle with little physical movement or exercise.
                </li>
                <li>
                  Obesity and metabolic imbalance affecting bile composition.
                </li>
                <li>
                  Poor digestion (Agni mandya) leading to improper fat
                  metabolism.
                </li>
                <li>
                  Excessive consumption of cold, stale or reheated food items.
                </li>
                <li>
                  Family history and genetic predisposition to gallstone
                  formation.
                </li>
                <li>
                  Rapid weight loss or crash dieting, which can disturb bile
                  cholesterol balance.
                </li>
                <li>
                  Hormonal changes, particularly in women, that influence bile
                  composition.
                </li>
              </ul>
            </div>

            {/* Section 3 — Common Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Common Symptoms Associated with Gallbladder Stones
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Pain in the upper right side of the abdomen, often after
                  meals.
                </li>
                <li>
                  Bloating, gas and a feeling of heaviness after eating oily
                  food.
                </li>
                <li>
                  Nausea or vomiting, especially following a fatty meal.
                </li>
                <li>Indigestion and discomfort that recurs frequently.</li>
                <li>Loss of appetite over a period of time.</li>
                <li>
                  Restlessness or mild fever in cases where inflammation is
                  present.
                </li>
                <li>
                  Yellowish discoloration of eyes or skin in more advanced
                  situations.
                </li>
                <li>
                  Dull, aching pain that may radiate toward the back or right
                  shoulder.
                </li>
              </ul>
            </div>

            {/* Section 4 — Immediate Medical Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                When to Seek Immediate Medical Attention
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Severe, sudden abdominal pain that does not settle within a
                  few hours.
                </li>
                <li>
                  High fever with chills, which may indicate infection.
                </li>
                <li>
                  Yellowing of skin or eyes (jaundice), suggesting bile duct
                  obstruction.
                </li>
                <li>
                  Persistent vomiting with inability to retain food or fluids.
                </li>
                <li>
                  Rapid heartbeat or signs of severe distress.
                </li>
                <li>
                  These situations require urgent conventional medical
                  evaluation, and patients are advised to consult a hospital
                  emergency department without delay.
                </li>
                <li>
                  Ayurvedic supportive care is best suited for manageable,
                  non-emergency cases and for ongoing digestive support
                  alongside a doctor&apos;s guidance.
                </li>
              </ul>
            </div>

            {/* Section 5 — Ayurvedic Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Balprada&apos;s Ayurvedic Approach to Gallbladder Stone Care
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Detailed consultation to understand the patient&apos;s
                  Prakriti (constitution), symptoms, reports and current
                  medication.
                </li>
                <li>
                  Assessment of Agni (digestive fire) to identify the root cause
                  of bile imbalance.
                </li>
                <li>
                  Personalized herbal medicine plan prepared using Balprada&apos;s
                  in-house Ayurvedic formulations.
                </li>
                <li>
                  Diet correction plan designed to reduce Pitta and Kapha
                  aggravation.
                </li>
                <li>
                  Lifestyle and routine guidance to support long-term digestive
                  discipline.
                </li>
                <li>
                  Supportive therapies such as Panchakarma, Naturopathy and Yoga
                  where suitable for the individual case.
                </li>
                <li>
                  Regular follow-up consultations to monitor progress and adjust
                  the care plan as needed.
                </li>
                <li>
                  Coordination with pathology support through Balprada Labs for
                  relevant diagnostic testing.
                </li>
              </ul>
            </div>

            {/* Section 6 — Herbs and Formulations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Ayurvedic Herbs and Formulations Commonly Used
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Kalmegh (Andrographis paniculata) – traditionally used to
                  support liver and digestive function.
                </li>
                <li>
                  Bhumi Amla (Phyllanthus niruri) – known in Ayurveda for
                  supporting healthy liver and bile function.
                </li>
                <li>
                  Punarnava (Boerhavia diffusa) – used traditionally for
                  supporting fluid balance and digestion.
                </li>
                <li>
                  Kutki (Picrorhiza kurroa) – traditionally associated with
                  liver support in Ayurvedic texts.
                </li>
                <li>
                  Triphala – used for supporting healthy digestion and regular
                  elimination.
                </li>
                <li>
                  Pittashmari-specific herbal formulations prepared in-house at
                  Balprada, adjusted according to individual assessment.
                </li>
                <li>
                  All formulations are prescribed only after personal
                  consultation, since self-medication is not advised for
                  gallbladder concerns.
                </li>
              </ul>
            </div>

            {/* Section 7 — Panchakarma */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Panchakarma Support for Digestive and Liver Health
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Panchakarma therapies at Balprada are planned according to
                  individual assessment and are not applied as a fixed package
                  for every patient.
                </li>
                <li>
                  Virechana (therapeutic purgation) may be considered in
                  suitable cases to help balance Pitta dosha under medical
                  supervision.
                </li>
                <li>
                  Basti (medicated enema therapy) may support overall digestive
                  balance in appropriate cases.
                </li>
                <li>
                  Abhyanga and other supportive therapies may be included as
                  part of a broader wellness plan.
                </li>
                <li>
                  Every Panchakarma recommendation is made only after the
                  treating doctor&apos;s evaluation of the patient&apos;s
                  condition and suitability.
                </li>
              </ul>
            </div>

            {/* Section 8 — Diet Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Diet Guidance for Gallbladder Stone Patients
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Favor light, warm, and freshly cooked meals over heavy or
                  fried food.
                </li>
                <li>
                  Reduce intake of deep-fried snacks, red meat, and high-fat
                  dairy products.
                </li>
                <li>
                  Include more fiber-rich foods such as whole grains, fresh
                  vegetables and fruits.
                </li>
                <li>
                  Drink adequate warm water through the day to support
                  digestion.
                </li>
                <li>
                  Avoid excessive tea, coffee and carbonated beverages.
                </li>
                <li>
                  Eat meals at regular timings rather than skipping or delaying
                  them.
                </li>
                <li>
                  Include bitter and digestive-friendly vegetables like bottle
                  gourd, ridge gourd and leafy greens.
                </li>
                <li>
                  Avoid very cold food and drinks immediately after meals.
                </li>
                <li>
                  Maintain moderate portion sizes rather than large, heavy
                  meals at one sitting.
                </li>
              </ul>
            </div>

            {/* Section 9 — Lifestyle and Yoga */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Lifestyle and Yoga Support
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  Daily light physical activity such as walking to support
                  healthy digestion.
                </li>
                <li>
                  Yoga asanas that support digestive movement, practiced under
                  guidance and suited to the individual&apos;s condition.
                </li>
                <li>
                  Pranayama and breathing practices to support overall balance
                  and reduce stress.
                </li>
                <li>
                  Maintaining regular sleep timings to support the body&apos;s
                  natural digestive rhythm.
                </li>
                <li>
                  Avoiding daytime sleep immediately after heavy meals.
                </li>
                <li>
                  Stress management practices, since stress can influence
                  digestive function over time.
                </li>
              </ul>
            </div>

            {/* Section 10 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital &amp; Research Center
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  35 years of experience in Ayurvedic care since the hospital&apos;s
                  founding in 1991.
                </li>
                <li>
                  Legacy guided by the seva sankalp of Sw. Vaidya Vijay Pal
                  Singh Ji.
                </li>
                <li>
                  Ashram-based environment offering a peaceful setting for
                  consultation and recovery.
                </li>
                <li>
                  In-house herbal medicines prepared under experienced
                  supervision.
                </li>
                <li>
                  Comprehensive facilities including Panchakarma, Yoga,
                  Naturopathy, Meditation and Physiotherapy.
                </li>
                <li>
                  Balprada Pathology Lab available for reliable diagnostic
                  testing support.
                </li>
                <li>
                  Two accessible branches serving patients in Moradabad
                  district and surrounding areas.
                </li>
                <li>
                  Free OPD consultation offered on the 15th of every month.
                </li>
                <li>
                  Structured care process moving from consultation to Ayurvedic
                  plan, supportive facilities and follow-up.
                </li>
              </ul>
            </div>

            {/* Section 11 — Care Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Our Care Process
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>
                  <span className="font-semibold">Consultation –</span> The
                  doctor reviews the patient&apos;s concern, history, reports
                  and current medication before suggesting next steps.
                </li>
                <li>
                  <span className="font-semibold">Ayurvedic Plan –</span> Care
                  is planned using Balprada&apos;s Ayurvedic medicines, diet
                  discipline and lifestyle correction where suitable.
                </li>
                <li>
                  <span className="font-semibold">
                    Supportive Facilities –
                  </span>{" "}
                  Yoga, Naturopathy, Panchakarma and pathology support are
                  included where appropriate.
                </li>
                <li>
                  <span className="font-semibold">Follow-up –</span> Regular
                  follow-up helps the team track progress, adjust guidance and
                  support long-term discipline.
                </li>
              </ul>
            </div>

            

            

            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation for Gallbladder Stone Support
              </h2>

              <ul className="text-black space-y-3 list-disc pl-5 mb-6">
                <li>
                  Consult Balprada Ayurvedic Hospital &amp; Research Center for
                  individualized supportive care related to gallbladder stones,
                  digestion and liver health.
                </li>
                <li>
                  Bring your previous reports and details of any ongoing
                  medication during consultation.
                </li>
                <li>
                  Ayurvedic medicines, diet guidance, Panchakarma and supportive
                  therapies are recommended only after personal assessment.
                </li>
                <li>
                  Seek urgent conventional medical care for severe abdominal
                  pain, fever, jaundice or persistent vomiting.
                </li>
              </ul>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                      Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <p className="text-black">
                      F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                      Uttar Pradesh 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Contact Balprada</p>

                    <div className="flex items-center gap-3 text-black flex-wrap">
                      <a
                        href="tel:8126364606"
                        className="hover:underline"
                      >
                        8126364606
                      </a>

                      <span className="text-gray-400">|</span>

                      <a
                        href="tel:9410447000"
                        className="hover:underline"
                      >
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact">
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    <Phone className="inline mr-2" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/treatments">
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Explore Treatments
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 14 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}