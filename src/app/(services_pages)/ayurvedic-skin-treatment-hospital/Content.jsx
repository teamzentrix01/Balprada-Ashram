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
      q: "Can Ayurveda cure psoriasis or vitiligo completely?",
      a: "Ayurveda focuses on supporting skin health and managing symptoms; these are chronic conditions with a variable course, and results differ between patients.",
    },
    {
      q: "Is Ayurvedic treatment safe to combine with dermatological medication?",
      a: "Generally yes, when coordinated with your dermatologist; avoid combining new topical products without checking for interactions or sensitivities.",
    },
    {
      q: "How long does Ayurvedic skin treatment usually take to show results?",
      a: "Timelines vary widely by condition; chronic conditions typically require several months of consistent treatment and monitoring.",
    },
    {
      q: "Will I need to change my diet significantly?",
      a: "Most patients receive some dietary adjustments, particularly reducing specific trigger foods identified during assessment.",
    },
    {
      q: "Are Panchakarma therapies like Virechana safe for everyone?",
      a: "No, suitability is assessed individually; these therapies are only recommended after confirming the patient is medically fit.",
    },
    {
      q: "Can children be treated for skin conditions here?",
      a: "Yes, age-appropriate protocols are available, with gentler formulations and therapies suited to younger patients.",
    },
    {
      q: "Will herbal treatment cause skin purging or temporary worsening?",
      a: "Some patients experience temporary changes as the skin adjusts; your physician will explain what to expect and monitor your progress closely.",
    },
    {
      q: "Do I need any tests before starting skin treatment?",
      a: "Depending on the condition, your physician may recommend basic blood tests to check for underlying factors such as nutritional deficiencies or allergies.",
    },
    {
      q: "Can I use my regular cosmetics alongside Ayurvedic skin treatment?",
      a: "Your physician will advise which products to pause temporarily, since some cosmetics can interfere with topical herbal applications or aggravate sensitive skin.",
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
                Ayurvedic Skin Treatment at Balprada Hospital
              </h1>


              <p className="text-gray-700 mb-4">
                Skin conditions rarely stay only skin-deep — chronic acne, eczema, or psoriasis can affect confidence, sleep, and daily comfort just as much as physical appearance. At Balprada Hospital, our ayurvedic skin treatment programme looks beyond surface symptoms to the underlying imbalances that often drive recurring skin conditions, combining herbal therapy, targeted Panchakarma procedures, and diet correction for long-term skin health.
              </p>
            </div>


            {/* Section 2 — Understanding Skin Disorders in Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Skin Disorders in Ayurveda
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Skin conditions are classified under Twak Roga in classical Ayurvedic texts, with most disorders linked to an imbalance involving Pitta dosha, though Vata and Kapha frequently play a contributing role.</li>
                <li>Ayurveda considers the skin a reflection of internal health — digestion, blood quality (Rakta), and toxin accumulation (Ama) are all seen as directly influencing skin condition.</li>
                <li>Kushtha, a broad classical category covering various skin disorders, is further divided based on the dominant dosha and specific presentation, guiding which treatment approach is most suitable.</li>
                <li>Chronic skin conditions are often linked to prolonged Pitta aggravation from factors such as spicy or fried food, excessive sun exposure, stress, and disrupted digestion.</li>
                <li>Many patients seek Ayurveda for skin concerns precisely because it looks at diet, gut health, and stress alongside topical symptoms, rather than addressing the skin in isolation.</li>
              </ul>
            </div>


            


            {/* Section 4 — Skin Conditions We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Skin Conditions We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Acne and acne-related scarring</li>
                <li>Eczema and atopic dermatitis-related dryness, itching, and inflammation</li>
                <li>Psoriasis, as a supportive approach alongside dermatological management</li>
                <li>Pigmentation concerns, including uneven skin tone and dark patches</li>
                <li>Vitiligo, as a complementary approach alongside dermatological care</li>
                <li>Urticaria (hives) and chronic itching without a clearly identified trigger</li>
                <li>Fungal skin infections, alongside appropriate antifungal management where needed</li>
                <li>Premature skin ageing linked to poor digestion, dehydration, or chronic stress</li>
                <li>General skin dryness, dullness, and sensitivity related to lifestyle and dietary factors</li>
                <li>Recurring skin allergies where dietary or environmental triggers are suspected</li>
              </ul>
            </div>


            {/* Section 5 — Our Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Treatment Approach
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Assessment and Root-Cause Identification
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every consultation begins with a review of the skin condition's history, duration, triggers, and any previous dermatological diagnosis or treatment.</li>
                    <li>The patient's Prakriti (constitution) and current dosha imbalance are assessed, along with digestion, sleep, and stress patterns that may be contributing factors.</li>
                    <li>Dietary habits are reviewed in detail, since certain foods are commonly identified as aggravating factors for Pitta-dominant skin conditions.</li>
                    <li>Reports and medication from the patient's dermatologist are reviewed so the Ayurvedic plan works alongside, rather than in conflict with, existing treatment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Personalised Herbal Formulations
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Internal herbal medicine is prescribed based on the specific skin condition, its dosha pattern, and the patient's overall constitution.</li>
                    <li>Classical herbs commonly referenced in skin-care protocols include Neem, Manjistha, Khadira, and Haridra (turmeric), chosen for their traditional association with blood purification and skin health.</li>
                    <li>Formulations often differ meaningfully between conditions — for example, protocols for dry, Vata-aggravated eczema typically differ from those used for inflamed, Pitta-dominant acne.</li>
                    <li>Topical herbal applications are introduced gradually, with patch testing where appropriate, and patients are advised against combining multiple new products at once.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Panchakarma and Blood-Purification Therapies
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Virechana (therapeutic purgation) is a classical therapy commonly used for Pitta-dominant skin conditions, chosen based on the patient's suitability and overall health.</li>
                    <li>Raktamokshana (therapeutic blood-letting), where clinically indicated, is used in select chronic skin conditions under strict supervision and only after careful assessment.</li>
                    <li>Lepa (herbal paste application) is used locally to help manage inflammation, itching, and specific lesion types.</li>
                    <li>Takradhara (buttermilk-based pouring therapy) may be recommended for conditions involving significant itching or Pitta aggravation.</li>
                    <li>All Panchakarma procedures are explained to the patient in advance, including expected sensations and any post-therapy care required.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Diet Correction (Pathya-Apathya)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A dosha-specific diet plan is created, generally reducing foods that aggravate Pitta — such as excessively spicy, fried, sour, or fermented items — for most inflammatory skin conditions.</li>
                    <li>Adequate hydration and fibre intake are emphasised to support digestion and toxin elimination, both considered central to skin health in Ayurveda.</li>
                    <li>Specific dietary triggers are identified where patients report a clear pattern between certain foods and symptom flare-ups.</li>
                    <li>Diet charts are revised as the skin condition responds, since dietary needs may shift through different phases of treatment.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Lifestyle and Stress Management
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Guidance on sun exposure, skin hygiene, and suitable clothing choices is provided based on the specific condition.</li>
                    <li>Stress management techniques, including yoga and pranayama, are introduced given the well-documented link between chronic stress and skin flare-ups.</li>
                    <li>Sleep hygiene is addressed, since disrupted sleep is commonly associated with worsening of inflammatory skin conditions.</li>
                    <li>Patients are guided on gentle, non-irritating skincare routines to use alongside their prescribed treatment.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 6 — Why Patients Choose Balprada Hospital for Skin Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada Hospital for Skin Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Treatment plans are built around the specific skin condition, its dosha pattern, and the patient's overall health — not a single formula applied to every skin complaint.</li>
                <li>Panchakarma and topical procedures are performed by trained therapists under the direct supervision of qualified Ayurvedic physicians.</li>
                <li>Our in-house pharmacy prepares herbal formulations and topical applications under quality-controlled conditions.</li>
                <li>Patients are encouraged to continue any dermatological treatment already prescribed and to keep their dermatologist informed of Ayurvedic therapy.</li>
                <li>Follow-up consultations track visible skin changes alongside any relevant lab markers, rather than relying on assumption alone.</li>
                <li>Realistic timelines are discussed upfront, particularly for chronic conditions that are known to follow a fluctuating course.</li>
              </ul>
            </div>


            {/* Section 7 — Facilities Available at Balprada Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Available at Balprada Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dedicated treatment rooms for Panchakarma procedures relevant to skin conditions, including Virechana preparation and Lepa application.</li>
                <li>Trained therapists experienced in handling sensitive or inflamed skin conditions.</li>
                <li>In-house pharmacy for the preparation and quality control of internal herbal medicines and topical formulations.</li>
                <li>Consultation rooms where physicians review skin history and any relevant reports in detail.</li>
                <li>Diet counselling support to help translate dietary recommendations into practical daily meals.</li>
                <li>Coordination support for patients travelling from other cities who need to plan multi-day therapy visits.</li>
              </ul>
            </div>


            {/* Section 8 — What to Expect: The Treatment Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect: The Treatment Journey
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Step 1 – Consultation:</strong> Review of the skin condition's history, triggers, and any existing dermatological diagnosis or treatment.</li>
                <li><strong>Step 2 – Assessment:</strong> Evaluation of Prakriti, dosha imbalance, digestion, and lifestyle factors contributing to the condition.</li>
                <li><strong>Step 3 – Plan Design:</strong> A combination of herbal medicine, diet chart, and, where suitable, Panchakarma therapy is finalised.</li>
                <li><strong>Step 4 – Supervised Therapy:</strong> Any in-clinic procedures are scheduled with clear pre- and post-care instructions.</li>
                <li><strong>Step 5 – Progress Review:</strong> Follow-up consultations track visible changes in the skin condition and any reported symptom relief.</li>
                <li><strong>Step 6 – Long-Term Maintenance:</strong> Once symptoms stabilise, patients receive a maintenance routine covering diet and skincare to help sustain results.</li>
              </ul>
            </div>


            {/* Section 9 — Signs That Warrant a Dermatological Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That Warrant a Dermatological Consultation
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Any mole or skin lesion that is rapidly changing in size, shape, or colour</li>
                <li>Skin lesions that are not healing after a reasonable period</li>
                <li>Widespread or rapidly spreading rash, especially with fever or other systemic symptoms</li>
                <li>Signs of skin infection, such as increasing redness, warmth, swelling, or pus</li>
                <li>Severe itching that significantly disrupts sleep or daily activities</li>
                <li>Any skin symptom accompanied by unexplained weight loss or fatigue</li>
                <li>These signs should be evaluated by a dermatologist promptly, alongside any Ayurvedic care being considered.</li>
              </ul>
            </div>


            {/* Section 10 — Lifestyle Tips for Healthier Skin */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Tips for Healthier Skin
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Stay adequately hydrated throughout the day to support skin elasticity and toxin elimination.</li>
                <li>Limit excessive intake of fried, spicy, and heavily processed foods if you notice a pattern with skin flare-ups.</li>
                <li>Protect skin from prolonged, unprotected sun exposure, particularly during peak hours.</li>
                <li>Maintain a consistent, gentle skincare routine rather than frequently switching products.</li>
                <li>Manage stress through regular relaxation practices, given its documented link to skin flare-ups.</li>
                <li>Keep your dermatologist informed about any Ayurvedic treatment you are undergoing so both approaches remain coordinated.</li>
              </ul>
            </div>


            {/* Section 11 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Hospital. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan.
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


            {/* Section 12 — FAQs */}
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