import Link from "next/link";
import {
  Phone,
  MapPin,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";


export default function BalpradaNaturopathyCenter() {
  const faqs = [
    {
      q: "Is naturopathy at Balprada suitable for everyone?",
      a: "Suitability is decided by the doctor after reviewing your health history, current condition and medication. It is not offered as a fixed programme for all patients.",
    },
    {
      q: "Can naturopathy replace my current medical treatment?",
      a: "No. At Balprada, naturopathy is designed to work alongside Ayurvedic consultation and any ongoing treatment, not as a replacement for it.",
    },
    {
      q: "Do I need to stay at the ashram for naturopathy care?",
      a: "Many patients choose to stay for a more disciplined routine, though your doctor will guide you on what suits your specific case and travel convenience.",
    },
    {
      q: "How is naturopathy connected to other facilities at Balprada?",
      a: "It is often combined with yoga, panchakarma, meditation or physiotherapy, depending on what the doctor recommends after assessment.",
    },
    {
      q: "When can I visit for a first consultation?",
      a: "The ashram and clinic are open seven days a week, with consultation timing from 10:00 AM to 2:00 PM, and free OPD available on the 15th of every month.",
    },
    {
      q: "Which Balprada branch should I visit for naturopathy guidance?",
      a: "Either branch can guide you initially — the main branch in Village Bhidwari or the Moradabad branch in Sector-13 — though it's best to call ahead before visiting.",
    },
    {
      q: "What should I bring to my first naturopathy consultation?",
      a: "Bring past medical reports, a list of current medicines and details of any allergies or mobility concerns so the doctor can plan safely.",
    },
    {
      q: "Can family members stay with me during the naturopathy programme?",
      a: "Yes, families are welcomed as part of the care journey and often stay together during the ashram-based routine.",
    },
  ];


  return (
    <main className="bg-white">
      <Banner />


      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">


          {/* Main Content */}
          <div className="flex-1 order-1">


            {/* Section 1 — About Naturopathy Care */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                About the Naturopathy Care at Balprada
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada Ayurvedic Hospital &amp; Research Center has been serving patients in Moradabad for 35 years through Ayurveda, in-house herbal medicines and ashram-based healing.</li>
                <li>The naturopathy center at Balprada is built on the belief that the body has its own natural capacity to heal when given the right environment, routine and guidance.</li>
                <li>Located away from the noise of the city, the ashram setting allows patients to slow down and follow a disciplined, nature-led healing routine.</li>
                <li>Naturopathy at Balprada is not a standalone service — it works alongside Ayurvedic consultation, medicines and lifestyle correction for a more complete treatment journey.</li>
                <li>People from Moradabad, across Uttar Pradesh and neighbouring regions visit Balprada looking for a naturopathy center that combines traditional wisdom with personalised, doctor-guided care.</li>
                <li>The center&apos;s long-standing presence in the region has made it a familiar name for families seeking natural, non-invasive support alongside conventional medical advice.</li>
              </ul>
            </div>


            {/* Section 2 — What is Naturopathy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What is Naturopathy and How Balprada Approaches It
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Naturopathy is a nature-based healing system that uses simple, non-invasive practices to support the body&apos;s own recovery process.</li>
                <li>At Balprada, naturopathy is planned around the individual rather than offered as a fixed, one-size-fits-all programme.</li>
                <li>Frequency, intensity and suitability of naturopathy practices are decided only after a proper assessment by the treating doctor.</li>
                <li>The approach focuses on natural therapies, detox support and lifestyle correction rather than quick fixes.</li>
                <li>Naturopathy is positioned as supportive care that works in coordination with the wider Ayurvedic treatment plan, not as a replacement for medical guidance.</li>
                <li>The philosophy draws on the idea that diet, routine, rest and environment all play a role in how the body heals, alongside medicine.</li>
              </ul>
            </div>


            {/* Section 3 — Core Principles */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Core Principles Behind Balprada&apos;s Naturopathy Programme
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Assessment before action</strong> — no naturopathy practice is assigned without first understanding the patient&apos;s history and current condition.</li>
                <li><strong>Coordination over isolation</strong> — naturopathy is always mapped against the patient&apos;s existing Ayurvedic treatment plan.</li>
                <li><strong>Gradual progress</strong> — routines are introduced step by step rather than all at once, respecting the patient&apos;s pace and comfort.</li>
                <li><strong>Consistency and discipline</strong> — the ashram structure is designed to help patients maintain a steady daily rhythm.</li>
                <li><strong>Doctor-led supervision</strong> — every adjustment to the naturopathy plan goes through the treating vaidya, not a generic template.</li>
              </ul>
            </div>


            {/* Section 4 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Balprada as a Naturopathy Center in Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada carries a legacy built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji, blending decades of Ayurvedic wisdom with a service-first approach.</li>
                <li>The center has 35 years of experience in natural, Ayurveda-based care, supported by experienced doctors and vaidyas.</li>
                <li>Both the main branch in Village Bhidwari and the Moradabad branch in Sector-13, New Moradabad offer accessible locations for patients across the district.</li>
                <li>The ashram environment is designed to be calm and disciplined, which supports the kind of routine that naturopathy depends on.</li>
                <li>Balprada emphasises unmatched quality of in-house herbal medicines alongside its naturopathy and wellness facilities.</li>
                <li>Every naturopathy plan is coordinated with the patient&apos;s ongoing Ayurvedic treatment, medical history and current medication.</li>
                <li>The combination of ashram living, experienced vaidyas and an in-house pathology lab means naturopathy is never delivered as a disconnected add-on.</li>
              </ul>
            </div>


            {/* Section 5 — Therapies and Practices */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Naturopathy Therapies and Practices at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Natural therapies that work with the body&apos;s own healing rhythm rather than against it.</li>
                <li>Detox-focused routines designed to support internal cleansing as part of the broader care plan.</li>
                <li>Lifestyle correction guidance covering diet discipline, daily routine and rest.</li>
                <li>Close coordination with yoga sessions to build strength, balance and calm alongside naturopathy.</li>
                <li>Integration with panchakarma therapies where the doctor finds it suitable for the patient&apos;s condition.</li>
                <li>Meditation and breath awareness practices to support emotional steadiness during the healing journey.</li>
                <li>Physiotherapy support where mobility, strength or recovery needs are identified.</li>
                <li>Pathology testing through Balprada&apos;s in-house lab to track progress with reliable diagnostics.</li>
                <li>Structured daily timing, with consultation hours between 10:00 AM and 2:00 PM, helping patients build predictable routines around their therapies.</li>
              </ul>
            </div>


            {/* Section 6 — How Naturopathy Works with Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Naturopathy Works Alongside Ayurvedic Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The care journey at Balprada begins with a detailed consultation where the doctor reviews the patient&apos;s concern, history, reports and current medication.</li>
                <li>Based on this review, an Ayurvedic plan is created using Balprada&apos;s own medicines, along with diet discipline and lifestyle correction where needed.</li>
                <li>Naturopathy, yoga and panchakarma are introduced as supportive facilities once the doctor identifies them as appropriate for the individual.</li>
                <li>Regular follow-up visits help the team track progress, adjust the plan and support the patient in staying consistent with their routine.</li>
                <li>This four-step process — consultation, Ayurvedic plan, supportive facilities, follow-up — keeps naturopathy connected to a structured, doctor-led pathway rather than being an isolated activity.</li>
                <li>Follow-up visits also give patients a chance to raise questions about how their naturopathy routine is progressing and whether adjustments are needed.</li>
              </ul>
            </div>


            {/* Section 7 — Difference from Wellness Retreat */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Difference Between Naturopathy at Balprada and a General Wellness Retreat
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A general wellness retreat often follows a fixed schedule for all visitors, while Balprada&apos;s naturopathy plan is shaped around each patient&apos;s medical assessment.</li>
                <li>Balprada&apos;s programme is anchored to ongoing Ayurvedic treatment, so naturopathy sits inside a documented care plan rather than being a one-time experience.</li>
                <li>Access to an in-house pathology lab means progress can be tracked with actual diagnostic data, not just subjective wellbeing.</li>
                <li>The presence of experienced vaidyas means naturopathy recommendations are reviewed against the patient&apos;s medical history and current medication.</li>
                <li>Follow-up care continues beyond the visit itself, keeping the naturopathy routine connected to the patient&apos;s longer-term health goals.</li>
              </ul>
            </div>


            {/* Section 8 — Health Concerns Supported */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Health Concerns Supported Through Naturopathy and Ayurveda at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Kidney and urinary concerns, including support for kidney function, swelling and diabetes-linked kidney issues.</li>
                <li>Liver and digestive health, covering fatty liver, jaundice and weak digestion.</li>
                <li>Cancer supportive care focused on strength, diet guidance, energy and emotional balance during serious illness.</li>
                <li>Heart and lifestyle-related concerns such as blood pressure, diabetes, weight and stress.</li>
                <li>Diabetes and thyroid imbalance, with personalised support for blood sugar and metabolic health.</li>
                <li>Women&apos;s wellness concerns including hormonal balance, menstrual health and general weakness.</li>
                <li>Naturopathy is used as a complementary layer of care across these concerns, always guided by the treating doctor.</li>
              </ul>
            </div>


            {/* Section 9 — What to Expect */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Naturopathy Visit
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The Balprada team first explains how the naturopathy programme works and how it fits into your existing treatment.</li>
                <li>Patients are asked to share existing health conditions, current medicines and any mobility concerns before beginning any practice.</li>
                <li>Sessions are conducted in a calm, guided environment with attentive support from the ashram team.</li>
                <li>The pace of the programme is adjusted according to the patient&apos;s comfort, age and health status.</li>
                <li>Naturopathy at Balprada is coordinated with the wider treatment plan rather than being offered in isolation.</li>
                <li>First-time visitors are encouraged to ask questions openly, so the team can clarify how each practice connects to their specific condition.</li>
              </ul>
            </div>


            {/* Section 10 — Precautions and Preparation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Precautions and Preparation Before Starting Naturopathy
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Share a complete medical history, including past surgeries, chronic conditions and current medication, before beginning any naturopathy practice.</li>
                <li>Carry recent diagnostic reports so the doctor can assess suitability accurately.</li>
                <li>Inform the team about any mobility limitations, allergies or sensitivities in advance.</li>
                <li>Avoid starting any new therapy independently without first discussing it with the treating doctor.</li>
                <li>Plan travel and stay in advance, especially if visiting from outside Moradabad, so the initial consultation can be scheduled without delay.</li>
              </ul>
            </div>


            {/* Section 11 — Ashram Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Ashram Environment and Its Role in Healing
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada functions as both a clinic and an ashram, which shapes the way naturopathy is delivered here.</li>
                <li>The peaceful surroundings are meant to help patients step away from daily stress and focus on recovery.</li>
                <li>A disciplined daily schedule — consultation, therapy, rest and follow-up — is easier to maintain within the ashram setting.</li>
                <li>Family members are welcomed as part of the care journey, since many patients travel with relatives for extended stays.</li>
                <li>Organic food offered at Balprada complements the naturopathy and Ayurvedic routine with clean, supportive nutrition.</li>
                <li>The rhythm of ashram life — early routines, shared meals and quiet surroundings — is often cited by patients as a meaningful part of their recovery experience.</li>
              </ul>
            </div>


            {/* Section 12 — Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities That Support the Naturopathy Programme
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Panchakarma therapies planned according to individual assessment for cleansing and balance.</li>
                <li>Yoga sessions that build discipline, strength and calm alongside naturopathy practices.</li>
                <li>Guided meditation for emotional steadiness and restorative rest.</li>
                <li>Physiotherapy support for safe movement and recovery.</li>
                <li>Balprada&apos;s own pathology lab for blood, urine and diagnostic testing.</li>
                <li>Organic food service that aligns daily nutrition with the naturopathy and Ayurvedic care plan.</li>
                <li>A coordinated facility structure that allows the doctor to bring together several supportive services under a single treatment plan.</li>
              </ul>
            </div>


            {/* Section 13 — Role of Diet and Routine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Role of Diet and Daily Routine in Naturopathy
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Diet discipline is treated as a core part of the naturopathy plan, not a side suggestion.</li>
                <li>Organic food service at the ashram is designed to support the broader healing routine patients follow during their stay.</li>
                <li>Daily timing — waking, meals, therapy sessions and rest — is structured to build consistency, which naturopathy depends on for results to show over time.</li>
                <li>Patients are guided on which routines to continue at home once they return, so the benefits of the ashram stay are not lost after departure.</li>
              </ul>
            </div>


            {/* Section 14 — Who Can Benefit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Benefit from Naturopathy at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients already undergoing Ayurvedic treatment for kidney, liver, heart, diabetes, thyroid or women&apos;s health concerns who want added lifestyle support.</li>
                <li>Individuals looking for a structured detox and routine-correction programme in a guided setting.</li>
                <li>People managing chronic lifestyle-related conditions who want a natural, non-invasive layer of care alongside medical treatment.</li>
                <li>Families seeking a peaceful, ashram-based environment for a relative&apos;s long-term healing journey.</li>
                <li>Anyone in Moradabad and nearby areas wanting Ayurveda and naturopathy under one roof, backed by 35 years of experience.</li>
                <li>Patients who have tried isolated wellness programmes before and are now looking for naturopathy that stays connected to a documented medical plan.</li>
              </ul>
            </div>


            {/* Section 15 — Why Moradabad Trusts Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Moradabad Trusts Balprada for Naturopathy and Ayurvedic Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>35 years of continuous service rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>Two accessible branches — the main ashram-based center and the Moradabad branch in Sector-13, New Moradabad.</li>
                <li>Free OPD consultation offered on the 15th of every month for wider community access.</li>
                <li>An integrated setup covering consultation, Ayurvedic medicine, naturopathy, yoga, panchakarma, physiotherapy and pathology under one care ecosystem.</li>
                <li>Genuine patient experiences highlighting attentive consultations, clear follow-up guidance and a supportive ashram atmosphere.</li>
                <li>A long-standing local presence that has allowed the center to build trust across generations of families in and around Moradabad.</li>
              </ul>
            </div>


            {/* Section 16 — How to Begin */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Begin Your Naturopathy Journey at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Call or WhatsApp the main branch at 8126364606 to enquire about consultation timing and naturopathy suitability.</li>
                <li>Visit the Moradabad branch in Sector-13, New Moradabad, where the vaidya is available on Sundays — calling ahead is recommended.</li>
                <li>Take advantage of the free OPD consultation available on the 15th of every month.</li>
                <li>Carry previous medical reports, current medication details and a clear description of your health concern to the first consultation.</li>
                <li>Discuss your interest in naturopathy directly with the doctor so it can be planned correctly alongside your Ayurvedic treatment.</li>
                <li>Ask the team about coordinating a stay if you are travelling from outside Moradabad and want to follow the ashram routine more closely.</li>
              </ul>
            </div>


            {/* Section 17 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring naturopathy care alongside Ayurvedic treatment can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. The initial consultation involves a detailed case review, assessment of your current health status, and a personalized plan that coordinates naturopathy with your existing treatment. For patients traveling from outside Moradabad, the hospital also assists with planning ashram-based stays for a more disciplined healing routine.
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


            {/* Section 18 — FAQs */}
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