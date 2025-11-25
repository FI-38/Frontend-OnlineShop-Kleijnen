import React from "react";
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import AddProductModal from './modals/AddProductModal';


function Products() {

  const [showAddProductModal, setShowAddProductModal] = useState(false);

   const handleAddProductModal = () => {
    setShowAddProductModal(true);
  }

  const confirmAddProduct = () => {
    // setIsLoggedIn(false);
    // localStorage.removeItem('token');
    // localStorage.removeItem('userID');
    // localStorage.removeItem('username');
    setShowAddProductModal(false);
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