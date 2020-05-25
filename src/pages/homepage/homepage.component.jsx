import React from 'react';

import './homepage.styles.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'


const HomePage = () => (
    <div className="home-page">
        <CollectionOverview />
    </div>
)

export default HomePage;