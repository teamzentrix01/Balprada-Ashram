import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jaundice Ayurvedic Treatment in Rampur | Balprada Hospital",
  description:
    "Looking for jaundice ayurvedic treatment in Rampur? Balprada, trusted since 1991, offers supportive consultation, diet guidance and lab support. Call 8126364606.",
  url: "https://www.balpradaindia.com/jaundice-ayurvedic-treatment-rampur",
  telephone: "+918126364606",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari",
    addressLocality: "Bilari, Moradabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "244415",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Rampur",
  },
  openingHours: "Mo-Su 10:00-14:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Balprada Ayurvedic Jaundice and Liver Care Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Consultation and Assessment",
        description:
          "Detailed consultation covering symptoms, illness history, food habits, medicines, liver function tests, bilirubin values, hepatitis markers and ultrasound reports.",
      },
      {
        "@type": "Offer",
        name: "Ayurvedic Medicines and Monitoring",
        description:
          "In-house herbal medicines suggested only when suitable, with doctor-decided dose, duration and follow-up monitoring.",
      },
      {
        "@type": "Offer",
        name: "Diet and Daily Routine",
        description:
          "Light, freshly cooked and easily digestible meals, safe hydration, rest and gradual return to normal activity during recovery.",
      },
      {
        "@type": "Offer",
        name: "Supportive Facilities",
        description:
          "Yoga, meditation, naturopathy, panchakarma after assessment, physiotherapy and pathology lab support where suitable.",
      },
    ],
  },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Ayurvedic treatment available for jaundice near Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, patients from Rampur can consult at the main branch near Bilari or the Moradabad branch, and calling ahead helps confirm timing.",
      },
    },
    {
      "@type": "Question",
      name: "Can Ayurveda cure jaundice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jaundice has different causes, so no honest treatment can guarantee a cure; Balprada offers supportive care through diet, routine and monitored herbal medicines.",
      },
    },
    {
      "@type": "Question",
      name: "Should I get tests done first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, liver function tests and an ultrasound help identify the cause, and Balprada's pathology lab can support testing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I continue my allopathic medicines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, patients should continue prescribed medicines and share the full list with the Ayurvedic doctor.",
      },
    },
    {
      "@type": "Question",
      name: "What should I eat during jaundice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Light, freshly cooked meals, safe drinking water and complete avoidance of alcohol are commonly advised, with exact guidance given by the doctor.",
      },
    },
    {
      "@type": "Question",
      name: "Is jaundice in newborns treated here?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newborn jaundice needs urgent paediatric evaluation, so please take the baby to a hospital first.",
      },
    },
    {
      "@type": "Question",
      name: "Is Panchakarma suitable for jaundice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the patient's strength and cause, and the doctor decides only after assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free OPD is available on the 15th of every month, and it is best to call before visiting.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call or WhatsApp 8126364606 for the main branch, or 9410447000 for the Moradabad branch, or use the website's appointment page.",
      },
    },
  ],
};


const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        key="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />


      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-4 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              Jaundice Ayurvedic Treatment in Rampur: Supportive Care at Balprada
            </h1>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Jaundice is a common condition in which the skin, eyes and urine turn yellow, and families in Rampur often look for ayurvedic support when symptoms appear suddenly or keep returning after earlier treatment.
              </li>
              <li>
                Balprada Ayurvedic Hospital &amp; Research Center has offered Ayurvedic care since 1991, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji, and jaundice is one of the conditions listed under its Liver and Digestive Care programme.
              </li>
              <li>
                Balprada&apos;s own approach says that assessment, diet discipline and monitored care are important for recovery, which means the focus is on understanding the cause first and then supporting the body through food, routine and suitable medicines.
              </li>
              <li>
                This page explains what jaundice is, how Ayurveda views it, how care is planned at Balprada and how patients from Rampur can reach the hospital.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding Jaundice
            </h2>


            <h3 className="font-medium text-gray-900">What Jaundice Actually Is</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Jaundice is not a disease by itself but a sign that something is affecting the liver, the bile ducts or the breakdown of red blood cells, and the yellow colour comes from a pigment called bilirubin building up in the body.
              </li>
              <li>
                The liver normally processes bilirubin and sends it out through bile, so when the liver is inflamed or the bile flow is blocked, the pigment stays in the blood and becomes visible in the eyes and skin.
              </li>
              <li>
                Because the same yellow colour can have very different causes, a proper assessment matters more than treating the colour alone.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Common Causes</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Viral hepatitis, especially infections spread through contaminated food and water, is a frequent cause of jaundice in this region, particularly during the monsoon and post-monsoon months.
              </li>
              <li>
                Other causes include alcohol-related liver injury, fatty liver, gallstones or bile duct blockage, certain medicines and blood-related conditions, so the underlying cause shapes what kind of care is suitable.
              </li>
              <li>
                Identifying the cause through history, examination and tests helps the doctor decide which supportive steps are safe and which situations need hospital-level medical care.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Symptoms to Notice</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Yellowing of the eyes and skin, dark yellow or tea-coloured urine, pale stools, itching and persistent tiredness are the signs most often reported by patients and families.
              </li>
              <li>
                Loss of appetite, nausea, a heavy feeling after meals, mild abdominal discomfort and weakness are also common, and they often appear a few days before the yellow colour becomes obvious.
              </li>
              <li>
                Fever, repeated vomiting, severe weakness or drowsiness are signs that the condition may be more serious and should be checked without delay.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Ayurvedic View of Jaundice
            </h2>


            <h3 className="font-medium text-gray-900">Kamala and Pitta</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                In Ayurveda, jaundice is commonly described as Kamala, and it is traditionally linked to an imbalance of Pitta, which is associated with digestion, metabolism and the liver.
              </li>
              <li>
                This view explains why Ayurvedic care for jaundice pays close attention to digestion, appetite, food timing and the type of meals the patient eats during recovery.
              </li>
              <li>
                Traditional descriptions are used as a framework for guiding diet and routine, and they are never a reason to delay medical tests or hospital care when symptoms are severe.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Digestion and Agni</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The liver is closely connected with digestive strength, called agni, so weak digestion, bloating, nausea and poor appetite are treated as meaningful signs and not as minor side effects.
              </li>
              <li>
                Balprada&apos;s Liver and Digestive Care approach combines consultation, food guidance, routine correction and monitored herbal care, with the aim of supporting liver metabolism and digestion together.
              </li>
              <li>
                Care is always individual, since two patients with jaundice may differ in cause, strength, age and other health conditions.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How Balprada Supports Patients with Jaundice
            </h2>


            <h3 className="font-medium text-gray-900">Consultation and Assessment</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The first step is a detailed consultation in which the doctor listens to the patient&apos;s symptoms, asks how long the yellowing has been present and reviews recent illness, travel, food habits and medicines.
              </li>
              <li>
                Patients are encouraged to bring any available reports, such as liver function tests, bilirubin values, hepatitis markers and ultrasound, so the doctor can see the full picture before suggesting a plan.
              </li>
              <li>
                Current and recent medicines, including allopathic tablets, syrups and any herbal products taken at home, should be shared openly so that nothing is combined unsafely.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Ayurvedic Medicines and Monitoring</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Balprada uses its own in-house herbal medicines, and the hospital presents the quality of its preparations as a central strength developed over more than three decades.
              </li>
              <li>
                Herbal care is suggested only when suitable for the individual patient, and the dose and duration are decided by the doctor rather than chosen from internet advice or other people&apos;s experiences.
              </li>
              <li>
                Monitoring is an important part of the plan, so patients are asked to return for follow-up and to report any change in colour, appetite, energy or urine so that guidance can be adjusted in time.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Diet and Daily Routine</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Food discipline is considered central to recovery, and the team guides patients toward light, freshly cooked, easily digestible meals taken at regular times instead of heavy, oily or spicy food.
              </li>
              <li>
                Patients are usually advised to avoid alcohol completely, to stay well hydrated with safe boiled or filtered water and to avoid street food and uncovered items that can carry infection.
              </li>
              <li>
                Rest is encouraged during recovery, and families are guided on gradually returning to normal activity as strength improves, rather than rushing back to work or travel.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Supportive Facilities</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The ashram offers yoga, meditation and naturopathy, and the doctor decides whether any of these suit the patient&apos;s strength and stage of illness.
              </li>
              <li>
                Panchakarma therapies are planned only after individual assessment and are not appropriate for every patient, particularly those who are very weak or acutely unwell.
              </li>
              <li>
                Physiotherapy support is available for patients who have lost stamina and need a gentle, safe way to rebuild movement and strength after illness.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Pathology Lab Support</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Balprada Pathology Lab provides blood, urine and diagnostic testing support, which helps the doctor and patient follow how the body is responding over time.
              </li>
              <li>
                Tests commonly used in jaundice care include liver function tests and routine blood work, and the results are reviewed with the patient during follow-up consultations.
              </li>
              <li>
                Having consultation and testing support under one roof saves travel and waiting time for families coming from Rampur, which is especially helpful when the patient feels weak.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Patients from Rampur Choose Balprada
            </h2>


            <h3 className="font-medium text-gray-900">Experience and Trust</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Balprada has served patients since 1991, and the hospital now describes 35 years of experience in natural Ayurvedic care, experienced doctors and a service-first approach.
              </li>
              <li>
                Patient reviews on the website mention knowledgeable vaidyas, humble and kind staff and a calm ashram setting, which the hospital regards as part of the healing environment.
              </li>
              <li>
                The founder&apos;s vision of seva, or selfless service, continues to shape how patients are welcomed, with careful listening and clear explanation of the care plan.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">A Calm Healing Environment</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The ashram setting offers a quiet space away from the noise of the city, which many families find reassuring during a stressful illness.
              </li>
              <li>
                Rest, regular meals and emotional steadiness are treated as part of recovery, and meditation and breath awareness are available to support calm and better sleep where appropriate.
              </li>
              <li>
                Patients and attendants receive guidance in simple language, so the diet and routine can be followed easily at home after the visit.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Easy Access from Rampur</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rampur lies close to the Moradabad region, so patients can reach either the main branch near Bilari or the Moradabad city branch without a long journey.
              </li>
              <li>
                The Moradabad branch is convenient for those travelling into the city by road or rail, while the main branch offers the fuller ashram experience.
              </li>
              <li>
                Families are advised to call before travelling, especially when the patient is weak or when a specific vaidya&apos;s availability is needed.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What to Expect During Your First Visit
            </h2>


            <h3 className="font-medium text-gray-900">Before You Arrive</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Collect all recent reports, including liver function tests, hepatitis markers and ultrasound, and arrange them by date so the consultation can move quickly and clearly.
              </li>
              <li>
                Make a short list of every medicine and home remedy the patient has taken in the last few weeks, along with when each was started.
              </li>
              <li>
                Bring a family member who can describe the patient&apos;s symptoms and remember the diet and routine advice that will be given during the visit.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">During the Consultation</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The doctor reviews the symptoms, asks about appetite, digestion, urine colour, sleep and energy, and then explains the likely next steps in plain language.
              </li>
              <li>
                The care plan may include Ayurvedic medicines, specific diet instructions, lifestyle correction and supportive facilities where suitable.
              </li>
              <li>
                Families should feel free to ask about follow-up timing, which signs need urgent attention and how Ayurvedic care fits with any ongoing medical treatment.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">After the Visit</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Regular follow-up allows the team to observe progress, adjust guidance and support long-term discipline, which matters because liver recovery often takes time.
              </li>
              <li>
                Repeat tests may be advised at suitable intervals so that the patient and doctor can review how the body is responding.
              </li>
              <li>
                Any new or worsening symptom between visits should be reported promptly, and emergency symptoms should always be treated as a medical emergency first.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Important Safety Information
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Jaundice can be a sign of serious liver or bile duct disease, so Ayurvedic care at Balprada is offered as supportive care and does not replace diagnosis or emergency treatment by a qualified medical doctor.
              </li>
              <li>
                Newborn babies, pregnant women and patients with high fever, repeated vomiting, confusion, severe abdominal pain or black stools should be taken to a hospital immediately.
              </li>
              <li>
                Results differ from person to person, and no medicine, diet or therapy can promise a particular outcome, so patients should avoid unverified home remedies and unregulated herbal powders.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Visit or Contact Balprada
            </h2>


            <h3 className="font-medium text-gray-900">Main Branch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
              </li>
              <li>
                Timing: Daily, 10:00 AM to 2:00 PM, with the ashram and clinic open seven days a week.
              </li>
              <li>
                Phone and WhatsApp:{" "}
                <a
                  href="tel:+918126364606"
                  className="font-semibold text-green-600 hover:underline"
                >
                  8126364606
                </a>
                , with email at{" "}
                <a
                  href="mailto:balpradaindia@gmail.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  balpradaindia@gmail.com
                </a>
                .
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Moradabad Branch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.
              </li>
              <li>
                Availability: Vaidya ji is available on Sundays, so please call{" "}
                <a
                  href="tel:+919410447000"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9410447000
                </a>{" "}
                before visiting.
              </li>
              <li>
                Free OPD consultation is available on the 15th of every month, which families can use for a first discussion with the team.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>


            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. Is Ayurvedic treatment available for jaundice near Rampur?
                </h3>
                <p className="mt-2">
                  Yes, patients from Rampur can consult at the main branch near Bilari or the Moradabad branch, and calling ahead helps confirm timing.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  2. Can Ayurveda cure jaundice?
                </h3>
                <p className="mt-2">
                  Jaundice has different causes, so no honest treatment can guarantee a cure; Balprada offers supportive care through diet, routine and monitored herbal medicines.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  3. Should I get tests done first?
                </h3>
                <p className="mt-2">
                  Yes, liver function tests and an ultrasound help identify the cause, and Balprada&apos;s pathology lab can support testing.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  4. Can I continue my allopathic medicines?
                </h3>
                <p className="mt-2">
                  Yes, patients should continue prescribed medicines and share the full list with the Ayurvedic doctor.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  5. What should I eat during jaundice?
                </h3>
                <p className="mt-2">
                  Light, freshly cooked meals, safe drinking water and complete avoidance of alcohol are commonly advised, with exact guidance given by the doctor.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  6. Is jaundice in newborns treated here?
                </h3>
                <p className="mt-2">
                  Newborn jaundice needs urgent paediatric evaluation, so please take the baby to a hospital first.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  7. Is Panchakarma suitable for jaundice?
                </h3>
                <p className="mt-2">
                  It depends on the patient&apos;s strength and cause, and the doctor decides only after assessment.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  8. Is there a free consultation?
                </h3>
                <p className="mt-2">
                  Free OPD is available on the 15th of every month, and it is best to call before visiting.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  9. How do I book an appointment?
                </h3>
                <p className="mt-2">
                  Call or WhatsApp 8126364606 for the main branch, or 9410447000 for the Moradabad branch, or use the website&apos;s appointment page.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Book Your Jaundice Care Consultation at Balprada
              </h2>


              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center provides supportive Ayurvedic jaundice and liver care for patients from Rampur and nearby areas.
                </li>
                <li>
                  Bring all liver function tests, hepatitis markers, ultrasound reports, prescriptions and a list of current medicines and home remedies for a detailed consultation.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
                </li>
                <li>
                  <span className="font-semibold">Phone / WhatsApp:</span>{" "}
                  <a
                    href="tel:+918126364606"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    8126364606
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Moradabad Branch:</span>{" "}
                  <a
                    href="tel:+919410447000"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    9410447000
                  </a>
                </li>
                <li>
                  <span className="font-semibold">OPD Timings:</span> Daily, 10:00 AM – 2:00 PM
                </li>
              </ul>
            </div>
          </div>


          <CityInternalLinks
            city="rampur"
            currentSlug="/jaundice-ayurvedic-treatment-rampur"
          />
        </div>


        <div className="order-2 w-full p-8 lg:order-2 lg:w-[500px]">
          <div className="lg:sticky lg:top-28">
            <FranchiseEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Content;