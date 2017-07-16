import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: 'Header',
    }
  }

  render () {
    return (
      <div className="header">{this.state.message}</div>
    )
  }
}

export default Header
