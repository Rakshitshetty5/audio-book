import React from 'react';

import CollectionOverview from '../collection-overview/collection-overview.component'
import SearchBox from '../search-box/search-box.component';
import SearchDataDisplay from '../search-data-display/search-data-display.component'

import './home-display.styles.scss'

class HomeDisplay extends React.Component {

    state = {
        searchField : ''    
    }

    

    handleChange = e => {
        this.setState({searchField: e.target.value})
    }


    render(){
        return(
            <div>
                <div className="search-bar">
                    <SearchBox placeholder="Search..." handleChange={this.handleChange}/>
                    <i className="fa fa-search position-search"></i>
        
                </div>
                {
                !this.state.searchField ?
                    <CollectionOverview />
                :
                    <SearchDataDisplay bookTitle={this.state.searchField}/>
                }         
            </div>
            
        )
    }
}

export default HomeDisplay;