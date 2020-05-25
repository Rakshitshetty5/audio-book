import { combineReducers } from 'redux';


import audioReducer from './audio/audio.reducer';

const rootReducer = combineReducers({
    audio : audioReducer
})

export default rootReducer;