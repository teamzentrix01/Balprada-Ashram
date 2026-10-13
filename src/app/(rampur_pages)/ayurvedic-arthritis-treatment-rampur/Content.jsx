import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaArthritisAyurvedicTreatment() {
  const faqs = [
    {
      q: "Q1. Can Ayurveda cure arthritis?",
      a: "No. Ayurvedic care is supportive and works alongside your doctor&apos;s treatment, never in place of it.",
    },
    {
      q: "Q2. Should I stop my arthritis medicines?",
      a: "Never. Stopping steroids or disease-modifying medicines suddenly can be harmful, so change them only on your doctor&apos;s advice.",
    },
    {
      q: "Q3. Does Balprada offer physiotherapy and panchakarma?",
      a: "Yes. Both are part of our facilities and are planned after assessment of your condition.",
    },
    {
      q: "Q4. Is diet important in arthritis?",
      a: "Yes. Weight, digestion and food choices affect joint load and symptoms, especially in gout.",
    },
    {
      q: "Q5. Does Balprada have a clinic in Rampur?",
      a: "Our branches are in Bilari (main) and Moradabad, both reachable for patients from Rampur.",
    },
    {
      q: "Q6. Which reports should I bring?",
      a: "X-rays, blood tests, uric acid reports, prescriptions and a list of all medicines.",
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
                Arthritis Ayurvedic Treatment in Rampur – Supportive Joint Care
                at Balprada Ayurvedic Hospital
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Ayurvedic Support for Arthritis in Rampur
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Arthritis can make climbing stairs, sitting on the floor,
                  holding a cup or simply getting out of bed painful, and many
                  people in Rampur, Uttar Pradesh look for gentle Ayurvedic
                  support that can work alongside proper tests and their
                  doctor&apos;s treatment.
                </li>
                <li>
                  Balprada Ayurvedic Hospital &amp; Research Center has offered
                  Ayurvedic care since 1991, and our facilities include
                  panchakarma, yoga, naturopathy and professional physiotherapy
                  that support safe movement, mobility, strength and recovery.
                </li>
                <li>
                  Our care for joint problems is supportive and personalised.
                  It combines consultation, in-house Ayurvedic medicines, diet
                  guidance, therapy and movement support, and it is always
                  planned with your treating doctor&apos;s advice in mind.
                </li>
                <li>
                  This page explains the common types of arthritis, which signs
                  need prompt medical attention, how Balprada supports patients
                  and how families from Rampur can book a consultation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                An Honest Note About Ayurveda and Arthritis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Arthritis needs proper diagnosis, because wear-and-tear
                  arthritis, inflammatory arthritis and gout are different
                  conditions, so Ayurveda should never replace tests or
                  medicines that your doctor has prescribed.
                </li>
                <li>
                  Anyone who promises to cure arthritis permanently or to
                  rebuild worn-out joints within days is overstating what
                  natural care can do, and such promises can delay treatment
                  that protects your joints.
                </li>
                <li>
                  Inflammatory forms such as rheumatoid arthritis can damage
                  joints if left untreated, so patients on disease-modifying
                  medicines must continue them under their rheumatologist&apos;s
                  guidance.
                </li>
                <li>
                  Ayurvedic care can support comfort, mobility, digestion,
                  weight, sleep and daily discipline, and our doctors explain
                  clearly what supportive care can and cannot do.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Arthritis
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Arthritis means inflammation or wear of one or more joints,
                  and it causes pain, stiffness, swelling and reduced movement
                  that can affect work, sleep and independence.
                </li>
                <li>
                  Osteoarthritis is the most common form and usually develops
                  slowly with age, weight and long use of joints, especially
                  the knees, hips, spine and hands.
                </li>
                <li>
                  Rheumatoid arthritis is an inflammatory condition in which
                  the body&apos;s own defence system affects the joints, often
                  causing morning stiffness and swelling in small joints on
                  both sides of the body.
                </li>
                <li>
                  Gout is linked with high uric acid and can cause sudden,
                  severe pain and swelling, commonly in the big toe, so each
                  type needs its own medical assessment and plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes and Risk Factors
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Increasing age, long years of joint use, previous injury and
                  family history can all contribute to joint wear and
                  arthritis.
                </li>
                <li>
                  Excess weight places extra load on the knees, hips and spine,
                  and losing even a modest amount of weight can noticeably
                  reduce joint strain.
                </li>
                <li>
                  A sedentary lifestyle, weak muscles, long hours of sitting
                  and poor posture reduce the support around the joints and can
                  worsen stiffness.
                </li>
                <li>
                  Diets heavy in fried, processed and very rich foods, along
                  with alcohol, can aggravate conditions such as gout and add
                  to general inflammation.
                </li>
                <li>
                  Some metabolic problems, including diabetes and thyroid
                  imbalance, are often seen with joint complaints and need to
                  be managed together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Joint pain and stiffness, especially in the morning or after
                  long rest, that may ease a little with gentle movement.
                </li>
                <li>
                  Swelling, warmth or tenderness around the joint, and reduced
                  range of movement that makes daily tasks harder.
                </li>
                <li>
                  Cracking sounds, weakness around the joint, difficulty
                  climbing stairs or getting up from the floor, and pain that
                  increases after heavy activity.
                </li>
                <li>
                  Tiredness, low energy and disturbed sleep, which commonly
                  accompany long-standing joint pain and affect mood and daily
                  routine.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need Prompt Medical Care
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A hot, red, severely swollen joint with fever needs urgent
                  medical evaluation, because a joint infection must be treated
                  quickly to protect the joint.
                </li>
                <li>
                  Sudden severe pain and swelling in a single joint, especially
                  the big toe, may be gout and should be assessed by a doctor
                  for proper treatment.
                </li>
                <li>
                  Pain after a fall or injury, a joint that cannot bear weight
                  or a visible deformity needs prompt examination and imaging.
                </li>
                <li>
                  Multiple swollen joints with prolonged morning stiffness
                  should be reviewed by a doctor early, because inflammatory
                  arthritis is best controlled when treatment starts on time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Balprada Supports Arthritis Patients
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Personalised Consultation
                  </h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The vaidya reviews your reports, such as X-rays, blood
                      tests and uric acid levels, along with your symptoms,
                      current medicines, weight and daily habits, and explains
                      the plan in simple language.
                    </li>
                    <li>
                      The plan is shaped around your pain level, strength,
                      digestion, sleep and routine, because arthritis affects
                      each person differently and needs practical guidance that
                      fits real life.
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
                      painkillers, steroids and other medicines, so that care
                      remains responsible and coordinated with your doctor.
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
                      If a joint is hot, severely inflamed or the patient is
                      weak, the doctor may advise medical evaluation first and
                      delay therapy until it is safe.
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
                      plan, with gentle exercises suited to the affected
                      joints.
                    </li>
                    <li>
                      Regular guided movement helps keep joints flexible,
                      strengthens the muscles that support them and may reduce
                      stiffness and the risk of losing function.
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
                          body, mind and breath, and gentle, doctor-approved
                          movements can improve flexibility, while painful or
                          forced positions should be avoided.
                        </li>
                        <li>
                          Guided meditation and breath awareness help patients
                          relax muscles, cope with long-term pain and sleep
                          better, which supports overall recovery.
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
                          joint care plan.
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
                      Bring your X-rays, blood tests, uric acid reports,
                      prescriptions and a list of every medicine you take, so
                      the doctor can understand your type of arthritis and plan
                      safe care.
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
                      respecting the treatment advised by your rheumatologist
                      or orthopaedic doctor.
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
                      helping you move more comfortably and track your health
                      with reliable tests.
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
                Diet Guidance for Arthritis Patients
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Follow any diet advice given by your doctor first, and let
                  Ayurvedic food guidance work within it, because the right
                  diet depends on whether you have osteoarthritis, rheumatoid
                  arthritis or gout.
                </li>
                <li>
                  Eat fresh, simple, home-cooked meals at regular times,
                  because Ayurveda treats strong digestion as the foundation of
                  good health and steady energy.
                </li>
                <li>
                  Avoid heavy, oily, fried, packaged and very cold foods, and
                  reduce sweets and refined flour, which add to weight gain and
                  general inflammation.
                </li>
                <li>
                  If you have gout, follow your doctor&apos;s advice on foods
                  that raise uric acid, limit alcohol and drink enough water
                  unless fluids are restricted for another condition.
                </li>
                <li>
                  Keep your weight healthy through balanced portions and
                  regular activity, because reducing extra weight is one of the
                  most useful steps for painful knees and hips.
                </li>
                <li>
                  Do not start supplements, oils or home remedies from
                  unverified sources without advice, because some can interfere
                  with arthritis medicines or harm the kidneys and liver.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits That Protect the Joints
              </h2>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Move gently every day with walking, stretching or exercises
                  approved by your doctor or physiotherapist, because regular
                  movement keeps joints flexible and muscles strong.
                </li>
                <li>
                  Avoid long hours in one position, sitting cross-legged or
                  squatting on the floor if it strains your knees, and use a
                  chair or support when needed.
                </li>
                <li>
                  Warm up stiff joints in the morning with gentle movement, and
                  avoid sudden heavy lifting, climbing many stairs or
                  high-impact activity during a painful phase.
                </li>
                <li>
                  Wear comfortable footwear, use support such as a stick or
                  knee cap if your doctor suggests, and make your home safer to
                  reduce the risk of falls.
                </li>
                <li>
                  Sleep on time, manage stress through meditation or quiet
                  rest, and attend every follow-up visit, because steady habits
                  matter more than occasional intense effort.
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
                  when specialist care must continue as advised.
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
                  Carry your X-rays, MRI if done, blood tests, uric acid and
                  inflammation reports, prescriptions and a list of every
                  medicine and supplement you take, including painkillers and
                  steroids.
                </li>
                <li>
                  Note which joints hurt, how long morning stiffness lasts,
                  what makes pain better or worse, and write down your
                  questions about therapy, diet and follow-up.
                </li>
                <li>
                  Arrive during OPD hours, 10:00 AM to 2:00 PM, and bring a
                  family member who can help you follow the diet and routine at
                  home.
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