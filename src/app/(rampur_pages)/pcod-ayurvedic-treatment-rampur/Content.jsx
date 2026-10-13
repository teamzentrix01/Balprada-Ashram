import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaPCODTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure PCOD?",
      a: "No. Ayurvedic care is supportive and works alongside your doctor&apos;s treatment, never in place of it.",
    },
    {
      q: "Q2. Can PCOD affect pregnancy?",
      a: "It can make conception harder for some women, so planning with a gynaecologist is important.",
    },
    {
      q: "Q3. Should I stop my hormonal tablets?",
      a: "Never. Change medicines only on your doctor&apos;s advice.",
    },
    {
      q: "Q4. Is consultation private?",
      a: "Yes. Women&apos;s consultations are conducted respectfully and privately.",
    },
    {
      q: "Q5. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q6. Which reports should I bring?",
      a: "Ultrasound, hormone and thyroid tests, blood sugar reports, prescriptions and medicines list.",
    },
    {
      q: "Q7. Is there a free consultation?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
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
                PCOD Ayurvedic Treatment in Rampur – Supportive Women&apos;s
                Wellness Care at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Support for PCOD in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  PCOD can bring irregular periods, weight gain, acne, hair
                  changes and worry about the future, and many women and
                  families in Rampur, Uttar Pradesh look for gentle, private
                  Ayurvedic support that works alongside proper tests and their
                  doctor&apos;s advice.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, and our Women&apos;s Wellness
                  programme provides private, sensitive and personalised care
                  for hormonal balance, menstrual health and weakness.
                </li>
                <li>
                  Our care is supportive and personalised. It combines
                  respectful consultation, in-house Ayurvedic medicines, diet
                  guidance, yoga and regular follow-up, and it is always
                  planned with your gynaecologist&apos;s advice in mind.
                </li>
                <li>
                  This page explains what PCOD is, which signs need medical
                  attention, how Balprada supports women, and how families from
                  Rampur can book a consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                An Honest Note About Ayurveda and PCOD
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  PCOD needs proper diagnosis, usually with examination, blood
                  tests and an ultrasound, so Ayurveda should never replace a
                  gynaecologist&apos;s assessment or medicines that have been
                  prescribed.
                </li>
                <li>
                  Anyone who promises to cure PCOD permanently or to guarantee
                  pregnancy within a fixed time is overstating what natural
                  care can do, and such promises can cause disappointment and
                  delay needed treatment.
                </li>
                <li>
                  Lifestyle correction is widely recognised as a key part of
                  managing PCOD, and Ayurvedic care can support diet,
                  digestion, weight, stress, sleep and routine alongside
                  medical guidance.
                </li>
                <li>
                  At Balprada, our doctors explain clearly what supportive care
                  can offer and when a gynaecologist or fertility specialist
                  should lead, so that women and families decide with
                  confidence.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding PCOD
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  PCOD, or polycystic ovarian disease, is a hormonal condition
                  in which the ovaries may not release eggs regularly, leading
                  to irregular periods and changes in hormone levels.
                </li>
                <li>
                  Many women with PCOD also have insulin resistance, excess
                  weight or difficulty losing weight, which is why diet,
                  activity and metabolic health matter so much in long-term
                  care.
                </li>
                <li>
                  Symptoms and severity vary widely, and some women notice
                  problems only when they plan pregnancy, while others struggle
                  with periods, skin and hair from the teenage years.
                </li>
                <li>
                  The real goals of long-term care are to support regular
                  cycles, balanced weight and metabolic health, emotional
                  wellbeing and, where desired, healthier chances of
                  conception through medical guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Hormonal imbalance, including higher levels of male-type
                  hormones and insulin resistance, plays an important role in
                  PCOD, and family history can increase the likelihood.
                </li>
                <li>
                  Excess weight, a sedentary lifestyle and long hours of
                  sitting can worsen insulin resistance and make symptoms
                  harder to manage.
                </li>
                <li>
                  Diets high in sugar, refined flour, fried and packaged foods,
                  along with irregular meals and poor sleep, can aggravate
                  hormonal and metabolic imbalance.
                </li>
                <li>
                  Long-term stress can disturb routine and hormones, so
                  emotional wellbeing is an important part of care and not an
                  optional extra.
                </li>
                <li>
                  Because causes and patterns differ, every woman needs her own
                  assessment and a plan that fits her age, health and goals.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Signs and Symptoms
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Irregular, delayed or missed periods, or very heavy or very
                  light bleeding, which are among the most common signs of
                  PCOD.
                </li>
                <li>
                  Weight gain, especially around the abdomen, along with
                  difficulty in losing weight despite effort.
                </li>
                <li>
                  Acne, oily skin, excess facial or body hair, thinning of
                  scalp hair or darkening of the skin around the neck and
                  underarms.
                </li>
                <li>
                  Mood changes, tiredness, poor sleep and difficulty in
                  conceiving, which often add emotional strain for women and
                  their families.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need Prompt Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Very heavy bleeding, bleeding that soaks through pads quickly
                  or lasts for many days, or periods that stop for several
                  months should be assessed by a doctor without delay.
                </li>
                <li>
                  Severe pelvic pain, fever with pain, or sudden pain with
                  dizziness or fainting needs urgent medical attention.
                </li>
                <li>
                  Pregnancy with severe pain, bleeding or vomiting should be
                  examined immediately by a gynaecologist.
                </li>
                <li>
                  Rapid weight gain, extreme thirst, frequent urination or
                  darkening of skin may suggest blood sugar problems and should
                  be tested early.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Women with PCOD
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Private and Respectful Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultations are conducted respectfully and privately,
                      with attention to diet, lifestyle and emotional
                      wellbeing, so that women feel comfortable sharing their
                      concerns and questions.
                    </li>
                    <li>
                      The vaidya reviews your cycle history, ultrasound and
                      hormone reports, symptoms, current medicines, weight and
                      daily habits, and explains the plan in simple language.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Supportive Ayurvedic Medicines
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada prepares its own Ayurvedic medicines in-house,
                      which supports quality and consistency in every plan and
                      gives patients more confidence in what they take.
                    </li>
                    <li>
                      Medicines are planned only after reviewing your current
                      hormonal tablets, thyroid or diabetes medicines and
                      supplements, so that care remains responsible and
                      coordinated with your doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diet and Lifestyle Correction
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Our doctors give practical guidance on meal timing,
                      portion size, food choices, activity and sleep that
                      support metabolic balance, healthy weight and steadier
                      cycles.
                    </li>
                    <li>
                      Women receive help with the day-to-day habits that matter
                      most, such as regular meals, reduced sugar and refined
                      food, and a daily walking or yoga routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Stress and Emotional Balance
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle yoga, pranayama and meditation help reduce stress,
                      support sleep and build calm, which matters because
                      stress and hormones influence each other.
                    </li>
                    <li>
                      Balprada&apos;s founder emphasised positivity as part of
                      recovery, and our team supports women and families with
                      patience, kindness and encouragement.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Working Together with Your Gynaecologist
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Tell your gynaecologist about every Ayurvedic medicine or
                      supplement you plan to take, because some products can
                      affect hormones, blood sugar or pregnancy planning.
                    </li>
                    <li>
                      Share your hormone reports, ultrasound and prescriptions
                      with the Balprada vaidya, so that supportive care is
                      planned safely around your treatment.
                    </li>
                    <li>
                      Do not stop prescribed hormonal tablets, thyroid medicines
                      or diabetes medicines on your own, and change them only
                      on your doctor&apos;s advice.
                    </li>
                    <li>
                      If you are trying to conceive or are pregnant, inform
                      both doctors, and avoid unknown herbal powders and strong
                      remedies that are not approved for pregnancy.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Related Conditions We Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Diabetes and thyroid care for blood sugar, hypothyroidism,
                  hyperthyroidism, energy, weight and metabolic balance, which
                  commonly occur together with PCOD.
                </li>
                <li>
                  Heart and lifestyle care for blood pressure, obesity and
                  stress, because weight and metabolic health influence
                  long-term wellbeing.
                </li>
                <li>
                  Women&apos;s wellness care for hormonal balance, menstrual
                  health and general weakness, including support for tiredness
                  and low energy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Care Journey at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 1: Consultation and Report Review
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Bring your ultrasound, hormone and thyroid tests, blood
                      sugar reports, prescriptions and a list of every medicine
                      you take, so the doctor can understand your condition
                      clearly.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 2: Personalised Ayurvedic Plan
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Care is planned using Balprada&apos;s Ayurvedic
                      medicines, diet discipline and lifestyle correction where
                      suitable, while respecting the advice of your
                      gynaecologist.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Yoga, meditation, naturopathy and pathology support are
                      added where they suit your condition and strength,
                      helping you stay active and track your health with
                      reliable tests.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 4: Regular Follow-Up
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Follow-up visits help the team observe progress, adjust
                      guidance and support long-term discipline, because PCOD
                      care works best with patience and steady habits.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                PCOD-Friendly Diet Guidance
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow any diet advice given by your doctor or dietitian
                  first, and let Ayurvedic food guidance work within it so that
                  nutrition remains safe for your condition.
                </li>
                <li>
                  Eat fresh, simple, home-cooked meals at regular times, avoid
                  skipping breakfast and avoid long gaps, because steady meals
                  support steadier blood sugar and energy.
                </li>
                <li>
                  Reduce sugar, sweets, sweet drinks, white bread, bakery items
                  and deep-fried snacks, and prefer vegetables, pulses, whole
                  grains, fruits and fibre-rich foods in sensible portions.
                </li>
                <li>
                  Keep dinner light and early, avoid late-night snacking, and
                  take a short walk after meals if possible, as it supports
                  digestion and insulin balance.
                </li>
                <li>
                  Drink enough water through the day, limit packaged and
                  processed food, and avoid crash diets, which can disturb
                  hormones and cycles further.
                </li>
                <li>
                  Do not start supplements, powders or home remedies from
                  unverified sources without advice, because some can interfere
                  with hormones or medicines.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Hormonal Balance
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Move your body most days with brisk walking, yoga, cycling or
                  exercises you enjoy, because regular activity improves
                  insulin response and supports healthy weight.
                </li>
                <li>
                  Practise yoga, pranayama and meditation regularly as advised,
                  avoiding strenuous practices if you feel weak or have heavy
                  bleeding.
                </li>
                <li>
                  Sleep on time and aim for steady, restful sleep, because poor
                  sleep and late nights can worsen cravings, stress and
                  hormonal imbalance.
                </li>
                <li>
                  Track your periods in a simple diary or phone app, because a
                  record of dates and flow helps the doctor and vaidya
                  understand your pattern.
                </li>
                <li>
                  Manage stress through hobbies, prayer, quiet time and talking
                  to supportive family members, and attend every follow-up
                  visit and repeat test on schedule.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supportive Facilities at Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Balprada Pathology Lab
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Reliable blood, urine and diagnostic testing helps the
                      doctor monitor sugar, thyroid and other markers, and
                      saves patients the effort of moving between multiple
                      centres.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Yoga, Meditation and Naturopathy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Gentle yoga and guided meditation build calm and
                      discipline, while naturopathy offers simple, nature-led
                      routines that work with the body&apos;s natural healing
                      capacity.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Ashram Environment and Organic Food
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A peaceful ashram environment supports rest, routine and
                      recovery away from daily stress, and wholesome, clean
                      eating supports the long-term lifestyle correction we
                      encourage.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Rampur Families Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  <span className="font-semibold">Experience:</span> Balprada
                  has served patients since 1991 and carries 35 years of
                  Ayurvedic care and research, founded on the seva sankalp of
                  Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  <span className="font-semibold">In-house medicines:</span>{" "}
                  Ayurvedic preparations are made at Balprada, which supports
                  quality and consistency in every treatment plan.
                </li>
                <li>
                  <span className="font-semibold">Honest guidance:</span>{" "}
                  women are told clearly what supportive care can offer and
                  when gynaecological or fertility treatment must lead.
                </li>
                <li>
                  <span className="font-semibold">Whole-person care:</span>{" "}
                  medicines, diet, yoga, pathology support and follow-up are
                  planned together as one connected journey.
                </li>
                <li>
                  <span className="font-semibold">Service spirit:</span> free
                  OPD consultation is available on the 15th of every month, and
                  the ashram and clinic are open seven days a week.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips Before Your First Visit
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Carry your ultrasound, hormone and thyroid reports, blood
                  sugar tests, prescriptions and a list of every medicine and
                  supplement you take.
                </li>
                <li>
                  Note your last few period dates, cycle length, flow, pain and
                  any other symptoms, and write down your questions about diet,
                  medicines and follow-up.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and feel free
                  to bring a trusted family member for support.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                OPD Timings, Address and Contact
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Main Branch (Ashram and Clinic)</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar
                        Pradesh 244415.
                      </li>
                      <li>
                        Timings: daily, 10:00 AM to 2:00 PM.
                      </li>
                      <li>
                        Call:{" "}
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
                        Address: F-19, Sector-13, New Moradabad, Delhi Road,
                        Moradabad, Uttar Pradesh 244001.
                      </li>
                      <li>
                        Vaidya ji is available on Sundays, so please call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">Free OPD and Appointments</p>
                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Free OPD consultation is available on the 15th of every
                        month.
                      </li>
                      <li>
                        Book by phone, WhatsApp on{" "}
                        <a href="tel:8126364606" className="hover:underline">
                          8126364606
                        </a>{" "}
                        or through the Book Appointment page on
                        balpradaindia.com.
                      </li>
                    </ul>
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
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
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