import React from 'react'
import github from '../Assets/github.svg'
import linkedin from '../Assets/linkedin.svg'
import gmail from '../Assets/gmail.svg'
import { Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
        <h1 className='titles'>Contact</h1>
        
        <Container fluid>
        <Row className='contact'>
        <Col>
        <a href='https://github.com/rgermillaclopez'>
        <img className='social' src={github} alt='github'/>
        </a>
        {/* </Col>
        <Col> */}
        <a href='https://www.linkedin.com/in/rocio-germillac-lopez/'>
        <img className='social' src={linkedin} alt='linkedin'/>
        </a>
        {/* </Col>
        <Col> */}
        <a href="mailto:rgermillaclopez@gmail.com">
        <img className='social' src={gmail} alt='gmail'/>
        </a>
        </Col>
        </Row>
        </Container>

        <h1 className='footer-contact'> ROCIO GERMILLAC LOPEZ - 2023 </h1>

    </div>
  )
}

export default Contact