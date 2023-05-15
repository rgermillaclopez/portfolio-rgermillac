import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'

const NavBarPortfolio = () => {
  return (
    <>
<Navbar className='navBg' expand="lg">
      <Container>
        <Navbar.Brand className='logo' as={Link} to='/'> r ·</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/aboutme'>About Me</Nav.Link>
            <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <section>
    <Outlet></Outlet>
    </section>
    </>
  )
}

export default NavBarPortfolio
