/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-grey-500" : "#607d8b"
      },
      fontFamily: {
        title: ['Roboto Condensed', 'sans-serif'],
        text: ['Lato', 'sans-serif']
      }
    },
   
  },
  plugins: [],
}

