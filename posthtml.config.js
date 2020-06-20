const { homepage } = require('./package.json')
const isProduction = process.env.NODE_ENV === 'production'

const removeHtmlExtension = async function (href) {
  const isAbsolute = href.includes('//')
  return isAbsolute ? href : href.replace('.html', '')
}

const plugins = {
  'posthtml-modules': {},
  'posthtml-expressions': {
    locals: {
      ...require('./content.json'),
      successUrl: isProduction ? homepage + '/success' : 'http://localhost:1234/success.html',
    },
  },
  'posthtml-img-autosize': {},
}

const pluginsProduction = {
  'posthtml-shorten': {
    shortener: { process: removeHtmlExtension },
  },
}

module.exports = {
  plugins: { ...plugins, ...(isProduction && pluginsProduction) },
}
