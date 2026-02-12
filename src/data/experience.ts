export type ExperienceItem = {
  id: number;
  role: { es: string; en: string };
  company: string;
  period: string;
  description: { es: string; en: string };
  type: "work" | "education";
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: { es: "Fundador & Desarrollador Full-Stack", en: "Founder & Full-Stack Developer" },
    company: "A2 Creative Technologies (A2CT)",
    period: "2021 - Presente",
    description: {
      es: "Desarrollo de más de 10 sitios web personalizados para clientes educativos y comerciales. Implementación de plataformas Moodle mejorando la entrega de cursos en un 40%.",
      en: "Developed 10+ custom websites for educational and commercial clients. Implemented Moodle platforms improving course delivery by 40%."
    },
    type: "work",
  },
  {
    id: 2,
    role: { es: "Coordinador de Plataforma Tecnológica", en: "Technology Platform Coordinator" },
    company: "CAPS C.A.",
    period: "2019 - 2021",
    description: {
      es: "Mantenimiento y actualización de sitios web, desarrollo de plataformas de aprendizaje virtual y soporte técnico especializado.",
      en: "Website updates and maintenance, development of virtual learning platforms, and specialized technical support."
    },
    type: "work",
  },
  {
    id: 3,
    role: { es: "Soporte Técnico", en: "Technical Support" },
    company: "Departamento de Servicio Técnico - USB",
    period: "2014 - 2016",
    description: {
      es: "Soporte técnico de nivel 1 y 2, mantenimiento de equipos y asistencia en redes locales.",
      en: "Level 1 and 2 technical support, hardware maintenance, and local network assistance."
    },
    type: "work",
  },
  {
    id: 4,
    role: { es: "Bootcamp Full-Stack", en: "Full-Stack Bootcamp" },
    company: "ACADEMLO",
    period: "2025 - 2026",
    description: {
      es: "Formación intensiva en el desarrollo de aplicaciones web full-stack, dominando tecnologías modernas del frontend y backend.",
      en: "Intensive training in full-stack web application development, mastering modern frontend and backend technologies."
    },
    type: "education",
  },
  {
    id: 5,
    role: { es: "Ingeniería en Sistemas", en: "Systems Engineering" },
    company: "Universidad Santiago Mariño",
    period: "2021 - Presente",
    description: {
      es: "Grado en ingeniería enfocado en desarrollo de software, arquitectura de sistemas y gestión de bases de datos.",
      en: "Engineering degree focused on software development, systems architecture, and database management."
    },
    type: "education",
  },
  {
    id: 6,
    role: { es: "T.S.U. en Mantenimiento Aeronáutico", en: "U.T. in Aeronautical Maintenance" },
    company: "Universidad Simón Bolívar",
    period: "2013 - 2019",
    description: {
      es: "Formación técnica especializada en mantenimiento y sistemas de aeronaves. Título obtenido con éxito.",
      en: "Specialized technical training in aircraft maintenance and systems. Degree successfully completed."
    },
    type: "education",
  },
];
