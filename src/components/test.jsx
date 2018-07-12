import React from 'react'

/**
 * UI LIBRARY COMPONENT
 * Testing css in js with styles
 */

export default class Test extends React.Component {
  render() {
    return (
      <div onClick={() => { console.log('babel is working!') }}>Test Component</div>
    )
  }
}
