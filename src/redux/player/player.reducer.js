import { PlayerActionTypes } from './player.types';
import { addHiddenToPlayer } from './player.utils'

const INITIAL_STATE = {
    current_player : {}
}

const playerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PlayerActionTypes.TOGGLE_PLAY_AUDIO : 
            return{
                ...state,
                hidden : !state.hidden
            }
        case PlayerActionTypes.CURRENT_PLAYER : 
            return{
                ...state,
                current_player : action.payload,
            }
        default : 
            return state;
    }
}

export default playerReducer