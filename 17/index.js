import './module1'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('index', event)

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = `Index Page - ${new Date().toString()}`

  document.querySelector('body').appendChild(pageTitle)

  document.querySelector('#btn').addEventListener('click', async function (event) {
    try {
      const { default: fn } = await import(/* webpackMode: 'lazy', webpackChunkName: 'module2' */ './module2')
      fn()
    } catch (err) {
      console.error(err)
    }
  })
})
