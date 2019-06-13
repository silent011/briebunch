import React from 'react'
import {connect} from 'react-redux'
import { actions } from '../redux/actions/sliderActions'

import '../styles/_introButton.styl'
import '../media/imgs/cheese.png'

let IntroButton = ({dispatch}) => {
  let handlePlay = () => {
    dispatch(actions.startIntro())
  }

  return (
    <div id="introButton" onClick = {handlePlay}>
        <img src="/imgs/cheese.png" alt="brie" />
        <div className="wave"></div>
        <div className="wave"></div>
    </div>
  )
}

IntroButton = connect()(IntroButton)

export default IntroButton
