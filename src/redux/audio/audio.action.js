import { AudioActionTypes } from './audio.types'

export const showBook = book_id => ({
    type : AudioActionTypes.SHOW_BOOK,
    payload : book_id
})

