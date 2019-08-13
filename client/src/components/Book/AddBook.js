import React from 'react'
import { Link } from 'react-router-dom'

const AddBook = () => {
  return (
    <React.Fragment>
      <div className='container mt-3 '>
        <Link to='/book' className='btn btn-dark   text-light'>
          Back to Book House
        </Link>
      </div>

      <div className='container mt-3'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-5'>
            <form>
              <div className='form-group'>
                <input
                  type='text'
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
              <div class='form-check mb-3'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value=''
                  id='defaultCheck1'
                />
                <label class='form-check-label' for='defaultCheck1'>
                  Default checkbox
                </label>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='First Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Phone No'
                />
              </div>
              <button className='btn btn-warning btn-block btn-signup text-light'>
                Add Book
              </button>
              <button className='btn btn-light btn-block btn-clear'>
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddBook
