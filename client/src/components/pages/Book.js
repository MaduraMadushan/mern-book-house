import React from 'react'
import { connect } from 'react-redux'
import { logout } from './../../actions/authActions'
import { getContacts } from './../../actions/bookActions'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import BookFrom from '../Book/BookFrom'
import BookFilter from '../Book/BookFilter'
import BookItems from '../Book/BookItems'

const Book = ({
  auth: { isAuthenticated, loading },
  logout,
  getContacts,
  filtered
}) => {
  const [doc, setDoc] = React.useState({
    books: [],
    count: null,
    limit: 6,
    skip: 0,
    activePage: 1
  })

  const { books, count, limit, activePage } = doc

  const fetch = async pg => {
    const res = await axios.get(`/api/books?skip=${pg - 1}&limit=${limit}`)
    setDoc({
      books: res.data.book,
      count: res.data.count,
      limit: 6,
      activePage: pg
    })
  }

  React.useEffect(() => {
    fetch()
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
            <nav aria-label='Page navigation example '>
              <Pagination
                activePage={activePage}
                itemsCountPerPage={limit}
                totalItemsCount={count}
                pageRangeDisplayed={3}
                onChange={fetch}
                itemClass='page-item'
                linkClass='page-link'
                innerClass='pagination justify-content-center mt-4'
                activeClass='active'
              />
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  filtered: state.book.filtered
})

export default connect(
  mapStateToProps,
  { logout, getContacts }
)(Book)
