import React from 'react';

import { connect } from 'react-redux'

import { returnBook }  from '../../redux/audio/audio.selector';
import { selectPlayerHidden, selectPlayerCurrent } from '../../redux/player/player.selector'


import AudioPlayer from '../../components/audio-player/audio-player.component';
import BookDataDisplay from '../../components/book-data-display/book-data-display.component'



const BookInfoPage = ({collection, selectPlayerHidden, selectPlayerCurrent}) =>

{
    const data = collection.find(el => el.length === 1)
    const {img_url, title} = data[0];
    return(
        selectPlayerHidden ? 
        
            <BookDataDisplay data = {data[0]}/>
            :
            <AudioPlayer current_player = {selectPlayerCurrent.url} title = {title} img_url = {img_url}/>
)}

const mapStateToProps = (state, ownProps) => (
    {
        collection : returnBook(ownProps.match.params.id)(state),
        selectPlayerHidden : selectPlayerHidden(state),
        selectPlayerCurrent : selectPlayerCurrent(state)

    }
)




export default connect(mapStateToProps)(BookInfoPage)