import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MedCard from '../components/MedCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getAllMedicineApi } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import { AddMedResponseStatusContext } from '../context/Context';



function Order() {
  const {addResponse} = useContext(AddMedResponseStatusContext)

  const [isLogin, setIsLogin] = useState(false)
  const [allMed, setAllMed] = useState([])
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    }
    else {
      setIsLogin(false)
    }
    getAllMed()
  }, [searchKey,addResponse])

  const getAllMed = async () => {
    const result = await getAllMedicineApi(searchKey)
    setAllMed(result.data)
  }

  useEffect(()=>{

  },[allMed])
  console.log(allMed);
  console.log(searchKey);


  return (
    <>
      <Header />
      {isLogin ?
        <div>
          <div className='row mt-3 d-flex justify-content-center w-100'>
            <div className="col-md-4"></div>
            <div className="col-md-4 p-4 mt-5 d-flex justify-content-center">
              <input type="text" onChange={(e)=>setSearchKey(e.target.value)} className='form-control ' placeholder='Search by Medicines' />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='mt-2  text-secondary' style={{ marginLeft: "-30px" }} />
            </div>
            <div className="col-md-4"></div>
          </div>


          {allMed?.length > 0 ?
            <div>
              <Row className='mx-3 my-3'>
                {allMed?.map((item) => (
                  <Col className='mb-3' sm={12} md={6} lg={4} xl={3}>
                    <div className='d-flex mt-3'>

                      <MedCard medicine={item} />

                    </div>
                  </Col>
                ))
                }
              </Row>

            </div>
            :
            <div className='mt-5'>
              <h2 className='text-danger text-center fs-3'>No medicines to display...</h2>
            </div>}


        </div>


        :
        <div className="row mt-5 p-4">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <img className='ms-5' src="https://cdnl.iconscout.com/lottie/premium/thumb/account-access-5611687-4682462.gif" width={'330px'} alt="" />
            <h4 style={{ marginRight: '150px' }} className='text-center text-danger py-3 '>Please <Link to={'/login'}>Login</Link> to your account</h4>
          </div>
          <div className="col-md-3"></div>
        </div>}



    </>
  )
}

export default Order
