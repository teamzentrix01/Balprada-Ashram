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
      q: "What makes Balprada different from other Ayurvedic clinics in Moradabad?",
      a: "Balprada combines classical Ayurvedic treatment protocols with a research-driven, hospital-grade setup — qualified BAMS/MD doctors, in-house prepared medicines, and hygienic therapy infrastructure, unlike smaller unregistered clinics common in the region.",
    },
    {
      q: "Does Balprada treat chronic conditions like arthritis and psoriasis?",
      a: "Yes, Balprada has dedicated protocols for chronic joint disorders (arthritis, spondylitis, sciatica) and skin conditions (psoriasis, eczema, vitiligo) using a combination of internal medication and Panchakarma therapies.",
    },
    {
      q: "Is Panchakarma treatment available at Balprada?",
      a: "Yes, Balprada operates a fully functional Panchakarma unit offering Vamana, Virechana, Basti, Nasya, and Raktamokshana under supervised, trained therapists.",
    },
    {
      q: "Do I need a prior diagnosis or reports before visiting Balprada?",
      a: "While not mandatory, bringing existing medical reports helps physicians design a more accurate, personalized treatment plan alongside the traditional Nadi Pariksha (pulse diagnosis) and case history review.",
    },
    {
      q: "Can patients from outside Moradabad get treatment at Balprada?",
      a: "Yes, many patients travel from Rampur, Amroha, Sambhal, and surrounding districts. The hospital also helps out-of-town patients plan multi-day stays for Panchakarma therapy courses.",
    },
    {
      q: "Does Balprada offer Ayurvedic treatment for kidney, liver, and heart conditions?",
      a: "Yes, these are among Balprada's core specializations. The hospital manages kidney stones, elevated creatinine, and early-stage CKD; fatty liver and elevated liver enzymes; and supportive care for high blood pressure, cholesterol, and mild cardiac weakness — using nephro-protective and hepatoprotective herbs, Panchakarma detox, and structured diet plans, typically alongside a patient's existing specialist care.",
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
                Ayurvedic Hospital Near Guarau, Bilari – Balprada Hospital
              </h1>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Families in Guarau and other villages under Bilari tehsil often face a common challenge: finding dependable, doctor-supervised Ayurvedic care without traveling far from home.
                </li>
                <li>
                  Balprada Hospital addresses this gap directly, offering a structured Ayurvedic treatment facility that combines classical medicine with transparent, patient-first practices.
                </li>
                <li>
                  This page covers what the hospital offers, how chronic and everyday health conditions are managed, and what residents of Guarau can expect when they visit.
                </li>
              </ul>
            </div>

            {/* Section 2 — Bringing Organized Ayurvedic Care Closer to Guarau */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Bringing Organized Ayurvedic Care Closer to Guarau
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Villages like Guarau, situated within Bilari tehsil, have traditionally depended on informal healers or long trips to Moradabad for genuine Ayurvedic treatment — both of which come with real limitations in consistency and follow-up care.
                </li>
                <li>
                  Balprada Hospital&apos;s Ayurvedic facility is positioned to serve this exact gap, giving residents access to trained doctors, proper diagnostic conversations, and supervised therapy without the burden of long-distance travel.
                </li>
                <li>
                  The hospital maintains the same standard of care for rural patients as it would for anyone visiting from Bilari town itself — there is no difference in the quality or seriousness of consultation based on where a patient travels from.
                </li>
                <li>
                  For elderly patients, pregnant women, and those managing chronic illness, this local accessibility often makes the difference between receiving consistent care and skipping follow-ups altogether due to travel fatigue.
                </li>
              </ul>
            </div>

            {/* Section 3 — Core Ayurvedic Departments and Treatment Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Core Ayurvedic Departments and Treatment Areas
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  General Ayurvedic Consultation – In-depth evaluation of health complaints using classical diagnostic methods, forming the foundation for every treatment plan.
                </li>
                <li>
                  Chronic Disease Management – Structured, long-term Ayurvedic support for conditions like diabetes, hypertension, and metabolic imbalances, often used alongside conventional medical management.
                </li>
                <li>
                  Panchakarma-Based Detoxification – Therapies such as Basti, Virechana, and supporting treatments like Abhyanga, used for deep-rooted, recurring health issues.
                </li>
                <li>
                  Joint and Muscular Pain Care – Focused treatment protocols for arthritis, back pain, and stiffness common among people engaged in physically demanding farm work.
                </li>
                <li>
                  Women&apos;s Health Support – Ayurvedic approaches to menstrual irregularities, general hormonal balance, and postnatal recovery care.
                </li>
                <li>
                  Pediatric and Family Wellness – Gentle, age-appropriate Ayurvedic guidance for common childhood digestive and immunity concerns, always within safe, supervised limits.
                </li>
                <li>
                  Geriatric Care – Age-specific treatment plans addressing joint health, digestion, and general vitality in elderly patients.
                </li>
              </ul>
            </div>

            {/* Section 4 — Chronic Disease Support: A Key Focus for Rural Patients */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Chronic Disease Support: A Key Focus for Rural Patients
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Many patients from villages like Guarau live with long-term conditions such as diabetes, high blood pressure, or persistent joint pain that require ongoing management rather than a one-time cure.
                </li>
                <li>
                  Balprada Hospital&apos;s Ayurvedic team works with these patients over time, adjusting herbal support, dietary guidance, and lifestyle recommendations as the condition evolves.
                </li>
                <li>
                  Where appropriate, Ayurvedic management is used to complement — not replace — necessary conventional treatment, and patients are clearly advised when a condition needs coordinated care with general medicine.
                </li>
                <li>
                  Regular, accessible follow-up (made realistic by the hospital&apos;s proximity to Guarau) allows doctors to track progress accurately instead of relying on infrequent, disconnected visits.
                </li>
                <li>
                  Patients are also educated on early warning signs related to their specific condition, empowering them to seek timely care rather than waiting until a problem becomes severe.
                </li>
              </ul>
            </div>

            {/* Section 5 — What a Consultation at Balprada Hospital Involves */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What a Consultation at Balprada Hospital Involves
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Understanding the Patient
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Doctors begin with a detailed discussion covering symptoms, daily routine, occupation, diet, and any existing medical history.
                    </li>
                    <li>
                      Traditional assessment techniques, including pulse diagnosis, are combined with a general health check to build a complete picture of the patient&apos;s condition.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Building a Personalized Plan
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      Based on this understanding, a tailored treatment plan is created — this may include herbal medication, dietary adjustments, specific therapies, or a combination of all three.
                    </li>
                    <li>
                      Patients are given a clear, honest explanation of expected timelines, so there is no confusion about how quickly results may appear.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ongoing Monitoring
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>
                      For chronic or long-term conditions, follow-up visits are scheduled to track progress and adjust the treatment plan as needed.
                    </li>
                    <li>
                      Patients are encouraged to report any changes in symptoms promptly, allowing the treatment approach to stay responsive rather than fixed and rigid.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6 — Affordability and Transparency for Rural Families */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Affordability and Transparency for Rural Families
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Balprada Hospital aims to keep Ayurvedic consultation and treatment accessible for families from villages like Guarau, where cost sensitivity is often a genuine concern.
                </li>
                <li>
                  Patients are informed clearly about consultation charges and the likely cost of ongoing treatment before committing to a long-term plan, avoiding surprises later.
                </li>
                <li>
                  Where a treatment course requires multiple sessions or extended herbal support, the hospital explains the full expected course upfront rather than only quoting cost per visit.
                </li>
                <li>
                  This transparency is particularly valued by families managing tight household budgets, who need to plan healthcare expenses alongside other responsibilities.
                </li>
              </ul>
            </div>

            {/* Section 7 — Accessibility for Guarau and Nearby Villages */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Accessibility for Guarau and Nearby Villages
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Guarau&apos;s location within Bilari tehsil means Balprada Hospital is a realistic, short travel option compared to the alternative of reaching Moradabad city for similar Ayurvedic care.
                </li>
                <li>
                  The hospital&apos;s local presence reduces the logistical burden for elderly patients, pregnant women, or anyone unable to comfortably manage long travel for routine follow-ups.
                </li>
                <li>
                  Patients from surrounding villages are welcomed with the same attention and care process as those from Bilari town, with no compromise on consultation quality based on distance traveled.
                </li>
                <li>
                  For families without private transport, the hospital&apos;s accessible location within the broader Bilari area still represents a significantly shorter journey than city-based alternatives.
                </li>
              </ul>
            </div>

            {/* Section 8 — Common Reasons Patients From Guarau Visit the Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Reasons Patients From Guarau Visit the Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Persistent joint pain and stiffness linked to farm labor and physically demanding daily routines.
                </li>
                <li>
                  Digestive complaints, including acidity, bloating, and irregular bowel patterns.
                </li>
                <li>
                  Skin conditions such as chronic itching, rashes, or seasonal allergic reactions.
                </li>
                <li>
                  Fatigue and low energy that hasn&apos;t improved with rest or basic home remedies.
                </li>
                <li>
                  Diabetes and blood pressure concerns requiring supportive, long-term lifestyle-based management.
                </li>
                <li>
                  Stress, poor sleep, and general low mood affecting daily functioning.
                </li>
                <li>
                  Women&apos;s health concerns, including irregular cycles and postnatal recovery support.
                </li>
                <li>
                  General family wellness check-ins, particularly for elderly household members.
                </li>
              </ul>
            </div>

            {/* Section 9 — Why Families Continue to Choose Balprada Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Families Continue to Choose Balprada Hospital
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Consistency in care, with the same doctors available for follow-up visits rather than a rotating, unfamiliar staff.
                </li>
                <li>
                  A structured, documented approach to treatment that builds patient confidence over informal or unregulated alternatives.
                </li>
                <li>
                  Honest communication about what Ayurveda can realistically achieve for a given condition, avoiding exaggerated promises.
                </li>
                <li>
                  A comfortable, hygienic treatment environment suited for both consultation and hands-on therapy.
                </li>
                <li>
                  A genuine understanding of the lifestyle, occupational patterns, and common health concerns specific to the Bilari-Guarau rural belt.
                </li>
              </ul>
            </div>

            {/* Section 10 — Seasonal Health Patterns Common to the Guarau-Bilari Belt */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Seasonal Health Patterns Common to the Guarau-Bilari Belt
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  The transition between summer and monsoon months often brings a rise in digestive complaints and skin irritation among rural households, conditions Ayurveda addresses through seasonal dietary and herbal adjustments.
                </li>
                <li>
                  Winter months tend to aggravate joint pain and stiffness, particularly among older patients and those with physically demanding daily routines — timely Ayurvedic care during this period can meaningfully reduce discomfort.
                </li>
                <li>
                  Dust and seasonal changes common in agricultural areas can trigger recurring respiratory issues, which Ayurveda approaches through both immediate symptom relief and longer-term immunity-building measures.
                </li>
                <li>
                  Balprada Hospital factors in these seasonal patterns when advising patients from Guarau, offering guidance that is practical and relevant to the local environment rather than generic, one-size-fits-all advice.
                </li>
                <li>
                  Patients are encouraged to visit for seasonal check-ins even when not experiencing an acute problem, as preventive care during predictable seasonal shifts often reduces the severity of recurring issues.
                </li>
              </ul>
            </div>

            {/* Section 11 — Integrating Ayurveda With Daily Rural Life */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Integrating Ayurveda With Daily Rural Life
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Recommendations given to patients take into account the realities of farm work, household responsibilities, and limited leisure time, rather than prescribing routines that are difficult to sustain in practice.
                </li>
                <li>
                  Dietary advice is built around locally available foods and existing eating habits, with adjustments suggested rather than a complete lifestyle overhaul that would be unrealistic for most families to follow.
                </li>
                <li>
                  Simple home-based practices, such as specific self-massage techniques or basic dietary timing changes, are taught during consultations so patients can continue supporting their treatment between hospital visits.
                </li>
                <li>
                  Family members are often included in these discussions, particularly when caring for elderly relatives or managing a child&apos;s health, ensuring the guidance is understood and followed correctly at home.
                </li>
                <li>
                  This practical, grounded approach is part of why patients from Guarau and similar villages find Ayurvedic treatment at Balprada Hospital easier to sustain compared to advice that doesn&apos;t account for their day-to-day reality.
                </li>
              </ul>
            </div>

            {/* Section 12 — Preparing for Your Visit From Guarau */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your Visit From Guarau
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Bring along any prior test reports, prescriptions, or medical documents, even if related to allopathic treatment, so the doctor gets a full and accurate picture of your health history.
                </li>
                <li>
                  Write down the main symptoms you&apos;re experiencing, when they began, and anything that seems to make them better or worse — this speeds up the consultation and improves accuracy of diagnosis.
                </li>
                <li>
                  If you&apos;re currently on any medication, including for chronic conditions like diabetes or blood pressure, mention this clearly so it can be factored into the treatment plan safely.
                </li>
                <li>
                  Plan your visit with enough time for a thorough first consultation rather than rushing between other commitments, since a detailed initial assessment sets the foundation for effective treatment.
                </li>
                <li>
                  If possible, bring a family member along for elderly patients or when discussing a child&apos;s health, so home-based guidance is understood clearly by everyone involved in ongoing care.
                </li>
              </ul>
            </div>

          

            {/* Section 14 — CTA (Guarau-focused, same structure) */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada Hospital
              </h2>

              <ul className="text-black space-y-2 list-disc pl-5 mb-6">
                <li>
                  Patients from Guarau and surrounding villages can book an Ayurvedic consultation at Balprada Hospital for chronic disease care, Panchakarma, and general wellness.
                </li>
                <li>
                  The initial visit includes detailed case discussion, personalized treatment planning, and clear guidance on costs and expected timelines.
                </li>
                <li>
                  For regular follow-ups, the hospital&apos;s location within Bilari tehsil makes ongoing care practical for rural families.
                </li>
              </ul>

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

            {/* Section 15 — FAQs (unchanged logic, same faqs array) */}
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