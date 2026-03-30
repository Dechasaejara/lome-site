import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#013220",
          lime: "#CCFF00",
          beige: "#F7E7CE",
          muted: "#79716B",
          dim: "#62748E",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "sans-serif"],
      },
    },
  },
};

export default config;
