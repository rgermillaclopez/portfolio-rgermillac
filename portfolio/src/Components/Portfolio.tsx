import React from 'react'
import CarouselPortfolio from './Carousel'




const Portfolio = () => {
  return (
    <div>
        <h1 className='titles'>Portfolio</h1>
        
        <CarouselPortfolio />
        
        <button className='curriculum'>
            <a className='curriculum' href='./curriculum.pdf' download>
              Descargar Curriculum
            </a>
        </button>

    </div>
  )
}

export default Portfolio