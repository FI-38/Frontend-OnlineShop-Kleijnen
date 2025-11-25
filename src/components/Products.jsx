import React from "react";
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import {useState } from 'react';

import AddProductModal from './modals/AddProductModal';


function Products() {

  const [showAddProductModal, setShowAddProductModal] = useState(false);

   const handleAddProductModal = () => {
    setShowAddProductModal(true);
  }

  const confirmAddProduct = async (productData) => {
    setShowAddProductModal(false);
    console.log('brb hiding the modal');
    console.log('received from modal', productData);

    try { // WORK ON UPLOAD.JS in backend
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/upload`, {
        method: 'POST',
        body: productData,
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("Product added!")
        // TOODO : refetch all products on page
      }
    } catch (error) {
      console.log("Error when adding your product", error);
    }
 
  }; // EDIT ABOVe

    
  

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
    </>

  );
}

export default Products;