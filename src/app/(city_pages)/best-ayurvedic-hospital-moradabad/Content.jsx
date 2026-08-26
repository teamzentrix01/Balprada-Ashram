import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "Where is Balprada Ayurvedic Hospital located?",
      a: "The main branch is in Bhidwari, Tehsil Bilari, Moradabad. A second branch is in New Moradabad, Delhi Road.",
    },
    {
      q: "Since when has Balprada been serving patients?",
      a: "Balprada has been serving patients since 1991, with 35 years of ayurvedic experience.",
    },
    {
      q: "What health concerns does Balprada treat?",
      a: "Kidney, liver, cancer support, heart, diabetes, thyroid, and women's wellness concerns.",
    },
    {
      q: "Is there a free consultation at Balprada?",
      a: "Yes, a free OPD consultation is offered on the 15th of every month.",
    },
    {
      q: "What are the OPD timings?",
      a: "The main branch is open daily from 10:00 AM to 2:00 PM. The Moradabad branch has Sunday vaidya availability.",
    },
    {
      q: "Does Balprada have its own pathology lab?",
      a: "Yes, Balprada Pathology Lab provides blood, urine, and diagnostic testing on-site.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call or WhatsApp 8126364606, or contact the Moradabad branch at 9410447000.",
    },
    {
      q: "Does Balprada support cancer patients?",
      a: "Yes, through sensitive supportive care focused on strength, diet, and emotional balance alongside primary treatment.",
    },
    {
      q: "Does Balprada offer yoga and naturopathy?",
      a: "Yes, yoga, naturopathy, meditation, and physiotherapy are all offered alongside ayurvedic medicine.",
    },
    {
      q: "Is Balprada suitable for out-of-town patients?",
      a: "Yes, the ashram-based setup and daily OPD make it convenient for patients travelling from outside Moradabad.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Main Content */}
          <div className="flex-1 order-1">

            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Best Ayurvedic Hospital in Moradabad — Balprada Ayurvedic Hospital &amp; Research Center
              </h1>

              <p className="text-gray-700 mb-4">
                Finding the best Ayurvedic hospital in Moradabad means finding a place where genuine tradition, experienced doctors, and honest care come together. Balprada Ayurvedic Hospital &amp; Research Center has been doing exactly this since 1991, guided by the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji. With 35 years of experience, two branches serving the Moradabad region, and a full ecosystem of ayurvedic chikitsalaya, research, herbal medicine, pathology, yoga, and naturopathy, Balprada continues to be a trusted name for families looking for natural, disciplined, and compassionate healing.
              </p>

              <p className="text-gray-700">
                Choosing the right ayurvedic hospital means looking beyond advertisements and checking real history, real doctors, and real patient experience. Balprada&apos;s 35-year journey, in-house medicine preparation, and ashram-based seva model set it apart from newer, purely commercial ayurvedic clinics. The combination of consultation, medicine, diet, yoga, panchakarma, physiotherapy, and pathology under one roof reduces the need to visit multiple places.
              </p>
            </div>

            {/* Section 2 — Why Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Balprada Is Considered the Best Ayurvedic Hospital in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Balprada has built trust over 35 years through genuine seva, experienced vaidyas, and a complete healing ecosystem that goes beyond typical clinical treatment.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Serving patients since 1991, carrying forward 35 years of ayurvedic experience and community trust</li>
                <li>Founded on the vision of seva (selfless service) by Sw. Vaidya Vijay Pal Singh Ji, not just commercial treatment</li>
                <li>In-house, self-prepared herbal medicines instead of outsourced or mass-manufactured formulations</li>
                <li>Experienced vaidyas who personally review history, reports, and current medication before suggesting a care plan</li>
                <li>A peaceful, ashram-based environment that supports long-term healing rather than a rushed clinical visit</li>
                <li>Two convenient branches — the main branch in Bhidwari, Bilari, and a second branch in New Moradabad, Delhi Road</li>
                <li>Ashram and clinic open all seven days of the week for consultation and follow-up</li>
                <li>A dedicated in-house pathology lab for blood, urine, and diagnostic testing support</li>
                <li>A complete care journey that combines consultation, medicines, diet guidance, yoga, panchakarma, and physiotherapy</li>
                <li>Free OPD consultation offered on the 15th of every month, making expert consultation accessible to more families</li>
              </ul>
            </div>

            {/* Section 3 — Our Legacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Legacy — 35 Years of Ayurvedic Seva
              </h2>

              <p className="text-gray-700 mb-4">
                Balprada was founded in 1991 with the object of serving humanity and contributing to a better nation. The institution grew from a single seva-driven vision into a full ayurvedic chikitsalaya with research, herbal wellness, and community outreach.
              </p>

              <p className="text-gray-700 mb-4">
                Today, Balprada is recognized as an ayurvedic hospital, a research-oriented wellness center, and an ashram of jansewa (public service) at the same time. The mission continues to expand into wider jansewa — combining ashram care, herbal wellness, pathology, yoga, naturopathy, and organic food.
              </p>

              <p className="text-gray-700">
                Our mission is to provide reliable ayurvedic care for chronic and serious conditions through consultation, self-prepared medicines, and lifestyle guidance. Our vision is to be a trusted ayurvedic wellness and jansewa center where tradition and modern organization work together. As the founder often reminded patients: staying positive gives courage to face even the most difficult health circumstances.
              </p>
            </div>

            {/* Section 4 — Ayurvedic Treatments */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Treatments Available at Balprada
              </h2>

              <p className="text-gray-700 mb-6">
                Balprada offers comprehensive ayurvedic care across multiple specializations, combining consultation, herbal medicine, diet guidance, and supportive therapies.
              </p>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kidney and Urinary Care
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Ayurvedic consultation and lifestyle guidance for kidney function concerns</li>
                    <li>Supportive care for kidney failure through herbal medicine and disciplined routine</li>
                    <li>Natural approach to kidney stones alongside dietary correction</li>
                    <li>Guidance for swelling and diabetes-linked kidney concerns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Liver and Digestive Care
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Ayurvedic medicine, diet, and routine-based care for overall liver health</li>
                    <li>Focused support for fatty liver through herbal formulations and lifestyle change</li>
                    <li>Care for jaundice with traditional ayurvedic protocols</li>
                    <li>Guidance for weak digestion and related stomach concerns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Cancer Supportive Care
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Sensitive, supportive ayurvedic care alongside a patient&apos;s primary cancer treatment</li>
                    <li>Focus on building strength and supporting recovery through diet and herbal support</li>
                    <li>Personalized diet guidance suited to the patient&apos;s condition and treatment stage</li>
                    <li>Emotional and stress support for patients and their families during a difficult phase</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Heart and Lifestyle Care
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Integrated ayurvedic and lifestyle care for heart-related concerns</li>
                    <li>Natural guidance for blood pressure management</li>
                    <li>Diabetes care combined with dietary discipline</li>
                    <li>Support for obesity and weight-related lifestyle concerns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diabetes and Thyroid Care
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Personalized ayurvedic support for blood sugar management</li>
                    <li>Care for hypothyroidism through herbal medicine and routine correction</li>
                    <li>Care for hyperthyroidism with a focus on balance and energy</li>
                    <li>Ongoing guidance for metabolic balance and long-term weight management</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Women&apos;s Wellness
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Private and sensitive ayurvedic consultation for women&apos;s health concerns</li>
                    <li>Support for hormonal balance through natural medicine and diet</li>
                    <li>Guidance for menstrual health issues</li>
                    <li>Ayurvedic care for general weakness and low energy in women</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Section 5 — What Makes Balprada Different */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes Ayurvedic Care at Balprada Different
              </h2>

              <p className="text-gray-700 mb-4">
                Balprada&apos;s approach to ayurvedic treatment goes beyond standard clinical practice, focusing on personalized care, quality control, and long-term healing.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Every treatment plan begins with a personal consultation rather than a fixed, one-size-fits-all prescription</li>
                <li>Medicines are prepared in-house, so the quality and sourcing of every herb and formulation stay within Balprada&apos;s own control</li>
                <li>Diet and lifestyle correction are treated as part of the treatment, not as an afterthought mentioned only in passing</li>
                <li>The ashram setting removes the noise and rush of a typical hospital corridor, giving patients space to focus on recovery</li>
                <li>Follow-up is built into the process, so families are not left guessing what to do after the first visit</li>
                <li>Research remains part of Balprada&apos;s identity, meaning treatment approaches are reviewed and refined rather than static</li>
                <li>The seva-first philosophy means the focus stays on genuine healing and service to the community, alongside patient care</li>
              </ul>
            </div>

            {/* Section 6 — Ashram Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ashram Experience at Balprada
              </h2>

              <p className="text-gray-700 mb-4">
                Balprada functions as an ashram and clinic together, open all seven days for consultation and follow-up. The peaceful, spiritual atmosphere is designed to support patients dealing with chronic or serious illness.
              </p>

              <p className="text-gray-700 mb-4">
                Many patients travel from outside Moradabad and describe the ashram environment as calming during a difficult health journey. Vaidya ji&apos;s personal availability, especially at the Moradabad branch on Sundays, adds a human, approachable touch to the care process.
              </p>

              <p className="text-gray-700">
                The jansewa (public service) roots of the ashram mean the focus stays on genuine care rather than only commercial treatment. Organic food served at the ashram supports the diet guidance that is central to every ayurvedic treatment plan.
              </p>
            </div>

            {/* Section 7 — Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities That Make Balprada a Complete Healing Center
              </h2>

              <p className="text-gray-700 mb-6">
                Balprada offers a complete ecosystem of healing facilities under one roof, reducing the need for patients to visit multiple centers for different aspects of care.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Panchakarma</strong> — planned according to individual assessment to support cleansing, balance, and recovery</li>
                <li><strong>Yoga</strong> — combined with ayurveda to build discipline, strength, and calm across body and mind</li>
                <li><strong>Naturopathy</strong> — working with the body&apos;s own healing capacity through simple, nature-led practices</li>
                <li><strong>Meditation</strong> — guided sessions to support emotional steadiness and restorative rest during the healing journey</li>
                <li><strong>Physiotherapy</strong> — professional support for safe movement, mobility, and recovery alongside the ayurvedic plan</li>
                <li><strong>Balprada Pathology Lab</strong> — reliable blood, urine, and diagnostic testing under one roof for a more complete care journey</li>
                <li><strong>Organic Food</strong> — supporting the diet guidance that accompanies every treatment plan</li>
              </ul>
            </div>

            {/* Section 8 — Care Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Care Process — From Consultation to Follow-Up
              </h2>

              <p className="text-gray-700 mb-6">
                Balprada follows a structured, disciplined care process that ensures every patient receives comprehensive attention from initial consultation through ongoing follow-up.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-gray-900 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Step 1: Consultation</p>
                    <p className="text-gray-700">The doctor reviews the concern, history, existing reports, and current medication in detail.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-gray-900 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Step 2: Ayurvedic Plan</p>
                    <p className="text-gray-700">Care is planned around Balprada&apos;s own ayurvedic medicines, diet discipline, and lifestyle correction.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-gray-900 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Step 3: Supportive Facilities</p>
                    <p className="text-gray-700">Yoga, naturopathy, panchakarma, and pathology support are added wherever suitable.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-gray-900 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Step 4: Follow-Up</p>
                    <p className="text-gray-700">Regular follow-up helps the team track progress and adjust guidance for consistent, long-term discipline.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9 — Why Patients Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients and Families Choose Balprada
              </h2>

              <p className="text-gray-700 mb-4">
                Families consistently choose Balprada for its calm, practical approach to ayurvedic care and the genuine spirit of seva that guides every interaction.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Families describe the consultation as calm, practical, and clearly explained — not rushed</li>
                <li>Many patients highlight the peaceful ashram environment as a genuine part of their healing experience</li>
                <li>Follow-up guidance gives families a clear structure for diet, daily habits, medicine schedules, and future consultations, even after returning home</li>
                <li>Patients repeatedly mention the availability and kindness of the Balprada team throughout their visit</li>
                <li>The genuine spirit of seva behind the institution builds a level of trust that goes beyond a typical hospital visit</li>
              </ul>
            </div>

            {/* Section 10 — Ayurveda Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurveda Tips for Everyday Wellness
              </h2>

              <p className="text-gray-700 mb-4">
                Simple ayurvedic practices can support long-term health and prevent lifestyle-related conditions from developing or worsening.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Begin the day with warm water to support natural digestion and detoxification</li>
                <li>Choose fresh, seasonal, and preferably organic food over processed and packaged options</li>
                <li>Include short yoga and breathing practice daily to support both physical and emotional balance</li>
                <li>Maintain a fixed sleep and meal schedule, since ayurveda gives high importance to routine (dinacharya)</li>
                <li>Avoid ignoring early symptoms related to kidney, liver, or digestive discomfort — early consultation supports better outcomes</li>
                <li>Reduce excess salt, fried food, and sugar to protect long-term kidney, liver, and heart health</li>
                <li>Manage stress through meditation, family time, and adequate rest rather than relying only on medication</li>
              </ul>
            </div>

            {/* Section 11 — Trusted Choice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Trusted Choice for Ayurvedic Healing in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing the right ayurvedic hospital means looking beyond advertisements and checking real history, real doctors, and real patient experience. Balprada&apos;s 35-year journey, in-house medicine preparation, and ashram-based seva model set it apart from newer, purely commercial ayurvedic clinics.
              </p>

              <p className="text-gray-700">
                The combination of consultation, medicine, diet, yoga, panchakarma, physiotherapy, and pathology under one roof reduces the need to visit multiple places. Free OPD on the 15th of every month reflects the founding seva philosophy that still guides the institution today. For families in Moradabad and nearby districts searching for dependable, natural, and disciplined healing, Balprada remains a trusted and time-tested choice.
              </p>
            </div>

            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan. For patients traveling from outside Moradabad, the hospital also assists with treatment planning to accommodate multi-day Panchakarma therapy schedules.
              </p>

              <div className="space-y-4 mb-6">

                {/* Main Branch */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                {/* Moradabad Branch */}
                <div className="flex items-start gap-3 mt-4">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>
                    <p className="text-black">
                      F-19, Sector-13, New Moradabad, Delhi Road,
                      Moradabad, Uttar Pradesh 244001
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

                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9410447000" className="hover:underline">
                        9410447000
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
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

            {/* Section 13 — FAQs */}
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

                    <p className="text-gray-700">
                      {faq.a}
                    </p>
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