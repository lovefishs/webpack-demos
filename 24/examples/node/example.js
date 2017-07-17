const _ = require('lodash')
const webpackNumbers = require('../../lib/webpack-numbers.js')

const out = function () {
  process.stdout.write('This is the result for numToWord(1) === ' + webpackNumbers.numToWord(1) + '\n')
}

out()
