import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';


function ProductCard({ title, description, price, image, productID, onClickEdit}) {

  const imageURL =`${import.meta.env.VITE_API_SERVER_URL}/api/uploads/${image}` ;

  console.log('image prop:', image);
  const shortDesc = description.slice(0, 50);
  const shortDescWithDots = shortDesc.concat('...');


  return (
      <Card>
        <Link to={`/products/${productID}`} >
          <Card.Img variant="top" src={imageURL} />
        </Link>
      
        <Card.Body>
          <Card.Title>{title} - {price} €</Card.Title>
          <Card.Text>{shortDescWithDots} </Card.Text>
            {onClickEdit && (
              <Button onClick={() => onClickEdit(productID)}>Edit</Button>
            )}
            
        </Card.Body>

      </Card>
     
  );
}


export default ProductCard;