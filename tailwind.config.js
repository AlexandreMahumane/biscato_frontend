/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-500":"0077B6",
        "blue-300":"00A8E8",
        "black-40%":"rga(0,0,0,0.42)",
        "white":"fffff",
        "blue-50%":"rga(0,168,232,0.50)",
        "pink-300":"FA198B"
      },
      screens: {
        "sm":{"max": "767px"},
      }
    },
  },
  plugins: [],
}

