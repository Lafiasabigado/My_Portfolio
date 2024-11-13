/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        violet1:"#693B93",
        violet2:"#1A0B2E",
        violet3:"#251C31",
        violet4:"#763CAC"
      }
    },
  },
  plugins: [
    require('tailwindcss-motion')
  ],
}

