import React from "react";
import { useState } from 'react';
import {Button, Modal } from 'react-bootstrap';


function AddProductModal({show, handleShow, handleClose}) {

  return (
    <>
      <Modal
        show={show}
        handleClose={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order overview</Modal.Title>
        </Modal.Header>
        <Modal.Body>I will not close if you click outside me. Do not even try to press escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}> Okay </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProductModal;

