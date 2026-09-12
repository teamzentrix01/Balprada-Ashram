import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospital() {
  const faqs = [
    {
      q: "Can Ayurveda replace dialysis completely?",
      a: "No. Ayurveda cannot perform the filtering function dialysis provides. It may offer supportive care alongside dialysis, not instead of it.",
    },
    {
      q: "Can early-stage kidney disease avoid dialysis through Ayurveda?",
      a: "In some early-stage cases, supportive care combined with lifestyle changes may help slow progression, but this must be closely monitored by a nephrologist.",
    },
    {
      q: "Is it safe to take Ayurvedic herbs while on dialysis?",
      a: "Only under strict professional supervision, since many herbs are unsafe for dialysis patients. Self-medication should always be avoided.",
    },
    {
      q: "Will Balprada tell me to stop dialysis?",
      a: "No. We never advise stopping or delaying medically necessary dialysis. Our care is designed to work alongside your nephrology treatment.",
    },
    {
      q: "What can Ayurveda realistically help with during dialysis?",
      a: "Supportive areas such as energy levels, appetite, digestion, sleep, and general comfort between sessions.",
    },
    {
      q: "Should I discuss Ayurvedic treatment with my nephrologist?",
      a: "Yes, always. We encourage open communication between our physicians and your treating nephrologist for your safety.",
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
                Understanding This Topic Honestly
              </h1>

              <p className="mb-4 text-gray-700">
                Many patients and families search for a &quot;dialysis alternative&quot; hoping to avoid or delay this treatment. At Balprada Ayurvedic Hospital &amp; Research Center, we believe it&apos;s important to address this search directly and honestly before going further: Ayurveda is not a medical substitute for dialysis in patients who need it. What we offer is supportive, complementary Ayurvedic care that works alongside dialysis and nephrology treatment — never as a replacement for it.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dialysis is a life-sustaining medical treatment for patients whose kidneys can no longer filter blood adequately on their own</li>
                <li>No herbal or Ayurvedic treatment can perform the filtering function that dialysis provides once kidney function has declined to that stage</li>
                <li>Our role is to support the patient&apos;s overall well-being, help manage symptoms, and work alongside the dialysis and nephrology team — not to delay or replace a medically necessary treatment</li>
                <li>Patients considering reducing or stopping dialysis in favor of Ayurveda alone should discuss this only with their nephrologist, never on the basis of herbal treatment claims</li>
                <li>This page is written to give clear, responsible information, not to suggest dialysis can be avoided through Ayurveda</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When People Search for a &quot;Dialysis Alternative&quot;
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding why patients look for alternatives helps us address their real concerns responsibly.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fear and anxiety about starting or continuing a long-term dialysis routine</li>
                <li>Concerns about the physical and emotional toll of repeated dialysis sessions</li>
                <li>Hope that early-stage kidney disease can be managed without progressing to dialysis</li>
                <li>Financial and logistical concerns related to ongoing dialysis treatment</li>
                <li>A general desire for a more &quot;natural&quot; approach to kidney health</li>
              </ul>

              <p className="text-gray-700">
                We take these concerns seriously, but we address them with medically responsible guidance rather than false reassurance.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where Ayurveda Can Genuinely Help
              </h2>

              <p className="mb-4 text-gray-700">
                Ayurvedic supportive care has a meaningful role, but it is important to understand exactly where that role fits.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>In early-stage kidney disease, before dialysis is medically required, Ayurvedic and lifestyle measures may help support kidney function and potentially slow progression, alongside nephrology monitoring</li>
                <li>In patients already on dialysis, Ayurvedic care may help support energy levels, appetite, digestion, sleep, and general well-being</li>
                <li>In post-dialysis recovery periods, gentle supportive measures may help patients feel more comfortable between sessions</li>
                <li>In managing associated conditions like diabetes and high blood pressure, Ayurvedic lifestyle support may help reduce the strain that worsens kidney function over time</li>
                <li>In no case does this supportive role extend to replacing the filtering function that dialysis provides once it becomes medically necessary</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Not Consider Ayurveda as a Dialysis Substitute
              </h2>

              <p className="mb-4 text-gray-700">
                Clear boundaries matter for patient safety.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patients with a nephrologist-confirmed need for dialysis based on lab values and clinical assessment</li>
                <li>Patients experiencing symptoms of dangerous fluid or toxin buildup, such as severe swelling, breathlessness, or confusion</li>
                <li>Patients with rapidly worsening kidney function where timely dialysis is essential to prevent serious complications</li>
                <li>Anyone advised by their treating nephrologist that dialysis is not optional at their current stage</li>
              </ul>

              <p className="text-gray-700">
                In these situations, we strongly encourage patients to follow their nephrologist&apos;s guidance and not delay dialysis based on Ayurvedic treatment alone.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Ayurvedic Perspective on Supporting Kidney Function
              </h2>

              <p className="mb-4 text-gray-700">
                Ayurveda approaches kidney decline through the lens of Apana Vata imbalance, weakened Agni (digestive fire), and the accumulation of Ama (toxins) in the body.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Strengthening digestive fire is believed to reduce the internal toxin load the kidneys must process</li>
                <li>Balancing Apana Vata is thought to support the body&apos;s natural elimination processes</li>
                <li>These principles guide our supportive treatment approach, but they do not override the physiological reality of advanced kidney failure, which requires mechanical filtration through dialysis</li>
                <li>Our physicians are trained to recognize when a patient&apos;s condition is beyond what Ayurvedic support alone can meaningfully influence</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach for Patients Exploring Ayurvedic Support
              </h2>

              <p className="mb-4 text-gray-700">
                Every patient who comes to us with concerns about dialysis goes through a structured, honest evaluation process.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Review of current nephrology reports — understanding GFR, creatinine trends, and the nephrologist&apos;s current recommendations</li>
                <li>Honest conversation about disease stage — explaining clearly whether the patient&apos;s condition allows room for supportive-only care or requires dialysis</li>
                <li>Customized herbal and dietary support — designed to work alongside, not instead of, the patient&apos;s current medical treatment</li>
                <li>Symptom-focused care for dialysis patients — addressing fatigue, appetite, sleep, and general comfort</li>
                <li>Coordination with the treating nephrologist — we encourage and support open communication between our physicians and your medical team</li>
                <li>Ongoing monitoring — tracking reports over time rather than making one-time assumptions about the patient&apos;s condition</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Herbs Used in Supportive Kidney Care
              </h2>

              <p className="mb-4 text-gray-700">
                These herbs are used only within supervised formulations, adjusted to the patient&apos;s stage of kidney function and current treatment.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Punarnava (Boerhavia diffusa) — traditionally used to support fluid balance</li>
                <li>Gokshura (Tribulus terrestris) — supportive for general urinary comfort</li>
                <li>Varuna (Crataeva nurvala) — used in classical formulations related to urinary and kidney health</li>
                <li>Guduchi (Tinospora cordifolia) — traditionally valued for supporting the body&apos;s detoxification processes</li>
                <li>Shatavari (Asparagus racemosus) — used for general strength and nourishment support</li>
              </ul>

              
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dietary Guidance for Patients Seeking Supportive Care
              </h2>

              <p className="mb-4 text-gray-700">
                Diet plays an important supportive role, always aligned with the patient&apos;s current medical restrictions.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Following protein, sodium, potassium, and phosphorus restrictions exactly as advised by the treating nephrologist</li>
                <li>Managing fluid intake carefully, especially important for dialysis patients with specific fluid allowances</li>
                <li>Choosing fresh, easily digestible foods within medically approved limits</li>
                <li>Avoiding processed and preserved foods high in sodium</li>
                <li>Favoring warm, freshly prepared meals over heavy or fried foods</li>
                <li>Eating smaller, more frequent meals to support appetite and digestion, especially around dialysis sessions</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Support Alongside Dialysis
              </h2>

              <p className="mb-4 text-gray-700">
                Beyond diet and herbs, certain lifestyle measures can genuinely improve day-to-day comfort for dialysis patients.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gentle rest and sleep hygiene practices to support recovery between sessions</li>
                <li>Light, doctor-approved movement to help maintain energy and reduce stiffness</li>
                <li>Stress-reducing practices such as slow breathing, as tolerated</li>
                <li>Emotional and family support, since the dialysis journey affects mental well-being as much as physical health</li>
                <li>Maintaining consistency in follow-up visits with both the nephrology and Ayurvedic care teams</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Honesty Matters in This Conversation
              </h2>

              <p className="mb-4 text-gray-700">
                We choose to address this topic directly because we believe patients deserve accurate information, not false hope.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Claims that Ayurveda can fully replace dialysis are not medically accurate and can be dangerous if they lead patients to delay necessary treatment</li>
                <li>Kidney failure that has progressed to requiring dialysis involves a level of function loss that herbal treatment cannot reverse</li>
                <li>Our responsibility as healthcare providers is to support patients safely, not to promise outcomes we cannot deliver</li>
                <li>We would rather lose a patient&apos;s business than compromise their safety with misleading claims</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Patients Still Choose Balprada for Supportive Care
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Experienced Ayurvedic physicians who give clear, honest guidance about what is realistically possible</li>
                <li>A structured approach based on actual medical reports, not generic promises</li>
                <li>Genuine coordination encouraged with the patient&apos;s nephrology team</li>
                <li>Support focused on comfort, symptom relief, and quality of life for dialysis patients</li>
                <li>A calm, understanding environment for patients and families navigating a difficult diagnosis</li>
              </ul>
            </div>

            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book a Consultation at Balprada
              </h2>

              <p className="mb-6 text-black">
                Patients and families exploring supportive Ayurvedic care alongside dialysis or nephrology treatment can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center in Moradabad. Our physicians review current medical reports, discuss the patient&apos;s stage and treatment needs honestly, and design a safe supportive care plan without advising patients to stop or delay medically necessary dialysis.
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