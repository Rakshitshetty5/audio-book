import React from 'react'

import './audio-player.styles.scss'

import { connect  } from 'react-redux'

import { togglePlayAudio } from '../../redux/player/player.action'


const loadSong = () => {
    const audioEl = document.getElementsByClassName("audio-el")[0]
    const playBtn = document.getElementById('play');
    if(playBtn.querySelector('i.fas').classList.contains('fa-play')){
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
    

        audioEl.play();
    }
    else{
        playBtn.querySelector('i.fas').classList.remove('fa-pause');
        playBtn.querySelector('i.fas').classList.add('fa-play');
    

        audioEl.pause();
    }
}


const AudioPlayer = ({togglePlayAudio, current_player, title, img_url}) => {

    return (
    <div className = "audio-player">
        <button className= 'close-btn' onClick = {() => togglePlayAudio()}>Close</button>
        <div className="audio-player__image" 
                style = {{
                    backgroundImage : `url(${img_url})`  
                }}

        />
        <audio src={current_player} className="audio-el"></audio>
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