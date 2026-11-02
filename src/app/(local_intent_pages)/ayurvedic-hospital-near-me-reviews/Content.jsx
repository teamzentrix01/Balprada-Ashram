import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalNearMeReviews() {
  const faqs = [
    {
      q: "What do patients say about Balprada?",
      a: "Published reviews praise the guidance of Vaidya ji, the humble and kind staff, the calm ashram surroundings and the genuine herbal medicines. Experiences differ from person to person.",
    },
    {
      q: "Are the reviews on this page real?",
      a: "They summarize reviews published on the Balprada website. No review has been invented or edited to change its meaning.",
    },
    {
      q: "Can reviews guarantee my result?",
      a: "No. Reviews describe personal experiences and cannot promise the same outcome for you.",
    },
    {
      q: "How can I check Balprada before starting treatment?",
      a: "Call 8126364606, visit during OPD hours or attend the free OPD on the 15th of any month.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and the ashram and clinic are open throughout the week.",
    },
    {
      q: "Is Sunday consultation available?",
      a: "Vaidya ji is available at the Moradabad branch on Sundays. Please call 9410447000 first.",
    },
    {
      q: "Does Ayurvedic care replace regular treatment?",
      a: "No. It works as supportive care. Continue current medicines until your doctor advises otherwise.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call or WhatsApp 8126364606, use the website appointment page or email balpradaindia@gmail.com.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Reviews Matter When You Search for an Ayurvedic Hospital
                Near Me
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What Families Hope to Learn from Reviews
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  When people search for Ayurvedic hospital near me reviews, they
                  usually want to know whether the doctors listen, whether the
                  staff behave with respect, whether the medicines feel genuine
                  and whether the place is calm and clean enough for a long period
                  of care.
                </li>
                <li>
                  Ayurvedic treatment is often long-term, so a review that talks
                  about behavior, guidance and atmosphere can be as useful to a
                  family as a review that talks about a medicine or a health
                  result.
                </li>
                <li>
                  Reviews are a starting point and not a final decision, because
                  every patient has a different condition, a different history and
                  a different response to treatment.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                The Limits of Online Reviews
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A review is one personal experience and cannot promise that you
                  will have the same result, which is why a careful reader looks
                  for patterns across many comments instead of one very strong
                  statement.
                </li>
                <li>
                  Be cautious with reviews that promise a guaranteed cure, mention
                  only one medicine without any detail or sound very similar to
                  each other, since such comments may not give you a true picture.
                </li>
                <li>
                  The best way to confirm any review is to speak to the hospital
                  directly, ask your questions and visit once for a consultation
                  before you commit to a long plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital and Research Center
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                A Seva-Based Institution Since 1991
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada was started in 1991 by Sw. Vaidya Vijay Pal Singh Ji
                  with a vision of Ayurvedic healing joined with social service,
                  and the institution today carries 35 years of experience in
                  natural Ayurvedic care.
                </li>
                <li>
                  The hospital brings together an Ayurvedic chikitsalaya,
                  research, herbal wellness, pathology, yoga, naturopathy and
                  ashram-based service in one trusted ecosystem.
                </li>
                <li>
                  The mission is to provide reliable Ayurvedic care for chronic
                  and serious health conditions through consultation,
                  self-prepared medicines, lifestyle guidance and compassionate
                  service.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Two Branches in the Moradabad Region
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The main branch is in Bilari, District Moradabad, and the
                  Moradabad branch is on Delhi Road in New Moradabad, so patients
                  from nearby towns can choose the location that is easier for
                  them to reach.
                </li>
                <li>
                  Please call before visiting, because doctor availability can
                  differ by branch and weekday.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Reviews Published on the Balprada Website
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The Stories of Trust and Healing section on the homepage shows
                  Google reviews, and the reviews displayed there carry a 5.0 star
                  rating from patients and visitors in Uttar Pradesh and
                  Moradabad.
                </li>
                <li>
                  The summary below is based only on reviews that are published on
                  the website, and no comment has been invented or added by us.
                  For the full text and the latest list, please read the reviews
                  section on the homepage.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Praise for Vaidya ji and the Hospital Team
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  One reviewer from Uttar Pradesh describes the service and
                  guidance given by Vaidya ji and the hospital team as excellent,
                  which points to the value patients place on being heard and
                  guided properly.
                </li>
                <li>
                  The same reviewer mentions that the natural ashram surroundings,
                  the Ayurvedic discipline and the genuine herbal preparations
                  made a strong positive impact on health and recovery as
                  experienced by that patient.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Praise for Staff Behavior and Welcome
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A reviewer from Moradabad writes about the Balprada Jansewa
                  Ashram Trust and says the staff are humble and kind, greet
                  people with a smile and go out of their way to help.
                </li>
                <li>
                  The reviewer adds that they felt welcomed and cared for during
                  the visit, and that the dedication to serving others shows in
                  everything the team does.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Praise for Kidney, Liver and Chronic Illness Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Another reviewer from Moradabad, who refers to kidney, liver and
                  chronic illness care, speaks highly of the knowledgeable vaidyas
                  and the authentic herbal formulations.
                </li>
                <li>
                  This reviewer also mentions the serene, healing atmosphere that
                  helped patients recover with positivity and strength, which
                  matches the way Balprada describes its ashram environment.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Common Themes Across These Reviews
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Respectful and warm behavior of the staff and doctors is a
                  repeated point.
                </li>
                <li>
                  Calm ashram surroundings and a disciplined routine are mentioned
                  as helpful for healing.
                </li>
                <li>
                  Confidence in the in-house herbal medicines and the knowledge of
                  the vaidyas appears more than once.
                </li>
                <li>
                  These are personal experiences, and individual results can
                  differ, so please discuss your own expectations openly with the
                  doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Check Balprada Yourself
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Verify Through a Visit or a Call
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call or WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>{" "}
                  and ask your questions about the doctor, timing, tests and the
                  plan that may suit your concern, and listen to how clearly and
                  calmly the team answers you.
                </li>
                <li>
                  Use the free OPD consultation on the 15th of every month if you
                  want to meet the vaidya and see the ashram before taking any
                  decision.
                </li>
                <li>
                  Speak to the staff about visiting hours, what to bring and how
                  follow-up works, since clear answers are a good sign.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Read the Facts Behind the Reviews
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Look at the doctors listed by the hospital, the facilities
                  available and the way the plan is explained, so that your
                  decision is based on facts as well as feelings.
                </li>
                <li>
                  Look at the Balprada blog for simple guides on topics such as
                  what happens in the first Ayurvedic consultation and how long
                  Ayurvedic treatment takes to show results.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Simple Checklist to Compare Ayurvedic Hospital Reviews
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What to Look for in a Review
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Look for specific details such as how the doctor explained the
                  plan, how long the wait was, how the staff behaved and whether
                  follow-up was easy, because specific comments are harder to fake
                  than general praise.
                </li>
                <li>
                  Look for balanced reviews that mention both what went well and
                  what could improve, since a mix of opinions usually feels more
                  natural than a page full of identical praise.
                </li>
                <li>
                  Check the date of each review, because a hospital can change
                  over time and recent experiences tell you more about the present
                  service.
                </li>
                <li>
                  Check whether the reviewer mentions a condition similar to
                  yours, but remember that two patients with the same diagnosis
                  may need different plans.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What to Do Beyond Reading
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Compare at least two or three hospitals on the same points, such
                  as doctors, medicine preparation, diagnostic support, timings,
                  location and follow-up, and write the answers down in one place.
                </li>
                <li>
                  Ask each hospital the same set of questions on the phone, and
                  notice which team answers politely, clearly and without
                  pressure.
                </li>
                <li>
                  Ask relatives and friends who may have visited, but still
                  confirm the details yourself, because advice from others may be
                  based on a different time or a different condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sharing Your Own Experience
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Why Honest Feedback Helps Everyone
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Patients who have visited can help other families by writing a
                  fair and detailed review that explains the reason for the visit,
                  the guidance received and the behavior of the staff.
                </li>
                <li>
                  Please avoid sharing private reports, names of other patients or
                  phone numbers in a public review, and keep the language
                  respectful so that the review remains useful.
                </li>
                <li>
                  If something was not satisfactory, telling the team directly by
                  phone or email gives them a chance to understand the concern and
                  improve, and you may also share it in a balanced public review.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctors and Facilities Behind the Experience
              </h2>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Health Concerns Supported
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Kidney and urinary care, liver and digestive care, cancer
                  supportive care, heart and lifestyle care, diabetes and thyroid
                  care, and wellness for women are the main areas listed on the
                  website.
                </li>
                <li>
                  Cancer care at Balprada is supportive care planned alongside the
                  primary medical treatment, and it is not offered as a cure.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Pathology Lab and Supportive Therapies
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The in-house pathology lab lists tests such as Complete Blood
                  Count, Thyroid Profile, Liver Function Test, Kidney Function
                  Test, Diabetes Profile, Lipid Profile, Urine Routine and
                  Microscopy, and Vitamin B12 and Vitamin D.
                </li>
                <li>
                  Panchakarma, yoga, naturopathy, meditation and physiotherapy are
                  available as supportive facilities, and they are planned
                  according to individual assessment and doctor guidance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Consultation Process
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The doctor reviews your concern, history, reports and current
                  medication, and then suggests a plan that may include Ayurvedic
                  medicines, diet guidance, lifestyle correction and supportive
                  facilities.
                </li>
                <li>
                  Regular follow-up helps the team observe progress and adjust
                  guidance, so please keep your reports and notes organized for
                  every visit.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What to Bring
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring previous prescriptions, recent reports, current medicines
                  and a short note about your symptoms, how long you have had them
                  and your diet routine.
                </li>
                <li>
                  Do not stop any current medicine on your own, and share every
                  medicine with the doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety and Honest Expectations
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Important Points for Every Patient
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ayurvedic care supports long-term health and does not replace
                  emergency treatment, so in case of severe pain, breathlessness
                  or sudden worsening please go to the nearest hospital at once.
                </li>
                <li>
                  Reviews, including those on this page, describe personal
                  experiences and are not a promise of results, and the website
                  does not publish clinical outcomes or success rates.
                </li>
                <li>
                  Be careful about any hospital that gives guaranteed cure claims,
                  and always inform your regular doctor about the Ayurvedic
                  medicines you are taking.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">Visit Balprada</h2>

              <h3 className="mb-3 font-serif text-2xl">
                Main Branch in Bilari
              </h3>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                  Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  Open daily for consultation from 10:00 AM to 2:00 PM. Call or
                  WhatsApp{" "}
                  <a href="tel:8126364606" className="hover:underline">
                    8126364606
                  </a>
                  .
                </li>
              </ul>

              <h3 className="mb-3 font-serif text-2xl">
                Moradabad Branch on Delhi Road
              </h3>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  F-19, Sector-13, New Moradabad, Delhi Road, Moradabad, Uttar
                  Pradesh 244001.
                </li>
                <li>
                  Vaidya ji is available on Sundays, so please call{" "}
                  <a href="tel:9410447000" className="hover:underline">
                    9410447000
                  </a>{" "}
                  before visiting.
                </li>
              </ul>

              <h3 className="mb-3 font-serif text-2xl">Appointments</h3>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Book through the website appointment page by sharing patient
                  details, your preferred branch and your health concern, or email{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  , and the team will guide you on timing and the next step.
                </li>
              </ul>
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