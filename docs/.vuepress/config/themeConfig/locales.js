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
      ['/vi/blogs/', 'Bài viết'],
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
      ['/ja/blogs/', 'ホームページ'],
      ['/ja/guide/', 'ガイド']
    ]
  }
}

module.exports = locales
