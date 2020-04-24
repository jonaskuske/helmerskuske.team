const plugins = {
  'postcss-import': {},
  tailwindcss: {},
  'postcss-smoothscroll-anchor-polyfill': {},
  'postcss-object-fit-images': {},
  autoprefixer: {},
}

const pluginsProduction = {
  '@fullhuman/postcss-purgecss': {
    content: ['./**/*.html'],
    whitelistPatterns: [/has-scrollbar|projects?--?\d+$/],
    defaultExtractor: (content) => content.match(/[\w-/:.]+(?<!:)/g) || [],
  },
}

module.exports = {
  plugins: { ...plugins, ...(process.env.NODE_ENV === 'production' && pluginsProduction) },
}
