// src/components/AboutMe.tsx

"use client";
import React from "react";
import { motion } from "framer-motion"; // Importamos 'motion' de framer-motion
import Skills from "./Skills";

const AboutMe = () => {
  // Con 'variants' definimos los estados de nuestra animación: inicial y final.
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100, // Empezará 100px más abajo de su posición final
    },
    animate: {
      opacity: 1,
      y: 0, // Terminará en su posición original
      transition: {
        delay: 0.2, // Una pequeña pausa antes de empezar
      },
    },
  };

  return (
    <section id="sobre-mi" className="w-full max-w-4xl py-24 text-center">
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate" // La animación se activará cuando el elemento entre en la pantalla
        viewport={{ once: true }} // Se animará solo una vez
      >
        <h2 className="text-4xl font-bold mb-8">Sobre Mí</h2>
        <div className="text-lg text-gray-300 space-y-6">
          <p>
            Mi viaje al mundo del software comenzó a miles de pies de altura. Fascinado por la ingeniería aeronáutica, aprendí que la metodología y el pensamiento estructurado son la base para que un sistema complejo vuele de forma segura y 'sana'. Fue allí, en una clase de algoritmos, donde descubrí un universo aún más grande: la capacidad de construir cualquier cosa, desde cualquier lugar, a través del código.
          </p>
          <p>
            Hoy, aplico a cada proyecto el mismo principio que aprendí en física: la 'Superposición de Efectos'. Abordo cada desafío de software desfragmentándolo en pequeñas piezas para construir soluciones robustas, escalables y centradas en el usuario. Porque para mí, la tecnología es la mayor herramienta de progreso, y me hace feliz crear herramientas que solucionen problemas reales y apalanquen el esfuerzo humano.
          </p>
        </div>
      </motion.div>

      <Skills />
    </section>
  );
};

export default AboutMe;