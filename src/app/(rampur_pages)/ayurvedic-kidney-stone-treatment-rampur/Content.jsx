import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ayurvedic Kidney Stone Treatment in Rampur | Balprada",
  description:
    "Looking for Ayurvedic kidney stone treatment in Rampur? Balprada offers supportive stone care since 1991 with diet guidance and follow-up. Book OPD.",
  url: "https://www.balpradaindia.com/ayurvedic-kidney-stone-treatment-rampur",
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
    name: "Balprada Ayurvedic Kidney Stone and Urinary Care Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Personalised Consultation",
        description:
          "Review of scan, urine and blood reports, symptoms, stone history, current medicines and daily habits before planning care.",
      },
      {
        "@type": "Offer",
        name: "Supportive Ayurvedic Medicines",
        description:
          "In-house Ayurvedic medicines combined with diet and lifestyle correction, planned responsibly alongside existing medical treatment.",
      },
      {
        "@type": "Offer",
        name: "Kidney and Urinary Care",
        description:
          "Supportive care for kidney stones, reduced kidney function, persistent swelling and diabetes-related kidney concerns.",
      },
      {
        "@type": "Offer",
        name: "Diet, Hydration and Follow-Up Support",
        description:
          "Hydration routines, dietary discipline, yoga, naturopathy, pathology support and regular follow-up where suitable.",
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
      name: "Can Ayurveda help with kidney stones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ayurvedic care supports urinary comfort, hydration and diet discipline, but large or blocking stones may need a urologist.",
      },
    },
    {
      "@type": "Question",
      name: "Do all kidney stones need surgery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Small stones may pass naturally, but your doctor decides based on scan, size and symptoms.",
      },
    },
    {
      "@type": "Question",
      name: "How much water should I drink?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Follow your doctor's advice, since needs differ, especially if you have kidney weakness or swelling.",
      },
    },
    {
      "@type": "Question",
      name: "Can stones come back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, stones can recur, which is why diet, hydration and follow-up are important.",
      },
    },
    {
      "@type": "Question",
      name: "When is stone pain an emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Severe pain, repeated vomiting, fever or very little urine needs immediate hospital care.",
      },
    },
    {
      "@type": "Question",
      name: "Does Balprada have a clinic in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
      },
    },
    {
      "@type": "Question",
      name: "Which reports should I bring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ultrasound or CT scan, urine and blood tests, prescriptions and a list of medicines.",
      },
    },
    {
      "@type": "Question",
      name: "What are the OPD timings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daily from 10:00 AM to 2:00 PM at the main branch. The Moradabad branch has Vaidya ji on Sundays, so call first.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, free OPD consultation is available on the 15th of every month.",
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
              Ayurvedic Kidney Stone Treatment in Rampur – Supportive Stone Care at Balprada Ayurvedic Hospital
            </h1>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Ayurvedic Care for Kidney Stones in Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Kidney stones can cause sudden, severe pain and long-term worry about recurrence, so many families in Rampur, Uttar Pradesh look for gentle Ayurvedic support alongside proper scans, reports and medical advice.
              </li>
              <li>
                Balprada Ayurvedic Hospital &amp; Research Center has offered Ayurvedic care for kidney and urinary concerns since 1991 through personalised consultation, in-house medicines, diet guidance and regular follow-up.
              </li>
              <li>
                Our Kidney and Urinary Care programme treats kidney stones as part of a wider picture, supporting urinary comfort, hydration routines and dietary discipline according to each patient&apos;s condition.
              </li>
              <li>
                This page explains what kidney stones are, why they form, how Balprada plans supportive care and when a stone needs urgent hospital attention.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Are Kidney Stones?
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Kidney stones are hard deposits made of minerals and salts that form inside the kidneys when waste substances in the urine become concentrated and begin to crystallise.
              </li>
              <li>
                Stones can be as small as a grain of sand or large enough to block the urinary passage, and their size, position and number decide how they should be managed.
              </li>
              <li>
                Small stones may pass in the urine with fluids and medical guidance, while larger or blocking stones can need procedures advised by a urologist.
              </li>
              <li>
                An ultrasound or CT scan, along with urine and blood tests, helps the doctor understand your stone, so please carry all such reports to your consultation.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Symptoms of Kidney Stones
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Sharp, cramping pain in the side or back that may travel toward the lower abdomen or groin, often coming in waves and becoming severe within a short time.
              </li>
              <li>
                Burning or pain while passing urine, a frequent urge to urinate, or urine that looks cloudy, dark or contains blood.
              </li>
              <li>
                Nausea, vomiting and restlessness during a painful episode, because the body reacts strongly to a stone moving through the urinary passage.
              </li>
              <li>
                Fever with chills and pain can indicate infection and needs urgent medical attention instead of home care.
              </li>
              <li>
                Some stones remain silent for a long time and are discovered only during a scan, which is why regular check-ups matter for people with a stone history.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Kidney Stones Form
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Drinking too little water is among the most common reasons, because concentrated urine makes it easier for minerals and salts to settle and form crystals.
              </li>
              <li>
                Diets high in salt, packaged food, sugary drinks or certain stone-forming foods can raise the chances of stones in people who are prone to them.
              </li>
              <li>
                Repeated urinary infections, urinary blockages and some metabolic or hormonal conditions can also increase the risk of stone formation.
              </li>
              <li>
                Family history, long hours in hot weather without enough fluids and low physical activity can add to the tendency in some patients.
              </li>
              <li>
                Because causes vary from person to person, the right plan begins with proper assessment and not a standard remedy for everyone.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How Balprada Approaches Kidney Stone Care
            </h2>


            <h3 className="font-medium text-gray-900">Personalised Consultation</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The vaidya studies your scan, urine and blood reports, symptoms, stone history, current medicines and daily habits before suggesting the next care step in a calm and unhurried way.
              </li>
              <li>
                The plan is shaped around the size and position of your stone, your digestion, your fluid habits and your routine, not around a single standard formula.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Supportive Ayurvedic Medicines</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Balprada prepares its own Ayurvedic medicines in-house, which supports quality and consistency in every plan and gives patients more confidence in what they take.
              </li>
              <li>
                Medicines are combined with diet and lifestyle correction because Ayurveda looks at the whole person, including digestion and routine, and not only the stone seen on the scan.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Honest and Responsible Guidance</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ayurvedic consultation supports urinary comfort, hydration routines and dietary discipline, but it does not replace urgent hospital care or procedures when a urologist advises them.
              </li>
              <li>
                Patients are asked to share every medicine they are taking and to continue prescribed treatment until their doctor says otherwise.
              </li>
              <li>
                We do not promise that every stone will dissolve or pass within a fixed time, and we explain clearly when a scan or specialist review is needed.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              When a Kidney Stone Needs Urgent Medical Attention
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Go to the nearest hospital emergency if pain is severe and unbearable, or if you have repeated vomiting that prevents you from keeping fluids down.
              </li>
              <li>
                Fever, chills or burning urine together with stone pain can mean an infection that needs prompt treatment.
              </li>
              <li>
                Very little or no urine, or visible blood in urine with strong pain, should be assessed immediately by a doctor.
              </li>
              <li>
                A stone that blocks the urinary passage can damage the kidney, so large or stuck stones may need procedures advised by a urologist.
              </li>
              <li>
                Ayurvedic care supports patients during stable phases and recovery, and it should never delay emergency treatment.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Kidney and Urinary Conditions We Support
            </h2>


            <h3 className="font-medium text-gray-900">Kidney Stones</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ayurvedic consultation supports urinary comfort, hydration routines and dietary discipline, with practical food guidance that may help reduce the chances of stones forming again.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Reduced Kidney Function and Kidney Failure</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Reduced kidney function requires careful assessment, diet support and continuous monitoring, and patients with repeated stones are advised to keep checking their kidney reports.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Persistent Swelling</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Persistent swelling may need kidney, liver and metabolic assessment, so our doctors study the possible causes and plan diet and medicines with guided care.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Diabetes-Related Kidney Concern</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Diabetes-related kidney stress is approached through diet, sugar control and regular follow-up, because steady sugar levels protect the kidneys over the long term.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your Care Journey at Balprada
            </h2>


            <h3 className="font-medium text-gray-900">Step 1: Consultation and Report Review</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Bring your ultrasound or CT scan, urine and blood reports and any earlier stone history, so the doctor can understand your present condition and explain the next step in simple language.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 2: Personalised Ayurvedic Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Care is planned using Balprada&apos;s Ayurvedic medicines, diet discipline and lifestyle correction where suitable, with attention to hydration and food habits that suit your reports.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 3: Supportive Facilities</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Yoga, naturopathy and pathology support are added where they suit your condition, helping patients build discipline, manage stress and track progress with reliable tests.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 4: Follow-Up and Prevention</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Follow-up visits help the team observe progress, adjust guidance and support long-term discipline, while repeat scans and tests show how the stone and kidneys are doing.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Diet and Hydration Guidance for Stone Patients
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Drink fluids regularly through the day as your doctor advises, because well-diluted urine is one of the most useful steps in lowering the risk of new stones, unless you have a condition that needs fluid limits.
              </li>
              <li>
                Reduce salt and packaged, salty snacks, since high sodium intake can increase the chances of some stones forming and also raises blood pressure.
              </li>
              <li>
                Ask your doctor which foods to limit, because the right diet depends on the type of stone you have and on your reports.
              </li>
              <li>
                Avoid very high intake of animal protein, sugary drinks and heavy fried foods that can disturb digestion and urinary balance.
              </li>
              <li>
                Eat fresh, simple, home-cooked meals at regular times, and avoid skipping meals or eating late at night.
              </li>
              <li>
                Do not start random home remedies or supplements without advice, because some products can irritate the kidneys or interfere with medicines.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Lifestyle Habits That Help Prevent Recurrence
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep a water bottle within reach during work, travel and hot weather, and notice your urine colour as a simple sign of whether you are drinking enough.
              </li>
              <li>
                Stay physically active with daily walking, light yoga and breathing exercises as your doctor permits, since a sedentary routine can add to metabolic imbalance.
              </li>
              <li>
                Control weight, blood sugar and blood pressure through diet and prescribed treatment, because these conditions are linked with kidney stress and stone formation.
              </li>
              <li>
                Avoid smoking and alcohol, and avoid taking painkillers regularly without medical advice, as they can strain the kidneys.
              </li>
              <li>
                Attend follow-up visits and repeat scans on schedule, especially if you have had stones before or have a family history.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Supportive Facilities at Balprada
            </h2>


            <h3 className="font-medium text-gray-900">Balprada Pathology Lab</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Reliable blood, urine and diagnostic testing helps the doctor monitor progress and plan care with confidence, and saves patients the effort of moving between multiple centres.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Yoga, Meditation and Naturopathy</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gentle yoga and breath awareness support calm, discipline and emotional steadiness, while naturopathy offers simple, nature-led routines that work with the body&apos;s natural healing capacity.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Ashram Environment and Organic Food</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A peaceful ashram setting supports rest, routine and recovery away from daily stress, while wholesome, clean eating supports the long-term lifestyle correction we encourage.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Families Choose Balprada
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Experience:</span> Balprada has served patients since 1991 and carries 35 years of Ayurvedic care and research, founded on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.
              </li>
              <li>
                <span className="font-semibold">In-house medicines:</span> Ayurvedic preparations are made at Balprada, which supports quality and consistency in every treatment plan.
              </li>
              <li>
                <span className="font-semibold">Honest guidance:</span> patients are told clearly what Ayurvedic care can support and when a urologist or hospital must be involved.
              </li>
              <li>
                <span className="font-semibold">Whole-person care:</span> medicines, diet, hydration, yoga and follow-up are planned together as one connected journey.
              </li>
              <li>
                <span className="font-semibold">Patient trust:</span> Google reviews praise the knowledgeable vaidyas, authentic herbal formulations and serene healing atmosphere for kidney, liver and chronic illness care.
              </li>
              <li>
                <span className="font-semibold">Service spirit:</span> free OPD consultation is available on the 15th of every month, and the ashram and clinic are open seven days a week.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Patients Say About Balprada
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Dr. Jeetesh Vishwas, a reviewer from Moradabad, appreciated the knowledgeable vaidyas, authentic herbal formulations and the serene healing atmosphere for kidney, liver and chronic illness care.
              </li>
              <li>
                Another patient praised the guidance of Vaidya ji and the hospital team, along with the natural ashram surroundings that help patients feel supported during recovery.
              </li>
              <li>
                Families often mention the humble, welcoming staff who go out of their way to help patients feel cared for during difficult health journeys.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips Before Your First Visit
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Carry your ultrasound or CT scan, urine and blood reports, prescriptions and a list of every medicine and supplement you take, along with any earlier stone reports.
              </li>
              <li>
                Note when your pain began, where it travels, how often it comes and whether you noticed blood in urine, fever or vomiting, and write down your questions about diet and prevention.
              </li>
              <li>
                Arrive during OPD hours, 10:00 AM to 2:00 PM, and bring a family member if possible, so that diet and routine can be followed properly at home.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              OPD Timings, Address and Contact
            </h2>


            <h3 className="font-medium text-gray-900">Main Branch (Ashram and Clinic)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. Timings: daily, 10:00 AM to 2:00 PM. Call{" "}
                <a
                  href="tel:+918126364606"
                  className="font-semibold text-green-600 hover:underline"
                >
                  8126364606
                </a>
                .
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Moradabad Branch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001. Vaidya ji is available on Sundays, so please call{" "}
                <a
                  href="tel:+919410447000"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9410447000
                </a>{" "}
                before visiting.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Free OPD and Appointments</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Free OPD consultation is available on the 15th of every month. Book by phone, WhatsApp on{" "}
                <a
                  href="tel:+918126364606"
                  className="font-semibold text-green-600 hover:underline"
                >
                  8126364606
                </a>{" "}
                or through the Book Appointment page on balpradaindia.com.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>


            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Can Ayurveda help with kidney stones?
                </h3>
                <p className="mt-2">
                  Ayurvedic care supports urinary comfort, hydration and diet discipline, but large or blocking stones may need a urologist.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Do all kidney stones need surgery?
                </h3>
                <p className="mt-2">
                  No. Small stones may pass naturally, but your doctor decides based on scan, size and symptoms.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  How much water should I drink?
                </h3>
                <p className="mt-2">
                  Follow your doctor&apos;s advice, since needs differ, especially if you have kidney weakness or swelling.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Can stones come back?
                </h3>
                <p className="mt-2">
                  Yes, stones can recur, which is why diet, hydration and follow-up are important.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  When is stone pain an emergency?
                </h3>
                <p className="mt-2">
                  Severe pain, repeated vomiting, fever or very little urine needs immediate hospital care.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Does Balprada have a clinic in Rampur?
                </h3>
                <p className="mt-2">
                  Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Which reports should I bring?
                </h3>
                <p className="mt-2">
                  Ultrasound or CT scan, urine and blood tests, prescriptions and a list of medicines.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What are the OPD timings?
                </h3>
                <p className="mt-2">
                  Daily from 10:00 AM to 2:00 PM at the main branch. The Moradabad branch has Vaidya ji on Sundays, so call first.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Is there a free consultation?
                </h3>
                <p className="mt-2">
                  Yes, free OPD consultation is available on the 15th of every month.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Book Your Kidney Stone Care Consultation at Balprada
              </h2>


              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center provides supportive Ayurvedic kidney stone and urinary care for patients from Rampur and nearby areas.
                </li>
                <li>
                  Bring your ultrasound or CT scan, urine and blood reports, prescriptions and a list of all current medicines and supplements for a detailed consultation.
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
            currentSlug="/ayurvedic-kidney-stone-treatment-rampur"
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