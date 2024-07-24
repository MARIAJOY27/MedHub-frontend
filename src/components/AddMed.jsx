import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMedicineApi } from '../services/allAPI';
import { AddMedResponseStatusContext } from '../context/Context';



function AddMed() {
    const {setAddResponse} = useContext(AddMedResponseStatusContext)

    //state to hold medicine details
    const [medDetails, setMedDetails] = useState({
        title: "",
        medId:"",
        batchNo: "",
        price: "",
        expiry: "",
        stock: "",
        medImage: ""
    })

    console.log(medDetails);

    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => {
        setMedDetails({
            title: "",
            medId:"",
            batchNo: "",
            price: "",
            expiry: "",
            stock: "",
            medImage: ""
        })
        setPreview("")
        setKey(!key)
    }
    const [key, setKey] = useState(false)
    const [token, setToken] = useState("")

    const handleAdd = async (e) => {
        e.preventDefault()

        const { title,medId, batchNo, price, expiry, stock, medImage } = medDetails
        if (!title || !medId || !batchNo || !price || !expiry || !stock || !medImage) {
            toast.info('Please fill the form completely')
        }
        else {
            const reqBody = new FormData()
            reqBody.append('title', title)
            reqBody.append('medId', medId)
            reqBody.append('batchNo', batchNo)
            reqBody.append('price', price)
            reqBody.append('expiry', expiry)
            reqBody.append('stock', stock)
            reqBody.append('medImage', medImage)
            if(token){
                let reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addMedicineApi(reqBody, reqHeader)
                //console.log(result);
                 if(result.status==200){
                    handleClose1()
                    handleClose()
                    setAddResponse(result.data)
                    
                 }
                 else{
                    toast.error('Something went wrong')
                    handleClose1()
                    handleClose()
                 }

            }
        }


    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        else {
            setToken("")
        }
    }, [])

    useEffect(() => {
        if (medDetails.medImage) {
            setPreview(URL.createObjectURL(medDetails.medImage))
        }

    }, [medDetails.medImage])

    console.log(preview);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add new medicine
            </Button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12} md={6}>
                            <label htmlFor="image">
                                <input key={key} type="file" id='image' style={{ display: "none" }} onChange={(e) => setMedDetails({ ...medDetails, medImage: e.target.files[0] })} />
                                <img src={preview ? preview : "https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk="} width={'250px'} alt="no image" />
                            </label>
                        </Col>

                        <Col sm={12} md={6}>

                            <input className='form-control w-100' type="text" placeholder='Title' value={medDetails.title} onChange={(e) => setMedDetails({ ...medDetails, title: e.target.value })} /> <br />

                            <input className=' form-control w-100 ' type="text" placeholder='Medicine ID' value={medDetails.medId} onChange={(e) => setMedDetails({ ...medDetails, medId: e.target.value })} /> <br />

                            <input className=' form-control w-100 ' type="text" placeholder='Batch Number' value={medDetails.batchNo} onChange={(e) => setMedDetails({ ...medDetails, batchNo: e.target.value })} /> <br />

                            <input className='form-control w-100 ' type="text" placeholder='Price' value={medDetails.price} onChange={(e) => setMedDetails({ ...medDetails, price: e.target.value })} /> <br />

                            <input className=' form-control w-100 ' type="text" placeholder='Expiry' value={medDetails.expiry} onChange={(e) => setMedDetails({ ...medDetails, expiry: e.target.value })} /> <br />

                            <input className='form-control w-100 ' type="text" placeholder='Stock' value={medDetails.stock} onChange={(e) => setMedDetails({ ...medDetails, stock: e.target.value })} />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer theme='colored' position='top-center' transition={Bounce} autoClose={2000} />
        </div>
    )
}

export default AddMed
