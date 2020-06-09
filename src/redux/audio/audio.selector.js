import { createSelector } from 'reselect';

//entire data
const dataSelect = state => {
    console.log(state)
    return state.audio
} //(audio is specisified in root-reducer)


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


export const returnBook = bookIdparam => createSelector(
    [dataGenereSelectForPreview],
    (collection) => collection.map(item => item.books).map(book => book.filter(el => el.id == bookIdparam))
 
)



