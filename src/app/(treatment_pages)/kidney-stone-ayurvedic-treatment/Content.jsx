import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "Can Ayurveda dissolve kidney stones completely?",
      a: "Smaller stones may respond well to Ayurvedic litholytic support, but larger stones often need medical or surgical intervention. We assess this individually using your imaging reports.",
    },
    {
      q: "How long does Ayurvedic treatment take to dissolve a stone?",
      a: "This depends on stone size, composition, and location. Our physicians provide a realistic timeline after your initial evaluation.",
    },
    {
      q: "Is Ayurvedic treatment painful during stone passage?",
      a: "Some discomfort during natural passage is common, but we provide supportive herbal and dietary measures to help ease pain and spasms.",
    },
    {
      q: "Can Ayurvedic treatment prevent kidney stones from recurring?",
      a: "Diet, hydration, and doshic-balance measures can significantly reduce recurrence risk, though no treatment guarantees stones will never form again.",
    },
    {
      q: "Do I need a scan before starting Ayurvedic treatment?",
      a: "Yes, recent imaging (ultrasound or CT-KUB) is required so we can accurately assess stone size and choose a safe treatment approach.",
    },
    {
      q: "Will Balprada refer me to a urologist if needed?",
      a: "Yes. If a stone is too large or causing complications, we will guide you toward appropriate urological care rather than delaying necessary treatment.",
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
                Understanding Kidney Stones and the Ayurvedic Approach
              </h1>

              <p className="mb-4 text-gray-700">
                Kidney stones (Ashmari) are one of the most commonly seen urinary conditions, and Ayurveda has a long-documented approach to managing them. At Balprada Ayurvedic Hospital &amp; Research Center, our goal is to support stone dissolution, prevent recurrence, and manage symptoms — always in coordination with proper diagnostic imaging and urology guidance.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Kidney stones form when minerals and salts crystallize inside the kidney due to concentrated urine</li>
                <li>Ayurveda refers to this condition as Ashmari, classified based on the dominant dosha involved (Vataja, Pittaja, Kaphaja, or Shukraja Ashmari)</li>
                <li>Our approach focuses on breaking down smaller stones naturally where possible, easing pain, improving urine flow, and reducing the chance of new stones forming</li>
                <li>Larger stones or stones causing severe obstruction require urological evaluation — Ayurveda is not a substitute for emergency intervention in such cases</li>
                <li>Every patient is assessed with recent imaging (ultrasound/CT-KUB) before we finalize a treatment approach</li>
                <li>Treatment is never generic — it is shaped by stone size, location, composition, and the patient&apos;s overall constitution</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Common Are Kidney Stones
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the scale of this condition helps explain why a structured treatment approach matters.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Kidney stones affect a significant portion of the adult population at some point in their lives</li>
                <li>Men are statistically more prone to stone formation than women, though cases in women are rising</li>
                <li>Hot, dry climates and low water intake are known contributing factors to higher stone incidence in certain regions</li>
                <li>Once a person has had one stone episode, the likelihood of recurrence within the following years is considerably higher without preventive care</li>
                <li>This is why our approach places equal emphasis on treating the current stone and preventing the next one</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Kidney Stones
              </h2>

              <p className="mb-4 text-gray-700">
                Recognizing the underlying cause helps guide both treatment and prevention.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Insufficient water intake and chronic dehydration</li>
                <li>Diets high in oxalate-rich foods (spinach, beet greens, excess tea, certain nuts)</li>
                <li>Excess salt and animal protein consumption</li>
                <li>Sedentary lifestyle with limited physical activity</li>
                <li>Family history of kidney stones</li>
                <li>Recurrent urinary tract infections</li>
                <li>Underlying metabolic conditions affecting calcium, uric acid, or oxalate levels</li>
                <li>Certain medications and calcium/vitamin D supplements taken without medical guidance</li>
                <li>Obesity and associated metabolic changes</li>
                <li>Digestive disorders that affect how the body absorbs and processes minerals</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Kidney Stones
              </h2>

              <p className="mb-4 text-gray-700">
                Different stone types respond differently to treatment, which is why identifying the type matters.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Calcium oxalate stones — the most common type, often linked to diet and low fluid intake</li>
                <li>Uric acid stones — associated with high-protein diets, dehydration, and certain metabolic conditions</li>
                <li>Struvite stones — usually linked to chronic urinary tract infections</li>
                <li>Cystine stones — a rarer, hereditary type requiring specialized long-term management</li>
                <li>Knowing the stone type, where possible, allows us to tailor both herbal treatment and dietary guidance more precisely</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms to Watch For
              </h2>

              <p className="mb-4 text-gray-700">
                Early identification allows for timely and less invasive management.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sharp, cramping pain in the back or side, often radiating to the lower abdomen or groin</li>
                <li>Pain during urination</li>
                <li>Blood in the urine (pink, red, or brown-tinged)</li>
                <li>Cloudy or foul-smelling urine</li>
                <li>Frequent urge to urinate, sometimes passing only small amounts</li>
                <li>Nausea and vomiting during acute pain episodes</li>
                <li>Fever and chills, which may indicate an associated infection requiring urgent care</li>
                <li>A feeling of restlessness during pain episodes, often described as being unable to find a comfortable position</li>
              </ul>

              <p className="text-gray-700">
                If fever, severe pain, or inability to pass urine occurs, please seek immediate medical attention rather than waiting for an Ayurvedic consultation.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic Understanding of Ashmari
              </h2>

              <p className="mb-4 text-gray-700">
                Ayurvedic texts describe stone formation as a result of disturbed Kapha and Vata dosha combined with poor Agni (digestive fire), leading to the crystallization of Ama (toxins) and minerals in the urinary tract.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weak digestive fire is believed to contribute to improper metabolism of minerals</li>
                <li>Aggravated Kapha dosha is associated with the sticky, crystallizing quality that forms the stone&apos;s core</li>
                <li>Vata imbalance is linked to the pain and obstruction experienced when stones try to move</li>
                <li>Pitta involvement is often seen in cases with burning sensation and blood in urine</li>
                <li>Our treatment strategy addresses the root imbalance rather than only targeting the visible stone</li>
                <li>Restoring healthy Agni is considered essential not just for treating the current stone but for preventing mineral crystallization in the future</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Kidney Stone Care
              </h2>

              <p className="mb-4 text-gray-700">
                Every patient begins with a structured clinical evaluation before any treatment is recommended.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Case history and imaging review — understanding stone size, location, and number from recent scans</li>
                <li>Dosha-based assessment — identifying which doshic imbalance is dominant in the individual case</li>
                <li>Herbal formulations for stone management — selected based on stone size and composition where known</li>
                <li>Litholytic (stone-dissolving) support — used for smaller stones where dissolution is a realistic goal</li>
                <li>Pain and spasm management — herbal and dietary measures to ease discomfort during stone passage</li>
                <li>Diet and hydration counseling — tailored to the specific type of stone (calcium oxalate, uric acid, etc.)</li>
                <li>Preventive follow-up plan — designed to reduce the likelihood of future stone formation</li>
                <li>Progress tracking — periodic reassessment through imaging to confirm the stone is reducing in size or has passed</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Herbs Traditionally Used for Kidney Stones
              </h2>

              <p className="mb-4 text-gray-700">
                These herbs are used within supervised formulations, adjusted for each patient&apos;s constitution and stone characteristics.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pashanbheda (Bergenia ligulata) — traditionally associated with stone-breaking properties</li>
                <li>Gokshura (Tribulus terrestris) — supports healthy urine flow and urinary comfort</li>
                <li>Varuna (Crataeva nurvala) — commonly used in classical Ashmari formulations</li>
                <li>Punarnava (Boerhavia diffusa) — supports fluid balance and kidney function</li>
                <li>Kulattha (Horse gram) — traditionally used for its role in stone management</li>
                <li>Shilajit — used cautiously in select cases for mineral balance support</li>
                <li>Apamarga (Achyranthes aspera) — referenced in classical texts for urinary support</li>
                <li>Chandraprabha Vati — a classical compound formulation sometimes used for overall urinary tract health</li>
              </ul>

              <p className="text-gray-700">
                Self-medicating with these herbs without professional guidance is discouraged, as inappropriate use can sometimes worsen symptoms, interact with existing medication, or delay necessary medical care.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dietary Guidance for Kidney Stone Patients
              </h2>

              <p className="mb-4 text-gray-700">
                Diet plays a major preventive role and is central to our Ayurvedic recommendations.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Drinking adequate water throughout the day to keep urine dilute</li>
                <li>Reducing intake of oxalate-rich foods such as spinach, beet greens, and excess nuts</li>
                <li>Limiting salt and processed food consumption</li>
                <li>Moderating animal protein intake, especially red meat</li>
                <li>Including citrus fruits like lemon and orange (as tolerated) to support citrate levels</li>
                <li>Avoiding excessive tea, coffee, and carbonated beverages</li>
                <li>Favoring warm, freshly prepared meals over cold, stale, or fried foods</li>
                <li>Following stone-type-specific dietary adjustments once stone composition is known</li>
                <li>Spacing meals sensibly to support consistent digestive fire through the day</li>
                <li>Avoiding late-night heavy meals that can burden digestion and mineral metabolism overnight</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Kidney Stones
              </h2>

              <p className="mb-4 text-gray-700">
                Certain Panchakarma-linked procedures are considered supportive for urinary health, applied selectively based on the patient&apos;s condition.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Basti (medicated enema therapies) may be considered in select cases to support Vata balance and urinary function</li>
                <li>Any procedure is chosen only after assessing stone size, location, and the patient&apos;s overall health</li>
                <li>Larger, obstructing stones are not treated with Panchakarma alone and require urological management first</li>
                <li>Mild internal oleation and supportive therapies may be used alongside herbal treatment in appropriate cases</li>
                <li>All therapy decisions are individualized — this is never a one-size-fits-all protocol</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Ayurveda Is Not Enough
              </h2>

              <p className="mb-4 text-gray-700">
                We believe in being transparent about the limits of Ayurvedic stone management.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Stones larger than what can realistically dissolve through herbal treatment often require lithotripsy or surgical removal</li>
                <li>Stones causing complete obstruction, infection, or worsening kidney function need urgent urological care</li>
                <li>Recurrent stones despite Ayurvedic and dietary measures should be evaluated for an underlying metabolic cause</li>
                <li>Stones associated with a single functioning kidney require particularly cautious, closely monitored management</li>
                <li>We coordinate with urologists when a case falls outside the scope of safe Ayurvedic management, rather than delaying care</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Choose Balprada Ayurvedic Hospital
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Experienced physicians with specific focus on urinary and kidney-related conditions</li>
                <li>Treatment plans based on imaging findings, not guesswork</li>
                <li>Honest guidance on when a case needs urological referral</li>
                <li>In-house diagnostic facilities to track stone size and progress over time</li>
                <li>A calm, patient-first environment for managing a condition that is often physically distressing</li>
                <li>Continued follow-up support to help prevent recurrence long after the initial stone episode</li>
                <li>A team approach where herbal treatment, diet, and lifestyle guidance are coordinated together rather than treated separately</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventing Future Kidney Stones
              </h2>

              <p className="mb-4 text-gray-700">
                Prevention is a core part of our long-term care philosophy.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintaining consistent daily water intake as a lifelong habit, not just during an active stone episode</li>
                <li>Periodic follow-up to monitor for new stone formation, especially in recurrence-prone patients</li>
                <li>Continuing dietary modifications even after the current stone has resolved</li>
                <li>Addressing any underlying metabolic or digestive imbalance identified during treatment</li>
                <li>Staying physically active to support overall metabolic health</li>
                <li>Reviewing any new medications or supplements with your physician before starting them, as some can increase stone risk</li>
              </ul>
            </div>

            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Consultation at Balprada
              </h2>

              <p className="mb-6 text-black">
                Patients experiencing kidney stone symptoms can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. Please bring recent ultrasound or CT-KUB reports so our physicians can assess the stone&apos;s size, location, and condition before recommending a safe and personalized supportive care plan.
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