// src/data/projects.ts

export type Project = {
  id: number;
  title: string;
  description: {
    es: string;
    en: string;
  };
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Templo de Sabiduría",
    description: {
      es: "Un oráculo moderno para la introspección. Este proyecto ofrece un espacio de contemplación a través de frases filosóficas reveladoras, combinando un diseño sereno con una sólida base técnica.",
      en: "A modern oracle for introspection. This project offers a space for contemplation through revealing philosophical phrases, combining a serene design with a solid technical foundation."
    },
    image: "/images/projects/templo-de-sabiduria.png",
    tags: ["React", "Vite", "CSS Modules"],
    liveUrl: "https://templo-de-sabiduria.vercel.app/",
    githubUrl: "https://github.com/ArmandorValdezl/templo-de-sabiduria",
  },
  {
    id: 2,
    title: "React Tempus",
    description: {
      es: "Una aplicación del clima moderna y minimalista que permite a los usuarios buscar pronósticos en tiempo real. Este proyecto fue clave para afianzar mis habilidades en React, el consumo de APIs externas y la aplicación de patrones de diseño de software.",
      en: "A modern and minimalist weather application that allows users to search for real-time forecasts. This project was key to strengthening my skills in React, consuming external APIs, and applying software design patterns."
    },
    image: "/images/projects/react-tempus.png",
    tags: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    liveUrl: "https://react-tempus.vercel.app/",
    githubUrl: "https://github.com/ArmandorValdezl/ReactTempus",
  },
  {
    id: 3,
    title: "Rick and Morty App",
    description: {
      es: "Esta es una aplicación web interactiva que construí utilizando React y Vite.js para explorar las fascinantes locaciones del universo de Rick y Morty, y conocer a los personajes que residen en cada una de ellas.",
      en: "This is an interactive web application built using React and Vite.js to explore the fascinating locations of the Rick and Morty universe and meet the characters residing in each of them."
    },
    image: "/images/projects/rick-and-morty.png",
    tags: ["React", "API Rest", "CSS Modules"],
    liveUrl: "https://rick-and-morty-app-ten-kohl.vercel.app/",
    githubUrl: "https://github.com/ArmandorValdezl/rick-and-morty-app",
  },
];

export const companyProjectsData: Project[] = [
  {
    id: 101,
    title: "Lodge-saas",
    description: {
      es: "Plataforma SaaS diseñada para la gestión eficiente de alojamientos y servicios relacionados, optimizando procesos operativos y la experiencia del cliente.",
      en: "SaaS platform designed for efficient management of accommodations and related services, optimizing operational processes and customer experience."
    },
    image: "/images/projects/placeholder.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Enterprise"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 102,
    title: "Field Guide App",
    description: {
      es: "Aplicación móvil para guías de campo desarrollada para funcionamiento offline, permitiendo la gestión de datos técnicos en entornos remotos.",
      en: "Mobile application for field guides developed for offline operation, allowing the management of technical data in remote environments."
    },
    image: "/images/projects/placeholder.png",
    tags: ["React Native", "Expo", "SQLite", "Tailwind", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 103,
    title: "Fixmy",
    description: {
      es: "Sistema de gestión para servicios técnicos y reparaciones empresariales. Permite el seguimiento de tickets, gestión de clientes y control de estados de reparación en tiempo real.",
      en: "Enterprise management system for technical services and repairs. Allows ticket tracking, customer management, and real-time repair status control."
    },
    image: "/images/projects/placeholder.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Management System"],
    liveUrl: "#",
    githubUrl: "https://github.com/ArmandorValdezl/Fixmy",
  },
];
