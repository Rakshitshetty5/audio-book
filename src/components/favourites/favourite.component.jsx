import React from 'react';

import { addToFavourites } from '../book-data-display/book-data-display.utils'

import './favourite.styles.scss'

import { returnFavourites } from '../../redux/user/user.selector';

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'


class FavouriteButton extends React.Component{


    render(){
        const { id, favourites} = this.props
        console.log(this.props)
        return(
            <button className={`book-info__head-fav ${favourites.includes(id) ? 'change-color' : ''} `} onClick={() => addToFavourites(id)}>
                <i className="fa fa-heart"></i>
            </button>
        )
    }
}


   

const mapStateToProps = createStructuredSelector(
    {
        favourites : returnFavourites
    }
)


export default connect(mapStateToProps)(FavouriteButton)