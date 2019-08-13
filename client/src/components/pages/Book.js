import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './../../actions/authActions'
import BookFrom from '../Book/BookFrom'
import BookFilter from '../Book/BookFilter'

const Book = ({ auth: { isAuthenticated, loading }, logout }) => {
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
          <div className='col-md-4 d-none d-md-block '>
            <BookFrom />
          </div>
          <div className='col-md-4 d-block d-sm-block d-md-none'>
            <Link
              to='/book/addbook'
              className='btn btn-warning btn-block btn-signup text-light mb-3'
            >
              Add Book
            </Link>
          </div>
          <div className='col-md-8'>
            <BookFilter />
            <div className='row'>
              <div className='col-md-6'>
                <div className='card card-book mt-2'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Harry Potter and the Philosopher's Stone
                    </h5>
                    <p className='card-text'> J. K. Rowling</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card card-book mt-2'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Harry Potter and the Philosopher's Stone
                    </h5>
                    <p className='card-text'> J. K. Rowling</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card card-book mt-2'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Harry Potter and the Philosopher's Stone
                    </h5>
                    <p className='card-text'> J. K. Rowling</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card card-book mt-2'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Harry Potter and the Philosopher's Stone
                    </h5>
                    <p className='card-text'> J. K. Rowling</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card card-book mt-2'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Harry Potter and the Philosopher's Stone
                    </h5>
                    <p className='card-text'> J. K. Rowling</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card card-book mt-2'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Harry Potter and the Philosopher's Stone
                    </h5>
                    <p className='card-text'> J. K. Rowling</p>
                  </div>
                </div>
              </div>
            </div>
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
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(Book)
