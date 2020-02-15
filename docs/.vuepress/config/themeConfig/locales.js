const locales = {
  '/vi/': {
    selectText: 'Ngôn ngữ',
    nav: [
      { text: 'Trang chủ', link: '/vi/' },
      { text: 'Bài viết', link: '/vi/blogs/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: [
      ['/vi/', 'Trang chủ'],
      {
        title: 'Bài viết',
        path: '/vi/blogs/',
        sidebarDepth: 1,
        children: [
          '/vi/blogs/02152020_neovim'
        ]
      },
      ['/vi/guide/', 'Hướng dẫn']
    ]
  },
  '/ja/': {
    selectText: '言語',
    nav: [
      { text: 'ホームページ', link: '/ja/' },
      { text: 'ホームページ', link: '/ja/blogs/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: [
      ['/ja/', 'ホームページ'],
      {
        title: 'ホームページ',
        path: '/ja/blogs/',
        sidebarDepth: 1,
        children: [
          '/ja/blogs/02152020_neovim'
        ]
      },
      ['/ja/guide/', 'ガイド']
    ]
  }
}

module.exports = locales
