// src/components/ContactForm.tsx

"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from "next-intl";
import MagneticButton from "./MagneticButton";

const ContactForm = () => {
  const t = useTranslations("ContactForm");
  const [state, handleSubmit] = useForm("mpwlvbzb");

  if (state.succeeded) {
    return (
      <div className="text-center py-24">
        <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{t("success")}</h3>
        <p className="text-slate-600 dark:text-gray-300 mt-2">{t("successSub") || "I'll get back to you soon."}</p>
      </div>
    );
  }

  return (
    <section id="contacto" className="w-full max-w-2xl py-24 text-center px-4">
      <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-white">{t("title")}</h2>
      <p className="text-slate-600 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
        {t("subtitle") || "¿Tienes un proyecto en mente o una oportunidad para mí? ¡No dudes en contactarme!"}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          id="name"
          type="text"
          name="name"
          placeholder={t("name")}
          className="bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-white/20 rounded-lg p-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:border-cyan-400 transition-all shadow-sm"
          required
        />
        
        <input
          id="email"
          type="email"
          name="email"
          placeholder={t("email")}
          className="bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-white/20 rounded-lg p-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:border-cyan-400 transition-all shadow-sm"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-left text-sm ml-1" />

        <textarea
          id="message"
          name="message"
          placeholder={t("message")}
          rows={5}
          className="bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-white/20 rounded-lg p-4 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:border-cyan-400 transition-all shadow-sm resize-none"
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-left text-sm ml-1" />
        
        <div className="flex justify-center mt-2">
          <MagneticButton>
            <div
              className={`px-8 py-4 font-bold text-white dark:text-gray-900 bg-cyan-600 dark:bg-cyan-400 rounded-lg 
                         transition-all duration-300 hover:bg-cyan-700 dark:hover:bg-cyan-300 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(22,200,228,0.7)]
                         ${state.submitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {state.submitting ? t("sending") : t("send")}
            </div>
          </MagneticButton>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
