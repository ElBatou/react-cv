module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6AAF92',
        secondary: '#474747'
      },
      borderWidth: {
        '16': '16px',
      },
      dropShadow: {
        'text': '0px 4px 4px rgba(42, 42, 42, 0.25)',
        'text-primary': '0px 4px 4px rgba(85, 85, 85, 0.25)',
      }
    }
  },
  variants: {
    extend: {
      /*transitionProperty: ['hover'],*/
    },
  },
  plugins: [],
}
