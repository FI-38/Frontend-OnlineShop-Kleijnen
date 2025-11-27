import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap"; 
import { Link } from "react-router-dom";

function Cart({ cart, totalCartValue, deliveryCosts }) {
  

  return (
    <div>
      <h1 className='mb-3'>Cart</h1>
      
      {cart.length === 0 && (
        <>
          <p>You haven't added any products in your cart yet.</p>
           <Button as={Link} to="/products" variant="primary ">Start shopping</Button>
           </> )}

      {cart.length > 0 && ( 
      <Container>
        <Row>
          <Col md={9} >
            {cart.map(p => (
              <Row key={p.productID} className="m-2">
                <Col md={2}>
                  <img
                    className='img-fluid'
                    src={`${import.meta.env.VITE_API_SERVER_URL}/api/uploads/${p.product_img_path}`}
                  />
                </Col>
                <Col md={4}>
                  <p>{p.product_name}</p>
                </Col>
                <Col md={1}>
                  <p>{ p.quantity} </p>
                </Col>
                <Col md={1}>
                  <p>{p.product_price * p.quantity}€</p>
                </Col>
                
                

              </Row>
            ))}
          </Col>

          <Col md={3} >
            <Row>
              <Col xs={8} className='text-start'>Subtotal</Col>
              <Col xs={4} className='text-end'>101.9</Col>
            </Row>
            <Row>
              <Col xs={8} className='text-start'>Delivery costs</Col>
              <Col xs={4} className='text-end'> {deliveryCosts}</Col>
            </Row>
            <Row>
              <Col xs={12}>
                <hr className="hr" />
              </Col>
            </Row>
            <Row>
              <Col xs={8} className='text-start'>Total</Col>
              <Col xs={4} className='text-end'>{totalCartValue}</Col>
            </Row>

          </Col>



          </Row>
        </Container>
        )}
   
      
    </div>
  );
}

export default Cart;



// https://react.dev/learn/rendering-lists