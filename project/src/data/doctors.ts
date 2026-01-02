import drGanesh from "../assets/ganesh.jpg";

export interface Doctor {
  slug: string;
  name: string;
  title: string;
  experience: string;
  image: string;
  qualifications: string[];
  description: string[];
  expertise: string[];
  experienceDetails: string[];
  memberships: string[];
}

export const doctors: Doctor[] = [
  {
    slug: "dr-ganesh-ahire",
    name: "Dr. Ganesh Ahire",
    title: "Consultant Physician – Internal Medicine",
    experience: "7+ Years Experience",
    image: drGanesh, // ✅ Correct usage

    qualifications: [
      "MBBS, MD (Medicine) – KEM Hospital, Mumbai",
      "CCEDBM – Evidence-Based Diabetes Management",
      "Fellowship in Nephrology & Dialysis",
      "Fellowship in 2D Echocardiography",
      "EULAR Certified Rheumatologist",
    ],

    description: [
      "Dr. Ganesh Ahire is a board-certified Internal Medicine specialist with over 7 years of experience managing a wide spectrum of medical conditions.",
      "He is known for his compassionate, patient-first approach and expertise in chronic disease management, preventive care, and evidence-based medicine.",
      "His practice spans both inpatient and outpatient care, ensuring continuity and optimized patient outcomes.",
    ],

    expertise: [
      "Internal Medicine & Chronic Disease Management",
      "Diabetes, Hypertension & Cardiac Care",
      "Nephrology & Dialysis Support",
      "Rheumatology (EULAR Certified)",
      "2D Echocardiography",
      "Preventive Healthcare & Wellness Planning",
    ],

    experienceDetails: [
      "Former Assistant Professor – Department of Medicine, KEM Hospital, Mumbai",
      "Consultant Physician – Shree Prajakta Multi-speciality Hospital",
      "Consultant Physician – Siraj Memorial Hospital",
      "Consultant Physician – Alexis Hospital",
    ],

    memberships: [
      "MAP – Maharashtra Association of Physicians",
      "BAPI – Bariatric Association of Physicians of India",
    ],
  },
];
