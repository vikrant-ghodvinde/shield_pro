const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "black"],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-primary":
          "radial-gradient(at top left, #6366F1 0%, #2962EB 100%)",
        "light-dark-gradient":
          "radial-gradient(at center center, #1118274D 0%, #111827 85%)",
        "dark-gradient": "linear-gradient(135deg, #192230 75%, #111827 100%)",
      },
      colors: {
        primary: "#2962EB",
        secondary: "#6366F1",
        "primary-dark": "#080e1c",
        dark: "#111827",
      },
      fontFamily: {
        play: ['"Play", sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"), addDynamicIconSelectors()],
};
