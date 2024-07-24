// import React, { useContext, useEffect, useState } from 'react'
// import HeaderAdmin from './HeaderAdmin'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Update from '../components/Update';
// import { Col, Row } from 'react-bootstrap';
// import AddMed from '../components/AddMed';
// import {  getAllMedadminApi, deleteAMedicineApi } from '../services/allAPI';
// import { serverUrl } from '../services/baseUrl';
// import { AddMedResponseStatusContext } from '../context/Context';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';


// function Medlist() {
//   const {addResponse,medicines, setMedicines} = useContext(AddMedResponseStatusContext)

//   const [isLogin, setIsLogin] = useState(false)
//   //const [allMed, setAllMed] = useState([])

//   useEffect(() => {
//     if (sessionStorage.getItem("token")) {
//       setIsLogin(true)
//     }
//     else {
//       setIsLogin(false)
//     }
//     getAllMed()
//   }, [addResponse])

//   const getAllMed = async () => {
//     const result = await getAllMedadminApi()
//     setMedicines(result.data);
//   }
//   console.log(medicines);

//   const deleteMedicine = async(id)=>{
//     const token = sessionStorage.getItem("token")
     
//     const reqHeader = {
//      // "Content-Type":"application/json",
//       "Authorization": `Bearer ${token}`
//     }
//     const result = await deleteAMedicineApi(id,reqHeader)
//     console.log(result);
//     if(result.status == 200){
//       getAllMed()
//     }
//     else{
//       alert('Something went wrong')
//     }
//   }

  
//   return (
//     <>
//       <HeaderAdmin />

//       {isLogin ?
//         <Row className='mx-3 my-5'>
//           <div className='mt-3'>
//             <Link style={{ textDecoration: "none" }} to={'/admin/dashboard'}><h5  style={{ overflowY: "hidden" }} className="text-success ms-4">Back to <FontAwesomeIcon icon={faHouse} /></h5></Link>
//             <h3 className='text-center '> <AddMed /></h3>
//           </div>
//           {medicines?.map((item) => (
//             <Col className=' mb-4 ' sm={12} md={6} lg={4} xl={3} >
//               <Card className=' mt-5 ms-5' style={{ width: '18rem' }}>
//                 <Card.Img className='p-4' variant="top" src={medicines ? `${serverUrl}/uploads/${item.medImage}` : "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ko6rsu9xwrdb7hrmmszr.jpg"} height={'280px'} />
//                 <Card.Body>
//                   <Card.Title style={{ overflowY: "hidden" }}>{item.title}</Card.Title>
//                   <Card.Text>
//                     Medicine ID : {item.medId} <br />
//                     Batch No : {item.batchNo} <br />
//                     Status :<span style={{ color: "green" }}> {item.stock}</span> <br />
//                     Price : ₹ {item.price} <br />
//                     Expiry : {item.expiry}
//                   </Card.Text>
//                   <div className='d-flex '>
//                     <Update med = {item} />
//                     <Button onClick={()=>deleteMedicine(item._id)} className='ms-5' variant="primary">Delete</Button>
//                   </div>
//                 </Card.Body>
//               </Card>

//             </Col>
//           ))
//           }
//         </Row>
//         :
//         <div className="row mt-5 p-4">
//           <div className="col-md-3"></div>
//           <div className="col-md-6">
//             <img className='ms-5' src="https://cdnl.iconscout.com/lottie/premium/thumb/account-access-5611687-4682462.gif" width={'330px'} alt="" />
//             <h4 style={{ marginRight: '150px' }} className='text-center text-danger py-3 '>Access to admin only</h4>
//           </div>
//           <div className="col-md-3"></div>
//         </div>}

//     </>
//   )
// }

// export default Medlist

import React, { useContext, useEffect, useState } from 'react';
import HeaderAdmin from './HeaderAdmin';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Update from '../components/Update';
import { Col, Row } from 'react-bootstrap';
import AddMed from '../components/AddMed';
import { getAllMedadminApi, deleteAMedicineApi } from '../services/allAPI';
import { serverUrl } from '../services/baseUrl';
import { AddMedResponseStatusContext } from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Helper function to normalize the stock value
const normalizeStock = (stock) => {
    return stock.replace(/\s+/g, '').toLowerCase();
};

function Medlist() {
    const { addResponse, medicines, setMedicines } = useContext(AddMedResponseStatusContext);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
        getAllMed();
    }, [addResponse]);

    const getAllMed = async () => {
        const result = await getAllMedadminApi();
        setMedicines(result.data);
    };

    const deleteMedicine = async (id) => {
        const token = sessionStorage.getItem("token");

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        };
        const result = await deleteAMedicineApi(id, reqHeader);
        if (result.status === 200) {
            getAllMed();
        } else {
            alert('Something went wrong');
        }
    };

    return (
        <>
            <HeaderAdmin />
            {isLogin ? (
                <Row className='mx-3 my-5'>
                    <div className='mt-3'>
                        <Link style={{ textDecoration: "none" }} to={'/admin/dashboard'}>
                            <h5 style={{ overflowY: "hidden" }} className="text-success ms-4">Back to <FontAwesomeIcon icon={faHouse} /></h5>
                        </Link>
                        <h3 className='text-center '> <AddMed /></h3>
                    </div>
                    {medicines?.map((item) => {
                        const normalizedStock = normalizeStock(item.stock);
                        const stockColor = normalizedStock === 'instock' ? 'green' : 'red';
                        return (
                            <Col className='mb-4' sm={12} md={6} lg={4} xl={3} key={item._id}>
                                <Card className='mt-5 ms-5' style={{ width: '18rem' }}>
                                    <Card.Img
                                        className='p-4'
                                        variant="top"
                                        src={medicines ? `${serverUrl}/uploads/${item.medImage}` : "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ko6rsu9xwrdb7hrmmszr.jpg"}
                                        height={'280px'}
                                    />
                                    <Card.Body>
                                        <Card.Title style={{ overflowY: "hidden" }}>{item.title}</Card.Title>
                                        <Card.Text>
                                            Medicine ID : {item.medId} <br />
                                            Batch No : {item.batchNo} <br />
                                            Status : <span style={{ color: stockColor }}> {item.stock}</span> <br />
                                            Price : ₹ {item.price} <br />
                                            Expiry : {item.expiry}
                                        </Card.Text>
                                        <div className='d-flex '>
                                            <Update med={item} />
                                            <Button onClick={() => deleteMedicine(item._id)} className='ms-5' variant="primary">Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            ) : (
                <div className="row mt-5 p-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <img className='ms-5' src="https://cdnl.iconscout.com/lottie/premium/thumb/account-access-5611687-4682462.gif" width={'330px'} alt="" />
                        <h4 style={{ marginRight: '150px' }} className='text-center text-danger py-3 '>Access to admin only</h4>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            )}
        </>
    );
}

export default Medlist;
