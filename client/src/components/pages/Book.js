import React from 'react'
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
