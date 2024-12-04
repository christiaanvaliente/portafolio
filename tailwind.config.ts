import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2b6cb0", // Un azul moderno y profesional para elementos principales.
        secondary: "#f68e26", // Un naranja vibrante que complementa al azul.
        accent: "#6a0dad", // Un morado intenso para destacar ciertos elementos.
        neutral: "#e5e5e5", // Un gris claro para fondos y separadores.
        darkBg: "#121212", // Fondo oscuro elegante y moderno.
        lightBg: "#f7f7f7", // Fondo claro para elementos secundarios.
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90deg, rgba(43, 108, 176, 0.8) 0%, rgba(246, 142, 38, 0.8) 100%)", // Degradado moderno en línea con los colores de marca.
      },
      textColor: {
        primary: "#2b6cb0", // Azul principal para títulos o enlaces.
        secondary: "#f68e26", // Naranja para llamados a la acción.
        neutral: "#ffffff", // Blanco para textos sobre fondos oscuros.
        muted: "#a0a0a0", // Gris para texto secundario.
      },
      borderColor: {
        primary: "#2b6cb0",
        secondary: "#f68e26",
        neutral: "#dcdcdc",
      },
    },
  },
  plugins: [],
};
export default config;
