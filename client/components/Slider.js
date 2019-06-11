import React, { Component } from 'react'
import SliderCard from './SliderCard'

import '../styles/_slider.styl'
import peeps from '../peepsInfo'

import '../media/imgs/zada.jpg'
import '../media/imgs/orph.png'
import '../media/imgs/mud.png'
import '../media/imgs/eug.jpg'

export default class Slider extends Component {
 
  render() {
    let srcString = '/imgs/'
    console.log(peeps)
    return (
      <div className="slider">
        {peeps.map((peep, index) => {
          return <SliderCard key={index}  src={srcString + peep.pic} name={peep.name}/>
        })}
      </div>
    )
  }
}
