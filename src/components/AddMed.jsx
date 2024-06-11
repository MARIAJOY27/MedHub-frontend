import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddMed() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <img src="https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk=" width={'250px'} alt="no image" />
                </Col>
                <Col sm={12} md={6}>
                 <label className='mt-4' htmlFor="">Title : </label>
                 <input className='w-75' type="text" placeholder='Title'  /> <br />

                 <label className='mt-3' htmlFor="">Price : </label>
                 <input className='w-75' type="text" placeholder='Price' /> <br />

                 <label className='mt-3' htmlFor="">Expiry : </label>
                 <input className='w-75' type="text" placeholder='Expiry' /> <br />

                 <label className='mt-3' htmlFor="">Stock : </label>
                 <input className='w-75' type="text" placeholder='Stock' />
                </Col>
            </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default AddMed
