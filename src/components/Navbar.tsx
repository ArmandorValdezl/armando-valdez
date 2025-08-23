// src/components/Navbar.tsx

"use client";
import React  from "react";
import Link from "next/link"; // Usamos el componente Link de Next.js para una navegación optimizada
import { motion } from "framer-motion";

// Definimos los enlaces que aparecerán en la Navbar para que sea fácil de mantener
const navLinks = [
  { name: "Proyectos", hash: "#proyectos" },
  { name: "Sobre Mí", hash: "#sobre-mi" },
  { name: "Contacto", hash: "#contacto" },
];

type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void; // Se define como una función que recibe un string y no retorna nada
};

// Y aquí aplicamos esa definición a las props que recibe el componente
const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-sm h-16">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 h-full">
        <Link 
          href="#" 
          className="flex items-center text-2xl font-bold text-cyan-400" 
          onClick={() => setActiveSection("Inicio")}
        >
          Armando Valdez
        </Link>

        {/* Enlaces de Navegación */}
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className={`relative group text-gray-300 hover:text-cyan-400 transition-colors duration-300
                    ${activeSection === link.name ? "text-cyan-400" : ""}
                  `} onClick={() => setActiveSection(link.name)} // <-- Al hacer clic, actualizamos la sección activa


                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 
                      ${activeSection === link.name ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;