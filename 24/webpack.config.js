const { resolve } = require('path')
const webpack = require('webpack')

// const { BABEL_ENV } = process.env
// const babel = BABEL_ENV || 'es'

module.exports = {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'webpack-numbers.js',
    libraryTarget: 'umd',
    library: 'webpackNumbers',
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  resolve: {
    modules: [resolve(__dirname, './src'), resolve(__dirname, './node_modules')],
    mainFields: ['jsnext:main', 'main'],
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: resolve(__dirname, './src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }]],
            },
          },
        ],
      },
    ],
  },
}
