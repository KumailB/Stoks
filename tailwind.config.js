const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      rose: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.emerald,
      purple: colors.indigo,
      pink: colors.fuchsia,
      cyan: colors.cyan,
      lblue: colors.lightBlue,
      teal: colors.teal,
      orange: colors.orange,
      bgray: colors.blueGray,
      cgray: colors.coolGray,
      wgray: colors.warmGray,

    },
    extend: {
      fontFamily: {
        'library': ['LIBRARY 3 AM Regular','LIBRARY 3 AM soft Regular']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
