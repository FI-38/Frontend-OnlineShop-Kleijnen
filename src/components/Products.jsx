import React from "react";
import { Button, Row, Col } from 'react-bootstrap';
import {useState, useEffect } from 'react';

import AddProductModal from './modals/AddProductModal';
import EditProductModal from './modals/EditProductModal';
import ProductCard from './ProductCard';


function Products() {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const rolle = localStorage.getItem('rolle');
  console.log(rolle)

  // ---------- GET ALL PRODUCTS -----------
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

  useEffect(() => {
    getAllProducts(); // get all products on mount
  }, []);


  // ---------- ADD A PRODUCT -----------
  const confirmAddProduct = async (productData) => {
    setShowAddProductModal(false);
    console.log('brb hiding the modal');
    console.log('received from modal', productData);

    try { 
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/upload`, {
        method: 'POST',
        headers: {
      
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
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


  const cancelAddProduct = () => {
    setShowAddProductModal(false);
  }

  // ---------- EDIT PRODUCT -----------
   const handleEditClick = async (productID) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/products/${productID}`);
      const data = await res.json();

      setSelectedProduct(data[0]);   // send to modal
      setShowEditModal(true);
      getAllProducts();
    } catch (err) {
      console.log("Error loading product", err);
    }
  };

  const saveEditedProduct = async (editedProductData) => {
    if (!selectedProduct) return;

    try {
      await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/products/${selectedProduct.productID}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(editedProductData)
      });

      setShowEditModal(false);
      getAllProducts();

    } catch (error) {
      console.log("Error updating product", error);
    }
  };



// --------- DELETE PRODUCT

  const deleteProduct = async (productID) => {
    try {
      await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/products/${productID}`, {
        method: "DELETE"
      });

      setShowEditModal(false);
      getAllProducts();
    } catch (err) {
      console.log("Error deleting product", err);
    }
  };




  return (
     <>
      {rolle === 'admin' && (
        <div className='d-flex justify-content-end mb-3'>
          <Button onClick={() => setShowAddProductModal(true)}>Add a product</Button>
        </div>
      )}
    
      {rolle === 'admin' && (
        <AddProductModal
          show={showAddProductModal}
          onCancel={cancelAddProduct}
          onConfirm={confirmAddProduct}
        />
      )}
     
      {rolle === 'admin' && ( 
        <EditProductModal
          show={showEditModal}
          product={selectedProduct}
          onClose={() => setShowEditModal(false)}
          onSave={saveEditedProduct}
          onDelete={deleteProduct}
        />
        )}

      <Row >
        {allProducts.length === 0 ? <p>No products here yet.</p> : allProducts.map((item) => (
          <Col key={item.productID} md ={3}>
            <ProductCard  key={item.productID} 
            title={item.product_name} 
            description={item.product_description} 
            price={item.product_price}
            image={item.product_img_path}  
            productID={item.productID}
            onClickEdit={rolle === 'admin' ? handleEditClick : undefined} />
          </Col>
          ))}
      </Row>
     
      
 

    </>

  );
}

export default Products;


// mapping allProducts https://stackoverflow.com/questions/79255651/best-practices-on-react-for-rendering-lists