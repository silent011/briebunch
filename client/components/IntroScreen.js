import { connect } from 'react-redux'
import IntroScreenView from './IntroScreenView'

const mapStateToProps = state => ({
    slider: state.slider
})

const IntroScreen = connect(mapStateToProps)(IntroScreenView)

export default IntroScreen