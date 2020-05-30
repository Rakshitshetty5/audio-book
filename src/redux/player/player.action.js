import { PlayerActionTypes } from './player.types'


export const togglePlayAudio = () => ({
    type : PlayerActionTypes.TOGGLE_PLAY_AUDIO
})

export const currentPlayer = (player) => ({
    type : PlayerActionTypes.CURRENT_PLAYER,
    payload : player
})
