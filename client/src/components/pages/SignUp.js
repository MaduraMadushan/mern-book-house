import React from 'react'
import Navbar from '../layout/Navbar'

const SignUp = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className='container'>
        <div
          className='row d-flex justify-content-center align-items-center'
          style={{ height: '80vh' }}
        >
          <div className='col-md-8'>
            <div className='card card-signup text-center'>
              <h3 className='my-3 h3'>Sign Up</h3>
              <div className='card-body'>
                <form className='form'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='First Name'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Last Name'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Password'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Confirm Password'
                    />
                  </div>
                  <button className='btn btn-warning btn-block btn-signup text-light'>
                    Sign Up
                  </button>
                  <button className='btn btn-light btn-block btn-clear'>
                    clear
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignUp
