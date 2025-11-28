import React from "react";
import {Button, Modal } from 'react-bootstrap';


function AddProductModal({show,  handleClose, cart, totalCartValue, deliveryCosts}) {

  return (
    <>
      <Modal
        show={show}
        handleClose={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order overview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="mb-3">You've ordered:</p>
           <ul>
            {cart.map(p => (
                <li key={p.productID}>{p.quantity} x {p.product_name}: {(p.product_price * p.quantity).toFixed(2)}€</li>
            ))}


           </ul>
           <p>Total: {(totalCartValue + deliveryCosts).toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}> Okay </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProductModal;

