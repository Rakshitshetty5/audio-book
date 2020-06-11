import React from 'react';


import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component'



const CollectionPreview = ({match, history, genre, books, showBook}) => (
    <div className="collection-preview">
        <div className="collection-preview__head">
            <h1 className="genre">
                {genre.toUpperCase()}
            </h1>
            <h4 className="extra"
>
                View More >
            </h4>
        </div>
        <div className="preview">
            {   //filter is used for future when data increases
                books.filter((book,idx) => idx < 6)
                .map((book) => (
                    <CollectionItem key = {book.id} img_url = {book.img_url} id = {book.id} />
                ))
            }
        </div>
    </div>
)




export default CollectionPreview;