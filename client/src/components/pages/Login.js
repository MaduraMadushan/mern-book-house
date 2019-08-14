import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from './../../actions/authActions'
import Navbar from '../layout/Navbar'

const Login = ({ isAuthenticated, login }) => {
  if (isAuthenticated) {
    return <Redirect to='/book' />
  } else
    return (
      <React.Fragment>
        <Navbar />

        <div className='container'>
          <div
            className='row d-flex justify-content-center align-items-center'
            style={{ height: '80vh' }}
          >
            <div className='col-md-6'>
              <div className='card card-signup '>
                <h3 className='my-3 h3 text-center'>Login</h3>
                <div className='card-body'>
                  <Formik
                    initialValues={{
                      email: '',
                      password: ''
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                      password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required')
                    })}
                    onSubmit={fields => {
                      const { email, password } = fields
                      login({ email, password })
                    }}
                    render={({ errors, status, touched }) => (
                      <Form>
                        <div className='form-group'>
                          <Field
                            name='email'
                            type='text'
                            placeholder='Email'
                            className={
                              'form-control' +
                              (errors.email && touched.email
                                ? ' is-invalid'
                                : '')
                            }
                          />
                          <ErrorMessage
                            name='email'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>
                        <div className='form-group'>
                          <Field
                            name='password'
                            type='password'
                            placeholder='Password'
                            className={
                              'form-control' +
                              (errors.password && touched.password
                                ? ' is-invalid'
                                : '')
                            }
                          />
                          <ErrorMessage
                            name='password'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>
                        <div className='form-group'>
                          <button
                            type='submit'
                            className='btn btn-warning btn-block btn-signup text-light'
                          >
                            Login
                          </button>
                          <button
                            type='reset'
                            className='btn btn-light btn-block btn-clear'
                          >
                            Reset
                          </button>
                        </div>
                      </Form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { login }
)(Login)
