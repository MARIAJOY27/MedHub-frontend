import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerAPI } from '../services/allAPI'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const location = useLocation()
  console.log(location);

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
    role:""

  })
  console.log(user);

  const handleRegister = async(e)=>{
    e.preventDefault()
    const {username, email, password} = user
    if(!username || !email || !password){
      toast.info('Please fill the form completely')
    }
    else{
      const result = await registerAPI(user)
      console.log(result);
      
      if(result.status == 200 ){
        toast.success('Registration successful')
        setUser({
          username:"",
          email:"",
          password:""
        })
        setTimeout(() => {
          navigate('/login')
        }, 2000);
      }
      else{
        toast.error(result.response.data);
      }
    }

    // let role = null
    // if(location.pathname=='admin/register'){
    //     role="admin"
    // }
    // else{
    //     role="user"
    // }
}

  return (
    <>
     <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh' }}>

<div className='w-50 container'>
    <Link to={'/'} style={{ textDecoration: "none", color: 'orange' }}><h5 style={{ overflowY: "hidden" }}><FontAwesomeIcon icon={faArrowLeft} /> Back to <FontAwesomeIcon icon={faHouse} /> </h5></Link>

    <div className='bg bg-success rounded mt-3' >
        <Row>

            <Col sm={12} md={12} >
                 <h3 style={{ overflowY: "hidden" }} className='text-center mt-4'>Sign Up To Your Account</h3>

                 
                
                <Form className='mt-3 w-100'>

                  <Form.Group className="mb-3 px-5 " controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Email ID" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />
                    </Form.Group>

                  
                    
                        <div className='px-5'>
                          <Button className=' mb-3 w-100' variant="primary" type="submit" onClick={handleRegister} >
                              Register
                          </Button>
                        
                        <p>Already a user? Click here to <Link to={'/login'}><span style={{ color: "red" }}>Login</span></Link></p>
                        </div>
                   
                </Form>

            </Col>
        </Row>

    </div>
</div>

</div>
<ToastContainer theme='colored' position='top-center' transition={Bounce} autoClose={2000} />
      
    </>
  )
}

export default Register
