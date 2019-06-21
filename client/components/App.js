import React, { Component } from 'react'
import { connect } from 'react-redux'
import IntroScreen from './IntroScreen'
import MainScreen from './MainScreen';

import '../styles/index.styl'


class AppView extends Component {

  render() {
    return (
      <div>
        {this.props.introEnded ? <MainScreen /> :<IntroScreen />}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  introEnded: state.slider.introEnded
})

let App = connect(mapStateToProps)(AppView)

export default App
