import {
  ADD_BOOK,
  BOOK_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_BOOK,
  GET_BOOKS,
  DELETE_BOOK,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_FILTER
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
        books: [...state.books, action.payload],
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
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload.book,
        count: action.payload.count,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
        loading: false
      }
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book._id !== action.payload),
        loading: false
      }
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map(book =>
          book._id === action.payload._id ? action.payload : book
        ),
        loading: false
      }
    case FILTER_BOOKS:
      return {
        ...state,
        filtered: state.books.filter(book => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return book.title.match(regex) || book.auther.match(regex)
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    default:
      return state
  }
}
