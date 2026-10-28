import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function LiverCirrhosisAyurvedicTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda support liver cirrhosis treatment in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for cirrhosis at its Bilari branch, alongside your medical care. It aims to support strength, digestion and comfort.",
    },
    {
      q: "Can cirrhosis be completely cured?",
      a: "Scarring of the liver is not easily reversed. Early care, avoiding alcohol and regular monitoring can help protect the remaining liver function.",
    },
    {
      q: "What reports should I bring to the first visit?",
      a: "Please bring liver function tests, ultrasound, any scan or endoscopy reports and earlier prescriptions. Balprada Pathology Lab can support further tests.",
    },
    {
      q: "Which foods should I avoid with cirrhosis?",
      a: "Avoid alcohol, excess salt, fried and oily food, packaged snacks and unclean food or water. Light, fresh home-cooked meals are best.",
    },
    {
      q: "Can I take Ayurvedic medicine with my regular medicines?",
      a: "Do not stop any prescribed medicine without advice. Share your full medicine list with the vaidya so guidance stays safe.",
    },
    {
      q: "Is free consultation available?",
      a: "Yes, free OPD is available on the 15th of every month from 10:00 AM to 2:00 PM. Please call 8126364606 to confirm.",
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
                Liver Cirrhosis Ayurvedic Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for liver cirrhosis to patients from
                  Bilari and nearby villages. The main branch is in Tehsil
                  Bilari, so regular consultation and follow-up are close to
                  home.
                </li>
                <li>
                  Cirrhosis is a serious, long-term liver condition, and
                  Balprada approaches it with honesty and care. Ayurvedic
                  guidance is offered to support strength, digestion and comfort,
                  and it is planned alongside the patient&apos;s existing medical
                  care.
                </li>
                <li>
                  Treatment combines in-house herbal medicines, a liver-friendly
                  diet, routine correction and regular review. The aim is to
                  support the remaining liver function, ease symptoms and improve
                  daily quality of life through steady guidance.
                </li>
                <li>
                  Balprada carries thirty-five years of experience in Ayurvedic
                  liver and digestive care. Every plan begins with listening to
                  the patient and reading reports before any medicine or diet is
                  suggested.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Liver Cirrhosis in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Cirrhosis means that healthy liver tissue is slowly replaced by
                  scar tissue, so the liver cannot filter blood and process food
                  as well as before. This change develops over months or years
                  and is not reversed overnight.
                </li>
                <li>
                  Ayurvedic texts describe related conditions such as Yakrit
                  Dalyodar, where the liver becomes enlarged or hardened, and
                  Jalodar, where fluid collects in the abdomen. These are linked
                  with aggravated Pitta, weak Agni and build-up of Ama.
                </li>
                <li>
                  Ayurveda looks at the whole person, including digestion,
                  strength, sleep, mind and daily habits. This helps the vaidya
                  choose gentle care that fits the patient and does not add more
                  burden to a weak liver.
                </li>
                <li>
                  Modern medicine describes cirrhosis in stages, from compensated
                  to decompensated. Balprada respects this understanding and asks
                  patients to bring all reports so that Ayurvedic guidance
                  matches the real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Liver Cirrhosis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Early cirrhosis may cause very few signs, so some patients
                  learn about it only through an ultrasound or a routine blood
                  test. Even mild tiredness or loss of appetite should not be
                  ignored in a person with liver risk.
                </li>
                <li>
                  Constant weakness, weight loss, muscle thinning, nausea and
                  poor appetite are common. Patients may feel full after a few
                  bites and may avoid food, which slowly reduces strength.
                </li>
                <li>
                  Swelling of the feet and legs, and a swollen belly from fluid,
                  are signs that the liver is struggling. These changes need
                  quick medical attention and regular monitoring.
                </li>
                <li>
                  Yellowing of eyes or skin, itching, easy bruising, dark urine
                  and disturbed sleep can also appear. Any confusion, blood in
                  vomit or black stools is an emergency and needs hospital care
                  at once.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long-term alcohol use is a leading cause of cirrhosis. Stopping
                  alcohol completely is the most important step for anyone with
                  liver damage, and no medicine can work well without it.
                </li>
                <li>
                  Chronic hepatitis B and hepatitis C infection can silently
                  scar the liver over many years. Regular screening and proper
                  medical follow-up are important for patients with such
                  infection.
                </li>
                <li>
                  Long-standing fatty liver linked with obesity, diabetes and
                  high cholesterol can progress to cirrhosis in some patients.
                  This is why early care for fatty liver matters so much.
                </li>
                <li>
                  Other causes include bile duct problems, autoimmune liver
                  disease, some inherited conditions and long use of harmful
                  medicines. The doctor tries to understand the cause, because it
                  guides the safest plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Support and Regular Monitoring Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Cirrhosis can often be stabilised for longer when the cause is
                  controlled and the patient follows diet, rest and review. Early
                  support helps protect the liver that still works well.
                </li>
                <li>
                  Patients should never depend only on home remedies or
                  unverified herbs. Some products can harm a damaged liver, so
                  every medicine should be taken only under qualified guidance.
                </li>
                <li>
                  Regular tests help catch complications early, such as fluid
                  collection, bleeding risk and rising bilirubin. Honest
                  monitoring gives families time to act before an emergency
                  develops.
                </li>
                <li>
                  Balprada encourages patients to keep their hepatologist or
                  physician informed. Good coordination between treating doctors
                  protects the patient and keeps care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to Cirrhosis Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews symptoms, history, past illness,
                  alcohol history, current medicines, food habits, sleep and
                  daily routine. This full picture ensures advice is personal and
                  gentle, never a standard packet for everyone.
                </li>
                <li>
                  Reports such as liver function tests, ultrasound, blood counts
                  and any scan or endoscopy findings are reviewed. Patients are
                  asked to bring all earlier prescriptions and hospital papers to
                  the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, diet
                  guidance and lifestyle correction wherever suitable. The plan is
                  explained in simple language so the patient and family know
                  exactly what to follow.
                </li>
                <li>
                  Progress is reviewed regularly and guidance is changed as
                  symptoms and reports change. This steady follow-up keeps care
                  practical, safe and responsible through the whole course.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnosis and Pathology Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Pathology Lab provides blood, urine and diagnostic
                  testing support, so patients can complete liver-related tests
                  close to the consultation. This saves time and keeps reports
                  and treatment decisions connected.
                </li>
                <li>
                  Liver function tests, bilirubin, albumin and blood counts help
                  track how the body is responding over time. Comparing earlier
                  and later reports gives the patient and vaidya a clear view of
                  progress.
                </li>
                <li>
                  If reports show advanced disease or complications, patients are
                  guided honestly toward hospital-level care. Ayurvedic support
                  can continue alongside, where suitable, with the treating
                  doctor informed.
                </li>
                <li>
                  Patients must not stop or change any prescribed modern medicine
                  on their own. Any change should be discussed openly with the
                  doctors involved.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ayurvedic Medicines and Herbal Support
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada prepares Ayurvedic medicines in-house under
                  experienced supervision, with attention to the quality of herbs
                  and preparation. Patients receive clear instructions on dose,
                  timing and what to take with food.
                </li>
                <li>
                  Herbs traditionally used for liver support include Bhumi Amla,
                  Kutki, Punarnava, Guduchi and Kalmegh. The choice depends on
                  the patient&apos;s strength, digestion and condition, and
                  strong herbs may be avoided when the liver is weak.
                </li>
                <li>
                  Medicines are selected to support digestion, ease heaviness and
                  swelling, and protect strength. They are planned together with
                  diet, because herbs work best when meals are light, regular and
                  suitable.
                </li>
                <li>
                  Patients should avoid buying random liver tonics, powders or
                  local remedies. Wrong herbs or wrong doses can burden a
                  cirrhotic liver, so guided use under a vaidya is strongly
                  recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Liver Cirrhosis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Small, frequent, freshly cooked meals are usually better than a
                  few heavy ones. Moong dal, khichdi, soft rotis, boiled
                  vegetables and thin soups are commonly suggested, as they are
                  easy to digest.
                </li>
                <li>
                  Enough protein and calories are needed, because weakness and
                  muscle loss are common in cirrhosis. The exact protein advice
                  depends on the stage, so the doctor guides each patient
                  personally.
                </li>
                <li>
                  Salt must usually be reduced, especially when there is swelling
                  or fluid in the abdomen. Pickles, papad, chips, namkeen and
                  packaged food carry hidden salt and should be avoided.
                </li>
                <li>
                  Patients should drink boiled or properly filtered water and eat
                  only fresh, clean food. Raw or street food can cause infections
                  that are dangerous for a weak liver.
                </li>
                <li>
                  A light bedtime snack may help some patients keep strength
                  overnight. The vaidya will suggest what suits your digestion
                  and condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Habits to Avoid
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Alcohol must be stopped completely, with no exception. Tobacco
                  and unnecessary painkillers should also be avoided, as they
                  strain the liver and the stomach.
                </li>
                <li>
                  Fried, oily, very spicy and heavy foods, bakery items and
                  sweets should be avoided. They weaken Agni and increase
                  discomfort, bloating and heaviness.
                </li>
                <li>
                  Raw or undercooked fish and shellfish, and any unclean food or
                  water, can cause serious infection. Hygiene in food and drink
                  is a key protective step.
                </li>
                <li>
                  Self-medication with herbs, supplements or strong painkillers
                  is risky. Always show every medicine and supplement to the
                  doctor before use.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Daily Routine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Adequate rest is important, because a weak liver needs the body
                  free from strain. Heavy work and long travel are discouraged
                  when strength is low, and gentle activity is increased slowly.
                </li>
                <li>
                  Light walking within comfort, and simple breathing practices
                  such as Anulom Vilom, may support energy and calm. Patients
                  with swelling, breathlessness or weakness should practise only
                  as advised.
                </li>
                <li>
                  Regular meal timing, early dinner and a fixed sleep schedule
                  support digestion. A calm routine reduces the Pitta and Vata
                  disturbance that Ayurveda links with ongoing illness.
                </li>
                <li>
                  Emotional support from family is very valuable. Meditation and
                  a peaceful ashram setting at Balprada help patients and
                  caregivers face the long journey with patience.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Panchakarma and Supportive Facilities
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Strong cleansing therapies are generally not suitable when the
                  liver is weak and strength is low. Balprada advises
                  Panchakarma only after careful assessment, and only where the
                  vaidya finds it safe.
                </li>
                <li>
                  Gentle supportive measures, such as soothing body care, rest
                  and digestion support, may be planned for suitable patients.
                  The focus remains on comfort, strength and safety.
                </li>
                <li>
                  Naturopathy, physiotherapy, yoga and meditation facilities can
                  support movement, sleep and emotional steadiness. They are
                  linked to the main plan and adjusted to the patient&apos;s
                  condition.
                </li>
                <li>
                  The team reviews how each part of care is helping before
                  continuing or changing it. Nothing is continued only because it
                  is available.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once for vomiting of blood, black
                  stools, severe abdominal pain, high fever, confusion, extreme
                  sleepiness or sudden increase in belly swelling. These can be
                  life-threatening signs.
                </li>
                <li>
                  Patients with cirrhosis should stay under regular care of a
                  hepatologist or physician. Ayurvedic treatment should support
                  this care and should never delay emergency treatment.
                </li>
                <li>
                  Balprada believes in honest guidance. If your condition needs
                  emergency or advanced hospital care, the team will say so
                  clearly and support your recovery afterwards where possible.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Bilari Patients Choose Balprada
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The main branch is in Tehsil Bilari, making visits convenient
                  for patients from Bilari, Guarau, Bhidwari, Chandausi, Sambhal
                  and nearby areas. Regular follow-up is much easier when the
                  centre is close.
                </li>
                <li>
                  The hospital carries the seva sankalp of Sw. Vaidya Vijay Pal
                  Singh Ji and over thirty-five years of Ayurvedic experience.
                  Many patients with kidney, liver and chronic illness have
                  trusted this centre for long-term care.
                </li>
                <li>
                  Patients describe the staff as humble and kind, and the ashram
                  surroundings as calm and healing. A peaceful setting helps the
                  mind, which supports discipline in diet and routine.
                </li>
                <li>
                  Medicines, pathology, diet guidance and follow-up are available
                  under one roof. This reduces confusion, saves travel and keeps
                  the whole treatment journey connected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                OPD Timings and Contact Details
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Main Branch: Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau,
                  Tehsil Bilari, District Moradabad, Uttar Pradesh 244415. Open
                  daily from 10:00 AM to 2:00 PM. Call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
                <li>
                  Moradabad Branch: F-19, Sector-13, New Moradabad, Delhi Road,
                  Moradabad, Uttar Pradesh 244001. Vaidya ji is available on
                  Sundays, so please call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  before visiting.
                </li>
                <li>
                  Free OPD consultation is available on the 15th of every month.
                  Please carry your ultrasound, scans, blood reports, hospital
                  papers and a list of current medicines.
                </li>
                <li>
                  Email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>{" "}
                  or use the Book Appointment option on the website to plan your
                  visit.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation
              </h2>

              <div className="mb-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-black"
                  />

                  <div>
                    <p className="font-semibold">
                      Main Branch (Ashram and Clinic)
                    </p>

                    <ul className="list-disc space-y-2 pl-5 text-black">
                      <li>
                        Address: Mohalla Vijaynagar, Village Bhidwari, P.O.
                        Guarau, Tehsil Bilari, District Moradabad, Uttar Pradesh
                        244415.
                      </li>
                      <li>
                        Open daily, with consultation from 10:00 AM to 2:00 PM.
                        Phone and WhatsApp:{" "}
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