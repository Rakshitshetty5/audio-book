import React from 'react';

import { connect } from 'react-redux'

import { returnBook }  from '../../redux/audio/audio.selector';
import { selectPlayerHidden, selectPlayerCurrent } from '../../redux/player/player.selector'
import { returnFavourites } from '../../redux/user/user.selector'


import AudioPlayer from '../../components/audio-player/audio-player.component';
import BookDataDisplay from '../../components/book-data-display/book-data-display.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'


const BookDataDisplayWithSpinner = WithSpinner(BookDataDisplay)

class BookInfoPage extends React.Component {
   
    render()
    {
        const {collection, selectPlayerHidden, selectPlayerCurrent, favourites} = this.props
        const data = collection.find(el => el.length === 1)
        const {img_url, title} = data[0];
        return(
            selectPlayerHidden ? 
            
                // <BookDataDisplay data = {data[0]}/>
                <BookDataDisplayWithSpinner isLoading = {favourites ? false : true} data = {data[0]}/>
                :
                <AudioPlayer current_player = {selectPlayerCurrent.url} title = {title} img_url = {img_url}/>
    )}}

const mapStateToProps = (state, ownProps) => (
    {
        collection : returnBook(ownProps.match.params.id)(state),
        selectPlayerHidden : selectPlayerHidden(state),
        selectPlayerCurrent : selectPlayerCurrent(state),
        favourites : returnFavourites(state)

    }
)




export default connect(mapStateToProps)(BookInfoPage)