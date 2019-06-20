import React, { Component } from 'react'
import IntroScreen from './IntroScreen'
import CircleSvg from './CircleSvg'


import '../styles/index.styl'

export default class App extends Component {

  render() {
    return (
      <div>
        {/* <IntroScreen /> */}
        <CircleSvg />
      </div>
    )
  }
}
