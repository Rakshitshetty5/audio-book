import React from 'react';

import { addToFavourites } from './favourite.utils'

import './favourite.styles.scss'

import { returnFavourites, selectCurrentUser } from '../../redux/user/user.selector';

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'


class FavouriteButton extends React.Component{


    render(){
        const { id, favourites, currentUser} = this.props
        return(
            <button className={`book-info__head-fav ${favourites.includes(id) ? 'change-color' : ''} `} 
                                onClick={
                                        () => currentUser ? 
                                            addToFavourites(id) 
                                            : 
                                            alert('You need to Login')
                                        }>
                <i className="fa fa-heart"></i>
            </button>
        )
    }
}


   

const mapStateToProps = createStructuredSelector(
    {
        favourites : returnFavourites,
        currentUser : selectCurrentUser
    }
)


export default connect(mapStateToProps)(FavouriteButton)