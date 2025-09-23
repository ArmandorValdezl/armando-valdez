// src/app/layout.tsx
// "use client";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata: Metadata = {
//   title: "Armando Valdez | Desarrollador Full-Stack",
//   description: "Portafolio de Armando Valdez, combinando precisión técnica y soluciones innovadoras.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* ¡Importante! Asegúrate de que NO haya NADA aquí,
          ni espacios, ni comentarios, entre <html> y <body> */}
      <body
        className={`${ubuntu.className} bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-white transition-colors duration-300`}>
        {/* La Navbar ya no va aquí. Solo los 'children' que vienen de page.tsx */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}