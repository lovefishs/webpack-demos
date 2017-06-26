import './module1'
import './module2'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOMContentLoaded')

  document.querySelector('#root').textContent = new Date().toString()
})
