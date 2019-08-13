import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Book from './components/pages/Book'
import AddBook from './components/Book/AddBook'
import PrivateRoute from './components/routes/PrivateRoute'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/login' exact component={Login} />
        <PrivateRoute path='/book' exact component={Book} />
        <PrivateRoute path='/book/addbook' exact component={AddBook} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
