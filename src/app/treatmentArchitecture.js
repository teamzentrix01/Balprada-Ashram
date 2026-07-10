import { galleryImages, treatments } from "./data";

export const treatmentCategories = [
  {
    slug: "kidney-care",
    title: "Kidney and Urinary Care",
    shortTitle: "Kidney",
    image: treatments[0].image,
    summary:
      "Ayurvedic consultation and lifestyle care for kidney function, swelling, stones and diabetes-linked kidney concerns.",
    overview:
      "Balprada approaches kidney care through consultation, medical history, diet guidance, Ayurvedic medicines and regular follow-up. The aim is to support the patient with a practical, responsible and personalized care plan.",
    conditions: [
      {
        slug: "kidney-failure",
        title: "Kidney Failure",
        icon: "Activity",
        text: "Reduced kidney function requires careful assessment, diet support and continuous monitoring.",
      },
      {
        slug: "kidney-stone",
        title: "Kidney Stones",
        icon: "Gem",
        text: "Ayurvedic consultation supports urinary comfort, hydration routines and dietary discipline.",
      },
      {
        slug: "swelling",
        title: "Swelling",
        icon: "Droplets",
        text: "Persistent swelling may need kidney, liver and metabolic assessment with guided care.",
      },
      {
        slug: "diabetic-nephropathy",
        title: "Diabetes-Related Kidney Concern",
        icon: "Gauge",
        text: "Diabetes-related kidney stress is approached through diet, sugar control and follow-up.",
      },
    ],
  },
  {
    slug: "liver-digestive",
    title: "Liver and Digestive Care",
    shortTitle: "Liver",
    image: treatments[1].image,
    summary:
      "Medicine, diet and routine-based care for liver health, fatty liver, jaundice and weak digestion.",
    overview:
      "The liver supports digestion, metabolism and immunity. Balprada combines Ayurvedic consultation, food guidance, routine correction and monitored herbal care for liver and digestive concerns.",
    conditions: [
      {
        slug: "fatty-liver",
        title: "Fatty Liver",
        icon: "HeartPulse",
        text: "Lifestyle correction and guided Ayurvedic care support liver metabolism.",
      },
      {
        slug: "jaundice",
        title: "Jaundice",
        icon: "Sun",
        text: "Assessment, diet discipline and monitored care are important for jaundice recovery.",
      },
      {
        slug: "weak-digestion",
        title: "Weak Digestion",
        icon: "Utensils",
        text: "Digestive strength is supported through food timing, routine and suitable medicines.",
      },
      {
        slug: "metabolic-imbalance",
        title: "Metabolic Imbalance",
        icon: "Scale",
        text: "Metabolic care connects liver health, weight, sugar balance and daily routine.",
      },
    ],
  },
  {
    slug: "cancer-support",
    title: "Cancer Supportive Care",
    shortTitle: "Cancer Support",
    image: treatments[2].image,
    summary:
      "Sensitive Ayurvedic supportive care for strength, diet, energy and emotional balance during serious illness.",
    overview:
      "Balprada provides supportive Ayurvedic consultation focused on strength, nutrition, routine and quality of life. Care is planned responsibly alongside the patient's primary medical treatment.",
    conditions: [
      {
        slug: "strength-recovery",
        title: "Strength and Recovery",
        icon: "BatteryCharging",
        text: "Guided routines and nutrition support energy and recovery.",
      },
      {
        slug: "diet-support",
        title: "Diet Guidance",
        icon: "Apple",
        text: "Simple and digestible food guidance is adapted to the patient's condition.",
      },
      {
        slug: "stress-support",
        title: "Stress Support",
        icon: "Brain",
        text: "A calm environment, counselling and routine support emotional steadiness.",
      },
      {
        slug: "follow-up-care",
        title: "Regular Consultation",
        icon: "CalendarCheck",
        text: "Regular review helps adjust supportive care according to changing needs.",
      },
    ],
  },
  {
    slug: "heart-metabolic",
    title: "Heart and Lifestyle Care",
    shortTitle: "Heart Care",
    image: treatments[3].image,
    summary:
      "Integrated Ayurvedic and lifestyle care for heart, blood pressure, diabetes, weight and stress concerns.",
    overview:
      "Heart and metabolic care is built around food habits, movement, stress management, Ayurvedic consultation and regular monitoring. The plan is personalized to the patient's health status.",
    conditions: [
      {
        slug: "blood-pressure",
        title: "Blood Pressure",
        icon: "Gauge",
        text: "Routine, stress management and monitored care support blood pressure control.",
      },
      {
        slug: "diabetes",
        title: "Diabetes",
        icon: "TestTube",
        text: "Food, activity, medicines and regular testing form the core of diabetes care.",
      },
      {
        slug: "obesity",
        title: "Obesity",
        icon: "PersonStanding",
        text: "Sustainable weight care focuses on metabolism, habits and realistic routines.",
      },
      {
        slug: "stress",
        title: "Stress",
        icon: "BrainCircuit",
        text: "Yoga, sleep routines and guided care help reduce lifestyle stress.",
      },
    ],
  },
  {
    slug: "women-wellness",
    title: "Women's Wellness",
    shortTitle: "Women Health",
    image: treatments[5].image,
    summary:
      "Private, sensitive and personalized Ayurvedic care for women's health, hormonal balance and weakness.",
    overview:
      "Women's health requires privacy, careful listening and individualized guidance. Balprada supports hormonal balance, nutrition, strength and lifestyle concerns through Ayurvedic consultation.",
    conditions: [
      {
        slug: "hormonal-balance",
        title: "Hormonal Balance",
        icon: "Waves",
        text: "Diet, sleep, stress and guided care contribute to hormonal wellbeing.",
      },
      {
        slug: "menstrual-health",
        title: "Menstrual Health",
        icon: "CalendarDays",
        text: "Personal consultation addresses cycle discomfort and routine-related concerns.",
      },
      {
        slug: "weakness",
        title: "Weakness",
        icon: "Sparkles",
        text: "Nutrition and suitable Ayurvedic support help rebuild strength.",
      },
      {
        slug: "maternal-wellness",
        title: "Maternal Wellness",
        icon: "HeartHandshake",
        text: "Sensitive guidance supports maternal nutrition, rest and wellbeing.",
      },
    ],
  },
];

export const treatmentSupportImage = galleryImages[5];

export function findTreatmentCategory(slug) {
  return treatmentCategories.find((category) => category.slug === slug);
}

export function findTreatmentCondition(categorySlug, conditionSlug) {
  const category = findTreatmentCategory(categorySlug);
  const condition = category?.conditions.find((item) => item.slug === conditionSlug);
  return { category, condition };
}
