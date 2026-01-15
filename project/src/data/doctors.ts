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
    title: "Consultant Physician – MBBS, MD (Medicine) – KEM Hospital",
    experience: "7+ Years Experience",
    image: "/ganesh.jpg", // ✅ Correct usage

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
      "Consultant Physician – Alexis Hospital",
    ],

    memberships: [
      "MAP – Maharashtra Association of Physicians",
      "BAPI – Bariatric Association of Physicians of India",
    ],
  },
 {
  slug: "dr-khan-ahmed",
  name: "Dr. Khan Ahmed",
  title: "Sr. intensivist | Aesthetic & Cosmetology Specialist",
  experience: "7+ Years of Clinical, ICU & Aesthetic Practice",
  image: "/ahmed.jpg",

  qualifications: [
    "B.U.M.S – Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru",
    "Advanced Training in ICU & Critical Care Management",
    "Certified in COVID-19 Critical Care & Emergency Response",
    "Advanced Certification in Clinical Cosmetology & Aesthetic Medicine",
    "Certified Practitioner in Laser Hair Reduction & Energy-Based Devices",
  ],

  description: [
    "Dr. Ahmed Khan, Managing Director of Alexis Hospital, Bhiwandi, is a BUMS graduate and ICU intensivist with over 7 years of experience, including work at COVID care centres, along with expertise in skin, hair, and laser treatments.",
    "He played a key role in managing moderate to severe COVID-19 patients across multiple healthcare centers, handling oxygen therapy, ventilatory support, and critical monitoring.",
    "In addition to his critical care expertise, he is a trained cosmetologist offering advanced skin, hair, and laser treatments with a strong medical foundation.",
    "His unique dual expertise allows him to deliver aesthetic treatments with the highest standards of patient safety, clinical judgment, and ethical care.",
  ],

  expertise: [
    "ICU & Critical Care Management",
    "COVID-19 Patient Care & Post-COVID Recovery",
    "Emergency & Acute Medical Care",
    "Clinical Cosmetology & Aesthetic Medicine",
    "Laser Hair Reduction & Skin Rejuvenation",
    "PRP Therapy for Hair & Skin",
    "Acne, Pigmentation & Scar Management",
  ],

  experienceDetails: [
    "Managing Director – Alexis Hospital, Bhiwandi",
    "ICU & Critical Care Physician – Multiple Healthcare Centers",
    "Frontline COVID-19 Care Provider during Pandemic",
    "Consultant Physician – Inpatient & Emergency Services",
    
    "Head – Skin, Hair, Laser & Aesthetic Department",
  ],

  memberships: [
    "Registered Medical Practitioner – RGUHS",
    "Member – Critical Care & Emergency Medicine Associations",
    "Member – Aesthetic & Cosmetology Practitioners Association",
  ],
},

{
  slug: "dr-saman-bano-javed",
  name: "Dr.(Mrs.) Saman Ahmed Khan",
  title: "Consultant Cosmetologist & Aesthetic Medicine Specialist",
  experience: "5+ Years Experience in Aesthetic & Skin Care",
  image: "/saman.jpg",

  qualifications: [
    "Owner and Founder of Alexis Hospital And Renew+ Aesthetic Clinic",
    "(BUMS) – RGUHS, Bengaluru",
    "Advanced Diploma in Clinical Cosmetology",
    "Certified Aesthetic Physician – Skin, Hair & Laser Treatments",
    "Specialized Training in Female Aesthetic & Wellness Care",
    
  ],

  description: [
    "Dr. Khan Saman Bano Javed is a highly proficient cosmetologist specializing in skin aesthetics, hair restoration, and non-invasive cosmetic procedures.",
    "She is recognized for her refined aesthetic sense, gentle approach, and dedication to delivering safe, effective, and natural-looking results.",
    "Her practice emphasizes customized treatment plans, combining modern cosmetology techniques with holistic patient care.",
    "She has a strong focus on women’s skin health, anti-aging solutions, and confidence-enhancing cosmetic treatments.",
  ],

  expertise: [
    "Aesthetic Cosmetology & Skin Care",
    "Acne, Melasma & Pigmentation Treatments",
    "PRP & Hair Regrowth Therapies",
    "Laser Skin Treatments & Hair Reduction",
    "Anti-Aging & Skin Tightening Procedures",
    "Women-Centric Aesthetic & Wellness Care",
  ],

  experienceDetails: [
    "Consultant Cosmetologist – Clinical Aesthetic Practice",
    "Specialist – Skin, Hair & Laser Treatments",
  ],

  memberships: [
    "Registered Medical Practitioner – RGUHS",
    "Member – Professional Cosmetology & Aesthetic Associations",
  ],
},
{
  slug: "dr-khwaja-moinuddin",
  name: "Dr. Khwaja Moinuddin",
  title: "Consultant Pediatrician & Neonatologist (New Born & Child Specialist)",
  experience: "10+ Years Experience in Pediatrics & Neonatal Care",
  image: "/moin.png",

  qualifications: [
    "MBBS",
    "DCH – Diploma in Child Health",
    "MD – Pediatrics",
    "PGPN – Post Graduate Program in Neonatology (Boston)",
  ],

  description: [
    "Dr. Khwaja Moinuddin is a highly experienced Pediatrician and Neonatologist specializing in newborn and child healthcare.",
    "He has extensive expertise in managing neonatal emergencies, childhood illnesses, growth and developmental monitoring, and preventive pediatric care.",
    "He is known for his calm approach, accurate diagnosis, and compassionate care for infants, children, and their families.",
  ],

  expertise: [
    "Newborn & Neonatal Care",
    "Pediatric Emergencies",
    "Childhood Infections & Immunization",
    "Growth & Development Assessment",
    "Neonatal Intensive Care (NICU)",
    "Pediatric Respiratory & Gastrointestinal Disorders",
  ],

  experienceDetails: [
    "Consultant Pediatrician & Neonatologist",
    "Specialist in Newborn & Child Emergency Care",
    "OPD Consultant – Evening Practice (9:00 PM – 10:00 PM)",
    "24 Hours Pediatric & Neonatal Emergency Services",
  ],

  memberships: [
    "Member – Indian Academy of Pediatrics (IAP)",
    "Member – Neonatology & Child Health Associations",
  ],
},




];
