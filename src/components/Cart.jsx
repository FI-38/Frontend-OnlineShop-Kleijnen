import React from "react";
import { Button } from "react-bootstrap"; 
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <h1>Cart</h1>
      <p>You haven't added any products in your cart yet.</p>
      <Button as={Link} to="/products" variant="primary ">Start shopping</Button>
      
    </div>
  );
}

export default Cart;