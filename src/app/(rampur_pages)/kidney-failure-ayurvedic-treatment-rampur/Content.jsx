import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kidney Failure Ayurvedic Treatment in Rampur | Balprada",
  description:
    "Kidney failure Ayurvedic treatment in Rampur: Balprada offers supportive Ayurvedic kidney care since 1991 with diet guidance and follow-up. Book OPD today.",
  url: "https://www.balpradaindia.com/kidney-failure-ayurvedic-treatment-rampur",
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
    name: "Balprada Ayurvedic Kidney Failure and Urinary Care Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Personalised Kidney Consultation",
        description:
          "Review of main concern, history, kidney reports, current medication and daily habits before planning supportive Ayurvedic care.",
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
          "Supportive care for kidney failure, kidney stones, persistent swelling and diabetes-related kidney concerns.",
      },
      {
        "@type": "Offer",
        name: "Diet, Yoga and Follow-Up Support",
        description:
          "Personalised diet guidance, gentle yoga, naturopathy, pathology support and regular follow-up where suitable.",
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
      name: "Can Ayurveda treat kidney failure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ayurvedic care at Balprada is supportive. It focuses on diet, medicines and lifestyle guidance, and we do not promise a guaranteed cure.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to stop dialysis or my current medicines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Never stop dialysis or prescribed medicines without your treating doctor's advice.",
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
      name: "Which kidney problems can I consult for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kidney failure, kidney stones, persistent swelling and diabetes-related kidney concerns.",
      },
    },
    {
      "@type": "Question",
      name: "Are medicines prepared at Balprada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Balprada prepares its own Ayurvedic medicines.",
      },
    },
    {
      "@type": "Question",
      name: "Which reports should I bring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring kidney function tests, urine reports, scans, prescriptions and a list of all medicines.",
      },
    },
    {
      "@type": "Question",
      name: "Are tests available at Balprada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing.",
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
    {
      "@type": "Question",
      name: "How often are follow-up visits needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your doctor will advise a schedule based on your condition and reports.",
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
              Kidney Failure Ayurvedic Treatment in Rampur – Supportive Kidney Care at Balprada Ayurvedic Hospital
            </h1>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Ayurvedic Care for Kidney Failure Patients from Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Kidney failure is a serious condition, and families in Rampur, Uttar Pradesh often look for gentle, practical support that works alongside proper medical monitoring. Balprada Ayurvedic Hospital &amp; Research Center has offered Ayurvedic care for kidney concerns since 1991.
              </li>
              <li>
                Our Kidney and Urinary Care programme provides Ayurvedic consultation and lifestyle care for kidney function, swelling, kidney stones and diabetes-linked kidney concerns.
              </li>
              <li>
                Balprada approaches kidney failure through consultation, medical history, diet guidance, Ayurvedic medicines and regular follow-up, with the aim of giving every patient a practical, responsible and personalised care plan.
              </li>
              <li>
                Patients from Rampur visit our main branch in Bilari or our Moradabad branch for unhurried consultation, diet discipline and long-term guidance.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding Kidney Failure
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The kidneys filter waste, balance fluids and minerals, and help regulate blood pressure. When they cannot do this properly, waste and extra fluid build up in the body.
              </li>
              <li>
                Reduced kidney function needs careful assessment, diet support and continuous monitoring, which is why regular reports and doctor review are central to our approach.
              </li>
              <li>
                Common warning signs include swelling in the feet or face, tiredness, weak appetite, nausea, changes in urination and breathlessness. Anyone noticing these should get proper tests without delay.
              </li>
              <li>
                Long-standing diabetes and high blood pressure are among the common reasons for kidney damage, so sugar and blood pressure control remain an important part of care.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Causes and Risk Factors
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Diabetes that remains uncontrolled for years can slowly damage the tiny filters of the kidneys.
              </li>
              <li>
                Long-standing high blood pressure places constant strain on kidney blood vessels and reduces filtering ability.
              </li>
              <li>
                Repeated kidney stones, urinary infections or blockages can affect kidney function over time.
              </li>
              <li>
                Frequent use of painkillers or other medicines without medical advice may harm the kidneys.
              </li>
              <li>
                Family history, advancing age and weak lifestyle habits can also raise the risk, so regular check-ups are wise.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How Balprada Approaches Kidney Failure with Ayurveda
            </h2>


            <h3 className="font-medium text-gray-900">Personalised Consultation First</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The vaidya reviews your main concern, history, kidney reports, current medication and daily habits before suggesting any step.
              </li>
              <li>
                Because no two patients are alike, the plan is shaped around your condition, strength, appetite and routine.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Supportive Ayurvedic Medicines</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Balprada prepares its own Ayurvedic medicines in-house, which supports quality and consistency in every treatment plan.
              </li>
              <li>
                Medicines are combined with diet and lifestyle correction, because Ayurveda looks at the whole person and not only the lab value.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Responsible Care Alongside Medical Treatment</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ayurvedic care is planned after reviewing your current medicines, so please share every tablet, injection or supplement you take.
              </li>
              <li>
                Patients under a nephrologist or on dialysis should continue that treatment and inform both teams about their care.
              </li>
              <li>
                We do not promise guaranteed cures for kidney failure. Our focus is supportive care, symptom comfort, diet discipline and steady follow-up.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Ayurvedic Perspective on Kidney Health
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ayurveda views health as a balance between body, digestion, mind and daily routine, so kidney care goes beyond a single organ or a single report.
              </li>
              <li>
                Weak digestion, irregular food habits, poor sleep and stress are seen as factors that can add to the burden on the body.
              </li>
              <li>
                Treatment therefore combines medicines with diet discipline, routine correction and emotional support, delivered in a calm and organised way.
              </li>
              <li>
                Each patient&apos;s plan is reviewed again and again, because kidney patients&apos; needs can change as reports and symptoms change.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Kidney and Urinary Conditions We Support
            </h2>


            <h3 className="font-medium text-gray-900">Kidney Failure Support</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Careful assessment, diet support and continuous monitoring for reduced kidney function.
              </li>
              <li>
                Guidance on food, routine and medicines that supports comfort, strength and daily wellbeing.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Kidney Stones</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ayurvedic consultation supports urinary comfort, hydration routines and dietary discipline.
              </li>
              <li>
                Doctors advise on food habits that may help reduce the chances of stones forming again.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Persistent Swelling</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Persistent swelling may need kidney, liver and metabolic assessment with guided care.
              </li>
              <li>
                Our team studies the possible causes and plans diet and medicines accordingly.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Diabetes-Related Kidney Concern</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Diabetes-related kidney stress is approached through diet, sugar control and regular follow-up.
              </li>
              <li>
                Patients receive practical guidance on meals, routine and monitoring that supports both sugar and kidney health.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your Care Journey for Kidney Patients
            </h2>


            <h3 className="font-medium text-gray-900">Step 1: Consultation and Report Review</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Bring earlier kidney reports such as creatinine, urea, urine tests and scans, plus a full list of medicines.
              </li>
              <li>
                The doctor reviews your history and symptoms and explains the next care step in simple language.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 2: Personalised Ayurvedic Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Care is planned using Balprada&apos;s Ayurvedic medicines, diet discipline and lifestyle correction where suitable.
              </li>
              <li>
                The plan respects any fluid, salt or protein limits already advised by your treating doctor.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 3: Supportive Facilities</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Yoga, naturopathy, panchakarma and pathology support are added only where they suit your condition and strength.
              </li>
              <li>
                Panchakarma is never applied blindly. It is considered only after assessment of the patient&apos;s strength and overall condition.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 4: Regular Follow-Up</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Follow-up visits help the team observe progress, adjust guidance and support long-term discipline.
              </li>
              <li>
                Repeat tests at Balprada Pathology Lab help track how the body is responding.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Diet Guidance for Kidney Patients
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Follow the diet chart prepared for you. Kidney diets differ from person to person, depending on reports, swelling, blood pressure and sugar levels.
              </li>
              <li>
                Limit salt as advised, because too much sodium can increase swelling and blood pressure.
              </li>
              <li>
                Take protein, potassium and phosphorus-rich foods only as your doctor advises, since the right amounts depend on your stage of kidney function.
              </li>
              <li>
                Avoid heavy, oily, fried and packaged foods that make digestion difficult and add extra strain.
              </li>
              <li>
                Fluid intake needs individual guidance. Some patients need more fluids, while advanced cases may need limits, so never decide this on your own.
              </li>
              <li>
                Choose fresh, simple, home-cooked meals at regular times to support digestion and steady energy.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Lifestyle Habits That Support Kidney Health
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep blood sugar and blood pressure under control through medicines, diet and regular monitoring as advised.
              </li>
              <li>
                Avoid smoking and alcohol, which place extra stress on the kidneys and heart.
              </li>
              <li>
                Avoid self-medication, especially painkillers and unknown herbal or home remedies, because some can harm weak kidneys.
              </li>
              <li>
                Walk gently every day and practise light yoga and breathing exercises as your doctor permits.
              </li>
              <li>
                Sleep on time and manage stress through meditation, prayer or quiet rest.
              </li>
              <li>
                Attend every follow-up visit and repeat tests on schedule.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Supportive Facilities at Balprada
            </h2>


            <h3 className="font-medium text-gray-900">Balprada Pathology Lab</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Reliable blood, urine and diagnostic testing helps the doctor monitor progress and plan care with confidence.
              </li>
              <li>
                Testing within the same care journey saves patients the effort of moving between multiple centres.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Yoga, Meditation and Naturopathy</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gentle yoga and breath awareness support calm, discipline and emotional steadiness during a long health journey.
              </li>
              <li>
                Naturopathy offers simple, nature-led routines that work with the body&apos;s natural healing capacity.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Physiotherapy</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Professional physiotherapy supports safe movement, mobility and strength alongside the wider care plan.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Ashram Environment and Organic Food</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A peaceful ashram setting supports rest, routine and recovery away from daily stress.
              </li>
              <li>
                Wholesome, clean eating forms part of the long-term lifestyle correction we encourage.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Patients Choose Balprada for Kidney Care
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Experience:</span> Balprada has served patients since 1991 and carries 35 years of Ayurvedic care and research.
              </li>
              <li>
                <span className="font-semibold">In-house medicines:</span> Ayurvedic preparations are made at Balprada, supporting quality and consistency.
              </li>
              <li>
                <span className="font-semibold">Whole-person care:</span> medicines, diet, yoga and follow-up are planned together as one journey.
              </li>
              <li>
                <span className="font-semibold">Honest guidance:</span> patients are told clearly what Ayurvedic care can support and where medical treatment must continue.
              </li>
              <li>
                <span className="font-semibold">Patient trust:</span> Google reviews praise the knowledgeable vaidyas, authentic herbal formulations and serene healing atmosphere for kidney, liver and chronic illness care.
              </li>
              <li>
                <span className="font-semibold">Service spirit:</span> free OPD consultation is available on the 15th of every month.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Patients Say About Balprada
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                A reviewer from Moradabad, Dr. Jeetesh Vishwas, appreciated the knowledgeable vaidyas, authentic herbal formulations and serene healing atmosphere for kidney, liver and chronic illness care.
              </li>
              <li>
                Another patient praised the guidance of Vaidya ji and the hospital team, along with the natural ashram surroundings and genuine herbal preparations.
              </li>
              <li>
                Families repeatedly mention the humble, welcoming staff who help patients feel cared for during difficult health journeys.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Early Consultation Matters
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Kidney problems often progress quietly, so early consultation gives the doctor more time to guide food, routine and monitoring.
              </li>
              <li>
                Swelling, tiredness, poor appetite, changes in urine or rising sugar and blood pressure deserve prompt tests rather than guesswork.
              </li>
              <li>
                Early planning also helps families prepare practically, including diet changes, follow-up dates and emergency steps.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              When to Seek Urgent Medical Care
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Go to the nearest hospital emergency immediately for severe breathlessness, chest pain, confusion, very little or no urine, repeated vomiting or sudden heavy swelling.
              </li>
              <li>
                Kidney failure can worsen quickly, and emergency treatment such as dialysis may be necessary to protect life.
              </li>
              <li>
                Ayurvedic care supports patients during stable phases and recovery. It should never delay urgent hospital treatment.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips Before Your First Visit
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Carry all earlier reports, including kidney function tests, urine reports, ultrasound and any dialysis records.
              </li>
              <li>
                Bring prescriptions and a list of every medicine and supplement you take.
              </li>
              <li>
                Note your symptoms, urine pattern, swelling, appetite, sleep and blood pressure readings.
              </li>
              <li>
                Bring a family member who helps with your meals and daily care.
              </li>
              <li>
                Arrive during OPD hours, 10:00 AM to 2:00 PM, and allow time for an unhurried consultation.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              OPD Timings, Address and Contact
            </h2>


            <h3 className="font-medium text-gray-900">Main Branch (Ashram and Clinic)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Address: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415.
              </li>
              <li>
                Timings: daily, 10:00 AM to 2:00 PM. Call{" "}
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
                Address: F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001.
              </li>
              <li>
                Vaidya ji is available on Sundays. Please call{" "}
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
                Free OPD consultation is available on the 15th of every month.
              </li>
              <li>
                Book by phone, WhatsApp on{" "}
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
                  Can Ayurveda treat kidney failure?
                </h3>
                <p className="mt-2">
                  Ayurvedic care at Balprada is supportive. It focuses on diet, medicines and lifestyle guidance, and we do not promise a guaranteed cure.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Do I have to stop dialysis or my current medicines?
                </h3>
                <p className="mt-2">
                  No. Never stop dialysis or prescribed medicines without your treating doctor&apos;s advice.
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
                  Which kidney problems can I consult for?
                </h3>
                <p className="mt-2">
                  Kidney failure, kidney stones, persistent swelling and diabetes-related kidney concerns.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Are medicines prepared at Balprada?
                </h3>
                <p className="mt-2">
                  Yes. Balprada prepares its own Ayurvedic medicines.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Which reports should I bring?
                </h3>
                <p className="mt-2">
                  Bring kidney function tests, urine reports, scans, prescriptions and a list of all medicines.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Are tests available at Balprada?
                </h3>
                <p className="mt-2">
                  Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing.
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


              <div>
                <h3 className="font-medium text-gray-900">
                  How often are follow-up visits needed?
                </h3>
                <p className="mt-2">
                  Your doctor will advise a schedule based on your condition and reports.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Book Your Kidney Care Consultation at Balprada
              </h2>


              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center provides supportive Ayurvedic kidney failure and urinary care for patients from Rampur and nearby areas.
                </li>
                <li>
                  Bring kidney function tests, urine reports, scans, prescriptions and a list of all current medicines and supplements for a detailed consultation.
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
            currentSlug="/kidney-failure-ayurvedic-treatment-rampur"
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