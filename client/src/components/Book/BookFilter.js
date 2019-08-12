import React from 'react'

const BookFilter = () => {
  return (
    <form>
      <div className='form-group'>
        <input
          type='email'
          className='form-control search'
          placeholder='Search Books'
        />
      </div>
    </form>
  )
}

export default BookFilter
