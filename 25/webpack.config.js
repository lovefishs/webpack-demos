const { resolve } = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

const { NODE_ENV } = process.env
const env = NODE_ENV || 'development'
const isDEV = env === 'development'

// bundle.js           1.22 MB
// bundle.prod.js      1.22 MB
// bundle.prod.js.gz   261 kB

module.exports = {
  entry: resolve(__dirname, './main.jsx'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: isDEV ? 'bundle.js' : 'bundle.prod.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }], 'react'],
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
    ],
  },
  plugins: (() => {
    const plugins = []

    if (!isDEV) {
      plugins.push(new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(css|js|html)$/,
        threshold: 10 * 1024,
        minRatio: 0.8,
      }))
    }

    return plugins
  })(),
}
