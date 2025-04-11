import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: "#d4af37",
        "primary-light": "#f5e7a3",
        "primary-dark": "#a67c00",
        secondary: "#1a1a1a",
        accent: "#d4af37",
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
        serif: ["Playfair Display", "Times New Roman", "serif"],
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(135deg, var(--secondary) 0%, var(--background) 100%)",
      },
      boxShadow: {
        luxury: "0 4px 20px rgba(212, 175, 55, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
