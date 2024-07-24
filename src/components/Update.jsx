import React, { useEffect,useContext } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverUrl } from '../services/baseUrl';
import { updateMedApi } from "../services/allAPI";
import { AddMedResponseStatusContext } from '../context/Context';



function Update({med}) {
  const {medicines, setMedicines} = useContext(AddMedResponseStatusContext)

  //console.log(med);
  const [update, setUpdate] = useState({
    title:med.title,
    medId:med.medId,
    batchNo:med.batchNo,
    price:med.price,
    expiry:med.expiry,
    stock:med.stock,
    medImage:""
  })

  const [preview, setPreview] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)
    handleClose1()
  }
  const handleShow = () => setShow(true);
  const handleClose1 = ()=>{
    setUpdate({
      title:med.title,
    medId:med.medId,
    batchNo:med.batchNo,
    price:med.price,
    expiry:med.expiry,
    stock:med.stock,
    medImage:""
    })
    setPreview("")
  }
    const handleClose2 = ()=>{
      setShow(false)
    }

  const handleUpdate = async(e)=>{
    e.preventDefault()

    const {title,medId,batchNo,price,expiry,stock} = update
    if(!title || !medId || !batchNo || !price || !expiry || !stock){
      toast.info('Please fill the form completely')
    }
    else{
      let result=null
      const reqBody = new FormData()
      reqBody.append('title', title)
      reqBody.append('medId', medId)
      reqBody.append('batchNo', batchNo)
      reqBody.append('price', price)
      reqBody.append('expiry', expiry)
      reqBody.append('stock', stock)
      preview?reqBody.append('medImage', medImage):reqBody.append("medImage",med.medImage)

      const token = sessionStorage.getItem("token")
      if(preview){
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
         result = await updateMedApi(med._id,reqBody,reqHeader)
        console.log(result)
        if(result?.status == 200){
          handleClose2()
          console.log(result?.data)
        }
        else{
          console.log(result);
        }
      }
      else{
        const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`
        }
        result = await updateMedApi(med._id,reqBody,reqHeader)
        if(result?.status == 200){
          handleClose2()
        }
        else{
          console.log(result);
        }
      }
      //console.log(result);
      let allMedicines = [...medicines]
      const index = medicines.findIndex((item)=>(item?._id===result.data._id))
      if(index>=0){
        allMedicines[index]=result.data
        setMedicines(allMedicines)
      }
    }
  }

  useEffect(()=>{
    if(update.medImage){
      setPreview(URL.createObjectURL(update.medImage))
    }
  },[update.medImage])

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Update Medicine Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
             <label htmlFor='image'>
               <input type="file" id='image' style={{display:"none"}} onChange={(e)=>setUpdate({...update,medImage:e.target.files[0]})} />
               <img src={preview?preview: `${serverUrl}/uploads/${med.medImage}`} width={'250px'} alt="no image" /></label>
            </Col>
            <Col sm={12} md={6}>
              <input className='form-control w-100' type="text" value={update.title} placeholder='Title' onChange={(e)=>setUpdate({...update, title:e.target.value})}  /> <br />

              <input className=' form-control w-100 ' type="text" value={update.medId} placeholder='Medicine ID'  onChange={(e)=>setUpdate({...update, medId:e.target.value})} /> <br />

              <input className=' form-control w-100 ' type="text" value={update.batchNo} placeholder='Batch Number'  onChange={(e)=>setUpdate({...update, batchNo:e.target.value})} /> <br />

              <input className='form-control w-100 ' type="text" value={update.price} placeholder='Price'  onChange={(e)=>setUpdate({...update, price:e.target.value})} /> <br />

              <input className=' form-control w-100 ' type="text" value={update.expiry} placeholder='Expiry'  onChange={(e)=>setUpdate({...update, expiry:e.target.value})} /> <br />

              <input className='form-control w-100 ' type="text" value={update.stock} placeholder='Stock'  onChange={(e)=>setUpdate({...update, stock:e.target.value})} />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </div>
  )
}

export default Update

