// src/components/TypingAnimation.tsx

"use client"; // Esta línea es importante para que el componente funcione en Next.js App Router

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // La secuencia de textos que se escribirán
        "DESARROLLADOR WEB FULL STACK",
        1500, // Pausa de 1.5 segundos después de escribir la primera frase
        "ESTRATEGA TECNOLÓGICO",
        1500, // Pausa
        "INOVADOR DIGITAL",
        1500, // Pausa
      ]}
      wrapper="p" // El elemento HTML que envolverá la animación (un párrafo en este caso)
      speed={50} // La velocidad de tipeo
      repeat={Infinity} // Hará que la animación se repita infinitamente
    />
  );
};

export default TypingAnimation;