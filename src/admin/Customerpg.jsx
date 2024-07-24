import React, { useEffect, useState } from 'react'
import { faBook, faCapsules, faHouse, faTrash, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import { deleteUserApi, getAllUsersApi } from '../services/allAPI'



function Customerpg() {
  const [users, setUsers] = useState([])
  const [isLogin, setIsLogin] = useState(false);
    
  const getUsers = async()=>{
    const response = await getAllUsersApi()
    setUsers(response.data);
  }
  const userOnlyDetails = users.filter(user => user.username !== 'maria');
  console.log(userOnlyDetails);

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
  } else {
      setIsLogin(false);
  }
  },[])

  useEffect(()=>{
    getUsers()
  },[])

  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token")

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
    const result = await deleteUserApi(id,reqHeader)
    console.log(result);
    if(result.status==200){
      getUsers()
    }
    else {
      alert('Something went wrong')
  }
  }

  return (
    <>
    <HeaderAdmin/>
      {isLogin?
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

            <div className="row w-100">
            <h4 className='mt-5 mx-5 ' style={{ overflowY: "hidden" }}><FontAwesomeIcon className='me-2' icon={faUsersLine} />Manage Customer</h4>
                <div className="col-md-1"></div>
                <div className="col-md-10" style={{overflowX:'auto',zIndex:'1'}}>
                    <table className='tabcus border shadow w-100 mx-3 mt-5' >
                        <thead>
                            <tr >
                                <th className='p-3'>Sl No</th>
                                <th className='p-3'>Customer ID</th>
                                <th className='p-3'>Customer Name</th>
                                <th className='p-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {userOnlyDetails.length >0?
                           userOnlyDetails?.map((item,index)=>(
                            <tr>
                                <td className='p-3'>{index+1}</td>
                                <td className='p-3'>{item._id}</td>
                                <td className='p-3'>{item.username}</td>
                                <td className='p-3 '><button onClick={()=>handleDelete(item._id)} className='btn btn-danger'><FontAwesomeIcon  icon={faTrash} /></button></td>
                            </tr>
                           ))
                            
                               :
                            <div>
                          <h3 style={{overflowY:"hidden"}} className='text-center text-danger'>No users to display</h3>
                        </div>
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

export default Customerpg
