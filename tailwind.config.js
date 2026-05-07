/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070b12",
        panel: "#0d1420",
        line: "#1f3148",
        electric: "#1e7bff",
        cyan: "#27e5ff",
      },
      boxShadow: {
        glow: "0 0 44px rgba(39, 229, 255, 0.18)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
