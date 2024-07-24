import { faCapsules, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthorizedContext } from '../context/Context';



function Header() {
  const navigate = useNavigate()
  const {setIsAuthorized} = useContext(isAuthorizedContext)

  const handleLogout = ()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    navigate('/')
  }

  return (
    <>
     <Navbar expand="lg" className="w-100" style={{backgroundColor:"#78C2AD"}}>
      <Container>
        <Link to={'/'} style={{textDecoration:"none",overflowY:"hidden"}}><Navbar.Brand className='text-light fs-4' ><FontAwesomeIcon icon={faCapsules} /> MedHub</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/user/dashboard'} style={{textDecoration:'none',color:'white'}}><h5 style={{overflowY:"hidden"}} className='me-3 mt-2'>Home</h5></Link>
            <Link to={'/user/order'} style={{textDecoration:'none',color:'white'}}><h5 style={{overflowY:"hidden"}} className='me-3 mt-2'>Medicines</h5></Link>
            <Link to={'/user/ordersummary'} style={{textDecoration:'none',color:'white'}}><h5 style={{overflowY:"hidden"}} className='mt-2'>Orders</h5> </Link> 

            <button onClick={handleLogout} className='ms-4 mb-2 btn btn-dark rounded '><h6 style={{overflowY:"hidden"}}><FontAwesomeIcon className='me-2' icon={faPowerOff} />Logout</h6> </button> 

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default Header
