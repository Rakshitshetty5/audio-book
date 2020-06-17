import React from 'react';


import './book-data-display.styles.scss';

import Chapters from '../../components/chapters/chapters.component'
import { addToFavourites } from './book-data-display.utils'


const BookDataDisplay = ({data}) =>
{
    const {id, img_url, title, description, chapters, author} = data;
    return(
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
                        <button className="book-info__head-fav" onClick={() => addToFavourites(id)}>
                            <i className="fa fa-heart"></i>
                        </button>
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
)}



export default BookDataDisplay