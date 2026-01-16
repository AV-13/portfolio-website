import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        megrim: ["var(--font-megrim)", "cursive"],
      },
      colors: {
        // Dark theme base - Deep Indigo/Slate instead of pure black
        void: {
          DEFAULT: "#0f172a", // Slate 900
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Glass surfaces
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          light: "rgba(255, 255, 255, 0.06)",
          medium: "rgba(255, 255, 255, 0.08)",
          border: "rgba(255, 255, 255, 0.1)",
          highlight: "rgba(255, 255, 255, 0.15)",
        },
        // Accent colors - Royal Glass Palette (Blue & Gold)
        accent: {
          primary: "#38bdf8", // Electric Blue (Sky 400)
          secondary: "#fbbf24", // Golden Amber (Amber 400)
          tertiary: "#6366f1", // Deep Indigo (Indigo 500)
        },
        // Text colors
        text: {
          primary: "#f8fafc", // White-ish
          secondary: "#94a3b8", // Slate
          muted: "#64748b", // Muted
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)",
        // Clean Blue Gradient for buttons/text
        "accent-gradient": "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", 
        "accent-gradient-subtle": "linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)",
        "void-gradient": "radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)",
        "gold-gradient": "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glass-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glow-primary": "0 0 40px rgba(56, 189, 248, 0.2)",
        "glow-gold": "0 0 40px rgba(251, 191, 36, 0.2)",
        "inner-glow": "inset 0 0 20px rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
