const plugins = {
  'posthtml-expressions': {
    locals: { projects: require('./projects.json') },
  },
}

const pluginsProduction = {
  'posthtml-shorten': {
    shortener: {
      process: async (href) => (href.includes('//') ? href : href.replace('.html', '')),
    },
  },
}

module.exports = {
  plugins: { ...plugins, ...(process.env.NODE_ENV === 'production' && pluginsProduction) },
}
