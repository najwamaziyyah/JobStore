/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  important: '#app',
  content: ['./src/**/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      playfair: ['Playfair Display'],
      roboto: ['Roboto'],
    },
    borderColor: {
      emerald: colors.emerald,
      green: colors.green,
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#0F172A',
      white: '#fff',
      red: colors.red,
      emerald: colors.emerald,
      green: colors.green,
    },
    extend: {
      dropShadow: {
        landing: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
