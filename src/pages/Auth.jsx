import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Auth() {
    return (
        <>
            <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh' }}>

                <div className='w-50 container'>
                    <Link to={'/'} style={{ textDecoration: "none", color: 'orange' }}><h5 style={{overflowY:"hidden"}}><FontAwesomeIcon icon={faArrowLeft} /> Back to <FontAwesomeIcon icon={faHouse} /> </h5></Link>

                    <div className='bg bg-success rounded mt-3' >
                        <Row>

                            <Col sm={12} md={12} >
                                <h3 style={{overflowY:"hidden"}} className='text-center mt-4'>Login To Your Account</h3>
                                <h3 style={{overflowY:"hidden"}} className='text-center mt-4'>Sign up To Your Account</h3>

                                <Form className='mt-3 ms-5 w-75'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter Username" />                               
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter Email ID" />                               
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">                                       
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    
                                    <Button className=' mb-3 w-100' variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </Col>
                        </Row>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Auth


/*backgroundImage:"url('https://insightplus.mja.com.au/wp-content/uploads/2021/02/pharmacists-in-general-practices-drop-hospital-re-admissions-126.jpg')",opacity:"60%" */