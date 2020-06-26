import { createSelector } from 'reselect';




const dataSelect = state => {
    return state.audio
} 
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
    (collection) =>  collection ? collection.map(item => item.books).map(book => book.filter(el => el.id === parseInt(bookIdparam)))
                    : null 
)

export const returnBooksWithRespectToId = bookIds => createSelector(
    [dataGenereSelectForPreview],
    (collection) =>  collection ? bookIds.map(book_id => collection.map(item => item.books).map(book => book.filter(el => el.id === book_id)))
                    : null 
)

export const returnCategoryData = categoryIdParam => createSelector(
    [dataGenereSelectForPreview],
    collections => collections.filter(collection => collection.genre.toLowerCase() === categoryIdParam)
)

export const returnBooksWithRespectToTitle = bookTitle => createSelector(
    [dataGenereSelectForPreview],
    (collection) =>  collection ? collection.map(item => item.books).map(book => book.filter(el => el.title.toLowerCase().includes(bookTitle.toLowerCase())))
                    : null 
)

