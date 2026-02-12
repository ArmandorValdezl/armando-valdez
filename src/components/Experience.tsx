"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

import { type ExperienceItem as ExperienceData } from "@/data/experience";

const ExperienceItem = ({ item, index, locale }: { item: ExperienceData, index: number, locale: "en" | "es" }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[11px] top-1 w-5 h-5 bg-white dark:bg-gray-900 border-2 border-cyan-500 dark:border-cyan-400 rounded-full flex items-center justify-center shadow-sm z-10">
        {item.type === "work" ? <FiBriefcase size={10} className="text-cyan-600 dark:text-cyan-400" /> : <FiBookOpen size={10} className="text-cyan-600 dark:text-cyan-400" />}
      </div>

      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-white dark:bg-gray-800/20 border border-slate-200 dark:border-white/5 p-6 rounded-xl shadow-md dark:shadow-lg hover:border-cyan-500/30 dark:hover:border-cyan-400/30 transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-1 block">{item.period}</span>
            <h4 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{item.role[locale]}</h4>
            <p className="text-slate-500 dark:text-gray-400 font-medium">{item.company}</p>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-slate-400 group-hover:text-cyan-500 transition-colors mt-1"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 16 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-slate-100 dark:border-white/5">
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
              {item.description[locale]}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const t = useTranslations("Experience");
  const locale = useLocale() as "en" | "es";

  return (
    <section id="experiencia" className="w-full max-w-4xl py-24 px-4">
      <h3 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white">{t("title")}</h3>
      
      <div className="relative border-l-2 border-cyan-500/30 dark:border-cyan-400/30 ml-4 space-y-12">
        {experienceData.map((item, index) => (
          <ExperienceItem key={item.id} item={item} index={index} locale={locale} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
