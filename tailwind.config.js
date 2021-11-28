module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5E3719',
        secondary: '#F2D0A4',
        accent: '#1E91D6',
        text: '#F7F7FF',
        border: '#F3C99A'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
