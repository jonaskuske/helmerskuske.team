module.exports = {
  theme: {
    container: { padding: '1.5rem' },
    extend: {
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      flexGrow: { full: '9999' },
      colors: {
        primary: {
          default: '#2a7b76',
        },
      },
      // maxWidth: { '7xl': '80rem' },
      // inset: { '1/2': '50%' },
      // borderRadius: { xl: '1.5rem' },
      // screens: { xxl: '1400px' },
      // lineHeight: { normal: '22px' },
    },
  },
  // variants: {
  // textColor: ['responsive', 'hover', 'focus', 'focus-within'],
  // opacity: ['responsive', 'hover', 'focus'],
  // },
  plugins: [require('tailwindcss-interaction-variants')()],
  corePlugins: {},
}
