const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './main.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
}
