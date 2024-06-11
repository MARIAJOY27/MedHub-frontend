import React from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Order() {
  return (
    <>
    <Header/>
      <div className='d-flex'>
        <Card className='mt-5 ms-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ko6rsu9xwrdb7hrmmszr.jpg"  height={'280px'} />
        <Card.Body>
          <Card.Title style={{overflowY:"hidden"}}>Dolo 650 mg</Card.Title>
          <Card.Text>
            Status :<span style={{color:"green"}}> In stock</span> <br />
            Expiry : Nov 2024 <br />
            Price : ₹430/box
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
  
      <Card className='mt-5 ms-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ko6rsu9xwrdb7hrmmszr.jpg"  height={'280px'} />
        <Card.Body>
          <Card.Title style={{overflowY:"hidden"}}>Dolo 650 mg</Card.Title>
          <Card.Text>
            Status :<span style={{color:"green"}}> In stock</span> <br />
            Expiry : Nov 2024<br />
            Price : ₹430/box
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
      </div>
    </>
  )
}

export default Order
