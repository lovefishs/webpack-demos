document.addEventListener('DOMContentLoaded', function (event) {
  console.log('module1', event)

  let count = 0

  document.querySelector('#btn').addEventListener('click', function (event) {
    console.log('btn click', event)

    count += 1

    const pElem = document.createElement('p')
    pElem.textContent = `<p>btn click: ${count}</p>`
    document.querySelector('body').appendChild(pElem)
  })
})
