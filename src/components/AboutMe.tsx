// src/components/AboutMe.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("AboutMe");

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <section id="sobre-mi" className="w-full max-w-4xl py-24 text-center">
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-white">{t("title")}</h2>
        <div className="text-lg text-slate-600 dark:text-gray-300 space-y-6 leading-relaxed">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>
      </motion.div>

      <Skills />
    </section>
  );
};

export default AboutMe;
