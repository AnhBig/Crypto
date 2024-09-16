/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
       center: true
    },
    extend: {
      // cho phép custome lại tên class
      fontSize: {
        "10": "10px",
        "20": "20px",
        "lg": "16px"
      },
      
      fontWeight: {},
      spacing: {},
      colors: {}
    },
  },
  plugins: [],
}