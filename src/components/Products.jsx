import React from "react";
import { Button, Row, Col } from 'react-bootstrap';
import {useState, useEffect } from 'react';

import AddProductModal from './modals/AddProductModal';
import ProductCard from './ProductCard';

function Products() {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

   const handleAddProductModal = () => {
    setShowAddProductModal(true);
  }

  const getAllProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/products`, {
        method: 'GET',
      });
      const productList = await response.json();
      if (response.ok) {
        console.log('all prodcuts wow', productList)
        setAllProducts(productList);
      } 
    } catch (error) {
      console.log("Error when fetching all products", error);
    }
  };


  const confirmAddProduct = async (productData) => {
    setShowAddProductModal(false);
    console.log('brb hiding the modal');
    console.log('received from modal', productData);

    try { 
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/upload`, {
        method: 'POST',
        body: productData,
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("Product added!")
        getAllProducts(); // refetch list
      }
    } catch (error) {
      console.log("Error when adding your product", error);
    }
  };
  

  useEffect(() => {
    getAllProducts(); // get all on mount
  }, []);
  


  const cancelAddProduct = () => {
    setShowAddProductModal(false);
  }


  return (
     <>
      <Button onClick={handleAddProductModal}>I am a test modal</Button>

      <AddProductModal
        show={showAddProductModal}
        onCancel={cancelAddProduct}
        onConfirm={confirmAddProduct}
      />

      <Row>
        {allProducts.map((item) => (
          <Col key={item.productID} >
            <ProductCard key={item.productID} 
            title={item.product_name} 
            description={item.product_description} 
            price={item.product_price}
            />
          </Col>
          ))}
      </Row>
     
      


    </>

  );
}

export default Products;


// mapping allProducts https://stackoverflow.com/questions/79255651/best-practices-on-react-for-rendering-lists