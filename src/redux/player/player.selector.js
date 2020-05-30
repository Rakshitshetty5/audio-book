import { createSelector } from 'reselect';

const selectPlayer = state => state.player;

export const selectPlayerHidden = createSelector(
    [selectPlayer],
    player => player.hidden
)

export const selectPlayerCurrent = createSelector(
    [selectPlayer],
    player => player.current_player
)