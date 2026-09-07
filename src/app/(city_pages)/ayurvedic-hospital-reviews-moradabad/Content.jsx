import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";


export default function BalpradaAyurvedicHospitalReviews() {
  const faqs = [
    {
      q: "What do patients most often mention in their feedback about Balprada?",
      a: "Patients most often mention attentive consultations, clear follow-up guidance and the supportive atmosphere of the ashram environment.",
    },
    {
      q: "Is follow-up care included after the first consultation?",
      a: "Yes, regular follow-up is part of Balprada's care process to track progress and adjust the treatment plan over time.",
    },
    {
      q: "Can I speak to the hospital before booking a full consultation?",
      a: "Yes, you can call or WhatsApp either branch to ask questions about the process before visiting.",
    },
    {
      q: "Does Balprada offer a trial or introductory consultation?",
      a: "Free OPD consultation is available on the 15th of every month, which is a good way to experience the process firsthand.",
    },
    {
      q: "Are family members allowed to be involved in the treatment discussion?",
      a: "Yes, families are welcomed as part of the care journey and are often involved in understanding the treatment plan.",
    },
    {
      q: "What should I check before trusting an Ayurvedic hospital's reputation?",
      a: "Look at consultation quality, follow-up support, medicine preparation practices and the range of facilities offered alongside treatment.",
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
                What Patients Say About Ayurvedic Care in Moradabad
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>When searching for Ayurvedic hospital reviews in Moradabad, patients are usually trying to understand two things: how the doctors treat people, and whether the care actually helps over time.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center has built its reputation over 35 years of trusted Ayurveda, research and compassionate care in the region.</li>
                <li>Genuine patient experiences shared with Balprada consistently point to attentive consultations, clear follow-up guidance and a peaceful, supportive ashram environment.</li>
                <li>This article looks at what real patients and families have shared about their experience at Balprada, and what to look for when evaluating any Ayurvedic hospital in Moradabad.</li>
                <li>Reviews are most useful when they reflect the full journey — consultation, treatment, facilities and follow-up — rather than a single visit.</li>
                <li>For many families researching care options online, reviews often become the deciding factor between hospitals that look similar on paper but differ greatly in actual patient experience.</li>
              </ul>
            </div>


            {/* Section 2 — Why Reviews Matter */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Reviews Matter When Choosing an Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ayurvedic treatment, especially for chronic conditions, often unfolds over months, so reviews that mention follow-up experience are particularly valuable.</li>
                <li>A hospital&apos;s reputation built over decades, like Balprada&apos;s 35 years of service, tends to be reflected consistently in patient feedback rather than a handful of recent comments.</li>
                <li>Reviews that mention specific aspects — diet guidance, doctor availability, ashram environment, medicine quality — are more useful than generic praise.</li>
                <li>Prospective patients should look for feedback that describes the entire care process, not just the first visit or the facility&apos;s appearance.</li>
                <li>Reviews also help set realistic expectations about routine, consultation timing and what a stay at an Ayurvedic ashram-based hospital actually involves.</li>
                <li>Reading a range of feedback, rather than a single account, gives a more balanced picture of how a hospital handles different treatment areas and patient needs.</li>
              </ul>
            </div>


            {/* Section 3 — Consultation Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Patients Say About the Consultation Experience
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Families have shared that the Balprada team listened carefully and explained Ayurvedic care, daily routine and food guidance in a calm, practical way.</li>
                <li>Patients often mention feeling that their concerns were addressed thoroughly, with the doctor reviewing history, reports and current medication before suggesting treatment.</li>
                <li>The consultation process is frequently described as unhurried, giving patients room to ask questions and understand their treatment plan.</li>
                <li>This structured, doctor-led consultation is a recurring theme in feedback about the hospital&apos;s overall approach to care.</li>
                <li>Patients also mention appreciating that the doctor takes time to explain the reasoning behind a treatment plan, rather than simply prescribing medicine without context.</li>
              </ul>
            </div>


            {/* Section 4 — Follow-Up Guidance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Feedback on Follow-Up Guidance and Long-Term Support
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients have described the follow-up guidance as giving them a clear structure for diet, daily habits, medicines and future consultations after returning home.</li>
                <li>The simple, practical instructions provided during follow-up are frequently mentioned as making it easier for families to stay consistent with the recommended routine.</li>
                <li>Continued support after the initial visit is often highlighted as a differentiator compared to one-time consultations elsewhere.</li>
                <li>This ongoing guidance reflects the hospital&apos;s four-step care process of consultation, Ayurvedic plan, supportive facilities and follow-up.</li>
                <li>Some patients specifically note that having a clear follow-up schedule reduced their uncertainty about what to do between visits.</li>
              </ul>
            </div>


            {/* Section 5 — Ashram Environment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Families Say About the Ashram Environment
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Visitors have described the peaceful ashram environment as a meaningful part of what made their family feel supported throughout the visit.</li>
                <li>The calm, disciplined surroundings are often mentioned as helpful for patients trying to maintain a consistent daily routine during treatment.</li>
                <li>Family involvement is a recurring theme, with relatives frequently accompanying patients and taking part in understanding the care plan together.</li>
                <li>The ashram setting is described as distinct from a typical clinical environment, offering a slower, more supportive pace for recovery.</li>
                <li>Several families mention that this environment made it easier to focus fully on the patient&apos;s recovery, without the usual distractions of daily city life.</li>
              </ul>
            </div>


            {/* Section 6 — Overall Service Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Feedback on the Overall Service Experience
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients have highlighted the team&apos;s availability, kindness and genuine spirit of service as reasons the experience felt comfortable for both the patient and their family.</li>
                <li>The team&apos;s attentiveness through consultations, medicines, meals and the recommended routine is a frequently mentioned strength.</li>
                <li>Many patients describe the overall service experience as consistent across visits, which reflects the hospital&apos;s long-standing operational discipline.</li>
                <li>This consistency is closely tied to the hospital&apos;s 35 years of continuous service in the region.</li>
                <li>Patients often mention that even small details, like clear communication about timings, contributed to a smoother overall experience.</li>
              </ul>
            </div>


            {/* Section 7 — What Makes Balprada Different */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes Balprada&apos;s Reputation Different in Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada&apos;s care is rooted in the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji, a legacy that shapes how patients are treated at every stage.</li>
                <li>In-house preparation of Ayurvedic medicines is frequently cited as a reason patients trust the consistency and quality of their treatment.</li>
                <li>The presence of an in-house pathology lab allows diagnostic testing to be coordinated directly with ongoing care, which patients often note as convenient.</li>
                <li>The combination of medical consultation with facilities such as yoga, panchakarma, naturopathy, meditation and physiotherapy is seen as a distinguishing feature compared to clinic-only setups.</li>
                <li>Two accessible branches — the main ashram-based center and the Moradabad city branch — make consistent care easier to access for local families.</li>
                <li>This combination of legacy, infrastructure and accessibility is often what separates long-standing feedback about Balprada from reviews of newer, less established clinics.</li>
              </ul>
            </div>


            {/* Section 8 — Care Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Balprada&apos;s Care Process Shapes Patient Experience
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Consultation:</strong> the doctor reviews the patient&apos;s concern, history, reports and current medication before deciding the next step.</li>
                <li><strong>Ayurvedic Plan:</strong> treatment is planned using Balprada&apos;s own medicines, combined with diet discipline and lifestyle correction where suitable.</li>
                <li><strong>Supportive Facilities:</strong> yoga, naturopathy, panchakarma and pathology testing are introduced to make the treatment journey more complete.</li>
                <li><strong>Follow-up:</strong> regular follow-up visits allow the team to track progress and support long-term discipline.</li>
                <li>This structured process is frequently reflected in patient feedback, since it shapes the experience from the very first visit through to ongoing care.</li>
                <li>Patients who go through all four stages tend to describe a more complete and satisfying experience than those who only attend a single consultation.</li>
              </ul>
            </div>


            {/* Section 9 — Treatments Discussed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatments Patients Commonly Discuss in Their Feedback
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Kidney and Urinary Care,</strong> including support for kidney failure, kidney stones and swelling-related concerns.</li>
                <li><strong>Liver and Digestive Care,</strong> covering fatty liver, jaundice and weak digestion.</li>
                <li><strong>Cancer Supportive Care,</strong> focused on strength, diet guidance and emotional support during serious illness.</li>
                <li><strong>Heart and Lifestyle Care,</strong> addressing blood pressure, diabetes, obesity and related concerns.</li>
                <li><strong>Diabetes and Thyroid Care,</strong> supporting blood sugar and thyroid balance.</li>
                <li><strong>Women&apos;s Wellness,</strong> covering hormonal balance, menstrual health and general weakness.</li>
                <li>Feedback across these categories tends to emphasize the same themes: attentive consultation, clear guidance and consistent follow-up.</li>
              </ul>
            </div>


            {/* Section 10 — What to Look For */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Look for Before Visiting an Ayurvedic Hospital in Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Check whether the hospital offers a structured consultation process rather than a quick, one-time assessment.</li>
                <li>Look for feedback on follow-up care, since Ayurvedic treatment often requires ongoing adjustment over time.</li>
                <li>Consider whether the hospital prepares its own medicines in-house, which can be a marker of quality control.</li>
                <li>Look into the range of supportive facilities available, such as yoga, panchakarma, naturopathy and diagnostic testing.</li>
                <li>Ask about consultation timing and availability, especially if you plan to visit from outside Moradabad.</li>
                <li>Balprada&apos;s 35-year track record, ashram setting and integrated facilities are worth considering as part of this evaluation.</li>
                <li>It also helps to check whether family involvement is welcomed, since many patients value having relatives present during consultations and follow-up.</li>
              </ul>
            </div>


            {/* Section 11 — How to Verify Reputation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Verify a Hospital&apos;s Reputation Beyond Online Reviews
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Speak directly with the hospital during a phone or WhatsApp enquiry to understand their consultation process before visiting.</li>
                <li>Ask about the doctor&apos;s approach to reviewing history and reports before suggesting treatment.</li>
                <li>Enquire about follow-up support, since this is where long-term treatment experiences are shaped the most.</li>
                <li>Visit during OPD hours or take advantage of free OPD consultations to experience the process firsthand before committing to a longer treatment plan.</li>
                <li>Balprada&apos;s OPD is open daily from 10:00 AM to 2:00 PM, with free consultation available on the 15th of every month.</li>
                <li>A direct conversation with the hospital team often reveals more about their approach than a short review ever could.</li>
              </ul>
            </div>


            {/* Section 12 — Long-Standing Hospitals */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Long-Standing Hospitals Tend to Have More Consistent Reviews
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A hospital operating for 35 years, like Balprada, has had time to refine its consultation process, medicine preparation and follow-up systems.</li>
                <li>Long-term operation allows patterns in patient experience to become more visible and consistent over time.</li>
                <li>Established hospitals are more likely to have handled a wide range of conditions, which shapes a more experienced and adaptable care team.</li>
                <li>This kind of consistency is often what patients are really looking for when they search for hospital reviews before choosing where to go.</li>
                <li>A long operating history also means the hospital&apos;s approach has been tested across generations of patients, not just a recent wave of visitors.</li>
              </ul>
            </div>


            {/* Section 13 — Facilities Contribution */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Balprada&apos;s Facilities Contribute to Positive Patient Experience
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Panchakarma therapies planned around individual assessment, often mentioned in feedback about cleansing and recovery support.</li>
                <li>Yoga sessions that patients describe as helping with balance, strength and calm during treatment.</li>
                <li>Naturopathy practices that work alongside Ayurvedic medicine for a more complete healing routine.</li>
                <li>Guided meditation, frequently mentioned as useful for emotional steadiness during a difficult health journey.</li>
                <li>Physiotherapy support for patients needing help with mobility and safe movement.</li>
                <li>An in-house pathology lab that patients often highlight for the convenience of getting tests done without visiting a separate facility.</li>
              </ul>
            </div>


            {/* Section 14 — How to Book */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Book a Consultation at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Call or WhatsApp the main branch at 8126364606 to enquire about consultation timing and treatment options.</li>
                <li>Contact the Moradabad branch at 9410447000, keeping in mind the vaidya is available there on Sundays.</li>
                <li>Take advantage of the free OPD consultation offered on the 15th of every month.</li>
                <li>Bring previous medical reports, current medicines and a clear description of your health concern to your first visit.</li>
                <li>Email <a href="mailto:balpradaindia@gmail.com" className="text-blue-600 hover:underline">balpradaindia@gmail.com</a> for general enquiries if a phone call is not convenient.</li>
              </ul>
            </div>


            {/* Section 15 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients searching for genuine Ayurvedic hospital reviews in Moradabad can experience Balprada&apos;s care firsthand by booking a consultation. With 35 years of trusted service, attentive consultations, clear follow-up guidance and a supportive ashram environment, Balprada offers a complete healing journey for chronic and lifestyle-related health concerns. For patients traveling from outside Moradabad, the hospital also assists with planning ashram-based stays for a more immersive treatment experience.
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


                <div className="flex items-start gap-3">
                  <Mail
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Email Us</p>
                    <a href="mailto:balpradaindia@gmail.com" className="text-black hover:underline">
                      balpradaindia@gmail.com
                    </a>
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


            {/* Section 16 — FAQs */}
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