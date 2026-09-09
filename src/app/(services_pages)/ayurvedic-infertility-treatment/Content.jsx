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
      q: "How long does Ayurvedic fertility treatment usually take?",
      a: "This varies by individual and underlying cause, but many couples are guided to continue treatment for several months alongside regular follow-up and monitoring.",
    },
    {
      q: "Is Ayurvedic treatment safe alongside ongoing fertility treatment?",
      a: "Yes, the doctor reviews your current treatment and reports during consultation so the Ayurvedic plan is suited to your overall situation. Always share your full medical history.",
    },
    {
      q: "Does Balprada treat both male and female fertility concerns?",
      a: "Yes, Ayurvedic care is offered to support overall reproductive health in both partners, based on individual assessment.",
    },
    {
      q: "Can this treatment help with PCOS-related fertility issues?",
      a: "Ayurvedic care, including medicine, diet correction, and routine changes, is commonly used to support women managing PCOS-linked hormonal imbalance, alongside their existing treatment.",
    },
    {
      q: "Is the consultation kept private and confidential?",
      a: "Yes, fertility consultations at Balprada are handled with sensitivity and privacy, given the personal nature of the concern.",
    },
    {
      q: "Where is Balprada located?",
      a: "The main branch is in Tehsil Bilari, District Moradabad, with a second branch in Sector-13, New Moradabad, Delhi Road, Moradabad.",
    },
    {
      q: "Is there a free consultation option?",
      a: "Yes, Balprada offers a free OPD consultation on the 15th of every month.",
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
                Ayurvedic Infertility Treatment at Balprada Ayurvedic Hospital &amp; Research Center
              </h1>


              <p className="text-gray-700 mb-4">
                Difficulty conceiving can be an emotionally exhausting experience for couples, often accompanied by stress, confusion, and repeated medical visits. At Balprada Ayurvedic Hospital &amp; Research Center, infertility-related concerns are approached with sensitivity, patience, and a focus on overall reproductive health rather than isolated symptoms. With 35 years of trusted Ayurvedic care, in-house herbal medicines, and a calm ashram-based environment, Balprada offers Ayurvedic support for reproductive wellness that is designed to work alongside a couple's existing fertility treatment, not replace it.
              </p>
            </div>


            {/* Section 2 — Understanding Fertility Health in Ayurveda */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Fertility Health in Ayurveda
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ayurveda views reproductive health as closely connected to overall body balance — particularly the balance of Vata, Pitta, and Kapha doshas and the quality of Shukra Dhatu (reproductive tissue).</li>
                <li>Weak digestion and poor nutrient absorption are considered important contributing factors, since reproductive tissue is formed from the deepest level of the body's nutritional process.</li>
                <li>Stress, irregular routine, and disturbed sleep are recognized in Ayurveda as factors that can disturb hormonal balance and, in turn, affect fertility.</li>
                <li>Ayurvedic fertility care focuses on strengthening the body's overall constitution, correcting imbalance, and supporting the reproductive system through medicine, diet, and lifestyle correction.</li>
                <li>Each couple's situation is assessed individually, since the underlying cause of difficulty conceiving can vary significantly between individuals.</li>
              </ul>
            </div>


            {/* Section 3 — Common Fertility-Related Concerns We Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Fertility-Related Concerns We Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular or delayed menstrual cycles affecting a woman's ability to track ovulation and conceive.</li>
                <li>Hormonal imbalance linked to conditions such as PCOS or thyroid dysfunction that can affect fertility.</li>
                <li>Low energy and general weakness that may accompany prolonged fertility struggles.</li>
                <li>Stress-related fertility concerns, where ongoing tension and anxiety are affecting the body's natural balance.</li>
                <li>Unexplained delay in conception where standard medical tests have not identified a clear cause.</li>
                <li>Post-treatment recovery support for couples continuing Ayurvedic care alongside ongoing fertility treatment elsewhere.</li>
                <li>General reproductive weakness in either partner, supported through strengthening and nourishing Ayurvedic care.</li>
                <li>Recurrent pregnancy loss concerns, where couples are looking for additional Ayurvedic and lifestyle support alongside specialist medical care.</li>
              </ul>
            </div>


            {/* Section 4 — The Balprada Approach to Fertility Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Approach to Fertility Care
              </h2>


              <div className="space-y-6">


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Detailed and Private Consultation
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Every fertility consultation at Balprada is handled with sensitivity and privacy, recognizing how personal this concern is for couples.</li>
                    <li>The doctor reviews medical history, menstrual pattern, any existing fertility test reports, and current treatment before suggesting an Ayurvedic care plan.</li>
                    <li>Both partners' overall health, diet, and lifestyle are considered, since Ayurveda views fertility as connected to the wellbeing of both individuals, not one alone.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    In-House Ayurvedic Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balprada prepares its own herbal medicines in-house, allowing consistent quality across every formulation given to patients.</li>
                    <li>Formulations are selected to support hormonal balance, strengthen reproductive tissue, and improve overall digestive and metabolic health, based on the specific case.</li>
                    <li>Medicines are given alongside clear diet and routine guidance so that internal support and daily habits work toward the same goal.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diet and Routine Correction
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Diet guidance focuses on nourishing, easily digestible foods that support the body's deeper tissues, including reproductive health.</li>
                    <li>Patients are guided on meal timing, sleep routine, and simple lifestyle adjustments known to support hormonal balance.</li>
                    <li>Since stress is recognized as a contributing factor, routine guidance often includes practical suggestions for building a calmer, more consistent daily rhythm.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Supportive Facilities
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Panchakarma — cleansing-based therapies may be recommended where suitable, based on individual assessment, to help support reproductive and hormonal balance.</li>
                    <li>Yoga — gentle yoga practices can support hormonal balance, reduce stress, and improve overall physical readiness for conception.</li>
                    <li>Meditation — guided meditation and breath awareness are offered to support emotional steadiness during what can be a stressful journey.</li>
                    <li>Balprada Pathology Lab — in-house diagnostic testing helps the care team track relevant hormonal and health markers as part of a complete care journey.</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Structured, Ongoing Follow-up
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Fertility-related treatment often requires sustained care over a period of months, so regular follow-up is an essential part of the Balprada approach.</li>
                    <li>The care team observes how the body is responding to treatment and adjusts the plan based on menstrual pattern, energy levels, and overall progress.</li>
                    <li>Follow-up also provides couples with continued guidance and emotional reassurance throughout what can be a long and difficult journey.</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — Why Patients Choose Balprada for Fertility Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Choose Balprada for Fertility Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>35 years of experience in Ayurvedic care, rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji.</li>
                <li>In-house herbal medicines, prepared with attention to quality and consistency.</li>
                <li>A private, respectful consultation approach suited to the sensitive nature of fertility concerns.</li>
                <li>A peaceful ashram environment that offers a calm, supportive setting away from daily stress.</li>
                <li>Experienced doctors who look at fertility as part of overall body balance, not as an isolated issue.</li>
                <li>Daily OPD availability, with the ashram and clinic open seven days a week for consultation and follow-up.</li>
                <li>Free OPD consultation on the 15th of every month, offering an accessible starting point for couples exploring Ayurvedic support.</li>
              </ul>
            </div>


            {/* Section 6 — Who Can Consider This Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Consider This Treatment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Couples experiencing delayed conception who want Ayurvedic support alongside their existing fertility treatment.</li>
                <li>Women with irregular menstrual cycles or PCOS-linked hormonal imbalance affecting fertility.</li>
                <li>Individuals experiencing general weakness or low energy that may be connected to reproductive health.</li>
                <li>Couples looking for a calm, structured, doctor-guided approach to complement ongoing medical fertility care.</li>
                <li>Anyone seeking to strengthen overall reproductive health through diet, medicine, and lifestyle correction before or during fertility treatment.</li>
                <li>Couples who prefer a calm, respectful, and private setting to discuss and address a deeply personal health concern.</li>
              </ul>


              
            </div>


            {/* Section 7 — What to Expect During Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bring any relevant medical reports, hormonal test results, or previous fertility treatment history, if available.</li>
                <li>Be ready to discuss menstrual pattern, general health, diet, sleep, and stress levels honestly, as this helps the doctor build an accurate picture.</li>
                <li>The suggested treatment plan, including medicines and lifestyle guidance, is explained clearly before you begin.</li>
                <li>Follow-up visits are used to track progress and adjust the plan as your body responds to treatment over time.</li>
              </ul>
            </div>


            {/* Section 8 — Simple Lifestyle Habits That Support Fertility Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Simple Lifestyle Habits That Support Fertility Health
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Following a consistent daily routine for meals, sleep, and waking time, since irregularity can disturb hormonal balance.</li>
                <li>Eating warm, nourishing, freshly prepared food rather than cold, processed, or heavily fried food.</li>
                <li>Practicing gentle yoga or light physical activity regularly, as guided by the care team.</li>
                <li>Managing stress through simple daily practices such as meditation, breath awareness, or quiet rest.</li>
                <li>Avoiding excessive fatigue and prioritizing adequate, restful sleep each night.</li>
                <li>Maintaining open communication between partners and seeking support together throughout the treatment journey.</li>
                <li>Limiting excessive screen time or late-night activity before bed, since this can disturb both sleep quality and hormonal rhythm.</li>
              </ul>
            </div>


            {/* Section 9 — How Fertility Struggles Affect Overall Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Fertility Struggles Affect Overall Wellbeing
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Emotional wellbeing — the uncertainty and repeated disappointment of delayed conception can take a significant emotional toll on both partners.</li>
                <li>Relationship dynamics — prolonged fertility struggles can add stress to a couple's relationship, making emotional support an important part of the treatment journey.</li>
                <li>Sleep and energy — ongoing stress and anxiety related to fertility concerns often disturb sleep, which can further affect hormonal balance.</li>
                <li>Confidence and self-perception — many individuals experience a sense of self-doubt during fertility struggles, which calm, respectful care can help ease over time.</li>
                <li>Family and social pressure — couples often face additional pressure from family expectations, making a private, judgment-free care environment especially valuable.</li>
                <li>Physical health — the stress of fertility struggles can sometimes affect appetite, digestion, and general physical wellbeing, which Balprada's holistic approach also addresses.</li>
              </ul>
            </div>


            {/* Section 10 — The Balprada Difference in Fertility Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Balprada Difference in Fertility Care
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rather than treating fertility as an isolated issue, Balprada looks at the couple's overall health, digestion, hormonal balance, and stress levels together.</li>
                <li>Every care plan is built individually, since the underlying cause of delayed conception can differ significantly between couples.</li>
                <li>Ayurvedic medicine, diet correction, and stress-support practices such as yoga and meditation are offered as one coordinated plan rather than separate, disconnected services.</li>
                <li>The ashram-based setting offers couples a calm, private environment away from daily pressures, which many find valuable during an emotionally demanding phase.</li>
                <li>The care team remains respectful of each couple's pace and privacy, offering guidance without adding pressure to an already sensitive journey.</li>
              </ul>
            </div>


            {/* Section 11 — Preparing for a Supportive, Long-Term Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for a Supportive, Long-Term Journey
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fertility-related Ayurvedic care is approached as a gradual process of strengthening the body's overall balance, rather than offering a guaranteed quick outcome.</li>
                <li>Couples are encouraged to stay consistent with medicine, diet, and routine guidance over the recommended treatment period for the best chance of steady progress.</li>
                <li>Regular follow-up allows adjustments to be made based on menstrual cycle changes, energy levels, and how the body responds over time.</li>
                <li>Couples are encouraged to maintain open communication with the care team about any changes, concerns, or ongoing medical treatment throughout the journey.</li>
                <li>Emotional support, patience, and realistic expectations are treated as an essential part of the care process, alongside the medical and lifestyle guidance provided.</li>
              </ul>
            </div>


            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients interested in exploring Ayurvedic treatment for their health concerns can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center. The initial consultation typically involves a detailed case history review, pulse diagnosis (Nadi Pariksha), and constitution assessment, followed by a personalized treatment plan.
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