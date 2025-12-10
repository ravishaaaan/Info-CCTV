/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#0f2c59", // Navy
        accent: "#d4af37",  // Gold
        darkBg: "#0b0e14",
        darkCard: "#1e2430",
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Sinhala', 'Noto Sans Tamil', 'sans-serif'],
      }
    },
  },
  plugins: [],
}