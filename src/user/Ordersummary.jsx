import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBook, faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { deleteOrderApi, deleteUserOrderApi, getUserOrderApi } from "../services/allAPI";


function Ordersummary() {
    const [userOrders, setUserOrders] = useState({})
    const [total,setTotal] = useState(0)

    const navigate = useNavigate()

    const getUserOrder = async () => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getUserOrderApi(reqHeader)
            setUserOrders(result.data)
        }
    }
    console.log(userOrders);



    const deleteOrder = async (id) => {
        const token = sessionStorage.getItem("token")

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteOrderApi(id, reqHeader)
        console.log(result);
        if (result.status == 200) {
            getUserOrder()
        }
        else {
            alert('Something went wrong')
        }
    }
    
    const getTotal = ()=>{
        if(userOrders.length>0){
            const sum= userOrders.map(item=>item.quantity * item.medicine.price).reduce((p1,p2)=>p1+p2)
           setTotal(sum)
        }
        else{
            setTotal(0)
        }
    }
    console.log(total);

    useEffect(() => {
        getUserOrder()   
    }, [])

    useEffect(()=>{
        getTotal()
    },[userOrders])

    const handleCheckout = async(id)=>{
        const token = sessionStorage.getItem("token")

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteUserOrderApi(id,reqHeader)
        console.log(result);
        alert('Order placed successfully')
        if (result.status == 200) {
           const updatedOrders = await getUserOrderApi(reqHeader)
           console.log(updatedOrders.data);
        }
        else {
            alert('Something went wrong')
        }
        navigate('/user/dashboard')
    }


    return (
        <div>
            <Header />
            <div className="row w-100">
                <h4 className='mt-5 ms-5 ' style={{ overflowY: "hidden" }}><FontAwesomeIcon icon={faBook} className='me-3 ms-5' />Order Summary</h4>
                <div className="col-md-1"></div>
                <div className="col-md-10" style={{overflowX:'auto'}}>
                    <Link style={{ textDecoration: "none" }} to={'/user/order'}> <h5 style={{ overflowY: "hidden" }} className="mt-3 text-success ms-4"><FontAwesomeIcon icon={faArrowLeft} className="me-2" />Back to <FontAwesomeIcon icon={faCartShopping} /></h5></Link>
                       <div className="text-center mt-3 mb-2">
                            <h4 style={{overflowY:"hidden"}}>Total Number of products:{userOrders.length}</h4>
                            <h4 style={{overflowY:"hidden"}}>Total Amount : ₹ {total}</h4>
                       </div>


                    <table className='tabcus border shadow w-100 mx-3 mt-5' >
                        <thead>
                            <tr >
                                <th className='p-3'>Sl.No</th>
                                <th className='p-3'>Item</th>
                                <th className='p-3'>Item ID</th>
                                <th className='p-3'>Quantity</th>
                                <th className='p-3'>Total Price</th>
                                <th className='p-3 '>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {userOrders?.length > 0 ?
                                userOrders?.map((item, index) => (
                                    <tr>
                                        <td className='p-3'>{index + 1}</td>
                                        <td className='p-3'>{item.medicine.title}</td>
                                        <td className='p-3'>{item.medicine.medId}</td>
                                        <td className='p-3'>{item.quantity} boxes </td>
                                        <td className='p-3'>₹ {item.quantity * item.medicine.price}</td>
                                        <td><button onClick={() => deleteOrder(item._id)} className="btn btn-danger rounded ms-3"><FontAwesomeIcon className="text-light" icon={faTrashCan} /></button></td>
                                    </tr>
                                ))

                                :
                                <div><h6 className="text-danger p-4">No items to display</h6></div>
                            }

                        </tbody>
                    </table> 

                    <div className="text-center mb-5 mt-5 pb-5">
                        <button onClick={handleCheckout} className="mb-5 btn btn-success ">Check Out</button>
                    </div>


                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    )
}
export default Ordersummary