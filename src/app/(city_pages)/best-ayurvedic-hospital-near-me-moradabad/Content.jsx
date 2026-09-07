import Link from "next/link";
import {
  Phone,
  MapPin,
} from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";


export default function BalpradaBestAyurvedicHospital() {
  const faqs = [
    {
      q: "Is Balprada suitable for chronic conditions like kidney or liver disease?",
      a: "Yes, the hospital offers dedicated consultation and Ayurvedic support for kidney, liver and related chronic concerns, guided by the treating doctor.",
    },
    {
      q: "Do I need to stay at the ashram for treatment?",
      a: "Not necessarily. Many patients visit for consultation and follow-up, while others choose to stay for a more immersive, routine-based healing experience.",
    },
    {
      q: "What is the OPD timing at Balprada?",
      a: "Consultation timing is 10:00 AM to 2:00 PM daily, with free OPD available on the 15th of every month.",
    },
    {
      q: "Can I visit the Moradabad branch any day of the week?",
      a: "The Moradabad branch is open regularly, though the vaidya is available specifically on Sundays — it's best to call ahead before visiting.",
    },
    {
      q: "Does Balprada offer facilities beyond Ayurvedic medicine?",
      a: "Yes, the hospital offers panchakarma, yoga, naturopathy, meditation, physiotherapy and an in-house pathology lab alongside Ayurvedic treatment.",
    },
    {
      q: "How do I book my first consultation?",
      a: "You can call or WhatsApp either branch directly, or visit during OPD hours to begin your consultation.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Bring previous medical reports, a list of current medicines and a clear description of your health concern.",
    },
  ];


  return (
    <main className="bg-white">
      <Banner />


      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">


          {/* Main Content */}
          <div className="flex-1 order-1">


            {/* Section 1 — Choosing the Right Hospital */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Ayurvedic Hospital Nearby
              </h1>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Searching for the best Ayurvedic hospital near you in Moradabad usually means looking for a place that offers real medical guidance, not just herbal remedies sold without proper consultation.</li>
                <li>Balprada Ayurvedic Hospital &amp; Research Center has spent 35 years building trusted Ayurveda, research and compassionate care for patients across Moradabad and nearby regions.</li>
                <li>The hospital&apos;s approach blends traditional Ayurvedic knowledge with in-house herbal medicines, experienced doctors and a structured, ashram-based healing environment.</li>
                <li>With two branches serving the district, Balprada is positioned as an accessible option for patients searching for dependable Ayurvedic care close to home.</li>
                <li>This article walks through what makes a hospital genuinely stand out as the &quot;best&quot; option nearby, and how Balprada fits that description in practice.</li>
              </ul>
            </div>


            {/* Section 2 — Signs of a Good Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs of a Genuinely Good Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A proper consultation process where the doctor studies your history, current reports and ongoing medication before recommending treatment.</li>
                <li>Medicines prepared in-house rather than sourced from unknown third parties, which supports consistency and quality control.</li>
                <li>A calm, structured environment that supports the lifestyle discipline Ayurvedic treatment often requires.</li>
                <li>A range of supportive facilities — yoga, panchakarma, naturopathy, physiotherapy and diagnostic testing — available at the same location.</li>
                <li>A long operational history that reflects steady, tested practices rather than a newly opened setup.</li>
                <li>Balprada checks each of these boxes, which is why it continues to be searched for by patients looking for reliable Ayurvedic care near Moradabad.</li>
              </ul>
            </div>


            {/* Section 3 — 35-Year Legacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Balprada&apos;s 35-Year Legacy in Ayurvedic Care
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The hospital&apos;s foundation is built on the seva sankalp of Sw. Vaidya Vijay Pal Singh Ji, a philosophy of service that still guides how patients are treated today.</li>
                <li>Thirty-five years of continuous operation means Balprada&apos;s doctors and vaidyas have handled a wide range of health concerns across generations of patients.</li>
                <li>The hospital&apos;s guiding intention — that all may be happy, healthy and free from suffering — is reflected in the way consultations are conducted, with patience and attentiveness.</li>
                <li>This long-standing legacy is passed on through experienced vaidyas who continue the same disciplined, compassionate approach to care.</li>
                <li>For families comparing multiple Ayurvedic centers nearby, this kind of sustained history is often a meaningful point of difference.</li>
              </ul>
            </div>


            {/* Section 4 — Two Branches */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Two Convenient Branches Near Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Main Branch:</strong> Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh 244415, open daily from 10:00 AM to 2:00 PM.</li>
                <li><strong>Moradabad Branch:</strong> F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar Pradesh 244001, with the vaidya available on Sundays.</li>
                <li>Both branches can be reached by phone or WhatsApp for appointment booking, questions about treatment, or general enquiries.</li>
                <li>The main branch&apos;s ashram setting suits patients looking for a more immersive healing stay, while the Moradabad branch works well for quicker, city-based consultations.</li>
                <li>Having two locations reduces travel time for patients across different parts of the district, which matters when treatment involves multiple follow-up visits.</li>
              </ul>
            </div>


            {/* Section 5 — Treatments Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatments Offered at Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Kidney and Urinary Care:</strong> support for kidney failure, kidney stones, swelling and diabetes-linked kidney concerns.</li>
                <li><strong>Liver and Digestive Care:</strong> treatment guidance for fatty liver, jaundice and weak digestion through medicine, diet and routine correction.</li>
                <li><strong>Cancer Supportive Care:</strong> sensitive Ayurvedic support for strength and recovery, diet guidance and emotional stress support.</li>
                <li><strong>Heart and Lifestyle Care:</strong> integrated support for blood pressure, diabetes, obesity and related lifestyle concerns.</li>
                <li><strong>Diabetes and Thyroid Care:</strong> personalised guidance for blood sugar, hypothyroidism, hyperthyroidism and metabolic balance.</li>
                <li><strong>Women&apos;s Wellness:</strong> private, sensitive care for hormonal balance, menstrual health and general weakness.</li>
                <li>Each treatment area follows the same structured process of consultation, planning, supportive facilities and follow-up.</li>
              </ul>
            </div>


            {/* Section 6 — What Sets Balprada Apart */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Sets Balprada Apart From Other Nearby Options
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A documented four-step care process — consultation, Ayurvedic plan, supportive facilities and follow-up — that keeps treatment structured rather than improvised.</li>
                <li>In-house herbal medicines prepared under the hospital&apos;s own quality standards, rather than outsourced formulations.</li>
                <li>An on-site pathology lab that allows diagnostic testing to be coordinated directly with the treatment plan.</li>
                <li>A wide facility base, including panchakarma, yoga, naturopathy, meditation and physiotherapy, addressing the whole person rather than isolated symptoms.</li>
                <li>Monthly free OPD consultation on the 15th, making quality Ayurvedic guidance more accessible to the wider community.</li>
                <li>Patient feedback consistently describing attentive consultations, clear diet and routine guidance, and a peaceful, supportive ashram atmosphere.</li>
              </ul>
            </div>


            {/* Section 7 — Care Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Closer Look at the Balprada Care Process
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Consultation:</strong> the doctor carefully reviews the patient&apos;s concern, history, existing reports and current medication before recommending a plan.</li>
                <li><strong>Ayurvedic Plan:</strong> treatment is built using Balprada&apos;s own in-house medicines, combined with diet discipline and lifestyle correction where appropriate.</li>
                <li><strong>Supportive Facilities:</strong> yoga, naturopathy, panchakarma and pathology testing are brought in to make the treatment journey more complete.</li>
                <li><strong>Follow-up:</strong> regular check-ins allow the team to track progress, refine the plan and support consistency over the long term.</li>
                <li>This structured pathway is a major reason patients describe Balprada as treating the whole person rather than just addressing a single complaint.</li>
              </ul>
            </div>


            {/* Section 8 — Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Facilities That Strengthen the Treatment Experience
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Panchakarma therapies, planned according to individual assessment, to support cleansing, balance and recovery.</li>
                <li>Yoga sessions that help patients build strength, balance and calm throughout their treatment journey.</li>
                <li>Naturopathy practices that work with the body&apos;s natural healing capacity through simple, guided routines.</li>
                <li>Guided meditation and breath awareness to support emotional steadiness during a difficult health period.</li>
                <li>Physiotherapy support for safe movement, mobility and recovery alongside the wider treatment plan.</li>
                <li>An in-house pathology lab offering reliable blood, urine and diagnostic testing without needing to visit a separate facility.</li>
                <li>Organic food service that complements the daily treatment routine and dietary guidance.</li>
              </ul>
            </div>


            {/* Section 9 — Life at Ashram */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Life at the Balprada Ashram
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Balprada operates as both a hospital and an ashram, offering an environment designed for sustained healing rather than a single quick visit.</li>
                <li>The peaceful, disciplined surroundings allow patients to focus fully on recovery, away from the usual distractions of daily life.</li>
                <li>Many patients choose to stay for extended periods to maintain a consistent routine of consultation, therapy, rest and diet.</li>
                <li>Families are welcomed as part of the journey, with many patients travelling alongside relatives who support them through treatment.</li>
                <li>This blend of medical care with ashram living is one of the clearest differences between Balprada and typical clinic-only Ayurvedic centers nearby.</li>
              </ul>
            </div>


            {/* Section 10 — Patient Testimonials */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Real Patients Have Shared About Balprada
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients have described the follow-up guidance as giving them a clear structure for diet, daily habits, medicines and future consultations after returning home.</li>
                <li>Families have mentioned that the Balprada team explained Ayurvedic care, daily routine and food guidance in a calm, practical way.</li>
                <li>Visitors have highlighted the team&apos;s attentiveness through consultations, medicines, meals and the recommended routine, describing the overall experience as comfortable and supportive.</li>
                <li>These consistent themes reflect a care philosophy the hospital has followed for over three decades, rather than a recently adopted approach.</li>
              </ul>
            </div>


            {/* Section 11 — Who Should Consider Balprada */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Consider Balprada as Their Nearby Ayurvedic Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Patients managing chronic kidney, liver, heart, diabetes or thyroid concerns who want structured, doctor-guided Ayurvedic support.</li>
                <li>Families of patients undergoing cancer treatment who are looking for sensitive, supportive care alongside conventional medical treatment.</li>
                <li>Women seeking a private, sensitive space for hormonal or menstrual health concerns.</li>
                <li>Anyone wanting Ayurvedic medicine combined with yoga, naturopathy and panchakarma in one coordinated plan.</li>
                <li>Patients and families across Moradabad and nearby districts searching for a long-established, trusted Ayurvedic care provider close to home.</li>
              </ul>
            </div>


            {/* Section 12 — How to Evaluate */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Evaluate Whether Balprada Is the Right Fit for You
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Consider your specific health concern and check whether it falls within Balprada&apos;s treatment areas, such as kidney, liver, heart, cancer support, diabetes, thyroid or women&apos;s wellness.</li>
                <li>Think about whether you would benefit from a short consultation or a longer, ashram-based stay for a more immersive treatment experience.</li>
                <li>Weigh the convenience of the two branch locations against your own travel distance and schedule.</li>
                <li>Use the free OPD consultation on the 15th of every month as a low-commitment way to experience the hospital&apos;s approach firsthand.</li>
                <li>Speak directly with the team about your concern before deciding, so you have a clear picture of what treatment would involve.</li>
              </ul>
            </div>


            {/* Section 13 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">


              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation at Balprada
              </h2>


              <p className="text-black mb-6">
                Patients searching for a trusted Ayurvedic hospital near Moradabad can book a consultation at Balprada Ayurvedic Hospital &amp; Research Center. With 35 years of experience, two accessible branches, and a comprehensive range of treatments and supportive facilities, Balprada offers structured, doctor-guided Ayurvedic care for chronic and lifestyle-related health concerns. For patients traveling from outside Moradabad, the hospital also assists with planning ashram-based stays for a more immersive healing experience.
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


            {/* Section 14 — FAQs */}
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