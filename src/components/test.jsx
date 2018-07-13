import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

/**
 * UI LIBRARY COMPONENT
 * Testing css in js with styles
 */

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <span className={css(styles.red)}>
            This is red.
        </span>
        <span className={css(styles.hover)}>
            This turns red on hover.
        </span>
        <span className={css(styles.small)}>
            This turns red when the browser is less than 600px width.
        </span>
        <span className={css(styles.red, styles.blue)}>
            This is blue.
        </span>
        <span className={css(styles.blue, styles.small)}>
            This is blue and turns red when the browser is less than
            600px width.
        </span>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  red: {
      backgroundColor: 'red'
  },

  blue: {
      backgroundColor: 'blue'
  },

  hover: {
      ':hover': {
          backgroundColor: 'red'
      }
  },

  small: {
      '@media (max-width: 600px)': {
          backgroundColor: 'red',
      }
  }
});
