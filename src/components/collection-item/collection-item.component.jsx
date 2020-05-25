import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ( {book }) => {
    const { id, img_url } = book
    return(
        <div className="collection-item">
            <div className="image" 
                style = {{
                    backgroundImage : `url(${img_url})`  
                }}

            />
        </div>
    )
}

export default CollectionItem;