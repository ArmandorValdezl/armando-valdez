// src/components/ProjectCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { type Project } from "@/data/projects";
import { useLocale, useTranslations } from "next-intl";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const locale = useLocale() as "en" | "es";

  // Tilt Effect State
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotation values for the 3D effect - Increased sensitivity to 25deg
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="bg-white dark:bg-gray-800/30 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-lg shadow-md dark:shadow-lg 
                      overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl dark:hover:shadow-cyan-400/10"
      >
        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
          <div className="relative h-56 w-full group overflow-hidden">
            <motion.div
              initial={{ scale: 1.2, filter: "blur(10px)", opacity: 0 }}
              whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={project.image}
                alt={`Project screenshot: ${project.title}`}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
          </div>

          <div className="p-6 flex flex-col justify-between h-64">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{project.title}</h3>
                <div className="flex gap-4 text-slate-500 dark:text-gray-300">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    <FiGithub size={24} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>

              <p className="text-slate-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description[locale]}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-cyan-50 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-300 text-xs font-bold px-2 py-1 rounded-full border border-cyan-100 dark:border-transparent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
