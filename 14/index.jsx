import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './module1'

class HelloMessage extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  static defaultProps = {
    text: 'world',
  }
  constructor (props) {
    super(props)
  }

  render () {
    return <h1>Hello, {this.props.text}!</h1>
  }
}

ReactDOM.render(
  <HelloMessage text="webpack & react" />,
  document.querySelector('#root')
)
