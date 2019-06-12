import React from 'react'
import {connect} from 'react-redux'
import { actions } from '../redux/actions/sliderActions'

let IntroButton = ({dispatch}) => {
  let handlePlay = () => {
    dispatch(actions.startIntro())
  }

  return (
    <div id="introButton" onClick = {handlePlay}>
        This is a button
    </div>
  )
}

IntroButton = connect()(IntroButton)

export default IntroButton
