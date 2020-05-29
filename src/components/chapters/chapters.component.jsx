import React from 'react';
import { isNumber } from 'util';
import './chapters.styles.scss'

const Chapters = ({ chap }) => 

{
    const { id, url } = chap;
    return(
    <div className="chapters" onClick = {() => alert('clicked')}>
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


export default Chapters;