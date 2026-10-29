import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicSkinDiseaseTreatmentInMoradabad() {
  const faqs = [
    {
      q: "Can Ayurveda help with chronic skin diseases?",
      a: "Ayurveda offers supportive care through medicines, diet and lifestyle. Results depend on the condition, duration and patient discipline.",
    },
    {
      q: "How long does skin treatment take?",
      a: "Duration varies with the type, severity and how long the problem has lasted. Chronic conditions usually need patience and regular follow-up.",
    },
    {
      q: "Is a special diet necessary?",
      a: "Yes. Diet is an important part of care, and the doctor will guide you on foods to include and avoid.",
    },
    {
      q: "Can I continue my current medicines?",
      a: "Do not stop any prescribed medicine on your own. Bring your prescriptions so the doctor can advise safely.",
    },
    {
      q: "Are skin diseases contagious?",
      a: "Some, such as fungal infections and scabies, can spread. Many others, such as psoriasis and eczema, are not contagious.",
    },
    {
      q: "What should I bring for consultation?",
      a: "Bring previous prescriptions, recent reports, current medicines and a note of symptoms, duration and diet routine.",
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
                Ayurvedic Skin Disease Treatment in Moradabad – Balprada
                Ayurvedic Hospital &amp; Research Center
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Skin problems such as itching, rashes, scaling, patches and
                  recurring infections affect comfort, sleep, confidence and
                  daily work.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center in Moradabad
                  has offered trusted Ayurvedic care since 1991, built on the seva
                  sankalp of Sw. Vaidya Vijay Pal Singh Ji.
                </li>
                <li>
                  Care combines doctor consultation, in-house Ayurvedic medicines,
                  diet discipline, lifestyle correction and regular follow-up.
                </li>
                <li>
                  Patients from Moradabad, Bilari, Sambhal, Rampur, Amroha, Bijnor
                  and nearby districts visit for private, respectful and practical
                  guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Skin Disease in Ayurveda
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                The Ayurvedic View (Twak Vikara and Kushtha)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes skin disorders under twak vikara, and many
                  long-standing conditions under kushtha.
                </li>
                <li>
                  The skin is seen as a mirror of inner health, linked to
                  digestion, blood quality and mental stress.
                </li>
                <li>
                  Treatment therefore looks beyond the visible patch and studies
                  the whole person.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Role of Doshas, Rakta and Agni
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Vata: dryness, roughness, cracking, scaling and pain.
                </li>
                <li>
                  Pitta: redness, burning, heat, inflammation and oozing.
                </li>
                <li>
                  Kapha: thick patches, heavy itching, sticky discharge and slow
                  healing.
                </li>
                <li>
                  Impure or aggravated rakta (blood tissue) and weak digestive
                  fire (agni) are considered key contributors in many chronic skin
                  conditions.
                </li>
                <li>
                  Identifying the dominant dosha helps the vaidya personalise
                  medicines, diet and routine.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Why Skin Problems Often Return
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Treating only the surface may ease symptoms for a time but not
                  address the cause.
                </li>
                <li>
                  Ongoing triggers such as food habits, stress, hygiene, weather
                  or allergens can bring the condition back.
                </li>
                <li>
                  Ayurveda emphasises long-term discipline, which is why follow-up
                  matters.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Skin Conditions We Support at Balprada
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Eczema and Dermatitis
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Dry, itchy, red or weeping patches, often worse with weather
                  change, stress or certain products.
                </li>
                <li>
                  Care focuses on soothing inflammation, improving digestion and
                  avoiding triggers.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Psoriasis
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Thick, scaly, silvery patches on elbows, knees, scalp or back,
                  often with a long, up-and-down course.
                </li>
                <li>
                  Supportive Ayurvedic care, diet control and stress management
                  are planned over a longer period.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Fungal Infections (Dadru, Ringworm)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Circular, itchy, red patches, commonly in skin folds, groin,
                  waist or underarms, worse in humid weather.
                </li>
                <li>
                  Hygiene discipline and medicines are advised together, since
                  reinfection is common.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Itching, Rashes and Allergic Skin Problems (Khujli, Urticaria)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sudden or recurring hives, red rashes and intense itching
                  linked to food, dust, weather or medicines.
                </li>
                <li>
                  Attention is given to digestion, triggers and the pattern of
                  flare-ups.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Acne, Pimples and Pigmentation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Recurring breakouts, oily skin, dark marks and uneven tone,
                  often tied to digestion, hormones and stress.
                </li>
                <li>Diet and routine correction support the Ayurvedic plan.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Vitiligo (Safed Daag) and Other Chronic Patches
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Pale or discoloured patches that need patience, regular review
                  and realistic expectations.
                </li>
                <li>
                  Careful assessment helps the vaidya decide a suitable supportive
                  plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Scabies, Boils and Skin Infections
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Intense night-time itching, small bumps or painful boils that
                  may spread in a household.
                </li>
                <li>
                  Early consultation and hygiene measures help prevent spread.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms That Need Attention
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Visible Skin Changes
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Red, dark, pale or scaly patches that last for weeks.
                </li>
                <li>Dryness, cracking, thickening or peeling of the skin.</li>
                <li>Blisters, pus-filled spots or oozing areas.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Sensations and Discomfort
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Constant itching or burning, especially at night.</li>
                <li>
                  Pain, tenderness or a tight feeling in the affected area.
                </li>
                <li>Sleep disturbance and irritability due to itching.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                When to Seek Urgent Medical Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Rapidly spreading rash with fever, swelling of lips or face, or
                  difficulty breathing.
                </li>
                <li>
                  Painful blisters, large open sores or signs of infection such as
                  pus and warmth.
                </li>
                <li>
                  A mole or patch that changes shape, bleeds or does not heal,
                  since some skin changes need proper diagnosis.
                </li>
                <li>
                  Emergency cases should receive urgent medical care first;
                  Ayurvedic care can follow under proper guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Triggers of Skin Disease
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Food and Digestion
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Incompatible food combinations, such as milk with sour or salty
                  items, are traditionally avoided in Ayurveda.
                </li>
                <li>
                  Excess oily, fried, spicy, sour and packaged food may aggravate
                  skin symptoms in some patients.
                </li>
                <li>
                  Irregular meals, indigestion and constipation can add to the
                  problem.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Lifestyle and Environment
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Poor sleep, daytime sleeping and irregular routine.</li>
                <li>
                  Dust, pollution, humidity, sweating and unclean clothing.
                </li>
                <li>
                  Hard water, harsh soaps, chemical cosmetics and some hair dyes.
                </li>
                <li>
                  Sharing towels, combs or clothing in infectious conditions.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Stress and Emotional Health
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Stress, anxiety and anger are known to worsen itching and
                  flare-ups.
                </li>
                <li>
                  Mind and skin affect each other, so calm routines are part of
                  the plan.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Constitution and Family Tendency
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Some people inherit a tendency toward allergies, eczema or
                  psoriasis.
                </li>
                <li>
                  Personal body type (prakriti) influences how the condition shows
                  itself.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Our Approach to Skin Disease Treatment in Moradabad
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Detailed Consultation
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The vaidya reviews your skin concern, how long it has lasted,
                  what worsens or eases it, and any family history.
                </li>
                <li>
                  Food habits, bowel pattern, sleep, stress, work environment and
                  cosmetic use are discussed.
                </li>
                <li>
                  Previous prescriptions, creams, recent reports and current
                  medicines are reviewed before any guidance is suggested.
                </li>
                <li>Consultation is private and unhurried.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Personalised Ayurvedic Plan
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The plan is based on the type of condition, dosha balance,
                  digestion and overall health.
                </li>
                <li>
                  Balprada&apos;s in-house Ayurvedic medicines are used where
                  suitable, with attention to quality.
                </li>
                <li>
                  Internal medicines may be combined with suitable external
                  applications as advised by the doctor.
                </li>
                <li>
                  Diet discipline and lifestyle correction are treated as part of
                  the treatment, not as extras.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Supportive Facilities
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma-based approaches may be considered where assessment
                  supports them.
                </li>
                <li>
                  Yoga and breathing practices help stress, digestion and
                  circulation.
                </li>
                <li>
                  Naturopathy-style guidance supports simple, nature-led habits.
                </li>
                <li>
                  Balprada Pathology Lab offers blood, urine and diagnostic
                  testing so doctors can review health details more clearly.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Regular Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Skin conditions often change slowly, so progress is reviewed
                  over time.
                </li>
                <li>
                  The team looks at symptoms, patches, itching, food routine and
                  medicine response.
                </li>
                <li>
                  Guidance is adjusted as the condition changes, so care remains
                  practical and responsible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Therapies Used for Skin Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Aushadha Chikitsa (Herbal Medicine)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Herbal formulations are chosen to support digestion, purify
                  rakta and calm inflammation.
                </li>
                <li>
                  Different medicines suit dry, burning or sticky conditions, so
                  there is no single remedy for all skin disease.
                </li>
                <li>
                  Dose and duration are decided by the vaidya; patients should
                  avoid self-medication and leftover prescriptions.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Shodhana (Panchakarma Cleansing)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurveda describes cleansing methods such as virechana
                  (therapeutic purgation) for suitable chronic skin conditions.
                </li>
                <li>
                  These therapies are planned only after individual assessment and
                  are not suitable for everyone, including weak patients, children,
                  the elderly or pregnant women unless advised.
                </li>
                <li>
                  Balprada&apos;s panchakarma facility supports cleansing, balance
                  and recovery under supervision.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                External Care (Bahya Chikitsa)
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Medicated oils, herbal pastes and washes may be suggested for
                  suitable conditions.
                </li>
                <li>
                  Do not apply new oils or home mixtures on active, oozing or
                  infected skin without advice.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Rasayana and Strength Support
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Rasayana measures support general strength and tissue health
                  after the main symptoms settle.
                </li>
                <li>
                  They are chosen according to the patient&apos;s age, digestion
                  and condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Healthy Skin
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Foods That May Help
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fresh, warm, simply cooked meals with seasonal vegetables.
                </li>
                <li>
                  Bitter and astringent vegetables such as bitter gourd, bottle
                  gourd, ridge gourd and leafy greens, as suited to the patient.
                </li>
                <li>
                  Moong dal, whole grains, and enough water through the day.
                </li>
                <li>Home-cooked food with regular meal timings.</li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Foods to Reduce or Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Excess sour, salty, fried and very spicy food.</li>
                <li>
                  Curd at night, and milk combined with fish, sour fruit or salty
                  snacks.
                </li>
                <li>
                  Bakery items, packaged snacks, cold drinks and heavy sweets.
                </li>
                <li>Alcohol, smoking and excess tea or coffee.</li>
                <li>
                  Foods the patient has already noticed trigger itching or rashes.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Eating Habits
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>Eat only when hungry and avoid overeating.</li>
                <li>Keep a gap between dinner and sleep.</li>
                <li>
                  Individual diet charts are shared by the doctor, since needs
                  vary by condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Skin Care Tips
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Daily Routine
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sleep and wake at regular times, and avoid sleeping during the
                  day.
                </li>
                <li>
                  Bathe with clean water and mild, fragrance-free products.
                </li>
                <li>
                  Wear clean, loose, cotton clothing, and wash towels and
                  bedsheets regularly.
                </li>
                <li>
                  Keep nails short and avoid scratching, which can worsen the
                  condition.
                </li>
                <li>
                  Dry skin folds well after bathing to reduce fungal growth.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Yoga, Breathing and Stress Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Gentle yoga, pranayama such as anulom vilom, and meditation help
                  calm the mind.
                </li>
                <li>
                  Walking and light exercise support digestion and circulation.
                </li>
                <li>
                  Practise under guidance, especially during painful flare-ups.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Habits to Avoid
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Using steroid creams or strong medicines on your own for long
                  periods.
                </li>
                <li>
                  Trying many home remedies at once or changing treatment
                  frequently.
                </li>
                <li>
                  Ignoring early symptoms until the condition becomes widespread.
                </li>
                <li>
                  Stopping prescribed treatment without discussing it with your
                  doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Balprada for Skin Treatment in Moradabad
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
                  Private and respectful setting: patients can speak openly about
                  visible and sensitive concerns.
                </li>
                <li>
                  Diagnostic support: Balprada Pathology Lab assists with relevant
                  tests.
                </li>
                <li>
                  Peaceful ashram environment: a calm setting that supports
                  discipline and recovery.
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
                  Share your skin history, triggers, diet, medicines and any
                  reports.
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
                Book Your Skin Consultation in Moradabad
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Do not ignore a skin problem that keeps returning; early
                  guidance often makes care easier.
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
                  related care for weak digestion and panchakarma.
                </li>
              </ul>

              <p className="text-sm text-black">
                Disclaimer: This information is for general awareness and is not a
                substitute for medical advice. Treatment outcomes vary by patient.
                Please consult a qualified doctor before starting any treatment.
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