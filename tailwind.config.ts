import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        nodra: {
          bg: "#050505",
          panel: "#090909",
          card: "#0D0D0D",
          text: "#F4F4F0",
          muted: "rgba(244,244,240,0.68)",
          soft: "rgba(244,244,240,0.45)",
          border: "rgba(255,255,255,0.12)"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        nodra: "0.24em"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(.16,1,.3,1)"
      },
      boxShadow: {
        subtle: "0 24px 80px rgba(0,0,0,0.34)"
      }
    }
  },
  plugins: []
};

export default config;
