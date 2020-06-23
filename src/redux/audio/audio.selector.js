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
    collections => collections ? Object.keys(collections).map(key => 
       collections[key]) : []
)


export const returnBook = bookIdparam => createSelector(
    [dataGenereSelectForPreview],
    (collection) =>  collection ? collection.map(item => item.books).map(book => book.filter(el => el.id == bookIdparam))
                    : null 
)

export const returnBooks = bookIds => createSelector(
    [dataGenereSelectForPreview],
    (collection) =>  collection ? bookIds.map(book_id => collection.map(item => item.books).map(book => book.filter(el => el.id == book_id)))
                    : null 
)

export const returnCategoryData = categoryIdParam => createSelector(
    [dataGenereSelectForPreview],
    collections => collections.filter(collection => collection.genre.toLowerCase() === categoryIdParam)
)


