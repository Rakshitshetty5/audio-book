import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { dataGenereSelectForPreview } from '../../redux/audio/audio.selector';

import CollectionPreview from '../collection-preview/collection-preview.component'


const CollectionOverview = ({collections}) => (

    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        collections : dataGenereSelectForPreview
    }
)

export default connect(mapStateToProps)(CollectionOverview);