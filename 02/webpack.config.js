const { resolve } = require('path')

module.exports = {
  entry: {
    bundle: resolve(__dirname, './main.js'),
    index: resolve(__dirname, './module1.js'),
    home: resolve(__dirname, './module2.js'),
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
  },
}
