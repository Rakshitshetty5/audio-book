import React from 'react';

import { connect } from 'react-redux'

import { returnBooksWithRespectToTitle } from '../../redux/audio/audio.selector'
import DisplayBookVertical from '../display-book-vertical/display-book-vertical.component'

import './search-data-display.styles.scss'

const manipulate = (searchData) => {
    let i = 0;
    const manipulatedData = searchData.reduce((accumulator, data) => {
        if(data)  {
            data.map(el => {
                accumulator[i] = el
                i++
                return accumulator
            })
        }
        else{
            i--;
        }
        return accumulator 

      }, [])
    return manipulatedData
}


const SearchDataDisplay = ({books}) => {
    const searchData = books.map((book) => book.filter(el => el))
    const data = manipulate(searchData)
    return(
        
    <div className="search-data-display">
        {
            data.length > 0 ?
                <DisplayBookVertical books={data}/> 
            :
                <div className="search-data__notfound"><h1>Not found</h1></div>
        }
        
    </div>
)}


const mapStateToProps = (state, {bookTitle}) => ({
    books : returnBooksWithRespectToTitle(bookTitle)(state) 
}) 



export default connect(mapStateToProps)(SearchDataDisplay);