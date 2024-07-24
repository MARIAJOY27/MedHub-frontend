import { faBook, faCapsules, faHouse, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{ useContext, useEffect, useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Link } from 'react-router-dom'
import { getOosMedCountApi, getTotalCountMedApi, getTotalCountOrdersApi, getTotalCountUserApi } from "../services/allAPI";
import { SalesContext } from '../context/Context'



function DashboardAdmin() {
  const [countMed, setCountMed] = useState(0)
  const [countUser, setCountUser] = useState(0)
  const [countOos, setCountOos] = useState(0)
  const [countOrder,setOrderCount] = useState(0)
  const {sumSales} = useContext(SalesContext)

  const getCountMed = async()=>{
    const response = await getTotalCountMedApi()
    setCountMed(response.data.count);
  }

  const getCountUser = async()=>{
    const res = await getTotalCountUserApi()
    setCountUser(res.data.count);
  }

  const getCountOrder = async()=>{
    const res = await getTotalCountOrdersApi()
    setOrderCount(res.data.count);
  }


  const getOosCount = async()=>{
    const oos = await getOosMedCountApi()
    console.log(oos);
    setCountOos(oos.data.counts)
  }

  //console.log(countOrder);

  useEffect(()=>{
    getCountMed()
    getCountUser()
    getOosCount()
    getCountOrder()
  },[sumSales])
 // console.log(countMed);

  return (
    <>
      <HeaderAdmin />
      <div className='d-flex'>
        <div className='row' style={{ height: "100vh", width: "250px", backgroundColor: "#78C2AD" }}>
          <div className="col-md-1"></div>
          <div className="col-md-10 mt-5">
            <img className='ms-3 justify-content-center align-items-center' style={{ borderRadius: "50%" }} src="https://t4.ftcdn.net/jpg/03/59/09/01/360_F_359090172_vsL1da5fNVENKKMoQTq7NSwPPrllQcRB.jpg" alt="noimage" width={"130px"} />
            <br />
            <h5 className='mt-4 text-center' style={{ overflowY: "hidden" }}><Link style={{textDecoration:"none",color:"black"}} to={'/admin/dashboard'}><FontAwesomeIcon className='me-2' icon={faHouse} />Dashboard</Link></h5>
            <h5 className='mt-3 text-center' style={{ overflowY: "hidden" }}><Link style={{textDecoration:"none",color:"black"}} to={'/customerpg'}><FontAwesomeIcon className='me-2' icon={faUsersLine} />Customers</Link></h5>
            <h5 className='mt-3 text-center' style={{ overflowY: "hidden" }}><Link style={{textDecoration:"none",color:"black"}} to={'/medlist'}><FontAwesomeIcon icon={faCapsules} className='me-2' /> Medicines</Link></h5>
            <h5 className='mt-3 text-center' style={{ overflowY: "hidden" }}><Link style={{textDecoration:"none",color:"black"}}  to={'/admin/orderhistory'}><FontAwesomeIcon icon={faBook} className='me-3' />Report</Link></h5>
          </div>
          <div className="col-md-1"></div>

        </div>
        <div className='row w-100'>
          <h3 className='mt-5 ms-5 ' style={{ overflowY: "hidden" }}><FontAwesomeIcon className='me-2' icon={faHouse} />Dashboard</h3>
          <div className="col-md-1"></div>
          <div className="col-md-3 ms-2 mb-5">
            <div className='rounded shadow border border-outline-success' style={{ width: "250px", height: "100px" }}>
              <h5 className='text-center pt-3' style={{ overflowY: "hidden" }}>Total Medicines</h5>
              <h5 style={{ overflowY: "hidden" }} className='text-center mt-1'>{countMed}</h5>
            </div>
            <div className='mt-5  rounded shadow border border-outline-success' style={{ width: "250px", height: "100px" }}>
              <h5 className='text-center pt-3' style={{ overflowY: "hidden" }}>Total Customers</h5>
              <h5 style={{ overflowY: "hidden" }} className='text-center mt-1'>{countUser-1}</h5>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 ms-2 mb-5">
            <div className='rounded shadow border border-outline-success' style={{ width: "250px", height: "100px" }}>
            <h5 className='text-center pt-3' style={{ overflowY: "hidden" }}>Out of stock</h5>
            <h5 style={{ overflowY: "hidden" }} className='text-center mt-1'>{countOos}</h5>
            </div>
            <div className='mt-5 rounded shadow border border-outline-success' style={{ width: "250px", height: "100px" }}>
            <h5 className='text-center pt-3' style={{ overflowY: "hidden" }}>Total Orders</h5>
            <h5 style={{ overflowY: "hidden" }} className='text-center mt-1'>{countOrder}</h5>
            </div>
          </div>
          <div className="col-md-4">
          <div className='rounded shadow border border-outline-success' style={{ width: "280px", height: "247px" }}>
              <h5 className='text-center pt-5' style={{ overflowY: "hidden" }}>Today's Report</h5>
              <h5 style={{ overflowY: "hidden" }} className='text-center mt-4'>Total Sales :
                <br /><br /><span style={{color:'saddlebrown',fontSize:'25px'}}> ₹ {sumSales}</span></h5>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
       
      </div>
      
    </>
  )
}

export default DashboardAdmin
