/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#016FB9"
      },
      fontSize: {
        xl: "1.375rem",
      },
      borderRadius: {
        lg: "10px"
      },
      boxShadow: {
        default: "0px 10px 15px -3px rgba(0,0,0,0.1)"
      }, 
    },
  },
  plugins: [],
}
