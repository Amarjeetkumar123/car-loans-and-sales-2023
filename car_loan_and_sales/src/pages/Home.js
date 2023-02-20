import React from 'react'
import Fifth from '../components/Home/Fifth'
import First from '../components/Home/First'
import Fourth from '../components/Home/Fourth'
import Second from '../components/Home/Second'
import Third from '../components/Home/Third'

const Home = () => {
  return (
    <div className='container-fluid'>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth/>
    </div>
  )
}

export default Home