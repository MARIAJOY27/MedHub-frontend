import React, { useContext, useEffect, useState } from 'react'
import { faBook, faCapsules, faHouse, faTrash, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import { getAllOrdersApi } from '../services/allAPI'
import { SalesContext } from '../context/Context'

function OrderHistory() {
    const [orders,setAllOrders] = useState([])
    const [sum, setSum] = useState(0)
    const {sumSales, setSumSales} = useContext(SalesContext)
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=>{
        if (sessionStorage.getItem("token")) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    },[])
 
    const getAllOrders = async()=>{
        const result = await getAllOrdersApi()
        setAllOrders(result.data);
    }
    console.log(orders);

    useEffect(()=>{
        getAllOrders()
        getSum()
    },[orders,setSumSales])

    const getSum = ()=>{
        if(orders.length >0){
           setSum(orders.map(item=>item.medicine.price*item.quantity).reduce((p1,p2)=>p1+p2))
           setSumSales(orders.map(item=>item.medicine.price*item.quantity).reduce((p1,p2)=>p1+p2))
        }
        else{
            setSum(0)
            setSumSales(null)
        }
    }

    return (
        <>
            <HeaderAdmin />
           {isLogin?
            <div className='d-flex' style={{overflowX:"hidden"}}>
                <div className='row' style={{ height: "100vh", width: "250px", backgroundColor: "#78C2AD" }}>
                    <div className="col-md-1"></div>
                    <div className="col-md-10 mt-5 ">
                        <img className='ms-3 justify-content-center align-items-center' style={{ borderRadius: "50%" }} src="https://t4.ftcdn.net/jpg/03/59/09/01/360_F_359090172_vsL1da5fNVENKKMoQTq7NSwPPrllQcRB.jpg" alt="noimage" width={"130px"} />
                        <br />
                        <h5 className='mt-4 text-center' style={{ overflowY: "hidden" }}><Link style={{ textDecoration: "none", color: "black" }} to={'/admin/dashboard'}><FontAwesomeIcon className='me-2' icon={faHouse} />Dashboard</Link></h5>
                        <h5 className='mt-3 text-center' style={{ overflowY: "hidden" }}><Link style={{ textDecoration: "none", color: "black" }} to={'/customerpg'}><FontAwesomeIcon className='me-2' icon={faUsersLine} />Customers</Link></h5>
                        <h5 className='mt-3 text-center' style={{ overflowY: "hidden" }}><Link style={{ textDecoration: "none", color: "black" }} to={'/medlist'}><FontAwesomeIcon icon={faCapsules} className='me-2' /> Medicines</Link></h5>
                        <h5 className='mt-3 text-center' style={{ overflowY: "hidden" }}><Link style={{ textDecoration: "none", color: "black" }} to={'/admin/orderhistory'}><FontAwesomeIcon icon={faBook} className='me-3' />Report</Link></h5>
                    </div>
                    <div className="col-md-1"></div>

                </div>

                <div className="row">
                    <h4 className='mt-5 ms-5 ' style={{ overflowY: "hidden" }}><FontAwesomeIcon icon={faBook} className='me-3' />Sales Summary</h4>
                    <div className="col-md-1"></div>
                    <div className="col-md-10 d-flex flex-column align-items-center" style={{overflowX:'auto'}}>
                    <div className="text-center mt-3 mb-2">
                            <h4 style={{overflowY:"hidden"}}><strong>Total Sales : <span style={{color:'green'}}>₹ {sumSales}</span></strong></h4>
                       </div>
                        <table className='tabcus border shadow w-100 mx-5 mt-5' style={{ marginBottom: "350px" }}>
                            <thead>
                                <tr >
                                    <th className='p-3'>Sl.No</th>
                                    <th className='p-3'>Customer name</th>
                                    <th className='p-3'>Item ID</th>
                                    <th className='p-3'>Item Name </th>
                                    <th className='p-3'>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders?.length > 0?
                                orders?.map((item,index)=>(
                                    <tr>
                                    <td className='p-3'>{index+1}</td>
                                    <td className='p-3'>{item.user.username}</td>
                                    <td className='p-3'>{item.medicine.medId}</td>
                                    <td className='p-3'>{item.medicine.title}</td>
                                    <td className='p-3'>₹ {item.medicine.price*item.quantity}</td>
                                </tr>
                               ))
                                    
                                 : 

                                <tr>
                                    <td className="text-danger text-center p-4">No items to display</td>
                                </tr>
                               } 


                            </tbody>
                            
                        </table>
                    </div>
                  <div className="col-md-1"></div>
                </div>
            </div>
              :
            <div className="row mt-5 p-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <img className='ms-5' src="https://cdnl.iconscout.com/lottie/premium/thumb/account-access-5611687-4682462.gif" width={'330px'} alt="" />
                        <h4 style={{ marginRight: '150px' }} className='text-center text-danger py-3 '>Access to admin only</h4>
                    </div>
                    <div className="col-md-3"></div>
                </div>}
        </>
    )
}

export default OrderHistory
