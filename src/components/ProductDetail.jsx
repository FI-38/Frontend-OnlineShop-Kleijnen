import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/products/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch product");
        } 
        const data = await res.json();
        setProduct(data[0]); 
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, []);

  if (!product) return <>Loading...</>;

  return (
    <Container>
        <Row>
            <Col md={6}><img className='img-fluid' src={`${import.meta.env.VITE_API_SERVER_URL}/api/uploads/${product.product_img_path}`} />  </Col>
            <Col md={{ span: 4, offset: 1 }}>
             <h2>{product.product_name}</h2>
            <p>{product.product_description}</p>
            <p>{product.product_price} €</p>
            </Col>
          
        </Row>
    </Container>
  );
}

export default ProductDetail;
