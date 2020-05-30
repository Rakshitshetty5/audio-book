import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

import { returnBook }  from '../../redux/audio/audio.selector';
import { selectPlayerHidden, selectPlayerCurrent } from '../../redux/player/player.selector'

import './book-info.styles.scss';

import Chapters from '../../components/chapters/chapters.component'
import AudioPlayer from '../../components/audio-player/audio-player.component';



const BookInfoPage = ({match, returnBook, selectPlayerHidden, selectPlayerCurrent}) =>

{
    
    const data = returnBook.find(el => el.length === 1)
    const {img_url, title, description, chapters, author} = data[0];
    return(
        selectPlayerHidden ? 
            <div className="book-info">
                <div className="book-info__head">
                    <div className="book-info__head-image" 
                        style = {{
                            backgroundImage : `url(${img_url})`  
                        }}

                    />
                    <div className = "book-info__head-details">
                        <div className = "book-info__head-title">{title}</div>
                        <div className = "book-info__head-author">{author}</div>
                    </div>
                </div>
                <h2>Description</h2>
                <div className="book-info__description">{description}</div>
                <div className="book-info__chapters">
                <h2>Chapters</h2>
                {
                    chapters.map(chap => <Chapters key={chap.id} chap = {chap}/>)
                }
                </div>
        
            </div>
            :
            <AudioPlayer current_player = {selectPlayerCurrent.url} title = {title} img_url = {img_url}/>
)}

const mapStateToProps = createStructuredSelector(
    {
        returnBook,
        selectPlayerHidden,
        selectPlayerCurrent

    }
)




export default connect(mapStateToProps)(BookInfoPage)