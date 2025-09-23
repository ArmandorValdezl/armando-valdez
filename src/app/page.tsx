//app/page.tsx
"use client"; // <-- 1. Convertimos la página en un Componente de Cliente para usar hooks
/*  --------------------------    ZONA DE IMPORTACIONES    -----------------------------  */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // <-- 2. Importamos el hook mágico

import TypingAnimation from "@/components/TypingAnimation";
import { projectsData } from "@/data/projects"; // <-- 1. Importamos nuestros datos
import ProjectCard from "@/components/ProjectCard"; // <-- 2. Importamos nuestro componente
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

/*  --------------------------    FIN DE ZONA DE IMPORTACIONES    -----------------------------  */


export default function HomePage() {

   // Necesitamos un estado para la sección activa que compartiremos con la Navbar
  const [activeSection, setActiveSection] = React.useState("Inicio");

  // 3. Creamos un "observador" para cada sección con el hook useInView
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.2 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.2 });

  // 4. Usamos useEffect para actualizar el estado cuando una sección entra en la vista
  useEffect(() => {
    if (heroInView) setActiveSection("Inicio");
    if (projectsInView) setActiveSection("Proyectos");
    if (aboutInView) setActiveSection("Sobre Mí");
    if (contactInView) setActiveSection("Contacto");
  }, [heroInView, projectsInView, aboutInView, contactInView]);

  return (
    <> {/* Usamos un fragmento para agrupar Navbar y main */}
      {/* Pasamos el estado y la función para actualizarlo a la Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex min-h-screen flex-col items-center p-4 pt-24">


    {/*  --------------------------    ZONA DE HEADER    -----------------------------  */}
      <section ref={heroRef} id="inicio" className="flex flex-col justify-center items-center text-center h-screen">
        {/* Aquí es donde vivirá toda la magia de la Hero Section.
          Por ahora, solo pondremos los elementos básicos sin estilo.
        */}

        <h1 className="text-6xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(22,200,228,0.7)]">
          ARMANDO VALDEZ
        </h1>

        <div className="mt-4 text-xl h-14 text-gray-300">
           {/* 'text-gray-300' le da un color más sutil que el título principal */}
          <TypingAnimation />
        </div>

        {/* BOTONES ESTILIZADOS */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* He cambiado la dirección del flex a columna en móviles y a fila en pantallas más grandes ('sm:flex-row')
            para que se vea bien en todos los dispositivos.
          */}

          {/* Botón Primario */}
          <a
            href="#proyectos"
            className="px-6 py-2 font-bold text-cyan-400 border-2 border-cyan-400 rounded-lg 
                       hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300
                       hover:shadow-[0_0_15px_rgba(22,200,228,0.7)]"
          >
            Mira mis proyectos
          </a>

          {/* Botón Secundario */}
          <a
            href="/cv-armando-valdez.pdf" 
            download="CV - Armando Valdez.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 font-bold text-white bg-white/10 border-2 border-white/20 rounded-lg
                       hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          >
            Descarga mi CV
          </a>
        </div>
      </section>
      {/*  --------------------------    FIN ZONA DE HEADER    -----------------------------  */}
      {/*  --------------------------    ZONA DE PROYECTOS    -----------------------------  */}

      <section ref={projectsRef} id="proyectos" className="w-full max-w-6xl py-24">
        {/* 'id="proyectos"' es el ancla para nuestro botón */}
        {/* Le damos 'h-screen' solo para que ocupe espacio y podamos ver el efecto de scroll */}
        <h2 className="text-4xl font-bold mb-6">Mis Proyectos</h2>
        
        {/* Aquí es donde renderizamos las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recorremos el array de datos y por cada 'project'... */}
          {projectsData.map((project) => (
            // ...renderizamos un componente ProjectCard.
            // Le pasamos el 'key' (importante para React) y el objeto completo del proyecto.
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      {/*  --------------------------    FIN ZONA DE PROYECTOS    -----------------------------  */}
      {/*  --------------------------    ZONA DE SOBRE MÍ    -----------------------------  */}
      <div ref={aboutRef} id="sobre-mi">
        <AboutMe />
      </div>
      
      {/*  --------------------------    FIN ZONA DE SOBRE MÍ    -----------------------------  */}
      {/*  --------------------------    ZONA DE CONTACTOS    -----------------------------  */}
      <div ref={contactRef} id="contacto">
        <ContactForm />
      </div>
      {/*  --------------------------    FIN ZONA DE CONTACTOS    -----------------------------  */}
    </main>
    </>
  );
}