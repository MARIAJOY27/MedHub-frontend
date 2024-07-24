import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { serverUrl } from '../services/baseUrl';
import Buy from '../pages/Buy';



function MedCard({ medicine }) {

  const normalizeStock = (stock) => {
    return stock.replace(/\s+/g, '').toLowerCase();
};
    const normalizedStock = normalizeStock(medicine.stock);
    const stockColor = normalizedStock === 'instock' ? 'green' : 'red';
    const isBuyDisabled = stockColor === 'red';

  return (
    <>
      <Card className='mt-5 ms-5' style={{ width: '18rem' }}>
        <Card.Img className='p-3' variant="top" src={medicine ? `${serverUrl}/uploads/${medicine.medImage}` : "https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk="} height={'280px'} />
        <Card.Body className='p-3'>
          <Card.Title style={{ overflowY: "hidden" }}>{medicine.title}</Card.Title>
          <Card.Text>
            Medicine ID: {medicine.medId} <br />
            Status :<span style={{ color: stockColor }}>{medicine.stock}</span> <br />
            Expiry : {medicine.expiry} <br />
            Price : ₹{medicine.price} /box
          </Card.Text>
          <Buy medicine={medicine} disabled={isBuyDisabled}/>
        </Card.Body>
      </Card>



    </>
  )
}

export default MedCard


