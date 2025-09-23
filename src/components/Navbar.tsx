// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navLinks = [
  { name: "Proyectos", hash: "#proyectos" },
  { name: "Sobre Mí",  hash: "#sobre-mi" },
  { name: "Contacto",  hash: "#contacto" },
];

type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/50 backdrop-blur-sm h-16">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 h-full">
        {/* Logo */}
        <Link
          href="#inicio"
          onClick={() => setActiveSection("Inicio")}
          className={`
            text-2xl font-bold
            ${activeSection === "Inicio"
              ? "text-cyan-400 dark:text-cyan-300"
              : "text-slate-200 dark:text-gray-400 hover:text-cyan-400"
            }
          `}
        >
          Armando Valdez
        </Link>

        {/* Navegación */}
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                  className={`
                    relative transition-colors duration-300
                    ${activeSection === link.name
                      ? "text-cyan-400 dark:text-cyan-300"
                      : "text-slate-200 dark:text-gray-400 hover:text-cyan-400"
                    }
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px]
                      bg-cyan-400 dark:bg-cyan-300
                      transition-all duration-300
                      ${activeSection === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              </li>
            ))}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}