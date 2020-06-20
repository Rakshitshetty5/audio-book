import React from 'react';


import { withRouter } from 'react-router-dom'

import './collection-item.styles.scss';

const CollectionItem = ( {img_url, id, history, isCategory} ) => {
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