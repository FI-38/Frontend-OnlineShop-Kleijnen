import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function ProductCard({ title, description, price, image, productID}) {
  const imageURL = image 
  ? `${import.meta.env.VITE_API_SERVER_URL}/api/uploads/${image}` 
  : "placeholder.jpg"; // fallback if no image

  console.log('image prop:', image);
  const shortDesc = description.slice(0, 60);

  return (
    <Link to={`/products/${productID}`} >
      <Card>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{title} - €{price} {productID}</Card.Title>
          <Card.Text>{shortDesc} </Card.Text>
        </Card.Body>
      </Card>
     </Link>
  );
}


export default ProductCard;