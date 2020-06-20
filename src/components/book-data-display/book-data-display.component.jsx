import React from 'react';


import './book-data-display.styles.scss';

import Chapters from '../../components/chapters/chapters.component'
import FavouriteButton from '../favourites/favourite.component'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { returnFavourites , selectCurrentUser} from '../../redux/user/user.selector';



const BookDataDisplay = ({data, favourites}) => {
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
                        {
        
                           favourites.includes(id) ?
                            <FavouriteButton change={true}  id={id} />
                            :
                            <FavouriteButton id={id} />

                        }

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
    )
}
   



   

const mapStateToProps = createStructuredSelector(
    {
        favourites : returnFavourites
    }
)


export default connect(mapStateToProps)(BookDataDisplay)