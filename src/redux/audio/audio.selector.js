import { createSelector } from 'reselect';

//entire data
const dataSelect = state => state.audio //(audio is specisifies in root-reducer)

// individual genre
export const dataGenereSelect = createSelector(
    [dataSelect],
    audio => audio.collections
)
/*
const dataiwant = createSelector(
    [dataGenereSelect],
    collections => Object.keys(collections).map(collections => collections.books.map()
)


*/


export const dataGenereSelectForPreview = createSelector(
    [dataGenereSelect],
    collections => Object.keys(collections).map(key => collections[key])
)