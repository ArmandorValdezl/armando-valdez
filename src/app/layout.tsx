// src/app/layout.tsx

import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
// Ya no importamos la Navbar aquí

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Armando Valdez | Desarrollador Full-Stack",
  description: "Portafolio de Armando Valdez, combinando precisión técnica y soluciones innovadoras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* ¡Importante! Asegúrate de que NO haya NADA aquí,
          ni espacios, ni comentarios, entre <html> y <body> */}
      <body className={`${ubuntu.className} bg-gray-900 text-white`}>
        {/* La Navbar ya no va aquí. Solo los 'children' que vienen de page.tsx */}
        {children}
      </body>
    </html>
  );
}