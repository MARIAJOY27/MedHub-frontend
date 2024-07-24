import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { placeOrderApi } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function Buy({medicine, disabled}) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(null)
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const handlePlaceOrder = async()=>{
    const token = sessionStorage.getItem("token")
    let reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    
    try {
        const response = await placeOrderApi({
            medicine,
            quantity
        },reqHeader)
        
        //console.log(response);
        console.log(response.data);
        navigate('/user/ordersummary')
        
    } catch (error) {
       console.log(error);
    }
   }



  return (
    <>
    <Button variant="primary" onClick={handleShow} disabled={disabled}>
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy {medicine.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <label htmlFor="">Enter quantity</label>
              <input 
                type="number" 
                placeholder='Quantity'
                className='form-control'
                 value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>

        </Modal.Body>
        <Modal.Footer>
          
          <Button disabled={!quantity} variant="warning" onClick={handlePlaceOrder}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Buy
