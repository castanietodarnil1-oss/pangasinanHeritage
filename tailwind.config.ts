import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — Atom: Color Tokens
        // Inspired by Pangasinan's coastline, lighthouse, and hot springs.
        primary: {
          DEFAULT: "#0B6E99", // Hundred Islands ocean blue
          dark: "#074A66",
          light: "#3F98BE",
        },
        secondary: {
          DEFAULT: "#E8871E", // Balungao hot-spring terracotta
          dark: "#C06B0C",
          light: "#F2AC5C",
        },
        accent: {
          DEFAULT: "#2FA88C", // island greenery
          dark: "#227A65",
        },
        sand: {
          50: "#FBF9F5",
          100: "#F5F1E9",
          200: "#EAE2D2",
        },
        ink: {
          900: "#1A1D1F",
          700: "#3D4246",
          500: "#6B7176",
        },
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
