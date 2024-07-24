import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Profile from '../components/Profile'


function Dashboard() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
     if(sessionStorage.getItem("token")){
        setIsLogin(true)
     }
     else{
      setIsLogin(false)
     }
  },[])

  return (
    <>
      <Header />
       
      {isLogin?
      <Row>
        <div className='text-center'>
          <h2 style={{overflowY:"hidden",marginTop:"80px"}} >Welcome to MedHub...</h2>
          
          <div className='d-flex mx-3'>
            <img className='mt-3 ms-3' src="https://previews.123rf.com/images/alexraths/alexraths1210/alexraths121000019/16016499-hand-of-doctors-holding-many-different-pills.jpg" alt="no image" style={{ overflowX: "hidden", width: "360px",borderRadius:"20px" }} />
            <img className='ms-5 mt-3' style={{ borderRadius: "20px",height:"238px" }} src="https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_640.jpg" alt="" width={"360px"}  />
            <img className='ms-5 mt-3' style={{ borderRadius: "20px" }}  src="https://thumbs.dreamstime.com/b/pharmacist-holding-medicine-box-capsule-pack-pharmacy-drugstore-pharmacist-holding-medicine-box-capsule-pack-123358596.jpg" alt="" width={"360px"} height={"238px"} />
          </div>

          <h6 style={{overflowY:"hidden"}} className=' mt-4 mx-5'>MedHub is a cutting-edge medicine management platform designed to bridge the gap between medicine suppliers and pharmacists. At MedHub, we envision a world where the management of medicine supplies is seamless, transparent, and efficient. We strive to be the leading platform that connects suppliers and pharmacists, ensuring that essential medicines are always available when needed.</h6>
  
        </div>
        <div className='d-flex'>
          <Col className='mt-5 ms-5' sm={12} md={6}>
            <Profile/>
  
          </Col>
          <Col sm={12} md={6} className='p-5 mt-5'>
          {/* <div className='rounded shadow mt-5 me-5 w-75 p-5' style={{backgroundColor:"#78C2AD"}}>
           <div className='p-4'> 
            <Link to={'/user/order'}><button className='mt-3 btn btn-primary align-items-center justify-content-center flex-column'><h5 style={{overflowY:"hidden"}}>Purchase Medicines</h5></button></Link> 
             </div>  <br />
  
            <div className='px-4 '>
              <Link to={'/user/ordersummary'}><button className=' ms-4 btn btn-primary align-items-center justify-content-center flex-column'><h5 style={{overflowY:"hidden"}}>View Orders </h5></button></Link>
              </div>
          </div> */}
          <div className='mt-5 text-center'>
            <h4 style={{color:'green',overflowY:'hidden'}}>Want to order medicines?</h4>
            <Link to={'/user/order'}><button className='mt-2 btn btn-primary align-items-center justify-content-center flex-column'><h5 style={{overflowY:"hidden"}}>Purchase Medicines</h5></button></Link> 
             
          </div>
          <div className='mt-5 text-center'>
            <h4 style={{color:'green',overflowY:'hidden'}}>Want to view your orders?</h4>
            <Link to={'/user/ordersummary'}><button className='mt-2  btn btn-primary align-items-center justify-content-center flex-column'><h5 style={{overflowY:"hidden"}}>View Orders </h5></button></Link> 
             
          </div>
              
          </Col>
        </div>
      </Row>
        :
      <div className="row mt-5 p-4">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <img className='ms-5' src="https://cdnl.iconscout.com/lottie/premium/thumb/account-access-5611687-4682462.gif" width={'330px'} alt="" />
        <h4 style={{marginRight:'150px'}} className='text-center text-danger py-3 '>Please <Link to={'/login'}>Login</Link> to your account</h4>
        </div>
        <div className="col-md-3"></div>
      </div>}
       
      

    </>
  )
}

export default Dashboard
