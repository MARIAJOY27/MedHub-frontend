import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Update() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <img src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ko6rsu9xwrdb7hrmmszr.jpg" width={'250px'} alt="no image" />
                </Col>
                <Col sm={12} md={6}>
                 <label className='mt-4' htmlFor="">Title : </label>
                 <input className='w-75' type="text" placeholder='Title' /> <br />

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
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}

export default Update
