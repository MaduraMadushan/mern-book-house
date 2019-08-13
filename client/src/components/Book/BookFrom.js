import React from 'react'
import { connect } from 'react-redux'
import { addBook, clearCurrent } from './../../actions/bookActions'

const BookFrom = ({ addBook, current, clearCurrent }) => {
  React.useEffect(() => {
    if (current !== null) {
      setBook(current)
    } else {
      setBook({
        title: '',
        auther: '',
        lend: false,
        name: '',
        contactNumber: ''
      })
    }
  }, [])

  const [book, setBook] = React.useState({
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
      addBook(book)
    }
    clearAll()
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
      {toDateDisabled && (
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
      )}
      {toDateDisabled && (
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
      )}

      <button className='btn btn-warning btn-block btn-signup text-light'>
        {current ? 'Update Book' : 'Add Book'}
      </button>
      <button className='btn btn-light btn-block btn-clear' onClick={clearAll}>
        Clear
      </button>
    </form>
  )
}

const mapStateToProps = state => ({
  current: state.book.current
})

export default connect(
  mapStateToProps,
  { addBook, clearCurrent }
)(BookFrom)
