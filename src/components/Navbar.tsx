// src/components/Navbar.tsx
"use client";
import { Link } from "@/i18n/routing";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const t = useTranslations("Navbar");

  const navLinks = [
    { name: t("projects"), hash: "#proyectos" },
    { name: t("about"),  hash: "#sobre-mi" },
    { name: t("experience"), hash: "#experiencia" },
    { name: t("contact"),  hash: "#contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-gray-900/50 backdrop-blur-md h-16 border-b border-slate-200 dark:border-white/5">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 h-full">
        {/* Logo */}
        <Link
          href="#inicio"
          onClick={() => setActiveSection("Inicio")}
          className={`
            text-2xl font-bold transition-colors duration-300
            ${activeSection === "Inicio"
              ? "text-cyan-600 dark:text-cyan-400"
              : "text-slate-800 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
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
                    relative transition-colors duration-300 font-medium
                    ${activeSection === link.name
                      ? "text-cyan-600 dark:text-cyan-400 font-bold"
                      : "text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                    }
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px]
                      bg-cyan-600 dark:bg-cyan-400
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
              <LanguageSwitcher />
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
