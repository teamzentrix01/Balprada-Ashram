import { galleryImages, heroImages } from "./data";

export const aboutAreas = [
  {
    slug: "ayurvedic-care",
    tab: "Ayurvedic Care",
    eyebrow: "Ayurvedic Care",
    title: "Healing guided by traditional Ayurveda",
    summary:
      "Balprada combines consultation, herbal medicines, diet guidance and disciplined routines to support long-term healing.",
    detail:
      "Each care plan begins with understanding the patient, health concern, lifestyle and treatment history. Experienced doctors then guide medicines, diet and follow-up care according to individual needs.",
    hero: galleryImages[5],
    cards: [
      {
        title: "Personal Consultation",
        image: galleryImages[0],
        text: "A focused assessment helps shape a practical and personalized care path.",
      },
      {
        title: "Diet & Lifestyle",
        image: galleryImages[1],
        text: "Daily routines and food guidance support medicines and recovery.",
      },
      {
        title: "Follow-up Care",
        image: heroImages[2],
        text: "Regular review keeps the treatment journey clear and responsive.",
      },
    ],
  },
  {
    slug: "experienced-vaidyas",
    tab: "Experienced Vaidyas",
    eyebrow: "Our Vaidyas",
    title: "Experience, listening and personalized guidance",
    summary:
      "Balprada's doctors and vaidyas bring practical experience in chronic health concerns and patient-centered care.",
    detail:
      "The team approaches every case with careful listening, examination and ongoing guidance. Treatment is supported by traditional knowledge, responsible follow-up and clear communication with families.",
    hero: galleryImages[0],
    cards: [
      {
        title: "Clinical Experience",
        image: galleryImages[0],
        text: "Experienced practitioners guide care for complex and long-term concerns.",
      },
      {
        title: "Patient Understanding",
        image: galleryImages[3],
        text: "Every treatment begins by understanding the person, not only symptoms.",
      },
      {
        title: "Family Guidance",
        image: galleryImages[4],
        text: "Families receive practical support for diet, routine and follow-up.",
      },
    ],
  },
  {
    slug: "ashram-seva",
    tab: "Ashram & Seva",
    eyebrow: "Ashram & Jansewa",
    title: "A healing environment built around seva",
    summary:
      "The ashram brings healthcare, discipline, emotional support and community service together in one peaceful environment.",
    detail:
      "Balprada's jansewa mission extends beyond treatment through ashram care, support initiatives and a culture of dignity, compassion and positive living.",
    hero: heroImages[1],
    cards: [
      {
        title: "Peaceful Environment",
        image: heroImages[1],
        text: "A calm setting helps patients and families feel supported during care.",
      },
      {
        title: "Jansewa",
        image: galleryImages[4],
        text: "Social service remains central to Balprada's purpose and daily work.",
      },
      {
        title: "Positive Living",
        image: galleryImages[3],
        text: "Discipline, hope and community support strengthen the healing journey.",
      },
    ],
  },
  {
    slug: "herbal-medicine",
    tab: "Herbal Medicine",
    eyebrow: "Herbal Wellness",
    title: "Ayurvedic medicines prepared with care",
    summary:
      "Balprada's herbal wellness work supports treatment through traditional formulations and quality-focused preparation.",
    detail:
      "Medicines are selected and prepared to complement consultation and lifestyle care. The focus remains on responsible use, quality ingredients and guidance from experienced practitioners.",
    hero: galleryImages[2],
    cards: [
      {
        title: "Traditional Formulations",
        image: galleryImages[2],
        text: "Classical Ayurvedic principles guide medicine selection and preparation.",
      },
      {
        title: "Quality Ingredients",
        image: galleryImages[5],
        text: "Herbal ingredients are handled with attention to quality and purpose.",
      },
      {
        title: "Guided Usage",
        image: galleryImages[1],
        text: "Medicines are supported by professional consultation and follow-up.",
      },
    ],
  },
  {
    slug: "research",
    tab: "Research",
    eyebrow: "Research Centre",
    title: "Learning from care, evidence and experience",
    summary:
      "Balprada's research-oriented approach connects traditional Ayurvedic knowledge with organized patient care and diagnostics.",
    detail:
      "The institution continues to learn through clinical experience, pathology support, medicine development and careful review of patient outcomes.",
    hero: galleryImages[1],
    cards: [
      {
        title: "Clinical Learning",
        image: galleryImages[0],
        text: "Patient experience helps refine consultation and care practices.",
      },
      {
        title: "Pathology Support",
        image: galleryImages[2],
        text: "Diagnostic facilities support informed assessment and monitoring.",
      },
      {
        title: "Medicine Development",
        image: galleryImages[5],
        text: "Herbal wellness work supports responsible formulation development.",
      },
    ],
  },
];
