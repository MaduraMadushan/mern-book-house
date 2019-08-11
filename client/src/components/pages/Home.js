import React from 'react'
import home from './../../img/home.png'
import Navbar from '../layout/Navbar'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className='container'>
        <div
          className='row d-flex align-items-center'
          style={{ height: '80vh' }}
        >
          <div className='col-md-5'>
            <h2 className='h3 mt-3'>Handy Library</h2>
            <h5 className='h5'>All books in your hand</h5>
            <hr />
            <p className='lead'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              eos, aliquam corrupti totam nemo optio alias, quae, nisi ea
              quibusdam officiis aperiam excepturi. Cumque debitis asperiores
              obcaecati similique dolorem labore?
            </p>
          </div>
          <div className='col-md-7'>
            <img
              src={home}
              alt=''
              className='img-fluid'
              width='500px'
              height='400px'
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
