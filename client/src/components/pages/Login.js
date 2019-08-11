import React from 'react'
import Navbar from '../layout/Navbar'

const Login = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className='container'>
        <div
          className='row d-flex justify-content-center align-items-center'
          style={{ height: '80vh' }}
        >
          <div className='col-md-6'>
            <div className='card card-signup text-center'>
              <h3 className='my-3 h3'>Login</h3>
              <div className='card-body'>
                <form className='form'>
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

                  <button className='btn btn-warning btn-block btn-signup text-light'>
                    Login
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

export default Login
