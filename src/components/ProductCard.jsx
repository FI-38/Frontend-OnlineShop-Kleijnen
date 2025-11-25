import React from "react";
import Card from 'react-bootstrap/Card';

function ProductCard({ title, description, price, image}) {
  const imageURL = image 
  ? `${import.meta.env.VITE_API_SERVER_URL}/api/uploads/${image}` 
  : "placeholder.jpg"; // fallback if no image

  console.log('image prop:', image);
  
  return (
    <Card>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{title} - €{price}</Card.Title>
        <Card.Text>{description} </Card.Text>
      </Card.Body>

    </Card>
  );
}


export default ProductCard;