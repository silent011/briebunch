import React, {Component} from 'react'
import IntroButton from './IntroButton'
import Slider from './Slider'

import {actions} from '../redux/actions/sliderActions'

import '../media/sounds/flute.mp3'

class IntroScreenView extends Component {
    constructor(props){
        super(props)

        this.audioRef = React.createRef()
    }

    handlePlay() {
      let audio = this.audioRef.current
      audio.volume = 0.2
      audio.onplay = () => {
          this.props.dispatch(actions.introMusicStarted())
      }
      audio.play()
  }

 
  render() {
      let isPlaying = this.props.slider.isPlaying
      if(isPlaying) {
          this.handlePlay()
      }
    return (
        <div>
          {isPlaying ? null : <IntroButton />}
           <Slider /> 
          <audio ref={this.audioRef} id="sliderAudio">
                <source src="/sounds/flute.mp3" type="audio/mpeg"/>
            </audio>
        </div>
      )
  }

}

export default IntroScreenView
