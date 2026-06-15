/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Enforces Inter as your default sans font family layout across the DOM
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}