import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { register } from './../../actions/authActions'
import { Redirect } from 'react-router-dom'

import Navbar from '../layout/Navbar'

const SignUp = ({ isAuthenticated, register }) => {
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
            <div className='col-md-8'>
              <div className='card card-signup'>
                <h3 className='my-3 h3 text-center'>Sign Up</h3>
                <div className='card-body'>
                  <Formik
                    initialValues={{
                      firstname: '',
                      lastname: '',
                      email: '',
                      password: '',
                      confirmPassword: ''
                    }}
                    validationSchema={Yup.object().shape({
                      firstname: Yup.string().required(
                        'First Name is required'
                      ),
                      lastname: Yup.string().required('Last Name is required'),
                      email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                      password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                      confirmPassword: Yup.string()
                        .oneOf(
                          [Yup.ref('password'), null],
                          'Passwords must match'
                        )
                        .required('Confirm Password is required')
                    })}
                    onSubmit={fields => {
                      const { firstname, lastname, email, password } = fields
                      register({ firstname, lastname, email, password })
                    }}
                    render={({ errors, status, touched }) => (
                      <Form>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <Field
                                name='firstname'
                                type='text'
                                placeholder='First Name'
                                className={
                                  'form-control' +
                                  (errors.firstname && touched.firstname
                                    ? ' is-invalid'
                                    : '')
                                }
                              />
                              <ErrorMessage
                                name='firstname'
                                component='div'
                                className='invalid-feedback'
                              />
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <Field
                                name='lastname'
                                type='text'
                                placeholder='Last Name'
                                className={
                                  'form-control' +
                                  (errors.lastname && touched.lastname
                                    ? ' is-invalid'
                                    : '')
                                }
                              />
                              <ErrorMessage
                                name='lastname'
                                component='div'
                                className='invalid-feedback'
                              />
                            </div>
                          </div>
                        </div>

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
                          <Field
                            name='confirmPassword'
                            type='password'
                            placeholder='Confirm Password'
                            className={
                              'form-control' +
                              (errors.confirmPassword && touched.confirmPassword
                                ? ' is-invalid'
                                : '')
                            }
                          />
                          <ErrorMessage
                            name='confirmPassword'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>
                        <div className='form-group'>
                          <button
                            type='submit'
                            className='btn btn-warning btn-block btn-signup text-light'
                          >
                            Register
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
  { register }
)(SignUp)
