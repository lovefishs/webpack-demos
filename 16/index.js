import './module1'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('index', event)

  const pageTitle = document.createElement('h1')
  pageTitle.textContent = `Index Page - ${new Date().toString()}`

  document.querySelector('body').appendChild(pageTitle)

  document.querySelector('#btn').addEventListener('click', function (event) {
    // magic comment
    // import mode: 'lazy' | 'lazy-once' | 'eager'
    //
    // will generate files like `i18n/namespace-i18n-bundle-en_json`
    // import(/* webpackChunkName: "i18n/[request]" */ `i18n/${namespace}-i18n-bundle-${language}.json`).then(...)

    // will generate files `i18n-0`, `i18n-1`, …
    // import(/* webpackChunkName: "i18n-[index]" */ `i18n/${namespace}-i18n-bundle-${language}.json`).then(...)

    import(/* webpackMode: 'lazy', webpackChunkName: 'module2' */ './module2')
    .then(function (fn) {
      fn.default()
    })
    .catch(function (err) {
      console.log('Failed to load module2', err)
    })
  })
})
