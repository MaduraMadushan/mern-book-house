import React from 'react'
import { connect } from 'react-redux'
import {
  deleteBook,
  setCurrent,
  clearCurrent
} from './../../actions/bookActions'

const BookItems = ({ book, deleteBook, setCurrent, clearCurrent }) => {
  const { _id, title, auther, lend } = book
  const onDelete = () => {
    deleteBook(_id)
    clearCurrent()
  }
  return (
    <div className='col-md-6' onClick={() => setCurrent(book)}>
      <div
        className={
          lend ? 'card card-book mt-2 bg-warning' : 'card card-book mt-2'
        }
      >
        <div className='card-body d-flex justify-content-between'>
          <div>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{auther}</p>
          </div>
          <div>
            <button onClick={onDelete} className='btn btn-danger btn-sm'>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { deleteBook, setCurrent, clearCurrent }
)(BookItems)
