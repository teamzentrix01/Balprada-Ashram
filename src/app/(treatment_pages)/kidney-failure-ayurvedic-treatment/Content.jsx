import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "Can Ayurveda cure kidney failure completely?",
      a: "No. Ayurveda cannot reverse kidney failure. It may offer supportive care alongside your prescribed medical treatment, not a replacement for it.",
    },
    {
      q: "Is it safe to take Ayurvedic herbs while on dialysis?",
      a: "Only under strict professional supervision. Many herbs are unsafe for dialysis patients, so self-medication should be avoided entirely.",
    },
    {
      q: "Can Ayurvedic treatment help avoid dialysis?",
      a: "In select early-stage cases, supportive care combined with medical treatment may help slow progression, but this must be assessed individually by both your nephrologist and our physicians.",
    },
    {
      q: "Does Balprada Hospital treat patients already on dialysis?",
      a: "Yes, we offer supportive, symptom-focused care for dialysis patients, always coordinated with their treating nephrologist.",
    },
    {
      q: "How long does Ayurvedic supportive care take to show results?",
      a: "This varies by patient and stage of disease. Our physicians set realistic timelines after your initial evaluation.",
    },
    {
      q: "Will I need to stop my current medications?",
      a: "No. Ayurvedic supportive care is meant to work alongside your prescribed medications, not replace them.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Kidney Failure and Ayurveda&apos;s Role
              </h1>

              <p className="mb-4 text-gray-700">
                Kidney failure, whether acute or chronic, is one of the most serious health conditions a person can face. At Balprada Ayurvedic Hospital &amp; Research Center, we believe that Ayurveda can play a meaningful supportive role in managing kidney failure when used alongside proper nephrology care — never as a replacement for it.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Kidney failure occurs when the kidneys lose their ability to filter waste and excess fluid from the blood effectively</li>
                <li>It can develop gradually (Chronic Kidney Disease progressing to failure) or suddenly (Acute Kidney Injury)</li>
                <li>Ayurveda views kidney function through the lens of the Mutravaha Srotas (urinary channel system) and the balance of Vata, Pitta, and Kapha doshas</li>
                <li>Our approach focuses on supporting the body&apos;s natural functions, slowing further deterioration where possible, and improving overall quality of life</li>
                <li>We work in coordination with your treating nephrologist — Ayurvedic care is designed to complement, not replace, dialysis or other prescribed medical treatment</li>
                <li>Every treatment plan begins only after reviewing the patient&apos;s current medical reports and understanding their exact stage of kidney function</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Kidney Failure Develops
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the progression of the disease helps explain why timing matters so much in supportive care.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Chronic Kidney Disease typically progresses through five recognized stages, based on glomerular filtration rate (GFR)</li>
                <li>Early stages often show few or no symptoms, which is why kidney disease is frequently called a &quot;silent&quot; condition</li>
                <li>As function declines, waste products and fluid begin to accumulate in the body, leading to the visible symptoms patients eventually notice</li>
                <li>Acute Kidney Injury, by contrast, can occur suddenly due to dehydration, blood loss, infection, or certain medications, and requires immediate medical attention</li>
                <li>Recognizing which type and stage a patient is at is the first step before any Ayurvedic supportive plan is designed</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Kidney Failure
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the root cause helps in designing a more effective supportive care plan.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Long-standing uncontrolled diabetes (diabetic nephropathy)</li>
                <li>Chronic high blood pressure (hypertensive nephropathy)</li>
                <li>Chronic glomerulonephritis and other kidney inflammations</li>
                <li>Polycystic kidney disease and other genetic conditions</li>
                <li>Prolonged use of certain painkillers or medications</li>
                <li>Recurrent kidney infections or untreated kidney stones</li>
                <li>Severe dehydration, blood loss, or sudden drop in blood pressure (acute cases)</li>
                <li>Autoimmune conditions affecting the kidneys</li>
                <li>Long-term exposure to certain toxins or heavy metals in rare cases</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recognizing the Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Early recognition of symptoms allows for timely intervention and better management outcomes.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Persistent fatigue and weakness</li>
                <li>Swelling in the legs, ankles, feet, or around the eyes</li>
                <li>Reduced or changed urine output</li>
                <li>Foamy or dark-colored urine</li>
                <li>Loss of appetite, nausea, or a metallic taste in the mouth</li>
                <li>Difficulty concentrating or mental fog</li>
                <li>Shortness of breath</li>
                <li>Persistent itching of the skin</li>
                <li>Muscle cramps, especially at night</li>
                <li>High blood pressure that is difficult to control</li>
                <li>Sleep disturbances, which many patients report as one of the earlier noticeable changes</li>
              </ul>

              <p className="text-gray-700">
                If you notice several of these signs together, please consult a nephrologist immediately for proper diagnosis before considering any supportive Ayurvedic care.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic Perspective on Kidney Failure
              </h2>

              <p className="mb-4 text-gray-700">
                In Ayurveda, kidney function is closely tied to the balance of Apana Vata (the downward-moving energy responsible for elimination) and the health of the Rakta (blood) and Meda (fat) dhatus.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>When Apana Vata is disturbed, the body&apos;s natural filtration and elimination processes weaken</li>
                <li>Accumulated Ama (toxins from poor digestion) is believed to further burden the kidneys</li>
                <li>Weak Agni (digestive fire) is considered a key contributing factor to the buildup of toxins over time</li>
                <li>The goal of Ayurvedic supportive care is to pacify aggravated doshas, reduce Ama formation, and support the body&apos;s own detoxification pathways</li>
                <li>This is done through herbs, diet, lifestyle modification, and gentle therapeutic procedures — always calibrated to the patient&apos;s current kidney function and stage of disease</li>
                <li>Restoring balance is approached gradually, with close attention to how the patient&apos;s body and reports respond over time</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Kidney Failure Supportive Care
              </h2>

              <p className="mb-4 text-gray-700">
                At Balprada Ayurvedic Hospital, every patient with kidney failure goes through a structured evaluation before any treatment plan is designed.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed case history and dosha assessment — understanding the patient&apos;s constitution, disease progression, and current medical treatment</li>
                <li>Coordination with existing reports — reviewing creatinine, GFR, and other nephrology reports shared by the patient</li>
                <li>Customized herbal support — formulations selected based on the individual&apos;s specific imbalance and stage of kidney function</li>
                <li>Dietary guidance (Pathya-Apathya) — a kidney-friendly Ayurvedic diet plan that considers protein, potassium, and sodium restrictions as advised by the treating physician</li>
                <li>Gentle lifestyle recommendations — sleep, stress management, and activity levels suited to the patient&apos;s energy and health status</li>
                <li>Regular follow-up and monitoring — adjusting the care plan as the patient&apos;s condition and medical reports evolve</li>
                <li>Family counseling and support — helping families understand what to realistically expect at each stage of care</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Herbs Traditionally Used in Kidney Support
              </h2>

              <p className="mb-4 text-gray-700">
                Certain classical herbs are commonly referenced in Ayurvedic texts for supporting kidney and urinary health. These are used under professional supervision and adjusted to the patient&apos;s condition.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Punarnava (Boerhavia diffusa) — traditionally used to support fluid balance and reduce swelling</li>
                <li>Gokshura (Tribulus terrestris) — supportive for the urinary system</li>
                <li>Varuna (Crataeva nurvala) — used in traditional formulations related to urinary health</li>
                <li>Guduchi (Tinospora cordifolia) — known for its role in supporting the body&apos;s natural immune response</li>
                <li>Shatavari (Asparagus racemosus) — used for general strength and nourishment support</li>
                <li>Triphala — used cautiously and only when appropriate, to support digestion and elimination</li>
                <li>Kaishore Guggulu — occasionally referenced for its supportive role in metabolic and inflammatory balance, used only when clinically appropriate</li>
              </ul>

              
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dietary Guidance for Kidney Failure Patients
              </h2>

              <p className="mb-4 text-gray-700">
                Diet plays a central role in managing kidney failure, and our Ayurvedic dietary recommendations are always aligned with your nephrologist&apos;s medical advice.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Following a low-sodium, controlled-protein diet as advised by your medical team</li>
                <li>Including fresh, easily digestible seasonal vegetables (as permitted by potassium restrictions)</li>
                <li>Avoiding processed, canned, and packaged foods high in preservatives and sodium</li>
                <li>Limiting or avoiding foods high in potassium and phosphorus when advised, such as bananas, oranges, and dairy in excess</li>
                <li>Staying mindful of fluid intake as per medical guidance, especially for patients on dialysis</li>
                <li>Favoring warm, freshly cooked meals over cold, heavy, or fried foods</li>
                <li>Avoiding red meat, excessive salt, and alcohol</li>
                <li>Including small amounts of ghee or healthy fats as advised, for sustained energy</li>
                <li>Eating smaller, more frequent meals when appetite is reduced, rather than forcing large portions</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Kidney Failure: What&apos;s Appropriate
              </h2>

              <p className="mb-4 text-gray-700">
                Panchakarma therapies are powerful detoxification procedures, but not all of them are suitable for patients with compromised kidney function.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Aggressive detoxification procedures are generally avoided or significantly modified in kidney failure patients</li>
                <li>Gentle, supportive therapies may be considered only after careful evaluation of the patient&apos;s current kidney function and fluid balance</li>
                <li>Any therapy involving fluid shifts is approached with extreme caution and close monitoring</li>
                <li>Mild external therapies for comfort and relaxation may be considered in stable patients, with physician approval</li>
                <li>Our physicians decide the appropriateness of any procedure on a case-by-case basis — this is never a standard, one-size-fits-all protocol</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Stage-Wise Supportive Care
              </h2>

              <p className="mb-4 text-gray-700">
                Ayurvedic support looks different depending on how advanced the kidney condition is.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early-stage CKD — greater scope for dietary correction, lifestyle changes, and herbal support to help slow progression</li>
                <li>Moderate CKD — closer coordination with nephrology reports, more conservative herbal use, and stronger emphasis on diet</li>
                <li>Advanced kidney failure / dialysis-dependent patients — supportive care is focused mainly on quality of life, symptom relief (such as fatigue, appetite, and sleep), and emotional support for the patient and family, always alongside ongoing dialysis</li>
                <li>Post-transplant patients — Ayurvedic involvement, if any, is extremely cautious and only considered in consultation with the transplant team, due to immunosuppressant drug interactions</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Choose Balprada Ayurvedic Hospital
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Experienced Ayurvedic physicians with specific focus on kidney and metabolic disorders</li>
                <li>A structured, medically-informed approach rather than generic herbal treatment</li>
                <li>Transparent communication about what Ayurveda can and cannot do for kidney failure</li>
                <li>In-house diagnostic support to track patient progress over time</li>
                <li>A calm, supportive environment for patients dealing with a physically and emotionally difficult condition</li>
                <li>Continuous coordination encouraged between our physicians and the patient&apos;s nephrologist</li>
                <li>A care team that takes time to explain each stage of the plan to patients and their families</li>
              </ul>
            </div>


            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Consultation at Balprada
              </h2>

              <p className="mb-6 text-black">
                Patients and families seeking supportive Ayurvedic care for kidney failure can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. Our physicians review your nephrology reports, assess your current stage of kidney function, and design a safe supportive plan alongside your prescribed medical treatment.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>
                    <p className="text-black">
                      Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                      Tehsil Bilari, District Moradabad, Uttar Pradesh 244415
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
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
                    className="mt-1 shrink-0 text-black"
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

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/treatments">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-blue-800">
                    Explore Treatments
                  </button>
                </Link>
              </div>
            </div>

            <div className="mb-12">
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
            </div>
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