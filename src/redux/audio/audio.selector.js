import { createSelector } from 'reselect';

//entire data
const dataSelect = state => {
    console.log(state)
    return state.audio
} //(audio is specisified in root-reducer)

export const getId = createSelector(
    [dataSelect],
    audio => audio.book_id
) 



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
/*
export const getBook = createSelector(
    [getId],
)
*/