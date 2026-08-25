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
                Ayurvedic Hospital in Moradabad: Complete Healing Under One Roof at Balprada
              </h1>

              <p className="text-gray-700 mb-4">
                When it comes to finding a trusted Ayurvedic hospital in Moradabad,
                patients look for more than just herbal remedies — they look for
                authentic diagnosis, experienced physicians, hygienic
                infrastructure, and treatments rooted in genuine Ayurvedic
                science. Balprada Ayurvedic Hospital &amp; Research Center has
                emerged as one of the most reliable names in Moradabad for
                patients seeking natural, side-effect-free healing for chronic
                and lifestyle-related health conditions.
              </p>

              <p className="text-gray-700">
                Located in the heart of Uttar Pradesh, Moradabad has traditionally
                relied on allopathic treatment for most ailments. However, a
                growing number of patients are now turning to Ayurveda — not as
                an alternative, but as a primary system of medicine — to treat
                conditions that modern medicine often manages only through
                long-term dependency on drugs. Balprada bridges this gap by
                offering classical Ayurvedic treatment backed by modern
                diagnostic support, making it a preferred destination for
                patients across Moradabad, Rampur, Amroha, Sambhal, and
                neighboring districts.
              </p>
            </div>

            {/* Section 2 — Why Ayurvedic Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose an Ayurvedic Hospital Over General Treatment?
              </h2>

              <p className="text-gray-700 mb-4">
                Ayurveda works on the principle of treating the root cause of a
                disease rather than just suppressing its symptoms. Conditions
                like arthritis, spinal disorders, skin diseases, infertility,
                digestive disorders, and stress-related illnesses often respond
                far better to Ayurvedic protocols that combine internal
                medicines, Panchakarma therapies, diet correction, and lifestyle
                modification.
              </p>

              <p className="text-gray-700">
                At Balprada, this approach is followed with strict adherence to
                classical Ayurvedic texts while ensuring that hygiene standards,
                doctor qualifications, and treatment protocols meet contemporary
                healthcare expectations. Patients don&apos;t have to choose
                between authenticity and quality — they get both.
              </p>
            </div>

            {/* Section 3 — Comprehensive Treatment Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Comprehensive Treatment Facilities at Balprada Ayurvedic Hospital
              </h2>

              <p className="text-gray-700 mb-6">
                Balprada Ayurvedic Hospital &amp; Research Center in Moradabad is
                equipped to handle a wide spectrum of health concerns through
                dedicated departments and specialized therapy units.
              </p>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Panchakarma Therapy Center
                  </h3>
                  <p className="text-gray-700">
                    Panchakarma is the cornerstone of Ayurvedic detoxification,
                    and Balprada houses a fully functional Panchakarma unit
                    offering Vamana, Virechana, Basti, Nasya, and Raktamokshana
                    under expert supervision. These therapies are widely sought
                    after for chronic joint pain, obesity, skin disorders, and
                    stress management.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Orthopedic and Joint Care
                  </h3>
                  <p className="text-gray-700">
                    Patients suffering from arthritis, spondylitis, sciatica, and
                    slip disc frequently visit Balprada for non-surgical
                    Ayurvedic management. Treatments like Kati Basti, Greeva
                    Basti, and specialized Abhyanga therapies help reduce
                    inflammation and restore mobility without the risks
                    associated with long-term painkiller use.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Skin and Hair Treatment
                  </h3>
                  <p className="text-gray-700">
                    Chronic skin conditions such as psoriasis, eczema, and
                    vitiligo, along with hair fall and premature greying, are
                    treated through internal Ayurvedic medication combined with
                    external therapies, dietary correction, and detox protocols.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Digestive and Metabolic Disorders
                  </h3>
                  <p className="text-gray-700">
                    From acidity and IBS to diabetes management and
                    weight-related concerns, Balprada&apos;s physicians design
                    personalized treatment plans based on each patient&apos;s
                    Prakriti (body constitution) rather than following a
                    one-size-fits-all approach.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Women&apos;s Health and Infertility Care
                  </h3>
                  <p className="text-gray-700">
                    Balprada also provides Ayurvedic solutions for PCOD/PCOS,
                    irregular menstrual cycles, and infertility, combining
                    herbal medication with Panchakarma-based detox to improve
                    reproductive health naturally.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Kidney and Urinary Care
                  </h3>
                  <p className="text-gray-700">
                    One of Balprada&apos;s core specializations is Ayurvedic
                    management of kidney and urinary disorders — an area where
                    the hospital has built particularly strong expertise.
                    Patients with kidney stones, recurrent UTIs, elevated
                    creatinine levels, proteinuria, and even early-to-moderate
                    stages of chronic kidney disease (CKD) are treated through a
                    combination of Ayurvedic nephro-protective herbs,
                    specialized diet plans, and detox therapies aimed at
                    reducing the toxic load on the kidneys.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Unlike conventional treatment, which often moves quickly
                    toward dialysis for declining kidney function, Balprada&apos;s
                    approach focuses on slowing disease progression, managing
                    creatinine and urea levels naturally, and improving overall
                    renal function where possible. This has made the hospital a
                    go-to destination for patients in Moradabad and nearby
                    districts specifically searching for non-dialysis kidney
                    care options.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Liver Care and Hepatic Disorders
                  </h3>
                  <p className="text-gray-700">
                    Balprada also runs a dedicated liver care program addressing
                    conditions such as fatty liver (both alcoholic and
                    non-alcoholic), jaundice, hepatitis-related complications,
                    and early liver fibrosis. Treatment typically combines
                    liver-protective (hepatoprotective) herbal formulations with
                    Panchakarma-based detoxification to reduce inflammation and
                    support liver regeneration.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Patients dealing with elevated liver enzymes, sluggish
                    digestion linked to liver dysfunction, or fatty liver
                    detected during routine checkups increasingly consult
                    Balprada as a first-line natural intervention before their
                    condition progresses further.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Cardiac and Heart Health Support
                  </h3>
                  <p className="text-gray-700">
                    For patients managing high blood pressure, high cholesterol,
                    mild cardiac weakness, or looking to strengthen heart
                    function alongside their existing cardiology treatment,
                    Balprada offers Ayurvedic cardiac support programs. These
                    combine heart-friendly herbal formulations (Hridya
                    dravyas), Panchakarma detox to improve circulation, and
                    structured dietary and lifestyle correction based on
                    classical Ayurvedic cardiology principles.
                  </p>
                  <p className="text-gray-700 mt-3">
                    This is offered as a complementary, supportive approach —
                    working alongside a patient&apos;s cardiologist rather than
                    replacing emergency cardiac care — with a focus on improving
                    long-term heart health, managing risk factors like
                    cholesterol and hypertension, and reducing dependency on
                    multiple medications over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    9. Stress, Sleep, and Lifestyle Disorders
                  </h3>
                  <p className="text-gray-700">
                    With rising cases of anxiety, insomnia, and lifestyle-induced
                    fatigue, the hospital offers Shirodhara, Shiroabhyanga, and
                    customized herbal regimens to restore mental and physical
                    balance.
                  </p>
                </div>

              </div>
            </div>

            {/* Section 4 — Experienced Physicians */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Experienced Physicians and Research-Backed Approach
              </h2>

              <p className="text-gray-700 mb-4">
                What sets Balprada apart as an Ayurvedic hospital in Moradabad is
                its research-oriented mindset. The physicians here don&apos;t
                merely prescribe generic remedies; they study each patient&apos;s
                case history, current lifestyle, and constitution before
                designing a treatment roadmap. This case-specific approach
                significantly improves treatment outcomes and reduces recovery
                time compared to generalized Ayurvedic practices found at
                smaller clinics.
              </p>

              <p className="text-gray-700">
                The hospital&apos;s team includes BAMS and MD (Ayurveda)
                qualified doctors who bring both academic grounding and
                practical clinical experience. Continuous research into
                classical formulations and their modern applications ensures
                that treatments remain both authentic and effective.
              </p>
            </div>

            {/* Section 5 — Hygiene & Infrastructure */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Hygiene, Infrastructure, and Patient Comfort
              </h2>

              <p className="text-gray-700 mb-4">
                A common concern patients have about Ayurvedic treatment centers
                is hygiene and infrastructure quality. Balprada addresses this
                directly with:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Clean, well-ventilated therapy rooms</li>
                <li>Trained therapists for Panchakarma procedures</li>
                <li>Separate consultation and treatment zones</li>
                <li>Pharmacy with in-house prepared classical medicines</li>
                <li>Comfortable waiting areas and transparent consultation processes</li>
              </ul>

              <p className="text-gray-700">
                This attention to infrastructure has made Balprada a trusted
                choice not just for local Moradabad residents but also for
                patients traveling from nearby towns specifically for
                specialized Ayurvedic care.
              </p>
            </div>

            {/* Section 6 — Why Moradabad Needed Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Moradabad Needed a Hospital Like Balprada
              </h2>

              <p className="text-gray-700 mb-4">
                Moradabad, known widely for its brassware industry, has
                historically had limited access to organized, research-backed
                Ayurvedic healthcare. Most Ayurvedic treatment in the region was
                previously available only through small clinics or unregistered
                practitioners, leaving patients uncertain about medicine quality
                and treatment authenticity.
              </p>

              <p className="text-gray-700">
                Balprada Ayurvedic Hospital &amp; Research Center was established
                to fill this exact gap — providing hospital-grade Ayurvedic care
                with proper documentation, qualified doctors, and standardized
                treatment protocols. This has made it possible for patients in
                Moradabad to access serious Ayurvedic intervention for chronic
                diseases without having to travel to bigger cities like Delhi,
                Dehradun, or Haridwar.
              </p>
            </div>

            {/* Section 7 — Who Should Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Visit Balprada Ayurvedic Hospital?
              </h2>

              <p className="text-gray-700 mb-4">
                You should consider consulting Balprada if you are dealing with:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Chronic joint pain, arthritis, or spinal issues that haven&apos;t improved with conventional treatment</li>
                <li>Kidney stones, recurrent UTIs, elevated creatinine, or early-stage CKD</li>
                <li>Fatty liver, elevated liver enzymes, jaundice, or hepatitis-related complications</li>
                <li>High blood pressure, high cholesterol, or a need for supportive heart health management</li>
                <li>Skin conditions like psoriasis, eczema, or persistent acne</li>
                <li>Digestive issues including acidity, bloating, or IBS</li>
                <li>Diabetes or metabolic syndrome requiring lifestyle-based management</li>
                <li>PCOD, PCOS, or fertility-related concerns</li>
                <li>Stress, anxiety, or sleep disorders</li>
                <li>A general desire to detox the body through Panchakarma</li>
              </ul>

              <p className="text-gray-700">
                Even patients without a specific ailment often visit for seasonal
                detoxification (Ritu Shodhana), which Ayurveda recommends for
                maintaining long-term health and immunity.
              </p>
            </div>

            {/* Section 8 — The Balprada Difference */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Difference
              </h2>

              <p className="text-gray-700 mb-4">
                Unlike many Ayurvedic centers that rely solely on external
                therapies for visible relief, Balprada focuses on internal
                correction alongside external treatment. This dual approach —
                addressing both symptoms and root causes — is what leads to
                sustainable results rather than temporary relief.
              </p>

              <p className="text-gray-700">
                Additionally, patient education is a core part of the treatment
                process at Balprada. Doctors take time to explain dietary
                changes, daily routine (Dinacharya) adjustments, and seasonal
                regimen (Ritucharya) practices that patients can follow even
                after their treatment course ends, ensuring long-term wellness
                rather than dependency on the hospital.
              </p>
            </div>

            {/* Section 9 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>

              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their
                health concerns can book a consultation at Balprada Ayurvedic
                Hospital &amp; Research Center in Moradabad. The initial
                consultation typically involves a detailed case history review,
                pulse diagnosis (Nadi Pariksha), and constitution assessment,
                followed by a personalized treatment plan. For patients
                traveling from outside Moradabad, the hospital also assists with
                treatment planning to accommodate multi-day Panchakarma therapy
                schedules.
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

            {/* Section 10 — FAQs */}
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