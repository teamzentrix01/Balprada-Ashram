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
      q: "Can Ayurveda cure nephrotic syndrome?",
      a: "No. Ayurveda cannot cure nephrotic syndrome. It may offer supportive care for swelling and overall strength alongside your prescribed medical treatment.",
    },
    {
      q: "Is Ayurvedic treatment safe for children with nephrotic syndrome?",
      a: "Yes, when properly supervised with age-appropriate formulations and close coordination with the child's pediatric nephrologist.",
    },
    {
      q: "Can Ayurveda reduce swelling caused by nephrotic syndrome?",
      a: "Supportive herbal and dietary measures may help ease swelling, though this should always be used alongside your prescribed medical treatment.",
    },
    {
      q: "Will Ayurvedic treatment interfere with steroid therapy?",
      a: "Our formulations are designed to avoid interference, but this requires careful evaluation, which is why we review your full treatment history before starting any supportive plan.",
    },
    {
      q: "Can nephrotic syndrome relapse be prevented with Ayurveda?",
      a: "Ayurvedic support may help with overall strength and immunity, but it cannot guarantee relapse prevention, which varies by individual case.",
    },
    {
      q: "Do I need to share my child's medical reports before starting treatment?",
      a: "Yes, this is essential so our physicians can design a safe, appropriate supportive plan alongside your child's existing treatment.",
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
                Understanding Nephrotic Syndrome and Ayurveda's Supportive Role
              </h1>


              <p className="text-gray-700 mb-4">
                Nephrotic syndrome is a kidney disorder marked by excessive protein loss in the urine, leading to swelling, low blood protein levels, and related complications. At Balprada Ayurvedic Hospital &amp; Research Center, we offer structured Ayurvedic supportive care designed to work alongside your nephrologist's treatment plan, helping manage symptoms and support overall kidney health.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Nephrotic syndrome occurs when the kidneys' filtering units (glomeruli) become damaged, allowing excess protein to leak into the urine</li>
                <li>It can affect both children and adults, though the underlying causes often differ between the two groups</li>
                <li>Common signs include significant swelling, foamy urine, and low energy, caused by the body's protein and fluid imbalance</li>
                <li>Ayurveda views this condition through the lens of Vata-Kapha imbalance affecting the Mutravaha Srotas (urinary channels) and the body's ability to retain essential nutrients</li>
                <li>Our supportive care focuses on managing swelling, supporting kidney function, and improving overall strength — always alongside your nephrologist's prescribed treatment</li>
                <li>This is never positioned as a substitute for steroids, immunosuppressants, or other medical treatments your doctor has prescribed</li>
                <li>Every case is evaluated individually, since nephrotic syndrome varies widely in cause, severity, and how each patient responds to treatment</li>
              </ul>
            </div>


            {/* Section 2 — How Common Is Nephrotic Syndrome */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Common Is Nephrotic Syndrome
              </h2>


              <p className="text-gray-700 mb-4">
                Understanding the scope of this condition helps explain why structured, ongoing supportive care matters so much.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Nephrotic syndrome can appear at any age, but it is one of the more frequently diagnosed kidney conditions in children between ages two and seven</li>
                <li>In adults, it is often linked to an underlying systemic condition such as diabetes or an autoimmune disorder</li>
                <li>The condition can follow a relapsing-remitting pattern, meaning symptoms may improve and then return over months or years</li>
                <li>This unpredictable pattern is exactly why we emphasize long-term, coordinated care rather than a one-time treatment approach</li>
              </ul>
            </div>


            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Nephrotic Syndrome
              </h2>


              <p className="text-gray-700 mb-4">
                Understanding the underlying cause helps guide the supportive care approach.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Minimal change disease, one of the most common causes, especially in children</li>
                <li>Focal segmental glomerulosclerosis (FSGS)</li>
                <li>Membranous nephropathy</li>
                <li>Diabetic nephropathy in longstanding, uncontrolled diabetes</li>
                <li>Autoimmune conditions such as lupus affecting the kidneys</li>
                <li>Certain infections that trigger kidney inflammation</li>
                <li>Some medications, in rare cases, that affect kidney filtering function</li>
                <li>Genetic factors in certain forms of the condition</li>
              </ul>
            </div>


            {/* Section 4 — Recognizing the Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recognizing the Symptoms
              </h2>


              <p className="text-gray-700 mb-4">
                Early recognition helps ensure timely medical diagnosis and appropriate supportive care.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Significant swelling in the legs, ankles, feet, and around the eyes, often most noticeable in the morning</li>
                <li>Foamy or frothy urine, caused by excess protein loss</li>
                <li>Rapid weight gain due to fluid retention</li>
                <li>Fatigue and general weakness</li>
                <li>Loss of appetite</li>
                <li>Increased susceptibility to infections</li>
                <li>In some cases, abdominal swelling due to fluid buildup</li>
                <li>High cholesterol levels, often detected through blood tests</li>
                <li>Pale or puffy appearance of the face, especially noticeable in children</li>
              </ul>


              <p className="text-gray-700">
                If swelling appears suddenly or significantly worsens, please consult a nephrologist promptly, as nephrotic syndrome requires proper medical diagnosis and monitoring.
              </p>
            </div>


            {/* Section 5 — Ayurvedic Perspective */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ayurvedic Perspective on Nephrotic Syndrome
              </h2>


              <p className="text-gray-700 mb-4">
                Ayurveda associates the swelling and protein loss seen in nephrotic syndrome with aggravated Kapha and Vata dosha, combined with weakened Agni (digestive fire) and compromised Dhatu Poshana (nourishment of body tissues).
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Weak digestive fire is believed to disrupt the body's ability to properly process and retain nutrients, including protein</li>
                <li>Aggravated Kapha is associated with the fluid retention and swelling characteristic of this condition</li>
                <li>Vata imbalance is linked to disturbances in the kidneys' filtering function</li>
                <li>Poor Dhatu Poshana, or tissue nourishment, is considered a key reason why patients often feel weak and depleted despite visible swelling</li>
                <li>Our supportive approach focuses on strengthening Agni, reducing Kapha-related fluid accumulation, and supporting the body's nutritional balance</li>
                <li>This is approached gradually and carefully, always in coordination with the patient's prescribed medical treatment</li>
              </ul>
            </div>


            {/* Section 6 — Our Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Approach to Nephrotic Syndrome Supportive Care
              </h2>


              <p className="text-gray-700 mb-4">
                Every patient with nephrotic syndrome goes through a structured evaluation before any supportive plan is designed.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed case history and dosha assessment — understanding the patient's constitution, disease duration, and current medical treatment</li>
                <li>Review of medical reports — understanding urine protein levels, blood albumin, and kidney function tests shared by the patient</li>
                <li>Customized herbal formulations — selected to support kidney function and manage swelling, based on the individual's specific presentation</li>
                <li>Dietary guidance — addressing protein, sodium, and fluid intake in coordination with the patient's medical team</li>
                <li>Swelling management support — herbal and lifestyle measures aimed at easing fluid retention discomfort</li>
                <li>Immunity-supportive care — since nephrotic syndrome patients are more prone to infections, general strength-building measures are included</li>
                <li>Relapse-pattern tracking — noting how often and under what circumstances symptoms return, to help inform long-term care</li>
                <li>Regular follow-up — adjusting the plan as the patient's reports and response to treatment evolve</li>
              </ul>
            </div>


            {/* Section 7 — Herbs Traditionally Used */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Herbs Traditionally Used in Nephrotic Syndrome Support
              </h2>


              <p className="text-gray-700 mb-4">
                These herbs are used in supervised formulations, adjusted to the patient's age, condition, and current medical treatment.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Punarnava (Boerhavia diffusa) — traditionally used to support fluid balance and reduce swelling</li>
                <li>Gokshura (Tribulus terrestris) — supportive for the urinary system</li>
                <li>Varuna (Crataeva nurvala) — used in classical formulations related to kidney and urinary health</li>
                <li>Guduchi (Tinospora cordifolia) — traditionally valued for supporting immunity, which is particularly relevant given the infection risk in this condition</li>
                <li>Shatavari (Asparagus racemosus) — used to support strength and nourishment, especially relevant given the protein loss involved</li>
                <li>Ashwagandha (Withania somnifera) — occasionally used cautiously to support general strength and resilience during long-term illness</li>
              </ul>


              
            </div>


            {/* Section 8 — Dietary Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dietary Guidance for Nephrotic Syndrome Patients
              </h2>


              <p className="text-gray-700 mb-4">
                Diet plays a central supportive role and is always aligned with the patient's treating physician's advice.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Following protein intake guidelines as specifically advised by the treating doctor, since both excess and insufficient protein can be problematic</li>
                <li>Reducing sodium intake to help manage swelling and fluid retention</li>
                <li>Monitoring fluid intake as guided by the medical team, particularly during active swelling episodes</li>
                <li>Avoiding processed, canned, and preserved foods high in sodium</li>
                <li>Including fresh, easily digestible foods within medically approved limits</li>
                <li>Avoiding fried and heavy foods that may worsen digestive load</li>
                <li>Ensuring adequate but not excessive caloric intake to support growth in children and strength in adults</li>
                <li>Introducing dietary changes gradually, especially for children, to encourage consistency rather than resistance</li>
              </ul>
            </div>


            {/* Section 9 — Managing Swelling */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Managing Swelling: A Key Focus Area
              </h2>


              <p className="text-gray-700 mb-4">
                Since swelling is often the most distressing symptom for patients and families, we give it particular attention in our supportive care plan.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Herbal formulations traditionally used to support healthy fluid balance</li>
                <li>Dietary sodium restriction as a foundational measure</li>
                <li>Elevation and gentle positioning guidance to ease discomfort from swelling</li>
                <li>Skin care guidance, since swollen skin can be more prone to irritation or minor injury</li>
                <li>Close monitoring of swelling patterns to track whether the overall treatment plan is helping</li>
                <li>Guidance on comfortable clothing and footwear during active swelling episodes, particularly for children</li>
              </ul>
            </div>


            {/* Section 10 — Special Considerations for Children */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Special Considerations for Children with Nephrotic Syndrome
              </h2>


              <p className="text-gray-700 mb-4">
                Since nephrotic syndrome frequently affects children, we take extra care in how supportive treatment is approached for younger patients.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Herbal dosing and formulations are adjusted specifically for a child's age and weight, never using adult dosing</li>
                <li>Close coordination with the child's pediatric nephrologist is maintained throughout</li>
                <li>Family education is emphasized, since consistent home care plays a major role in managing relapses</li>
                <li>Emotional support for both the child and family is included, given how disruptive frequent relapses can be to daily life and schooling</li>
                <li>Guidance on managing school attendance and activity levels during active flare-ups, in coordination with the treating doctor</li>
              </ul>
            </div>


            {/* Section 11 — Long-Term Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Long-Term Monitoring and Relapse Management
              </h2>


              <p className="text-gray-700 mb-4">
                Because nephrotic syndrome often follows a relapsing pattern, long-term monitoring is a core part of our supportive care philosophy rather than an afterthought.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular check-ins to review urine protein levels and overall symptom patterns, in coordination with the patient's nephrologist</li>
                <li>Adjusting herbal and dietary support as the patient moves between active symptom phases and periods of remission</li>
                <li>Helping patients and families recognize early warning signs of a relapse, such as returning swelling or foamy urine</li>
                <li>Encouraging prompt communication with the treating nephrologist the moment early signs appear, rather than waiting</li>
                <li>Building a sustainable, realistic daily routine that families can maintain over months and years, not just during a flare-up</li>
                <li>Reviewing growth and development milestones in children, since nephrotic syndrome and its treatments can affect this over time</li>
              </ul>
            </div>


            {/* Section 12 — Why Patients Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Experienced Ayurvedic physicians familiar with the specific needs of nephrotic syndrome patients, including children</li>
                <li>Treatment plans based on actual medical reports, not generic assumptions</li>
                <li>Careful, cautious herbal use given the sensitivity of this condition and common steroid interactions</li>
                <li>In-house diagnostic facilities to help track relevant markers over time</li>
                <li>Transparent communication about what supportive Ayurvedic care can realistically offer</li>
                <li>A calm, family-friendly environment for managing a condition that often involves children and long-term monitoring</li>
              </ul>
            </div>


            {/* Section 13 — Setting Realistic Expectations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Setting Realistic Expectations
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda does not cure nephrotic syndrome and cannot replace prescribed steroid or immunosuppressant therapy</li>
                <li>Our role is to provide supportive care that may help manage swelling, support strength, and improve overall well-being</li>
                <li>Relapses are common in nephrotic syndrome, and Ayurvedic support does not guarantee prevention of relapse</li>
                <li>Patients and families should continue all prescribed medical treatment and keep the treating nephrologist informed about any supportive Ayurvedic care being used</li>
                <li>We encourage families to set expectations around symptom management and quality of life, rather than expecting a permanent cure</li>
              </ul>
            </div>


            {/* Section 14 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic supportive care for nephrotic syndrome can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation typically involves a detailed case history review, medical report analysis, and constitution assessment, followed by a personalized supportive care plan designed to work alongside your nephrologist's treatment.
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