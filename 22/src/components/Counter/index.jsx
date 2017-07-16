import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.timer = null
    this.tick = this.tick.bind(this)

    this.state = {
      counter: 0,
    }
  }
  componentDidMount () {
    this.tick()
  }
  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  tick () {
    clearTimeout(this.timer)

    this.setState((prevState) => {
      return {
        counter: (parseInt(prevState.counter, 10) + 1),
      }
    })

    this.timer = setTimeout(() => {
      this.tick()
    }, 1000)
  }

  render () {
    return <h2>Counter: {this.state.counter}</h2>
  }
}

export default Counter
