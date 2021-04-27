module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      'pinky': '0 20px 30px 0 rgba(249, 131, 171, 0.5)'
    },
    backgroundColor: theme => ({
      "pink": "#EEBECE",
      "black": "#000000",
      "white": "#FFFFFF",
      "blue": "#0B24FB"
    }),
    textColor: {
      "white": "#FFFFFF",
      "black": "#000000",
      "blue": "#0B24FB"
    },
    fontFamily: {
      workSans: ['Work Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
