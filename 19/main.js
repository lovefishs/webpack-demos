import $ from 'jquery'

import './module1'
import './module2'

$(document).ready(function () {
  console.log('document ready')

  $('#root').html(new Date().toString())
})
