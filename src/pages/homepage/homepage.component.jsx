import React from 'react';

import './homepage.styles.scss';

import { Route, withRouter } from 'react-router-dom'; 
import BookInfoPage from '../../pages/book-info/book-info.component.jsx'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'

class HomePage extends React.Component{

    render(){
        const { match } = this.props;

    return(
    <div className="home-page">
       <Route exact path={`${match.path}`} component = {CollectionOverview} />
       <Route path = {`${match.path}/:id`} render= {(props) => <BookInfoPage {...props}/> }/>
        

    </div>

)}
}

export default withRouter(HomePage);