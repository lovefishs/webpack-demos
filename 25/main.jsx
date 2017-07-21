import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import moment from 'moment'

class HelloMessage extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  static defaultProps = {
    text: 'world',
  }
  constructor (props) {
    super(props)

    console.log('HelloMessage constructor')
  }

  render () {
    return <h1>Hello, {this.props.text}!</h1>
  }
}

ReactDOM.render(
  <HelloMessage text={`gzip(compression-webpack-plugin): ${moment().format('YYYY-MM-DD HH:mm:ss')}`} />,
  document.querySelector('#root')
)
