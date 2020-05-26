import AUDIO_DATA from './audio.data.js';

import { AudioActionTypes } from './audio.types.js'

const INITIAL_STATE = {
    collections : AUDIO_DATA,
    book_id : null
}

// as we dont have any action initial state will only be returned
const audioReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case AudioActionTypes.SHOW_BOOK : 
            return{
                ...state,
                book_id : action.payload
            }

        default : 
            return state
    }
}

export default audioReducer

