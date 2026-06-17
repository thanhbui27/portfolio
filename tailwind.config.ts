import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#fffdf8",
        blush: "#f6d9df",
        candy: "#ff5b8a",
        berry: "#b41f53",
        banana: "#ffd166",
        grape: "#6b38d4",
        violet: "#8b5cf6",
        mint: "#8ff3d3",
        sky: "#8ec5ff",
        peach: "#ffb199"
      },
      boxShadow: {
        retro: "6px 6px 0 #050505",
        "retro-sm": "4px 4px 0 #050505",
        "retro-pink": "8px 8px 0 #ff5b8a"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        dots:
          "radial-gradient(circle at 1px 1px, rgba(5,5,5,.18) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
