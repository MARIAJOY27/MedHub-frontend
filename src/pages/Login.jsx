import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../services/allAPI'
import { isAuthorizedContext } from '../context/Context'

function Login() {
    const {setIsAuthorized} = useContext(isAuthorizedContext)
    const [user, setUser] = useState({
        email: "",
        password: ""

    })
    console.log(user);

    const navigate = useNavigate()

    const userLogin = async (e) => {
        e.preventDefault()
        const { email, password } = user

        if (!email || !password) {
            toast.info('Please fill the form completely')
        }
        else {
            if (user.email == 'admin10@gmail.com' && user.password == 'admin10') {
                const result = await loginAPI(user)
                console.log(result);
                if (result.status == 200) {
                    toast.success('Login successful')
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                    sessionStorage.setItem("token", result.data.token)
                    setUser({
                        email: "",
                        password: ""
                    })
                    setTimeout(() => {
                        navigate('/admin/dashboard')
                    }, 2000);
                    setIsAuthorized(true)
                }
                else {
                    toast.error('Something went wrong')
                    console.log(result);
                }
            }
            else {
                const result = await loginAPI(user)
                console.log(result);
                if (result.status == 200) {
                    toast.success('Login successful')
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                    sessionStorage.setItem("token", result.data.token)
                    setUser({
                        email: "",
                        password: ""
                    })
                    setTimeout(() => {
                        navigate('/user/dashboard')
                    }, 2000);
                    setIsAuthorized(true)
                }
                else {
                    toast.error('Something went wrong')
                    console.log(result);
                }
            }

        }
    }
    return (
        <>
            <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh' }}>

                <div className='w-50 container'>
                    <Link to={'/'} style={{ textDecoration: "none", color: 'orange' }}><h5 style={{ overflowY: "hidden" }}><FontAwesomeIcon icon={faArrowLeft} /> Back to <FontAwesomeIcon icon={faHouse} /> </h5></Link>

                    <div className='bg bg-success rounded mt-3' >
                        <Row>

                            <Col sm={12} md={12} >

                                <h3 style={{ overflowY: "hidden" }} className='text-center mt-4 p-2'>Login To Your Account</h3>

                                <Form className='mt-3 w-100'>


                                    <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter Email ID" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    </Form.Group>

                                    <div className='px-5'>
                                        <Button className=' mb-3 w-100' variant="primary" type="submit" onClick={userLogin}>
                                            Login
                                        </Button>

                                        <p>New user? Click here to <Link to={'/register '}><span style={{ color: "red" }}>Register</span></Link></p>
                                    </div>
                                </Form>

                            </Col>
                        </Row>

                    </div>
                </div>

            </div>
            <ToastContainer theme='colored' position='top-center' transition={Bounce} autoClose={3000} />

        </>
    )
}

export default Login
