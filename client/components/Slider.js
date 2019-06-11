import React, { Component } from 'react'

import '../styles/_slider.styl'
import SliderCard from './SliderCards';

export default class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
      </div>
    )
  }
}
