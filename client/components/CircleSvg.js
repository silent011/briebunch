import React, { Component } from 'react'

import '../styles/_CircleSvg.styl'

import animate from '../scripts/orbsAnimation'

export default class CircleSvg extends Component {
  componentDidMount(){
    let stats = {}
    animate(stats)  
  }

  render() {
    return (
      <div className="circle-container">
         <svg viewBox="0 0 1400 400">
    <g id="circle">
      <circle id="mainCircle" cx="700" cy="200" r="120" fill="#b83dba" />
      <circle cx="700" cy="200" r="115" fill="#ffaec8" />
      <circle cx="700" cy="200" r="20" fill="#b83dba" />
      <line x1="580" y1="200" x2="820" y2="200" />
      <line x1="700" y1="80" x2="700" y2="320" />
      <line x1="616" y1="116" x2="784" y2="284"/>
      <line x1="784" y1="116" x2="616" y2="284"/>
    </g>
    <defs>
      <pattern id="image1" height="100%" width="100%" x="0%" y="0%" viewBox="0 0 512 512">
          <image x="0%" y="0%" width="512" height="512" xlinkHref="/imgs/eug.jpg"></image>  
      </pattern>
      <pattern id="image2" height="100%" width="100%" x="0%" y="0%" viewBox="0 0 512 512">
          <image x="0%" y="0%" width="512" height="512" xlinkHref="/imgs/mud.png"></image>  
      </pattern>
      <pattern id="image3" height="100%" width="100%" x="0%" y="0%" viewBox="0 0 512 512">
          <image x="0%" y="0%" width="512" height="512" xlinkHref="/imgs/orph.png"></image>  
      </pattern>
      <pattern id="image4" height="100%" width="100%" x="0%" y="0%" viewBox="0 0 512 512">
          <image x="0%" y="0%" width="512" height="512" xlinkHref="/imgs/zada.jpg"></image>  
      </pattern>
    </defs>
        <g id="orbs-group">
          <circle className="orbs-clones"  cx="-48" cy="240" r="32" fill="url(#image1)" />
          <circle className="orbs-clones" cx="-48" cy="240" r="32" fill="url(#image2)" />
          <circle className="orbs-clones"  cx="-48" cy="240" r="32" fill="url(#image3)"/>
          <circle className="orbs-clones"  cx="-48" cy="240" r="32" fill="url(#image4)" />
        </g>
        <circle className="orbs"  cx="-144" cy="190" r="32" fill="url(#image1)" />
          <circle className="orbs" cx="-144" cy="190" r="32" fill="url(#image2)" />
          <circle className="orbs"  cx="-144" cy="190" r="32" fill="url(#image3)"/>
          <circle className="orbs"  cx="-144" cy="190" r="32" fill="url(#image4)" />
   
    </svg>
    </div>
    )
  }
}
