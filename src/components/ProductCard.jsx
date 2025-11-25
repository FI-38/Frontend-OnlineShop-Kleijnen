import React from "react";
import Card from 'react-bootstrap/Card';

function ProductCard({ title, description, price }) {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title} - €{price}</Card.Title>
        <Card.Text>{description} </Card.Text>
      </Card.Body>

    </Card>
  );
}


export default ProductCard;