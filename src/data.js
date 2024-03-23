// import profile images
import ProfilePhoto1 from "../src/assets/img/profile1.png";
import ProfilePhoto2 from "../src/assets/img/profile2.png";
import ProfilePhoto3 from "../src/assets/img/profile3.png";

//import Ayurveda items
import Arthiritis from  "../src/assets/img/ayurveda/arthritis.jpeg"
import BackPain from  "../src/assets/img/ayurveda/low-back-pain.jpg"
import Piles from  "../src/assets/img/ayurveda/piles.png"
import Psoriasis from  "../src/assets/img/ayurveda/Psoriasis.jpeg"
import Infertility from "./assets/img/ayurveda/infertility.jpeg"
import PCOS from  "../src/assets/img/ayurveda/PCOS.jpeg"
import NeuDisorders from "./assets/img/ayurveda/neurology_disorders.jpeg"
import BPhypertension from  "../src/assets/img/ayurveda/BP.jpeg"
import Obesity from  "../src/assets/img/ayurveda/obesity.jpeg"
import Stress from  "../src/assets/img/ayurveda/stress.png"
import SportsInjuries from  "../src/assets/img/ayurveda/sports-injury.jpeg"



// navigation data
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Our Services",
    href: "massages",
  },
  {
    name: "Specialized Treatments",
    href: "specialTreatments",
  },
  {
    name: "Fees",
    href: "pricing",
  },
  {
    name: "Contact us",
    href: "contact",
  },
];

// testimonials data
export const testimonials = [
  {
    text: "My experience with Susanna was great, she is super knowledgeable and she made me feel very safe! Very accommodating too! Can't wait for my next appointment with her!",
    name: "Jane Smith",
    image: ProfilePhoto1,
    position: "Teacher",
  },
  {
    text: "I feel like I have a whole new lease of life. Ayurvedic massage has given me a physical, mental and spiritual M.O.T. and I am very grateful.",
    name: "Emma Carpenter",
    image: ProfilePhoto2,
    position: "Software Engineer",
  },
  {
    text: "Susanna has been instrumental in helping to alleviate the pain in my feet and back associated with my long days at work. I trust her expertise will always bring relief.",
    name: "Amy Black",
    image: ProfilePhoto3,
    position: "Service Sector",
  },
];

export const contactInfo = [
  {
    name: "Address",
    description:
        "18 Barkworth Place, Scarborough , Ontario - M1J 2W8",
  },
  {
    name: "Contact Info",
    description:
        "+1-(437)-326-7273",
  },
  {
    name: "Hours of operation",
    description:
        "Mon- Fri : 9 AM to 8 PM ",
  },
];

export const ayushItems = [
  {
    imageUrl: Arthiritis,
    name: "Rheumatoid Arthritis, Osteoarthritis , Psoriatic Arthritis"
  },
  {
    imageUrl: BackPain,
    name: "Lower Back Pain due to disc prolapse, disc degeneration , trauma ",

  },
  {
    imageUrl: Psoriasis,
    name: "Psoriasis,Eczema and All types of Skin diseases",
  },
  {
    imageUrl: Piles,
    name: "Kidney Stones , Ulcer ,Hemorrhoids, Asthma , Headache , Allergy etc",
  },
  {
    imageUrl: PCOS,
    name: "Gynaecological disorders , \n" +
        "Polycystic ovary syndrome (PCOS)",
  },
  {
    imageUrl: Infertility,
    name: "Special guidance on Male Female Infertility issues",
  },
  {
    imageUrl: Obesity,
    name: "Obesity ",

  },
  {
    imageUrl: NeuDisorders,
    name: "Neurological Disorders",
  },
  {
    imageUrl: BPhypertension,
    name: "Diabetes , Hypertension",
  },
  {
    imageUrl: Stress,
    name: "Specialized treatment for Stress",

  },
  {
    imageUrl: SportsInjuries,
    name: "Specialized treatment for Sports injuries",
  },
];
