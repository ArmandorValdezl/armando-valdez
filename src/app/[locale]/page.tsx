//app/page.tsx
"use client";
/*  --------------------------    ZONA DE IMPORTACIONES    -----------------------------  */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import TypingAnimation from "@/components/TypingAnimation";
import { projectsData, companyProjectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import ParticlesBackground from "@/components/ParticlesBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MagneticButton from "@/components/MagneticButton";
import ProjectCarousel from "@/components/ProjectCarousel";

/*  --------------------------    FIN DE ZONA DE IMPORTACIONES    -----------------------------  */

export default function HomePage() {
  const t = useTranslations("HomePage");

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
    <>
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex min-h-screen flex-col items-center p-4 pt-24">
        {/*  --------------------------    ZONA DE HEADER    -----------------------------  */}
        <section ref={heroRef} id="inicio" className="relative w-full flex flex-col justify-center items-center text-center h-screen overflow-hidden">
          <ParticlesBackground />
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-6xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(22,200,228,0.7)]">
            {t("title")}
          </h1>

          <div className="mt-4 text-xl h-14 text-gray-600 dark:text-gray-300">
            <TypingAnimation />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton 
              href="#proyectos"
              className="px-6 py-2 font-bold text-cyan-500 dark:text-cyan-400 border-2 border-cyan-500 dark:border-cyan-400 rounded-lg 
                         hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300
                         hover:shadow-[0_0_15px_rgba(22,200,228,0.5)] dark:hover:shadow-[0_0_15px_rgba(22,200,228,0.7)]"
            >
              {t("viewProjects")}
            </MagneticButton>

            <MagneticButton
              href="/cv-Armando-Valdez(Improved).pdf" 
              download="CV - Armando Valdez.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 font-bold text-slate-800 dark:text-white bg-slate-200 dark:bg-white/10 border-2 border-slate-300 dark:border-white/20 rounded-lg
                         hover:bg-slate-300 dark:hover:bg-white/20 hover:border-slate-400 dark:hover:border-white/40 transition-all duration-300"
            >
              {t("downloadCv")}
            </MagneticButton>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex gap-8 text-slate-600 dark:text-gray-400">
            <a 
              href="https://github.com/ArmandorValdezl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95"
              title="GitHub"
            >
              <FiGithub size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/armando-rafael-valdez-ledezma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95"
              title="LinkedIn"
            >
              <FiLinkedin size={32} />
            </a>
          </div>
          </div>
        </section>

        {/*  --------------------------    ZONA DE PROYECTOS PERSONALES    -----------------------------  */}
        <motion.section 
          ref={projectsRef} 
          id="proyectos" 
          className="w-full max-w-6xl py-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-12 text-slate-800 dark:text-white">{t("projectsTitle")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="w-full max-w-6xl py-24 border-t border-slate-200 dark:border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-600/80 dark:text-cyan-400/80">{t("companyProjectsTitle")}</h2>
          
          <ProjectCarousel projects={companyProjectsData} />
        </motion.section>

        {/*  --------------------------    ZONA DE SOBRE MÍ    -----------------------------  */}
        <motion.div 
          ref={aboutRef} 
          id="sobre-mi"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <AboutMe />
        </motion.div>

        <Experience />
        
        {/*  --------------------------    ZONA DE CONTACTOS    -----------------------------  */}
        <motion.div 
          ref={contactRef} 
          id="contacto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContactForm />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}