import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PilesAyurvedicTreatmentInBilari() {
  const faqs = [
    {
      q: "Can Ayurveda treat piles in Bilari?",
      a: "Balprada offers supportive Ayurvedic care for piles at its Bilari branch, including medicines, diet and guidance. Results vary, so no guaranteed cure is promised.",
    },
    {
      q: "Can piles be treated without surgery?",
      a: "Early piles often improve with diet, bowel habit correction and guided care. Large or repeatedly bleeding piles may need a surgeon opinion.",
    },
    {
      q: "Is bleeding always from piles?",
      a: "No, bleeding can also come from fissure or other conditions. Please get examined before assuming it is piles.",
    },
    {
      q: "Which foods should I avoid with piles?",
      a: "Avoid spicy, fried and oily food, maida, bakery items, alcohol and excess tea. Fibre-rich, light home meals are best.",
    },
    {
      q: "Which reports should I bring to the first visit?",
      a: "Please bring your haemoglobin and blood reports, earlier prescriptions and any examination reports. Balprada Pathology Lab can support further tests.",
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
                Piles Ayurvedic Treatment in Bilari at Balprada
              </h1>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Ayurvedic Hospital and Research Center offers
                  supportive Ayurvedic care for piles to patients from Bilari and
                  nearby villages. The main branch is in Tehsil Bilari, so
                  consultation, diet guidance and follow-up are close to home.
                </li>
                <li>
                  Piles cause pain, itching, bleeding and embarrassment, and many
                  people delay treatment because they feel shy. Balprada provides
                  private, respectful consultation, explains the condition in
                  simple language and guides each patient honestly on what
                  Ayurvedic care can support.
                </li>
                <li>
                  Care combines in-house herbal medicines, a fibre-rich diet,
                  bowel habit correction, suitable therapies and routine guidance.
                  The aim is to ease constipation, reduce pain and bleeding where
                  possible and support long-term digestive comfort.
                </li>
                <li>
                  Balprada brings thirty-five years of experience in Ayurvedic
                  care for digestive and chronic conditions. Every plan starts
                  with listening to the patient and reading reports before any
                  medicine or diet is suggested.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Piles in Ayurveda
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Piles, also called hemorrhoids, are swollen veins in or around
                  the anus and lower rectum. They may be inside, called internal,
                  or outside, called external, and may bleed, itch or hang out
                  after passing stool.
                </li>
                <li>
                  Ayurveda describes piles as Arsha, one of the conditions linked
                  closely with weak digestive fire, called Agni. Constipation,
                  straining and hard stool are seen as central causes, along with
                  aggravated Vata, Pitta or Kapha.
                </li>
                <li>
                  Classical thought sees digestion as the root of this problem, so
                  treatment focuses on digestion, soft regular stool and calming
                  the aggravated dosha. Bleeding piles are often connected with
                  Pitta and Rakta, while dry painful piles are connected with
                  Vata.
                </li>
                <li>
                  Modern medicine grades piles from first to fourth degree
                  depending on how much they come out. Balprada respects these
                  findings and asks patients to share earlier reports so that
                  Ayurvedic guidance matches the real condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Piles
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bright red blood on stool paper, in the toilet or on the stool
                  is the most common sign of internal piles. The bleeding is
                  usually painless, but it should never be assumed to be piles
                  without a doctor&apos;s opinion.
                </li>
                <li>
                  Pain, burning and a feeling of fullness in the anal area,
                  especially during or after passing stool, are frequent. Sitting
                  for long may also become uncomfortable.
                </li>
                <li>
                  Itching, irritation and mucus discharge around the anus can
                  occur. A soft lump near the anus, or a lump that comes out and
                  goes back, may be felt.
                </li>
                <li>
                  Constipation, hard stool, a feeling of incomplete emptying and
                  straining are common companions. Over time, long-standing
                  bleeding may cause weakness and tiredness from low haemoglobin.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Chronic constipation and straining are the leading causes of
                  piles. Low fibre intake, too little water and ignoring the urge
                  to pass stool make the stool hard and difficult to pass.
                </li>
                <li>
                  Long hours of sitting, especially on toilet or at a desk,
                  increase pressure on the veins of the anal area. A sedentary
                  lifestyle and lack of exercise also slow bowel movement.
                </li>
                <li>
                  Spicy, fried, dry and heavy food, excess tea and coffee, and
                  irregular meals disturb digestion. Alcohol and tobacco also
                  contribute for many people.
                </li>
                <li>
                  Pregnancy, obesity, heavy lifting, chronic cough, family history
                  and ageing raise the risk. Long-term use of some medicines can
                  cause constipation and add to the problem.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Early Care and Honest Assessment Matter
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Early piles often improve with diet, bowel habit correction and
                  guided care. Waiting allows swelling, bleeding and pain to
                  worsen, and may lead to anaemia.
                </li>
                <li>
                  Bleeding from the rectum can also be a sign of other
                  conditions, including fissure, polyps, infection and, in some
                  cases, growths in the colon or rectum. Balprada advises a proper
                  examination before treating any bleeding as simple piles.
                </li>
                <li>
                  Patients should avoid local tablets, creams and powders used for
                  long periods without assessment. These may hide symptoms or
                  irritate the skin, and delay a correct diagnosis.
                </li>
                <li>
                  Balprada encourages patients to keep their doctor or surgeon
                  informed. Good coordination between treating doctors protects
                  the patient and keeps care safe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Balprada Approach to Piles Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor first reviews symptoms, bleeding pattern, bowel
                  habits, food habits, water intake, past illness, current
                  medicines, sleep and daily routine. This full picture makes the
                  advice personal and gentle.
                </li>
                <li>
                  Reports such as haemoglobin, blood tests and earlier examination
                  or scope findings are reviewed where available. Patients are
                  asked to bring all earlier prescriptions and hospital papers to
                  the first visit.
                </li>
                <li>
                  A care plan is prepared using Ayurvedic medicines, diet
                  guidance, bowel habit correction and lifestyle changes wherever
                  suitable. The plan is explained in simple language so the
                  patient and family know what to follow.
                </li>
                <li>
                  Progress is reviewed regularly, and guidance is adjusted as
                  bleeding, pain and bowel habits change. This steady follow-up
                  keeps care practical, safe and responsible through the whole
                  course.
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
                  testing support, so patients can complete required tests close
                  to the consultation. This saves time and keeps reports and
                  treatment decisions connected.
                </li>
                <li>
                  Haemoglobin and blood counts show whether long-standing
                  bleeding has caused anaemia. If haemoglobin is low, the doctor
                  may advise additional care and a diet to support strength.
                </li>
                <li>
                  Patients with repeated bleeding, age above forty, weight loss or
                  change in bowel habit may need a colon or rectal examination.
                  Balprada guides such patients honestly toward suitable
                  hospital-level evaluation.
                </li>
                <li>
                  Patients should not stop or change any prescribed modern
                  medicine on their own. Any change should be discussed openly
                  with the doctors involved.
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
                  Herbs and formulations traditionally used for digestion and
                  piles include Haritaki, Triphala, Nagkesar, Kutaj, Bilva and
                  Isabgol. The final selection depends on whether the piles are
                  dry or bleeding and on the patient&apos;s digestion, never on a
                  fixed formula for all.
                </li>
                <li>
                  Medicines are chosen to soften stool, support Agni, reduce
                  swelling and ease pain or bleeding. They are planned together
                  with diet and water intake, because herbs work best with proper
                  routine.
                </li>
                <li>
                  Patients should avoid buying random piles powders, strong
                  laxatives or tablets sold with big promises. Wrong herbs or
                  doses can cause loose motions, weakness or worsening symptoms,
                  so guided use under a vaidya is strongly recommended.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidelines for Piles
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Fibre-rich food is the foundation of care. Whole grain rotis,
                  vegetables, salads, fruits, dalia and pulses help form soft,
                  bulky stool that passes easily.
                </li>
                <li>
                  Warm, freshly cooked and easily digestible meals support Agni.
                  Moong dal, khichdi, bottle gourd, ridge gourd, spinach, papaya
                  and soaked raisins are commonly suggested, in measured portions.
                </li>
                <li>
                  Plenty of water through the day, unless a doctor has restricted
                  fluids, helps soften stool. Buttermilk with a little cumin may
                  help digestion in many patients, and the vaidya will advise what
                  suits you.
                </li>
                <li>
                  A small amount of ghee or healthy fat in food may help bowel
                  movement for some patients. The quantity should be guided by the
                  doctor, as it depends on your weight and digestion.
                </li>
                <li>
                  Regular meal times and a light dinner support digestion and
                  morning bowel habit. Eating slowly and avoiding overeating
                  reduces heaviness and gas.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Habits to Avoid
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Very spicy, fried and oily food, pickles, chillies and heavy
                  gravies can irritate the digestive tract and aggravate bleeding
                  or burning. They are best reduced while symptoms are active.
                </li>
                <li>
                  Maida, bakery items, fast food, packaged snacks and white bread
                  are low in fibre and promote constipation. Excess meat and dry,
                  hard foods may also make stool difficult to pass.
                </li>
                <li>
                  Alcohol, tobacco and too much tea or coffee dry the body and
                  disturb digestion. Cold drinks and ice-cold water can also
                  aggravate Vata and slow bowel movement.
                </li>
                <li>
                  Ignoring the urge to pass stool, sitting on the toilet for a
                  long time with a mobile phone and straining hard are harmful
                  habits. Respond to the urge promptly and avoid unnecessary
                  straining.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Daily Routine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Build a regular morning habit of visiting the toilet at a fixed
                  time, even if there is no strong urge. A relaxed routine trains
                  the bowel and reduces straining.
                </li>
                <li>
                  Walk for thirty to forty five minutes daily and avoid sitting
                  for long hours. Take short breaks every hour to stand and move
                  when working at a desk.
                </li>
                <li>
                  Maintain a healthy weight and avoid lifting heavy loads,
                  especially when constipated. Weight loss should be gradual and
                  guided, with balanced meals.
                </li>
                <li>
                  Keep the anal area clean and dry after passing stool, and use
                  soft toilet paper or wash with lukewarm water. A warm sitz bath
                  for ten to fifteen minutes may bring comfort, unless the doctor
                  advises otherwise.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Yoga, Therapy and Supportive Facilities
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada offers yoga and meditation guidance suited to each
                  patient&apos;s condition. Gentle practices such as
                  Pawanmuktasana, Vajrasana and Malasana may support digestion and
                  bowel movement, when done as advised.
                </li>
                <li>
                  Slow breathing and relaxation practices help reduce stress,
                  which can worsen constipation and digestion. A calm mind
                  supports a better routine and sleep.
                </li>
                <li>
                  Therapies such as warm sitz bath and suitable oil-based
                  approaches may be advised by the vaidya for comfort in selected
                  patients. Procedures are chosen only after proper examination.
                </li>
                <li>
                  Naturopathy and diet counselling are also available as part of
                  the wider ashram care. All supportive care is linked to the main
                  plan, so nothing runs in isolation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Procedures or Surgery May Be Needed
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Large piles that come out and do not go back, repeated heavy
                  bleeding, severe pain and piles that do not respond to care may
                  need a surgeon opinion. Delay in such cases can worsen the
                  condition.
                </li>
                <li>
                  Some patients may need procedures such as banding or surgery,
                  and this decision must be made after proper examination.
                  Balprada does not claim that Ayurvedic care can avoid every
                  operation.
                </li>
                <li>
                  Fissure and fistula can look like piles but need different
                  handling. Proper diagnosis is essential, and the vaidya will
                  refer patients when other treatment is needed.
                </li>
                <li>
                  Where surgery is done, Ayurvedic support for digestion, bowel
                  habit and recovery may continue afterwards, with the surgeon
                  informed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Seek Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Please go to a hospital at once for heavy or continuous
                  bleeding, dizziness, fainting, extreme weakness or very pale
                  skin. These can be signs of significant blood loss.
                </li>
                <li>
                  Severe pain with a hard swollen lump, high fever with anal pain,
                  or inability to pass stool or gas needs prompt medical
                  assessment. Such symptoms may point to infection or thrombosis.
                </li>
                <li>
                  Blood in stool along with weight loss, long-standing change in
                  bowel habit, black stools or family history of colon problems
                  needs a proper evaluation. Do not assume piles without
                  examination.
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
                  Many patients with chronic illness have trusted this centre for
                  long-term care.
                </li>
                <li>
                  Patients describe the staff as humble and kind, and the ashram
                  surroundings as calm and healing. Private and respectful care
                  helps patients speak openly about sensitive problems.
                </li>
                <li>
                  Medicines, diet guidance, yoga, pathology and follow-up are
                  available under one roof. This reduces confusion, saves travel
                  and keeps the whole treatment journey connected.
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
                  Please carry your blood reports, earlier prescriptions, any
                  examination reports and a list of current medicines.
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