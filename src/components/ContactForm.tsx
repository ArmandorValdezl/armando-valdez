// src/components/ContactForm.tsx

"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react"; // <-- 1. Importamos las herramientas de Formspree
import { motion } from "framer-motion";

const ContactForm = () => {
  // 2. Usamos el hook 'useForm'. Pega aquí el ID único de tu formulario.
  // El hook nos devuelve el estado del envío ('state') y la función para manejarlo ('handleSubmit').
  const [state, handleSubmit] = useForm("mpwlvbzb");

  // 3. Si el formulario se envió con éxito, mostramos un mensaje de agradecimiento.
  if (state.succeeded) {
    return (
      <div className="text-center py-24">
        <h3 className="text-2xl font-bold text-cyan-400">¡Gracias por tu mensaje!</h3>
        <p className="text-gray-300 mt-2">Me pondré en contacto contigo pronto.</p>
      </div>
    );
  }

  // Si no, mostramos el formulario.
  return (
    <section id="contacto" className="w-full max-w-2xl py-24 text-center">
      <h2 className="text-4xl font-bold mb-8">Contacto</h2>
      <p className="text-gray-300 mb-8">
        ¿Tienes un proyecto en mente o una oportunidad para mí? ¡No dudes en contactarme!
      </p>

      {/* 4. Conectamos nuestro formulario a la función 'handleSubmit' */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {/* Campo para el Nombre */}
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Tu Nombre"
          className="bg-gray-800/50 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-cyan-400 transition-colors"
          required
        />
        
        {/* Campo para el Email */}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Tu Correo Electrónico"
          className="bg-gray-800/50 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-cyan-400 transition-colors"
          required
        />
        {/* Esto nos ayuda a mostrar errores de validación si Formspree los detecta */}
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-left" />

        {/* Campo para el Mensaje */}
        <textarea
          id="message"
          name="message"
          placeholder="Tu Mensaje"
          rows={5}
          className="bg-gray-800/50 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-left" />
        
        {/* Botón de Envío */}
        <button
          type="submit"
          // 5. Deshabilitamos el botón mientras se envía el formulario para evitar envíos múltiples
          disabled={state.submitting}
          className="px-6 py-3 font-bold text-gray-900 bg-cyan-400 rounded-lg 
                     transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(22,200,228,0.7)]
                     disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;