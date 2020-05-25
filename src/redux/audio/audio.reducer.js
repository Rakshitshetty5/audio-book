import AUDIO_DATA from './audio.data.js';


const INITIAL_STATE = {
    collection : AUDIO_DATA
}

// as we dont have any action initial state will only be returned
const audioReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default : 
            return state
    }
}

export default audioReducer

