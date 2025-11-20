import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LogoutModal({show, onConfirm, onCancel}) {
  return (
    <>
      <Modal show={show} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>You're about to log out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>Go back</Button>
          <Button variant="primary" onClick={onConfirm}>Yes, logout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutModal;