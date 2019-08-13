import {
  ADD_BOOK,
  BOOK_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_BOOK
} from './../actions/type'

const initialState = {
  books: null,
  current: null,
  filtered: null,
  error: null,
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
        loading: false
      }
    case BOOK_ERROR:
      return { ...state, error: action.payload }
    case SET_CURRENT:
      return { ...state, current: action.payload }
    case CLEAR_CURRENT:
      return { ...state, current: null }
    case CLEAR_BOOK:
      return {
        ...state,
        books: null,
        filtered: null,
        error: null,
        current: null
      }
    default:
      return state
  }
}
