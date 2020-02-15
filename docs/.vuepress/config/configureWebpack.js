const path = require('path')

const configureWebpack = {
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '../assets')
    }
  }
}

module.exports = configureWebpack
