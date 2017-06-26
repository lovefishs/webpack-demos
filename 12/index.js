import './module1'
import './module2'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('index', event)

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = 'Index Page'

  document.querySelector('body').appendChild(pageTitle)
})
