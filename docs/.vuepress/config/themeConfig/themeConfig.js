const locales = require('./locales')

const themeConfig = {
  logo: '../../logo.png',
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Blogs', link: '/blogs/' },
    { text: 'External', link: 'https://google.com' }
  ],
  sidebar: [
    ['/', 'Index'],
    ['/blogs/', 'Blogs'],
    ['/guide/', 'Explicit link text']
  ],
  locales
}

module.exports = themeConfig
