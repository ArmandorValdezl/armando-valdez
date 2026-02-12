"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const skillVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const SkillItem = ({ skill, size = "normal" }: { skill: any, size?: "large" | "normal" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  // Jenga effect: random initial rotation
  const randomRotation = React.useMemo(() => (Math.random() - 0.5) * 8, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className={`
        ${size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
        perspective-1000
      `}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        variants={skillVariant}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.4}
        whileHover={{ 
          scale: 1.05, 
          rotateZ: randomRotation,
          zIndex: 50
        }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`
          flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800/40
          border border-slate-200 dark:border-white/5 rounded-2xl gap-4 shadow-sm dark:shadow-none
          transition-colors duration-300 hover:bg-cyan-50/50 dark:hover:bg-cyan-400/5 hover:border-cyan-400/30 group cursor-grab active:cursor-grabbing
          h-full w-full
        `}
      >
        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-center gap-4">
          <skill.icon 
            size={size === "large" ? 48 : 32} 
            className="text-slate-500 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300" 
          />
          <span className={`
            font-bold text-slate-600 dark:text-gray-300 group-hover:text-cyan-700 dark:group-hover:text-white transition-colors
            ${size === "large" ? "text-lg" : "text-xs"}
          `}>
            {skill.name}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const t = useTranslations("Skills");

  // Flatten skills for bento grid, manually marking some as "large"
  const allSkills = skillsData.flatMap(cat => cat.skills);
  
  // Highlighting key technologies for larger blocks
  const largeSkills = ["React", "TypeScript", "Node.js", "PostgreSQL", "Moodle", "Next.js", "Vercel"];

  return (
    <div className="w-full max-w-5xl px-4 mt-24">
      <h3 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white">{t("title")}</h3>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[120px] gap-4"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {allSkills.map((skill) => (
          <SkillItem 
            key={skill.name} 
            skill={skill} 
            size={largeSkills.includes(skill.name) ? "large" : "normal"}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;