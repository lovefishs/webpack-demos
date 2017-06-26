import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './HelloMessage.module.css'

export default class HelloMessage extends Component {
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
    return (
      <div>
        <h1 className="g-text">Hello, {this.props.text}!</h1>

        <hr />

        <div className={styles.root}>
          <h2 className="g-text">Hello woqutech!</h2>

          <div className={styles.className}>.class-name => .className</div>

          <div className={styles.otherClassName}>.other-class-name => .otherClassName</div>

          <div className={styles.bEM}>.b__e--m => .bEM</div>

          <div className={styles.otherBEM}>.other-b__e--m => .otherBEM</div>
        </div>

        <hr />

        <div className={styles.root2}>
          <h2 className={styles.text2}>Hello Hello Hello!</h2>
        </div>
      </div>
    )
  }
}
