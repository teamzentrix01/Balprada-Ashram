import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaSlipDiscTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure a slip disc?",
      a: "No. Ayurvedic care is supportive and works alongside medical advice, and it does not replace specialist treatment or surgery when needed.",
    },
    {
      q: "Q2. Do all slip discs need surgery?",
      a: "No. Many improve with rest, medicines and physiotherapy, and a spine specialist decides based on scans and symptoms.",
    },
    {
      q: "Q3. When is back pain an emergency?",
      a: "Loss of bladder or bowel control, groin numbness or rapidly worsening leg weakness needs immediate hospital care.",
    },
    {
      q: "Q4. Does Balprada offer physiotherapy and panchakarma?",
      a: "Yes. Both are part of our facilities and are planned after assessment of your condition.",
    },
    {
      q: "Q5. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q6. Which reports should I bring?",
      a: "MRI, X-ray, other scans, prescriptions and a list of all medicines, including painkillers.",
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
                Slip Disc Treatment in Ayurveda – Supportive Back Pain Care in
                Rampur at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Support for Slip Disc in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A slipped or bulging disc can make sitting, walking, sleeping
                  and even simple daily work painful, and many people in
                  Rampur, Uttar Pradesh look for gentle Ayurvedic support that
                  can work alongside proper scans, medical advice and
                  physiotherapy.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, and our facilities include
                  panchakarma, yoga, naturopathy and professional
                  physiotherapy that support safe movement, mobility, strength
                  and recovery.
                </li>
                <li>
                  Our care for back and disc problems is supportive and
                  personalised. It combines consultation, in-house Ayurvedic
                  medicines, diet guidance, therapy and movement support, and
                  it is always planned with your spine doctor&apos;s advice in
                  mind.
                </li>
                <li>
                  This page explains what a slip disc is, which warning signs
                  need urgent care, how Balprada supports patients and how
                  families from Rampur can book a consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                An Honest Note About Ayurveda and Slip Disc
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A slip disc needs proper diagnosis, usually with examination
                  and an MRI or other scan, so Ayurveda should never replace a
                  spine specialist&apos;s assessment or any surgery that has
                  been advised.
                </li>
                <li>
                  Anyone who promises to put a disc back in place or to avoid
                  surgery in every case is overstating what natural care can
                  do, and such promises can delay treatment that is truly
                  needed.
                </li>
                <li>
                  Many people with disc problems improve with rest, medicines,
                  physiotherapy and careful routine, and Ayurvedic care can
                  support comfort, strength, digestion, sleep and daily
                  discipline during recovery.
                </li>
                <li>
                  At Balprada, our doctors explain clearly what supportive care
                  can offer and when a specialist or emergency opinion must
                  come first, so that patients and families decide safely.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Slip Disc
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The spine is made of bones called vertebrae, with soft
                  cushion-like discs between them that absorb shock and allow
                  bending, and a slip disc means a disc has bulged or pushed
                  out of its normal position.
                </li>
                <li>
                  A bulging disc can press on nearby nerves, which may cause
                  back or neck pain, and pain, tingling or weakness that
                  travels into the leg or arm depending on the affected area.
                </li>
                <li>
                  Discs often weaken gradually with age, long hours of sitting,
                  poor posture, heavy lifting, weak muscles, excess weight and
                  repeated strain, although sudden injury can also trigger
                  symptoms.
                </li>
                <li>
                  The goals of long-term care are to reduce pain and stiffness,
                  protect the spine, rebuild muscle strength, improve posture
                  and prevent repeated episodes through steady daily habits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Long hours of sitting at a desk, driving or working in a bent
                  posture put steady pressure on the lower back and weaken the
                  supporting muscles over time.
                </li>
                <li>
                  Lifting heavy weights with a bent back, sudden twisting
                  movements and repeated strain at work or in daily household
                  tasks can injure a disc.
                </li>
                <li>
                  Excess weight, a sedentary lifestyle and weak back and core
                  muscles increase the load on the spine and make recovery
                  slower.
                </li>
                <li>
                  Smoking, poor nutrition and age-related wear can reduce the
                  health of the discs, while accidents and falls can cause
                  sudden injury.
                </li>
                <li>
                  Because causes differ, each patient needs a proper examination
                  and reports before a care plan is made.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Pain in the lower back or neck that may increase with sitting,
                  bending, coughing or lifting and may ease a little with rest
                  or a change of position.
                </li>
                <li>
                  Pain, burning or tingling that travels down one leg, called
                  sciatica, or into the shoulder and arm, often on one side of
                  the body.
                </li>
                <li>
                  Numbness, a pins-and-needles feeling or weakness in the foot,
                  leg, hand or arm, and difficulty standing up straight or
                  walking comfortably.
                </li>
                <li>
                  Muscle stiffness and spasm around the spine, and difficulty
                  sleeping because it is hard to find a comfortable position at
                  night.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need Urgent Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sudden loss of control over urine or stool, numbness around
                  the groin or inner thighs, or rapidly increasing weakness in
                  both legs needs emergency hospital care immediately.
                </li>
                <li>
                  Severe pain that does not ease, sudden inability to lift the
                  foot or move a limb, or pain after a fall or accident should
                  be assessed by a doctor without delay.
                </li>
                <li>
                  Back pain with fever, unexplained weight loss or a history of
                  cancer or tuberculosis needs prompt medical evaluation and
                  scans before any therapy.
                </li>
                <li>
                  Never massage, manipulate or start strong therapies at home
                  during such warning signs, because this can worsen nerve
                  damage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Slip Disc Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya reviews your MRI or X-ray reports, symptoms,
                      medical history, current medicines, weight and daily
                      habits, and explains the plan in simple language so that
                      you and your family know what to expect.
                    </li>
                    <li>
                      The plan is shaped around your pain level, strength,
                      sleep and routine, because disc problems vary greatly from
                      person to person and need gentle, step-by-step guidance.
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
                      painkillers and other medicines, so that care remains
                      responsible and coordinated with your spine doctor.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Panchakarma and Supportive Therapy
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma therapies are planned individually after
                      assessment, and they are chosen only when suitable for
                      your condition and strength, so that each patient
                      receives what fits their needs.
                    </li>
                    <li>
                      Therapy is never forced. If pain is severe or warning
                      signs are present, the doctor will advise medical
                      evaluation first and delay therapy until it is safe.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Physiotherapy and Movement Support
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Professional physiotherapy supports safe movement,
                      mobility, strength and recovery alongside the wider care
                      plan, with exercises suited to your stage of recovery.
                    </li>
                    <li>
                      Gentle movement guided by a professional helps rebuild
                      back and core muscles, improve posture and reduce the
                      chance of repeated pain.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    5. Yoga, Naturopathy and Lifestyle Support
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-gray-900">
                        Yoga and Meditation
                      </h4>
                      <ul className="list-disc space-y-3 pl-5">
                        <li>
                          Yoga helps build discipline, strength and calm across
                          body, mind and breath, but disc patients must
                          practise only gentle, doctor-approved movements and
                          avoid deep forward bends, heavy twists and strain.
                        </li>
                        <li>
                          Guided meditation and breath awareness support
                          relaxation, reduce muscle tension and help patients
                          cope with pain and poor sleep.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold text-gray-900">
                        Naturopathy
                      </h4>
                      <ul className="list-disc space-y-3 pl-5">
                        <li>
                          Naturopathy uses simple, nature-led practices and
                          supportive routines that work with the body&apos;s
                          natural healing capacity and fit comfortably with a
                          recovery plan.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold text-gray-900">
                        Ashram Environment and Organic Food
                      </h4>
                      <ul className="list-disc space-y-3 pl-5">
                        <li>
                          A peaceful ashram environment supports rest, routine
                          and recovery away from daily stress, and wholesome,
                          clean eating supports weight control and long-term
                          lifestyle correction.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                      Bring your MRI, X-ray and other reports, prescriptions
                      and a list of every medicine you take, so the doctor can
                      understand your condition and decide what care is
                      appropriate.
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
                      medicines, diet discipline and suitable therapy, while
                      respecting the advice of your spine specialist or
                      physiotherapist.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Step 3: Supportive Facilities
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy, yoga, naturopathy and pathology support
                      are added where they suit your condition and strength,
                      helping you recover steadily and safely.
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
                      guidance and support long-term discipline, with repeat
                      tests at Balprada Pathology Lab when advised.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Guidance for Disc and Back Problems
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow any diet advice given by your doctor first, and let
                  Ayurvedic food guidance work within it so that nutrition
                  remains safe for your condition.
                </li>
                <li>
                  Eat fresh, simple, home-cooked meals at regular times,
                  because strong digestion is treated as the foundation of
                  health and supports energy during recovery.
                </li>
                <li>
                  Avoid heavy, oily, fried, packaged and very cold foods, and
                  reduce sweets and refined foods, especially if you are
                  gaining weight or have diabetes.
                </li>
                <li>
                  Maintain a healthy weight through balanced portions, because
                  extra weight increases the load on the lower back and can
                  slow recovery.
                </li>
                <li>
                  Drink enough water through the day unless your doctor has
                  limited fluids for another condition, and avoid alcohol and
                  tobacco, which can harm disc health.
                </li>
                <li>
                  Do not start supplements, oils or home remedies from
                  unverified sources without advice, because some can interfere
                  with medicines.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits That Protect the Spine
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Sit with your back supported and feet flat on the floor, get
                  up every thirty to forty-five minutes to walk, and avoid long
                  hours in one position.
                </li>
                <li>
                  Bend at the knees and not at the waist when lifting, hold
                  objects close to the body and avoid sudden twisting while
                  carrying weight.
                </li>
                <li>
                  Sleep on a firm, comfortable surface, change position gently,
                  and avoid sleeping on very soft beds that let the spine sag.
                </li>
                <li>
                  Walk daily as your doctor permits, because regular gentle
                  movement is usually better for recovery than prolonged bed
                  rest.
                </li>
                <li>
                  Manage stress and sleep well, since tension tightens back
                  muscles and can make pain feel worse.
                </li>
                <li>
                  Attend every follow-up visit and keep exercising as advised,
                  because prevention depends on steady habits and not on a
                  short course of treatment.
                </li>
              </ul>
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
                  patients are told clearly what supportive care can offer and
                  when specialist or emergency care must come first.
                </li>
                <li>
                  <span className="font-semibold">Whole-person care:</span>{" "}
                  medicines, therapy, physiotherapy, yoga, diet and follow-up
                  are planned together as one connected journey.
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
                  Carry your MRI, X-ray and other scans, earlier reports,
                  prescriptions and a list of every medicine and supplement you
                  take, including painkillers.
                </li>
                <li>
                  Note when your pain began, where it travels, what makes it
                  better or worse, and any numbness or weakness, and write down
                  your questions about therapy and follow-up.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, wear loose,
                  comfortable clothes and bring a family member who can help
                  you follow the routine at home.
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