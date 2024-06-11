import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCapsules } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>

            <div className='mt-5 w-100 p-3' style={{ backgroundColor: '#78C2AD'  }} >
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <h4 style={{overflowY:"hidden"}} className='text-light mt-2'><FontAwesomeIcon icon={faCapsules} /> MedHub</h4>
                        <h6 style={{overflowY:"hidden"}} className='mt-3'>Phone : 9870653535</h6>
                        <h6 style={{overflowY:"hidden"}}>Email : <a style={{ textDecoration: "none", color: "black" }} href="">medhubofficial@gmail.com</a></h6>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1">
                        <h4 style={{overflowY:"hidden"}} className='text-light mt-2'>Links</h4>
                        <h6 style={{overflowY:"hidden"}} className='mt-3'><Link style={{ textDecoration: "none", color: "black" }} to={'/'}>Home</Link></h6>
                        <h6 style={{overflowY:"hidden"}}><Link style={{ textDecoration: "none", color: "black" }} to={'/'}>Home</Link></h6>
                        <h6 style={{overflowY:"hidden"}}><Link style={{ textDecoration: "none", color: "black" }} to={'/'}>Home</Link></h6>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <h4 style={{overflowY:"hidden"}} className='text-light mt-2'>Guides</h4>
                        <Link style={{ color: "black", textDecoration: "none" }} to={'/https://react.dev/'}><h6 style={{overflowY:"hidden"}} className='mt-3'>React</h6></Link>
                        <Link style={{ color: "black", textDecoration: "none" }} to={'/https://react-bootstrap.netlify.app/'}><h6 style={{overflowY:"hidden"}}>React Bootstrap</h6></Link>
                        <Link style={{ color: "black", textDecoration: "none" }} to={'/https://bootswatch.com/'}><h6 style={{overflowY:"hidden"}}>React Bootswatch</h6></Link>
                    </div>
                    <div className="col-md-3">
                        <h4 style={{overflowY:"hidden"}} className='text-light mt-2'>Contact Us</h4>
                        <div className='d-flex mt-3'>
                            <input className=' form-control' type="text" placeholder='Enter Mail ID' />
                            <button className='btn btn-light ms-3 w-50'>Subscribe</button>
                        </div>
                        <div className='d-flex mt-4 mx-4 justify-content-between'>
                            <FontAwesomeIcon className='fa-2x text-light' icon={faInstagram} />
                            <FontAwesomeIcon className='fa-2x text-light' icon={faTwitter} />
                            <FontAwesomeIcon  className='fa-2x text-light' icon={faWhatsapp} />
                            <FontAwesomeIcon className='fa-2x text-light' icon={faFacebook} />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>


                <p className='text-center mt-4'>Copyright © 2024, @MedHub Application</p>

            </div>

        </>
    )
}

export default Footer
