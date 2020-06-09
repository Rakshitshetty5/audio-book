import React from 'react';

import { connect } from 'react-redux';
import { showBook } from '../../redux/audio/audio.action'
import { withRouter } from 'react-router-dom'

import './collection-item.styles.scss';

const CollectionItem = ( {img_url, showBook , id, history, match} ) => {
    return(
        <div className="collection-item" onClick = {() => {
            history.push(`${match.url}/${id}`)
            showBook(id)
        }
        }>
            <div className="image" 
                style = {{
                    backgroundImage : `url(${img_url})`  
                }}

            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    showBook : book_id => dispatch(showBook(book_id))
})


export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));