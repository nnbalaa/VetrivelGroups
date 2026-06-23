import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001f60",
          dark: "#071d4b",
        },
        gold: {
          DEFAULT: "#d4a24d",
          light: "#e6c184",
          dark: "#b3823a",
        },
        ivory: "#eef4fa",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "content": "1280px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(7, 29, 75, 0.04), 0 8px 24px -8px rgba(7, 29, 75, 0.08)",
        "card-hover": "0 4px 8px rgba(7, 29, 75, 0.06), 0 16px 40px -12px rgba(7, 29, 75, 0.14)",
        "gold-glow": "0 0 0 1px rgba(212, 162, 77, 0.25), 0 8px 24px -8px rgba(212, 162, 77, 0.35)",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #001f60 0%, #071d4b 100%)",
        "gold-gradient": "linear-gradient(135deg, #e6c184 0%, #d4a24d 50%, #b3823a 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
