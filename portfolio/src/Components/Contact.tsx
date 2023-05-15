import React from 'react'
import github from '../Assets/github.svg'
import linkedin from '../Assets/linkedin.svg'
import { Route } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
        <h1 className='titles'>Contact</h1>
        
        <Container fluid>
        <Row className='contact'>
          <Row className='mail'>
          <Button className='social' href="mailto:rgermillaclopez@gmail.com"><h2>rgermillaclopez@gmail.com</h2></Button>
          </Row>
        <Col className='container-social'>
          
          <Button className='social' href='https://github.com/rgermillaclopez'><img src={github} alt='github'/></Button>
        
          <Button className='social' href='https://www.linkedin.com/in/rocio-germillac-lopez/'><img src={linkedin} alt='linkedin'/></Button>
        </Col>
        </Row>
        </Container>

        <h1 className='footer-contact'> ROCIO GERMILLAC LOPEZ - 2023 </h1>
        <h2>08013, Barcelona</h2>

    </div>
  )
}

export default Contact