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
      q: "Can Ayurveda help in liver failure conditions?",
      a: "Ayurveda focuses on supporting liver function, digestion, and overall strength through herbal care, diet, and routine correction alongside proper medical guidance.",
    },
    {
      q: "Is liver failure completely reversible?",
      a: "Reversibility depends on the stage and underlying cause. Early-stage concerns respond better to consistent care than advanced-stage conditions.",
    },
    {
      q: "What diet is recommended during liver treatment?",
      a: "Light, easily digestible meals with fresh fruits, vegetables, and regular meal timings are generally advised, along with avoiding alcohol and oily food.",
    },
    {
      q: "Does Balprada offer free consultation?",
      a: "Yes, a free OPD consultation is available on the 15th of every month at Balprada Ashram and Clinic.",
    },
    {
      q: "How long does Ayurvedic liver treatment take to show results?",
      a: "The duration varies for each patient depending on the severity of the condition, consistency in following the routine, and individual response to care.",
    },
    {
      q: "Can I continue my current medicines alongside Ayurvedic care?",
      a: "Your existing reports and medicines are reviewed during consultation so the doctor can guide you on how to proceed safely.",
    },
    {
      q: "Do I need to visit in person for consultation?",
      a: "Yes, an in-person consultation helps the doctor assess your condition properly, though follow-up communication can often be supported through phone or WhatsApp.",
    },
    {
      q: "Where is Balprada Ayurvedic Hospital located?",
      a: "Balprada has two branches — the Main Branch in Village Bhidwari, Tehsil Bilari, and a branch in Sector-13, New Moradabad, Delhi Road, Moradabad.",
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
                Liver Failure Treatment in Moradabad – Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4">
                Liver failure is a serious health condition that affects the body&apos;s ability to filter toxins, produce essential proteins, and support digestion. At Balprada Ayurvedic Hospital &amp; Research Center, patients in Moradabad and nearby regions receive time-tested Ayurvedic care built on 35 years of experience, in-house herbal medicines, and a disciplined ashram-based healing environment. Our approach focuses on supporting liver function, easing symptoms, and guiding patients toward a stable, sustainable recovery routine.
              </p>
            </div>


            {/* Section 2 — What Is Liver Failure? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Liver Failure?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Liver failure occurs when the liver loses its ability to perform its normal functions effectively.</li>
                <li>It can develop suddenly (acute liver failure) or gradually over months and years (chronic liver failure).</li>
                <li>The liver plays a role in digestion, detoxification, protein synthesis, and blood clotting, so its failure affects the entire body.</li>
                <li>Chronic liver failure is often the end result of long-standing liver disease such as fatty liver, hepatitis, or cirrhosis.</li>
                <li>Early recognition and consistent care are important for managing the condition and supporting quality of life.</li>
              </ul>
            </div>


            {/* Section 3 — Common Causes of Liver Failure */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Liver Failure
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Long-term alcohol consumption that gradually damages liver tissue.</li>
                <li>Chronic viral hepatitis infections (Hepatitis B and C) left untreated over time.</li>
                <li>Non-alcoholic fatty liver disease (NAFLD) progressing without lifestyle correction.</li>
                <li>Prolonged, unsupervised use of certain medicines and self-medication habits.</li>
                <li>Exposure to toxins, adulterated food, or harmful chemicals over extended periods.</li>
                <li>Underlying metabolic conditions such as diabetes and obesity that add stress on liver function.</li>
                <li>Genetic and autoimmune liver conditions in some cases.</li>
              </ul>
            </div>


            {/* Section 4 — Early Warning Signs and Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Early Warning Signs and Symptoms
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent fatigue and weakness that does not improve with rest.</li>
                <li>Loss of appetite and unexplained weight loss.</li>
                <li>Yellowing of the skin and eyes (jaundice).</li>
                <li>Swelling in the abdomen, legs, or ankles due to fluid retention.</li>
                <li>Nausea, vomiting, or a general feeling of digestive discomfort.</li>
                <li>Dark-colored urine and pale or clay-colored stools.</li>
                <li>Easy bruising or bleeding due to reduced clotting ability.</li>
                <li>Mental confusion or difficulty concentrating in advanced stages.</li>
                <li>Itchy skin without any visible rash.</li>
              </ul>
            </div>


            {/* Section 5 — Why Ayurveda for Liver Failure Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Ayurveda for Liver Failure Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurveda views liver health as closely connected to digestion (Agni) and the balance of the body&apos;s doshas, particularly Pitta.</li>
                <li>The approach focuses on supporting the body&apos;s natural healing capacity rather than only managing symptoms.</li>
                <li>Herbal formulations used in Ayurvedic care are traditionally chosen to support liver tissue, digestion, and detoxification pathways.</li>
                <li>Diet and daily routine (Dinacharya) are considered essential parts of the healing process, not just add-ons.</li>
                <li>A calm, disciplined environment such as an ashram setting can support consistency, rest, and emotional steadiness during a difficult health phase.</li>
                <li>Ayurvedic care is intended to work alongside a patient&apos;s overall health plan and current medical guidance.</li>
              </ul>
            </div>


            {/* Section 6 — Balprada's Approach to Liver Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s Approach to Liver Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed Consultation:</strong> Our doctors review the patient&apos;s history, current reports, ongoing medication, and specific concerns before suggesting any next steps.</li>
                <li><strong>Personalized Ayurvedic Plan:</strong> Care is planned using Balprada&apos;s in-house herbal medicines, along with diet discipline and lifestyle correction suited to the individual.</li>
                <li><strong>Diet and Routine Guidance:</strong> Patients receive practical guidance on food timing, suitable foods, and habits that support digestion and liver function.</li>
                <li><strong>Supportive Therapies:</strong> Facilities such as yoga, naturopathy, and panchakarma are offered where suitable to complement the main treatment plan.</li>
                <li><strong>Pathology Support:</strong> Balprada&apos;s in-house pathology lab helps track relevant health parameters so the care plan can be reviewed and adjusted over time.</li>
                <li><strong>Regular Follow-Up:</strong> The team stays connected with patients to monitor progress, address new concerns, and reinforce routine discipline.</li>
              </ul>
            </div>


            {/* Section 7 — Ayurvedic Herbs and Formulations Traditionally Used for Liver Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Ayurvedic Herbs and Formulations Traditionally Used for Liver Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Bhumi Amla (Phyllanthus niruri):</strong> Traditionally associated with supporting liver tissue and healthy digestion.</li>
                <li><strong>Kutki (Picrorhiza kurroa):</strong> Used in classical Ayurvedic texts in formulations aimed at liver and digestive support.</li>
                <li><strong>Kalmegh (Andrographis paniculata):</strong> Known in traditional use for its bitter properties linked to liver and immune support.</li>
                <li><strong>Punarnava (Boerhavia diffusa):</strong> Commonly referenced for supporting fluid balance and kidney-liver related concerns.</li>
                <li><strong>Guduchi (Tinospora cordifolia):</strong> Widely used in Ayurveda for general immunity and supportive care during chronic illness.</li>
                <li>Balprada&apos;s in-house medicines are prepared under supervision, and the exact formulation for each patient is decided only after proper consultation.</li>
              </ul>
            </div>


            {/* Section 8 — Diet and Lifestyle Guidance for Liver Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Guidance for Liver Health
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Favor light, easily digestible meals over heavy, oily, or fried foods.</li>
                <li>Reduce or avoid alcohol completely, as it places direct stress on the liver.</li>
                <li>Include fresh seasonal fruits and vegetables as part of daily meals.</li>
                <li>Maintain regular meal timings to support digestive rhythm.</li>
                <li>Stay adequately hydrated with plain water and suitable herbal preparations as advised.</li>
                <li>Avoid self-medication, especially painkillers and unregulated supplements, without medical guidance.</li>
                <li>Prioritize adequate sleep and rest, as the body repairs itself significantly during rest.</li>
                <li>Practice stress-reducing routines such as gentle yoga or breathing exercises where appropriate.</li>
                <li>Avoid processed foods, excess sugar, and packaged snacks that add unnecessary metabolic load.</li>
              </ul>
            </div>


            {/* Section 9 — Facilities That Support Liver Care at Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities That Support Liver Care at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Panchakarma:</strong> Traditional cleansing therapies planned according to individual assessment and suitability.</li>
                <li><strong>Yoga:</strong> Structured yoga sessions to support balance across body, mind, and breath.</li>
                <li><strong>Naturopathy:</strong> Nature-based practices that work with the body&apos;s own healing capacity.</li>
                <li><strong>Pathology Lab:</strong> In-house testing support for blood, urine, and other diagnostic needs relevant to liver monitoring.</li>
                <li><strong>Organic Food:</strong> Diet planning supported by naturally grown food options as part of the overall care routine.</li>
                <li><strong>Ashram Environment:</strong> A peaceful, disciplined setting intended to support long-term healing and routine consistency.</li>
              </ul>
            </div>


            {/* Section 10 — Why Choose Balprada Ayurvedic Hospital &amp; Research Center */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada Ayurvedic Hospital &amp; Research Center
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Experienced doctors who take time to understand each patient&apos;s specific history and condition.</li>
                <li>In-house preparation of herbal medicines to maintain quality and consistency.</li>
                <li>A combination of consultation, medicine, diet guidance, yoga, and panchakarma for a more complete care journey.</li>
                <li>Two accessible branches serving patients from Moradabad and surrounding districts.</li>
                <li>Free OPD consultation available on the 15th of every month.</li>
                <li>A calm ashram environment that supports patients seeking a disciplined, long-term healing approach.</li>
              </ul>
            </div>


            {/* Section 11 — What to Expect During Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The doctor will review your medical history, current reports, and ongoing medicines during the first consultation.</li>
                <li>Based on the assessment, a personalized Ayurvedic plan is suggested, which may include medicines, diet changes, and routine correction.</li>
                <li>Supportive facilities like panchakarma, yoga, or naturopathy may be recommended depending on individual suitability.</li>
                <li>Pathology testing may be advised to track relevant health parameters over time.</li>
                <li>Regular follow-up visits help the team observe progress and refine the care plan as needed.</li>
                <li>Patients are encouraged to maintain open communication about any changes in symptoms or comfort during treatment.</li>
              </ul>
            </div>


            


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic supportive care for liver failure can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed review of medical history, current reports, ongoing medications, and specific concerns, followed by a personalized Ayurvedic care plan. For patients traveling from outside Moradabad, the hospital also assists with planning follow-up support via phone or WhatsApp.
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