import { cube } from './maths'

document.addEventListener('DOMContentLoaded', (e) => {
  console.log(e)

  document.querySelector('#root').textContent = cube(3)
})
