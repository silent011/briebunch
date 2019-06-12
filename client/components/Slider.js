import React, { Component } from 'react'
import SliderCard from './SliderCard'

import '../styles/_slider.styl'
import peeps from '../peepsInfo'

import '../media/imgs/zada.jpg'
import '../media/imgs/orph.png'
import '../media/imgs/mud.png'
import '../media/imgs/eug.jpg'

import '../media/sounds/flute.mp3'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPlaying:false
    }

    this.audioRef = React.createRef()
    this.sliderRef = React.createRef()

    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay() {
    let newState = Object.assign({}, this.state)
    newState.isPlaying = true
    this.setState(newState)

    let audio = this.audioRef.current
    let slider = this.sliderRef.current
    audio.volume = 0.13
    audio.play()
    slider.style.transition = "left 20s linear"
    slider.style.left = "-100%"
  }
 
  render() {
    let srcString = '/imgs/'
    
    return (
      <div>
        <div ref={this.sliderRef} className="slider">
          {peeps.map((peep, index) => {
            return <SliderCard key={index}  src={srcString + peep.pic} name={peep.name}/>
          })}
        
        </div>
        <audio ref={this.audioRef} id="sliderAudio">
            <source src="/sounds/flute.mp3" type="audio/mpeg"/>
        </audio>
        <button onClick={this.handlePlay}>Play</button>
      </div>
    )
  }
}
