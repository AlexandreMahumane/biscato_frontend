/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-500": "#0077B6",
        "blue-300": "#00A8E8",
        "black-40%": "rgba(0,0,0,0.42)",
        "white": "#FFFFFF",
        "blue-50%": "rgba(0,168,232,0.50)",
        "pink-300": "#FA198B",
        "gray-100": "#D9D9D9",
      },
      screens: {
        "sm": {"max": "767px"},
      }
    },
  },
  plugins: [require('daisyui'),],
}
