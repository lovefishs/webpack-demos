import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'
import HelloMessage from './HelloMessage/HelloMessage'

ReactDOM.render(
  <HelloMessage text="webpack & react" />,
  document.querySelector('#root')
)
