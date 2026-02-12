"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/data/projects";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full overflow-hidden px-4 py-8 group">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 flex w-full justify-between items-center pointer-events-none px-2">
        <button
          onClick={prevProject}
          className="p-3 rounded-full bg-slate-100/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white hover:bg-cyan-500/50 dark:hover:bg-cyan-500/50 hover:text-white hover:border-cyan-400 transition-all pointer-events-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 shadow-lg"
          aria-label="Previous project"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextProject}
          className="p-3 rounded-full bg-slate-100/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 text-slate-800 dark:text-white hover:bg-cyan-500/50 dark:hover:bg-cyan-500/50 hover:text-white hover:border-cyan-400 transition-all pointer-events-auto opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 shadow-lg"
          aria-label="Next project"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-4xl">
          <motion.div
            className="flex gap-8"
            animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 32}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project) => (
              <div key={project.id} className="min-w-full md:min-w-[calc(33.333%-22px)] flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === index ? "w-8 bg-cyan-500" : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-cyan-400/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
