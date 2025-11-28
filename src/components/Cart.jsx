import { React, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap"; 
import { Link } from "react-router-dom";

import OrderOverviewModal from './modals/OrderOverviewModal';


function Cart({ cart, totalCartValue, deliveryCosts, decreaseQty, increaseQty, deleteProductFromCart }) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const completeOrder = () => {
    console.log('ordered wow');
    setShow(true);
  }

  
  return (
    <div>
      <h1 className='mb-3'>Cart</h1>

        <OrderOverviewModal
          show={show}
          handleClose={handleClose}
          setShow={setShow}
          backdrop="static"
          keyboard={false}
          cart={cart}
        />
      
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
                <Col md={3}>
                  <p>{p.product_name}</p>
                </Col>
                <Col md={1}>
                  <p>{(p.product_price * p.quantity).toFixed(2)}€</p>
                </Col>
                <Col md={2}>
                  <p>{p.quantity}</p>
                </Col>
                <Col md={1} className="d-flex align-items-center gap-1">
                    <Button size="sm" className="m-1" variant="secondary" style={{ width: '30px' }} onClick={() => decreaseQty(p.productID)}>-</Button>
                    <Button size="sm" className="m-1" variant="primary" style={{ width: '30px' }} onClick={() => increaseQty(p.productID)}>+</Button>
                    <span><Button variant="danger" size="sm"  style={{ width: '40px', fontSize: '10px' }} 
                    className="d-flex justify-content-center align-items-center" onClick={() => deleteProductFromCart(p.productID)}>Delete</Button></span>
                </Col>
              </Row>
            ))}
          </Col>

          <Col md={3} >
          <Row>
              <Col className='text-center mb-3'>
                <h3>Overview</h3>
                </Col>
            </Row>
            <Row>
              <Col xs={8} className='text-start'>Subtotal</Col>
              <Col xs={4} className='text-end'>{totalCartValue.toFixed(2)}</Col>
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
              <Col xs={4} className='text-end mb-3'>{(totalCartValue + deliveryCosts).toFixed(2)}</Col>
            </Row>
            <Row>
              <Col>
                <Button  variant="primary" onClick={() => completeOrder()}>Complete order</Button>
              </Col>
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