import { faCapsules } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <>
     <Navbar expand="lg" className="" style={{backgroundColor:"#78C2AD"}}>
      <Container>
        <Link to={'/'} style={{textDecoration:"none",overflowY:"hidden"}}><Navbar.Brand ><FontAwesomeIcon icon={faCapsules} /> MedHub</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <h5 style={{overflowY:"hidden"}} className='me-3'>Home</h5>
            <h5 style={{overflowY:"hidden"}} className='me-3'>Orders</h5>
            <h5 style={{overflowY:"hidden"}}>Home</h5>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default Header
