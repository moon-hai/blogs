const locales = require('./locales')

const themeConfig = {
  logo: '/logo.png',
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Blogs', link: '/blogs/' },
    { text: 'External', link: 'https://google.com' }
  ],
  sidebar: [
    ['/', 'Index'],
    {
      title: 'Blogs',
      path: '/blogs/',
      sidebarDepth: 1,
      children: [
        '/blogs/02152020_neovim'
      ]
    },
    ['/guide/', 'Explicit link text']
  ],
  locales
}

module.exports = themeConfig
