import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Best Ayurvedic Hospital in Rampur UP | Balprada Ayurveda",
  description:
    "Looking for the best Ayurvedic hospital in Rampur, UP? Balprada offers trusted Ayurvedic care since 1991 for kidney, liver, cancer support & more. Book OPD.",
  url: "https://www.balpradaindia.com/best-ayurvedic-hospital-rampur-up",
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
    name: "Balprada Ayurvedic Hospital Care Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Ayurvedic Consultation",
        description:
          "Review of concern, medical history, reports and current medication before planning care.",
      },
      {
        "@type": "Offer",
        name: "Personalised Ayurvedic Plan",
        description:
          "Plan built around Balprada's Ayurvedic medicines, diet discipline and lifestyle correction where suitable.",
      },
      {
        "@type": "Offer",
        name: "Supportive Therapies",
        description:
          "Yoga, naturopathy, panchakarma, physiotherapy and pathology support planned according to the patient's condition.",
      },
      {
        "@type": "Offer",
        name: "Regular Follow-Up",
        description:
          "Follow-up visits to observe progress, adjust guidance and support long-term discipline.",
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
      name: "Which is the best Ayurvedic hospital for Rampur patients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Balprada Ayurvedic Hospital & Research Center, serving patients since 1991, is a trusted choice for Rampur families looking for authentic, personalised Ayurvedic care.",
      },
    },
    {
      "@type": "Question",
      name: "Does Balprada have a branch in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our branches are in Bilari (main branch) and Moradabad. Both are reachable for patients travelling from Rampur.",
      },
    },
    {
      "@type": "Question",
      name: "What conditions does Balprada support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Ayurvedic care for kidney, liver, cancer support, heart, diabetes, thyroid and women's health concerns.",
      },
    },
    {
      "@type": "Question",
      name: "Is OPD consultation free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, free OPD consultation is available on the 15th of every month.",
      },
    },
    {
      "@type": "Question",
      name: "What are the OPD timings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main branch is open daily from 10:00 AM to 2:00 PM. The Moradabad branch has Vaidya ji on Sundays, so call first.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to my first visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring earlier reports, prescriptions and a list of all medicines you are taking.",
      },
    },
    {
      "@type": "Question",
      name: "Can Ayurveda replace my current medicines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ayurvedic care is planned after reviewing your medication. Never stop prescribed medicines without medical advice.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call 8126364606, message on WhatsApp, or use the Book Appointment page on balpradaindia.com.",
      },
    },
    {
      "@type": "Question",
      name: "Does Balprada offer panchakarma therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Panchakarma is planned individually after assessment, according to the patient's condition and strength.",
      },
    },
    {
      "@type": "Question",
      name: "Are pathology tests available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing for a more complete care journey.",
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
              Best Ayurvedic Hospital in Rampur, UP – Balprada Ayurvedic Hospital &amp; Research Center
            </h1>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Trusted Ayurvedic Care for Rampur Patients
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Families in Rampur, Uttar Pradesh often search for an Ayurvedic hospital that combines genuine herbal medicine, experienced vaidyas and honest guidance. Balprada Ayurvedic Hospital &amp; Research Center has served patients with exactly this approach since 1991.
              </li>
              <li>
                Balprada is based in the Moradabad region, a manageable journey from Rampur, and is trusted by patients across western Uttar Pradesh who want disciplined, long-term Ayurvedic care for chronic health concerns.
              </li>
              <li>
                The hospital offers personalised consultation, in-house herbal medicines, panchakarma, yoga, naturopathy, physiotherapy and pathology support, all connected through one care plan.
              </li>
              <li>
                This page explains what makes Balprada a dependable choice, which conditions we support, how your visit works and how Rampur families can book an OPD appointment.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About Balprada Ayurvedic Hospital &amp; Research Center
            </h2>


            <h3 className="font-medium text-gray-900">A Legacy of Seva Since 1991</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Balprada was founded in 1991 by Sw. Vaidya Vijay Pal Singh Ji with a clear vision: to combine Ayurvedic healing with selfless community service, known as seva.
              </li>
              <li>
                Today the institution carries 35 years of experience and brings together an Ayurvedic chikitsalaya, research, herbal wellness, pathology, yoga, naturopathy and ashram-based social service.
              </li>
              <li>
                The Balprada family continues the founder&apos;s belief that positivity, discipline and compassion are essential parts of recovery.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Our Mission and Vision</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Our mission is to provide reliable Ayurvedic care for chronic and serious health conditions through consultation, self-prepared medicines, lifestyle guidance and compassionate service.
              </li>
              <li>
                Our vision is to be a trusted Ayurvedic wellness and jansewa centre where traditional knowledge, modern organisation and community care work together for healthier lives.
              </li>
              <li>
                Patients and families are guided toward a calmer, clearer path through illness with hope, discipline and natural healing.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Families Choose Balprada
            </h2>


            <h3 className="font-medium text-gray-900">Experience You Can Trust</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                More than three decades of continuous Ayurvedic practice means our vaidyas have supported patients with a wide range of chronic and long-standing conditions.
              </li>
              <li>
                Patients from across Uttar Pradesh share positive Google reviews about the humble staff, knowledgeable vaidyas and serene ashram atmosphere.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Authentic In-House Herbal Medicines</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Balprada prepares its own Ayurvedic medicines, which supports quality control and consistency in every treatment plan.
              </li>
              <li>
                Medicines are combined with diet and lifestyle correction, because Ayurveda looks at the whole person and not only the symptom.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Personalised and Responsible Care</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                No two patients receive the same plan. The doctor studies your history, reports and current medication before suggesting the next care step.
              </li>
              <li>
                Ayurvedic care is planned responsibly alongside any ongoing treatment, so please share every medicine you currently take.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Free OPD and Open Seven Days</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A free OPD consultation is available on the 15th of every month, reflecting Balprada&apos;s service-first spirit.
              </li>
              <li>
                The ashram and clinic remain open seven days a week, so families can plan a visit without worrying about closed days.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Patient Experience and Community Trust</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Reviews describe excellent guidance from Vaidya ji and the hospital team, with the natural ashram surroundings and Ayurvedic discipline helping patients feel supported during recovery.
              </li>
              <li>
                Visitors repeatedly mention the humble, smiling staff who go out of their way to help families feel welcomed and cared for.
              </li>
              <li>
                Balprada&apos;s jansewa mission means the focus stays on service, patient comfort and responsible guidance rather than quick promises.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Health Concerns Rampur Patients Bring to Balprada
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Long-standing kidney problems:</span> swelling, reduced kidney function, kidney stones and diabetes-related kidney stress are among the most frequent reasons for consultation.
              </li>
              <li>
                <span className="font-semibold">Liver and digestion issues:</span> fatty liver, jaundice, acidity, bloating and weak digestion often respond best when medicine, food and routine are corrected together.
              </li>
              <li>
                <span className="font-semibold">Serious illness support:</span> families seek gentle help with strength, appetite, energy and emotional balance during cancer treatment.
              </li>
              <li>
                <span className="font-semibold">Lifestyle disorders:</span> blood pressure, diabetes, thyroid imbalance, weight gain and stress are managed through steady follow-up and daily discipline.
              </li>
              <li>
                <span className="font-semibold">Women&apos;s health concerns:</span> hormonal imbalance, irregular cycles and persistent weakness are addressed privately and respectfully.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose Ayurveda for Long-Term Health
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ayurveda focuses on the root pattern behind a health problem, combining medicines, food, routine and mind care for steadier long-term balance.
              </li>
              <li>
                Treatment is personalised to body type, strength, digestion and lifestyle, so each plan is practical for daily life at home.
              </li>
              <li>
                Regular follow-up builds discipline and trust, which are especially valuable in chronic conditions that need patience.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Ayurvedic Treatments Offered at Balprada
            </h2>


            <h3 className="font-medium text-gray-900">Kidney and Urinary Care</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ayurvedic consultation and lifestyle care for kidney function, swelling, kidney stones and diabetes-linked kidney concerns.
              </li>
              <li>
                Support covers kidney failure care, kidney stones, persistent swelling and diabetic nephropathy through diet guidance, Ayurvedic medicines and regular monitoring.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Liver and Digestive Care</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Medicine, diet and routine-based care for liver health, fatty liver, jaundice and weak digestion.
              </li>
              <li>
                Plans focus on food discipline and daily routine so the liver and digestive system receive steady, practical support.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Cancer Supportive Care</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Sensitive Ayurvedic supportive care for strength, energy, diet and emotional balance during serious illness.
              </li>
              <li>
                Services include strength and recovery support, diet guidance and stress support, offered as supportive care alongside the patient&apos;s primary oncology treatment.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Heart and Lifestyle Care</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Integrated Ayurvedic and lifestyle care for blood pressure, diabetes, obesity and stress concerns.
              </li>
              <li>
                Patients receive practical guidance on food, activity, sleep and stress habits that support heart and metabolic health.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Diabetes and Thyroid Care</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Personalised support for blood sugar, hypothyroidism, hyperthyroidism, energy, weight and metabolic balance.
              </li>
              <li>
                Regular follow-up helps the vaidya observe progress and adjust the plan as your body responds.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Women&apos;s Wellness</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Private, sensitive Ayurvedic care for hormonal balance, menstrual health and general weakness.
              </li>
              <li>
                Consultations are conducted respectfully, with attention to diet, lifestyle and emotional wellbeing.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Facilities That Support Complete Healing
            </h2>


            <h3 className="font-medium text-gray-900">Panchakarma</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Panchakarma therapies are planned individually to support cleansing, balance and recovery.
              </li>
              <li>
                Therapies are chosen only after assessment, so each patient receives what suits their condition and strength.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Yoga and Meditation</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Yoga helps build discipline, strength and calm across body, mind and breath.
              </li>
              <li>
                Guided meditation and breath awareness support emotional steadiness, restorative rest and a calmer healing journey.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Naturopathy and Physiotherapy</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Naturopathy uses simple, nature-led practices and supportive routines that work with the body&apos;s natural healing capacity.
              </li>
              <li>
                Professional physiotherapy supports safe movement, mobility, strength and recovery alongside the wider care plan.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Balprada Pathology Lab</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Reliable blood, urine and diagnostic testing helps the doctor track progress and plan care with confidence.
              </li>
              <li>
                Testing support within the same care journey reduces the effort of moving between multiple centres.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Ashram and Organic Food</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A peaceful ashram environment supports rest, routine and long-term healing away from daily stress.
              </li>
              <li>
                Balprada&apos;s organic food focus supports clean, wholesome eating as part of recovery.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your Care Journey at Balprada
            </h2>


            <h3 className="font-medium text-gray-900">Step 1: Consultation</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The doctor reviews your concern, medical history, reports and current medication.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 2: Personalised Ayurvedic Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Care is planned using Balprada&apos;s Ayurvedic medicines, diet discipline and lifestyle correction where suitable.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 3: Supportive Therapies</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Yoga, naturopathy, panchakarma and pathology support make the journey more complete.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 4: Regular Follow-Up</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Follow-up visits help the team observe progress, adjust guidance and support long-term discipline.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Ayurvedic Diet and Lifestyle Guidance
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Eat fresh, simple, home-cooked meals at regular times, because Ayurveda treats strong digestion as the foundation of good health.
              </li>
              <li>
                Follow the diet chart given by your doctor, especially for kidney, liver, diabetes and thyroid concerns, since the right food can support medicines.
              </li>
              <li>
                Keep a steady daily routine: wake early, sleep on time, walk daily and avoid late-night heavy meals.
              </li>
              <li>
                Practise yoga, pranayama and meditation regularly to reduce stress and support emotional balance.
              </li>
              <li>
                Drink water and fluids as advised for your condition, as needs differ between patients, particularly in kidney care.
              </li>
              <li>
                Attend every follow-up visit so the vaidya can review progress and adjust the plan safely.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Choose the Best Ayurvedic Hospital in Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Check experience:</span> look for a hospital with a long, verifiable history. Balprada has served patients since 1991.
              </li>
              <li>
                <span className="font-semibold">Ask about medicines:</span> prefer hospitals that explain their formulations and prepare medicines with care, as Balprada does in-house.
              </li>
              <li>
                <span className="font-semibold">Look for complete facilities:</span> panchakarma, yoga, physiotherapy and a pathology lab within one institution make follow-up easier.
              </li>
              <li>
                <span className="font-semibold">Read patient reviews:</span> genuine Google reviews show how staff treat families and how patients feel about their recovery.
              </li>
              <li>
                <span className="font-semibold">Expect honesty:</span> a trustworthy doctor explains the plan clearly, reviews your reports and avoids unrealistic promises.
              </li>
              <li>
                <span className="font-semibold">Confirm access:</span> check OPD timings, travel distance and whether regular follow-up is practical for your family.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What to Expect During Your First Visit
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Arrive during OPD hours, 10:00 AM to 2:00 PM, and allow enough time for an unhurried consultation.
              </li>
              <li>
                Share your full history openly, including symptoms, duration, earlier treatments, allergies and daily habits.
              </li>
              <li>
                Receive clear guidance on medicines, diet and lifestyle, with a follow-up schedule suited to your condition.
              </li>
              <li>
                Ask questions freely. Our team believes informed patients and families make steadier progress.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              OPD Timings, Location and Appointment
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


            <h3 className="font-medium text-gray-900">Free OPD and Booking</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Free OPD consultation is available on the 15th of every month. Book by phone, WhatsApp on{" "}
                <a
                  href="tel:+918126364606"
                  className="font-semibold text-green-600 hover:underline"
                >
                  8126364606
                </a>{" "}
                or through the appointment page.
              </li>
              <li>
                Carry previous reports, prescriptions and a list of current medicines for a more useful consultation.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>


            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Which is the best Ayurvedic hospital for Rampur patients?
                </h3>
                <p className="mt-2">
                  Balprada Ayurvedic Hospital &amp; Research Center, serving patients since 1991, is a trusted choice for Rampur families looking for authentic, personalised Ayurvedic care.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Does Balprada have a branch in Rampur?
                </h3>
                <p className="mt-2">
                  Our branches are in Bilari (main branch) and Moradabad. Both are reachable for patients travelling from Rampur.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What conditions does Balprada support?
                </h3>
                <p className="mt-2">
                  We offer Ayurvedic care for kidney, liver, cancer support, heart, diabetes, thyroid and women&apos;s health concerns.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Is OPD consultation free?
                </h3>
                <p className="mt-2">
                  Yes, free OPD consultation is available on the 15th of every month.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What are the OPD timings?
                </h3>
                <p className="mt-2">
                  The main branch is open daily from 10:00 AM to 2:00 PM. The Moradabad branch has Vaidya ji on Sundays, so call first.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What should I bring to my first visit?
                </h3>
                <p className="mt-2">
                  Bring earlier reports, prescriptions and a list of all medicines you are taking.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Can Ayurveda replace my current medicines?
                </h3>
                <p className="mt-2">
                  Ayurvedic care is planned after reviewing your medication. Never stop prescribed medicines without medical advice.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  How can I book an appointment?
                </h3>
                <p className="mt-2">
                  Call 8126364606, message on WhatsApp, or use the Book Appointment page on balpradaindia.com.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Does Balprada offer panchakarma therapy?
                </h3>
                <p className="mt-2">
                  Yes. Panchakarma is planned individually after assessment, according to the patient&apos;s condition and strength.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Are pathology tests available?
                </h3>
                <p className="mt-2">
                  Yes. Balprada Pathology Lab supports blood, urine and diagnostic testing for a more complete care journey.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Book Your Ayurvedic Consultation Today
              </h2>


              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Take the first step toward balanced, long-term wellness with Balprada Ayurvedic Hospital &amp; Research Center.
                </li>
                <li>
                  Call{" "}
                  <a
                    href="tel:+918126364606"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    8126364606
                  </a>{" "}
                  or WhatsApp us to book your OPD visit. May all be happy, may all be healthy.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
                </li>
                <li>
                  <span className="font-semibold">OPD Timings:</span> Daily, 10:00 AM – 2:00 PM
                </li>
              </ul>
            </div>
          </div>


          <CityInternalLinks
            city="rampur"
            currentSlug="/best-ayurvedic-hospital-rampur-up"
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