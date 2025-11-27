import React from "react";
import { Button } from "react-bootstrap"; 
import { Link } from "react-router-dom";

function Cart({ cart }) {
  return (
    <div>
      <h1>Cart</h1>
      
      {cart.length === 0 && (
        <>
          <p>You haven't added any products in your cart yet.</p>
           <Button as={Link} to="/products" variant="primary ">Start shopping</Button>
           </> )}

      {cart.map(p => (
        <p key={p.productID}>{p.product_name} - {p.product_price} x {p.quantity}</p>
      ))}
     
      
    </div>
  );
}

export default Cart;