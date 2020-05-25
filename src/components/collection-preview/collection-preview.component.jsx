import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component'


const CollectionPreview = ({genre, books}) => (
    <div className="collection-preview">
        <h1 className="genre">
            {genre.toUpperCase()}
        </h1>
        <div className="preview">
            {   //filter is used for future when data increases
                books.filter((book,idx) => idx < 6)
                .map((book) => (
                    <CollectionItem key = {book.id} book = {book} />
                ))
            }
        </div>
    </div>
)


export default CollectionPreview