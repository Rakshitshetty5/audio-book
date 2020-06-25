import React from 'react';

import { connect } from 'react-redux'

import { returnBooksWithRespectToTitle } from '../../redux/audio/audio.selector'
import DisplayBookVertical from '../display-book-vertical/display-book-vertical.component'

const SearchDataDisplay = ({books}) => {
    const searchData = books.map((book) => book.filter(el => el))
    return(
    <div></div>
)}


const mapStateToProps = (state, {bookTitle}) => ({
    books : returnBooksWithRespectToTitle(bookTitle)(state) 
}) 



export default connect(mapStateToProps)(SearchDataDisplay);