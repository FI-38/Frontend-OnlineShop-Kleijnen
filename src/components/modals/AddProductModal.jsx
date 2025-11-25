import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddProductModal({show, onCancel, onConfirm}) {
  return (
    <>
      <Modal show={show} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add a product</Modal.Title>
        </Modal.Header>

        <Modal.Body>Are you sure you want to add a product?</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>Go back</Button>
          <Button variant="primary" onClick={onConfirm}>Yes, add product</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProductModal;