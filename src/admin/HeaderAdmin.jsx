import React, { useContext } from 'react'
import { faCapsules, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthorizedContext } from '../context/Context';


function HeaderAdmin() {
  const navigate = useNavigate()
  const {setIsAuthorized} = useContext(isAuthorizedContext)

  const handleLogout=()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    navigate('/')
  }

  return (
    <>
    <Navbar expand="lg" className="w-100" style={{backgroundColor:"#78C2AD"}}>
      <Container>
        <Link to={'/'} style={{textDecoration:"none",overflowY:"hidden"}}><Navbar.Brand ><FontAwesomeIcon icon={faCapsules}  /> MedHub</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
            <button onClick={handleLogout} className='ms-4 mb-2 btn btn-dark rounded '><h6 style={{overflowY:"hidden"}}><FontAwesomeIcon className='me-2' icon={faPowerOff} />Logout</h6> </button> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default HeaderAdmin
