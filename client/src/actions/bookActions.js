import axios from 'axios'
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

export const getContacts = () => async dispatch => {
  try {
    const res = await axios.get('/api/books')
    dispatch({ type: GET_BOOKS, payload: res.data.book })
  } catch (e) {
    dispatch({
      type: BOOK_ERROR
    })
  }
}

export const deleteBook = id => async dispatch => {
  try {
    await axios.delete(`/api/books/${id}`)
    dispatch({ type: DELETE_BOOK, payload: id })
  } catch (e) {
    dispatch({ type: BOOK_ERROR })
  }
}

export const updateBook = book => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  try {
    const res = await axios.post(`/api/books/${book._id}`, book, config)
    dispatch({ type: UPDATE_BOOK, payload: res.data })
  } catch (e) {
    dispatch({ type: BOOK_ERROR })
  }
}

export const filterBooks = text => dispatch => {
  dispatch({ type: FILTER_BOOKS, payload: text })
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

export const clearFilter = () => dispatch => {
  dispatch({ type: CLEAR_FILTER })
}
