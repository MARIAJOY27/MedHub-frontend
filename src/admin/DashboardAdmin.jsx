import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Update from '../components/Update';
import { Col, Row } from 'react-bootstrap';
import AddMed from '../components/AddMed';


function DashboardAdmin() {
  return (
    <>
    <HeaderAdmin/>
    
      <Row className='mx-3 my-5'>
       <h3 className='text-center'> <AddMed/></h3>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className='mt-5 ms-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ko6rsu9xwrdb7hrmmszr.jpg"  height={'280px'} />
        <Card.Body>
          <Card.Title style={{overflowY:"hidden"}}>Dolo 650 mg</Card.Title>
          <Card.Text>
            Stock :<span style={{color:"green"}}> 45 boxes</span> <br />
            Expiry : Nov 2024
          </Card.Text>
         <div className='d-flex '>
              <Update/>
              <Button className='ms-5' variant="primary">Delete</Button>
         </div>
        </Card.Body>
      </Card>
        </Col>
      </Row>

    </>
  )
}

export default DashboardAdmin
