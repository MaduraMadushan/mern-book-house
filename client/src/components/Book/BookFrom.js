import React from 'react'
import { connect } from 'react-redux'
import { addBook, clearCurrent, updateBook } from './../../actions/bookActions'

const BookFrom = ({ addBook, current, clearCurrent, updateBook }) => {
  React.useEffect(() => {
    if (current !== null) {
      setBook({
        _id: current._id,
        title: current.title,
        auther: current.auther,
        lend: current.lend,
        name: current.name,
        contactNumber: current.contactNumber
      })
    } else {
      setBook({
        _id: '',
        title: '',
        auther: '',
        lend: false,
        name: '',
        contactNumber: ''
      })
    }
  }, [current])

  const [book, setBook] = React.useState({
    _id: '',
    title: '',
    auther: '',
    lend: false,
    name: '',
    contactNumber: ''
  })

  const [toDateDisabled, toggleDisabled] = React.useState(false)

  const { title, auther, lend, name, contactNumber } = book

  const onChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (current === null) {
      addBook(book.title, book.auther, book.lend, book.name, book.contactNumber)
    } else {
      updateBook(
        book._id,
        book.title,
        book.auther,
        book.lend,
        book.name,
        book.contactNumber
      )
    }
    setBook({
      _id: '',
      title: '',
      auther: '',
      lend: false,
      name: '',
      contactNumber: ''
    })
  }

  const clearAll = () => {
    clearCurrent()
  }
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <input
          type='text'
          name='title'
          value={title}
          onChange={onChange}
          className='form-control'
          placeholder='Title'
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='auther'
          value={auther}
          onChange={onChange}
          className='form-control'
          placeholder='Author'
          required
        />
      </div>
      <div className='form-check mb-3'>
        <input
          className='form-check-input'
          type='checkbox'
          checked={lend}
          value={lend}
          id='defaultCheck1'
          onChange={() => {
            setBook({ ...book, lend: !lend })
            toggleDisabled(!toDateDisabled)
          }}
        />
        <label className='form-check-label' htmlFor='defaultCheck1'>
          Lend
        </label>
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          className='form-control'
          placeholder='Name'
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='contactNumber'
          value={contactNumber}
          onChange={onChange}
          className='form-control'
          placeholder='Phone No'
        />
      </div>

      <button className='btn btn-warning btn-block btn-signup text-light mb-3'>
        {current ? 'Update Book' : 'Add Book'}
      </button>
      {current && (
        <button
          className='btn btn-light btn-block btn-clear mb-3'
          onClick={clearAll}
        >
          Clear
        </button>
      )}
    </form>
  )
}

const mapStateToProps = state => ({
  current: state.book.current
})

export default connect(
  mapStateToProps,
  { addBook, clearCurrent, updateBook }
)(BookFrom)
