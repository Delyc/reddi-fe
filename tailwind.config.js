/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        "primary-orange" : "#eb5b39",
        "primary-blue" : "#1d4865"
      },
      height: {
        60 : "60vh"
      },
      borderRadius: {
        10: "0.625rem"
      }
    },
  },
  plugins: [],
}