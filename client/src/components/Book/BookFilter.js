import React from 'react'
import { connect } from 'react-redux'
import { filterBooks, clearFilter } from './../../actions/bookActions'

const BookFilter = ({ filtered, filterBooks, clearFilter }) => {
  const text = React.useRef('')

  React.useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = e => {
    if (text.current.value !== '') {
      filterBooks(e.target.value)
    } else {
      clearFilter()
    }
  }
  return (
    <form>
      <div className='form-group'>
        <input
          type='text'
          ref={text}
          className='form-control search'
          placeholder='Search Books'
          onChange={onChange}
        />
      </div>
    </form>
  )
}

const mapStateToProps = state => ({
  filtered: state.book.filtered
})

export default connect(
  mapStateToProps,
  { filterBooks, clearFilter }
)(BookFilter)
