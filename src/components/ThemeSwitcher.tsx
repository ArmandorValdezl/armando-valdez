// // src/components/ThemeSwitcher.tsx
"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true) }, []);

  if (!mounted) { return null }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full hover:bg-gray-500/20 dark:hover:bg-gray-700/50 transition-colors"
    >
      {theme === "dark" ? <FiSun className="text-yellow-400"/> : <FiMoon className="text-slate-600"/>}
    </button>
  );
};