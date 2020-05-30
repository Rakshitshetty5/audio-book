import React from 'react'

import './audio-player.styles.scss'

import { connect  } from 'react-redux'

import { togglePlayAudio } from '../../redux/player/player.action'


const AudioPlayer = ({togglePlayAudio}) => (
    <div>
        <button onClick = {() => togglePlayAudio()}>Close</button>
        <div>Hello</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    togglePlayAudio : () => dispatch(togglePlayAudio())
})

export default connect(null, mapDispatchToProps)(AudioPlayer)