// src/components/Skills.tsx
import React from "react";
import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  // Animación para cada tarjeta de habilidad
  const skillVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full max-w-4xl text-center mt-16">
      <h3 className="text-3xl font-bold text-gray-300 mb-8">Mis Habilidades</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }} // Efecto de aparición escalonada
            className="flex flex-col items-center justify-center p-6 bg-gray-800/30
                       border border-white/10 rounded-lg gap-4
                       transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400"
          >
            <skill.icon size={48} className="text-gray-300" />
            <span className="font-bold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;