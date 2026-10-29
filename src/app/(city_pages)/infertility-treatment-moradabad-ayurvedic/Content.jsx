import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicInfertilityTreatmentInMoradabad() {
  const faqs = [
    {
      q: "Can Ayurveda help with infertility?",
      a: "Ayurveda offers supportive care through medicines, diet and lifestyle. Outcomes depend on the cause, age and overall health, and cannot be guaranteed.",
    },
    {
      q: "Should both partners be evaluated?",
      a: "Yes. Infertility can involve either or both partners, so both should be assessed.",
    },
    {
      q: "How long does treatment take?",
      a: "Duration depends on the cause, cycle health, age and discipline. The doctor will explain the expected course after consultation.",
    },
    {
      q: "Can I continue modern fertility treatment?",
      a: "Do not stop or change prescribed treatment on your own. Please tell the doctor about all treatments you are taking.",
    },
    {
      q: "Is diet important for fertility?",
      a: "Yes. Nourishing, home-cooked food and healthy routines are an important part of care.",
    },
    {
      q: "What should I bring for consultation?",
      a: "Bring previous prescriptions, scan reports, hormone tests, semen analysis, current medicines and a note of your cycle history.",
    },
    {
      q: "What are the OPD timings?",
      a: "OPD runs from 10:00 AM to 2:00 PM. Please call before visiting, especially for branch availability.",
    },
    {
      q: "Where can I consult in Moradabad?",
      a: "The Moradabad Branch is at F-19, Sector-13, New Moradabad, Delhi Road. Vaidya ji is available on Sundays, so call first.",
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
                Ayurvedic Infertility Treatment in Moradabad – Balprada
                Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Difficulty in conceiving can be emotionally heavy for a couple,
                  and it is often surrounded by silence, pressure and unwanted
                  advice.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center in Moradabad
                  has offered trusted Ayurvedic care since 1991, built on the seva
                  sankalp of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Care combines doctor consultation, in-house Ayurvedic medicines,
                  diet guidance, lifestyle correction and regular follow-up for
                  women and men.
                </li>
                <li>
                  Patients from Moradabad, Bilari, Sambhal, Rampur, Amroha, Bijnor
                  and nearby districts visit for private, sensitive and respectful
                  guidance.
                </li>
                <li>
                  Ayurvedic care is offered as supportive care and works best when
                  proper tests and medical evaluation are also done.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Infertility
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Is Infertility?
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Infertility generally means not being able to conceive after
                  about one year of regular, unprotected intercourse.
                </li>
                <li>
                  For women above 35 years, doctors often advise evaluation after
                  six months.
                </li>
                <li>
                  It is a shared concern of the couple: both partners should be
                  assessed, and neither should be blamed.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Primary and Secondary Infertility
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Primary infertility: a couple has never conceived.
                </li>
                <li>
                  Secondary infertility: a couple has conceived earlier but is
                  unable to conceive again.
                </li>
                <li>
                  Unexplained infertility: tests do not show a clear cause, which
                  is common and does not mean there is no hope.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                The Ayurvedic View (Bandhyatva)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes difficulty in conception under bandhyatva and
                  links healthy conception to four factors: ritu (fertile time),
                  kshetra (reproductive organs), ambu (nourishment) and beeja
                  (egg and sperm).
                </li>
                <li>
                  Balance of the doshas, healthy digestion, good tissue
                  nourishment, sound sleep and a calm mind are all considered
                  essential.
                </li>
                <li>
                  Treatment therefore looks at the whole person and the couple,
                  not only a single test result.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Infertility
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Female Factors
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Irregular periods, long cycles or absent ovulation.</li>
                <li>
                  Hormonal imbalance, including PCOS and thyroid disorders.
                </li>
                <li>
                  Blocked or damaged fallopian tubes, fibroids or endometriosis.
                </li>
                <li>
                  Weakness, anaemia, low body weight or being overweight.
                </li>
                <li>Increasing age and past pelvic infections.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Male Factors
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Low sperm count, poor sperm movement or abnormal sperm shape.
                </li>
                <li>Hormonal problems, varicocele or past infections.</li>
                <li>
                  Heat exposure, long sitting hours, smoking, alcohol and tobacco.
                </li>
                <li>Stress, poor sleep, obesity and sedentary habits.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Lifestyle and Dietary Factors
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Irregular meals, junk food, excess sugar and fried foods.
                </li>
                <li>Late nights, shift work and constant mental pressure.</li>
                <li>
                  Lack of exercise, or excessive and exhausting exercise.
                </li>
                <li>
                  Diabetes, thyroid and blood pressure that are not well
                  controlled.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Emotional and Relationship Factors
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Anxiety, grief, stress and fear of judgment can affect hormones
                  and sexual wellbeing.
                </li>
                <li>
                  Pressure from family and society may add to the strain.
                </li>
                <li>
                  Support, open conversation and a calm routine form part of the
                  care plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should Seek Evaluation
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                For Women
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Periods that are very irregular, absent, extremely painful or
                  very heavy.
                </li>
                <li>
                  Excess hair growth, acne or sudden weight changes with irregular
                  cycles.
                </li>
                <li>
                  Pelvic pain, unusual discharge or repeated pregnancy loss.
                </li>
                <li>
                  No pregnancy after a year of trying, or six months above age 35.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                For Men
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Difficulty with erection, ejaculation or low desire.</li>
                <li>Pain or swelling in the testicles.</li>
                <li>
                  Past surgery, infection or injury in the genital area.
                </li>
                <li>Abnormal semen report advised by a doctor.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                When to Get Urgent Medical Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Severe lower abdominal pain, heavy bleeding or fainting.
                </li>
                <li>Fever with pelvic pain or foul discharge.</li>
                <li>Sudden pain or swelling in the testicles.</li>
                <li>
                  Emergencies should receive urgent medical care first; Ayurvedic
                  care can follow under proper guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Infertility Care in Moradabad
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Private and Detailed Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The vaidya listens to your concerns, duration of trying, cycle
                  pattern, health history and past treatments.
                </li>
                <li>
                  Food habits, digestion, sleep, stress, work routine and family
                  history are reviewed.
                </li>
                <li>
                  Previous prescriptions, scan reports, hormone tests, semen
                  analysis and current medicines are studied before any guidance
                  is suggested.
                </li>
                <li>
                  Couples may be seen together or separately, whichever is more
                  comfortable.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Personalised Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The plan is based on dosha balance, digestion, body strength,
                  cycle health and the findings from reports.
                </li>
                <li>
                  Balprada&apos;s in-house Ayurvedic medicines are used where
                  suitable, with attention to quality.
                </li>
                <li>
                  Medicines aim to support regular cycles, hormonal balance,
                  reproductive tissue health and general strength.
                </li>
                <li>
                  Diet and routine correction are treated as part of the
                  treatment, not as extras.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab offers blood, urine and diagnostic
                  testing so doctors can review health details more clearly.
                </li>
                <li>
                  Yoga, breathing and meditation help stress, circulation and
                  calm.
                </li>
                <li>
                  Panchakarma-based approaches may be considered where assessment
                  supports them.
                </li>
                <li>
                  Naturopathy-style guidance supports simple, nature-led habits.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Regular Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow-up allows the team to review cycles, symptoms, test
                  reports and response to medicines.
                </li>
                <li>
                  Guidance is adjusted as the condition changes, so care remains
                  practical and responsible.
                </li>
                <li>
                  Where needed, the doctor advises coordination with a
                  gynaecologist, urologist or fertility specialist.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Therapies Used for Fertility Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Aushadha Chikitsa (Herbal Medicine)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Herbal formulations are chosen to support digestion, cycle
                  regularity, hormonal balance and reproductive health.
                </li>
                <li>
                  Medicines differ for women and men, and for each patient&apos;s
                  dosha pattern, so there is no single remedy for all.
                </li>
                <li>
                  Dose and duration are decided by the vaidya; patients should
                  avoid self-medication, especially unlabelled &quot;fertility
                  tonics&quot;.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Shodhana (Panchakarma Cleansing)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes preparatory cleansing, such as virechana and
                  basti, to improve the body&apos;s readiness before nourishing
                  treatment.
                </li>
                <li>
                  These therapies are planned only after individual assessment and
                  are not suitable for everyone, including weak patients and those
                  who may already be pregnant.
                </li>
                <li>
                  Balprada&apos;s panchakarma facility supports cleansing, balance
                  and recovery under supervision.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Rasayana and Vajikarana
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Rasayana measures support overall strength, tissue health and
                  resilience.
                </li>
                <li>
                  Vajikarana is the Ayurvedic branch dealing with reproductive
                  health and vitality, used here according to the patient&apos;s
                  need and suitability.
                </li>
                <li>
                  These are chosen by the doctor and should not be taken casually.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Garbhini Paricharya (Care After Conception)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  If conception occurs, the doctor can guide diet and routine in
                  line with Ayurvedic pregnancy care.
                </li>
                <li>
                  Regular obstetric care and scans with your gynaecologist remain
                  essential.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Women&apos;s Health and Hormonal Balance
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                PCOS and Irregular Periods
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Irregular or missed periods, weight gain, acne and excess hair
                  growth may point to PCOS.
                </li>
                <li>
                  Care focuses on digestion, weight management, routine and
                  hormone-supporting medicines.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Thyroid and Metabolic Health
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Thyroid imbalance, diabetes and obesity can affect ovulation and
                  cycles.
                </li>
                <li>
                  Balprada&apos;s treatments for thyroid, diabetes and women&apos;s
                  wellness can support the wider picture.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Weakness and Nutrition
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Anaemia, tiredness and poor nourishment may lower the
                  body&apos;s readiness for pregnancy.
                </li>
                <li>
                  Diet guidance and strengthening care are included in the plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Men&apos;s Reproductive Health
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Sperm Health and Lifestyle
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sperm health is influenced by heat, stress, smoking, alcohol,
                  sleep and diet.
                </li>
                <li>
                  Lifestyle correction is advised along with medicines where
                  suitable.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Stress, Sleep and Vitality
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chronic stress and poor sleep may affect hormones and vitality.
                </li>
                <li>
                  Yoga, breathing practice and a regular routine support recovery.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Habits That May Help
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Avoid tobacco, alcohol and excess heat exposure, such as long
                  hot baths or prolonged laptop use on the lap.
                </li>
                <li>
                  Take breaks from long sitting, and stay active.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Fertility Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Foods That May Help
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fresh, warm, home-cooked meals with seasonal vegetables and
                  fruits.
                </li>
                <li>
                  Whole grains, pulses, nuts, seeds and good quality ghee in
                  moderation, as advised.
                </li>
                <li>
                  Milk and dry fruits as suited to the patient&apos;s digestion.
                </li>
                <li>Plenty of water and regular meal timings.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Foods to Reduce or Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Junk food, bakery items, packaged snacks and cold drinks.
                </li>
                <li>
                  Excess sugar, fried food, very spicy food and heavy late-night
                  meals.
                </li>
                <li>Alcohol, smoking and tobacco.</li>
                <li>Excess tea, coffee and energy drinks.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Eating Habits
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Eat only when hungry and avoid overeating.</li>
                <li>Keep a gap between dinner and sleep.</li>
                <li>
                  Individual diet charts are shared by the doctor, since needs
                  vary by patient.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Home Care Tips
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Daily Routine
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sleep and wake at regular times, and aim for sound, restful
                  sleep.
                </li>
                <li>
                  Keep a healthy weight through food discipline and daily walking.
                </li>
                <li>
                  Track the menstrual cycle to understand your fertile days.
                </li>
                <li>
                  Reduce screen time at night and avoid late-night eating.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Yoga, Breathing and Calm
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Gentle yoga, anulom vilom and meditation help lower stress.
                </li>
                <li>
                  Practise under guidance, especially if you have pain, bleeding
                  or other medical concerns.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Habits to Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Smoking, alcohol and tobacco in any form.</li>
                <li>
                  Taking unlabelled herbal or hormone products on someone&apos;s
                  advice without a doctor.
                </li>
                <li>
                  Blaming one partner, or delaying evaluation out of
                  embarrassment.
                </li>
                <li>Stopping prescribed medicines without medical advice.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Infertility Care in Moradabad
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  35 years of experience: Balprada has served patients since 1991
                  with Ayurvedic consultation and care.
                </li>
                <li>
                  In-house medicines: the team emphasises self-prepared medicines
                  and quality.
                </li>
                <li>
                  Experienced vaidyas: assessment is guided by traditional
                  knowledge and clear communication.
                </li>
                <li>
                  Whole-person care: medicines, diet, yoga, naturopathy and
                  panchakarma work together where suitable.
                </li>
                <li>
                  Private, respectful setting: couples can speak openly about
                  sensitive concerns.
                </li>
                <li>
                  Diagnostic support: Balprada Pathology Lab assists with relevant
                  tests.
                </li>
                <li>
                  Honest guidance: patients are told clearly when specialist care
                  or further tests are needed.
                </li>
                <li>
                  Two branches: the Main Branch near Bilari and the Moradabad
                  Branch in New Moradabad.
                </li>
                <li>
                  Free OPD on the 15th of every month: a chance to consult with
                  ease.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Patient Journey at Balprada
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Step 1: Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Share your history, cycle details, reports and current
                  medicines.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 2: Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Receive a personalised plan covering medicines, diet and
                  routine.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 3: Supportive Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Yoga, panchakarma, naturopathy or pathology support are added
                  where suitable.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Step 4: Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Regular review helps the team observe progress and adjust
                  guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Fertility Consultation in Moradabad
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Do not carry this worry alone; early, private guidance often
                  brings clarity and calm.
                </li>
                <li>Free OPD is available on the 15th of every month.</li>
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. Daily,
                  10:00 AM to 2:00 PM. Call{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001. Sunday vaidya availability.
                  Call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>
                  .
                </li>
                <li>WhatsApp: 8126364606</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                </li>
                <li>
                  Book online at the Balprada appointment page, or explore our
                  related care for hormonal balance, menstrual health and
                  panchakarma.
                </li>
              </ul>

              <p className="text-sm text-black">
                Disclaimer: This information is for general awareness and is not a
                substitute for medical advice. Treatment outcomes vary by patient
                and cannot be guaranteed. Please consult a qualified doctor before
                starting any treatment.
              </p>
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