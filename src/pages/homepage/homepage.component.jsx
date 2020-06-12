import React from 'react';


import './homepage.styles.scss';

import { Route, withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux'

import BookInfoPage from '../../pages/book-info/book-info.component.jsx'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/audio/audio.action'


const WithSpinnerForCollectionOverview = WithSpinner(CollectionOverview);
const WithSpinnerForBookInfoPage = WithSpinner(BookInfoPage);


class HomePage extends React.Component{
    unsubscribeFromSnapshot = null;

    state = {
        isLoading : true
    }

    componentDidMount(){
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');
        
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            this.setState({isLoading : false})
        })
    }

    render(){
        const { match, isLoading } = this.props;

    return(
    <div className="home-page">
       <Route exact path={`${match.path}`} render = {(props) => <WithSpinnerForCollectionOverview isLoading = {isLoading} {...props}/>} />
       <Route path = {`${match.path}/:id`} render= {(props) => <WithSpinnerForBookInfoPage isLoading = {isLoading} {...props}/> }/>
        

    </div>

)}
}

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default withRouter(connect(null,mapDispatchToProps)(HomePage));