import { createSelector } from 'reselect';

//entire data
const dataSelect = state => {
    console.log(state)
    return state.audio
} //(audio is specisified in root-reducer)

const getId = createSelector(
    [dataSelect],
    audio => { console.log(audio.book_id)
        return audio.book_id}
) 



// individual genre
export const dataGenereSelect = createSelector(
    [dataSelect],
    audio => audio.collections
)

export const dataGenereSelectForPreview = createSelector(
    [dataGenereSelect],
    collections => Object.keys(collections).map(key => 
       collections[key])
)

export const returnBook = createSelector(
    dataGenereSelectForPreview,
    getId,
    (collection, book_id) => collection.map(item => item.books).map(book => book.filter(el => el.id === book_id))
)



