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
      q: "Can Ayurveda cure PCOS completely?",
      a: "Ayurveda focuses on managing symptoms and supporting hormonal balance; results vary, and it works best alongside regular gynaecological monitoring.",
    },
    {
      q: "Is Ayurvedic treatment safe during pregnancy?",
      a: "Only specific, physician-approved protocols are used during pregnancy, always coordinated with your obstetrician.",
    },
    {
      q: "How long does ayurvedic treatment take for menstrual disorders?",
      a: "Most patients are advised to follow the plan for at least three to four menstrual cycles before reviewing progress.",
    },
    {
      q: "Can I continue my current gynaecological medication?",
      a: "Yes, essential medication should continue unless your treating doctor advises otherwise.",
    },
    {
      q: "What is Uttar Basti and is it painful?",
      a: "It is a supervised Panchakarma procedure administered through the vaginal or urethral route; the physician explains the process and any discomfort beforehand.",
    },
    {
      q: "Does Ayurveda help with fertility concerns?",
      a: "It may be used as a complementary approach alongside fertility specialists, focusing on overall reproductive health rather than replacing fertility treatment.",
    },
    {
      q: "Is the treatment suitable for teenagers with irregular periods?",
      a: "Yes, age-appropriate protocols are available for adolescents establishing regular menstrual cycles.",
    },
    {
      q: "Will I need to repeat any tests during treatment?",
      a: "Your physician may recommend periodic hormone panels, ultrasounds, or cycle tracking to monitor progress accurately.",
    },
    {
      q: "Are the herbal formulations prepared at the hospital itself?",
      a: "Yes, all formulations are prepared and quality-checked at our in-house pharmacy before being dispensed to patients.",
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
                Ayurvedic Gynaecological Treatment at Balprada Hospital
              </h1>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Women's health concerns are often postponed, adjusted around, or dismissed as "normal" for far too long.</li>
                <li>At Balprada Hospital, our ayurvedic gynaecological treatment programme is built around the Ayurvedic discipline of Stree Roga and Prasuti Tantra, combining classical herbal therapy, targeted Panchakarma procedures, and structured lifestyle guidance to support women through every stage of reproductive life — from adolescence to menopause.</li>
              </ul>
            </div>


            {/* Section 2 — Why Women Seek Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Women Seek Ayurveda for Gynaecological Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda treats the reproductive system as connected to digestion, hormonal balance, and overall metabolism, rather than looking at symptoms in isolation.</li>
                <li>Conditions like irregular cycles, PCOS, and unexplained fatigue are often linked to deeper imbalances in Vata, Pitta, and Kapha doshas, which Ayurvedic assessment aims to identify.</li>
                <li>Many patients look for a complementary approach alongside their gynaecologist's care, particularly for chronic or recurring issues that haven't fully resolved with medication alone.</li>
                <li>Classical texts describe detailed protocols under Stree Roga (women's disorders) and Prasuti Tantra (obstetric care), covering menstrual health, fertility support, pregnancy care, and post-delivery recovery.</li>
                <li>Diet, daily routine (Dinacharya), and seasonal routine (Ritucharya) are considered essential to reproductive health, not optional add-ons.</li>
              </ul>
            </div>


            {/* Section 3 — Conditions We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gynaecological Conditions We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular, delayed, or painful menstrual cycles</li>
                <li>Polycystic Ovarian Syndrome (PCOS/PCOD) and related hormonal imbalance</li>
                <li>Excessive or prolonged menstrual bleeding (Menorrhagia)</li>
                <li>Leucorrhea (abnormal vaginal discharge) and recurrent vaginal infections</li>
                <li>Uterine fibroids and ovarian cysts, as a supportive approach alongside gynaecological monitoring</li>
                <li>Fertility-related concerns, offered as complementary care alongside fertility specialists</li>
                <li>Pre-conception care and preparation for a healthy pregnancy</li>
                <li>Post-delivery recovery and strength-building (Sutika Paricharya)</li>
                <li>Perimenopausal and menopausal symptoms such as hot flashes, mood changes, and sleep disturbance</li>
                <li>General reproductive wellness for adolescents and young women establishing healthy cycles</li>
              </ul>
            </div>


            {/* Section 4 — Treatment Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Our Treatment Approach
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Detailed Assessment and Prakriti Analysis
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every consultation begins with a review of menstrual history, past medical records, current medication, and any relevant scans or hormone reports.</li>
                    <li>The patient's body constitution (Prakriti) is assessed to understand which imbalances may be contributing to her symptoms.</li>
                    <li>Lifestyle factors — sleep patterns, stress levels, diet, and physical activity — are discussed, since these strongly influence hormonal health.</li>
                    <li>Reports from allopathic gynaecologists are reviewed so the Ayurvedic plan complements, rather than conflicts with, existing medical care.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Customised Herbal Formulations
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Herbal combinations are prescribed based on the specific condition, cycle pattern, and constitution of the patient.</li>
                    <li>Classical herbs commonly referenced in women's health protocols include Ashoka, Lodhra, Shatavari, and Kumari, chosen for their traditional association with reproductive and hormonal support.</li>
                    <li>Formulations are adjusted across the menstrual cycle where relevant, since Ayurvedic protocols often differ by cycle phase.</li>
                    <li>Dosage and duration are supervised by the treating physician, and patients are guided against self-adjusting medication without follow-up.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Panchakarma and Local Therapeutic Procedures
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Uttar Basti, a specialised Panchakarma procedure, may be recommended for select fertility and uterine health concerns, administered under strict clinical supervision.</li>
                    <li>Yoni Prakshalana (therapeutic cleansing) and other local procedures may be used to support vaginal and uterine health where clinically appropriate.</li>
                    <li>Virechana and general detoxification therapies may be included when the physician identifies a need to address underlying systemic imbalance.</li>
                    <li>All procedures are explained to the patient in advance, including what to expect and any precautions required afterward.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Diet and Lifestyle Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A personalised diet chart is prepared based on the patient's condition — for example, women with PCOS typically receive different dietary guidance than those managing menopausal symptoms.</li>
                    <li>Ritucharya (seasonal routine) and Dinacharya (daily routine) principles are incorporated into practical, realistic daily schedules.</li>
                    <li>Guidance on sleep timing, physical activity, and stress reduction is provided, since these consistently affect hormonal balance.</li>
                    <li>Family members are counselled where relevant, particularly around meal planning during pregnancy or postpartum recovery.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Yoga and Mind-Body Practices
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Specific yoga asanas are recommended to support pelvic health, circulation, and hormonal regulation, adapted to the patient's fitness level and condition.</li>
                    <li>Pranayama and relaxation techniques are introduced to help manage the stress that often aggravates menstrual and hormonal symptoms.</li>
                    <li>Pregnant and postpartum patients are given separate, condition-appropriate yoga guidance rather than a generic routine.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — Care Across Life Stages */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Care Across Every Life Stage
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Adolescence:</strong> Guidance for young women establishing regular cycles, along with support for painful periods and early PCOS signs.</li>
                <li><strong>Reproductive Years:</strong> Management of menstrual disorders, PCOS, and complementary fertility support alongside conventional fertility treatment.</li>
                <li><strong>Pregnancy:</strong> Garbha Sanskar-based preconception guidance and antenatal lifestyle support, always coordinated with the patient's obstetrician.</li>
                <li><strong>Postpartum:</strong> Sutika Paricharya protocols focused on recovery, strength-building, and lactation support after delivery.</li>
                <li><strong>Perimenopause and Menopause:</strong> Herbal and lifestyle support for hormonal transition symptoms such as hot flashes, mood fluctuations, and disturbed sleep.</li>
              </ul>
            </div>


            {/* Section 6 — Why Choose Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada Hospital for Women's Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Treatment plans are built around each patient's cycle history, constitution, and current reports — not a standard template applied to everyone.</li>
                <li>Panchakarma and local procedures are performed by trained therapists under the direct supervision of qualified Ayurvedic physicians.</li>
                <li>Our in-house pharmacy prepares herbal formulations under quality-controlled conditions.</li>
                <li>Patients are encouraged to continue essential medication or monitoring advised by their gynaecologist unless their doctor directs otherwise.</li>
                <li>Follow-up consultations are scheduled at intervals appropriate to the menstrual cycle, so progress can be tracked accurately rather than assumed.</li>
                <li>Privacy and comfort are prioritised throughout consultations and procedures, recognising the sensitive nature of women's health concerns.</li>
              </ul>
            </div>


            {/* Section 7 — Facilities Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities Available at Balprada Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Private, comfortable consultation rooms designed for sensitive discussions around women's health.</li>
                <li>Dedicated therapy rooms for Panchakarma and local gynaecological procedures, separate from general treatment areas.</li>
                <li>In-house pharmacy preparing herbal formulations under quality-controlled conditions.</li>
                <li>Diet counselling support to translate prescribed charts into realistic daily meal plans.</li>
                <li>Coordination support for patients travelling from other cities who need to plan visits around procedure schedules.</li>
                <li>Maintained records of cycle history and treatment response so each follow-up builds on prior progress.</li>
              </ul>
            </div>


            {/* Section 8 — Continuity of Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Continuity of Care After Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients who complete their primary treatment phase receive a maintenance diet and lifestyle plan to help sustain results.</li>
                <li>Periodic follow-ups are recommended even after symptoms stabilise, particularly for chronic conditions like PCOS that can recur without ongoing lifestyle support.</li>
                <li>Formulations may be adjusted seasonally, since Ayurvedic protocols account for changes in climate and routine across the year.</li>
                <li>Patients are encouraged to keep their gynaecologist informed of ongoing Ayurvedic care so both treatment approaches remain coordinated over time.</li>
              </ul>
            </div>


            {/* Section 9 — Treatment Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect: The Treatment Journey
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Step 1 – Consultation:</strong> Detailed discussion of symptoms, cycle history, and any existing reports or diagnoses.</li>
                <li><strong>Step 2 – Assessment:</strong> Prakriti and dosha evaluation to identify the likely root imbalance behind the symptoms.</li>
                <li><strong>Step 3 – Plan Design:</strong> A combination of herbal medicine, diet chart, and procedures (if needed) is finalised for the patient.</li>
                <li><strong>Step 4 – Supervised Therapy:</strong> Any in-clinic procedures are scheduled and carried out with clear pre- and post-care instructions.</li>
                <li><strong>Step 5 – Cycle-Based Follow-Up:</strong> Review appointments are typically aligned with the patient's cycle to assess changes accurately.</li>
                <li><strong>Step 6 – Long-Term Plan:</strong> Once symptoms stabilise, patients receive a maintenance routine to help sustain results over time.</li>
              </ul>
            </div>


            {/* Section 10 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs That Warrant a Gynaecological Consultation
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Cycles that are consistently irregular, absent, or unusually painful</li>
                <li>Heavy bleeding that disrupts daily activities or lasts longer than usual</li>
                <li>Persistent pelvic pain, bloating, or discomfort outside of menstruation</li>
                <li>Unusual vaginal discharge, itching, or recurring infections</li>
                <li>Difficulty conceiving after a reasonable period of trying, as advised by a specialist</li>
                <li>Sudden or severe menopausal symptoms affecting sleep, mood, or daily functioning</li>
                <li>Any noticeable, unexplained change in menstrual pattern lasting more than two to three cycles</li>
                <li>Persistent fatigue, unexplained weight change, or excessive hair growth/hair loss that may point to an underlying hormonal cause</li>
              </ul>
            </div>


            {/* Section 11 — Lifestyle Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Guidance for Better Reproductive Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintain consistent sleep timing, since disrupted sleep is closely linked to hormonal irregularity.</li>
                <li>Reduce intake of processed and excessively oily foods, which can aggravate Kapha-related imbalances such as PCOS.</li>
                <li>Track your menstrual cycle consistently so your physician has accurate data to work with at each follow-up.</li>
                <li>Manage stress through regular, gentle physical activity rather than high-intensity routines during acute symptomatic phases.</li>
                <li>Avoid self-prescribing herbal supplements without medical guidance, as even natural formulations can interact with existing medication.</li>
                <li>Keep your gynaecologist informed about any Ayurvedic treatment you are undergoing so both approaches stay coordinated.</li>
              </ul>
            </div>


            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Women interested in exploring Ayurvedic treatment for their gynaecological health concerns can book a consultation at Balprada Hospital. The initial consultation typically involves a detailed menstrual history review, Prakriti assessment, and evaluation of any existing reports, followed by a personalised treatment plan combining herbal medicine, diet correction, and Panchakarma therapies where suitable.
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


            {/* Section 13 — FAQs */}
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