import { combineReducers } from 'redux'
import auth from './authReducers'
import book from './bookReducers'

export default combineReducers({
  auth,
  book
})
