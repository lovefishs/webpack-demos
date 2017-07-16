import React, { Component } from 'react'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: 'Footer',
    }
  }

  render () {
    return (
      <div className="footer">{this.state.message}</div>
    )
  }
}

export default Footer
