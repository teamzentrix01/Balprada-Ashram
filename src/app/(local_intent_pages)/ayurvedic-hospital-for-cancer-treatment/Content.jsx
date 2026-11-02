import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "../../_components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AyurvedicHospitalForCancerSupport() {
  const faqs = [
    {
      q: "Does Balprada cure cancer?",
      a: "No. Balprada offers Ayurvedic supportive care for strength, diet, energy and emotional balance during serious illness. It is planned alongside your primary medical treatment.",
    },
    {
      q: "Can I continue chemotherapy or radiation while taking Ayurvedic care?",
      a: "Never stop or change cancer treatment on your own. Share your full treatment plan with the Ayurvedic doctor and your oncologist.",
    },
    {
      q: "What does cancer supportive care include?",
      a: "Strength and recovery support, simple diet guidance, stress and emotional support, and regular consultation and follow-up.",
    },
    {
      q: "What are the OPD timings?",
      a: "Consultation runs from 10:00 AM to 2:00 PM, and the ashram and clinic are open throughout the week. Please call before visiting.",
    },
    {
      q: "Is there a free OPD?",
      a: "Yes, free OPD consultation is available on the 15th of every month.",
    },
    {
      q: "Which reports should I bring?",
      a: "Bring scans, biopsy and blood reports, current prescriptions and your oncologist treatment plan.",
    },
    {
      q: "Is Sunday consultation available?",
      a: "Vaidya ji is available at the Moradabad branch on Sundays. Please call 9410447000 first.",
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
                What Ayurvedic Cancer Supportive Care Means
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Understanding the Role of Ayurveda During Cancer
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Families who search for an Ayurvedic hospital for cancer
                  treatment are usually looking for extra support for strength,
                  appetite, energy, digestion and emotional balance while the
                  patient is going through a serious illness.
                </li>
                <li>
                  At Balprada, Ayurvedic care for cancer is offered as supportive
                  care, which means it is planned responsibly alongside the
                  primary medical treatment advised by the patient oncologist and
                  treating hospital.
                </li>
                <li>
                  Balprada does not claim to cure cancer and does not ask any
                  patient to leave or delay chemotherapy, radiation, surgery or
                  any other treatment prescribed by a specialist.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                What Supportive Care Aims to Do
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The aim is to support strength, nutrition, routine and quality
                  of life, so that the patient feels steadier in body and mind
                  during a difficult period.
                </li>
                <li>
                  Care is shaped around the person and not only the disease, which
                  is why the doctor looks at symptoms, medical history, current
                  treatment, food habits, sleep, stress and daily routine before
                  suggesting any guidance.
                </li>
                <li>
                  Regular follow-up lets the team observe how the patient is
                  feeling and adjust the plan as needs change.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Balprada Ayurvedic Hospital and Research Center
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Seva-Based Legacy Since 1991
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada was started in 1991 by Sw. Vaidya Vijay Pal Singh Ji
                  with a vision of Ayurvedic healing joined with social service,
                  and the institution now carries 35 years of experience in
                  natural Ayurvedic care.
                </li>
                <li>
                  The hospital brings together an Ayurvedic chikitsalaya,
                  research, herbal wellness, pathology, yoga, naturopathy and
                  ashram-based service under one trusted ecosystem.
                </li>
                <li>
                  The late Vaidya Shri Vijaypal Singh Ji taught that staying
                  positive gives courage to face difficult circumstances, and this
                  message matters deeply for families dealing with serious
                  illness.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Mission for Chronic and Serious Conditions
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The mission is to provide reliable Ayurvedic care for chronic
                  and serious health conditions through consultation,
                  self-prepared medicines, lifestyle guidance and compassionate
                  service.
                </li>
                <li>
                  Patients and families are treated with patience and respect,
                  which patient reviews describe as humble, kind and welcoming
                  behavior from the staff.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Four Parts of Cancer Supportive Care
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Strength and Recovery
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Guided routines and nutrition support are planned to help the
                  patient build energy and support recovery, and the plan may
                  include Ayurvedic medicines, diet guidance, lifestyle correction
                  and supportive facilities where suitable.
                </li>
                <li>
                  Care is adjusted according to the patient condition, so a person
                  who is very weak receives a different routine from a person who
                  is relatively active.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Diet Guidance
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Food guidance is kept simple and easy to digest, and it is
                  adapted to the condition of the patient, because appetite and
                  digestion often change during illness and treatment.
                </li>
                <li>
                  The doctor reviews food habits and daily meals, and the family
                  is guided on how to keep a steady and manageable food routine at
                  home.
                </li>
                <li>
                  Please follow any special diet instructions given by your
                  oncologist or dietitian, and discuss them openly with the
                  Ayurvedic doctor so that both sets of advice work together.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Stress and Emotional Support
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  A calm environment, counselling and routine support emotional
                  steadiness, which is important because worry, fear and tiredness
                  affect both patients and caregivers.
                </li>
                <li>
                  The ashram setting, with yoga, meditation and naturopathy
                  available as supportive facilities, gives patients a quiet space
                  to rest and focus on a gentle daily rhythm.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Regular Consultation and Follow-up
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Regular review helps the team see how the patient is responding
                  and keep the guidance practical and responsible.
                </li>
                <li>
                  Reports are reviewed where relevant, so changes in the condition
                  are discussed with the doctor in a clear manner.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Facilities That Support the Care Journey
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Balprada Pathology Lab
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  The in-house lab lists tests such as Complete Blood Count, Liver
                  Function Test, Kidney Function Test, Diabetes Profile, Thyroid
                  Profile, Lipid Profile, Urine Routine and Microscopy, and
                  Vitamin B12 and Vitamin D.
                </li>
                <li>
                  These tests help the doctor understand general health, but they
                  do not replace the specialist reports and scans needed for
                  cancer diagnosis and monitoring, which must continue with your
                  oncology team.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Panchakarma and Therapies
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Panchakarma is planned only after individual assessment, and
                  patients are asked to share existing conditions, medicines and
                  mobility concerns before beginning, which is especially
                  important during or after cancer treatment.
                </li>
                <li>
                  Physiotherapy supports safe movement and strength, and yoga and
                  meditation support calm and sleep, with the doctor deciding what
                  is suitable for each patient.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                In-House Herbal Medicines
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Balprada Herbal Wellness prepares traditional and specialized
                  Ayurvedic medicines under organized conditions with modern
                  support systems.
                </li>
                <li>
                  Please tell your oncologist about every herbal medicine you take,
                  because some preparations may not suit every treatment plan, and
                  the two doctors should be aware of everything the patient is
                  using.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose an Ayurvedic Hospital for Cancer Support
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Questions Worth Asking
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Ask whether the hospital describes its cancer care as supportive
                  and coordinated with your oncologist, because honest wording is
                  a sign of responsible practice.
                </li>
                <li>
                  Ask who the consulting doctors are, how long they have practised
                  and how follow-up will work, so that you know whom to contact if
                  the patient feels worse after a visit.
                </li>
                <li>
                  Ask how medicines are prepared and whether the doctor will
                  review your current prescriptions before giving any herbal
                  medicine.
                </li>
                <li>
                  Ask about food guidance, rest and emotional support, since these
                  everyday parts of care often matter as much to a family as the
                  medicines themselves.
                </li>
                <li>
                  Be careful with claims of guaranteed cure, secret formulas or
                  pressure to stop standard treatment, as these are warning signs
                  and not marks of a good hospital.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Working Together with Your Oncology Team
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Keeping Both Doctors Informed
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Give your oncologist the name of every Ayurvedic medicine, tea,
                  oil or supplement, and ask whether any should be paused around
                  chemotherapy, radiation or surgery.
                </li>
                <li>
                  Give the Ayurvedic doctor your treatment calendar, including the
                  dates of cycles, scans and blood tests, so that routines and
                  food guidance can be planned around them.
                </li>
                <li>
                  Keep one simple folder with all reports and a notebook where you
                  write symptoms, appetite, sleep and energy each day, because
                  clear records help both doctors make better decisions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Support for Caregivers and Family
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                Caring for the Person Who Cares
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Caring for a seriously ill family member can be tiring, and
                  caregivers often forget their own food, rest and emotional needs
                  while they focus on the patient.
                </li>
                <li>
                  The calm ashram surroundings and the counselling and routine
                  support described by Balprada can help families feel less alone,
                  and caregivers are welcome to ask the team questions during the
                  visit.
                </li>
                <li>
                  Share responsibilities among family members where possible, so
                  that one person does not carry every task of travel, medicines,
                  reports and food preparation.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety Points for Cancer Patients and Families
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What to Keep in Mind
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Do not stop, delay or change chemotherapy, radiation, surgery,
                  hormone therapy or any prescribed medicine without the advice of
                  your treating specialist.
                </li>
                <li>
                  Share all reports, prescriptions and the current treatment
                  schedule with the Ayurvedic doctor on the first visit so that
                  care is planned safely.
                </li>
                <li>
                  The website does not publish clinical outcomes or success rates,
                  so be careful about any place that promises a cure or asks you
                  to give up standard treatment.
                </li>
                <li>
                  Patient reviews on the website are personal experiences, and
                  results and comfort levels differ from person to person.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                When to Seek Urgent Medical Help
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Severe pain, high fever, breathlessness, heavy bleeding,
                  repeated vomiting, confusion or sudden worsening need immediate
                  care at the nearest hospital or from your oncology team, and not
                  an Ayurvedic OPD visit.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your First Visit
              </h2>

              <h3 className="mb-3 font-serif text-2xl text-gray-900">
                What to Bring
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Bring biopsy and scan reports, recent blood tests, discharge
                  summaries, the list of current medicines and the treatment plan
                  given by the oncologist.
                </li>
                <li>
                  Write down the main concerns, such as weakness, poor appetite,
                  digestion trouble, poor sleep or anxiety, along with when they
                  began and what seems to make them better or worse.
                </li>
                <li>
                  Bring a family member who can help remember diet and routine
                  instructions, and who can support the patient during travel.
                </li>
              </ul>

              <h3 className="mb-3 mt-8 font-serif text-2xl text-gray-900">
                Travel and Comfort Tips
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-gray-700">
                <li>
                  Call or WhatsApp before you travel, explain the condition and
                  ask whether the visit is suitable, so that the team can guide
                  you on timing and the best branch.
                </li>
                <li>
                  Reach within the consultation window of 10:00 AM to 2:00 PM,
                  plan rest breaks for a weak patient and avoid long journeys on a
                  day when the patient is unwell.
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Where to Find Balprada
              </h2>

              <h3 className="mb-3 font-serif text-2xl">
                Main Branch in Bilari
              </h3>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-black">
                <li>
                  Mohalla Vijaynagar, Village Bhidwari, P.O. Guarau, Tehsil
                  Bilari, District Moradabad, Uttar Pradesh 244415.
                </li>
                <li>
                  The Ashram and clinic stay open throughout the week, with daily
                  consultation from 10:00 AM to 2:00 PM. Call or WhatsApp{" "}
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

              <h3 className="mb-3 font-serif text-2xl">
                Free OPD and Community Care
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-black">
                <li>
                  Free OPD consultation is available on the 15th of every month,
                  and Balprada Jansewa offers free and subsidised Ayurvedic
                  consultations for underprivileged patients.
                </li>
                <li>
                  You can also book through the website appointment page by
                  sharing patient details, preferred branch and health concern,
                  and the team will guide you on timing and the next step. Email:{" "}
                  <a
                    href="mailto:balpradaindia@gmail.com"
                    className="hover:underline"
                  >
                    balpradaindia@gmail.com
                  </a>
                  .
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