import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BenefitsOfBalpradaAyurvedaKanth() {
  const faqs = [
    {
      q: "What are the main benefits of Balprada Ayurveda?",
      a: "Personalized consultation, in-house medicines, supportive therapies, lab support and regular follow-up.",
    },
    {
      q: "Is Balprada suitable for chronic conditions?",
      a: "Yes, long-term conditions are supported through consultation, medicines, diet guidance and review.",
    },
    {
      q: "Does panchakarma help everyone?",
      a: "Suitability is decided after individual assessment.",
    },
    {
      q: "Are results guaranteed?",
      a: "No, results depend on the condition, discipline and follow-up.",
    },
    {
      q: "Is free OPD available?",
      a: "Yes, on the 15th of every month.",
    },
    {
      q: "Should I stop my other medicines?",
      a: "No, continue them unless your own doctor advises otherwise.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Balprada Ayurveda Kanth: How Balprada Ayurvedic Care
                Helps Patients
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Key Benefits of Balprada Ayurvedic Care for Kanth Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Understanding the Benefits
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients from Kanth often ask what they truly gain from
                      choosing Balprada Ayurveda, and the honest answer is a
                      complete, personalized and carefully reviewed care journey
                      rather than a single medicine or a quick promise.
                    </li>
                    <li>
                      The benefits described here are benefits of the way care is
                      planned and delivered at Balprada Ayurvedic Hospital &amp;
                      Research Center, and individual results always depend on
                      the condition, its stage, the patient&apos;s discipline and
                      regular follow-up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Benefit 1: A Personalized Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Before suggesting any Ayurvedic guidance, the doctor
                      considers symptoms, medical history, current treatment,
                      food habits, sleep, stress and daily routine, so the plan
                      is made for the patient and not copied from a standard
                      list.
                    </li>
                    <li>
                      Diagnostic reports are reviewed where relevant, which helps
                      the vaidya understand the condition properly and avoid
                      guesswork.
                    </li>
                    <li>
                      Families from Kanth benefit from a consultation that
                      explains the condition, the diet and the routine in simple
                      language, so everyone at home understands what is expected.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Benefit 2: Experience Built Over 35 Years
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada has served patients since 1991, when Sw. Vaidya
                      Vijay Pal Singh Ji started the institution with a vision of
                      ayurvedic healing and social service, and this long record
                      brings deep experience with chronic and serious conditions.
                    </li>
                    <li>
                      Dr. U. S. Sharma, CMS at Balprada, has more than 20 years
                      of Ayurvedic practice with a focus on kidney and liver
                      conditions, long-term chronic disease care and general
                      consultation.
                    </li>
                    <li>
                      The research and pharmacy side is supported by Dr. Chetan
                      Anand of Balprada Herbal Wellness Private Limited, who has
                      more than 7 years of experience in herbal product research
                      and development.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Benefit 3: In-House Ayurvedic Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Herbal Wellness Private Limited prepares
                      traditional and patent Ayurvedic medicines in an organized
                      way at the main branch, supported by modern systems and
                      research-led herbal wellness work.
                    </li>
                    <li>
                      Because the medicines come from the same ecosystem as the
                      clinic, doctors can prescribe with confidence and patients
                      can ask questions about their medicines directly at the
                      OPD.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Benefit 4: Care for Many Health Concerns
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Kidney and urinary care covers kidney failure, kidney
                      stones, swelling and diabetes-linked kidney concerns, with
                      lifestyle guidance built around the patient&apos;s reports.
                    </li>
                    <li>
                      Liver and digestive care covers fatty liver, jaundice and
                      weak digestion, with lifestyle correction and guided
                      Ayurvedic care to support liver metabolism.
                    </li>
                    <li>
                      Cancer supportive care offers help with strength and
                      recovery, diet guidance and stress support during serious
                      illness, always alongside the treatment advised by the
                      specialist.
                    </li>
                    <li>
                      Heart, blood pressure, diabetes, thyroid and women&apos;s
                      wellness care are also available, so a family can often
                      find guidance for several concerns in one place.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    6. Benefit 5: Diet and Lifestyle Guidance
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Food discipline, daily routine, sleep and stress management
                      are treated as part of the treatment, which is important
                      because chronic conditions are shaped by everyday habits.
                    </li>
                    <li>
                      For diabetes, the care plan supports food discipline,
                      physical activity, prescribed care and regular blood sugar
                      monitoring, instead of promising a quick cure.
                    </li>
                    <li>
                      Patients learn practical changes they can follow at home in
                      Kanth, which keeps the benefit going between visits.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Supportive Facilities
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma at Balprada is described as supporting
                      cleansing, balance and recovery through traditional
                      procedures, doctor-guided planning and recovery support.
                    </li>
                    <li>
                      Each patient gets an individual assessment first, which
                      decides whether the programme suits them and how often
                      sessions are needed, so the therapy is never given blindly.
                    </li>
                    <li>
                      Patients are asked to share existing conditions, current
                      medicines and any mobility concerns before starting, which
                      keeps the process safer.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga and Ayurveda together support balance across body,
                      mind and breath, helping patients build discipline,
                      strength and calm through breath and posture practice.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Naturopathy works with the body&apos;s natural healing
                      capacity through simple, nature-led practices, detox
                      support and lifestyle correction that patients can continue
                      at home.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Meditation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Guided meditation and breath awareness support emotional
                      steadiness, sleep and a calmer healing journey, which is a
                      real benefit for patients and attendants who are anxious
                      about a long illness.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Physiotherapy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy supports safe movement, mobility, strength
                      and recovery through mobility assessment and guided
                      rehabilitation, within the wider care plan.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of In-House Pathology Support
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Convenient Testing
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Labs provides Complete Blood Count, Thyroid
                      Profile, Liver Function Test, Kidney Function Test,
                      Diabetes Profile with blood sugar and HbA1c, Lipid Profile,
                      Urine Routine and Microscopy, and Vitamin B12 and Vitamin D
                      tests.
                    </li>
                    <li>
                      Having a lab linked to the clinic saves travel and confusion
                      for families coming from Kanth, and other doctor-advised
                      tests may also be available on request.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Report-Based Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reports help doctors understand the condition and track
                      progress, so follow-up decisions rest on actual results,
                      and patients should call the lab to confirm test
                      preparation and charges.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of the Ashram Environment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Peaceful Surroundings
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada Ashram brings naturopathy, yoga, meditation,
                      panchakarma and physiotherapy together in a peaceful,
                      nature-led setting backed by 35 years of experience.
                    </li>
                    <li>
                      Patient reviews describe the surroundings as serene, the
                      staff as humble and kind, and the atmosphere as warm and
                      supportive, which helps patients rest and follow the
                      routine with a settled mind.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Positive Outlook
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The late Vaidya Shri Vijaypal Singh Ji taught that staying
                      positive gives courage to face difficult circumstances, and
                      this encouraging spirit is part of the Balprada culture.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Organic Food and Herbal Products
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Organic Food page describes naturally grown and
                  chemical-free items such as potatoes, barley daliya,
                  multigrain atta, fresh amla, natural raw honey, whole grains
                  and pulses, fresh haldi and herbs, seasonal mangoes and an
                  organic family combo.
                </li>
                <li>
                  Availability depends on harvest and season, so families should
                  contact the team for current stock, quantity, price, pickup and
                  courier options.
                </li>
                <li>
                  Balprada Enterprises also works with herbal tea, spices, oils,
                  avaleh, pickles and murabba, which helps families who want
                  cleaner everyday food choices to support their diet plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Service and Seva
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Jansewa Sansthan runs Vridhashram for elderly people
                  and those without support, Navtarun Ashram for children in
                  need, residential school support and Gaushala seva.
                </li>
                <li>
                  This service work shows that the institution is rooted in seva,
                  which gives families extra trust that care is offered with
                  sincerity.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Regular Follow-up
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Progress is reviewed regularly so that guidance stays practical
                  and responsible, and the plan can be adjusted according to the
                  patient&apos;s response.
                </li>
                <li>
                  Regular review keeps patients disciplined with medicines, food
                  and routine, which matters most in conditions that respond
                  slowly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits for Families and Attendants
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Clear Communication
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Family members are included in the conversation, so the
                      person who cooks, gives medicines or accompanies the
                      patient understands the diet and routine and can help at
                      home.
                    </li>
                    <li>
                      Elderly patients and those with serious illness are given
                      time and patience, and the staff, described by patients as
                      humble and kind, help attendants understand the plan
                      without hurry.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Everything in One Place
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation, medicines, therapies, diagnostics, herbal
                      products and ashram care belong to one ecosystem, which
                      reduces running around and makes follow-up simpler for
                      families travelling from Kanth.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Benefits Most from Balprada Care
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Long-Term Patients
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      People living with kidney, liver, sugar, thyroid, blood
                      pressure or heart concerns who want Ayurvedic and lifestyle
                      support alongside regular medical care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Patients with Serious Illness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients who need supportive care for strength, diet,
                      energy and emotional balance, planned sensitively and
                      honestly with their specialist&apos;s treatment kept in
                      place.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Women Seeking Private Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Women who prefer private, personalized care for hormonal
                      balance, menstrual health and weakness, with enough time to
                      speak openly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Families Wanting Clarity
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families confused by many reports and opinions who want a
                      vaidya to explain the condition, the diet and the routine
                      clearly.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Get the Most Benefit from Treatment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Before the Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring past prescriptions, recent test reports, current
                      medicines and notes on symptoms, how long you have had them
                      and your daily diet, as the FAQ page advises.
                    </li>
                    <li>
                      Call or message on WhatsApp first, because availability can
                      vary by branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. During Treatment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Take medicines exactly as advised, follow the diet and
                      routine honestly and tell the vaidya about any missed doses
                      or changes in how you feel.
                    </li>
                    <li>
                      Share every other medicine, supplement or home remedy you
                      use, so that the plan stays safe and clear.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. After the Visit
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Keep reports in one folder, note the next review date and
                      return for follow-up, because steady review is where much
                      of the benefit of Ayurvedic care comes from.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Convenience and Access for Kanth Patients
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The main branch in Moradabad district is open daily from 10:00
                  AM to 2:00 PM, and the ashram and clinic stay open seven days a
                  week.
                </li>
                <li>
                  The Moradabad branch on Delhi Road offers Vaidya ji on Sundays,
                  and patients should call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  before visiting.
                </li>
                <li>
                  A free OPD consultation is available on the 15th of every
                  month, and appointments can be booked by calling{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  , by WhatsApp or through the website.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe and Honest Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada does not ask patients to abandon dialysis, insulin,
                  cancer treatment or other prescribed care, and patients should
                  tell the vaidya about all medicines they use.
                </li>
                <li>
                  Emergencies should always go to urgent medical care first, and
                  no honest practitioner can promise guaranteed results.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">Visit Balprada</h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                        Bilari, District Moradabad, Uttar Pradesh 244415, call{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>
                        .
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Moradabad Branch</p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        F-19, Sector-13, New Moradabad, Delhi Road, Moradabad,
                        Uttar Pradesh 244001, call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>
                        .
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Email</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>
                      .
                    </li>
                  </ul>
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
            </section>

            <section className="mb-12">
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
            </section>
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