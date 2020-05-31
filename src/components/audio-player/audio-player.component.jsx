import React from 'react'

import './audio-player.styles.scss'

import { connect  } from 'react-redux'

import { togglePlayAudio } from '../../redux/player/player.action'

import { loadSong } from './audio-player.utils.js'


const AudioPlayer = ({togglePlayAudio, current_player, title, img_url}) => {

    return (
    <div className = "audio-player">
        <button className= 'close-btn' onClick = {() => togglePlayAudio()}>&#9932;</button>
        <div className="audio-player__image" 
                style = {{
                    backgroundImage : `url(${img_url})`  
                }}

        >
        <span className="dot"></span>
        </div>
        <audio src={current_player} className="audio"></audio>
        <div className="audio-player__progress-container" id="progress-container">
                <div className="progress" id="progress"></div>
        </div>
        <div className='audio-player__title'>{title}</div>
        <div className="audio-player__navigation">
                <button className="action-btn" >
                    <i className="fas fa-backward"></i>
                </button>
                <button id= "play" className="action-btn action-btn-big" onClick = {() => loadSong()}>
                    <i className="fas fa-play"></i>
                </button>
                <button className="action-btn">
                    <i className="fas fa-forward"></i>
                </button>
        </div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    togglePlayAudio : () => dispatch(togglePlayAudio())
})

export default connect(null, mapDispatchToProps)(AudioPlayer)