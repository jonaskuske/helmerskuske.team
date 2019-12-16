const plugins = {
  'postcss-import': {},
  tailwindcss: {},
  'postcss-smoothscroll-anchor-polyfill': {},
  autoprefixer: {},
}

const pluginsProduction = {
  '@fullhuman/postcss-purgecss': {
    content: ['./**/*.html'],
    whitelistPatterns: [/projects?--?\d+$/],
    defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || [],
  },
  cssnano: { preset: 'default' },
}

module.exports = {
  plugins: { ...plugins, ...(process.env.NODE_ENV === 'production' && pluginsProduction) },
}
