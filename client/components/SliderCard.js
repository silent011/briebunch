import React from 'react'

let SliderCard = (props) => {
  return (
    <div className="sliderCard">
      <div className="imageContainer">
        <img src={props.src} alt="an image" />
      </div>
      <div className="sliderText">
        {props.name}
      </div>
    </div>
  )
}

export default SliderCard