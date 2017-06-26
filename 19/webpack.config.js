const { resolve } = require('path')
const webpack = require('webpack')
const { ModuleConcatenationPlugin } = webpack.optimize

module.exports = {
  entry: resolve(__dirname, './main.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new ModuleConcatenationPlugin(),
  ],
}
