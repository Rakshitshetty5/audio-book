import React from 'react';

import './homepage.styles.scss';

import { Route } from 'react-router-dom'; 

import CollectionOverview from '../../components/collection-overview/collection-overview.component'

const HomePage = ( {match} ) => 
{ 
    return(
    <div className="home-page">
       <CollectionOverview />
    </div>

)}

export default HomePage;