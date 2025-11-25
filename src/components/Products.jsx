import React from "react";
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import AddProductModal from './modals/AddProductModal';


function Products() {

  const [showAddProductModal, setShowAddProductModal] = useState(false);

   const handleAddProductModal = () => {
    setShowAddProductModal(true);
  }

  const confirmAddProduct = (productData) => {
    setShowAddProductModal(false);
    console.log('brb hiding the modal');
    console.log('received from modal', productData);
  }

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