import React from 'react';

import './display-book-vertical.styles.scss';


import CollectionItem from '../collection-item/collection-item.component'


const DisplayBookVertical = ({books}) => {
    console.log(books)
    return(
        <div className="category-books">
        {  
            books.map((book) => (
                <CollectionItem  key = {book.id} img_url = {book.img_url} id = {book.id} isCategory={true}/>
            ))
        }
        </div>
)}


export default DisplayBookVertical;