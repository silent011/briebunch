import React, { Component } from 'react'
import CircleSvg from './CircleSvg';
import { connect } from 'react-redux'

import { actions } from '../redux/actions/mainActions'

import '../styles/_Header.styl'

class HeaderView extends Component {
    constructor(props){
        super(props)

        this.audioRef2 = React.createRef()
    }

    componentDidMount(){
        if(this.props.introEnded){
            this.playMusic()
        }
    }

    playMusic() {
        let audio = this.audioRef2.current
        audio.volume = 0.1
        audio.onplay = () => {
            this.props.dispatch(actions.mainMusicStarted())
        }
        audio.play()
    }   

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
          <audio preload="none" ref={this.audioRef2} id="mainAudio">
                <source src="/music/mainTheme" type="audio/mpeg"/>
          </audio>
      </header>
    )
  }
}

let mapStateToProps = (state) => ({
    introEnded: state.slider.introEnded
})

let Header = connect(mapStateToProps)(HeaderView)

export default Header
