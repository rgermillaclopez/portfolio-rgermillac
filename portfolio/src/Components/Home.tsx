import React from 'react'
import Rocio from '../Assets/rocio.svg'
import Aboutme from './Aboutme'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsCarousel from './CardsCarousel';
import Contact from './Contact';

function Home() {
  return (
    <div className='home'>
        <Container fluid>
          <Row className='justify-content-md-center align-items-center mb-5'>
            <Col md="auto">
            <h1 className='subtitle'>Welcome to my Portfolio! <br />
            I am Rocío Germillac López,<br /> Full-Stack developer.</h1>
            </Col>
            <Col md="auto">
            <img src={Rocio} alt='Rocío'/>
            </Col>
          </Row>
        </Container>
      
        <div className='first'>
          <Aboutme />
        </div>

        <div className='portfolio'>
        <h1 className='titles'>Portfolio</h1>

        <div className='ubicacion'>
          <CardsCarousel /> 
        </div>

        <div>
        <Contact />
        </div>    

    </div>

    
</div>
  );
}

export default Home;

// const Home = () => {
//   return (
//     <div className='home'>
        
//         <img src={Rocio} alt='Rocío'/>

//         <div className='aboutme'>
//         <h1 className='titles'>Welcome to my Portfolio!
//         I am Rocío Germillac López, Full-Stack developer.</h1>
//         <Aboutme />
//         </div>
//     </div>
//   )
// }

// export default Home