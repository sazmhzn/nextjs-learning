import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
