import { createSelector } from 'reselect';

//entire data
const dataSelect = state => state.audio //(audio is specisifies in root-reducer)

// individual genre
export const dataGenereSelect = createSelector(
    [dataSelect],
    audio => audio.collection
)