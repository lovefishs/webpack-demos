import './app.css'

document.write('<h1>Hello World</h1>')

const imgBig = document.createElement('img')
imgBig.src = require('./assets/imgs/img-big.png')
document.body.appendChild(imgBig)

const imgSmall = document.createElement('img')
imgSmall.src = require('./assets/imgs/img-small.png')
document.body.appendChild(imgSmall)
