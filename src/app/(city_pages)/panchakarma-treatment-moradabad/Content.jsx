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
      q: "Is panchakarma suitable for everyone?",
      a: "No, suitability depends on individual health status. A proper consultation is needed before beginning the therapy.",
    },
    {
      q: "How long does a typical panchakarma course take?",
      a: "Duration varies by individual and condition, and is decided by the doctor after assessment.",
    },
    {
      q: "Does Balprada offer panchakarma alongside medicine-based treatment?",
      a: "Yes, panchakarma is generally integrated with herbal medicines, diet guidance, and lifestyle correction.",
    },
    {
      q: "Is diet restriction necessary during panchakarma?",
      a: "Yes, following diet guidance before, during, and after the therapy is important for safety and results.",
    },
    {
      q: "Can panchakarma help with digestive issues?",
      a: "It is traditionally used to support digestive balance, but suitability is confirmed only after consultation.",
    },
    {
      q: "Do I need to visit in person for panchakarma?",
      a: "Yes, consultation and supervised sessions require an in-person visit to the hospital.",
    },
    {
      q: "Is panchakarma safe for elderly patients?",
      a: "It can be considered with modifications, but this is decided individually by the doctor based on health status.",
    },
    {
      q: "How do I book a panchakarma consultation at Balprada?",
      a: "You can call, WhatsApp, or email the hospital, or visit during the free OPD offered on the 15th of every month.",
    },
    {
      q: "Does Balprada offer panchakarma at both branches?",
      a: "Panchakarma is centered around Balprada's facilities; it is best to confirm availability at your preferred branch before visiting.",
    },
    {
      q: "Can panchakarma be combined with pathology testing?",
      a: "Yes, Balprada's in-house pathology lab can support tracking relevant health parameters before and after the therapy.",
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
                Panchakarma Treatment in Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4">
                Panchakarma is one of Ayurveda&apos;s most well-known therapeutic systems, traditionally used for detoxification, balance, and long-term wellness support. For residents of Moradabad seeking authentic panchakarma care, Balprada Ayurvedic Hospital &amp; Research Center offers this therapy as part of a structured, doctor-guided treatment plan, backed by 35 years of Ayurvedic experience and an ashram-based approach to healing.
              </p>
            </div>


            {/* Section 2 — What Is Panchakarma? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                 About the Panchakarma
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Panchakarma literally means &quot;five actions,&quot; referring to a set of classical Ayurvedic cleansing procedures.</li>
                <li>It is traditionally used to help remove accumulated toxins (Ama) from the body and restore balance among the three doshas — Vata, Pitta, and Kapha.</li>
                <li>The therapy is generally divided into three phases: preparatory care, the main cleansing procedures, and post-therapy recovery guidance.</li>
                <li>Panchakarma is not a single treatment but a customized combination of procedures chosen according to the individual&apos;s constitution and health concern.</li>
                <li>It is considered most effective when performed under proper medical supervision, following a personalized assessment.</li>
                <li>At Balprada, panchakarma is offered as part of a broader care plan rather than a standalone, one-time procedure.</li>
                <li>The therapy draws on centuries-old Ayurvedic texts, and its principles remain widely referenced in classical and modern Ayurvedic practice alike.</li>
                <li>Panchakarma is often described as both a curative and preventive system, meaning it can support recovery from certain imbalances as well as maintain long-term wellness.</li>
              </ul>
            </div>


            {/* Section 3 — Why People in Moradabad Choose Panchakarma */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why People in Moradabad Choose Panchakarma
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Many patients turn to panchakarma for support with chronic digestive issues, fatigue, and general low immunity.</li>
                <li>It is often sought as a complementary therapy alongside medicine-based treatment for conditions like liver concerns, joint stiffness, or metabolic imbalance.</li>
                <li>Some patients pursue panchakarma as a preventive, seasonal wellness practice rather than for a specific illness.</li>
                <li>The therapy&apos;s structured, routine-based nature appeals to patients who prefer a disciplined approach to health.</li>
                <li>Local access to a hospital offering panchakarma with proper consultation, rather than an unsupervised wellness center, adds a layer of safety and trust.</li>
                <li>Balprada&apos;s long-standing presence in the region gives patients confidence that the therapy is planned appropriately for their condition.</li>
                <li>Word-of-mouth trust built over decades often plays a role, with patients referring family members for the same disciplined approach to care.</li>
                <li>Some patients specifically seek panchakarma at a place that also offers full medical consultation, rather than a therapy-only spa-style setup.</li>
              </ul>
            </div>


            {/* Section 4 — Balprada's Approach to Panchakarma */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Approach to Panchakarma
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Initial Assessment:</strong> The doctor reviews the patient&apos;s health history, current condition, and any ongoing medication before considering panchakarma as an option.</li>
                <li><strong>Suitability Check:</strong> Not every patient or condition is suited to panchakarma; the doctor determines whether the therapy is appropriate and safe.</li>
                <li><strong>Personalized Planning:</strong> The specific combination and sequence of procedures is planned according to the individual&apos;s dosha balance and health goals.</li>
                <li><strong>Supervised Sessions:</strong> Therapies are carried out under supervision within Balprada&apos;s facility rather than left to self-administration.</li>
                <li><strong>Integration with Overall Care:</strong> Panchakarma is combined with diet guidance, herbal medicines, and lifestyle correction rather than offered in isolation.</li>
                <li><strong>Follow-Up Support:</strong> After the therapy, follow-up guidance helps patients maintain the benefits through sustained diet and routine discipline.</li>
                <li><strong>Documentation of Progress:</strong> Relevant observations are noted during the process so that future consultations can build on what has already been tried.</li>
                <li><strong>Honest Communication:</strong> Patients are informed clearly about what to expect from the therapy, including realistic timelines and outcomes.</li>
              </ul>
            </div>


            {/* Section 5 — Traditional Panchakarma Procedures */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Traditional Panchakarma Procedures
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Vamana (Therapeutic Emesis):</strong> A controlled cleansing procedure traditionally associated with balancing excess Kapha-related concerns.</li>
                <li><strong>Virechana (Purgation Therapy):</strong> A cleansing method traditionally used to help address Pitta-related imbalances.</li>
                <li><strong>Basti (Medicated Enema):</strong> A procedure traditionally used to support Vata balance and overall digestive and nervous system health.</li>
                <li><strong>Nasya (Nasal Therapy):</strong> The administration of medicated preparations through the nasal passage, traditionally used for head and sinus-related concerns.</li>
                <li><strong>Raktamokshana (Blood Purification Techniques):</strong> A traditional method sometimes used for specific skin and blood-related conditions, applied selectively and only when appropriate.</li>
                <li>The exact procedures recommended depend entirely on the patient&apos;s assessment; not all five are used for every individual.</li>
              </ul>
            </div>


            {/* Section 6 — Preparatory Therapies Before Panchakarma */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparatory Therapies Before Panchakarma
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Snehana (Oleation Therapy):</strong> Application of medicated oils internally or externally to help loosen toxins before the main cleansing procedures.</li>
                <li><strong>Swedana (Sudation Therapy):</strong> Herbal steam-based therapy used to further support the loosening and movement of toxins.</li>
                <li>These preparatory steps are considered essential for making the main panchakarma procedures safer and more effective.</li>
                <li>Skipping preparatory therapy is generally discouraged, as it can affect both safety and results.</li>
                <li>Balprada&apos;s team plans these preparatory steps as part of the overall treatment schedule rather than treating them as optional extras.</li>
              </ul>
            </div>


            {/* Section 7 — Health Concerns Panchakarma May Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Health Concerns Panchakarma May Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Chronic digestive issues, including bloating, irregular digestion, and weak appetite.</li>
                <li>Joint stiffness and general body heaviness linked to Kapha imbalance.</li>
                <li>Skin concerns that are sometimes associated with accumulated toxins in traditional Ayurvedic understanding.</li>
                <li>Fatigue and low energy levels affecting daily functioning.</li>
                <li>Stress-related imbalance, where the therapy is used alongside meditation and routine correction.</li>
                <li>Supportive care for metabolic conditions such as obesity, when guided appropriately by the treating doctor.</li>
                <li>It is important to note that panchakarma is a supportive and constitutional therapy, and its suitability for serious or acute medical conditions should always be assessed by a qualified doctor first.</li>
                <li>Some patients also use panchakarma as a seasonal reset, aligning the therapy with traditional Ayurvedic guidance on treating specific doshas during specific times of the year.</li>
              </ul>
            </div>


            {/* Section 8 — Life After Panchakarma: Post-Therapy Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Life After Panchakarma: Post-Therapy Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A gradual return to normal diet is generally advised, moving from light, easily digestible food back to a regular routine.</li>
                <li>Patients are usually guided to avoid heavy, oily, or cold foods immediately after completing the therapy.</li>
                <li>Continuing simple daily routines learned during the process, such as consistent meal timing, helps sustain the benefits.</li>
                <li>Follow-up consultation allows the doctor to assess how the body responded and to plan any next steps.</li>
                <li>Some patients continue with periodic, lighter panchakarma-related practices as part of long-term wellness maintenance, based on the doctor&apos;s advice.</li>
                <li>Emotional and mental steadiness gained during the process is often supported further through continued yoga or meditation practice.</li>
              </ul>
            </div>


            {/* Section 9 — Facilities Supporting Panchakarma at Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Supporting Panchakarma at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Panchakarma Therapy Rooms:</strong> Dedicated spaces where cleansing therapies are carried out according to individual assessment.</li>
                <li><strong>Yoga:</strong> Complementary sessions that support the body&apos;s balance and recovery alongside panchakarma.</li>
                <li><strong>Naturopathy:</strong> Nature-based practices that align with the overall detoxification and healing goals of panchakarma.</li>
                <li><strong>Meditation:</strong> Guided sessions supporting emotional steadiness during the cleansing process.</li>
                <li><strong>Pathology Lab:</strong> In-house testing support to help track relevant health parameters before and after therapy.</li>
                <li><strong>Organic Food:</strong> Diet support using naturally grown food, which is especially relevant during and after panchakarma, when dietary discipline matters most.</li>
              </ul>
            </div>


            {/* Section 10 — What to Expect During a Panchakarma Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Panchakarma Visit
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The process typically begins with a detailed consultation to assess whether panchakarma is suitable for your condition.</li>
                <li>Preparatory therapies such as Snehana and Swedana are usually scheduled before the main procedures.</li>
                <li>The specific panchakarma procedures are then carried out over a planned duration, based on individual needs.</li>
                <li>Diet restrictions and specific food guidance are usually provided before, during, and after the therapy period.</li>
                <li>Post-therapy guidance focuses on gradually returning to normal routine while maintaining the benefits gained.</li>
                <li>Follow-up consultation is generally recommended to review how the body has responded to the therapy.</li>
              </ul>
            </div>


            {/* Section 11 — Precautions and Who Should Be Cautious */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions and Who Should Be Cautious
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Panchakarma is not recommended for everyone, and a proper consultation is essential before beginning.</li>
                <li>Pregnant women, very elderly patients, and those with certain acute conditions may need modified or alternative approaches.</li>
                <li>Patients on specific ongoing medical treatments should discuss panchakarma with their treating doctor first.</li>
                <li>The therapy should always be performed under qualified supervision rather than attempted independently.</li>
                <li>Diet discipline before and after the therapy is important; ignoring guidance can reduce the benefits of the treatment.</li>
                <li>Balprada&apos;s doctors assess these factors individually before recommending or beginning any panchakarma procedure.</li>
                <li>Being transparent about pre-existing conditions and current medicines during consultation helps the doctor plan the safest possible approach.</li>
                <li>Patients are encouraged to voice any discomfort during the process immediately, rather than waiting until the next scheduled visit.</li>
              </ul>
            </div>


            {/* Section 12 — Why Choose Balprada for Panchakarma in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada for Panchakarma in Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Panchakarma is offered only after proper consultation, not as a walk-in wellness service without assessment.</li>
                <li>In-house herbal medicines support the preparatory and post-therapy phases with consistent quality.</li>
                <li>A calm, ashram-based environment that supports the discipline panchakarma therapy requires.</li>
                <li>Integration of panchakarma with yoga, naturopathy, diet planning, and pathology support for a more complete care journey.</li>
                <li>Two accessible branches serving Moradabad and New Moradabad, making follow-up visits more practical.</li>
              </ul>
            </div>


            {/* Section 13 — Branch and Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Branch and Contact Details
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Main Branch:</strong> Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. Open daily, 10:00 AM to 2:00 PM. Contact: 8126364606.</li>
                <li><strong>Moradabad Branch:</strong> F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001. Vaidya ji available on Sundays; call or WhatsApp before visiting. Contact: 9410447000.</li>
                <li>Free OPD consultation is available on the 15th of every month at Balprada Ashram and Clinic.</li>
                <li>Email for appointments and queries: <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a>.</li>
                <li>Appointments can also be arranged through WhatsApp for added convenience.</li>
              </ul>
            </div>


            {/* Section 14 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring panchakarma therapy can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed review of health history, current condition, and any ongoing medications, followed by an assessment of whether panchakarma is suitable and safe for the individual. For patients traveling from outside Moradabad, the hospital also assists with planning follow-up support via phone or WhatsApp.
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


            {/* Section 15 — FAQs */}
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