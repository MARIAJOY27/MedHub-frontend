import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div className='container-fluid w-100' style={{ backgroundColor: "#AAD9BB", height: "100vh" }}>
        <Row className='align-items-center'>
          <div className='text-typing text-center mt-5'>
            <h1 style={{overflowY:"hidden"}}>Welcome to MedHub...</h1>
            <p className='mt-3'>A system to ensure efficient
              tracking, updating, and purchasing of medicines. </p>
          </div>
          <Col sm={12} md={12} >
            <marquee scrollAmount={25}>
              <div className='d-flex mt-4'>
                <img className='ms-5' style={{ borderRadius: "10px" }} src="https://images.indianexpress.com/2024/04/medicine_thinkstock-2.jpg?w=414" alt="" />
                <img className='ms-5' style={{ borderRadius: "10px" }} src="https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_640.jpg" alt="" width={"414px"} height={"232px"} />
                <img className='ms-5' style={{ borderRadius: "10px" }}  src="https://thumbs.dreamstime.com/b/pharmacist-holding-medicine-box-capsule-pack-pharmacy-drugstore-pharmacist-holding-medicine-box-capsule-pack-123358596.jpg" alt="" width={"414px"} height={"232px"} />
  
              </div>
            </marquee>
            <div className='text-center'>
              <button className='mt-5 btn btn-primary'><Link style={{textDecoration:"none",color:"white"}} to={'/login'}>Get Started <FontAwesomeIcon icon={faArrowRight} /></Link></button>
            </div>
          </Col>

        </Row>

      </div>

    </>
  )
}

export default Home
