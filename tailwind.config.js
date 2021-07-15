module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#9094f7',
        DEFAULT: '#686DE0'
      },
      danger: {
        DEFAULT: '#E47955'
      },
      white: '#EFF2F9',
      gray: {
        light: '#E4EBF1',
        DEFATUL: '#B5BFC6',
        dark: '#6E7F8D'
      }
    },
    boxShadow: {
      none: 'none',
      inner: 'inset -5px -5px 10px 0 #FAFBFF, inset 5px 5px 10px 0 rgba(9, 11, 11, .17)',
      'inner-dark': 'inset -5px -5px 10px 0 rgba(255, 255, 255, .2), inset 5px 5px 10px 0 rgba(0, 0, 0, .2)',
      sm: '-3px -3px 3px 0 #FAFBFF, 3px 3px 3px 0 rgba(9, 11, 11, .2)',
      DEFAULT: '-5px -5px 10px 0 #FAFBFF, 5px 5px 10px 0 rgba(9, 11, 11, .2)',
      lg: '-10px -10px 20px 0 #FAFBFF, 10px 10px 20px 0 rgba(9, 11, 11, .2)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
