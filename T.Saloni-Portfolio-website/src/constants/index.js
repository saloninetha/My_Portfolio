
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  projecct2,
  project3,
  trendnext,
  Entitled,
  edu,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 


 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Zero Trust Cloud Security Virtual Internship",
    company_name: "AICTE(Eduskills)",
    icon: edu,
    iconBg: "#383E56",
    date: "April 2024 - June 2024",
    points: [
      "Participated in a 10-week internship focused on Zero Trust Architecture and secure system design.",
      "Simulated 5+ attack scenarios and implemented prevention strategies during lab tasks.",
      "Completed 6+ hands-on labs curated by Zscaler to explore access control and cloud protection.",
    ],
  },
  {
    title: "Generative AI Virtual Internship",
    company_name: "AICTE(Eduskills)",
    icon: edu,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
      "Executed a 10-week internship in collaboration with Google Cloud, gaining experience in LLMs, cloud deployment, and prompt engineering.",
      "Built and tested 3+ generative AI mini-projects with support from EduSkills labs..",
      "Collaborated on model fine-tuning tasks that improved sample accuracy by 15%.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Entittled",
    description:
      "Designed an interactive learning platform used by 150+ demo users to teach children their rights.Tested platform usability with sample age groups and gathered feedback for refinement Enabled bilingual access (Hindi & English), increasing accessibility by 40%.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: Entitled,
    source_code_link: "https://github.com/saloninetha/Webapp-For-Children",
  },
  {
    name: "RealTime Scene Analysis",
    description:
      "Built an AI-powered webcam image tool using Gemini 2.0 Flash with 90% response accuracy.Processed 100+ image frames in real-time, enabling users to ask questions in natural language.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "Google Gemini 2.0",
        color: "green-text-gradient",
      },
      {
        name: "phidata",
        color: "pink-text-gradient",
      },
      {
        name: "duckduckgo search api",
        color: "white-text-gradient",
      },
    ],
    image: projecct2,
    source_code_link: "https://github.com/saloninetha/Real-Time-Scene-Analysis  ",
  },
  {
    name: "TrendNest-Ecommerce",
    description:
      "TrendNest is a modern e-commerce website tailored for fashion and lifestyle products, offering a clean and stylish user experience.Designed with a fully responsive layout using HTML, CSS, and JavaScript, ensuring smooth functionality across all devices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
     
    ],
    image: trendnext,
    source_code_link: "https://github.com/saloninetha/TrendNest-webApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
