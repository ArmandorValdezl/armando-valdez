"use client";

import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
        
        {/* Social Links */}
        <div className="flex gap-8 text-slate-500 dark:text-gray-400">
          <a 
            href="https://github.com/ArmandorValdezl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            title="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/armando-rafael-valdez-ledezma/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            title="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a 
            href="mailto:tuemail@ejemplo.com"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            title="Email"
          >
            <FiMail size={24} />
          </a>
        </div>

        {/* Text and Copyright */}
        <div className="text-center space-y-2">
          <p className="text-slate-600 dark:text-gray-400 text-sm">
            {t("madeWith")} <span className="text-cyan-600 dark:text-cyan-400 font-bold">Next.js</span> {t("by")}{" "}
            <span className="text-slate-900 dark:text-white font-bold">Armando Valdez</span>
          </p>
          <p className="text-slate-400 dark:text-gray-500 text-xs">
            © {year} Armando Valdez. {t("rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
