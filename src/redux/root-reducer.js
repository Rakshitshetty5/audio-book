import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import audioReducer from './audio/audio.reducer';
import playerReducer from './player/player.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['audio']
} 

const rootReducer = combineReducers({
    audio : audioReducer,
    player : playerReducer
})

export default persistReducer(persistConfig, rootReducer) 