import axios from 'axios'
import {
  ADD_BOOK,
  BOOK_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_BOOK
} from './type'

export const addBook = book => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  try {
    const res = await axios.post('/api/books', book, config)
    dispatch({ type: ADD_BOOK, payload: res.data })
  } catch (e) {
    dispatch({ type: BOOK_ERROR })
  }
}

export const clearBook = () => dispatch => {
  dispatch({ type: CLEAR_BOOK })
}

export const setCurrent = book => dispatch => {
  dispatch({ type: SET_CURRENT, payload: book })
}

export const clearCurrent = () => dispatch => {
  dispatch({ type: CLEAR_CURRENT })
}
