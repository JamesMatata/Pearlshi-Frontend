/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'About': ['"Imperial Script"'],
        'Title': ['"Yeseva One"'],
        'Home': ['Roboto', 'sans-serif'],
        'Mons': ['Montserrat'],
        'Open': ["Open Sans"]
      },
      colors: {
        wedding: {
          50: '#ffe4e4',
          100: '#fdb7b7',
          200: '#f68a8a',
          300: '#f05b5b',
          400: '#eb2e2e',
          500: '#d11414',
          600: '#a40e0f',
          700: '#750709',
          800: '#490304',
          900: '#1f0000',
        },
        header: {
          50: '#d8fbff',
          100: '#abebff',
          200: '#7addff',
          300: '#48ceff',
          400: '#1ac0ff',
          500: '#00a6e6',
          600: '#0081b4',
          700: '#005c82',
          800: '#003851',
          900: '#001421',
        }
      }
    },
  },
  plugins: [],
}

