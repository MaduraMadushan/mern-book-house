import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './../../actions/authActions'
import { getContacts } from './../../actions/bookActions'
import BookFrom from '../Book/BookFrom'
import BookFilter from '../Book/BookFilter'
import BookItems from '../Book/BookItems'

const Book = ({
  auth: { isAuthenticated, loading },
  logout,
  books,
  getContacts,
  filtered
}) => {
  React.useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [])

  return (
    <React.Fragment>
      <div className='container mt-3 d-flex justify-content-end'>
        {isAuthenticated && (
          <button onClick={logout} className='btn btn-dark text-light'>
            Logout
          </button>
        )}
      </div>

      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-4 '>
            <BookFrom />
          </div>
          <div className='col-md-8'>
            <BookFilter />
            {books !== null && !loading ? (
              <div className='row'>
                {filtered !== null
                  ? filtered.map(book => (
                      <BookItems key={book._id} book={book} />
                    ))
                  : books.map(book => <BookItems key={book._id} book={book} />)}
              </div>
            ) : null}

            <nav aria-label='Page navigation  '>
              <ul className='pagination justify-content-center mt-3'>
                <li className='page-item'>
                  <a className='page-link' href='#' aria-label='Previous'>
                    <span aria-hidden='true'>&laquo;</span>
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    1
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    2
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    3
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#' aria-label='Next'>
                    <span aria-hidden='true'>&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  books: state.book.books,
  filtered: state.book.filtered
})

export default connect(
  mapStateToProps,
  { logout, getContacts }
)(Book)
