// src/data/projects.ts

// Primero, definimos con TypeScript cómo se verá la "forma" de cada objeto de proyecto.
// Esto nos ayuda a evitar errores y a que nuestro código sea más predecible.
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

// Ahora, creamos un array (una lista) con nuestros proyectos.
// Por ahora solo tenemos uno, pero iremos añadiendo más aquí.
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Templo de Sabiduría",
    description:
      "Un oráculo moderno para la introspección. Este proyecto ofrece un espacio de contemplación a través de frases filosóficas reveladoras, combinando un diseño sereno con una sólida base técnica.",
    image: "/images/projects/templo-de-sabiduria.png", // Esta será la ruta a nuestra imagen
    tags: ["React", "Vite", "CSS Modules"],
    liveUrl: "https://templo-de-sabiduria.vercel.app/",
    githubUrl: "https://github.com/ArmandorValdezl/templo-de-sabiduria",
  },

  {
    id: 2,
    title: "React Tempus",
    description: "Una aplicación del clima moderna y minimalista que permite a los usuarios buscar pronósticos en tiempo real. Este proyecto fue clave para afianzar mis habilidades en React, el consumo de APIs externas y la aplicación de patrones de diseño de software.", // <-- ¿Cuál es la historia de este proyecto? App del clima, buscador, etc.
    image: "/images/projects/react-tempus.png", // <-- Nombra así tu captura de pantalla
    tags: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"], // <-- ¿Qué tecnologías usaste aquí? ¿Alguna API?
    liveUrl: "https://react-tempus.vercel.app/",
    githubUrl: "https://github.com/ArmandorValdezl/ReactTempus",
  },
  {
    id: 3,
    title: "Rick and Morty App",
    description: "Esta es una aplicación web interactiva que construí utilizando React y Vite.js para explorar las fascinantes locaciones del universo de Rick y Morty, y conocer a los personajes que residen en cada una de ellas.", // <-- Cuéntame sobre esta app. ¿Qué funcionalidades tiene?
    image: "/images/projects/rick-and-morty.png", // <-- Nombra así tu captura de pantalla
    tags: ["React", "API Rest", "CSS Modules"], // <-- ¿Usaste paginación, filtros?
    liveUrl: "https://rick-and-morty-app-ten-kohl.vercel.app/",
    githubUrl: "https://github.com/ArmandorValdezl/rick-and-morty-app",
  },
];