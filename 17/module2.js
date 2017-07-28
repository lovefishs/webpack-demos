const fn = function () {
  alert('module2 loaded !')

  if (!document.querySelector('#btn2')) {
    const div = document.createElement('div')
    const btn = document.createElement('button')
    btn.textContent = 'Load Module3(async/await)'
    btn.setAttribute('id', 'btn2')

    btn.addEventListener('click', async function (e) {
      try {
        const { default: fn } = await import(/* webpackMode: 'lazy', webpackChunkName: 'module3' */ './module3')
        fn()
      } catch (err) {
        console.error(err)
      }
    })

    div.appendChild(btn)
    document.body.appendChild(div)
  }
}

export default fn
