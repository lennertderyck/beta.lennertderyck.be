const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...defaultTheme.screens,
      'xl': '1140px',
    },
    container: {
      padding: '2rem',
      center: true,
    },
    fontFamily: {
      body: ['sofia-pro', 'sans-serif'],
      heading: ['stratos', 'sans-serif']
    },
    fontSize: {
      ...defaultTheme.fontSize,
      'text-3xl': '1.75rem'
    },
    extend: {
      colors: {
        gold: '#af9351',
        'gold-dark': '#846a2f',
        dark: {
          '500': '#191b1f',
          '300': '#3e434d',
          '400': '#2b2f36',
        },
        grey: {
          '400': '#acacac',
          '300': '#cecece',
          '200': '#f8f8f8',
          '100': '#f1f1f2'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
