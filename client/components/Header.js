import React, { Component } from 'react'
import CircleSvg from './CircleSvg';

import '../styles/_Header.styl'

export default class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
          <div className="leftHeader">
            <div className="textHolder">Brie</div>
          </div>
        <CircleSvg />
          <div className="rightHeader">
            <div className="textHolder">Bunch</div>
          </div>
      </header>
    )
  }
}
