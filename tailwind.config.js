const colors = require('./styles/demo')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'med': '300rem',
        'sma': '40rem',
        'f': '100%'
      },
      colors: {
        colors,
        "sideBac": "#231955",
        "sideText": "#FCFFE7",
        "hoveSideBac": "#143F6B",
        "hovSideText": "#FF5151"
      }
    },
  },
  plugins: [],
}
