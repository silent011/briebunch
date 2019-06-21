import React, {Component} from 'react'
import IntroButton from './IntroButton'
import Slider from './Slider'

import {actions} from '../redux/actions/sliderActions'

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
      audio.onended = () => {
        this.props.dispatch(actions.introEnded())
      }
  }

 
  render() {
      let {isPlaying, introEnded} = this.props.slider
      if(isPlaying) {
          this.handlePlay()
      }
    return (
        <div>
          {(!isPlaying && !introEnded) ? <IntroButton /> : null}
           <Slider /> 
          <audio preload="none" ref={this.audioRef} id="sliderAudio">
                <source src="/music/flute" type="audio/mpeg"/>
            </audio>
        </div>
      )
  }

}

export default IntroScreenView
