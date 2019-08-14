import axios from 'axios'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_FAIL
} from './type'
import setAuthToken from './../utils/setAuthToken'

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/api/users/me')
    dispatch({ type: USER_LOADED, payload: res.data })
  } catch (e) {
    dispatch({ type: AUTH_ERROR })
  }
}

export const register = ({
  firstname,
  lastname,
  email,
  password
}) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify({ firstname, lastname, email, password })
  try {
    const res = await axios.post('/api/users', body, config)
    dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    dispatch(loadUser())
  } catch (e) {
    dispatch({ type: REGISTER_FAIL })
  }
}

export const login = ({ email, password }) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify({ email, password })
  try {
    const res = await axios.post('/api/users/login', body, config)
    dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    dispatch(loadUser())
  } catch (e) {
    dispatch({ type: LOGIN_FAIL })
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/api/users/logout')
    dispatch({ type: LOGOUT })
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL
    })
  }
}
