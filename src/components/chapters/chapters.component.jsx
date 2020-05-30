import React from 'react';

import { isNumber } from 'util';
import { connect } from 'react-redux'


import './chapters.styles.scss'

import { togglePlayAudio, currentPlayer } from '../../redux/player/player.action'


const Chapters = ({ chap , togglePlayAudio, currentPlayer }) => 

{

    const { id } = chap;
    return(
    <div className="chapters" onClick = {() => {
            togglePlayAudio();
            currentPlayer(chap)
    }
            
        
        }>
        <div className="chapter-number">
        {
        isNumber(id) ? 
            `Part ${id + 1}`
            :
            `Part ${id}`
        //9836 128266 127911	
        }
        </div>
        <span className='wingding'>&#127911;</span>
    
    </div>
    
)
}

const mapDispatchToProps = dispatch => ({
    togglePlayAudio : () => dispatch(togglePlayAudio()),
    currentPlayer : player => dispatch(currentPlayer(player))

})



export default connect(null,mapDispatchToProps)(Chapters);