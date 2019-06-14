import React, { Component } from 'react'
import {connect} from 'react-redux'
import SliderCard from './SliderCard'

import '../styles/_slider.styl'
import peeps from '../peepsInfo'

import '../media/imgs/zada.jpg'
import '../media/imgs/orph.png'
import '../media/imgs/mud.png'
import '../media/imgs/eug.jpg'


class Slider extends Component {
  constructor(props){
    super(props)
    
    this.sliderRef = React.createRef()
  }

  handlePlay (){
    let slider = this.sliderRef.current
    slider.style.transition = "left 20s linear"
    slider.style.left = "-100%"
  }

  render() {
    let srcString = '/imgs/'
    if(this.props.introMusicPlaying) this.handlePlay()
    return (
        <div ref={this.sliderRef} className="slider">
          {peeps.map((peep, index) => {
            return <SliderCard key={index}  src={srcString + peep.pic} name={peep.name}/>
          })}    
        </div>
    )
  }
}

const mapStateToProps = state => ({
  introMusicPlaying:state.slider.introMusicPlaying
})

Slider = connect(mapStateToProps)(Slider)

export default Slider 
