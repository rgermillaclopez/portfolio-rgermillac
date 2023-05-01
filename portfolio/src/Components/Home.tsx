import React from 'react'
import Rocio from '../Assets/rocio.svg'

const Home = () => {
  return (
    <div>
        <h1 className='titles'>Welcome to my Portfolio!</h1>
        <img src={Rocio} alt='Rocío'/>
        <h1 className='titles'> I am Rocío Germillac López, Full-Stack developer.</h1>
    </div>
  )
}

export default Home