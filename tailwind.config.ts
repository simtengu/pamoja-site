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
        background: "var(--background)",
        foreground: "var(--foreground)",
        safari: {
          dark: "#1A1A1A", // Deep Charcoal/Black
          light: "#F5F5F0", // Off-White/Cream
          accent: "#8B9D77", // Olive Green accent
          gold: "#D4AF37", // Gold accent for luxury touch
          sand: "#D2C5B3", // Earthy sand tone
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
