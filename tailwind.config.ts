import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/data/**/*.{js,ts,jsx,tsx}", "./src/**/*.{mdx,md}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0F1117",
        accent: "#00BFA6"
      },
      boxShadow: {
        glow: "0 10px 40px -15px rgba(0, 191, 166, 0.45)"
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle at center, rgba(0,191,166,0.15) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
