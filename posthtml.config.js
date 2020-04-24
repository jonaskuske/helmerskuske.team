const removeHtmlExtension = async function (href) {
  const isAbsolute = href.includes('//')
  return isAbsolute ? href : href.replace('.html', '')
}

const plugins = {
  'posthtml-modules': {},
  'posthtml-expressions': { locals: require('./content.json') },
  'posthtml-img-autosize': {},
}

const pluginsProduction = {
  'posthtml-shorten': {
    shortener: { process: removeHtmlExtension },
  },
}

module.exports = {
  plugins: { ...plugins, ...(process.env.NODE_ENV === 'production' && pluginsProduction) },
}
