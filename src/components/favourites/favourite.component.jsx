import React from 'react';

import { addToFavourites } from '../book-data-display/book-data-display.utils'

import './favourite.styles.scss'


class FavouriteButton extends React.Component{
    render(){
        const {change, id} = this.props
        console.log(this.props)
        return(
            <button className={`book-info__head-fav ${change ? 'change-color' : ''} `} onClick={() => addToFavourites(id)}>
                <i className="fa fa-heart"></i>
            </button>
        )
    }
}

export default FavouriteButton