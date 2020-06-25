import React from 'react';

import './favourites-display.styles.scss'

import DisplayBookVertical from '../display-book-vertical/display-book-vertical.component'

import { returnBooksWithRespectToId } from '../../redux/audio/audio.selector'

import { connect } from 'react-redux'

const FavouritesDisplay = ({getBooks}) => {
    const FavCollection = getBooks.map(arr_lvl1 => arr_lvl1.filter(arr_lvl2 => arr_lvl2.length === 1))
    const FinalData = FavCollection.map(data => data[0][0])
    return(
        <div className="favourites-display">
            <div className="title">
                Favourites
            </div>
            <DisplayBookVertical books={FinalData} />
        </div>  
       
)}

const mapStateToProps = (state, favourites) => ({
    getBooks : returnBooksWithRespectToId(favourites.favourites)(state)
})


export default connect(mapStateToProps)(FavouritesDisplay);

