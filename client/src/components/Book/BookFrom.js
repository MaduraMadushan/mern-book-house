import React from 'react'

const BookFrom = () => {
  return (
    <form>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder='Title'
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder='Author'
          required
        />
      </div>
      <div className='form-check mb-3'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='defaultCheck1'
        />
        <label className='form-check-label' htmlFor='defaultCheck1'>
          Default checkbox
        </label>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='First Name' />
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='Last Name' />
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='Phone No' />
      </div>
      <button className='btn btn-warning btn-block btn-signup text-light'>
        Add Book
      </button>
      <button className='btn btn-light btn-block btn-clear'>Clear</button>
    </form>
  )
}

export default BookFrom
