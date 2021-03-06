const head = require('./config/head')
const locales = require('./config/locale')
const themeConfig = require('./config/themeConfig/themeConfig')
const configureWebpack = require('./config/configureWebpack')
const plugins = require('./config/plugins')

module.exports = {
  title: 'VuePress',
  description: 'VuePress testing guideline',
  head,
  locales,
  themeConfig,
  configureWebpack,
  plugins
}
