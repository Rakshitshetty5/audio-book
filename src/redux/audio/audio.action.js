import { AudioActionTypes } from './audio.types'

export const showBook = book_id => ({
    type : AudioActionTypes.SHOW_BOOK,
    payload : book_id
})

export const updateCollections = (collectionMap) => ({
    type: AudioActionTypes.UPDATE_COLLECTIONS,
    payload : collectionMap
})

