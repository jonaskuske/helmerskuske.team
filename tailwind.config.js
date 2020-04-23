function tailwindContent({ addUtilities, variants }) {
  const classNameMap = { '.content-empty': { content: '""' } }

  addUtilities(classNameMap, variants('content'))
}

function tailwindScrollBehavior({ addUtilities, variants }) {
  const values = ['auto', 'smooth']
  const classNameMap = Object.fromEntries(
    values.map((scrollBehavior) => [`.scroll-${scrollBehavior}`, { scrollBehavior }])
  )

  addUtilities(classNameMap, variants('scrollBehavior'))
}

module.exports = {
  theme: {
    container: { center: true, padding: '1.5rem' },
    aspectRatio: {
      square: [1, 1],
      '3/2': [3, 2],
      '4/3': [4, 3],
      '16/9': [16, 9],
      '21/9': [21, 9],
      custom: [1274, 910],
    },
    extend: {
      colors: { primary: '#2a7b76' },
      flexGrow: { full: '9999' },
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      zIndex: { '-1': '-1' },
      inset: { '1/2': '50%' },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'hocus'],
    borderColor: ['responsive', 'hover', 'focus', 'hocus', 'focus-within'],
    content: ['before', 'after'],
    flex: ['responsive', 'before', 'after'],
    opacity: ['responsive', 'hover', 'focus', 'hocus', 'focus-within', 'group-hocus'],
    order: ['before', 'after'],
    textColor: ['responsive', 'hover', 'focus', 'hocus'],
    textDecoration: ['responsive', 'hover', 'focus', 'hocus'],
  },
  plugins: [
    require('tailwindcss-interaction-variants'),
    require('tailwindcss-pseudo-elements'),
    require('tailwindcss-aspect-ratio'),
    tailwindContent,
    tailwindScrollBehavior,
  ],
  corePlugins: {},
}
