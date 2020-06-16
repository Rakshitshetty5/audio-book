import React from 'react';

import { connect } from 'react-redux';
import { showBook } from '../../redux/audio/audio.action'
import { withRouter } from 'react-router-dom'

import './collection-item.styles.scss';

const CollectionItem = ( {img_url, id, history, match, isCategory} ) => {
    return(
        <div className={`collection-item ${isCategory ? "collection-category" : ''}`} onClick = {() => {
            history.push(`home/${id}`)
     
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


export default withRouter(CollectionItem);