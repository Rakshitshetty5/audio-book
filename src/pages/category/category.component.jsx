import React from 'react';

import './category.styles.scss';

import { returnCategoryData } from '../../redux/audio/audio.selector'

import { connect } from 'react-redux'


import DisplayBookVertical from '../../components/display-book-vertical/display-book-vertical.component'


const Category = ({categoryData}) => {
    const { genre, books } = categoryData[0]
    return(
    <div className="category">
        <div className="category-name">{genre}</div>
        <DisplayBookVertical books = {books}/>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    categoryData : returnCategoryData(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Category);