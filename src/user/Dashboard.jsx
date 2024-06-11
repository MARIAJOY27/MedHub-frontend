import React from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <Header />
      <Row>
        <div className='text-center'>
          <h2 style={{overflowY:"hidden"}} className='mt-5'>Welcome to MedHub...</h2>
          <img className='mt-3' src="https://previews.123rf.com/images/alexraths/alexraths1210/alexraths121000019/16016499-hand-of-doctors-holding-many-different-pills.jpg" alt="no image" style={{ overflowX: "hidden", width: "360px",borderRadius:"20px" }} />
          <img className='ms-5 mt-3' style={{ borderRadius: "20px",height:"238px" }} src="https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_640.jpg" alt="" width={"360px"}  />
          <img className='ms-5 mt-3' style={{ borderRadius: "20px" }}  src="https://thumbs.dreamstime.com/b/pharmacist-holding-medicine-box-capsule-pack-pharmacy-drugstore-pharmacist-holding-medicine-box-capsule-pack-123358596.jpg" alt="" width={"360px"} height={"238px"} />

          <h6 style={{overflowY:"hidden"}} className=' mt-4 mx-5'>MedHub is a cutting-edge medicine management platform designed to bridge the gap between medicine suppliers and pharmacists. At MedHub, we envision a world where the management of medicine supplies is seamless, transparent, and efficient. We strive to be the leading platform that connects suppliers and pharmacists, ensuring that essential medicines are always available when needed.</h6>
  
        </div>
        <Col className='mt-5 ms-5' sm={12} md={6}>
          <button className='mt-5 btn btn-primary'><h5 style={{overflowY:"hidden"}}>Current Inventory Level</h5></button> <br />
          <button className='mt-3 btn btn-primary'><h5 style={{overflowY:"hidden"}}>Upcoming Expirations</h5></button> <br />
          <Link to={'/user/order'}><button className='mt-3 btn btn-primary'><h5 style={{overflowY:"hidden"}}>Purchase Medicines</h5></button></Link>
        </Col>
        <Col sm={12} md={6}>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
