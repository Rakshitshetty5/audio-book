import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ( {img_url} ) => {
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