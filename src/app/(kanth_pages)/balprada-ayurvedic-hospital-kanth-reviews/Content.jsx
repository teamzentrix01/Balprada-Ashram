import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function BalpradaAyurvedicHospitalKanthReviews() {
  const faqs = [
    {
      q: "Where can I read Balprada reviews?",
      a: "On the Balprada home page and on Google.",
    },
    {
      q: "What do patients praise most?",
      a: "Knowledgeable vaidyas, genuine herbal medicines, kind staff and a serene ashram.",
    },
    {
      q: "Do reviews guarantee results?",
      a: "No, results depend on the condition, discipline and follow-up.",
    },
    {
      q: "Are there reviews from Kanth patients?",
      a: "The site's reviews come mainly from Moradabad and Uttar Pradesh, and Kanth patients can add their own.",
    },
    {
      q: "Is free OPD available?",
      a: "Yes, on the 15th of every month.",
    },
    {
      q: "Should I stop my current medicines?",
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
                Balprada Ayurvedic Hospital Kanth Reviews: What Patients Say
                About Care at Balprada
              </h1>

              <h2 className="mb-4 font-serif text-2xl text-gray-900">
                Patient Reviews of Balprada Ayurvedic Hospital for Kanth Families
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Why Reviews Matter Before Choosing Ayurvedic Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families from Kanth who are choosing an Ayurvedic hospital
                      for a long-term condition naturally want to hear from
                      patients who have already visited, because a trusted word
                      from another family often matters more than any
                      advertisement.
                    </li>
                    <li>
                      Reviews show how a hospital behaves in everyday moments
                      such as the welcome at the door, the patience of the
                      vaidya, the quality of medicines and the comfort of the
                      surroundings, which brochures can describe but only
                      patients can confirm.
                    </li>
                    <li>
                      Balprada shares patient feedback openly on its website and
                      invites families to read Google reviews for themselves, so
                      that every decision about treatment is made with open eyes
                      and realistic expectations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. How to Read Reviews Wisely
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Every review is one person&apos;s experience, and the
                      outcome of Ayurvedic care depends on the condition, its
                      stage, the patient&apos;s discipline with diet and
                      medicines, and regular follow-up, so no review should be
                      taken as a guarantee.
                    </li>
                    <li>
                      It helps to look for patterns across reviews, such as
                      repeated mention of the staff&apos;s behaviour, the
                      knowledge of the vaidya or the calm environment, instead of
                      focusing on one single comment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Patients Say About Balprada
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Vaidya Guidance and Knowledge
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A patient from Uttar Pradesh describes excellent service and
                      guidance from Vaidya ji and the hospital team, and rates
                      the experience five stars on Google.
                    </li>
                    <li>
                      A patient from Moradabad, writing about kidney and liver
                      care, praises the highly knowledgeable vaidyas and calls
                      the treatment for kidney, liver and chronic illness the
                      best they have experienced.
                    </li>
                    <li>
                      These reviews point to the value of consultation at
                      Balprada, where the vaidya studies symptoms, history,
                      reports and current medicines before suggesting any plan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Genuine Herbal Medicines
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients repeatedly mention authentic herbal medicine
                      formulations and genuine herbal preparations, which links
                      with the work of Balprada Herbal Wellness Private Limited,
                      the pharmacy that prepares traditional and patent Ayurvedic
                      medicines in an organized way.
                    </li>
                    <li>
                      Families from Kanth who value medicines prepared under the
                      hospital&apos;s own supervision can take comfort in this
                      feedback, though they should still follow the vaidya&apos;s
                      advice carefully.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Humble and Kind Staff
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      A reviewer from Moradabad describes the staff at Balprada
                      Jansewa Ashram Trust as incredibly humble and kind, always
                      greeting visitors with a smile and going out of their way
                      to help.
                    </li>
                    <li>
                      The same reviewer says they felt welcomed and cared for
                      during the visit and calls the place a warm and supportive
                      environment, which matters greatly for patients and
                      attendants who arrive worried.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    4. Serene Ashram Atmosphere
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients speak of the natural ashram surroundings,
                      Ayurvedic discipline and a serene, healing atmosphere that
                      helps them recover with positivity and strength.
                    </li>
                    <li>
                      This matches the way the ashram is described on the
                      Balprada website, where naturopathy, yoga, meditation,
                      panchakarma and physiotherapy come together in a peaceful
                      care environment backed by 35 years of experience.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reviews on the Balprada Website
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Google Reviews
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The Balprada home page carries a section called Stories of
                      Trust and Healing, with Google reviews shown alongside the
                      names and places of patients, and the reviews displayed
                      there carry five-star ratings.
                    </li>
                    <li>
                      Visitors can read these reviews on the website, and they
                      can also search for Balprada Ayurvedic Hospital &amp;
                      Research Center on Google to see the latest public feedback.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Instagram Reels and Video Stories
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The same section includes Instagram reels and video
                      stories, which let families see the ashram, the
                      surroundings and patient experiences in a more personal way
                      before planning a visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. A Note on Kanth-Specific Reviews
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The reviews on the website come mainly from Moradabad
                      district and other parts of Uttar Pradesh, and Kanth
                      families should read them in that light, since Kanth lies
                      in the same district as the main branch.
                    </li>
                    <li>
                      Patients from Kanth who have visited Balprada are welcome to
                      share their own honest experience on Google, which helps
                      other families in the area decide with more confidence.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Reviews Reflect About Balprada Care
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. A Long-Standing Tradition of Seva
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada has served patients since 1991, when Sw. Vaidya
                      Vijay Pal Singh Ji began the work with a vision of
                      ayurvedic healing and social service, and many reviews echo
                      this service-first spirit.
                    </li>
                    <li>
                      The late Vaidya Shri Vijaypal Singh Ji taught that staying
                      positive gives courage in difficult circumstances, and
                      patients often say they felt encouraged and supported
                      during their visit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Care Planned Around the Patient
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The care process begins with consultation, followed by a
                      personalized Ayurvedic plan, supportive facilities and
                      follow-up, so each patient receives guidance suited to
                      their own condition and routine.
                    </li>
                    <li>
                      Review feedback about knowledgeable vaidyas fits with this
                      approach, where food habits, sleep, stress and daily
                      routine are considered along with symptoms.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Conditions Patients Seek Care For
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Kidney and Liver Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ayurvedic and lifestyle care is offered for kidney failure,
                      kidney stones, swelling, fatty liver, jaundice and weak
                      digestion, and patients are advised to continue prescribed
                      medicines and dialysis unless their own doctor says
                      otherwise.
                    </li>
                    <li>
                      Dr. U. S. Sharma, CMS at Balprada, has more than 20 years
                      of Ayurvedic practice with a focus on kidney and liver
                      conditions and long-term chronic care.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Cancer Supportive Care
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Sensitive supportive care is offered for strength and
                      recovery, diet guidance and stress support during serious
                      illness, always alongside the treatment advised by the
                      patient&apos;s specialist.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Diabetes, Thyroid, Heart and Women&apos;s Wellness
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Personalized support is available for diabetes, thyroid
                      concerns, blood pressure, obesity, hormonal balance,
                      menstrual health and weakness, with attention to food
                      discipline and lifestyle correction.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities Patients Appreciate
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Panchakarma, Yoga and Naturopathy
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Panchakarma is planned after individual assessment, with
                      doctor-guided planning and recovery support, while yoga,
                      meditation and naturopathy help patients build discipline,
                      calm and a steady daily routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Physiotherapy and Pathology Lab
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Physiotherapy supports safe movement and recovery, and
                      Balprada Labs offers tests such as Complete Blood Count,
                      Thyroid Profile, Liver Function Test, Kidney Function Test,
                      Diabetes Profile, Lipid Profile, Urine Routine and
                      Microscopy, and Vitamin B12 and Vitamin D.
                    </li>
                    <li>
                      Other doctor-advised tests may also be available, so
                      patients should call to confirm the test, preparation and
                      charges.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes Patients Feel Comfortable
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. Time and Attention in Consultation
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      The first consultation is not rushed, because the doctor
                      considers symptoms, medical history, current treatment,
                      food habits, sleep, stress and daily routine before
                      suggesting Ayurvedic guidance, and patients often value
                      being heard in full.
                    </li>
                    <li>
                      Diagnostic reports are reviewed where relevant, and the
                      in-house lab can support this step, so families do not have
                      to search for a separate laboratory in an unfamiliar place.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Everything Under One Roof
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Consultation, medicines, therapies, diagnostics and ashram
                      care belong to one ecosystem, which saves time and
                      confusion for elderly patients and attendants travelling
                      from Kanth.
                    </li>
                    <li>
                      Balprada Enterprises also offers herbal tea, spices, oils,
                      avaleh, herbal flour, gram flour, pickles and murabba, and
                      patients can ask about these products through the contact
                      form or by phone.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. Service Beyond the Clinic
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Balprada Jansewa Sansthan runs Vridhashram for elderly
                      people and those without support, Navtarun Ashram for
                      children in need, residential school support and Gaushala
                      seva, which patients see as proof of the
                      institution&apos;s sincere seva spirit.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Starting Treatment
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. About the Condition and Plan
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask the vaidya what the plan includes, how food, sleep and
                      daily routine will change and which signs mean you should
                      contact your own doctor at once.
                    </li>
                    <li>
                      Ask how often review visits are needed, since follow-up
                      depends on the condition and may include reviewing reports,
                      symptoms, diet and response to medicines over time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. About Medicines and Tests
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Ask which medicines are prescribed, how and when to take
                      them and whether any lab tests are needed, and confirm
                      preparation and charges with the lab before you go.
                    </li>
                    <li>
                      Tell the vaidya about every medicine, supplement or home
                      remedy you already use, so that the plan remains safe and
                      clear for everyone involved.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    3. About Other Treatment
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Keep taking prescribed allopathic medicines unless your own
                      doctor advises a change, and never stop dialysis, insulin
                      or cancer treatment on your own.
                    </li>
                    <li>
                      Emergencies should go to urgent medical care first, since
                      Ayurvedic care is supportive guidance and does not replace
                      emergency treatment.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sharing Your Own Balprada Experience
              </h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    1. How to Leave a Review
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Patients and attendants who are happy with their visit can
                      search for Balprada Ayurvedic Hospital &amp; Research
                      Center on Google and write an honest review describing the
                      consultation, the staff, the medicines and the
                      surroundings.
                    </li>
                    <li>
                      Specific details such as the branch visited, the kind of
                      care taken and how the follow-up went help other families
                      from Kanth understand what to expect.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    2. Feedback and Questions
                  </h3>

                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Families who have a concern or a suggestion can call{" "}
                      <a href="tel:8126364606" className="hover:underline">
                        8126364606
                      </a>
                      , send a WhatsApp message or write to{" "}
                      <a
                        href="mailto:balpradaindia@gmail.com"
                        className="hover:underline"
                      >
                        balpradaindia@gmail.com
                      </a>
                      , and the team will listen and guide them.
                    </li>
                    <li>
                      Honest feedback, good or critical, helps Balprada keep its
                      service humble, practical and responsible.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Plan Your Visit from Kanth
              </h2>

              <div className="mb-6 space-y-5">
                <div>
                  <p className="font-semibold">Before You Come</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      Bring past prescriptions, recent test reports, the
                      medicines you take now and notes on symptoms and daily
                      diet, as advised on the Balprada FAQ page.
                    </li>
                    <li>
                      Call or send a WhatsApp message first, because availability
                      can vary by branch.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Free OPD and Timings</p>

                  <ul className="list-disc space-y-2 pl-5 text-black">
                    <li>
                      OPD runs from 10:00 AM to 2:00 PM, the ashram and clinic
                      stay open seven days a week, and a free OPD consultation is
                      available on the 15th of every month.
                    </li>
                  </ul>
                </div>

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
                        Bilari, District Moradabad, Uttar Pradesh 244415, call or
                        WhatsApp{" "}
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
                        Uttar Pradesh 244001, Sunday vaidya availability, call{" "}
                        <a href="tel:9410447000" className="hover:underline">
                          9410447000
                        </a>{" "}
                        before visiting.
                      </li>
                      <li>
                        Email{" "}
                        <a
                          href="mailto:balpradaindia@gmail.com"
                          className="hover:underline"
                        >
                          balpradaindia@gmail.com
                        </a>{" "}
                        for questions about appointments.
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