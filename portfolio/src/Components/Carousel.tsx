import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import doggy from '../Assets/doggy 1.svg'
import larecette from '../Assets/LaRecette.svg'
import caritas from '../Assets/caritas.svg'


function CarouselPortfolio() {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src={doggy}
          alt="Doggy"
        />
        {/* <Carousel.Caption>
          <h3 className='carousel-label'>Marketplace</h3>
          <p className='carousel-texto'>HTML, CSS, JavaScript. Agile Methodologies</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src={larecette}
          alt="La Recette"
        />

        {/* <Carousel.Caption className='label'>
          <h3 className='carousel-label'>Recipes Social Media</h3>
          <p className='carousel-texto'>HTML, CSS, Figma, Balsamiq, React, Typescript, Tailwind, MongoDB, NodeJS - express. Trello, Agile Methodologies</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src={caritas}
          alt="Habit+"
        />

        {/* <Carousel.Caption className='label'>
          <h3 className='carousel-label'>Caritas App "Habit+"</h3>
          <p className='carousel-texto'>
            HTML, CSS, Figma, Balsamiq, React, Tailwind, MongoDB, NodeJS, NestJS. Trello, Agile Methodologies.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselPortfolio;