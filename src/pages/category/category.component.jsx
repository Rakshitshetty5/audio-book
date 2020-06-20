import React from 'react';

import './category.styles.scss';

import { returnCategoryData } from '../../redux/audio/audio.selector'

import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'


const Category = ({categoryData}) => {
    const { genre, books } = categoryData[0]
    return(
    <div className="category">
        <div className="category-name">{genre}</div>
        <div className="category-books">
        {  
            books.map((book) => (
                <CollectionItem  key = {book.id} img_url = {book.img_url} id = {book.id} isCategory={true}/>
            ))
        }
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    categoryData : returnCategoryData(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Category);