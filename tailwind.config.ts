/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Recuerda que ya no necesitamos darkMode: 'class' aquí
  // porque lo gestionamos en globals.css con @custom-variant.
  theme: {
    extend: {},
  },
  plugins: [],
};