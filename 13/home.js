import moment from 'moment'

import './module1'
import './module3'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('home', event)

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = `Home Page - ${moment().format('YYYY-MM-DD HH:mm:ss')}`

  document.querySelector('body').appendChild(pageTitle)
})
